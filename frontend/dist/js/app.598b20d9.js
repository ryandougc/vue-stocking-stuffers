(function(t){function e(e){for(var r,o,c=e[0],u=e[1],l=e[2],s=0,h=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},i={app:0},a=[];function c(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d5db0d4b"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"649cc656"}[t]+".css",i=u.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===i))return e()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){l=h[c],s=l.getAttribute("data-href");if(s===r||s===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[t],d.parentNode.removeChild(d),n(a)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(t);var h=new Error;l=function(e){s.onerror=s.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",h.name="ChunkLoadError",h.type=r,h.request=o,n[1](h)}i[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"004b":function(t,e,n){"use strict";n("fafb")},"04a4":function(t,e,n){"use strict";n("2608")},2608:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"app"},i={id:"nav"},a=Object(r["g"])("Home"),c=Object(r["g"])(" | "),u=Object(r["g"])("Add Item");function l(t,e){var n=Object(r["x"])("router-link"),l=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])("div",o,[Object(r["h"])("div",i,[Object(r["h"])(n,{to:"/"},{default:Object(r["E"])((function(){return[a]})),_:1}),c,Object(r["h"])(n,{to:"/create"},{default:Object(r["E"])((function(){return[u]})),_:1})]),Object(r["h"])(l)])}n("004b");const s={};s.render=l;var h=s,d=n("a18c");Object(r["d"])(h).use(d["a"]).mount("#app")},a18c:function(t,e,n){"use strict";n("d3b7");var r=n("6c02"),o=n("7a23"),i={class:"home"};function a(t,e,n,r,a,c){var u=Object(o["x"])("Table");return Object(o["q"])(),Object(o["e"])("div",i,[Object(o["h"])(u,{data:a.data},null,8,["data"])])}n("4160"),n("fb6a"),n("b0c0"),n("159b");var c=n("bc3a"),u=n.n(c),l=Object(o["G"])("data-v-1a2e41fb");Object(o["t"])("data-v-1a2e41fb");var s={id:"table-component"},h={id:"table-filters"},d=Object(o["h"])("option",{value:"10"},"10",-1),f=Object(o["h"])("option",{value:"20"},"20",-1),m=Object(o["h"])("option",{value:"30"},"30",-1),p={id:"table"},b=Object(o["h"])("svg",{fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[Object(o["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"})],-1),v=Object(o["h"])("th",null,null,-1),g=Object(o["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1),j={id:"pagination"};Object(o["r"])();var O=l((function(t,e,n,r,i,a){return Object(o["q"])(),Object(o["e"])("div",s,[Object(o["h"])("div",h,[Object(o["F"])(Object(o["h"])("input",{type:"text",id:"search-bar",class:"input",placeholder:"Search...",autocomplete:"off","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.searchQuery=t})},null,512),[[o["C"],i.searchQuery]]),Object(o["F"])(Object(o["h"])("select",{id:"item-limit",name:"item-limit",class:"input",autocomplete:"off","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.itemLimit=t})},[d,f,m],512),[[o["B"],i.itemLimit]])]),Object(o["h"])("table",p,[Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(a.columns,(function(t){return Object(o["q"])(),Object(o["e"])("th",{key:t},[Object(o["h"])("div",{class:"table-header-content",onClick:function(e){return a.sort(t)}},[Object(o["h"])("p",null,Object(o["z"])(a.capitalize(t)),1),Object(o["h"])("div",{class:"icon",id:t},[b],8,["id"])],8,["onClick"])])})),128)),v])]),(Object(o["q"])(),Object(o["e"])("tbody",{key:i.itemRow},[Object(o["h"])(o["b"],{name:"list"},{default:l((function(){return[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(a.filteredData,(function(t,e){return Object(o["q"])(),Object(o["e"])("tr",{key:"row-".concat(e),id:t.id},[Object(o["h"])("td",null,Object(o["z"])(t.name),1),Object(o["h"])("td",null,Object(o["z"])(t.power),1),Object(o["h"])("td",null,[(Object(o["q"])(),Object(o["e"])("svg",{onClick:function(e){return a.deleteItem(t.id)},fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[g],8,["onClick"]))])],8,["id"])})),128))]})),_:1})]))]),Object(o["h"])("div",j,[Object(o["h"])("button",{class:"input",onClick:e[3]||(e[3]=function(t){return i.page=a.changePage(-1)})},"Prev"),Object(o["h"])("button",{class:"input",onClick:e[4]||(e[4]=function(t){return i.page=a.changePage(1)})},"Next")])])})),w=(n("99af"),n("4de4"),n("caad"),n("a434"),n("25f0"),n("2532"),{name:"Table",props:{data:Array},data:function(){return{searchQuery:"",itemLimit:10,page:1,sortDirection:0,sortColumn:null,itemRow:0,show:!0}},computed:{sortedData:function(){var t=this;return this.data.forEach((function(e){for(var n in e)"string"==typeof e[n]&&(e[n]=t.capitalize(e[n]))})),this.data},filteredData:function(){var t=this,e=this.sortedData.filter((function(e){var n=t.searchQuery.toLowerCase(),r=[],o=null;for(var i in e)"id"!==i&&r.push(e[i].toString().toLowerCase());return r.forEach((function(t){t.includes(n)&&(o=!0)})),t.columns.forEach((function(t){e[t]&&null!=e[t]||(e[t]="-")})),o}));return e.slice(this.itemMin,this.itemMax)},columns:function(){var t=[],e=0;return this.sortedData.forEach((function(n){var r=0,o=[];for(var i in n)"id"!==i&&(r++,o.push(i));r>e&&(e=r,t=[].concat(o))})),t},tableData:function(){return this.filteredData.slice(this.itemMin,this.itemMax)},limitTable:function(){return"20"===this.itemLimit?20:"30"===this.itemLimit?30:10},itemMax:function(){var t=this.limitTable*this.page;return t>this.sortedData.length&&(t=this.sortedData.length),t},itemMin:function(){return this.limitTable*this.page-this.limitTable},maxPage:function(){var t=this.sortedData;""!==this.searchQuery&&(t=this.fitleredRows);var e=t.length/this.limitTable;return Math.ceil(e)}},methods:{capitalize:function(t){if("string"!==typeof t)return t;var e="";return e=t.charAt(0).toUpperCase()+t.slice(1),e},changePage:function(t){return t<0&&this.page>1||t>0&&this.page<this.maxPage?this.page+=t:this.page},sort:function(t){var e=this;this.sortColumn===t?1===this.sortDirection?this.sortDirection=-1:this.sortDirection=1:(this.sortColumn=t,this.sortDirection=1);var n=document.querySelectorAll(".icon");n.forEach((function(t){t.innerHTML='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>'})),1===this.sortDirection?document.getElementById(this.sortColumn).innerHTML='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>':-1===this.sortDirection&&(document.getElementById(this.sortColumn).innerHTML='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"></path></svg>'),this.sortedData.sort((function(t,n){return 1===e.sortDirection?void 0===t[e.sortColumn]&&void 0===n[e.sortColumn]?1:void 0===t[e.sortColumn]&&void 0!==n[e.sortColumn]?-1:t[e.sortColumn]>n[e.sortColumn]?1:-1:t[e.sortColumn]<n[e.sortColumn]?1:-1}))},deleteItem:function(t){var e=this;u.a.delete("".concat("http://localhost:3000/","item/").concat(t)).then((function(n){200===n.status&&e.sortedData.forEach((function(n,r){n.id===t&&e.sortedData.splice(r,1)}))})).catch(console.log)}},watch:{itemLimit:function(){this.page=1}}});n("04a4");w.render=O,w.__scopeId="data-v-1a2e41fb";var y=w,k={name:"Home",components:{Table:y},data:function(){return{data:[]}},created:function(){var t=this;u.a.get("".concat("http://localhost:3000/","item")).then((function(e){e.data.forEach((function(e){t.data.push({name:t.capitalize(e.name),power:t.capitalize(e.name.charAt(3)),id:e._id})}))})).catch((function(t){console.log(t)}))},methods:{capitalize:function(t){if("string"!==typeof t)return t;var e="";return e=t.charAt(0).toUpperCase()+t.slice(1),e}}};k.render=a;var C=k,x=[{path:"/",name:"Home",component:C},{path:"/create",name:"Create",component:function(){return n.e("about").then(n.bind(null,"d879"))}}],D=Object(r["a"])({history:Object(r["b"])(location.pathname),routes:x});e["a"]=D},fafb:function(t,e,n){}});
//# sourceMappingURL=app.598b20d9.js.map