_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/a9y":function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),c=n("7W2i"),i=n("a1gu"),s=n("Nsbk");function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var u=n("TqRt");t.__esModule=!0,t.default=void 0;var l=u(n("q1tI")),f=u(n("8Kt/")),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){c(n,e);var t=o(n);function n(){return r(this,n),t.apply(this,arguments)}return a(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||d[e]||"An unexpected error has occurred";return l.default.createElement("div",{style:m.error},l.default.createElement(f.default,null,l.default.createElement("title",null,e,": ",t)),l.default.createElement("div",null,l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?l.default.createElement("h1",{style:m.h1},e):null,l.default.createElement("div",{style:m.desc},l.default.createElement("h2",{style:m.h2},t,"."))))}}]),n}(l.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=p,h.origGetInitialProps=p;var m={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},H0SL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},K64n:function(e,t,n){"use strict";t.Headers=self.Headers,t.Request=self.Request,t.Response=self.Response,t.fetch=self.fetch},LpSC:function(e,t,n){n("K64n"),e.exports=self.fetch.bind(self)},cMU6:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n("o0o1"),a=n.n(r),c=n("HaE+"),i=n("nKUr"),s=n("1OyB"),o=n("vuIU"),u=n("Ji7U"),l=n("md7G"),f=n("foSv"),d=n("q1tI"),p=n.n(d),h=n("eomm"),m=n.n(h),x=(n("LpSC"),n("h7RS")),g=n("MX0m"),v=n.n(g),y=n("8cHP"),b=n("f5Wv");function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var R=function(e){Object(u.a)(n,e);var t=j(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.channels;return Object(i.jsxs)("div",{className:"jsx-212860970 channels",children:[e.map((function(e){return Object(i.jsx)(y.Link,{route:"channel",params:{slug:Object(b.a)(e.title),id:e.id},prefetch:!0,children:Object(i.jsxs)("a",{className:"jsx-212860970 channel",children:[Object(i.jsx)("img",{src:e.urls.logo_image.original,alt:"images",className:"jsx-212860970"}),Object(i.jsx)("h2",{className:"jsx-212860970",children:e.title})]})})})),Object(i.jsx)(v.a,{id:"212860970",children:[".channels.jsx-212860970{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}",".channel.jsx-212860970{diplay:bloc;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}",".channel.jsx-212860970 img.jsx-212860970{width:100%;}","h2.jsx-212860970{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}"]})]},e.id)}}]),n}(p.a.Component);function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var w=function(e){Object(u.a)(n,e);var t=O(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.channels,n=e.statusCode;return 200!==n?Object(i.jsx)(m.a,{statusCode:n}):Object(i.jsx)(x.a,{title:"Podcasts App",children:Object(i.jsx)(R,{channels:t})})}}],[{key:"getInitialProps",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.res,e.prev=1,e.next=4,fetch("https://api.audioboom.com/channels/recommended");case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,i=c.body,e.abrupt("return",{channels:i,statusCode:200});case 12:return e.prev=12,e.t0=e.catch(1),n.statusCode=503,e.abrupt("return",{channels:null,statusCode:503});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()}]),n}(p.a.Component)},eomm:function(e,t,n){e.exports=n("/a9y")}},[["H0SL",0,1,2,3,4,5]]]);