"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7223],{20074:function(e,t,n){n.d(t,{z:function(){return g}});var l=n(63749),i=n(50361),a=n.n(i),o=n(44693),r=n(5420),u=n(67294),d=n(67404),s=n(71656),c=n(27659),v=n(54857);let f=(e,t)=>{let n="".concat(c.apiBaseUrl,"/api/v1/image/pinned/").concat(e);return(0,o.uz)(n,{},{headers:{"X-CSRF-Token":t}})},g=()=>{let{token:e}=(0,v.EC)(),t=(0,d.Z)(),n=(0,l.D)({mutationFn:t=>{let{id:n}=t;return f(n,e)},onSuccess:(e,n)=>{let{id:l}=n,i=t.mutate(s.O.Images(),e=>e.pinterest_filter&&1===(0,r.w2)(e.pinterest_filter),t=>{let n=t.results.findIndex(e=>e.id===l);if(t.results[n]){let l=a()(t),i=(0,r.w2)(l.results[n].pinterest_viewed_user_remaining,0),o=(0,r.w2)(l.results[n].pinterest_counts_required,0)-e.count,u=l.pinterest_totals.user_remaining;return l.results[n].pinterest_viewed_user_remaining=Math.max(0,o),l.results[n].pinterest_counts_required=Math.max(0,o),l.pinterest_totals.user_remaining=u-(i-Math.max(0,o)),0===o&&(l.results.splice(n,1),l.total-=1),l}return null});return i.commit(),{transaction:i}},onError:(e,t,n)=>{let{transaction:l}=n;l.rollback()}});return{set:(0,u.useCallback)(e=>n.mutate({id:e}),[n])}}},25895:function(e,t,n){n.d(t,{Ij:function(){return s},JP:function(){return c},RW:function(){return r},U9:function(){return d},tj:function(){return u}});var l=n(82907),i=n(94716),a=n(29746),o=n(49092);let r=6,u=(e,t,n)=>{var l;let i=e.display_image_width||e.width||1,a=e.display_image_height||e.height||1;return(null==e?void 0:null===(l=e.metadata)||void 0===l?void 0:l.isPrint)&&n<o.tu?2*r+a/i*(t-2*r):a/i*t},d=(e,t)=>{let[n,i]=(0,l.pF)(e.width,e.height,e.units);return t/(n/i)},s=e=>[(null==e?void 0:e.display_image_width)||(null==e?void 0:e.width)||1,(null==e?void 0:e.display_image_height)||(null==e?void 0:e.height)||1],c=async(e,t)=>{try{let n=await (0,i.ny)(e.uid,e.id,t);(null==n?void 0:n.url)&&(0,a.O)(n.url)}catch(e){console.log(e)}}},38890:function(e,t,n){var l=n(76140),i=n(50361),a=n.n(i),o=n(67294),r=n(16550),u=n(17830),d=n(71656),s=n(20074),c=n(37415),v=n(54857),f=n(33832),g=n(2627),m=n(77391),p=n(31841),h=n(56709),b=n(61334),w=n(49092),_=n(95009),y=n(94133),k=n(28918),C=n(80161);let D={};t.Z=(e,t,n,i)=>{var T,x;let{data:F}=(0,v.aF)(),R=(0,v.EC)(),S=R.isReady&&R.isLoggedIn,{data:Z}=(0,f.Z0)(S),{activeTeam:P}=(0,y.Z)(),{showUpgradeModal:E,showFreeSignupThrottledModal:L}=(0,k.Z)(),{setOpen:q}=(0,h.ZP)(),{setOpen:B}=(0,m.Z)(),I=(0,r.k6)(),M=(0,c.R)(),{showRawpixelTeam:O}=(0,p.ZP)(),j=(0,C.Z)(w._y),{openSignupModal:N,closeModal:z}=(0,g.ZP)(),[U,A]=(0,o.useState)(!1),[H,G]=(0,o.useState)(),[J,Q]=(0,o.useState)(!1),[W,X]=(0,o.useState)(),K=!!O&&!!(null==F?void 0:null===(T=F.access)||void 0===T?void 0:T.show_rawpixel_team),V=o.useMemo(()=>{var t;return null===(t=e||[])||void 0===t?void 0:t.filter(e=>null==e?void 0:e.id).map(e=>null==e?void 0:e.id)},[e]),{data:Y=D}=(0,u.rc)("image",V,(null==V?void 0:V.length)>0&&!i),{set:$}=(0,u.sj)(),{set:ee}=(0,s.z)(),et=(0,l.NL)(),en=o.useCallback(e=>{if(!j&&!K){null==e||e.preventDefault(),A(!0);return}},[K,j]),el=o.useCallback(e=>{if(!j&&!K){e.preventDefault(),A(!0);return}},[j,K]),ei=o.useCallback((e,t,l)=>{if(n){n(e,t,l);return}if("image"===e.type){et.setQueryData(d.O.ImageLocal({id:e.id}),{image:a()(e),placeHolderSrc:t});return}"template"===e.type&&en(l),"design"===e.type&&el(l)},[n,et,el,en]),ea=o.useCallback((e,t,n)=>{if(F&&F.uid>0)$(F.uid,"image",t,n);else{var l,i;(null==F?void 0:null===(i=F.website_status)||void 0===i?void 0:null===(l=i.throttle_free_signup)||void 0===l?void 0:l.enabled)?L(!0):N()}},[F,$,N,L]),eo=o.useCallback(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=arguments.length>3?arguments[3]:void 0;if((null==F?void 0:F.uid)>0){e.stopPropagation(),e.preventDefault();let i=o.createRef();i.current=e.currentTarget,q(i,t,n,l)}else{var i,a;(null==F?void 0:null===(a=F.website_status)||void 0===a?void 0:null===(i=a.throttle_free_signup)||void 0===i?void 0:i.enabled)?L(!0):N()}},[q,null==F?void 0:F.uid,N,L,null==F?void 0:F.website_status]),er=o.useCallback((e,t,n,l)=>{e.stopPropagation(),e.preventDefault();let i=o.createRef();i.current=e.currentTarget,B(i,t,n,l)},[B]),eu=o.useCallback((e,n,l,i)=>{if(F&&F.uid>0){if(e.stopPropagation(),e.preventDefault(),"project"!==l)return;let{id:a}=t;M(a,[{type:b.Uu[n.type],id:n.id}],"delete",i)}},[F,M,t]),ed=o.useCallback((e,t)=>{F&&F.uid>0&&ee(t)},[F,ee]),es=o.useCallback(e=>{if(!j&&!K){null==e||e.preventDefault(),A(!0);return}},[K,j]),ec=o.useCallback((t,n)=>{let l=e.find(e=>e.id===n);if(l){if(F&&F.uid>0){var i,a,o,r,u,d,s,c;!F.is_free||F.free_premium_active||(null==l?void 0:null===(i=l.metadata)||void 0===i?void 0:i.isFreeLicense)||(null==l?void 0:null===(a=l.metadata)||void 0===a?void 0:a.isCC0License)?K||!F.is_free||F.free_premium_active||null==l||null===(o=l.metadata)||void 0===o||!o.isFreeLicense||(null==l?void 0:null===(r=l.metadata)||void 0===r?void 0:r.isCC0License)||(null==Z?void 0:null===(u=Z.limits)||void 0===u?void 0:u.unlimited)||!((null==Z?void 0:null===(d=Z.limits)||void 0===d?void 0:d.remaining)<=0)||(null==Z?void 0:null===(c=Z.limits)||void 0===c?void 0:null===(s=c.ids)||void 0===s?void 0:s.includes(null==l?void 0:l.id))?G(l):E({feature:_.HN,upgradeBoxType:"black"}):E({feature:_.D8,upgradeBoxType:"black",image:l})}else I.push("/user/register?destination=/image/".concat(n))}},[e,F,I,null==Z?void 0:Z.limits,K,E]),ev=o.useCallback((e,t)=>{Q(!0),X(t)},[]),ef=o.useCallback(()=>{z(),A(!1),G(void 0)},[z]),eg=!!(null==F?void 0:F.uid)&&!!t&&((null==F?void 0:null===(x=F.access)||void 0===x?void 0:x.edit_any_board)||"user"===t.owner.type&&t.owner.id===(null==F?void 0:F.uid)||!!P&&"team"===t.owner.type&&t.owner.id===P.id),em=o.useCallback(()=>{G(void 0),Q(!1),X(null)},[]);return o.useMemo(()=>({onImageClick:ei,canDeleteFromProject:eg,onSaveClick:eo,onDotsMenuClick:er,onDeleteFromProjectClick:eu,onFavoriteClick:ea,onPinterestClick:ed,onAdjustmentClick:es,favorites:Y,closeModal:ef,onDownloadClick:ec,imageToDownload:H,closeDrawer:em,onShareClick:ev,shareImage:W,shareDrawer:J,showEditRestrictedModal:U}),[ei,eg,eo,er,eu,ea,ed,es,Y,ef,ec,H,em,ev,W,J,U])}},29746:function(e,t,n){n.d(t,{O:function(){return l},u:function(){return o}});let l=e=>{window.location.assign(e)},i=null,a=()=>{if("boolean"==typeof i)return i;if("undefined"==typeof ReadableStream||"undefined"==typeof Request||"undefined"==typeof Blob||"function"!=typeof new Blob().arrayBuffer)return i=!1;try{let e=!1,t=new Request("",{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");i=e&&!t}catch(e){i=!1}return i};async function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];{if(!t||(null==t?void 0:t.length)===0||!a()){window.location.assign(e);return}let r=[e,...t],u=0,d=Date.now();for(;r.length>0&&Date.now()-d<3e4;){let a=Date.now(),s=r.shift(),c=null,v=null,f=null,g=new AbortController;g.signal.onabort=e=>{var t;return null==e?void 0:null===(t=e.preventDefault)||void 0===t?void 0:t.call(e)};let m=setTimeout(()=>{g.signal.aborted||g.abort("Timeout. Download url is not reachable: "+s)},6500);try{(null==(c=await fetch(s,{method:"GET",signal:g.signal,credentials:"omit"}))?void 0:c.ok)||(f=!1,console.warn({message:"File connection failed ".concat(e,": ").concat(c.status," ").concat(c.statusText)}))}catch(t){g.signal.aborted?console.debug("Aborted. Timeout."):console.warn({message:"File connection failed ".concat(e,": ").concat(t.message),ok:null==c?void 0:c.ok,status:null==c?void 0:c.status}),f=!1}if(!1===f){try{clearTimeout(m),g.signal.aborted||g.abort("Done.")}catch(e){}u+=1;continue}if(!g.signal.aborted&&(null==c?void 0:c.ok)&&(null==c?void 0:c.status)===200){if(u>0||Date.now()-a>5e3)f=!0,console.debug("File connection ok. ".concat(0===u?"Triggered the original download url request, no test connection too slow. ".concat(Date.now()-a," ms."):"Triggering a mirror download url request. ".concat(Date.now()-a," ms, ").concat(u,"/").concat(t.length," mirror attempts.")));else{var n,l,i,o;let t=!c.body.locked&&(null==c?void 0:null===(l=c.body)||void 0===l?void 0:null===(n=l.getReader)||void 0===n?void 0:n.call(l));try{v=await t.read()}catch(n){console.warn({message:"File read failed ".concat(e,": ").concat(c.status," ").concat(c.statusText),error:n.message}),null==t||null===(o=t.cancel)||void 0===o||o.call(t).catch()}(null==v?void 0:null===(i=v.value)||void 0===i?void 0:i.byteLength)>1e3&&(f=!0,console.debug("File readable. Triggered the original download url request. ".concat(Date.now()-a," ms.")))}try{clearTimeout(m),g.signal.aborted||g.abort("Done.")}catch(e){}if(!0===f){console.debug("Triggered after ".concat(Date.now()-d," ms.")),window.location.assign(e);return}}u+=1}window.location.assign(e)}}},82907:function(e,t,n){n.d(t,{Mm:function(){return i},b7:function(){return l},jB:function(){return a},pF:function(){return o}});let l=96,i=300,a=150,o=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"px",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:l,o="number"==typeof e?e:parseFloat(e),r="number"==typeof t?t:parseFloat(t);if(n===i)return[o,r];let u=a/2.54,d=null;switch(n){case"in":d=[o*a,r*a];break;case"cm":d=[o*u,r*u];break;case"px":d=[o,r];break;default:throw Error("Invalid unit value ".concat(n))}let[s,c]=d;switch(i){case"in":return[s/a,c/a];case"cm":return[s/u,c/u];case"px":return d;default:throw Error("Invalid unit value ".concat(i))}}}}]);