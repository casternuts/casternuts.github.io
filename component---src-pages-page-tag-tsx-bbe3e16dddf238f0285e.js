(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{166:function(e,t,a){"use strict";a.r(t);var r=a(12),o=a(241),n=a(0),i=a.n(n),l=a(180),c=a(260),d=a(185),s=a(257),u=a(224),p=a(169),b=a(170),m=(a(5),a(171)),f=a(172),g=a(184),h=Object(g.a)(i.a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var y=i.a.forwardRef(function(e,t){var a=e.alt,r=e.children,o=e.classes,n=e.className,l=e.component,c=void 0===l?"div":l,d=e.imgProps,s=e.sizes,u=e.src,f=e.srcSet,g=e.variant,y=void 0===g?"circle":g,v=Object(b.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),O=null,j=function(e){var t=e.src,a=e.srcSet,r=i.a.useState(!1),o=r[0],n=r[1];return i.a.useEffect(function(){if(t||a){n(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=a,r.onload=function(){e&&n("loaded")},r.onerror=function(){e&&n("error")},function(){e=!1}}},[t,a]),o}({src:u,srcSet:f}),k=u||f,w=k&&"error"!==j;return O=w?i.a.createElement("img",Object(p.a)({alt:a,src:u,srcSet:f,sizes:s,className:o.img},d)):null!=r?r:k&&a?a[0]:i.a.createElement(h,{className:o.fallback}),i.a.createElement(c,Object(p.a)({className:Object(m.a)(o.root,o.system,o[y],n,!w&&o.colorDefault),ref:t},v),O)}),v=Object(f.a)(function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}},{name:"MuiAvatar"})(y),O=a(173);t.default=function(){var e=o.data;return Object(r.d)(d.a,null,Object(r.d)(l.a,null,Object(r.d)(c.a,null,Object(r.d)("h1",null,"태그 목록"),Object(r.d)(s.a,null),e.allMarkdownRemark.group.map(function(e){return Object(r.d)(O.a,{key:e.fieldValue,to:"/page-tag/"+e.fieldValue},Object(r.d)(u.a,{key:e.fieldValue,variant:"outlined",color:"primary",label:e.fieldValue,avatar:Object(r.d)(v,null,e.totalCount)}))}))))}},173:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var r=a(12),o=a(0),n=a.n(o),i=a(5),l=a.n(i),c=a(43),d=a.n(c);a.d(t,"a",function(){return d.a}),a.d(t,"c",function(){return c.navigate});a(176);var s=n.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,o=e.query,i=e.render,l=a?a.data:t[o]&&t[o].data;return Object(r.d)(n.a.Fragment,null,l&&i(l),!l&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,a=e.query,o=e.render,n=e.children;return Object(r.d)(s.Consumer,null,function(e){return Object(r.d)(u,{data:t,query:a,render:o||n,staticQueryData:e})})};p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},174:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"d",function(){return o}),a.d(t,"a",function(){return n}),a.d(t,"f",function(){return i}),a.d(t,"c",function(){return l}),a.d(t,"e",function(){return c});var r={header:"#ffffff",brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},o={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},n={xs:0,sm:576,md:768,lg:992,xl:1200},i={md:720,lg:960,xl:1140},l={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},c={header:112}},176:function(e,t,a){var r;e.exports=(r=a(179))&&r.default||r},179:function(e,t,a){"use strict";a.r(t);a(67);var r=a(0),o=a.n(r),n=a(5),i=a.n(n),l=a(68),c=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},180:function(e,t,a){"use strict";var r=a(177),o=a(12),n=(a(0),a(174)),i=Object(r.a)("div",{target:"ehhsji90"})("display:block;flex:1;position:relative;padding:",n.c.containerPadding,"rem;margin-bottom:3rem;background-color:#fff;");t.a=function(e){var t=e.children,a=e.className;return Object(o.d)(i,{className:a},t)}},185:function(e,t,a){"use strict";a(100),a(67);var r=a(12),o=a(187),n=a(0),i=a(186),l=a.n(i),c=a(236),d=a(261),s=a(263),u=a(262),p=a(257),b=a(265),m=a(201),f=a.n(m),g=a(271),h=a(264),y=a(173),v=a(270),O=a(268),j=a(266),k=Object(c.a)(function(e){var t;return{root:{display:"flex"},mainLogo:{padding:"0 2rem",textDecoration:"none",marginTop:"1.75rem",marginBottom:"1.75rem",fontSize:"2rem",lineHeight:"2rem",color:"#212529",display:"block",position:"relative"},toolbar:{paddingRight:24},toolbarIcon:Object.assign({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{backgroundColor:"#fff",color:"#000"},appBarHeader:{textAlign:"center",fontSize:"33px",padding:"10px"},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:300,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:(t={overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},t[e.breakpoints.up("sm")]={width:e.spacing(9)},t),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto",backgroundColor:"#fff"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},mainlistItem:{backgroundColor:"#fff",color:"#000",textDecoration:"none","&:hover":{backgroundColor:"#cccccc"},"&:active":{backgroundColor:"#dddddd"}},menutab:{root:{textTransform:"none",color:"#fff",fontWeight:e.typography.fontWeightRegular,fontSize:e.typography.pxToRem(15),marginRight:e.spacing(1),"&:focus":{opacity:1}}}}}),w=[{id:0,label:"게시물 목록",path:"/"},{id:1,label:"소개 입니다",path:"/page-me/"},{id:2,label:"TAG",path:"/page-tag/"}];t.a=function(e){var t=e.children,a=o.data,i=k(),c=n.useState(0),m=c[0],C=c[1];return"undefined"!=typeof window&&n.useLayoutEffect(function(){if(""!=location.pathname.split("/")[1]){var e=w.filter(function(e){return e.path=="/"+location.pathname.split("/")[1]+"/"});e.length>0&&C(e[0].id)}else Object(y.c)("/"),C(0)},[m]),Object(r.d)("div",{className:i.root},Object(r.d)(l.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:a.site.siteMetadata.description},{name:"keywords",content:a.site.siteMetadata.keywords}]}),Object(r.d)(d.a,null),Object(r.d)(v.a,{smDown:!0},Object(r.d)("div",null,Object(r.d)(y.a,{className:i.mainLogo,to:"/"},Object(r.d)(u.a,{component:"h1",variant:"h5",color:"inherit",noWrap:!0,className:i.title},a.site.siteMetadata.title)),Object(r.d)(s.a,null,Object(r.d)("div",null,Object(r.d)(p.a,null),Object(r.d)(y.a,{to:"/",className:i.mainlistItem},Object(r.d)(g.a,{selected:0===m,button:!0},Object(r.d)(h.a,{primary:"게시글 목록"}))),Object(r.d)(p.a,null),Object(r.d)(y.a,{to:"/page-me/",className:i.mainlistItem},Object(r.d)(g.a,{selected:1===m,button:!0},Object(r.d)(h.a,{primary:"소개"}))),Object(r.d)(y.a,{to:"/page-tag/",className:i.mainlistItem},Object(r.d)(g.a,{selected:2===m,button:!0},Object(r.d)(h.a,{primary:"태그"}))),Object(r.d)(p.a,null))))),Object(r.d)("main",{className:i.content},Object(r.d)(v.a,{mdUp:!0},Object(r.d)("div",{className:i.appBar},Object(r.d)("div",{className:i.appBarHeader},Object(r.d)(b.a,{style:{float:"left"},"aria-label":"delete"},Object(r.d)(f.a,null)),Object(r.d)(b.a,{style:{float:"right"},"aria-label":"delete"},Object(r.d)(f.a,null)),Object(r.d)(u.a,{variant:"h4"},a.site.siteMetadata.title)),Object(r.d)(O.a,{variant:"fullWidth",value:m,onChange:function(e,t){var a=w.filter(function(e){return e.id==t});Object(y.c)(a[0].path)},centered:!0,indicatorColor:"primary"},w.map(function(e){return Object(r.d)(j.a,{className:i.menutab,key:e.id,label:e.label})}))),Object(r.d)(p.a,null)),t))}},187:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제입니다.",path:"/test-1"},id:"5577b16f-3d3d-5247-88f1-ab5a404edb6d"}},{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제2입니다.",path:"/test-2"},id:"acf86148-1045-5d58-9801-b409a026dacc"}},{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제3입니다.",path:"/test-3"},id:"7a41426b-302f-5be3-a43c-4bdc18f806aa"}}]},site:{siteMetadata:{title:"Casternuts Log",description:"casternuts의 블로그 입니다."}}}}},224:function(e,t,a){"use strict";var r=a(169),o=a(170),n=a(0),i=a.n(n),l=(a(5),a(171)),c=a(184),d=Object(c.a)(i.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),s=a(172),u=a(182),p=a(188),b=a(178),m=a(269),f=i.a.forwardRef(function(e,t){var a=e.avatar,n=e.classes,c=e.className,s=e.clickable,u=e.color,f=void 0===u?"default":u,g=e.component,h=e.deleteIcon,y=e.disabled,v=void 0!==y&&y,O=e.icon,j=e.label,k=e.onClick,w=e.onDelete,C=e.onKeyUp,x=e.size,S=void 0===x?"medium":x,R=e.variant,N=void 0===R?"default":R,T=Object(o.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyUp","size","variant"]),I=i.a.useRef(null),M=Object(p.a)(I,t),z=function(e){e.stopPropagation(),w&&w(e)},P=!(!1===s||!k)||s,$="small"===S,E=g||(P?m.a:"div"),L=E===m.a?{component:"div"}:{},D=null;if(w){var B=Object(l.a)("default"!==f&&("default"===N?n["deleteIconColor".concat(Object(b.a)(f))]:n["deleteIconOutlinedColor".concat(Object(b.a)(f))]),$&&n.deleteIconSmall);D=h&&i.a.isValidElement(h)?i.a.cloneElement(h,{className:Object(l.a)(h.props.className,n.deleteIcon,B),onClick:z}):i.a.createElement(d,{className:Object(l.a)(n.deleteIcon,B),onClick:z})}var H=null;a&&i.a.isValidElement(a)&&(H=i.a.cloneElement(a,{className:Object(l.a)(n.avatar,a.props.className,$&&n.avatarSmall,"default"!==f&&n["avatarColor".concat(Object(b.a)(f))])}));var V=null;return O&&i.a.isValidElement(O)&&(V=i.a.cloneElement(O,{className:Object(l.a)(n.icon,O.props.className,$&&n.iconSmall,"default"!==f&&n["iconColor".concat(Object(b.a)(f))])})),i.a.createElement(E,Object(r.a)({role:P||w?"button":void 0,className:Object(l.a)(n.root,c,"default"!==f&&[n["color".concat(Object(b.a)(f))],P&&n["clickableColor".concat(Object(b.a)(f))],w&&n["deletableColor".concat(Object(b.a)(f))]],"default"!==N&&[n.outlined,{primary:n.outlinedPrimary,secondary:n.outlinedSecondary}[f]],v&&n.disabled,$&&n.sizeSmall,P&&n.clickable,w&&n.deletable),"aria-disabled":!!v||void 0,tabIndex:P||w?0:void 0,onClick:k,onKeyUp:function(e){if(C&&C(e),e.currentTarget===e.target){var t=e.key;!w||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&I.current&&I.current.blur():w(e)}},ref:M},L,T),H||V,i.a.createElement("span",{className:Object(l.a)(n.label,$&&n.labelSmall)},j),D)});t.a=Object(s.a)(function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(u.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(u.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(u.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(u.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(u.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(u.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(u.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(u.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(u.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(u.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(u.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(u.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(u.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}},{name:"MuiChip"})(f)},241:function(e){e.exports={data:{allMarkdownRemark:{group:[{totalCount:1,fieldValue:"test"},{totalCount:2,fieldValue:"test2"}],totalCount:3}}}}}]);
//# sourceMappingURL=component---src-pages-page-tag-tsx-bbe3e16dddf238f0285e.js.map