(this["webpackJsonpinfoskjerm-kurs"]=this["webpackJsonpinfoskjerm-kurs"]||[]).push([[0],{30:function(e,t,n){e.exports=n(72)},35:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(28),c=n.n(r),l=(n(35),function(){return console.log("Tittel lastet inn"),o.a.createElement("h1",null,"Inforskjerm")}),i=n(5),s=n(29),u=n.n(s)()({clientName:"gerhardg-inforskjermkurs"}),m=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){u.getBikeRentalStationsByPosition({latitude:63.428311,longitude:10.392514},230).then((function(e){return r(e)}))}),[]),o.a.createElement("div",{className:"Bikes"},n.map((function(e){return o.a.createElement(d,{key:e.id,station:e})})))},d=function(e){var t=e.station,n=t.name,a=t.bikesAvailable,r=t.spacesAvailable;return console.log(n,a,r),o.a.createElement("div",{className:"Station"},n," - ",a,":",r)},f=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){console.log("conponent rendred"),fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1").then((function(e){return e.json()})).then((function(e){return r(e.data.children[0].data)}))}),[]),console.log(n),o.a.createElement("div",{className:"DadJoke"},o.a.createElement("p",null,n.title),o.a.createElement("p",null,n.selftext))};n(71);var h=function(){return console.log("Heisan"),o.a.createElement("div",{className:"App"},o.a.createElement(l,null),o.a.createElement(f,null),o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.d4751fd3.chunk.js.map