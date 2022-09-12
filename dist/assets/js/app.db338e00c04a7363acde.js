!function(){"use strict";var t,e={7678:function(t,e,n){var r,a,o,i,l=n(2578),u=n(6963),c=n(558),f=n(3626),s=n(1109),d=n(742),p=(0,d.createSlice)({name:"data",initialState:{auth:!1,offset:0,limit:5,order:{order:"asc",val:"target"},statistics:[]},reducers:{authToggle:function(t,e){t.auth=e.payload},setStatistics:function(t,e){t.statistics=e.payload},decOffset:function(t){t.offset=t.offset-t.limit},incOffset:function(t){t.offset=t.offset+t.limit},setDefaultState:function(t){t.offset=0,t.limit=5},limitItemToggle:function(t,e){t.limit=e.payload},orderToggle:function(t,e){t.order=e.payload}}}),m=p.actions,g=m.authToggle,h=m.setStatistics,b=m.decOffset,y=m.incOffset,v=m.limitItemToggle,x=m.orderToggle,w=m.setDefaultState,E=p.reducer,S=n(5487);function O(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var j,P,A,k,I,T,Z=S.ZP.header(r||(r=O(["\n\twidth: 100%;\n\tpadding: 20px 40px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbackground: #71aaff;\n\tbox-shadow: 0px 5px 10px 2px rgba(121, 173, 214, 0.22);\n\tflex-grow: 0;\n"]))),C=S.ZP.a(a||(a=O(["\n\tfont-weight: 500;\n\t&:hover {\n\t\tcolor: #ffffff;\n\t\ttext-decoration: underline;\n\t}\n"]))),L=(0,S.ZP)(c.rU)(o||(o=O(["\n\tfont-weight: 500;\n\t&:hover {\n\t\tcolor: #ffffff;\n\t\ttext-decoration: underline;\n\t}\n"]))),z=S.ZP.main(i||(i=O(["\n\twidth: 100%;\n\theight: 100%;\n\tpadding: 50px 40px;\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 40px;\n\tbackground: #fafafa;\n\tflex-grow: 1;\n"]))),D=function(){var t=(0,f.s0)(),e=(0,s.v9)((function(t){return t.data.auth})),n=(0,s.I0)();return(0,l.useEffect)((function(){localStorage.hasOwnProperty("user")?t("statistics",{replace:!0}):t("login")}),[e]),l.createElement(l.Fragment,null,l.createElement(Z,null,e&&l.createElement(L,{to:"login",onClick:function(e){e.preventDefault(),n(g(!1)),n(w()),localStorage.removeItem("user"),t("login")}},"Logout"),l.createElement(C,{href:"../"},"JavaScript")),l.createElement(z,null,l.createElement(f.j3,null)))},U=n(8039),M=n(200),R=n(8565),_=(0,M.LC)({reducerPath:"api",baseQuery:(0,R.ni)({baseUrl:"http://79.143.31.216"}),endpoints:function(t){return{login:t.mutation({query:function(t){return{url:"/login",method:"POST",body:t,headers:{"Content-Type":"application/x-www-form-urlencoded"}}}}),register:t.mutation({query:function(t,e){return{url:"/register?".concat(t),method:"POST",body:e,headers:{"Content-Type":"application/json"}}}}),statistics:t.mutation({query:function(t){return{url:"/statistics?".concat(t.urlString),method:"GET",headers:{"Content-Type":"application/json",Authorization:t.authData}}}}),shorten:t.mutation({query:function(t){return{url:"/squeeze?".concat(t.urlString),method:"POST",headers:{"Content-Type":"application/json",Authorization:t.authData}}}})}}}),q=_.useLoginMutation,V=_.useRegisterMutation,F=_.useStatisticsMutation,$=_.useShortenMutation;function J(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var N,B,W,G,H,Q,X,Y,K,tt=S.ZP.h1(j||(j=J(["\n\tfont-size: 30px;\n\tfont-weight: 700;\n"]))),et=S.ZP.div(P||(P=J(["\n\twidth: 400px;\n\tcolor: #ff0000;\n\tborder: 1px solid #ff0000;\n\tpadding: 10px 20px;\n\tborder-radius: 5px;\n\tbackground: rgba(250, 0, 0, 0.05);\n\tposition: absolute;\n\tbottom: 150%;\n"]))),nt=S.ZP.div(A||(A=J(["\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 20px;\n\tposition: relative;\n\tmargin-top: 50px;\n"]))),rt=S.ZP.form(k||(k=J(["\n\tdisplay: flex;\n\tcolumn-gap: 10px;\n\twidth: 40%;\n"]))),at=S.ZP.input(I||(I=J(["\n\twidth: 100%;\n\tborder-radius: 5px;\n\tpadding: 10px 20px;\n\tborder: 1px solid #000000;\n"]))),ot=S.ZP.input(T||(T=J(["\n\tborder-radius: 5px;\n\tpadding: 10px 20px;\n\tbackground: #ffffff;\n\tborder: 1px solid #000000;\n\tfont-weight: 500;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbackground: #71aaff;\n\t\tcolor: #ffffff;\n\t\tborder-color: #71aaff;\n\t}\n"])));function it(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var lt=S.ZP.h1(N||(N=it(["\n\tfont-size: 30px;\n\tfont-weight: 700;\n"]))),ut=S.ZP.div(B||(B=it(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n\trow-gap: 30px;\n\tflex-grow: 1;\n"]))),ct=S.ZP.form(W||(W=it(["\n\twidth: 500px;\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 30px;\n\tmargin-top: 60px;\n\tposition: relative;\n"]))),ft=S.ZP.div(G||(G=it(["\n\twidth: 500px;\n\tcolor: #ff0000;\n\tborder: 1px solid #ff0000;\n\tpadding: 10px 20px;\n\tborder-radius: 5px;\n\tbackground: rgba(250, 0, 0, 0.05);\n\tposition: absolute;\n\ttop: -60px;\n"]))),st=S.ZP.label(H||(H=it(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 10px;\n\tfont-weight: 500;\n"]))),dt=S.ZP.div(Q||(Q=it(["\n\tfont-size: 18px;\n\tfont-weight: 500;\n"]))),pt=S.ZP.input(X||(X=it(["\n\tpadding: 10px 20px;\n"]))),mt=S.ZP.div(Y||(Y=it(["\n\tfont-weight: 500;\n"]))),gt=S.ZP.button(K||(K=it(["\n\tborder: none;\n\tbackground: none;\n\tcursor: pointer;\n\tcolor: blue;\n\tmargin-left: 10px;\n\n\t&:hover {\n\t\tcolor: blue;\n\t\ttext-decoration: underline;\n\t}\n"])));function ht(){return ht=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ht.apply(this,arguments)}function bt(t){return function(t){if(Array.isArray(t))return xt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||vt(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function yt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){l=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(t,e)||vt(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function vt(t,e){if(t){if("string"==typeof t)return xt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?xt(t,e):void 0}}function xt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var wt,Et=function(){var t=(0,f.s0)(),e=(0,U.cI)({mode:"onChange"}),n=e.register,r=e.handleSubmit,a=yt(q(),2),o=a[0],i=a[1].isLoading,u=yt((0,l.useState)(""),2),c=u[0],d=u[1],p=(0,s.I0)();return l.createElement(l.Fragment,null,l.createElement(lt,null,"Login"),l.createElement(ut,null,l.createElement(ct,{onSubmit:r((function(t){var e=new URLSearchParams(bt(Object.entries(t))).toString();o(e).unwrap().then((function(t){p(g(!0)),localStorage.setItem("user",JSON.stringify(t))})).catch((function(t){d(t.data.detail),setTimeout((function(){d("")}),2500)}))}))},c&&l.createElement(ft,{style:{color:"red"}},c),l.createElement(st,null,l.createElement(dt,null,"Login"),l.createElement(at,ht({type:"text",placeholder:"Login",defaultValue:""},n("username"),{required:!0,autoComplete:"false"}))),l.createElement(st,null,l.createElement(dt,null,"Password"),l.createElement(at,ht({type:"password",placeholder:"Password",defaultValue:""},n("password"),{required:!0,autoComplete:"false"}))),l.createElement(ot,{type:"submit",value:"Login",disabled:i})),l.createElement(mt,null,"Don`t have an account?",l.createElement(gt,{onClick:function(){t("../register",{replace:!0})},disabled:i},"Sign Up"))))};var St,Ot,jt=S.ZP.h1(wt||(St=["\n\tfont-size: 30px;\n\tfont-weight: 700;\n"],Ot||(Ot=St.slice(0)),wt=Object.freeze(Object.defineProperties(St,{raw:{value:Object.freeze(Ot)}}))));function Pt(){return Pt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pt.apply(this,arguments)}function At(t){return function(t){if(Array.isArray(t))return Tt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||It(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function kt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){l=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(t,e)||It(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function It(t,e){if(t){if("string"==typeof t)return Tt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Tt(t,e):void 0}}function Tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Zt=function(){var t=(0,f.s0)(),e=(0,s.I0)(),n=kt((0,l.useState)(""),2),r=n[0],a=n[1],o=kt(V(),2),i=o[0],u=o[1].isLoading,c=kt(q(),1)[0],d=(0,U.cI)({mode:"onCange"}),p=d.register,m=d.handleSubmit;return l.createElement(l.Fragment,null,l.createElement(jt,null,"Register"),l.createElement(ut,null,l.createElement(ct,{onSubmit:m((function(t){var n=new URLSearchParams(At(Object.entries(t))).toString();i(n,JSON.stringify(t)).unwrap().then((function(){c(n).unwrap().then((function(t){e(g(!0)),localStorage.setItem("user",JSON.stringify(t))})).catch((function(t){a(t.data.detail),setTimeout((function(){a("")}),2500)}))})).catch((function(t){a(t.data.detail),setTimeout((function(){a("")}),2500)})),console.log(t)}))},r&&l.createElement(ft,{style:{color:"red"}},r),l.createElement(st,null,l.createElement(dt,null,"Login"),l.createElement(pt,Pt({type:"text",placeholder:"Login",required:!0,autoComplete:"false"},p("username")))),l.createElement(st,null,l.createElement(dt,null,"Password"),l.createElement(pt,Pt({type:"password",placeholder:"Password",required:!0,autoComplete:"false"},p("password")))),l.createElement(ot,{type:"submit",value:"Signup",disabled:u})),l.createElement(mt,null,"Have an account?"," ",l.createElement(gt,{onClick:function(){t("../login")},disabled:u},"Sign In"))))};function Ct(t){return function(t){if(Array.isArray(t))return Dt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||zt(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Lt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){l=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(t,e)||zt(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function zt(t,e){if(t){if("string"==typeof t)return Dt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Dt(t,e):void 0}}function Dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ut(t){return function(t){if(Array.isArray(t))return _t(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Rt(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Mt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){l=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(t,e)||Rt(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Rt(t,e){if(t){if("string"==typeof t)return _t(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_t(t,e):void 0}}function _t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var qt,Vt,Ft,$t;function Jt(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var Nt,Bt,Wt,Gt,Ht,Qt,Xt,Yt,Kt,te,ee,ne,re,ae=S.ZP.div(qt||(qt=Jt(["\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n"]))),oe=S.ZP.input(Vt||(Vt=Jt(["\n\twidth: 40%;\n\tborder-radius: 5px;\n\tpadding: 10px 20px;\n\tborder: 1px solid #000000;\n"]))),ie=S.ZP.div(Ft||(Ft=Jt(["\n\tdisplay: flex;\n\talign-items: center;\n\tcolumn-gap: 10px;\n\theight: 100%;\n\tfont-weight: 500;\n\tborder-radius: 5px;\n"]))),le=S.ZP.select($t||($t=Jt(["\n\theight: 100%;\n\ttext-align: center;\n\tfont-weight: 500;\n\tpadding: 10px 5px;\n\n\t& > option {\n\t\theight: 40px;\n\t\ttext-align: start;\n\t\tfont-weight: 500;\n\t\tpadding: 10px 5px;\n\t}\n"]))),ue=function(t){var e=t.onChange,n=t.filterVal,r=(0,s.I0)(),a=(0,s.v9)((function(t){return t.data.limit}));return l.createElement(ae,null,l.createElement(oe,{type:"text",placeholder:"Filter by long URL, short URL or clicks...",value:n,onChange:function(t){e(t)}}),l.createElement(ie,null,"Items:",l.createElement(le,{onChange:function(t){r(v(t.target.value))},defaultValue:a},l.createElement("option",null,"5"),l.createElement("option",null,"10"),l.createElement("option",null,"20"),l.createElement("option",null,"50"))))},ce=n(1854);function fe(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var se=S.ZP.div(Nt||(Nt=fe(["\n\twidth: 100%;\n\tmax-height: 400px;\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow-y: auto;\n\tposition: relative;\n\tmargin-top: 35px;\n\tborder: 1px solid #000000;\n\tborder-radius: 5px;\n"]))),de=S.ZP.div(Bt||(Bt=fe(["\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: #71aaff;\n\tborder-bottom: 1px solid #000000;\n\tposition: sticky;\n\ttop: 0;\n\tflex-grow: 0;\n\tz-index: 2;\n"]))),pe=S.ZP.div(Wt||(Wt=fe(["\n\twidth: 55%;\n\tpadding: 10px 20px;\n\tborder-right: 1px solid #000000;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\n\t& > span {\n\t\tfont-weight: 500;\n\t}\n"]))),me=S.ZP.div(Gt||(Gt=fe(["\n\twidth: 35%;\n\tpadding: 10px 20px;\n\tborder-right: 1px solid #000000;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\n\t& > span {\n\t\tfont-weight: 500;\n\t}\n"]))),ge=S.ZP.div(Ht||(Ht=fe(["\n\twidth: 10%;\n\tpadding: 10px 20px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\n\t& > span {\n\t\tfont-weight: 500;\n\t}\n"]))),he=S.ZP.li(Qt||(Qt=fe(["\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\n\t&:not(:last-child) {\n\t\tborder-bottom: 1px solid #000000;\n\t}\n"]))),be=S.ZP.button(Xt||(Xt=fe(["\n\twidth: 30px;\n\tbackground: none;\n\tborder: none;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcursor: pointer;\n\n\t&:hover > svg path {\n\t\tfill: #ffffff;\n\t}\n\n\t&:disabled > svg {\n\t\topacity: 0.5;\n\t}\n"]))),ye=S.ZP.ul(Yt||(Yt=fe(["\n\tflex-grow: 1;\n"]))),ve=S.ZP.a(Kt||(Kt=fe(["\n\ttext-decoration: underline;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tcolor: blue;\n\t}\n"]))),xe=S.ZP.button(te||(te=fe(["\n\tborder: none;\n\tbackground: none;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tcolor: blue;\n\t}\n"]))),we=S.ZP.div(ee||(ee=fe(["\n\tdisplay: flex;\n\tcolumn-gap: 10px;\n"]))),Ee=S.ZP.button(ne||(ne=fe(["\n\tborder-radius: 5px;\n\tpadding: 10px 20px;\n\tbackground: #ffffff;\n\tborder: 1px solid #000000;\n\tfont-weight: 500;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tcolumn-gap: 5px;\n\n\t&:hover {\n\t\tbackground: #71aaff;\n\t\tcolor: #ffffff;\n\t\tborder-color: #71aaff;\n\n\t\t& > svg path {\n\t\t\tfill: #ffffff;\n\t\t}\n\t}\n\n\t&:disabled {\n\t\topacity: 0.5;\n\n\t\t&:hover {\n\t\t\tcursor: default;\n\t\t\tbackground: #ffffff;\n\t\t\tcolor: #000000;\n\t\t\tborder: 1px solid #000000;\n\t\t\t& > svg path {\n\t\t\t\tfill: #000000;\n\t\t\t}\n\t\t}\n\t}\n"]))),Se=S.ZP.div(re||(re=fe(["\n\tposition: absolute;\n\tpadding: 5px 10px;\n\tbackground: #e6f0f7;\n\tborder-radius: 4px;\n\tz-index: 3;\n\twhite-space: nowrap;\n\ttransform: translate(-100%, -100%);\n\ttop: ",";\n\tleft: ",";\n"])),(function(t){return t.top}),(function(t){return t.left}));function Oe(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){l=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return je(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return je(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function je(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Pe=function(t){var e=t.data,n=t.statisticError,r=t.isLoading,a=Oe((0,l.useState)(e),2),o=a[0],i=a[1],u=Oe((0,l.useState)(""),2),c=u[0],f=u[1],d=Oe((0,l.useState)(new RegExp(c,"i")),2),p=d[0],m=d[1],g=(0,s.v9)((function(t){return t.data.offset})),h=(0,s.v9)((function(t){return t.data.limit})),v=Oe((0,l.useState)("asc"),2),w=v[0],E=v[1],S=Oe((0,l.useState)("asc"),2),O=S[0],j=S[1],P=Oe((0,l.useState)("asc"),2),A=P[0],k=P[1],I=Oe((0,l.useState)(""),2),T=I[0],Z=I[1],C=Oe((0,l.useState)(null),2),L=C[0],z=C[1],D=Oe((0,l.useState)(0),2),U=D[0],M=D[1],R=Oe((0,l.useState)(0),2),_=R[0],q=R[1],V=(0,s.I0)();return(0,l.useEffect)((function(){i(e.filter((function(t){return p.test(t.target)||p.test(t.short)||p.test(t.counter)}))),console.log(o,e)}),[c,e]),l.createElement(l.Fragment,null,l.createElement(ue,{onChange:function(t){f(t.target.value),m(new RegExp(t.target.value,"i"))},filterVal:c}),l.createElement(se,null,n&&l.createElement(et,{style:{color:"red"}},n),l.createElement(de,null,l.createElement(pe,null,l.createElement("span",null,"Long URL"),l.createElement(be,{onClick:function(){E("asc"===w?"desc":"asc"),k("asc"),j("asc"),V(x({order:"asc"===w?"desc":"asc",val:"target"}))},disabled:r},"asc"===w?l.createElement(ce.i0B,null):l.createElement(ce.Vs3,null))),l.createElement(me,null,l.createElement("span",null,"Short URL"),l.createElement(be,{onClick:function(){j("asc"===O?"desc":"asc"),E("asc"),k("asc"),V(x({order:"asc"===O?"desc":"asc",val:"short"}))},disabled:r},"asc"===O?l.createElement(ce.i0B,null):l.createElement(ce.Vs3,null))),l.createElement(ge,null,l.createElement("span",null,"Clicks"),l.createElement(be,{onClick:function(){k("asc"===A?"desc":"asc"),E("asc"),j("asc"),V(x({order:"asc"===A?"desc":"asc",val:"short"}))},disabled:r},"asc"===A?l.createElement(ce.i0B,null):l.createElement(ce.Vs3,null)))),l.createElement(ye,null,o.map((function(t){return l.createElement(he,{key:t.id},l.createElement(pe,null,l.createElement(ve,{href:t.target,target:"_blank"},t.target)),l.createElement(me,null,l.createElement(ve,{href:t.short,target:"_blank"},t.short),l.createElement(xe,{onClick:function(e){navigator.clipboard.writeText(t.short),Z("Copied to clipboard"),z(t.id),setTimeout((function(){Z(""),z(null)}),1e3),M(e.nativeEvent.layerY),q(e.nativeEvent.layerX)},disabled:r},"Copy",t.id===L&&l.createElement(Se,{top:"".concat(U,"px"),left:"".concat(_,"px")},T))),l.createElement(ge,null,t.counter))})))),l.createElement(we,null,l.createElement(Ee,{disabled:!!(r||0===g||o.length<h),onClick:function(){V(b())}},l.createElement(ce.kyg,null)," Prev"),l.createElement(Ee,{disabled:!!(o.length<h||r),onClick:function(){V(y())}},"Next ",l.createElement(ce.mGl,null))))};function Ae(){return Ae=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ae.apply(this,arguments)}function ke(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ie(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ke(Object(n),!0).forEach((function(e){Te(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Te(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ze(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){l=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Ce(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ce(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Le=function(){var t=Ze((0,l.useState)(""),2),e=t[0],n=t[1],r=Ze((0,l.useState)(""),2),a=r[0],o=r[1],i=(0,U.cI)({mode:"onChange"}),u=i.register,c=i.handleSubmit,f=i.reset,d=(0,s.v9)((function(t){return t.data.statistics})),p=(0,s.v9)((function(t){return t.data.order})),m=(0,s.v9)((function(t){return t.data.offset})),b=(0,s.v9)((function(t){return t.data.limit})),y=JSON.parse(localStorage.getItem("user")),v=(0,s.I0)(),x=function(){var t=Mt((0,l.useState)({urlString:"",authData:""}),2),e=t[0],n=t[1];return{apiData:e,getApiParams:function(t,e,r,a){var o="order=".concat(e.order,"_").concat(e.val)+"&"+new URLSearchParams(Ut(Object.entries({offset:r,limit:a}))).toString(),i=t.token_type+" "+t.access_token;n({urlString:o,authData:i})}}}(),w=x.apiData,E=x.getApiParams,S=function(){var t=Lt((0,l.useState)({urlString:"",authData:""}),2),e=t[0],n=t[1];return{getShortenParams:function(t,e){var r={link:/^http(s)?:\/\//.test(e.link)?e.link:"http://"+e.link},a=new URLSearchParams(Ct(Object.entries(r))).toString(),o=t.token_type+" "+t.access_token;n({urlString:a,authData:o})},shortenData:e}}(),O=S.getShortenParams,j=S.shortenData,P=Ze($(),2),A=P[0],k=P[1].isLoading,I=Ze(F(),2),T=I[0],Z=I[1].isLoading;return(0,l.useEffect)((function(){localStorage.hasOwnProperty("user")&&v(g(!0))}),[]),(0,l.useEffect)((function(){j.authData&&A(j).unwrap().then((function(){T(w).unwrap().then((function(t){var e=t.map((function(t){return Ie(Ie({},t),{},{short:"http://79.143.31.216/s/".concat(t.short)})}));v(h(e))})).catch((function(t){o(t.detail),setTimeout((function(){o("")}),2500)})),f()})).catch((function(t){n(t.data.detail[0].msg),setTimeout((function(){n("")}),2500)}))}),[j]),(0,l.useEffect)((function(){E(y,p,m,b)}),[p,m,b]),(0,l.useEffect)((function(){w.authData&&T(w).unwrap().then((function(t){var e=t.map((function(t){return Ie(Ie({},t),{},{short:"http://79.143.31.216/s/".concat(t.short)})}));v(h(e))})).catch((function(t){o(t.detail),setTimeout((function(){o("")}),2500)}))}),[w]),l.createElement(l.Fragment,null,l.createElement(tt,null,"STATISTICS"),l.createElement(nt,null,e&&l.createElement(et,{style:{color:"red"}},e),l.createElement(rt,{onSubmit:c((function(t){O(y,t)}))},l.createElement(at,Ae({type:"text",placeholder:"Shorten your link"},u("link"))),l.createElement(ot,{type:"submit",value:"Shorten",disabled:k}))),l.createElement(Pe,{data:d,statisticError:a,isLoading:Z}))},ze=function(){return l.createElement(c.UT,null,l.createElement(f.Z5,null,l.createElement(f.AW,{path:"/",element:l.createElement(D,null)},l.createElement(f.AW,{path:"login",element:l.createElement(Et,null)}),l.createElement(f.AW,{path:"register",element:l.createElement(Zt,null)}),l.createElement(f.AW,{path:"statistics",element:l.createElement(Le,null)}))))},De=n(4129);var Ue,Me,Re,_e=(0,d.configureStore)({reducer:(Ue={data:E},Me=_.reducerPath,Re=_.reducer,Me in Ue?Object.defineProperty(Ue,Me,{value:Re,enumerable:!0,configurable:!0,writable:!0}):Ue[Me]=Re,Ue),middleware:function(t){return t().concat(_.middleware)}});(0,De.setupListeners)(_e.dispatch);var qe=document.getElementById("app");(0,u.s)(qe).render(l.createElement(s.zt,{store:_e},l.createElement(ze,null)))}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,t=[],r.O=function(e,n,a,o){if(!n){var i=1/0;for(f=0;f<t.length;f++){n=t[f][0],a=t[f][1],o=t[f][2];for(var l=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[u])}))?n.splice(u--,1):(l=!1,o<i&&(i=o));if(l){t.splice(f--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var f=t.length;f>0&&t[f-1][2]>o;f--)t[f]=t[f-1];t[f]=[n,a,o]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,o,i=n[0],l=n[1],u=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(u)var f=u(r)}for(e&&e(n);c<i.length;c++)o=i[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(f)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),r.O(void 0,[5,586],(function(){return r(6005)}));var a=r.O(void 0,[5,586],(function(){return r(7678)}));a=r.O(a)}();