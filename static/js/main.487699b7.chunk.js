(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c.n(n),s=c(4),i=c(2),j=(c(14),c(15),c(16),c(0)),b=c(6),r=c.n(b),l=c(1),o=Object(j.memo)((function(e){var t=e.to,c=e.title;return Object(l.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:c})})),d=Object(j.memo)((function(){return Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(o,{to:"/",title:"Home"}),Object(l.jsx)(o,{to:"/tabs",title:"Tabs"})]})})})})),O=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsx)(i.b,{})]})},m=Object(j.memo)((function(){return Object(l.jsx)("h1",{className:"title",children:"Home page"})})),x=Object(j.memo)((function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})})),h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=Object(j.memo)((function(e){var t=e.tab,c=Object(i.i)().tabId;return Object(l.jsx)("li",{className:r()({"is-active":t.id===c}),"data-cy":"Tab",children:Object(l.jsx)(s.b,{to:"../".concat(t.id),"data-cy":"TabLink",children:t.title})},t.id)})),v=Object(j.memo)((function(){var e=Object(i.i)().tabId,t=Object(j.useMemo)((function(){return h.find((function(t){return t.id===e}))}),[h,e]);return Object(l.jsx)("div",{className:"section",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:h.map((function(e){return Object(l.jsx)(u,{tab:e},e.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:t?t.content:"Please select a tab"})]})})}));a.a.render(Object(l.jsx)(s.a,{children:Object(l.jsx)(i.e,{children:Object(l.jsxs)(i.c,{path:"/",element:Object(l.jsx)(O,{}),children:[Object(l.jsx)(i.c,{index:!0,element:Object(l.jsx)(m,{})}),Object(l.jsxs)(i.c,{path:"/tabs",children:[Object(l.jsx)(i.c,{index:!0,element:Object(l.jsx)(v,{})}),Object(l.jsx)(i.c,{path:":tabId",element:Object(l.jsx)(v,{})})]}),Object(l.jsx)(i.c,{path:"/home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsx)(i.c,{path:"*",element:Object(l.jsx)(x,{})})]})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.487699b7.chunk.js.map