"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[807],{807:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(439),a=n(861),c=n(687),u=n.n(c),o=n(243),s={api_key:"a54c3783addcfd6f83ea014e2d49ad26",language:"en-US",page:1};function i(){return i=(0,a.Z)(u().mark((function e(t){var n,r,a,c=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,s.page=n,r=new URLSearchParams(s),e.next=5,o.Z.get("movie/".concat(t,"/reviews?").concat(r));case 5:if((a=e.sent).data.results.length){e.next=8;break}return e.abrupt("return",Promise.reject(new Error("No reviews for movie with id: ".concat(t,"!"))));case 8:return e.abrupt("return",a.data.results);case 9:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}var f=function(e){return i.apply(this,arguments)},h=n(184),l=function(e){var t=e.author,n=e.content;return(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:t}),(0,h.jsx)("p",{children:n})]})},p=n(791),d=n(689),v=function(e){var t=e.id,n=e.author,r=e.content;return(0,h.jsx)(l,{author:n,content:r},t)},m=function(){var e=(0,d.UO)().movieId,t=(0,p.useState)([]),n=(0,r.Z)(t,2),a=n[0],c=n[1];return(0,p.useEffect)((function(){f(e).then((function(e){c(e)})).catch((function(e){console.log(e.message)}))}),[e]),(0,h.jsx)("ul",{children:a.map(v)})}}}]);
//# sourceMappingURL=807.1d2ea9c4.chunk.js.map