(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{165:function(e,t,a){"use strict";a.r(t);var n=a(12),r=(a(0),a(173)),i=a(180),o=a(260),c=a(185);t.default=function(){return Object(n.d)(c.a,null,Object(n.d)(i.a,null,Object(n.d)(o.a,null,Object(n.d)("h1",null,"Hi from the PageThree page"),Object(n.d)("p",null,"Welcome to page 3"),Object(n.d)("ul",null,Object(n.d)("li",null,Object(n.d)(r.a,{to:"/a-markdown-page/"},"Show me some Markdown!")),Object(n.d)("li",null,Object(n.d)(r.a,{to:"/"},"Take me back home."))))))}},173:function(e,t,a){"use strict";a.d(t,"b",function(){return f});var n=a(12),r=a(0),i=a.n(r),o=a(5),c=a.n(o),d=a(43),l=a.n(d);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return d.navigate});a(176);var s=i.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,r=e.query,o=e.render,c=a?a.data:t[r]&&t[r].data;return Object(n.d)(i.a.Fragment,null,c&&o(c),!c&&Object(n.d)("div",null,"Loading (StaticQuery)"))}var f=function(e){var t=e.data,a=e.query,r=e.render,i=e.children;return Object(n.d)(s.Consumer,null,function(e){return Object(n.d)(u,{data:t,query:a,render:r||i,staticQueryData:e})})};f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},174:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"a",function(){return i}),a.d(t,"f",function(){return o}),a.d(t,"c",function(){return c}),a.d(t,"e",function(){return d});var n={header:"#ffffff",brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},r={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},d={header:112}},176:function(e,t,a){var n;e.exports=(n=a(179))&&n.default||n},179:function(e,t,a){"use strict";a.r(t);a(67);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),c=a(68),d=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},180:function(e,t,a){"use strict";var n=a(177),r=a(12),i=(a(0),a(174)),o=Object(n.a)("div",{target:"ehhsji90"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;background-color:#fff;");t.a=function(e){var t=e.children,a=e.className;return Object(r.d)(o,{className:a},t)}},185:function(e,t,a){"use strict";a(100),a(67);var n=a(12),r=a(187),i=a(0),o=a(186),c=a.n(o),d=a(236),l=a(261),s=a(263),u=a(262),f=a(257),p=a(265),b=a(201),g=a.n(b),h=a(271),m=a(264),j=a(173),w=a(270),O=a(268),y=a(266),v=Object(d.a)(function(e){var t;return{root:{display:"flex"},mainLogo:{padding:"0 2rem",textDecoration:"none",marginTop:"1.75rem",marginBottom:"1.75rem",fontSize:"2rem",lineHeight:"2rem",color:"#212529",display:"block",position:"relative"},toolbar:{paddingRight:24},toolbarIcon:Object.assign({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{backgroundColor:"#fff",color:"#000"},appBarHeader:{textAlign:"center",fontSize:"33px",padding:"10px"},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:300,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:(t={overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},t[e.breakpoints.up("sm")]={width:e.spacing(9)},t),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto",backgroundColor:"#fff"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},mainlistItem:{backgroundColor:"#fff",color:"#000",textDecoration:"none","&:hover":{backgroundColor:"#cccccc"},"&:active":{backgroundColor:"#dddddd"}},menutab:{root:{textTransform:"none",color:"#fff",fontWeight:e.typography.fontWeightRegular,fontSize:e.typography.pxToRem(15),marginRight:e.spacing(1),"&:focus":{opacity:1}}}}}),k=[{id:0,label:"게시물 목록",path:"/"},{id:1,label:"소개 입니다",path:"/page-me/"},{id:2,label:"TAG",path:"/page-tag/"}];t.a=function(e){var t=e.children,a=r.data,o=v(),d=i.useState(0),b=d[0],x=d[1];return"undefined"!=typeof window&&i.useLayoutEffect(function(){if(""!=location.pathname.split("/")[1]){var e=k.filter(function(e){return e.path=="/"+location.pathname.split("/")[1]+"/"});e.length>0&&x(e[0].id)}else Object(j.c)("/"),x(0)},[b]),Object(n.d)("div",{className:o.root},Object(n.d)(c.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:a.site.siteMetadata.description},{name:"keywords",content:a.site.siteMetadata.keywords}]}),Object(n.d)(l.a,null),Object(n.d)(w.a,{smDown:!0},Object(n.d)("div",null,Object(n.d)(j.a,{className:o.mainLogo,to:"/"},Object(n.d)(u.a,{component:"h1",variant:"h5",color:"inherit",noWrap:!0,className:o.title},a.site.siteMetadata.title)),Object(n.d)(s.a,null,Object(n.d)("div",null,Object(n.d)(f.a,null),Object(n.d)(j.a,{to:"/",className:o.mainlistItem},Object(n.d)(h.a,{selected:0===b,button:!0},Object(n.d)(m.a,{primary:"게시글 목록"}))),Object(n.d)(f.a,null),Object(n.d)(j.a,{to:"/page-me/",className:o.mainlistItem},Object(n.d)(h.a,{selected:1===b,button:!0},Object(n.d)(m.a,{primary:"소개"}))),Object(n.d)(j.a,{to:"/page-tag/",className:o.mainlistItem},Object(n.d)(h.a,{selected:2===b,button:!0},Object(n.d)(m.a,{primary:"태그"}))),Object(n.d)(f.a,null))))),Object(n.d)("main",{className:o.content},Object(n.d)(w.a,{mdUp:!0},Object(n.d)("div",{className:o.appBar},Object(n.d)("div",{className:o.appBarHeader},Object(n.d)(p.a,{style:{float:"left"},"aria-label":"delete"},Object(n.d)(g.a,null)),Object(n.d)(p.a,{style:{float:"right"},"aria-label":"delete"},Object(n.d)(g.a,null)),Object(n.d)(u.a,{variant:"h4"},a.site.siteMetadata.title)),Object(n.d)(O.a,{variant:"fullWidth",value:b,onChange:function(e,t){var a=k.filter(function(e){return e.id==t});Object(j.c)(a[0].path)},centered:!0,indicatorColor:"primary"},k.map(function(e){return Object(n.d)(y.a,{className:o.menutab,key:e.id,label:e.label})}))),Object(n.d)(f.a,null)),t))}},187:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제입니다.",path:"/test-1"},id:"5577b16f-3d3d-5247-88f1-ab5a404edb6d"}},{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제2입니다.",path:"/test-2"},id:"acf86148-1045-5d58-9801-b409a026dacc"}},{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제3입니다.",path:"/test-3"},id:"7a41426b-302f-5be3-a43c-4bdc18f806aa"}}]},site:{siteMetadata:{title:"Casternuts Log",description:"casternuts의 블로그 입니다."}}}}}}]);
//# sourceMappingURL=component---src-pages-page-me-tsx-e38e11c8a21ef612cc7e.js.map