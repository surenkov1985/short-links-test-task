!function(){var e,t={1829:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var d={};function v(){}function h(){}function p(){}var m={};u(m,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==r&&n.call(g,a)&&(m=g);var b=p.prototype=v.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(t,r){function o(i,a,c,s){var u=f(t[i],t,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==e(d)&&n.call(d,"__await")?r.resolve(d.__await).then((function(e){o("next",e,c,s)}),(function(e){o("throw",e,c,s)})):r.resolve(d).then((function(e){l.value=e,c(l)}),(function(e){return o("throw",e,c,s)}))}s(u.arg)}var i;this._invoke=function(e,t){function n(){return new r((function(r,n){o(e,t,r,n)}))}return i=i?i.then(n,n):n()}}function _(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=p,u(b,"constructor",p),u(p,"constructor",h),h.displayName=u(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},t.awrap=function(e){return{__await:e}},w(L.prototype),u(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(b),u(b,s,"Generator"),u(b,a,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function i(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){i(a,n,o,c,s,"next",e)}function s(e){i(a,n,o,c,s,"throw",e)}c(void 0)}))}}function c(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u,l,f,d,v,h,p,m="http://79.143.31.216/",y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;return fetch(m+e,{method:r,body:t,headers:n})},g={order:"asc",val:"target"},b=0,w=5,L="&#9660;",_=[],E=document.querySelector(".login__form"),S=document.querySelector(".register__form"),x=document.getElementById("squeezeForm"),O=document.querySelector(".login__error"),k=document.querySelector(".register__error"),A=document.querySelector(".login__submit"),j=document.querySelector(".register__submit"),T=document.querySelector(".squeeze__submit"),q=document.querySelector(".squeeze__error"),P=document.querySelector(".statistics__filter-input"),N=document.querySelector(".statistics__limit-select"),C=document.querySelector(".loginPage"),M=document.querySelector(".registerPage"),H=(document.querySelector(".header"),document.querySelector(".statisticsPage")),I=document.querySelector(".statistics__sort-error"),G=document.querySelectorAll(".register__loginBtn"),D=document.querySelectorAll(".login__registerBtn"),z=document.querySelector(".header__logoutBtn"),B=document.querySelector(".prev"),F=document.querySelector(".next"),J=document.querySelectorAll(".statistic__sortBtn");document.querySelector(".header__reactLink");function R(e){return new URLSearchParams(c(Object.entries(e))).toString()}function U(e,t,r){return Y.apply(this,arguments)}function Y(){return Y=a(o().mark((function e(t,n,i){var a,c,s,u,l,f,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={offset:n,limit:i},0===n&&B.setAttribute("disabled",!0),F.setAttribute("disabled",!0),c="order=".concat(t.order+"_"+t.val),s=c+"&"+R(a),u=JSON.parse(localStorage.getItem("user")),l={"Content-Type":"application/json",Authorization:u.token_type+" "+u.access_token},e.prev=7,e.next=10,y("statistics?".concat(s),null,"GET",l);case 10:return f=e.sent,e.next=13,f.json();case 13:if(!(d=e.sent).detail){e.next=18;break}throw new Error(d.detail);case 18:X(_=d.map((function(e){return r(r({},e),{},{short:m+"s/"+e.short})}))),J.forEach((function(e){e.removeAttribute("disabled")})),d.length<i?F.setAttribute("disabled",!0):F.removeAttribute("disabled"),0===n?B.setAttribute("disabled",!0):B.removeAttribute("disabled");case 23:e.next=33;break;case 25:e.prev=25,e.t0=e.catch(7),I.innerHTML=e.t0.message,I.classList.toggle("active"),J.forEach((function(e){e.removeAttribute("disabled")})),B.removeAttribute("disabled"),F.removeAttribute("disabled"),setTimeout((function(){I.innerHTML="",I.classList.remove("active")}),2500);case 33:case"end":return e.stop()}}),e,null,[[7,25]])}))),Y.apply(this,arguments)}function X(e){var t=document.querySelector(".statistic__list-head"),r=document.createElement("ul");r.className="statistic__list",t.innerHTML="",e.map((function(e){var t=e.target,n=e.short;u=document.createElement("li"),l=document.createElement("div"),f=document.createElement("div"),d=document.createElement("div"),v=document.createElement("a"),p=document.createElement("a"),(h=document.createElement("button")).style.position="relative",l.className="statistic__linkEl",f.className="statistic__shortEl",d.className="statistic__counterEl",u.className="statistic__item",h.className="linkCopyBtn",v.className="target-link",p.className="short-link",v.href=t,v.target="_blank",v.innerHTML=t,p.href=n,p.target="_blank",p.innerHTML=n,h.innerHTML="Copy",d.innerHTML=e.counter,f.appendChild(p),f.appendChild(h),l.appendChild(v),u.appendChild(l),u.appendChild(f),u.appendChild(d),r.appendChild(u),h.addEventListener("click",(function(e){var t=this,r=document.createElement("span");r.className="copyHint",r.style.top=e.offsetY+"px",r.style.left=e.offsetX+"px",r.innerHTML="URL ".concat(n," copied"),this.appendChild(r),navigator.clipboard.writeText(n).then((function(){setTimeout((function(){t.removeChild(r)}),1500)}))}))})),t.appendChild(r),document.querySelectorAll(".shortEl")}localStorage.hasOwnProperty("user")&&(H.classList.toggle("active"),C.classList.remove("active"),z.classList.toggle("active"),U(g,b,w)),z.addEventListener("click",(function(e){e.preventDefault(),localStorage.removeItem("user"),C.classList.toggle("active"),z.classList.remove("active"),H.classList.remove("active"),g={order:"asc",val:"target"},b=0,w=5,N.value=5})),J.forEach((function(e){e.addEventListener("click",(function(t){g.val=e.dataset.val,"asc"===e.dataset.order?(g.order="desc",e.dataset.order="desc",e.innerHTML="&#9650;"):(g.order="asc",e.dataset.order="asc",e.innerHTML=L),J.forEach((function(e){e.dataset.val!==g.val&&(e.dataset.order="asc",e.innerHTML=L)})),J.forEach((function(e){e.setAttribute("disabled",!0)})),B.setAttribute("disabled",!0),F.setAttribute("disabled",!0),U(g,b,w)}))})),B.addEventListener("click",(function(){0!==b?(b-=w,J.forEach((function(e){e.setAttribute("disabled",!0)})),B.setAttribute("disabled",!0),F.setAttribute("disabled",!0),U(g,b,w)):B.setAttribute("disabled",!0)})),F.addEventListener("click",(function(){b+=w,J.forEach((function(e){e.setAttribute("disabled",!0)})),B.setAttribute("disabled",!0),F.setAttribute("disabled",!0),U(g,b,w)})),G.forEach((function(e){e.addEventListener("click",(function(){localStorage.hasOwnProperty("user")||(M.classList.remove("active"),C.classList.toggle("active"))}))})),D.forEach((function(e){e.addEventListener("click",(function(){localStorage.hasOwnProperty("user")||(C.classList.remove("active"),M.classList.toggle("active"))}))})),N.addEventListener("change",(function(e){console.log(N.value),w=N.value,U(g,b,w)})),null==P||P.addEventListener("input",(function(e){var t,r;t=new RegExp(P.value,"i"),X(r=_.filter((function(e){return t.test(e.target)||t.test(e.short)||t.test(e.counter)}))),r.length<w?F.setAttribute("disabled",!0):F.removeAttribute("disabled")})),null==E||E.addEventListener("submit",function(){var e=a(o().mark((function e(t){var r,n,i,a,c,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=E.querySelector('[name="username"]'),n=E.querySelector('[name="password"]'),i={username:r.value,password:n.value},a=R(i),A.setAttribute("disabled",!0),e.prev=5,e.next=8,y("login",a,"POST",{"Content-Type":"application/x-www-form-urlencoded"});case 8:return c=e.sent,e.next=11,c.json();case 11:if(!(s=e.sent).access_token){e.next=23;break}localStorage.setItem("user",JSON.stringify(s)),M.classList.remove("active"),C.classList.remove("active"),H.classList.toggle("active"),z.classList.toggle("active"),U(g,b,w),r.value="",n.value="",e.next=24;break;case 23:throw new Error(s.detail);case 24:e.next=31;break;case 26:e.prev=26,e.t0=e.catch(5),O.innerHTML=e.t0.message,O.classList.toggle("active"),setTimeout((function(){O.innerHTML="",O.classList.remove("active")}),2500);case 31:return e.prev=31,A.removeAttribute("disabled"),e.finish(31);case 34:case"end":return e.stop()}}),e,null,[[5,26,31,34]])})));return function(t){return e.apply(this,arguments)}}()),null==S||S.addEventListener("submit",function(){var e=a(o().mark((function e(t){var r,n,i,a,c,s,u,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=S.querySelector('[name="username"]'),n=S.querySelector('[name="password"]'),i={username:r.value,password:n.value},j.setAttribute("disabled",!0),a=R(i),e.prev=5,e.next=8,y("register?".concat(a),JSON.stringify(i),"POST",{"Content-Type":"application/json"});case 8:return c=e.sent,e.next=11,c.json();case 11:if(!(s=e.sent).username){e.next=32;break}return e.next=15,y("login",a,"POST",{"Content-Type":"application/x-www-form-urlencoded"});case 15:return u=e.sent,e.next=18,u.json();case 18:if(!(l=e.sent).access_token){e.next=29;break}localStorage.setItem("user",JSON.stringify(l)),M.classList.remove("active"),H.classList.toggle("active"),z.classList.toggle("active"),U(g,b,w),r.value="",n.value="",e.next=30;break;case 29:throw new Error(l.detail);case 30:e.next=33;break;case 32:throw new Error(s.detail);case 33:e.next=40;break;case 35:e.prev=35,e.t0=e.catch(5),k.innerHTML=e.t0.message,k.classList.toggle("active"),setTimeout((function(){k.innerHTML="",k.classList.remove("active")}),2500);case 40:return e.prev=40,j.removeAttribute("disabled"),e.finish(40);case 43:case"end":return e.stop()}}),e,null,[[5,35,40,43]])})));return function(t){return e.apply(this,arguments)}}()),null==x||x.addEventListener("submit",function(){var e=a(o().mark((function e(t){var r,n,i,a,c,s,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=x.querySelector('[name="link"]'),n={link:/^http(s)?:\/\//.test(r.value)?r.value:"http://"+r.value},i=R(n),a=JSON.parse(localStorage.getItem("user")),c={"Content-Type":"application/json",Authorization:a.token_type+" "+a.access_token},T.setAttribute("disabled",!0),e.prev=8,e.next=11,y("squeeze?".concat(i),null,"POST",c);case 11:return s=e.sent,e.next=14,s.json();case 14:if(!(u=e.sent).short){e.next=20;break}U(g,b,w),r.value="",e.next=21;break;case 20:throw new Error(u.detail[0].msg);case 21:e.next=28;break;case 23:e.prev=23,e.t0=e.catch(8),q.innerHTML=e.t0.message,q.classList.toggle("active"),setTimeout((function(){q.innerHTML="",q.classList.remove("active")}),2500);case 28:return e.prev=28,T.removeAttribute("disabled"),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[8,23,28,31]])})));return function(t){return e.apply(this,arguments)}}())},5341:function(e,t,r){"use strict";r(1829)}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return t[e](i,i.exports,n),i.loaded=!0,i.exports}n.m=t,e=[],n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={826:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],s=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var l=s(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),n.O(void 0,[5],(function(){return n(6005)}));var o=n.O(void 0,[5],(function(){return n(5341)}));o=n.O(o)}();