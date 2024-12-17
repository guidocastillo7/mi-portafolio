(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{406:function(e,t,r){"use strict";r.d(t,{q:function(){return E}});var a=r(7294),n=r(3967),o=r.n(n),u=r(5893);function createContextScope(e,t=[]){let r=[];function createContext3(t,n){let o=a.createContext(n),i=r.length;r=[...r,n];let Provider=t=>{let{scope:r,children:n,...l}=t,s=r?.[e]?.[i]||o,d=a.useMemo(()=>l,Object.values(l));return(0,u.jsx)(s.Provider,{value:d,children:n})};return Provider.displayName=t+"Provider",[Provider,function(r,u){let l=u?.[e]?.[i]||o,s=a.useContext(l);if(s)return s;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]}let createScope=()=>{let t=r.map(e=>a.createContext(e));return function(r){let n=r?.[e]||t;return a.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return createScope.scopeName=e,[createContext3,composeContextScopes(createScope,...t)]}function composeContextScopes(...e){let t=e[0];if(1===e.length)return t;let createScope=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:a})=>{let n=r(e),o=n[`__scope${a}`];return{...t,...o}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return createScope.scopeName=t.scopeName,createScope}var i=r(9698),l=r(9981);r(3935);var s=r(4222),d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=a.forwardRef((e,r)=>{let{asChild:a,...n}=e,o=a?s.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(o,{...n,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),f="Avatar",[c,p]=createContextScope(f),[v,m]=c(f),h=a.forwardRef((e,t)=>{let{__scopeAvatar:r,...n}=e,[o,i]=a.useState("idle");return(0,u.jsx)(v,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i,children:(0,u.jsx)(d.span,{...n,ref:t})})});h.displayName=f;var y="AvatarImage",g=a.forwardRef((e,t)=>{let{__scopeAvatar:r,src:a,onLoadingStatusChange:n=()=>{},...o}=e,s=m(y,r),f=useImageLoadingStatus(a,o.referrerPolicy),c=(0,i.W)(e=>{n(e),s.onImageLoadingStatusChange(e)});return(0,l.b)(()=>{"idle"!==f&&c(f)},[f,c]),"loaded"===f?(0,u.jsx)(d.img,{...o,ref:t,src:a}):null});g.displayName=y;var b="AvatarFallback",w=a.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:n,...o}=e,i=m(b,r),[l,s]=a.useState(void 0===n);return a.useEffect(()=>{if(void 0!==n){let e=window.setTimeout(()=>s(!0),n);return()=>window.clearTimeout(e)}},[n]),l&&"loaded"!==i.imageLoadingStatus?(0,u.jsx)(d.span,{...o,ref:t}):null});function useImageLoadingStatus(e,t){let[r,n]=a.useState("idle");return(0,l.b)(()=>{if(!e){n("error");return}let r=!0,a=new window.Image,updateStatus=e=>()=>{r&&n(e)};return n("loading"),a.onload=updateStatus("loaded"),a.onerror=updateStatus("error"),a.src=e,t&&(a.referrerPolicy=t),()=>{r=!1}},[e,t]),r}w.displayName=b;var k=r(8291),x=r(6679),C=r(8219);let M={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:"3",responsive:!0},variant:{type:"enum",values:["solid","soft"],default:"soft"},color:{...k.m,default:void 0},highContrast:x.B,radius:C.C,fallback:{type:"ReactNode",default:void 0,required:!0}};var S=r(3843),N=r(6776);let E=a.forwardRef((e,t)=>{let{rest:r,...n}=(0,S.FY)(e),{className:u,style:i,size:l=M.size.default,variant:s=M.variant.default,color:d=M.color.default,highContrast:f=M.highContrast.default,radius:c=M.radius.default,fallback:p,...v}=r,[m,y]=a.useState("idle");return a.createElement(h,{"data-accent-color":d,"data-radius":c,className:o()("rt-AvatarRoot",u,(0,N.g)(l,"rt-r-size"),`rt-variant-${s}`,{"rt-high-contrast":f},(0,S.we)(n)),style:i},"idle"===m||"loading"===m?a.createElement("span",{className:"rt-AvatarFallback"}):null,"error"===m?a.createElement(w,{className:o()("rt-AvatarFallback",{"rt-one-letter":"string"==typeof p&&1===p.length,"rt-two-letters":"string"==typeof p&&2===p.length}),delayMs:0},p):null,a.createElement(g,{ref:t,className:"rt-AvatarImage",...v,onLoadingStatusChange:e=>{var t;null===(t=v.onLoadingStatusChange)||void 0===t||t.call(v,e),y(e)}}))});E.displayName="Avatar"},4377:function(e,t,r){"use strict";r.d(t,{C:function(){return c}});var a=r(7294),n=r(3967),o=r.n(n),u=r(8291),i=r(6679),l=r(8219);let s={size:{type:"enum",values:["1","2"],default:"1",responsive:!0},variant:{type:"enum",values:["solid","soft","surface","outline"],default:"soft"},color:{...u.m,default:void 0},highContrast:i.B,radius:l.C};var d=r(3843),f=r(6776);let c=a.forwardRef((e,t)=>{let{rest:r,...n}=(0,d.FY)(e),{className:u,size:i=s.size.default,variant:l=s.variant.default,color:c=s.color.default,highContrast:p=s.highContrast.default,radius:v=s.radius.default,...m}=r;return a.createElement("span",{"data-accent-color":c,"data-radius":v,...m,ref:t,className:o()("rt-Badge",u,(0,f.g)(i,"rt-r-size"),`rt-variant-${l}`,{"rt-high-contrast":p},(0,d.we)(n))})});c.displayName="Badge"},3725:function(e,t,r){"use strict";r.d(t,{x:function(){return f}});var a=r(7294),n=r(3967),o=r.n(n),u=r(4222);let i={display:{type:"enum",values:["none","inline","inline-block","block"],default:void 0,responsive:!0}};var l=r(3843),s=r(134),d=r(6776);let f=a.forwardRef((e,t)=>{let{rest:r,...n}=(0,l.FY)(e),{rest:f,...c}=(0,s.F8)(r),{className:p,asChild:v,display:m=i.display.default,...h}=f,y=v?u.g7:"div";return a.createElement(y,{...h,ref:t,className:o()("rt-Box",p,(0,d.g)(m,"rt-r-display"),(0,s.yt)(c),(0,l.we)(n))})});f.displayName="Box"},4152:function(e,t,r){"use strict";r.d(t,{z:function(){return v}});var a=r(7294),n=r(3967),o=r.n(n),u=r(4222),i=r(8291),l=r(6679),s=r(8219);let d={size:{type:"enum",values:["1","2","3","4"],default:"2",responsive:!0},variant:{type:"enum",values:["classic","solid","soft","surface","outline","ghost"],default:"solid"},color:i.m,highContrast:l.B,radius:s.C};var f=r(3843),c=r(6776);let p=a.forwardRef((e,t)=>{let{rest:r,...n}=(0,f.FY)(e),{className:i,asChild:l=!1,size:s=d.size.default,variant:p=d.variant.default,color:v=d.color.default,highContrast:m=d.highContrast.default,radius:h=d.radius.default,...y}=r,g=l?u.g7:"button";return a.createElement(g,{"data-disabled":y.disabled||void 0,"data-accent-color":v,"data-radius":h,...y,ref:t,className:o()("rt-reset","rt-BaseButton",i,(0,c.g)(s,"rt-r-size"),`rt-variant-${p}`,{"rt-high-contrast":m},(0,f.we)(n))})});p.displayName="BaseButton";let v=a.forwardRef((e,t)=>a.createElement(p,{...e,ref:t,className:o()("rt-Button",e.className)}));v.displayName="Button"},5877:function(e,t,r){"use strict";r.d(t,{k:function(){return f}});var a=r(7294),n=r(3967),o=r.n(n),u=r(4222);let i={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};var l=r(3843),s=r(134),d=r(6776);let f=a.forwardRef((e,t)=>{let{rest:r,...n}=(0,l.FY)(e),{rest:f,...c}=(0,s.F8)(r),{className:p,asChild:v,display:m=i.display.default,direction:h=i.direction.default,align:y=i.align.default,justify:g=i.justify.default,wrap:b=i.wrap.default,gap:w=i.gap.default,...k}=f,x=v?u.g7:"div";return a.createElement(x,{...k,ref:t,className:o()("rt-Flex",p,(0,d.g)(m,"rt-r-display"),(0,d.g)(h,"rt-r-fd"),(0,d.g)(y,"rt-r-ai"),(0,d.g)(g,"rt-r-jc",{between:"space-between"}),(0,d.g)(b,"rt-r-fw"),(0,d.g)(w,"rt-r-gap"),(0,s.yt)(c),(0,l.we)(n))})});f.displayName="Flex"},1042:function(e,t,r){"use strict";r.d(t,{X:function(){return m}});var a=r(7294),n=r(3967),o=r.n(n),u=r(4222),i=r(3416),l=r(617),s=r(7361),d=r(8291),f=r(6679);i.b.values;let c={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:"6",responsive:!0},weight:{...i.b,default:"bold"},align:l.L,trim:s.a,color:d.m,highContrast:f.B};var p=r(3843),v=r(6776);let m=a.forwardRef((e,t)=>{let{rest:r,...n}=(0,p.FY)(e),{children:i,className:l,asChild:s=!1,as:d="h1",size:f=c.size.default,weight:m=c.weight.default,align:h=c.align.default,trim:y=c.trim.default,color:g=c.color.default,highContrast:b=c.highContrast.default,...w}=r;return a.createElement(u.g7,{"data-accent-color":g,...w,ref:t,className:o()("rt-Heading",l,(0,v.g)(f,"rt-r-size"),(0,v.g)(m,"rt-r-weight"),(0,v.g)(h,"rt-r-ta"),(0,v.g)(y,"rt-r-lt"),{"rt-high-contrast":b},(0,p.we)(n))},s?i:a.createElement(d,null,i))});m.displayName="Heading"},2627:function(e,t,r){"use strict";r.d(t,{r:function(){return s}});var a=r(7294),n=r(3967),o=r.n(n),u=r(6445),i=r(3356);let l={size:i.S.size,weight:i.S.weight,trim:i.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:i.S.color,highContrast:i.S.highContrast},s=a.forwardRef((e,t)=>{let{children:r,className:n,asChild:i=!1,underline:s=l.underline.default,...d}=e;return a.createElement(u.x,{...d,ref:t,asChild:!0,className:o()("rt-reset","rt-Link",n,`rt-underline-${s}`)},i?r:a.createElement("a",null,r))});s.displayName="Link"},5924:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var a=r(7294),n=r(3967),o=r.n(n);r(3935);var u=r(4222),i=r(5893),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=a.forwardRef((e,r)=>{let{asChild:a,...n}=e,o=a?u.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(o,{...n,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),s="horizontal",d=["horizontal","vertical"],f=a.forwardRef((e,t)=>{let{decorative:r,orientation:a=s,...n}=e,o=isValidOrientation(a)?a:s;return(0,i.jsx)(l.div,{"data-orientation":o,...r?{role:"none"}:{"aria-orientation":"vertical"===o?o:void 0,role:"separator"},...n,ref:t})});function isValidOrientation(e){return d.includes(e)}f.displayName="Separator";var c=r(8291);let p={size:{type:"enum",values:["1","2","3","4"],default:"1",responsive:!0},color:{...c.m,default:"gray"}};var v=r(3843),m=r(6776);let h=a.forwardRef((e,t)=>{let{rest:r,...n}=(0,v.FY)(e),{className:u,size:i=p.size.default,color:l=p.color.default,...s}=r;return a.createElement(f,{"data-accent-color":l,...s,ref:t,className:o()("rt-Separator",u,(0,m.g)(i,"rt-r-size"),(0,v.we)(n))})});h.displayName="Separator"},6293:function(e,t,r){"use strict";r.d(t,{c:function(){return u}});var a=r(7294),n=r(3967),o=r.n(n);let u=a.forwardRef((e,t)=>a.createElement("strong",{...e,ref:t,className:o()("rt-Strong",e.className)}));u.displayName="Strong"},6445:function(e,t,r){"use strict";r.d(t,{x:function(){return d}});var a=r(7294),n=r(3967),o=r.n(n),u=r(4222),i=r(3356),l=r(3843),s=r(6776);let d=a.forwardRef((e,t)=>{let{rest:r,...n}=(0,l.FY)(e),{children:d,className:f,asChild:c=!1,as:p="span",size:v=i.S.size.default,weight:m=i.S.weight.default,align:h=i.S.align.default,trim:y=i.S.trim.default,color:g=i.S.color.default,highContrast:b=i.S.highContrast.default,...w}=r;return a.createElement(u.g7,{"data-accent-color":g,...w,ref:t,className:o()("rt-Text",f,(0,s.g)(v,"rt-r-size"),(0,s.g)(m,"rt-r-weight"),(0,s.g)(h,"rt-r-ta"),(0,s.g)(y,"rt-r-lt"),{"rt-high-contrast":b},(0,l.we)(n))},c?d:a.createElement(p,null,d))});d.displayName="Text"},3356:function(e,t,r){"use strict";r.d(t,{S:function(){return l}});var a=r(3416),n=r(617),o=r(7361),u=r(8291),i=r(6679);let l={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0},weight:a.b,align:n.L,trim:o.a,color:u.m,highContrast:i.B}},6776:function(e,t,r){"use strict";function withBreakpoints(e,t="",r){var a,n,o,u;let i=[];if("object"==typeof e){for(let o of Object.keys(e))if(o in e){let u=null===(a=e[o])||void 0===a?void 0:a.toString(),l=null==u?void 0:u.startsWith("-"),s=""===t?"":"-",d=l?`-${t}`:t,f=l?null==u?void 0:u.substring(1):u;if(void 0===f)continue;let c=null!==(n=null==r?void 0:r[f])&&void 0!==n?n:f,p="initial"===o?`${d}${s}${c}`:`${o}:${d}${s}${c}`;i.push(p)}}if("string"==typeof e){let a=e.startsWith("-"),n=""===t?"":"-",u=a?`-${t}`:t,l=a?e.substring(1):e,s=null!==(o=null==r?void 0:r[l])&&void 0!==o?o:l;i.push(`${u}${n}${s}`)}if("boolean"==typeof e){let a=""===t?"":"-",n=e.toString(),o=null!==(u=null==r?void 0:r[n])&&void 0!==u?u:n;i.push(`${t}${a}${o}`)}return i.join(" ")}r.d(t,{g:function(){return withBreakpoints}})},8291:function(e,t,r){"use strict";r.d(t,{m:function(){return n}});var a=r(269);let n={type:"enum",values:a.yT.accentColor.values,default:void 0}},6679:function(e,t,r){"use strict";r.d(t,{B:function(){return a}});let a={type:"boolean",default:void 0}},134:function(e,t,r){"use strict";r.d(t,{F8:function(){return extractLayoutProps},yt:function(){return withLayoutProps}});var a=r(6776);let n=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=i.p.default,px:r=i.px.default,py:a=i.py.default,pt:n=i.pt.default,pr:o=i.pr.default,pb:u=i.pb.default,pl:l=i.pl.default,...s}=e;return{p:t,px:r,py:a,pt:n,pr:o,pb:u,pl:l,rest:s}}function withPaddingProps(e){return[(0,a.g)(e.p,"rt-r-p"),(0,a.g)(e.px,"rt-r-px"),(0,a.g)(e.py,"rt-r-py"),(0,a.g)(e.pt,"rt-r-pt"),(0,a.g)(e.pr,"rt-r-pr"),(0,a.g)(e.pb,"rt-r-pb"),(0,a.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let o=["auto","0","50%","100%"],u=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],i={p:{type:"enum",values:n,default:void 0,responsive:!0},px:{type:"enum",values:n,default:void 0,responsive:!0},py:{type:"enum",values:n,default:void 0,responsive:!0},pt:{type:"enum",values:n,default:void 0,responsive:!0},pr:{type:"enum",values:n,default:void 0,responsive:!0},pb:{type:"enum",values:n,default:void 0,responsive:!0},pl:{type:"enum",values:n,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:o,default:void 0,responsive:!0},top:{type:"enum",values:o,default:void 0,responsive:!0},right:{type:"enum",values:o,default:void 0,responsive:!0},bottom:{type:"enum",values:o,default:void 0,responsive:!0},left:{type:"enum",values:o,default:void 0,responsive:!0},width:{type:"enum",values:u,default:void 0,responsive:!0},height:{type:"enum",values:u,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...r}=extractPaddingProps(e),{position:a=i.position.default,width:n=i.width.default,height:o=i.height.default,inset:u=i.inset.default,top:l=i.top.default,bottom:s=i.bottom.default,left:d=i.left.default,right:f=i.right.default,shrink:c=i.shrink.default,grow:p=i.grow.default,...v}=t;return{...r,position:a,width:n,height:o,inset:u,top:l,bottom:s,left:d,right:f,shrink:c,grow:p,rest:v}}function withLayoutProps(e){return[withPaddingProps(e),(0,a.g)(e.position,"rt-r-position"),(0,a.g)(e.shrink,"rt-r-fs"),(0,a.g)(e.grow,"rt-r-fg"),(0,a.g)(e.width,"rt-r-w"),(0,a.g)(e.height,"rt-r-h"),(0,a.g)(e.inset,"rt-r-inset"),(0,a.g)(e.top,"rt-r-top"),(0,a.g)(e.bottom,"rt-r-bottom"),(0,a.g)(e.left,"rt-r-left"),(0,a.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}},7361:function(e,t,r){"use strict";r.d(t,{a:function(){return a}});let a={type:"enum",values:["normal","start","end","both"],default:void 0,responsive:!0}},3843:function(e,t,r){"use strict";r.d(t,{FY:function(){return extractMarginProps},we:function(){return withMarginProps}});var a=r(6776);let n=["auto","0","1","2","3","4","5","6","7","8","9","-1","-2","-3","-4","-5","-6","-7","-8","-9"],o={m:{type:"enum",values:n,default:void 0,responsive:!0},mx:{type:"enum",values:n,default:void 0,responsive:!0},my:{type:"enum",values:n,default:void 0,responsive:!0},mt:{type:"enum",values:n,default:void 0,responsive:!0},mr:{type:"enum",values:n,default:void 0,responsive:!0},mb:{type:"enum",values:n,default:void 0,responsive:!0},ml:{type:"enum",values:n,default:void 0,responsive:!0}};function extractMarginProps(e){let{m:t=o.m.default,mx:r=o.mx.default,my:a=o.my.default,mt:n=o.mt.default,mr:u=o.mr.default,mb:i=o.mb.default,ml:l=o.ml.default,...s}=e;return{m:t,mx:r,my:a,mt:n,mr:u,mb:i,ml:l,rest:s}}function withMarginProps(e){return[(0,a.g)(e.m,"rt-r-m"),(0,a.g)(e.mx,"rt-r-mx"),(0,a.g)(e.my,"rt-r-my"),(0,a.g)(e.mt,"rt-r-mt"),(0,a.g)(e.mr,"rt-r-mr"),(0,a.g)(e.mb,"rt-r-mb"),(0,a.g)(e.ml,"rt-r-ml")].filter(Boolean).join(" ")}},8219:function(e,t,r){"use strict";r.d(t,{C:function(){return n}});var a=r(269);let n={type:"enum",values:a.yT.radius.values,default:void 0}},617:function(e,t,r){"use strict";r.d(t,{L:function(){return a}});let a={type:"enum",values:["left","center","right"],default:void 0,responsive:!0}},3416:function(e,t,r){"use strict";r.d(t,{b:function(){return a}});let a={type:"enum",values:["light","regular","medium","bold"],default:void 0,responsive:!0}},4297:function(e,t,r){"use strict";r.d(t,{Z:function(){return createLucideIcon}});var a=r(7294),n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),createLucideIcon=(e,t)=>{let r=(0,a.forwardRef)(({color:r="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:i,className:l="",children:s,...d},f)=>(0,a.createElement)("svg",{ref:f,...n,width:o,height:o,stroke:r,strokeWidth:i?24*Number(u)/Number(o):u,className:["lucide",`lucide-${toKebabCase(e)}`,l].join(" "),...d},[...t.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(s)?s:[s]]));return r.displayName=`${e}`,r}},9819:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]])},2841:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]])},5513:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("DatabaseBackup",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]])},6033:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("FileBadge",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]])},3766:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]])},9162:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])},1787:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]])},9560:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]])},6953:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},4976:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},4463:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},9525:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},4936:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(4297);/**
 * @license lucide-react v0.314.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]])},7498:function(e,t){"use strict";var r,a;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return n},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return d}});let n="refresh",o="navigate",u="restore",i="server-patch",l="prefetch",s="fast-refresh",d="server-action";(a=r||(r={})).AUTO="auto",a.FULL="full",a.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,a){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let a=r(8754),n=a._(r(7294)),o=r(4450),u=r(2227),i=r(4364),l=r(109),s=r(3607),d=r(1823),f=r(9031),c=r(920),p=r(30),v=r(7192),m=r(7498),h=new Set;function prefetch(e,t,r,a,n,o){if(!o&&!(0,u.isLocalURL)(t))return;if(!a.bypassPrefetchedCheck){let n=void 0!==a.locale?a.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+n;if(h.has(o))return;h.add(o)}let i=o?e.prefetch(t,n):e.prefetch(t,r,a);Promise.resolve(i).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,r,a,o,i,l,s,d,f){let{nodeName:c}=e.currentTarget,p="A"===c.toUpperCase();if(p&&(isModifiedEvent(e)||!d&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](r,a,{shallow:i,locale:s,scroll:e}):t[o?"replace":"push"](a||r,{forceOptimisticNavigation:!f,scroll:e})};d?n.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let y=n.default.forwardRef(function(e,t){let r,a;let{href:u,as:i,children:h,prefetch:y=null,passHref:g,replace:b,shallow:w,scroll:k,locale:x,onClick:C,onMouseEnter:M,onTouchStart:S,legacyBehavior:N=!1,...E}=e;r=h,N&&("string"==typeof r||"number"==typeof r)&&(r=n.default.createElement("a",null,r));let P=n.default.useContext(d.RouterContext),j=n.default.useContext(f.AppRouterContext),_=null!=P?P:j,L=!P,R=!1!==y,O=null===y?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:Z,as:z}=n.default.useMemo(()=>{if(!P){let e=formatStringOrUrl(u);return{href:e,as:i?formatStringOrUrl(i):e}}let[e,t]=(0,o.resolveHref)(P,u,!0);return{href:e,as:i?(0,o.resolveHref)(P,i):t||e}},[P,u,i]),A=n.default.useRef(Z),T=n.default.useRef(z);N&&(a=n.default.Children.only(r));let $=N?a&&"object"==typeof a&&a.ref:t,[I,B,F]=(0,c.useIntersection)({rootMargin:"200px"}),H=n.default.useCallback(e=>{(T.current!==z||A.current!==Z)&&(F(),T.current=z,A.current=Z),I(e),$&&("function"==typeof $?$(e):"object"==typeof $&&($.current=e))},[z,$,Z,F,I]);n.default.useEffect(()=>{_&&B&&R&&prefetch(_,Z,z,{locale:x},{kind:O},L)},[z,Z,B,x,R,null==P?void 0:P.locale,_,L,O]);let q={ref:H,onClick(e){N||"function"!=typeof C||C(e),N&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),_&&!e.defaultPrevented&&linkClicked(e,_,Z,z,b,w,k,x,L,R)},onMouseEnter(e){N||"function"!=typeof M||M(e),N&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),_&&(R||!L)&&prefetch(_,Z,z,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:O},L)},onTouchStart(e){N||"function"!=typeof S||S(e),N&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),_&&(R||!L)&&prefetch(_,Z,z,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:O},L)}};if((0,l.isAbsoluteUrl)(z))q.href=z;else if(!N||g||"a"===a.type&&!("href"in a.props)){let e=void 0!==x?x:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&(0,p.getDomainLocale)(z,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);q.href=t||(0,v.addBasePath)((0,s.addLocale)(z,e,null==P?void 0:P.defaultLocale))}return N?n.default.cloneElement(a,q):n.default.createElement("a",{...E,...q},r)}),g=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let a=r(7294),n=r(3436),o="function"==typeof IntersectionObserver,u=new Map,i=[];function createObserver(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},a=i.find(e=>e.root===r.root&&e.margin===r.margin);if(a&&(t=u.get(a)))return t;let n=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:n},i.push(r),u.set(r,t),t}function observe(e,t,r){let{id:a,observer:n,elements:o}=createObserver(r);return o.set(e,t),n.observe(e),function(){if(o.delete(e),n.unobserve(e),0===o.size){n.disconnect(),u.delete(a);let e=i.findIndex(e=>e.root===a.root&&e.margin===a.margin);e>-1&&i.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:u}=e,i=u||!o,[l,s]=(0,a.useState)(!1),d=(0,a.useRef)(null),f=(0,a.useCallback)(e=>{d.current=e},[]);(0,a.useEffect)(()=>{if(o){if(i||l)return;let e=d.current;if(e&&e.tagName){let a=observe(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return a}}else if(!l){let e=(0,n.requestIdleCallback)(()=>s(!0));return()=>(0,n.cancelIdleCallback)(e)}},[i,r,t,l,d.current]);let c=(0,a.useCallback)(()=>{s(!1)},[]);return[f,l,c]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,r){e.exports=r(9201)},1664:function(e,t,r){e.exports=r(5170)}}]);