(this.webpackJsonprm_app=this.webpackJsonprm_app||[]).push([[0],{38:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),i=n.n(c),s=(n(38),n(54)),o=n(53),u=n(55),d=n(4),l=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.a,{style:{backgroundColor:"#8c5c62"},expand:"lg",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(s.a.Brand,{href:"#home"}),Object(d.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(s.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsx)(u.a,{className:"me-auto",children:Object(d.jsx)(u.a.Link,{href:"#home",children:"Home"})})})]})})})},j=n(33),h=n(17),m=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.a,{style:{width:"10rem"},children:[Object(d.jsx)(h.a.Img,{variant:"top",src:e.image}),Object(d.jsxs)(h.a.Body,{children:[Object(d.jsx)(h.a.Title,{children:e.name}),Object(d.jsxs)(h.a.Text,{children:["Name: ",e.name]}),Object(d.jsxs)(h.a.Text,{children:["Species: ",e.species]}),Object(d.jsxs)(h.a.Text,{children:["Gender: ",e.gender]})]})]})})},b=n(30),f=n(9),p=Object(b.a)({reducerPath:"characterApi",baseQuery:Object(f.d)({baseUrl:"https://rickandmortyapi.com/api/"}),endpoints:function(e){return{getCharacters:e.query({query:function(){return"character/"}}),getCharacterById:e.query({query:function(e){return"character/".concat(e)}}),getCharacterByName:e.query({query:function(e){return"character/?name=".concat(e)}})}}}),O=(p.useGetCharactersQuery,p.useGetCharacterByIdQuery,p.useGetCharacterByNameQuery);n(47);function x(){var e,t=Object(r.useState)(""),n=Object(j.a)(t,2),a=n[0],c=n[1],i=O(a),s=i.data,o=i.error,u=i.isLoading,l=i.isSuccess,h=i.isError;return Object(d.jsxs)("div",{style:{padding:"2em"},children:[Object(d.jsx)("form",{onSubmit:function(t){t.preventDefault(),e=t.target.elements.findChar.value,console.log(e),c(e)},children:Object(d.jsx)("input",{type:"text",name:"findChar",placeholder:"Enter Character Name"})}),console.log(s),Object(d.jsxs)("div",{className:"wrapper",children:[u&&"Loading...",h&&o,l&&s&&(null===s||void 0===s?void 0:s.results.map((function(e){return Object(d.jsx)(m,{name:e.name,image:e.image,species:e.species,gender:e.gender})})))]})]})}var g=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(x,{})]})},v=n(31),y=n(1),w=n(26),C=n.n(w),B=n(32);function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var q=Object(y.c)("counter/fetchCount",function(){var e=Object(B.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(y.d)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(q.pending,(function(e){e.status="loading"})).addCase(q.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),S=N.actions,T=(S.increment,S.decrement,S.incrementByAmount,N.reducer),G=Object(y.a)({reducer:Object(v.a)({counter:T},p.reducerPath,p.reducer),middleware:function(e){return e().concat(p.middleware)}}),I=n(8);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(49);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(I.a,{store:G,children:Object(d.jsx)(g,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.be90ffdd.chunk.js.map