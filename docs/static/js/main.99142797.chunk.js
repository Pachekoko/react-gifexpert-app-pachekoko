(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=n(2),u=n(9),j=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],j=r[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>0&&(t((function(e){return[i].concat(Object(u.a)(e))})),j(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){j(e.target.value)}})})})},o=n(10),d=function(e){e.id;var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__jello",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsx)("p",{children:t})]})},l=n(6),b=n.n(l),m=n(8),p=function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a,c,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=TozWj5Xo4uxO3FQkkjzewRY4zDO3xc8C"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){p(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a},O=function(e){var t=e.category,n=f(t),c=n.data,r=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__bounceInLeft",children:t}),r&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(a.jsx)(d,Object(o.a)({},e),e.id)}))})]})},h=function(){var e=Object(c.useState)(["Adventure Time"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(j,{setCategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(O,{category:e},e)}))})]})};n(17);i.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.99142797.chunk.js.map