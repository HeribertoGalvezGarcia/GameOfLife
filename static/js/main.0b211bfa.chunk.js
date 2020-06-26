(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,n,t){e.exports=t(32)},32:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(7),o=t.n(i),c=t(1),u=t(8),l=t(19),d=t(2);function s(e,n){return{type:"SET_DIMENSIONS",payload:{height:e,width:n,nodes:Object(d.a)(new Array(e*n)).map((function(){return!1}))}}}function h(e,n,t){return{type:"SET_GRID",payload:{height:e,width:n,nodes:t}}}function f(e,n,t){for(var r=[],a=0;a<e.length;++a){var i=0,o=e[a],c=a%n!==0,u=(a+1)%n!==0,l=a-n>=0,d=a+n<e.length;l&&(c&&!0===e[a-n-1]&&++i,!0===e[a-n]&&++i,u&&!0===e[a-n+1]&&++i),c&&!0===e[a-1]&&++i,u&&!0===e[a+1]&&++i,d&&(c&&!0===e[a+n-1]&&++i,!0===e[a+n]&&++i,u&&!0===e[a+n+1]&&++i),r.push(o?[2,3].includes(i):3===i)}return{type:"GENERATE_GENERATION",payload:{nodes:r,generation:t+1}}}var v={nodes:Object(d.a)(new Array(625)).map((function(){return!1})),height:25,width:25,generation:0,running:!1};var b=t(3),p=t(10),E=t(11);function g(){var e=Object(p.a)(["\n  box-sizing: border-box;\n  height: 10px;\n  width: 10px;\n  border: 1px solid grey;\n  background-color: ",";\n"]);return g=function(){return e},e}var m=E.a.div(g(),(function(e){return e.alive?"black":"white"}));var y=function(e){var n=e.index,t=Object(c.c)((function(e){var t=e.nodes,r=e.running;return[t[n],r]})),r=Object(b.a)(t,2),i=r[0],o=r[1],u=Object(c.b)();return a.a.createElement(m,{alive:i,onClick:function(){return!o&&u(function(e,n){return{type:"SET_ALIVE",payload:{node:e,alive:n}}}(n,!i))}})};function O(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: ",";\n"]);return O=function(){return e},e}var w=E.a.div(O(),(function(e){var n=e.width_;return"".concat(10*n,"px")}));var j=function(){var e=Object(c.c)((function(e){return[e.width,e.nodes,e.running]})),n=Object(b.a)(e,3),t=n[0],r=n[1],i=n[2],o=Object(c.b)();return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{disabled:i,onClick:function(){return o(f(r,t))}},"Next Generation"),a.a.createElement(w,{width_:t},r.map((function(e,n){return a.a.createElement(y,{key:n,index:n})}))))};var I=function(){var e=Object(c.c)((function(e){return[e.nodes,e.height,e.width,e.generation,e.running]})),n=Object(b.a)(e,5),t=n[0],i=n[1],o=n[2],u=n[3],l=n[4],v=Object(c.b)(),p=[["Block",4,4,[!1,!1,!1,!1,!1,!0,!0,!1,!1,!0,!0,!1,!1,!1,!1,!1]],["Beehive",5,6,[!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!0,!1,!1,!0,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1]],["Loaf",6,6,[!1,!1,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!0,!1,!1,!0,!1,!1,!1,!0,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1]],["Boat",5,5,[!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!0,!1,!0,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1]],["Tub",5,5,[!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!0,!1,!0,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1]]];return Object(r.useEffect)((function(){if(l){var e=setInterval((function(){return v(f(t,o,u))}),1e3);return function(){return clearInterval(e)}}}),[l,v,u,t,o]),a.a.createElement(a.a.Fragment,null,u,a.a.createElement("input",{disabled:l,type:"text",placeholder:"height",value:i,onChange:function(e){var n=e.target.value;return v(s(n,o))}}),a.a.createElement("input",{disabled:l,type:"text",placeholder:"width",value:o,onChange:function(e){var n=e.target.value;return v(s(i,n))}}),a.a.createElement("select",{disabled:l,onChange:function(e){var n=e.target.value;return v(h.apply(void 0,Object(d.a)(p[n].slice(1))))}},p.map((function(e,n){var t=Object(b.a)(e,1)[0];return a.a.createElement("option",{value:n,key:n},t)}))),a.a.createElement("button",{disabled:l,onClick:function(){return v(h(i,o,Object(d.a)(Array(i*o)).map((function(){return Math.random()<.5}))))}},"Random"),a.a.createElement("button",{onClick:function(){return v(function(e){return{type:"SET_RUNNING",payload:e}}(!l))}},l?"Stop":"Run"),a.a.createElement("button",{disabled:l,onClick:function(){return v(s(i,o))}},"Clear"))};var N=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(I,null),a.a.createElement(j,null),"Rules: If a cell is alive and it has two or three alive neighbors it continues living. Otherwise it dies. If a cell is dead and it has three neighbors it becomes alive.")},x=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload,a=Object(l.a)({},e);switch(t){case"SET_DIMENSIONS":case"SET_GRID":return a.height=r.height,a.width=r.width,a.nodes=r.nodes,a;case"SET_ALIVE":return a.nodes[r.node]=r.alive,a;case"GENERATE_GENERATION":return a.nodes=r.nodes,a.generation=r.generation,a;case"SET_RUNNING":return a.running=r,a;default:return a}}));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,{store:x},a.a.createElement(N,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0b211bfa.chunk.js.map