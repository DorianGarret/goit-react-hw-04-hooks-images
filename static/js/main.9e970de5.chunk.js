(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),s=a(6),c=a(7),l=a(11),p=a(10),u=a(8),h=a(31),d=a(2),g=a(30);var m=Object(d.a)("form",{target:"eyskgx63"})({name:"kagw8f",styles:"display:flex;width:100%;min-width:275px;background-color:var(--bs-white);border-radius:3px;overflow:hidden;margin:0 auto;@media screen and (min-width: 1200px){max-width:300px;}"}),b=Object(d.a)("button",{target:"eyskgx62"})({name:"1dap5oq",styles:"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border:0;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);outline:none;&:hover{opacity:1;}"}),x=Object(d.a)(g.a,{target:"eyskgx61"})({name:"14is9qy",styles:"font-size:20px"}),f=Object(d.a)("input",{target:"eyskgx60"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"}),j=a(1);function v(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(h.a)(a,2),o=r[0],i=r[1];return Object(j.jsxs)(m,{onSubmit:function(e){if(e.preventDefault(),""===o.trim())return u.b.error("Enter the name of the pictures or photos!"),void i("");t(o),i("")},children:[Object(j.jsx)(b,{type:"submit",children:Object(j.jsx)(x,{})}),Object(j.jsx)(f,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){i(e.target.value)}})]})}var y=a(5),O=a.n(y),w=a(18),k=a(12),I=a(28),C=a.n(I),z=function(){function e(){Object(s.a)(this,e),this.searchQuery="",this.page=1}return Object(c.a)(e,[{key:"fetchImages",value:function(){var e=Object(k.a)(O.a.mark((function e(){var t,a,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C.a.create({baseURL:"https://pixabay.com/api/",headers:{"Content-Type":"application/json"},timeout:1e3,method:"GET",params:{key:"23790821-6777a11e2db191613ff9bf1d2",q:this.searchQuery,page:this.page,image_type:"photo",orientation:"horizontal",per_page:16}}),e.next=3,t.get();case 3:return a=e.sent,e.next=6,a.data;case 6:return n=e.sent,e.next=9,n.hits;case 9:return r=e.sent,e.abrupt("return",this.getImagesParams(r));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getImagesParams",value:function(e){return e.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),e}();var S=Object(d.a)("li",{target:"e1f02xps1"})({name:"4hfibk",styles:"box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),L=Object(d.a)("img",{target:"e1f02xps0"})({name:"1icvew8",styles:"width:100%;height:200px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"});function M(e){var t=e.params,a=e.onClick,n=t.id,r=t.webformatURL,o=t.largeImageURL,i=t.tags;return Object(j.jsx)(S,{children:Object(j.jsx)(L,{id:n,src:r,alt:i,"data-full_size":o,onClick:a})})}var D=a(29),U=a.n(D);var q=Object(d.a)(U.a,{target:"e1q360rv0"})({name:"1avoypo",styles:"margin:0 auto;width:80px;height:80px"});function E(){return Object(j.jsx)(q,{type:"ThreeDots",color:"#3f51b5"})}var F=Object(d.a)("button",{target:"e122mgko0"})({name:"tqf0vc",styles:"margin:0 auto 10px;padding:8px 16px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;display:inline-block;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;max-width:180px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&:hover,:focus{background-color:#303f9f;}"});function P(e){var t=e.onClick;return Object(j.jsx)(F,{type:"button",onClick:t,children:"Load more"})}var R=Object(d.a)("ul",{target:"ehfmf380"})({name:"1favdd2",styles:"display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-gap:16px"}),T=new z,B="idle",Q="pending",_="resolved",A=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],status:Q},e.handleLoadMoreImage=Object(k.a)(O.a.mark((function t(){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return T.incrementPage(),t.next=3,T.fetchImages();case 3:a=t.sent,e.setState((function(e){var t=e.images;return{images:[].concat(Object(w.a)(t),Object(w.a)(a))}})),e.scrollDown();case 6:case"end":return t.stop()}}),t)}))),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.fetchImages();case 3:t=e.sent,this.setState({images:t,status:B}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u.b.error("oops something went wrong");case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(k.a)(O.a.mark((function e(t,a){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props.searchImages,t.searchImages===n){e.next=16;break}return this.setState({status:Q}),e.prev=3,T.resetPage(),T.query=n,e.next=8,T.fetchImages();case 8:(r=e.sent).length||u.b.error("images not found"),this.setState({images:r,status:_}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),u.b.error("oops something went wrong");case 16:case"end":return e.stop()}}),e,this,[[3,13]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"scrollDown",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.status;return n===B?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(R,{children:a.map((function(t){return Object(j.jsx)(M,{params:t,onClick:e.props.onClick},t.id)}))}),a.length>0&&Object(j.jsx)(P,{onClick:this.handleLoadMoreImage})]}):n===Q?Object(j.jsx)(E,{}):n===_?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(R,{children:a.map((function(t){return Object(j.jsx)(M,{params:t,onClick:e.props.onClick},t.id)}))}),a.length>0&&Object(j.jsx)(P,{onClick:this.handleLoadMoreImage})]}):void 0}}]),a}(n.Component);var K=Object(d.a)("div",{target:"e1d9azhh1"})({name:"18wgw8",styles:"z-index:1200;position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8)"}),J=Object(d.a)("div",{target:"e1d9azhh0"})({name:"sve88p",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"}),G=document.getElementById("modal-root"),H=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)(K,{onClick:this.handleBackdropClick,children:Object(j.jsx)(J,{children:this.props.children})}),G)}}]),a}(n.Component);var W=Object(d.a)("div",{target:"e1avhsg2"})({name:"c2nfrf",styles:"max-width:1200px;margin:0 auto;padding-left:10px;padding-right:10px;@media screen and (min-width: 1200px){width:1200px;}"}),N=Object(d.a)("header",{target:"e1avhsg1"})({name:"1j4uun9",styles:"z-index:1100;background-color:var(--bs-primary);top:0;left:0;position:sticky;display:flex;justify-content:center;align-items:center;min-height:64px;padding-top:12px;padding-bottom:12px;margin-bottom:20px;box-shadow:var(--bs-shadow)"}),V=Object(d.a)("main",{target:"e1avhsg0"})({name:"11qdx1o",styles:"display:grid;grid-template-columns:1fr;grid-gap:16px"}),X=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchImages:"",showModal:!1,largeImage:{}},e.handleFormSubmit=function(t){e.setState({searchImages:t})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handlerFullSizeImage=function(t){var a=t.target,n=a.id,r=a.alt,o=a.dataset;e.setState({largeImage:{id:n,alt:r,src:o.full_size}}),e.toggleModal()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchImages,a=e.showModal,n=e.largeImage,r=n.id,o=n.src,i=n.alt;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(N,{children:Object(j.jsx)(W,{children:Object(j.jsx)(v,{onSubmit:this.handleFormSubmit})})}),Object(j.jsx)(W,{children:Object(j.jsx)(V,{children:Object(j.jsx)(A,{searchImages:t,onClick:this.handlerFullSizeImage})})}),Object(j.jsx)(u.a,{autoClose:2500}),a&&Object(j.jsx)(H,{onClose:this.toggleModal,children:Object(j.jsx)("img",{id:r,src:o,alt:i})})]})}}]),a}(n.Component);a(78),a(79),a(80);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(X,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.9e970de5.chunk.js.map