(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(5),o=t.n(i),c=(t(13),t(7)),l=t(6),s=t(3),u=(t(14),function(){return a.a.createElement("svg",{className:"checkmark",xmlns:"http://www.w3.org/2000/svg",fill:"#00a86b",width:"24",height:"24",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"}))});function d(e){var n=e.title,t=e.selected,r=e.handleClick;return a.a.createElement("div",{className:"item hvr-push",onClick:r},n,t&&a.a.createElement(u,null))}var m=["Pinlig stillhet","Stirrer p\xe5 video av deg selv","Jeg tror du er p\xe5 mute","Kan dere se skjermen min n\xe5?","Barnelyder i bakgrunnen","Familiemedlem kommer inn i rommet","Kan du mute mikrofonen din?","H\xf8rer dere meg?","Hallo? Hallo?","Beklager, jeg har litt tekniske problemer","Nei, den laster fortsatt","Hvem var det som nettopp joina?","Oi, sorry, jeg var p\xe5 mute","Hosting","Beklager at jeg er sen, forrige m\xf8te varte litt lenger","Vi h\xf8rer deg, h\xf8rer du oss?","Vi ser ikke skjermen din","Deler du?","\xc5 beklager, du f\xf8rst","Jeg har et nytt m\xf8te n\xe5, s\xe5 jeg m\xe5 g\xe5","Sender du ut det p\xe5 mail etterp\xe5?","Glemmer at det er video; laang gjesp","Er vi ferdige da?","Kan vi parkere den?","5min sm\xe5prat mens man venter p\xe5 siste deltaker"].sort((function(){return.5-Math.random()})).map((function(e,n){return{key:n,selected:!1,title:e}})),f=function(e){var n=e.clearBingo;return a.a.createElement("div",{className:"bingo-overlay",onClick:n},a.a.createElement("span",null,"BINGO!"))};var g=function(){var e=Object(r.useState)(m),n=Object(s.a)(e,2),t=n[0],i=n[1],o=Object(r.useState)(!1),u=Object(s.a)(o,2),g=u[0],v=u[1],h=function(e){return function(){p(e),function(){var e=Array(5).fill(0),n=Array(5).fill(0),r=Array(2).fill(0);t.forEach((function(t){if(t.selected){var a=Math.floor(t.key/5),i=t.key%5;e[a]++,n[i]++,a===i&&r[0]++,a===5-(i+1)&&r[1]++}})),(e.includes(5)||n.includes(5)||r.includes(5))&&v(!0)}()}},p=function(e){var n=Object(l.a)(t);n[e].selected=!n[e].selected,i(n)},k=function(){return i(t.map((function(e){return Object(c.a)({},e,{selected:!1})})))};return a.a.createElement("div",{className:"main-content"},a.a.createElement("div",{className:"title"},"M\xf8tebingo"),a.a.createElement("div",{className:"card"},t.map((function(e,n){return a.a.createElement(d,Object.assign({},e,{handleClick:h(n)}))}))),a.a.createElement("aside",null,a.a.createElement("button",{className:"clear-button",onClick:k},"T\xf8m brettet")),g&&a.a.createElement(f,{clearBingo:function(){v(!1),k()}}))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(n,e)}))}}()},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.bca2be72.chunk.js.map