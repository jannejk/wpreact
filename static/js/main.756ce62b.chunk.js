(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{118:function(e,t,a){e.exports=a(169)},169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),o=a(63),c=a(47),s=a(23),m=a(12),u=a(18),d=a(19),h=a(21),g=a(20),p={url:"https://jannekeranen.com/WPReact/wp-json/wp/v2/",tokenUrl:"https://jannekeranen.com/WPReact/wp-json/jwt-auth/v1/token",users:"https://jannekeranen.com/WPReact/wp-json/wp/v2/users/",mediaUrl:"https://jannekeranen.com/WPReact/wp-json/wp/v2/media"},f=(a(85),a(27)),b=a.n(f),E=a(199),v=a(222),y=a(57),S=a(202),C={width:140,height:140,border:"2px solid white"},w=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={imgUrl:"",author:"",acf:[],urlEnd:"",isLoaded:!1},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.beer,a=(t.urlEnd,t.author),n=b.a.get(p.users+"".concat(a));Promise.all([n]).then((function(t){e.setState({author:t[0].data.name,isLoaded:!0})}))}},{key:"render",value:function(){var e=this.props.beer,t=e.id,a=e.title,i=e.excerpt,l=e.acf,o=(e.urlEnd,this.state);o.author,o.imgUrl;return o.isLoaded?r.a.createElement(n.Fragment,null,r.a.createElement(E.a,{className:"itemscontainer formCard",container:!0,direction:"column"},r.a.createElement(s.b,{to:"/beer/".concat(t," ,").concat(this.state.author)},r.a.createElement(E.a,{item:!0,className:"child"},r.a.createElement(v.a,{style:Object.assign({},C),src:l.productimage.sizes.medium,alt:a.rendered})),r.a.createElement(E.a,{item:!0,className:"childp"},r.a.createElement(y.a,{style:{marginTop:"15px"},variant:"h1"},a.rendered))),r.a.createElement(E.a,{item:!0,className:"childp"},r.a.createElement(y.a,{style:{maxHeight:"110px",overflow:"hidden",marginBottom:"15px"},component:"p",dangerouslySetInnerHTML:{__html:i.rendered}})),r.a.createElement(E.a,{item:!0,className:"child"},r.a.createElement(E.a,{className:"boxcontent",container:!0,direction:"row"},r.a.createElement(E.a,{item:!0}),r.a.createElement(E.a,{item:!0},r.a.createElement(y.a,{fontWeight:"fontWeightBold",component:"p"},r.a.createElement("b",null,"\ud83d\udcb6 Price: ",l.price,"\u20ac"))),r.a.createElement(E.a,{className:"boxcontent",container:!0,direction:"row"},r.a.createElement(E.a,{item:!0}),r.a.createElement(E.a,{item:!0},r.a.createElement(y.a,{fontWeight:"fontWeightBold",component:"p"},r.a.createElement("b",null,"\ud83c\udf7a Rating: ",l.rating)))))))):r.a.createElement(E.a,{container:!0,alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(E.a,{item:!0},r.a.createElement(S.a,null)))}}]),a}(n.Component),j=a(207),x=a(208),k=a(221),O=a(209),I=a(220),T=a(226),P=a(210),L=a(211),N=a(223),D=a(101),B=a.n(D),U=a(206),M=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={term:""},n}return Object(d.a)(a,[{key:"onInputChange",value:function(e){this.setState({term:e}),this.props.onTermChange(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(N.a,{className:"navInput",InputProps:{endAdornment:r.a.createElement(U.a,null,"  ",r.a.createElement(B.a,null),"  ")},placeholder:"SEARCH",onChange:function(t){return e.onInputChange(t.target.value)}})}}]),a}(n.Component),W=a(102),A=a.n(W),F=function(e){Object(h.a)(i,e);var t=Object(g.a)(i);function i(){var e;return Object(u.a)(this,i),(e=t.call(this)).handleTabChange=function(t,a){e.setState((function(e){return{activeTab:a}}),(function(){this.props.actionurlEnd(this.state.activeTab,this.state.activeTab),this.refreshUrl()}))},e.selectChange=function(t){e.setState({selectedValue:t.target.value});var n,r=a(145),i=t.target.value;"title"===i?n=r(e.state.beers,"slug"):"price"===i?n=r(e.state.beers,"acf.price"):"rating"===i?n=r(e.state.beers,"acf.rating",{reverse:!0}):"id"===i&&(n=r(e.state.beers,"id",{reverse:!0})),e.setState({beers:n})},e.state={beers:{title:"",acf:{price:0,rating:0}},isLoaded:!1,tabOptions:[{name:"Beers",value:"beers"},{name:"Non-Alcoholic",value:"non-alcoholics"}],sortOptions:[{name:"Name",value:"title"},{name:"Price",value:"price"},{name:"Rating",value:"rating"},{name:"Latest",value:"id"}],url:p.url,urlEnd:"beers",searchString:"",selectedValue:"",activeTab:""},e}return Object(d.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.setState({url:this.state.url+this.props.activeTab},(function(){e.getProducts()}))}},{key:"refreshUrl",value:function(){var e=this;this.setState({url:p.url+this.state.activeTab},(function(){e.getProducts()}))}},{key:"getProducts",value:function(){var e=this;b.a.get(this.state.url+"/?per_page=100").then((function(t){return e.setState({beers:t.data,isLoaded:!0})})).catch((function(e){return console.log(e)}))}},{key:"handleTermChange",value:function(e){var t=this.state.beers.filter((function(t){return t.title.rendered.toLocaleLowerCase().includes(e.toLocaleLowerCase())}));""===e&&this.getProducts(),this.setState({beers:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.beers,i=t.isLoaded,l=t.sortOptions,o=t.tabOptions,c=this.props.activeTab;return i?r.a.createElement(n.Fragment,null,r.a.createElement(j.a,{position:"sticky"},r.a.createElement(x.a,null,r.a.createElement(E.a,{className:"menurow",container:!0},r.a.createElement(E.a,{item:!0,xs:12,md:6,sm:12},r.a.createElement(k.a,{value:c,onChange:this.handleTabChange,centered:!0},o.map((function(e){return r.a.createElement(O.a,{key:e.value,label:e.name,value:e.value})})))),r.a.createElement(E.a,{className:"menuitem",item:!0,xs:6,sm:6,md:3},r.a.createElement(I.a,{displayEmpty:!0,id:"sortBy",onChange:this.selectChange,value:this.state.selectedValue},r.a.createElement(T.a,{value:"",disabled:!0},r.a.createElement("div",{className:"myem"},"SORT BY")),l.map((function(e){return r.a.createElement(T.a,{value:e.value,key:e.value},e.name)})))),r.a.createElement(E.a,{className:"menuitem",item:!0,xs:6,sm:6,md:3},r.a.createElement(M,{className:"navInput",onTermChange:function(t){return e.handleTermChange(t)}})),r.a.createElement(E.a,{style:{justifyContent:"flex-end"},container:!0,direction:"row",alignItems:"flex-end"},r.a.createElement(E.a,{className:"menuitem",item:!0,xs:6,sm:6,md:3},r.a.createElement(s.b,{to:"/create-post"},r.a.createElement(P.a,{style:{marginRight:"-65px"},variant:"outlined",color:"primary",startIcon:r.a.createElement(A.a,{style:{color:"primary"}})},"Add New"))))))),r.a.createElement(L.a,{style:{minHeight:"100vh",backgroundColor:"#212121",backgroundImage:'url("https://cdn.pixabay.com/photo/2020/02/29/15/10/bottle-caps-4890369_1280.jpg")',backgroundSize:"cover",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundPositionX:"right"},maxWidth:"xl"},r.a.createElement(E.a,{className:"containerGrid",container:!0,justify:"center",align:"center"},a.map((function(e){return r.a.createElement(E.a,{className:"myCard",item:!0,xs:12,sm:6,md:4,key:e.id},r.a.createElement(w,{key:e.id,beer:e}))}))))):r.a.createElement(E.a,{container:!0,alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(E.a,{item:!0},r.a.createElement(S.a,null)))}}]),i}(n.Component),R=Object(m.g)(Object(c.b)((function(e){return{urlEnd:e.urlEnd,activeTab:e.activeTab}}),(function(e){return{actionurlEnd:function(t,a){return e({type:"UPDATE_URL_STATE",urlEnd:t,activeTab:a})}}}))(F)),_=a(212),H=a(213),z=a(214),q=a(215),J=a(216),V=a(217),X=a(103),Q=a.n(X),$=a(72),G=a.n($),Y=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={beer:{},url:p.url,urlEnd:"",isLoaded:!1,isDeleted:!1},e.redirectMe=function(t){e.props.history.push("/")},e}return Object(d.a)(a,[{key:"deletePost",value:function(){var e=this,t=localStorage.getItem("token"),a={method:"delete",url:"".concat(this.state.url).concat(this.props.urlEnd).concat(this.props.match.params.id),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}};b()(a).then((function(t){console.log(JSON.stringify(t.data)),e.setState({isDeleted:!0}),setTimeout((function(){return e.redirectMe()}),1e3)})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;b.a.get("".concat(this.state.url).concat(this.props.urlEnd).concat(this.props.match.params.id)).then((function(t){return e.setState({beer:t.data,isLoaded:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.beer;return t.isLoaded?r.a.createElement(n.Fragment,null,r.a.createElement(L.a,{style:{backgroundImage:'url("https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80")',backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPositionX:"right"},maxWidth:"xl"},r.a.createElement(E.a,{style:{minHeight:"100vh"},container:!0,direction:"column",justify:"space-evenly",alignItems:"center"},r.a.createElement(L.a,{maxWidth:"sm"},r.a.createElement(_.a,{className:"formCard"},r.a.createElement(H.a,{action:r.a.createElement(s.b,{to:"/"},r.a.createElement(z.a,{"aria-label":"close"},r.a.createElement(G.a,null))),title:r.a.createElement(y.a,{style:{textAlign:"center"},variant:"h1"},a.title.rendered),subheader:"By: "+this.props.match.params.author}),r.a.createElement(q.a,{style:{height:50,paddingTop:"56.25%"},image:a.acf.productimage.sizes.large,title:a.title.rendered}),r.a.createElement(J.a,null,r.a.createElement(y.a,{style:{textAlign:"left"},variant:"h6"},r.a.createElement("b",null,"\ud83d\udcb6 Price: ",a.acf.price,"\u20ac")),r.a.createElement(y.a,{style:{textAlign:"left"},variant:"h6"},r.a.createElement("b",null,"\ud83c\udf7a Rating: ",a.acf.rating)),r.a.createElement(y.a,{variant:"body2",color:"textSecondary",component:"p"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:a.content.rendered}}))),r.a.createElement(V.a,{disableSpacing:!0,style:{justifyContent:"flex-end"}},r.a.createElement(P.a,{style:{color:"#9e1818",border:"2px solid #9e1818"},onClick:function(){e.deletePost()},variant:"outlined",color:"secondary",startIcon:r.a.createElement(Q.a,{style:{color:"#9e1818"}})},"Delete"),this.state.isDeleted&&r.a.createElement(E.a,{container:!0,alignItems:"center",justify:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(y.a,null,"Deleting Post.."),r.a.createElement(S.a,null))))))))):r.a.createElement(E.a,{container:!0,alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(E.a,{item:!0},r.a.createElement(S.a,null)))}}]),a}(n.Component),K=Object(c.b)((function(e,t){return{urlEnd:e.urlEnd,activeTab:e.activeTab}}))(Y),Z=a(36),ee=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).createMarkup=function(e){return{__html:e}},n.onFormSubmit=function(e){e.preventDefault();var t={username:n.state.username,password:n.state.password};n.setState({loading:!0},(function(){b.a.post(n.state.authUrl,t).then((function(e){if(void 0!==e.data.token){var t=e.data,a=t.token,r=t.user_nicename,i=t.user_email;localStorage.setItem("token",a),localStorage.setItem("userName",r),n.setState({loading:!1,token:a,userNiceName:r,userEmail:i,loggedIn:!0})}else n.setState({error:e.data.message,loading:!1})})).catch((function(e){n.setState({error:e.response.data.message,loading:!1})}))}))},n.handleOnChange=function(e){n.setState(Object(Z.a)({},e.target.name,e.target.value))},n.redirectMe=function(e){return console.log("logged in"),r.a.createElement(m.a,{to:{pathname:"/"},noThrow:!0})},n.state={username:"",password:"",userNiceName:"",userEmail:"",loggedIn:!1,loading:!1,error:"",authUrl:p.tokenUrl},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.username,e.password,e.userNiceName),a=e.loggedIn,n=e.error,i=e.loading;t||localStorage.getItem("userName");return a||localStorage.getItem("token")?r.a.createElement("div",null,this.redirectMe()):r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{style:{backgroundImage:'url("https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80")',backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPositionX:"right"},maxWidth:"xl"},r.a.createElement(E.a,{style:{minHeight:"100vh"},container:!0,direction:"column",justify:"space-evenly",alignItems:"center"},r.a.createElement(L.a,{maxWidth:"xs"},r.a.createElement(_.a,{className:"formCard",style:{margin:"auto",padding:"20px"}},r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement(H.a,{style:{textAlign:"center"},title:"Login"}),r.a.createElement(J.a,null,r.a.createElement(E.a,{style:{height:"300px"},container:!0,justify:"center",direction:"column",alignItems:"center",spacing:3},r.a.createElement(E.a,{item:!0},r.a.createElement(N.a,{required:!0,id:"username-input",label:"Username",type:"text",name:"username",onChange:this.handleOnChange})),r.a.createElement(E.a,{item:!0},r.a.createElement(N.a,{required:!0,id:"password-input",label:"Password",type:"text",name:"password",onChange:this.handleOnChange})),r.a.createElement(E.a,{item:!0,align:"center"},i&&r.a.createElement(E.a,{container:!0,alignItems:"center",justify:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(S.a,null))),n&&r.a.createElement(y.a,null,r.a.createElement("span",{className:"errorMsg",dangerouslySetInnerHTML:this.createMarkup(n)})," ")))),r.a.createElement(V.a,{style:{justifyContent:"center"}},r.a.createElement(P.a,{type:"submit",variant:"outlined",color:"primary"},"Login"))))))))}}]),a}(r.a.Component),te=a(37),ae=a(218),ne=a(205),re=a(225),ie=a(227),le=a(104),oe=a.n(le),ce=a(105),se=a.n(ce),me=a(106),ue=a.n(me),de=Object(ae.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"}}}));function he(e){var t=function(){return r.a.createElement("div",null,e.imgPreview)},a=de();return 1!==e.currentStep?null:r.a.createElement(n.Fragment,null,r.a.createElement(E.a,{container:!0,wrap:"wrap",justify:"center",direction:"column",alignItems:"flex-start"},r.a.createElement(E.a,{item:!0,style:{marginBottom:"30px",width:"100%"}},r.a.createElement(N.a,{value:e.title,style:{width:"100%"},required:!0,id:"title-input",label:"Title",type:"text",name:"title",onChange:function(t){e.updateData("title",t.target.value),e.handleChange("title",t.target.value)}})),r.a.createElement(E.a,{style:{width:"100%",marginBottom:"40px"},item:!0},r.a.createElement(ne.a,{required:!0,style:{width:"100%"}},r.a.createElement(re.a,{htmlFor:"category-required"},"Category"),r.a.createElement(I.a,{value:e.categoryState,onChange:e.handleChangeCategory},e.renderSelectOptions()))),r.a.createElement(E.a,{className:"imgUploadContainer",wrap:"wrap-reverse",style:{height:"180px",textAlign:"center"},container:!0,justify:"center",direction:"row",alignItems:"center",spacing:1},r.a.createElement(E.a,{item:!0,md:6,xs:12},r.a.createElement("input",{accept:"image/*",className:a.input,id:"outlined-button-file",multiple:!0,type:"file",onChange:e.handleImageChange}),r.a.createElement("label",{htmlFor:"outlined-button-file"},r.a.createElement(P.a,{variant:"outlined",color:"primary",component:"span",startIcon:r.a.createElement(oe.a,null)},"Upload Image"))),r.a.createElement(E.a,{md:6,xs:12,className:"imgPreviewContainer",item:!0},r.a.createElement(t,null)))))}function ge(e){return 2!==e.currentStep?null:r.a.createElement(n.Fragment,null,r.a.createElement(E.a,{container:!0,wrap:"wrap",justify:"center",direction:"column",alignItems:"flex-start",spacing:3},r.a.createElement(E.a,{item:!0,style:{marginBottom:"30px",width:"100%",border:"1px solid rgba(255,255,255,0.2)"}},r.a.createElement(N.a,{value:e.content,fullWidth:!0,type:"text",required:!0,style:{width:"100%"},id:"review-input",label:"Review",placeholder:"",multiline:!0,rows:7,rowsMax:7,onChange:function(t){e.updateData("content",t.target.value),e.handleChange("content",t.target.value)}})),r.a.createElement(E.a,{container:!0,direction:"row",style:{marginTop:"15px",marginBottom:"40px"}},r.a.createElement(E.a,{item:!0,style:{width:"30%"}},r.a.createElement(y.a,null,r.a.createElement(se.a,null),"\xa0 ",r.a.createElement("span",{style:{verticalAlign:"top"}},"Price:"))),r.a.createElement(E.a,{item:!0,style:{width:"70%"}},r.a.createElement(ie.a,{max:15,value:e.price,defaultValue:0,"aria-labelledby":"discrete-slider-always",step:.1,valueLabelDisplay:"on",onChange:function(t,a){e.updateData("price",a),e.handleChange("price",a)}}))),r.a.createElement(E.a,{container:!0,direction:"row",style:{marginBottom:"20px"}},r.a.createElement(E.a,{item:!0,style:{width:"30%"}},r.a.createElement(y.a,null,r.a.createElement(ue.a,null),"\xa0 ",r.a.createElement("span",{style:{verticalAlign:"top"}},"Rating:"))),r.a.createElement(E.a,{item:!0,style:{width:"70%"}},r.a.createElement(ie.a,{max:10,value:e.rating,defaultValue:0,"aria-labelledby":"discrete-slider-always",step:.5,valueLabelDisplay:"on",onChange:function(t,a){e.updateData("rating",a),e.handleChange("rating",a)}}))),e.imageLoading&&r.a.createElement(E.a,{container:!0,alignItems:"center",justify:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(y.a,null,"Uploading Media.."),r.a.createElement(S.a,null))),e.loading&&r.a.createElement(E.a,{container:!0,alignItems:"center",justify:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(y.a,null,"Creating Post.."),r.a.createElement(S.a,null)))))}var pe=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState(Object(Z.a)({},e,t))},n._next=function(){var e=n.state.currentStep;e=e>=2?3:e+1,n.setState({currentStep:e})},n._prev=function(){var e=n.state.currentStep;e=e<=1?1:e-1,n.setState({currentStep:e})},n.state={currentStep:1,title:"",content:"",boo:!1,price:0,rating:0,fields:{price:0,rating:0,productimage:""},file:"",fileUploaded:!1,loading:!1,imageLoading:!1,urlPreview:"",categoryState:"",selectOptions:[{id:1,type:"Beers"},{id:2,type:"Non-Alcoholics"}]},n.handleChange=n.handleChange.bind(Object(te.a)(n)),n.handleChangeCategory=n.handleChangeCategory.bind(Object(te.a)(n)),n.renderSelectOptions=n.renderSelectOptions.bind(Object(te.a)(n)),n}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(e){var t=e.fileUploaded,a=e.loading,n=e.imageLoading;this.setState({fileUploaded:t}),this.setState({loading:a}),this.setState({imageLoading:n})}},{key:"renderSelectOptions",value:function(){return this.state.selectOptions.map((function(e,t){return r.a.createElement(T.a,{key:t,value:e.type},e.type)}))}},{key:"handleChangeCategory",value:function(e){this.setState({categoryState:e.target.value}),this.props.updateData("urlEnd",e.target.value)}},{key:"previousButton",value:function(){var e=this.state,t=e.title,a=e.content,i=e.categoryState,l=e.fileUploaded,o=t.length>0&&!0===l&&a.length>0&&i.length>0;return 1!==this.state.currentStep?r.a.createElement(n.Fragment,null,r.a.createElement(P.a,{variant:"outlined",color:"primary",onClick:this._prev},"Back"),r.a.createElement(P.a,{disabled:!o,type:"file",name:"productimage",variant:"outlined",color:"primary",onClick:this.props.handleImageSubmit},"Publish")):null}},{key:"nextButton",value:function(){return this.state.currentStep<2?r.a.createElement(P.a,{variant:"outlined",color:"primary",onClick:this._next},"Next"):null}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(L.a,{style:{backgroundImage:'url("https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80")',backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPositionX:"right"},maxWidth:"xl"},r.a.createElement(E.a,{style:{minHeight:"100vh"},container:!0,direction:"column",justify:"space-evenly",alignItems:"center"},r.a.createElement(L.a,{maxWidth:"xs"},r.a.createElement(_.a,{className:"formCard",style:{margin:"auto",padding:"20px"}},r.a.createElement("form",{onSubmit:this.props.handleFormSubmit},r.a.createElement(H.a,{style:{textAlign:"center"},title:"Add New Beer",subheader:"Step "+this.state.currentStep+"/2",action:r.a.createElement(s.b,{to:"/"},r.a.createElement(z.a,{"aria-label":"close"},r.a.createElement(G.a,null)))}),r.a.createElement(J.a,null,r.a.createElement(he,{currentStep:this.state.currentStep,handleChange:this.handleChange,updateData:this.props.updateData,title:this.state.title,fileUploaded:this.props.fileUploaded,price:this.state.price,rating:this.state.rating,selectOptions:this.state.selectOptions,categoryState:this.state.categoryState,handleChangeCategory:this.handleChangeCategory,renderSelectOptions:this.renderSelectOptions,file:this.state.file,handleImageChange:this.props.handleImageChange,handleImageSubmit:this.props.handleImageSubmit,showImgPreview:this.props.showImgPreview,imgPreview:this.props.imgPreview}),r.a.createElement(ge,{currentStep:this.state.currentStep,updateData:this.props.updateData,handleChange:this.handleChange,handleImageSubmit:this.props.handleImageSubmit,content:this.state.content,price:this.state.price,rating:this.state.rating,loading:this.state.loading,imageLoading:this.state.imageLoading})),r.a.createElement(V.a,{style:{justifyContent:"center"}},this.previousButton(),this.nextButton())))))))}}]),a}(n.Component),fe={width:110,height:110},be=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).updateData=function(e,t){n.setState(Object(Z.a)({},e,t))},n.redirectMe=function(e){n.props.history.push("/")},n.createMarkup=function(e){return{__html:e}},n.handleFormSubmit=function(e){n.setState({loading:!0});var t={title:n.state.title,content:n.state.content,fields:{price:n.state.price,rating:n.state.rating,productimage:n.state.imgID},status:"publish"},a=n.state.url+n.state.urlEnd,r=localStorage.getItem("token");b.a.post("".concat(a),t,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}}).then((function(e){console.warn("res",e),n.setState({loading:!1,postCreated:!!e.data.id,message:e.data.id?"New post created":""},(function(){return n.redirectMe()}))})).catch((function(e){console.warn("errr",e.response.data),n.setState({loading:!1,message:e.response.data.message})}))},n.handleInputChange=function(e){n.setState(Object(Z.a)({},e.target.name,e.target.value))},n.state={title:"",content:"",postCreated:!1,loading:!1,imageLoading:!1,fileUploaded:!1,message:"",productimg:"",myimage:"",productimage:"",imagePreviewUrl:"",file:"",fields:{price:0,rating:0,productimage:""},imgID:"",price:"",rating:"",url:p.url,mediaUrl:p.mediaUrl,urlEnd:"beers"},n.handleImageChange=n.handleImageChange.bind(Object(te.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(te.a)(n)),n}return Object(d.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({imageLoading:!0});var a=localStorage.getItem("token"),n={method:"post",url:this.state.mediaUrl,headers:{"Content-Type":"image/png",Authorization:"Bearer ".concat(a),"Content-Disposition":"attachment;filename=image_1.png"},data:this.state.file};b()(n).then((function(e){t.setState({imgID:e.data.id,imageLoading:!1}),t.handleFormSubmit()})).catch((function(e){console.warn("errr",e.response.data)}))}},{key:"handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.setState({file:n,imagePreviewUrl:a.result,fileUploaded:!0})},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this.state.imagePreviewUrl,t=null;e&&(t=r.a.createElement(v.a,{style:Object.assign({},fe),src:e,alt:""}));var a=this.state;a.loading,a.imageLoading,a.message,a.postCreated,a.acf;return console.warn("state",this.state),r.a.createElement(n.Fragment,null,r.a.createElement(pe,{handleInputChange:this.handleInputChange,handleImageChange:this.handleImageChange,handleImageSubmit:this.handleSubmit,handleFormSubmit:this.handleFormSubmit,updateData:this.updateData,fileUploaded:this.state.fileUploaded,loading:this.state.loading,imageLoading:this.state.imageLoading,showImgPreview:this.showImgPreview,imgPreview:r.a.createElement("div",{className:"imgPreviewDiv"},t)}))}}]),a}(r.a.Component),Ee=a(108),ve=function(e){e.component;var t=Object(Ee.a)(e,["component"]),a=localStorage.getItem("token");return r.a.createElement(m.b,Object.assign({},t,{render:function(e){return a?r.a.createElement(R,e):r.a.createElement(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var ye=function(){return r.a.createElement(s.a,{basename:"/wpreact"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/login",component:ee}),r.a.createElement(m.b,{exact:!0,path:"/create-post",component:be}),r.a.createElement(m.b,{exact:!0,path:"/beer/:id,:author",component:K}),r.a.createElement(ve,{exact:!0,path:"/",component:R})))},Se=a(219),Ce=a(107),we=a.n(Ce)()({typography:{fontFamily:'"Rajdhani", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,h1:{fontWeight:"fontWeightRegular",fontFamily:"Lobster Two",fontSize:"2em"},h2:{fontWeight:900,fontFamily:"Lobster Two",fontSize:"1.5em"},h3:{fontWeight:500,fontFamily:"Lobster Two",fontSize:"1.17em"}},multilineColor:{color:"red"},overrides:{MuiInput:{root:{"&$focused":{color:"rgba(255,255,255,0.8)"},indicator:{"&:after":{backgroundColor:"#ffa000"}}}},MuiSlider:{root:{},rail:{backgroundColor:"#9B8449"},track:{backgroundColor:"#9B8449"},valueLabel:{"& *":{background:"#9B8449",color:"#000",fontWeight:900}}},MuiSelect:{root:{color:"#9B8449"},icon:{fill:"#9B8449"}},MuiTabs:{indicator:{backgroundColor:"#9B8449"}},MuiTab:{root:{"&$selected":{backgroundColor:"rgba(255,255,255,0.03)",fontWeight:600}}},MuiTextField:{root:{focused:{borderColor:"yellow"}}},MuiButton:{root:{},outlinedPrimary:{color:"rgba(255,255,255,0.8)",border:"2px solid #9B8449"},outlinedSecondary:{color:"#9e1818",border:"#9e1818"}}}}),je=a(77),xe={urlEnd:"beers/",activeTab:"beers"},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_URL_STATE"===t.type?Object(je.a)(Object(je.a)({},e),{},{urlEnd:t.urlEnd+"/",activeTab:t.activeTab}):e},Oe=Object(o.b)(ke);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se.a,{theme:we},r.a.createElement(c.a,{store:Oe},r.a.createElement(ye,null)))),document.getElementById("root"))},85:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.756ce62b.chunk.js.map