"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[945],{1877:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(885),i=n(6871),c=n(3636),a=n(184);function s(e){e.apiBaseUrl;var t=(0,i.UO)().movieID,n=(0,c.Z)("TMDB_movieCredits",t,void 0),s=(0,r.Z)(n,1)[0];return(0,a.jsxs)("section",{children:[(0,a.jsx)("h3",{children:"Cast"}),s&&0===s.cast&&(0,a.jsx)("p",{children:"No credits available for this movie."}),s&&s.cast&&(0,a.jsx)("ul",{children:s.cast.map((function(e){return(0,a.jsxs)("li",{children:[(0,a.jsx)("p",{children:e.name}),(0,a.jsxs)("p",{children:["Role: ",e.character]})]},e.id)}))})]})}},3636:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5861),i=n(885),c=n(7757),a=n.n(c),s=n(2791),u=n(7515);function o(e,t,n){var c=(0,s.useState)(void 0),o=(0,i.Z)(c,2),f=o[0],l=o[1],h=(0,s.useState)(!1),v=(0,i.Z)(h,2),d=v[0],p=v[1],m=(0,s.useState)(void 0),x=(0,i.Z)(m,2),_=x[0],j=x[1];return(0,s.useEffect)((function(){if(void 0===f){var i=new u.c(e,{movie_id:t,language:n});return function(){c.apply(this,arguments)}(),function(){i.abortFetch()}}function c(){return(c=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,i.fetchData();case 4:-404===(t=e.sent)?j(404):t&&l(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}}),[f,e,t,n]),[f,d,_]}}}]);
//# sourceMappingURL=cast-subpage.50d347f1.chunk.js.map