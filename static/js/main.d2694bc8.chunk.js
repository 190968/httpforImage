(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{212:function(e,t,a){e.exports=a(416)},217:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(217),a(25)),m=(a(218),new(a(207).a)({uri:"http://localhost:5000/"}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}var u=a(14),s=a(62),d=(a(52),a(137)),p=a(76),g=a(425),b=a(15),f=a(39),h=a(30),E=a(49),y=a(50),v=a.n(y),w=a(70),j=a(427);function O(){var e=Object(E.a)(["\n    query ($name: String, $password: String) {\n      member_verify(name: $name, password: $password) {\n        name\n        password\n      }\n    }\n  "]);return O=function(){return e},e}var S=v()(O()),k=function(e){var t=e.set_member,a=e.name,n=e.password,l=e.set_bob,c=Object(w.b)(S,{variables:{name:a,password:n},fetchPolicy:"network-only"}),o=c.loading,m=c.data;return o?r.a.createElement("p",null,"One moument"):("guest"===m.member_verify[0].name&&j.a.error(r.a.createElement("h3",null,"The name or password are invalid")).then(function(){l(!1)}),r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null," ",t(m.member_verify[0].name))))},C=function(e){var t=e.set,a=r.a.useState(""),n=Object(u.a)(a,2),l=n[0],c=n[1],o=r.a.useState(""),m=Object(u.a)(o,2),i=m[0],s=m[1],E=r.a.useState(!1),y=Object(u.a)(E,2),v=y[0],w=y[1];return r.a.createElement("div",{style:{margin:"0 auto",width:"30%",padding:40,backgroundColor:"#ddd",position:"absolute",top:"10%",left:"35%"}},r.a.createElement("h5",null,"Sign in to your account ",r.a.createElement("br",null),r.a.createElement(p.a,{title:"create account"},r.a.createElement("span",{style:{fontSize:15}}," No account ? "),r.a.createElement(h.b,{to:"/account_create",style:{fontSize:15}}," Create account"))),r.a.createElement("hr",null),r.a.createElement("h6",{style:{margin:"10px auto"}},"Name *"),r.a.createElement(g.a,Object(d.a)({required:!0,onChange:function(e){return c(e.target.value)},value:l,size:"large",prefix:r.a.createElement(b.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username",style:{margin:"10px auto",display:"block"}},"required",!0)),r.a.createElement("h6",{style:{margin:"10px auto"}},"Password *"),r.a.createElement(g.a,Object(d.a)({required:!0,onChange:function(e){return s(e.target.value)},value:i,size:"large",prefix:r.a.createElement(b.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",style:{margin:"10px auto",display:"block"}},"required",!0)),r.a.createElement("p",{style:{margin:"10px auto"}},"Forget password ? ",r.a.createElement(h.b,{to:"/"},"Reset password")),r.a.createElement("hr",null),r.a.createElement(f.a,{type:"primary",style:{width:"50%"},disabled:l.length<3||i.length<3,onClick:function(){w(!0)}},"Sign_in"),v&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{name:l,password:i,set_member:t,set_bob:w})))},x=a(422),$=a(423),_=a(426),I=a(23),z=a.n(I);function A(){var e=Object(E.a)(["\n    mutation($name: String,$phone:String,$age:Int,$gender: String,$email: String,$password: String){\n        add_member(name: $name,phone: $phone, age: $age, gender: $gender, email: $email, password: $password){\n            name\n            \n        }\n    }\n"]);return A=function(){return e},e}var P=v()(A()),F=function(e){var t=e.name,a=e.email,n=e.age,l=e.gender,c=e.password,o=e.phone,m=Object(w.a)(P,{variables:{name:t,phone:o,age:n,gender:l,email:a,password:c},onCompleted:function(){z.a.get("http://localhost:3004/created?name=".concat(t)).then(function(e){console.log(e),"one"===e.data?j.a.success("Account ".concat(t," created")):j.a.error("Name is invalid")})}}),i=Object(u.a)(m,2),s=i[0];i[1].data;return r.a.createElement(f.a,{type:"primary",disabled:t.length<3,onClick:function(){s({variables:{name:t,phone:o,age:Number(n),gender:l,email:a,password:c}})},style:{display:"inline-block",marginLeft:"10%",width:"40%"}},"Create_Account")},N=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),m=o[0],i=o[1],s=Object(n.useState)(20),d=Object(u.a)(s,2),E=d[0],y=d[1],v=Object(n.useState)("men"),w=Object(u.a)(v,2),j=w[0],O=w[1],S=Object(n.useState)("".concat(a,"@tut.by")),k=Object(u.a)(S,2),C=k[0],I=k[1],z=Object(n.useState)(a),A=Object(u.a)(z,2),P=A[0],N=A[1];return r.a.createElement(x.a,{style:{textAlign:"center",margin:"0 auto",width:"40%",position:"absolute",top:"10%",left:"30%",border:"5px solid #ccc",padding:20,backgroundColor:"#ddd"},labelCol:{span:7},wrapperCol:{span:12}},r.a.createElement("h3",{style:{textAlign:"left",fontWeight:600}},"Create_Account"),r.a.createElement("hr",null),r.a.createElement(x.a.Item,{label:"Name"},r.a.createElement(g.a,{value:a,onChange:function(e){return l(e.target.value)},prefix:r.a.createElement(b.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"})),r.a.createElement(x.a.Item,{label:"Phone"},r.a.createElement(g.a,{value:m,onChange:function(e){return i(e.target.value)},prefix:r.a.createElement(b.a,{type:"phone",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Phone"})),r.a.createElement(x.a.Item,{label:"Age"},r.a.createElement($.a,{onChange:function(e){y(e)},defaultValue:20,tooltipVisible:!0,value:E})),r.a.createElement(x.a.Item,{label:"Gender"},r.a.createElement(p.a,{title:"man"},r.a.createElement(_.a,{onChange:function(){return O("men")},checked:"men"===j},r.a.createElement(b.a,{type:"man",style:{color:"rgba(0,0,0,.25)",fontSize:25}}))),r.a.createElement(p.a,{title:"women",overlayStyle:{color:"red"}},r.a.createElement(_.a,{onChange:function(){return O("women")},checked:"women"===j},r.a.createElement(b.a,{type:"woman",style:{color:"rgba(0,0,0,.25)",fontSize:25}})))),r.a.createElement(x.a.Item,{label:"Email"},r.a.createElement(g.a,{value:"".concat(a,"@tut.by"),onChange:function(e){return I(e.target.value)},placeholder:"@ Email"})),r.a.createElement(x.a.Item,{label:"Password"},r.a.createElement(g.a,{value:P,onChange:function(e){return N(e.target.value)},prefix:r.a.createElement(b.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Password"})),r.a.createElement("hr",null),r.a.createElement("p",{style:{width:"70%",margin:"10px auto"}},r.a.createElement(f.a,{style:{display:"inline-block",width:"40%"}},r.a.createElement(h.b,{to:"/"},"cancel")),r.a.createElement(F,{name:a,phone:m,password:P,age:E,email:C,gender:j})))},q=a(203);function R(){var e=Object(E.a)(["\n    mutation($name: String,$phone:String,$age:Int,$gender: String,$email: String,$password: String){\n        edit_member(name: $name,phone: $phone, age: $age, gender: $gender, email: $email, password: $password){\n            name\n            phone\n            age\n            gender\n            email\n            password\n        }\n    }\n"]);return R=function(){return e},e}var B=v()(R()),L=Object(q.graphql)(B)(function(e){var t=e.mutate,a=Object(n.useState)(""),l=Object(u.a)(a,2),c=l[0],o=l[1],m=Object(n.useState)(""),i=Object(u.a)(m,2),s=i[0],d=i[1],p=Object(n.useState)(),b=Object(u.a)(p,2),E=b[0],y=b[1],v=Object(n.useState)("male"),w=Object(u.a)(v,2),j=w[0],O=w[1],S=Object(n.useState)(""),k=Object(u.a)(S,2),C=k[0],$=k[1],I=Object(n.useState)(""),z=Object(u.a)(I,2),A=z[0],P=z[1];return r.a.createElement(x.a,{style:{textAlign:"center",font:"600 18px/20px 'Arial',sans-serif",margin:"100px auto",width:"70%",border:"1px solid #ddd",padding:20,backgroundColor:"#ccc"},labelCol:{span:7},wrapperCol:{span:12}},r.a.createElement("p",null,"Edit account ",c," "),r.a.createElement(x.a.Item,{label:"Name"},r.a.createElement(g.a,{value:c,onChange:function(e){return o(e.target.value)}})),r.a.createElement(x.a.Item,{label:"Phone"},r.a.createElement(g.a,{value:s,onChange:function(e){return d(e.target.value)}})),r.a.createElement(x.a.Item,{label:"Age"},r.a.createElement(g.a,{value:E,onChange:function(e){return y(e.target.value)}})),r.a.createElement(x.a.Item,{label:"Gender"},r.a.createElement(_.a,{onChange:function(){return O("men")},checked:"men"===j},"Male"),r.a.createElement(_.a,{onChange:function(){return O("women")},checked:"women"===j},"Female")),r.a.createElement(x.a.Item,{label:"Email"},r.a.createElement(g.a,{value:C,onChange:function(e){return $(e.target.value)}})),r.a.createElement(x.a.Item,{label:"Password"},r.a.createElement(g.a,{value:A,onChange:function(e){return P(e.target.value)}})),r.a.createElement(f.a,{size:"large",style:{display:"inline-block"}},r.a.createElement(h.b,{to:"/"},"cancel")),r.a.createElement(f.a,{type:"primary",disabled:c.length<2,onClick:function(){t({variables:{name:c,phone:s,age:Number(E),gender:j,email:C,password:A}})},style:{display:"inline-block",marginLeft:10},size:"large"},"Edit_Account"))}),W=function(){return r.a.createElement("div",{style:{background:'#ccc url("http://localhost:3000/main_image.jpg") no-repeat center/100% ',height:"670px"}})},D=a(78),U=a(48),T=a(418),G=a(421),H=a(419);function J(){var e=Object(E.a)(["\n    mutation ($file: Upload!,$name: String, $member: String, $file_name: String) {\n      uPload(file: $file,name: $name, member: $member, file_name: $file_name) {\n        filename\n       \n      }\n    }\n"]);return J=function(){return e},e}var M=v()(J()),V=function(e){var t=e.name,a=e.member,n=r.a.useState(""),l=Object(u.a)(n,2),c=l[0],o=l[1],m=r.a.useState(""),i=Object(u.a)(m,2),s=i[0],d=i[1];var p=Object(w.a)(M,{variables:{file:c,name:t,member:a,file_name:s},refetchQueries:function(){return[{variables:{name:t,member:a}}]},onCompleted:function(){return o(""),document.getElementById("img").style.backgroundImage=null,d("")}}),g=Object(u.a)(p,4),h=g[0],E=(g[1].data,g[2]),y=g[3];return E?r.a.createElement("p",null,"Loading"):y?r.a.createElement("p",null,"error.message"):r.a.createElement("div",{id:"img",style:{height:200,backgroundSize:"100%",backgroundPosition:"center",backgroundColor:"rgba(255,255,0, 0.5)",backgroundRepeat:"no-repeat",width:200,margin:10,border:"2px solid #ccc"}},!s&&r.a.createElement("label",{htmlFor:"upload_file"},r.a.createElement("input",{type:"file",id:"upload_file",style:{display:"none"},accept:".jpg,.jpeg",onChange:function(e){return function(e){var t=document.getElementById("img"),a=document.getElementById("upload_file").files[0],n=new FileReader;n.onload=function(e){console.log("Name:".concat(a.name,",Type file:").concat(a.type,",").concat(a.size)),o(n.result),d("".concat(a.name)),t.style.backgroundImage="url(".concat(n.result,")")},n.readAsDataURL(a)}()}}),r.a.createElement(b.a,{type:"upload",style:{fontSize:40,margin:"80px auto 10px",cursor:"pointer"}})),s&&r.a.createElement(f.a,{type:"primary",style:{margin:"80px auto 10px"},onClick:function(){return h()}},"upload"))},Q=function(e){var t=e.name,a=e.member,n=e.file;return r.a.createElement(f.a,{type:"danger",size:"small",icon:"delete",onClick:function(){z.a.get("http://localhost:3004/delete",{params:{member:a,name:t,file:n}})}})},K=function(e){var t=e.name,a=e.member,l=window.innerHeight-10,c=r.a.useState(!0),o=Object(u.a)(c,2),m=o[0],i=o[1],s=r.a.useState(100),d=Object(u.a)(s,2),p=d[0],g=d[1],f=r.a.useState([""]),E=Object(u.a)(f,2),y=E[0],v=E[1];return Object(n.useEffect)(function(){z.a.get("http://localhost:3004/list",{params:{name:t,member:a}}).then(function(e){v(e.data)})},[]),r.a.createElement("div",null,m?r.a.createElement(D.a,{justify:"center",type:"flex"},r.a.createElement(U.a,{lg:{span:4},style:{textAlign:"center",margin:10,border:"2px solid #ccc",height:200,width:200}},r.a.createElement(h.b,{to:"/main",name:a},r.a.createElement(b.a,{type:"arrow-left",style:{font:"400 40px/200px 'Arial', sans-serif",cursor:"pointer"}}))),y.map(function(e,n){return r.a.createElement(U.a,{lg:{span:4},key:n},r.a.createElement(T.a,{placement:"topRight",content:r.a.createElement(Q,{name:t,member:a,file:e})},r.a.createElement(G.a,{hoverable:"true",onClick:function(){return i(!1)},style:{background:"url(http://localhost:3004/members/".concat(a,"/").concat(t,"/").concat(e,") no-repeat  center/auto 100%"),height:200,margin:10,cursor:"pointer"}})))}),r.a.createElement(U.a,{lg:{span:4},style:{textAlign:"center"}},r.a.createElement(V,{name:t,member:a}))):r.a.createElement(H.a,{autoplay:!0,dotPosition:"bottom"},y.map(function(e,n){return r.a.createElement("div",{style:{margin:0},key:n},r.a.createElement("div",{style:{background:"url(http://localhost:3004/members/".concat(a,"/").concat(t,"/").concat(e,") no-repeat  center/auto ").concat(p,"%"),height:l,margin:0},onClick:function(){return i(!0)},onWheel:function(){return g(p<160?p+10:100)},title:"click:back,leave:slide"}))})))},X=a(424),Y=function(e){var t=e.modal,a=e.set,n=e.member,l=e.mode,c=r.a.useState(""),o=Object(u.a)(c,2),m=o[0],i=o[1];return r.a.createElement(X.a,{visible:t,title:"".concat(l,"  FOLDER"),onCancel:function(){return a(!1)},onOk:function(e){z.a.get("http://localhost:3004/createdir",{params:{member:n,name:m}}),a(!1)}},"Name of catalog:",r.a.createElement(g.a,{placeholder:"input folder name",allowClear:!0,value:m,type:"text",style:{width:200},onChange:function(e){i(e.target.value)}}))},Z=a(420),ee=function(e){var t=e.name,a=e.member,n=e.list,l=e.reb,c=r.a.useState(""),o=Object(u.a)(c,2),m=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{type:"primary",style:{width:"100%",margin:"10px 0"},disabled:n.indexOf(m)>0||m.length<1,onClick:function(){z.a.get("http://localhost:3004/rename_folder",{params:{member:a,name:t,new_name:m}}).then(function(e){l(e.data)})}},"rename"),r.a.createElement(g.a,{type:"text",placeholder:"New name",value:m,onChange:function(e){i(e.target.value)}}))},te=function(e){var t=e.name,a=e.member,n=e.list,l=e.rebootin;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{name:t,member:a,list:n,reb:l}),r.a.createElement(Z.a,{placement:"rightTop",title:"Delete folder and all files",onClick:function(){z.a.get("http://localhost:3004/deletedir",{params:{member:a,name:t}})}},r.a.createElement(f.a,{type:"primary",style:{margin:"10px 0",width:"100%",display:"block"}},"Delete")))};a(415);function ae(){var e=Object(E.a)(["\n    query ($name: String) {\n      resive_list_dir(name: $name) {\n        list\n      }\n    }\n  "]);return ae=function(){return e},e}v()(ae());var ne=function(e){var t=e.name,a=e.set,l=r.a.useState(!1),c=Object(u.a)(l,2),o=c[0],m=c[1],i=r.a.useState("add"),s=Object(u.a)(i,2),d=s[0],g=s[1],f=r.a.useState(""),E=Object(u.a)(f,2),y=E[0],v=E[1],w=r.a.useState(""),j=Object(u.a)(w,2),O=j[0],S=j[1],k=window.innerHeight,C=r.a.useState([""]),x=Object(u.a)(C,2),$=x[0],_=x[1];Object(n.useEffect)(function(){z.a.get("http://localhost:3004/member?name=".concat(t)).then(function(e){_(e.data)})},[y]),Object(n.useEffect)(function(){z.a.get("http://localhost:3004/member?name=".concat(t)).then(function(e){_(e.data)})},[]),Object(n.useEffect)(function(){z.a.get("http://localhost:3004/member?name=".concat(t)).then(function(e){_(e.data)})},[o]);return r.a.createElement("div",{style:{background:"#fff",height:k,padding:"100px"}},r.a.createElement(D.a,{type:"flex",justify:"center",align:"middle"},r.a.createElement(U.a,{lg:{span:6,offset:1}},r.a.createElement(p.a,{title:"close account"},r.a.createElement(b.a,{type:"folder-open",style:{fontSize:100,color:"#ccc"},onClick:function(){return a("guest")}}))),$.map(function(e){return r.a.createElement(U.a,{lg:{span:6,offset:1},key:e,onMouseEnter:function(){return a=e,void z.a.get("http://localhost:3004/stat",{params:{member:t,folder:a}}).then(function(e){S(e.data)});var a}},r.a.createElement(T.a,{title:"Folder ".concat(e,": ").concat(O," files"),content:r.a.createElement(te,{name:e,member:t,list:$,rebootin:v}),placement:"left"},r.a.createElement(h.b,{to:"/inside/".concat(t,"/").concat(e),style:{fontSize:30,fontWeight:400}},r.a.createElement(b.a,{type:"folder",style:{fontSize:100,color:"#ccc"}}),e)))}),r.a.createElement(U.a,{lg:{span:6,offset:1}},r.a.createElement(p.a,{title:"add folder"},r.a.createElement(b.a,{type:"folder-add",style:{fontSize:100,color:"#ccc"},onClick:function(){m(!0),g("add")}})))),r.a.createElement(Y,{modal:o,set:m,member:t,mode:d}))};c.a.render(r.a.createElement(o.a,{client:m},r.a.createElement(function(){var e=r.a.useState(""),t=Object(u.a)(e,2),a=t[0],n=t[1];return r.a.createElement(h.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:function(){return"guest"===a||""===a?r.a.createElement(C,{set:n,in_member:a}):r.a.createElement(s.a,{to:"/main",name:a,set:n})}}),r.a.createElement(s.b,{path:"/ff",component:W}),r.a.createElement(s.b,{path:"/inside/:member/:name",component:function(e){return r.a.createElement(K,{member:e.match.params.member,name:e.match.params.name})}}),r.a.createElement(s.b,{path:"/main",component:function(){return"guest"===a?r.a.createElement(s.a,{to:"/",set:n,in_member:a}):r.a.createElement(ne,{name:a,set:n})}}),r.a.createElement(s.b,{path:"/account_create",component:N}),r.a.createElement(s.b,{path:"/account_edit",component:L})))},null)),document.getElementById("root")),i(),i()}},[[212,1,2]]]);
//# sourceMappingURL=main.d2694bc8.chunk.js.map