!function(){"use strict";var e,t={1266:function(e,t,n){var r=n(2578),l=n(558),a=n(6963),o=n(3626),u=function(){(0,o.s0)();return r.createElement("div",null,r.createElement("header",null,r.createElement("a",{href:"../"},"JavaScript"),r.createElement(l.rU,{to:"login"},"Login")),r.createElement("main",null,r.createElement(o.j3,null)))};function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,l,a=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){u=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(u)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(){var e=(0,o.s0)(),t=c((0,r.useState)(""),2),n=t[0];t[1];return r.createElement("div",null,r.createElement("h1",null,"Login"),n&&r.createElement("div",{style:{color:"red"}},n),r.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(111)}},r.createElement("label",null,r.createElement("div",null,"Login"),r.createElement("input",{type:"text",placeholder:"Login",required:!0})),r.createElement("label",null,r.createElement("div",null,"Password"),r.createElement("input",{type:"password",placeholder:"Password",required:!0})),r.createElement("input",{type:"submit",value:"Login"})),r.createElement("p",null,"Don`t have an account?",r.createElement("button",{onClick:function(){e("../register",{replace:!0})}},"Sign Up")))};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,l,a=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){u=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(u)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(){var e=(0,o.s0)(),t=f((0,r.useState)(""),2),n=t[0];t[1];return r.createElement("div",null,r.createElement("h1",null,"Register"),n&&r.createElement("div",{style:{color:"red"}},n),r.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(111)}},r.createElement("label",null,r.createElement("div",null,"Login"),r.createElement("input",{type:"text",placeholder:"Login",required:!0,autoComplete:"false"})),r.createElement("label",null,r.createElement("div",null,"Password"),r.createElement("input",{type:"password",placeholder:"Password",required:!0,autoComplete:"false"})),r.createElement("input",{type:"submit",value:"Logout"})),r.createElement("p",null,"Have an account?"," ",r.createElement("button",{onClick:function(){e("../login")}},"Sign In")))},d=function(){return r.createElement("div",null,r.createElement("h1",null,"STATISTICS"),r.createElement("div",null,r.createElement("div",{className:"shortError"}),r.createElement("form",null,r.createElement("input",{type:"text",placeholder:"Shorten your link"}),r.createElement("input",{type:"submit",value:"Shorten"}))),r.createElement("div",null,r.createElement("form",{className:"filterForm"},r.createElement("input",{type:"text"})),r.createElement("form",{className:"itemSelectForm"},r.createElement("p",null,"Items:",r.createElement("select",null,r.createElement("option",null,"5"),r.createElement("option",null,"10"),r.createElement("option",null,"20"),r.createElement("option",null,"50"))))),r.createElement("div",null))},E=function(){return r.createElement("div",null,r.createElement(o.Z5,null,r.createElement(o.AW,{path:"/app.html/",element:r.createElement(u,null)},r.createElement(o.AW,{path:"login",element:r.createElement(m,null)}),r.createElement(o.AW,{path:"register",element:r.createElement(p,null)}),r.createElement(o.AW,{path:"statistics",element:r.createElement(d,null)}))))},v=document.getElementById("app");(0,a.s)(v).render(r.createElement(l.VK,null,r.createElement(E,null)))}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e](a,a.exports,r),a.loaded=!0,a.exports}r.m=t,e=[],r.O=function(t,n,l,a){if(!n){var o=1/0;for(m=0;m<e.length;m++){n=e[m][0],l=e[m][1],a=e[m][2];for(var u=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(u=!1,a<o&&(o=a));if(u){e.splice(m--,1);var i=l();void 0!==i&&(t=i)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,l,a]},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,a,o=n[0],u=n[1],c=n[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(l in u)r.o(u,l)&&(r.m[l]=u[l]);if(c)var m=c(r)}for(t&&t(n);i<o.length;i++)a=o[i],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(m)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.O(void 0,[5,7],(function(){return r(6005)}));var l=r.O(void 0,[5,7],(function(){return r(1266)}));l=r.O(l)}();