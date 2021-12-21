(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=n(5),s=n(7),p=n(2),u=n(29);var d=Object(p.a)("form",{target:"eyskgx63"})({name:"kagw8f",styles:"display:flex;width:100%;min-width:275px;background-color:var(--bs-white);border-radius:3px;overflow:hidden;margin:0 auto;@media screen and (min-width: 1200px){max-width:300px;}"}),l=Object(p.a)("button",{target:"eyskgx62"})({name:"1dap5oq",styles:"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border:0;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);outline:none;&:hover{opacity:1;}"}),h=Object(p.a)(u.a,{target:"eyskgx61"})({name:"14is9qy",styles:"font-size:20px"}),b=Object(p.a)("input",{target:"eyskgx60"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"}),g=n(1);function x(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(o.a)(n,2),i=r[0],c=r[1];return Object(g.jsxs)(d,{onSubmit:function(e){if(e.preventDefault(),""===i.trim())return s.b.error("Enter the name of the pictures or photos!"),void c("");t(i),c("")},children:[Object(g.jsx)(l,{type:"submit",children:Object(g.jsx)(h,{})}),Object(g.jsx)(b,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:i,onChange:function(e){c(e.target.value)}})]})}var f=n(15),m=n(6),j=n.n(m),v=n(10),O=n(25),y=n(26),w=n(27),k=n.n(w),C=function(){function e(){Object(O.a)(this,e),this.searchQuery="",this.page=1}return Object(y.a)(e,[{key:"fetchImages",value:function(){var e=Object(v.a)(j.a.mark((function e(){var t,n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=k.a.create({baseURL:"https://pixabay.com/api/",headers:{"Content-Type":"application/json"},timeout:1e3,method:"GET",params:{key:"23790821-6777a11e2db191613ff9bf1d2",q:this.searchQuery,page:this.page,image_type:"photo",orientation:"horizontal",per_page:16}}),e.next=3,t.get();case 3:return n=e.sent,e.next=6,n.data;case 6:return a=e.sent,e.next=9,a.hits;case 9:return r=e.sent,e.abrupt("return",this.getImagesParams(r));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getImagesParams",value:function(e){return e.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),e}(),z=Object(a.createContext)();var I=Object(p.a)("li",{target:"e1f02xps1"})({name:"4hfibk",styles:"box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),S=Object(p.a)("img",{target:"e1f02xps0"})({name:"1icvew8",styles:"width:100%;height:200px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"});function E(e){var t=e.params,n=t.id,r=t.webformatURL,i=t.largeImageURL,c=t.tags,o=Object(a.useContext)(z).onClick;return Object(g.jsx)(I,{children:Object(g.jsx)(S,{id:n,src:r,alt:c,"data-full_size":i,onClick:o})})}var L=n(28),q=n.n(L);var P=Object(p.a)(q.a,{target:"e1q360rv0"})({name:"1avoypo",styles:"margin:0 auto;width:80px;height:80px"});function R(){return Object(g.jsx)(P,{type:"ThreeDots",color:"#3f51b5"})}var U=Object(p.a)("button",{target:"e122mgko0"})({name:"tqf0vc",styles:"margin:0 auto 10px;padding:8px 16px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;display:inline-block;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;max-width:180px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&:hover,:focus{background-color:#303f9f;}"});function T(e){var t=e.onClick;return Object(g.jsx)(U,{type:"button",onClick:t,children:"Load more"})}var Q=Object(p.a)("ul",{target:"ehfmf380"})({name:"1favdd2",styles:"display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-gap:16px"}),_=new C,F="pending",B="resolved";function D(e){var t=e.searchImages,n=(e.onClick,Object(a.useState)([])),r=Object(o.a)(n,2),i=r[0],c=r[1],p=Object(a.useState)(F),u=Object(o.a)(p,2),d=u[0],l=u[1],h=Object(a.useRef)(),b=function(){var e=Object(v.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(F),e.prev=1,e.next=4,_.fetchImages();case 4:(t=e.sent).length||s.b.error("images not found"),c(t),l(B),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),s.b.error("oops something went wrong");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){h.current=t,h!==t&&(_.resetPage(),_.query=t,b())}),[t]);var x=function(){var e=Object(v.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _.incrementPage(),e.next=3,_.fetchImages();case 3:t=e.sent,c([].concat(Object(f.a)(i),Object(f.a)(t))),m();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return d===F?Object(g.jsx)(R,{}):d===B?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Q,{children:i.map((function(e){return Object(g.jsx)(E,{params:e},e.id)}))}),i.length>0&&Object(g.jsx)(T,{onClick:x})]}):void 0}var J=Object(p.a)("div",{target:"e1d9azhh1"})({name:"18wgw8",styles:"z-index:1200;position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8)"}),G=Object(p.a)("div",{target:"e1d9azhh0"})({name:"sve88p",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"}),H=document.getElementById("modal-root");function M(e){var t=e.onClose,n=e.children;Object(a.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(i.createPortal)(Object(g.jsx)(J,{onClick:function(e){e.target===e.currentTarget&&t()},children:Object(g.jsx)(G,{children:n})}),H)}var A=Object(p.a)("div",{target:"e1avhsg2"})({name:"c2nfrf",styles:"max-width:1200px;margin:0 auto;padding-left:10px;padding-right:10px;@media screen and (min-width: 1200px){width:1200px;}"}),K=Object(p.a)("header",{target:"e1avhsg1"})({name:"1j4uun9",styles:"z-index:1100;background-color:var(--bs-primary);top:0;left:0;position:sticky;display:flex;justify-content:center;align-items:center;min-height:64px;padding-top:12px;padding-bottom:12px;margin-bottom:20px;box-shadow:var(--bs-shadow)"}),N=Object(p.a)("main",{target:"e1avhsg0"})({name:"11qdx1o",styles:"display:grid;grid-template-columns:1fr;grid-gap:16px"});function V(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),c=Object(o.a)(i,2),p=c[0],u=c[1],d=Object(a.useState)({}),l=Object(o.a)(d,2),h=l[0],b=l[1],f=function(){u(!p),p&&b({})},m=h.id,j=h.src,v=h.alt;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(K,{children:Object(g.jsx)(A,{children:Object(g.jsx)(x,{onSubmit:function(e){r(e)}})})}),Object(g.jsx)(A,{children:Object(g.jsx)(N,{children:Object(g.jsx)(z.Provider,{value:{onClick:function(e){var t=e.target,n=t.id,a=t.alt,r=t.dataset;b({id:n,alt:a,src:r.full_size}),f()}},children:Object(g.jsx)(D,{searchImages:n})})})}),Object(g.jsx)(s.a,{autoClose:2500}),p&&Object(g.jsx)(M,{onClose:f,children:Object(g.jsx)("img",{id:m,src:j,alt:v})})]})}n(76),n(77),n(78);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(V,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.5633f479.chunk.js.map