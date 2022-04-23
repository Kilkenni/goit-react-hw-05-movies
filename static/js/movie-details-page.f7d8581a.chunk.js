"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[347],{4706:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var i,r,s,a,c=t(885),o=t(168),l=t(501),d=t(6871),u=t(2043),h=t(6031),p=t(3636),v=t(7515),x=t(184),f=h.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]))),j=h.ZP.img(r||(r=(0,o.Z)(["\n  display: inline-block;\n  padding: 5px;\n"]))),g=h.ZP.div(s||(s=(0,o.Z)(["\n  display: inline-block;\n  vertical-align: top;\n"]))),b=h.ZP.h2(a||(a=(0,o.Z)(["\n  font-size: 30px;\n"]))),m=h.ZP.div({borderTop:"1px solid black",borderBottom:"1px solid black",padding:"10px"}),w=function(e){var n,t,i,r,s,a=e.apiBaseUrl,o=(e.genresArray,(0,d.UO)().movieID),h=(0,p.Z)("TMDB_movieData",o,void 0),w=(0,c.Z)(h,3),Z=w[0],_=w[1],k=w[2],y=(0,d.TH)().pathname,D=y.substring(0,y.indexOf(o)+o.length),P=(0,d.s0)(),B=new v.c("TMDB_image",{TMDB_base_url:a,size:"w342",file_path:""});return Z&&(n=Z.title,t=Z.genres,i=Z.overview,r=Z.poster_path,s=Z.vote_average),(0,x.jsxs)("div",{children:[(0,x.jsx)("button",{type:"button",onClick:function(){return P(-1)},children:"Go back"}),404===k&&(0,x.jsx)(d.Fg,{to:"/",replace:!0}),(0,x.jsx)(u.v,{enabled:_,size:100,color:"red"}),Z&&(0,x.jsxs)("section",{children:[(0,x.jsxs)(f,{children:[r&&(0,x.jsx)(j,{src:B.handler.getImage(r),alt:"Poster for ".concat(n),width:"342",height:"auto"}),(0,x.jsxs)(g,{children:[(0,x.jsx)(b,{children:n}),(0,x.jsxs)("p",{children:["User score: ",10*s,"%"]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:i||"No overview available."}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:t?t.map((function(e){return e.name})).join(", "):"No genres available in the database."})]})]}),(0,x.jsxs)(m,{children:[(0,x.jsx)("h3",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(l.rU,{to:"".concat(D,"/cast"),replace:!0,children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.rU,{to:"".concat(D,"/reviews"),replace:!0,children:"Reviews"})})]})]})]}),(0,x.jsx)(d.j3,{})]})}},3636:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(5861),r=t(885),s=t(7757),a=t.n(s),c=t(2791),o=t(7515);function l(e,n,t){var s=(0,c.useState)(void 0),l=(0,r.Z)(s,2),d=l[0],u=l[1],h=(0,c.useState)(!1),p=(0,r.Z)(h,2),v=p[0],x=p[1],f=(0,c.useState)(void 0),j=(0,r.Z)(f,2),g=j[0],b=j[1];return(0,c.useEffect)((function(){if(void 0===d){var r=new o.c(e,{movie_id:n,language:t});return function(){s.apply(this,arguments)}(),function(){r.abortFetch()}}function s(){return(s=(0,i.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,r.fetchData();case 4:-404===(n=e.sent)?b(404):n&&u(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}}),[d,e,n,t]),[d,v,g]}}}]);
//# sourceMappingURL=movie-details-page.f7d8581a.chunk.js.map