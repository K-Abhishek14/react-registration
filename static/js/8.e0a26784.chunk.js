(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{200:function(e,a,t){"use strict";t.r(a);var n=t(41),r=t(95),o=t.n(r),i=t(24),s=o.a.create({baseURL:i.a,method:"POST",headers:{"Content-Type":"application/json"}}),l={username:"",userpassword:""},c=(o.a.create({baseURL:i.b,method:"POST",headers:{"Content-Type":"application/json"}}),t(34)),u=t(31),m=t(32),d=t(37),p=t(35),g=t(0),h=t.n(g),f=t(203),v=t(183),b=t(179),y=t(197),w=t(106),E=t.n(w),C=t(180),O=t(29),j=t(178),k=t(185),L=t(184),S=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(u.a)(this,t),(e=a.call(this)).changeHandler=function(a){e.setState(Object(c.a)({},a.target.name,a.target.value))},e.doLogin=function(a){a.preventDefault(),e.props.doCognitoLogin(e.state.username,e.state.userpassword)},e.state={username:"",userpassword:""},e}return Object(m.a)(t,[{key:"enterPressed",value:function(e){e.keyCode||e.which}},{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.username,n=a.userpassword;return h.a.createElement(j.a,{component:"main",maxWidth:"xs"},h.a.createElement(b.a,null),h.a.createElement("div",{className:e.paper},h.a.createElement(f.a,{className:e.avatar},h.a.createElement(E.a,null)),h.a.createElement(C.a,{component:"h1",variant:"h5"},"Sign in"),h.a.createElement("form",{className:e.form,noValidate:!0},h.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Username",name:"username",value:t,onChange:this.changeHandler,autoFocus:!0,autoComplete:""}),h.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"userpassword",value:n,onChange:this.changeHandler,label:"Password",type:"password",id:"password",autoComplete:"current-password"}),h.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this.doLogin},"Sign In"),h.a.createElement(L.a,{container:!0},h.a.createElement(L.a,{item:!0,xs:!0},h.a.createElement(k.a,{href:"#",variant:"body2"},"Forgot password?")),h.a.createElement(L.a,{item:!0},h.a.createElement(k.a,{href:"signup",variant:"body2"},"Don't have an account? Sign Up"))))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=e.loginDetails;return void 0!==t.detail&&"Welcome User"===t.detail?e.history.push("/dashboard"):void 0!==t.detail&&"Authentication Fail"===t.detail&&console.log("Authentication Fail"),null}}]),t}(g.Component),D=S=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}),{withTheme:!0})(S),T={doCognitoLogin:function(e,a){return console.log("Login payload username & Password : ",e,a),l.username=e,l.userpassword=a,function(e){return s.post("home/validation",JSON.stringify(l)).then((function(a){console.log("Login Action : ",a.data),e({type:i.c,payload:a})})).catch((function(a){e({type:i.d,payload:a})}))}}};a.default=Object(n.b)((function(e){return{loginDetails:e.login.loginDetails}}),T)(D)}}]);
//# sourceMappingURL=8.e0a26784.chunk.js.map