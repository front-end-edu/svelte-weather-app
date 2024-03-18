var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(){return l(" ")}function p(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.data!==n&&(t.data=n)}function h(t,n){t.value=null==n?"":n}function g(t,n,e,o){null==e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let y;function $(t){y=t}function w(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const v=[],b=[];let x=[];const _=[],E=Promise.resolve();let k=!1;function S(t){x.push(t)}const L=new Set;let C=0;function A(){if(0!==C)return;const t=y;do{try{for(;C<v.length;){const t=v[C];C++,$(t),P(t.$$)}}catch(t){throw v.length=0,C=0,t}for($(null),v.length=0,C=0;b.length;)b.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];L.has(n)||(L.add(n),n())}x.length=0}while(v.length);for(;_.length;)_.pop()();k=!1,L.clear(),$(t)}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const j=new Set;function O(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];x.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),x=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function M(t,n){-1===t.$$.dirty[0]&&(v.push(t),k||(k=!0,E.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function N(c,a,i,s,l,d,p,f=[-1]){const m=y;$(c);const h=c.$$={fragment:null,ctx:[],props:d,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(m?m.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:a.target||m.$$.root};p&&p(h.root);let g=!1;if(h.ctx=i?i(c,a.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return h.ctx&&l(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),g&&M(c,t)),n})):[],h.update(),g=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();a.intro&&((w=c.$$.fragment)&&w.i&&(j.delete(w),w.i(v))),function(t,e,c,a){const{fragment:i,after_update:u}=t.$$;i&&i.m(e,c),a||S((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(S)}(c,a.target,a.anchor,a.customElement),A()}var w,v;$(m)}class z{$destroy(){O(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(t,n,e){const o=t.slice();return o[14]=n[e],o}function R(t){let n,e=t[4],o=[];for(let n=0;n<e.length;n+=1)o[n]=q(I(t,e,n));return{c(){n=s("ul");for(let t=0;t<o.length;t+=1)o[t].c()},m(t,e){i(t,n,e);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(n,null)},p(t,r){if(80&r){let c;for(e=t[4],c=0;c<e.length;c+=1){const a=I(t,e,c);o[c]?o[c].p(a,r):(o[c]=q(a),o[c].c(),o[c].m(n,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=e.length}},d(t){t&&u(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(o,t)}}}function q(t){let n,e,o,r,c=t[14].label+"";function d(){return t[8](t[14])}return{c(){n=s("li"),e=l(c)},m(t,c){i(t,n,c),a(n,e),o||(r=p(n,"click",d),o=!0)},p(n,o){t=n,16&o&&c!==(c=t[14].label+"")&&m(e,c)},d(t){t&&u(n),o=!1,r()}}}function B(t){let n,e,o,r,c,p,f,h,g,y,$,w,v,b,x,_,E,k,S,L,C,A,P=t[0].address+"",j=t[0].temperature+"",O=t[0].humidity+"",M=t[0].windSpeed+"",N=t[0].clouds+"";return{c(){n=s("div"),e=s("h2"),e.textContent="날씨 정보",o=d(),r=s("p"),c=l("주소: "),p=l(P),f=d(),h=s("p"),g=l("온도: "),y=l(j),$=d(),w=s("p"),v=l("습도: "),b=l(O),x=d(),_=s("p"),E=l("풍속: "),k=l(M),S=d(),L=s("p"),C=l("구름양: "),A=l(N)},m(t,u){i(t,n,u),a(n,e),a(n,o),a(n,r),a(r,c),a(r,p),a(n,f),a(n,h),a(h,g),a(h,y),a(n,$),a(n,w),a(w,v),a(w,b),a(n,x),a(n,_),a(_,E),a(_,k),a(n,S),a(n,L),a(L,C),a(L,A)},p(t,n){1&n&&P!==(P=t[0].address+"")&&m(p,P),1&n&&j!==(j=t[0].temperature+"")&&m(y,j),1&n&&O!==(O=t[0].humidity+"")&&m(b,O),1&n&&M!==(M=t[0].windSpeed+"")&&m(k,M),1&n&&N!==(N=t[0].clouds+"")&&m(A,N)},d(t){t&&u(n)}}}function F(t){let n,e;return{c(){n=s("p"),e=l(t[2])},m(t,o){i(t,n,o),a(n,e)},p(t,n){4&n&&m(e,t[2])},d(t){t&&u(n)}}}function G(n){let e;return{c(){e=s("p"),e.textContent="날씨 정보를 불러오는 중...."},m(t,n){i(t,e,n)},p:t,d(t){t&&u(e)}}}function K(n){let e,r,c,l,m,y,$,w,v,b,x=n[4].length&&R(n);function _(t,n){return t[1]?G:t[2]?F:t[0].temperature&&t[0].humidity?B:void 0}let E=_(n),k=E&&E(n);return{c(){e=s("main"),r=s("div"),c=d(),l=s("input"),m=d(),y=s("button"),y.textContent="검색",$=d(),x&&x.c(),w=d(),k&&k.c(),f(r,"id","map"),g(r,"width","100%"),g(r,"height","400px"),f(r,"class","svelte-1ou2gvd"),f(l,"type","text"),f(l,"placeholder","주소 검색..."),f(e,"class","svelte-1ou2gvd")},m(t,o){i(t,e,o),a(e,r),a(e,c),a(e,l),h(l,n[3]),a(e,m),a(e,y),a(e,$),x&&x.m(e,null),a(e,w),k&&k.m(e,null),v||(b=[p(l,"input",n[7]),p(y,"click",n[5])],v=!0)},p(t,[n]){8&n&&l.value!==t[3]&&h(l,t[3]),t[4].length?x?x.p(t,n):(x=R(t),x.c(),x.m(e,w)):x&&(x.d(1),x=null),E===(E=_(t))&&k?k.p(t,n):(k&&k.d(1),k=E&&E(t),k&&(k.c(),k.m(e,null)))},i:t,o:t,d(t){t&&u(e),x&&x.d(),k&&k.d(),v=!1,o(b)}}}function T(t,n,e){let o,r={},c=!1,a="",i="",u="",s=null,l=[];async function d(t,n){const o=`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${n}&units=metric&appid=1e657dc0d8ee9f105075aab7719defa8`;e(1,c=!0);try{const t=await fetch(o),n=await t.json();200===n.cod?e(0,r={address:u,temperature:n.main.temp+"°C",humidity:n.main.humidity+"%",windSpeed:n.wind.speed+" m/s",clouds:n.clouds.all+"%"}):(console.error("API 호출에 실패했습니다.",n.message),e(2,a="API 호출에 실패했습니다: "+n.message))}catch(t){console.error("날씨 정보를 불러오는 중 오류가 발생했습니다:",t),e(2,a="날씨 정보를 불러오는 중 오류가 발생했습니다: "+t.message)}finally{e(1,c=!1)}}function p(t,n){s&&s.setMap(null);s=new naver.maps.Marker({position:new naver.maps.LatLng(t,n),map:o,icon:{content:'<img src="./marker.png" alt="Marker" style="width: 30px; height: 87.7px;">',anchor:new naver.maps.Point(15,43)}})}function f(t){u=t.label,o.setCenter(new naver.maps.LatLng(t.y,t.x)),p(t.y,t.x),d(t.y,t.x),e(4,l=[])}w((async()=>{await async function(){return new Promise(((t,n)=>{const e=document.createElement("script");e.src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=tbl2cislwz&submodules=geocoder",e.async=!0,e.onload=()=>t(),e.onerror=()=>n(new Error("네이버 지도 로드 실패")),document.head.appendChild(e)}))}();const t={center:new naver.maps.LatLng(37.5665,126.978),zoom:10};o=new naver.maps.Map("map",t),naver.maps.Event.addListener(o,"click",(async function(t){const n=t.coord.lat(),e=t.coord.lng(),o=window.naver.maps;await o.Service.reverseGeocode({location:new o.LatLng(n,e)},(function(t,r){if(t!==o.Service.Status.OK)return void console.log("Something went wrong!",t);const c=r.result;u=c.items[0].address,p(n,e),d(n,e)}))}))}));return[r,c,a,i,l,async function(){if(!i.trim())return;e(1,c=!0),e(2,a=""),e(4,l=[]);const t=window.naver.maps;try{const n=await new Promise(((n,e)=>{t.Service.geocode({query:i},(function(o,r){o===t.Service.Status.ERROR?e(new Error("검색 결과를 찾을 수 없습니다.")):n(r)}))}));e(4,l=n.v2.addresses.slice(0,10).map((t=>({label:t.roadAddress||t.jibunAddress,x:t.x,y:t.y}))))}catch(t){e(2,a=t.message)}finally{e(1,c=!1)}},f,function(){i=this.value,e(3,i)},t=>f(t)]}return new class extends z{constructor(t){super(),N(this,t,T,K,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
