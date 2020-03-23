(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={formLabel:"ContactForm_formLabel__1hDC-",formInput:"ContactForm_formInput__1r2bF",formButton:"ContactForm_formButton__2M3aA"}},14:function(t,e,n){t.exports={themeSelector:"SwitchTheme_themeSelector__1B8O8",label:"SwitchTheme_label__WC0od",switch:"SwitchTheme_switch__2BQnD",slider:"SwitchTheme_slider__in4ol"}},19:function(t,e,n){t.exports={title:"App_title__1YcTA",section:"App_section__1zThd"}},39:function(t,e,n){t.exports={contactItem:"ContactListItem_contactItem__3Q33w"}},40:function(t,e,n){t.exports={contactButton:"ContactListButton_contactButton__1hXYk"}},41:function(t,e,n){t.exports={errorMessage:"Error_errorMessage__3vZDX"}},42:function(t,e,n){t.exports={filter:"Filter_filter__1E5tH"}},43:function(t,e,n){t.exports={body:"Layout_body__2WDWT"}},45:function(t,e,n){t.exports=n(95)},94:function(t,e,n){},95:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(15),r=n.n(o),u=n(6),s=n(7),i=n(8),l=n(10),m=n(9),f=n(11),h=n(36),b=n.n(h),d=n(25),p=function(t){return t.contacts.phonebook},C=function(t){return t.contacts.filter.toLowerCase()},g={getLoading:function(t){return t.contacts.loading},getVisibleContacts:Object(d.a)([p,C],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),getFilter:C,getContactById:Object(d.a)([function(t,e){return e},p],(function(t,e){return e.find((function(e){return e.id===t}))})),getError:function(t){return t.contacts.error}},O=n(37),j=n(2),v=Object(j.b)("contacts/addRequest"),E=Object(j.b)("contacts/addSuccess"),_=Object(j.b)("contacts/addError"),y=Object(j.b)("contacts/fetchRequest"),k=Object(j.b)("contacts/fetchSuccess"),S=Object(j.b)("contacts/fetchError"),F={removeContactRequest:Object(j.b)("contacts/removeRequest"),removeContactSuccess:Object(j.b)("contacts/removeuccess"),removeContactError:Object(j.b)("contacts/removeError"),fetchContactRequest:y,fetchContactSuccess:k,fetchContactError:S,addContactRequest:v,addContactSuccess:E,addContactError:_,changeFilter:Object(j.b)("task/changeFilter")},w=n(12),N=n.n(w);N.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/v1",N.a.defaults.headers.common.Authorization="1474f3f5-f023-4759-aec0-68582b03d82b",N.a.defaults.headers.post["Content-Type"]="application/json";var R={addContact:function(t,e){return function(n){n(F.addContactRequest());var a={name:t,number:e};N.a.post("/contacts",{name:t,number:e},{body:JSON.stringify(a)}).then((function(t){var e=t.data;n(F.addContactSuccess(e))})).catch((function(t){return n(F.addContactError(t))}))}},fetchContacts:function(){return function(t){t(F.fetchContactRequest()),N.a.get("/contacts").then((function(e){var n=e.data;return t(F.fetchContactSuccess(n))})).catch((function(t){return F.fetchContactError(t)}))}},removeContact:function(t){return function(e){e(F.removeContactRequest()),N.a.delete("/contacts/".concat(t)).then((function(){return e(F.removeContactSuccess(t))})).catch((function(t){return e(F.fetchContactError(t))}))}}},T=n(39),B=n.n(T),q=n(40),x=n.n(q);function L(t){var e=t.onRemoveContact;return c.a.createElement("button",{className:x.a.contactButton,type:"button",onClick:e},"Delete")}function I(t){var e=t.name,n=t.number,a=t.keys,o=t.onRemove;return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:B.a.contactItem,key:a},e," : ",n,c.a.createElement(L,{onRemoveContact:o})))}I.defaultProps={name:"",phone:"",keys:""};var A=Object(u.b)((function(t,e){var n=g.getContactById(t,e.id);return Object(O.a)({},n)}),(function(t,e){return{onRemove:function(){return t(R.removeContact(e.id))}}}))(I),P=n(41),D=n.n(P);function M(t){var e=t.message;return c.a.createElement("p",{className:D.a.errorMessage},e)}function J(t){var e=t.contacts,n=t.isLoadingContacts,a=t.isError;return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(M,{message:"Something went wrong..."}),n&&c.a.createElement(b.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),c.a.createElement("ul",null,e.map((function(t){var e=t.id;return c.a.createElement(A,{key:e,id:e})}))))}J.defaultProps={contacts:[]};var W=Object(u.b)((function(t){return{contacts:g.getVisibleContacts(t),isLoadingContacts:g.getLoading(t),isError:g.getError(t)}}))(J),z=n(1),Q=n(13),V=n.n(Q),X=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",phone:""},n.handleChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(z.a)({},a,c))},n.hanleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,c=e.phone;n.props.onAddContact(a,c),n.setState({name:"",phone:""})},n}return Object(f.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return c.a.createElement("form",{className:V.a.form,onSubmit:this.hanleSubmit},c.a.createElement("label",{className:V.a.formLabel},"Name",c.a.createElement("input",{className:V.a.formInput,type:"text",value:e,placeholder:"Enter name",onChange:this.handleChange,name:"name",required:!0})),c.a.createElement("label",{className:V.a.formLabel},"Phone",c.a.createElement("input",{className:V.a.formInput,type:"text",value:n,placeholder:"Enter phone",onChange:this.handleChange,name:"phone",required:!0})),c.a.createElement("button",{className:V.a.formButton,type:"submit"},"Add contact"))}}]),e}(a.Component);X.defaultProps={onAddContact:function(){}};var Y={onAddContact:R.addContact},H=Object(u.b)(null,Y)(X),U=n(42),Z=n.n(U);function G(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("input",{className:Z.a.filter,type:"text",value:e,onChange:function(t){return n(t.target.value)}}))}G.defaultProps={value:""};var K,$,tt,et={onChangeFilter:F.changeFilter},nt=Object(u.b)((function(t){return{value:g.getFilter(t)}}),et)(G),at={light:{fontColor:"black",bodyBg:"white"},dark:{fontColor:"white",bodyBg:"black"}},ct=c.a.createContext(at),ot=n(14),rt=n.n(ot),ut=function(t){var e=t.onToggleTheme;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:rt.a.label},"Theme"),c.a.createElement("label",{className:rt.a.switch},c.a.createElement("input",{type:"checkbox",checked:rt.a.checked,onChange:function(t){return e(t.target.value)}}),c.a.createElement("span",{className:rt.a.slider})))},st=n(17),it=function(t){return function(e){function n(){var t;return Object(s.a)(this,n),(t=Object(l.a)(this,Object(m.a)(n).call(this))).state={theme:"light"},t.toggleTheme=t.toggleTheme.bind(Object(st.a)(t)),t}return Object(f.a)(n,e),Object(i.a)(n,[{key:"toggleTheme",value:function(t){this.setState({theme:"dark"===this.state.theme?"light":"dark"})}},{key:"render",value:function(){var e=this;return c.a.createElement(ct.Provider,{value:at[this.state.theme]},c.a.createElement(t,Object.assign({},this.props,{toggle:function(t){return e.toggleTheme(t)}})))}}]),n}(a.Component)},lt=n(43),mt=n.n(lt),ft=it(function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(ct.Consumer,null,(function(e){return c.a.createElement("div",{className:mt.a.body,style:{color:e.fontColor,background:e.bodyBg}},t.props.toggle&&c.a.createElement(ut,{onToggleTheme:function(e){return t.props.toggle(e)}}),t.props.children)})))}}]),e}(a.Component)),ht=n(19),bt=n.n(ht),dt=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return c.a.createElement(ft,null,c.a.createElement("section",{className:bt.a.section},c.a.createElement("h1",{className:bt.a.title},"Phonebook"),c.a.createElement(H,null),c.a.createElement("h2",{className:bt.a.title},"Contacts"),c.a.createElement(nt,null),c.a.createElement(W,null)))}}]),e}(a.Component),pt={onFetchContacts:R.fetchContacts},Ct=Object(u.b)(null,pt)(dt),gt=n(18),Ot=n(5),jt=Object(j.c)([],(K={},Object(z.a)(K,F.fetchContactSuccess,(function(t,e){return e.payload})),Object(z.a)(K,F.addContactSuccess,(function(t,e){return[].concat(Object(gt.a)(t),[e.payload])})),Object(z.a)(K,F.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),K)),vt=Object(j.c)("",Object(z.a)({},F.changeFilter,(function(t,e){return e.payload}))),Et=Object(j.c)(!1,($={},Object(z.a)($,F.fetchContactRequest,(function(){return!0})),Object(z.a)($,F.addContactRequest,(function(){return!0})),Object(z.a)($,F.removeContactRequest,(function(){return!0})),Object(z.a)($,F.addContactSuccess,(function(){return!1})),Object(z.a)($,F.fetchContactSuccess,(function(){return!1})),Object(z.a)($,F.removeContactSuccess,(function(){return!1})),Object(z.a)($,F.addContactError,(function(){return!1})),Object(z.a)($,F.fetchContactError,(function(){return!1})),Object(z.a)($,F.removeContactError,(function(){return!1})),$)),_t=Object(j.c)(!1,(tt={},Object(z.a)(tt,F.addContactError,(function(){return!0})),Object(z.a)(tt,F.fetchContactError,(function(){return!0})),Object(z.a)(tt,F.removeContactError,(function(){return!0})),tt)),yt=Object(Ot.combineReducers)({phonebook:jt,filter:vt,loading:Et,error:_t}),kt=n(44),St=n.n(kt),Ft=Object(j.d)(),wt=Object(j.a)({reducer:{contacts:yt},middleware:[].concat(Object(gt.a)(Ft),[St.a])});n(94);r.a.render(c.a.createElement(u.a,{store:wt},c.a.createElement(Ct,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.7ee12265.chunk.js.map