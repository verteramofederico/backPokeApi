(this["webpackJsonpfront-poke"]=this["webpackJsonpfront-poke"]||[]).push([[0],{55:function(e,t,n){},57:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(21),i=n.n(r),s=n(98),j=n(46),o=n(99),l=n(12),d=(n(55),n(1));var b=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.a,{fixed:"top",bg:"light",expand:"lg",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(s.a.Brand,{children:Object(d.jsx)(l.b,{className:"navTitle",to:"/",children:"PokeApi"})}),Object(d.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(s.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(o.a,{className:"me-auto",children:[Object(d.jsx)(o.a,{children:Object(d.jsx)(l.b,{className:"navLink",to:"/all",children:"Ver lista Pokemon"})}),Object(d.jsx)(o.a.Link,{href:"https://www.linkedin.com/in/federico-verteramo/",target:"_blank",children:"Desarrollado por FV"})]})})]})})})},h=n(34);var x=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"mainh1",children:"PokeApi"}),Object(d.jsxs)(h.a,{className:"text-center cardWelcome",children:[Object(d.jsxs)(h.a.Body,{children:[Object(d.jsx)(h.a.Title,{children:"Toda la informacion Pokemon"}),Object(d.jsx)(h.a.Text,{children:"Con ayuda de PokeApi.v2 traemos toda la informacion que busca"})]}),Object(d.jsx)(h.a.Footer,{className:"text-muted",children:"by FV"})]})]})},O=n(38),u=n(9),m=n(48),f=n(37),p=n.n(f);var g=function(e){var t=e.pokeInfo;return Object(d.jsxs)(d.Fragment,{children:[t?Object(d.jsx)(h.a.Img,{variant:"top",src:t.sprites.front_default}):Object(d.jsx)(p.a,{className:"imgOnePoke",visible:!0,type:"Puff",color:"#00BFFF",height:80,width:80}),Object(d.jsxs)(h.a.Body,{children:[t?Object(d.jsx)(h.a.Title,{children:t.name}):Object(d.jsx)(h.a.Title,{children:"Poke name"}),t?Object(d.jsxs)(h.a.Text,{children:["Peso: ",t.weight]}):Object(d.jsx)(h.a.Text,{children:"Weight: loading"}),Object(d.jsxs)(h.a.Text,{children:[" Tipo:",t?t.types.map((function(e){return" ".concat(e.type.name," | ")})):"loading"]}),Object(d.jsxs)(h.a.Text,{children:[" Habilidades:",t?t.abilities.map((function(e){return" ".concat(e.ability.name," | ")})):"loading"]}),t?Object(d.jsx)(l.b,{to:"/one/".concat(t.id),children:Object(d.jsx)(m.a,{variant:"primary",children:"Mas info"})}):Object(d.jsx)(m.a,{variant:"primary",children:"Mas info"})]})]})};var v=function(e){var t=Object(c.useState)(null),n=Object(u.a)(t,2),a=n[0],r=n[1],i=e.idPoke;return Object(c.useEffect)((function(){fetch("http://localhost:3000/api/".concat(i)).then((function(e){return e.json()})).then((function(e){return r(e.datapoke)})).catch((function(e){return e}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(h.a,{style:{width:"18rem"},children:Object(d.jsx)(g,{pokeInfo:a})})})},k=n(54);n(57);var y=function(){function e(e,t){return Math.floor(Math.random()*(t-e))+e}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(j.a,{style:{alignContent:"center"},children:[Object(d.jsx)(k.a,{children:Object(O.a)(Array(4)).map((function(t,n){return Object(d.jsx)(v,{idPoke:e(1,250)},n)}))}),Object(d.jsx)(k.a,{children:Object(O.a)(Array(4)).map((function(t,n){return Object(d.jsx)(v,{idPoke:e(251,500)},n)}))})]}),Object(d.jsx)(l.b,{className:"navLink",to:"/all",children:Object(d.jsx)(m.a,{className:"mx-auto d-block buttonSeeAll",variant:"success",children:"Ver todos los Pokemon"})})]})},P=n(61);var T=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),i=Object(u.a)(r,2),s=i[0],o=i[1];return Object(c.useEffect)((function(){fetch("http://localhost:3000/api").then((function(e){return e.json()})).then((function(e){return a(e.datapoke)})).finally(o(!1)).catch((function(e){return e}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(j.a,{children:n?Object(d.jsxs)(P.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"Name"})]})}),n?n.results.map((function(e,t){return Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t+1}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:Object(d.jsx)(l.b,{to:"/one/".concat(t+1),children:Object(d.jsx)(m.a,{variant:"primary",children:"Mas info"})})})]})})})):Object(d.jsxs)("tbody",{children:[" ",Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Loading"})," ",Object(d.jsx)("td",{children:Object(d.jsx)(p.a,{visible:s,type:"Puff",color:"#00BFFF",height:10,width:10})})," "]})]})]}):Object(d.jsx)(p.a,{className:"imgOnePoke",visible:!0,type:"Puff",color:"#00BFFF",height:80,width:80})})})},F=n(97);var N=function(e){var t=Object(c.useState)(null),n=Object(u.a)(t,2),a=n[0],r=n[1],i=e.match.params.id;return Object(c.useEffect)((function(){fetch("http://localhost:3000/api/".concat(i)).then((function(e){return e.json()})).then((function(e){return r(e.datapoke)})).catch((function(e){return e}))}),[i]),Object(d.jsx)(d.Fragment,{children:i>=1&&i<=1118?Object(d.jsxs)(h.a,{className:"OnePokeContainer",style:{width:"18rem"},children:[Object(d.jsxs)(h.a.Body,{children:[a?Object(d.jsx)(h.a.Title,{className:"CardTitle",children:a.name}):Object(d.jsx)(h.a.Title,{children:"Poke name"}),a?Object(d.jsxs)(h.a.Text,{children:["Peso: ",a.weight]}):Object(d.jsx)(h.a.Text,{children:"Weight: loading"}),Object(d.jsxs)(h.a.Text,{children:[" Tipo:",a?a.types.map((function(e){return" ".concat(e.type.name," | ")})):"loading"]}),Object(d.jsxs)(h.a.Text,{children:[" Habilidades:",a?a.abilities.map((function(e){return" ".concat(e.ability.name," | ")})):"loading"]}),Object(d.jsxs)(h.a.Text,{children:[" Movimientos:",a?a.moves.map((function(e){return" ".concat(e.move.name," | ")})):"loading"]})]}),a?Object(d.jsx)(h.a.Img,{className:"imgOnePoke",variant:"top",src:a.sprites.front_default}):null]}):Object(d.jsxs)(F.a,{variant:"danger",children:[Object(d.jsx)(F.a.Heading,{children:"Pokemon no encontrado"}),Object(d.jsx)("p",{children:"En este momento la base de Pokemon es de 1118. Por favor ingrese un id entre 1 y 1118."})]})})},w=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"404 - Pagina no encontrada"}),Object(d.jsx)(l.b,{to:"/",children:"Ir al Home"})]})},B=n(8);var M=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b,{}),Object(d.jsx)(x,{}),Object(d.jsxs)(B.c,{children:[Object(d.jsx)(B.a,{path:"/",exact:!0,component:y}),Object(d.jsx)(B.a,{path:"/all",exact:!0,component:T}),Object(d.jsx)(B.a,{path:"/one/:id",exact:!0,component:N}),Object(d.jsx)(B.a,{component:w})]})]})};n(94);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(M,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.146d3fe4.chunk.js.map