(this["webpackJsonprebew.club"]=this["webpackJsonprebew.club"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),i=c.n(a),l=(c(9),c(2)),r=function(e,t){var c=parseInt(t.currentTarget.value,10)||0;return console.debug(c),c>e?function(e,t){var c=t.toString().split("").pop()||"0";return console.debug(c),parseInt(c,10)}(0,c):c},u=function(e){return e.join(" ")},o=function(e){window.scrollTo({top:e.currentTarget.getBoundingClientRect().top,behavior:"smooth"})},j=(c(10),c(0)),b=function(e){var t=e.brew,c=e.setBrew,s=e.selected,n=e.setSelected,a=e.isTicking,i=u(["brew","brew"===s?"selected":""]),l="number-".concat(t);return Object(j.jsx)("section",{className:i,children:Object(j.jsx)("button",{onClick:function(){a||(n("brew"),c(++t))},children:Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("label",{children:"Brew"}),Object(j.jsx)("h2",{className:"count "+l,children:t})]})})})},d=(c(12),function(e){var t=e.onNew;return Object(j.jsxs)("section",{className:"controls",children:[Object(j.jsx)("button",{className:"old",disabled:!0,children:Object(j.jsx)("span",{children:" old "})}),Object(j.jsx)("button",{onClick:t,children:Object(j.jsx)("span",{children:" new "})})]})}),O=(c(13),function(e,t){return u(["f-cc",e,e===t?"active":""])}),m=function(e){var t=e.color,c=e.setColor,s=(e.selected,e.setSelected),n=u(["color"]),a=function(e){s("color"),c(e)};return Object(j.jsxs)("section",{className:n,children:[Object(j.jsx)("button",{className:O("pu-erh",t),onClick:function(){return a("pu-erh")},children:Object(j.jsx)("span",{className:"text",children:"Pu-erh"})}),Object(j.jsx)("button",{className:O("black",t),onClick:function(){return a("black")},children:Object(j.jsx)("span",{className:"text",children:"Black"})}),Object(j.jsx)("button",{className:O("oolong",t),onClick:function(){return a("oolong")},children:Object(j.jsx)("span",{className:"text",children:Object(j.jsxs)("span",{className:"olong",children:[Object(j.jsx)("span",{className:"oo",children:"Oo"}),"long"]})})}),Object(j.jsx)("button",{className:O("green",t),onClick:function(){return a("green")},children:Object(j.jsx)("span",{className:"text",children:"Green"})}),Object(j.jsx)("button",{className:O("white",t),onClick:function(){return a("white")},children:Object(j.jsx)("span",{className:"text",children:"White"})})]})},h=(c(14),function(e){var t=e.temperature,c=e.setTemperature,s=e.isCelsius,n=e.setIsCelsius,a=e.selected,i=e.setSelected,l=u(["amount-label","fahrenheit",s?"":"active"]),b=u(["amount-label","celsius",s?"active":""]),d=u(["temperature","temperature"===a?"selected":""]);return Object(j.jsxs)("section",{className:d,children:[Object(j.jsx)("input",{type:"tel",className:"input--temperature",value:t,onClick:function(e){o(e),i("temperature")},onChange:function(e){return c(r(212,e))}}),Object(j.jsx)("div",{className:"value",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("h2",{className:"amount",children:t})})}),Object(j.jsxs)("div",{className:"label",children:[Object(j.jsx)("button",{className:l,onClick:function(){return n(!1)},children:"\xb0F"}),Object(j.jsx)("button",{className:b,onClick:function(){return n(!0)},children:"\xb0C"})]})]})}),x=(c(15),function(e){return((e=e<0?0:e)<10?"0".concat(e):"".concat(e)).split("").map((function(e,t){return Object(j.jsx)("h2",{className:"value",children:e},"".concat(t,"-").concat(e))}))}),f=function(e){var t=e.time,c=e.setTime,s=e.selected,n=e.setSelected,a=function(e){var t=Math.floor(e/60);return[t,e-60*t]}(t),i=Object(l.a)(a,2),b=i[0],d=i[1],O=x(b),m=x(d),h=u(["timer","minutes"===s?"selected-min":"","seconds"===s?"selected-sec":""]);return Object(j.jsxs)("section",{className:h,children:[Object(j.jsxs)("section",{className:"capsule min",children:[Object(j.jsx)("input",{type:"tel",className:"input--timer",value:b,onClick:function(e){o(e),n("minutes")},onChange:function(e){return t=r(9,e),void c(60*t+d);var t}}),Object(j.jsx)("label",{className:"label",children:"min"}),Object(j.jsx)("div",{className:"values",children:O})]}),Object(j.jsxs)("section",{className:"capsule sec",children:[Object(j.jsx)("input",{type:"tel",className:"input--timer",value:d,onClick:function(e){o(e),n("seconds")},onChange:function(e){return t=r(59,e),void c(60*b+t);var t}}),Object(j.jsx)("label",{className:"label",children:"sec"}),Object(j.jsx)("div",{className:"values",children:m})]})]})},p=(c(16),function(e){var t=e.name,c=e.setName,n=e.selected,a=e.setSelected,i=Object(s.useState)(!0),r=Object(l.a)(i,2),o=r[0],b=r[1],d=u(["f-cc","name","name"===n?"selected":"",o?"start":""]);return Object(j.jsxs)("section",{className:d,children:[Object(j.jsx)("input",{type:"text",className:"input--text",placeholder:"Tea",value:t,onClick:function(){a("name")},onChange:function(e){var t=e.currentTarget.value;o&&(b(!1),t=t.replace("Tea","")),c(t)}}),Object(j.jsx)("h1",{className:"name__name",children:t})]})}),v=(c(17),function(e){var t=e.isDone,c=e.isOut,s=e.setIsOut,n=e.setTime,a=e.lastTime,i=u(["overlay",t?"done":"",c?"out":""]);return Object(j.jsx)("div",{onClick:function(){s(!0),n(a)},className:i})}),N=(c(18),function(e){var t=e.weight,c=e.setWeight,s=e.isMass,n=e.setIsMass,a=e.selected,i=e.setSelected,l=u(["amount-label","tsp",s?"":"active"]),b=u(["amount-label","g",s?"active":""]),d=u(["weight","weight"===a?"selected":""]);return Object(j.jsxs)("section",{className:d,children:[Object(j.jsx)("input",{type:"tel",className:"input--weight",value:t,onClick:function(e){o(e),i("weight")},onChange:function(e){return c(r(99,e))}}),Object(j.jsxs)("div",{className:"diamond",children:[Object(j.jsx)("button",{className:l,onClick:function(){return n(!1)},children:"tsp"}),Object(j.jsx)("h2",{className:"value",children:t}),Object(j.jsx)("button",{className:b,onClick:function(){return n(!0)},children:"g"})]})]})}),g=(c(19),function(e){var t=e.water,c=e.setWater,s=e.isMass,n=e.setIsMass,a=e.selected,i=e.setSelected,l=u(["amount-label","oz",s?"":"active"]),b=u(["amount-label","g",s?"active":""]),d=u(["water","water"===a?"selected":""]);return Object(j.jsxs)("section",{className:d,children:[Object(j.jsx)("input",{type:"tel",className:"input--water glass",value:t,onClick:function(e){o(e),i("water")},onChange:function(e){return c(r(999,e))}}),Object(j.jsx)("div",{className:"value",children:Object(j.jsx)("div",{className:"glass",children:Object(j.jsx)("h2",{className:"amount",children:t})})}),Object(j.jsxs)("div",{className:"label",children:[Object(j.jsx)("button",{className:l,onClick:function(){return n(!1)},children:"oz"}),Object(j.jsx)("button",{className:b,onClick:function(){return n(!0)},children:"g"})]})]})});c(20);var C=function(){var e=Object(s.useState)("Tea"),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(l.a)(a,2),r=i[0],o=i[1],O=Object(s.useState)(0),x=Object(l.a)(O,2),C=x[0],w=x[1],S=Object(s.useState)(!0),k=Object(l.a)(S,2),T=k[0],I=k[1],M=Object(s.useState)(""),y=Object(l.a)(M,2),B=y[0],F=y[1],W=Object(s.useState)(0),D=Object(l.a)(W,2),E=D[0],P=D[1],z=Object(s.useState)(!0),J=Object(l.a)(z,2),L=J[0],_=J[1],G=Object(s.useState)(0),R=Object(l.a)(G,2),q=R[0],A=R[1],H=Object(s.useState)(!0),K=Object(l.a)(H,2),Q=K[0],U=K[1],V=Object(s.useState)(0),X=Object(l.a)(V,2),Y=X[0],Z=X[1],$=Object(s.useState)(!1),ee=Object(l.a)($,2),te=ee[0],ce=ee[1],se=Object(s.useState)(!1),ne=Object(l.a)(se,2),ae=ne[0],ie=ne[1],le=Object(s.useState)(!1),re=Object(l.a)(le,2),ue=re[0],oe=re[1],je=Object(s.useState)(15),be=Object(l.a)(je,2),de=be[0],Oe=be[1],me=Object(s.useState)(de),he=Object(l.a)(me,2),xe=he[0],fe=he[1],pe=Object(s.useState)(!0),ve=Object(l.a)(pe,2),Ne=ve[0],ge=(ve[1],function(e){return ce(!te),ie(!1),oe(!1),Ne&&fe(de+15),Z(e)});Object(s.useEffect)((function(){if(!te)return function(){};var e=setTimeout((function(){Oe(de-1),de<=0&&(ce(!1),ie(!0),Oe(0))}),1e3);return function(){clearTimeout(e)}}),[te,de]),Object(s.useEffect)((function(){ae&&ue&&setTimeout((function(){ie(!1),o("overlay")}),200)}),[ae,ue]);var Ce=u([window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://")?"pwa":"",r?"selecting":""]);return Object(j.jsxs)("main",{className:Ce,children:[Object(j.jsx)(d,{onNew:function(){n("Tea"),F(""),o(""),ge(0),A(0),w(0),P(0),Oe(0),ie(!1),ce(!1),oe(!1)}}),Object(j.jsx)(p,{selected:r,setSelected:o,name:c,setName:n}),Object(j.jsx)(h,{selected:r,setSelected:o,temperature:C,setTemperature:w,isCelsius:T,setIsCelsius:I}),Object(j.jsx)(m,{selected:r,setSelected:o,color:B,setColor:F}),Object(j.jsx)(N,{selected:r,setSelected:o,weight:E,setWeight:P,isMass:L,setIsMass:_}),Object(j.jsx)(g,{selected:r,setSelected:o,water:q,setWater:A,isMass:Q,setIsMass:U}),Object(j.jsx)(f,{selected:r,setSelected:o,time:de,setTime:Oe}),Object(j.jsx)(b,{selected:r,setSelected:o,isTicking:te,brew:Y,setBrew:ge}),Object(j.jsx)(v,{isDone:ae,isOut:ue,setIsOut:oe,setTime:Oe,lastTime:xe})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),w()}],[[21,1,2]]]);
//# sourceMappingURL=main.db651b83.chunk.js.map