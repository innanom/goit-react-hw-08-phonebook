"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[648],{648:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,o,a,i,s,c,u,l,d,p,x,b=t(791),f=t(434),h=t(168),g=t(686),m=g.Z.label(r||(r=(0,h.Z)(["\n    margin-top: 20px;\n    display: flex;\n    gap: 10px;\n    align-items: center;\n\n    font-size: 18px;\n    font-weight: 500;\n    font-style: oblique;\n\n\n"]))),v=g.Z.input(o||(o=(0,h.Z)(["\n    width: 200px;\n    height: 20px;\n    border-color: rgba(164, 91, 233, 0.404);\n    box-shadow: 0 0 0 rgba(30, 9, 33, 0.473),\n        \n"]))),Z=function(n){return n.contacts.items},w=function(n){return n.contacts.isLoading},y=function(n){return n.filter.value},j=t(186),C=t(329),k=function(){var n=(0,f.v9)(y),e=(0,f.I0)();return(0,C.jsxs)(m,{children:["Find contacts by name",(0,C.jsx)(v,{type:"text",name:"filter",placeholder:"Enter name",value:n,onChange:function(n){e((0,j.M6)(n.currentTarget.value.toLowerCase()))}})]})},z=g.Z.ul(a||(a=(0,h.Z)(["\n    list-style: none;\n    padding: 20px;\n    margin: 0;\n     \n"]))),A=g.Z.p(i||(i=(0,h.Z)(["\n    font-size: 16px;\n    font-weight: 400;\n    font-style: oblique;\n"]))),L=g.Z.li(s||(s=(0,h.Z)(["\n    position: relative;\n    display: flex;\n    \n    align-items:baseline;\n    justify-content:space-between;\n\n        &::before { \n            content: '';\n            position: absolute;\n            top: 45%;\n            left: -20px;\n            width: 8px;\n            height: 8px;\n            background-color:  rgba(104, 48, 109, 0.500);\n            border-radius: 50%;\n        }\n\n"]))),q=g.Z.p(c||(c=(0,h.Z)(["\n    font-size: 18px;\n    font-weight: 500;\n    color: rgb(68, 38, 97);\n"]))),S=g.Z.button(u||(u=(0,h.Z)(["\n    font-size: 14px;\n    font-weight: 500;\n    background-color: rgba(104, 48, 109, 0.200);\n    border: 0;\n    border-radius: 3px;\n    padding: 5px 15px;\n\n        &:hover {\n            background-color:rgba(68, 38, 97, 0.655);\n            }\n"]))),_=t(893),E=function(n){var e=n.id,t=n.name,r=n.number,o=(0,f.I0)();return(0,C.jsxs)(L,{children:[(0,C.jsxs)(q,{children:[t,": ",r]}),(0,C.jsx)(S,{type:"button",onClick:function(){o((0,_.GK)(e))},children:"Delete"})]},e)},I=function(){var n=(0,f.v9)(Z),e=(0,f.v9)(y),t=function(){var t=e.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}();return(0,C.jsxs)(z,{children:[0===n.length&&(0,C.jsx)(A,{children:"The contact list is empty"}),0!==n.length&&t.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,C.jsx)(E,{id:r,name:e,number:t},r)}))]})},T=t(439),F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},N=g.Z.form(l||(l=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n"]))),D=g.Z.label(d||(d=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n\n    font-size: 18px;\n    font-weight: 500;\n    color: rgb(68, 38, 97);\n"]))),K=g.Z.input(p||(p=(0,h.Z)(["\n    width: 300px;\n    height: 30px;\n    border-color: rgba(164, 91, 233, 0.404);\n    box-shadow: 0 0 0 rgba(30, 9, 33, 0.473),\n        0 2px 8px rgba(104, 48, 109, 0.274);\n"]))),M=g.Z.button(x||(x=(0,h.Z)(["\n    width: 150px;\n    font-size: 14px;\n    padding: 10px 15px;\n    background-color: rgba(104, 48, 109, 0.274);\n    border-radius: 3px;\n    border-color: rgba(164, 91, 233, 0.404);\n    box-shadow: 0 0 0 rgba(30, 9, 33, 0.473),\n        0 2px 8px rgba(104, 48, 109, 0.274);\n\n        &:hover {\n            background-color: rgba(68, 38, 97, 0.855);\n        }\n"]))),R=function(){var n=(0,b.useState)(""),e=(0,T.Z)(n,2),t=e[0],r=e[1],o=(0,b.useState)(""),a=(0,T.Z)(o,2),i=a[0],s=a[1],c=(0,f.v9)(Z),u=(0,f.I0)(),l=function(){r(""),s("")};return(0,C.jsxs)(N,{onSubmit:function(n){n.preventDefault(),c.some((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in contacts")):(!function(n,e){var t={id:F(),name:n,number:e};u((0,_.uK)(t))}(t,i),l())},children:[(0,C.jsxs)(D,{children:["Name",(0,C.jsx)(K,{type:"text",name:"name",placeholder:"Enter your name",value:t,onChange:function(n){r(n.currentTarget.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,C.jsxs)(D,{children:["Number",(0,C.jsx)(K,{type:"tel",name:"number",placeholder:"Enter your telephone number",value:i,onChange:function(n){s(n.currentTarget.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,C.jsx)(M,{type:"submit",children:"Add contact"})]})};function U(){var n=(0,f.I0)(),e=(0,f.v9)(w);return(0,b.useEffect)((function(){n((0,_.yF)())}),[n]),(0,C.jsxs)("div",{children:[(0,C.jsx)("title",{children:"Your contacts"}),(0,C.jsx)(R,{}),(0,C.jsx)(k,{}),(0,C.jsx)("div",{children:e&&"Request in progress..."}),(0,C.jsx)(I,{})]})}}}]);
//# sourceMappingURL=648.a430a840.chunk.js.map