import{u as ft,a as b,b as F,s as te,n as B,c as rt,p as Y,g as bt,f as wt,_ as ot,l as ne,o as Ae,d as _,e,P as _t,h as kt,i as vt,j as V,k as y,m as yt,q as ve,r as $t,t as Ct,v as xt,w as ye,M as q,x as G,y as N,z as K,S as w,I as $e,T as St,F as Mt,A as oe,B as x,C as X,D as ce,E as de,G as Ot,H as Ft,J as zt,K as Pe,L as at,N as Rt,O as Tt,Q as It,R as pe,U as fe,V as be,W as ze,X as He,Y as Ce,Z as we,$ as O,a0 as R,a1 as Bt,a2 as A,a3 as J,a4 as ue,a5 as Et,a6 as Lt,a7 as Re,a8 as W,a9 as At,aa as xe,ab as Se,ac as ae,ad as De,ae as lt,af as j,ag as se,ah as je,ai as re,aj as Pt,ak as Ht,al as Ve,am as L,an as Dt,ao as jt,ap as g,aq as Vt,ar as Nt,as as Ut,at as Wt,au as qt,av as Gt,aw as Kt,ax as it,ay as st,az as Xt,aA as ct,aB as $,aC as Te,aD as Jt,aE as Yt,aF as Qt,aG as Zt,aH as Ke,aI as Xe,aJ as Je,aK as en,aL as tn,aM as nn,aN as rn,aO as on,aP as E,aQ as an,aR as P,aS as ln,aT as sn,aU as cn,aV as un,aW as dn,aX as hn,aY as gn,aZ as mn,a_ as Me,a$ as pn,b0 as fn,b1 as Ye,b2 as bn,b3 as wn,b4 as _n,b5 as Qe,b6 as kn,b7 as vn,b8 as yn,b9 as $n,ba as Cn,bb as xn,bc as Sn,bd as Mn,be as On,bf as Ee,bg as Fn,bh as zn,bi as Rn,bj as Tn,bk as In,bl as Bn,bm as En,bn as Ln,bo as An,bp as Pn,bq as Hn,br as Dn,bs as jn,bt as Vn,bu as Nn}from"./index.db1e60aa.js";import{u as Un,B as ut,a as dt,F as Wn,b as qn,I as Gn,c as Kn}from"./index.3ad130df.js";import{u as T,r as Xn,a as Jn,R as Yn}from"./index.27e4df2d.js";import{F as Qn,M as Ne}from"./FolderTree.c93f5d73.js";import{A as Zn,F as ht,B as er,T as tr,a as nr}from"./index.7ec66d8f.js";function ke(t){return t==null||t===""}function rr(t){return t==null}async function or(t,n){let r="/downloads/dolcecasa";const o=await rt.post(t,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.getGlobalOption",params:["token:"+n]});return console.log(o),o.status===200&&(ke(o.data.result.dir)||(r=o.data.result.dir),r=r.endsWith("/")?r.slice(0,-1):r),r}const ar=()=>{const{rawLinks:t}=ft(),n=b(),{pathname:r}=F();return{batchDownloadSelected:()=>{t(!0).forEach(l=>{window.open(l,"_blank")})},sendToAria2:async()=>{const o=te(),l=async(s,a)=>{var c;if(a.is_dir){const u=await wt(Y(r(),s,a.name),ot());if(u.code!==200)return u.message;const d=[];for(const m of(c=u.data.content)!=null?c:[]){const k=await l(Y(s,a.name),m);if(typeof k=="string")return k;d.push(...k)}return d}else return[{path:Y(s,a.name),dir:s,url:bt(Y(r(),s),a,"direct",!0),name:a.name}]},{aria2_rpc_url:i,aria2_rpc_secret:h}=ne;if(!i){B.warning(n("home.toolbar.aria2_not_set"));return}try{let s="/downloads/dolcecasa";s=await or(i,h);let a=!1;B.info(`${n("home.package_download.fetching_struct")}`);for(const c of o){const u=await l("",c);if(typeof u!="object"||u.length===void 0)return B.error(`${n("home.package_download.fetching_struct_failed")}: ${u}`),u;for(let d=0;d<u.length;d++){if(ke(u[d].path)||rr(u[d].dir)||ke(u[d].url)||ke(u[d].name)){B.error(`${n("home.package_download.fetching_struct_failed")}: ${JSON.stringify(u[d])}`);continue}a||(a=!0,B.info(`${n("home.package_download.downloading")}`));const m=await rt.post(i,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.addUri",params:["token:"+h,[u[d].url],{out:u[d].name,dir:s+u[d].dir,"check-certificate":"false"}]});console.log(m)}}B.success(n("home.toolbar.send_aria2_success"))}catch(s){console.error(s),B.error(n("home.toolbar.aria2_set_error"))}}}},lr=t=>(t=Array.isArray(t)?t[0]:t,t instanceof Element?t:void 0),ir=(t,n)=>{const r={once:!0};t.addEventListener("motioncomplete",n,r),_(t.removeEventListener.bind(t,"motioncomplete",n,r))},sr=t=>{let{initial:n=!0}=t;Ae(()=>n=!0);let r=!1,o=[],l=[],i=[];return _(()=>{i.concat(l).forEach(h=>h()),l=i=o=[]}),e(xt.Provider,{value:{addCleanup:h=>l.push(h),addMount:h=>o.push(h),initial:()=>n},get children(){return e(_t.Provider,{value:void 0,get children(){return kt(()=>{const h=vt(()=>t.children),s=V(()=>lr(h())),[a,c]=y(),[u,d]=y();return yt(ve(s,v=>{i.push(...l),l=[],$t(()=>{t.exitBeforeEnter?(c(),k(()=>!r&&m(v))):(m(v),k())})})),[a,u];function m(v){c(v),o.forEach(I=>I()),o=[]}function k(v){var le;const I=()=>{d(),i.forEach(ie=>ie()),i=[],v==null||v()},p=d((le=a())!=null?le:u());if(!p)return I();const S=Ct.get(p);if(!S||!S.getOptions().exit)return I();S.setActive("exit",r=!0),ir(p,()=>{r=!1,I()})}})}})}})},Ie=t=>{var s;const[n,r]=y((s=t.defaultValue)!=null?s:""),o=b();let l;const i=()=>{const a=n().lastIndexOf(".");setTimeout(()=>{a>0&&t.isRenamingFile?l.setSelectionRange(0,a):l.select()},10)};ye(()=>{l&&(l.focus(),i()),_(()=>{l&&l.setSelectionRange(0,0)})});const h=()=>{var a;if(!n()){B.warning(o("global.empty_input"));return}(a=t.onSubmit)==null||a.call(t,n()),r("")};return e(X,{blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},initialFocus:"#modal-input",get children(){return[e(q,{}),e(G,{get children(){return[e(N,{get children(){return o(t.title)}}),e(K,{get children(){return[e(w,{get when(){return t.topSlot},get children(){return t.topSlot}}),e(w,{get when(){return t.type==="text"},get fallback(){return e($e,{id:"modal-input",get type(){return t.type},get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:i,onKeyDown:a=>{a.key==="Enter"&&h()}})},get children(){return e(St,{id:"modal-input",get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:i})}}),e(w,{get when(){return t.tips},get children(){return e(Mt,{get children(){return t.tips}})}}),e(w,{get when(){return t.bottomSlot},get children(){return t.bottomSlot}})]}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(x,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return o("global.cancel")}}),e(x,{get loading(){return t.loading},onClick:()=>h(),get children(){return o("global.ok")}})]}})]}})]}})},cr=()=>{const{pathname:t}=F(),n=V(()=>["",...t().split("/").filter(Boolean)]),r=b(),{setPathAs:o}=T(),l=V(()=>{const i={_after:{content:"",bgColor:"$background",position:"absolute",height:"100%",width:"99vw",zIndex:-1,transform:"translateX(-50%)",left:"50%",top:0}};switch(ne.position_of_header_navbar){case"only_navbar_sticky":return{...i,position:"sticky",zIndex:"$sticky",top:0};case"sticky":return{...i,position:"sticky",zIndex:"$sticky",top:60};default:return{_after:void 0,position:void 0,zIndex:void 0,top:void 0}}});return e(It,ce(l,{background:"$background",class:"nav",w:"$full",get children(){return e(de,{get each(){return n()},children:(i,h)=>{const s=V(()=>h()===n().length-1),a=n().slice(0,h()+1).join("/"),c=Ot(a);let u=()=>i;return u()===""&&(u=()=>pe("home_icon")+r("manage.sidemenu.home")),e(Ft,{class:"nav-item",get children(){return[e(zt,{class:"nav-link",css:{wordBreak:"break-all"},color:"unset",get _hover(){return{bgColor:Pe(),color:"unset"}},_active:{transform:"scale(.95)",transition:"0.1s"},cursor:"pointer",p:"$1",rounded:"$lg",get currentPage(){return s()},get as(){return s()?void 0:at},get href(){return Rt(c)},onMouseEnter:()=>o(a),children:u}),e(w,{get when(){return!s()},get children(){return e(Tt,{class:"nav-separator"})}})]}})}})}}))},ur=fe(()=>be(()=>import("./Folder.48107c55.js").then(t=>t.F),["assets/Folder.48107c55.js","assets/Folder.b511ba9e.css","assets/index.db1e60aa.js","assets/index.c2a62fa9.css","assets/index.27e4df2d.js","assets/Paginator.78da5f6c.js","assets/index.7ec66d8f.js","assets/icon.72d5d85a.js","assets/index.3ad130df.js","assets/index.74f196d6.js"])),dr=fe(()=>be(()=>import("./File.3b0f902b.js").then(t=>t.a),["assets/File.3b0f902b.js","assets/index.db1e60aa.js","assets/index.c2a62fa9.css","assets/icon.72d5d85a.js","assets/index.3ad130df.js","assets/index.7ec66d8f.js","assets/index.74f196d6.js"])),hr=fe(()=>be(()=>import("./Password.e56d2b8b.js"),["assets/Password.e56d2b8b.js","assets/index.db1e60aa.js","assets/index.c2a62fa9.css","assets/index.27e4df2d.js","assets/index.7ec66d8f.js"])),[gr,mr]=y();let Ze=!0;const pr=()=>{const t=ze("white","$neutral3"),{pathname:n}=F(),{handlePathChange:r}=T();let o=n();return ye(ve(n,l=>{Un(),Ze||Jn(),Ze=!1,Xn(o,window.scrollY),r(l),o=l})),e(J,{ref:l=>mr(l),class:"obj-box",w:"$full",rounded:"$xl",get bgColor(){return t()},p:"$2",shadow:"$lg",spacing:"$2",get children(){return e(He,{get fallback(){return e(Ce,{})},get children(){return e(we,{get children(){return[e(O,{get when(){return R.err},get children(){return e(Bt,{get msg(){return R.err},disableColor:!0})}}),e(O,{get when(){return[A.FetchingObj,A.FetchingObjs].includes(R.state)},get children(){return e(Ce,{})}}),e(O,{get when(){return R.state===A.NeedPassword},get children(){return e(hr,{})}}),e(O,{get when(){return[A.Folder,A.FetchingMore].includes(R.state)},get children(){return e(ur,{})}}),e(O,{get when(){return R.state===A.File},get children(){return e(dr,{})}})]}})}})}})},gt=t=>{const n=pe("home_container");return e(we,{get fallback(){return e(ue,{w:"min(99%, 1920px)",get children(){return t.children}})},get children(){return e(O,{when:n==="hope_container",get children(){return e(Et,{get children(){return t.children}})}})}})};function fr(){const{to:t}=F(),n=Lt(),[r,o]=y(),[l,i]=y(),[h,s]=y(-999),a=()=>s(0),c=()=>{const d=gr(),m=l();if(!d||!m)return;const k=d.offsetLeft>50?16:0;m.clientWidth<d.offsetLeft-k?s(0):s(`calc(-100% + ${d.offsetLeft}px - ${k}px)`)};let u;return Ae(()=>{const d=r();d==null||d.setPath(n.pathname),u=requestAnimationFrame(c),window.addEventListener("resize",c),_(()=>window.removeEventListener("resize",c))}),ye(ve(()=>R.state,()=>{cancelAnimationFrame(u),u=requestAnimationFrame(c)})),ye(ve(()=>n.pathname,()=>{const d=r();d==null||d.setPath(n.pathname)})),e(ue,{get as(){return Re.div},initial:{x:-999},get animate(){return{x:h()}},zIndex:"$overlay",pos:"fixed",left:3,top:3,h:"calc(100vh - 6px)",minW:180,p:"$2",overflow:"auto",shadow:"$lg",rounded:"$lg",bgColor:"white",_dark:{bgColor:"$neutral3"},onMouseEnter:a,onMouseLeave:c,ref:d=>i(d),get children(){return e(Qn,{autoOpen:!0,showEmptyIcon:!0,showHiddenFolder:!1,onChange:d=>t(d),handle:d=>o(d)})}})}function br(){const t=V(()=>ne.show_sidebar!=="none");return e(w,{get when(){return t()},get children(){return e(fr,{})}})}const wr=()=>e(gt,{get children(){return e(J,{class:"body",mt:"$1",py:"$2",px:"2%",minH:"80vh",w:"$full",gap:"$4",get children(){return[e(cr,{}),e(pr,{}),e(br,{})]}})}}),_r=ae("<span> & </span>"),kr=()=>{const t=b();return e(J,{class:"footer",w:"$full",py:"$4",get children(){return e(W,{spacing:"$1",get children(){return[e(At,{href:"https://peifeng.li",external:!0,get children(){return t("home.footer.powered_by")}}),_r.cloneNode(!0),e(Zn,{as:at,get href(){return xe.is_guest(Se())?"/@tiamo":"/@amore"},get children(){return t(xe.is_guest(Se())?"home.footer.guest":"home.footer.manage")}})]}})}})},et={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},he="^\\s*",ge="\\s*$",Q="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Z="([0-9A-Fa-f])",ee="([0-9A-Fa-f]{2})",vr=new RegExp(`${he}rgb\\s*\\(${Q},${Q},${Q}\\)${ge}`),yr=new RegExp(`${he}rgba\\s*\\(${Q},${Q},${Q},${Q}\\)${ge}`),$r=new RegExp(`${he}#${Z}${Z}${Z}${ge}`),Cr=new RegExp(`${he}#${ee}${ee}${ee}${ge}`),xr=new RegExp(`${he}#${Z}${Z}${Z}${Z}${ge}`),Sr=new RegExp(`${he}#${ee}${ee}${ee}${ee}${ge}`);function M(t){return parseInt(t,16)}function mt(t){try{let n;if(n=Cr.exec(t))return[M(n[1]),M(n[2]),M(n[3]),1];if(n=vr.exec(t))return[D(n[1]),D(n[5]),D(n[9]),1];if(n=yr.exec(t))return[D(n[1]),D(n[5]),D(n[9]),Le(n[13])];if(n=$r.exec(t))return[M(n[1]+n[1]),M(n[2]+n[2]),M(n[3]+n[3]),1];if(n=Sr.exec(t))return[M(n[1]),M(n[2]),M(n[3]),Le(M(n[4])/255)];if(n=xr.exec(t))return[M(n[1]+n[1]),M(n[2]+n[2]),M(n[3]+n[3]),Le(M(n[4]+n[4])/255)];if(t in et)return mt(et[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(n){throw n}}function Mr(t){return t>1?1:t<0?0:t}function tt(t,n,r,o){return`rgba(${D(t)}, ${D(n)}, ${D(r)}, ${Mr(o)})`}function Oe(t,n){const[r,o,l,i=1]=Array.isArray(t)?t:mt(t);return n.alpha?tt(r,o,l,n.alpha):tt(r,o,l,i)}function Le(t){const n=Math.round(Number(t)*100)/100;return n>1?1:n<0?0:n}function D(t){const n=Math.round(Number(t));return n>255?255:n<0?0:n}const Or={list:ht,grid:ut,image:dt},Fr=()=>{const t=b();return e(Ve,{get children(){return[e(De,{as:lt,tips:"home_tolayouts",get color(){return j()},get bgColor(){return Oe(j(),{alpha:.05})},get _hover(){return{bgColor:Oe(j(),{alpha:.2})}},"aria-label":"switch layout",compact:!0,size:"xl",get icon(){return e(we,{get children(){return[e(O,{get when(){return se()==="list"},get children(){return e(ht,{})}}),e(O,{get when(){return se()==="grid"},get children(){return e(ut,{})}}),e(O,{get when(){return se()==="image"},get children(){return e(dt,{})}})]}})}}),e(je,{get children(){return e(de,{get each(){return Object.entries(Or)},children:n=>e(re,{get color(){return j()},get icon(){return e(Pt,{get component(){return n[1]}})},onSelect:()=>{Ht(n[0])},get children(){return t(`home.layouts.${n[0]}`)}})})}})]}})};function zr(t){return L({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9"/>'},t)}function Rr(t){return L({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><rect width="12" height="12" x="8" y="8" rx="2"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/>'},t)}function yo(t){return L({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M11 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M10 14L20 4M15 4h5v5"/>'},t)}function Tr(t){return L({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M14 3v4a1 1 0 001 1h4"/><path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2zM9 15h6"/><path d="M12.5 17.5L15 15l-2.5-2.5"/>'},t)}function Ir(t){return L({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M10 14a3.5 3.5 0 005 0l4-4a3.5 3.5 0 00-5-5l-.5.5"/><path d="M14 10a3.5 3.5 0 00-5 0l-4 4a3.5 3.5 0 005 5l.5-.5"/>'},t)}function Br(t){return L({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><circle cx="15" cy="15" r="4"/><path d="M18.5 18.5L21 21M4 6h16M4 12h4M4 18h4"/>'},t)}const Er=ae('<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-ipad-horizontal-search" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"></path><path d="M9 17h2"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>'),Lr=ae('<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-search" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 8h.01"></path><path d="M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2"></path></svg>'),Ar=()=>{const t=pe("logo").split(`
`),n=ze(t[0],t.pop()),r=V(()=>{switch(ne.position_of_header_navbar){case"sticky":return{position:"sticky",zIndex:"$sticky",top:0};default:return{position:void 0,zIndex:void 0,top:void 0}}});return e(Vt,ce(r,{bgColor:"$background",class:"header",w:"$full",get children(){return e(gt,{get children(){return e(W,{px:"calc(2% + 0.5rem)",py:"$2",w:"$full",justifyContent:"space-between",get children(){return[e(W,{class:"header-left",h:"52px",get children(){return e(Dt,{get src(){return n()},h:"$full",w:"auto",get fallback(){return e(jt,{})}})}}),e(W,{class:"header-right",spacing:"$2",get children(){return e(w,{get when(){return R.state===A.Folder},get children(){return[e(lt,{"aria-label":"Search",get color(){return j()},get bgColor(){return Oe(j(),{alpha:.05})},get _hover(){return{bgColor:Oe(j(),{alpha:.2})}},compact:!0,size:"xl",get icon(){return e(we,{get children(){return[e(O,{get when(){return se()==="list"},get children(){return e(Br,{})}}),e(O,{get when(){return se()==="grid"},get children(){return Er.cloneNode(!0)}}),e(O,{get when(){return se()==="image"},get children(){return Lr.cloneNode(!0)}})]}})},onClick:()=>{g.emit("tool","search")}}),e(Fr,{})]}})}})]}})}})}}))};function Pr(t){return L({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M11 8v6h1V8h2.5l-3-3-3 3zM1 3h1.5v1H1V3zM3 3h1.5v1H3V3zM5 3h1v1.5H5V3zM1 6.5h1V8H1V6.5zM2.5 7H4v1H2.5V7zM4.5 7H6v1H4.5V7zM1 4.5h1V6H1V4.5zM5 5h1v1.5H5V5zM5 11v3H2v-3h3zm1-1H1v5h5v-5z"/>'},t)}function $o(t){return L({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M14 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM2 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm1.5 5.5A1.5 1.5 0 005 13v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2a1.5 1.5 0 001.5-1.5V6h-9v5.5zM12.472 5a4.5 4.5 0 00-2.025-3.276l.5-1.001a.5.5 0 00-.895-.447L9.55 1.28l-.13-.052a4.504 4.504 0 00-2.84 0l-.13.052L5.948.276a.5.5 0 00-.895.447l.5 1.001A4.499 4.499 0 003.528 5v.5H12.5V5h-.028zM6.5 4a.5.5 0 01-.001-1h.002A.5.5 0 016.5 4zm3 0a.5.5 0 01-.001-1h.003a.5.5 0 01-.001 1z"/>'},t)}function Hr(t){return L({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>'},t)}const U={rename:{icon:Nt,color:"$accent9"},copy:{icon:Rr,color:"$success9"},move:{icon:Tr,color:"$warning9"},delete:{icon:Ut,color:"$danger9"},copy_link:{icon:Ir,color:"$info9"},mkdir:{icon:Wt,p:!0},recursive_move:{icon:Pr,p:!0},remove_empty_directory:{icon:Hr,p:!0},batch_rename:{icon:er,p:!0},new_file:{icon:qt,p:!0},cancel_select:{icon:tr},download:{icon:Gt,color:"$primary9"}},Fe=t=>{const n=Kt.findIndex(o=>o===t.name);if(n!==-1&&!xe.can(Se(),n))return null;const r=b();return e(st,{placement:"top",withArrow:!0,get label(){return r(`home.toolbar.${t.name}`)},get children(){return e(it,ce({get class(){return`toolbar-${t.name}`},get _hover(){return{bgColor:Pe()}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$8",rounded:"$md",get p(){var o;return(o=U[t.name])!=null&&o.p?"$1_5":"$1"},_active:{transform:"scale(.94)",transition:"0.2s"},get as(){var o;return(o=U[t.name])==null?void 0:o.icon},get color(){var o;return(o=U[t.name])==null?void 0:o.color}},t))}})},C=t=>{const n=b();return e(st,{get disabled(){return!t.tips},placement:"left",withArrow:!0,get label(){return n(`home.toolbar.${t.tips}`)},get children(){return e(it,ce({get color(){return j()},get _hover(){return{bgColor:j(),color:"white"}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$9",rounded:"$lg",p:"$1",_active:{transform:"scale(.94)",transition:"0.2s"},get as(){return t.icon}},t))}})},Dr=()=>{const t=b(),{copySelectedPreviewPage:n,copySelectedRawLink:r}=Xt(),o="neutral";return e(Ve,{placement:"top",offset:10,get children(){return[e(De,{as:Fe,name:"copy_link"}),e(je,{get children(){return[e(re,{colorScheme:o,onSelect:()=>{n()},get children(){return t("home.toolbar.preview_page")}}),e(re,{colorScheme:o,onSelect:()=>{r()},get children(){return t("home.toolbar.down_link")}}),e(re,{colorScheme:o,onSelect:()=>{r(!0)},get children(){return t("home.toolbar.encode_down_link")}})]}})]}})},jr=ae("<p></p>"),Vr=()=>{const t=b(),n="neutral",{batchDownloadSelected:r,sendToAria2:o}=ar();return e(Ve,{placement:"top",offset:10,get children(){return[e(De,{as:Fe,name:"download"}),e(je,{get children(){return[e(re,{colorScheme:n,onSelect:r,get children(){return t("home.toolbar.batch_download")}}),e(w,{get when(){return xe.is_admin(Se())||ct("package_download")},get children(){return e(re,{colorScheme:n,onSelect:()=>{g.emit("tool","package_download")},get children(){return t("home.toolbar.package_download")}})}}),e(re,{colorScheme:n,onSelect:o,get children(){return t("home.toolbar.send_aria2")}})]}})]}})},Nr=fe(()=>be(()=>import("./PackageDownload.c383b004.js"),["assets/PackageDownload.c383b004.js","assets/index.db1e60aa.js","assets/index.c2a62fa9.css"])),Ur=()=>{const t=b(),n=s=>{if(s==="package_download"){if(!ct("package_download"))return;o()}};g.on("tool",n),_(()=>{g.off("tool",n)});const{isOpen:r,onOpen:o,onClose:l}=$(),[i,h]=y("pre_tips");return e(X,{blockScrollOnMount:!1,get opened(){return r()},onClose:l,closeOnOverlayClick:!1,closeOnEsc:!1,get children(){return[e(q,{}),e(G,{get children(){return[e(N,{get children(){return t("home.toolbar.package_download")}}),e(He,{get fallback(){return e(Ce,{})},get children(){return e(w,{get when(){return i()==="pre_tips"},get fallback(){return e(Nr,{onClose:l})},get children(){return[e(K,{get children(){const s=jr.cloneNode(!0);return Te(s,()=>t("home.toolbar.pre_package_download-tips")),s}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(x,{onClick:l,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(x,{colorScheme:"info",onClick:()=>{h("package_download")},get children(){return t("global.confirm")}})]}})]}})}})]}})]}})},Wr=()=>{const t=V(()=>[A.Folder,A.FetchingMore].includes(R.state)&&Jt()&&Yt());return e(sr,{exitBeforeEnter:!0,get children(){return e(w,{get when(){return t()},get children(){return e(ue,{class:"center-toolbar",pos:"fixed",bottom:"$5",right:"50%",w:"max-content",color:"$neutral11",get as(){return Re.div},initial:{opacity:0,scale:0,x:"50% ",y:100},animate:{opacity:1,scale:1,x:"50%",y:0},exit:{opacity:0,scale:0,x:"50% ",y:100},transition:{duration:.2},get children(){return e(W,{p:"$2",get bgColor(){return ze("white","#000000d0")()},spacing:"$1",shadow:"0px 10px 30px -5px rgba(0, 0, 0, 0.3)",rounded:"$lg",css:{backdropFilter:"blur(15px)"},get children(){return[e(de,{each:["rename","move","copy","delete"],children:n=>e(Fe,{name:n,onClick:()=>{g.emit("tool",n)}})}),e(Dr,{}),e(Vr,{}),e(Fe,{name:"cancel_select",onClick:()=>{Qt(!1)}})]}})}})}})}})};function qr(t){return L({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M15 5.5a4.394 4.394 0 01-4 4.5 2.955 2.955 0 00-.2-1A3.565 3.565 0 0014 5.5a3.507 3.507 0 00-7-.3A3.552 3.552 0 006 5a4.622 4.622 0 014.5-4A4.481 4.481 0 0115 5.5zM5.5 6a4.5 4.5 0 100 9.001 4.5 4.5 0 000-9z"/>'},t)}function nt(t){return L({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M14.88 4.78a3.489 3.489 0 00-.37-.9 3.24 3.24 0 00-.6-.79 3.78 3.78 0 00-1.21-.81 3.74 3.74 0 00-2.84 0 4 4 0 00-1.16.75l-.05.06-.65.65-.65-.65-.05-.06a4 4 0 00-1.16-.75 3.74 3.74 0 00-2.84 0 3.78 3.78 0 00-1.21.81 3.55 3.55 0 00-.97 1.69 3.75 3.75 0 00-.12 1c0 .317.04.633.12.94a4 4 0 00.36.89 3.8 3.8 0 00.61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0015 5.78a3.747 3.747 0 00-.12-1zm-1 1.63a2.69 2.69 0 01-.69 1.21l-5.21 5.2-5.21-5.2a2.9 2.9 0 01-.44-.57 3 3 0 01-.27-.65 3.25 3.25 0 01-.08-.69A3.36 3.36 0 012.06 5a2.8 2.8 0 01.27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 01.89-.6 2.8 2.8 0 012.08 0c.33.137.628.338.88.59l1.36 1.37 1.36-1.37a2.72 2.72 0 01.88-.59 2.8 2.8 0 012.08 0c.331.143.633.347.89.6.174.165.32.357.43.57a2.69 2.69 0 01.35 1.34 2.6 2.6 0 01-.06.72h-.03z"/>'},t)}const Gr=()=>{const{isOpen:t,onToggle:n}=$({defaultIsOpen:localStorage.getItem("more-open")==="true",onClose:()=>localStorage.setItem("more-open","false"),onOpen:()=>localStorage.setItem("more-open","true")}),r=V(()=>t()?"$4":"$5"),o=V(()=>R.state===A.Folder),{refresh:l}=T(),{toggleColorMode:i}=Zt(),h=ze({size:"$8",component:qn,p:"$0_5"},{size:"$8",component:Wn,p:"$0_5"});return e(ue,{class:"right-toolbar-box",pos:"fixed",get right(){return r()},get bottom(){return r()},get children(){return e(w,{get when(){return t()},get fallback(){return e(C,{class:"toolbar-toggle",tips:"more",as:nt,onClick:()=>{n()}})},get children(){return e(J,{class:"right-toolbar",p:"$1",rounded:"$lg",spacing:"$1",bgColor:"$neutral1",get as(){return Re.div},initial:{opacity:0,scale:0,y:300},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:0,y:300},transition:{duration:.2},get children(){return[e(J,{spacing:"$1",class:"right-toolbar-in",get children(){return[e(w,{get when(){return Ke(()=>!!o(),!0)()&&(Xe("write")||R.write)},get children(){return[e(C,{as:Yn,tips:"refresh",onClick:()=>{l(void 0,!0),Je.show({status:"success",description:"\u76EE\u5F55\u5237\u65B0\u6210\u529F",closable:!1})}}),e(C,{get as(){return U.new_file.icon},tips:"new_file",onClick:()=>{g.emit("tool","new_file")}}),e(C,{get as(){return U.mkdir.icon},p:"$1_5",tips:"mkdir",onClick:()=>{g.emit("tool","mkdir")}}),e(C,{get as(){return U.recursive_move.icon},tips:"recursive_move",onClick:()=>{g.emit("tool","recursiveMove")}}),e(C,{get as(){return U.remove_empty_directory.icon},tips:"remove_empty_directory",onClick:()=>{g.emit("tool","removeEmptyDirectory")}}),e(C,{get as(){return U.batch_rename.icon},tips:"batch_rename",onClick:()=>{g.emit("tool","batchRename")}}),e(C,{as:en,tips:"upload",onClick:()=>{g.emit("tool","upload")}})]}}),e(w,{get when(){return Ke(()=>!!o(),!0)()&&Xe("offline_download")},get children(){return e(C,{as:Gn,pl:"0",tips:"offline_download",onClick:()=>{g.emit("tool","offline_download")}})}}),e(w,{get when(){return tn()},get children(){return e(C,{as:nr,tips:"toggle_markdown_toc",onClick:()=>{nn(s=>!s)}})}}),e(C,{tips:"toggle_checkbox",as:zr,onClick:rn}),e(C,{get as(){return h().component},tips:"toggle_theme",onClick:i}),e(C,{as:qr,tips:"toggle_theme_auto",onClick:()=>{localStorage.removeItem("hope-ui-color-mode"),Je.show({status:"success",description:"\u4E3B\u9898\u8BBE\u7F6E\u6210\u529F\uFF0C\u6B63\u5728\u5237\u65B0\u9875\u9762",closable:!1}),setTimeout(function(){location.reload()},2500)}}),e(C,{as:on,tips:"browser_setting",onClick:()=>{g.emit("tool","local_settings")}})]}}),e(C,{tips:"close",as:nt,onClick:n})]}})}})}})},Kr=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),[o,l]=E(an),{pathname:i}=F(),{refresh:h}=T(),s=a=>{a==="copy"&&n()};return g.on("tool",s),_(()=>{g.off("tool",s)}),e(Ne,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(i(),a,te().map(u=>u.name));P(c,()=>{h(),r()})}})},Xr=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),[o,l]=E(ln),{pathname:i}=F(),{refresh:h}=T(),s=a=>{a==="move"&&n()};return g.on("tool",s),_(()=>{g.off("tool",s)}),e(Ne,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(i(),a,te().map(u=>u.name));P(c,()=>{h(),r()})}})},Jr=ae("<p></p>"),Yr=()=>{const t=b(),{isOpen:n,onOpen:r,onClose:o}=$(),[l,i]=E(sn),{refresh:h}=T(),{pathname:s}=F(),a=c=>{c==="delete"&&r()};return g.on("tool",a),_(()=>{g.off("tool",a)}),e(X,{blockScrollOnMount:!1,get opened(){return n()},onClose:o,size:{"@initial":"xs","@md":"md"},get children(){return[e(q,{}),e(G,{get children(){return[e(N,{get children(){return t("home.toolbar.delete")}}),e(K,{get children(){const c=Jr.cloneNode(!0);return Te(c,()=>t("home.toolbar.delete-tips")),c}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(x,{onClick:o,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(x,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await i(s(),te().map(u=>u.name));P(c,()=>{h(),o()})},get children(){return t("global.confirm")}})]}})]}})]}})},Qr=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),o=b(),[l,i]=E(cn),{pathname:h}=F(),{refresh:s}=T(),a=c=>{if(c==="rename"){if(!un()){B.warning(o("home.toolbar.only_one-tips"));return}n()}};return g.on("tool",a),_(()=>{g.off("tool",a)}),e(w,{get when(){return t()},get children(){return e(Ie,{title:"home.toolbar.input_new_name",get isRenamingFile(){return!te()[0].is_dir},get opened(){return t()},onClose:r,get defaultValue(){var c,u;return(u=(c=te()[0])==null?void 0:c.name)!=null?u:""},get loading(){return l()},onSubmit:async c=>{const u=await i(Y(h(),te()[0].name),c);P(u,()=>{s(),r()})}})}})},Zr=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),[o,l]=E(dn),{refresh:i}=T(),{pathname:h}=F(),s=a=>{a==="new_file"&&n()};return g.on("tool",s),_(()=>{g.off("tool",s)}),e(Ie,{title:"home.toolbar.input_filename",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(Y(h(),a),ot());P(c,()=>{i(),r()})}})},eo=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),[o,l]=E(hn),{pathname:i}=F(),{refresh:h}=T(),s=a=>{a==="mkdir"&&n()};return g.on("tool",s),_(()=>{g.off("tool",s)}),e(Ie,{title:"home.toolbar.input_dir_name",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(Y(i(),a));P(c,()=>{h(),r()})}})},to=ae("<p></p>"),no=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),{isOpen:o,onOpen:l,onClose:i}=$(),[h,s]=E(gn),{pathname:a}=F(),{refresh:c}=T(),u=m=>{m==="recursiveMove"&&n()};g.on("tool",u),_(()=>{g.off("tool",u)});const d=b();return[e(X,{blockScrollOnMount:!1,get opened(){return t()},onClose:()=>r(),size:{"@initial":"xs","@md":"md"},get children(){return[e(q,{}),e(G,{get children(){return[e(N,{get children(){return d("home.toolbar.recursive_move")}}),e(K,{get children(){const m=to.cloneNode(!0);return Te(m,()=>d("home.toolbar.recursive_move_directory-tips")),m}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(x,{onClick:()=>r(),colorScheme:"neutral",get children(){return d("global.cancel")}}),e(x,{onClick:()=>{r(),l()},colorScheme:"danger",get children(){return d("global.confirm")}})]}})]}})]}}),e(Ne,{get opened(){return o()},onClose:i,get loading(){return h()},onSubmit:async m=>{const k=await s(a(),m);P(k,()=>{c(),i()})}})]},ro=ae("<p></p>"),oo=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),{pathname:o}=F(),[l,i]=E(mn),{refresh:h}=T(),s=c=>{c==="removeEmptyDirectory"&&n()};g.on("tool",s),_(()=>{g.off("tool",s)});const a=b();return e(X,{blockScrollOnMount:!1,get opened(){return t()},onClose:r,size:{"@initial":"xs","@md":"md"},get children(){return[e(q,{}),e(G,{get children(){return[e(N,{get children(){return a("home.toolbar.remove_empty_directory")}}),e(K,{get children(){const c=ro.cloneNode(!0);return Te(c,()=>a("home.toolbar.remove_empty_directory-tips")),c}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(x,{onClick:r,colorScheme:"neutral",get children(){return a("global.cancel")}}),e(x,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await i(o());P(c,()=>{h(),r()})},get children(){return a("global.confirm")}})]}})]}})]}})},ao=t=>e(Re.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return e(W,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:Pe()}},get children(){return[e(Me,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.src_name},get children(){return t.obj.src_name}}),e(Me,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.new_name},get children(){return t.obj.new_name}})]}})}}),lo=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),{isOpen:o,onOpen:l,onClose:i}=$(),[h,s]=E(pn),{pathname:a}=F(),{refresh:c}=T(),[u,d]=y("1"),[m,k]=y(""),[v,I]=y(""),[p,S]=y("string"),[le,ie]=y([]),z=b(),Ue=()=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:"left",cursor:"pointer"}),We=f=>{f==="batchRename"&&l()};g.on("tool",We),_(()=>{g.off("tool",We)});const Be=()=>{if(!m()||!v()){B.warning(z("global.empty_input"));return}const f=new RegExp(m(),"g");let me;if(u()==="1")me=R.objs.filter(H=>H.name.match(m())).map(H=>({src_name:H.name,new_name:H.name.replace(f,v())}));else{let H=v();me=R.objs.map(_e=>{let qe="";const Ge=_e.name.lastIndexOf(".");Ge!==-1&&(qe=_e.name.substring(Ge+1));const pt={src_name:_e.name,new_name:m()+H+"."+qe};return H=(parseInt(H)+1).toString().padStart(H.length,"0"),pt})}ie(me),n(),i()};return[e(X,{blockScrollOnMount:!1,get opened(){return o()},onClose:i,initialFocus:"#modal-input1",size:{"@initial":"xs","@md":"md"},get children(){return[e(q,{}),e(G,{get children(){return[e(w,{get when(){return u()==="1"},get children(){return e(N,{get children(){return z("home.toolbar.regular_rename")}})}}),e(w,{get when(){return u()==="2"},get children(){return e(N,{get children(){return z("home.toolbar.sequential_renaming_desc")}})}}),e(K,{get children(){return[e(fn,{defaultValue:"1",style:{margin:"20px 0"},onChange:f=>{d(f),f==="1"?S("string"):f==="2"&&S("number")},get children(){return e(W,{spacing:"$4",get children(){return[e(Ye,{value:"1",get children(){return z("home.toolbar.regex_rename")}}),e(Ye,{value:"2",get children(){return z("home.toolbar.sequential_renaming")}})]}})}}),e(J,{spacing:"$2",get children(){return[e($e,{id:"modal-input1",type:"string",get value(){return m()},onInput:f=>{k(f.currentTarget.value)},onKeyDown:f=>{f.key==="Enter"&&Be()}}),e($e,{id:"modal-input2",get type(){return p()},get value(){return v()},onInput:f=>{I(f.currentTarget.value)},onKeyDown:f=>{f.key==="Enter"&&Be()}})]}})]}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(x,{onClick:()=>{d("1"),S("string"),i()},colorScheme:"neutral",get children(){return z("global.cancel")}}),e(x,{onClick:()=>Be(),get disabled(){return!m()||!v()},get children(){return z("global.ok")}})]}})]}})]}}),e(X,{size:"xl",get opened(){return t()},onClose:r,get children(){return[e(q,{}),e(G,{get children(){return[e(N,{get children(){return z("home.toolbar.regex_rename_preview")}}),e(K,{get children(){return e(J,{class:"list",w:"$full",spacing:"$1",get children(){return[e(W,{class:"title",w:"$full",p:"$2",get children(){return[e(Me,ce({w:{"@initial":"50%","@md":"50%"}},Ue,{get children(){return z("home.toolbar.regex_rename_preview_old_name")}})),e(Me,ce({w:{"@initial":"50%","@md":"50%"}},Ue,{get children(){return z("home.toolbar.regex_rename_preview_new_name")}}))]}}),e(de,{get each(){return le()},children:(f,me)=>e(ao,{obj:f,get index(){return me()}})})]}})}}),e(oe,{display:"flex",gap:"$2",get children(){return[e(x,{onClick:()=>{ie([]),d("1"),S("string"),r(),i()},colorScheme:"neutral",get children(){return z("global.cancel")}}),e(x,{onClick:()=>{ie([]),r(),l()},colorScheme:"neutral",get children(){return z("global.back")}}),e(x,{get loading(){return h()},onClick:async()=>{const f=await s(a(),le());P(f,()=>{ie([]),k(""),I(""),d("1"),S("string"),c(),i(),r()})},get disabled(){return le().length==0},get children(){return z("global.ok")}})]}})]}})]}})]},io=["delete_on_upload_succeed","delete_on_upload_failed","delete_never","delete_always"],so=()=>{const t=b(),[n,r]=y([]),[o,l]=E(()=>bn.get("/public/offline_download_tools")),[i,h]=y(""),[s,a]=y("delete_on_upload_succeed");Ae(async()=>{const p=await l();wn(p,S=>{r(S),h(S[0])})});const{isOpen:c,onOpen:u,onClose:d}=$(),[m,k]=E(_n),{pathname:v}=F(),I=p=>{p==="offline_download"&&u()};return g.on("tool",I),_(()=>{g.off("tool",I)}),e(Ie,{title:"home.toolbar.offline_download",type:"text",get opened(){return c()},onClose:d,get loading(){return o()||m()},get tips(){return t("home.toolbar.offline_download-tips")},get topSlot(){return e(ue,{mb:"$2",get children(){return e(Qe,{get value(){return i()},onChange:p=>h(p),get options(){return n().map(p=>({value:p,label:p}))}})}})},get bottomSlot(){return e(ue,{mb:"$2",get children(){return e(Qe,{get value(){return s()},onChange:p=>a(p),get options(){return io.map(p=>({value:p,label:t(`home.toolbar.delete_policy.${p}`)}))}})}})},onSubmit:async p=>{const S=await k(v(),p.split(`
`),i(),s());P(S,()=>{d()})}})},co=t=>{const n=b(),r=h=>{h===t.name&&l()};g.on("tool",r),_(()=>{g.off("tool",r)});const{isOpen:o,onOpen:l,onClose:i}=$();return e(X,{get blockScrollOnMount(){return t.blockScrollOnMount},get opened(){return o()},onClose:i,closeOnOverlayClick:!1,closeOnEsc:!1,size:{"@initial":"xs","@md":"md","@lg":"lg","@xl":"xl","@2xl":"2xl"},get children(){return[e(q,{}),e(G,{get children(){return[e(kn,{}),e(N,{get children(){return n(t.title)}}),e(K,{get children(){return e(w,{get when(){return o()},get children(){return e(He,{get fallback(){return e(Ce,{})},get children(){return t.children}})}})}})]}})]}})};function uo(t){const n=b();return e(Dn,{get children(){return[e(On,{get children(){return n(`home.local_settings.${t.key}`)}}),e(we,{get fallback(){return e($e,{get value(){return ne[t.key]},onInput:r=>{Ee(t.key,r.currentTarget.value)}})},get children(){return[e(O,{get when(){return t.type==="select"},get children(){return e(Fn,{get id(){return t.key},get defaultValue(){return ne[t.key]},onChange:r=>Ee(t.key,r),get children(){return[e(zn,{get children(){return[e(Rn,{get children(){return n("global.choose")}}),e(Tn,{}),e(In,{})]}}),e(Bn,{get children(){return e(En,{get children(){return e(de,{get each(){return t.options},children:r=>e(Ln,{value:r,get children(){return[e(An,{get children(){return n(`home.local_settings.${t.key}_options.${r}`)}}),e(Pn,{})]}})})}})}})]}})}}),e(O,{get when(){return t.type==="boolean"},get children(){return e(Hn,{get defaultChecked(){return ne[t.key]==="true"},onChange:r=>{Ee(t.key,r.currentTarget.checked.toString())}})}})]}})]}})}const ho=()=>{const{isOpen:t,onOpen:n,onClose:r}=$(),o=b(),l=i=>{i==="local_settings"&&n()};return g.on("tool",l),_(()=>{g.off("tool",l)}),e(Mn,{get opened(){return t()},placement:"right",onClose:r,get children(){return[e(vn,{}),e(yn,{get children(){return[e($n,{}),e(Cn,{color:"$info9",get children(){return o("home.toolbar.local_settings")}}),e(xn,{get children(){return e(J,{spacing:"$2",get children(){return e(de,{each:Sn,children:i=>e(uo,i)})}})}})]}})]}})},go=fe(()=>be(()=>import("./Upload.30b4e053.js"),["assets/Upload.30b4e053.js","assets/index.db1e60aa.js","assets/index.c2a62fa9.css","assets/index.27e4df2d.js"])),mo=()=>[e(Kr,{}),e(Xr,{}),e(Qr,{}),e(Yr,{}),e(Zr,{}),e(eo,{}),e(no,{}),e(oo,{}),e(lo,{}),e(so,{}),e(Ur,{}),e(co,{name:"upload",title:"home.toolbar.upload",get children(){return e(go,{})}}),e(ho,{})],po=()=>e(Vn,{get children(){return[e(Gr,{}),e(Wr,{}),e(mo,{}),e(jn,{})]}}),fo=()=>{Kn(pe("site_title"));const t=pe("announcement");return t&&B.render(()=>e(Nn,{children:t})),[e(Ar,{}),e(po,{}),e(wr,{}),e(kr,{})]},Co=Object.freeze(Object.defineProperty({__proto__:null,default:fo},Symbol.toStringTag,{value:"Module"}));export{$o as I,Co as L,yo as T,Oe as c,U as o,ar as u};