"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{2089:function(e,t,n){n.d(t,{R:function(){return z}});var r=n(29),i=n(7794),s=n.n(i),a=n(7812),o=n(6242),l=n(4267),c=n(7357),d=n(7720),u=n(2023),x=n(3321),p=n(948),h=n(6447),f=n(7294),m=n(3592),g=n(5893),j=function(e){var t=e.el,n=e.setimage,r=e.image,i=e.bool;return(0,g.jsxs)(c.Z,{sx:{width:"250px",height:"160px",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,g.jsx)(c.Z,{alt:"#",variant:"square",sx:{width:"230px",height:"150px",backgroundImage:"url(".concat(t.base64||t.imgUrl,")"),borderRadius:"10px",backgroundSize:"cover",backgroundPosition:"center",margin:"0 auto"}}),(0,g.jsx)(c.Z,{sx:{width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",borderRadius:"100px",backgroundColor:"white",zIndex:"10",top:"0",right:"0"},children:(0,g.jsx)(m.Z,{onClick:function(){var e=r.filter((function(e){return i?e.imgUrl!==t.imgUrl:e.base64!==t.base64}));n(e)}})})]})},Z="/_next/static/media/preview.98da9bc3.svg",v=function(e){var t=e.image,n=e.setimage,r=e.bool,i=(0,p.ZP)("input")({display:"none"});return(0,g.jsxs)(o.Z,{children:[(0,g.jsx)(l.Z,{children:(0,g.jsx)(c.Z,{sx:{borderRadius:"12px",width:"98%",height:"auto",overflowX:"hidden",alignItems:"center"},children:t[0]?t.map((function(e,i){return(0,g.jsx)(c.Z,{sx:{marginTop:"10px",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,g.jsx)(j,{el:e,setimage:n,image:t,bool:r})},i)})):(0,g.jsxs)(c.Z,{sx:{width:"100%",height:"150px",border:"1px dashed black",borderRadius:"12px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,g.jsx)("img",{src:Z,alt:"",style:{width:"50px",height:"50px"}}),(0,g.jsx)("p",{children:"No file chosen,yet!"})]})})}),(0,g.jsx)(d.Z,{}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(h.Z,{direction:"row",alignItems:"center",spacing:2,children:(0,g.jsxs)("label",{htmlFor:"contained-button-file",children:[(0,g.jsx)(i,{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){return function(e){e.preventDefault();var t=e.target.files;Array.from(t).map((function(t,r){var i=e.target.files[r],s=new FileReader;s.readAsDataURL(i),s.onload=function(){n((function(e){return[].concat((0,a.Z)(e),[{base64:s.result,imgName:t.name,bool:!0}])}))}}))}(e)}}),(0,g.jsx)(x.Z,{color:"primary",fullWidth:!0,variant:"text",component:"span",children:"Upload picture"})]})})})]})},b=n(8445),y=n(6886),w=n(1903),C=(n(91),n(5152)),k=n.n(C)()((function(){return Promise.all([n.e(774),n.e(937),n.e(156)]).then(n.t.bind(n,4290,23))}),{ssr:!1,loading:function(){return(0,g.jsx)("p",{children:"Loading ..."})},loadableGenerated:{webpack:function(){return[4290]}}}),P=function(e){var t=e.setValues,n=e.values,r=e.fn,i=e.bool,s=e.update,a=e.col,u=e.description,p=e.setdescription;return(0,g.jsx)("form",{autoComplete:"off",noValidate:!0,children:(0,g.jsxs)(o.Z,{children:[(0,g.jsx)(b.Z,{title:"news"===a?"Add news":"Add product"}),(0,g.jsx)(d.Z,{}),(0,g.jsx)(l.Z,{children:(0,g.jsxs)(y.ZP,{container:!0,spacing:3,style:I.container,children:[(0,g.jsx)(y.ZP,{item:!0,md:6,xs:12,children:(0,g.jsx)(w.Z,{maxRows:1,fullWidth:!0,label:"news"===a?"News title":"Product title",name:"title",onChange:function(e){return t(e.target.value)},required:!0,value:n,variant:"outlined"})}),(0,g.jsx)(c.Z,{style:I.buttonstyle,children:(0,g.jsx)(k,{style:{height:"300px"},theme:"snow",value:u,onChange:function(e){return function(e){return p(e)}(e)},placeholder:"news"===a?"News Description":"Product description"})})]})}),(0,g.jsx)(d.Z,{}),(0,g.jsx)(c.Z,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:i?(0,g.jsx)(x.Z,{color:"primary",variant:"contained",onClick:s,children:"Save Changes"}):(0,g.jsx)(x.Z,{color:"primary",variant:"contained",onClick:r,children:"Save"})})]})})},I={container:{display:"flex",flexDirection:"column"},buttonstyle:{paddingTop:24,paddingLeft:24,height:"350px",overflowY:"scroll"}},R=n(3156),S=n(5861),D=n(4625),A=n(4808),N=n(8456),z=function(e){var t=e.setaddproduct,n=e.num,i=e.product,a=e.setbool,o=e.bool,l=e.col,d=e.addproduct,u=o&&i.id,p=(0,f.useState)(o?i.img:[]),h=p[0],m=p[1],j=(0,f.useState)(o?i.title:""),Z=j[0],b=j[1],w=(0,f.useState)(o?i.description:""),C=w[0],k=w[1],I=(0,f.useState)(!1),z=I[0],W=I[1],T=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==h.length){e.next=2;break}return e.abrupt("return",alert("You must add an image to post"));case 2:if(!(h.length>4)){e.next=4;break}return e.abrupt("return",alert("You can upload only 4 images at a time"));case 4:return W(!0),m(""),b(""),k(""),e.next=10,(0,D.Nv)({values:Z,description:C,image:h},l);case 10:W(!1),o&&a(!1),d&&t(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==h.length){e.next=2;break}return e.abrupt("return",alert("Your post doesn't have an image!"));case 2:return e.next=4,(0,D.$y)({values:Z,description:C,image:h,id:u},l);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,g.jsxs)(R.Z,{maxWidth:"lg",sx:{marginTop:"10px"},children:[(0,g.jsx)(A.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:z,children:(0,g.jsx)(N.Z,{color:"inherit"})}),(0,g.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",flexWrap:"wrap",m:-1},children:[(0,g.jsx)(S.Z,{sx:{m:1},variant:"h4",children:d?"Add":"Edit"}),1===n&&(0,g.jsx)(c.Z,{sx:{m:1},children:(0,g.jsx)(x.Z,{color:"primary",variant:"contained",onClick:function(){o&&a(!1),d&&t(!1)},children:"x"})})]}),(0,g.jsxs)(y.ZP,{container:!0,spacing:3,children:[(0,g.jsx)(y.ZP,{item:!0,lg:4,md:6,xs:12,children:(0,g.jsx)(v,{image:h,setimage:m,bool:o})}),(0,g.jsx)(y.ZP,{item:!0,lg:8,md:6,xs:12,children:(0,g.jsx)(P,{setValues:b,description:C,setdescription:k,values:Z,fn:T,bool:o,update:U,col:l})})]})]})}},4687:function(e,t,n){n.d(t,{I:function(){return j}});var r=n(6242),i=n(4267),s=n(7357),a=n(9661),o=n(5861),l=n(7720),c=n(6886),d=n(2066),u=n(5893),x=(0,d.Z)((0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,u.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),"Clock"),p=n(3321),h=n(2089),f=n(7294),m=n(4625),g=n(5935),j=function(e){var t=e.product,n=e.col,d=(0,f.useState)(!1),j=d[0],Z=d[1],v=t.date,b=new Date(v),y=["1","2","3","4"];y.unshift(t.img);var w=y.flat();return t.img.forEach((function(e){w.pop()})),j?(0,u.jsx)(h.R,{product:t,bool:j,setbool:Z,col:n,num:1}):(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",marginTop:"10px"},children:[(0,u.jsx)(i.Z,{sx:{height:"250px"},children:(0,u.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,u.jsx)(s.Z,{sx:{display:"flex",flexDirection:"column"},children:(0,u.jsx)(s.Z,{sx:{display:"grid",gridTemplateColumns:"auto auto",rowGap:"10px",columnGap:"10px"},children:w.map((function(e,n){return(0,u.jsx)(s.Z,{children:(0,u.jsx)(a.Z,{alt:"#",src:t.img&&e.imgUrl,variant:"square",sx:{objectFit:"contain",width:"95px",height:"95px",borderRadius:"10px"}})},n)}))})}),(0,u.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",width:"70%",height:"200px",overflowY:"scroll"},children:[(0,u.jsx)(o.Z,{color:"textPrimary",gutterBottom:!0,variant:"h5",children:t.title}),(0,u.jsx)(o.Z,{color:"textPrimary",variant:"h7",children:(0,g.ZP)(t.description)})]})]})}),(0,u.jsx)(s.Z,{sx:{flexGrow:1}}),(0,u.jsx)(l.Z,{}),(0,u.jsx)(s.Z,{sx:{p:2,height:"60px",paddingTop:"12px"},children:(0,u.jsxs)(c.ZP,{container:!0,spacing:2,sx:{justifyContent:"space-between"},children:[(0,u.jsxs)(c.ZP,{item:!0,sx:{alignItems:"center",display:"flex"},children:[(0,u.jsx)(x,{color:"action"}),(0,u.jsx)(o.Z,{color:"textSecondary",display:"inline",sx:{pl:1},variant:"body2",children:b.getDate()+"/"+(b.getMonth()+1)+"/"+b.getFullYear()+" "+b.getHours()+":"+b.getMinutes()})]}),(0,u.jsxs)(c.ZP,{item:!0,sx:{alignItems:"center",display:"flex"},children:[(0,u.jsx)(p.Z,{variant:"text",onClick:function(){return Z(!0)},children:"Edit"}),(0,u.jsx)(p.Z,{variant:"text",onClick:function(){confirm("Are you sure?")&&(0,m.K2)([t],n)},children:"Delete"})]})]})})]})})}},3746:function(e,t,n){n.d(t,{R:function(){return f}});var r=n(7357),i=n(5861),s=n(3321),a=n(6242),o=n(4267),l=n(1903),c=n(7109),d=n(3219),u=n(2089),x=n(2593),p=n(7294),h=n(5893),f=function(e){var t=e.children,n=e.setfilter,f=e.col,m=(0,p.useState)(!1),g=m[0],j=m[1];return g?(0,h.jsx)(u.R,{setaddproduct:j,col:f,addproduct:g,num:1}):(0,h.jsxs)(r.Z,{children:[(0,h.jsxs)(r.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",flexWrap:"wrap",m:-1},children:[(0,h.jsx)(i.Z,{sx:{m:1},variant:"h4",children:"products"===f?"Products":"News"}),(0,h.jsx)(r.Z,{sx:{m:1},children:(0,h.jsx)(s.Z,{color:"primary",variant:"contained",onClick:function(){return j(!0)},children:"products"===f?"Add products":"Add article"})})]}),(0,h.jsxs)(r.Z,{sx:{mt:3},children:[(0,h.jsx)(a.Z,{children:(0,h.jsx)(o.Z,{children:(0,h.jsx)(r.Z,{sx:{maxWidth:500},children:(0,h.jsx)(l.Z,{fullWidth:!0,onChange:function(e){return n(e.target.value)},InputProps:{startAdornment:(0,h.jsx)(c.Z,{position:"start",children:(0,h.jsx)(d.Z,{fontSize:"small",color:"action",children:(0,h.jsx)(x.o,{})})})},placeholder:"Search product",variant:"outlined"})})})}),t]})]})}}}]);