"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[101],{1101:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var a,r,i=t(1123),o=t(9439),c=t(2791),u=t(9434),s=t(659),l=t(9924),d=t(9012),f=t(3664),m=t(8571),h=t(184),p=function(){var n=(0,c.useState)(""),e=(0,o.Z)(n,2),t=e[0],a=e[1],r=(0,c.useState)(""),i=(0,o.Z)(r,2),p=i[0],x=i[1],v=(0,u.v9)(s.Af),b=(0,u.I0)(),g=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":a(r);break;case"number":x(r);break;default:console.warn("There is no input: ".concat(t,"!"))}},j=function(n){var e=n.name;!function(n){return v.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}))}(e)?b((0,l.uK)(n)):alert("".concat(e," is already in contacts."))},Z=function(){a(""),x("")};return(0,h.jsx)("form",{onSubmit:function(n){n.preventDefault(),j({name:t,number:p}),Z()},children:(0,h.jsxs)(d.Z,{sx:{display:"inline-flex",gap:1,boxShadow:1,borderRadius:2,p:2,minWidth:320},children:[(0,h.jsx)(f.Z,{label:"Name",variant:"outlined",type:"text",name:"name",value:t,onChange:g,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,h.jsx)(f.Z,{label:"Number",variant:"outlined",type:"tel",name:"number",value:p,onChange:g,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,h.jsx)(m.Z,{variant:"contained",type:"submit",children:"Add contact"})]})})},x=t(168),v=t(225),b=v.Z.li(a||(a=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  min-width: 320px;\n"]))),g=function(n){var e=n.contact,t=e.id,a=e.name,r=e.number,o=(0,u.I0)(),c=(0,u.v9)(s.xU);return(0,h.jsxs)(b,{children:[(0,h.jsxs)(i.Z,{marginRight:"auto",children:[a,":"]}),(0,h.jsx)(i.Z,{children:r}),(0,h.jsx)(m.Z,{variant:"contained",onClick:function(){o((0,l.GK)(t))},disabled:c,children:"Delete"})]})},j=v.Z.ul(r||(r=(0,x.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n"]))),Z=function(){var n=(0,u.v9)(s.hF);return(0,h.jsx)(j,{children:n.length>0&&n.map((function(n){return(0,h.jsx)(g,{contact:n},n.id)}))})},w=t(7312),y=t(3169),C=function(){var n=(0,u.v9)(y.A).filter,e=(0,u.I0)();return(0,h.jsx)(f.Z,{label:"Find contacts by name",variant:"outlined",type:"text",name:"filter",value:n,onChange:function(n){var t=n.target.value;e((0,w.T)(t))}})},A=function(){var n=(0,u.I0)(),e=(0,u.v9)(s.xU),t=(0,u.v9)(s.Af);return(0,c.useEffect)((function(){n((0,l.yF)())}),[n]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{}),(0,h.jsx)(i.Z,{variant:"h3",children:"Contacts"}),0===t.length&&!e&&(0,h.jsx)("h2",{children:"You have no contacts"}),t.length>0&&(0,h.jsx)(C,{}),(0,h.jsx)(Z,{})]})}},659:function(n,e,t){t.d(e,{Af:function(){return i},hF:function(){return c},xU:function(){return o}});var a=t(6916),r=t(3169),i=function(n){return n.contacts.items},o=function(n){return n.contacts.isLoading},c=(0,a.P1)([i,r.A],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}))},3169:function(n,e,t){t.d(e,{A:function(){return a}});var a=function(n){return n.filter.filter}}}]);
//# sourceMappingURL=101.0bf11cc2.chunk.js.map