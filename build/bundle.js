var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function s(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){n=""+n,t.data!==n&&(t.data=n)}function g(t,n){t.value=null==n?"":n}function $(t,n,e,o){null==e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let y;function v(t){y=t}function w(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const b=[],x=[];let _=[];const E=[],k=Promise.resolve();let S=!1;function L(t){_.push(t)}const C=new Set;let A=0;function P(){if(0!==A)return;const t=y;do{try{for(;A<b.length;){const t=b[A];A++,v(t),j(t.$$)}}catch(t){throw b.length=0,A=0,t}for(v(null),b.length=0,A=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];C.has(n)||(C.add(n),n())}_.length=0}while(b.length);for(;E.length;)E.pop()();S=!1,C.clear(),v(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const O=new Set;function M(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];_.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),_=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function N(t,n){-1===t.$$.dirty[0]&&(b.push(t),S||(S=!0,k.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function z(c,a,i,u,s,d,f,p=[-1]){const m=y;v(c);const h=c.$$={fragment:null,ctx:[],props:d,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(m?m.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:a.target||m.$$.root};f&&f(h.root);let g=!1;if(h.ctx=i?i(c,a.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),g&&N(c,t)),n})):[],h.update(),g=!0,o(h.before_update),h.fragment=!!u&&u(h.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();a.intro&&(($=c.$$.fragment)&&$.i&&(O.delete($),$.i(w))),function(t,e,c,a){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,c),a||L((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(L)}(c,a.target,a.anchor,a.customElement),P()}var $,w;v(m)}class I{$destroy(){M(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(t,n,e){const o=t.slice();return o[14]=n[e],o}function T(t,n,e){const o=t.slice();return o[17]=n[e],o}function q(t){let n,e=t[5],o=[];for(let n=0;n<e.length;n+=1)o[n]=F(T(t,e,n));return{c(){n=s("ul");for(let t=0;t<o.length;t+=1)o[t].c()},m(t,e){i(t,n,e);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(n,null)},p(t,r){if(160&r){let c;for(e=t[5],c=0;c<e.length;c+=1){const a=T(t,e,c);o[c]?o[c].p(a,r):(o[c]=F(a),o[c].c(),o[c].m(n,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=e.length}},d(t){t&&l(n),u(o,t)}}}function F(t){let n,e,o,r,c=t[17].label+"";function u(){return t[9](t[17])}return{c(){n=s("li"),e=d(c)},m(t,c){i(t,n,c),a(n,e),o||(r=p(n,"click",u),o=!0)},p(n,o){t=n,32&o&&c!==(c=t[17].label+"")&&h(e,c)},d(t){t&&l(n),o=!1,r()}}}function B(t){let n,e,o,r=t[0],c=[];for(let n=0;n<r.length;n+=1)c[n]=K(R(t,r,n));return{c(){n=s("div"),e=s("h2"),e.textContent="날씨 정보",o=f();for(let t=0;t<c.length;t+=1)c[t].c()},m(t,r){i(t,n,r),a(n,e),a(n,o);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(n,null)},p(t,e){if(17&e){let o;for(r=t[0],o=0;o<r.length;o+=1){const a=R(t,r,o);c[o]?c[o].p(a,e):(c[o]=K(a),c[o].c(),c[o].m(n,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=r.length}},d(t){t&&l(n),u(c,t)}}}function D(t){let n,e;return{c(){n=s("p"),e=d(t[2])},m(t,o){i(t,n,o),a(n,e)},p(t,n){4&n&&h(e,t[2])},d(t){t&&l(n)}}}function G(n){let e;return{c(){e=s("p"),e.textContent="날씨 정보를 불러오는 중...."},m(t,n){i(t,e,n)},p:t,d(t){t&&l(e)}}}function K(t){let n,e,o,r,c,u,p,m,g,$,y,v,w,b,x,_,E,k,S,L,C,A,P,j,O,M=t[14].date+"",N=t[14].temperature+"",z=t[14].humidity+"",I=t[14].windSpeed+"",R=t[14].clouds+"";return{c(){n=s("div"),e=s("p"),o=d("날짜: "),r=d(M),c=f(),u=s("p"),p=d("주소: "),m=d(t[4]),g=f(),$=s("p"),y=d("온도: "),v=d(N),w=f(),b=s("p"),x=d("습도: "),_=d(z),E=f(),k=s("p"),S=d("풍속: "),L=d(I),C=f(),A=s("p"),P=d("구름양: "),j=d(R),O=f()},m(t,l){i(t,n,l),a(n,e),a(e,o),a(e,r),a(n,c),a(n,u),a(u,p),a(u,m),a(n,g),a(n,$),a($,y),a($,v),a(n,w),a(n,b),a(b,x),a(b,_),a(n,E),a(n,k),a(k,S),a(k,L),a(n,C),a(n,A),a(A,P),a(A,j),a(n,O)},p(t,n){1&n&&M!==(M=t[14].date+"")&&h(r,M),16&n&&h(m,t[4]),1&n&&N!==(N=t[14].temperature+"")&&h(v,N),1&n&&z!==(z=t[14].humidity+"")&&h(_,z),1&n&&I!==(I=t[14].windSpeed+"")&&h(L,I),1&n&&R!==(R=t[14].clouds+"")&&h(j,R)},d(t){t&&l(n)}}}function W(n){let e,r,c,u,d,h,y,v,w,b,x=n[5].length&&q(n);function _(t,n){return t[1]?G:t[2]?D:t[0].length>0?B:void 0}let E=_(n),k=E&&E(n);return{c(){e=s("main"),r=s("div"),c=f(),u=s("input"),d=f(),h=s("button"),h.textContent="검색",y=f(),x&&x.c(),v=f(),k&&k.c(),m(r,"id","map"),$(r,"width","100%"),$(r,"height","400px"),m(r,"class","svelte-1ou2gvd"),m(u,"type","text"),m(u,"placeholder","주소 검색..."),m(e,"class","svelte-1ou2gvd")},m(t,o){i(t,e,o),a(e,r),a(e,c),a(e,u),g(u,n[3]),a(e,d),a(e,h),a(e,y),x&&x.m(e,null),a(e,v),k&&k.m(e,null),w||(b=[p(u,"input",n[8]),p(h,"click",n[6])],w=!0)},p(t,[n]){8&n&&u.value!==t[3]&&g(u,t[3]),t[5].length?x?x.p(t,n):(x=q(t),x.c(),x.m(e,v)):x&&(x.d(1),x=null),E===(E=_(t))&&k?k.p(t,n):(k&&k.d(1),k=E&&E(t),k&&(k.c(),k.m(e,null)))},i:t,o:t,d(t){t&&l(e),x&&x.d(),k&&k.d(),w=!1,o(b)}}}function H(t,n,e){let o,r=[],c=!1,a="",i="",l="",u=null,s=[];async function d(t,n){const o=`https://api.openweathermap.org/data/2.5/forecast?lat=${t}&lon=${n}&units=metric&appid=1e657dc0d8ee9f105075aab7719defa8`;e(1,c=!0);try{const t=await fetch(o);if(t.ok){const n=await t.json();e(0,r=n.list.map((t=>({date:new Date(1e3*t.dt).toLocaleString(),temperature:t.main.temp+"°C",humidity:t.main.humidity+"%",windSpeed:t.wind.speed+" m/s",clouds:t.clouds.all+"%"}))))}else console.error("API 호출에 실패했습니다.",t.statusText),e(2,a="API 호출에 실패했습니다: "+t.statusText)}catch(t){console.error("날씨 정보를 불러오는 중 오류가 발생했습니다:",t),e(2,a="날씨 정보를 불러오는 중 오류가 발생했습니다: "+t.message)}finally{e(1,c=!1)}}function f(t,n){u&&u.setMap(null);u=new naver.maps.Marker({position:new naver.maps.LatLng(t,n),map:o,icon:{content:'<img src="./marker.png" alt="Marker" style="width: 30px; height: 87.7px;">',anchor:new naver.maps.Point(15,43.85)}}),fetchWeatherForecast(t,n)}function p(t){e(4,l=t.label),o.setCenter(new naver.maps.LatLng(t.y,t.x)),f(t.y,t.x),d(t.y,t.x),e(5,s=[])}w((async()=>{await async function(){return new Promise(((t,n)=>{const e=document.createElement("script");e.src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=tbl2cislwz&submodules=geocoder",e.async=!0,e.onload=()=>t(),e.onerror=()=>n(new Error("네이버 지도 로드 실패")),document.head.appendChild(e)}))}();const t={center:new naver.maps.LatLng(37.5665,126.978),zoom:10};o=new naver.maps.Map("map",t),naver.maps.Event.addListener(o,"click",(async function(t){const n=t.coord.lat(),o=t.coord.lng(),r=window.naver.maps;await r.Service.reverseGeocode({location:new r.LatLng(n,o)},(function(t,c){if(t!==r.Service.Status.OK)return void console.log("Something went wrong!",t);const a=c.result;e(4,l=a.items[0].address),f(n,o),d(n,o)}))}))}));return[r,c,a,i,l,s,async function(){if(!i.trim())return;e(1,c=!0),e(2,a=""),e(5,s=[]);const t=window.naver.maps;try{const n=await new Promise(((n,e)=>{t.Service.geocode({query:i},(function(o,r){o===t.Service.Status.ERROR?e(new Error("검색 결과를 찾을 수 없습니다.")):n(r)}))}));e(5,s=n.v2.addresses.slice(0,10).map((t=>({label:t.roadAddress||t.jibunAddress,x:t.x,y:t.y}))))}catch(t){e(2,a=t.message)}finally{e(1,c=!1)}},p,function(){i=this.value,e(3,i)},t=>p(t)]}return new class extends I{constructor(t){super(),z(this,t,H,W,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
