import{d as g,v as Y,m as W,o as l,e as f,F as kt,j as ao,f as r,g as i,t as y,c as h,q as _,s as V,_ as wt,B as ro,C as tt,D as co,E as io,G as lo,H as uo,k,I as _o,J as fo,K as st,L as po,r as u,M as mo,N as Et,O as $t,P as vo,w as I,Q as ho,A as Lt,R as It,S as go,U as Ct,V as bo,W as F,X as yo,Y as ko,Z as wo,$ as Eo,a0 as $o,a1 as Lo,a2 as U,a3 as Io,l as ot,x as Co,a4 as So,a as Ao,u as Oo,a5 as To,n as xo}from"./app-DJXMUuPO.js";import{_ as No}from"./YunFooter.vue_vue_type_script_setup_true_lang-Cm-I7XME.js";import{_ as St}from"./YunCard.vue_vue_type_script_setup_true_lang-CC1xuBOh.js";import{_ as Ro}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-D34gyHKd.js";import{s as mt}from"./index-C7yU5XnD.js";const Vo=["lang"],zo=["href"],Yo=g({__name:"YunOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(t){const{locale:o}=Y();return(e,s)=>{const n=W("YunOutlineItem",!0);return l(),f("ul",{class:V(e.root?"root":"nested")},[(l(!0),f(kt,null,ao(e.headers,({children:a,link:d,title:m,lang:v})=>(l(),f("li",{key:d,class:"va-toc-item",lang:v||r(o)},[i("a",{class:"outline-link",href:d,onClick:s[0]||(s[0]=(...N)=>e.onClick&&e.onClick(...N))},y(m),9,zo),a!=null&&a.length?(l(),h(n,{key:0,headers:a,"on-click":e.onClick},null,8,["headers","on-click"])):_("v-if",!0)],8,Vo))),128))],2)}}}),Mo=wt(Yo,[["__scopeId","data-v-699db71a"]]),Do=t=>(_o("data-v-75b693dc"),t=t(),fo(),t),Bo={class:"content"},Ho={class:"outline-title"},Po={"aria-labelledby":"doc-outline-aria-label"},Fo=Do(()=>i("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),Uo=g({__name:"YunOutline",setup(t){const o=ro(),e=tt(),s=tt();co(e,s);const{headers:n,handleClick:a}=io();return(d,m)=>{const v=Mo;return lo((l(),f("div",{ref_key:"container",ref:e},[i("div",Bo,[i("div",Ho,y(r(o).outlineTitle||"On this page"),1),i("div",{ref_key:"marker",ref:s,class:"outline-marker"},null,512),i("nav",Po,[Fo,k(v,{class:"va-toc relative z-1 css-i18n-toc",headers:r(n),"on-click":r(a),root:""},null,8,["headers","on-click"])])])],512)),[[uo,r(n).length]])}}}),Go=wt(Uo,[["__scopeId","data-v-75b693dc"]]),Wo=i("div",{"i-ri-file-list-line":""},null,-1),qo=[Wo],jo={class:"aside-container",flex:"~ col"},Ko={key:0,m:"t-6 b-2",font:"serif black"},Jo=i("div",{class:"flex-grow"},null,-1),Zo={key:2,class:"custom-container"},Qo=g({__name:"YunAside",setup(t){const o=st(),{t:e}=Y(),s=po();return(n,a)=>{const d=mo,m=Go;return l(),f(kt,null,[i("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:a[0]||(a[0]=v=>r(s).toggleRightSidebar())},qo),k(d,{show:r(s).isRightSidebarOpen,onClick:a[1]||(a[1]=v=>r(s).toggleRightSidebar())},null,8,["show"]),_("  "),i("aside",{class:V(["va-card yun-aside",r(s).isRightSidebarOpen&&"open"]),m:"l-4",text:"center",overflow:"auto"},[i("div",jo,[r(o).toc!==!1?(l(),f("h2",Ko,y(r(e)("sidebar.toc")),1)):_("v-if",!0),r(o).toc!==!1?(l(),h(m,{key:1})):_("v-if",!0),Jo,n.$slots.default?(l(),f("div",Zo,[u(n.$slots,"default")])):_("v-if",!0)])],2)],64)}}}),Xo={id:"tcomment",w:"full"},te=g({__name:"YunTwikoo",setup(t){return Et($t)||(void 0)(),(o,e)=>(l(),f("div",Xo))}}),oe=g({__name:"YunWaline",setup(t){if(Et($t))throw new Error("Please install valaxy-addon-waline");const o=(void 0)();return(e,s)=>{const n=W("WalineClient");return l(),h(n,{w:"full",options:r(o).options||{serverURL:""}},null,8,["options"])}}}),ee=g({__name:"YunComment",setup(t){const o=vo();return(e,s)=>{const n=oe,a=te,d=W("ClientOnly"),m=St;return l(),h(m,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:I(()=>[k(d,null,{default:I(()=>[r(o).addons["valaxy-addon-waline"]?(l(),h(n,{key:0})):_("v-if",!0),r(o).addons["valaxy-addon-twikoo"]?(l(),h(a,{key:1})):_("v-if",!0),u(e.$slots,"default")]),_:3})]),_:3})}}}),se={class:"post-nav"},ne={class:"post-nav-item"},ae=i("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),re={class:"title truncate",text:"sm"},ce={class:"post-nav-item"},ie={class:"title truncate",text:"sm"},le=i("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),de=g({__name:"YunPostNav",setup(t){const[o,e]=ho();return(s,n)=>{const a=W("RouterLink");return l(),f("div",se,[i("div",ne,[r(o)?(l(),h(a,{key:0,class:"post-nav-prev",to:r(o).path||"",title:r(o).title},{default:I(()=>[ae,i("span",re,y(r(o).title),1)]),_:1},8,["to","title"])):_("v-if",!0)]),i("div",ce,[r(e)?(l(),h(a,{key:0,to:r(e).path||"",title:r(e).title,class:"post-nav-next"},{default:I(()=>[i("span",ie,y(r(e).title),1),le]),_:1},8,["to","title"])):_("v-if",!0)])])}}}),$=typeof window<"u",At=$&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),Ot=$&&"IntersectionObserver"in window,Tt=$&&"classList"in document.createElement("p"),xt=$&&window.devicePixelRatio>1,ue={elements_selector:".lazy",container:At||$?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},Nt=t=>Object.assign({},ue,t),vt=function(t,o){let e;const s="LazyLoad::Initialized",n=new t(o);try{e=new CustomEvent(s,{detail:{instance:n}})}catch{e=document.createEvent("CustomEvent"),e.initCustomEvent(s,!1,!1,{instance:n})}window.dispatchEvent(e)},_e=(t,o)=>{if(o)if(!o.length)vt(t,o);else for(let e=0,s;s=o[e];e+=1)vt(t,s)},w="src",nt="srcset",at="sizes",Rt="poster",M="llOriginalAttrs",Vt="data",rt="loading",zt="loaded",Yt="applied",fe="entered",ct="error",Mt="native",Dt="data-",Bt="ll-status",p=(t,o)=>t.getAttribute(Dt+o),pe=(t,o,e)=>{const s=Dt+o;if(e===null){t.removeAttribute(s);return}t.setAttribute(s,e)},D=t=>p(t,Bt),S=(t,o)=>pe(t,Bt,o),q=t=>S(t,null),it=t=>D(t)===null,me=t=>D(t)===rt,ve=t=>D(t)===ct,lt=t=>D(t)===Mt,he=[rt,zt,Yt,ct],ge=t=>he.indexOf(D(t))>=0,L=(t,o,e,s)=>{if(!(!t||typeof t!="function")){if(s!==void 0){t(o,e,s);return}if(e!==void 0){t(o,e);return}t(o)}},x=(t,o)=>{if(Tt){t.classList.add(o);return}t.className+=(t.className?" ":"")+o},b=(t,o)=>{if(Tt){t.classList.remove(o);return}t.className=t.className.replace(new RegExp("(^|\\s+)"+o+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},be=t=>{t.llTempImage=document.createElement("IMG")},ye=t=>{delete t.llTempImage},Ht=t=>t.llTempImage,j=(t,o)=>{if(!o)return;const e=o._observer;e&&e.unobserve(t)},ke=t=>{t.disconnect()},we=(t,o,e)=>{o.unobserve_entered&&j(t,e)},dt=(t,o)=>{t&&(t.loadingCount+=o)},Ee=t=>{t&&(t.toLoadCount-=1)},Pt=(t,o)=>{t&&(t.toLoadCount=o)},$e=t=>t.loadingCount>0,Le=t=>t.toLoadCount>0,Ft=t=>{let o=[];for(let e=0,s;s=t.children[e];e+=1)s.tagName==="SOURCE"&&o.push(s);return o},ut=(t,o)=>{const e=t.parentNode;if(!e||e.tagName!=="PICTURE")return;Ft(e).forEach(o)},Ut=(t,o)=>{Ft(t).forEach(o)},K=[w],Gt=[w,Rt],z=[w,nt,at],Wt=[Vt],J=t=>!!t[M],qt=t=>t[M],jt=t=>delete t[M],T=(t,o)=>{if(J(t))return;const e={};o.forEach(s=>{e[s]=t.getAttribute(s)}),t[M]=e},Ie=t=>{J(t)||(t[M]={backgroundImage:t.style.backgroundImage})},Ce=(t,o,e)=>{if(!e){t.removeAttribute(o);return}t.setAttribute(o,e)},C=(t,o)=>{if(!J(t))return;const e=qt(t);o.forEach(s=>{Ce(t,s,e[s])})},Se=t=>{if(!J(t))return;const o=qt(t);t.style.backgroundImage=o.backgroundImage},Kt=(t,o,e)=>{x(t,o.class_applied),S(t,Yt),e&&(o.unobserve_completed&&j(t,o),L(o.callback_applied,t,e))},Jt=(t,o,e)=>{x(t,o.class_loading),S(t,rt),e&&(dt(e,1),L(o.callback_loading,t,e))},E=(t,o,e)=>{e&&t.setAttribute(o,e)},ht=(t,o)=>{E(t,at,p(t,o.data_sizes)),E(t,nt,p(t,o.data_srcset)),E(t,w,p(t,o.data_src))},Ae=(t,o)=>{ut(t,e=>{T(e,z),ht(e,o)}),T(t,z),ht(t,o)},Oe=(t,o)=>{T(t,K),E(t,w,p(t,o.data_src))},Te=(t,o)=>{Ut(t,e=>{T(e,K),E(e,w,p(e,o.data_src))}),T(t,Gt),E(t,Rt,p(t,o.data_poster)),E(t,w,p(t,o.data_src)),t.load()},xe=(t,o)=>{T(t,Wt),E(t,Vt,p(t,o.data_src))},Ne=(t,o,e)=>{const s=p(t,o.data_bg),n=p(t,o.data_bg_hidpi),a=xt&&n?n:s;a&&(t.style.backgroundImage=`url("${a}")`,Ht(t).setAttribute(w,a),Jt(t,o,e))},Re=(t,o,e)=>{const s=p(t,o.data_bg_multi),n=p(t,o.data_bg_multi_hidpi),a=xt&&n?n:s;a&&(t.style.backgroundImage=a,Kt(t,o,e))},Ve=(t,o,e)=>{const s=p(t,o.data_bg_set);if(!s)return;const n=s.split("|");let a=n.map(d=>`image-set(${d})`);t.style.backgroundImage=a.join(),t.style.backgroundImage===""&&(a=n.map(d=>`-webkit-image-set(${d})`),t.style.backgroundImage=a.join()),Kt(t,o,e)},Zt={IMG:Ae,IFRAME:Oe,VIDEO:Te,OBJECT:xe},ze=(t,o)=>{const e=Zt[t.tagName];e&&e(t,o)},Ye=(t,o,e)=>{const s=Zt[t.tagName];s&&(s(t,o),Jt(t,o,e))},Me=["IMG","IFRAME","VIDEO","OBJECT"],De=t=>Me.indexOf(t.tagName)>-1,Qt=(t,o)=>{o&&!$e(o)&&!Le(o)&&L(t.callback_finish,o)},gt=(t,o,e)=>{t.addEventListener(o,e),t.llEvLisnrs[o]=e},Be=(t,o,e)=>{t.removeEventListener(o,e)},_t=t=>!!t.llEvLisnrs,He=(t,o,e)=>{_t(t)||(t.llEvLisnrs={});const s=t.tagName==="VIDEO"?"loadeddata":"load";gt(t,s,o),gt(t,"error",e)},et=t=>{if(!_t(t))return;const o=t.llEvLisnrs;for(let e in o){const s=o[e];Be(t,e,s)}delete t.llEvLisnrs},Xt=(t,o,e)=>{ye(t),dt(e,-1),Ee(e),b(t,o.class_loading),o.unobserve_completed&&j(t,e)},Pe=(t,o,e,s)=>{const n=lt(o);Xt(o,e,s),x(o,e.class_loaded),S(o,zt),L(e.callback_loaded,o,s),n||Qt(e,s)},Fe=(t,o,e,s)=>{const n=lt(o);Xt(o,e,s),x(o,e.class_error),S(o,ct),L(e.callback_error,o,s),e.restore_on_error&&C(o,z),n||Qt(e,s)},ft=(t,o,e)=>{const s=Ht(t)||t;if(_t(s))return;He(s,d=>{Pe(d,t,o,e),et(s)},d=>{Fe(d,t,o,e),et(s)})},Ue=(t,o,e)=>{be(t),ft(t,o,e),Ie(t),Ne(t,o,e),Re(t,o,e),Ve(t,o,e)},Ge=(t,o,e)=>{ft(t,o,e),Ye(t,o,e)},pt=(t,o,e)=>{De(t)?Ge(t,o,e):Ue(t,o,e)},We=(t,o,e)=>{t.setAttribute("loading","lazy"),ft(t,o,e),ze(t,o),S(t,Mt)},bt=t=>{t.removeAttribute(w),t.removeAttribute(nt),t.removeAttribute(at)},qe=t=>{ut(t,o=>{bt(o)}),bt(t)},to=t=>{ut(t,o=>{C(o,z)}),C(t,z)},je=t=>{Ut(t,o=>{C(o,K)}),C(t,Gt),t.load()},Ke=t=>{C(t,K)},Je=t=>{C(t,Wt)},Ze={IMG:to,IFRAME:Ke,VIDEO:je,OBJECT:Je},Qe=t=>{const o=Ze[t.tagName];if(!o){Se(t);return}o(t)},Xe=(t,o)=>{it(t)||lt(t)||(b(t,o.class_entered),b(t,o.class_exited),b(t,o.class_applied),b(t,o.class_loading),b(t,o.class_loaded),b(t,o.class_error))},ts=(t,o)=>{Qe(t),Xe(t,o),q(t),jt(t)},os=(t,o,e,s)=>{e.cancel_on_exit&&me(t)&&t.tagName==="IMG"&&(et(t),qe(t),to(t),b(t,e.class_loading),dt(s,-1),q(t),L(e.callback_cancel,t,o,s))},es=(t,o,e,s)=>{const n=ge(t);S(t,fe),x(t,e.class_entered),b(t,e.class_exited),we(t,e,s),L(e.callback_enter,t,o,s),!n&&pt(t,e,s)},ss=(t,o,e,s)=>{it(t)||(x(t,e.class_exited),os(t,o,e,s),L(e.callback_exit,t,o,s))},ns=["IMG","IFRAME","VIDEO"],oo=t=>t.use_native&&"loading"in HTMLImageElement.prototype,as=(t,o,e)=>{t.forEach(s=>{ns.indexOf(s.tagName)!==-1&&We(s,o,e)}),Pt(e,0)},rs=t=>t.isIntersecting||t.intersectionRatio>0,cs=t=>({root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}),is=(t,o,e)=>{t.forEach(s=>rs(s)?es(s.target,s,o,e):ss(s.target,s,o,e))},ls=(t,o)=>{o.forEach(e=>{t.observe(e)})},ds=(t,o)=>{ke(t),ls(t,o)},us=(t,o)=>{!Ot||oo(t)||(o._observer=new IntersectionObserver(e=>{is(e,t,o)},cs(t)))},eo=t=>Array.prototype.slice.call(t),G=t=>t.container.querySelectorAll(t.elements_selector),_s=t=>eo(t).filter(it),fs=t=>ve(t),ps=t=>eo(t).filter(fs),yt=(t,o)=>_s(t||G(o)),ms=(t,o)=>{ps(G(t)).forEach(s=>{b(s,t.class_error),q(s)}),o.update()},vs=(t,o)=>{$&&(o._onlineHandler=()=>{ms(t,o)},window.addEventListener("online",o._onlineHandler))},hs=t=>{$&&window.removeEventListener("online",t._onlineHandler)},B=function(t,o){const e=Nt(t);this._settings=e,this.loadingCount=0,us(e,this),vs(e,this),this.update(o)};B.prototype={update:function(t){const o=this._settings,e=yt(t,o);if(Pt(this,e.length),At||!Ot){this.loadAll(e);return}if(oo(o)){as(e,o,this);return}ds(this._observer,e)},destroy:function(){this._observer&&this._observer.disconnect(),hs(this),G(this._settings).forEach(t=>{jt(t)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){const o=this._settings;yt(t,o).forEach(s=>{j(s,this),pt(s,o,this)})},restoreAll:function(){const t=this._settings;G(t).forEach(o=>{ts(o,t)})}};B.load=(t,o)=>{const e=Nt(o);pt(t,e)};B.resetStatus=t=>{q(t)};$&&_e(B,window.lazyLoadOptions);function gs(t={}){return document.querySelectorAll(".lazy").forEach(o=>{const e=o.getAttribute("src");o.removeAttribute("src"),o.setAttribute("data-src",e??"")}),new B({elements_selector:".lazy",...t})}function bs(){const t=Lt();t.value.vanillaLazyload.enable&&It(()=>{gs(t.value.vanillaLazyload)})}function ys(){go&&window.addEventListener("click",t=>{var e;const o=t.target;if(o.matches(".vp-code-group input")){const s=(e=o.parentElement)==null?void 0:e.parentElement;if(!s)return;const n=Array.from(s.querySelectorAll("input")).indexOf(o);if(n<0)return;const a=s.querySelector(".blocks");if(!a)return;const d=Array.from(a.children).find(N=>N.classList.contains("active"));if(!d)return;const m=a.children[n];if(!m||d===m)return;d.classList.remove("active"),m.classList.add("active");const v=s==null?void 0:s.querySelector(`label[for="${o.id}"]`);v==null||v.scrollIntoView({block:"nearest"})}})}const ks={key:0,text:"center"},ws=["href"],Es={m:"y-4",class:"end flex justify-center items-center"},$s=i("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Ls={p:"x-4",font:"bold",class:"whitespace-nowrap"},Is=i("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Cs=g({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(t){const o=t,{t:e}=Y(),s=tt();return Ct(()=>{bo(s.value)}),It(()=>{F()}),yo(()=>{F()}),o.frontmatter.aplayer&&ko(),o.frontmatter.codepen&&wo(),Eo(),ys(),$o(),(typeof o.frontmatter.medium_zoom>"u"||o.frontmatter.medium_zoom)&&Lo(),bs(),(n,a)=>n.$slots.default?(l(),f("article",{key:0,class:V(n.frontmatter.markdown!==!1&&"markdown-body")},[u(n.$slots,"default",{ref_key:"contentRef",ref:s,onVnodeUpdated:a[0]||(a[0]=(...d)=>r(F)&&r(F)(...d))}),n.frontmatter.url?(l(),f("div",ks,[i("a",{href:n.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},y(r(e)("post.view_link")),9,ws)])):_("v-if",!0),n.frontmatter.end!==void 0?u(n.$slots,"end",{key:1},()=>[i("div",Es,[$s,i("span",Ls,y(n.frontmatter.end?"Q.E.D.":"To Be Continued."),1),Is])]):_("v-if",!0)],2)):_("v-if",!0)}}),Ss={key:0,class:"yun-time-warning",op:"80"},As=g({__name:"YunMdTimeWarning",setup(t){const o=st();U.extend(Io);const{t:e}=Y(),s=ot(()=>{const n=U().valueOf()-U(o.value.updated||o.value.date).valueOf();return typeof o.value.time_warning=="number"?n>o.value.time_warning:o.value.time_warning});return(n,a)=>s.value?(l(),f("blockquote",Ss,y(r(e)("post.time_warning",{ago:r(U)(r(o).updated).fromNow()})),1)):_("v-if",!0)}}),Os={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},Ts={font:"black",flex:"","items-center":""},xs=i("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1),Ns={op:"90","mt-1":""},Rs=g({__name:"YunAiExcerpt",setup(t){const o=st(),{t:e}=Y();return(s,n)=>(l(),f("div",Os,[i("div",Ts,[xs,i("div",null,y(r(e)("excerpt.ai")),1)]),i("div",Ns,y(r(o).excerpt),1)]))}}),Vs={class:"yun-main md:pl-$va-sidebar-width lt-md:ml-0",flex:"~"},zs={w:"full",flex:"~"},Ys={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},Fs=g({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(t){const o=t,e=Lt(),{styles:s,icon:n,color:a}=Co(o.frontmatter.type),d=So(ot(()=>o.frontmatter)),m=ot(()=>o.frontmatter.aside!==!1),v=Ao(),N=Oo();return To(()=>{v.hash&&setTimeout(()=>{mt(document.body,v.hash,!0)},0)}),Ct(()=>{window.addEventListener("click",async c=>{const R=c.target.closest("a");if(R){const{protocol:Z,hostname:Q,pathname:H,hash:A,target:X}=R,O=window.location,P=H.match(/\.\w+$/);!c.ctrlKey&&!c.shiftKey&&!c.altKey&&!c.metaKey&&X!=="_blank"&&Z===O.protocol&&Q===O.hostname&&!(P&&P[0]!==".html")&&H===O.pathname&&(c.preventDefault(),A&&A!==O.hash&&(await N.push({hash:decodeURIComponent(A)}),mt(R,A,R.classList.contains("header-anchor"))))}},{capture:!0})}),(c,R)=>{const Z=Ro,Q=Rs,H=As,A=Cs,X=St,O=de,P=ee,so=No,no=Qo;return l(),f("main",Vs,[i("div",zs,[u(c.$slots,"main",{},()=>[i("div",{class:V(["content",!m.value&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[k(X,{cover:c.frontmatter.cover,m:"0",class:"relative",style:xo(r(s))},{default:I(()=>[u(c.$slots,"main-header",{},()=>[k(Z,{class:"mb-2",title:r(d),icon:c.frontmatter.icon||r(n),color:c.frontmatter.color||r(a),cover:c.frontmatter.cover},null,8,["title","icon","color","cover"])]),u(c.$slots,"main-header-after"),i("div",Ys,[u(c.$slots,"main-content",{},()=>[_(" <Transition appear> "),k(A,{frontmatter:c.frontmatter},{default:I(()=>[c.frontmatter.excerpt_type==="ai"&&c.frontmatter.excerpt?(l(),h(Q,{key:0})):_("v-if",!0),k(H),u(c.$slots,"main-content-md"),u(c.$slots,"default")]),_:3},8,["frontmatter"]),_(" </Transition> ")]),u(c.$slots,"main-content-after")])]),_:3},8,["cover","style"]),u(c.$slots,"main-nav-before"),u(c.$slots,"main-nav",{},()=>[c.frontmatter.nav!==!1?(l(),h(O,{key:0})):_("v-if",!0)]),u(c.$slots,"main-nav-after"),r(e).comment.enable&&c.frontmatter.comment!==!1?u(c.$slots,"comment",{key:0},()=>[k(P,{class:V(c.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):_("v-if",!0),u(c.$slots,"main-footer-before"),k(so),u(c.$slots,"main-footer-after")],2)]),u(c.$slots,"aside",{},()=>[m.value?(l(),h(no,{key:0},{default:I(()=>[u(c.$slots,"aside-custom")]),_:3})):_("v-if",!0)])])])}}});export{Fs as _};
