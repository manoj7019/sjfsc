"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1445],{17830:function(t,e,n){n.d(e,{rc:function(){return v},sj:function(){return m}});var r=n(53860),i=n(63749),o=n(83047),l=n(44693),s=n(67294),a=n(31841),d=n(94133),u=n(67404),h=n(71656),c=n(27659),p=n(54857);let g=(t,e,n)=>async function(){let{signal:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.uz)("".concat(c.apiBaseUrl,"/api/v1/flag-counts/").concat(t,"/").concat(e),{ids:n},{abortSignal:r})},f=function(t,e,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return(0,l.BN)("".concat(c.apiBaseUrl,"/api/v1/flag/").concat(t,"/").concat(n,"/").concat(e),{headers:{"X-CSRF-Token":i},method:r?"POST":"DELETE"})},y={data:void 0,error:void 0,isError:!1,isFetching:!1,isPending:!1},w=[],v=function(t,e){let n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],i=(0,s.useMemo)(()=>{if(!n||!(null==e?void 0:e.length))return w;let r={enabled:!!n&&(null==e?void 0:e.length)>0},i=[];for(let n=0;n<e.length;n+=50){let o=e.slice(n,n+50);i.push({queryKey:h.O.Favorites({type:t,hashId:o.reduce((t,e)=>"number"==typeof e&&"number"==typeof t?(31*t+e)%Number.MAX_SAFE_INTEGER:String(t).concat(String(e)),"number"==typeof(null==e?void 0:e[0])?23:"")}),queryFn:g(t,"favourite",o),...r})}return i},[e,t,n]);return(0,r.h)({queries:i,combine:t=>({data:t.reduce((t,e)=>(Object.assign(t,e.data),t),{}),isPending:t.some(t=>t.isPending),isFetching:t.some(t=>t.isFetching),isSuccess:t.every(t=>t.isSuccess)})})||y},m=()=>{let{showRawpixelTeam:t}=(0,a.ZP)(),e=(0,p.EC)(),{activeTeam:n}=(0,d.Z)(),r=(0,u.Z)(),{mutate:l}=(0,i.D)({mutationFn:t=>f(t.type,"favourite",t.id,t.flagged,e.token),onMutate:t=>{let{type:e,id:n,flagged:i}=t,o=r.mutate(h.O.Favorites(),t=>t.type===e,t=>{if(t[n]){let e={count:i?t[n].count+1:t[n].count-1,flagged:i};return{...t,[n]:e}}return null});return o.commit(),{transaction:o}},onError:(t,e,n)=>{let{transaction:r}=n;r.rollback()},onSuccess:(e,i)=>{let{type:l,userId:s}=i;switch(l){case"topic":case"widget":r.reset(h.O.Topics(),t=>parseInt(t[o.Z.COMMON.FLAGGED_BY],10)===s,!1),t&&r.invalidate(h.O.FlaggedIds());break;case"image":r.reset(h.O.Images(),t=>parseInt(t[o.Z.COMMON.FLAGGED_BY],10)===s,!1);break;case"board":case"category":r.reset(h.O.Boards(),t=>parseInt(t[o.Z.COMMON.FLAGGED_BY],10)===s||parseInt(t[o.Z.COMMON.ACCOUNT_ID],10)===s,!1);break;case"project":r.reset(h.O.Projects(),t=>parseInt(t[o.Z.COMMON.FLAGGED_BY],10)===s||!!n&&parseInt(t[o.Z.COMMON.TEAM_ID],10)===n.id,!1)}}});return s.useMemo(()=>({set:(t,e,n,r)=>{l({type:e,userId:t,id:n,flagged:r})}}),[l])}},24730:function(t,e,n){var r=n(88095),i=n(49092);let o=r.ZP.div.withConfig({componentId:"sc-7adbd4be-0"})(["position:absolute;transition:opacity 0.2s ease-in-out;display:flex;flex-wrap:wrap;overflow:hidden;pointer-events:none;> *{pointer-events:auto;margin:2px;}&.full{inset:0;top:0;left:0;right:0;bottom:0;align-items:center;justify-content:center;}&.top{top:0;padding-top:4px;}&.left{left:0;padding-left:4px;}&.bottom{bottom:0;padding-bottom:4px;}&.right{right:0;padding-right:4px;}&.justified{left:0;right:0;padding-left:4px;padding-right:4px;}&.reverse{flex-wrap:wrap-reverse;}.filler{pointer-events:none;flex-grow:1;}@media (hover:hover) and (pointer:fine){opacity:0;.is-popup-active &{opacity:1;}}","{opacity:1;}","{display:none;}"],i.Mq,i.ai);e.Z=o},31401:function(t,e,n){n.d(e,{$R:function(){return o},CX:function(){return p},D8:function(){return h},O6:function(){return s},P8:function(){return c},Pm:function(){return d},Vs:function(){return a},eE:function(){return i},m3:function(){return u},zT:function(){return l}});var r=n(49092);let i=[{width:0,style:"masonry",prefWidth:300,buttons:"none"},{width:r.tu,style:"rowgrid",prefHeight:300,buttons:"overlay"},{width:1300,style:"rowgrid",prefHeight:340,buttons:"overlay"}],o=[{width:0,style:"rowgrid",prefHeight:300,buttons:"mobile"},{width:1300,style:"rowgrid",prefHeight:340,buttons:"overlay"}],l=[{width:0,style:"masonry",prefWidth:300,buttons:"boost"},{width:r.tu,style:"rowgrid",prefHeight:300,buttons:"overlay"},{width:1300,style:"rowgrid",prefHeight:340,buttons:"overlay"}],s=[{width:0,style:"rowgrid",prefHeight:300,buttons:"mobile"},{width:r.tu,style:"rowgrid",prefHeight:300,buttons:"overlay"},{width:1300,style:"rowgrid",prefHeight:410,buttons:"overlay"},{width:1600,style:"rowgrid",prefHeight:440,buttons:"overlay"}];r.tu;let a=[{width:0,style:"masonry",prefWidth:300,buttons:"none"},{width:567,style:"masonry",prefWidth:306,buttons:"overlay"},{width:918,style:"masonry",prefWidth:342,buttons:"overlay"},{width:1368,style:"masonry",prefWidth:456,buttons:"overlay"},{width:1679,style:"masonry",prefWidth:420,buttons:"overlay"}],d=[{width:0,style:"rowgrid",prefHeight:300,buttons:"mobile"},{width:567,style:"masonry",prefWidth:306,buttons:"overlay"},{width:918,style:"masonry",prefWidth:342,buttons:"overlay"},{width:1368,style:"masonry",prefWidth:456,buttons:"overlay"},{width:1679,style:"masonry",prefWidth:420,buttons:"overlay"}],u=[{width:0,style:"masonry",prefWidth:200,margin:8}],h=[{width:0,style:"masonry",prefWidth:90,margin:8}],c=[{width:0,style:"rowgrid",prefHeight:800,margin:8,buttons:"overlay"}],p=[{width:0,style:"rowgrid",prefHeight:240}]},28477:function(t,e,n){n.d(e,{Q5:function(){return h},YW:function(){return u},ZL:function(){return l}});var r=n(67294),i=n(88095),o=n(49092);let l=t=>[!!t.find(t=>"overlay"===t.buttons),!!t.find(t=>"mobile"===t.buttons),!!t.find(t=>"boost"===t.buttons)],s=i.ZP.div.withConfig({componentId:"sc-92d44d6-0"})([".inner-wrapper{margin:-","px;","{margin:-","px;}> div{margin:","px;","{margin:","px;}}}.rowgrid.inner-wrapper{display:flex;flex-wrap:wrap;> div{","{width:100% !important;}}}.masonry.inner-wrapper{display:flex;position:relative;> div{position:absolute;height:auto;}}"],9,o.ai,5,9,o.ai,5,o.ai),a=(t,e,n,r,i)=>{if(-1===t||!r)return[];let o=n.prefHeight,l=[];if(r.length){let n=0,s=0;r.forEach((a,d)=>{let[u,h]=i(a);if(l[d]={width:u/h*o},(n=n+e+l[d].width)>t+e||d===r.length-1){let r=(d-s+1)*e,i=t-r,o=Math.max(i,n-r);for(let n=s;n<=d;n++){let r=(l[n].width/o*i+e)/t*100;l[n].width="calc(".concat(r,"% - ").concat(e,"px)")}n=0,s=d+1}})}return l},d=(t,e,n,r,i)=>{if(-1===t||!(null==r?void 0:r.length))return[];let o=Math.ceil(t/n.prefWidth),l=Math.round((t-e*o)/o),s=[];for(let t=0;t<o;t++)s.push([]);let a=t=>{var n,r,i;let o=0;for(let e=0;e<t.length;e++){let n=t[e],l=null===(r=n[(null==n?void 0:n.length)-1||0])||void 0===r?void 0:r.runningHeight,s=t[o];if(l)l<(null===(i=s[(null==s?void 0:s.length)-1||0])||void 0===i?void 0:i.runningHeight)&&(o=e);else{o=e;break}}let s=t[o];return[o*(l+e),(null===(n=s[(null==s?void 0:s.length)-1||0])||void 0===n?void 0:n.runningHeight)||0,s]};for(let t=0;t<r.length;t++){let[n,o,d]=a(s),u=Math.round(i(r[t],l,window.innerWidth)),h={width:"".concat(l,"px"),left:"".concat(n,"px"),top:"".concat(o,"px"),topPx:o,index:t,probableHeight:u,runningHeight:o+u+e};d.push(h)}return s},u=(t,e,n,r,i)=>{let l=()=>{try{let l=t.current.children,s=t.current.clientWidth,u=n[0].margin||window.innerWidth<o.tu?10:18,h=n.reduce((t,e)=>e.width<s?e:t,n[0]);if(t.current.style.minHeight=0,"rowgrid"===h.style){t.current.style.height="auto";let n=a(s,u,h,e,r);t.current.classList.remove("masonry"),t.current.classList.add("rowgrid"),n.forEach((t,e)=>{l[e].style.width=t.width,l[e].style.left=null,l[e].style.top=null,l[e].style.display="block"})}else if("masonry"===h.style&&-1!==s&&e){let n=d(s,u,h,e,i);t.current.classList.remove("rowgrid"),t.current.classList.add("masonry");for(let t=0;t<n.length;t++)for(let e=0;e<n[t].length;e++){let r=n[t][e];l[r.index].style.left=r.left,l[r.index].style.top=r.top,l[r.index].style.width=r.width,l[r.index].style.display="block"}for(let t=0;t<n.length;t++)for(let e=0,r=0;e<n[t].length;e++){let i=n[t][e],o=l[i.index].clientHeight-i.probableHeight;0!==r&&(l[i.index].style.top="".concat(i.topPx+r,"px")),0!==o&&(r+=o)}let r=0;for(let t=0;t<n.length;t++){let e=n[t],i=e[(null==e?void 0:e.length)-1||0];if(i){let t=l[i.index].offsetTop+l[i.index].clientHeight+u;r=Math.max(t,r)}}t.current.style.height="".concat(r,"px")}}catch(t){}};return l(),window.addEventListener("resize",l),window.addEventListener("com.rawpixel.rowgrid.relayout",l),()=>{window.removeEventListener("resize",l),window.removeEventListener("com.rawpixel.rowgrid.relayout",l)}},h=()=>{window.dispatchEvent(new Event("com.rawpixel.rowgrid.relayout"))};e.ZP=r.memo(s)}}]);