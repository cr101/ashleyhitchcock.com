
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([3],{219:function(e,t,l){e.exports=l(220)},220:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(16),u=n(a),r=l(20),s=n(r),d=l(6),f=n(d),c=l(1),o=n(c),i=l(2),p=n(i),m=l(7),_=n(m),g=l(8),h=n(g),E=l(0),v=n(E),k=l(29),y=l(221),x=n(y),b=l(223),w=n(b),j=l(224),M=(n(j),l(49)),N=n(M),T=l(21),O=n(T),P=l(53),C=n(P),R=l(51),U=n(R),H=function(e){function t(){return(0,o.default)(this,t),(0,_.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){this.props.posts.map(function(e,t){return v.default.createElement("ul",{key:t},v.default.createElement("li",null,v.default.createElement(O.default,{as:"/post/"+e.slug,href:"/post?slug="+e.slug+"&apiRoute=post"},v.default.createElement("a",null,e.title.rendered))))}),this.props.pages.map(function(e,t){return v.default.createElement("div",{key:t},v.default.createElement(O.default,{as:"/page/"+e.slug,href:"/post?slug="+e.slug+"&apiRoute=page"},v.default.createElement("a",null,e.title.rendered)))});return v.default.createElement(N.default,null,v.default.createElement(w.default,null),v.default.createElement("h1",null,this.props.page.title?this.props.page.title.rendered:null),v.default.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.page.content.rendered?this.props.page.content.rendered:null}}),v.default.createElement("h2",null,"From the blog"),v.default.createElement(x.default,{cards:this.props.posts,linkType:"post"}))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,s.default)(u.default.mark(function e(t){var l,n,a,r,s,d;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,U.default)(k.Config.apiUrl+"/wp-json/postlight/v1/page?slug=welcome");case 2:return l=e.sent,e.next=5,l.json();case 5:return n=e.sent,e.next=8,(0,U.default)(k.Config.apiUrl+"/wp-json/wp/v2/posts?_embed");case 8:return a=e.sent,e.next=11,a.json();case 11:return r=e.sent,e.next=14,(0,U.default)(k.Config.apiUrl+"/wp-json/wp/v2/pages?_embed");case 14:return s=e.sent,e.next=17,s.json();case 17:return d=e.sent,e.abrupt("return",{page:n,posts:r,pages:d});case 19:case"end":return e.stop()}},e,this)}));return e}()}]),t}(E.Component);t.default=(0,C.default)(H)},221:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(26),u=n(a),r=l(222),s=n(r),d=l(0),f=n(d),c=function(e){return f.default.createElement("section",{className:"grid"},e.cards.map(function(t,l){return f.default.createElement("div",{key:l,className:"grid__item"},f.default.createElement(s.default,(0,u.default)({},t,{linkType:e.linkType})))}))};t.default=c},222:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(21),u=n(a),r=l(0),s=n(r),d=function(e){return s.default.createElement("article",{className:"card"},s.default.createElement("div",{className:"card__media"}),s.default.createElement("div",{className:"card__body"},s.default.createElement("h2",null,s.default.createElement(u.default,{as:"/page/"+e.slug,href:"/post?slug="+e.slug+"&apiRoute="+(e.linkType?e.linkType:"page")},s.default.createElement("a",null,e.title?e.title.rendered:null)))))};t.default=d},223:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(0),u=n(a),r=l(21),s=(n(r),function(){return u.default.createElement("div",{className:"knockout"},u.default.createElement("svg",{className:"knockout__text-container",width:"100%",height:"100%"},u.default.createElement("rect",{className:"knockout__text-bg",width:"100%",height:"100%",fill:"#fff",x:"0",y:"0",fillOpacity:"a1",mask:"url(#knockout-text)"}),u.default.createElement("mask",{id:"knockout-text"},u.default.createElement("rect",{width:"100%",height:"100%",fill:"#fff",x:"0",y:"0"}),u.default.createElement("text",{x:"50%",y:"50%",fill:"#000",textAnchor:"middle"},"Hello!"))))});t.default=s},224:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),u=function(){return a.default.createElement("div",null,a.default.createElement("p",null,"This is the intro"))};t.default=u}},[219]);
            return { page: comp.default }
          })
        