(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[7],{333:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(58),r=t(1),c=t(327),s=t.n(c),o=t(0),l=function(e){var a=e.title,t=e.type,c=e.placeholder,s=e.validPattern,l=e.value,i=e.required,m=void 0!==i&&i,u=e.autoComplete,d=void 0===u?"on":u,p=e.name,f=e.handleInputChange,j=e.messageError,b=Object(r.useState)(""),h=Object(n.a)(b,2),g=h[0],v=h[1],O=function(){s&&(s.test(l)?v(!0):v(!1))};return Object(o.jsxs)("div",{className:"form-group mb-3",children:[Object(o.jsx)("label",{className:"form__group-label",children:Object(o.jsx)("small",{children:a})}),Object(o.jsxs)("div",{className:"form__group-input-container",children:[Object(o.jsx)("input",{className:"\n            ".concat(g&&""!==g?"form__group-input-valid":!g&&""!==g&&"form__group-input-invalid","\n            form__group-input\n          "),value:l,type:t,name:p,required:m,placeholder:c,autoComplete:d,onBlur:O,onKeyUp:O,onChange:f}),g||""===g?g&&""!==g&&Object(o.jsx)("i",{className:"fa fa-check-circle"}):Object(o.jsx)("i",{className:"fa fa-times-circle"})]}),!g&&""!==g&&Object(o.jsx)("p",{className:"form__group-message-error",children:j})]})},i=t(90),m=t(329),u=t(24),d=t.n(u),p=t(330),f=function(){var e=Object(p.a)(d.a.mark((function e(a){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://formsubmit.co/ajax/30d2a5de25cbcdcf9780c461ed1acd92",e.next=3,fetch("https://formsubmit.co/ajax/30d2a5de25cbcdcf9780c461ed1acd92",{method:"POST",body:new FormData(a)});case 3:return t=e.sent,n=t.json(),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();function j(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.useState)(e),t=Object(n.a)(a,2),c=t[0],s=t[1];return[c,function(e){var a=e.target;s(Object(m.a)(Object(m.a)({},c),{},Object(i.a)({},a.name,a.value)))},function(){return s(e)}]}({name:"",email:"",message:""}),a=Object(n.a)(e,3),t=a[0],c=a[1],u=a[2],d=t.name,p=t.email,j=t.message,b={name:/^[a-zA-Z\xc0-\xff\s]{1,40}$/,email:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/};return Object(o.jsxs)("div",{className:"contact__main-container",id:"contact",children:[Object(o.jsx)("h3",{className:"title__content mt-3",children:"Contact me"}),Object(o.jsxs)("form",{className:"contact__form-container mt-3",id:"formContact",onSubmit:function(e){e.preventDefault(),""!==d&&b.email.test(p)&&f(document.querySelector("#formContact")).then((function(){u(),s.a.fire("Success","Message sended!","success")})).catch((function(e){s.a.fire("Upss..",e.message,"error")}))},children:[Object(o.jsx)(l,{title:"Name:",type:"text",placeholder:"First and last name",validPattern:b.name,autoComplete:"off",required:!0,value:d,name:"name",handleInputChange:c,messageError:"*Character no valid"}),Object(o.jsx)(l,{title:"Email:",type:"email",placeholder:"email@email.com",validPattern:b.email,autoComplete:"off",required:!0,value:p,name:"email",handleInputChange:c,messageError:"*Email no valid"}),Object(o.jsxs)("div",{className:"form-group mb-3",children:[Object(o.jsx)("label",{className:"form__group-label",children:Object(o.jsx)("small",{children:"Message:"})}),Object(o.jsx)("div",{className:"form__group-input-container",children:Object(o.jsx)("textarea",{className:"form__group-message",name:"message",placeholder:"Your message",value:j,onChange:c,required:!0})})]}),Object(o.jsx)("button",{className:"btn btn-primary btn-block mt-2",disabled:""===d||""===p||""===j,children:"Send"})]})]})}}}]);
//# sourceMappingURL=7.ed05a22b.chunk.js.map