<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let map;
  let weatherData = [];
  let isLoading = false;
  let errorMessage = '';
  let searchInput = '';
  let currentAddress = '';
  let currentMarker = null;
  let searchResults = []; // 검색 결과를 저장할 배열로 수정
  let weatherChart; // 차트 인스턴스를 저장할 변수

  async function fetchWeatherData(lat, lon) {
    const API_KEY = '1e657dc0d8ee9f105075aab7719defa8';
    const units = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;

    isLoading = true;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('API 호출에 실패했습니다: ' + response.statusText);

      const data = await response.json();
      weatherData = data.list.map((forecast) => ({
        date: new Date(forecast.dt * 1000).toLocaleString(),
        temperature: forecast.main.temp,
        humidity: forecast.main.humidity,
        windSpeed: forecast.wind.speed,
        clouds: forecast.clouds.all,
      }));
      updateWeatherChart();
    } catch (error) {
      console.error('날씨 정보를 불러오는 중 오류가 발생했습니다:', error);
      errorMessage = '날씨 정보를 불러오는 중 오류가 발생했습니다: ' + error.message;
    } finally {
      isLoading = false;
    }
  }

  async function loadNaverMapsAPI() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=tbl2cislwz&submodules=geocoder';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('네이버 지도 로드 실패'));
      document.head.appendChild(script);
    });
  }

  onMount(async () => {
    await loadNaverMapsAPI();

    const mapOptions = {
      center: new naver.maps.LatLng(37.5665, 126.978),
      zoom: 10,
    };
    map = new naver.maps.Map('map', mapOptions);

    naver.maps.Event.addListener(map, 'click', async function (e) {
      const lat = e.coord.lat();
      const lon = e.coord.lng();

      // 역지오코딩을 통해 주소 정보를 가져옵니다.
      const navermaps = window.naver.maps;
      await navermaps.Service.reverseGeocode(
        {
          location: new navermaps.LatLng(lat, lon),
        },
        function (status, response) {
          if (status !== navermaps.Service.Status.OK) {
            console.log('Something went wrong!', status);
            return;
          }

          const result = response.result;
          currentAddress = result.items[0].address; // 첫 번째 결과의 주소를 사용합니다.
          addMarker(lat, lon);
          fetchWeatherData(lat, lon);
        }
      );
    });
  });

  // 주소 검색 기능을 수정하여 검색 결과를 searchResults에 저장
  async function searchAddress() {
    if (!searchInput.trim()) return;
    isLoading = true;
    errorMessage = '';
    searchResults = []; // 검색 전 결과 초기화

    const navermaps = window.naver.maps;

    try {
      const response = await new Promise((resolve, reject) => {
        navermaps.Service.geocode({ query: searchInput }, function (status, response) {
          if (status === navermaps.Service.Status.ERROR) {
            reject(new Error('검색 결과를 찾을 수 없습니다.'));
          } else {
            resolve(response);
          }
        });
      });

      // 검색 결과 중 최대 10개까지만 searchResults 배열에 저장
      searchResults = response.v2.addresses.slice(0, 10).map((address) => ({
        label: address.roadAddress || address.jibunAddress, // 도로명 주소 또는 지번 주소
        x: address.x,
        y: address.y,
      }));
    } catch (error) {
      errorMessage = error.message;
    } finally {
      isLoading = false;
    }
  }

  // 마커 추가 기능
  function addMarker(lat, lon) {
    // 새 마커를 추가하기 전에 현재 마커가 있다면 지웁니다.
    if (currentMarker) {
      currentMarker.setMap(null); // 현재 마커를 지도에서 제거
    }

    // 사용자 지정 마커 이미지 URL
    const markerImageUrl = './marker.png'; // 여기서 이미지 URL을 자신의 것으로 교체하세요.

    // 새로운 마커 생성
    currentMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lon),
      map: map,
      icon: {
        content: `<img src="${markerImageUrl}" alt="Marker" style="width: 30px; height: 87.7px;">`, // 마커 이미지와 크기 설정
        anchor: new naver.maps.Point(15, 43.85), // 이미지의 중심점 설정. 여기서는 이미지 크기의 절반 값을 사용하여 중앙 아래 지점이 위치 지정점이 되도록 함
      },
    });

    // 마커를 추가한 위치의 날씨 데이터를 가져옵니다.
    fetchWeatherData(lat, lon); // 함수 이름을 올바르게 수정
  }

  // 검색 결과 중 하나를 선택했을 때 실행될 함수
  function selectAddress(address) {
    currentAddress = address.label;
    map.setCenter(new naver.maps.LatLng(address.y, address.x));
    addMarker(address.y, address.x);
    fetchWeatherData(address.y, address.x);
    searchResults = []; // 검색 결과 초기화
  }

  function updateWeatherChart() {
    const ctx = document.getElementById('weatherChart').getContext('2d');
    const dates = weatherData.map((data) => data.date.slice(0, 10)); // 날짜 데이터
    const temperatures = weatherData.map((data) => data.temperature); // 온도 데이터
    const humidities = weatherData.map((data) => data.humidity); // 습도 데이터
    const windSpeeds = weatherData.map((data) => data.windSpeed); // 풍속 데이터
    const clouds = weatherData.map((data) => data.clouds); // 구름양 데이터

    if (weatherChart) {
      weatherChart.data.labels = dates;
      weatherChart.data.datasets[0].data = temperatures;
      weatherChart.data.datasets[1].data = humidities;
      weatherChart.data.datasets[2].data = windSpeeds;
      weatherChart.data.datasets[3].data = clouds;
      weatherChart.update();
    } else {
      weatherChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              label: '온도 (°C)',
              data: temperatures,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              yAxisID: 'y',
            },
            {
              label: '습도 (%)',
              data: humidities,
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              yAxisID: 'y1',
            },
            {
              label: '풍속 (m/s)',
              data: windSpeeds,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              yAxisID: 'y2',
            },
            {
              label: '구름양 (%)',
              data: clouds,
              borderColor: 'rgb(153, 102, 255)',
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              yAxisID: 'y3',
            },
          ],
        },
        options: {
          scales: {
            y: {
              type: 'linear',
              display: true,
              position: 'left',
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              grid: {
                drawOnChartArea: false, // 습도의 격자를 오른쪽에 표시하지 않음
              },
            },
            y2: {
              type: 'linear',
              display: false, // 풍속의 Y축을 차트에 표시하지 않음
            },
            y3: {
              type: 'linear',
              display: false, // 구름양의 Y축을 차트에 표시하지 않음
            },
          },
        },
      });
    }
  }
