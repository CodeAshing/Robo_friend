(this.webpackJsonprobo_friend=this.webpackJsonprobo_friend||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),l=a(3),s=a(4),i=a(6),h=a(5),u=(a(12),function(e){var t=e.email,a=e.name,n=e.id;return r.a.createElement("div",{className:"bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(n,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,t)))}),m=function(e){var t=e.robots.map((function(e){return r.a.createElement(u,{key:e.id,id:e.id,name:e.name,username:e.username,email:e.email})}));return r.a.createElement("div",null,t)},d=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--yellow bg-lightest-yellow",onChange:t,type:"search",placeholder:"Search Robots"}))},b=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid white",height:"500px"}},e.children)},f=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).searchChange=function(t){e.setState({search:t.target.value})},e.state={robots:[],search:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.search,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriend"),r.a.createElement(d,{searchChange:this.searchChange}),r.a.createElement(b,null,r.a.createElement(m,{robots:n}))):r.a.createElement("h1",{className:"tc"},"Loading")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.1471265b.chunk.js.map