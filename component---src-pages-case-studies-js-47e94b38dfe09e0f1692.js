(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{IsqK:function(e,t,a){"use strict";var r=a("k1TG"),n=a("aXB2"),o=a("q1tI"),i=a("iuhU"),l=a("H2TA"),s=a("ofer"),c=a("MquD"),m=o.forwardRef((function(e,t){var a=e.children,l=e.classes,m=e.className,d=e.disableTypography,u=void 0!==d&&d,f=e.inset,p=void 0!==f&&f,g=e.primary,h=e.primaryTypographyProps,b=e.secondary,v=e.secondaryTypographyProps,y=Object(n.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),E=o.useContext(c.a).dense,j=null!=g?g:a;null==j||j.type===s.a||u||(j=o.createElement(s.a,Object(r.a)({variant:E?"body2":"body1",className:l.primary,component:"span",display:"block"},h),j));var w=b;return null==w||w.type===s.a||u||(w=o.createElement(s.a,Object(r.a)({variant:"body2",className:l.secondary,color:"textSecondary",display:"block"},v),w)),o.createElement("div",Object(r.a)({className:Object(i.a)(l.root,m,E&&l.dense,p&&l.inset,j&&w&&l.multiline),ref:t},y),j,w)}));t.a=Object(l.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(m)},LWCf:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I})),a.d(t,"pageQuery",(function(){return S}));var r=a("q1tI"),n=a.n(r),o=a("Bl7J"),i=a("eD//"),l=a("tVbE"),s=a("wb2y"),c=a("IsqK"),m=a("k1TG"),d=a("aXB2"),u=a("iuhU"),f=a("H2TA"),p=a("MquD"),g=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=Object(d.a)(e,["classes","className"]),i=r.useContext(p.a);return r.createElement("div",Object(m.a)({className:Object(u.a)(a.root,n,"flex-start"===i.alignItems&&a.alignItemsFlexStart),ref:t},o))})),h=Object(f.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(g),b=a("HR5l");var v,y,E=(v=r.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),(y=function(e,t){return n.a.createElement(b.a,Object(m.a)({ref:t},e),v)}).muiName=b.a.muiName,n.a.memo(n.a.forwardRef(y)));var j=r.forwardRef((function(e,t){var a=e.alt,n=e.children,o=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,c=e.imgProps,f=e.sizes,p=e.src,g=e.srcSet,h=e.variant,b=void 0===h?"circle":h,v=Object(d.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,j=function(e){var t=e.src,a=e.srcSet,n=r.useState(!1),o=n[0],i=n[1];return r.useEffect((function(){if(t||a){i(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=a,r.onload=function(){e&&i("loaded")},r.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,a]),o}({src:p,srcSet:g}),w=p||g,O=w&&"error"!==j;return y=O?r.createElement("img",Object(m.a)({alt:a,src:p,srcSet:g,sizes:f,className:o.img},c)):null!=n?n:w&&a?a[0]:r.createElement(E,{className:o.fallback}),r.createElement(s,Object(m.a)({className:Object(u.a)(o.root,o.system,o[b],i,!O&&o.colorDefault),ref:t},v),y)})),w=Object(f.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(j),O=a("ofer"),x=a("JB2W"),k=a("Z3vd");function I(e){var t=e.data.allMarkdownRemark.edges.map((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{alignItems:"flex-start"},n.a.createElement(h,null,n.a.createElement(w,{variant:"square",alt:"CS",src:e.node.frontmatter.linkImage.publicURL})),n.a.createElement(c.a,{secondary:n.a.createElement(k.a,{size:"small"},n.a.createElement(x.a,{to:e.node.fields.slug},e.node.frontmatter.title))},n.a.createElement(O.a,{variant:"body1"},e.node.frontmatter.description))),n.a.createElement(s.a,{variant:"inset",component:"li"}))}));return n.a.createElement(o.a,null,n.a.createElement(O.a,{variant:"h3"},"Case Studies"),n.a.createElement(i.a,null,t))}var S="761197021"},wb2y:function(e,t,a){"use strict";var r=a("k1TG"),n=a("aXB2"),o=a("q1tI"),i=a("iuhU"),l=a("H2TA"),s=a("ye/S"),c=o.forwardRef((function(e,t){var a=e.absolute,l=void 0!==a&&a,s=e.classes,c=e.className,m=e.component,d=void 0===m?"hr":m,u=e.flexItem,f=void 0!==u&&u,p=e.light,g=void 0!==p&&p,h=e.orientation,b=void 0===h?"horizontal":h,v=e.role,y=void 0===v?"hr"!==d?"separator":void 0:v,E=e.variant,j=void 0===E?"fullWidth":E,w=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(d,Object(r.a)({className:Object(i.a)(s.root,c,"fullWidth"!==j&&s[j],l&&s.absolute,f&&s.flexItem,g&&s.light,"vertical"===b&&s.vertical),role:y,ref:t},w))}));t.a=Object(l.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(c)}}]);
//# sourceMappingURL=component---src-pages-case-studies-js-47e94b38dfe09e0f1692.js.map