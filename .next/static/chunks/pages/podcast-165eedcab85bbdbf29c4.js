_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{Axxl:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/podcast",function(){return n("Kfwu")}])},K64n:function(e,t,n){"use strict";t.Headers=self.Headers,t.Request=self.Request,t.Response=self.Response,t.fetch=self.fetch},Kfwu:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var c=n("o0o1"),i=n.n(c),r=n("HaE+"),s=n("nKUr"),a=n("1OyB"),o=n("vuIU"),l=n("Ji7U"),u=n("md7G"),f=n("foSv"),p=n("q1tI"),d=n.n(p),x=(n("YFqc"),n("LpSC"),n("h7RS")),j=n("MX0m"),b=n.n(j),h=n("8cHP"),m=n("f5Wv");function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(f.a)(e);if(t){var i=Object(f.a)(this).constructor;n=Reflect.construct(c,arguments,i)}else n=c.apply(this,arguments);return Object(u.a)(this,n)}}var g=function(e){Object(l.a)(n,e);var t=y(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.clip;return Object(s.jsxs)("div",{className:"jsx-1281942789 modal",children:[Object(s.jsxs)("div",{className:"jsx-1281942789 clip",children:[Object(s.jsx)("nav",{className:"jsx-1281942789",children:Object(s.jsx)(h.Link,{route:"channel",params:{slug:Object(m.a)(e.channel.title),id:e.channel.id},children:Object(s.jsx)("a",{className:"jsx-1281942789 close",children:"< Volver"})})}),Object(s.jsx)("picture",{className:"jsx-1281942789",children:Object(s.jsx)("div",{style:{backgroundImage:"url(".concat(e.urls.image||e.channel.urls.logo_image.original,")")},className:"jsx-1281942789"})}),Object(s.jsxs)("div",{className:"jsx-1281942789 player",children:[Object(s.jsx)("h3",{className:"jsx-1281942789",children:e.title}),Object(s.jsx)("h6",{className:"jsx-1281942789",children:e.channel.title}),Object(s.jsx)("audio",{controls:!0,autoPlay:!0,className:"jsx-1281942789",children:Object(s.jsx)("source",{src:e.urls.high_mp3,type:"audio/mpeg",className:"jsx-1281942789"})})]})]}),Object(s.jsx)(b.a,{id:"1281942789",children:["nav.jsx-1281942789{background:none;}","nav.jsx-1281942789 a.jsx-1281942789{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}",".clip.jsx-1281942789{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}","picture.jsx-1281942789{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}","picture.jsx-1281942789 div.jsx-1281942789{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}",".player.jsx-1281942789{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}","h3.jsx-1281942789{margin:0;}","h6.jsx-1281942789{margin:0;margin-top:1em;}","audio.jsx-1281942789{margin-top:2em;width:100%;}",".modal.jsx-1281942789{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}"]})]})}}]),n}(d.a.Component);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(f.a)(e);if(t){var i=Object(f.a)(this).constructor;n=Reflect.construct(c,arguments,i)}else n=c.apply(this,arguments);return Object(u.a)(this,n)}}var w=function(e){Object(l.a)(n,e);var t=v(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.clip;return Object(s.jsx)(x.a,{title:e.title,children:Object(s.jsx)(g,{clip:e})})}}],[{key:"getInitialProps",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var n,c,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,n.id,e.next=4,fetch("https://api.audioboom.com/audio_clips/4950586.mp3");case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,s=r.body.audio_clip,e.abrupt("return",{clip:s});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),n}(d.a.Component)},LpSC:function(e,t,n){n("K64n"),e.exports=self.fetch.bind(self)}},[["Axxl",0,1,2,3,4,5]]]);