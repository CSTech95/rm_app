(this.webpackJsonprm_app=this.webpackJsonprm_app||[]).push([[0],{56:function(e,t,n){},64:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),i=n.n(c),s=(n(56),n(71)),o=n(70),u=n(72),d=n(4),l=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.a,{style:{height:"3em"},bg:"dark",expand:"lg",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(s.a.Brand,{href:"#home"}),Object(d.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(s.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsx)(u.a,{className:"me-auto",children:Object(d.jsx)(u.a.Link,{style:{color:"white"},href:"#home",children:"Home"})})})]})})})},j=n(35),h=n(39),m=n(40),b=n(28),O=n(45),f=function(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),a=n[0],c=n[1],i=function(){return c(!1)};return Object(d.jsxs)("div",{children:[Object(d.jsxs)(h.a,{style:{fontSize:".9em"},variant:"dark",onClick:function(){return c(!0)},children:[Object(d.jsx)(O.a,{style:{width:"2.5rem"},src:e.image,rounded:!0}),e.name.length<=10?e.name:e.name.slice(0,7)+"..."]}),Object(d.jsxs)(b.a,{show:a,onHide:i,children:[Object(d.jsx)(b.a.Header,{closeButton:!0,children:Object(d.jsx)(b.a.Title,{children:e.name})}),Object(d.jsx)(O.a,{style:{height:"10rem",width:"9rem"},src:e.image}),Object(d.jsxs)(m.a,{children:[Object(d.jsx)(m.a.Item,{children:e.species}),Object(d.jsx)(m.a.Item,{children:e.gender})]}),Object(d.jsxs)(b.a.Footer,{children:[Object(d.jsx)(h.a,{variant:"secondary",onClick:i,children:"Close"}),Object(d.jsx)(h.a,{variant:"primary",onClick:i,children:"Save Changes"})]})]})]})},x=n(49),p=n(11),g=Object(x.a)({reducerPath:"characterApi",baseQuery:Object(p.d)({baseUrl:"https://rickandmortyapi.com/api/"}),endpoints:function(e){return{getCharacters:e.query({query:function(){return"character/"}}),getCharacterById:e.query({query:function(e){return"character/".concat(e)}}),getCharacterByName:e.query({query:function(e){return"character/?name=".concat(e)}})}}}),v=(g.useGetCharactersQuery,g.useGetCharacterByIdQuery,g.useGetCharacterByNameQuery);n(64);function y(){var e,t=Object(r.useState)(""),n=Object(j.a)(t,2),a=n[0],c=n[1],i=v(a),s=i.data,o=i.error,u=i.isLoading,l=i.isSuccess,h=i.isError;return Object(d.jsxs)("div",{style:{padding:"2em"},children:[Object(d.jsx)("form",{onSubmit:function(t){t.preventDefault(),e=t.target.elements.findChar.value,console.log(e),c(e)},children:Object(d.jsx)("input",{style:{color:"white",background:"#212529",width:"12rem"},type:"text",name:"findChar",placeholder:"Enter Character Name"})}),Object(d.jsx)("br",{}),console.log(s),Object(d.jsxs)("div",{className:"wrapper",children:[u&&"Loading...",h&&o,l&&s&&(null===s||void 0===s?void 0:s.results.map((function(e){return Object(d.jsx)(f,{name:e.name,image:e.image,species:e.species,gender:e.gender})})))]})]})}var w=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(y,{})]})},C=n(50),k=n(3),B=n(47),S=n.n(B),q=n(51);function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var N=Object(k.c)("counter/fetchCount",function(){var e=Object(q.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Q=Object(k.d)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(N.pending,(function(e){e.status="loading"})).addCase(N.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),A=Q.actions,E=(A.increment,A.decrement,A.incrementByAmount,Q.reducer),F=Object(k.a)({reducer:Object(C.a)({counter:E},g.reducerPath,g.reducer),middleware:function(e){return e().concat(g.middleware)}}),G=n(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(66);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(G.a,{store:F,children:Object(d.jsx)(w,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.f6b1b3cf.chunk.js.map