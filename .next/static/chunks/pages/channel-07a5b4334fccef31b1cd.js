_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{ZA9o:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var r=n("nKUr"),a=n("1OyB"),c=n("vuIU"),s=n("Ji7U"),i=n("md7G"),o=n("foSv"),u=n("MX0m"),l=n.n(u),d=n("q1tI"),p=n.n(d),f=n("YFqc"),j=n.n(f),h=n("h7RS");function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(o.a)(t);if(e){var a=Object(o.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var x=function(t){Object(s.a)(n,t);var e=b(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.statusCode;return Object(r.jsxs)(h.a,{title:"Oh no :(",children:[404===t?Object(r.jsxs)("div",{className:"jsx-4227891022 message",children:[Object(r.jsx)("h1",{className:"jsx-4227891022",children:"Esta p\xe1gina no existe :("}),Object(r.jsx)("p",{className:"jsx-4227891022",children:Object(r.jsx)(j.a,{href:"/",children:Object(r.jsx)("a",{className:"jsx-4227891022",children:"Volver al inicio"})})})]}):Object(r.jsxs)("div",{className:"jsx-4227891022 message",children:[Object(r.jsx)("h1",{className:"jsx-4227891022",children:"Hubo un problema :("}),Object(r.jsx)("p",{className:"jsx-4227891022",children:"Intenta nuevamente en unos segundos"})]}),Object(r.jsx)(l.a,{id:"4227891022",children:[".message.jsx-4227891022{padding:100px 30px;text-align:center;}","h1.jsx-4227891022{margin-bottom:2em;}","a.jsx-4227891022{color:#8756ca;}"]})]})}}],[{key:"getInitialProps",value:function(t){var e=t.res,n=t.err;return{statusCode:e?e.statusCode:n?n.statusCode:null}}}]),n}(p.a.Component)},bDup:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/channel",function(){return n("rOWp")}])},rOWp:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return _}));var r=n("o0o1"),a=n.n(r);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var s,i=t[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(o){a=!0,c=o}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n("HaE+"),o=n("nKUr"),u=n("1OyB"),l=n("vuIU"),d=n("JX7q"),p=n("Ji7U"),f=n("md7G"),j=n("foSv");var h=n("q1tI"),b=n.n(h),x=n("ZA9o"),m=n("h7RS"),O=n("MX0m"),v=n.n(O),y=n("8cHP"),g=n("f5Wv");function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(j.a)(t);if(e){var a=Object(j.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var C=function(t){Object(p.a)(n,t);var e=w(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.audioClips;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"jsx-1275505673",children:"Ultimos Podcasts"}),t.map((function(t){return Object(o.jsx)(y.Link,{route:"podcast",params:{slugChannel:Object(g.a)(t.channel.title),idChannel:t.channel.id,slug:Object(g.a)(t.title),id:t.id},prefetch:!0,children:Object(o.jsxs)("a",{className:"jsx-1275505673 podcast",children:[Object(o.jsx)("h3",{className:"jsx-1275505673",children:t.title}),Object(o.jsxs)("div",{className:"jsx-1275505673 meta",children:[Math.ceil(t.duration/60)," minutes"]})]})},t.id)})),Object(o.jsx)(v.a,{id:"1275505673",children:["h2.jsx-1275505673{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}",".podcast.jsx-1275505673{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}",".podcast.jsx-1275505673:hover{color:#000;}",".podcast.jsx-1275505673 h3.jsx-1275505673{margin:0;}",".podcast.jsx-1275505673 .meta.jsx-1275505673{color:#666;margin-top:0.5em;font-size:0.8em;}"]})]})}}]),n}(b.a.Component),R=n("YFqc"),N=n.n(R);function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(j.a)(t);if(e){var a=Object(j.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var P=function(t){Object(p.a)(n,t);var e=k(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.series;return Object(o.jsxs)(o.Fragment,{children:[t.length>0&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"jsx-2359447177",children:"Series"}),Object(o.jsx)("div",{className:"jsx-2359447177 series",children:t.map((function(t){return Object(o.jsx)(N.a,{href:"/channel?id=".concat(t.id),prefetch:!0,children:Object(o.jsxs)("a",{className:"jsx-2359447177 channel",children:[Object(o.jsx)("img",{src:t.urls.logo_image.original,alt:"image",className:"jsx-2359447177"}),Object(o.jsx)("h2",{className:"jsx-2359447177",children:t.title})]})})}))})]}),Object(o.jsx)(v.a,{id:"2359447177",children:[".series.jsx-2359447177{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}",".banner.jsx-2359447177{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}",".channels.jsx-2359447177{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}","a.channel.jsx-2359447177{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}",".channel.jsx-2359447177 img.jsx-2359447177{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}","h2.jsx-2359447177{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}"]})]})}}]),n}(b.a.Component);function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(j.a)(t);if(e){var a=Object(j.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var _=function(t){Object(p.a)(n,t);var e=S(n);function n(t){var r,a,c,s;return Object(u.a)(this,n),r=e.call(this,t),a=Object(d.a)(r),s=function(t,e){t.preventDefault(),r.setState({openPodcast:e})},(c="openPodcast")in a?Object.defineProperty(a,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[c]=s,r.state={openPodcast:null},r}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.channel,n=t.audioClips,r=t.series,a=t.statusCode,c=this.state.openPodcast;return 200!==a?Object(o.jsx)(x.default,{statusCode:a}):Object(o.jsxs)(m.a,{title:e.title,children:[Object(o.jsx)("h1",{children:e.title}),c&&Object(o.jsx)("div",{children:"Hay un podcast abierto"}),Object(o.jsx)(P,{series:r}),Object(o.jsx)(C,{audioClips:n})]})}}],[{key:"getInitialProps",value:function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r,c,i,o,u,l,d,p,f,j,h,b;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query,t.prev=1,r=n.id,t.next=5,Promise.all([fetch("https://api.audioboom.com/channels/".concat(r)),fetch("https://api.audioboom.com/channels/".concat(r,"/audio_clips")),fetch("https://api.audioboom.com/channels/".concat(r,"/child_channels"))]);case 5:if(c=t.sent,i=s(c,3),o=i[0],u=i[1],l=i[2],!(o.status>=400)){t.next=12;break}return t.abrupt("return",{channel:null,audioClips:null,series:null,statusCode:o.status});case 12:return t.next=14,o.json();case 14:return d=t.sent,p=d.body.channel,t.next=18,u.json();case 18:return f=t.sent,j=f.body.audio_clips,t.next=22,l.json();case 22:return h=t.sent,b=h.body.channels,t.abrupt("return",{channel:p,audioClips:j,series:b,statusCode:200});case 27:return t.prev=27,t.t0=t.catch(1),t.abrupt("return",{channel:null,audioClips:null,series:null,statusCode:503});case 30:case"end":return t.stop()}}),t,null,[[1,27]])})));return function(e){return t.apply(this,arguments)}}()}]),n}(b.a.Component)}},[["bDup",0,1,2,3,4,5]]]);