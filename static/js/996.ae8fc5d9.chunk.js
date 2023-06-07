"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[996],{5:function(n,e,t){t.d(e,{Z:function(){return x}});var r,a,i,o=t(689),u=t(87),c=t(168),s=t(686),l=s.Z.li(r||(r=(0,c.Z)(["\n  flex-basis: calc((100% - 3 * 30px) / 4);\n"]))),p=s.Z.img(a||(a=(0,c.Z)(["\n  margin-bottom: 15px;\n"]))),d=t(184),h=function(n){var e=n.id,t=n.movieName,r=n.poster_path,a=(0,o.TH)();return(0,d.jsx)(l,{children:(0,d.jsxs)(u.rU,{to:"/movies/".concat(e),state:{from:a},children:[(0,d.jsx)(p,{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:t}),(0,d.jsx)("h2",{children:t})]})})},f=s.Z.ul(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n"]))),m=function(n){var e=n.id,t=n.title,r=n.name,a=n.poster_path;return(0,d.jsx)(h,{id:e,movieName:t||r,poster_path:a},e)},x=function(n){var e=n.movies;return(0,d.jsx)(f,{children:e.map(m)})}},593:function(n,e,t){t.d(e,{$:function(){return h}});var r,a,i,o=t(168),u=t(686),c=u.Z.section(r||(r=(0,o.Z)(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n"]))),s=u.Z.h1(a||(a=(0,o.Z)(["\n  margin-bottom: 40px;\n"]))),l=u.Z.div(i||(i=(0,o.Z)(["\n  position: relative;\n  width: 1500px;\n  margin: 0 auto;\n  padding-left: 15px;\n  padding-right: 15px;\n"]))),p=t(184),d=function(n){var e=n.children;return(0,p.jsx)(l,{children:e})},h=function(n){var e=n.children,t=n.title,r=void 0===t?"":t;return(0,p.jsx)(c,{children:(0,p.jsxs)(d,{children:[r&&(0,p.jsx)(s,{children:r}),e]})})}},996:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,o=t(439),u=t(5),c=t(791),s=t(168),l=t(686),p=l.Z.form(r||(r=(0,s.Z)(["\n  margin: 0 auto;\n"]))),d=l.Z.input(a||(a=(0,s.Z)(["\n  min-width: 500px;\n  height: 23px;\n\n  padding-left: 8px;\n  margin-right: 5px;\n\n  border: 1px solid #000;\n\n  outline: none;\n"]))),h=l.Z.button(i||(i=(0,s.Z)(["\n  width: 80px;\n  height: 28px;\n\n  background-color: #000;\n  color: #fff;\n\n  border: none;\n\n  outline: none;\n\n  cursor: pointer;\n"]))),f=t(184),m=function(n){var e=n.handleFormSubmit,t=(0,c.useState)(""),r=(0,o.Z)(t,2),a=r[0],i=r[1];return(0,f.jsxs)(p,{onSubmit:function(n){n.preventDefault(),a.trim()?(e(a),i("")):alert("Query is empty!")},children:[(0,f.jsx)(d,{type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){var e=n.currentTarget.value;return i(e)},value:a}),(0,f.jsx)(h,{children:"Search"})]})},x=t(861),g=t(687),v=t.n(g),Z=t(243),j={api_key:"a54c3783addcfd6f83ea014e2d49ad26",language:"en-US",page:1,query:"",include_adult:!1};function b(){return b=(0,x.Z)(v().mark((function n(e){var t,r,a,i=arguments;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,j.query=e,j.page=t,r=new URLSearchParams(j),n.next=6,Z.Z.get("search/movie?".concat(r));case 6:if((a=n.sent).data.results.length){n.next=9;break}return n.abrupt("return",Promise.reject(new Error("No movies by query: ".concat(e,"!"))));case 9:return n.abrupt("return",a.data.results);case 10:case"end":return n.stop()}}),n)}))),b.apply(this,arguments)}var w=function(n){return b.apply(this,arguments)},y=t(87),k=t(593),S=function(){var n,e=(0,c.useState)(1),t=(0,o.Z)(e,2),r=t[0],a=t[1],i=(0,c.useState)([]),s=(0,o.Z)(i,2),l=s[0],p=s[1],d=(0,y.lr)(),h=(0,o.Z)(d,2),x=h[0],g=h[1],v=null!==(n=x.get("query"))&&void 0!==n?n:"";(0,c.useEffect)((function(){if(v){w(v,r).then((function(n){p(n)})).catch((function(n){console.log(n.message)}))}}),[r,v]);return(0,f.jsxs)("main",{children:[(0,f.jsx)(k.$,{children:(0,f.jsx)(m,{handleFormSubmit:function(n){!function(n){g(n?{query:n}:{})}(n),a(1)}})}),!!l.length&&(0,f.jsx)(k.$,{children:(0,f.jsx)(u.Z,{movies:l})})]})}}}]);
//# sourceMappingURL=996.ae8fc5d9.chunk.js.map