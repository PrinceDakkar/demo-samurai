(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{296:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2v7Vv",dialogsItems:"Dialogs_dialogsItems__2zqny",active:"Dialogs_active__3kNuO",messages:"Dialogs_messages__StO1p",dialog:"Dialogs_dialog__qCYGf"}},303:function(e,s,t){"use strict";t.r(s);var a=t(296),n=t.n(a),i=t(17),c=t(1),o=function(e){var s="/dialogs/"+e.id;return Object(c.jsx)("div",{className:n.a.dialog+" "+n.a.active,children:Object(c.jsx)(i.b,{to:s,children:e.name})})},r=function(e){return Object(c.jsx)("div",{className:n.a.dialog,children:e.message})},d=t(97),j=t(11),l=t(90),u=t(128),b=t(85),g=t(33),m=Object(b.a)(50),O=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(l.a,{component:g.b,validate:[b.b,m],name:"newMessageBody",placeholder:"Enter your message"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Sen3d"})})]})})),h=function(e){var s=e.DialogsPage,t=s.dialogs.map((function(e){return Object(c.jsx)(o,{name:e.name,id:e.id},e.id)})),a=s.messages.map((function(e){return Object(c.jsx)(r,{message:e.message},e.id)}));s.newMessageBody;return 0==e.isAuth?Object(c.jsx)(j.a,{to:"/login"}):Object(c.jsxs)("div",{className:n.a.dialogs,children:[Object(c.jsx)("div",{className:n.a.dialogsItems,children:t}),Object(c.jsx)("div",{className:n.a.messages,children:Object(c.jsx)("div",{children:a})}),Object(c.jsx)(O,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})},p=t(14),f=t(5),v=t(36),x=t(37),_=t(39),y=t(38),D=t(0),M=t.n(D),N=function(e){return{isAuth:e.auth.isAuth}},w=t(9);s.default=Object(w.d)(Object(p.b)((function(e){return{DialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(d.b)(s))}}})),(function(e){var s=function(s){Object(_.a)(a,s);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){return!1===this.props.isAuth?Object(c.jsx)(j.a,{to:"/login"}):Object(c.jsx)(e,Object(f.a)({},this.props))}}]),a}(M.a.Component);return Object(p.b)(N)(s)}))(h)}}]);
//# sourceMappingURL=4.bb9d3131.chunk.js.map