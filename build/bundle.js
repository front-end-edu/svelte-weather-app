var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(){return l(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.data!==e&&(t.data=e)}function h(t,e){t.value=null==e?"":e}function g(t,e,n,o){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let y;function $(t){y=t}function w(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const v=[],b=[];let x=[];const _=[],E=Promise.resolve();let k=!1;function S(t){x.push(t)}const L=new Set;let C=0;function A(){if(0!==C)return;const t=y;do{try{for(;C<v.length;){const t=v[C];C++,$(t),P(t.$$)}}catch(t){throw v.length=0,C=0,t}for($(null),v.length=0,C=0;b.length;)b.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];L.has(e)||(L.add(e),e())}x.length=0}while(v.length);for(;_.length;)_.pop()();k=!1,L.clear(),$(t)}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const j=new Set;function O(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];x.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),x=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(v.push(t),k||(k=!0,E.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(c,a,i,u,l,d,p,f=[-1]){const m=y;$(c);const h=c.$$={fragment:null,ctx:[],props:d,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(m?m.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:a.target||m.$$.root};p&&p(h.root);let g=!1;if(h.ctx=i?i(c,a.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&l(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),g&&M(c,t)),e})):[],h.update(),g=!0,o(h.before_update),h.fragment=!!u&&u(h.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);h.fragment&&h.fragment.l(t),t.forEach(s)}else h.fragment&&h.fragment.c();a.intro&&((w=c.$$.fragment)&&w.i&&(j.delete(w),w.i(v))),function(t,n,c,a){const{fragment:i,after_update:s}=t.$$;i&&i.m(n,c),a||S((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(S)}(c,a.target,a.anchor,a.customElement),A()}var w,v;$(m)}class z{$destroy(){O(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(t,e,n){const o=t.slice();return o[14]=e[n],o}function R(t){let e,n=t[4],o=[];for(let e=0;e<n.length;e+=1)o[e]=q(I(t,n,e));return{c(){e=u("ul");for(let t=0;t<o.length;t+=1)o[t].c()},m(t,n){i(t,e,n);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(e,null)},p(t,r){if(80&r){let c;for(n=t[4],c=0;c<n.length;c+=1){const a=I(t,n,c);o[c]?o[c].p(a,r):(o[c]=q(a),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){t&&s(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}function q(t){let e,n,o,r,c=t[14].label+"";function d(){return t[8](t[14])}return{c(){e=u("li"),n=l(c)},m(t,c){i(t,e,c),a(e,n),o||(r=p(e,"click",d),o=!0)},p(e,o){t=e,16&o&&c!==(c=t[14].label+"")&&m(n,c)},d(t){t&&s(e),o=!1,r()}}}function B(t){let e,n,o,r,c,p,f,h,g,y,$,w,v,b,x,_,E,k,S,L,C,A,P=t[0].address+"",j=t[0].temperature+"",O=t[0].humidity+"",M=t[0].windSpeed+"",N=t[0].clouds+"";return{c(){e=u("div"),n=u("h2"),n.textContent="날씨 정보",o=d(),r=u("p"),c=l("주소: "),p=l(P),f=d(),h=u("p"),g=l("온도: "),y=l(j),$=d(),w=u("p"),v=l("습도: "),b=l(O),x=d(),_=u("p"),E=l("풍속: "),k=l(M),S=d(),L=u("p"),C=l("구름양: "),A=l(N)},m(t,s){i(t,e,s),a(e,n),a(e,o),a(e,r),a(r,c),a(r,p),a(e,f),a(e,h),a(h,g),a(h,y),a(e,$),a(e,w),a(w,v),a(w,b),a(e,x),a(e,_),a(_,E),a(_,k),a(e,S),a(e,L),a(L,C),a(L,A)},p(t,e){1&e&&P!==(P=t[0].address+"")&&m(p,P),1&e&&j!==(j=t[0].temperature+"")&&m(y,j),1&e&&O!==(O=t[0].humidity+"")&&m(b,O),1&e&&M!==(M=t[0].windSpeed+"")&&m(k,M),1&e&&N!==(N=t[0].clouds+"")&&m(A,N)},d(t){t&&s(e)}}}function F(t){let e,n;return{c(){e=u("p"),n=l(t[2])},m(t,o){i(t,e,o),a(e,n)},p(t,e){4&e&&m(n,t[2])},d(t){t&&s(e)}}}function G(e){let n;return{c(){n=u("p"),n.textContent="날씨 정보를 불러오는 중..."},m(t,e){i(t,n,e)},p:t,d(t){t&&s(n)}}}function K(e){let n,r,c,l,m,y,$,w,v,b,x=e[4].length&&R(e);function _(t,e){return t[1]?G:t[2]?F:t[0].temperature&&t[0].humidity?B:void 0}let E=_(e),k=E&&E(e);return{c(){n=u("main"),r=u("div"),c=d(),l=u("input"),m=d(),y=u("button"),y.textContent="검색",$=d(),x&&x.c(),w=d(),k&&k.c(),f(r,"id","map"),g(r,"width","100%"),g(r,"height","400px"),f(r,"class","svelte-1ou2gvd"),f(l,"type","text"),f(l,"placeholder","주소 검색..."),f(n,"class","svelte-1ou2gvd")},m(t,o){i(t,n,o),a(n,r),a(n,c),a(n,l),h(l,e[3]),a(n,m),a(n,y),a(n,$),x&&x.m(n,null),a(n,w),k&&k.m(n,null),v||(b=[p(l,"input",e[7]),p(y,"click",e[5])],v=!0)},p(t,[e]){8&e&&l.value!==t[3]&&h(l,t[3]),t[4].length?x?x.p(t,e):(x=R(t),x.c(),x.m(n,w)):x&&(x.d(1),x=null),E===(E=_(t))&&k?k.p(t,e):(k&&k.d(1),k=E&&E(t),k&&(k.c(),k.m(n,null)))},i:t,o:t,d(t){t&&s(n),x&&x.d(),k&&k.d(),v=!1,o(b)}}}function T(t,e,n){let o,r={},c=!1,a="",i="",s="",u=null,l=[];async function d(t,e){const o=`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${e}&units=metric&appid=1e657dc0d8ee9f105075aab7719defa8`;n(1,c=!0);try{const t=await fetch(o),e=await t.json();200===e.cod?n(0,r={address:s,temperature:e.main.temp+"°C",humidity:e.main.humidity+"%",windSpeed:e.wind.speed+" m/s",clouds:e.clouds.all+"%"}):(console.error("API 호출에 실패했습니다.",e.message),n(2,a="API 호출에 실패했습니다: "+e.message))}catch(t){console.error("날씨 정보를 불러오는 중 오류가 발생했습니다:",t),n(2,a="날씨 정보를 불러오는 중 오류가 발생했습니다: "+t.message)}finally{n(1,c=!1)}}function p(t,e){u&&u.setMap(null);u=new naver.maps.Marker({position:new naver.maps.LatLng(t,e),map:o,icon:{content:'<img src="../svelte_weather_app/marker.png" alt="Marker" style="width: 30px; height: 87.7px;">',anchor:new naver.maps.Point(15,43)}})}function f(t){s=t.label,o.setCenter(new naver.maps.LatLng(t.y,t.x)),p(t.y,t.x),d(t.y,t.x),n(4,l=[])}w((async()=>{await async function(){return new Promise(((t,e)=>{const n=document.createElement("script");n.src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=tbl2cislwz&submodules=geocoder",n.async=!0,n.onload=()=>t(),n.onerror=()=>e(new Error("네이버 지도 로드 실패")),document.head.appendChild(n)}))}();const t={center:new naver.maps.LatLng(37.5665,126.978),zoom:10};o=new naver.maps.Map("map",t),naver.maps.Event.addListener(o,"click",(async function(t){const e=t.coord.lat(),n=t.coord.lng(),o=window.naver.maps;await o.Service.reverseGeocode({location:new o.LatLng(e,n)},(function(t,r){if(t!==o.Service.Status.OK)return void console.log("Something went wrong!",t);const c=r.result;s=c.items[0].address,p(e,n),d(e,n)}))}))}));return[r,c,a,i,l,async function(){if(!i.trim())return;n(1,c=!0),n(2,a=""),n(4,l=[]);const t=window.naver.maps;try{const e=await new Promise(((e,n)=>{t.Service.geocode({query:i},(function(o,r){o===t.Service.Status.ERROR?n(new Error("검색 결과를 찾을 수 없습니다.")):e(r)}))}));n(4,l=e.v2.addresses.slice(0,10).map((t=>({label:t.roadAddress||t.jibunAddress,x:t.x,y:t.y}))))}catch(t){n(2,a=t.message)}finally{n(1,c=!1)}},f,function(){i=this.value,n(3,i)},t=>f(t)]}return new class extends z{constructor(t){super(),N(this,t,T,K,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
