(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){e.exports=n(359)},357:function(e,t,n){},358:function(e,t,n){},359:function(e,t,n){"use strict";n.r(t);n(148),n(346);var i=n(5),a=n.n(i),r=n(142),s=n.n(r),o=(n(357),n(33)),c=n(49),l=n(145),h=n(143),d=n(146),u=(n(358),n(70)),v=n(144),f=n(72),p=10;function g(e){if(w.started)w.fireEvent(e,"Moving");else{var t=w.start,n=t.x,i=t.y;Math.abs(e.clientX-n)+Math.abs(e.clientX-i)>p&&(w.fireEvent(e,"Start"),w.started=!0)}}function m(e){window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",m),w.started&&w.fireEvent(e,"Finish")}var w={ele:null,start:{x:0,y:0},started:!1,onDrag:null,fireEvent:function(e,t){this.onDrag&&this.onDrag(new y(this.ele,{x:e.clientX-this.start.x,y:e.clientY-this.start.y},t,e))},init:function(e,t,n){this.ele=e,this.started=!1,w.start.x=t.clientX,w.start.y=t.clientY,this.onDrag=n,window.addEventListener("mousemove",g),window.addEventListener("mouseup",m)}},y=function e(t,n,i,a){Object(o.a)(this,e),this.ele=t,this.change=n,this.type=i,this.mouseEvent=a};function x(e){var t=e.onDrag,n=e.style,i=e.children,r=a.a.createRef();return a.a.createElement("div",{className:"Drag",onMouseDown:function(e){w.init(r.current,e,t)},style:n,ref:r},i)}var b=n(71),k=n.n(b);function E(){var e=a.a.useState(),t=Object(f.a)(e,2)[1];return function(){t(Math.random())}}var O=function e(t,n){Object(o.a)(this,e),this.id=t,this.render=n,this.title="",this.title=t};var z=function(){function e(t,n){Object(o.a)(this,e),this.width=t,this.height=n,this.default=!0}return Object(c.a)(e,[{key:"read",value:function(e){var t=!1;return this.width===e.width&&this.height===e.height||(this.width=e.width,this.height=e.height,t=!0),this.default=!1,t}}]),e}(),C=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object(o.a)(this,e),this.view=t,this.id="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}),this.children=[],this.size=new z(100,100),this.parent=null,this.dir="horizontal"}return Object(c.a)(e,[{key:"findById",value:function(e){if(this.id==e)return this;var t=null;return this.children.some(function(n){return null!=(t=n.findById(e))}),t}},{key:"findByView",value:function(e){if(this.view==e)return this;var t=null;return this.children.some(function(n){return null!=(t=n.findByView(e))}),t}},{key:"sizeCSS",get:function(){return{width:this.size.width+"px",height:this.size.height+"px"}}},{key:"ancestors",get:function(){var e=this.parent;return e?[e].concat(Object(v.a)(this.parent.ancestors)):[]}},{key:"root",get:function(){for(var e=this;e.parent;)e=e.parent;return e}},{key:"depth",get:function(){return this.ancestors.length}}]),Object(c.a)(e,[{key:"evolve",value:function(e){console.log("evolve with "+e);var t=this.clone();return t.children.forEach(function(e){return e.parent=t}),this.children.length=0,this.dir=e,this.addChild(t),this}},{key:"clone",value:function(){var t=new e;return t.dir=this.dir,this.children.forEach(function(e){return t.children.push(e)}),t.size.read(this.size),t}},{key:"replaceChild",value:function(e,t){this.children.splice(t,1,e),e.parent=this}},{key:"addChild",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=this.children,a=this.isContainer,r=this.view;if(a){if(i.includes(t)){var s=i[n];return this.removeChild(t),void this.addChild(t,this.children.indexOf(s))}-1!=n?i.splice(n,0,t):i.push(t),t.parent&&t.parent.removeChild(t),t.parent=this}else this.view=null,this.addChild(new e(r)),this.addChild(t,n)}},{key:"removeChild",value:function(e){this.children.splice(this.children.indexOf(e),1),e.parent=null}},{key:"addView",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=new e(t);return this.addChild(i,n),i}},{key:"cleanup",value:function(){this.children.forEach(function(e){return e.cleanup()}),this.isContainer&&0==this.children.length&&this.parent&&this.parent.removeChild(this)}},{key:"isContainer",get:function(){return null==this.view}},{key:"index",get:function(){return this.parent?this.parent.children.indexOf(this):-1}}]),e}();function j(e){return null==e?null:e.classList.contains("Layout")?e:j(e.parentElement)}function M(e){var t=e.views,n=e.onDrop,r=null,s={x:0,y:0},o=Object(i.useState)(0),c=Object(f.a)(o,2),l=c[0],h=c[1],d=Math.max(Math.min(l,t.length-1),0),u=t.map(function(e,t){return a.a.createElement("span",{key:t,onMouseDown:function(){l!==t&&h(t)},className:k()({selected:d==t})},a.a.createElement(x,{onDrag:function(t){var i=t.type,a=t.ele,o=t.change,c=t.mouseEvent;switch(i){case"Start":j(a).classList.add("dragging"),(r=a.cloneNode(!0)).classList.add("asDragShadow"),document.body.appendChild(r),s.x=c.clientX+10,s.y=c.clientY,r.style.left=s.x+o.x+"px",r.style.top=s.y+o.y+"px";break;case"Moving":r.style.left=s.x+o.x+"px",r.style.top=s.y+o.y+"px";break;case"Finish":var l=document.elementFromPoint(c.clientX,c.clientY).getAttribute("x-dropkey");r.remove(),j(a).classList.remove("dragging"),n(l,e)}}},e.title))});console.log(d,t.length);var v=t[d].render();return a.a.createElement("div",{className:"Tabs"},a.a.createElement("div",{className:"head"},u),a.a.createElement("div",{className:"body"},v))}function S(e){var t=e.model,n=e.update,i=t.isContainer,r=t.view,s=t.dir,o=t.children,c=E(),l=[];function h(e){var i=["width","height"].filter(function(t){return t!==e})[0],r=t.size[e],s=o.reduce(function(t,n){return t+n.size[e]},0),h=r/s,d=[0],v=0;o.forEach(function(s,f){var p=f==o.length-1,g=p?Math.floor(r-v):Math.round(s.size[e]*h);if(s.size[e]=g,s.size[i]=t.size[i],v+=g,l.push(a.a.createElement(S,{model:s,key:s.id,update:n})),!p){var m="width"==e?"left":"top",w={init:0,change:0};l.push(a.a.createElement(x,{key:"Drag_"+f,onDrag:function(t){var n=t.ele,i=t.change,a=t.type,r=20-g,s=o[f+1].size[e]-20;switch(a){case"Start":w.init=parseInt(n.style[m]),w.change=0,n.classList.add("moving");break;case"Moving":var l=i["width"==e?"x":"y"];w.change=Math.max(r,Math.min(l,s)),n.style[m]=w.init+w.change+"px";break;case"Finish":o[f].size[e]+=w.change,o[f+1].size[e]-=w.change,c(),n.classList.remove("moving")}},style:Object(u.a)({},m,v+"px")}))}d.push(v)})}if(i&&"tabs"!==s)switch(s){case"horizontal":h("width");break;case"vertical":h("height")}else{var d=null==r?o.map(function(e){return e.view}):[r];l.push(a.a.createElement(M,{key:"tabs",views:d,onDrop:function(e,i){if(console.log("ondrop"),e&&i){var a=e.split("_")[0],r=t.root,s=r.findByView(i),o=r.findById(a),c=e.split("_")[1];if(s!=o){switch(console.log(r.id),o||console.log("cannot find "+a),s||console.log("cannot find view"),c){case"centre":o.addChild(s),o.dir="tabs";break;case"top":l("vertical",!0);break;case"bottom":l("vertical",!1);break;case"left":l("horizontal",!0);break;case"right":l("horizontal",!1)}n(),window.r=s.root}else console.log("same. skip")}function l(e,t){var n=o.parent;if(o.isContainer&&o.dir==e)console.log("add to self "),o.addChild(s,t?0:-1);else if(n&&n.dir==e){var i=o.index+(t?0:1);console.log("add to parent "+i),n.addChild(s,i)}else o.evolve(e).addChild(s,t?0:1)}}}))}var v="centre,top,bottom,left,right".split(",").map(function(e){var n,i={top:"bottom",bottom:"top",left:"right",right:"left"}[e],r=(n={},Object(u.a)(n,i,"calc(100% - ".concat(20*(t.depth+1),"px)")),Object(u.a)(n,"zIndex",10),n);"centre"==e&&(r.zIndex=t.depth);var s=t.id+"_"+e;return a.a.createElement("div",{key:"dzone_"+e,"x-dropkey":s,className:k()("dropZone",e),style:r})});return a.a.createElement("div",{style:t.sizeCSS,id:t.id,className:k()("Anchor",i?s:null)},l,v)}function D(e){var t=e.views,n=Object(i.useState)(null),r=Object(f.a)(n,2),s=r[0],o=r[1],c=E(),l=Object(i.useRef)();if(console.log("render"),Object(i.useEffect)(function(){var e=l.current.getBoundingClientRect();0==e.height?setTimeout(c,100):s.size.read(e)&&c()}),!s){var h=new C;h.addView(t[0]),h.addView(t[1]);var d=h.addView(t[2]);d.dir="vertical",d.addView(t[3]),d.addView(t[4]);var u=h.addView(t[5]);u.dir="tabs",u.addView(t[6]),u.addView(t[7]),o(h)}return a.a.createElement("div",{className:"SBlock Layout",ref:l},s&&!s.size.default?a.a.createElement(S,{model:s,update:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){s.cleanup(),c()})}):null)}var L=[];"0,1,2,3,4,5,6,7,8,9,10".split(",").forEach(function(e){L.push(new O("view "+e,function(){return a.a.createElement("div",null,"view ",e)}))});var V=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(D,{views:L}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[147,1,2]]]);
//# sourceMappingURL=main.c4ddb405.chunk.js.map