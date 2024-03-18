var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function s(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}function $(t,e,n,o){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let y;function w(t){y=t}function v(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const b=[],x=[];let _=[];const E=[],k=Promise.resolve();let S=!1;function L(t){_.push(t)}const C=new Set;let A=0;function P(){if(0!==A)return;const t=y;do{try{for(;A<b.length;){const t=b[A];A++,w(t),j(t.$$)}}catch(t){throw b.length=0,A=0,t}for(w(null),b.length=0,A=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];C.has(e)||(C.add(e),e())}_.length=0}while(b.length);for(;E.length;)E.pop()();S=!1,C.clear(),w(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const O=new Set;function M(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];_.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),_=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(b.push(t),S||(S=!0,k.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(c,a,i,u,s,d,f,p=[-1]){const m=y;w(c);const h=c.$$={fragment:null,ctx:[],props:d,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(m?m.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:a.target||m.$$.root};f&&f(h.root);let g=!1;if(h.ctx=i?i(c,a.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),g&&N(c,t)),e})):[],h.update(),g=!0,o(h.before_update),h.fragment=!!u&&u(h.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();a.intro&&(($=c.$$.fragment)&&$.i&&(O.delete($),$.i(v))),function(t,n,c,a){const{fragment:i,after_update:l}=t.$$;i&&i.m(n,c),a||L((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(L)}(c,a.target,a.anchor,a.customElement),P()}var $,v;w(m)}class I{$destroy(){M(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(t,e,n){const o=t.slice();return o[14]=e[n],o}function q(t,e,n){const o=t.slice();return o[17]=e[n],o}function D(t){let e,n=t[5],o=[];for(let e=0;e<n.length;e+=1)o[e]=F(q(t,n,e));return{c(){e=s("ul");for(let t=0;t<o.length;t+=1)o[t].c()},m(t,n){i(t,e,n);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(e,null)},p(t,r){if(160&r){let c;for(n=t[5],c=0;c<n.length;c+=1){const a=q(t,n,c);o[c]?o[c].p(a,r):(o[c]=F(a),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){t&&l(e),u(o,t)}}}function F(t){let e,n,o,r,c=t[17].label+"";function u(){return t[9](t[17])}return{c(){e=s("li"),n=d(c)},m(t,c){i(t,e,c),a(e,n),o||(r=p(e,"click",u),o=!0)},p(e,o){t=e,32&o&&c!==(c=t[17].label+"")&&h(n,c)},d(t){t&&l(e),o=!1,r()}}}function B(t){let e,n,o,r=t[0],c=[];for(let e=0;e<r.length;e+=1)c[e]=T(R(t,r,e));return{c(){e=s("div"),n=s("h2"),n.textContent="날씨 정보",o=f();for(let t=0;t<c.length;t+=1)c[t].c()},m(t,r){i(t,e,r),a(e,n),a(e,o);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(e,null)},p(t,n){if(17&n){let o;for(r=t[0],o=0;o<r.length;o+=1){const a=R(t,r,o);c[o]?c[o].p(a,n):(c[o]=T(a),c[o].c(),c[o].m(e,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=r.length}},d(t){t&&l(e),u(c,t)}}}function G(t){let e,n;return{c(){e=s("p"),n=d(t[2])},m(t,o){i(t,e,o),a(e,n)},p(t,e){4&e&&h(n,t[2])},d(t){t&&l(e)}}}function K(e){let n;return{c(){n=s("p"),n.textContent="날씨 정보를 불러오는 중...."},m(t,e){i(t,n,e)},p:t,d(t){t&&l(n)}}}function T(t){let e,n,o,r,c,u,p,m,g,$,y,w,v,b,x,_,E,k,S,L,C,A,P,j,O,M=t[14].date+"",N=t[14].temperature+"",z=t[14].humidity+"",I=t[14].windSpeed+"",R=t[14].clouds+"";return{c(){e=s("div"),n=s("p"),o=d("날짜: "),r=d(M),c=f(),u=s("p"),p=d("주소: "),m=d(t[4]),g=f(),$=s("p"),y=d("온도: "),w=d(N),v=f(),b=s("p"),x=d("습도: "),_=d(z),E=f(),k=s("p"),S=d("풍속: "),L=d(I),C=f(),A=s("p"),P=d("구름양: "),j=d(R),O=f()},m(t,l){i(t,e,l),a(e,n),a(n,o),a(n,r),a(e,c),a(e,u),a(u,p),a(u,m),a(e,g),a(e,$),a($,y),a($,w),a(e,v),a(e,b),a(b,x),a(b,_),a(e,E),a(e,k),a(k,S),a(k,L),a(e,C),a(e,A),a(A,P),a(A,j),a(e,O)},p(t,e){1&e&&M!==(M=t[14].date+"")&&h(r,M),16&e&&h(m,t[4]),1&e&&N!==(N=t[14].temperature+"")&&h(w,N),1&e&&z!==(z=t[14].humidity+"")&&h(_,z),1&e&&I!==(I=t[14].windSpeed+"")&&h(L,I),1&e&&R!==(R=t[14].clouds+"")&&h(j,R)},d(t){t&&l(e)}}}function W(e){let n,r,c,u,d,h,y,w,v,b,x=e[5].length&&D(e);function _(t,e){return t[1]?K:t[2]?G:t[0].length>0?B:void 0}let E=_(e),k=E&&E(e);return{c(){n=s("main"),r=s("div"),c=f(),u=s("input"),d=f(),h=s("button"),h.textContent="검색",y=f(),x&&x.c(),w=f(),k&&k.c(),m(r,"id","map"),$(r,"width","100%"),$(r,"height","400px"),m(r,"class","svelte-1ou2gvd"),m(u,"type","text"),m(u,"placeholder","주소 검색..."),m(n,"class","svelte-1ou2gvd")},m(t,o){i(t,n,o),a(n,r),a(n,c),a(n,u),g(u,e[3]),a(n,d),a(n,h),a(n,y),x&&x.m(n,null),a(n,w),k&&k.m(n,null),v||(b=[p(u,"input",e[8]),p(h,"click",e[6])],v=!0)},p(t,[e]){8&e&&u.value!==t[3]&&g(u,t[3]),t[5].length?x?x.p(t,e):(x=D(t),x.c(),x.m(n,w)):x&&(x.d(1),x=null),E===(E=_(t))&&k?k.p(t,e):(k&&k.d(1),k=E&&E(t),k&&(k.c(),k.m(n,null)))},i:t,o:t,d(t){t&&l(n),x&&x.d(),k&&k.d(),v=!1,o(b)}}}function H(t,e,n){let o,r=[],c=!1,a="",i="",l="",u=null,s=[];async function d(t,e){const o=`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${e}&units=metric&appid=1e657dc0d8ee9f105075aab7719defa8`;n(1,c=!0);try{const t=await fetch(o),e=await t.json();"200"===e.cod?n(0,r=e.list.filter(((t,e)=>e%8==0)).map((t=>({date:new Date(1e3*t.dt).toLocaleDateString(),temperature:t.main.temp+"°C",humidity:t.main.humidity+"%",windSpeed:t.wind.speed+" m/s",clouds:t.clouds.all+"%"})))):(console.error("API 호출에 실패했습니다.",e.message),n(2,a="API 호출에 실패했습니다: "+e.message))}catch(t){console.error("날씨 정보를 불러오는 중 오류가 발생했습니다:",t),n(2,a="날씨 정보를 불러오는 중 오류가 발생했습니다: "+t.message)}finally{n(1,c=!1)}}function f(t,e){u&&u.setMap(null);u=new naver.maps.Marker({position:new naver.maps.LatLng(t,e),map:o,icon:{content:'<img src="./marker.png" alt="Marker" style="width: 30px; height: 87.7px;">',anchor:new naver.maps.Point(15,43.85)}}),fetchWeatherForecast(t,e)}function p(t){n(4,l=t.label),o.setCenter(new naver.maps.LatLng(t.y,t.x)),f(t.y,t.x),d(t.y,t.x),n(5,s=[])}v((async()=>{await async function(){return new Promise(((t,e)=>{const n=document.createElement("script");n.src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=tbl2cislwz&submodules=geocoder",n.async=!0,n.onload=()=>t(),n.onerror=()=>e(new Error("네이버 지도 로드 실패")),document.head.appendChild(n)}))}();const t={center:new naver.maps.LatLng(37.5665,126.978),zoom:10};o=new naver.maps.Map("map",t),naver.maps.Event.addListener(o,"click",(async function(t){const e=t.coord.lat(),o=t.coord.lng(),r=window.naver.maps;await r.Service.reverseGeocode({location:new r.LatLng(e,o)},(function(t,c){if(t!==r.Service.Status.OK)return void console.log("Something went wrong!",t);const a=c.result;n(4,l=a.items[0].address),f(e,o),d(e,o)}))}))}));return[r,c,a,i,l,s,async function(){if(!i.trim())return;n(1,c=!0),n(2,a=""),n(5,s=[]);const t=window.naver.maps;try{const e=await new Promise(((e,n)=>{t.Service.geocode({query:i},(function(o,r){o===t.Service.Status.ERROR?n(new Error("검색 결과를 찾을 수 없습니다.")):e(r)}))}));n(5,s=e.v2.addresses.slice(0,10).map((t=>({label:t.roadAddress||t.jibunAddress,x:t.x,y:t.y}))))}catch(t){n(2,a=t.message)}finally{n(1,c=!1)}},p,function(){i=this.value,n(3,i)},t=>p(t)]}return new class extends I{constructor(t){super(),z(this,t,H,W,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
