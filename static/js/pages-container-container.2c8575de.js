(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-container-container"],{"3e25":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"page-title h2"},[t._v("竖直排列")]),i("v-uni-canvas",{staticClass:"canvas",staticStyle:{height:"300upx"},attrs:{id:"canvas-container-vertical","canvas-id":"canvas-container-vertical"}}),i("v-uni-view",{staticClass:"page-title h2"},[t._v("水平排列")]),i("v-uni-canvas",{staticClass:"canvas",staticStyle:{height:"230upx"},attrs:{id:"canvas-container-horizontal","canvas-id":"canvas-container-horizontal"}}),i("v-uni-view",{staticClass:"page-title h2"},[t._v("绝对定位")]),i("v-uni-canvas",{staticClass:"canvas",staticStyle:{height:"120upx"},attrs:{id:"canvas-container-absolute","canvas-id":"canvas-container-absolute"}}),i("v-uni-view",{staticClass:"page-title h2"},[t._v("混排")]),i("v-uni-canvas",{staticClass:"canvas",staticStyle:{height:"430upx"},attrs:{id:"canvas-container-multiple-layout","canvas-id":"canvas-container-multiple-layout"}}),i("web-link",{attrs:{href:"https://github.com/xlfsummer/mp-painter/tree/master/example/src/pages/container/container.vue"}})],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"4e84":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("8e6e"),i("ac6a"),i("456d");var n=a(i("bd86")),c=a(i("d109"));function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach(function(e){(0,n.default)(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var u={data:function(){return{}},onReady:function(){var t={left:10,top:10};new c.default(uni.createCanvasContext("canvas-container-vertical")).draw({type:"container",direction:"vertical",top:5,left:15,children:[r({type:"text"},t,{content:"文本文本文本"}),r({type:"image"},t,{width:100,height:100,src:i("666b")}),r({type:"rect"},t,{width:200,height:40,background:"#3f3"})]}),new c.default(uni.createCanvasContext("canvas-container-horizontal")).draw({type:"container",direction:"horizontal",top:5,left:15,children:[r({type:"text"},t,{content:"文本文本文本"}),r({type:"image"},t,{width:100,height:100,src:i("666b")}),r({type:"rect"},t,{width:200,height:40,background:"#3f3"})]}),new c.default(uni.createCanvasContext("canvas-container-absolute")).draw({type:"container",direction:"vertical",top:5,left:15,children:[{type:"rect",left:200,top:40,position:"absolute",width:200,height:40,background:"#3f3"},{type:"text",left:140,top:30,position:"absolute",content:"文本文本文本"},{type:"image",width:100,height:100,src:i("666b")}]});var e=r({type:"rect",width:30,height:30},t);new c.default(uni.createCanvasContext("canvas-container-multiple-layout")).draw({type:"container",children:[r({},e,{position:"absolute",left:600,background:"#eee"}),{type:"text",position:"absolute",content:"A",align:"center",left:615,top:12,fontSize:30},r({},e,{width:210,background:"#eee"}),r({},e,{width:240,background:"#eee"}),r({},e,{width:200,background:"#eee"}),r({},e,{width:170,background:"#eee"}),r({},e,{width:240,background:"#eee"}),{type:"container",direction:"horizontal",children:[r({},e,{background:"#e66"}),r({},e,{width:60,background:"#eee"}),r({},e,{background:"#6e6"}),r({},e,{width:60,background:"#eee"}),r({},e,{background:"#66e"}),r({},e,{width:60,background:"#eee"})]},r({},e,{width:200,background:"#eee"}),{type:"container",direction:"horizontal",children:[r({},e,{width:100,background:"#ee6"}),r({},e,{position:"absolute",left:600,background:"#ee6"}),{type:"text",position:"absolute",content:"A",align:"center",left:615,top:12,fontSize:30}]}]})}};e.default=u},"666b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGV2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAxLTA1VDEzOjUzOjAxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTAxLTA1VDEzOjUzOjAxKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMS0wNVQxMzo1MzowMSswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MDgzZTg1OC0wOTY1LWQwNGQtYjA1Yi00NjY3OGFlZDYxNTIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3NWY3YjQ2ZS1mNzZhLWY5NGEtYjhhZi05NDBlYjNjMDE0MGIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiODkzMGFlMi01OWE0LWIxNDQtOGUyOS02Y2Y0MjI1NWFjZmIiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiODkzMGFlMi01OWE0LWIxNDQtOGUyOS02Y2Y0MjI1NWFjZmIiIHN0RXZ0OndoZW49IjIwMjAtMDEtMDVUMTM6NTM6MDErMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTA4M2U4NTgtMDk2NS1kMDRkLWIwNWItNDY2NzhhZWQ2MTUyIiBzdEV2dDp3aGVuPSIyMDIwLTAxLTA1VDEzOjUzOjAxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iSU1BR0UiIHBob3Rvc2hvcDpMYXllclRleHQ9IklNQUdFIi8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5esMIvAAAJbUlEQVR42u2bf3RUxRXHv5vfP0iy2fwk6SYkAQKShCScwDFKwIinCohUrAHEFCnys6CFQiIeRYHiEYED9lgqUk9FjtpCIIKmkVqEiFF+lQYDiBgSSSkJhkB+bja7yXZeXjt95+1ms3k7L9ng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"},"7a7a":function(t,e,i){"use strict";i.r(e);var a=i("3e25"),n=i("fe2e");for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"4bfd9b4c",null);e["default"]=r.exports},fe2e:function(t,e,i){"use strict";i.r(e);var a=i("4e84"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);e["default"]=n.a}}]);