(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{209:function(t,e,a){"use strict";a.r(e);var n=a(15),r=a(289),i=(a(0),a(222)),o=a(309),l=a(226),c=a(299),d=a(314),s=a(315),p=a(214);e.default=function(){var t=r.data;return Object(n.d)(l.a,null,Object(n.d)(i.a,null,Object(n.d)(o.a,null,Object(n.d)("h1",null,"태그 목록"),Object(n.d)(c.a,null),t.allMarkdownRemark.group.map(function(t){return Object(n.d)(p.a,{key:t.fieldValue,style:{textDecoration:"none"},to:"/page-tag/"+t.fieldValue},Object(n.d)(d.a,{style:{margin:".375rem"},key:t.fieldValue,variant:"outlined",color:"primary",label:t.fieldValue,avatar:Object(n.d)(s.a,null,t.totalCount)}))}))))}},214:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(15),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(63),d=a.n(c);a.d(e,"a",function(){return d.a}),a.d(e,"c",function(){return c.navigate});a(215);var s=i.a.createContext({});function p(t){var e=t.staticQueryData,a=t.data,r=t.query,o=t.render,l=a?a.data:e[r]&&e[r].data;return Object(n.d)(i.a.Fragment,null,l&&o(l),!l&&Object(n.d)("div",null,"Loading (StaticQuery)"))}var u=function(t){var e=t.data,a=t.query,r=t.render,i=t.children;return Object(n.d)(s.Consumer,null,function(t){return Object(n.d)(p,{data:e,query:a,render:r||i,staticQueryData:t})})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},215:function(t,e,a){var n;t.exports=(n=a(219))&&n.default||n},219:function(t,e,a){"use strict";a.r(e);a(95);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(96),c=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},222:function(t,e,a){"use strict";var n=a(216),r=a(15),i=(a(0),Object(n.a)("div",{target:"ehhsji90"})({name:"fsnmsg",styles:"display:block;flex:1;position:relative;padding:1rem;margin-bottom:3rem;background-color:#f1f3f5;"}));e.a=function(t){var e=t.children,a=t.className;return Object(r.d)(i,{className:a},e)}},226:function(t,e,a){"use strict";a(134),a(95);var n=a(15),r=a(227),i=a(0),o=a(221),l=a.n(o),c=a(64),d=a(310),s=a(303),p=a(302),u=a(299),b=a(307),m=a(316),f=a(304),g=a(214),h=a(313),j=a(311),O=a(308),v=a(300),y=a(301),x=a(315),k=a(305),w=a(306),C=a(244),R=a.n(C),S=a(245),N=a.n(S),D=Object(v.a)(function(t){var e,a,n;return{root:{display:"flex"},paperFlex:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:t.spacing(.5)},mainLogo:{padding:"0 2rem",textDecoration:"none",marginTop:"1.75rem",marginBottom:"1.75rem",fontSize:"2rem",lineHeight:"2rem",color:"#212529",display:"block",position:"relative"},toolbar:{paddingRight:24},toolbarIcon:Object.assign({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},t.mixins.toolbar),appBar:{backgroundColor:"#fff",color:"#000"},appBarHeader:{textAlign:"center",fontSize:"33px",padding:"10px"},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawer:(e={},e[t.breakpoints.up("sm")]={width:300,flexShrink:0},e),drawerPaper:{position:"relative",whiteSpace:"nowrap",overflowX:"hidden",width:300,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},drawerPaperClose:(a={overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7)},a[t.breakpoints.up("sm")]={width:t.spacing(9)},a),appBarSpacer:t.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto",paddingTop:"0px",paddingLeft:"0px",backgroundColor:"#f1f3f5"},container:{paddingTop:t.spacing(4),paddingBottom:t.spacing(4)},paper:{padding:t.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},menuButton:(n={marginRight:t.spacing(2)},n[t.breakpoints.up("sm")]={display:"none"},n),mainlistItemSelected:{borderRight:"#0095da !important",borderStyle:"groove !important",backgroundColor:"#fff !important",color:"#0095da",fontWeight:"bold"},mainlistItem:{"&:hover":{borderRight:"#0095da !important",borderStyle:"groove !important"},"&:active":{borderRight:"#0095da",borderStyle:"groove"}},mainlist:{backgroundColor:"#fff",color:"#000",textDecoration:"none"},menutab:{root:{textTransform:"none",color:"#fff",fontWeight:t.typography.fontWeightRegular,fontSize:t.typography.pxToRem(15),marginRight:t.spacing(1),"&:focus":{opacity:1}}},copyright:{color:"#cccccc",fontSize:"16px",fontWeight:600,textAlign:"center"}}}),M=[{id:0,label:"게시물 목록",path:"/"},{id:1,label:"소개 입니다",path:"/page-me/"},{id:2,label:"TAG",path:"/page-tag/"}];e.a=function(t){var e=t.children,a=r.data,o=D(),v=i.useState(0),C=v[0],S=v[1];console.log(a);var I=function(t){console.log(t),t&&Object(g.c)(t)};return"undefined"!=typeof window&&i.useMemo(function(){if(""!=location.pathname.split("/")[1]){var t=M.filter(function(t){return t.path=="/"+location.pathname.split("/")[1]+"/"});t.length>0&&S(t[0].id)}else S(0)},[C]),Object(n.d)("div",{className:o.root},Object(n.d)(l.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:a.site.siteMetadata.description},{name:"keywords",content:a.site.siteMetadata.keywords}]}),Object(n.d)(h.a,{smDown:!0},Object(n.d)(d.a,{variant:"permanent",classes:{paper:Object(c.a)(o.drawerPaper)},open:!0},Object(n.d)("div",null,Object(n.d)(g.a,{className:o.mainLogo,to:"/"},Object(n.d)(p.a,{component:"h1",variant:"h5",color:"inherit",noWrap:!0,className:o.title},a.site.siteMetadata.title)),Object(n.d)(s.a,null,Object(n.d)("div",null,Object(n.d)(g.a,{to:"/",className:o.mainlist},Object(n.d)(m.a,{classes:{root:o.mainlistItem,selected:o.mainlistItemSelected},selected:0===C,button:!0},Object(n.d)(f.a,{primary:"게시글 목록"}))),Object(n.d)(g.a,{to:"/page-me/",className:o.mainlist},Object(n.d)(m.a,{classes:{root:o.mainlistItem,selected:o.mainlistItemSelected},selected:1===C,button:!0},Object(n.d)(f.a,{primary:"소개"}))),Object(n.d)(g.a,{to:"/page-tag/",className:o.mainlist},Object(n.d)(m.a,{classes:{root:o.mainlistItem,selected:o.mainlistItemSelected},selected:2===C,button:!0},Object(n.d)(f.a,{primary:"태그"})))))),Object(n.d)("div",{style:{width:300,position:"absolute",bottom:"0px"}},Object(n.d)(u.a,null),Object(n.d)("div",{style:{textAlign:"center"}},Object(n.d)(k.a,null,Object(n.d)(w.a,{avatar:Object(n.d)(x.a,{"aria-label":"recipe"},"C"),action:Object(n.d)(b.a,{"aria-label":"settings"}),title:"Written by @Casternuts",subheader:"일상 기록 및 개발 관련 포스팅"}),Object(n.d)(y.a,{className:o.paperFlex},Object(n.d)(b.a,{style:{float:"left"},"aria-label":"github",href:"https://github.com/casternuts"},Object(n.d)(R.a,null)),Object(n.d)(b.a,{style:{float:"left"},"aria-label":"resume",onClick:function(){return I("/page-me/")}},Object(n.d)(N.a,null)),Object(n.d)("div",{className:o.copyright},"© 2020 casternuts Dev Blog"))))))),Object(n.d)("main",{className:o.content},Object(n.d)(h.a,{mdUp:!0},Object(n.d)("div",{className:o.appBar},Object(n.d)("div",{className:o.appBarHeader},Object(n.d)(b.a,{style:{float:"left"},"aria-label":"github",href:"https://github.com/casternuts"},Object(n.d)(R.a,null)),Object(n.d)(b.a,{style:{float:"right"},"aria-label":"resume",onClick:function(){return I("/page-me/")}},Object(n.d)(N.a,null)),Object(n.d)(p.a,{variant:"h4"},a.site.siteMetadata.title)),Object(n.d)(j.a,{variant:"fullWidth",value:C,onChange:function(t,e){var a=M.filter(function(t){return t.id==e});Object(g.c)(a[0].path)},centered:!0,indicatorColor:"primary"},M.map(function(t){return Object(n.d)(O.a,{className:o.menutab,key:t.id,label:t.label})}))),Object(n.d)(u.a,null)),Object(n.d)("div",null,e)))}},227:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"도커 윈도우 설치 법을 알아본다.1. Docker Desktop for Windows 설치도커를 윈도우에서 쓰기 위해선 Hyper-v 가 설정되어있어야 한다.\n이러한 방법은 윈도우10 pro 버전에서 설치 가능하다. 만약 가상화가 지원 되지 않는다면 Docker toolbox를 이용해 설치하는 방법이 있다.Docker 회원가입https://hub.dock…",frontmatter:{title:"도커 윈도우 설치법",path:"/dockerInstallation"},id:"06078b31-62f9-5a24-9856-382508f5999a"}},{node:{excerpt:"도커로 Create react App을 이미지화 해서 실행 시켜보자본 글은 CRA 2.0 이상으로 생성된 APP 기준으로 설명 합니다.\nhttps://mherman.org/blog/dockerizing-a-react-app/ 을 읽고 나름대로 실습 한 후 정리한 걸 적어 두었습니다.도커를 윈도우에서 쓰기 위해선 Hyper-v 가 설정되어있어야 한다.\n이러…",frontmatter:{title:"도커로 Create react App을 이미지화 해서 실행 시키기",path:"/dockerReactCRA"},id:"314a9695-dd04-58b5-84b5-525ecd9e5551"}},{node:{excerpt:"Markdown 작성법각종 개발 문서나 ,블로그에 글을 쓰기 위한 Markdown 작성 법을 정리 해 본다.개인적으로 쓸 것 같은것 위주로 적어 두었고 필요할 때마다 업데이트 해야겠다.1. 제목 태그2. 링크 태그 처럼 표시그냥 일반 링크\nhttps://casternuts.github.io/이미지 불러오기\n구글3. 목록첫 번째 목록두 번째 목록세 번째 목…",frontmatter:{title:"마크다운 작성법 정리",path:"/markdownGuide"},id:"6e9f3548-b87e-5ad9-afd9-4521c5511fe3"}}]},site:{siteMetadata:{title:"Casternuts Log",description:"casternuts의 블로그 입니다."}}}}},289:function(t){t.exports={data:{allMarkdownRemark:{group:[{totalCount:2,fieldValue:"Docker"},{totalCount:1,fieldValue:"마크다운"}],totalCount:3}}}}}]);
//# sourceMappingURL=component---src-pages-page-tag-tsx-bdaa29ffcce34361a491.js.map