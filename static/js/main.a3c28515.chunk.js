(this["webpackJsonprebew.club"]=this["webpackJsonprebew.club"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c,n=s(1),a=s.n(n),r=s(7),i=s.n(r),l=(s(14),s(2)),o=function(e,t){var s=parseInt(t.currentTarget.value,10)||0;return console.debug(s),s>e?function(e,t){var s=t.toString().split("").pop()||"0";return console.debug(s),parseInt(s,10)}(0,s):s},u=function(e){return e.join(" ")},j=function(e){window.scrollTo({top:e.currentTarget.getBoundingClientRect().top,behavior:"smooth"})},b=(s(15),s(0)),m=function(e){var t=e.brew,s=e.selected,c=e.onClick,n=u(["brew","brew"===s?"selected":""]),a="number-".concat(t);return Object(b.jsx)("section",{className:n,children:Object(b.jsx)("button",{onClick:c,children:Object(b.jsxs)("div",{className:"text",children:[Object(b.jsx)("label",{children:"Brew"}),Object(b.jsx)("h2",{className:"count "+a,children:t})]})})})},d=(s(17),function(e){var t=e.onNew,s=e.onOld;return Object(b.jsxs)("section",{className:"controls",children:[Object(b.jsx)("button",{className:"old",onClick:s,children:Object(b.jsx)("span",{children:" past "})}),Object(b.jsx)("button",{className:"new",onClick:t,children:Object(b.jsx)("span",{children:" new "})})]})}),O=(s(18),function(e,t){return u(["f-cc",e,e===t?"active":""])}),h=function(e){var t=e.color,s=e.setColor,c=(e.selected,e.setSelected),n=u(["color"]),a=function(e){c("color"),s(e)};return Object(b.jsxs)("section",{className:n,children:[Object(b.jsx)("button",{className:O("pu-erh",t),onClick:function(){return a("pu-erh")},children:Object(b.jsx)("span",{className:"text",children:"Pu-erh"})}),Object(b.jsx)("button",{className:O("black",t),onClick:function(){return a("black")},children:Object(b.jsx)("span",{className:"text",children:"Black"})}),Object(b.jsx)("button",{className:O("oolong",t),onClick:function(){return a("oolong")},children:Object(b.jsx)("span",{className:"text",children:Object(b.jsxs)("span",{className:"olong",children:[Object(b.jsx)("span",{className:"oo",children:"Oo"}),"long"]})})}),Object(b.jsx)("button",{className:O("green",t),onClick:function(){return a("green")},children:Object(b.jsx)("span",{className:"text",children:"Green"})}),Object(b.jsx)("button",{className:O("white",t),onClick:function(){return a("white")},children:Object(b.jsx)("span",{className:"text",children:"White"})})]})},x=(s(19),function(e){var t=e.temperature,s=e.setTemperature,c=e.isCelsius,n=e.setIsCelsius,a=e.selected,r=e.setSelected,i=u(["amount-label","fahrenheit",c?"":"active"]),l=u(["amount-label","celsius",c?"active":""]),m=u(["temperature","temperature"===a?"selected":""]);return Object(b.jsxs)("section",{className:m,children:[Object(b.jsx)("input",{type:"tel",className:"input--temperature",value:t,onClick:function(e){j(e),r("temperature")},onChange:function(e){return s(o(212,e))}}),Object(b.jsx)("div",{className:"value",children:Object(b.jsx)("div",{className:"circle",children:Object(b.jsx)("h2",{className:"amount",children:t})})}),Object(b.jsxs)("div",{className:"label",children:[Object(b.jsx)("button",{className:i,onClick:function(){return n(!1)},children:"\xb0F"}),Object(b.jsx)("button",{className:l,onClick:function(){return n(!0)},children:"\xb0C"})]})]})}),p=(s(20),function(e){return((e=e<0?0:e)<10?"0".concat(e):"".concat(e)).split("").map((function(e,t){return Object(b.jsx)("h2",{className:"value",children:e},"".concat(t,"-").concat(e))}))}),f=function(e){var t=e.time,s=e.setTime,c=e.selected,n=e.setSelected,a=function(e){var t=Math.floor(e/60);return[t,e-60*t]}(t),r=Object(l.a)(a,2),i=r[0],m=r[1],d=p(i),O=p(m),h=u(["timer","minutes"===c?"selected-min":"","seconds"===c?"selected-sec":""]);return Object(b.jsxs)("section",{className:h,children:[Object(b.jsxs)("section",{className:"capsule min",children:[Object(b.jsx)("input",{type:"tel",className:"input--timer",value:i,onClick:function(e){j(e),n("minutes")},onChange:function(e){return t=o(9,e),void s(60*t+m);var t}}),Object(b.jsx)("label",{className:"label",children:"min"}),Object(b.jsx)("div",{className:"values",children:d})]}),Object(b.jsxs)("section",{className:"capsule sec",children:[Object(b.jsx)("input",{type:"tel",className:"input--timer",value:m,onClick:function(e){j(e),n("seconds")},onChange:function(e){return t=o(59,e),void s(60*i+t);var t}}),Object(b.jsx)("label",{className:"label",children:"sec"}),Object(b.jsx)("div",{className:"values",children:O})]})]})},N=(s(21),function(e){var t=e.name,s=e.setName,c=e.selected,n=e.setSelected,a="Tea"===t,r=u(["f-cc","name","name"===c?"selected":"",a?"start":""]);return Object(b.jsxs)("section",{className:r,children:[Object(b.jsx)("input",{type:"text",className:"input--text",placeholder:"Tea",value:t,onClick:function(){n("name")},onChange:function(e){var t=e.currentTarget.value;a&&(t=t.replace("Tea","")),s(t)}}),Object(b.jsx)("h1",{className:"name__name",children:t})]})}),w=(s(22),function(e){var t=e.isDone,s=e.isOut,c=e.setIsOut,n=e.setTime,a=e.lastTime,r=u(["overlay",t?"done":"",s?"out":""]);return Object(b.jsx)("div",{onClick:function(){c(!0),n(a)},className:r})}),v=(s(23),function(e){var t=e.weight,s=e.setWeight,c=e.isMass,n=e.setIsMass,a=e.selected,r=e.setSelected,i=u(["amount-label","tsp",c?"":"active"]),l=u(["amount-label","g",c?"active":""]),m=u(["weight","weight"===a?"selected":""]);return Object(b.jsxs)("section",{className:m,children:[Object(b.jsx)("input",{type:"tel",className:"input--weight",value:t,onClick:function(e){j(e),r("weight")},onChange:function(e){return s(o(99,e))}}),Object(b.jsxs)("div",{className:"diamond",children:[Object(b.jsx)("button",{className:i,onClick:function(){return n(!1)},children:"tsp"}),Object(b.jsx)("h2",{className:"value",children:t}),Object(b.jsx)("button",{className:l,onClick:function(){return n(!0)},children:"g"})]})]})}),g=(s(24),function(e){var t=e.water,s=e.setWater,c=e.isMass,n=e.setIsMass,a=e.selected,r=e.setSelected,i=u(["amount-label","oz",c?"":"active"]),l=u(["amount-label","g",c?"active":""]),m=u(["water","water"===a?"selected":""]);return Object(b.jsxs)("section",{className:m,children:[Object(b.jsx)("input",{type:"tel",className:"input--water glass",value:t,onClick:function(e){j(e),r("water")},onChange:function(e){return s(o(999,e))}}),Object(b.jsx)("div",{className:"value",children:Object(b.jsx)("div",{className:"glass",children:Object(b.jsx)("h2",{className:"amount",children:t})})}),Object(b.jsxs)("div",{className:"label",children:[Object(b.jsx)("button",{className:i,onClick:function(){return n(!1)},children:"oz"}),Object(b.jsx)("button",{className:l,onClick:function(){return n(!0)},children:"g"})]})]})}),S=s(8),C=s.n(S),k=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C.a,{setup:function(t,s){c=t;t.createCanvas(320,320).parent(s);t.frameRate(120),t.strokeWeight(5),t.stroke("#26906D"),t.clear();var n=t.createButton("clear");n.position(310,500),n.mousePressed((function(){return c.clear()}));var a=t.createButton("back");a.position(27.5,500),a.mousePressed(e.back),e.start()},draw:function(e){e.line(e.mouseX,e.mouseY,e.pmouseX,e.pmouseY)}}),Object(b.jsx)("p",{className:"subject",children:"Draw an apple"})]})},T=s(3),y=(s(25),function(e,t){return e?Object(b.jsxs)(b.Fragment,{children:[e,Object(b.jsx)("span",{className:"unit",children:t})]}):Object(b.jsx)("span",{children:"-"})}),I=function(e){var t=e.brew,s=t.brewNumber,c=t.time,n=t.temperature,a=t.water,r=t.weight,i=t.temperatureUnit,l=t.waterUnit,o=t.weightUnit;return Object(b.jsxs)("div",{className:"brew-session",children:[Object(b.jsx)("span",{className:"session-brew-number",children:s}),Object(b.jsx)("span",{className:"session-time",children:y(c,"s")}),Object(b.jsx)("span",{className:"session-weight",children:y(r,o)}),Object(b.jsx)("span",{className:"session-temperature",children:y(n,"\xb0".concat(i))}),Object(b.jsx)("span",{className:"session-water",children:y(a,l)})]})},U=(s(26),{id:1,name:"Hairy Crab",color:"oolong",brews:[{brewNumber:1,time:15,temperature:195,temperatureUnit:"\xb0F",water:120,waterUnit:"g",mass:9,massUnit:"g"},{brewNumber:2,time:30,temperature:195,temperatureUnit:"F",water:110,waterUnit:"g",mass:9,massUnit:"g"}]}),M=function(e){var t=e.session,s=t.id,c=t.name,n=t.color,a=t.brews,r=s.toString().padStart(3,"0"),i=a.map((function(e){return Object(b.jsx)(I,{brew:e},"".concat(r,"-").concat(e.brewNumber))}));return Object(b.jsxs)("article",{className:"tea-session",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("span",{className:"name",children:"Tea"===c?Object(b.jsx)("span",{className:"mystery",children:"???"}):c}),n?"-":null," ",n]}),Object(b.jsxs)("span",{className:"id",children:[Object(b.jsx)("span",{className:"light",children:"("}),r,Object(b.jsx)("span",{className:"light",children:")"})]})]}),Object(b.jsxs)("div",{className:"labels",children:[Object(b.jsx)("span",{className:"labels-brew-number",children:"brew"}),Object(b.jsx)("span",{children:"time"}),Object(b.jsx)("span",{children:"weight"}),Object(b.jsx)("span",{children:"temperature"}),Object(b.jsx)("span",{children:"water"})]}),i]})},F=(s(9),"sessions"),B=[{id:1,name:"",color:"",brews:[]}];function D(){var e=JSON.stringify(B);return localStorage.setItem(F,e),e}function J(){var e=localStorage.getItem(F)||D();return JSON.parse(e)}function W(e){var t=JSON.stringify(e);return localStorage.setItem(F,t),e}function P(e){var t=J(),s=function(e){var t,s=J(),c=e.id-1;return(null===(t=s[c])||void 0===t?void 0:t.brews)||[]}(e),c=Object(T.a)(Object(T.a)({},e),{},{brews:s});t[e.id-1]=c;var n=JSON.stringify(t);return localStorage.setItem(F,n),c}Object(T.a)(Object(T.a)({},U),{},{id:2,name:"Mao Feng",color:"black"});var E=function(e){var t=e.onBack,s=J().sort((function(e,t){return t.id-e.id})).map((function(e){return Object(b.jsx)(M,{session:e},e.id)}));return Object(b.jsxs)("article",{className:"history",children:[Object(b.jsxs)("section",{className:"controls",children:[Object(b.jsx)("button",{className:"back",onClick:t,children:Object(b.jsx)("span",{children:" now "})}),Object(b.jsx)("button",{onClick:function(){window.confirm("really?")&&(localStorage.removeItem(F),t())},children:Object(b.jsx)("span",{children:" clear "})})]}),Object(b.jsx)("div",{className:"gap"}),Object(b.jsx)("section",{className:"sessions",children:s})]})},z=(s(27),function(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://")}),L=function(){var e=localStorage.getItem(F)||D();return JSON.parse(e).pop()}(),R=L.brews[L.brews.length-1]||{},X=function(e){return e+15};var Y=function(){var e=Object(n.useState)(L.id),t=Object(l.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(L.name||"Tea"),r=Object(l.a)(a,2),i=r[0],o=r[1],j=Object(n.useState)(L.color||""),O=Object(l.a)(j,2),p=O[0],S=O[1],C=Object(n.useState)(R.brewNumber||0),T=Object(l.a)(C,2),y=T[0],I=T[1],U=Object(n.useState)(R.temperature||0),M=Object(l.a)(U,2),F=M[0],B=M[1],D=Object(n.useState)("C"===R.temperatureUnit),Y=Object(l.a)(D,2),_=Y[0],G=Y[1],H=Object(n.useState)(R.weight||0),q=Object(l.a)(H,2),A=q[0],K=q[1],Q=Object(n.useState)("g"===R.weightUnit),V=Object(l.a)(Q,2),Z=V[0],$=V[1],ee=Object(n.useState)(R.water||0),te=Object(l.a)(ee,2),se=te[0],ce=te[1],ne=Object(n.useState)("g"===R.waterUnit),ae=Object(l.a)(ne,2),re=ae[0],ie=ae[1],le=Object(n.useState)(R.time||X(0)),oe=Object(l.a)(le,2),ue=oe[0],je=oe[1],be=Object(n.useState)(ue),me=Object(l.a)(be,2),de=me[0],Oe=me[1],he=Object(n.useState)("main"),xe=Object(l.a)(he,2),pe=xe[0],fe=xe[1],Ne=Object(n.useState)(""),we=Object(l.a)(Ne,2),ve=we[0],ge=we[1],Se=Object(n.useState)(!0),Ce=Object(l.a)(Se,2),ke=Ce[0],Te=(Ce[1],Object(n.useState)(!1)),ye=Object(l.a)(Te,2),Ie=ye[0],Ue=ye[1],Me=Object(n.useState)(!1),Fe=Object(l.a)(Me,2),Be=Fe[0],De=Fe[1],Je=Object(n.useState)(!1),We=Object(l.a)(Je,2),Pe=We[0],Ee=We[1],ze={brewNumber:y,time:de,temperature:F,weight:A,water:se,temperatureUnit:_?"C":"F",waterUnit:re?"g":"oz",weightUnit:Z?"g":"tsp"},Le={id:s,name:i,color:p},Re=function(e){return Ue(!Ie),De(!1),Ee(!1),ke&&Oe(X(ue)),I(e)};Object(n.useEffect)((function(){!function(){if(!Ie)return function(){};var e=setTimeout((function(){je(ue-1),ue<=0&&(Ue(!1),De(!0),je(0))}),1e3)}()}),[Ie,ue]),Object(n.useEffect)((function(){Be&&Pe&&setTimeout((function(){De(!1),ge("overlay")}),200)}),[Be,Pe]);var Xe=function(){0!==y&&(P(Le),function(e,t){var s=J(),c=e.id-1,n=s[c],a=t.brewNumber-1;n.brews[a]=t,s[c]=n,W(s)}(Le,ze))};Object(n.useEffect)((function(){Xe()}),[y]);var Ye=u(["main",z()?"pwa":"",ve?"selecting":""]);return"history"===pe?Object(b.jsxs)("main",{children:[Object(b.jsx)(E,{onBack:function(){fe("main")}}),Object(b.jsx)(w,{isDone:Be,isOut:Pe,setIsOut:Ee,setTime:je,lastTime:de})]}):"draw"===pe?Object(b.jsx)("main",{className:"draw",children:Object(b.jsxs)("article",{children:[Object(b.jsx)(k,{start:function(){},back:function(){return fe("main")}}),Object(b.jsx)(f,{selected:ve,setSelected:ge,time:ue,setTime:je}),Object(b.jsx)(w,{isDone:Be,isOut:Pe,setIsOut:Ee,setTime:je,lastTime:de})]})}):Object(b.jsxs)("main",{children:[Object(b.jsxs)("article",{className:Ye,children:[Object(b.jsx)("p",{className:"pwa",children:z()?"pwa":"web"}),Object(b.jsx)(d,{onOld:function(){1===s&&0===y||fe("history")},onNew:function(){o("Tea"),S(""),ge(""),Re(0),ce(0),B(0),K(0),je(ke?X(0):0),De(!1),Ue(!1),Ee(!1),c(s+1)}}),Object(b.jsx)(N,{selected:ve,setSelected:ge,name:i,setName:o}),Object(b.jsx)(x,{selected:ve,setSelected:ge,temperature:F,setTemperature:B,isCelsius:_,setIsCelsius:G}),Object(b.jsx)(h,{selected:ve,setSelected:ge,color:p,setColor:S}),Object(b.jsx)(v,{selected:ve,setSelected:ge,weight:A,setWeight:K,isMass:Z,setIsMass:$}),Object(b.jsx)(g,{selected:ve,setSelected:ge,water:se,setWater:ce,isMass:re,setIsMass:ie}),Object(b.jsx)(f,{selected:ve,setSelected:ge,time:ue,setTime:je}),Object(b.jsx)(m,{selected:ve,brew:y,onClick:function(){Ie||(ge("brew"),Re(y+1),fe("draw"))}}),Object(b.jsx)("div",{className:"sip",children:"sip"})]}),Object(b.jsx)(w,{isDone:Be,isOut:Pe,setIsOut:Ee,setTime:je,lastTime:de})]})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,29)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(Y,{})}),document.getElementById("root")),_()}],[[28,1,2]]]);
//# sourceMappingURL=main.a3c28515.chunk.js.map