</script>

<main>
  <div id="map" style="width: 100%; height: 400px;"></div>
  <input type="text" bind:value={searchInput} placeholder="주소 검색..." />
  <button on:click={searchAddress}>검색</button>
  {#if searchResults.length}
    <ul>
      {#each searchResults as result}
        <li on:click={() => selectAddress(result)}>{result.label}</li>
      {/each}
    </ul>
  {/if}
  {#if isLoading}
    <p>날씨 정보를 불러오는 중....</p>
  {:else if errorMessage}
    <p>{errorMessage}</p>
  {:else if weatherData.length > 0}
    <div>
      <h2>날씨 정보</h2>
      <!-- 당일 날씨 정보 표시 -->
      <div>
        <p><strong>당일 날씨:</strong></p>
        <p>날짜: {weatherData[0].date}</p>
        <p>주소: {currentAddress}</p>
        <p>온도: {weatherData[0].temperature}</p>
        <p>습도: {weatherData[0].humidity}</p>
        <p>풍속: {weatherData[0].windSpeed}</p>
        <p>구름양: {weatherData[0].clouds}</p>
      </div>
      <!-- 이후 날씨 정보 표 형태로 표시 -->
      {#if weatherData.length > 1}
        <table>
          <thead>
            <tr>
              <th>날짜</th>
              <th>온도</th>
              <th>습도</th>
              <th>풍속</th>
              <th>구름양</th>
            </tr>
          </thead>
          <tbody>
            {#each weatherData.slice(1) as data, index}
              <tr>
                <td>{data.date}</td>
                <td>{data.temperature}</td>
                <td>{data.humidity}</td>
                <td>{data.windSpeed}</td>
                <td>{data.clouds}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
    </div>
  {/if}
  <div>
    <canvas id="weatherChart"></canvas>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  #map {
    height: 400px;
  }

  table {
    font-size: 12px;
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    text-align: left;
    padding: 6px 4px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
</style>
