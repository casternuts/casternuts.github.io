(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{206:function(e,t,a){"use strict";a.r(t);var r=a(15),o=a(275),n=a(0),l=a.n(n),i=a(218),c=a(289),d=a(224),s=a(288),p=a(263),u=a(1),b=a(9),m=(a(4),a(64)),f=a(210),g=a(223),h=Object(g.a)(l.a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var y=l.a.forwardRef(function(e,t){var a=e.alt,r=e.children,o=e.classes,n=e.className,i=e.component,c=void 0===i?"div":i,d=e.imgProps,s=e.sizes,p=e.src,f=e.srcSet,g=e.variant,y=void 0===g?"circle":g,v=Object(b.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),j=null,O=function(e){var t=e.src,a=e.srcSet,r=l.a.useState(!1),o=r[0],n=r[1];return l.a.useEffect(function(){if(t||a){n(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=a,r.onload=function(){e&&n("loaded")},r.onerror=function(){e&&n("error")},function(){e=!1}}},[t,a]),o}({src:p,srcSet:f}),w=p||f,k=w&&"error"!==O;return j=k?l.a.createElement("img",Object(u.a)({alt:a,src:p,srcSet:f,sizes:s,className:o.img},d)):null!=r?r:w&&a?a[0]:l.a.createElement(h,{className:o.fallback}),l.a.createElement(c,Object(u.a)({className:Object(m.a)(o.root,o.system,o[y],n,!k&&o.colorDefault),ref:t},v),j)}),v=Object(f.a)(function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}},{name:"MuiAvatar"})(y),j=a(211);t.default=function(){var e=o.data;return Object(r.d)(d.a,null,Object(r.d)(i.a,null,Object(r.d)(c.a,null,Object(r.d)("h1",null,"태그 목록"),Object(r.d)(s.a,null),e.allMarkdownRemark.group.map(function(e){return Object(r.d)(j.a,{key:e.fieldValue,style:{textDecoration:"none"},to:"/page-tag/"+e.fieldValue},Object(r.d)(p.a,{style:{margin:".375rem"},key:e.fieldValue,variant:"outlined",color:"primary",label:e.fieldValue,avatar:Object(r.d)(v,null,e.totalCount)}))}))))}},211:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(15),o=a(0),n=a.n(o),l=a(4),i=a.n(l),c=a(63),d=a.n(c);a.d(t,"a",function(){return d.a}),a.d(t,"c",function(){return c.navigate});a(212);var s=n.a.createContext({});function p(e){var t=e.staticQueryData,a=e.data,o=e.query,l=e.render,i=a?a.data:t[o]&&t[o].data;return Object(r.d)(n.a.Fragment,null,i&&l(i),!i&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,o=e.render,n=e.children;return Object(r.d)(s.Consumer,null,function(e){return Object(r.d)(p,{data:t,query:a,render:o||n,staticQueryData:e})})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},212:function(e,t,a){var r;e.exports=(r=a(216))&&r.default||r},216:function(e,t,a){"use strict";a.r(t);a(95);var r=a(0),o=a.n(r),n=a(4),l=a.n(n),i=a(96),c=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},218:function(e,t,a){"use strict";var r=a(214),o=a(15),n=(a(0),Object(r.a)("div",{target:"ehhsji90"})({name:"fsnmsg",styles:"display:block;flex:1;position:relative;padding:1rem;margin-bottom:3rem;background-color:#f1f3f5;"}));t.a=function(e){var t=e.children,a=e.className;return Object(o.d)(n,{className:a},t)}},224:function(e,t,a){"use strict";a(134),a(95);var r=a(15),o=a(226),n=a(0),l=a(225),i=a.n(l),c=a(64),d=a(297),s=a(293),p=a(292),u=a(288),b=a(295),m=a(240),f=a.n(m),g=a(301),h=a(294),y=a(211),v=a(300),j=a(298),O=a(296),w=a(290),k=a(291),x=Object(w.a)(function(e){var t,a,r;return{root:{display:"flex"},paperFlex:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:e.spacing(.5)},mainLogo:{padding:"0 2rem",textDecoration:"none",marginTop:"1.75rem",marginBottom:"1.75rem",fontSize:"2rem",lineHeight:"2rem",color:"#212529",display:"block",position:"relative"},toolbar:{paddingRight:24},toolbarIcon:Object.assign({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{backgroundColor:"#fff",color:"#000"},appBarHeader:{textAlign:"center",fontSize:"33px",padding:"10px"},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawer:(t={},t[e.breakpoints.up("sm")]={width:300,flexShrink:0},t),drawerPaper:{position:"relative",whiteSpace:"nowrap",overflowX:"hidden",width:300,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:(a={overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},a[e.breakpoints.up("sm")]={width:e.spacing(9)},a),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto",paddingTop:"0px",paddingLeft:"0px",backgroundColor:"#f1f3f5"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},menuButton:(r={marginRight:e.spacing(2)},r[e.breakpoints.up("sm")]={display:"none"},r),mainlistItemSelected:{borderRight:"#0095da !important",borderStyle:"groove !important",backgroundColor:"#fff !important",color:"#0095da",fontWeight:"bold"},mainlistItem:{"&:hover":{borderRight:"#0095da !important",borderStyle:"groove !important"},"&:active":{borderRight:"#0095da",borderStyle:"groove"}},mainlist:{backgroundColor:"#fff",color:"#000",textDecoration:"none"},menutab:{root:{textTransform:"none",color:"#fff",fontWeight:e.typography.fontWeightRegular,fontSize:e.typography.pxToRem(15),marginRight:e.spacing(1),"&:focus":{opacity:1}}}}}),C=[{id:0,label:"게시물 목록",path:"/"},{id:1,label:"소개 입니다",path:"/page-me/"},{id:2,label:"TAG",path:"/page-tag/"}];t.a=function(e){var t=e.children,a=o.data,l=x(),m=n.useState(0),w=m[0],S=m[1];return"undefined"!=typeof window&&n.useMemo(function(){if(""!=location.pathname.split("/")[1]){var e=C.filter(function(e){return e.path=="/"+location.pathname.split("/")[1]+"/"});e.length>0&&S(e[0].id)}else S(0)},[w]),Object(r.d)("div",{className:l.root},Object(r.d)(i.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:a.site.siteMetadata.description},{name:"keywords",content:a.site.siteMetadata.keywords}]}),Object(r.d)(v.a,{smDown:!0},Object(r.d)(d.a,{variant:"permanent",classes:{paper:Object(c.a)(l.drawerPaper)},open:!0},Object(r.d)("div",null,Object(r.d)(y.a,{className:l.mainLogo,to:"/"},Object(r.d)(p.a,{component:"h1",variant:"h5",color:"inherit",noWrap:!0,className:l.title},a.site.siteMetadata.title)),Object(r.d)(s.a,null,Object(r.d)("div",null,Object(r.d)(y.a,{to:"/",className:l.mainlist},Object(r.d)(g.a,{classes:{root:l.mainlistItem,selected:l.mainlistItemSelected},selected:0===w,button:!0},Object(r.d)(h.a,{primary:"게시글 목록"}))),Object(r.d)(y.a,{to:"/page-me/",className:l.mainlist},Object(r.d)(g.a,{classes:{root:l.mainlistItem,selected:l.mainlistItemSelected},selected:1===w,button:!0},Object(r.d)(h.a,{primary:"소개"}))),Object(r.d)(y.a,{to:"/page-tag/",className:l.mainlist},Object(r.d)(g.a,{classes:{root:l.mainlistItem,selected:l.mainlistItemSelected},selected:2===w,button:!0},Object(r.d)(h.a,{primary:"태그"})))))),Object(r.d)("div",{style:{width:300,position:"absolute",bottom:"10px"}},Object(r.d)(u.a,null),Object(r.d)(k.a,{className:l.paperFlex},Object(r.d)(b.a,{style:{float:"left"},"aria-label":"delete"},Object(r.d)(f.a,null)),Object(r.d)(b.a,{style:{float:"left"},"aria-label":"delete"},Object(r.d)(f.a,null)),Object(r.d)(b.a,{style:{float:"left"},"aria-label":"delete"},Object(r.d)(f.a,null)))))),Object(r.d)("main",{className:l.content},Object(r.d)(v.a,{mdUp:!0},Object(r.d)("div",{className:l.appBar},Object(r.d)("div",{className:l.appBarHeader},Object(r.d)(b.a,{style:{float:"left"},"aria-label":"delete"},Object(r.d)(f.a,null)),Object(r.d)(b.a,{style:{float:"right"},"aria-label":"delete"},Object(r.d)(f.a,null)),Object(r.d)(p.a,{variant:"h4"},a.site.siteMetadata.title)),Object(r.d)(j.a,{variant:"fullWidth",value:w,onChange:function(e,t){var a=C.filter(function(e){return e.id==t});Object(y.c)(a[0].path)},centered:!0,indicatorColor:"primary"},C.map(function(e){return Object(r.d)(O.a,{className:l.menutab,key:e.id,label:e.label})}))),Object(r.d)(u.a,null)),Object(r.d)("div",null,t)))}},226:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제입니다.",path:"/test-1"},id:"5577b16f-3d3d-5247-88f1-ab5a404edb6d"}},{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제3입니다.",path:"/test-3"},id:"7a41426b-302f-5be3-a43c-4bdc18f806aa"}},{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제2입니다.",path:"/test-2"},id:"acf86148-1045-5d58-9801-b409a026dacc"}}]},site:{siteMetadata:{title:"Casternuts Log",description:"casternuts의 블로그 입니다."}}}}},263:function(e,t,a){"use strict";var r=a(1),o=a(9),n=a(0),l=a.n(n),i=(a(4),a(64)),c=a(223),d=Object(c.a)(l.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),s=a(210),p=a(221),u=a(215),b=a(213),m=a(299),f=l.a.forwardRef(function(e,t){var a=e.avatar,n=e.classes,c=e.className,s=e.clickable,p=e.color,f=void 0===p?"default":p,g=e.component,h=e.deleteIcon,y=e.disabled,v=void 0!==y&&y,j=e.icon,O=e.label,w=e.onClick,k=e.onDelete,x=e.onKeyUp,C=e.size,S=void 0===C?"medium":C,R=e.variant,N=void 0===R?"default":R,I=Object(o.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyUp","size","variant"]),T=l.a.useRef(null),M=Object(u.a)(T,t),P=function(e){e.stopPropagation(),k&&k(e)},$=!(!1===s||!w)||s,z="small"===S,E=g||($?m.a:"div"),L=E===m.a?{component:"div"}:{},D=null;if(k){var B=Object(i.a)("default"!==f&&("default"===N?n["deleteIconColor".concat(Object(b.a)(f))]:n["deleteIconOutlinedColor".concat(Object(b.a)(f))]),z&&n.deleteIconSmall);D=h&&l.a.isValidElement(h)?l.a.cloneElement(h,{className:Object(i.a)(h.props.className,n.deleteIcon,B),onClick:P}):l.a.createElement(d,{className:Object(i.a)(n.deleteIcon,B),onClick:P})}var V=null;a&&l.a.isValidElement(a)&&(V=l.a.cloneElement(a,{className:Object(i.a)(n.avatar,a.props.className,z&&n.avatarSmall,"default"!==f&&n["avatarColor".concat(Object(b.a)(f))])}));var q=null;return j&&l.a.isValidElement(j)&&(q=l.a.cloneElement(j,{className:Object(i.a)(n.icon,j.props.className,z&&n.iconSmall,"default"!==f&&n["iconColor".concat(Object(b.a)(f))])})),l.a.createElement(E,Object(r.a)({role:$||k?"button":void 0,className:Object(i.a)(n.root,c,"default"!==f&&[n["color".concat(Object(b.a)(f))],$&&n["clickableColor".concat(Object(b.a)(f))],k&&n["deletableColor".concat(Object(b.a)(f))]],"default"!==N&&[n.outlined,{primary:n.outlinedPrimary,secondary:n.outlinedSecondary}[f]],v&&n.disabled,z&&n.sizeSmall,$&&n.clickable,k&&n.deletable),"aria-disabled":!!v||void 0,tabIndex:$||k?0:void 0,onClick:w,onKeyUp:function(e){if(x&&x(e),e.currentTarget===e.target){var t=e.key;!k||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&T.current&&T.current.blur():k(e)}},ref:M},L,I),V||q,l.a.createElement("span",{className:Object(i.a)(n.label,z&&n.labelSmall)},O),D)});t.a=Object(s.a)(function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(p.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(p.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(p.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(p.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(p.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(p.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(p.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(p.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(p.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(p.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(p.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(p.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}},{name:"MuiChip"})(f)},275:function(e){e.exports={data:{allMarkdownRemark:{group:[{totalCount:1,fieldValue:"test"},{totalCount:2,fieldValue:"test2"}],totalCount:3}}}}}]);
//# sourceMappingURL=component---src-pages-page-tag-tsx-53ecfcb13ca41880f043.js.map