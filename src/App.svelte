<script>
  import { onMount } from 'svelte';

  let map;
  let weatherData = {};
  let isLoading = false;
  let errorMessage = '';
  let searchInput = '';
  let currentAddress = '';
  let currentMarker = null;
  let searchResults = []; // 검색 결과를 저장할 배열로 수정

  async function fetchWeatherData(lat, lon) {
    const API_KEY = '1e657dc0d8ee9f105075aab7719defa8';
    const units = 'metric';

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
    isLoading = true;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        weatherData = {
          address: currentAddress,
          temperature: data.main.temp + '°C',
          humidity: data.main.humidity + '%',
          windSpeed: data.wind.speed + ' m/s',
          clouds: data.clouds.all + '%',
        };
      } else {
        console.error('API 호출에 실패했습니다.', data.message);
        errorMessage = 'API 호출에 실패했습니다: ' + data.message;
      }
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
        anchor: new naver.maps.Point(15, 43), // 이미지의 중심점 설정. 여기서는 이미지 크기의 절반 값을 사용하여 중앙 아래 지점이 위치 지정점이 되도록 함
      },
    });
  }

  // 검색 결과 중 하나를 선택했을 때 실행될 함수
  function selectAddress(address) {
    currentAddress = address.label;
    map.setCenter(new naver.maps.LatLng(address.y, address.x));
    addMarker(address.y, address.x);
    fetchWeatherData(address.y, address.x);
    searchResults = []; // 검색 결과 초기화
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
  {:else if weatherData.temperature && weatherData.humidity}
    <div>
      <h2>날씨 정보</h2>
      <p>주소: {weatherData.address}</p>
      <p>온도: {weatherData.temperature}</p>
      <p>습도: {weatherData.humidity}</p>
      <p>풍속: {weatherData.windSpeed}</p>
      <p>구름양: {weatherData.clouds}</p>
    </div>
  {/if}
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
</style>
