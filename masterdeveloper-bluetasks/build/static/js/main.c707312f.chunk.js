(this["webpackJsonpbluetasks-frontend"]=this["webpackJsonpbluetasks-frontend"]||[]).push([[0],{37:function(e,t,a){e.exports=a(67)},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),o=a.n(s),l=a(4),c=a(5),i=a(3),u=a(10),d=a(9),m=a(36),h=a(15),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.b,{className:"nav-item nav-link ".concat(this.props.item.active?"active":""),to:this.props.item.href,onClick:function(t){return e.props.onClick(e.props.item)}},this.props.item.name))}}]),a}(n.Component),b="http://myrealserver.com",f="".concat(b),v="".concat(b,"/api"),g=a(14),E=a.n(g),k=new(function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,[{key:"login",value:function(e,t,a){console.log(f),E.a.post("".concat(f,"/login"),{username:e,password:t}).then((function(e){var t=e.headers.authorization.replace("Bearer ","");sessionStorage.setItem("jwt",t),a(!0)})).catch((function(e){console.error(e),a(!1)}))}},{key:"getJWTToken",value:function(){return sessionStorage.getItem("jwt")}},{key:"isAuthenticated",value:function(){return null!=this.getJWTToken()}},{key:"logout",value:function(){sessionStorage.removeItem("jwt")}},{key:"getJWTTokenData",value:function(){var e=this.getJWTToken();if(null==e)return null;var t=atob(e.split(".")[1]);return JSON.parse(t)}}]),e}()),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={items:[{name:"Listar Tarefas",href:"/",active:!0},{name:"Nova Tarefa",href:"/form",active:!1}]},n.onClickHandler=n.onClickHandler.bind(Object(i.a)(n)),n.onLogoutHandler=n.onLogoutHandler.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"onClickHandler",value:function(e){var t=Object(m.a)(this.state.items);t.forEach((function(t){t.name===e.name?t.active=!0:t.active=!1})),this.setState({items:t})}},{key:"onLogoutHandler",value:function(){k.logout(),this.props.onLinkClick()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"BlueTasks"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("div",{className:"navbar-nav mr-auto"},this.state.items.map((function(t){return r.a.createElement(p,{key:t.name,item:t,onClick:e.onClickHandler})})),k.isAuthenticated()?r.a.createElement(p,{item:{name:"Logout",active:!1,href:"#"},onClick:this.onLogoutHandler}):""),r.a.createElement("span",{className:"navbar-text"},k.isAuthenticated()?"Ol\xe1, ".concat(k.getJWTTokenData().displayName,"!"):""))))}}]),a}(n.Component),S=a(1),O=new(function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,[{key:"list",value:function(e,t){E.a.get("".concat(v,"/tasks?sort=whenToDo,asc"),this.buildAuthHeader()).then((function(t){return e(t.data.content)})).catch((function(e){return t(e)}))}},{key:"load",value:function(e,t,a){E.a.get("".concat(v,"/tasks/").concat(e),this.buildAuthHeader()).then((function(e){return t(e.data)})).catch((function(e){return a(e)}))}},{key:"delete",value:function(e,t,a){E.a.delete("".concat(v,"/tasks/").concat(e),this.buildAuthHeader()).then((function(){return t()})).catch((function(e){return a(e)}))}},{key:"save",value:function(e,t,a){0===e.id?E.a.post("".concat(v,"/tasks"),e,this.buildAuthHeader()).then((function(){return t()})).catch((function(e){return a(e)})):E.a.put("".concat(v,"/tasks/").concat(e.id),e,this.buildAuthHeader()).then((function(){return t()})).catch((function(e){return a(e)}))}},{key:"buildAuthHeader",value:function(){return{headers:{Authorization:"Bearer ".concat(k.getJWTToken())}}}}]),e}()),j=a(19),C=(a(64),function(e){return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},e.message)}),H=function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Carregando...")))},T=a(23),N=a.n(T),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={tasks:[],editId:0,loading:!1,alert:null},n.onDeleteHandler=n.onDeleteHandler.bind(Object(i.a)(n)),n.onStatusChangeHandler=n.onStatusChangeHandler.bind(Object(i.a)(n)),n.onEditHandler=n.onEditHandler.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.listTasks()}},{key:"listTasks",value:function(){var e=this;k.isAuthenticated()&&(this.setState({loading:!0}),O.list((function(t){return e.setState({tasks:t,loading:!1})}),(function(t){return e.setErrorState(t)})))}},{key:"setErrorState",value:function(e){this.setState({alert:"Erro na requisi\xe7\xe3o: ".concat(e.message),loading:!1})}},{key:"onDeleteHandler",value:function(e){var t=this;window.confirm("Deseja mesmo excluir esta tarefa?")&&O.delete(e,(function(){t.listTasks(),j.b.success("Tarefa exclu\xedda!",{position:j.b.POSITION.BOTTOM_LEFT})}),(function(e){return t.setErrorState(e)}))}},{key:"onEditHandler",value:function(e){this.setState({editId:e})}},{key:"onStatusChangeHandler",value:function(e){var t=this;e.done=!e.done,O.save(e,(function(){var a=t.state.tasks.map((function(t){return t.id!==e.id?t:e}));t.setState({tasks:a})}),(function(e){return t.setErrorState(e)}))}},{key:"render",value:function(){return k.isAuthenticated()?this.state.editId>0?r.a.createElement(S.a,{to:"/form/".concat(this.state.editId)}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Lista de Tarefas"),null!=this.state.alert?r.a.createElement(C,{message:this.state.alert}):"",this.state.loading?r.a.createElement(H,null):r.a.createElement("table",{className:"table table-striped"},r.a.createElement(I,null),this.state.tasks.length>0?r.a.createElement(w,{tasks:this.state.tasks,onDelete:this.onDeleteHandler,onEdit:this.onEditHandler,onStatusChange:this.onStatusChangeHandler}):r.a.createElement(x,null)),r.a.createElement(j.a,{autoClose:1500})):r.a.createElement(S.a,{to:"/login"})}}]),a}(n.Component),I=function(){return r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Status"),r.a.createElement("th",{scope:"col"},"Descri\xe7\xe3o"),r.a.createElement("th",{scope:"col"},"Data"),r.a.createElement("th",{scope:"col"},"A\xe7\xf5es")))},w=function(e){return r.a.createElement("tbody",null,e.tasks.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:t.done,onChange:function(){return e.onStatusChange(t)}})),r.a.createElement("td",null,t.done?r.a.createElement("s",null,t.description):t.description),r.a.createElement("td",null,t.done?r.a.createElement("s",null,r.a.createElement(N.a,{format:"DD/MM/YYYY"},t.whenToDo)):r.a.createElement(N.a,{format:"DD/MM/YYYY"},t.whenToDo)),r.a.createElement("td",null,r.a.createElement("input",{type:"button",className:"btn btn-primary",value:"Editar",onClick:function(){return e.onEdit(t.id)}}),"\xa0",r.a.createElement("input",{type:"button",className:"btn btn-danger",value:"Excluir",onClick:function(){return e.onDelete(t.id)}})))})))},x=function(e){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"4",align:"center"},"Sem tarefas cadastradas no momento!")))},A=D,L=a(17),J=a(24),Y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={task:{id:0,description:"",whenToDo:""},redirect:!1,buttonName:"Cadastrar",alert:null,loading:!1,saving:!1},n.onSubmitHandler=n.onSubmitHandler.bind(Object(i.a)(n)),n.onInputChangeHandler=n.onInputChangeHandler.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;t&&(this.setState({loading:!0}),O.load(~~t,(function(t){return e.setState({task:t,loading:!1,buttonName:"Alterar"})}),(function(t){t.response?404===t.response.status?e.setErrorState("Tarefa n\xe3o encontrada!"):e.setErrorState("Erro ao carregar dados: ".concat(t.response)):e.setErrorState("Erro na requisi\xe7\xe3o: ".concat(t.message))})))}},{key:"setErrorState",value:function(e){this.setState({alert:e,loading:!1,saving:!1})}},{key:"onSubmitHandler",value:function(e){var t=this;e.preventDefault(),this.setState({saving:!0,alert:null}),O.save(this.state.task,(function(){return t.setState({redirect:!0,saving:!1})}),(function(e){e.response?t.setErrorState("Erro: ".concat(e.response.data.error)):t.setErrorState("Erro na requisi\xe7\xe3o: ".concat(e.message))}))}},{key:"onInputChangeHandler",value:function(e){var t=e.target.name,a=e.target.value;this.setState((function(e){return{task:Object(J.a)(Object(J.a)({},e.task),{},Object(L.a)({},t,a))}}))}},{key:"render",value:function(){var e=this;return k.isAuthenticated()?this.state.redirect?r.a.createElement(S.a,{to:"/"}):this.state.loading?r.a.createElement(H,null):r.a.createElement("div",null,r.a.createElement("h1",null,"Cadastro de Tarefa"),null!=this.state.alert?r.a.createElement(C,{message:this.state.alert}):"",r.a.createElement("form",{onSubmit:this.onSubmitHandler},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o"),r.a.createElement("input",{type:"text",className:"form-control",name:"description",value:this.state.task.description,placeholder:"Digite a descri\xe7\xe3o",onChange:this.onInputChangeHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"whenToDo"},"Data"),r.a.createElement("input",{type:"date",className:"form-control",name:"whenToDo",value:this.state.task.whenToDo,placeholder:"Informe a data",onChange:this.onInputChangeHandler})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:this.state.saving},this.state.saving?r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):this.state.buttonName),"\xa0\xa0",r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.setState({redirect:!0})}},"Cancelar"))):r.a.createElement(S.a,{to:"/login"})}}]),a}(n.Component),M=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",alert:null,processing:!1,loggedIn:!1},n.handleSubmit=n.handleSubmit.bind(Object(i.a)(n)),n.handleInputChanged=n.handleInputChanged.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({processing:!0}),k.login(this.state.username,this.state.password,(function(e){e?(t.setState({loggedIn:!0,processing:!1}),t.props.onLoginSuccess()):t.setState({alert:"O login n\xe3o pode ser realizado!",processing:!1})}))}},{key:"handleInputChanged",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(L.a)({},t,a))}},{key:"render",value:function(){return k.isAuthenticated()||this.state.loggedIn?r.a.createElement(S.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),null!=this.state.alert?r.a.createElement(C,{message:this.state.alert}):"",r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Usu\xe1rio"),r.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleInputChanged,value:this.state.username,name:"username",placeholder:"Digite o usu\xe1rio"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Senha"),r.a.createElement("input",{type:"password",className:"form-control",onChange:this.handleInputChanged,value:this.state.password,name:"password",placeholder:"Digite a senha"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:this.state.processing},"Login")))}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onRefreshHandler=n.onRefreshHandler.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"onRefreshHandler",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(y,{onLinkClick:this.onRefreshHandler}),r.a.createElement("div",{className:"container",style:{marginTop:20}},r.a.createElement(S.d,null,r.a.createElement(S.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(M,{onLoginSuccess:e.onRefreshHandler})}}),r.a.createElement(S.b,{exact:!0,path:"/form",component:Y}),r.a.createElement(S.b,{exact:!0,path:"/form/:id",component:Y}),r.a.createElement(S.b,{path:"/",component:A})))))}}]),a}(n.Component);o.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c707312f.chunk.js.map