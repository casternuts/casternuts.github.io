(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{202:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return p});a(134);var n=a(15),r=(a(0),a(211)),i=a(218),o=a(223),c=a(293),d=a(296),l=a(292),s=a(245);e.default=function(t){var e=t.data;return console.log(e),Object(n.d)(o.a,null,Object(n.d)(i.a,null,Object(n.d)(c.a,null,Object(n.d)("div",null,Object(n.d)(d.a,{variant:"h6",gutterBottom:!0},Object(n.d)(r.a,{style:{textDecoration:"none"},to:"/page-tag/"},"← 태그 목록으로 돌아가기")),Object(n.d)(l.a,null)),Object(n.d)("div",{style:{width:"100%",display:"inline-block"}},Object(n.d)("div",null,Object(n.d)("h1",{style:{float:"left"}}," Tag #","undefined"!=typeof window&&window.location&&location.pathname.split("/")[2]))),Object(n.d)("ul",null,e.allMarkdownRemark.nodes.map(function(t){return Object(n.d)(s.a,{key:t.id,data:t})})))))};var p="2347452756"},211:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(15),r=a(0),i=a.n(r),o=a(4),c=a.n(o),d=a(63),l=a.n(d);a.d(e,"a",function(){return l.a}),a.d(e,"c",function(){return d.navigate});a(212);var s=i.a.createContext({});function p(t){var e=t.staticQueryData,a=t.data,r=t.query,o=t.render,c=a?a.data:e[r]&&e[r].data;return Object(n.d)(i.a.Fragment,null,c&&o(c),!c&&Object(n.d)("div",null,"Loading (StaticQuery)"))}var u=function(t){var e=t.data,a=t.query,r=t.render,i=t.children;return Object(n.d)(s.Consumer,null,function(t){return Object(n.d)(p,{data:e,query:a,render:r||i,staticQueryData:t})})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},212:function(t,e,a){var n;t.exports=(n=a(216))&&n.default||n},216:function(t,e,a){"use strict";a.r(e);a(95);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(96),d=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=d},218:function(t,e,a){"use strict";var n=a(213),r=a(15),i=(a(0),Object(n.a)("div",{target:"ehhsji90"})({name:"fsnmsg",styles:"display:block;flex:1;position:relative;padding:1rem;margin-bottom:3rem;background-color:#f1f3f5;"}));e.a=function(t){var e=t.children,a=t.className;return Object(r.d)(i,{className:a},e)}},223:function(t,e,a){"use strict";a(134),a(95);var n=a(15),r=a(224),i=a(0),o=a(222),c=a.n(o),d=a(64),l=a(303),s=a(297),p=a(296),u=a(292),b=a(301),m=a(309),f=a(298),g=a(211),h=a(306),j=a(304),O=a(302),y=a(294),v=a(295),w=a(308),x=a(299),k=a(300),N=a(241),C=a.n(N),M=a(242),S=a.n(M),R=Object(y.a)(function(t){var e,a,n;return{root:{display:"flex"},paperFlex:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:t.spacing(.5)},mainLogo:{padding:"0 2rem",textDecoration:"none",marginTop:"1.75rem",marginBottom:"1.75rem",fontSize:"2rem",lineHeight:"2rem",color:"#212529",display:"block",position:"relative"},toolbar:{paddingRight:24},toolbarIcon:Object.assign({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},t.mixins.toolbar),appBar:{backgroundColor:"#fff",color:"#000"},appBarHeader:{textAlign:"center",fontSize:"33px",padding:"10px"},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawer:(e={},e[t.breakpoints.up("sm")]={width:300,flexShrink:0},e),drawerPaper:{position:"relative",whiteSpace:"nowrap",overflowX:"hidden",width:300,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},drawerPaperClose:(a={overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7)},a[t.breakpoints.up("sm")]={width:t.spacing(9)},a),appBarSpacer:t.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto",paddingTop:"0px",paddingLeft:"0px",backgroundColor:"#f1f3f5"},container:{paddingTop:t.spacing(4),paddingBottom:t.spacing(4)},paper:{padding:t.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},menuButton:(n={marginRight:t.spacing(2)},n[t.breakpoints.up("sm")]={display:"none"},n),mainlistItemSelected:{borderRight:"#0095da !important",borderStyle:"groove !important",backgroundColor:"#fff !important",color:"#0095da",fontWeight:"bold"},mainlistItem:{"&:hover":{borderRight:"#0095da !important",borderStyle:"groove !important"},"&:active":{borderRight:"#0095da",borderStyle:"groove"}},mainlist:{backgroundColor:"#fff",color:"#000",textDecoration:"none"},menutab:{root:{textTransform:"none",color:"#fff",fontWeight:t.typography.fontWeightRegular,fontSize:t.typography.pxToRem(15),marginRight:t.spacing(1),"&:focus":{opacity:1}}},copyright:{color:"#cccccc",fontSize:"16px",fontWeight:600,textAlign:"center"}}}),T=[{id:0,label:"게시물 목록",path:"/"},{id:1,label:"소개 입니다",path:"/page-me/"},{id:2,label:"TAG",path:"/page-tag/"}];e.a=function(t){var e=t.children,a=r.data,o=R(),y=i.useState(0),N=y[0],M=y[1];console.log(a);var B=function(t){console.log(t),t&&Object(g.c)(t)};return"undefined"!=typeof window&&i.useMemo(function(){if(""!=location.pathname.split("/")[1]){var t=T.filter(function(t){return t.path=="/"+location.pathname.split("/")[1]+"/"});t.length>0&&M(t[0].id)}else M(0)},[N]),Object(n.d)("div",{className:o.root},Object(n.d)(c.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:a.site.siteMetadata.description},{name:"keywords",content:a.site.siteMetadata.keywords}]}),Object(n.d)(h.a,{smDown:!0},Object(n.d)(l.a,{variant:"permanent",classes:{paper:Object(d.a)(o.drawerPaper)},open:!0},Object(n.d)("div",null,Object(n.d)(g.a,{className:o.mainLogo,to:"/"},Object(n.d)(p.a,{component:"h1",variant:"h5",color:"inherit",noWrap:!0,className:o.title},a.site.siteMetadata.title)),Object(n.d)(s.a,null,Object(n.d)("div",null,Object(n.d)(g.a,{to:"/",className:o.mainlist},Object(n.d)(m.a,{classes:{root:o.mainlistItem,selected:o.mainlistItemSelected},selected:0===N,button:!0},Object(n.d)(f.a,{primary:"게시글 목록"}))),Object(n.d)(g.a,{to:"/page-me/",className:o.mainlist},Object(n.d)(m.a,{classes:{root:o.mainlistItem,selected:o.mainlistItemSelected},selected:1===N,button:!0},Object(n.d)(f.a,{primary:"소개"}))),Object(n.d)(g.a,{to:"/page-tag/",className:o.mainlist},Object(n.d)(m.a,{classes:{root:o.mainlistItem,selected:o.mainlistItemSelected},selected:2===N,button:!0},Object(n.d)(f.a,{primary:"태그"})))))),Object(n.d)("div",{style:{width:300,position:"absolute",bottom:"0px"}},Object(n.d)(u.a,null),Object(n.d)("div",{style:{textAlign:"center"}},Object(n.d)(x.a,null,Object(n.d)(k.a,{avatar:Object(n.d)(w.a,{"aria-label":"recipe"},"C"),action:Object(n.d)(b.a,{"aria-label":"settings"}),title:"Written by @Casternuts",subheader:"일상 기록 및 개발 관련 포스팅"}),Object(n.d)(v.a,{className:o.paperFlex},Object(n.d)(b.a,{style:{float:"left"},"aria-label":"github",href:"https://github.com/casternuts"},Object(n.d)(C.a,null)),Object(n.d)(b.a,{style:{float:"left"},"aria-label":"resume",onClick:function(){return B("/page-me/")}},Object(n.d)(S.a,null)),Object(n.d)("div",{className:o.copyright},"© 2020 casternuts Dev Blog"))))))),Object(n.d)("main",{className:o.content},Object(n.d)(h.a,{mdUp:!0},Object(n.d)("div",{className:o.appBar},Object(n.d)("div",{className:o.appBarHeader},Object(n.d)(b.a,{style:{float:"left"},"aria-label":"github",href:"https://github.com/casternuts"},Object(n.d)(C.a,null)),Object(n.d)(b.a,{style:{float:"right"},"aria-label":"resume",onClick:function(){return B("/page-me/")}},Object(n.d)(S.a,null)),Object(n.d)(p.a,{variant:"h4"},a.site.siteMetadata.title)),Object(n.d)(j.a,{variant:"fullWidth",value:N,onChange:function(t,e){var a=T.filter(function(t){return t.id==e});Object(g.c)(a[0].path)},centered:!0,indicatorColor:"primary"},T.map(function(t){return Object(n.d)(O.a,{className:o.menutab,key:t.id,label:t.label})}))),Object(n.d)(u.a,null)),Object(n.d)("div",null,e)))}},224:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제입니다.",path:"/test-1"},id:"c11840a7-b18b-5eca-b859-98ff2c01deae"}},{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제3입니다.",path:"/test-3"},id:"592efdae-0fcd-5888-8e4d-e978385a62f9"}},{node:{excerpt:"Now we’re writing in Markdown! Pretty nice, huh?This starter has out-of-the-box support for basic Markdown rendering. The  directory is where you put all of your Markdown content in. Gatsby will buil…",frontmatter:{title:"예제2입니다.",path:"/test-2"},id:"518dc0d4-b995-5ad6-8202-4d48eda2d25a"}},{node:{excerpt:"도커로 Create react App을 이미지화 해서 실행 시켜보자본 글은 CRA 2.0 이상으로 생성된 APP 기준으로 설명 합니다.\nhttps://mherman.org/blog/dockerizing-a-react-app/ 을 읽고 나름대로 실습 한 후 정리한 걸 적어 두었습니다.도커를 윈도우에서 쓰기 위해선 Hyper-v 가 설정되어있어야 한다.\n이러…",frontmatter:{title:"도커로 Create react App을 이미지화 해서 실행 시키기",path:"/dockerReactCRA"},id:"b579584a-5b85-5218-9d14-ab5653d9c3ec"}},{node:{excerpt:"Markdown 작성법각종 개발 문서나 ,블로그에 글을 쓰기 위한 Markdown 작성 법을 정리 해 본다.개인적으로 쓸 것 같은것 위주로 적어 두었고 필요할 때마다 업데이트 해야겠다.1. 제목 태그2. 링크 태그 처럼 표시그냥 일반 링크\nhttps://casternuts.github.io/이미지 불러오기\n구글3. 목록첫 번째 목록두 번째 목록세 번째 목…",frontmatter:{title:"마크다운 작성법 정리",path:"/markdownGuide"},id:"5cb18162-458f-503f-aec1-19bda6dca45d"}},{node:{excerpt:"도커 윈도우 설치 법을 알아본다.1. Docker Desktop for Windows 설치도커를 윈도우에서 쓰기 위해선 Hyper-v 가 설정되어있어야 한다.\n이러한 방법은 윈도우10 pro 버전에서 설치 가능하다. 만약 가상화가 지원 되지 않는다면 Docker toolbox를 이용해 설치하는 방법이 있다.Docker 회원가입https://hub.dock…",frontmatter:{title:"도커 윈도우 설치법",path:"/dockerInstallation"},id:"09deb65d-33d2-5545-91d4-ac18a73678ff"}}]},site:{siteMetadata:{title:"Casternuts Log",description:"casternuts의 블로그 입니다."}}}}},245:function(t,e,a){"use strict";var n=a(15),r=a(0),i=a.n(r),o=a(211),c=a(294),d=a(296),l=a(292),s=a(307),p=a(299),u=a(1),b=a(9),m=(a(4),a(64)),f=a(210),g=i.a.forwardRef(function(t,e){var a=t.disableSpacing,n=void 0!==a&&a,r=t.classes,o=t.className,c=Object(b.a)(t,["disableSpacing","classes","className"]);return i.a.createElement("div",Object(u.a)({className:Object(m.a)(r.root,o,!n&&r.spacing),ref:e},c))}),h=Object(f.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(g),j=i.a.forwardRef(function(t,e){var a=t.classes,n=t.className,r=t.component,o=void 0===r?"div":r,c=Object(b.a)(t,["classes","className","component"]);return i.a.createElement(o,Object(u.a)({className:Object(m.a)(a.root,n),ref:e},c))}),O=Object(f.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(j),y=Object(c.a)({card:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}});e.a=function(t){var e=t.data,a=y();return Object(n.d)(p.a,{style:{margin:"10px"},className:a.card},Object(n.d)(O,null,Object(n.d)(d.a,{className:a.title,color:"primary",gutterBottom:!0},e.frontmatter.category),Object(n.d)(d.a,{variant:"h6",component:"h2"},Object(n.d)(o.a,{style:{textDecoration:"none"},to:e.frontmatter.path},e.frontmatter.title)),Object(n.d)(d.a,{variant:"subtitle2",className:a.pos,color:"textSecondary"},e.frontmatter.date),Object(n.d)(l.a,{style:{margin:"10px 0px"}}),Object(n.d)(d.a,{variant:"body2",component:"p"},e.excerpt)),Object(n.d)(h,null,Object(n.d)(s.a,{color:"primary",label:e.frontmatter.tag})))}}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-b33bc3c43243cdb44780.js.map