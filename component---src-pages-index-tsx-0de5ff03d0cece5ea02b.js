(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{167:function(t,e,a){"use strict";a.r(e);a(67);var n=a(12),i=a(242),r=a(0),o=a.n(r),d=a(175),s=a(177),c=a(187),l=a(236),u=a(168),p=a(169),b=a(184),g=(a(5),a(171)),f=a(172),h=a(181),m=o.a.forwardRef(function(t,e){var a=t.classes,n=t.className,i=t.component,r=void 0===i?"div":i,d=t.disableGutters,s=void 0!==d&&d,c=t.fixed,l=void 0!==c&&c,b=t.maxWidth,f=void 0===b?"lg":b,m=Object(p.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.a.createElement(r,Object(u.a)({className:Object(g.a)(a.root,n,l&&a.fixed,s&&a.disableGutters,!1!==f&&a["maxWidth".concat(Object(h.a)(String(f)))]),ref:e},m))}),w=Object(f.a)(function(t){var e;return{root:(e={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},Object(b.a)(e,t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),Object(b.a)(e,t.breakpoints.up("md"),{paddingLeft:t.spacing(4),paddingRight:t.spacing(4)}),e),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce(function(e,a){var n=t.breakpoints.values[a];return 0!==n&&(e[t.breakpoints.up(a)]={maxWidth:n}),e},{}),maxWidthXs:Object(b.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(b.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(b.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(b.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(b.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}},{name:"MuiContainer"})(m);Object(l.a)(function(t){var e;return{root:{display:"flex"},mainLogo:{padding:"0 2rem",textDecoration:"none",marginTop:"1.75rem",marginBottom:"1.75rem",fontSize:"2rem",lineHeight:"2rem",color:"#212529",display:"block",position:"relative"},toolbar:{paddingRight:24},toolbarIcon:Object.assign({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},t.mixins.toolbar),appBar:{zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},appBarShift:{marginLeft:300,width:"calc(100% - 300px)",transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:300,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},drawerPaperClose:(e={overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7)},e[t.breakpoints.up("sm")]={width:t.spacing(9)},e),appBarSpacer:t.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:t.spacing(4),paddingBottom:t.spacing(4)},paper:{padding:t.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}),e.default=function(){var t=i.data;return Object(n.d)(c.a,null,Object(n.d)(s.a,null,Object(n.d)(w,null,Object(n.d)("h1",null,"최근 작성한 게시글 목록"),Object(n.d)("ul",null,t.allMarkdownRemark.edges.map(function(t){var e=t.node;return Object(n.d)("li",{key:e.id},Object(n.d)("h2",null,Object(n.d)(d.a,{to:e.frontmatter.path},e.frontmatter.title)),Object(n.d)("h3",null,e.frontmatter.date),Object(n.d)("p",null,e.excerpt),Object(n.d)("hr",null))})))))}},170:function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"d",function(){return i}),a.d(e,"a",function(){return r}),a.d(e,"f",function(){return o}),a.d(e,"c",function(){return d}),a.d(e,"e",function(){return s});var n={header:"#444444",brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},i={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},r={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},d={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},s={header:60}},175:function(t,e,a){"use strict";a.d(e,"b",function(){return p});var n=a(12),i=a(0),r=a.n(i),o=a(5),d=a.n(o),s=a(43),c=a.n(s);a.d(e,"a",function(){return c.a}),a.d(e,"c",function(){return s.navigate});a(176);var l=r.a.createContext({});function u(t){var e=t.staticQueryData,a=t.data,i=t.query,o=t.render,d=a?a.data:e[i]&&e[i].data;return Object(n.d)(r.a.Fragment,null,d&&o(d),!d&&Object(n.d)("div",null,"Loading (StaticQuery)"))}var p=function(t){var e=t.data,a=t.query,i=t.render,r=t.children;return Object(n.d)(l.Consumer,null,function(t){return Object(n.d)(u,{data:e,query:a,render:i||r,staticQueryData:t})})};p.propTypes={data:d.a.object,query:d.a.string.isRequired,render:d.a.func,children:d.a.func}},176:function(t,e,a){var n;t.exports=(n=a(180))&&n.default||n},177:function(t,e,a){"use strict";var n=a(174),i=a(12),r=(a(0),a(170)),o=Object(n.a)("div",{target:"ehhsji90"})("display:block;flex:1;position:relative;padding:",r.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(t){var e=t.children,a=t.className;return Object(i.d)(o,{className:a},e)}},180:function(t,e,a){"use strict";a.r(e);a(67);var n=a(0),i=a.n(n),r=a(5),o=a.n(r),d=a(68),s=function(t){var e=t.location,a=t.pageResources;return a?i.a.createElement(d.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},187:function(t,e,a){"use strict";a(67);var n=a(12),i=a(188),r=a(0),o=a(186),d=a.n(o),s=a(171),c=a(236),l=a(263),u=a(272),p=a(266),b=a(265),g=a(267),f=a(269),h=a(203),m=a.n(h),w=a(276),x=a(268),j=a(175),O=a(275),v=a(273),y=a(270),k=Object(c.a)(function(t){var e;return{root:{display:"flex"},mainLogo:{padding:"0 2rem",textDecoration:"none",marginTop:"1.75rem",marginBottom:"1.75rem",fontSize:"2rem",lineHeight:"2rem",color:"#212529",display:"block",position:"relative"},toolbar:{paddingRight:24},toolbarIcon:Object.assign({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},t.mixins.toolbar),appBar:{backgroundColor:"#fff",color:"#000"},appBarHeader:{textAlign:"center",fontSize:"33px",padding:"10px"},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:300,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},drawerPaperClose:(e={overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7)},e[t.breakpoints.up("sm")]={width:t.spacing(9)},e),appBarSpacer:t.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:t.spacing(4),paddingBottom:t.spacing(4)},paper:{padding:t.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},mainlistItem:{backgroundColor:"#fff",color:"#000",textDecoration:"none","&:hover":{backgroundColor:"#cccccc"},"&:active":{backgroundColor:"#dddddd"}},menutab:{root:{textTransform:"none",color:"#fff",fontWeight:t.typography.fontWeightRegular,fontSize:t.typography.pxToRem(15),marginRight:t.spacing(1),"&:focus":{opacity:1}}}}}),M=[{id:0,label:"게시물 목록",path:"/"},{id:1,label:"소개 입니다",path:"/page-3/"}];e.a=function(t){var e=t.children,a=i.data,o=k(),c=r.useState(0),h=c[0],S=c[1];return"undefined"!=typeof window&&r.useMemo(function(){console.log(location);var t=M.filter(function(t){return t.path==location.pathname});console.log(t),t.length>0&&S(t[0].id)},[h]),Object(n.d)("div",{className:o.root},Object(n.d)(d.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:a.site.siteMetadata.description},{name:"keywords",content:a.site.siteMetadata.keywords}]}),Object(n.d)(l.a,null),Object(n.d)(O.a,{smDown:!0},Object(n.d)(u.a,{variant:"permanent",classes:{paper:Object(s.a)(o.drawerPaper)},open:!0},Object(n.d)(j.a,{className:o.mainLogo,to:"/"},Object(n.d)(b.a,{component:"h1",variant:"h5",color:"inherit",noWrap:!0,className:o.title},a.site.siteMetadata.title)),Object(n.d)(p.a,null,Object(n.d)("div",null,Object(n.d)(g.a,null),Object(n.d)(j.a,{to:"/",className:o.mainlistItem},Object(n.d)(w.a,{selected:0===h,button:!0},Object(n.d)(x.a,{primary:"게시글 목록"}))),Object(n.d)(g.a,null),Object(n.d)(j.a,{to:"/page-3/",className:o.mainlistItem},Object(n.d)(w.a,{selected:1===h,button:!0},Object(n.d)(x.a,{primary:"소개"}))),Object(n.d)(g.a,null))))),Object(n.d)("main",{className:o.content},Object(n.d)(O.a,{mdUp:!0},Object(n.d)("div",{className:o.appBar},Object(n.d)("div",{className:o.appBarHeader},Object(n.d)(f.a,{style:{float:"left"},"aria-label":"delete"},Object(n.d)(m.a,null)),Object(n.d)(f.a,{style:{float:"right"},"aria-label":"delete"},Object(n.d)(m.a,null)),Object(n.d)(b.a,{variant:"h4"},a.site.siteMetadata.title)),Object(n.d)(v.a,{variant:"fullWidth",value:h,onChange:function(t,e){var a=M.filter(function(t){return t.id==e});Object(j.c)(a[0].path)},centered:!0,indicatorColor:"primary"},M.map(function(t){return Object(n.d)(y.a,{className:o.menutab,key:t.id,label:t.label})}))),Object(n.d)(g.a,null)),Object(n.d)("div",{className:o.appBarSpacer}),e))}},188:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제입니다.",path:"/test-1"},id:"5577b16f-3d3d-5247-88f1-ab5a404edb6d"}},{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제2입니다.",path:"/test-2"},id:"acf86148-1045-5d58-9801-b409a026dacc"}}]},site:{siteMetadata:{title:"Casternuts Log",description:"casternuts의 블로그 입니다."}}}}},242:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제입니다.",path:"/test-1"},id:"5577b16f-3d3d-5247-88f1-ab5a404edb6d"}},{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제2입니다.",path:"/test-2"},id:"acf86148-1045-5d58-9801-b409a026dacc"}}]},site:{siteMetadata:{title:"Casternuts Log",description:"casternuts의 블로그 입니다."}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-0de5ff03d0cece5ea02b.js.map