var vh=Object.defineProperty;var _h=(e,t,n)=>t in e?vh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Fi=(e,t,n)=>_h(e,typeof t!="symbol"?t+"":t,n);const wh="modulepreload",yh=function(e){return"/"+e},ml={},f=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=yh(l),l in ml)return;ml[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":wh,c||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((d,m)=>{h.addEventListener("load",d),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&i(o.reason);return t().catch(i)})};/**
* @vue/shared v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ws(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Pe={},ts=[],Mt=()=>{},bh=()=>!1,hr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),so=e=>e.startsWith("onUpdate:"),Me=Object.assign,ro=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},kh=Object.prototype.hasOwnProperty,_e=(e,t)=>kh.call(e,t),se=Array.isArray,ns=e=>fi(e)==="[object Map]",J0=e=>fi(e)==="[object Set]",ie=e=>typeof e=="function",Be=e=>typeof e=="string",En=e=>typeof e=="symbol",Ce=e=>e!==null&&typeof e=="object",Z0=e=>(Ce(e)||ie(e))&&ie(e.then)&&ie(e.catch),e2=Object.prototype.toString,fi=e=>e2.call(e),Eh=e=>fi(e).slice(8,-1),t2=e=>fi(e)==="[object Object]",io=e=>Be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ss=ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ah=/-(\w)/g,pt=mi(e=>e.replace(Ah,(t,n)=>n?n.toUpperCase():"")),xh=/\B([A-Z])/g,An=mi(e=>e.replace(xh,"-$1").toLowerCase()),dr=mi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vi=mi(e=>e?`on${dr(e)}`:""),_n=(e,t)=>!Object.is(e,t),qi=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},us=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Ph=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Th=e=>{const t=Be(e)?Number(e):NaN;return isNaN(t)?e:t};let gl;const n2=()=>gl||(gl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fr(e){if(se(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=Be(s)?Oh(s):fr(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(Be(e)||Ce(e))return e}const Bh=/;(?![^(]*\))/g,Ch=/:([^]+)/,Dh=/\/\*[^]*?\*\//g;function Oh(e){const t={};return e.replace(Dh,"").split(Bh).forEach(n=>{if(n){const s=n.split(Ch);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ih(e){let t="";if(!e||Be(e))return t;for(const n in e){const s=e[n];if(Be(s)||typeof s=="number"){const r=n.startsWith("--")?n:An(n);t+=`${r}:${s};`}}return t}function mr(e){let t="";if(Be(e))t=e;else if(se(e))for(let n=0;n<e.length;n++){const s=mr(e[n]);s&&(t+=s+" ")}else if(Ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function B9(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Be(t)&&(e.class=mr(t)),n&&(e.style=fr(n)),e}const s2="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rh=ws(s2),vl=ws(s2+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function ao(e){return!!e||e===""}const Sh=ws("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),Lh=ws("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");function Fh(e){if(e==null)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"}const Vh=/[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;function qh(e,t){return e.replace(Vh,n=>`\\${n}`)}const r2=e=>!!(e&&e.__v_isRef===!0),i2=e=>Be(e)?e:e==null?"":se(e)||Ce(e)&&(e.toString===e2||!ie(e.toString))?r2(e)?i2(e.value):JSON.stringify(e,a2,2):String(e),a2=(e,t)=>r2(t)?a2(e,t.value):ns(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[ji(s,i)+" =>"]=r,n),{})}:J0(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ji(n))}:En(t)?ji(t):Ce(t)&&!se(t)&&!t2(t)?String(t):t,ji=(e,t="")=>{var n;return En(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class jh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nt,!t&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=nt;try{return nt=this,t()}finally{nt=n}}}on(){nt=this}off(){nt=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function o2(){return nt}function $h(e,t=!1){nt&&nt.cleanups.push(e)}let xe;const $i=new WeakSet;class l2{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&nt.active&&nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$i.has(this)&&($i.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||c2(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_l(this),u2(this);const t=xe,n=Tt;xe=this,Tt=!0;try{return this.fn()}finally{h2(this),xe=t,Tt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)po(t);this.deps=this.depsTail=void 0,_l(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$i.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){va(this)&&this.run()}get dirty(){return va(this)}}let p2=0,js,$s;function c2(e,t=!1){if(e.flags|=8,t){e.next=$s,$s=e;return}e.next=js,js=e}function oo(){p2++}function lo(){if(--p2>0)return;if($s){let t=$s;for($s=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;js;){let t=js;for(js=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function u2(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function h2(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),po(s),Mh(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function va(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(d2(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function d2(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Qs))return;e.globalVersion=Qs;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!va(e)){e.flags&=-3;return}const n=xe,s=Tt;xe=e,Tt=!0;try{u2(e);const r=e.fn(e._value);(t.version===0||_n(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{xe=n,Tt=s,h2(e),e.flags&=-3}}function po(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)po(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Mh(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Tt=!0;const f2=[];function tn(){f2.push(Tt),Tt=!1}function nn(){const e=f2.pop();Tt=e===void 0?!0:e}function _l(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=xe;xe=void 0;try{t()}finally{xe=n}}}let Qs=0;class Nh{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!xe||!Tt||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new Nh(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,m2(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=s)}return n}trigger(t){this.version++,Qs++,this.notify(t)}notify(t){oo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{lo()}}}function m2(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)m2(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const si=new WeakMap,Fn=Symbol(""),_a=Symbol(""),Ws=Symbol("");function et(e,t,n){if(Tt&&xe){let s=si.get(e);s||si.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new gi),r.map=s,r.key=n),r.track()}}function en(e,t,n,s,r,i){const a=si.get(e);if(!a){Qs++;return}const o=l=>{l&&l.trigger()};if(oo(),t==="clear")a.forEach(o);else{const l=se(e),c=l&&io(n);if(l&&n==="length"){const u=Number(s);a.forEach((h,d)=>{(d==="length"||d===Ws||!En(d)&&d>=u)&&o(h)})}else switch(n!==void 0&&o(a.get(n)),c&&o(a.get(Ws)),t){case"add":l?c&&o(a.get("length")):(o(a.get(Fn)),ns(e)&&o(a.get(_a)));break;case"delete":l||(o(a.get(Fn)),ns(e)&&o(a.get(_a)));break;case"set":ns(e)&&o(a.get(Fn));break}}lo()}function Hh(e,t){const n=si.get(e);return n&&n.get(t)}function Qn(e){const t=pe(e);return t===e?t:(et(t,"iterate",Ws),kt(e)?t:t.map(Xe))}function vi(e){return et(e=pe(e),"iterate",Ws),e}const zh={__proto__:null,[Symbol.iterator](){return Mi(this,Symbol.iterator,Xe)},concat(...e){return Qn(this).concat(...e.map(t=>se(t)?Qn(t):t))},entries(){return Mi(this,"entries",e=>(e[1]=Xe(e[1]),e))},every(e,t){return Kt(this,"every",e,t,void 0,arguments)},filter(e,t){return Kt(this,"filter",e,t,n=>n.map(Xe),arguments)},find(e,t){return Kt(this,"find",e,t,Xe,arguments)},findIndex(e,t){return Kt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Kt(this,"findLast",e,t,Xe,arguments)},findLastIndex(e,t){return Kt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Kt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ni(this,"includes",e)},indexOf(...e){return Ni(this,"indexOf",e)},join(e){return Qn(this).join(e)},lastIndexOf(...e){return Ni(this,"lastIndexOf",e)},map(e,t){return Kt(this,"map",e,t,void 0,arguments)},pop(){return Cs(this,"pop")},push(...e){return Cs(this,"push",e)},reduce(e,...t){return wl(this,"reduce",e,t)},reduceRight(e,...t){return wl(this,"reduceRight",e,t)},shift(){return Cs(this,"shift")},some(e,t){return Kt(this,"some",e,t,void 0,arguments)},splice(...e){return Cs(this,"splice",e)},toReversed(){return Qn(this).toReversed()},toSorted(e){return Qn(this).toSorted(e)},toSpliced(...e){return Qn(this).toSpliced(...e)},unshift(...e){return Cs(this,"unshift",e)},values(){return Mi(this,"values",Xe)}};function Mi(e,t,n){const s=vi(e),r=s[t]();return s!==e&&!kt(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Uh=Array.prototype;function Kt(e,t,n,s,r,i){const a=vi(e),o=a!==e&&!kt(e),l=a[t];if(l!==Uh[t]){const h=l.apply(e,i);return o?Xe(h):h}let c=n;a!==e&&(o?c=function(h,d){return n.call(this,Xe(h),d,e)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,e)}));const u=l.call(a,c,s);return o&&r?r(u):u}function wl(e,t,n,s){const r=vi(e);let i=n;return r!==e&&(kt(e)?n.length>3&&(i=function(a,o,l){return n.call(this,a,o,l,e)}):i=function(a,o,l){return n.call(this,a,Xe(o),l,e)}),r[t](i,...s)}function Ni(e,t,n){const s=pe(e);et(s,"iterate",Ws);const r=s[t](...n);return(r===-1||r===!1)&&fo(n[0])?(n[0]=pe(n[0]),s[t](...n)):r}function Cs(e,t,n=[]){tn(),oo();const s=pe(e)[t].apply(e,n);return lo(),nn(),s}const Kh=ws("__proto__,__v_isRef,__isVue"),g2=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(En));function Gh(e){En(e)||(e=String(e));const t=pe(this);return et(t,"has",e),t.hasOwnProperty(e)}class v2{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?ad:b2:i?y2:w2).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const a=se(t);if(!r){let l;if(a&&(l=zh[n]))return l;if(n==="hasOwnProperty")return Gh}const o=Reflect.get(t,n,je(t)?t:s);return(En(n)?g2.has(n):Kh(n))||(r||et(t,"get",n),i)?o:je(o)?a&&io(n)?o:o.value:Ce(o)?r?Hn(o):gr(o):o}}class _2 extends v2{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const l=jn(i);if(!kt(s)&&!jn(s)&&(i=pe(i),s=pe(s)),!se(t)&&je(i)&&!je(s))return l?!1:(i.value=s,!0)}const a=se(t)&&io(n)?Number(n)<t.length:_e(t,n),o=Reflect.set(t,n,s,je(t)?t:r);return t===pe(r)&&(a?_n(s,i)&&en(t,"set",n,s):en(t,"add",n,s)),o}deleteProperty(t,n){const s=_e(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&en(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!En(n)||!g2.has(n))&&et(t,"has",n),s}ownKeys(t){return et(t,"iterate",se(t)?"length":Fn),Reflect.ownKeys(t)}}class Qh extends v2{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Wh=new _2,Yh=new Qh,Xh=new _2(!0);const co=e=>e,_i=e=>Reflect.getPrototypeOf(e);function Fr(e,t,n=!1,s=!1){e=e.__v_raw;const r=pe(e),i=pe(t);n||(_n(t,i)&&et(r,"get",t),et(r,"get",i));const{has:a}=_i(r),o=s?co:n?mo:Xe;if(a.call(r,t))return o(e.get(t));if(a.call(r,i))return o(e.get(i));e!==r&&e.get(t)}function Vr(e,t=!1){const n=this.__v_raw,s=pe(n),r=pe(e);return t||(_n(e,r)&&et(s,"has",e),et(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function qr(e,t=!1){return e=e.__v_raw,!t&&et(pe(e),"iterate",Fn),Reflect.get(e,"size",e)}function yl(e,t=!1){!t&&!kt(e)&&!jn(e)&&(e=pe(e));const n=pe(this);return _i(n).has.call(n,e)||(n.add(e),en(n,"add",e,e)),this}function bl(e,t,n=!1){!n&&!kt(t)&&!jn(t)&&(t=pe(t));const s=pe(this),{has:r,get:i}=_i(s);let a=r.call(s,e);a||(e=pe(e),a=r.call(s,e));const o=i.call(s,e);return s.set(e,t),a?_n(t,o)&&en(s,"set",e,t):en(s,"add",e,t),this}function kl(e){const t=pe(this),{has:n,get:s}=_i(t);let r=n.call(t,e);r||(e=pe(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&en(t,"delete",e,void 0),i}function El(){const e=pe(this),t=e.size!==0,n=e.clear();return t&&en(e,"clear",void 0,void 0),n}function jr(e,t){return function(s,r){const i=this,a=i.__v_raw,o=pe(a),l=t?co:e?mo:Xe;return!e&&et(o,"iterate",Fn),a.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function $r(e,t,n){return function(...s){const r=this.__v_raw,i=pe(r),a=ns(i),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=r[e](...s),u=n?co:t?mo:Xe;return!t&&et(i,"iterate",l?_a:Fn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function rn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Jh(){const e={get(i){return Fr(this,i)},get size(){return qr(this)},has:Vr,add:yl,set:bl,delete:kl,clear:El,forEach:jr(!1,!1)},t={get(i){return Fr(this,i,!1,!0)},get size(){return qr(this)},has:Vr,add(i){return yl.call(this,i,!0)},set(i,a){return bl.call(this,i,a,!0)},delete:kl,clear:El,forEach:jr(!1,!0)},n={get(i){return Fr(this,i,!0)},get size(){return qr(this,!0)},has(i){return Vr.call(this,i,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:jr(!0,!1)},s={get(i){return Fr(this,i,!0,!0)},get size(){return qr(this,!0)},has(i){return Vr.call(this,i,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:jr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=$r(i,!1,!1),n[i]=$r(i,!0,!1),t[i]=$r(i,!1,!0),s[i]=$r(i,!0,!0)}),[e,n,t,s]}const[Zh,ed,td,nd]=Jh();function uo(e,t){const n=t?e?nd:td:e?ed:Zh;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(_e(n,r)&&r in s?n:s,r,i)}const sd={get:uo(!1,!1)},rd={get:uo(!1,!0)},id={get:uo(!0,!1)};const w2=new WeakMap,y2=new WeakMap,b2=new WeakMap,ad=new WeakMap;function od(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ld(e){return e.__v_skip||!Object.isExtensible(e)?0:od(Eh(e))}function gr(e){return jn(e)?e:ho(e,!1,Wh,sd,w2)}function k2(e){return ho(e,!1,Xh,rd,y2)}function Hn(e){return ho(e,!0,Yh,id,b2)}function ho(e,t,n,s,r){if(!Ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const a=ld(e);if(a===0)return e;const o=new Proxy(e,a===2?s:n);return r.set(e,o),o}function rs(e){return jn(e)?rs(e.__v_raw):!!(e&&e.__v_isReactive)}function jn(e){return!!(e&&e.__v_isReadonly)}function kt(e){return!!(e&&e.__v_isShallow)}function fo(e){return e?!!e.__v_raw:!1}function pe(e){const t=e&&e.__v_raw;return t?pe(t):e}function pd(e){return!_e(e,"__v_skip")&&Object.isExtensible(e)&&us(e,"__v_skip",!0),e}const Xe=e=>Ce(e)?gr(e):e,mo=e=>Ce(e)?Hn(e):e;function je(e){return e?e.__v_isRef===!0:!1}function J(e){return E2(e,!1)}function Fe(e){return E2(e,!0)}function E2(e,t){return je(e)?e:new cd(e,t)}class cd{constructor(t,n){this.dep=new gi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:pe(t),this._value=n?t:Xe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||kt(t)||jn(t);t=s?t:pe(t),_n(t,n)&&(this._rawValue=t,this._value=s?t:Xe(t),this.dep.trigger())}}function gn(e){return je(e)?e.value:e}const ud={get:(e,t,n)=>t==="__v_raw"?e:gn(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return je(r)&&!je(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function A2(e){return rs(e)?e:new Proxy(e,ud)}class hd{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new gi,{get:s,set:r}=t(n.track.bind(n),n.trigger.bind(n));this._get=s,this._set=r}get value(){return this._value=this._get()}set value(t){this._set(t)}}function x2(e){return new hd(e)}class dd{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Hh(pe(this._object),this._key)}}class fd{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function ys(e,t,n){return je(e)?e:ie(e)?new fd(e):Ce(e)&&arguments.length>1?md(e,t,n):J(e)}function md(e,t,n){const s=e[t];return je(s)?s:new dd(e,t,n)}class gd{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new gi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return c2(this,!0),!0}get value(){const t=this.dep.track();return d2(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function vd(e,t,n=!1){let s,r;return ie(e)?s=e:(s=e.get,r=e.set),new gd(s,r,n)}const Mr={},ri=new WeakMap;let On;function _d(e,t=!1,n=On){if(n){let s=ri.get(n);s||ri.set(n,s=[]),s.push(e)}}function wd(e,t,n=Pe){const{immediate:s,deep:r,once:i,scheduler:a,augmentJob:o,call:l}=n,c=x=>r?x:kt(x)||r===!1||r===0?mn(x,1):mn(x);let u,h,d,m,g=!1,w=!1;if(je(e)?(h=()=>e.value,g=kt(e)):rs(e)?(h=()=>c(e),g=!0):se(e)?(w=!0,g=e.some(x=>rs(x)||kt(x)),h=()=>e.map(x=>{if(je(x))return x.value;if(rs(x))return c(x);if(ie(x))return l?l(x,2):x()})):ie(e)?t?h=l?()=>l(e,2):e:h=()=>{if(d){tn();try{d()}finally{nn()}}const x=On;On=u;try{return l?l(e,3,[m]):e(m)}finally{On=x}}:h=Mt,t&&r){const x=h,L=r===!0?1/0:r;h=()=>mn(x(),L)}const b=o2(),y=()=>{u.stop(),b&&ro(b.effects,u)};if(i&&t){const x=t;t=(...L)=>{x(...L),y()}}let E=w?new Array(e.length).fill(Mr):Mr;const v=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const L=u.run();if(r||g||(w?L.some((j,C)=>_n(j,E[C])):_n(L,E))){d&&d();const j=On;On=u;try{const C=[L,E===Mr?void 0:w&&E[0]===Mr?[]:E,m];l?l(t,3,C):t(...C),E=L}finally{On=j}}}else u.run()};return o&&o(v),u=new l2(h),u.scheduler=a?()=>a(v,!1):v,m=x=>_d(x,!1,u),d=u.onStop=()=>{const x=ri.get(u);if(x){if(l)l(x,4);else for(const L of x)L();ri.delete(u)}},t?s?v(!0):E=u.run():a?a(v.bind(null,!0),!0):u.run(),y.pause=u.pause.bind(u),y.resume=u.resume.bind(u),y.stop=y,y}function mn(e,t=1/0,n){if(t<=0||!Ce(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,je(e))mn(e.value,t,n);else if(se(e))for(let s=0;s<e.length;s++)mn(e[s],t,n);else if(J0(e)||ns(e))e.forEach(s=>{mn(s,t,n)});else if(t2(e)){for(const s in e)mn(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&mn(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ms=[];let Hi=!1;function pn(e,...t){if(Hi)return;Hi=!0,tn();const n=Ms.length?Ms[Ms.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=yd();if(s)bs(s,n,11,[e+t.map(i=>{var a,o;return(o=(a=i.toString)==null?void 0:a.call(i))!=null?o:JSON.stringify(i)}).join(""),n&&n.proxy,r.map(({vnode:i})=>`at <${m1(n,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${e}`,...t];r.length&&i.push(`
`,...bd(r)),console.warn(...i)}nn(),Hi=!1}function yd(){let e=Ms[Ms.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function bd(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...kd(n))}),t}function kd({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,r=` at <${m1(e.component,e.type,s)}`,i=">"+n;return e.props?[r,...Ed(e.props),i]:[r+i]}function Ed(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...P2(s,e[s]))}),n.length>3&&t.push(" ..."),t}function P2(e,t,n){return Be(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:je(t)?(t=P2(e,pe(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):ie(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=pe(t),n?t:[`${e}=`,t])}function bs(e,t,n,s){try{return s?e(...s):e()}catch(r){vr(r,t,n)}}function Ct(e,t,n,s){if(ie(e)){const r=bs(e,t,n,s);return r&&Z0(r)&&r.catch(i=>{vr(i,t,n)}),r}if(se(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Ct(e[i],t,n,s));return r}}function vr(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Pe;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,l,c)===!1)return}o=o.parent}if(i){tn(),bs(i,null,10,[e,l,c]),nn();return}}Ad(e,n,r,s,a)}function Ad(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const st=[];let Vt=-1;const is=[];let un=null,Xn=0;const T2=Promise.resolve();let ii=null;function Nt(e){const t=ii||T2;return e?t.then(this?e.bind(this):e):t}function xd(e){let t=Vt+1,n=st.length;for(;t<n;){const s=t+n>>>1,r=st[s],i=Ys(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function go(e){if(!(e.flags&1)){const t=Ys(e),n=st[st.length-1];!n||!(e.flags&2)&&t>=Ys(n)?st.push(e):st.splice(xd(t),0,e),e.flags|=1,B2()}}function B2(){ii||(ii=T2.then(C2))}function Pd(e){se(e)?is.push(...e):un&&e.id===-1?un.splice(Xn+1,0,e):e.flags&1||(is.push(e),e.flags|=1),B2()}function Al(e,t,n=Vt+1){for(;n<st.length;n++){const s=st[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;st.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ai(e){if(is.length){const t=[...new Set(is)].sort((n,s)=>Ys(n)-Ys(s));if(is.length=0,un){un.push(...t);return}for(un=t,Xn=0;Xn<un.length;Xn++){const n=un[Xn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}un=null,Xn=0}}const Ys=e=>e.id==null?e.flags&2?-1:1/0:e.id;function C2(e){try{for(Vt=0;Vt<st.length;Vt++){const t=st[Vt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),bs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Vt<st.length;Vt++){const t=st[Vt];t&&(t.flags&=-2)}Vt=-1,st.length=0,ai(),ii=null,(st.length||is.length)&&C2()}}let $t,Ss=[],wa=!1;function wi(e,...t){$t?$t.emit(e,...t):wa||Ss.push({event:e,args:t})}function D2(e,t){var n,s;$t=e,$t?($t.enabled=!0,Ss.forEach(({event:r,args:i})=>$t.emit(r,...i)),Ss=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{D2(i,t)}),setTimeout(()=>{$t||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,wa=!0,Ss=[])},3e3)):(wa=!0,Ss=[])}function Td(e,t){wi("app:init",e,t,{Fragment:ze,Text:vn,Comment:Ge,Static:os})}function Bd(e){wi("app:unmount",e)}const Cd=vo("component:added"),O2=vo("component:updated"),Dd=vo("component:removed"),Od=e=>{$t&&typeof $t.cleanupBuffer=="function"&&!$t.cleanupBuffer(e)&&Dd(e)};/*! #__NO_SIDE_EFFECTS__ */function vo(e){return t=>{wi(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}function Id(e,t,n){wi("component:emit",e.appContext.app,e,t,n)}let Ze=null,I2=null;function oi(e){const t=Ze;return Ze=e,I2=e&&e.type.__scopeId||null,t}function Rd(e,t=Ze,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ql(-1);const i=oi(t);let a;try{a=e(...r)}finally{oi(i),s._d&&ql(1)}return O2(t),a};return s._n=!0,s._c=!0,s._d=!0,s}function qt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let a=0;a<r.length;a++){const o=r[a];i&&(o.oldValue=i[a].value);let l=o.dir[s];l&&(tn(),Ct(l,n,8,[e.el,o,e,t]),nn())}}const Sd=Symbol("_vte"),R2=e=>e.__isTeleport,hn=Symbol("_leaveCb"),Nr=Symbol("_enterCb");function S2(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return we(()=>{e.isMounted=!0}),yo(()=>{e.isUnmounting=!0}),e}const _t=[Function,Array],L2={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},F2=e=>{const t=e.subTree;return t.component?F2(t.component):t},Ld={name:"BaseTransition",props:L2,setup(e,{slots:t}){const n=ks(),s=S2();return()=>{const r=t.default&&_o(t.default(),!0);if(!r||!r.length)return;const i=V2(r),a=pe(e),{mode:o}=a;if(s.isLeaving)return zi(i);const l=xl(i);if(!l)return zi(i);let c=Xs(l,a,s,n,d=>c=d);l.type!==Ge&&$n(l,c);const u=n.subTree,h=u&&xl(u);if(h&&h.type!==Ge&&!Rn(l,h)&&F2(n).type!==Ge){const d=Xs(h,a,s,n);if($n(h,d),o==="out-in"&&l.type!==Ge)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave},zi(i);o==="in-out"&&l.type!==Ge&&(d.delayLeave=(m,g,w)=>{const b=q2(s,h);b[String(h.key)]=h,m[hn]=()=>{g(),m[hn]=void 0,delete c.delayedLeave},c.delayedLeave=w})}return i}}};function V2(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ge){t=n;break}}return t}const Fd=Ld;function q2(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Xs(e,t,n,s,r){const{appear:i,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:m,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:b,onAppear:y,onAfterAppear:E,onAppearCancelled:v}=t,x=String(e.key),L=q2(n,e),j=(V,D)=>{V&&Ct(V,s,9,D)},C=(V,D)=>{const H=D[1];j(V,D),se(V)?V.every(F=>F.length<=1)&&H():V.length<=1&&H()},Q={mode:a,persisted:o,beforeEnter(V){let D=l;if(!n.isMounted)if(i)D=b||l;else return;V[hn]&&V[hn](!0);const H=L[x];H&&Rn(e,H)&&H.el[hn]&&H.el[hn](),j(D,[V])},enter(V){let D=c,H=u,F=h;if(!n.isMounted)if(i)D=y||c,H=E||u,F=v||h;else return;let ee=!1;const oe=V[Nr]=fe=>{ee||(ee=!0,fe?j(F,[V]):j(H,[V]),Q.delayedLeave&&Q.delayedLeave(),V[Nr]=void 0)};D?C(D,[V,oe]):oe()},leave(V,D){const H=String(e.key);if(V[Nr]&&V[Nr](!0),n.isUnmounting)return D();j(d,[V]);let F=!1;const ee=V[hn]=oe=>{F||(F=!0,D(),oe?j(w,[V]):j(g,[V]),V[hn]=void 0,L[H]===e&&delete L[H])};L[H]=e,m?C(m,[V,ee]):ee()},clone(V){const D=Xs(V,t,n,s,r);return r&&r(D),D}};return Q}function zi(e){if(_r(e))return e=yn(e),e.children=null,e}function xl(e){if(!_r(e))return R2(e.type)&&e.children?V2(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ie(n.default))return n.default()}}function $n(e,t){e.shapeFlag&6&&e.component?(e.transition=t,$n(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _o(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let a=e[i];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===ze?(a.patchFlag&128&&r++,s=s.concat(_o(a.children,t,o))):(t||a.type!==Ge)&&s.push(o!=null?yn(a,{key:o}):a)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function M(e,t){return ie(e)?Me({name:e.name},t,{setup:e}):e}function wo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function li(e,t,n,s,r=!1){if(se(e)){e.forEach((g,w)=>li(g,t&&(se(t)?t[w]:t),n,s,r));return}if(Vn(s)&&!r)return;const i=s.shapeFlag&4?Po(s.component):s.el,a=r?null:i,{i:o,r:l}=e,c=t&&t.r,u=o.refs===Pe?o.refs={}:o.refs,h=o.setupState,d=pe(h),m=h===Pe?()=>!1:g=>_e(d,g);if(c!=null&&c!==l&&(Be(c)?(u[c]=null,m(c)&&(h[c]=null)):je(c)&&(c.value=null)),ie(l))bs(l,o,12,[a,u]);else{const g=Be(l),w=je(l);if(g||w){const b=()=>{if(e.f){const y=g?m(l)?h[l]:u[l]:l.value;r?se(y)&&ro(y,i):se(y)?y.includes(i)||y.push(i):g?(u[l]=[i],m(l)&&(h[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else g?(u[l]=a,m(l)&&(h[l]=a)):w&&(l.value=a,e.k&&(u[e.k]=a))};a?(b.id=-1,dt(b,n)):b()}}}let Pl=!1;const Tn=()=>{Pl||(console.error("Hydration completed but contains mismatches."),Pl=!0)},Vd=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",qd=e=>e.namespaceURI.includes("MathML"),Hr=e=>{if(e.nodeType===1){if(Vd(e))return"svg";if(qd(e))return"mathml"}},In=e=>e.nodeType===8;function jd(e){const{mt:t,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:a,remove:o,insert:l,createComment:c}}=e,u=(v,x)=>{if(!x.hasChildNodes()){pn("Attempting to hydrate existing markup but container is empty. Performing full mount instead."),n(null,v,x),ai(),x._vnode=v;return}h(x.firstChild,v,null,null,null),ai(),x._vnode=v},h=(v,x,L,j,C,Q=!1)=>{Q=Q||!!x.dynamicChildren;const V=In(v)&&v.data==="[",D=()=>w(v,x,L,j,C,V),{type:H,ref:F,shapeFlag:ee,patchFlag:oe}=x;let fe=v.nodeType;x.el=v,us(v,"__vnode",x,!0),us(v,"__vueParentComponent",L,!0),oe===-2&&(Q=!1,x.dynamicChildren=null);let K=null;switch(H){case vn:fe!==3?x.children===""?(l(x.el=r(""),a(v),v),K=v):K=D():(v.data!==x.children&&(pn("Hydration text mismatch in",v.parentNode,`
  - rendered on server: ${JSON.stringify(v.data)}
  - expected on client: ${JSON.stringify(x.children)}`),Tn(),v.data=x.children),K=i(v));break;case Ge:E(v)?(K=i(v),y(x.el=v.content.firstChild,v,L)):fe!==8||V?K=D():K=i(v);break;case os:if(V&&(v=i(v),fe=v.nodeType),fe===1||fe===3){K=v;const $=!x.children.length;for(let X=0;X<x.staticCount;X++)$&&(x.children+=K.nodeType===1?K.outerHTML:K.data),X===x.staticCount-1&&(x.anchor=K),K=i(K);return V?i(K):K}else D();break;case ze:V?K=g(v,x,L,j,C,Q):K=D();break;default:if(ee&1)(fe!==1||x.type.toLowerCase()!==v.tagName.toLowerCase())&&!E(v)?K=D():K=d(v,x,L,j,C,Q);else if(ee&6){x.slotScopeIds=C;const $=a(v);if(V?K=b(v):In(v)&&v.data==="teleport start"?K=b(v,v.data,"teleport end"):K=i(v),t(x,$,null,L,j,Hr($),Q),Vn(x)){let X;V?(X=Le(ze),X.anchor=K?K.previousSibling:$.lastChild):X=v.nodeType===3?u1(""):Le("div"),X.el=v,x.component.subTree=X}}else ee&64?fe!==8?K=D():K=x.type.hydrate(v,x,L,j,C,Q,e,m):ee&128?K=x.type.hydrate(v,x,L,j,Hr(a(v)),C,Q,e,h):pn("Invalid HostVNode type:",H,`(${typeof H})`)}return F!=null&&li(F,null,j,x),K},d=(v,x,L,j,C,Q)=>{Q=Q||!!x.dynamicChildren;const{type:V,props:D,patchFlag:H,shapeFlag:F,dirs:ee,transition:oe}=x,fe=V==="input"||V==="option";if(fe||H!==-1){ee&&qt(x,null,L,"created");let K=!1;if(E(v)){K=t1(j,oe)&&L&&L.vnode.props&&L.vnode.props.appear;const X=v.content.firstChild;K&&oe.beforeEnter(X),y(X,v,L),x.el=v=X}if(F&16&&!(D&&(D.innerHTML||D.textContent))){let X=m(v.firstChild,x,v,L,j,C,Q),ae=!1;for(;X;){Ls(v,1)||(ae||(pn("Hydration children mismatch on",v,`
Server rendered element contains more child nodes than client vdom.`),ae=!0),Tn());const Ve=X;X=X.nextSibling,o(Ve)}}else if(F&8){let X=x.children;X[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(X=X.slice(1)),v.textContent!==X&&(Ls(v,0)||(pn("Hydration text content mismatch on",v,`
  - rendered on server: ${v.textContent}
  - expected on client: ${x.children}`),Tn()),v.textContent=x.children)}if(D){const X=v.tagName.includes("-");for(const ae in D)!(ee&&ee.some(Ve=>Ve.dir.created))&&$d(v,ae,D[ae],x,L)&&Tn(),(fe&&(ae.endsWith("value")||ae==="indeterminate")||hr(ae)&&!ss(ae)||ae[0]==="."||X)&&s(v,ae,null,D[ae],void 0,L)}let $;($=D&&D.onVnodeBeforeMount)&&wt($,L,x),ee&&qt(x,null,L,"beforeMount"),(($=D&&D.onVnodeMounted)||ee||K)&&o1(()=>{$&&wt($,L,x),K&&oe.enter(v),ee&&qt(x,null,L,"mounted")},j)}return v.nextSibling},m=(v,x,L,j,C,Q,V)=>{V=V||!!x.dynamicChildren;const D=x.children,H=D.length;let F=!1;for(let ee=0;ee<H;ee++){const oe=V?D[ee]:D[ee]=bt(D[ee]),fe=oe.type===vn;v?(fe&&!V&&ee+1<H&&bt(D[ee+1]).type===vn&&(l(r(v.data.slice(oe.children.length)),L,i(v)),v.data=oe.children),v=h(v,oe,j,C,Q,V)):fe&&!oe.children?l(oe.el=r(""),L):(Ls(L,1)||(F||(pn("Hydration children mismatch on",L,`
Server rendered element contains fewer child nodes than client vdom.`),F=!0),Tn()),n(null,oe,L,null,j,C,Hr(L),Q))}return v},g=(v,x,L,j,C,Q)=>{const{slotScopeIds:V}=x;V&&(C=C?C.concat(V):V);const D=a(v),H=m(i(v),x,D,L,j,C,Q);return H&&In(H)&&H.data==="]"?i(x.anchor=H):(Tn(),l(x.anchor=c("]"),D,H),H)},w=(v,x,L,j,C,Q)=>{if(Ls(v.parentElement,1)||(pn(`Hydration node mismatch:
- rendered on server:`,v,v.nodeType===3?"(text)":In(v)&&v.data==="["?"(start of fragment)":"",`
- expected on client:`,x.type),Tn()),x.el=null,Q){const H=b(v);for(;;){const F=i(v);if(F&&F!==H)o(F);else break}}const V=i(v),D=a(v);return o(v),n(null,x,D,V,L,j,Hr(D),C),V},b=(v,x="[",L="]")=>{let j=0;for(;v;)if(v=i(v),v&&In(v)&&(v.data===x&&j++,v.data===L)){if(j===0)return i(v);j--}return v},y=(v,x,L)=>{const j=x.parentNode;j&&j.replaceChild(v,x);let C=L;for(;C;)C.vnode.el===x&&(C.vnode.el=C.subTree.el=v),C=C.parent},E=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[u,h]}function $d(e,t,n,s,r){let i,a,o,l;if(t==="class")o=e.getAttribute("class"),l=mr(n),Md(Tl(o||""),Tl(l))||(i=2,a="class");else if(t==="style"){o=e.getAttribute("style")||"",l=Be(n)?n:Ih(fr(n));const c=Bl(o),u=Bl(l);if(s.dirs)for(const{dir:h,value:d}of s.dirs)h.name==="show"&&!d&&u.set("display","none");r&&j2(r,s,u),Nd(c,u)||(i=3,a="style")}else(e instanceof SVGElement&&Lh(t)||e instanceof HTMLElement&&(vl(t)||Sh(t)))&&(vl(t)?(o=e.hasAttribute(t),l=ao(n)):n==null?(o=e.hasAttribute(t),l=!1):(e.hasAttribute(t)?o=e.getAttribute(t):t==="value"&&e.tagName==="TEXTAREA"?o=e.value:o=!1,l=Fh(n)?String(n):!1),o!==l&&(i=4,a=t));if(i!=null&&!Ls(e,i)){const c=d=>d===!1?"(not rendered)":`${a}="${d}"`,u=`Hydration ${$2[i]} mismatch on`,h=`
  - rendered on server: ${c(o)}
  - expected on client: ${c(l)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;return pn(u,e,h),!0}return!1}function Tl(e){return new Set(e.trim().split(/\s+/))}function Md(e,t){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}function Bl(e){const t=new Map;for(const n of e.split(";")){let[s,r]=n.split(":");s=s.trim(),r=r&&r.trim(),s&&r&&t.set(s,r)}return t}function Nd(e,t){if(e.size!==t.size)return!1;for(const[n,s]of e)if(s!==t.get(n))return!1;return!0}function j2(e,t,n){const s=e.subTree;if(e.getCssVars&&(t===s||s&&s.type===ze&&s.children.includes(t))){const r=e.getCssVars();for(const i in r)n.set(`--${qh(i)}`,String(r[i]))}t===s&&e.parent&&j2(e.parent,e.vnode,n)}const Cl="data-allow-mismatch",$2={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ls(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Cl);)e=e.parentElement;const n=e&&e.getAttribute(Cl);if(n==null)return!1;if(n==="")return!0;{const s=n.split(",");return t===0&&s.includes("children")?!0:n.split(",").includes($2[t])}}function Hd(e,t){if(In(e)&&e.data==="["){let n=1,s=e.nextSibling;for(;s;){if(s.nodeType===1){if(t(s)===!1)break}else if(In(s))if(s.data==="]"){if(--n===0)break}else s.data==="["&&n++;s=s.nextSibling}}else t(e)}const Vn=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function zd(e){ie(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:r=200,hydrate:i,timeout:a,suspensible:o=!0,onError:l}=e;let c=null,u,h=0;const d=()=>(h++,c=null,m()),m=()=>{let g;return c||(g=c=t().catch(w=>{if(w=w instanceof Error?w:new Error(String(w)),l)return new Promise((b,y)=>{l(w,()=>b(d()),()=>y(w),h+1)});throw w}).then(w=>g!==c&&c?c:(w&&(w.__esModule||w[Symbol.toStringTag]==="Module")&&(w=w.default),u=w,w)))};return M({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(g,w,b){const y=i?()=>{const E=i(b,v=>Hd(g,v));E&&(w.bum||(w.bum=[])).push(E)}:b;u?y():m().then(()=>!w.isUnmounted&&y())},get __asyncResolved(){return u},setup(){const g=Ue;if(wo(g),u)return()=>Ui(u,g);const w=v=>{c=null,vr(v,g,13,!s)};if(o&&g.suspense||yr)return m().then(v=>()=>Ui(v,g)).catch(v=>(w(v),()=>s?Le(s,{error:v}):null));const b=J(!1),y=J(),E=J(!!r);return r&&setTimeout(()=>{E.value=!1},r),a!=null&&setTimeout(()=>{if(!b.value&&!y.value){const v=new Error(`Async component timed out after ${a}ms.`);w(v),y.value=v}},a),m().then(()=>{b.value=!0,g.parent&&_r(g.parent.vnode)&&g.parent.update()}).catch(v=>{w(v),y.value=v}),()=>{if(b.value&&u)return Ui(u,g);if(y.value&&s)return Le(s,{error:y.value});if(n&&!E.value)return Le(n)}}})}function Ui(e,t){const{ref:n,props:s,children:r,ce:i}=t.vnode,a=Le(e,s,r);return a.ref=n,a.ce=i,delete t.vnode.ce,a}const _r=e=>e.type.__isKeepAlive;function Ud(e,t){M2(e,"a",t)}function Kd(e,t){M2(e,"da",t)}function M2(e,t,n=Ue){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(yi(t,s,n),n){let r=n.parent;for(;r&&r.parent;)_r(r.parent.vnode)&&Gd(s,t,n,r),r=r.parent}}function Gd(e,t,n,s){const r=yi(t,e,s,!0);wn(()=>{ro(s[t],r)},n)}function yi(e,t,n=Ue,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{tn();const o=wr(n),l=Ct(t,n,e,a);return o(),nn(),l});return s?r.unshift(i):r.push(i),i}}const sn=e=>(t,n=Ue)=>{(!yr||e==="sp")&&yi(e,(...s)=>t(...s),n)},Qd=sn("bm"),we=sn("m"),Wd=sn("bu"),N2=sn("u"),yo=sn("bum"),wn=sn("um"),Yd=sn("sp"),Xd=sn("rtg"),Jd=sn("rtc");function Zd(e,t=Ue){yi("ec",e,t)}const e5="components";function Dt(e,t){return n5(e5,e,!0,t)||e}const t5=Symbol.for("v-ndc");function n5(e,t,n=!0,s=!1){const r=Ze||Ue;if(r){const i=r.type;{const o=f1(i,!1);if(o&&(o===t||o===pt(t)||o===dr(pt(t))))return i}const a=Dl(r[e]||i[e],t)||Dl(r.appContext[e],t);return!a&&s?i:a}}function Dl(e,t){return e&&(e[t]||e[pt(t)]||e[dr(pt(t))])}function C9(e,t,n,s){let r;const i=n,a=se(e);if(a||Be(e)){const o=a&&rs(e);let l=!1;o&&(l=!kt(e),e=vi(e)),r=new Array(e.length);for(let c=0,u=e.length;c<u;c++)r[c]=t(l?Xe(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i)}else if(Ce(e))if(e[Symbol.iterator])r=Array.from(e,(o,l)=>t(o,l,void 0,i));else{const o=Object.keys(e);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=t(e[u],u,l,i)}}else r=[];return r}function s5(e,t,n={},s,r){if(Ze.ce||Ze.parent&&Vn(Ze.parent)&&Ze.parent.ce)return Zs(),Aa(ze,null,[Le("slot",n,s)],64);let i=e[t];i&&i._c&&(i._d=!1),Zs();const a=i&&H2(i(n)),o=Aa(ze,{key:(n.key||a&&a.key||`_${t}`)+(!a&&s?"_fb":"")},a||[],a&&e._===1?64:-2);return i&&i._c&&(i._d=!0),o}function H2(e){return e.some(t=>tr(t)?!(t.type===Ge||t.type===ze&&!H2(t.children)):!0)?e:null}const ya=e=>e?h1(e)?Po(e):ya(e.parent):null,Ns=Me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ya(e.parent),$root:e=>ya(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>bo(e),$forceUpdate:e=>e.f||(e.f=()=>{go(e.update)}),$nextTick:e=>e.n||(e.n=Nt.bind(e.proxy)),$watch:e=>E5.bind(e)}),Ki=(e,t)=>e!==Pe&&!e.__isScriptSetup&&_e(e,t),r5={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:a,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Ki(s,t))return a[t]=1,s[t];if(r!==Pe&&_e(r,t))return a[t]=2,r[t];if((c=e.propsOptions[0])&&_e(c,t))return a[t]=3,i[t];if(n!==Pe&&_e(n,t))return a[t]=4,n[t];ba&&(a[t]=0)}}const u=Ns[t];let h,d;if(u)return t==="$attrs"&&et(e.attrs,"get",""),u(e);if((h=o.__cssModules)&&(h=h[t]))return h;if(n!==Pe&&_e(n,t))return a[t]=4,n[t];if(d=l.config.globalProperties,_e(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Ki(r,t)?(r[t]=n,!0):s!==Pe&&_e(s,t)?(s[t]=n,!0):_e(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},a){let o;return!!n[a]||e!==Pe&&_e(e,a)||Ki(t,a)||(o=i[0])&&_e(o,a)||_e(s,a)||_e(Ns,a)||_e(r.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:_e(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ol(e){return se(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ba=!0;function i5(e){const t=bo(e),n=e.proxy,s=e.ctx;ba=!1,t.beforeCreate&&Il(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:g,activated:w,deactivated:b,beforeDestroy:y,beforeUnmount:E,destroyed:v,unmounted:x,render:L,renderTracked:j,renderTriggered:C,errorCaptured:Q,serverPrefetch:V,expose:D,inheritAttrs:H,components:F,directives:ee,filters:oe}=t;if(c&&a5(c,s,null),a)for(const $ in a){const X=a[$];ie(X)&&(s[$]=X.bind(n))}if(r){const $=r.call(n,n);Ce($)&&(e.data=gr($))}if(ba=!0,i)for(const $ in i){const X=i[$],ae=ie(X)?X.bind(n,n):ie(X.get)?X.get.bind(n,n):Mt,Ve=!ie(X)&&ie(X.set)?X.set.bind(n):Mt,qe=A({get:ae,set:Ve});Object.defineProperty(s,$,{enumerable:!0,configurable:!0,get:()=>qe.value,set:ge=>qe.value=ge})}if(o)for(const $ in o)z2(o[$],s,n,$);if(l){const $=ie(l)?l.call(n):l;Reflect.ownKeys($).forEach(X=>{Bt(X,$[X])})}u&&Il(u,e,"c");function K($,X){se(X)?X.forEach(ae=>$(ae.bind(n))):X&&$(X.bind(n))}if(K(Qd,h),K(we,d),K(Wd,m),K(N2,g),K(Ud,w),K(Kd,b),K(Zd,Q),K(Jd,j),K(Xd,C),K(yo,E),K(wn,x),K(Yd,V),se(D))if(D.length){const $=e.exposed||(e.exposed={});D.forEach(X=>{Object.defineProperty($,X,{get:()=>n[X],set:ae=>n[X]=ae})})}else e.exposed||(e.exposed={});L&&e.render===Mt&&(e.render=L),H!=null&&(e.inheritAttrs=H),F&&(e.components=F),ee&&(e.directives=ee),V&&wo(e)}function a5(e,t,n=Mt){se(e)&&(e=ka(e));for(const s in e){const r=e[s];let i;Ce(r)?"default"in r?i=Oe(r.from||s,r.default,!0):i=Oe(r.from||s):i=Oe(r),je(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[s]=i}}function Il(e,t,n){Ct(se(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function z2(e,t,n,s){let r=s.includes(".")?r1(n,s):()=>n[s];if(Be(e)){const i=t[e];ie(i)&&de(r,i)}else if(ie(e))de(r,e.bind(n));else if(Ce(e))if(se(e))e.forEach(i=>z2(i,t,n,s));else{const i=ie(e.handler)?e.handler.bind(n):t[e.handler];ie(i)&&de(r,i,e)}}function bo(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,o=i.get(t);let l;return o?l=o:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(c=>pi(l,c,a,!0)),pi(l,t,a)),Ce(t)&&i.set(t,l),l}function pi(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&pi(e,i,n,!0),r&&r.forEach(a=>pi(e,a,n,!0));for(const a in t)if(!(s&&a==="expose")){const o=o5[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const o5={data:Rl,props:Sl,emits:Sl,methods:Fs,computed:Fs,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Fs,directives:Fs,watch:p5,provide:Rl,inject:l5};function Rl(e,t){return t?e?function(){return Me(ie(e)?e.call(this,this):e,ie(t)?t.call(this,this):t)}:t:e}function l5(e,t){return Fs(ka(e),ka(t))}function ka(e){if(se(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function Fs(e,t){return e?Me(Object.create(null),e,t):t}function Sl(e,t){return e?se(e)&&se(t)?[...new Set([...e,...t])]:Me(Object.create(null),Ol(e),Ol(t??{})):t}function p5(e,t){if(!e)return t;if(!t)return e;const n=Me(Object.create(null),e);for(const s in t)n[s]=tt(e[s],t[s]);return n}function U2(){return{app:null,config:{isNativeTag:bh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let c5=0;function u5(e,t){return function(s,r=null){ie(s)||(s=Me({},s)),r!=null&&!Ce(r)&&(r=null);const i=U2(),a=new WeakSet,o=[];let l=!1;const c=i.app={_uid:c5++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Nl,get config(){return i.config},set config(u){},use(u,...h){return a.has(u)||(u&&ie(u.install)?(a.add(u),u.install(c,...h)):ie(u)&&(a.add(u),u(c,...h))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,h){return h?(i.components[u]=h,c):i.components[u]},directive(u,h){return h?(i.directives[u]=h,c):i.directives[u]},mount(u,h,d){if(!l){const m=c._ceVNode||Le(s,r);return m.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),h&&t?t(m,u):e(m,u,d),l=!0,c._container=u,u.__vue_app__=c,c._instance=m.component,Td(c,Nl),Po(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Ct(o,c._instance,16),e(null,c._container),c._instance=null,Bd(c),delete c._container.__vue_app__)},provide(u,h){return i.provides[u]=h,c},runWithContext(u){const h=as;as=c;try{return u()}finally{as=h}}};return c}}let as=null;function Bt(e,t){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[e]=t}}function Oe(e,t,n=!1){const s=Ue||Ze;if(s||as){const r=as?as._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ie(t)?t.call(s&&s.proxy):t}}const K2={},G2=()=>Object.create(K2),Q2=e=>Object.getPrototypeOf(e)===K2;function h5(e,t,n,s=!1){const r={},i=G2();e.propsDefaults=Object.create(null),W2(e,t,r,i);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);n?e.props=s?r:k2(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function d5(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:a}}=e,o=pe(r),[l]=e.propsOptions;let c=!1;if((s||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(bi(e.emitsOptions,d))continue;const m=t[d];if(l)if(_e(i,d))m!==i[d]&&(i[d]=m,c=!0);else{const g=pt(d);r[g]=Ea(l,o,g,m,e,!1)}else m!==i[d]&&(i[d]=m,c=!0)}}}else{W2(e,t,r,i)&&(c=!0);let u;for(const h in o)(!t||!_e(t,h)&&((u=An(h))===h||!_e(t,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ea(l,o,h,void 0,e,!0)):delete r[h]);if(i!==o)for(const h in i)(!t||!_e(t,h))&&(delete i[h],c=!0)}c&&en(e.attrs,"set","")}function W2(e,t,n,s){const[r,i]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(ss(l))continue;const c=t[l];let u;r&&_e(r,u=pt(l))?!i||!i.includes(u)?n[u]=c:(o||(o={}))[u]=c:bi(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,a=!0)}if(i){const l=pe(n),c=o||Pe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ea(r,l,h,c[h],e,!_e(c,h))}}return a}function Ea(e,t,n,s,r,i){const a=e[n];if(a!=null){const o=_e(a,"default");if(o&&s===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ie(l)){const{propsDefaults:c}=r;if(n in c)s=c[n];else{const u=wr(r);s=c[n]=l.call(null,t),u()}}else s=l;r.ce&&r.ce._setProp(n,s)}a[0]&&(i&&!o?s=!1:a[1]&&(s===""||s===An(n))&&(s=!0))}return s}const f5=new WeakMap;function Y2(e,t,n=!1){const s=n?f5:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,a={},o=[];let l=!1;if(!ie(e)){const u=h=>{l=!0;const[d,m]=Y2(h,t,!0);Me(a,d),m&&o.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return Ce(e)&&s.set(e,ts),ts;if(se(i))for(let u=0;u<i.length;u++){const h=pt(i[u]);Ll(h)&&(a[h]=Pe)}else if(i)for(const u in i){const h=pt(u);if(Ll(h)){const d=i[u],m=a[h]=se(d)||ie(d)?{type:d}:Me({},d),g=m.type;let w=!1,b=!0;if(se(g))for(let y=0;y<g.length;++y){const E=g[y],v=ie(E)&&E.name;if(v==="Boolean"){w=!0;break}else v==="String"&&(b=!1)}else w=ie(g)&&g.name==="Boolean";m[0]=w,m[1]=b,(w||_e(m,"default"))&&o.push(h)}}const c=[a,o];return Ce(e)&&s.set(e,c),c}function Ll(e){return e[0]!=="$"&&!ss(e)}const X2=e=>e[0]==="_"||e==="$stable",ko=e=>se(e)?e.map(bt):[bt(e)],m5=(e,t,n)=>{if(t._n)return t;const s=Rd((...r)=>ko(t(...r)),n);return s._c=!1,s},J2=(e,t,n)=>{const s=e._ctx;for(const r in e){if(X2(r))continue;const i=e[r];if(ie(i))t[r]=m5(r,i,s);else if(i!=null){const a=ko(i);t[r]=()=>a}}},Z2=(e,t)=>{const n=ko(t);e.slots.default=()=>n},e1=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},g5=(e,t,n)=>{const s=e.slots=G2();if(e.vnode.shapeFlag&32){const r=t._;r?(e1(s,t,n),n&&us(s,"_",r,!0)):J2(t,s)}else t&&Z2(e,t)},v5=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,a=Pe;if(s.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:e1(r,t,n):(i=!t.$stable,J2(t,r)),a=t}else t&&(Z2(e,t),a={default:1});if(i)for(const o in r)!X2(o)&&a[o]==null&&delete r[o]},dt=o1;function _5(e){return w5(e,jd)}function w5(e,t){const n=n2();n.__VUE__=!0,D2(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:r,patchProp:i,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Mt,insertStaticContent:g}=e,w=(_,k,P,O=null,B=null,R=null,U=void 0,N=null,q=!!k.dynamicChildren)=>{if(_===k)return;_&&!Rn(_,k)&&(O=T(_),ge(_,B,R,!0),_=null),k.patchFlag===-2&&(q=!1,k.dynamicChildren=null);const{type:S,ref:ne,shapeFlag:W}=k;switch(S){case vn:b(_,k,P,O);break;case Ge:y(_,k,P,O);break;case os:_==null&&E(k,P,O,U);break;case ze:F(_,k,P,O,B,R,U,N,q);break;default:W&1?L(_,k,P,O,B,R,U,N,q):W&6?ee(_,k,P,O,B,R,U,N,q):(W&64||W&128)&&S.process(_,k,P,O,B,R,U,N,q,Z)}ne!=null&&B&&li(ne,_&&_.ref,R,k||_,!k)},b=(_,k,P,O)=>{if(_==null)s(k.el=o(k.children),P,O);else{const B=k.el=_.el;k.children!==_.children&&c(B,k.children)}},y=(_,k,P,O)=>{_==null?s(k.el=l(k.children||""),P,O):k.el=_.el},E=(_,k,P,O)=>{[_.el,_.anchor]=g(_.children,k,P,O,_.el,_.anchor)},v=({el:_,anchor:k},P,O)=>{let B;for(;_&&_!==k;)B=d(_),s(_,P,O),_=B;s(k,P,O)},x=({el:_,anchor:k})=>{let P;for(;_&&_!==k;)P=d(_),r(_),_=P;r(k)},L=(_,k,P,O,B,R,U,N,q)=>{k.type==="svg"?U="svg":k.type==="math"&&(U="mathml"),_==null?j(k,P,O,B,R,U,N,q):V(_,k,B,R,U,N,q)},j=(_,k,P,O,B,R,U,N)=>{let q,S;const{props:ne,shapeFlag:W,transition:te,dirs:re}=_;if(q=_.el=a(_.type,R,ne&&ne.is,ne),W&8?u(q,_.children):W&16&&Q(_.children,q,null,O,B,Gi(_,R),U,N),re&&qt(_,null,O,"created"),C(q,_,_.scopeId,U,O),ne){for(const Ae in ne)Ae!=="value"&&!ss(Ae)&&i(q,Ae,null,ne[Ae],R,O);"value"in ne&&i(q,"value",null,ne.value,R),(S=ne.onVnodeBeforeMount)&&wt(S,O,_)}us(q,"__vnode",_,!0),us(q,"__vueParentComponent",O,!0),re&&qt(_,null,O,"beforeMount");const ue=t1(B,te);ue&&te.beforeEnter(q),s(q,k,P),((S=ne&&ne.onVnodeMounted)||ue||re)&&dt(()=>{S&&wt(S,O,_),ue&&te.enter(q),re&&qt(_,null,O,"mounted")},B)},C=(_,k,P,O,B)=>{if(P&&m(_,P),O)for(let R=0;R<O.length;R++)m(_,O[R]);if(B){let R=B.subTree;if(k===R||a1(R.type)&&(R.ssContent===k||R.ssFallback===k)){const U=B.vnode;C(_,U,U.scopeId,U.slotScopeIds,B.parent)}}},Q=(_,k,P,O,B,R,U,N,q=0)=>{for(let S=q;S<_.length;S++){const ne=_[S]=N?dn(_[S]):bt(_[S]);w(null,ne,k,P,O,B,R,U,N)}},V=(_,k,P,O,B,R,U)=>{const N=k.el=_.el;N.__vnode=k;let{patchFlag:q,dynamicChildren:S,dirs:ne}=k;q|=_.patchFlag&16;const W=_.props||Pe,te=k.props||Pe;let re;if(P&&Bn(P,!1),(re=te.onVnodeBeforeUpdate)&&wt(re,P,k,_),ne&&qt(k,_,P,"beforeUpdate"),P&&Bn(P,!0),(W.innerHTML&&te.innerHTML==null||W.textContent&&te.textContent==null)&&u(N,""),S?D(_.dynamicChildren,S,N,P,O,Gi(k,B),R):U||X(_,k,N,null,P,O,Gi(k,B),R,!1),q>0){if(q&16)H(N,W,te,P,B);else if(q&2&&W.class!==te.class&&i(N,"class",null,te.class,B),q&4&&i(N,"style",W.style,te.style,B),q&8){const ue=k.dynamicProps;for(let Ae=0;Ae<ue.length;Ae++){const be=ue[Ae],ct=W[be],Ye=te[be];(Ye!==ct||be==="value")&&i(N,be,ct,Ye,B,P)}}q&1&&_.children!==k.children&&u(N,k.children)}else!U&&S==null&&H(N,W,te,P,B);((re=te.onVnodeUpdated)||ne)&&dt(()=>{re&&wt(re,P,k,_),ne&&qt(k,_,P,"updated")},O)},D=(_,k,P,O,B,R,U)=>{for(let N=0;N<k.length;N++){const q=_[N],S=k[N],ne=q.el&&(q.type===ze||!Rn(q,S)||q.shapeFlag&70)?h(q.el):P;w(q,S,ne,null,O,B,R,U,!0)}},H=(_,k,P,O,B)=>{if(k!==P){if(k!==Pe)for(const R in k)!ss(R)&&!(R in P)&&i(_,R,k[R],null,B,O);for(const R in P){if(ss(R))continue;const U=P[R],N=k[R];U!==N&&R!=="value"&&i(_,R,N,U,B,O)}"value"in P&&i(_,"value",k.value,P.value,B)}},F=(_,k,P,O,B,R,U,N,q)=>{const S=k.el=_?_.el:o(""),ne=k.anchor=_?_.anchor:o("");let{patchFlag:W,dynamicChildren:te,slotScopeIds:re}=k;re&&(N=N?N.concat(re):re),_==null?(s(S,P,O),s(ne,P,O),Q(k.children||[],P,ne,B,R,U,N,q)):W>0&&W&64&&te&&_.dynamicChildren?(D(_.dynamicChildren,te,P,B,R,U,N),(k.key!=null||B&&k===B.subTree)&&n1(_,k,!0)):X(_,k,P,ne,B,R,U,N,q)},ee=(_,k,P,O,B,R,U,N,q)=>{k.slotScopeIds=N,_==null?k.shapeFlag&512?B.ctx.activate(k,P,O,U,q):oe(k,P,O,B,R,U,q):fe(_,k,q)},oe=(_,k,P,O,B,R,U)=>{const N=_.component=F5(_,O,B);if(_r(_)&&(N.ctx.renderer=Z),V5(N,!1,U),N.asyncDep){if(B&&B.registerDep(N,K,U),!_.el){const q=N.subTree=Le(Ge);y(null,q,k,P)}}else K(N,_,k,P,B,R,U)},fe=(_,k,P)=>{const O=k.component=_.component;if(B5(_,k,P))if(O.asyncDep&&!O.asyncResolved){$(O,k,P);return}else O.next=k,O.update();else k.el=_.el,O.vnode=k},K=(_,k,P,O,B,R,U)=>{const N=()=>{if(_.isMounted){let{next:W,bu:te,u:re,parent:ue,vnode:Ae}=_;{const ut=s1(_);if(ut){W&&(W.el=Ae.el,$(_,W,U)),ut.asyncDep.then(()=>{_.isUnmounted||N()});return}}let be=W,ct;Bn(_,!1),W?(W.el=Ae.el,$(_,W,U)):W=Ae,te&&qi(te),(ct=W.props&&W.props.onVnodeBeforeUpdate)&&wt(ct,ue,W,Ae),Bn(_,!0);const Ye=Qi(_),xt=_.subTree;_.subTree=Ye,w(xt,Ye,h(xt.el),T(xt),_,B,R),W.el=Ye.el,be===null&&C5(_,Ye.el),re&&dt(re,B),(ct=W.props&&W.props.onVnodeUpdated)&&dt(()=>wt(ct,ue,W,Ae),B),O2(_)}else{let W;const{el:te,props:re}=k,{bm:ue,m:Ae,parent:be,root:ct,type:Ye}=_,xt=Vn(k);if(Bn(_,!1),ue&&qi(ue),!xt&&(W=re&&re.onVnodeBeforeMount)&&wt(W,be,k),Bn(_,!0),te&&ke){const ut=()=>{_.subTree=Qi(_),ke(te,_.subTree,_,B,null)};xt&&Ye.__asyncHydrate?Ye.__asyncHydrate(te,_,ut):ut()}else{ct.ce&&ct.ce._injectChildStyle(Ye);const ut=_.subTree=Qi(_);w(null,ut,P,O,_,B,R),k.el=ut.el}if(Ae&&dt(Ae,B),!xt&&(W=re&&re.onVnodeMounted)){const ut=k;dt(()=>wt(W,be,ut),B)}(k.shapeFlag&256||be&&Vn(be.vnode)&&be.vnode.shapeFlag&256)&&_.a&&dt(_.a,B),_.isMounted=!0,Cd(_),k=P=O=null}};_.scope.on();const q=_.effect=new l2(N);_.scope.off();const S=_.update=q.run.bind(q),ne=_.job=q.runIfDirty.bind(q);ne.i=_,ne.id=_.uid,q.scheduler=()=>go(ne),Bn(_,!0),S()},$=(_,k,P)=>{k.component=_;const O=_.vnode.props;_.vnode=k,_.next=null,d5(_,k.props,O,P),v5(_,k.children,P),tn(),Al(_),nn()},X=(_,k,P,O,B,R,U,N,q=!1)=>{const S=_&&_.children,ne=_?_.shapeFlag:0,W=k.children,{patchFlag:te,shapeFlag:re}=k;if(te>0){if(te&128){Ve(S,W,P,O,B,R,U,N,q);return}else if(te&256){ae(S,W,P,O,B,R,U,N,q);return}}re&8?(ne&16&&We(S,B,R),W!==S&&u(P,W)):ne&16?re&16?Ve(S,W,P,O,B,R,U,N,q):We(S,B,R,!0):(ne&8&&u(P,""),re&16&&Q(W,P,O,B,R,U,N,q))},ae=(_,k,P,O,B,R,U,N,q)=>{_=_||ts,k=k||ts;const S=_.length,ne=k.length,W=Math.min(S,ne);let te;for(te=0;te<W;te++){const re=k[te]=q?dn(k[te]):bt(k[te]);w(_[te],re,P,null,B,R,U,N,q)}S>ne?We(_,B,R,!0,!1,W):Q(k,P,O,B,R,U,N,q,W)},Ve=(_,k,P,O,B,R,U,N,q)=>{let S=0;const ne=k.length;let W=_.length-1,te=ne-1;for(;S<=W&&S<=te;){const re=_[S],ue=k[S]=q?dn(k[S]):bt(k[S]);if(Rn(re,ue))w(re,ue,P,null,B,R,U,N,q);else break;S++}for(;S<=W&&S<=te;){const re=_[W],ue=k[te]=q?dn(k[te]):bt(k[te]);if(Rn(re,ue))w(re,ue,P,null,B,R,U,N,q);else break;W--,te--}if(S>W){if(S<=te){const re=te+1,ue=re<ne?k[re].el:O;for(;S<=te;)w(null,k[S]=q?dn(k[S]):bt(k[S]),P,ue,B,R,U,N,q),S++}}else if(S>te)for(;S<=W;)ge(_[S],B,R,!0),S++;else{const re=S,ue=S,Ae=new Map;for(S=ue;S<=te;S++){const ht=k[S]=q?dn(k[S]):bt(k[S]);ht.key!=null&&Ae.set(ht.key,S)}let be,ct=0;const Ye=te-ue+1;let xt=!1,ut=0;const Bs=new Array(Ye);for(S=0;S<Ye;S++)Bs[S]=0;for(S=re;S<=W;S++){const ht=_[S];if(ct>=Ye){ge(ht,B,R,!0);continue}let Lt;if(ht.key!=null)Lt=Ae.get(ht.key);else for(be=ue;be<=te;be++)if(Bs[be-ue]===0&&Rn(ht,k[be])){Lt=be;break}Lt===void 0?ge(ht,B,R,!0):(Bs[Lt-ue]=S+1,Lt>=ut?ut=Lt:xt=!0,w(ht,k[Lt],P,null,B,R,U,N,q),ct++)}const dl=xt?y5(Bs):ts;for(be=dl.length-1,S=Ye-1;S>=0;S--){const ht=ue+S,Lt=k[ht],fl=ht+1<ne?k[ht+1].el:O;Bs[S]===0?w(null,Lt,P,fl,B,R,U,N,q):xt&&(be<0||S!==dl[be]?qe(Lt,P,fl,2):be--)}}},qe=(_,k,P,O,B=null)=>{const{el:R,type:U,transition:N,children:q,shapeFlag:S}=_;if(S&6){qe(_.component.subTree,k,P,O);return}if(S&128){_.suspense.move(k,P,O);return}if(S&64){U.move(_,k,P,Z);return}if(U===ze){s(R,k,P);for(let W=0;W<q.length;W++)qe(q[W],k,P,O);s(_.anchor,k,P);return}if(U===os){v(_,k,P);return}if(O!==2&&S&1&&N)if(O===0)N.beforeEnter(R),s(R,k,P),dt(()=>N.enter(R),B);else{const{leave:W,delayLeave:te,afterLeave:re}=N,ue=()=>s(R,k,P),Ae=()=>{W(R,()=>{ue(),re&&re()})};te?te(R,ue,Ae):Ae()}else s(R,k,P)},ge=(_,k,P,O=!1,B=!1)=>{const{type:R,props:U,ref:N,children:q,dynamicChildren:S,shapeFlag:ne,patchFlag:W,dirs:te,cacheIndex:re}=_;if(W===-2&&(B=!1),N!=null&&li(N,null,P,_,!0),re!=null&&(k.renderCache[re]=void 0),ne&256){k.ctx.deactivate(_);return}const ue=ne&1&&te,Ae=!Vn(_);let be;if(Ae&&(be=U&&U.onVnodeBeforeUnmount)&&wt(be,k,_),ne&6)at(_.component,P,O);else{if(ne&128){_.suspense.unmount(P,O);return}ue&&qt(_,null,k,"beforeUnmount"),ne&64?_.type.remove(_,k,P,Z,O):S&&!S.hasOnce&&(R!==ze||W>0&&W&64)?We(S,k,P,!1,!0):(R===ze&&W&384||!B&&ne&16)&&We(q,k,P),O&&He(_)}(Ae&&(be=U&&U.onVnodeUnmounted)||ue)&&dt(()=>{be&&wt(be,k,_),ue&&qt(_,null,k,"unmounted")},P)},He=_=>{const{type:k,el:P,anchor:O,transition:B}=_;if(k===ze){vt(P,O);return}if(k===os){x(_);return}const R=()=>{r(P),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(_.shapeFlag&1&&B&&!B.persisted){const{leave:U,delayLeave:N}=B,q=()=>U(P,R);N?N(_.el,R,q):q()}else R()},vt=(_,k)=>{let P;for(;_!==k;)P=d(_),r(_),_=P;r(k)},at=(_,k,P)=>{const{bum:O,scope:B,job:R,subTree:U,um:N,m:q,a:S}=_;Fl(q),Fl(S),O&&qi(O),B.stop(),R&&(R.flags|=8,ge(U,_,k,P)),N&&dt(N,k),dt(()=>{_.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve()),Od(_)},We=(_,k,P,O=!1,B=!1,R=0)=>{for(let U=R;U<_.length;U++)ge(_[U],k,P,O,B)},T=_=>{if(_.shapeFlag&6)return T(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const k=d(_.anchor||_.el),P=k&&k[Sd];return P?d(P):k};let G=!1;const z=(_,k,P)=>{_==null?k._vnode&&ge(k._vnode,null,null,!0):w(k._vnode||null,_,k,null,null,null,P),k._vnode=_,G||(G=!0,Al(),ai(),G=!1)},Z={p:w,um:ge,m:qe,r:He,mt:oe,mc:Q,pc:X,pbc:D,n:T,o:e};let he,ke;return t&&([he,ke]=t(Z)),{render:z,hydrate:he,createApp:u5(z,he)}}function Gi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Bn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function t1(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function n1(e,t,n=!1){const s=e.children,r=t.children;if(se(s)&&se(r))for(let i=0;i<s.length;i++){const a=s[i];let o=r[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[i]=dn(r[i]),o.el=a.el),!n&&o.patchFlag!==-2&&n1(a,o)),o.type===vn&&(o.el=a.el)}}function y5(e){const t=e.slice(),n=[0];let s,r,i,a,o;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(r=n[n.length-1],e[r]<c){t[s]=r,n.push(s);continue}for(i=0,a=n.length-1;i<a;)o=i+a>>1,e[n[o]]<c?i=o+1:a=o;c<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function s1(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:s1(t)}function Fl(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const b5=Symbol.for("v-scx"),k5=()=>Oe(b5);function Js(e,t){return Eo(e,null,t)}function de(e,t,n){return Eo(e,t,n)}function Eo(e,t,n=Pe){const{immediate:s,deep:r,flush:i,once:a}=n,o=Me({},n);let l;if(yr)if(i==="sync"){const d=k5();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!t||s)o.once=!0;else{const d=()=>{};return d.stop=Mt,d.resume=Mt,d.pause=Mt,d}const c=Ue;o.call=(d,m,g)=>Ct(d,c,m,g);let u=!1;i==="post"?o.scheduler=d=>{dt(d,c&&c.suspense)}:i!=="sync"&&(u=!0,o.scheduler=(d,m)=>{m?d():go(d)}),o.augmentJob=d=>{t&&(d.flags|=4),u&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=wd(e,t,o);return l&&l.push(h),h}function E5(e,t,n){const s=this.proxy,r=Be(e)?e.includes(".")?r1(s,e):()=>s[e]:e.bind(s,s);let i;ie(t)?i=t:(i=t.handler,n=t);const a=wr(this),o=Eo(r,i.bind(s),n);return a(),o}function r1(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const A5=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${pt(t)}Modifiers`]||e[`${An(t)}Modifiers`];function x5(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Pe;let r=n;const i=t.startsWith("update:"),a=i&&A5(s,t.slice(7));a&&(a.trim&&(r=n.map(u=>Be(u)?u.trim():u)),a.number&&(r=n.map(Ph))),Id(e,t,r);let o,l=s[o=Vi(t)]||s[o=Vi(pt(t))];!l&&i&&(l=s[o=Vi(An(t))]),l&&Ct(l,e,6,r);const c=s[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ct(c,e,6,r)}}function i1(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let a={},o=!1;if(!ie(e)){const l=c=>{const u=i1(c,t,!0);u&&(o=!0,Me(a,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(Ce(e)&&s.set(e,null),null):(se(i)?i.forEach(l=>a[l]=null):Me(a,i),Ce(e)&&s.set(e,a),a)}function bi(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),_e(e,t[0].toLowerCase()+t.slice(1))||_e(e,An(t))||_e(e,t))}function Qi(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:d,setupState:m,ctx:g,inheritAttrs:w}=e,b=oi(e);let y,E;try{if(n.shapeFlag&4){const x=r||s,L=x;y=bt(c.call(L,x,u,h,m,d,g)),E=o}else{const x=t;y=bt(x.length>1?x(h,{attrs:o,slots:a,emit:l}):x(h,null)),E=t.props?o:P5(o)}}catch(x){Hs.length=0,vr(x,e,1),y=Le(Ge)}let v=y;if(E&&w!==!1){const x=Object.keys(E),{shapeFlag:L}=v;x.length&&L&7&&(i&&x.some(so)&&(E=T5(E,i)),v=yn(v,E,!1,!0))}return n.dirs&&(v=yn(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&$n(v,n.transition),y=v,oi(b),y}const P5=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},T5=(e,t)=>{const n={};for(const s in e)(!so(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function B5(e,t,n){const{props:s,children:r,component:i}=e,{props:a,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Vl(s,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(a[d]!==s[d]&&!bi(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:s===a?!1:s?a?Vl(s,a,c):!0:!!a;return!1}function Vl(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!bi(n,i))return!0}return!1}function C5({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const a1=e=>e.__isSuspense;function o1(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):Pd(e)}const ze=Symbol.for("v-fgt"),vn=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),os=Symbol.for("v-stc"),Hs=[];let mt=null;function Zs(e=!1){Hs.push(mt=e?null:[])}function D5(){Hs.pop(),mt=Hs[Hs.length-1]||null}let er=1;function ql(e){er+=e,e<0&&mt&&(mt.hasOnce=!0)}function l1(e){return e.dynamicChildren=er>0?mt||ts:null,D5(),er>0&&mt&&mt.push(e),e}function p1(e,t,n,s,r,i){return l1(Ao(e,t,n,s,r,i,!0))}function Aa(e,t,n,s,r){return l1(Le(e,t,n,s,r,!0))}function tr(e){return e?e.__v_isVNode===!0:!1}function Rn(e,t){return e.type===t.type&&e.key===t.key}const c1=({key:e})=>e??null,Jr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Be(e)||je(e)||ie(e)?{i:Ze,r:e,k:t,f:!!n}:e:null);function Ao(e,t=null,n=null,s=0,r=null,i=e===ze?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&c1(t),ref:t&&Jr(t),scopeId:I2,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ze};return o?(xo(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),er>0&&!a&&mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&mt.push(l),l}const Le=O5;function O5(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===t5)&&(e=Ge),tr(e)){const o=yn(e,t,!0);return n&&xo(o,n),er>0&&!i&&mt&&(o.shapeFlag&6?mt[mt.indexOf(e)]=o:mt.push(o)),o.patchFlag=-2,o}if(H5(e)&&(e=e.__vccOpts),t){t=I5(t);let{class:o,style:l}=t;o&&!Be(o)&&(t.class=mr(o)),Ce(l)&&(fo(l)&&!se(l)&&(l=Me({},l)),t.style=fr(l))}const a=Be(e)?1:a1(e)?128:R2(e)?64:Ce(e)?4:ie(e)?2:0;return Ao(e,t,n,s,r,a,i,!0)}function I5(e){return e?fo(e)||Q2(e)?Me({},e):e:null}function yn(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:a,children:o,transition:l}=e,c=t?R5(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&c1(c),ref:t&&t.ref?n&&i?se(i)?i.concat(Jr(t)):[i,Jr(t)]:Jr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ze?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yn(e.ssContent),ssFallback:e.ssFallback&&yn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&$n(u,l.clone(u)),u}function u1(e=" ",t=0){return Le(vn,null,e,t)}function D9(e,t){const n=Le(os,null,e);return n.staticCount=t,n}function O9(e="",t=!1){return t?(Zs(),Aa(Ge,null,e)):Le(Ge,null,e)}function bt(e){return e==null||typeof e=="boolean"?Le(Ge):se(e)?Le(ze,null,e.slice()):tr(e)?dn(e):Le(vn,null,String(e))}function dn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:yn(e)}function xo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(se(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),xo(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Q2(t)?t._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ie(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),s&64?(n=16,t=[u1(t)]):n=8);e.children=t,e.shapeFlag|=n}function R5(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=mr([t.class,s.class]));else if(r==="style")t.style=fr([t.style,s.style]);else if(hr(r)){const i=t[r],a=s[r];a&&i!==a&&!(se(i)&&i.includes(a))&&(t[r]=i?[].concat(i,a):a)}else r!==""&&(t[r]=s[r])}return t}function wt(e,t,n,s=null){Ct(e,t,7,[n,s])}const S5=U2();let L5=0;function F5(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||S5,i={uid:L5++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Y2(s,r),emitsOptions:i1(s,r),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=x5.bind(null,i),e.ce&&e.ce(i),i}let Ue=null;const ks=()=>Ue||Ze;let ci,xa;{const e=n2(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(a=>a(i)):r[0](i)}};ci=t("__VUE_INSTANCE_SETTERS__",n=>Ue=n),xa=t("__VUE_SSR_SETTERS__",n=>yr=n)}const wr=e=>{const t=Ue;return ci(e),e.scope.on(),()=>{e.scope.off(),ci(t)}},jl=()=>{Ue&&Ue.scope.off(),ci(null)};function h1(e){return e.vnode.shapeFlag&4}let yr=!1;function V5(e,t=!1,n=!1){t&&xa(t);const{props:s,children:r}=e.vnode,i=h1(e);h5(e,s,i,t),g5(e,r,n);const a=i?q5(e,t):void 0;return t&&xa(!1),a}function q5(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,r5);const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?$5(e):null,i=wr(e);tn();const a=bs(s,e,0,[e.props,r]);if(nn(),i(),Z0(a)){if(Vn(e)||wo(e),a.then(jl,jl),t)return a.then(o=>{$l(e,o,t)}).catch(o=>{vr(o,e,0)});e.asyncDep=a}else $l(e,a,t)}else d1(e,t)}function $l(e,t,n){ie(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ce(t)&&(e.devtoolsRawSetupState=t,e.setupState=A2(t)),d1(e,n)}let Ml;function d1(e,t,n){const s=e.type;if(!e.render){if(!t&&Ml&&!s.render){const r=s.template||bo(e).template;if(r){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:l}=s,c=Me(Me({isCustomElement:i,delimiters:o},a),l);s.render=Ml(r,c)}}e.render=s.render||Mt}{const r=wr(e);tn();try{i5(e)}finally{nn(),r()}}}const j5={get(e,t){return et(e,"get",""),e[t]}};function $5(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,j5),slots:e.slots,emit:e.emit,expose:t}}function Po(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(A2(pd(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ns)return Ns[n](e)},has(t,n){return n in t||n in Ns}})):e.proxy}const M5=/(?:^|[-_])(\w)/g,N5=e=>e.replace(M5,t=>t.toUpperCase()).replace(/[-_]/g,"");function f1(e,t=!0){return ie(e)?e.displayName||e.name:e.name||t&&e.__name}function m1(e,t,n=!1){let s=f1(t);if(!s&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&e&&e.parent){const r=i=>{for(const a in i)if(i[a]===t)return a};s=r(e.components||e.parent.type.components)||r(e.appContext.components)}return s?N5(s):n?"App":"Anonymous"}function H5(e){return ie(e)&&"__vccOpts"in e}const A=(e,t)=>vd(e,t,yr);function p(e,t,n){const s=arguments.length;return s===2?Ce(t)&&!se(t)?tr(t)?Le(e,null,[t]):Le(e,t):Le(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&tr(n)&&(n=[n]),Le(e,t,n))}const Nl="3.5.11";/**
* @vue/runtime-dom v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pa;const Hl=typeof window<"u"&&window.trustedTypes;if(Hl)try{Pa=Hl.createPolicy("vue",{createHTML:e=>e})}catch{}const g1=Pa?e=>Pa.createHTML(e):e=>e,z5="http://www.w3.org/2000/svg",U5="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,zl=Xt&&Xt.createElement("template"),K5={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Xt.createElementNS(z5,e):t==="mathml"?Xt.createElementNS(U5,e):n?Xt.createElement(e,{is:n}):Xt.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Xt.createTextNode(e),createComment:e=>Xt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const a=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{zl.innerHTML=g1(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const o=zl.content;if(s==="svg"||s==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},an="transition",Ds="animation",hs=Symbol("_vtc"),v1={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_1=Me({},L2,v1),G5=e=>(e.displayName="Transition",e.props=_1,e),ds=G5((e,{slots:t})=>p(Fd,w1(e),t)),Cn=(e,t=[])=>{se(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ul=e=>e?se(e)?e.some(t=>t.length>1):e.length>1:!1;function w1(e){const t={};for(const F in e)F in v1||(t[F]=e[F]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,g=Q5(r),w=g&&g[0],b=g&&g[1],{onBeforeEnter:y,onEnter:E,onEnterCancelled:v,onLeave:x,onLeaveCancelled:L,onBeforeAppear:j=y,onAppear:C=E,onAppearCancelled:Q=v}=t,V=(F,ee,oe)=>{cn(F,ee?u:o),cn(F,ee?c:a),oe&&oe()},D=(F,ee)=>{F._isLeaving=!1,cn(F,h),cn(F,m),cn(F,d),ee&&ee()},H=F=>(ee,oe)=>{const fe=F?C:E,K=()=>V(ee,F,oe);Cn(fe,[ee,K]),Kl(()=>{cn(ee,F?l:i),Wt(ee,F?u:o),Ul(fe)||Gl(ee,s,w,K)})};return Me(t,{onBeforeEnter(F){Cn(y,[F]),Wt(F,i),Wt(F,a)},onBeforeAppear(F){Cn(j,[F]),Wt(F,l),Wt(F,c)},onEnter:H(!1),onAppear:H(!0),onLeave(F,ee){F._isLeaving=!0;const oe=()=>D(F,ee);Wt(F,h),Wt(F,d),b1(),Kl(()=>{F._isLeaving&&(cn(F,h),Wt(F,m),Ul(x)||Gl(F,s,b,oe))}),Cn(x,[F,oe])},onEnterCancelled(F){V(F,!1),Cn(v,[F])},onAppearCancelled(F){V(F,!0),Cn(Q,[F])},onLeaveCancelled(F){D(F),Cn(L,[F])}})}function Q5(e){if(e==null)return null;if(Ce(e))return[Wi(e.enter),Wi(e.leave)];{const t=Wi(e);return[t,t]}}function Wi(e){return Th(e)}function Wt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[hs]||(e[hs]=new Set)).add(t)}function cn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[hs];n&&(n.delete(t),n.size||(e[hs]=void 0))}function Kl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let W5=0;function Gl(e,t,n,s){const r=e._endId=++W5,i=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:o,propCount:l}=y1(e,t);if(!a)return s();const c=a+"end";let u=0;const h=()=>{e.removeEventListener(c,d),i()},d=m=>{m.target===e&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},o+1),e.addEventListener(c,d)}function y1(e,t){const n=window.getComputedStyle(e),s=g=>(n[g]||"").split(", "),r=s(`${an}Delay`),i=s(`${an}Duration`),a=Ql(r,i),o=s(`${Ds}Delay`),l=s(`${Ds}Duration`),c=Ql(o,l);let u=null,h=0,d=0;t===an?a>0&&(u=an,h=a,d=i.length):t===Ds?c>0&&(u=Ds,h=c,d=l.length):(h=Math.max(a,c),u=h>0?a>c?an:Ds:null,d=u?u===an?i.length:l.length:0);const m=u===an&&/\b(transform|all)(,|$)/.test(s(`${an}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:m}}function Ql(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Wl(n)+Wl(e[s])))}function Wl(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function b1(){return document.body.offsetHeight}function Y5(e,t,n){const s=e[hs];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Yl=Symbol("_vod"),X5=Symbol("_vsh"),J5=Symbol(""),Z5=/(^|;)\s*display\s*:/;function ef(e,t,n){const s=e.style,r=Be(n);let i=!1;if(n&&!r){if(t)if(Be(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Zr(s,o,"")}else for(const a in t)n[a]==null&&Zr(s,a,"");for(const a in n)a==="display"&&(i=!0),Zr(s,a,n[a])}else if(r){if(t!==n){const a=s[J5];a&&(n+=";"+a),s.cssText=n,i=Z5.test(n)}}else t&&e.removeAttribute("style");Yl in e&&(e[Yl]=i?s.display:"",e[X5]&&(s.display="none"))}const Xl=/\s*!important$/;function Zr(e,t,n){if(se(n))n.forEach(s=>Zr(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=tf(e,t);Xl.test(n)?e.setProperty(An(s),n.replace(Xl,""),"important"):e[s]=n}}const Jl=["Webkit","Moz","ms"],Yi={};function tf(e,t){const n=Yi[t];if(n)return n;let s=pt(t);if(s!=="filter"&&s in e)return Yi[t]=s;s=dr(s);for(let r=0;r<Jl.length;r++){const i=Jl[r]+s;if(i in e)return Yi[t]=i}return t}const Zl="http://www.w3.org/1999/xlink";function ep(e,t,n,s,r,i=Rh(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Zl,t.slice(6,t.length)):e.setAttributeNS(Zl,t,n):n==null||i&&!ao(n)?e.removeAttribute(t):e.setAttribute(t,i?"":En(n)?String(n):n)}function tp(e,t,n,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?g1(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,o=n==null?e.type==="checkbox"?"on":"":String(n);(a!==o||!("_value"in e))&&(e.value=o),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ao(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}function nf(e,t,n,s){e.addEventListener(t,n,s)}function sf(e,t,n,s){e.removeEventListener(t,n,s)}const np=Symbol("_vei");function rf(e,t,n,s,r=null){const i=e[np]||(e[np]={}),a=i[t];if(s&&a)a.value=s;else{const[o,l]=af(t);if(s){const c=i[t]=pf(s,r);nf(e,o,c,l)}else a&&(sf(e,o,a,l),i[t]=void 0)}}const sp=/(?:Once|Passive|Capture)$/;function af(e){let t;if(sp.test(e)){t={};let s;for(;s=e.match(sp);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):An(e.slice(2)),t]}let Xi=0;const of=Promise.resolve(),lf=()=>Xi||(of.then(()=>Xi=0),Xi=Date.now());function pf(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ct(cf(s,n.value),t,5,[s])};return n.value=e,n.attached=lf(),n}function cf(e,t){if(se(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const rp=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,uf=(e,t,n,s,r,i)=>{const a=r==="svg";t==="class"?Y5(e,s,a):t==="style"?ef(e,n,s):hr(t)?so(t)||rf(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hf(e,t,s,a))?(tp(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ep(e,t,s,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Be(s))?tp(e,pt(t),s):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ep(e,t,s,a))};function hf(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&rp(t)&&ie(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return rp(t)&&Be(n)?!1:t in e}const k1=new WeakMap,E1=new WeakMap,ui=Symbol("_moveCb"),ip=Symbol("_enterCb"),df=e=>(delete e.props.mode,e),ff=df({name:"TransitionGroup",props:Me({},_1,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ks(),s=S2();let r,i;return N2(()=>{if(!r.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!_f(r[0].el,n.vnode.el,a))return;r.forEach(mf),r.forEach(gf);const o=r.filter(vf);b1(),o.forEach(l=>{const c=l.el,u=c.style;Wt(c,a),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[ui]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c[ui]=null,cn(c,a))};c.addEventListener("transitionend",h)})}),()=>{const a=pe(e),o=w1(a);let l=a.tag||ze;if(r=[],i)for(let c=0;c<i.length;c++){const u=i[c];u.el&&u.el instanceof Element&&(r.push(u),$n(u,Xs(u,o,s,n)),k1.set(u,u.el.getBoundingClientRect()))}i=t.default?_o(t.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&$n(u,Xs(u,o,s,n))}return Le(l,null,i)}}}),A1=ff;function mf(e){const t=e.el;t[ui]&&t[ui](),t[ip]&&t[ip]()}function gf(e){E1.set(e,e.el.getBoundingClientRect())}function vf(e){const t=k1.get(e),n=E1.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",e}}function _f(e,t,n){const s=e.cloneNode(),r=e[hs];r&&r.forEach(o=>{o.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(s);const{hasTransform:a}=y1(s);return i.removeChild(s),a}const wf=Me({patchProp:uf},K5);let Ji,ap=!1;function yf(){return Ji=ap?Ji:_5(wf),ap=!0,Ji}const bf=(...e)=>{const t=yf().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Ef(s);if(r)return n(r,!0,kf(r))},t};function kf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ef(e){return Be(e)?document.querySelector(e):e}var br=e=>/^[a-z][a-z0-9+.-]*:/.test(e)||e.startsWith("//"),Af=/.md((\?|#).*)?$/,ki=(e,t="/")=>br(e)||e.startsWith("/")&&!e.startsWith(t)&&!Af.test(e),zn=e=>/^(https?:)?\/\//.test(e),op=e=>{if(!e||e.endsWith("/"))return e;let t=e.replace(/(^|\/)README.md$/i,"$1index.html");return t.endsWith(".md")?t=`${t.substring(0,t.length-3)}.html`:t.endsWith(".html")||(t=`${t}.html`),t.endsWith("/index.html")&&(t=t.substring(0,t.length-10)),t},xf="http://.",Pf=(e,t)=>{if(!e.startsWith("/")&&t){const n=t.slice(0,t.lastIndexOf("/"));return op(new URL(`${n}/${e}`,xf).pathname)}return op(e)},Tf=(e,t)=>{const n=Object.keys(e).sort((s,r)=>{const i=r.split("/").length-s.split("/").length;return i!==0?i:r.length-s.length});for(const s of n)if(t.startsWith(s))return s;return"/"},Bf=/(#|\?)/,x1=e=>{const[t,...n]=e.split(Bf);return{pathname:t,hashAndQueries:n.join("")}},Cf=["link","meta","script","style","noscript","template"],Df=["title","base"],Of=([e,t,n])=>Df.includes(e)?e:Cf.includes(e)?e==="meta"&&t.name?`${e}.${t.name}`:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,Object.entries(t).map(([s,r])=>typeof r=="boolean"?r?[s,""]:null:[s,r]).filter(s=>s!=null).sort(([s],[r])=>s.localeCompare(r)),n]):null,If=e=>{const t=new Set,n=[];return e.forEach(s=>{const r=Of(s);r&&!t.has(r)&&(t.add(r),n.push(s))}),n},Rf=e=>e.startsWith("/")?e:`/${e}`,P1=e=>e.endsWith("/")||e.endsWith(".html")?e:`${e}/`,To=e=>e.endsWith("/")?e.slice(0,-1):e,T1=e=>e.startsWith("/")?e.slice(1):e,Es=e=>Object.prototype.toString.call(e)==="[object Object]",Re=e=>typeof e=="string";const Sf=JSON.parse("{}"),Lf=Object.fromEntries([["/",{loader:()=>f(()=>import("./index.html-DLZHyQMS.js"),[]),meta:{t:"smallfawn",i:"home"}}],["/posts/2024-10-04.html",{loader:()=>f(()=>import("./2024-10-04.html-iHpypL_f.js"),[]),meta:{u:999,e:`
<h2>法式生活馆每周567抽奖 亲测中饿了么会员月卡</h2>
<p><strong>法式生活馆每周567抽奖 亲测中饿了么会员月卡</strong></p>
<p>这个活动是非必中的哦，每周五六七号都可以参与抽奖</p>
<p>我抽中的饿了么会员月卡，奖品还有戴森吹风机等</p>
<p>大家可以抽奖十四，活动有助力但是助力有上限的</p>
<p>&nbsp;</p>
<h1>10月4日置顶 新一期可参与</h1>
<p>微信打开下方小程序 有一次抽奖机会 完成任务获得积分有多次抽奖机会</p>
<p>#小程序://1664生活馆/BW2tq2FfCEwoKba</p>
<p><img alt="法式生活馆每周567抽奖 亲测中饿了么会员月卡_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/09/22/ea1261fe420de61341508d56028baa64.jpg" style="width: 650px;  height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:27.95,words:8385},t:"爬取日期: 2024-10-04",y:"a"}}],["/posts/2024-10-05.html",{loader:()=>f(()=>import("./2024-10-05.html-BkA5vvSr.js"),[]),meta:{u:1004,e:`
<h2>微博夏日畅影计划抽红包/电影票 亲测0.5元秒到</h2>
<p><strong>微博夏日畅影计划抽红包/电影票 亲测0.5元秒到</strong></p>
<p>微博APP参与活动，每日完成任务多次抽奖机会</p>
<p>抽现金荭包/周边实物/免费电影票，非必中</p>
<p>亲测0.5元现金秒到，不中的明天继续试试</p>
<p>&nbsp;</p>
<h1>10月5日置顶 抽奖有水</h1>
<p><br>微博APP扫码-下拉完成任务抽奖</p>
<p><img alt="微博夏日畅影计划抽红包/电影票 亲测0.5元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/07/15/281363742a832f21caee77c75e3abb18.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:25.76,words:7728},t:"爬取日期: 2024-10-05",y:"a"}}],["/posts/2024-10-06.html",{loader:()=>f(()=>import("./2024-10-06.html-DoXCpc6U.js"),[]),meta:{u:1007,e:`
<h2>亲测中爱奇艺周卡 移动云盘美图相册幸运抽奖</h2>
<p><strong>亲测中爱奇艺周卡 移动云盘美图相册幸运抽奖</strong></p>
<p>移动云盘、美图用户都可参与</p>
<p>每月有一次抽奖机会，抽支付宝红包/立减金/视频会员等</p>
<p>亲测中爱奇艺会员周卡</p>
<p><br>微信打开-登录后会显示有一次抽奖机会</p>
<p><img alt="亲测中爱奇艺周卡 移动云盘美图相册幸运抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/06/e87c32b040a0df4ff003f58c28f33e9d.jpg" style="width: 645px; *//* height: 692px;" referrerpolicy="no-referrer"></p>`,r:{minutes:29.19,words:8756},t:"爬取日期: 2024-10-06",y:"a"}}],["/posts/2024-10-07.html",{loader:()=>f(()=>import("./2024-10-07.html-DtMM1s4T.js"),[]),meta:{u:1010,e:`
<h2>建融家园开好礼抽最高88元立减金 亲测18元立减金</h2>
<p><strong>建融家园开好礼抽最高88元立减金 亲测18元立减金</strong></p>
<p>这个活动目前很卡大家自己去卡哦，群友反馈是有水的</p>
<p>他抽到18元立减金，最高可以抽到88元立减金</p>
<p>有建行卡的可以参与一下哦，</p>
<p>&nbsp;</p>
<h1>10月7日置顶 新一期</h1>
<p><br>微信搜索【建融家园】小程序 首页顶部【惠消费 开好礼】点进去参与抽奖即可</p>
<p>找不到的，复制发送到微信聊天框打开&nbsp;</p>
<p>#小程序://CCB建融家园平台/Yaiij4CXip9eOmq</p>`,r:{minutes:40.68,words:12204},t:"爬取日期: 2024-10-07",y:"a"}}],["/posts/2024-10-08.html",{loader:()=>f(()=>import("./2024-10-08.html-uzEI_7Za.js"),[]),meta:{u:1007,e:`
<h2>移动云手机欢聚国庆月抽最高100元立减金 亲测2元秒到</h2>
<p><strong>移动云手机欢聚国庆月抽最高100元立减金 亲测2元秒到</strong></p>
<p>移动云手机APP参加，需要移动号码参与</p>
<p>体验云机不能连wifi只能用移动数据网络哦</p>
<p>简单体验获取口令抽1-100元立减金，这个是必中的</p>
<p>亲测2元立减金秒到，数量有限领完即止</p>
<p><br>移动云手机APP-我的-活动中心-【欢聚国庆月 红包来贺礼】-点【玩云机拿口令】进去体验一会返回自动输入口令，抽取立减金</p>
<p><img alt="移动云手机欢聚国庆月抽最高100元立减金 亲测2元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/08/f6f00d3fe535181ad5e7269dd31c658b.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:39.32,words:11796},t:"爬取日期: 2024-10-08",y:"a"}}],["/posts/2024-10-09.html",{loader:()=>f(()=>import("./2024-10-09.html-BnO24UFO.js"),[]),meta:{u:1005,e:`
<h2>亲测1元秒到 富国基金周周红包雨抽奖</h2>
<p><strong>亲测1元秒到 富国基金周周红包雨抽奖</strong></p>
<p>微信都可以参与抽奖，有3次机会</p>
<p>基本都会中1-2个随机红包，亲测中1元现金秒到</p>
<p><br>【富国基金微管家】公众号-菜单栏【周周红包雨】-10w份红包-进去抽</p>
<p><img alt="亲测1元秒到 富国基金周周红包雨抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/09/e05060ab67649d3b6cc28447a15cc5fc.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:41.23,words:12368},t:"爬取日期: 2024-10-09",y:"a"}}],["/posts/2024-10-10.html",{loader:()=>f(()=>import("./2024-10-10.html-DOcA3T-t.js"),[]),meta:{u:1005,e:`
<h2>广州工行穗彩缤纷抽立减金 亲测20元秒到</h2>
<p><strong>广州工行穗彩缤纷抽立减金 亲测20元秒到</strong></p>
<p>广东广州地区的参加哦，广东其他地区的也试试看有无资格</p>
<p>简单完成任务抽最高20元立减金</p>
<p>群有反馈中20元微信立减金，地区符合的去试试看</p>
<p>&nbsp;</p>
<p>工行APP-任务中心-下享活动下方横幅【穗彩缤纷 体验有礼】抽奖</p>
<p><img alt="广州工行穗彩缤纷抽立减金 亲测20元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/10/24703a37d2744a7c4db5e8ee65076a67.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:54.74,words:16423},t:"爬取日期: 2024-10-10",y:"a"}}],["/posts/2024-10-11.html",{loader:()=>f(()=>import("./2024-10-11.html-BB_Cw4gO.js"),[]),meta:{u:1005,e:`
<h2>Epic喜+2限时免费领《帝国霸业：银河生存》等游戏</h2>
<p><strong>Epic喜+2限时免费领《帝国霸业：银河生存》等游戏</strong></p>
<p>Epic喜加2《帝国霸业：银河生存》+《Outliver: Tribulation》</p>
<p>《帝国霸业：银河生存》在您的银河之旅中建造强大的资本船只、庞大的行星定居点和巨大的空间站，以发现Empyrion的奥秘。</p>
<p>《Outliver: Tribulation》扮演一名神秘地来到超自然领域的士兵，唯一的逃生之道是参加一个古老的仪式</p>
<p>限时免费领取时间至10月17日23:00，可以不玩但不能没有</p>`,r:{minutes:52.21,words:15662},t:"爬取日期: 2024-10-11",y:"a"}}],["/posts/2024-10-12.html",{loader:()=>f(()=>import("./2024-10-12.html-BbwOtucV.js"),[]),meta:{u:1005,e:`
<h2>建行消费达标月月开最高抽666元微信立减金</h2>
<p><strong>建行消费达标月月开最高抽666元微信立减金</strong></p>
<p>建行消费达标活动来袭，按要求消费达标可抽奖</p>
<p>完成当月3笔、10笔、15笔5元以上消费，分别可抽奖一次最高10元立减金</p>
<p>完成当月消费10笔、消费金额达到6666元，抽最高666元立减金</p>
<p>使用建行卡在微信/支付宝支付5元以上就算成功，每天最多2笔</p>
<p>可以试试转零钱通，不知道算不算笔数哦</p>
<p>&nbsp;</p>
<h1>10月12日置顶 新一期参加</h1>
<p>1.建行APP搜【惠省钱】-下拉精选活动【消费达标月月卡 最高抽666元大奖】-一重礼去消费笔数，二重礼也记得报名</p>`,r:{minutes:49.48,words:14844},t:"爬取日期: 2024-10-12",y:"a"}}],["/posts/2024-10-13.html",{loader:()=>f(()=>import("./2024-10-13.html-CSFyTrWK.js"),[]),meta:{u:1005,e:`
<h2>美团领8元无门槛红包 1.5元购库迪咖啡</h2>
<p><strong>美团领8元无门槛红包 1.5元购库迪咖啡</strong></p>
<p>这个活动大家可以参与一下哦，先领到红包</p>
<p>然后整点去买库迪或者瑞幸，整点开始可以抵扣哦</p>
<p>其他时候不显示抵扣，大家可以先去领取8元无门槛红包哦</p>
<p><br>1.微信/美团打开底部地址 关注了直播间的取消关注 左上角【抢】领取8元无门槛关注券</p>
<p>2.底部购物车会弹 瑞幸 库迪-如果不弹退出重新进入直播间 或者整点去搜索购买试试</p>
<p><img alt="美团领8元无门槛红包 1.5元购库迪咖啡_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/13/31eb65804a9aff6cdac03a64abf0d69e.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:33.05,words:9915},t:"爬取日期: 2024-10-13",y:"a"}}],["/posts/2024-10-14.html",{loader:()=>f(()=>import("./2024-10-14.html-BwKPjdNk.js"),[]),meta:{u:1005,e:`
<h2>建行生活低碳抽奖最高6.66元立减金 亲测1.08元秒到</h2>
<p><strong>建行生活低碳抽奖最高6.66元立减金 亲测1.08元秒到</strong></p>
<p>建行生活APP低碳生活抽奖，不限地区都可参与</p>
<p>每人有一次免费抽奖机会，之后要200g能量抽一次</p>
<p>抽奖非必中最高6.66元立减金，亲测1.08元立减金秒到</p>
<p>&nbsp;</p>
<h1>10月14日置顶 抽奖有水</h1>
<p>建行生活APP-首页左上角位置选择【武汉】-再搜【低碳生活】-右侧悬浮【抽奖】</p>
<p><img alt="建行生活低碳抽奖最高6.66元立减金 亲测1.08元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/09/18/b5ef21811f6c07322c8b215f036c136f.jpg" style="width: 740px; *//* height: 521px;" referrerpolicy="no-referrer"></p>`,r:{minutes:45.13,words:13540},t:"爬取日期: 2024-10-14",y:"a"}}],["/posts/2024-10-15.html",{loader:()=>f(()=>import("./2024-10-15.html-myOVEXK4.js"),[]),meta:{u:1005,e:`
<h2>7.99元购建行16元微信立减金 20元商城抵扣券</h2>
<p><strong>7.99元购建行16元微信立减金 20元商城抵扣券</strong></p>
<p>这个是建行省钱卡的活动，购买了这个省钱卡可以领取总共16元微信立减金</p>
<p>和20元善融商城满100-20立减券，购买后微信立减金就发放啦，秒到</p>
<p>&nbsp;</p>
<h1>10月15日置顶 部分人弹7折购买立减金</h1>
<p>&nbsp;</p>
<p>建行APP-搜【惠省钱】-进去，自动弹窗0.99元购优惠券（可能部分人有）-抽完转盘折扣后，去购买显示0.99优惠价即可</p>
<p><img alt="7.99元购建行16元微信立减金 20元商城抵扣券-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2023/11/23/09cbdb640cf1cbe4b295c65ef74b69e4.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.3,words:4289},t:"爬取日期: 2024-10-15",y:"a"}}],["/posts/2024-10-16.html",{loader:()=>f(()=>import("./2024-10-16.html-kJ2__l0b.js"),[]),meta:{u:1004,e:`
<h2>工行碳能量兑换1元微信立减金 亲测1元秒到</h2>
<p><strong>工行碳能量兑换1元微信立减金 亲测1元秒到</strong></p>
<p>这个碳能量出了很久了，没有兑换过的应该都会有几千能量值了</p>
<p>每个月转账4次，每次可获取440g能量，这个能量还是挺简单的</p>
<p>亲测1元微信立减金秒到，能量够的去兑换一下奖励</p>
<p>&nbsp;</p>
<h1>10月16日置顶&nbsp; 又可以兑换1元立减金了</h1>
<p>&nbsp;</p>
<p>工行APP-我的-绿色能量-下方2500g兑换1元微信立减金</p>
<p><img alt="工行碳能量兑换1元微信立减金 亲测1元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2022/11/29/c50bf0dd17f383371b30a2629b390f51.jpg" style="width: 645px; *//* height: 693px;" referrerpolicy="no-referrer"></p>`,r:{minutes:36.96,words:11087},t:"爬取日期: 2024-10-16",y:"a"}}],["/posts/2024-10-17.html",{loader:()=>f(()=>import("./2024-10-17.html-CLvn5Pfl.js"),[]),meta:{u:1004,e:`
<h2>亲测0撸酸辣粉260g/袋 淘宝领5元无门槛签到红包</h2>
<p><strong>亲测0撸酸辣粉260g/袋 淘宝领5元无门槛签到红包</strong></p>
<p>部分人可又以领取到淘宝5元无门槛签到红包</p>
<p>领不到的要换号试试看哦，不然参与不了</p>
<p>领到的直接可以0撸四川成都酸辣粉260g/袋，这个还不错哦，平常也要10元一袋</p>
<p><br><span style="color:#FF0000;">领淘宝红包</span><br>淘宝搜【福利发发发3737】<br><span style="background-color:#AFEEEE;">手机淘口令4$u9wo3PxhvWh$:// CA1371</span></p>`,r:{minutes:33.83,words:10148},t:"爬取日期: 2024-10-17",y:"a"}}],["/posts/2024-10-18.html",{loader:()=>f(()=>import("./2024-10-18.html-puH2QJzy.js"),[]),meta:{u:1005,e:`
<h2>Epic喜+2免费领取《无敌少侠:原子女侠伊芙》等游戏</h2>
<p><strong>Epic喜+2免费领取《无敌少侠:原子女侠伊芙》等游戏</strong></p>
<p>Epic喜+2《无敌少侠:原子女侠伊芙》+《卡牌之王》</p>
<p>《无敌少侠:原子女侠伊芙》作为无敌宇宙中最强大的超级英雄之一，控制自己的道路！解开一个谜团，平衡作为超级英雄的危险和责任，与日常生活中的相关挑战</p>
<p>《卡牌之王》是一款商店经营模拟游戏，打造当地一流好店，吸引各界顾客光临</p>
<p>限时免费领取时间至10月24日23:00</p>
<p>&nbsp;</p>
<p>《无敌少侠:原子女侠伊芙》</p>`,r:{minutes:39.06,words:11717},t:"爬取日期: 2024-10-18",y:"a"}}],["/posts/2024-10-19.html",{loader:()=>f(()=>import("./2024-10-19.html-BCaP3pUx.js"),[]),meta:{u:1005,e:`
<h2>中信完成简单浏览任务抽奖 亲测中1元立减金</h2>
<p><strong>中信完成简单浏览任务抽奖 亲测中1元立减金</strong></p>
<p>这个活动很简单，今天刚刚出来中到多少立减金</p>
<p>看脸我只中到1元立减金，领取是秒到的哦</p>
<p>都是可以参与的，只需要完成浏览任务</p>
<p>&nbsp;</p>
<h1>10月19日置顶 新一期抽奖</h1>
<p><br>中信银行APP搜【资产负债表】点进去-右侧【月月赢好礼】 浏览一下完成任务抽立减金试试</p>
<p><img alt="中信完成简单浏览任务抽奖 亲测中1元立减金_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/09/11/9f495a953c4d53b000ddc8e489fd7b60.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:26.46,words:7938},t:"爬取日期: 2024-10-19",y:"a"}}],["/posts/2024-10-20.html",{loader:()=>f(()=>import("./2024-10-20.html-BxqAEtWk.js"),[]),meta:{u:1005,e:`
<h2>腾讯/滴滴v7-v8会员 免费领取机场休息室福利</h2>
<p><strong>腾讯/滴滴v7-v8会员 免费领取机场休息室福利</strong></p>
<p>这个福利自己不用可以给有需要的人，群友反馈</p>
<p>在海鲜市场可以出到50左右的价格的哦，符合领取要求的</p>
<p>可以参与试试哦。</p>
<p><br>1.腾讯视频v7-v8免费领的滴滴V7会员-然后去领取机场休息室福利 滴滴v7-v8会员直接领取福利</p>
<p>活动地址：<a target="_blank" href="https://6url.cn/SFRVsS">https://6url.cn/SFRVsS</a></p>`,r:{minutes:32.96,words:9889},t:"爬取日期: 2024-10-20",y:"a"}}],["/posts/2024-10-21.html",{loader:()=>f(()=>import("./2024-10-21.html-B7FblwG_.js"),[]),meta:{u:1005,e:`
<h2>百度百元赏金答题 亲测20元现金不秒到</h2>
<p><strong>百度百元赏金答题 亲测20元现金不秒到</strong></p>
<p>这个活动有直接入口，大家自己去参与就可以了哦</p>
<p>百元赏金大赛需要邀请3个没有参与过答题的用户助力</p>
<p>累积获得10元答题，每天可以参与一次，累积的现金达到10元可提现</p>
<p>&nbsp;</p>
<h1>10月21日置顶 现在百元赏金答题，答案基本都是八核</h1>
<p><br>1.百度APP更新到最新版本后 搜【答题红包】-【百元赏金+开始答题】任务都可以获得现金</p>
<p>2.【百元赏金】需要邀请3个人解锁 在规定的时间内获得金额提现 【开始答题】每天都可以参与累积10元提现</p>`,r:{minutes:35.66,words:10697},t:"爬取日期: 2024-10-21",y:"a"}}],["/posts/2024-10-22.html",{loader:()=>f(()=>import("./2024-10-22.html-D1SOxjYk.js"),[]),meta:{u:1005,e:`
<h2>网易10元无门槛红包 亲测0.79元撸1条毛巾</h2>
<p><strong>网易10元无门槛红包 亲测0.79元撸1条毛巾</strong></p>
<p>这个长期没有用过网易严选的pro用户可以参与一下</p>
<p>长期没有用的话会在APP我的，优惠券内自动到账</p>
<p>10元无门槛红包，然后去首页找大于10元的商品</p>
<p>就可以叠加免邮券撸实物了，我是撸了一条毛巾</p>
<p>&nbsp;</p>
<h1>10月22日置顶 新一期</h1>
<p><br>1.网易严选APP-我的-顶部【优惠券】看看有无10元直减红包 商城首页随意找商品可抵扣&nbsp;</p>`,r:{minutes:42.51,words:12754},t:"爬取日期: 2024-10-22",y:"a"}}],["/posts/2024-10-23.html",{loader:()=>f(()=>import("./2024-10-23.html-BK1kngox.js"),[]),meta:{u:1005,e:`
<h2>工行趣味礼抽立减金 抽最高188元立减金</h2>
<p><strong>工行趣味礼抽立减金 抽最高188元立减金</strong></p>
<p>这个活动可以不同邀请人哦，分享一下就可以抽奖</p>
<p>活动非必中没有中的话就用家人的好试试哦</p>
<p>只要简单浏览阅读分享一下返回就可以抽奖了</p>
<p>&nbsp;</p>
<h1>10月23日新一期置顶</h1>
<p>工行APP-任务中心-享活动-趣味礼-点进去完成约任务-去邀请不需要真的邀请分享返回就可以抽奖了</p>
<p><img alt="工行财富星期三抽立减金 抽最高188元立减金_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/16/5a249715182305221846922d79a7d8f9.jpg" style="width: 650px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:39.53,words:11859},t:"爬取日期: 2024-10-23",y:"a"}}],["/posts/2024-10-24.html",{loader:()=>f(()=>import("./2024-10-24.html-CFA0yAsV.js"),[]),meta:{u:1005,e:`
<h2>建行生活能量兑换2-20元立减金 亲测2元立减金秒到</h2>
<p><strong>建行生活能量兑换2-20元立减金 亲测2元立减金秒到</strong></p>
<p>建行生活APP低碳生活能量兑换权益活动</p>
<p>500g能量兑换2元立减金，能量多的可兑换20元面额立减金</p>
<p>亲测2元立减金秒到，能量通过平时使用建行支付等获取</p>
<p>&nbsp;</p>
<h1>10月24日置顶 又可以兑换了</h1>
<p><br>建行生活APP-搜【低碳生活】进去-【权益】，去兑换即可</p>
<p><img alt="建行生活能量兑换2-20元立减金 亲测2元立减金秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/07/20/34e9bdeb88a54a8091d4dee1ce1fa308.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:34.74,words:10421},t:"爬取日期: 2024-10-24",y:"a"}}],["/posts/2024-10-25.html",{loader:()=>f(()=>import("./2024-10-25.html-DbJaVQkv.js"),[]),meta:{u:1005,e:`
<h2>Epic喜+1限时免费领取《Moving Out》游戏</h2>
<p><strong>Epic喜+1限时免费领取《Moving Out》游戏</strong></p>
<p>Epic喜+1《Moving Out》是一款无厘头的物理模拟搬家游戏</p>
<p>你可以独自承接任务或与好友协力合作来体验剧情模式。最多支持四位玩家一起游玩，你们可以窝在沙发上争论搬运沙发的最佳方法。这对游戏技巧和你们的友情都是一大考验</p>
<p>限时免费领取时间至10月31日23:00，可以不玩但不能没有</p>
<p><br>《Moving Out》</p>
<p><img alt="Epic喜+1限时免费领取《Moving Out》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/25/a928ba4e5d606ae92fa4ba2c16c4c55b.jpg" style="width: 740px; *//* height: 410px;" referrerpolicy="no-referrer"></p>`,r:{minutes:38.25,words:11475},t:"爬取日期: 2024-10-25",y:"a"}}],["/posts/2024-10-26.html",{loader:()=>f(()=>import("./2024-10-26.html-D4K-WCIw.js"),[]),meta:{u:1005,e:`
<h2>移动全球通星动日抽手机/腾讯视频年卡/双权益礼包 需银卡以上</h2>
<p><strong>移动全球通星动日抽手机/腾讯视频年卡/双权益礼包 需银卡以上</strong></p>
<p>活动需要关注公众号进入，是移动全球通银卡以上的可以抽奖</p>
<p>奖品有vivo手机/腾讯年卡/贝乐虎VIP年卡/双权益礼包等，需自测</p>
<p>银卡以上的可以去试试看，看脸的</p>
<p>&nbsp;</p>
<h1>10月26日置顶 每月26-28日抽奖+领权益</h1>
<p><br>26-28日每日可抽一次</p>
<p><img alt="移动全球通星动日抽手机/腾讯视频年卡/双权益礼包 需银卡以上-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2021/12/26/266bc5386fb95c8b2a566e992ac0e32b.jpg" style="width: 645px; *//* height: 569px;" referrerpolicy="no-referrer"></p>`,r:{minutes:34.3,words:10290},t:"爬取日期: 2024-10-26",y:"a"}}],["/posts/2024-10-27.html",{loader:()=>f(()=>import("./2024-10-27.html-B0t9MWBs.js"),[]),meta:{u:1005,e:`
<h2>亲测40Q币秒到 应用宝回归礼登录领取</h2>
<p><strong>亲测40Q币秒到 应用宝回归礼登录领取</strong></p>
<p>这个是应用宝的受邀活动，有入口的就可以参加</p>
<p>部分人是有每个游戏10Q币奖励，有的是5元现金</p>
<p>不是回归用户的就只有游戏道具，亲测40Q币秒到</p>
<p>&nbsp;</p>
<h1>10月27日置顶 有回归任务的去完成领4Q币</h1>
<p>&nbsp;</p>
<p><span style="color:#FF0000;">应用宝经常用微信登录的，切换到QQ登录应用宝APP（经常用QQ登录的就切换账号用微信登录APP），这样比较容易有回归礼</span></p>`,r:{minutes:37.09,words:11126},t:"爬取日期: 2024-10-27",y:"a"}}],["/posts/2024-10-28.html",{loader:()=>f(()=>import("./2024-10-28.html-U3ekXZN4.js"),[]),meta:{u:1005,e:`
<h2>云缴费趣挑战抽最高288元缴费红包 亲测2.8元</h2>
<p><strong>云缴费趣挑战抽最高288元缴费红包 亲测2.8元</strong></p>
<p>云缴费小程序参与，每天完成任务抽奖</p>
<p>每天最多两次抽奖机会，非必中</p>
<p>亲测2.8元缴费红包秒到</p>
<p><br>复制发送到微信打开</p>
<p>#小程序://云缴费官方/qE68voq51dGhDVp</p>
<p>首页-中间滚动横幅【趣挑战最高抽288元红包】-下拉完成任务抽奖</p>
<p><img alt="云缴费趣挑战抽最高288元缴费红包 亲测2.8元-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/28/005e5dbafcdbffcc4748013ad8bd0f11.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:37.93,words:11379},t:"爬取日期: 2024-10-28",y:"a"}}],["/posts/2024-10-29.html",{loader:()=>f(()=>import("./2024-10-29.html-mbqW3kde.js"),[]),meta:{u:1005,e:`
<h2>亲测1元撸包邮核桃 建行善融领10元无门槛券</h2>
<p><strong>亲测1元撸包邮核桃 建行善融领10元无门槛券</strong></p>
<p>建行APP参与领取10元无门槛券，每日6点开抢</p>
<p>活动页面所有商品1元购，我刚领到1元撸了核桃</p>
<p>晚点可能没了哦，没抢到的第二天设置闹钟去领取一下</p>
<p>&nbsp;</p>
<h1>10月29日置顶 新一期 多个整点抢券</h1>
<p>微信打开跳转至建行APP领取10元无门槛-去购物下拉所有商品都是1元，自己挑选 整点抢</p>
<p><img alt="亲测1元撸包邮核桃 建行善融领10元无门槛券-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2023/05/18/399603b835f0c8b28e9cbeb7fe9b77e1.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:42.93,words:12880},t:"爬取日期: 2024-10-29",y:"a"}}],["/posts/2024-10-30.html",{loader:()=>f(()=>import("./2024-10-30.html-W3cxMeHY.js"),[]),meta:{u:1005,e:`
<h2>QQ预约航海王领18Q币 游戏上线后兑换</h2>
<p><strong>QQ预约航海王领18Q币 游戏上线后兑换</strong></p>
<p>QQ预约手游活动，简单预约游戏领取Q币</p>
<p>亲测3+6+9Q币不秒到，是Q币卡券，游戏上线后下载注册兑换</p>
<p>数量有限，领完即止</p>
<p><br>QQ打开-立即预约-下拉一键领取<br><img alt="QQ预约航海王领18Q币 游戏上线后兑换-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/30/2411d2be72186cecd32c5f7c4dcce959.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:44.87,words:13462},t:"爬取日期: 2024-10-30",y:"a"}}],["/posts/2024-10-31.html",{loader:()=>f(()=>import("./2024-10-31.html-CMbBaHeM.js"),[]),meta:{u:1005,e:`
<h2>QQ预约龙息神寂领2Q币 游戏上线后兑换</h2>
<p><strong>QQ预约龙息神寂领2Q币 游戏上线后兑换</strong></p>
<p>QQ预约龙息神寂手游活动，简单预约领取</p>
<p>亲测2Q币不秒到，游戏上线后兑换</p>
<p>奖品数量有限，领完即止</p>
<p><br>QQ打开-先预约游戏-下拉领取</p>
<p><img alt="QQ预约龙息神寂领2Q币 游戏上线后兑换-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/31/530718c93a3e97b865679652bdaf4cb3.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:34.8,words:10441},t:"爬取日期: 2024-10-31",y:"a"}}],["/posts/2024-11-01.html",{loader:()=>f(()=>import("./2024-11-01.html-Cxq6TIHu.js"),[]),meta:{u:1005,e:`
<h2>Epic喜+2限时免费领取《Witch It》等游戏</h2>
<p><strong>Epic喜+2限时免费领取《Witch It》等游戏</strong></p>
<p>Epic喜加2《Witch It》+《Ghostwire: Tokyo》</p>
<p>《Witch It》是一款多人躲猫猫游戏。猎人的任务是寻找隐藏在环境中的女巫-不要相信任何家具，杂货或餐具！</p>
<p>《Ghostwire: Tokyo》使用你的异世界技能，解开人口消失背后的真相，拯救东京。在蜘蛛丝更新中体验全新的单人模式内容！</p>
<p>限时免费领取时间至11月8日00:00，可以不玩但不能没有</p>`,r:{minutes:50.7,words:15209},t:"爬取日期: 2024-11-01",y:"a"}}],["/posts/2024-11-02.html",{loader:()=>f(()=>import("./2024-11-02.html-CJgZsnWH.js"),[]),meta:{u:1005,e:`
<h2>京东直接领5元无门槛红包 亲测5元秒到</h2>
<p><strong>京东直接领5元无门槛红包 亲测5元秒到</strong></p>
<p>这个部分号有哦，进去显示有就能领</p>
<p>不显示的换号试试，5元无门槛红包自动到账红包</p>
<p>亲测5元秒到，速度试试，领到可以0.01元撸实物/4.9元喝瑞幸</p>
<p><br>微信打开-显示限时专享福利5元</p>
<p><a target="_blank" href="https://u.jd.com/wrL3qeC">https://u.jd.com/wrL3qeC</a></p>
<p>喝瑞幸9.9亓免配送费，抵扣后4.9<br><a target="_blank" href="https://u.jd.com/wGLeUgp">https://u.jd.com/wGLeUgp</a></p>`,r:{minutes:31.69,words:9506},t:"爬取日期: 2024-11-02",y:"a"}}],["/posts/2024-11-03.html",{loader:()=>f(()=>import("./2024-11-03.html-DiEFAuo9.js"),[]),meta:{u:1005,e:`
<h2>支付宝免费领麦当劳6个0元小吃 需随单消费</h2>
<p><strong>支付宝免费领麦当劳6个0元小吃 需随单消费</strong></p>
<p>需要吃麦当劳的先把这些领一下</p>
<p>0元朱古力新地、0元麦辣鸡翅、0元中可、0元薯条、0元麦乐鸡块、0元小玉米杯</p>
<p>一共有6个0元小吃券，随单消费使用，一次只能用一张券哦</p>
<p>&nbsp;</p>
<h1>11月3日置顶 新一期</h1>
<p><br>支付宝搜【消费券】-再搜【麦当劳】-下拉领0元小吃</p>
<p><img alt="支付宝免费领麦当劳6个0元小吃 需随单消费-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/08/2d80adde2963d432bdca0f0dc1760160.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:32.83,words:9848},t:"爬取日期: 2024-11-03",y:"a"}}],["/posts/2024-11-04.html",{loader:()=>f(()=>import("./2024-11-04.html-BE30Ma2l.js"),[]),meta:{u:1005,e:`
<h2>最低2元开通云闪付会员 抽最高1111元红包</h2>
<p><strong>最低2元开通云闪付会员 抽最高1111元红包</strong></p>
<p>这个活动和上次发个那个差不多，不过这个是</p>
<p>先刮券，开通会员然后再去开红包，大家可以参与一下</p>
<p>觉得划算就开通一下，不划算就不要开通，腾讯会员在开通之后是秒的</p>
<p>开通之后还可以去挂红包，然后还可以去领取每个的会员福利。</p>
<p><br>1.云闪付APP-中间滚动横幅【最低2元开通 62会员年卡】-去刮奖有2次机会-刮到20及以上可以考虑开通-立减券在支付的时候显示立减</p>
<p><img alt="最低2元开通云闪付会员 抽最高1111元红包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/04/62edf96c0f8847eeafa4a1d195ee3bd5.jpg" style="width: 686px; *//* height: 718px;" referrerpolicy="no-referrer"></p>`,r:{minutes:41.1,words:12330},t:"爬取日期: 2024-11-04",y:"a"}}],["/posts/2024-11-05.html",{loader:()=>f(()=>import("./2024-11-05.html-CpOrW47v.js"),[]),meta:{u:1005,e:`
<h2>亲测2元现金秒到 乌审答题抽2-30元红包</h2>
<p><strong>亲测2元现金秒到 乌审答题抽2-30元红包</strong></p>
<p>需要微信参与答题，6题对4题可抽奖</p>
<p>抽2-30元现金红包，抽奖非必中的哦</p>
<p>亲测中2元现金红包秒到，可以试试</p>
<p><br>微信扫码-答题对4抽奖-中到红包自动发放到服务通知</p>
<p><img alt="亲测2元现金秒到 乌审答题抽2-30元红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/05/fb3dade29f9248db077d1eaf37356f60.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:55.29,words:16587},t:"爬取日期: 2024-11-05",y:"a"}}],["/posts/2024-11-06.html",{loader:()=>f(()=>import("./2024-11-06.html-CSAAQELb.js"),[]),meta:{u:1005,e:`
<h2>联通刮刮乐 亲测中QQ大会员+哔哩哔哩+酷狗月卡</h2>
<p><strong>联通刮刮乐 亲测中QQ大会员+哔哩哔哩+酷狗月卡</strong></p>
<p>这个活动三网都可以参与，但是联通用户才可能中奖</p>
<p>所有中奖机会用完，然后点击奖品去领取兑换就可以了哦</p>
<p>有很多次抽奖机会，大家记得机会用完</p>
<p>&nbsp;</p>
<h1>11月6日置顶 奖品补货了</h1>
<p><br>微信打开底部地址 联通用户 抽奖 打开五次机会 完成任务更多次机会用完抽奖</p>
<p><img alt="联通刮刮乐 亲测中Q大会员+哔哩哔哩+酷狗月卡_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/01/31b9577c35120e1e8d518d3742b34e43.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:39.38,words:11814},t:"爬取日期: 2024-11-06",y:"a"}}],["/posts/2024-11-07.html",{loader:()=>f(()=>import("./2024-11-07.html-DQNtaex2.js"),[]),meta:{u:1005,e:`
<h2>亲测0撸1元电信话费 支付宝积分兑换1话费券</h2>
<p><strong>亲测0撸1元电信话费 支付宝积分兑换1话费券</strong></p>
<p>这个活动是需要支付宝积分兑换的哦</p>
<p>兑换之后不用管门槛，直接去电信APP自定义充值</p>
<p>选择支付宝支付就会自动抵扣刚刚兑换的话费红包</p>
<p>&nbsp;</p>
<h1>11月7日置顶 又可以兑换了</h1>
<p>1.支付宝APP-我的-会员-搜【话费】积分兑换1亓话费</p>
<p>2.电信APP-充话费-自定义 1亓选择支付宝付款抵扣1元话费红包</p>
<p><img alt="亲测0撸1元电信话费 支付宝积分兑换1话费券_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/08/05/7a192b410ca86c0a30d2f66176e57471.jpg" style="width: 740px; *//* height: 540px;" referrerpolicy="no-referrer"></p>`,r:{minutes:42.53,words:12760},t:"爬取日期: 2024-11-07",y:"a"}}],["/posts/2024-11-08.html",{loader:()=>f(()=>import("./2024-11-08.html-DZw4tG60.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1显示免费领《Deceive Inc.》游戏</h2>
<p><strong>Epic喜加1显示免费领《Deceive Inc.》游戏</strong></p>
<p>Epic喜加1《Deceive Inc.》，多人潜伏游戏</p>
<p>扮演世界上最伟大的间谍，进行卧底工作。 伪装成任何人，部署高科技工具，或直接干掉你的竞争者。 在你为 DECEIVE INC. 工作时，只要你能将目标顺利提取完成，使出各种肮脏的伎俩都不为过</p>
<p>显示免费领取时间至11月15日00:00</p>
<p><br>《Deceive Inc.》</p>
<p><img alt="Epic喜加1显示免费领《Deceive Inc.》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/08/14d6cbed9a155c8c3245d339450f569b.jpg" style="width: 740px; *//* height: 408px;" referrerpolicy="no-referrer"></p>`,r:{minutes:44.61,words:13383},t:"爬取日期: 2024-11-08",y:"a"}}],["/posts/2024-11-09.html",{loader:()=>f(()=>import("./2024-11-09.html-D19jkd_t.js"),[]),meta:{u:1005,e:`
<h2>亲测4元充5元电费 微信云闪付立减1元</h2>
<p><strong>亲测4元充5元电费 微信云闪付立减1元</strong></p>
<p>这个活动大家都可以参与一下哦，每周二</p>
<p>都有1次立减机会，也可以去买别的使用云闪付支付</p>
<p>但是我选择了充值电费，因为是夏天电费需求比较大</p>
<p>&nbsp;</p>
<h1>11月9日置顶 新一期，4充5元话费</h1>
<p><br>微信打开下方地址 充值电费5元 点击立即支付 选择云闪付支付 显示有【云闪付可享1.00元优惠】点击使用 云闪付支付4元即可</p>
<p>#小程序://网上国网/P4lu9G4XZp6YiZF</p>`,r:{minutes:50.63,words:15188},t:"爬取日期: 2024-11-09",y:"a"}}],["/posts/2024-11-10.html",{loader:()=>f(()=>import("./2024-11-10.html-BGrIEkPQ.js"),[]),meta:{u:1005,e:`
<h2>云缴费趣挑战抽最高288元缴费红包 亲测2.8元</h2>
<p><strong>云缴费趣挑战抽最高288元缴费红包 亲测2.8元</strong></p>
<p>云缴费小程序参与，每天完成任务抽奖</p>
<p>每天最多两次抽奖机会，非必中</p>
<p>亲测2.8元缴费红包秒到</p>
<p>&nbsp;</p>
<p>11月10日置顶 没有参与的参与试试</p>
<p><br>复制发送到微信打开</p>
<p>#小程序://云缴费官方/qE68voq51dGhDVp</p>
<p>1.首页-中间滚动横幅【趣挑战最高抽288元红包】-下拉完成任务抽奖</p>
<p><img alt="云缴费趣挑战抽最高288元缴费红包 亲测2.8元-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/28/005e5dbafcdbffcc4748013ad8bd0f11.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:41.24,words:12373},t:"爬取日期: 2024-11-10",y:"a"}}],["/posts/2024-11-11.html",{loader:()=>f(()=>import("./2024-11-11.html-BD26AmHW.js"),[]),meta:{u:1005,e:`
<h2>亲测1.28元秒到 看余杭新人福利每日抽红包/实物</h2>
<p><strong>亲测1.28元秒到 看余杭新人福利每日抽红包/实物</strong></p>
<p>看余杭APP新人活动，需要本月1号之后才注册APP的才可以</p>
<p>符合的可以参加一下，需要实名，介意无视</p>
<p>每天可抽三次，抽红包/实物，非必中，亲测1.28元秒到</p>
<p><br>看余杭APP-新人注册-点首页【新人福利】-1积分抽奖</p>
<p><img alt="亲测1.28元秒到 看余杭新人福利每日抽红包/实物-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/11/916dee6843250c691869132d2ad4b76f.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:45.42,words:13627},t:"爬取日期: 2024-11-11",y:"a"}}],["/posts/2024-11-12.html",{loader:()=>f(()=>import("./2024-11-12.html-uEcXsuOO.js"),[]),meta:{u:1005,e:`
<h2>平安金管家直接领2支舒克牙膏 亲测已领</h2>
<p><strong>平安金管家直接领2支舒克牙膏 亲测已领</strong></p>
<p>部分用户可以直接领取，自己试试看</p>
<p>能领的直接领取，填写地址即可，亲测已领2支舒克牙膏</p>
<p><br>微信打开-领取牙膏</p>
<p><img alt="平安金管家直接领2支舒克牙膏 亲测已领-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/12/0be239f1ac91299b2017b066aabc7b7b.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:47.55,words:14264},t:"爬取日期: 2024-11-12",y:"a"}}],["/posts/2024-11-13.html",{loader:()=>f(()=>import("./2024-11-13.html-N5Wsuynm.js"),[]),meta:{u:1005,e:`
<h2>亲测0撸8元话费 电信领最高10元权益金</h2>
<p><strong>亲测0撸8元话费 电信领最高10元权益金</strong></p>
<p>电信用户参加，只能电信的领取哦</p>
<p>最高领10元权益金，可充话费抵扣</p>
<p>亲测7.23元权益金，0充8元电信话费</p>
<p><br>微信打开-先领券-再去电信APP-我的-钱包-权益金-查看领取的金额，电信充值话费无门槛抵扣</p>
<p><img alt="亲测0撸8元话费 电信领最高10元权益金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/13/126ef2e4ee52daed80de3b1184ea1f20.jpg" style="width: 740px; *//* height: 545px;" referrerpolicy="no-referrer"></p>`,r:{minutes:47.47,words:14240},t:"爬取日期: 2024-11-13",y:"a"}}],["/posts/2024-11-14.html",{loader:()=>f(()=>import("./2024-11-14.html-K35WN5lA.js"),[]),meta:{u:1005,e:`
<h2>亲测1.9元撸澳威雅沐浴露 淘宝领签到红包多号多撸</h2>
<p><strong>亲测1.9元撸澳威雅沐浴露 淘宝领签到红包多号多撸</strong></p>
<p>部分人可以领取到淘宝5元无门槛签到红包</p>
<p>领不到的要换号试试看哦，不然参与不了</p>
<p>领到了可以直接1.9元撸沐浴露一瓶，速度参与，多号多撸</p>
<p>&nbsp;</p>
<p>1.淘宝扫码-部分人弹5元无门槛签到红包</p>
<p><img alt="二维码-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/07/e56d0ec0eb6d9564a8e45117c50c34c4.jpg" style="width: 198px; *//* height: 197px;" referrerpolicy="no-referrer"></p>`,r:{minutes:39.08,words:11723},t:"爬取日期: 2024-11-14",y:"a"}}],["/posts/2024-11-15.html",{loader:()=>f(()=>import("./2024-11-15.html-BBCbQTtR.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领《Snakebird Complete》游戏</h2>
<p><strong>Epic喜加1免费领《Snakebird Complete》游戏</strong></p>
<p>Epic喜加1《Snakebird Complete》，单人贪吃蛇类游戏</p>
<p>120个关卡中大快朵颐。收集水果让体型变大，用滑行方式通过危机重重的关卡，挑战物理定律，到达你向往的出口！</p>
<p>喜欢的领取吧，限时免费至11月22日00:00</p>
<p><br>《Snakebird Complete》</p>
<p><img alt="Epic喜加1免费领《Snakebird Complete》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/15/0700f51797b8447264649af6740ca7bf.jpg" style="width: 740px; *//* height: 411px;" referrerpolicy="no-referrer"></p>`,r:{minutes:33.4,words:10019},t:"爬取日期: 2024-11-15",y:"a"}}],["/posts/2024-11-16.html",{loader:()=>f(()=>import("./2024-11-16.html-Df61p1W9.js"),[]),meta:{u:1005,e:`
<h2>万家乐幸运大转盘抽实物 亲测中厨房调料罐</h2>
<p><strong>万家乐幸运大转盘抽实物 亲测中厨房调料罐</strong></p>
<p>这个活动是非必中的哦，自带一次抽奖机会</p>
<p>大家可以抽奖试试，总共有4次抽奖机会</p>
<p>大小号可以互助，助力不限，一共能抽4次</p>
<p>很卡反复卡进去抽奖试试哦，</p>
<p>&nbsp;</p>
<p>微信打开下方地址 登录 自带一次抽奖机会 大小号可以互助，助力不限，一共能抽4次</p>
<p>#小程序://万家乐会员/DTFzGw48ZKY58fu</p>
<p><img alt="万家乐幸运大转盘抽实物 亲测中厨房调料罐_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/16/782500caf4be8e544ddd8dabb77fcecb.jpg" style="width: 650px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:28.89,words:8668},t:"爬取日期: 2024-11-16",y:"a"}}],["/posts/2024-11-17.html",{loader:()=>f(()=>import("./2024-11-17.html-pA7E_hL2.js"),[]),meta:{u:1005,e:`
<h2>湖北市场监管投票抽奖 亲测1.49元秒到</h2>
<p><strong>湖北市场监管投票抽奖 亲测1.49元秒到</strong></p>
<p>这个活动是非必中的哦，大家可以去参与试试</p>
<p>看，投票完成后自动弹抽奖，抽奖是非必中的哦</p>
<p><br>微信关注【湖北市场监管】公众号--底部【你点鄂检】投票抽红包 &nbsp;非必中</p>
<p><img alt="湖北市场监管投票抽奖 亲测1.49元秒到_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/17/c2dc9cd4c0b46b44979035b092cae146.jpg" style="width: 740px; *//* height: 540px;" referrerpolicy="no-referrer"><br>&nbsp;</p>`,r:{minutes:51.06,words:15318},t:"爬取日期: 2024-11-17",y:"a"}}],["/posts/2024-11-18.html",{loader:()=>f(()=>import("./2024-11-18.html-DHqfJnvo.js"),[]),meta:{u:1005,e:`
<h2>建行劳动者港湾抽2-5元微信立减金 亲测2元秒到</h2>
<p><strong>建行劳动者港湾抽2-5元微信立减金 亲测2元秒到</strong></p>
<p>建行生活劳动者港湾新活动，两个活动</p>
<p>眼力王、拼图王，简单游戏抽奖，非必中</p>
<p>亲测2元立减金秒到，不中的第二天再试试，每天都可以参加</p>
<p>&nbsp;</p>
<h1>11月18日置顶 抽奖有水</h1>
<p><br>建行生活APP-首页下拉【热门活动】-【活动资讯】下拉-【我是眼力王】【我是拼图王】-完成游戏抽奖，任务中心可增加额外抽奖次数</p>
<p><img alt="建行劳动者港湾抽2-5元微信立减金 亲测2元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/13/242ebf9d62bc70fdfe4d7f74245e49ed.jpg" style="width: 740px; *//* height: 514px;" referrerpolicy="no-referrer"></p>`,r:{minutes:39.54,words:11863},t:"爬取日期: 2024-11-18",y:"a"}}],["/posts/2024-11-19.html",{loader:()=>f(()=>import("./2024-11-19.html-CEu10vh3.js"),[]),meta:{u:1005,e:`
<h2>番茄免费小说0.01元撸精选好书 需领6元无门槛券</h2>
<p><strong>番茄免费小说0.01元撸精选好书 需领6元无门槛券</strong></p>
<p>部分人会弹6元无门槛优惠券，不弹的换号试试看</p>
<p>亲测0.01元撸到书籍实物，自己挑选一下有包邮的0.01到手</p>
<p>&nbsp;</p>
<h1>11月19日置顶 新一期</h1>
<p><br>番茄免费小说APP-我的-精选好书，进去有弹6元无门槛券，去使用找包邮书籍购买（也可以打开番茄APP-我的-中间惊喜电商券6-10元无门槛）</p>
<p><img alt="番茄免费小说0.01元撸精选好书 需领6元无门槛券-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/02/21/882f113e2274f5fde6462f5389ecc17e.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:43.66,words:13097},t:"爬取日期: 2024-11-19",y:"a"}}],["/posts/2024-11-20.html",{loader:()=>f(()=>import("./2024-11-20.html-BfK2Es_5.js"),[]),meta:{u:1005,e:`
<h2>建行劳动者港湾抽2-5元微信立减金 亲测2元秒到</h2>
<p><strong>建行劳动者港湾抽2-5元微信立减金 亲测2元秒到</strong></p>
<p>建行生活劳动者港湾新活动，两个活动</p>
<p>眼力王、拼图王，简单游戏抽奖，非必中</p>
<p>亲测2元立减金秒到，不中的第二天再试试，每天都可以参加</p>
<p>&nbsp;</p>
<h1>11月20日置顶 抽奖有水</h1>
<p><br>建行生活APP-首页下拉【热门活动】-【活动资讯】下拉-【我是眼力王】【我是拼图王】-完成游戏抽奖，任务中心可增加额外抽奖次数</p>
<p><img alt="建行劳动者港湾抽2-5元微信立减金 亲测2元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/13/242ebf9d62bc70fdfe4d7f74245e49ed.jpg" style="width: 740px; *//* height: 514px;" referrerpolicy="no-referrer"></p>`,r:{minutes:39.46,words:11837},t:"爬取日期: 2024-11-20",y:"a"}}],["/posts/2024-11-21.html",{loader:()=>f(()=>import("./2024-11-21.html-Dppn24FZ.js"),[]),meta:{u:1005,e:`
<h2>亲测3Q币 腾讯游戏人生抽掼蛋得现金/Q币</h2>
<p><strong>亲测3Q币 腾讯游戏人生抽掼蛋得现金/Q币</strong></p>
<p>微信参与抽奖，每天抽7次非必中</p>
<p>抽中现金红包/Q币才行，别的没用</p>
<p>亲测1+2Q币，应该是很少登录这些游戏的会中</p>
<p><br>微信打开-直接抽7次-抽到的Q币和现金，先去登录游戏返回领取到账</p>
<p><img alt="亲测3Q币 腾讯游戏人生抽掼蛋得现金/Q币-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/21/ef592678f6bdca089a0b2fb445652524.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:60.64,words:18192},t:"爬取日期: 2024-11-21",y:"a"}}],["/posts/2024-11-22.html",{loader:()=>f(()=>import("./2024-11-22.html-cjpOYMV3.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1限时免费领取《Beholder》游戏</h2>
<p><strong>Epic喜加1限时免费领取《Beholder》游戏</strong></p>
<p>Epic喜加1《Beholder》，单人策略游戏</p>
<p>你是一个极权国家中由国家安装的房东。放置窃听装置，偷窃并偷偷进入租户的公寓。利用你发现的信息举报任何可能密谋反对国家的人</p>
<p>限时免费领取时间至11月29日00:00，可以不玩但不能没有</p>
<p><br>《Beholder》</p>
<p><img alt="Epic喜加1限时免费领取《Beholder》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/22/cf5b17e9b060153596d6d4d4d7610afa.jpg" style="width: 740px; *//* height: 409px;" referrerpolicy="no-referrer"></p>`,r:{minutes:57.67,words:17300},t:"爬取日期: 2024-11-22",y:"a"}}],["/posts/2024-11-23.html",{loader:()=>f(()=>import("./2024-11-23.html-2MN17b4t.js"),[]),meta:{u:1005,e:`
<h2>建行劳动者港湾抽2-5元微信立减金 亲测2元秒到</h2>
<p><strong>建行劳动者港湾抽2-5元微信立减金 亲测2元秒到</strong></p>
<p>建行生活劳动者港湾新活动，两个活动</p>
<p>眼力王、拼图王，简单游戏抽奖，非必中</p>
<p>亲测2元立减金秒到，不中的第二天再试试，每天都可以参加</p>
<p>&nbsp;</p>
<h1>11月23日置顶 抽奖有水</h1>
<p><br>建行生活APP-首页下拉【热门活动】-【活动资讯】下拉-【我是眼力王】【我是拼图王】-完成游戏抽奖，任务中心可增加额外抽奖次数</p>
<p><img alt="建行劳动者港湾抽2-5元微信立减金 亲测2元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/13/242ebf9d62bc70fdfe4d7f74245e49ed.jpg" style="width: 740px; *//* height: 514px;" referrerpolicy="no-referrer"></p>`,r:{minutes:56.93,words:17079},t:"爬取日期: 2024-11-23",y:"a"}}],["/posts/2024-11-24.html",{loader:()=>f(()=>import("./2024-11-24.html-JiHcNSub.js"),[]),meta:{u:1005,e:`
<h2>农行全国地区抽1-50元红包 亲测3元红包秒到</h2>
<p><strong>农行全国地区抽1-50元红包 亲测3元红包秒到</strong></p>
<p>这个活动是非必中的哦，中到的红包可以直接领取到微信</p>
<p>全国地区都是可以参与的哦，总共有4次抽奖机会</p>
<p>全国地区都是可以参与的，速度参与</p>
<p>&nbsp;</p>
<h1>11月24日 置顶可以参与的参与</h1>
<p>农行APP 城市专区 手动切换 柳州 【缴费幸运大抽奖】 【支付的1.1元会员原路退回 不秒退】</p>
<p>总共可以支付4次 抽奖4次 点击去领取红包会自动会发放到微信</p>`,r:{minutes:44.37,words:13310},t:"爬取日期: 2024-11-24",y:"a"}}],["/posts/2024-11-25.html",{loader:()=>f(()=>import("./2024-11-25.html-C6XMsOv-.js"),[]),meta:{u:1005,e:`
<h2>建行生活能量兑换2-20元立减金 亲测2元立减金秒到</h2>
<p><strong>建行生活能量兑换2-20元立减金 亲测2元立减金秒到</strong></p>
<p>建行生活APP低碳生活能量兑换权益活动</p>
<p>500g能量兑换2元立减金，能量多的可兑换20元面额立减金</p>
<p>亲测2元立减金秒到，能量通过平时使用建行支付等获取</p>
<p>&nbsp;</p>
<h1>11月25日置顶 又可以兑换了</h1>
<p><br>建行生活APP-搜【低碳生活】进去-【权益】，去兑换即可</p>
<p><img alt="建行生活能量兑换2-20元立减金 亲测2元立减金秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/07/20/34e9bdeb88a54a8091d4dee1ce1fa308.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:55.33,words:16600},t:"爬取日期: 2024-11-25",y:"a"}}],["/posts/2024-11-26.html",{loader:()=>f(()=>import("./2024-11-26.html-C5pOeRZK.js"),[]),meta:{u:1005,e:`
<h2>移动全球通星动日抽手机/腾讯视频年卡/双权益礼包 需银卡以上</h2>
<p><strong>移动全球通星动日抽手机/腾讯视频年卡/双权益礼包 需银卡以上</strong></p>
<p>活动需要关注公众号进入，是移动全球通银卡以上的可以抽奖</p>
<p>奖品有vivo手机/腾讯年卡/贝乐虎VIP年卡/双权益礼包等，需自测</p>
<p>银卡以上的可以去试试看，看脸的</p>
<p>&nbsp;</p>
<h1>11月26日置顶 每月26-28日抽奖+领权益</h1>
<p><br>26-28日每日可抽一次</p>
<p><img alt="移动全球通星动日抽手机/腾讯视频年卡/双权益礼包 需银卡以上-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2021/12/26/266bc5386fb95c8b2a566e992ac0e32b.jpg" style="width: 645px; *//* height: 569px;" referrerpolicy="no-referrer"></p>`,r:{minutes:37.65,words:11294},t:"爬取日期: 2024-11-26",y:"a"}}],["/posts/2024-11-27.html",{loader:()=>f(()=>import("./2024-11-27.html-CzkI0SpA.js"),[]),meta:{u:1005,e:`
<h2>京东开启消息通知领无门槛红包 亲测0.58元</h2>
<p><strong>京东开启消息通知领无门槛红包 亲测0.58元</strong></p>
<p>京东部分人会弹这个活动，不弹的过段时间再看看</p>
<p>简单开启消息通知领取随机无门槛红包</p>
<p>亲测0.58元红包秒到，领完红包记得关闭通知，过段时间可以继续撸</p>
<p><br>京东APP-底部【消息】，部分人弹【开启消息通知领惊喜红包】-开启后自动到账</p>
<p><img alt="京东开启消息通知领无门槛红包 亲测0.58元-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/27/4802b90e1c011e40fb08ec806c0d6fcf.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:54.27,words:16282},t:"爬取日期: 2024-11-27",y:"a"}}],["/posts/2024-11-28.html",{loader:()=>f(()=>import("./2024-11-28.html-DDssi7xA.js"),[]),meta:{u:1005,e:`
<h2>联通惊喜砸不停抽话费/流量 最高可得500话费</h2>
<p><strong>联通惊喜砸不停抽话费/流量 最高可得500话费</strong></p>
<p>这个活动是非必中的哦，联通号码每个与可以参与一次</p>
<p>想参与的可以参与试试看，我没有中奖，中到的话奖励是秒到</p>
<p>群友反馈中10元话费秒到</p>
<p>&nbsp;</p>
<p>微信打开底部地址 登录 砸金蛋即可</p>
<p><img alt="联通惊喜砸不停抽话费/流量 最高可得500话费-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/28/f1498b6151a45b2cd1371437de303019.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:53.19,words:15956},t:"爬取日期: 2024-11-28",y:"a"}}],["/posts/2024-11-29.html",{loader:()=>f(()=>import("./2024-11-29.html-ChQPqfBt.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1限时免费领取《土豆兄弟》游戏</h2>
<p><strong>Epic喜加1限时免费领取《土豆兄弟》游戏</strong></p>
<p>Epic喜加1《土豆兄弟》是一款自上而下的竞技场射击轻度ROGUE游</p>
<p>玩家将在游戏中扮演一个同时使用6种武器以击退成群外星人的土豆。从各种特征和道具中进行选择，创造独特的建筑并生存下去，直到救援到来</p>
<p>显示免费领取时间至12月6日00:00</p>
<p><br>《土豆兄弟》</p>
<p><img alt="Epic喜加1限时免费领取《土豆兄弟》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/29/7ff48c14ed35dc1a64aa7305484d3ace.jpg" style="width: 740px; *//* height: 411px;" referrerpolicy="no-referrer"></p>`,r:{minutes:48.17,words:14451},t:"爬取日期: 2024-11-29",y:"a"}}],["/posts/2024-11-30.html",{loader:()=>f(()=>import("./2024-11-30.html-lF05HgK7.js"),[]),meta:{u:1005,e:`
<h2>亲测4元充5元电费 微信云闪付立减1元</h2>
<p><strong>亲测4元充5元电费 微信云闪付立减1元</strong></p>
<p>这个活动大家都可以参与一下哦，每周二</p>
<p>都有1次立减机会，也可以去买别的使用云闪付支付</p>
<p>但是我选择了充值电费，因为是夏天电费需求比较大</p>
<p>&nbsp;</p>
<h1>11月30日置顶 新一期，4充5元电费</h1>
<p><br>微信打开下方地址 充值电费5元 点击立即支付 选择云闪付支付 显示有【云闪付可享1.00元优惠】点击使用 云闪付支付4元即可</p>
<p>#小程序://网上国网/P4lu9G4XZp6YiZF</p>`,r:{minutes:48.77,words:14632},t:"爬取日期: 2024-11-30",y:"a"}}],["/posts/2024-12-01.html",{loader:()=>f(()=>import("./2024-12-01.html-DbxOTHda.js"),[]),meta:{u:1005,e:`
<h2>淘宝88VIP打卡 0.01元购德宝手帕纸</h2>
<p><strong>淘宝88VIP打卡 0.01元购德宝手帕纸</strong></p>
<p>这个活动需要你在活动结束只前打卡12天</p>
<p>获得0.01元购手帕纸的资格，想参与的可以参与一下哦</p>
<p>需要你是88VIP才有打卡获得0.01元购手帕纸资格</p>
<p><br>仅限制88VIP参与-淘宝-天猫超市-底部【88VIP】-12月16日前累积打卡12天0.01元撸德宝手帕纸</p>
<p><img alt="淘宝88VIP打卡 0.01元购德宝手帕纸_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/01/cd9011e5ba30cfd8b5664479ef17c1ac.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:34.44,words:10331},t:"爬取日期: 2024-12-01",y:"a"}}],["/posts/2024-12-02.html",{loader:()=>f(()=>import("./2024-12-02.html-CxS5Ehb9.js"),[]),meta:{u:1005,e:`
<h2>亲测5元建行立减金秒到 支付有优惠兑储蓄卡立减金</h2>
<p><strong>亲测5元建行立减金秒到 支付有优惠兑储蓄卡立减金</strong></p>
<p>微信支付有优惠小程序兑换储蓄卡立减金活动</p>
<p>用金币直接兑换立减金，亲测5个1元建行立减金秒到</p>
<p>还有2元平安立减金可以兑换</p>
<p>&nbsp;</p>
<h1>12月2日置顶 新一期，建行5元立减金</h1>
<p>&nbsp;</p>
<p><span style="color:#FF0000;">新一期：支付有优惠小程序无法分享，只能从直接入口去兑换了</span></p>
<p>微信搜索【支付有优惠】小程序-点兑换好礼-今日好礼下拉有，显示建行1亓xin用卡-兑换实际是储蓄卡的，可以反复兑换5次</p>`,r:{minutes:47.29,words:14187},t:"爬取日期: 2024-12-02",y:"a"}}],["/posts/2024-12-03.html",{loader:()=>f(()=>import("./2024-12-03.html-Ct3cg_PU.js"),[]),meta:{u:1005,e:`
<h2>建行京东联合会员领9元京东支付券 亲测已领</h2>
<p><strong>建行京东联合会员领9元京东支付券 亲测已领</strong></p>
<p>京东APP参与活动，需要建行卡哦不符合的无视</p>
<p>登录活动页面可领3*3元支付券，京东支付使用建行卡抵扣</p>
<p>亲测已领3*3元支付券，每月可领一次</p>
<p>&nbsp;</p>
<h1>12月3日置顶 新一期领7元支付券</h1>
<p><br>京东APP-搜【建行联合会员】-中间滚动横幅【遇建京彩月月有礼 免费领京东支付券】-领取登录礼</p>
<p><img alt="建行京东联合会员领1.5-3元京东支付券 亲测已领-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/09/17/f6646bb17bd50926958af49e597445df.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:44.44,words:13332},t:"爬取日期: 2024-12-03",y:"a"}}],["/posts/2024-12-04.html",{loader:()=>f(()=>import("./2024-12-04.html-C8ZjOO98.js"),[]),meta:{u:1005,e:`
<h2>交行基会多多互动专场抽最高88元立减金 亲测8元秒到</h2>
<p><strong>交行基会多多互动专场抽最高88元立减金 亲测8元秒到</strong></p>
<p>交行抽奖活动，每人最多有两次抽奖机会</p>
<p>抽最高88元微信立减金，反馈中8元立减金秒到</p>
<p>有交行的试试看</p>
<p><br>交行APP搜【基会多多】-点【基会多多互动专场】进去-下拉完成2个任务抽两次</p>
<p><img alt="交行基会多多互动专场抽最高88元立减金 亲测8元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/04/0ddd73918c7fad30e25b76c98e251615.jpg" style="width: 740px; *//* height: 509px;" referrerpolicy="no-referrer"></p>`,r:{minutes:38.24,words:11473},t:"爬取日期: 2024-12-04",y:"a"}}],["/posts/2024-12-05.html",{loader:()=>f(()=>import("./2024-12-05.html-DNFfTbHu.js"),[]),meta:{u:1005,e:`
<h2>移动139邮箱抽最高2元立减金 亲测0.5元秒到</h2>
<p><strong>移动139邮箱抽最高2元立减金 亲测0.5元秒到</strong></p>
<p>移动用户参与，登录抽奖一次</p>
<p>最高领2元微信立减金，符合的可以试试</p>
<p>亲测0.5元支付宝红包秒到</p>
<p><br>微信打开-登录领取奖励</p>
<p><img alt="移动139邮箱抽最高2元立减金 亲测0.5元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/05/5eb3c1abb9b8357decc52374de77e553.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:55.8,words:16741},t:"爬取日期: 2024-12-05",y:"a"}}],["/posts/2024-12-06.html",{loader:()=>f(()=>import("./2024-12-06.html-BUVA3189.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加2限时免费领《巴士模拟21》等游戏</h2>
<p><strong>Epic喜加2限时免费领《巴士模拟21》等游戏</strong></p>
<p>Epic喜加2《巴士模拟21》+《乐高®星球大战™：天行者传奇》</p>
<p>《巴士模拟21》这就是模拟开大巴车游戏</p>
<p>《乐高®星球大战™：天行者传奇》戏中拥有超过 300 名可使用角色、100 余种载具以及 23 颗行星供你探索，在遥不可及的银河系中体验前所未有的趣味性</p>
<p>限时免费领取时间至12月13日00:00</p>
<p>&nbsp;</p>
<p>《巴士模拟21》</p>
<p><img alt="Epic喜加2限时免费领《巴士模拟21》等游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/06/7b60355ade6777e0b1e6c5f3db4828d0.jpg" style="width: 740px; *//* height: 416px;" referrerpolicy="no-referrer"></p>`,r:{minutes:43.66,words:13099},t:"爬取日期: 2024-12-06",y:"a"}}],["/posts/2024-12-07.html",{loader:()=>f(()=>import("./2024-12-07.html-DFo68QfC.js"),[]),meta:{u:1005,e:`
<h2>免费领百度打车15-10元打车券 领取秒到卡包</h2>
<p><strong>免费领百度打车15-10元打车券 领取秒到卡包</strong></p>
<p>这个活动需要你自己去公众号领取的哦</p>
<p>需要打车券的可以免费领取一下哦</p>
<p>是不需要邀请人的，但是券是有门槛的哦满15-10</p>
<p>&nbsp;</p>
<h1>12月7日置顶 新一期公众号回复【示范性】领取</h1>
<p>微信搜【百度地图打车】公众号 回复【图四】复制兑换码 根据提示在公众号兑换领取即可</p>
<p><img alt="免费领百度打车15-10元打车券 领取秒到卡包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/07/31/dd5f77458d83839b50b0376b8ef401b8.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:44.47,words:13340},t:"爬取日期: 2024-12-07",y:"a"}}],["/posts/2024-12-08.html",{loader:()=>f(()=>import("./2024-12-08.html-DmlBfYRg.js"),[]),meta:{u:1005,e:`
<h2>亲测QQ音乐绿钻月卡 联通王卡年终福利盲盒抽奖</h2>
<p><strong>亲测QQ音乐绿钻月卡 联通王卡年终福利盲盒抽奖</strong></p>
<p>联通王卡用户中奖率更大，三网都可以参加</p>
<p>抽中影音会员才行，其他的没有用</p>
<p>亲测中QQ音乐绿钻月卡，现在有水</p>
<p>&nbsp;</p>
<h1>12月8日置顶 抽奖有水</h1>
<p><br>微信打开-直接抽奖</p>
<p><img alt="亲测QQ音乐绿钻月卡 联通王卡年终福利盲盒抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/06/3cbe3ffbd52d4c53d3200dda08b01c70.jpg" style="width: 645px; *//* height: 654px;" referrerpolicy="no-referrer"></p>`,r:{minutes:39.88,words:11963},t:"爬取日期: 2024-12-08",y:"a"}}],["/posts/2024-12-09.html",{loader:()=>f(()=>import("./2024-12-09.html-B1ChUC81.js"),[]),meta:{u:1005,e:`
<h2>移动用户免费领6GB流量日包 亲测已领秒到</h2>
<p><strong>移动用户免费领6GB流量日包 亲测已领秒到</strong></p>
<p>这个是流量日包哦，刚需的可以领取一下</p>
<p>一共到账3*2GB流量日包，亲测已领秒到</p>
<p>一张一张用可以用三次</p>
<p><br>微信打开-输入手机号直接领取</p>
<p><img alt="移动用户免费领6GB流量日包 亲测已领秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/09/c07e0da32f2ff48244ed8318b8252b04.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:45.82,words:13746},t:"爬取日期: 2024-12-09",y:"a"}}],["/posts/2024-12-10.html",{loader:()=>f(()=>import("./2024-12-10.html-dw-AUsBG.js"),[]),meta:{u:1005,e:`
<h2>农行转账0.1得10元数币红包 亲测领取秒到账</h2>
<p><strong>农行转账0.1得10元数币红包 亲测领取秒到账</strong></p>
<p>这个活动现在好卡哦，有耐心的就参与一下</p>
<p>群友反馈直接就到账了，但是很多群友也反馈说什么不在白名单</p>
<p>没有账号的小编也提供了小技巧，大家乐意分享账户也可以自己分享在评论区</p>
<p>&nbsp;</p>
<h1>12月10日置顶 又可以参与了</h1>
<p><br>1.农行APP搜索数字人民-点转账-转0.1-底部【参与转钱活动赢好礼】10数币-不限地区全国活动-转账之后卡要多等等</p>
<p>2.转账小技巧 开通过多个数币账户的 用农行转到自己的另外一个数币账户即可</p>`,r:{minutes:52.76,words:15827},t:"爬取日期: 2024-12-10",y:"a"}}],["/posts/2024-12-11.html",{loader:()=>f(()=>import("./2024-12-11.html-DK-zI6fw.js"),[]),meta:{u:1005,e:`
<h2>亲测0.01元撸雨森卷纸2卷 京东领红包雨+限时红包</h2>
<p><strong>亲测0.01元撸雨森卷纸2卷 京东领红包雨+限时红包</strong></p>
<p>京东直播间免费领红包雨和限时红包</p>
<p>每个整点都有，这场没领到就19点、20点再去</p>
<p>亲测叠加两个红包0.01元撸雨森卷纸</p>
<p><br>1.微信打开右上角跳京东APP<br>直播间右侧【红包雨】领2元红包+右侧【限时红包】领最高5元<br><a target="_blank" href="https://u.jd.com/urjiw1b">https://u.jd.com/urjiw1b</a></p>`,r:{minutes:34.84,words:10452},t:"爬取日期: 2024-12-11",y:"a"}}],["/posts/2024-12-12.html",{loader:()=>f(()=>import("./2024-12-12.html-CzNcrOMZ.js"),[]),meta:{u:1005,e:`
<h2>京东被暖到的瞬间领1500京豆 简单发布小红书</h2>
<p><strong>京东被暖到的瞬间领1500京豆 简单发布小红书</strong></p>
<p>京东发布小红书活动又有了</p>
<p>按规则发布小红书，审核通过领1500京豆，价值15元</p>
<p>这个还挺好撸的，基本都能通过</p>
<p>&nbsp;</p>
<h1>12月12日置顶 1500京豆到账了，参与了的去看看</h1>
<p><br>1.去小红书发布笔记：带话题#冬天被暖到的瞬间，图片1张，大于50字（分享和京东快递小哥之间的暖心故事）</p>
<p>2.去京东完成晒单评价，30天内的任一订单</p>`,r:{minutes:43.73,words:13119},t:"爬取日期: 2024-12-12",y:"a"}}],["/posts/2024-12-13.html",{loader:()=>f(()=>import("./2024-12-13.html-BAKjF6CD.js"),[]),meta:{u:1005,e:`
<h2>美团优选回归用户领0.1折券 最高抵扣4元</h2>
<p><strong>美团优选回归用户领0.1折券 最高抵扣4元</strong></p>
<p>美团优选部分用户有这个回归奖励哦</p>
<p>没有的就不是回归用户，已领0.1折券</p>
<p>最高抵扣4元，亲测0.8元买菜</p>
<p><br>美团APP-美团优选-老用户回归 自动有0.1折券-去购买可抵扣</p>
<p><img alt="美团优选回归用户领0.1折券 最高抵扣4元-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/13/76c2a275fc3a5c1d6978905c79a44555.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:38.28,words:11485},t:"爬取日期: 2024-12-13",y:"a"}}],["/posts/2024-12-14.html",{loader:()=>f(()=>import("./2024-12-14.html-CocPytoI.js"),[]),meta:{u:1005,e:`
<h2>腾讯地图必得16元现金 可直接发放到微信</h2>
<p><strong>腾讯地图必得16元现金 可直接发放到微信</strong></p>
<p>这个活动需要你连续签到9天哦，参与了就不可以断签</p>
<p>每天10点更新库存，不需要提现直接就会到达你的微信钱包</p>
<p>想参与的人可以参与一下哦，断签了就要重新签到了哦</p>
<p>&nbsp;</p>
<p>腾讯地图APP-我的-积分中心-【签到积分】点进去-横幅【年底狂欢月 天天兑现金】连续签到3天1元，连签6天5元、连签9天10元 无需提现直达微信钱包</p>
<p><img alt="腾讯地图必得16元现金 可直接发放到微信_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/14/9c2fe8d86f4164e93e1f3d57d7a019a8.jpg" style="width: 740px; *//* height: 540px;" referrerpolicy="no-referrer"></p>`,r:{minutes:43.26,words:12979},t:"爬取日期: 2024-12-14",y:"a"}}],["/posts/2024-12-15.html",{loader:()=>f(()=>import("./2024-12-15.html-wgKHyYNi.js"),[]),meta:{u:1005,e:`
<h2>邮储0.01元秒杀6元立减金 亲测秒到微信卡包</h2>
<p><strong>邮储0.01元秒杀6元立减金 亲测秒到微信卡包</strong></p>
<p>这个活动每天都可以参与，一个人一个月可以参与一次</p>
<p>大家可以参与试试，数量还有很多的哦，需要用邮储卡支付0.01元哦</p>
<p>&nbsp;</p>
<h1>12月15日置顶 新一期</h1>
<p>&nbsp;</p>
<p>邮储银行APP搜【秒杀】横幅【天天秒杀立减金】点击进去 跳转邮储好礼汇小程序 0.01元购6元立减金券包</p>
<p>每天的 10点 12点 14点 16点 18点 都会更新名额</p>`,r:{minutes:36.38,words:10914},t:"爬取日期: 2024-12-15",y:"a"}}],["/posts/2024-12-16.html",{loader:()=>f(()=>import("./2024-12-16.html-DC01kP4s.js"),[]),meta:{u:1005,e:`
<h2>大众点评跨年新游记抽2025元超级红包 1月1日开奖</h2>
<p><strong>大众点评跨年新游记抽2025元超级红包 1月1日开奖</strong></p>
<p>大众点评跨年活动，今天刚出的</p>
<p>完成任务领取心愿卡，心愿卡每种卡片每天可领取一张，可在1月1日开奖</p>
<p>开奖必中保底现金红包，不知道是多少，可以参与一下</p>
<p>还有机会开中超级大奖实物、2025元红包等</p>
<p><br>大众点评APP搜【跨年】-点横幅进去-左右滑动，每个都可以领取任务完成领心愿卡-等开奖即可</p>
<p><img alt="大众点评跨年新游记抽2025元超级红包 1月1日开奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/16/16d6a4da41c90d2fa6c0b22ee04b017e.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:54.84,words:16453},t:"爬取日期: 2024-12-16",y:"a"}}],["/posts/2024-12-17.html",{loader:()=>f(()=>import("./2024-12-17.html-BR-kCAUr.js"),[]),meta:{u:1005,e:`
<h2>工行碳能量兑换1元微信立减金 亲测1元秒到</h2>
<p><strong>工行碳能量兑换1元微信立减金 亲测1元秒到</strong></p>
<p>这个碳能量出了很久了，没有兑换过的应该都会有几千能量值了</p>
<p>每个月转账4次，每次可获取440g能量，这个能量还是挺简单的</p>
<p>亲测1元微信立减金秒到，能量够的去兑换一下奖励</p>
<p>&nbsp;</p>
<h1>12月17日置顶&nbsp; 又可以兑换1-20元立减金了</h1>
<p>&nbsp;</p>
<p>工行APP-我的-绿色能量-下方2500g兑换1元微信立减金</p>
<p><img alt="工行碳能量兑换1元微信立减金 亲测1元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2022/11/29/c50bf0dd17f383371b30a2629b390f51.jpg" style="width: 645px; *//* height: 693px;" referrerpolicy="no-referrer"></p>`,r:{minutes:57.56,words:17268},t:"爬取日期: 2024-12-17",y:"a"}}],["/posts/2024-12-18.html",{loader:()=>f(()=>import("./2024-12-18.html-B_mypVZT.js"),[]),meta:{u:1005,e:`
<h2>中信ONE有引力抽1-111元立减金/实物 亲测1元秒到</h2>
<p><strong>中信ONE有引力抽1-111元立减金/实物 亲测1元秒到</strong></p>
<p>中信红会员1周年活动，抽奖会必中的哦</p>
<p>转入1000元到中信卡上就可以抽奖，每周一次抽奖</p>
<p>亲测1元立减金秒到</p>
<p>&nbsp;</p>
<h1>12月18日置顶 新一期开始了</h1>
<p>&nbsp;</p>
<p>中信APP-底部【会员】-中间横幅【ONE有引力】-点【前往抽奖】-完成资产大于1000元任务后抽奖</p>
<p><img alt="中信ONE有引力抽1-111元立减金/实物 亲测1元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/09/860550ce0bd45a042da1fc8136ecc9b2.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:55.3,words:16591},t:"爬取日期: 2024-12-18",y:"a"}}],["/posts/2024-12-19.html",{loader:()=>f(()=>import("./2024-12-19.html-C9ut6LD3.js"),[]),meta:{u:1005,e:`
<h2>亲测中明信片 小红书无限暖暖影像展抽奖</h2>
<p><strong>亲测中明信片 小红书无限暖暖影像展抽奖</strong></p>
<p>这个抽奖试非必中的哦，完成任务领积分抽奖</p>
<p>用小红书的可以试试看，亲测中小红书联名明信片</p>
<p><br>微信打开-跳转小红书APP-下拉完成任务领积分，50积分抽奖一次</p>
<p><img alt="亲测中明信片 小红书无限暖暖影像展抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/19/0481135740a9dc0e6c7317d1e61e1063.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:65.76,words:19728},t:"爬取日期: 2024-12-19",y:"a"}}],["/posts/2024-12-20.html",{loader:()=>f(()=>import("./2024-12-20.html-7av3flf6.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领取《Vampire Survivors》游戏</h2>
<p><strong>Epic喜加1免费领取《Vampire Survivors》游戏</strong></p>
<p>Epic喜加1《Vampire Survivors》冒险独立游戏</p>
<p>是一款结合了哥特式恐怖和肉鸽元素的休闲游戏，通过一次次的选择让角色越变越强，身处怪物的重重包围也无所畏惧</p>
<p>显示免费领取时间至12月21日00:00，可以不玩但不能没有</p>
<p><br>《Vampire Survivors》</p>
<p><img alt="Epic喜加1免费领取《Vampire Survivors》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/20/1db9dcac928e4fe44cfed6dd8c60e8ed.jpg" style="width: 740px; *//* height: 418px;" referrerpolicy="no-referrer"></p>`,r:{minutes:39.62,words:11885},t:"爬取日期: 2024-12-20",y:"a"}}],["/posts/2024-12-21.html",{loader:()=>f(()=>import("./2024-12-21.html-Bqj28ztv.js"),[]),meta:{u:1005,e:`
<h2>亲测0.01撸抽绳垃圾袋 淘宝特价版领6元红包</h2>
<p><strong>亲测0.01撸抽绳垃圾袋 淘宝特价版领6元红包</strong></p>
<p>淘宝特价版APP参与，部分人会弹无门槛红包</p>
<p>不弹的换号试试，亲测6元红包</p>
<p>0.01元撸抽绳垃圾袋一卷</p>
<p><br>淘宝特价版APP-自动弹红包-去撸实物</p>
<p><img alt="亲测0.01撸抽绳垃圾袋 淘宝特价版领6元红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/21/81cf6d360414564c01367ed542fa6535.jpg" style="width: 645px; *//* height: 719px;" referrerpolicy="no-referrer"></p>`,r:{minutes:34.9,words:10471},t:"爬取日期: 2024-12-21",y:"a"}}],["/posts/2024-12-22.html",{loader:()=>f(()=>import("./2024-12-22.html-DGaN01y_.js"),[]),meta:{u:1005,e:`
<h2>亲测15天喜马拉雅会员秒到 直接领取即可</h2>
<p><strong>亲测15天喜马拉雅会员秒到 直接领取即可</strong></p>
<p>这个活动可以直接登录领取，亲测是秒到</p>
<p>相关活动里面还可以领取15天，总共是一个月会员</p>
<p>需要的可以免费领取一下哦，目前没有数量限制</p>
<p><br>微信打开底部活动 登录 领取即可</p>
<p><img alt="亲测15天喜马拉雅会员秒到 直接领取即可_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/22/390ef6f72b9e7baf5ea1204df8207b2a.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:36.11,words:10834},t:"爬取日期: 2024-12-22",y:"a"}}],["/posts/2024-12-23.html",{loader:()=>f(()=>import("./2024-12-23.html-DEW6YgeL.js"),[]),meta:{u:1005,e:`
<h2>京东吃水饺得黄金抽无门槛红包/实物/生肖币</h2>
<p><strong>京东吃水饺得黄金抽无门槛红包/实物/生肖币</strong></p>
<p>京东吃水饺得黄金活动，每天参与抽奖三次</p>
<p>可以抽到红包/0.01实物/京东超市卡/生肖币集卡</p>
<p>生肖币集齐12枚可兑换1斤黄金，没有这个运气的就每天去抽抽无门槛红包</p>
<p>&nbsp;</p>
<h1>12月23日置顶 抽奖试试</h1>
<p><br>京东APP-首页右下角悬浮【黄金水饺】/直接搜【黄金水饺】-进去开始抽奖，做任务还可以增加多次机会</p>
<p><img alt="京东吃水饺得黄金抽无门槛红包/实物/生肖币-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/18/e71b05f6ce029c0d9256799b0b35d031.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:60.44,words:18131},t:"爬取日期: 2024-12-23",y:"a"}}],["/posts/2024-12-24.html",{loader:()=>f(()=>import("./2024-12-24.html-wSfiNojd.js"),[]),meta:{u:1005,e:`
<h2>高德新年好运抽66元打车券 每日可参与</h2>
<p><strong>高德新年好运抽66元打车券 每日可参与</strong></p>
<p>高德APP新年好运礼活动，每天抽2次非必中</p>
<p>奖品库存每日都会刷新，运气好的有机会中66元无门槛打车券</p>
<p>也有机会中5元打车券、打车金等奖励</p>
<p><br>高德APP-下拉【打车】-下拉至活动专区右侧滚动窗口【抽66元新年好运礼包】抽奖</p>
<p><img alt="高德新年好运抽66元打车券 每日可参与-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/24/ff611c671af1af498f41f5ab5b478c93.jpg" style="width: 645px; *//* height: 719px;" referrerpolicy="no-referrer"></p>`,r:{minutes:57.28,words:17183},t:"爬取日期: 2024-12-24",y:"a"}}],["/posts/2024-12-25.html",{loader:()=>f(()=>import("./2024-12-25.html-CSMsjMto.js"),[]),meta:{u:1005,e:`
<h2>亲测0.58元 华夏基金展望2025新基会抽奖</h2>
<p><strong>亲测0.58元 华夏基金展望2025新基会抽奖</strong></p>
<p>这个抽奖试非必中的哦，简单游戏抽奖</p>
<p>亲测中0.58元红包不秒到，晚点会推送到账</p>
<p>都去试试看，游戏很简单</p>
<p><br>微信打开-下拉点击【阅读原文】-开始挑战，通关抽奖</p>
<p><img alt="亲测0.58元 华夏基金展望2025新基会抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/25/4c44576c839dbd0ad9645083d88fae1e.jpg" style="width: 645px; *//* height: 719px;" referrerpolicy="no-referrer"></p>`,r:{minutes:37.68,words:11305},t:"爬取日期: 2024-12-25",y:"a"}}],["/posts/2024-12-26.html",{loader:()=>f(()=>import("./2024-12-26.html-MOaGq0vH.js"),[]),meta:{u:1005,e:`
<h2>亲测0.66元秒到 渤海银行好运连连抽奖</h2>
<p><strong>亲测0.66元秒到 渤海银行好运连连抽奖</strong></p>
<p>这个抽奖非必中的哦，有多次机会可抽奖</p>
<p>抽随机红包，亲测中2个0.33元秒到</p>
<p>想参与的试试，不需要渤海银行用户</p>
<p><br>微信打开-下拉-任务的抽奖机会-抽奖</p>
<p><img alt="亲测0.66元秒到 渤海银行好运连连抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/26/759d86e23bc9341a7c0f3f9e306d90dc.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:55.61,words:16683},t:"爬取日期: 2024-12-26",y:"a"}}],["/posts/2024-12-27.html",{loader:()=>f(()=>import("./2024-12-27.html-C3tX07dR.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1限时免费领《幽灵行者2》游戏</h2>
<p><strong>Epic喜加1限时免费领《幽灵行者2》游戏</strong></p>
<p>Epic喜加1《幽灵行者2》第一视角单人游戏</p>
<p>背景设定在《幽灵行者》事件一年后。 在这个后世界末日的赛博朋克世界中冒险。达摩塔是人类的最后避难所，但统治它的残暴主君密钥师已然倒台。 杰克将在本作中回归，奋力抵抗在达摩塔外集结的 AI 邪教，重塑人类的未来</p>
<p>限时免费领取时间至12月28日00:00</p>
<p><br>《幽灵行者2》</p>
<p><img alt="Epic喜加1限时免费领《幽灵行者2》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/27/2114cae60f3b82db9912a24c8d2303a5.jpg" style="width: 740px; *//* height: 340px;" referrerpolicy="no-referrer"></p>`,r:{minutes:40.48,words:12143},t:"爬取日期: 2024-12-27",y:"a"}}],["/posts/2024-12-28.html",{loader:()=>f(()=>import("./2024-12-28.html-BXhhf-Ca.js"),[]),meta:{u:1005,e:`
<h2>建行必得38-88元立减金 亲测58元立减金秒到</h2>
<p><strong>建行必得38-88元立减金 亲测58元立减金秒到</strong></p>
<p>这个需要你没有开通过养老金的用户参与</p>
<p>符合要求的可以参与一下哦，最低可以获得38元红包</p>
<p>最高可以获得88元红包，需要你开通个人养老金账户之后存0.5元然后参与抽奖</p>
<p>&nbsp;</p>
<p>这个活动只限有社保的可以参加</p>
<p>1.微信扫码 下拉【点击缴存有礼】-跳转建行开通养老金账户</p>
<p><img alt="二维码_ww.wiqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/27/020ae47ccc0c9e4d987acd8e4848f761.jpg" style="width: 220px; *//* height: 216px;" referrerpolicy="no-referrer"></p>`,r:{minutes:31.46,words:9437},t:"爬取日期: 2024-12-28",y:"a"}}],["/posts/2024-12-29.html",{loader:()=>f(()=>import("./2024-12-29.html-gfG62h1d.js"),[]),meta:{u:1005,e:`
<h2>工行兴农通充值有礼抽立减金 亲测10元立减金秒到</h2>
<p><strong>工行兴农通充值有礼抽立减金 亲测10元立减金秒到</strong></p>
<p>这个活动是非必中哦，需要完成充值有礼任务</p>
<p>任务完成之后就可以取出来了，需要充值500元哦</p>
<p>最高可以抽66元微信立减金，亲测5元立减金秒到</p>
<p>&nbsp;</p>
<h1>12月29日置顶 抽奖有水</h1>
<p>兴农通APP-任务中心-充值有礼任务 完成充值500元的任务 抽奖 500元完成任务抽奖后可以取出</p>
<p><img alt="工行兴农通充值有礼抽立减金 亲测5元立减金秒到_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/07/01/4a44dbfd801abebd5b733961b1f33ad6.jpg" style="width: 650px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:26.9,words:8069},t:"爬取日期: 2024-12-29",y:"a"}}],["/posts/2024-12-30.html",{loader:()=>f(()=>import("./2024-12-30.html-Ct9u151X.js"),[]),meta:{u:1005,e:`
<h2>中信ONE有引力抽1-111元立减金/实物 亲测1元秒到</h2>
<p><strong>中信ONE有引力抽1-111元立减金/实物 亲测1元秒到</strong></p>
<p>中信红会员1周年活动，抽奖会必中的哦</p>
<p>转入1000元到中信卡上就可以抽奖，每周一次抽奖</p>
<p>亲测1元立减金秒到</p>
<p>&nbsp;</p>
<h1>12月30日置顶 新一期开始了</h1>
<p>&nbsp;</p>
<p>中信APP-底部【会员】-中间横幅【ONE有引力】-点【前往抽奖】-完成资产大于1000元任务后抽奖</p>
<p><img alt="中信ONE有引力抽1-111元立减金/实物 亲测1元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/09/860550ce0bd45a042da1fc8136ecc9b2.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:44.29,words:13288},t:"爬取日期: 2024-12-30",y:"a"}}],["/posts/2024-12-31.html",{loader:()=>f(()=>import("./2024-12-31.html-aSZUpUBM.js"),[]),meta:{u:1005,e:`
<h2>粗暴！支付宝领碰一下新年红包 亲测8.68元</h2>
<p><strong>粗暴！支付宝领碰一下新年红包 亲测8.68元</strong></p>
<p>支付宝开通了碰一下的都可以参加哦，没开的也可以领</p>
<p>直接领取一个新年红包，随机大额的</p>
<p>不知道限不限量，速度去领，亲测3.68元，有反馈5.68元、8.68元</p>
<p><br>支付宝APP-搜【碰一下】-点横幅【支付宝送你新年好运红包】-进去领</p>
<p><img alt="粗暴！支付宝领碰一下新年红包 亲测3.68元-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/31/926c0f81baffc1be8b8e2fbd1ac79545.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:36.95,words:11086},t:"爬取日期: 2024-12-31",y:"a"}}],["/posts/2025-01-01.html",{loader:()=>f(()=>import("./2025-01-01.html-DDEA6Ii-.js"),[]),meta:{u:1005,e:`
<h2>伊利集金元宝抽最高188元现金/实物金元宝 亲测6.6元</h2>
<p><strong>伊利集金元宝抽最高188元现金/实物金元宝 亲测6.6元</strong></p>
<p>伊利春节集金元宝活动，也是和之前集卡一样</p>
<p>多余的卡片可以翻牌抽奖，奖励也不错，不过要能抽到</p>
<p>看看这次有没有能中金元宝实物的，反馈中6.6元秒到</p>
<p>&nbsp;</p>
<h1>1月1日置顶 抽奖有水</h1>
<p>复制发送给微信任意好友打开</p>
<p>mp://ETqHAmOq3dyjxuz</p>
<p>点弹窗/【哪里过春节拿礼有伊利】-【集宝赢金元宝】-做任务抽宝，集齐元宝抽最高万元实物金元宝-多余的卡可以翻牌先抽了，概率中红包</p>`,r:{minutes:34.8,words:10441},t:"爬取日期: 2025-01-01",y:"a"}}],["/posts/2025-01-02.html",{loader:()=>f(()=>import("./2025-01-02.html-q0nHip5d.js"),[]),meta:{u:1005,e:`
<h2>亲测0.8元秒到 中行周周礼抽0.8-188元现金/实物</h2>
<p><strong>亲测0.8元秒到 中行周周礼抽0.8-188元现金/实物</strong></p>
<p>这个抽奖非必中的哦，简单浏览一下任务可抽奖</p>
<p>抽0.8/188元现金、实物等，奖品数量有限抽完即止</p>
<p>亲测0.8元现金红包秒到</p>
<p>&nbsp;</p>
<p>微信打开-点底部【周周抽豪礼】-进去完成5个浏览任务抽奖</p>
<p><img alt="亲测0.8元秒到 中行周周礼抽0.8-188元现金/实物-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/02/7a1fdcc93fa08dbfe993cea938ffb145.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:52.33,words:15700},t:"爬取日期: 2025-01-02",y:"a"}}],["/posts/2025-01-03.html",{loader:()=>f(()=>import("./2025-01-03.html-Bu-P-u7d.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领取《Hell Let Loose》游戏</h2>
<p><strong>Epic喜加1免费领取《Hell Let Loose》游戏</strong></p>
<p>Epic喜加1《Hell Let Loose》类似吃鸡游戏</p>
<p>款硬核的二战第一人称射击游戏，拥有100名玩家与步兵、坦克、大炮进行史诗般的战斗，动态转换的前线，以及独特的基于资源的RTS式元游戏。</p>
<p>限时免费领取时间至1月10日，可以不玩但不能没有</p>
<p><br>《Hell Let Loose》</p>
<p><img alt="Epic喜加1免费领取《Hell Let Loose》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/03/0090855693831bf223540ae11c01e448.jpg" style="width: 740px; *//* height: 402px;" referrerpolicy="no-referrer"></p>`,r:{minutes:39.27,words:11781},t:"爬取日期: 2025-01-03",y:"a"}}],["/posts/2025-01-04.html",{loader:()=>f(()=>import("./2025-01-04.html-2VEQBcaq.js"),[]),meta:{u:1005,e:`
<h2>伊利集五福抽黄金珠/京东E卡/现金红包 亲测1.6元秒到</h2>
<p><strong>伊利集五福抽黄金珠/京东E卡/现金红包 亲测1.6元秒到</strong></p>
<p>伊利集五福抽奖活动，和之前的活动累死</p>
<p>有2种卡是稀有卡，多余的卡可以直接抽奖抽掉，抽0.1-6.6元现金/100E卡</p>
<p>集齐一套合成必中6.6-66元现金/100-500E卡/实物黄金珠</p>
<p>这个多参加哦，运气好能中大奖，亲测1.6元秒到</p>
<p>&nbsp;</p>
<h1>1月4日置顶 抽奖试试</h1>
<p><br>复制发送给微信任意好友打开</p>
<p>mp://jiYoxrkmwB72Lhp</p>`,r:{minutes:28.98,words:8694},t:"爬取日期: 2025-01-04",y:"a"}}],["/posts/2025-01-05.html",{loader:()=>f(()=>import("./2025-01-05.html-BxvsO870.js"),[]),meta:{u:1005,e:`
<h2>网易云音乐会员 领取VIP+严选月卡+季卡</h2>
<p><strong>网易云音乐会员 领取VIP+严选月卡+季卡</strong></p>
<p>这个是网易云音乐VIP会员的福利，福利都是可以领取的</p>
<p>我领取了快30天VIP会员和4个月网易严选会员</p>
<p>网易严选会员在网易买东西可以包邮的哦</p>
<p><br>网易云音乐APP-顶部【头像】-会员中心-会员特权-点击进去领即可</p>
<p><img alt="网易云音乐会员 领取VIP+严选月卡+季卡_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/05/c4f1786108a7be0f1019f66b18ced9b9.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:36.23,words:10869},t:"爬取日期: 2025-01-05",y:"a"}}],["/posts/2025-01-06.html",{loader:()=>f(()=>import("./2025-01-06.html-CR6x0Wu6.js"),[]),meta:{u:1005,e:`
<h2>元梦之星一起来探索抽奖 亲测中QQ超级会员月卡</h2>
<p><strong>元梦之星一起来探索抽奖 亲测中QQ超级会员月卡</strong></p>
<p>QQ端元梦之星活动，完成任务抽奖</p>
<p>抽QQ超级会员、腾讯视频会员、现金红包等</p>
<p>一共两个活动，都可以试试看</p>
<p><br>QQ打开活动页面-完成任务抽奖</p>
<p><img alt="元梦之星一起来探索抽奖 亲测中QQ超级会员月卡-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/06/ea1478d9305295544c7be114568d0ca7.jpg" style="width: 645px; *//* height: 666px;" referrerpolicy="no-referrer"></p>`,r:{minutes:41.15,words:12346},t:"爬取日期: 2025-01-06",y:"a"}}],["/posts/2025-01-07.html",{loader:()=>f(()=>import("./2025-01-07.html-CGAOdcMh.js"),[]),meta:{u:1005,e:`
<h2>建行消费达标月月开最高抽666元微信立减金</h2>
<p><strong>建行消费达标月月开最高抽666元微信立减金</strong></p>
<p>建行消费达标活动来袭，按要求消费达标可抽奖</p>
<p>完成当月3笔、10笔、15笔5元以上消费，分别可抽奖一次最高10元立减金</p>
<p>完成当月消费10笔、消费金额达到6666元，抽最高666元立减金</p>
<p>使用建行卡在微信/支付宝支付5元以上就算成功，每天最多2笔</p>
<p>可以试试转零钱通，不知道算不算笔数哦</p>
<p>&nbsp;</p>
<h1>1月7日置顶 新一期</h1>
<p>1.建行APP搜【惠省钱】-下拉精选活动【消费达标月月卡 最高抽666元大奖】-一重礼去消费笔数，二重礼也记得报名</p>`,r:{minutes:37.59,words:11276},t:"爬取日期: 2025-01-07",y:"a"}}],["/posts/2025-01-08.html",{loader:()=>f(()=>import("./2025-01-08.html-Br88EpJX.js"),[]),meta:{u:1005,e:`
<h2>亲测2.88元秒到 邮储宽带投资大作战抽奖</h2>
<p><strong>亲测2.88元秒到 邮储宽带投资大作战抽奖</strong></p>
<p>有邮储的可以试试看，抽取随机红包</p>
<p>任务很简单都是浏览+关注</p>
<p>亲测2.88元现金，提现到银行卡秒到</p>
<p>&nbsp;</p>
<p>微信打开-跳转邮储APP-【宽带投资大作战 完成任务领福利】-下拉完成3个任务-抽奖后，<span style="color:#FF0000;">不要点击体验-要点下面的【提现到银行卡】</span></p>
<p><img alt="亲测2.88元秒到 邮储宽带投资大作战抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/08/eeb449cc10389c6f3278197af19251d8.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:57.87,words:17362},t:"爬取日期: 2025-01-08",y:"a"}}],["/posts/2025-01-09.html",{loader:()=>f(()=>import("./2025-01-09.html-D4VOJrq3.js"),[]),meta:{u:1005,e:`
<h2>淘宝年度畅销榜领0.8元红包 亲测0.8元秒到</h2>
<p><strong>淘宝年度畅销榜领0.8元红包 亲测0.8元秒到</strong></p>
<p>现在是必得的哦，弹窗就有0.8元</p>
<p>亲测0.8元无门槛红包秒到</p>
<p>不弹可能就是黄了，速度领</p>
<p><br>淘宝APP搜【年度畅销榜】弹窗领取</p>
<p><img alt="淘宝年度畅销榜领0.8元红包 亲测0.8元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/09/b3a28184fe42d82f9c6886dd77862c82.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:37.26,words:11179},t:"爬取日期: 2025-01-09",y:"a"}}],["/posts/2025-01-10.html",{loader:()=>f(()=>import("./2025-01-10.html-Cmngt_Jc.js"),[]),meta:{u:1005,e:`
<h2>亲测50元猫超卡秒到 建行开宝箱有好礼</h2>
<p><strong>亲测50元猫超卡秒到 建行开宝箱有好礼</strong></p>
<p>建行会员中心更新成任务中心了，简单浏览任务攒1000积分可开宝箱</p>
<p>积分不够的可以去签到、等第二天看看有无任务更新</p>
<p>抽京东E卡/猫超卡/视频会员月卡等，亲测5元秒超卡秒到</p>
<p>现在有水，群友反馈都中了，速度抽奖</p>
<p>&nbsp;</p>
<h1>1月10日置顶 抽奖试试</h1>
<p>建行APP-我的-任务中心-精选任务里面的浏览任务都完成一下，1000任务分可开宝箱抽奖</p>
<p><img alt="亲测5亓猫超卡秒到 建行任务中心开宝箱领好礼-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/01/04/cc6aba11920670136aca141e55cc75ea.jpg" style="width: 740px; *//* height: 545px;" referrerpolicy="no-referrer"></p>`,r:{minutes:68.29,words:20487},t:"爬取日期: 2025-01-10",y:"a"}}],["/posts/2025-01-11.html",{loader:()=>f(()=>import("./2025-01-11.html-Zx12v2xv.js"),[]),meta:{u:1005,e:`
<h2>建行消费达标月月开最高抽666元微信立减金</h2>
<p><strong>建行消费达标月月开最高抽666元微信立减金</strong></p>
<p>建行消费达标活动来袭，按要求消费达标可抽奖</p>
<p>完成当月3笔、10笔、15笔5元以上消费，分别可抽奖一次最高10元立减金</p>
<p>完成当月消费10笔、消费金额达到6666元，抽最高666元立减金</p>
<p>使用建行卡在微信/支付宝支付5元以上就算成功，每天最多2笔</p>
<p>可以试试转零钱通，不知道算不算笔数哦</p>
<p>&nbsp;</p>
<h1>1月11日置顶 达标抽奖试试</h1>
<p>1.建行APP搜【惠省钱】-下拉精选活动【消费达标月月卡 最高抽666元大奖】-一重礼去消费笔数，二重礼也记得报名</p>`,r:{minutes:35.36,words:10608},t:"爬取日期: 2025-01-11",y:"a"}}],["/posts/2025-01-12.html",{loader:()=>f(()=>import("./2025-01-12.html-CI8L5YgW.js"),[]),meta:{u:1005,e:`
<h2>49元到手一年京东plus会员 可领多种权益</h2>
<p><strong>49元到手一年京东plus会员 可领多种权益</strong></p>
<p>有需要开京东plus会员的可以参与一下哦</p>
<p>官方活动，开通之后返回开通页面就可以领取</p>
<p>50元无门卡红包还有号会员店普通年卡</p>
<p>还可以兑换2个家政60 洗车10回本 兑换4个洗衣30元</p>
<p>咸鱼有人会需要，自己不需要可以去看看。</p>
<p><br>微信打开下方地址 99元开通京东PLIS年卡 开通之后返回活动页面还可以免费 领50元红包+1号店会员年卡 到手49元</p>
<p>活动地址：<a target="_blank" href="https://u.jd.com/QDHnq0X">https://u.jd.com/QDHnq0X</a></p>`,r:{minutes:37.47,words:11242},t:"爬取日期: 2025-01-12",y:"a"}}],["/posts/2025-01-13.html",{loader:()=>f(()=>import("./2025-01-13.html-Cxo2e1dL.js"),[]),meta:{u:1005,e:`
<h2>亲测40Q币秒到 应用宝回归礼登录领取</h2>
<p><strong>亲测40Q币秒到 应用宝回归礼登录领取</strong></p>
<p>这个是应用宝的受邀活动，有入口的就可以参加</p>
<p>部分人是有每个游戏10Q币奖励，有的是5元现金</p>
<p>不是回归用户的就只有游戏道具，亲测40Q币秒到</p>
<p>&nbsp;</p>
<h1>1月13日置顶 有回归任务的去完成领4Q币</h1>
<p>&nbsp;</p>
<p><span style="color:#FF0000;">应用宝经常用微信登录的，切换到QQ登录应用宝APP（经常用QQ登录的就切换账号用微信登录APP），这样比较容易有回归礼</span></p>`,r:{minutes:40.48,words:12145},t:"爬取日期: 2025-01-13",y:"a"}}],["/posts/2025-01-14.html",{loader:()=>f(()=>import("./2025-01-14.html-Chduo7YE.js"),[]),meta:{u:1005,e:`
<h2>淘宝年货节抽最高25888元红包 20点抢1元起</h2>
<p><strong>淘宝年货节抽最高25888元红包 20点抢1元起</strong></p>
<p>淘宝年货节每天领一个超级红包</p>
<p>最高中25888元，还有不定期加码领大额红包</p>
<p>今日10点开始领取，记得参与</p>
<p>&nbsp;</p>
<p><span style="color:#FF0000;">淘宝20点加码</span><br>限量抢荭包，<span style="color:#FF0000;">1亓起，最高1111亓</span><br>先到先得<br><span style="background-color:#ADD8E6;">4$ESgle2k2p0R$:// MU6304</span></p>`,r:{minutes:35.17,words:10550},t:"爬取日期: 2025-01-14",y:"a"}}],["/posts/2025-01-15.html",{loader:()=>f(()=>import("./2025-01-15.html-BcD2yzNa.js"),[]),meta:{u:1005,e:`
<h2>淘宝年货节抽最高25888元红包 20点抢2元起</h2>
<p><strong>淘宝年货节抽最高25888元红包 20点抢2元起</strong></p>
<p>淘宝年货节每天领一个超级红包</p>
<p>最高中25888元，还有不定期加码领大额红包</p>
<p>今日10点开始领取，记得参与</p>
<p>&nbsp;</p>
<p><span style="color:#FF0000;">20点</span>淘宝超级加码<br><span style="color:#FF0000;">30万个2亓</span> 必须这个淘口令<br><span style="background-color:#ADD8E6;">5$DTT1edWulLE$:// HU7709</span><br>人人都有 预计持续5分钟哈</p>`,r:{minutes:40.02,words:12007},t:"爬取日期: 2025-01-15",y:"a"}}],["/posts/2025-01-16.html",{loader:()=>f(()=>import("./2025-01-16.html-CXXUebSk.js"),[]),meta:{u:1005,e:`
<h2>体彩合成顶呱刮 亲测中实物台历一本</h2>
<p><strong>体彩合成顶呱刮 亲测中实物台历一本</strong></p>
<p>这个活动是非必中的，打开就有玩游戏机会</p>
<p>答案到120分就会自动弹抽奖，刮开一下</p>
<p>得到实物直接填写收货地址即可</p>
<p>&nbsp;</p>
<h1>1月16日置顶 抽奖有水</h1>
<p><br>微信打开下方小程序 顶部横幅【合成顶呱刮】玩合成游戏 到120分自动弹抽奖 抽到实物直接填写收货地址即可</p>
<p>mp://kbGzqsNlTcefKGt</p>
<p><img alt="体彩合成顶呱刮 亲测中实物台历一本_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/06/e9f598654535bdad5ee1c8f16654a4ea.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:35.24,words:10572},t:"爬取日期: 2025-01-16",y:"a"}}],["/posts/2025-01-17.html",{loader:()=>f(()=>import("./2025-01-17.html-CG3m7OEy.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领《Escape Academy》游戏</h2>
<p><strong>Epic喜加1免费领《Escape Academy》游戏</strong></p>
<p>Epic喜加1《Escape Academy》休闲、冒险、解谜类游戏</p>
<p>有喜欢解谜类游戏的抓紧收藏，限时免费领取时间至1月24日00:00</p>
<p>可以不玩，但不能没有</p>
<p><br>《Escape Academy》</p>
<p><img alt="Epic喜加1免费领《Escape Academy》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/17/d9bdd48a9cb1c0201836b0a3d43f4f06.jpg" style="width: 740px; *//* height: 407px;" referrerpolicy="no-referrer"></p>`,r:{minutes:33.4,words:10021},t:"爬取日期: 2025-01-17",y:"a"}}],["/posts/2025-01-18.html",{loader:()=>f(()=>import("./2025-01-18.html-DG0QpCxR.js"),[]),meta:{u:1005,e:`
<h2>周大生黄金珠宝嘉年华抽奖 亲测中黄金挂件</h2>
<p><strong>周大生黄金珠宝嘉年华抽奖 亲测中黄金挂件</strong></p>
<p>这个活动有点卡，多试试挤进去</p>
<p>简单拼图抽奖，抽到优惠券没有用</p>
<p>亲测中黄金挂件，需要手动领取兑换</p>
<p><br>复制发送给微信任意好友打开</p>
<p>mp://CZoR74KvmAqlIBj</p>
<p><img alt="周大生黄金珠宝嘉年华抽奖 亲测中黄金挂件-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/18/b3ede25e64f4bb000daab24960bd9b6c.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:30.06,words:9019},t:"爬取日期: 2025-01-18",y:"a"}}],["/posts/2025-01-19.html",{loader:()=>f(()=>import("./2025-01-19.html-D1w-wu04.js"),[]),meta:{u:1005,e:`
<h2>淘宝年味早点办抽红包 &nbsp;亲测1元秒到</h2>
<p><strong>淘宝年味早点办抽红包 &nbsp;亲测1元秒到</strong></p>
<p>这个活动目前有水，大家可以抽奖试试看</p>
<p>我是中到了1元淘宝红包，秒到卡包，</p>
<p>红包是可以马上使用的哦。</p>
<p><br>淘宝APP【年味早点办】等一会儿 会弹红包页面 大概率1元</p>
<p><img alt="淘宝年味早点办抽红包 &nbsp;亲测1元秒到_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/19/cc5024d3a996f7adbd596fbf9aec9b06.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:24.22,words:7266},t:"爬取日期: 2025-01-19",y:"a"}}],["/posts/2025-01-20.html",{loader:()=>f(()=>import("./2025-01-20.html-Dr3yHv5F.js"),[]),meta:{u:1005,e:`
<h2>腾讯视频回归礼撸5-75Q币 限安卓用户参加</h2>
<p><strong>腾讯视频回归礼撸5-75Q币 限安卓用户参加</strong></p>
<p>这个活动只能安卓手机参加，ios没有入口</p>
<p>需要参与验证回归登录游戏，再激活幸运星即可</p>
<p>每个游戏回归可领5Q币，有10多个游戏可以验证</p>
<p>幸运星需要48小时审核，48小时之后来领5Q币&nbsp;</p>
<p>&nbsp;</p>
<h1>1月20日置顶 还可参与</h1>
<p><br>腾讯视频APP-搜【回归礼】点横幅进去-下拉找玩过的游戏，点验证回归资格-符合的-点前往领取5Q币</p>`,r:{minutes:37.48,words:11243},t:"爬取日期: 2025-01-20",y:"a"}}],["/posts/2025-01-22.html",{loader:()=>f(()=>import("./2025-01-22.html-ClUMXzmY.js"),[]),meta:{u:1005,e:`
<h2>快手摇发财树抢88元红包 亲测91元不秒到</h2>
<p><strong>快手摇发财树抢88元红包 亲测91元不秒到</strong></p>
<p>快手/快手极速要发财树新活动</p>
<p>每天任务摇红包，可解锁最高88元现金</p>
<p>还可预约瓜分百亿金币，10000金币=1元现金</p>
<p>最高可瓜分到100万金币，可以参与一下，瓜分时间1月22日、1月28日</p>
<p>&nbsp;</p>
<h1>1月22日置顶 开奖了</h1>
<p>快手/快手APP极速版-任务中心-下拉【摇发财树，抢新春红包】-去摇红包，发财树下方，再点预约瓜分百亿金币</p>
<p>找不到的快手/快手APP极速版扫码</p>`,r:{minutes:27.53,words:8259},t:"爬取日期: 2025-01-22",y:"a"}}],["/posts/2025-01-23.html",{loader:()=>f(()=>import("./2025-01-23.html-BPwKuKwH.js"),[]),meta:{u:1005,e:`
<h2>亲测0.88元 微信灵蛇妙笔连福年抽奖</h2>
<p><strong>亲测0.88元 微信灵蛇妙笔连福年抽奖</strong></p>
<p>这个抽奖非必中的，简单连福3关抽奖</p>
<p>亲测0.88元现金红包，不秒到，晚点会推</p>
<p>想参与的去试试</p>
<p><br>微信关注【常熟农商银行】公众号-菜单栏回复【春节】-点推文链接进去-玩游戏抽</p>
<p><img alt="亲测0.88元 微信灵蛇妙笔连福年抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/23/c5ffa033be01bb596270899b0dee0319.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:25.62,words:7687},t:"爬取日期: 2025-01-23",y:"a"}}],["/posts/2025-01-24.html",{loader:()=>f(()=>import("./2025-01-24.html-Der4DbXd.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1领取《倾听画语: 最美好的景色》游戏</h2>
<p><strong>Epic喜加1领取《倾听画语: 最美好的景色》游戏</strong></p>
<p>Epic喜加1《倾听画语: 最美好的景色》，解谜类游戏</p>
<p>追逐梦想的画家藉由画笔解开房间中的各种谜题</p>
<p>喜欢解谜类游戏的速度领取，限时领取时间至1月31日00:00</p>
<p>&nbsp;</p>
<p>《倾听画语: 最美好的景色》</p>
<p><img alt="Epic喜加1领取《倾听画语: 最美好的景色》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/24/62c61c827894ce308f74cd4ce6ddc5b6.jpg" style="width: 740px; *//* height: 416px;" referrerpolicy="no-referrer"></p>`,r:{minutes:33.4,words:10019},t:"爬取日期: 2025-01-24",y:"a"}}],["/posts/2025-01-25.html",{loader:()=>f(()=>import("./2025-01-25.html-C9RBv435.js"),[]),meta:{u:1001,e:`
<h2>免费领保时捷红包封面 数量有限先到先得</h2>
<p><strong>免费领保时捷红包封面 数量有限先到先得</strong></p>
<p>需要关注保时捷中国公众号领取</p>
<p>亲测已领3个月有效期，要封面的去领</p>
<p>奖品数量有限，领完即止</p>
<p><br>微信关注【保时捷中国】公众号-菜单栏回复【开Cayenne迎喜悦】-点推文链接领取</p>
<p><img alt="免费领保时捷红包封面 数量有限先到先得-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/25/fbcfc61a68794bd62bbca720775d1fa8.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:16.02,words:4805},t:"爬取日期: 2025-01-25",y:"a"}}],["/posts/2025-04-05.html",{loader:()=>f(()=>import("./2025-04-05.html-uOGJnbPz.js"),[]),meta:{u:1e3,e:`
<h2>鹿角巷儿童杯试饮免单券 需到店自提</h2>
<p><strong>鹿角巷儿童杯试饮免单券 需到店自提</strong></p>
<p>所在地有鹿角巷门店的去领取哦</p>
<p>亲测已领儿童试饮免单券 需要到门店自提</p>
<p>奖品数量有限，领完即止</p>
<p><br>复制发送给微信任意好友打开领取</p>
<p>mp://CWK6nhPamlExhlC</p>
<p><img alt="免费领鹿角巷儿童杯试饮免单券 需到店自提-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/05/5ea529d8cc5aa9c49481d4ce73f4d13a.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:25.28,words:7584},t:"爬取日期: 2025-04-05",y:"a"}}],["/posts/2025-04-06.html",{loader:()=>f(()=>import("./2025-04-06.html-FgMSax17.js"),[]),meta:{u:1005,e:`
<h2>建行消费达标月月开最高抽666元微信立减金</h2>
<p><strong>建行消费达标月月开最高抽666元微信立减金</strong></p>
<p>建行消费达标活动来袭，按要求消费达标可抽奖</p>
<p>完成当月3笔、10笔、15笔5元以上消费，分别可抽奖一次最高10元立减金</p>
<p>完成当月消费10笔、消费金额达到6666元，抽最高666元立减金</p>
<p>使用建行卡在微信/支付宝支付5元以上就算成功，每天最多2笔</p>
<p>可以试试转零钱通，不知道算不算笔数哦</p>
<p>&nbsp;</p>
<h1>4月6日置顶 上月没抽的去奖品明细里面抽完</h1>
<p>1.建行APP搜【惠省钱】-下拉精选活动【消费达标月月卡 最高抽666元大奖】-一重礼去消费笔数，二重礼也记得报名</p>`,r:{minutes:22.27,words:6680},t:"爬取日期: 2025-04-06",y:"a"}}],["/posts/2025-04-07.html",{loader:()=>f(()=>import("./2025-04-07.html-VX6yXZd-.js"),[]),meta:{u:1004,e:`
<h2>工行抽最高6600豆兑换通用立减金 亲测1元立减金</h2>
<p><strong>工行抽最高6600豆兑换通用立减金 亲测1元立减金</strong></p>
<p>这个活动不限地区都可以参加，不过比较卡</p>
<p>显示超时或者错误就多试试</p>
<p>亲测中168豆子，兑换1元立减金秒到</p>
<p><br>微信打开-跳转工行APP-下拉-第一周点立即抽奖-抽完去换好礼-兑换1元立减金</p>
<p><img alt="工行抽最高6600豆兑换通用立减金 亲测1元立减金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/07/4748700ff02effc5bc671da716ec1e3f.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:28.5,words:8549},t:"爬取日期: 2025-04-07",y:"a"}}],["/posts/2025-04-08.html",{loader:()=>f(()=>import("./2025-04-08.html-DIX74cWn.js"),[]),meta:{u:1005,e:`
<h2>亲测0.8元秒到 大潮寻找税法智慧星抽奖</h2>
<p><strong>亲测0.8元秒到 大潮寻找税法智慧星抽奖</strong></p>
<p>这个抽奖是非必中的哦，每天3次机会</p>
<p>不中的可以第二天继续试试</p>
<p>反馈0.8元现金秒到</p>
<p><br>大潮APP，首页点滚动图【寻找税法智慧星】进去，5对3题即可抽奖</p>
<p><img alt="亲测0.8元秒到 大潮寻找税法智慧星抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/08/f8c680b0817f931e3e663ad34ce625fb.jpg" style="width: 740px; *//* height: 513px;" referrerpolicy="no-referrer"></p>`,r:{minutes:51.86,words:15557},t:"爬取日期: 2025-04-08",y:"a"}}],["/posts/2025-04-09.html",{loader:()=>f(()=>import("./2025-04-09.html-DbV7bDuI.js"),[]),meta:{u:1005,e:`
<h2>京东天天来抽奖 亲测0.01元撸包邮发箍</h2>
<p><strong>京东天天来抽奖 亲测0.01元撸包邮发箍</strong></p>
<p>京东天天来抽奖活动，抽0.1元实物</p>
<p>概率中的哦，现在抽奖有水</p>
<p>亲测中0.1元发箍，叠加红包直接0.01元到手</p>
<p>&nbsp;</p>
<h1>4月9日置顶 还可以参与</h1>
<p>微信打开-点击抽奖-每天有三次机会-中到0.1元实物去使用即可-完成任务获得更多机会 还有好多0.1</p>
<p><img alt="京东天天来抽奖 亲测0.01元撸包邮发箍-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/03/27/5cb53cf06a1696edf5bfcb1bdcac2674.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:50.26,words:15078},t:"爬取日期: 2025-04-09",y:"a"}}],["/posts/2025-04-10.html",{loader:()=>f(()=>import("./2025-04-10.html-MUtlr02P.js"),[]),meta:{u:1005,e:`
<h2>亲测0.89元撸方便面2桶 淘宝领5元无门槛签到红包</h2>
<p><strong>亲测0.89元撸方便面2桶 淘宝领5元无门槛签到红包</strong></p>
<p>部分人可又以领取到淘宝5元无门槛签到红包</p>
<p>领不到的要换号试试看哦，不然参与不了</p>
<p>领到的可直接0.89元撸吴山挂面方便面2桶，这个还不错哦，多号多撸</p>
<p>&nbsp;</p>
<h2>0撸方便面2桶</h2>
<p>1.领券不拍</p>
<p><span style="background-color:#ADD8E6;">1$d2baVaa6fUx$:// HU7679</span></p>`,r:{minutes:54.41,words:16322},t:"爬取日期: 2025-04-10",y:"a"}}],["/posts/2025-04-11.html",{loader:()=>f(()=>import("./2025-04-11.html-CPJG_ZED.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加3领取《River City Girls》等游戏</h2>
<p><strong>Epic喜加3领取《River City Girls》等游戏</strong></p>
<p>epic喜加3《River City Girls》、《Arcadegeddon》、《Idle Champions of the Forgotten Realms》</p>
<p>三款游戏风格都不一样，有想玩的抓紧时间领取</p>
<p>显示免费领取时间至4月17日23:00</p>
<p><br>游戏页面截图</p>
<p><img alt="Epic喜加3领取《River City Girls》等游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/11/5a54d69074f51e8a098f6d12d19007e2.jpg" style="width: 712px; *//* height: 354px;" referrerpolicy="no-referrer"></p>`,r:{minutes:32.87,words:9861},t:"爬取日期: 2025-04-11",y:"a"}}],["/posts/2025-04-12.html",{loader:()=>f(()=>import("./2025-04-12.html-DvV4Dtcl.js"),[]),meta:{u:1005,e:`
<h2>建行生活领0.5元饿了么支付券 每日9点补</h2>
<p><strong>建行生活领0.5元饿了么支付券 每日9点补</strong></p>
<p>建行生活APP本月都可参与，每日9点补库存抢</p>
<p>领取2张0.5元饿么支付券，可叠加饿了么红包使用</p>
<p>亲测已领秒到，需要的可以领一下，每天都可以领</p>
<p>&nbsp;</p>
<h1>4月12日置顶 每天可领2张</h1>
<p><br>建行生活APP-首页下拉【好券中心】-【外卖】-下拉领取0.5元支付券</p>
<p><img alt="建行生活领0.5元饿了么支付券 每日9点补-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/06/4eb13b9052cb0daeaa7165fa1574bbb3.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:58.47,words:17542},t:"爬取日期: 2025-04-12",y:"a"}}],["/posts/2025-04-13.html",{loader:()=>f(()=>import("./2025-04-13.html-CUkeD47z.js"),[]),meta:{u:1004,e:`
<h2>亲测1元购2个库迪冰淇淋 支付宝积分兑换即可</h2>
<p><strong>亲测1元购2个库迪冰淇淋 支付宝积分兑换即可</strong></p>
<p>这个活动需要的积分不多，有积分的可以兑换一下</p>
<p>兑换的红包点击去使用，在消费圈页面都是可以抵扣的</p>
<p>下单的时候记得手动勾选一下优惠券。</p>
<p><br>支付宝APP-我的-会员-下拉搜【消费圈】-149积分兑换【3亓消费圈购物红包】兑换后点击【去使用】满3元可立减 元亓-记得手动勾选</p>
<p><img alt="亲测1元购2个库迪冰淇淋 支付宝积分兑换即可_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/13/50ec28bdaa17fe5a8f7016ea5a50a41c.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:35.15,words:10546},t:"爬取日期: 2025-04-13",y:"a"}}],["/posts/2025-04-14.html",{loader:()=>f(()=>import("./2025-04-14.html-DHfGWfWY.js"),[]),meta:{u:1005,e:`
<h2>亲测中6200工银i豆 工银i豆乐园抽奖</h2>
<p><strong>亲测中6200工银i豆 工银i豆乐园抽奖</strong></p>
<p>工行工银i豆乐园抽奖活动，有多个抽奖</p>
<p>最高抽5000i豆，亲测中了7个奖励，一共6200i豆</p>
<p>兑换了5元微信立减金秒到</p>
<p><br>微信扫码打开-【幸福摩天轮】、【查赚花闯关】两个进去完成任务抽奖</p>
<p><img alt="亲测中6200工银i豆 工银i豆乐园抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/14/f4d7377808c41304a735f3e2d36680b5.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:36.5,words:10950},t:"爬取日期: 2025-04-14",y:"a"}}],["/posts/2025-04-15.html",{loader:()=>f(()=>import("./2025-04-15.html-BHX_vF30.js"),[]),meta:{u:1005,e:`
<h2>7.99元购建行16元微信立减金 20元商城抵扣券</h2>
<p><strong>7.99元购建行16元微信立减金 20元商城抵扣券</strong></p>
<p>这个是建行省钱卡的活动，购买了这个省钱卡可以领取总共16元微信立减金</p>
<p>和20元善融商城满100-20立减券，购买后微信立减金就发放啦，秒到</p>
<p>&nbsp;</p>
<h1>4月15日置顶 部分人有1.99元买36元立减金</h1>
<p>&nbsp;</p>
<p>建行APP-搜【惠省钱】-进去，自动弹窗0.99元购优惠券（可能部分人有）-抽完转盘折扣后，去购买显示0.99优惠价即可</p>
`,r:{minutes:54.51,words:16352},t:"爬取日期: 2025-04-15",y:"a"}}],["/posts/2025-04-16.html",{loader:()=>f(()=>import("./2025-04-16.html-VtYxiPvL.js"),[]),meta:{u:1005,e:`
<h2>亲测移动1.96元充值20话费 和包领8元话费券</h2>
<p><strong>亲测移动1.96元充值20话费 和包领8元话费券</strong></p>
<p>移动用户参加，和包用定向积分兑换钻石权益包</p>
<p>这个定向积分基本上都有，兑换领10-8元话费券</p>
<p>直接2充10元话费，亲测已充话费秒到</p>
<p>&nbsp;</p>
<h1>4月16日新一期置顶</h1>
<p><br>和包APP-有1200定向积分的（前两个月有送过）-去我的-【移小保】-开通钻石权益包，8元话费券-点进去领取</p>
<p><img alt="亲测移动2充10元话费 和包领10-8元话费券-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/11/23/bf17d3bffe9b6a3a3dedd60b7a86f831.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:33.64,words:10092},t:"爬取日期: 2025-04-16",y:"a"}}],["/posts/2025-04-17.html",{loader:()=>f(()=>import("./2025-04-17.html-DiQy2-Qt.js"),[]),meta:{u:1005,e:`
<h2>亲测0.64元秒到微信 富国基金简单抽最高888元红包</h2>
<p><strong>亲测0.64元秒到微信 富国基金简单抽最高888元红包</strong></p>
<p>这个活动所有用户都是可以参与的哦，最高可以开到888元红包</p>
<p>红包是秒发放的我运气不好就中到2个0.32元，大家自己试试看哦</p>
<p>&nbsp;</p>
<h1>4月17日置顶 新一期【10w份红包】可抽奖</h1>
<p><br>微信搜【富国基金微管家】公众号-点菜单栏【10w份红包】-【10万份红包】进去参加</p>
<p><img alt="亲测0.64元秒到微信 富国基金简单抽最高888元红包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2023/06/19/457d5f56f01f471d2a6da5d6c93e14f1.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:53.58,words:16073},t:"爬取日期: 2025-04-17",y:"a"}}],["/posts/2025-04-18.html",{loader:()=>f(()=>import("./2025-04-18.html-BGVMa9vs.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领取《植物精灵》游戏</h2>
<p><strong>Epic喜加1免费领取《植物精灵》游戏</strong></p>
<p>Epic喜加1《植物精灵》，是一款充满幽默的冒险游戏</p>
<p>有五个在树上生活的小生物。他们的母树受到邪恶寄生虫的侵害。现在这五个好朋友要踏上征程，去拯救母树的最后一颗种籽</p>
<p>非常轻松的游戏，适合铁杆游戏玩家</p>
<p>限时免费领取时间至4月24日23:00，可以不玩但不能没有</p>
<p><br>《植物精灵》</p>
<p><img alt="Epic喜加1免费领取《植物精灵》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/18/017b438bd4a87040caa1c0bc57f53562.jpg" style="width: 740px; *//* height: 412px;" referrerpolicy="no-referrer"></p>`,r:{minutes:48.9,words:14669},t:"爬取日期: 2025-04-18",y:"a"}}],["/posts/2025-04-19.html",{loader:()=>f(()=>import("./2025-04-19.html-DD2hIz9p.js"),[]),meta:{u:1005,e:`
<h2>平和味道市集趣味抽奖 完成签到抽实物</h2>
<p><strong>平和味道市集趣味抽奖 完成签到抽实物</strong></p>
<p>这个活动是非必中的哦，活动今天才开始</p>
<p>完成任务获得100%进度就可以抽奖一次，</p>
<p>活动期间每天都可以参与，中到实物记得填写收货地址</p>
<p>&nbsp;</p>
<h1>4月19日置顶 记得签到抽奖</h1>
<p>微信搜索【平和味道】公众号-底部【宠粉福利】-签到有礼-完成任务获得100%进度就可以获得一次抽奖机会</p>
<p><img alt="平和味道市集趣味抽奖 完成签到抽实物_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/02/7848d001a5c4f5d4eb1e3e8393394f3f.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:28.95,words:8685},t:"爬取日期: 2025-04-19",y:"a"}}],["/posts/2025-04-20.html",{loader:()=>f(()=>import("./2025-04-20.html-C8wmA9l-.js"),[]),meta:{u:1005,e:`
<h2>麦当劳戴头回归 兔费领麦辣鸡翅2个</h2>
<p><strong>麦当劳戴头回归 兔费领麦辣鸡翅2个</strong></p>
<p>这个需要你下载麦当劳APP去领券</p>
<p>然后按照要求戴指定的帽子去门店核销</p>
<p>核销时间需要注意了是4月20号的14:30-17:30</p>
<p>&nbsp;</p>
<h1>4月20日置顶 可以核销了，限今日</h1>
<p>麦当劳APP-首页下拉【戴头回归】点击去领券即可 4月20日到店核销</p>
<p>核销时间需要注意了是4月20号的14:30-17:30</p>
<p><img alt="麦当劳戴头回归 兔费领麦辣鸡翅2个_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/18/53dbaab742ac891bb898b4839958077a.jpg" style="width: 740px; *//* height: 540px;" referrerpolicy="no-referrer"></p>`,r:{minutes:26.81,words:8044},t:"爬取日期: 2025-04-20",y:"a"}}],["/posts/2025-04-21.html",{loader:()=>f(()=>import("./2025-04-21.html-DglPBhjJ.js"),[]),meta:{u:1005,e:`
<h2>高德五一大富翁集卡抽实物/最高888元</h2>
<p><strong>高德五一大富翁集卡抽实物/最高888元</strong></p>
<p>高德地图大富翁五一集卡活动</p>
<p>最多集齐2套卡，可以在4月25日、5月1日各开奖一次</p>
<p>抽现金红包、实物等奖励，现金可提现秒到</p>
<p><br>高德地图APP搜【地图大富翁】-进去参与集卡等开奖</p>
<p><img alt="高德五一大富翁集卡抽实物/最高888元-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/21/c0fbc6336576702ec8272dd897025392.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:47.67,words:14301},t:"爬取日期: 2025-04-21",y:"a"}}],["/posts/2025-04-22.html",{loader:()=>f(()=>import("./2025-04-22.html-BlccPNX7.js"),[]),meta:{u:1005,e:`
<h2>超引力超有礼 必得5元京东E卡</h2>
<p><strong>超引力超有礼 必得5元京东E卡</strong></p>
<p>这个活动是有邀请的哦，自己登录注册就可以领取</p>
<p>新人奖励可领一次 拉新奖励 也只可以领取一次哦</p>
<p>介意有邀请的人可以不用参与的哦</p>
<p>&nbsp;</p>
<h1>4月22日置顶 领到了E卡的，先去实名，28日发放奖励</h1>
<p><br>注册登录可以领取 点击【拉新激励】直接领5e卡</p>
<p>1.使用浏览器/vx扫码 下载APP 发邀请邀请好友下载APP 1人得5E卡 2人20E卡 3人30E卡 5人50Eka&nbsp;</p>`,r:{minutes:42.46,words:12738},t:"爬取日期: 2025-04-22",y:"a"}}],["/posts/2025-04-23.html",{loader:()=>f(()=>import("./2025-04-23.html-TFM46-bM.js"),[]),meta:{u:1005,e:`
<h2>示界为我加电撸实物 亲测折叠收纳+露营车</h2>
<p><strong>示界为我加电撸实物 亲测折叠收纳+露营车</strong></p>
<p>这个活动是需要邀请人的哦，10人专区有很多东西</p>
<p>可以选择，20人专区也有，看你想参与那个专区的活动</p>
<p><span style="color:#FF0000;">支付的1元钱是可以退回的哦，支付完1元点击立即参与</span></p>
<p><span style="color:#FF0000;">去发邀请，邀请10个好友为你加电，你就可以领取实物了。</span></p>
<p>每次实物的数量有限先到先得，每个活动的助力时间是24小时。</p>`,r:{minutes:32.03,words:9609},t:"爬取日期: 2025-04-23",y:"a"}}],["/posts/2025-04-24.html",{loader:()=>f(()=>import("./2025-04-24.html-Cktqmvst.js"),[]),meta:{u:1005,e:`
<h2>亲测10元无门槛团购券 大众点评抽奖</h2>
<p><strong>亲测10元无门槛团购券 大众点评抽奖</strong></p>
<p>大众点评抽奖活动，需要填写一下信息</p>
<p>抽奖不知道是不是必中，想参与的去试试看</p>
<p>亲测中10元无门槛团购券</p>
<p><br>微信打开-跳转大众点评APP-填写完点立即抽奖</p>
<p><img alt="亲测10元无门槛团购券 大众点评抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/24/b7306f369be9c7ddd30dd769e0e04263.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:46.73,words:14019},t:"爬取日期: 2025-04-24",y:"a"}}],["/posts/2025-04-25.html",{loader:()=>f(()=>import("./2025-04-25.html-Du0a7Uho.js"),[]),meta:{u:1005,e:`
<h2>京东健康用户领价值10-30元京豆 亲测秒到</h2>
<p><strong>京东健康用户领价值10-30元京豆 亲测秒到</strong></p>
<p>这个活动大概率是需要京东健康新用户才有的</p>
<p>我老号点击去领取下载京东健康APP没有京豆</p>
<p>一个京东小号，点击去领取下载京东健康登录新用户有</p>
<p>具体大家可以自己参与一下哦，1001京豆大概是10元钱</p>
<p>&nbsp;</p>
<h1>4月25日置顶 亲测卸载京东健康的回归用户有</h1>
<p>注意：<span style="color:#FF0000;">有京东健康APP的先去卸载 之前玩过一次的没有这么多京豆</span></p>`,r:{minutes:52.83,words:15848},t:"爬取日期: 2025-04-25",y:"a"}}],["/posts/2025-04-26.html",{loader:()=>f(()=>import("./2025-04-26.html-CttXF_wC.js"),[]),meta:{u:1005,e:`
<h2>支付宝集豆瓜分100万红包 反馈8.71元</h2>
<p><strong>支付宝集豆瓜分100万红包 反馈8.71元</strong></p>
<p>支付宝游戏中心集豆瓜分红包活动</p>
<p>每天可参与集豆，集齐可在次日10点瓜分100万红包</p>
<p>反馈8.71元红包秒到</p>
<p><br>支付宝-【游戏中心】-进去弹窗/顶部参与集豆</p>
<p><img alt="支付宝集豆瓜分100万红包 反馈8.71元-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/26/a0e3b54cfe05a4fb9beab69ddc4c8e46.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:34.62,words:10386},t:"爬取日期: 2025-04-26",y:"a"}}],["/posts/2025-04-27.html",{loader:()=>f(()=>import("./2025-04-27.html-CtODrinO.js"),[]),meta:{u:1005,e:`
<h2>万佛寺1元佛诞礼 数量有限先到先得</h2>
<p><strong>万佛寺1元佛诞礼 数量有限先到先得</strong></p>
<p>这个活动大家有需要的可以参与一下哦</p>
<p>需要支付1体验可以获得包邮贡面+净水</p>
<p>嘿嘿嘿嘿嘿沾沾喜气。</p>
<p><br>微信打开底部地址 下拉 扫图上二维码 支付1元限量包邮贡面+净水</p>
<p><img alt="万佛寺1元佛诞礼 数量有限先到先得_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/27/256ce81c024b9ff75f21ecced5732815.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:28.85,words:8655},t:"爬取日期: 2025-04-27",y:"a"}}],["/posts/2025-04-28.html",{loader:()=>f(()=>import("./2025-04-28.html-q_8f8qyd.js"),[]),meta:{u:1001,e:`
<h2>正新鸡排汉堡免费送 限量30万份先到先得</h2>
<p><strong>正新鸡排汉堡免费送 限量30万份先到先得</strong></p>
<p>这个活动从5月1日开始截止5月5日，30万张中国鸡排汉堡无门槛免费兑换券全国门店小程序都可以核销</p>
<p>想吃的可以到时候点击推文，点击图片领取即可，现在先给大家发一个活动预告，</p>
<p>到时候活动开始还会置顶提醒大家一起领免费汉堡哦</p>
<p><br>5.1日-5月5日 微信打开底部地址 点击图领免费汉堡 每日限时发放</p>
<p><img alt="正新鸡排汉堡免费送 限量30万份先到先得_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/28/c20553ee05ab561696382d3be835c606.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:6.22,words:1867},t:"爬取日期: 2025-04-28",y:"a"}}],["/posts/2025-04-29.html",{loader:()=>f(()=>import("./2025-04-29.html-DNJszv9R.js"),[]),meta:{u:999,e:`
<h2>交行必得66-132元 亲测0.1缴66.1元电费秒到</h2>
<p><strong>交行必得66-132元 亲测0.1缴66.1元电费秒到</strong></p>
<p>这个活动仅限制交行一类卡用户参与的哦。活动是群友投稿的，他是一类卡我不是。</p>
<p>自己直接参与完成任务可以获得3x66元贴金券也可以只完成第一个任务，然后去邀请好友，你可以获得66元贴金券他也可以获得66元贴金券，</p>
<p>&nbsp;</p>
<p>1.需要交行一类卡 没有的需要到柜台办理</p>
<p>2.注意：需要开通过证券账户如果不确定自己是否开过证券账户或者忘记曾经开过的是哪一家账户。[查询到没有的在报名页面自己开通一个即可]</p>`,r:{minutes:3.97,words:1191},t:"爬取日期: 2025-04-29",y:"a"}}],["/posts/2025-04-30.html",{loader:()=>f(()=>import("./2025-04-30.html-C0HNiu4-.js"),[]),meta:{u:1004,e:`
<h2>美团闪购五一抢100万品牌免单金</h2>
<p><strong>美团闪购五一抢100万品牌免单金</strong></p>
<p>美团闪购又出免单活动了，5月1日开始</p>
<p>每个整点抢品牌免单金，具体金额要明天开始看哦</p>
<p>一共抢100万免单金，记得参与</p>
<p><br>美团APP-闪购-顶部横幅【空包出行 闪购全包】-进去参与</p>
<p><img alt="美团闪购五一抢100万品牌免单金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/30/38fd617080c4da82692c4130a4f5e13c.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:34.27,words:10281},t:"爬取日期: 2025-04-30",y:"a"}}],["/posts/2025-05-01.html",{loader:()=>f(()=>import("./2025-05-01.html-CG2OvnKx.js"),[]),meta:{u:1005,e:`
<h2>移动云盘云端看电影抽0.3-2元支付宝红包 亲测中2元秒到 - 酷猫社区</h2>
<p><span style="color: #ff7b33;"><strong>活动介绍：</strong></span></p> 
<p><span style="text-indent: 2em;">参加移动云盘举办的云端看电影抽支付宝红包活动，这个活动全国三网手机号码都可以参加，通过打开微信进去活动里，登录后可以参加，第一个任务是浏览任务，第二个任务是支付0.1元任务，每个人可以抽2次，有机会中到0.3-2元支付宝红包，小编测试刚中2元支付宝红包。</span></p> 
<p><strong><span style="color: #ff7b33;">活动时间：</span></strong></p>`,r:{minutes:25.93,words:7778},t:"爬取日期: 2025-05-01",y:"a"}}],["/posts/2025-05-02.html",{loader:()=>f(()=>import("./2025-05-02.html-DUf_6fTK.js"),[]),meta:{u:1004,e:`
<h2>京东秒送领星巴克60减30亓券</h2>
<p>
    <a rel="nofollow" target="_blank" href="https://www.qqhjy6.xyz/caiji/data/images/2025-04-23/c468780bef1e2619cbe6e5dc1dbd9db4.jpg"><img src="https://image.smallfawn.work/?url=https://www.qqhjy6.xyz/caiji/data/images/2025-04-23/c468780bef1e2619cbe6e5dc1dbd9db4.jpg" title="京东秒送领星巴克60减30亓券 " alt="京东秒送领星巴克60减30亓券 " referrerpolicy="no-referrer"></a> 
</p>`,r:{minutes:16.65,words:4994},t:"爬取日期: 2025-05-02",y:"a"}}],["/posts/2025-05-03.html",{loader:()=>f(()=>import("./2025-05-03.html-CO7-cqbA.js"),[]),meta:{u:1005,e:`
<h2>移动用户阅后即存 领2元支付宝消费红包秒到</h2>
<p><strong>移动用户阅后即存 领2元支付宝消费红包秒到</strong></p>
<p>先移动用户参加，开启一下阅后即存可领取2元红包</p>
<p>亲测2元支付宝红包秒到，需要去移动云盘APP手动领取</p>
<p>&nbsp;</p>
<h1>5月3日置顶 新一期可参与</h1>
<p><br>移动APP-我的-【账单查询】-右上角【阅后即存】点开启-开启成功领取红包，点击【领取】</p>
<p><img alt="移动用户领2元支付宝消费红包 亲测已领秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2023/11/06/299d84e3a565e925136fe9627ac85d32.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:34.05,words:10215},t:"爬取日期: 2025-05-03",y:"a"}}],["/posts/2025-05-04.html",{loader:()=>f(()=>import("./2025-05-04.html-5AJGrisZ.js"),[]),meta:{u:1005,e:`
<h2>交行碳星荣耀领1-5元支付券 亲测1元支付券秒到</h2>
<p><strong>交行碳星荣耀领1-5元支付券 亲测1元支付券秒到</strong></p>
<p>交行APP碳星荣耀星级权益，每个月可N选2领取</p>
<p>进去就是一星，可领1元支付券，线下扫银联码使用，线上公交地铁等都可以用</p>
<p>可以完成任务升级星级，次月升级，到六星级最高可撸5元支付券+10元高德打车券</p>
<p>亲测1元支付券秒到，这个是直接领取就行了</p>
<p>&nbsp;</p>
<h1>5月4日置顶 新一期，每月领一次</h1>
<p><br>交行APP搜【碳星荣耀】进去-下拉领取权益-点升星任务可以在次月升级星级</p>`,r:{minutes:18.06,words:5418},t:"爬取日期: 2025-05-04",y:"a"}}],["/posts/2025-05-05.html",{loader:()=>f(()=>import("./2025-05-05.html-DCgiiR-J.js"),[]),meta:{u:1005,e:`
<h2>京东金融领5元无门槛支付券 需车牌号报价激活</h2>
<p><strong>京东金融领5元无门槛支付券 需车牌号报价激活</strong></p>
<p>有京东金融APP的都可以去领取一下，5元无门槛的支付券</p>
<p>不过需要填写车牌号报价后激活，90天内都可以去激活使用</p>
<p>介意的就不要激活了，想撸到的就填一下车牌号报价吧</p>
<p>&nbsp;</p>
<h1>5月5日置顶 新一期5.18元支付券</h1>
<p>&nbsp;</p>
<p>京东金融APP-我的-余额-下拉天天赚余额【更多】-下拉有个体验车险报价-报价后领5.18元支付券，返回就能领，黑号领不到</p>`,r:{minutes:28.91,words:8673},t:"爬取日期: 2025-05-05",y:"a"}}],["/posts/2025-05-06.html",{loader:()=>f(()=>import("./2025-05-06.html-Cgr5JT6N.js"),[]),meta:{u:1005,e:`
<h2>2025蛇年纪念币、纪念钞 今晚22点预约抢2亿枚</h2>
<p><strong>2025蛇年纪念币、纪念钞 今晚22点预约抢2亿枚</strong></p>
<p>2025年蛇年纪念币纪念钞预约开启了</p>
<p>今晚22点开始预约抢，10元、20元面值个1亿枚</p>
<p>12月27号可以查看预约结果，预约中签就去银行用现金兑纪念币、纪念钞就行</p>
<p>&nbsp;</p>
<h1>5月6日置顶 二次预约21点开始</h1>
<p>&nbsp;</p>
<p>各大银行APP首页有/搜【纪念钞】</p>
<p><img alt="2025蛇年纪念币、纪念钞 今晚22点预约抢2亿枚-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/12/23/b04edcf75a2fe8514043f35b33897fec.jpg" style="width: 645px; *//* height: 719px;" referrerpolicy="no-referrer"></p>`,r:{minutes:35.28,words:10585},t:"爬取日期: 2025-05-06",y:"a"}}],["/posts/2025-05-07.html",{loader:()=>f(()=>import("./2025-05-07.html-D99zYvAP.js"),[]),meta:{u:1005,e:`
<h2>亲测霸王茶姬20元代金券 添富欢乐星期三</h2>
<p><strong>亲测霸王茶姬20元代金券 添富欢乐星期三</strong></p>
<p>这个活动有正确答案，就是活动页面有点卡</p>
<p>大家有点耐心，填写完答案之后可以点击抽奖</p>
<p>抽奖非必中，可能是红包或者其他奖品按照要求兑换即可</p>
<p><br>微信打开底部地址 登录 答案：c 然后抽奖试试</p>
<p><img alt="亲测霸王茶姬20元代金券 添富欢乐星期三_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/07/ca9c9ee688edfe167bd6a81d6e25eb2b.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:36.14,words:10842},t:"爬取日期: 2025-05-07",y:"a"}}],["/posts/2025-05-08.html",{loader:()=>f(()=>import("./2025-05-08.html-QGEGYUmr.js"),[]),meta:{u:1005,e:`
<h2>平安银行四选亿支付礼0.1撸1元立减金</h2>
<p><strong>平安银行四选亿支付礼0.1撸1元立减金</strong></p>
<p>这个是部分受邀用户可参加，都试试看</p>
<p>简单转账一笔0.1元，可4选1领取奖励</p>
<p>直接领1元微信立减金更好，受邀的去</p>
<p><br>微信打开-跳转平安银行APP-去完成任务转账0.1元-返回领取奖励</p>
<p><img alt="平安银行四选亿支付礼0.1撸1元立减金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/08/e440f125ffe6ccee8be394537150c067.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:26.7,words:8010},t:"爬取日期: 2025-05-08",y:"a"}}],["/posts/2025-05-09.html",{loader:()=>f(()=>import("./2025-05-09.html-TJiXYhwY.js"),[]),meta:{u:1005,e:`
<h2>淘宝周年庆猜价格赢免单 直接到账红包4599</h2>
<p><strong>淘宝周年庆猜价格赢免单 直接到账红包4599</strong></p>
<p>这个活动大家可以参与试试看哦，一个号可以</p>
<p>答对3场，3场答对之后就没有资格参与了哦</p>
<p>猜的金额需要你有历史订单可以选择抵扣。或者邀请好友一起组队抵扣到免单金额</p>
<p>&nbsp;</p>
<h1>5月9日置顶16点开启新一轮</h1>
<p>淘宝搜索【淘宝免单】16点 淘宝兔单先参考 5&nbsp; [自己选一个数字填写]</p>
<p><img alt="淘宝周年庆猜价格赢免单 直接到账红包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/06/a0c5e9b2e611bf63ba5832ecbb673136.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:28.7,words:8611},t:"爬取日期: 2025-05-09",y:"a"}}],["/posts/2025-05-10.html",{loader:()=>f(()=>import("./2025-05-10.html-B5Rqb62s.js"),[]),meta:{u:1005,e:`
<h2>晨视频周五潇洒日抽奖 亲测中霸王丝辣条</h2>
<p><strong>晨视频周五潇洒日抽奖 亲测中霸王丝辣条</strong></p>
<p>晨视频APP参与，每周五可抽奖</p>
<p>每人一次机会，抽奖非必中</p>
<p>反馈中霸王丝辣条，不中的下周可以继续参加</p>
<p>&nbsp;</p>
<h1>5月10日置顶 抽奖试试</h1>
<p>晨视频APP搜【周五潇洒日】-进去抽奖</p>
<p><img alt="晨视频周五潇洒日抽奖 亲测中霸王丝辣条-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/03/28/fff08ea00333b1b5142884c675395286.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:23.98,words:7193},t:"爬取日期: 2025-05-10",y:"a"}}],["/posts/2025-05-11.html",{loader:()=>f(()=>import("./2025-05-11.html-BHkKiKiR.js"),[]),meta:{u:1005,e:`
<h2>自如认证毕业身份抽现金 亲测88元现金</h2>
<p><strong>自如认证毕业身份抽现金 亲测88元现金</strong></p>
<p>这个活动需要你认证毕业生身份获得抽奖机会</p>
<p>最低是抽到6.6元现金，邀请好友认证可以获得更多抽奖机会</p>
<p>我是抽到6.6元现金，群友反馈是抽到88元现金<br>&nbsp;</p>
<h1>5月11日置顶</h1>
<p>1.微信打开下方小程序 23-25年毕业生认证 认证成功后可以抽奖 抽到现金可以提现</p>
<p>mp://s2zlZawWkHSCzZh</p>
<p>2.去下载自如APP-我的钱包 ，提现不秒到 &nbsp;要实名认证-绑卡</p>`,r:{minutes:24.85,words:7456},t:"爬取日期: 2025-05-11",y:"a"}}],["/posts/2025-05-12.html",{loader:()=>f(()=>import("./2025-05-12.html-hdPTZ1g4.js"),[]),meta:{u:1004,e:`
<h2>工行答题领红包 亲测0.8元现金秒到</h2>
<p><strong>工行答题领红包 亲测0.8元现金秒到</strong></p>
<p>工行答题领现金活动，直接自动到账银行卡的</p>
<p>4个答题，每个0.2元，亲测0.8元秒到</p>
<p>奖品数量有限，领完即止</p>
<p><br>微信扫-跳转至工行-下拉4个答题领红包，按顺序B、C、C、B</p>
<p><img alt="工行答题领红包 亲测0.8元现金秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/12/209a1e326b07e07192e82fd20b4e1f22.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:40.53,words:12160},t:"爬取日期: 2025-05-12",y:"a"}}],["/posts/2025-05-13.html",{loader:()=>f(()=>import("./2025-05-13.html-CoMNCId3.js"),[]),meta:{u:1005,e:`
<h2>京东618抽最高25618元红包 晚20点整正式开始</h2>
<p><strong>京东618抽最高25618元红包 晚20点整正式开始</strong></p>
<p>每日抽奖：活动期间用户每日通过页面参与抽奖，可随机获得京东红包、京东超市卡、品类东券、</p>
<p>店铺券或京东支付券，可能获得红包+优惠券、支付券+优惠券、京东超市卡+优惠券等双重利益点，</p>
<p>红包面额最高25618元，仅限京享值150及以上的用户可参与；</p>
<p>&nbsp;</p>
<p>晚上8点整开始领取红包 3次开红包机会</p>
<p>领取红包地址：</p>
<p>1.<a target="_blank" href="https://u.jd.com/r61vJXb">https://u.jd.com/r61vJXb</a></p>`,r:{minutes:29.74,words:8922},t:"爬取日期: 2025-05-13",y:"a"}}],["/posts/2025-05-14.html",{loader:()=>f(()=>import("./2025-05-14.html-BEsYTHAG.js"),[]),meta:{u:1005,e:`
<h2>支付宝领2-10元无门槛打车券 亲测6元</h2>
<p><strong>支付宝领2-10元无门槛打车券 亲测6元</strong></p>
<p>支付宝参与领，部分人可以领取到哦</p>
<p>滴滴、高德打车券都可以试试看概率2-10元无门槛</p>
<p>亲测6元无门槛高德打车券</p>
<p><br>支付宝APP-出行-打车-弹2-10亓无门槛-点切换品牌滴滴出行、高德打车都试试</p>
<p><img alt="支付宝领2-10元无门槛打车券 亲测6元-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/14/49f2fdbbf4c6c843340ded8292e52828.jpg" style="width: 645px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:35.32,words:10596},t:"爬取日期: 2025-05-14",y:"a"}}],["/posts/2025-05-15.html",{loader:()=>f(()=>import("./2025-05-15.html-bzrxNWDj.js"),[]),meta:{u:1005,e:`
<h2>建行开宝箱抽京东券 &nbsp;亲测100元京东电子券</h2>
<p><strong>建行开宝箱抽京东券 &nbsp;亲测100元京东电子券</strong></p>
<p>建行开宝箱抽奖活动，现在是只能抽建行生活京东券</p>
<p>不知道怎么使用来0撸的，可以按照这个步骤来操作</p>
<p>直接0撸3包维达抽纸，注意需要抽到2张3元京东券才可以哦</p>
<p>&nbsp;</p>
<h1>5月15日置顶 抽奖试试</h1>
<p><br>1.建行APP-我的-任务中心-1000积分开宝箱，[这个券也可以自己累积起来购买实物]</p>
<p><img alt="亲测0撸维达抽纸3包 建行开宝箱抽京东券-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/03/04/e2b218dbdc431e58a9b2b406e5a4d449.jpg" style="width: 650px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:36.5,words:10949},t:"爬取日期: 2025-05-15",y:"a"}}],["/posts/2025-05-16.html",{loader:()=>f(()=>import("./2025-05-16.html-B-d9EP4o.js"),[]),meta:{u:1005,e:`
<h2>淘宝618开最高25888元现金 20点必中1.1元</h2>
<p><strong>淘宝618开最高25888元现金 20点必中1.1元</strong></p>
<p>这个活动5月15号上午10点开始，每个人都有一次领取红包的机会</p>
<p>活动截止到5月26日，每天都可以领取一个红包，大家可以收藏口令每天领取一下哦</p>
<p>&nbsp;</p>
<h1>5月16日置顶 20点必中1.1元红包</h1>
<p>掏宝<span style="color:#FF0000;">20点限时不限量必中1.1亓</span><br><span style="color:#FF0000;">20:00-20:15</span><br>必须用这个口令<br><span style="background-color:#ADD8E6;">8$x92vVRdZNWc$:// CZ6144</span></p>`,r:{minutes:44.3,words:13291},t:"爬取日期: 2025-05-16",y:"a"}}],["/posts/2025-05-17.html",{loader:()=>f(()=>import("./2025-05-17.html-DWVzQPuX.js"),[]),meta:{u:1005,e:`
<h2>歪马天天摇骰子免费领好酒 亲测中一等奖</h2>
<p><strong>歪马天天摇骰子免费领好酒 亲测中一等奖</strong></p>
<p>这个活动是非必中的哦，打开有5次抽奖机会</p>
<p>没有中奖的话可以邀请好友助力抽奖试试</p>
<p>中到一等奖，需要自己下单购买有的城市没有歪马没有办法购买</p>
<p><br>微信打开下方地址 登录 参与抽奖即可 认一等奖 二等奖</p>
<p>mp://Y5zwND4o7nMGBXt</p>
<p><img alt="歪马天天摇骰子免费领好酒 亲测中一等奖_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/17/a6cadc434ade7a1995036dc4f19dcff8.jpg" style="width: 650px; *//* height: 691px;" referrerpolicy="no-referrer"></p>`,r:{minutes:34.82,words:10446},t:"爬取日期: 2025-05-17",y:"a"}}],["/posts/2025-05-18.html",{loader:()=>f(()=>import("./2025-05-18.html-D1ktMKf_.js"),[]),meta:{u:1005,e:`
<h2>歪马天天摇骰子免费领好酒 亲测中一等奖</h2>
<p><strong>歪马天天摇骰子免费领好酒 亲测中一等奖</strong></p>
<p>这个活动是非必中的哦，打开有5次抽奖机会</p>
<p>没有中奖的话可以邀请好友助力抽奖试试</p>
<p>中到一等奖，需要自己下单购买有的城市没有歪马没有办法购买</p>
<p>&nbsp;</p>
<h1>5月18日置顶 抽奖试试</h1>
<p><br>微信打开下方地址 登录 参与抽奖即可 认一等奖 二等奖</p>
<p>mp://Y5zwND4o7nMGBXt</p>
<p><img alt="歪马天天摇骰子免费领好酒 亲测中一等奖_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/17/a6cadc434ade7a1995036dc4f19dcff8.jpg" style="width: 650px; *//* height: 691px;" referrerpolicy="no-referrer"></p>`,r:{minutes:33.75,words:10124},t:"爬取日期: 2025-05-18",y:"a"}}],["/posts/2025-05-19.html",{loader:()=>f(()=>import("./2025-05-19.html-DTumGnN7.js"),[]),meta:{u:1005,e:`
<h2>支付宝摸貔貅抽好礼 亲测2元碰一下红包</h2>
<p><strong>支付宝摸貔貅抽好礼 亲测2元碰一下红包</strong></p>
<p>支付宝支付有礼活动，摸貔貅抽奖</p>
<p>可以抽多次，反复把机会用完，概率中实物/支付红包等奖励</p>
<p>亲测中2元碰一下红包等奖励</p>
<p>&nbsp;</p>
<h1>5月19日置顶 今天有2元红包</h1>
<p><br>支付宝搜【支付有礼】-进去小程序-摸貔貅抽好礼</p>
<p><img alt="支付宝摸貔貅抽好礼 亲测2元碰一下红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/18/af8855a4eff2a2e66f7c06a67567a835.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:37.75,words:11326},t:"爬取日期: 2025-05-19",y:"a"}}],["/posts/2025-05-20.html",{loader:()=>f(()=>import("./2025-05-20.html-BnO-Eg36.js"),[]),meta:{u:1005,e:`
<h2>淘宝618开最高25888元现金 20点必中1.1元</h2>
<p><strong>淘宝618开最高25888元现金 20点必中1.1元</strong></p>
<p>这个活动5月15号上午10点开始，每个人都有一次领取红包的机会</p>
<p>活动截止到5月26日，每天都可以领取一个红包，大家可以收藏口令每天领取一下哦</p>
<p>&nbsp;</p>
<p><span style="color:#FF0000;">掏宝必中1.1亓荭包</span><br><span style="color:#FF0000;">20:00-20:15限时不限量</span><br>必须用这个口令<br><span style="background-color:#ADD8E6;">7$xcPjVQMg8kC$:// HU7679</span></p>`,r:{minutes:38.44,words:11531},t:"爬取日期: 2025-05-20",y:"a"}}],["/posts/2025-05-21.html",{loader:()=>f(()=>import("./2025-05-21.html-o1B4sgol.js"),[]),meta:{u:1005,e:`
<h2>菜鸟欢乐赢红包 每日最高赢200元红包</h2>
<p><strong>菜鸟欢乐赢红包 每日最高赢200元红包</strong></p>
<p>这个是菜鸟新出的活动，目前每天都可以参与</p>
<p>完成任务可以抽最高等级的200元无门槛红包</p>
<p>自己可以参与试试看，新出的活动</p>
<p><br>菜鸟APP-首页【欢乐赢红包】点进去 完成任务获得欢乐币-集拼图-每完成一副拼图可以抽红包 每天可以抽最高200元红包</p>
<p><img alt="菜鸟欢乐赢红包 每日最高赢200元红包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/21/0cd1c2856603871d59b5b3e5005862fa.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:51.74,words:15523},t:"爬取日期: 2025-05-21",y:"a"}}],["/posts/2025-05-22.html",{loader:()=>f(()=>import("./2025-05-22.html-YpF5VJXe.js"),[]),meta:{u:1005,e:`
<h2>京东黑色星期五抽超市卡 亲测3.2元秒到</h2>
<p><strong>京东黑色星期五抽超市卡 亲测3.2元秒到</strong></p>
<p>每天都可以参加抽奖，不必中的哦</p>
<p>最高中50元京东超市卡，亲1+1+1+0.1+0.1元秒到</p>
<p>现在有水，速度参加</p>
<p><br>京东APP-京东超市-顶部【黑5抢鸡蛋】-右侧悬浮【黑色星期五】-中间抽超市卡</p>
<p><img alt="京东黑色星期五抽超市卡 亲测3.2元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/22/8254a66c6640a2e7a02f46fb05cc2585.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:47.68,words:14303},t:"爬取日期: 2025-05-22",y:"a"}}],["/posts/2025-05-23.html",{loader:()=>f(()=>import("./2025-05-23.html-COfahRGN.js"),[]),meta:{u:1005,e:`
<h2>Epic喜+2免费领《Sifu》+《巨大灾难》游戏</h2>
<p><strong>Epic喜+2免费领《Sifu》+《巨大灾难》游戏</strong></p>
<p>《Sifu》是一款力求真实的第三人称清版游戏，有着紧密的功夫战斗机制以及电影般的武术动作戏，你将在本作中踏上一段复仇之路</p>
<p>在《巨大灾难》中成为可自定义的巨大怪物，拥有多种技能，灵感来自经典怪兽电影，如《哥斯拉》和《金刚》，以及游戏经典《毁灭战士》。</p>
<p>限时免费领取时间至5月29日23:00</p>
<p>&nbsp;</p>
<p>游戏页面</p>
<p><img alt="Epic喜+2免费领《Sifu》+《巨大灾难》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/23/bf4ed5622abe93d209d05c127adea11e.jpg" style="width: 703px; *//* height: 380px;" referrerpolicy="no-referrer"></p>`,r:{minutes:44.35,words:13304},t:"爬取日期: 2025-05-23",y:"a"}}],["/posts/2025-05-24.html",{loader:()=>f(()=>import("./2025-05-24.html-WXTLtL_j.js"),[]),meta:{u:1005,e:`
<h2>淘宝淘金币玩跳一跳领加抵金</h2>
<p>
    <a rel="nofollow" target="_blank" href="https://www.qqhjy6.xyz/caiji/data/images/2025-05-15/a95afd2ee609fc17c8b3821414616959.jpg"><img src="https://image.smallfawn.work/?url=https://www.qqhjy6.xyz/caiji/data/images/2025-05-15/a95afd2ee609fc17c8b3821414616959.jpg" title="淘宝淘金币玩跳一跳领加抵金 " alt="淘宝淘金币玩跳一跳领加抵金 " referrerpolicy="no-referrer"></a> 
</p>`,r:{minutes:12.14,words:3641},t:"爬取日期: 2025-05-24",y:"a"}}],["/posts/2025-05-25.html",{loader:()=>f(()=>import("./2025-05-25.html-APAzL6OZ.js"),[]),meta:{u:1005,e:`
<h2>支付宝兑换4元券 0元喝蜜雪冰城柠檬水</h2>
<p><strong>支付宝兑换4元券 0元喝蜜雪冰城柠檬水</strong></p>
<p>这个活动大家可以参与一下哦，可以自己到店自取</p>
<p>下单的时候最后支付页面会显示立减，今天不用的话注意一下过期时间</p>
<p><br>支付宝APP-我的-会员-下拉【蜜雪】找到99积分兑换 蜜雪冰城柠檬水4元券-去使用 点单即可</p>
<p><img alt="支付宝兑换4元券 0元喝蜜雪冰城柠檬水_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/25/f8c71ba4dd9cb759e54760b2c9a2737e.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:27.66,words:8298},t:"爬取日期: 2025-05-25",y:"a"}}],["/posts/2025-05-26.html",{loader:()=>f(()=>import("./2025-05-26.html-6fx6gOGk.js"),[]),meta:{u:1005,e:`
<h2>粗暴！亲测10张滴滴出行10元无门槛打车券</h2>
<p><strong>粗暴！亲测10张滴滴出行10元无门槛打车券</strong></p>
<p>这个活动有入口的就可以领，非常粗暴</p>
<p>直接领10张10元无门槛打车券，不限车型</p>
<p>亲测10张10元券秒到，打车直接0元哦</p>
<p>&nbsp;</p>
<h1>5月26日置顶 部分人领5.5折打车券</h1>
<p>&nbsp;</p>
<p>入口更新了：</p>
<p>滴滴出行APP-我的-优惠卡券-顶部【出行卡】-下拉限时出行荭包，每天领一张</p>
<p><img alt="粗暴！亲测10张滴滴出行10元无门槛打车券-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/26/8eb4fad826dd09d1cd82f8e88d8aa9d4.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:31.73,words:9520},t:"爬取日期: 2025-05-26",y:"a"}}],["/posts/2025-05-27.html",{loader:()=>f(()=>import("./2025-05-27.html-Ca-qJll4.js"),[]),meta:{u:1005,e:`
<h2>建行财富会员粽情专属礼抽奖 最高100元立减金</h2>
<p><strong>建行财富会员粽情专属礼抽奖 最高100元立减金</strong></p>
<p>需要白银会员以上才可以参与哦</p>
<p>每人只有一次抽奖机会，可抽立减金、京东专区券、京豆等</p>
<p>非必中的，符合的去抽，反馈100元</p>
<p>&nbsp;</p>
<h1>5月27日置顶</h1>
<p><br>微信打开-直接抽奖</p>
<p><img alt="建行财富会员粽情专属礼抽奖 最高100元立减金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/26/67063dba1b8d8ca2122bb655a2d2d58a.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:48.83,words:14649},t:"爬取日期: 2025-05-27",y:"a"}}],["/posts/2025-05-28.html",{loader:()=>f(()=>import("./2025-05-28.html-B70O34H8.js"),[]),meta:{u:1005,e:`
<h2>美团820-860元撸五粮液 需领券参与</h2>
<p><strong>美团820-860元撸五粮液 需领券参与</strong></p>
<p>需要的可以撸一下，领券后基本是820-860元左右</p>
<p>能优惠200左右，还是不错哦</p>
<p>有反馈是849元撸一瓶</p>
<p><br>①把三个页面的券都领了<br>👉<a target="_blank" href="http://dpurl.cn/B6dqytHz">http://dpurl.cn/B6dqytHz</a><br>👉<a target="_blank" href="http://dpurl.cn/ytsyX47z">http://dpurl.cn/ytsyX47z</a><br>👉<a target="_blank" href="http://dpurl.cn/OL3274Cz">http://dpurl.cn/OL3274Cz</a><br>领券后 美团APP搜五粮液<br>永辉超市 红旗超市 1919 美团名酒行五粮液820-850可以下单<br>这个页面会自动筛选最近的门店</p>`,r:{minutes:49.21,words:14763},t:"爬取日期: 2025-05-28",y:"a"}}],["/posts/2025-05-29.html",{loader:()=>f(()=>import("./2025-05-29.html-Ck1iVbT_.js"),[]),meta:{u:1005,e:`
<h2>淘宝新品惊喜盒子抽奖 亲测0.01元实物</h2>
<p><strong>淘宝新品惊喜盒子抽奖 亲测0.01元实物</strong></p>
<p>这个抽奖试非必中的哦，每天参与抽一次</p>
<p>亲测中0.01元小样实物，现在可以试试看</p>
<p>不中的可以第二天试试</p>
<p><br>淘宝APP搜【新品惊喜盒子】-抽奖试试</p>
<p><img alt="淘宝新品惊喜盒子抽奖 亲测0.01元实物-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/29/25cdaa80b212812df58716e765cc6b23.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:34.97,words:10491},t:"爬取日期: 2025-05-29",y:"a"}}],["/posts/2025-05-30.html",{loader:()=>f(()=>import("./2025-05-30.html-CjL05OLR.js"),[]),meta:{u:1005,e:`
<h2>免费领1提抽纸 简单拉2人助力领取</h2>
<p><strong>免费领1提抽纸 简单拉2人助力领取</strong></p>
<p>这个是纯邀请活动，介意无视</p>
<p>拉2人助力即可领1提抽纸</p>
<p>奖品共计10000份，领完即止</p>
<p><br>微信扫码-立即参与-邀请助力领取</p>
<p><img alt="免费领1提抽纸 简单拉2人助力领取-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/30/85134ecf3364e0c005d4c8aebddc857e.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:41.19,words:12356},t:"爬取日期: 2025-05-30",y:"a"}}],["/posts/2025-05-31.html",{loader:()=>f(()=>import("./2025-05-31.html-CQYV8Twt.js"),[]),meta:{u:1005,e:`
<h2>反馈888元现金秒到 自如认证毕业身份抽现金</h2>
<p><strong>反馈888元现金秒到 自如认证毕业身份抽现金&nbsp;</strong></p>
<p>这个需要你人现在毕业生身份可以抽奖一次</p>
<p>函授本科什么的都可以参与活动哦，符合要求的可以参与一下</p>
<p><br>1.微信打开下方小程序 毕业生认证 认证成功后可以抽奖 抽到现金可以提现</p>
<p>mp://6x6AL6KzvOlPRYc</p>
<p>2.去下载自如APP-我的钱包 ，提现不秒到 &nbsp;要实名认证-绑卡</p>
<p><img alt="自如认证毕业身份抽现金 亲测18.8元现金_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/31/6dc1f61459510001eb45dd9c8452df8a.jpg" style="width: 650px; *//* height: 694px;" referrerpolicy="no-referrer"></p>`,r:{minutes:48.15,words:14444},t:"爬取日期: 2025-05-31",y:"a"}}],["/posts/2025-06-01.html",{loader:()=>f(()=>import("./2025-06-01.html-CjETLaXP.js"),[]),meta:{u:1005,e:`
<h2>一些给人添堵的表情包 需要请收藏</h2>
<p><strong>一些给人添堵的表情包 需要请收藏</strong></p>
<p>喜欢表情包的可以收藏一下哦，</p>
<p>小编找到了一些给人添堵的表情包</p>
<p>可以阴阳怪气一下，但是又不是很过份，</p>
<p align="center"><a target="_blank" href="https://img.iqnew.com/d/file/p/2025/06/01/cf1a3e4135b08fed6fee55b614359861.jpg"><img border="0" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/01/cf1a3e4135b08fed6fee55b614359861.jpg" referrerpolicy="no-referrer"></a></p>`,r:{minutes:45.9,words:13769},t:"爬取日期: 2025-06-01",y:"a"}}],["/posts/2025-06-02.html",{loader:()=>f(()=>import("./2025-06-02.html-ChKaDXYA.js"),[]),meta:{u:1005,e:`
<h2>支付宝兑换4元券 0元喝蜜雪冰城柠檬水</h2>
<p><strong>支付宝兑换4元券 0元喝蜜雪冰城柠檬水</strong></p>
<p>这个活动大家可以参与一下哦，可以自己到店自取</p>
<p>下单的时候最后支付页面会显示立减，今天不用的话注意一下过期时间</p>
<p>&nbsp;</p>
<h1>6月2日置顶&nbsp; 新一期</h1>
<p>支付宝APP-我的-会员-下拉【蜜雪】找到99积分兑换 蜜雪冰城柠檬水4元券-去使用 点单即可</p>
<p><img alt="支付宝兑换4元券 0元喝蜜雪冰城柠檬水_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/25/f8c71ba4dd9cb759e54760b2c9a2737e.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:33.87,words:10162},t:"爬取日期: 2025-06-02",y:"a"}}],["/posts/2025-06-03.html",{loader:()=>f(()=>import("./2025-06-03.html-oO8-3_Nw.js"),[]),meta:{u:1005,e:`
<h2>支付宝看视频领红包 亲测50元红包秒到</h2>
<p><strong>支付宝看视频领红包 亲测50元红包秒到</strong></p>
<p>这个活动部分人可以参与，有的人没有入口</p>
<p>想获得的可以过两天再去看看，因为我也是</p>
<p>第一次去看的时候没有入口第二次去看就有入口了</p>
<p>&nbsp;</p>
<h1>6月3日置顶 新一轮</h1>
<p><br>支付宝APP-底部【视频】右侧【红包】图标点进去 看看有无完成任务领10元红包-有的话去完成可以获得10元支付宝无门槛红包</p>
<p>注意如果今天不够提取10元就明天继续参与即可</p>
<p><span style="color:#FF0000;">如果转一圈基本都是0.01元的，去试试直播间下2单，再退掉，开的红包可能会变大</span></p>`,r:{minutes:57.88,words:17364},t:"爬取日期: 2025-06-03",y:"a"}}],["/posts/2025-06-04.html",{loader:()=>f(()=>import("./2025-06-04.html-BUxKE4Ch.js"),[]),meta:{u:1005,e:`
<h2>淘宝闪购新人领18元红包 0.01元喝奶茶</h2>
<p><strong>淘宝闪购新人领18元红包 0.01元喝奶茶</strong></p>
<p>淘宝闪购的新用户可以领取18元无门槛红包</p>
<p>不是新人的也试试看，应该也有随机红包</p>
<p>亲测18元无门槛红包，0.01元喝奶茶</p>
<p><br>淘宝扫码-领取18元无门槛红包-闪购页面点外卖立减18元</p>
<p><img alt="淘宝闪购新人领18元红包 0.01元喝奶茶-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/04/328c04b05e9cbd48890c98887f641523.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:46.38,words:13914},t:"爬取日期: 2025-06-04",y:"a"}}],["/posts/2025-06-05.html",{loader:()=>f(()=>import("./2025-06-05.html-Xx4r4Qbf.js"),[]),meta:{u:1005,e:`
<h2>淘宝618开最高25888元现金 20点必中1.1元</h2>
<p><strong>淘宝618开最高25888元现金 20点必中1.1元</strong></p>
<p>这个活动5月15号上午10点开始，每个人都有一次领取红包的机会</p>
<p>活动截止到5月26日，每天都可以领取一个红包，大家可以收藏口令每天领取一下哦</p>
<p>&nbsp;</p>
<h1>20点加码 先用完机会</h1>
<p><span style="color:#FF0000;">淘宝20点必得1.1亓荭包</span><br>20:00-20:15限时不限量<br>必须用这个口令<br><span style="background-color:#ADD8E6;">8$AFKWVplmbSW$:// CA1710</span><br><br>复制下方淘口令 淘宝打开 10点抢红包 淘宝搜索口令：福利发发发33303</p>`,r:{minutes:52.12,words:15635},t:"爬取日期: 2025-06-05",y:"a"}}],["/posts/2025-06-06.html",{loader:()=>f(()=>import("./2025-06-06.html-D7mEYRxk.js"),[]),meta:{u:1005,e:`
<h2>学生用户99元开通两年京东PLUS会员</h2>
<p><strong>学生用户99元开通两年京东PLUS会员</strong></p>
<p>这个需要是学生用户才可以哦</p>
<p>符合的直接99元开买一送一，京东PLUS会员两年</p>
<p>需要的可以开通一下，比较划算的价格</p>
<p><br>进3次，可叠加<br><a target="_blank" href="https://u.jd.com/3rlyyaq">https://u.jd.com/3rlyyaq</a><br>1、非plus 学笙开1年送1年<br><a target="_blank" href="https://u.jd.com/36lR1dt">https://u.jd.com/36lR1dt</a><br>2、开完来拿30~40亓红包<br><a target="_blank" href="https://u.jd.com/3Dlj6Ug">https://u.jd.com/3Dlj6Ug</a><br>3、再拿7张15-10亓外卖券<br><a target="_blank" href="https://u.jd.com/31l3XGX">https://u.jd.com/31l3XGX</a><br>4、再送24积fen 可自用或出<br>可换家政/洗衣/寄件等服务<br><a target="_blank" href="https://u.jd.com/3alUOej">https://u.jd.com/3alUOej</a><br>-<br>注意：学生会员买一送一<br>但是没有开卡礼</p>`,r:{minutes:24.87,words:7460},t:"爬取日期: 2025-06-06",y:"a"}}],["/posts/2025-06-07.html",{loader:()=>f(()=>import("./2025-06-07.html-BKFSqVmP.js"),[]),meta:{u:1005,e:`
<h2>饿了么领18.8元无门槛爆红包 需5人助力</h2>
<p><strong>饿了么领18.8元无门槛爆红包 需5人助力</strong></p>
<p>这个是邀请活动，介意无视吧</p>
<p>上海地区直接参加，其他地区收货地址选择上海也可以</p>
<p>亲测18.8元无门槛红包到账，今日有效</p>
<p><br>饿了么APP-右上角地区先选择【上海】任意地区</p>
<p>首页横幅进去-右下角悬浮【助力必得18.8】-拉5人</p>
<p><img alt="饿了么领18.8元无门槛爆红包 需5人助力-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/07/6bf7c9c04c423b15ce2365619163f93d.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:44.33,words:13300},t:"爬取日期: 2025-06-07",y:"a"}}],["/posts/2025-06-08.html",{loader:()=>f(()=>import("./2025-06-08.html-nFrxlf9E.js"),[]),meta:{u:1005,e:`
<h2>淘宝有大家抽奖 亲测中66元无门槛红包</h2>
<p><strong>淘宝有大家抽奖 亲测中66元无门槛红包</strong></p>
<p>这个活动每天都可以参与，有很多次抽奖机会</p>
<p>大家可以参与抽奖试试看，认实物和无门槛红包</p>
<p>&nbsp;</p>
<p>淘宝APP搜【淘宝有大家】点赞10次可抽奖一次，可以点赞20次+多次完成任务 抽奖</p>
<p><img alt="淘宝有大家抽奖 亲测中66元无门槛红包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/08/b16265288957901f662e4d95a28be19d.jpg" style="width: 740px; *//* height: 532px;" referrerpolicy="no-referrer"></p>`,r:{minutes:41.87,words:12561},t:"爬取日期: 2025-06-08",y:"a"}}],["/posts/2025-06-09.html",{loader:()=>f(()=>import("./2025-06-09.html-BWyPSX10.js"),[]),meta:{u:1005,e:`
<h2>反馈中耳机 京东状元能量塔抽实物</h2>
<p><strong>反馈中耳机 京东状元能量塔抽实物</strong></p>
<p>京东参与抽奖，每天完成任务用能量可抽奖</p>
<p>也可以选择不抽奖，累计获得23200能量可直接兑换一个实物</p>
<p>反馈抽中耳机、药箱，可以试试看</p>
<p><br>复制京东打开-下拉任务抽</p>
<p>16:/京东健康预祝高考学子“有分必得”，复制口令前往京东APP做任务获得状元能量，抽取数码大奖！！￥ZDa6i9Kc9rCn￥ MF3390 ，↪🐬▢Doōδng</p>
<p><img alt="反馈中耳机 京东状元能量塔抽实物-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/09/7790bb6cf1e887abebf6b6e43d05e975.jpg" style="width: 645px; *//* height: 558px;" referrerpolicy="no-referrer"></p>`,r:{minutes:39.94,words:11983},t:"爬取日期: 2025-06-09",y:"a"}}],["/posts/2025-06-10.html",{loader:()=>f(()=>import("./2025-06-10.html-CoJOtt8O.js"),[]),meta:{u:1005,e:`
<h2>京东必得15元无门槛外卖券 好友互赠都可领</h2>
<p><strong>京东必得15元无门槛外卖券 好友互赠都可领</strong></p>
<p>这个是直接和好友互赠都可以领取哦</p>
<p>最多可以分享3个好友领取15元无门槛外卖券，领去自己就可以获取15元无门槛外卖券</p>
<p>等于奖励是一样的，15元分别是15-12元外卖、4-3元叠加，直接一起使用就是无门槛哦</p>
<p><br>京东扫码-送好友1张-分享好友领取都可获得</p>
<p><img alt="京东必得15元无门槛外卖券 好友互赠都可领-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/10/6191204968c2a5f81cc1c3ac7a8728af.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:48.58,words:14574},t:"爬取日期: 2025-06-10",y:"a"}}],["/posts/2025-06-11.html",{loader:()=>f(()=>import("./2025-06-11.html-BlKFApSl.js"),[]),meta:{u:1005,e:`
<h2>亲测必得5元现金 京东金融下载APP即可</h2>
<p><strong>亲测必得5元现金 京东金融下载APP即可</strong></p>
<p>这个活动大家可以参与试试看哦，我是得到了5.18元点击提现了</p>
<p>提现在24小时内到账，下载APP之后登录，然后领取奖励就可以了哦</p>
<p>这个现金是直接可以提现的哦，还是不错的</p>
<p>&nbsp;</p>
<h1>6月11日置顶 有2元任务更新</h1>
<p>&nbsp;</p>
<p>京东金融-签到-赚钱任务-刷新了一个任务赠送亲密卡得2亓</p>
<p><img alt="" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/21/32db53ffd5f7c2f06921e94269e81fe0.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:47.18,words:14154},t:"爬取日期: 2025-06-11",y:"a"}}],["/posts/2025-06-12.html",{loader:()=>f(()=>import("./2025-06-12.html-DQCE3FmR.js"),[]),meta:{u:1005,e:`
<h2>反馈100元立减金 建行浏览网点服务抽立减金</h2>
<p><strong>反馈100元立减金 建行浏览网点服务抽立减金&nbsp;</strong></p>
<p>建行任务中心新盲盒活动，都能参加</p>
<p>简单浏览任务抽最高100元微信立减金</p>
<p>反馈中100元、10元微信立减金，奖品有很多，非必中哦</p>
<p>&nbsp;</p>
<h1>6月12日置顶 新一期，部分人有</h1>
<p><br>建行APP-任务中心-浏览网点服务、体验社保医保、查看电子回单试试</p>
<p><img alt="反馈100元立减金 建行浏览网点服务抽立减金&nbsp;-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/12/3975f3860fed4de5637a653819da80f1.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:48.89,words:14667},t:"爬取日期: 2025-06-12",y:"a"}}],["/posts/2025-06-13.html",{loader:()=>f(()=>import("./2025-06-13.html-ythv7f9n.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领取《双点医院》游戏</h2>
<p><strong>Epic喜加1免费领取《双点医院》游戏</strong></p>
<p>Epic喜加1《双点医院》，一款休闲模拟游戏</p>
<p>打造一流医院、治疗稀奇古怪的病症、管理各种棘手的医护人员，将你刚起步的医疗机构规模扩大至整个双点县</p>
<p>限时免费领取时间至6月19日23:00</p>
<p><br>《双点医院》</p>
<p><img alt="Epic喜加1免费领取《双点医院》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/13/82c120e43b2faba68c2c822ec8d1f51c.jpg" style="width: 740px; *//* height: 417px;" referrerpolicy="no-referrer"></p>`,r:{minutes:42.91,words:12874},t:"爬取日期: 2025-06-13",y:"a"}}],["/posts/2025-06-14.html",{loader:()=>f(()=>import("./2025-06-14.html-DnHdA2UQ.js"),[]),meta:{u:1005,e:`
<h2>淘金币618赢10亿 亲8.26元加抵金+5000淘金币</h2>
<p><strong>淘金币618赢10亿 亲8.26元加抵金+5000淘金币</strong></p>
<p>这个活动大家可以参与一下哦，可以叠加淘宝金币商品</p>
<p>一起抵扣，到时候可以价格更低哦，活动有直接入口</p>
<p>大家自己完成任务去参与即可，抵扣金可以在6月15-20日使用</p>
<p>这个可以互助，帮忙助力也会增加体力</p>
<p>亲8.26元加抵金+5000淘金币</p>
<p>&nbsp;</p>
<h1>6月14日置顶 今日最后一天，明天领奖</h1>
<p>&nbsp;</p>
`,r:{minutes:34.12,words:10235},t:"爬取日期: 2025-06-14",y:"a"}}],["/posts/2025-06-15.html",{loader:()=>f(()=>import("./2025-06-15.html-CECeLCOL.js"),[]),meta:{u:1005,e:`
<h2>交行必得66-132元 亲测0.1缴66.1元电费秒到</h2>
<p><strong>交行必得66-132元 亲测0.1缴66.1元电费秒到</strong></p>
<p>这个活动仅限制交行一类卡用户参与的哦。活动是群友投稿的，他是一类卡我不是。</p>
<p>自己直接参与完成任务可以获得3x66元贴金券也可以只完成第一个任务，然后去邀请好友，你可以获得66元贴金券他也可以获得66元贴金券，</p>
<p>&nbsp;</p>
<p>1.需要交行一类卡 没有的需要到柜台办理</p>
<p>2.注意：需要开通过证券账户如果不确定自己是否开过证券账户或者忘记曾经开过的是哪一家账户。[查询到没有的在报名页面自己开通一个即可]</p>`,r:{minutes:33.68,words:10103},t:"爬取日期: 2025-06-15",y:"a"}}],["/posts/2025-06-16.html",{loader:()=>f(()=>import("./2025-06-16.html-BEx6yzfC.js"),[]),meta:{u:1005,e:`
<h2>亲测1.2元秒到 贝壳找房抽红包即可</h2>
<p><strong>亲测1.2元秒到 贝壳找房抽红包即可</strong></p>
<p>这个活动里面有3个抽奖，大家都可以参与试试</p>
<p>抽到现金红包，实名绑卡就可以提现了，我提现是秒到的</p>
<p><br>1.微信打开下方小程序 下拉有3个抽红包</p>
<p>mp://bTuCxbpCQI1vsrw</p>
<p>2.贝壳找房APP-我的-钱包-现金奖励-提现即可</p>
<p><img alt="亲测1.2元秒到 贝壳找房抽红包即可_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/16/53c34c159b3b1da066e924bfddf09a86.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:39.26,words:11777},t:"爬取日期: 2025-06-16",y:"a"}}],["/posts/2025-06-17.html",{loader:()=>f(()=>import("./2025-06-17.html-CtvP1pcU.js"),[]),meta:{u:1005,e:`
<h2>王者验证回归资格领2-188元现金 亲测2元秒到</h2>
<p><strong>王者验证回归资格领2-188元现金 亲测2元秒到</strong></p>
<p>这个活动需要你验证回归资格，有资格的话领取</p>
<p>回归券然后开红包即可，领到的微信红包会秒到的哦</p>
<p>&nbsp;</p>
<h1>6月17日置顶 新一期2个2元</h1>
<p><br>微信打开底部地址 验证回归资格 领取回归券-右上角与游戏-打一把火焰山-等几分钟返回领取</p>
<p><img alt="王者验证回归资格领2-188元现金 亲测2元秒到_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/14/6250aabefcf2abf1466bcc2f113317b8.jpg" style="width: 650px; *//* height: 657px;" referrerpolicy="no-referrer"></p>`,r:{minutes:64.68,words:19405},t:"爬取日期: 2025-06-17",y:"a"}}],["/posts/2025-06-18.html",{loader:()=>f(()=>import("./2025-06-18.html-DNR_3xM8.js"),[]),meta:{u:1005,e:`
<h2>亲测1元撸包邮核桃 建行善融领10元无门槛券</h2>
<p><strong>亲测1元撸包邮核桃 建行善融领10元无门槛券</strong></p>
<p>建行APP参与领取10元无门槛券，每日6点开抢</p>
<p>活动页面所有商品1元购，我刚领到1元撸了核桃</p>
<p>晚点可能没了哦，没抢到的第二天设置闹钟去领取一下</p>
<p>&nbsp;</p>
<h1>6月18日置顶 新一期 多个整点抢券</h1>
<p>跳建行APP领取10元无门槛-去购物下拉所有商品都是1元，自己挑选 整点抢</p>
<p><img alt="亲测1元撸包邮核桃 建行善融领10元无门槛券-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2023/05/18/399603b835f0c8b28e9cbeb7fe9b77e1.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:78.09,words:23428},t:"爬取日期: 2025-06-18",y:"a"}}],["/posts/2025-06-19.html",{loader:()=>f(()=>import("./2025-06-19.html-CLmNdDv9.js"),[]),meta:{u:1005,e:`
<h2>绝味签到打卡 到店免费领鱼豆腐+鸭翅中</h2>
<p><strong>绝味签到打卡 到店免费领鱼豆腐+鸭翅中</strong></p>
<p>这个活动是可以通过完成任务获得补签机会的</p>
<p>补签+今天签到正好可以领5个蜜汁鸭翅</p>
<p>需要到店领取，有积分的可以赶紧兑换签到机会领取一下</p>
<p>&nbsp;</p>
<h1>6月19日置顶 记得打卡哦</h1>
<p>微信打开下方小程序 3天 6个鱼豆腐、7天 6个鱼豆腐、14天3个鸭翅中、20天6个鱼豆腐、24天6个鱼豆腐、28天3个鸭翅中</p>
<p>mp://ao4BhtmfDJUDuhG</p>
<p><img alt="绝味签到打卡 到店领5-10个蜜汁鸭翅&nbsp;_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/02/23/68257e3ef3f6fb21ed74457c883f089b.jpg" style="width: 740px; *//* height: 540px;" referrerpolicy="no-referrer"><br><br>&nbsp;<br>活动地址：复制下方地址 微信发给任意好友打开即可</p>`,r:{minutes:44.96,words:13487},t:"爬取日期: 2025-06-19",y:"a"}}],["/posts/2025-06-20.html",{loader:()=>f(()=>import("./2025-06-20.html-DLODev-7.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领取《The Operator》游戏</h2>
<p><strong>Epic喜加1免费领取《The Operator》游戏</strong></p>
<p>Epic喜加1《The Operator》，叙事独立解谜游戏</p>
<p>作为新任接线员，你的职责是协助外勤特工调查错综复杂的罪案</p>
<p>显示免费领取时间至6月26日23点，可以不玩但不能没有</p>
<p>&nbsp;</p>
<p>《The Operator》</p>
<p><img alt="Epic喜加1免费领取《The Operator》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/20/5c2e3d6fd8961a1d56d8a2161b5d0b70.jpg" style="width: 740px; *//* height: 400px;" referrerpolicy="no-referrer"></p>`,r:{minutes:43.03,words:12909},t:"爬取日期: 2025-06-20",y:"a"}}],["/posts/2025-06-21.html",{loader:()=>f(()=>import("./2025-06-21.html-B_-1z4mZ.js"),[]),meta:{u:1005,e:`
<h2>红蓝黄外卖红包优惠合集 包含0撸外卖</h2>
<p><strong>红蓝黄外卖红包优惠合集 包含0撸外卖</strong></p>
<p>红蓝黄外卖之争每天都在进行着</p>
<p>有新的优惠小编也会及时的补充上</p>
<p>快来和我一起赶上00后福利吧</p>
<p><img alt="红蓝黄外卖红包优惠合集 包含0撸外卖_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/03/127726c3f45d85a6c1a9965312d10eae.jpg" style="width: 650px; *//* height: 390px;" referrerpolicy="no-referrer"></p>`,r:{minutes:35.05,words:10514},t:"爬取日期: 2025-06-21",y:"a"}}],["/posts/2025-06-22.html",{loader:()=>f(()=>import("./2025-06-22.html-CKLMNPkz.js"),[]),meta:{u:1005,e:`
<h2>歪马天天摇骰子免费领好酒 亲测中一等奖</h2>
<p><strong>歪马天天摇骰子免费领好酒 亲测中一等奖</strong></p>
<p>这个活动是非必中的哦，打开有5次抽奖机会</p>
<p>没有中奖的话可以邀请好友助力抽奖试试</p>
<p>中到一等奖，需要自己下单购买有的城市没有歪马没有办法购买</p>
<p>&nbsp;</p>
<h1>6月22日置顶 抽奖试试</h1>
<p><br>微信打开下方地址 登录 参与抽奖即可 认一等奖 二等奖</p>
<p>mp://Osz1w4zOfckwVLf</p>
<p><img alt="歪马天天摇骰子免费领好酒 亲测中一等奖_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/17/a6cadc434ade7a1995036dc4f19dcff8.jpg" style="width: 650px; *//* height: 691px;" referrerpolicy="no-referrer"></p>`,r:{minutes:38.36,words:11508},t:"爬取日期: 2025-06-22",y:"a"}}],["/posts/2025-06-23.html",{loader:()=>f(()=>import("./2025-06-23.html-CaFl95uy.js"),[]),meta:{u:1005,e:`
<h2>支付宝99积分兑换2元中行转账立减金 满2000-2元</h2>
<p><strong>支付宝99积分兑换2元中行转账立减金 满2000-2元</strong></p>
<p>有中行的可以兑换一下，支付宝99积分可兑</p>
<p>领的是2000-2元转账立减金，需要的兑换一下</p>
<p>奖品数量有限，兑完即止</p>
<p>&nbsp;</p>
<h1>6月23日置顶&nbsp;</h1>
<p><br>支付宝-我的-支付宝会员，搜【中行】，99积分兑换</p>
<p><img alt="支付宝99积分兑换2元中行转账立减金 满2000-2元-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/18/c716917586423953167f3e972b099f7a.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:59.27,words:17780},t:"爬取日期: 2025-06-23",y:"a"}}],["/posts/2025-06-24.html",{loader:()=>f(()=>import("./2025-06-24.html-DLCXDwLq.js"),[]),meta:{u:1005,e:`
<h2>免费领青桔电单车7天3次骑行卡 带话题发布领取</h2>
<p><strong>免费领青桔电单车7天3次骑行卡 带话题发布领取</strong></p>
<p>需要带话题发布抖音、小红书、微博任意平台</p>
<p>上传审核后领取到账，滴滴青桔7天3次骑行卡</p>
<p>奖品共计1万份，领完即止</p>
<p>&nbsp;</p>
<p>复制发送给微信任意好友打开<br>mp://eDAzSmilsNHv47B</p>
<p>按规则去发布-复制链接截图上传</p>
<p><img alt="免费领青桔电单车7天3次骑行卡 带话题发布领取-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/24/4a118957c1c06880d7dcaf8f8f024cd4.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:42.74,words:12822},t:"爬取日期: 2025-06-24",y:"a"}}],["/posts/2025-06-25.html",{loader:()=>f(()=>import("./2025-06-25.html-C3YTmriF.js"),[]),meta:{u:1005,e:`
<h2>支付宝49积分兑换10000元体验金 先到先得</h2>
<p><strong>支付宝49积分兑换10000元体验金 先到先得</strong></p>
<p>支付宝积分够的可以兑换一下</p>
<p>10000元余利宝体验金，体验完收益可以提现到账</p>
<p>亲测已兑换，数量有限兑完即止</p>
<p><br>支付宝-我的-支付宝会员-搜【余利宝】，49积分兑换，去使用即可</p>
<p><img alt="支付宝49积分兑换10000元体验金 先到先得-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/25/c17afe239c34da358456eb9173930691.jpg" style="width: 740px; *//* height: 549px;" referrerpolicy="no-referrer"></p>`,r:{minutes:39.33,words:11798},t:"爬取日期: 2025-06-25",y:"a"}}],["/posts/2025-06-26.html",{loader:()=>f(()=>import("./2025-06-26.html-f3lb2Qi4.js"),[]),meta:{u:1005,e:`
<h2>联通抽腾讯VIP等奖励 亲测中腾讯VIP会员</h2>
<p><strong>联通抽腾讯VIP等奖励 亲测中腾讯VIP会员</strong></p>
<p>这个活动三网都可以参与，但是联通用户的中奖率会比较高一些</p>
<p>大家可以参与试试看，如果登录的使用显示异常 就叉掉 重新进入活动签到抽、</p>
<p>&nbsp;</p>
<h1>6月26日置顶 抽奖有水</h1>
<p><br>微信打开底部地址 登录 下拉签到抽奖试试</p>
<p><img alt="联通抽腾讯VIP等奖励 亲测中腾讯VIP会员_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/25/624cfd0a2fa94eb29a94d5050dbe56fa.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:36.9,words:11069},t:"爬取日期: 2025-06-26",y:"a"}}],["/posts/2025-06-27.html",{loader:()=>f(()=>import("./2025-06-27.html-DbG3EIqg.js"),[]),meta:{u:1005,e:`
<h2>工行幸福摩天轮抽i豆 亲测8000工银i豆</h2>
<p><strong>工行幸福摩天轮抽i豆 亲测8000工银i豆</strong></p>
<p>工行这个活动大家可以参与试试，完成任务有抽奖机会</p>
<p>邀请好友助力也有抽奖机会，中到时候可以累积起来兑换E卡或者微信立减金</p>
<p>&nbsp;</p>
<h1>6月27日置顶 新一个抽奖</h1>
<p>&nbsp;</p>
<p>微信打开底部地址 跳转工行APP完成任务抽i豆</p>
<p><img alt="工行幸福摩天轮抽i豆 亲测8000工银i豆_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/19/1761e55344d67ffa0dd05bff681a2710.jpg" style="width: 320px; *//* height: 664px;" referrerpolicy="no-referrer"></p>`,r:{minutes:31.15,words:9344},t:"爬取日期: 2025-06-27",y:"a"}}],["/posts/2025-06-28.html",{loader:()=>f(()=>import("./2025-06-28.html--Mg69Z4U.js"),[]),meta:{u:1005,e:`
<h2>亲测10元秒到&nbsp;东方财富投资奇兵瓜分100万红包</h2>
<p><strong>亲测10元秒到&nbsp;东方财富投资奇兵瓜分100万红包</strong></p>
<p>白号基本必得10元以上，这个要看你第一局游戏是不是几块钱的红包</p>
<p>如果开到几块钱就可以玩，如果开到0.01元就是黑号直接换号</p>
<p>很简单就拿到10元，亲测10元现金红包</p>
<p><br>东方财富APP-左上角人物图标-下拉【投资奇兵】进去-玩游戏-做任务得游戏次数</p>
<p><img alt="亲测10元现金 东方财富投资奇兵瓜分100万红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/28/492e4afda74e8b305370ac8824f7ecac.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:28.47,words:8540},t:"爬取日期: 2025-06-28",y:"a"}}],["/posts/2025-06-29.html",{loader:()=>f(()=>import("./2025-06-29.html-B_Pgf00k.js"),[]),meta:{u:1005,e:`
<h2>美团1分钱爆品包邮到家 亲测撸江中乳酸菌片</h2>
<p><strong>美团1分钱爆品包邮到家 亲测撸江中乳酸菌片</strong></p>
<p>这个活动都是可以参与的哦，大家可以选择自己喜欢的实物</p>
<p>0.01元下单包邮到家哦，我选择的是江中乳酸菌片</p>
<p>&nbsp;</p>
<h1>6月29日置顶 又能0.01元买了</h1>
<p><br>美团APP-首页直接搜【美团保】-顶部横幅【1分钱爆品包邮到家】点进去 顶部有很多【0.01亓的实雾】选择一个点击购可0.01元包邮 我选择是 江中乳酸菌片</p>
<p><img alt="美团1分钱爆品包邮到家 亲测撸江中乳酸菌片_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/06/49473d08cc76dbd4957f7f8a3662d58b.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:28.99,words:8696},t:"爬取日期: 2025-06-29",y:"a"}}],["/posts/2025-06-30.html",{loader:()=>f(()=>import("./2025-06-30.html-Ds4sxa-q.js"),[]),meta:{u:1005,e:`
<h2>红蓝黄外卖红包优惠合集 包含0撸外卖</h2>
<p><strong>红蓝黄外卖红包优惠合集 包含0撸外卖</strong></p>
<p>红蓝黄外卖之争每天都在进行着</p>
<p>有新的优惠小编也会及时的补充上</p>
<p>快来和我一起赶上00后福利吧</p>
<p><img alt="红蓝黄外卖红包优惠合集 包含0撸外卖_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/03/127726c3f45d85a6c1a9965312d10eae.jpg" style="width: 650px; *//* height: 390px;" referrerpolicy="no-referrer"></p>`,r:{minutes:30.43,words:9129},t:"爬取日期: 2025-06-30",y:"a"}}],["/posts/2025-07-01.html",{loader:()=>f(()=>import("./2025-07-01.html-Ddyae_Dz.js"),[]),meta:{u:1005,e:`
<h2>工行消费季 抽最高100500个工银i豆</h2>
<p><strong>工行消费季 抽最高100500个工银i豆</strong></p>
<p>这个活动仅此一天，全国工行用户都可以参与</p>
<p>活动是非必中的哦，中到之后需要点击确认领取</p>
<p>奖励才会到账，奖励累积起来可以兑换E卡 立减金等奖励</p>
<p>&nbsp;</p>
<h1>7月1日置顶 抽奖试试</h1>
<p>工行APP搜【工行消费季】抽i豆</p>
<p><img alt="工行消费季 抽最高100500个工银i豆_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/17/cc6c2f9eba147b8ee0b45fb9451bb125.jpg" style="width: 650px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:52.14,words:15643},t:"爬取日期: 2025-07-01",y:"a"}}],["/posts/2025-07-02.html",{loader:()=>f(()=>import("./2025-07-02.html-D7OXug_p.js"),[]),meta:{u:1005,e:`
<h2>亲测10元立减金 建行查明细抽最高100元立减金</h2>
<p><strong>亲测10元立减金 建行查明细抽最高100元立减金</strong></p>
<p>建行查余额明细抽奖任务，现在部分人可以参加</p>
<p>后续可能都可以参加，能参与的先试试看</p>
<p>反馈中10元微信立减金秒到</p>
<p>&nbsp;</p>
<h1>7月2日置顶 抽奖有水</h1>
<p><br>微信扫码打开-底部横幅【查余额查明细】-跳转建行APP-完成任务抽</p>
<p>也可以试试建行APP-我的-任务中心-看看有无【查余额查明细】任务</p>
<p><img alt="亲测10元立减金 建行查明细抽最高100元立减金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/20/b2d38992a0e5ad7982b34809a14e7cb3.jpg" style="width: 650px; *//* height: 694px;" referrerpolicy="no-referrer"></p>`,r:{minutes:51.53,words:15459},t:"爬取日期: 2025-07-02",y:"a"}}],["/posts/2025-07-03.html",{loader:()=>f(()=>import("./2025-07-03.html-DbxnXfAP.js"),[]),meta:{u:1005,e:`
<h2>小红书跑进夏夜抽实物 反馈中运动短裤</h2>
<p><strong>小红书跑进夏夜抽实物 反馈中运动短裤</strong></p>
<p>这个抽奖是非必中的哦，都可以试试看</p>
<p>简单任务可领积分，10积分抽实物</p>
<p>反馈中运动短裤1条、冰箱贴套组等</p>
<p><br>微信打开-跳转小红书-下拉任务领积分-抽奖</p>
<p><img alt="小红书跑进夏夜抽实物 反馈中运动短裤-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/03/177e0fa5f6b6fd20a32547dfc8f398db.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:55.66,words:16697},t:"爬取日期: 2025-07-03",y:"a"}}],["/posts/2025-07-04.html",{loader:()=>f(()=>import("./2025-07-04.html-CTnbUGyv.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加2免费领取《Figment》等游戏</h2>
<p><strong>Epic喜加2免费领取《Figment》等游戏</strong></p>
<p>Epic喜加2《Figment》+《背包英雄》</p>
<p>《Figment》是一款动作冒险游戏，这里的独特超现实世界充满了音乐、幽默和多层叙事，等待你来探索</p>
<p>《背包英雄》是一款Roguelike库存管理游戏！收集稀有物品，整理背包排列，消灭拦路敌人！</p>
<p>限时免费领取时间至7月10日23:00</p>
<p><br>游戏画面</p>
<p><img alt="Epic喜加2免费领取《Figment》等游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/04/19d9bed359a141aa8ebe0dd423d29938.jpg" style="width: 740px; *//* height: 412px;" referrerpolicy="no-referrer"></p>`,r:{minutes:38.49,words:11547},t:"爬取日期: 2025-07-04",y:"a"}}],["/posts/2025-07-05.html",{loader:()=>f(()=>import("./2025-07-05.html-CPflQxfH.js"),[]),meta:{u:1005,e:`
<h2>淘宝闪购领16-16红包 亲测0.2撸5瓶饮料</h2>
<p><strong>淘宝闪购领16-16红包 亲测0.2撸5瓶饮料</strong></p>
<p>这个需要你自己去参与领取，领取之后就可以点击去使用</p>
<p>有很多门店可以使用，自己可以看看那个门店最优惠了哦</p>
<p><br>淘宝扫码/复制口令淘宝打开 领取16-16元</p>
<p>淘口令 <span style="background-color:#ADD8E6;">67 HU7405 &nbsp; 1:/eFU2VAh5MPb₤</span></p>
<p>淘宝扫码：</p>
<p><img alt="淘宝闪购领16-16红包 亲测0.2撸5瓶饮料_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/05/f90c3f2b804438e928075b3f983a241c.jpg" style="width: 300px; *//* height: 308px;" referrerpolicy="no-referrer"></p>`,r:{minutes:42.74,words:12822},t:"爬取日期: 2025-07-05",y:"a"}}],["/posts/2025-07-06.html",{loader:()=>f(()=>import("./2025-07-06.html-BlEyGAqI.js"),[]),meta:{u:1005,e:`
<h2>淘宝猫超签到领赠金 累积可0撸实物</h2>
<p><strong>淘宝猫超签到领赠金 累积可0撸实物</strong></p>
<p>这个活动还蛮简单哦，只要每天签到抽赠金就可以了</p>
<p>赠金可以累积起来使用，猫超里面有很多单品包邮的东西</p>
<p><br>淘宝APP-首页【天猫超市】-首页顶部【签到领赠金】每天签到领 赠金 累积起来可以0撸 猫超单品包邮实物</p>
<p><img alt="淘宝猫超签到领赠金 累积可0撸实物_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/06/eb00fad2d53faac676e544491d26ff17.jpg" style="width: 740px; *//* height: 532px;" referrerpolicy="no-referrer"></p>`,r:{minutes:28.38,words:8513},t:"爬取日期: 2025-07-06",y:"a"}}],["/posts/2025-07-07.html",{loader:()=>f(()=>import("./2025-07-07.html-BdrACURc.js"),[]),meta:{u:1005,e:`
<h2>1亓喝沪上阿姨 领券膨胀最高10元无门槛</h2>
<p><strong>1亓喝沪上阿姨 领券膨胀最高10元无门槛</strong></p>
<p>需要的可以购买一个膨胀券，第二个膨胀券是广州地区可用</p>
<p>都可以参与试试看，也可以出给别人，不一定可以0撸</p>
<p>&nbsp;</p>
<p>1.微信打开下方小程序 0.99亓买膨胀券 想喝的可以参与一下 不是每个门店都有茉莉花茶-膨7-8券，0喝茉莉花茶</p>
<p>mp://96M1I7gfxv8p3wp</p>
<p>2.领券膨胀 也可以膨胀最高10亓 限制广东门店</p>
<p><img alt="1亓喝沪上阿姨 领券膨胀最高10元无门槛_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/07/89226ab72056ca757a7c7acefc7b5e97.jpg" style="width: 220px; *//* height: 222px;" referrerpolicy="no-referrer"></p>`,r:{minutes:43.01,words:12903},t:"爬取日期: 2025-07-07",y:"a"}}],["/posts/2025-07-08.html",{loader:()=>f(()=>import("./2025-07-08.html-H93OESFZ.js"),[]),meta:{u:1005,e:`
<h2>亲测1.28元秒到 立白抽万份现金红包</h2>
<p><strong>亲测1.28元秒到 立白抽万份现金红包</strong></p>
<p>每人有一次抽奖机会，非必中的哦</p>
<p>抽0.38-6.88元现金红包等奖励</p>
<p>亲测1.28元现金秒到，不中的去分享小号助力试试，最多拉5个</p>
<p><br>复制发送给微信任意好友打开</p>
<p>mp://V7Sb9t6ttN0OuaG</p>
<p><img alt="亲测1.28元秒到 立白抽万份现金红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/08/c485780c6ec796fb8977c8b37a01af67.jpg" style="width: 645px; *//* height: 671px;" referrerpolicy="no-referrer"></p>`,r:{minutes:19.43,words:5828},t:"爬取日期: 2025-07-08",y:"a"}}],["/posts/2025-07-09.html",{loader:()=>f(()=>import("./2025-07-09.html-C9a7Rpci.js"),[]),meta:{u:1005,e:`
<h2>支付宝99积分兑换2元中行转账立减金 满2000-2元</h2>
<p><strong>支付宝99积分兑换2元中行转账立减金 满2000-2元</strong></p>
<p>有中行的可以兑换一下，支付宝99积分可兑</p>
<p>领的是2000-2元转账立减金，需要的兑换一下</p>
<p>奖品数量有限，兑完即止</p>
<p>&nbsp;</p>
<h1>7月9日置顶 新一期&nbsp;</h1>
<p><br>支付宝-我的-支付宝会员，搜【中行】，99积分兑换</p>
<p><img alt="支付宝99积分兑换2元中行转账立减金 满2000-2元-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/18/c716917586423953167f3e972b099f7a.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.4,words:4319},t:"爬取日期: 2025-07-09",y:"a"}}],["/posts/2025-07-10.html",{loader:()=>f(()=>import("./2025-07-10.html-sOC89dzm.js"),[]),meta:{u:1005,e:`
<h2>wegame斗仙预约抽2Q币 亲测2Q币秒到</h2>
<p><strong>wegame斗仙预约抽2Q币 亲测2Q币秒到</strong></p>
<p>手机/电脑端可参加，完成预约任务有多次机会</p>
<p>抽Q币/实物，非必中的</p>
<p>亲测2Q币秒到，现在去试试看</p>
<p><br>微信打开-下拉预约游戏等任务完成抽奖</p>
<p><img alt="wegame斗仙预约抽2Q币 亲测2Q币秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/10/bf4fe2d7f1a81c485478c728e468a93e.jpg" style="width: 645px; *//* height: 680px;" referrerpolicy="no-referrer"></p>`,r:{minutes:18.61,words:5583},t:"爬取日期: 2025-07-10",y:"a"}}],["/posts/2025-07-11.html",{loader:()=>f(()=>import("./2025-07-11.html-BpoJv0Ot.js"),[]),meta:{u:1005,e:`
<h2>亲测5E卡秒到 亿联银行亿米兑换E卡/立减金</h2>
<p><strong>亲测5E卡秒到 亿联银行亿米兑换E卡/立减金</strong></p>
<p>这个活动参与需要亿联银行开户哦，介意无视</p>
<p>新人参与就有500亿米，做点浏览任务就可以兑换</p>
<p>亲测5元京东E卡秒到</p>
<p><br>微信扫码-小程序登录领500亿米，点兑换奖品，需要开户-右上角【赚更多】，做一下下方浏览任务得成长值，-成长值兑换成亿米-去【积分商城】</p>
<p><img alt="亲测5E卡秒到 亿联银行亿米兑换E卡/立减金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/11/e3a66ae26a0348fc51add1f86fea3347.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:19.31,words:5793},t:"爬取日期: 2025-07-11",y:"a"}}],["/posts/2025-07-12.html",{loader:()=>f(()=>import("./2025-07-12.html-Bn_im_Sk.js"),[]),meta:{u:1005,e:`
<h2>淘宝闪购领16-16红包 亲测0.2撸5瓶饮料</h2>
<p><strong>淘宝闪购领16-16红包 亲测0.2撸5瓶饮料</strong></p>
<p>这个需要你自己去参与领取，领取之后就可以点击去使用</p>
<p>有很多门店可以使用，自己可以看看那个门店最优惠了哦</p>
<p>&nbsp;</p>
<h1>7月12日置顶&nbsp;</h1>
<p>淘宝扫码&nbsp;领取16-16元：</p>
<p><img alt="" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/12/7be1a95d1fd44f58cb59a7ee9fd95075.jpg" style="width: 220px; *//* height: 210px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.18,words:5153},t:"爬取日期: 2025-07-12",y:"a"}}],["/posts/2025-07-13.html",{loader:()=>f(()=>import("./2025-07-13.html-Bw1hCz-b.js"),[]),meta:{u:1005,e:`
<h2>QQ抽奖 亲测14天超级VIP+10元古茗无门槛券</h2>
<p><strong>QQ抽奖 亲测14天超级VIP+10元古茗无门槛券</strong></p>
<p>这个活动不要邀请人也可以参与活动的哦</p>
<p>完成所有体验任务就可以抽卡，其中一个领券任务</p>
<p>可以一直到到自己满意的在领取完成就可以了</p>
<p>&nbsp;</p>
<h1>7月13日置顶 抽奖试试</h1>
<p>&nbsp;</p>
<p>QQ打开底部地址 完成任务抽奖试试</p>
<p><img alt="QQ抽奖 亲测14天超级VIP+10元古茗无门槛券_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/11/6b36508607518a1587b831db8dcc63a2.jpg" style="width: 650px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.35,words:4006},t:"爬取日期: 2025-07-13",y:"a"}}],["/posts/2025-07-14.html",{loader:()=>f(()=>import("./2025-07-14.html-BqfUAAc_.js"),[]),meta:{u:1005,e:`
<h2>亲测0.01元撸一提挂抽 天猫APP下单即可</h2>
<p><strong>亲测0.01元撸一提挂抽 天猫APP下单即可</strong></p>
<p>这个活动都去试试看，标题下方领取5元红包</p>
<p>然后就可以0.01元撸挂抽了哦，多号可多撸</p>
<p>&nbsp;</p>
<h1>7月14日置顶 新一期</h1>
<p>&nbsp;</p>
<p>0.01💰一提挂抽<br>需打复制打开去天猫αpp<br>标题下方拿5亓荭包<br><span style="background-color:#ADD8E6;">6$ot8a41KoQOy$:// CA1831</span></p>`,r:{minutes:18.87,words:5662},t:"爬取日期: 2025-07-14",y:"a"}}],["/posts/2025-07-15.html",{loader:()=>f(()=>import("./2025-07-15.html-hV5_698o.js"),[]),meta:{u:1005,e:`
<h2>建行生活能量兑换2-20元立减金 亲测2元立减金秒到</h2>
<p><strong>建行生活能量兑换2-20元立减金 亲测2元立减金秒到</strong></p>
<p>建行生活APP低碳生活能量兑换权益活动</p>
<p>500g能量兑换2元立减金，能量多的可兑换20元面额立减金</p>
<p>亲测2元立减金秒到，能量通过平时使用建行支付等获取</p>
<p>&nbsp;</p>
<h1>7月15日置顶 又可以兑换了</h1>
<p><br>建行生活APP-搜【低碳生活】进去-【权益】，去兑换即可</p>
<p><img alt="建行生活能量兑换2-20元立减金 亲测2元立减金秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/07/20/34e9bdeb88a54a8091d4dee1ce1fa308.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.66,words:4099},t:"爬取日期: 2025-07-15",y:"a"}}],["/posts/2025-07-16.html",{loader:()=>f(()=>import("./2025-07-16.html-CjGlM9ec.js"),[]),meta:{u:1005,e:`
<h2>亲测3Q币秒到 使命召唤手游6月未登录领</h2>
<p><strong>亲测3Q币秒到 使命召唤手游6月未登录领</strong></p>
<p>需要QQ端使命召唤手游6月份未登录过</p>
<p>符合的就是回归用户，不用下载游戏秒玩就可以</p>
<p>亲测3Q币秒到，每日数量有限领完即止</p>
<p><br>QQ打开-下拉先验证回归资格-通过的去顶部一键秒玩登录一下-返回领取3Q币</p>
<p><img alt="亲测3Q币秒到 使命召唤手游6月未登录领-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/16/0c98877240c622c894922fcb98cbec1b.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:19.76,words:5928},t:"爬取日期: 2025-07-16",y:"a"}}],["/posts/2025-07-17.html",{loader:()=>f(()=>import("./2025-07-17.html-B1sQU2N0.js"),[]),meta:{u:1005,e:`
<h2>美团闪购1.9元12瓶水、0.8元撸酒水等</h2>
<p><strong>美团闪购1.9元12瓶水、0.8元撸酒水等</strong></p>
<p>美团闪购领红包可低价撸实物</p>
<p>有神价折扣基本都能0-5元撸一堆哦</p>
<p>反馈0.8元撸3瓶酒水、1.8元撸12瓶农夫山泉、4.9元撸5支巧乐兹+百岁山</p>
<p>&nbsp;</p>
<h1>新一期 又有了，亲测1.9元买6瓶百事可乐</h1>
<p>&nbsp;</p>
<p><span style="color:#FF0000;">两个方案都试一下</span></p>
<p>1.先拿红包<br><a target="_blank" href="http://dpurl.cn/Sf3S3szz">http://dpurl.cn/Sf3S3szz</a></p>`,r:{minutes:21.8,words:6540},t:"爬取日期: 2025-07-17",y:"a"}}],["/posts/2025-07-18.html",{loader:()=>f(()=>import("./2025-07-18.html-BT4ne1vZ.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领取《席德·梅尔的文明VI 白金版》</h2>
<p><strong>Epic喜加1免费领取《席德·梅尔的文明VI 白金版》</strong></p>
<p>Epic喜加1《席德·梅尔的文明VI 白金版》，回合制策略游戏</p>
<p>《文明》系列一直凭借令人沉醉的游戏机制屹立于史上最佳游戏之列。对于尚未体验其魅力的玩家而言，《席德·梅尔的文明VI 白金版》绝对不容错过</p>
<p>限时免费领取时间至7月24日23:00</p>
<p>&nbsp;</p>
<p>《席德·梅尔的文明VI 白金版》</p>
<p><img alt="Epic喜加1免费领取《席德·梅尔的文明VI 白金版》-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/18/f0a19951339a425f0675255fd8d09bb6.jpg" style="width: 740px; *//* height: 410px;" referrerpolicy="no-referrer"></p>`,r:{minutes:26.43,words:7929},t:"爬取日期: 2025-07-18",y:"a"}}],["/posts/2025-07-19.html",{loader:()=>f(()=>import("./2025-07-19.html-CrS37iqv.js"),[]),meta:{u:1005,e:`
<h2>亲测2Q币秒到 和平精英15天未登录领取</h2>
<p><strong>亲测2Q币秒到 和平精英15天未登录领取</strong></p>
<p>符合15天未登录的回归用户参与</p>
<p>不需要下载游戏，直接腾讯先锋秒玩即可</p>
<p>亲测2Q币秒到，奖品数量有限领完即止</p>
<p><br>QQ打开-下拉先验证回归资格-符合的去腾讯先锋APP-搜【和平精英】秒玩登录-返回领取</p>
<p><img alt="亲测2Q币秒到 和平精英15天未登录领取-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/19/b97ddcea6c0cc6a61e07c9cef1394979.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.44,words:4033},t:"爬取日期: 2025-07-19",y:"a"}}],["/posts/2025-07-20.html",{loader:()=>f(()=>import("./2025-07-20.html-DUDrHUVP.js"),[]),meta:{u:1005,e:`
<h2>越秀房宝抽奖 亲测88.88元秒到微信</h2>
<p><strong>越秀房宝抽奖 亲测88.88元秒到微信</strong></p>
<p>这个活动是有邀请的哦，介意的就不要参与了</p>
<p>打开活动地址，完成任务可以参与抽奖，邀请好友可以获得更多奖励</p>
<p>&nbsp;</p>
<h1>7月20日置顶</h1>
<p>微信打开下方地址 打开就可以领取一个红包+玩游戏 抽奖试试</p>
<p><img alt="越秀房宝抽奖 亲测88.88元秒到微信_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/18/d13702f08fa29ac9b817c891f35fe9ee.jpg" style="width: 740px; *//* height: 532px;" referrerpolicy="no-referrer"></p>`,r:{minutes:8.43,words:2529},t:"爬取日期: 2025-07-20",y:"a"}}],["/posts/2025-07-21.html",{loader:()=>f(()=>import("./2025-07-21.html-B79M2ySp.js"),[]),meta:{u:1005,e:`
<h2>支付宝支付有礼 亲测2元碰一下红包</h2>
<p><strong>支付宝支付有礼 亲测2元碰一下红包</strong></p>
<p>支付宝支付有礼活动，摸貔貅抽奖</p>
<p>可以抽多次，反复把机会用完，概率中实物/支付红包等奖励</p>
<p>亲测中2元碰一下红包等奖励</p>
<p>&nbsp;</p>
<h1>7月21日置顶</h1>
<p>支付宝搜【支付有礼】-点小程序 进去弹碰一下红包</p>
<p><img alt="支付宝摸貔貅抽好礼 亲测2元碰一下红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/18/af8855a4eff2a2e66f7c06a67567a835.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.81,words:4143},t:"爬取日期: 2025-07-21",y:"a"}}],["/posts/2025-07-22.html",{loader:()=>f(()=>import("./2025-07-22.html-CtpjSbEh.js"),[]),meta:{u:1005,e:`
<h2>支付宝出行抽盲盒 亲测6元无门槛打车券</h2>
<p><strong>支付宝出行抽盲盒 亲测6元无门槛打车券</strong></p>
<p>支付宝五一出行抽盲盒活动，猜拳抽奖</p>
<p>累计猜拳胜利1次、2次、3次、5次、6次，各可开一次奖励</p>
<p>最高参与瓜分100万元出行红包</p>
<p>亲测中6元滴滴无门槛打车券、2元哈啰助力车券等</p>
<p>&nbsp;</p>
<h1>7月22日置顶 新一期可参与&nbsp;</h1>
<p>支付宝APP搜【出行免单】-做任务得次数-去猜拳，胜利抽奖</p>
<p><img alt="支付宝五一出行抽盲盒 亲测6元无门槛打车券-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/04/29/618b6f682d025cadb1909899ff72bae0.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.61,words:4082},t:"爬取日期: 2025-07-22",y:"a"}}],["/posts/2025-07-23.html",{loader:()=>f(()=>import("./2025-07-23.html-o3daa_8i.js"),[]),meta:{u:1005,e:`
<h2>南方基金免费领10000体验金 享10天收益</h2>
<p><strong>南方基金免费领10000体验金 享10天收益</strong></p>
<p>南方基金有账户的参加，免费领1万体验金</p>
<p>领取的体验10天收益可得，体验完领0.38-1.08元红包</p>
<p>数量有限领完即止</p>
<p><br>微信打开-下拉点图福利1参与领取</p>
<p><img alt="南方基金免费领10000体验金 享10天收益-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/23/8f4b6ae8f1f16729e1b8ca6dafbf6b15.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.78,words:4134},t:"爬取日期: 2025-07-23",y:"a"}}],["/posts/2025-07-24.html",{loader:()=>f(()=>import("./2025-07-24.html-B3dJNkfl.js"),[]),meta:{u:1005,e:`
<h2>亲测0.9元撸藿香正气水 饿了么领券</h2>
<p><strong>亲测0.9元撸藿香正气水 饿了么领券</strong></p>
<p>饿了么参与领取藿香红包，好多可多撸</p>
<p>亲测已领，买藿香正气水直接0.9元到手哦</p>
<p>高温大夏天可以备一点在家</p>
<p><br>微信扫码-直接领券后0.9元券，重新进下方变价0.9元拍下即可</p>
<p><img alt="" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/24/21322a71ece5bf6fb18b725f2861e6cf.jpg" style="width: 220px; *//* height: 224px;" referrerpolicy="no-referrer"></p>`,r:{minutes:18.22,words:5467},t:"爬取日期: 2025-07-24",y:"a"}}],["/posts/2025-07-25.html",{loader:()=>f(()=>import("./2025-07-25.html-BacnZc-s.js"),[]),meta:{u:1005,e:`
<h2>亲测0撸两杯蜜雪 美团您的0元外卖已到账</h2>
<p><strong>亲测0撸两杯蜜雪 美团您的0元外卖已到账</strong></p>
<p>美团杀疯啦，直接领两杯0元蜜雪冰城免单</p>
<p>基本都有哦，亲测已领2张免单券，选到店使用是直接0元</p>
<p>今日到期去使用即可，喝不完就预定</p>
<p>&nbsp;</p>
<h1>7月25日置顶 新一期</h1>
<p>1.先领红包</p>
<p><a target="_blank" href="http://dpurl.cn/Wo8S3Ezz">http://dpurl.cn/Wo8S3Ezz</a></p>
<p>2.美团APP-首页【外卖】-弹0元外卖券/到店券，直接领取，去使用，选到店自取0元</p>`,r:{minutes:21.32,words:6395},t:"爬取日期: 2025-07-25",y:"a"}}],["/posts/2025-07-26.html",{loader:()=>f(()=>import("./2025-07-26.html-CO5jIjhS.js"),[]),meta:{u:1005,e:`
<h2>饿了么直接领19-18元无门槛红包 秒到卡包</h2>
<p><strong>饿了么直接领19-18元无门槛红包 秒到卡包</strong></p>
<p>这个大家快速度领取一下哦，多饿了么号可以多用</p>
<p>就10分钟，18:30开始一直领不到就反复或者删除小程序重新打开</p>
<p>限时限量 领到尽快使用 手慢无</p>
<p>&nbsp;</p>
<p>微信扫码下方小程序 领取即可</p>
<p><img alt="饿了么直接领19-18元无门槛红包 秒到卡包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/26/19c5d46ec0824d95b8051e3b47c42694.jpg" style="width: 291px; *//* height: 269px;" referrerpolicy="no-referrer"></p>`,r:{minutes:20.66,words:6199},t:"爬取日期: 2025-07-26",y:"a"}}],["/posts/2025-07-27.html",{loader:()=>f(()=>import("./2025-07-27.html-B0EUK9GJ.js"),[]),meta:{u:1005,e:`
<h2>支付宝299积分兑换0.9元古茗青橘柠檬水</h2>
<p><strong>支付宝299积分兑换0.9元古茗青橘柠檬水</strong></p>
<p>支付宝会员积分兑换哦，有积分的参加一下</p>
<p>299积分兑换0.9元古茗青橘柠檬水，需要到店自取</p>
<p>还不错，数量有限兑完即止</p>
<p><br>支付宝APP-我的-支付宝会员-0元起兑-下拉有0.9元喝柠檬水，进去兑换</p>
<p><img alt="支付宝299积分兑换0.9元古茗青橘柠檬水-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/27/81910a74761793250675acfe37ef27d0.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:12.9,words:3870},t:"爬取日期: 2025-07-27",y:"a"}}],["/posts/2025-07-28.html",{loader:()=>f(()=>import("./2025-07-28.html-MkAxboFW.js"),[]),meta:{u:1005,e:`
<h2>淘宝天猫造浪节抽6666元红包/0.01元实物</h2>
<p><strong>淘宝天猫造浪节抽6666元红包/0.01元实物</strong></p>
<p>每天可参与抽奖，可抽多次</p>
<p>最高中6666元无门槛红包、0.01元试用实物等</p>
<p>记得参与，不中第二天继续试试</p>
<p><br>淘宝搜【天猫造浪节红包】-进去抽奖</p>
<p><img alt="淘宝天猫造浪节抽6666元红包/0.01元实物-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/28/e7b7094bd08ab5e92790244ba9835d62.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.85,words:4456},t:"爬取日期: 2025-07-28",y:"a"}}],["/posts/2025-07-29.html",{loader:()=>f(()=>import("./2025-07-29.html-ChS0Pt87.js"),[]),meta:{u:1005,e:`
<h2>亲测3个月爱奇艺会员 联通王卡充值话费抽奖</h2>
<p><strong>亲测3个月爱奇艺会员 联通王卡充值话费抽奖</strong></p>
<p>联通用户都参与试试，需要充值100元话费才可以抽奖</p>
<p>怕不中的就不要参加哦，现在概率能中</p>
<p>反馈中3个月视频会员4选1，数量有限抽完即止</p>
<p><br>微信搜【王卡助手】公众号-菜单栏【特权】-王卡福利社-进去弹窗【充值抽奖活动来啦】-进去充值后抽</p>
<p><img alt="亲测3个月爱奇艺会员 联通王卡充值话费抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/29/aba03a94b351ca89f31fc4f86acd4e34.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.06,words:4217},t:"爬取日期: 2025-07-29",y:"a"}}],["/posts/2025-07-30.html",{loader:()=>f(()=>import("./2025-07-30.html-BNQZYMNK.js"),[]),meta:{u:1005,e:`
<h2>建行生活点亮城市撸130元京东券+92元立减金</h2>
<p><strong>建行生活点亮城市撸130元京东券+92元立减金</strong></p>
<p>建行生活APP新出的点亮城市活动，完成任务得体力值</p>
<p>体力值解锁点亮地区，每点亮一个可领取对应的奖励，如下</p>
<p>①点亮龙门石窟，可获得一张京东专区10元优惠券。<br>②点亮黄果树瀑布，可获得一张京东专区16元优惠券。<br>③点亮雷峰塔，可获得一张京东专区16元优惠券。<br>④点亮沙坡头，可获得一张京东专区26元优惠券。<br>⑤点亮世界之窗，可获得一张京东专区26元优惠券。<br>⑥点亮麦积山，可获得一张京东专区36元优惠券。<br>⑦点亮大政殿，可获得满46.01元减46元微信立减金(限信用卡使用)1份。<br>⑧点亮故宫，可获得满46.01元减46元微信立减金(限信用卡使用)1份。</p>`,r:{minutes:16.93,words:5079},t:"爬取日期: 2025-07-30",y:"a"}}],["/posts/2025-07-31.html",{loader:()=>f(()=>import("./2025-07-31.html-Bld2g02e.js"),[]),meta:{u:1005,e:`
<h2>支付宝数币节抽最高2025红包 亲测4.8元数币红包</h2>
<p><strong>支付宝数币节抽最高2025红包 亲测4.8元数币红包</strong></p>
<p>有交行数币的参加，在试点内就可以抽奖</p>
<p>每天可抽一次，抽最高2025元数币红包</p>
<p>反馈中4.8元交行数币红包</p>
<p>&nbsp;</p>
<h1>7月31日置顶 抽奖试试</h1>
<p><br>支付宝APP搜【数币节】-进入活动-点幸运大转盘抽奖</p>
<p><img alt="支付宝数币节抽最高2025红包 亲测4.8元数币红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/27/afb387f7c4a2527025c3e8515fb24778.jpg" style="width: 645px; *//* height: 688px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.84,words:4151},t:"爬取日期: 2025-07-31",y:"a"}}],["/posts/2025-08-01.html",{loader:()=>f(()=>import("./2025-08-01.html-AUvk278K.js"),[]),meta:{u:1005,e:`
<h2>美团小美果园来7天必领抽纸 连续签到即可</h2>
<p><strong>美团小美果园来7天必领抽纸 连续签到即可</strong></p>
<p>这个活动大家可以参与试试，这是一个新的活动</p>
<p>进去之后连续签到7天可以领取抽纸，我也是第一次参与</p>
<p>&nbsp;</p>
<h1>8月1日置顶 记得签到</h1>
<p>美团APP顶部搜【小美果园】-左侧顶部【签到】-连续签到7天得一箱抽纸</p>
<p><img alt="美团小美果园来7天必领抽纸 连续签到即可_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/31/d1142e02c4e6ef8461e3320d4a07b3d4.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:12.35,words:3705},t:"爬取日期: 2025-08-01",y:"a"}}],["/posts/2025-08-02.html",{loader:()=>f(()=>import("./2025-08-02.html-B7E1EtTH.js"),[]),meta:{u:1005,e:`
<h2>京东0-3元撸蜜雪/霸王茶姬/茶百道/米饭</h2>
<p><strong>京东0-3元撸蜜雪/霸王茶姬/茶百道/米饭&nbsp;</strong></p>
<p>这个活动按照我的教程来参与即可，自己也可以买自己想买的外卖</p>
<p>群友反馈可以用来买华莱士，还有霸王茶姬，茶百道等东西都是外卖送货上门</p>
<p>&nbsp;</p>
<h1>8月2日置顶</h1>
<p>领京东券</p>
<p>领<a target="_blank" href="https://u.jd.com/vrtJQ7T">https://u.jd.com/vrtJQ7T</a></p>
<p>扫码参与：</p>`,r:{minutes:18.93,words:5679},t:"爬取日期: 2025-08-02",y:"a"}}],["/posts/2025-08-03.html",{loader:()=>f(()=>import("./2025-08-03.html-9RwApu7r.js"),[]),meta:{u:1005,e:`
<h2>美团免费下午茶 亲测中下午茶通兑卡</h2>
<p><strong>美团免费下午茶 亲测中下午茶通兑卡</strong></p>
<p>这个需要你有美团会员哦，如果没有的话</p>
<p>9.9亓，5亓*10张/月*12月每个月发10张新增9.9亓=120张 膨胀棬</p>
<p>复制🔗去美团9.9亓购600亓神券包</p>
<p><span style="background-color:#ADD8E6;">http:/💰l3YzRiYWEyYmU💰</span></p>
<p>&nbsp;</p>
<h1>8月3日置顶 现在膨胀试试</h1>
<p><br>美团APP-我的-顶部图标【免费下午茶】去膨胀试试</p>`,r:{minutes:13.95,words:4186},t:"爬取日期: 2025-08-03",y:"a"}}],["/posts/2025-08-04.html",{loader:()=>f(()=>import("./2025-08-04.html-CmCtntJE.js"),[]),meta:{u:1005,e:`
<h2>亲测1.06元秒到 华夏基金抽2.7万份红包</h2>
<p><strong>亲测1.06元秒到 华夏基金抽2.7万份红包</strong></p>
<p>华夏基金有账户的可以参与抽奖</p>
<p>非必中，共计2.7万份现金红包</p>
<p>反馈1.06元秒到</p>
<p>&nbsp;</p>
<h1>8月4日置顶 抽奖试试</h1>
<p><br>复制发送给微信任意好友打开-抽奖</p>
<p>mp://p3DK4LKnzM8ogqK</p>
<p><img alt="亲测1.06元秒到 华夏基金抽2.7万份红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/02/9d2f5df6d5b8b4e7fb2db34caa16dd83.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.94,words:4182},t:"爬取日期: 2025-08-04",y:"a"}}],["/posts/2025-08-05.html",{loader:()=>f(()=>import("./2025-08-05.html-BJtOCn54.js"),[]),meta:{u:1005,e:`
<h2>中信红会员领2元消费立减券 满50元可抵扣</h2>
<p><strong>中信红会员领2元消费立减券 满50元可抵扣</strong></p>
<p>这个活动大家可以领取试试，支付宝支付满50元可以立减2元</p>
<p>在有需要的时候可以领取，然后支付抵扣。<br>&nbsp;<br>&nbsp;</p>
<p>中信银行APP-底部【会员】-顶部【2元支付券】在使用支付宝 支付50元的时候可以抵扣2元</p>
<p><img alt="中信红会员领2元消费立减券 满50元可抵扣_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/05/37e81d0af9c8b9d3a24de31f444513d8.jpg" style="width: 650px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:21,words:6301},t:"爬取日期: 2025-08-05",y:"a"}}],["/posts/2025-08-06.html",{loader:()=>f(()=>import("./2025-08-06.html-BAn6AeLY.js"),[]),meta:{u:1005,e:`
<h2>淘宝超级88每日抽最高8888元红包 今晚20点开始</h2>
<p><strong>淘宝超级88每日抽最高8888元红包 今晚20点开始</strong></p>
<p>淘宝超级88红包活动，每天可领取一个红包</p>
<p>最高开8888元无门槛红包，今晚20点开始</p>
<p><br>复制淘宝打开-弹窗-开红包</p>
<p>手机淘口令</p>
<p><span style="background-color:#ADD8E6;">8$KQTj46AGxIR$:// ZH9114</span></p>
<p><img alt="淘宝超级88每日抽最高8888元红包 今晚20点开始-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/06/d776454f8f1e3072b340e8995b529a24.jpg" style="width: 320px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:16.02,words:4806},t:"爬取日期: 2025-08-06",y:"a"}}],["/posts/2025-08-07.html",{loader:()=>f(()=>import("./2025-08-07.html-CpZR2Dv0.js"),[]),meta:{u:1005,e:`
<h2>京东金融高温补贴抽最高50元现金 亲测0.5元秒到</h2>
<p><strong>京东金融高温补贴抽最高50元现金 亲测0.5元秒到</strong></p>
<p>京东金融APP参与活动，上传图片抽奖</p>
<p>每日可参与，最高抽50元现金，非必中</p>
<p>亲测0.5元秒到京东余额</p>
<p>&nbsp;</p>
<h1>8月7日置顶 抽奖试试</h1>
<p><br>京东金融APP搜【高温补贴】-上传天气温度图片/高温作业图片，秒审核抽奖</p>
<p><img alt="京东金融高温补贴抽最高50元现金 亲测0.5元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/06/be7944735a397302311b6a8e65472daf.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:22.39,words:6718},t:"爬取日期: 2025-08-07",y:"a"}}],["/posts/2025-08-08.html",{loader:()=>f(()=>import("./2025-08-08.html-DLI-sbtO.js"),[]),meta:{u:1005,e:`
<h2>农行1-5元购省钱月卡 亲测10元支付宝立减金</h2>
<p><strong>农行1-5元购省钱月卡 亲测10元支付宝立减金</strong></p>
<p>这个和之前的省钱月卡不冲突，都可以购买</p>
<p>有农行的参与就行，记得先把APP更新到最新版本</p>
<p>抽1-5元购10元支付宝立减金，亲测4元买</p>
<p>&nbsp;</p>
<h1>8月8日置顶 新一期</h1>
<p><br>农行app下拉进智能助手（没有的更新一下），输入【省钱月卡】-会推省钱月卡活动，去参与</p>
<p>到账的支付宝立减金需要自己去农行 我的 卡券领取</p>
<p><img alt="农行1-5元购省钱月卡 亲测10元支付宝立减金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/03/a533b63ea9e9725c82c81de360e236e2.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:15.12,words:4536},t:"爬取日期: 2025-08-08",y:"a"}}],["/posts/2025-08-09.html",{loader:()=>f(()=>import("./2025-08-09.html-Dkt6n4jg.js"),[]),meta:{u:1005,e:`
<h2>饿了么直接领19-18元无门槛红包 秒到卡包</h2>
<p><strong>饿了么直接领19-18元无门槛红包 秒到卡包</strong></p>
<p>这个大家快速度领取一下哦，多饿了么号可以多用</p>
<p>就10分钟，18:30开始一直领不到就反复或者删除小程序重新打开</p>
<p>限时限量 领到尽快使用 手慢无</p>
<p>&nbsp;</p>
<h1>8月7日置顶&nbsp;19:00开始l持续时间：5~10分钟</h1>
<p>&nbsp;</p>
<p>微信扫码下方小程序 领取即可</p>
<p>mp://hFvUwmxyiaJtggk</p>
<p><img alt="" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/07/64f85563f2c4a6224575f7119681b41d.jpg" style="width: 222px; *//* height: 216px;" referrerpolicy="no-referrer"></p>`,r:{minutes:19.01,words:5703},t:"爬取日期: 2025-08-09",y:"a"}}],["/posts/2025-08-10.html",{loader:()=>f(()=>import("./2025-08-10.html-D7IHP2wW.js"),[]),meta:{u:1005,e:`
<h2>快手签到14天得现金 亲测45元秒到支付宝</h2>
<p><strong>快手签到14天得现金 亲测45元秒到支付宝</strong></p>
<p>这个活动不是每个用户都有的，有这个页面的可以参与一下</p>
<p>签到之后还可以点击看视频获得更多金币，金币会在凌晨自动兑换成现金</p>
<p>我上一期已经完成了，大概有15元左右，已经提现了15元</p>
<p>&nbsp;</p>
<h1>8月10日新一期置顶</h1>
<p>1.快手APP-点击【头像】-任务中心/页面左侧【红包】图标进入</p>
<p>2.看看有无【连续签到14天得13.1元】现金红包 每天去参与一下 获得的金币凌晨会自动兑换成现金</p>`,r:{minutes:11.32,words:3396},t:"爬取日期: 2025-08-10",y:"a"}}],["/posts/2025-08-11.html",{loader:()=>f(()=>import("./2025-08-11.html-Lo1_rZRf.js"),[]),meta:{u:1005,e:`
<h2>工行工享月月花消费达标赢最高352元立减金</h2>
<p><strong>工行工享月月花消费达标赢最高352元立减金</strong></p>
<p>工行另一个消费达标活动，共有4档抽奖</p>
<p>消费金额达5000、10000、20000、30000元各可抽奖一次，抽2-88元立减金</p>
<p>使用微信支付绑定工行储蓄卡支付（含转账、红包、二维码付款、零钱充值、信用卡还款等）都可以</p>
<p>最多可以抽4次奖，最高赢352元微信立减金</p>
<p>&nbsp;</p>
<h1>8月11日置顶 新一期</h1>
<p>&nbsp;</p>
<p>立即报名参与-达标后来抽奖</p>`,r:{minutes:17.4,words:5221},t:"爬取日期: 2025-08-11",y:"a"}}],["/posts/2025-08-12.html",{loader:()=>f(()=>import("./2025-08-12.html-Bf5mKH1V.js"),[]),meta:{u:1005,e:`
<h2>移动网龄成长礼 亲测腾讯VIP会员月卡</h2>
<p><strong>移动网龄成长礼 亲测腾讯VIP会员月卡</strong></p>
<p>这个活动大家都可以参与试试哦</p>
<p>网龄成长礼，网龄生日礼、网龄惊喜礼都可以领取一下</p>
<p>&nbsp;</p>
<h1>8月2日 又可以领取了</h1>
<p>微信打开底部地址 登录移动号码 领取网龄成长礼试试</p>
<p><img alt="移动网龄成长礼 亲测腾讯VIP会员月卡_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/14/b7facb9278a97c56bc7623ef69c37052.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.9,words:4169},t:"爬取日期: 2025-08-12",y:"a"}}],["/posts/2025-08-13.html",{loader:()=>f(()=>import("./2025-08-13.html-By1UGYvn.js"),[]),meta:{u:1005,e:`
<h2>亲测88元猫超卡 天猫超市天天中大奖</h2>
<p><strong>亲测88元猫超卡 天猫超市天天中大奖</strong></p>
<p>天猫超市8月抽奖口令，每天可抽一次</p>
<p>每日有1000个66元、1000个88元的天猫超市赠金</p>
<p>群友反馈刚中88元天猫超市卡</p>
<p><br>淘宝-天猫超市-搜索【天天中大奖】翻牌抽奖</p>
<p><img alt="亲测88元猫超卡 天猫超市天天中大奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/13/c2a8579e924c38756f632c67c76e0062.jpg" style="width: 645px; *//* height: 707px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.7,words:4411},t:"爬取日期: 2025-08-13",y:"a"}}],["/posts/2025-08-14.html",{loader:()=>f(()=>import("./2025-08-14.html-CpcY6pna.js"),[]),meta:{u:1004,e:`
<h2>亲测30元秒到 和包申领临时乘机证明抽奖</h2>
<p><strong>亲测30元秒到 和包申领临时乘机证明抽奖</strong></p>
<p>需要移动和包开通数字身份参与，开通完成任务</p>
<p>申请临时乘机证明即可抽奖，抽5-30元现金红包、和包积分</p>
<p>抽到积分就没啥用，反馈中30元现金红包，提现秒到</p>
<p><br>微信扫码-跳转和包APP参与-下拉做任务得好礼-去完成-开通后返回抽奖</p>
<p><img alt="亲测30元秒到 和包申领临时乘机证明抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/14/d2b8481bc0d762128c19c853ac6f1829.jpg" style="width: 645px; *//* height: 632px;" referrerpolicy="no-referrer"></p>`,r:{minutes:16.88,words:5063},t:"爬取日期: 2025-08-14",y:"a"}}],["/posts/2025-08-15.html",{loader:()=>f(()=>import("./2025-08-15.html-b9hFDTVk.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加2免费领《可靠快递》等游戏</h2>
<p><strong>Epic喜加2免费领《可靠快递》等游戏</strong></p>
<p>Epic喜加2《可靠快递》+《Hidden Folks》</p>
<p>《可靠快递》是一款有关不甚靠谱的送货员的布娃娃引擎物理模拟游戏。通力合作，使用古怪的机器、实用的小工具和物理学的奇迹，将包裹尽可能可靠地送达目的地</p>
<p>《Hidden Folks》在手绘的互动微缩景观中寻找隐藏的角色</p>
<p>限时免费领取时间至8月21日23:00</p>
<p><br>《可靠快递》</p>
<p><img alt="Epic喜加2免费领《可靠快递》等游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/15/c1484fe5dc5120336a74403c4b916de1.jpg" style="width: 740px; *//* height: 411px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.94,words:4483},t:"爬取日期: 2025-08-15",y:"a"}}],["/posts/2025-08-16.html",{loader:()=>f(()=>import("./2025-08-16.html-DiBUbuWP.js"),[]),meta:{u:1005,e:`
<h2>京东抽4-3元券 0.8元撸丝飘挂抽等</h2>
<p><strong>京东抽4-3元券 0.8元撸丝飘挂抽等</strong></p>
<p>京东简单任务抽奖，大概率都可以中4-3元券</p>
<p>可0.8元撸实物，叠加红包最低0.01元到手</p>
<p>亲测0.56元撸1提丝飘挂抽，多号多撸</p>
<p>&nbsp;</p>
<h1>8月16日置顶 今天又能撸</h1>
<p><br>1.京东APP-首页【9.9包邮】-右侧【天天抽好运】抽30元红包，进去-抽奖</p>
<p><img alt="京东抽4-3元券 0.8元撸挂抽等实物-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/11/04bea175b7dd018ef41de4432140a2dc.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:12.42,words:3727},t:"爬取日期: 2025-08-16",y:"a"}}],["/posts/2025-08-17.html",{loader:()=>f(()=>import("./2025-08-17.html-WfFd5GrK.js"),[]),meta:{u:1005,e:`
<h2>饿了么领专享红包 0撸良品铺子猪肉脯</h2>
<p><strong>饿了么领专享红包 0撸良品铺子猪肉脯</strong></p>
<p>这个活动大家可以参与试试看哦，部分人没有</p>
<p>有的话可以按照我的步骤，去购买实物试试，部分人低价到手</p>
<p>&nbsp;</p>
<p>1.饿了么搜【大牌一元抢】弹10亓无门槛红包</p>
<p>2.复制淘宝打开-点击【超市便利】-【爆好价】点进去可以叠加无门槛红包 免运费</p>
<p>淘口令：<span style="background-color:#ADD8E6;">￥j7uz4Q7L0Gg￥/ HU7405</span></p>`,r:{minutes:9.76,words:2928},t:"爬取日期: 2025-08-17",y:"a"}}],["/posts/2025-08-18.html",{loader:()=>f(()=>import("./2025-08-18.html-BGX6mdoZ.js"),[]),meta:{u:1005,e:`
<h2>中行国宝知多少抽最高100元立减金 亲测1元秒到</h2>
<p><strong>中行国宝知多少抽最高100元立减金 亲测1元秒到</strong></p>
<p>中行福仔云游记国宝知多少答题活动</p>
<p>简单答题可抽最高100元微信立减金，非必中的</p>
<p>亲测1元立减金秒到</p>
<p>&nbsp;</p>
<h1>8月18日置顶 新一期</h1>
<p><br>中行APP-搜【福仔云游记】-【国宝知多少】-答题全对抽奖</p>
<p><img alt="中行国宝知多少抽最高100元立减金 亲测1元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/11/dc0f796deb679ab52de24097a5805926.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:19.43,words:5828},t:"爬取日期: 2025-08-18",y:"a"}}],["/posts/2025-08-19.html",{loader:()=>f(()=>import("./2025-08-19.html-D5BuwS2D.js"),[]),meta:{u:1005,e:`
<h2>淘宝闪购抽18.8元无门槛红包 亲测秒到</h2>
<p><strong>淘宝闪购抽18.8元无门槛红包 亲测秒到</strong></p>
<p>这个是新增的18.8元无门槛红包，大家都可以抽奖试试看</p>
<p>抽到了的可以最低可以0.01元撸实雾，抽到15-13元的也可以低价撸实物</p>
<p><br>淘宝扫码/复制口令 淘宝打开抽红包即可</p>
<p>手机淘口令：<span style="background-color:#ADD8E6;">￥6n6e49GolB4￥/ HU7405</span></p>
<p>淘宝扫码：</p>
<p><img alt="淘宝闪购抽18.8元无门槛红包 亲测秒到_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/19/22e10032e34ecfa85eed023af032e591.jpg" style="width: 309px; *//* height: 300px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.38,words:5214},t:"爬取日期: 2025-08-19",y:"a"}}],["/posts/2025-08-20.html",{loader:()=>f(()=>import("./2025-08-20.html-ClNOA3PI.js"),[]),meta:{u:1005,e:`
<h2>微信抽3万份开学礼包 亲测6.6元现金秒到</h2>
<p><strong>微信抽3万份开学礼包 亲测6.6元现金秒到</strong></p>
<p>微信参与西安银行抽红包活动，直接抽就行</p>
<p>每人2次机会，非必中的</p>
<p>反馈6.6元现金红包秒到</p>
<p><br>顶部横幅【30000+份开学礼包】进去抽</p>
<p><img alt="微信抽3万份开学礼包 亲测6.6元现金秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/20/d22a950dcd62ec9c446781bc2af2cb55.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.9,words:4471},t:"爬取日期: 2025-08-20",y:"a"}}],["/posts/2025-08-21.html",{loader:()=>f(()=>import("./2025-08-21.html-C3qfJw-B.js"),[]),meta:{u:1005,e:`
<h2>哈啰打卡地图领10元现金/实物好礼六选一</h2>
<p><strong>哈啰打卡地图领10元现金/实物好礼六选一</strong></p>
<p>哈啰APP参与活动，完成地图打卡解锁</p>
<p>点亮省内30站即可领取奖励，可自选6选1</p>
<p>有10元现金、实物等奖励</p>
<p><br>哈啰APP-我的-下拉-我的游戏【免费领现金】-右上角【免费好礼】选一个奖励-做任务领体力打卡站点</p>
<p><img alt="哈啰打卡地图领10元现金/实物好礼六选一-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/21/6e48a4ca5264872c3df0819ffd252db0.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.96,words:4488},t:"爬取日期: 2025-08-21",y:"a"}}],["/posts/2025-08-22.html",{loader:()=>f(()=>import("./2025-08-22.html-C_DLoJhJ.js"),[]),meta:{u:1005,e:`
<h2>和平精英老用户抽现金 亲测18元秒到</h2>
<p><strong>和平精英老用户抽现金 亲测18元秒到</strong></p>
<p>这个活动大家都可以参与试试看，可以腾讯先锋云游戏登录</p>
<p>有这个游戏的也可以直接去登录，微信打开底部地址 下拉领取登录的2积分抽奖试试</p>
<p>&nbsp;</p>
<h1>8月22日置顶 新一期</h1>
<p>&nbsp;</p>
<p>1.腾讯先锋打开【和平精英】登录一下/或者自己下载了腾讯先锋的参与</p>
<p>2.微信打开底部地址 下拉领取登录游戏的2积分 抽奖试试</p>
<p><img alt="和平精英老用户抽现金 亲测18元秒到_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/09/c597fbf3695b049820e02c00faed4a3c.jpg" style="width: 650px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:15,words:4501},t:"爬取日期: 2025-08-22",y:"a"}}],["/posts/2025-08-23.html",{loader:()=>f(()=>import("./2025-08-23.html-CxG6Rm5f.js"),[]),meta:{u:1005,e:`
<h2>科大讯飞答题抽红包 反馈8.88元现金秒到</h2>
<p><strong>科大讯飞答题抽红包 反馈8.88元现金秒到</strong></p>
<p>这个活动大家可以参与试试看，报名之后点击一下返回</p>
<p>然后参与答题即可，全部答对可以开红包，有点卡，中到红包</p>
<p>反复打开，需要自己手动提现，提现成功后秒到微信支付</p>
<p><br>微信打开下方地址 报名 然后参与答题即可 可以用夸克拍题或者用豆包拍照答题全对抽奖</p>
<p>mp://Fdc55ecifflorHb</p>
<p>微信扫码：</p>
<p><img alt="二维码_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/23/48ddc931a4620afa1f877073e9dfd5c8.jpg" style="width: 224px; *//* height: 220px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13,words:3901},t:"爬取日期: 2025-08-23",y:"a"}}],["/posts/2025-08-24.html",{loader:()=>f(()=>import("./2025-08-24.html-D6GMsdN6.js"),[]),meta:{u:1005,e:`
<h2>建行开宝箱抽京东券 &nbsp;亲测100元京东电子券</h2>
<p><strong>建行开宝箱抽京东券 &nbsp;亲测100元京东电子券</strong></p>
<p>建行开宝箱抽奖活动，现在是只能抽建行生活京东券</p>
<p>不知道怎么使用来0撸的，可以按照这个步骤来操作</p>
<p>直接0撸3包维达抽纸，注意需要抽到2张3元京东券才可以哦</p>
<p>&nbsp;</p>
<h1>8月24日置顶 抽奖有水</h1>
<p><br>1.建行APP-我的-任务中心-1000积分开宝箱，[这个券也可以自己累积起来购买实物]</p>
<p><span style="color:#FF0000;">怎么购买京东E卡</span>：建行生活APP搜【京东专区】购买E卡可以抵扣</p>`,r:{minutes:13.85,words:4154},t:"爬取日期: 2025-08-24",y:"a"}}],["/posts/2025-08-25.html",{loader:()=>f(()=>import("./2025-08-25.html-QGj1n3RV.js"),[]),meta:{u:1005,e:`
<h2>亲测1.39元秒到 京东金融亚宠展抽现金红包</h2>
<p><strong>亲测1.39元秒到 京东金融亚宠展抽现金红包</strong></p>
<p>每天可参与两次，随便传图片可抽奖</p>
<p>抽随机现金红包，非必中的哦</p>
<p>亲测中0.36+0.32+0.23+0.48元，一共1.39元秒到钱包</p>
<p>&nbsp;</p>
<h1>8月25日置顶</h1>
<p><br>京东金融APP-搜【亚宠展】-上传图片抽奖</p>
<p><img alt="亲测1.39元秒到 京东金融亚宠展抽现金红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/20/c1984d9e573a4946140ad61ebd808025.jpg" style="width: 645px; *//* height: 709px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.6,words:5281},t:"爬取日期: 2025-08-25",y:"a"}}],["/posts/2025-08-26.html",{loader:()=>f(()=>import("./2025-08-26.html-emORBEi4.js"),[]),meta:{u:1004,e:`
<h2>支付宝数币节抽最高2025红包 亲测4.8元数币红包</h2>
<p><strong>支付宝数币节抽最高2025红包 亲测4.8元数币红包</strong></p>
<p>有交行数币的参加，在试点内就可以抽奖</p>
<p>每天可抽一次，抽最高2025元数币红包</p>
<p>反馈中4.8元交行数币红包</p>
<p>&nbsp;</p>
<h1>8月26日置顶 抽奖试试</h1>
<p><br>支付宝APP搜【数币节】-进入活动-点幸运大转盘抽奖</p>
<p><img alt="支付宝数币节抽最高2025红包 亲测4.8元数币红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/27/afb387f7c4a2527025c3e8515fb24778.jpg" style="width: 645px; *//* height: 688px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.35,words:5206},t:"爬取日期: 2025-08-26",y:"a"}}],["/posts/2025-08-27.html",{loader:()=>f(()=>import("./2025-08-27.html-Dmg901GI.js"),[]),meta:{u:1005,e:`
<h2>金典集碎片抽现金/全年奶卡 亲测3.8元秒到</h2>
<p><strong>金典集碎片抽现金/全年奶卡 亲测3.8元秒到</strong></p>
<p>金典有机生活+小程序参与，完成任务领碎片抽奖</p>
<p>抽最高888元现金/全年奶卡等</p>
<p>可以做每日金喜任务，2天抽一次，反馈3.8元现金秒到</p>
<p>&nbsp;</p>
<p>复制发送给微信任意好友打开-下拉每日金喜领1个碎片，2个碎片抽一次</p>
<p>mp://3cdo72OhdBlmJKa</p>
<p><img alt="金典集碎片抽现金/全年奶卡 亲测3.8元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/27/42baa1a0e4a26708f305a3afc9cb175d.jpg" style="width: 641px; *//* height: 667px;" referrerpolicy="no-referrer"></p>`,r:{minutes:11.37,words:3411},t:"爬取日期: 2025-08-27",y:"a"}}],["/posts/2025-08-28.html",{loader:()=>f(()=>import("./2025-08-28.html-CiK6nO6B.js"),[]),meta:{u:1005,e:`
<h2>淘宝新品惊喜盒子抽奖 亲测0.01元实物</h2>
<p><strong>淘宝新品惊喜盒子抽奖 亲测0.01元实物</strong></p>
<p>这个抽奖试非必中的哦，每天参与抽一次</p>
<p>亲测中0.01元小样实物，现在可以试试看</p>
<p>不中的可以第二天试试</p>
<p>&nbsp;</p>
<h1>8月28日置顶 抽奖有水</h1>
<p><br>淘宝APP搜【新品惊喜盒子】-抽奖试试</p>
<p><img alt="淘宝新品惊喜盒子抽奖 亲测0.01元实物-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/29/25cdaa80b212812df58716e765cc6b23.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.55,words:5265},t:"爬取日期: 2025-08-28",y:"a"}}],["/posts/2025-08-29.html",{loader:()=>f(()=>import("./2025-08-29.html-rmpq33ID.js"),[]),meta:{u:1005,e:`
<h2>做凤丹赛推荐官抽现金 亲测0.82元秒到</h2>
<p><strong>做凤丹赛推荐官抽现金 亲测0.82元秒到</strong></p>
<p>新老用户参与这个活动都有红包，最高可以抽到88元现金</p>
<p>现金秒到微信支付的哦，然后邀请好友参与你还可以获得一个随机活动</p>
<p>&nbsp;</p>
<h1>8月29日置顶 补包了</h1>
<p><br>微信打开下方小程序-第一个【立即申请】 登录抽最高88元红包 然后会弹鸿苞红包 领取秒到</p>
<p>mp://IPKcsiYX2ACOVDJ</p>
<p>微信扫码：</p>
<p><img alt="二维码_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/27/04d6d9147477eec15806a554c5256284.jpg" style="width: 220px; *//* height: 220px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.49,words:4046},t:"爬取日期: 2025-08-29",y:"a"}}],["/posts/2025-08-30.html",{loader:()=>f(()=>import("./2025-08-30.html-B36yfhvD.js"),[]),meta:{u:1005,e:`
<h2>亲测0.01元撸丝飘抽纸 天猫超神卡多号多撸</h2>
<p><strong>亲测0.01元撸丝飘抽纸 天猫超神卡多号多撸</strong></p>
<p>需要天猫APP参与活动，部分人可以8个币开通超神卡</p>
<p>领5元无门槛红包，直接0.01元撸实物</p>
<p>亲测0.01元买丝飘抽纸一包，也可以0.1元买洗衣液</p>
<p>基本白嫖速度参与，多号多撸</p>
<p>&nbsp;</p>
<h1>8月30日置顶 新一期</h1>
<p><br>天猫APP-搜【猫猫币】-中间领取喵喵币-返回-点底部【我】-右上角【领取天猫超神卡】点更多进去-8猫币开通</p>
<p><img alt="亲测0.01元撸丝飘抽纸 天猫超神卡多号多撸-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/11/f652d2ef82e502f5240e46d6414da0cd.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:6.63,words:1989},t:"爬取日期: 2025-08-30",y:"a"}}],["/posts/2025-08-31.html",{loader:()=>f(()=>import("./2025-08-31.html-CrKMECKd.js"),[]),meta:{u:1005,e:`
<h2>美团会员膨大牌下午茶 亲测中下午茶通兑卡</h2>
<p><strong>美团会员膨大牌下午茶 亲测中下午茶通兑卡</strong></p>
<p>这个活动大家可以参与试试，需要你有神券</p>
<p>活动不是非必中的哦，有美团会员神券的可以抽奖试试看</p>
<p><br>美团APP-我的-会员中心-神券膨大牌下午茶-试试</p>
<p>美团红包：<a target="_blank" href="http://dpurl.cn/wTJkthSz">http://dpurl.cn/wTJkthSz</a></p>
<p><img alt="美团会员膨大牌下午茶 亲测中下午茶通兑卡_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/31/62ebaaf5f060e6d0dfcededc4107cf60.jpg" style="width: 740px; *//* height: 524px;" referrerpolicy="no-referrer"></p>`,r:{minutes:10.88,words:3265},t:"爬取日期: 2025-08-31",y:"a"}}],["/posts/2025-09-01.html",{loader:()=>f(()=>import("./2025-09-01.html-DvbOULjC.js"),[]),meta:{u:1005,e:`
<h2>滴滴出行打顺风车领蜜雪冰城免单/实物</h2>
<p><strong>滴滴出行打顺风车领蜜雪冰城免单/实物</strong></p>
<p>滴滴出行APP参与，完成打顺风车任务领冲冲卡</p>
<p>1张卡兑换1张蜜雪外卖免单券</p>
<p>也可攒2-3张兑换实物，奖品数量有限，兑完即止</p>
<p><br>微信打开-跳转滴滴出行APP-点击开启活动参与</p>
<p><img alt="滴滴出行打顺风车领蜜雪冰城免单/实物-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/01/2c6c9e7ba900db52598071e9ee2d5dc8.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:25.73,words:7718},t:"爬取日期: 2025-09-01",y:"a"}}],["/posts/2025-09-02.html",{loader:()=>f(()=>import("./2025-09-02.html-D0voG4Cb.js"),[]),meta:{u:1005,e:`
<h2>亲测1元秒到 看多多新人领1元+签到7天9.5元</h2>
<p><strong>亲测1元秒到 看多多新人领1元+签到7天9.5元</strong></p>
<p>看多多APP新人参与，登录就有1.18元现金</p>
<p>可以直接提现1元秒到，新人7天签到还有9.5元现金，满10元可提现</p>
<p>亲测1元现金秒到</p>
<p>&nbsp;</p>
<h1>9月2日置顶 记得参与</h1>
<p><br>看多多APP-底部红包图标进去-弹1.18元登录领取-领取后-去提现-右上角【提现记录】</p>
<p><img alt="亲测1元秒到 看多多新人领1元+签到7天9.5元-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/28/6d7d41f15bf2b6a64147da85c6ff7f73.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:15.42,words:4625},t:"爬取日期: 2025-09-02",y:"a"}}],["/posts/2025-09-03.html",{loader:()=>f(()=>import("./2025-09-03.html-BGdj_iY-.js"),[]),meta:{u:1005,e:`
<h2>联通照片存云端抽奖 亲测10元话费秒到</h2>
<p><strong>联通照片存云端抽奖 亲测10元话费秒到</strong></p>
<p>这个活动每个月都可以参与一次，最高可以抽到100元话费</p>
<p>中到的话费是秒到账的，我是中到了10元话费，大家可以自己参与试试非必中</p>
<p>&nbsp;</p>
<h1>9月3日置顶抽话费试试</h1>
<p>微信打开下方小程序 联通号码登录 随意上传一张图片 抽奖即可</p>
<p>mp://W8kx2B0RSJOsqZr</p>
<p><img alt="联通照片存云端抽奖 亲测10元话费秒到_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/02/13/d69af50b20e51e77da23c4242e4eb97c.jpg" style="width: 645px; *//* height: 715px;" referrerpolicy="no-referrer"></p>`,r:{minutes:16.89,words:5067},t:"爬取日期: 2025-09-03",y:"a"}}],["/posts/2025-09-04.html",{loader:()=>f(()=>import("./2025-09-04.html-PRqdjgxy.js"),[]),meta:{u:1005,e:`
<h2>建行开宝箱抽京东券 &nbsp;亲测100元京东电子券</h2>
<p><strong>建行开宝箱抽京东券 &nbsp;亲测100元京东电子券</strong></p>
<p>建行开宝箱抽奖活动，现在是只能抽建行生活京东券</p>
<p>不知道怎么使用来0撸的，可以按照这个步骤来操作</p>
<p>直接0撸3包维达抽纸，注意需要抽到2张3元京东券才可以哦</p>
<p>&nbsp;</p>
<h1>9月4日置顶 抽奖有水</h1>
<p><br>1.建行APP-我的-任务中心-1000积分开宝箱，[这个券也可以自己累积起来购买实物]</p>
<p><span style="color:#FF0000;">怎么购买京东E卡</span>：建行生活APP搜【京东专区】购买E卡可以抵扣</p>`,r:{minutes:18.33,words:5500},t:"爬取日期: 2025-09-04",y:"a"}}],["/posts/2025-09-05.html",{loader:()=>f(()=>import("./2025-09-05.html-CGWNgj_l.js"),[]),meta:{u:1005,e:`
<h2>淘宝下一顺位是她抽奖 亲测0.58元红包秒到</h2>
<p><strong>淘宝下一顺位是她抽奖 亲测0.58元红包秒到</strong></p>
<p>这个活动大家可以参与试试，有3次投票机会</p>
<p>每投票一次就会自动抽奖一次，我是中到了0.58元淘宝红包秒到</p>
<p>&nbsp;</p>
<h1>9月5日置顶 抽奖有水</h1>
<p><br>淘宝APP搜索【下一顺位是她】投票试试</p>
<p><img alt="淘宝下一顺位是她抽奖 亲测0.58元红包秒到_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/02/86d2ee446017971607b14defa22c4d5b.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.87,words:5361},t:"爬取日期: 2025-09-05",y:"a"}}],["/posts/2025-09-06.html",{loader:()=>f(()=>import("./2025-09-06.html-Hk3CcEQ7.js"),[]),meta:{u:1005,e:`
<h2>美团闪购赢神价免单 抽18元闪购兔单券</h2>
<p><strong>美团闪购赢神价免单 抽18元闪购兔单券</strong></p>
<p>这个活动大家可以参与试试看哦，打开就有一次抽奖机会</p>
<p>有机会抽到18元免单券可以低价撸实物，多微信号可以多次抽奖试试</p>
<p>&nbsp;</p>
<h1>9月6日置顶 抽15-15元券</h1>
<p>微信打开下方小程序地址 抽奖试试</p>
<p>mp://oXO9IpgG4e5JlEb</p>
<p>美团红包：<a target="_blank" href="http://dpurl.cn/luws44mz">http://dpurl.cn/luws44mz</a></p>`,r:{minutes:10.75,words:3224},t:"爬取日期: 2025-09-06",y:"a"}}],["/posts/2025-09-07.html",{loader:()=>f(()=>import("./2025-09-07.html-T4ts5O--.js"),[]),meta:{u:1005,e:`
<h2>小红书市集领无门槛券 亲测2.9元撸一箱农山夫山泉</h2>
<p><strong>小红书市集领无门槛券 亲测2.9元撸一箱农山夫山泉</strong></p>
<p>这个活动需要你把小红书更新到最新的版本</p>
<p>更新之后进去到商城，概率有无门槛优惠券</p>
<p>可以商城最低0.01元包邮撸实物。</p>
<p>&nbsp;</p>
<h1>9月7日置顶 亲测2.9元撸一箱农夫山泉</h1>
<p><br>小红书APP[应用商店更新到最新版本]-我-【市集】-【市集新人首单补贴】点进去弹无门槛红包</p>
<p><img alt="小红书更新最新版本 领券最低0.01元撸实物_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/03/e12e284b5dfcad779e32526a751c048a.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:10.56,words:3168},t:"爬取日期: 2025-09-07",y:"a"}}],["/posts/2025-09-08.html",{loader:()=>f(()=>import("./2025-09-08.html-DsFKE5xA.js"),[]),meta:{u:1005,e:`
<h2>亲测2.6元喝蜜雪+6包麻辣棒 淘宝领红包</h2>
<p><strong>亲测2.6元喝蜜雪+6包麻辣棒 淘宝领红包</strong></p>
<p>想喝蜜雪的可以参与试试看，你那边起送越低</p>
<p>你到手的价格就越低，我是2.6元到手7件实物的</p>
<p>&nbsp;</p>
<p>1.复制口令 淘宝打开领取 15-13元红包</p>
<p><span style="background-color:#ADD8E6;">￥hUEk4lmoUwN￥/ HU7405</span></p>
<p>淘宝扫码：</p>
<p><img alt="亲测2.6元喝蜜雪+6包麻辣棒 淘宝闪购领红包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/23/11229204bedbf39432311c9ac7c8ea5a.jpg" style="width: 220px; *//* height: 220px;" referrerpolicy="no-referrer"></p>`,r:{minutes:16.47,words:4942},t:"爬取日期: 2025-09-08",y:"a"}}],["/posts/2025-09-09.html",{loader:()=>f(()=>import("./2025-09-09.html-9RU2ApBA.js"),[]),meta:{u:1005,e:`
<h2>广发基金抽2万个红包 亲测0.88元秒到</h2>
<p><strong>广发基金抽2万个红包 亲测0.88元秒到</strong></p>
<p>有广发基金账户的才可以参加，需要登陆账号</p>
<p>简单答题对2题即可抽奖，非必中的</p>
<p>亲测0.88元现金红包秒到</p>
<p><br>微信打开-点击参与-答案：A、E</p>
<p><img alt="广发基金抽2万个红包 亲测0.88元秒到&nbsp;-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/09/7e23689e4f284a0fb2f1234e57e59397.jpg" style="width: 645px; *//* height: 655px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.45,words:5235},t:"爬取日期: 2025-09-09",y:"a"}}],["/posts/2025-09-10.html",{loader:()=>f(()=>import("./2025-09-10.html--ogEcQ3s.js"),[]),meta:{u:1005,e:`
<h2>和平精英老用户抽现金 亲测18元秒到</h2>
<p><strong>和平精英老用户抽现金 亲测18元秒到</strong></p>
<p>这个活动大家都可以参与试试看，可以腾讯先锋云游戏登录</p>
<p>有这个游戏的也可以直接去登录，微信打开底部地址 下拉领取登录的2积分抽奖试试</p>
<p>&nbsp;</p>
<h1>9月10日置顶 新一期</h1>
<p>&nbsp;</p>
<p>1.腾讯先锋打开【和平精英】登录一下/或者自己下载了腾讯先锋的参与</p>
<p>2.微信打开底部地址 下拉领取登录游戏的2积分 抽奖试试</p>
<p><img alt="和平精英老用户抽现金 亲测18元秒到_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/09/c597fbf3695b049820e02c00faed4a3c.jpg" style="width: 650px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:15.67,words:4701},t:"爬取日期: 2025-09-10",y:"a"}}],["/posts/2025-09-11.html",{loader:()=>f(()=>import("./2025-09-11.html-DASfiMgA.js"),[]),meta:{u:1005,e:`
<h2>微笑基金金秋嘉年华 亲测10元猫超卡</h2>
<p><strong>微笑基金金秋嘉年华 亲测10元猫超卡</strong></p>
<p>获得卡券后，电子券码将以短信形式于T+4个工作日内发送至用户平台绑定的手机号，</p>
<p>或在活动页面“我的奖品”中查询，请务必在有效期前绑定至相关平台账号，逾期无效，微笑基金无法后补。</p>
<p><br>下载【微笑基金APP】首页顶部【金秋嘉年华】完成任务获得积分-看直播显示要绑卡 就去绑卡一下 因为抽奖的时候需要开户 要绑定一张银行卡</p>
<p><img alt="微笑基金金秋嘉年华 亲测10元猫超卡_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/11/5553175b56d11fedbed35d98b6c93134.jpg" style="width: 740px; *//* height: 537px;" referrerpolicy="no-referrer"></p>`,r:{minutes:18.32,words:5495},t:"爬取日期: 2025-09-11",y:"a"}}],["/posts/2025-09-12.html",{loader:()=>f(()=>import("./2025-09-12.html-CYMRJHe0.js"),[]),meta:{u:1005,e:`
<h2>亲测2.6元喝蜜雪+6包麻辣棒 淘宝领红包</h2>
<p><strong>亲测2.6元喝蜜雪+6包麻辣棒 淘宝领红包</strong></p>
<p>想喝蜜雪的可以参与试试看，你那边起送越低</p>
<p>你到手的价格就越低，我是2.6元到手7件实物的</p>
<p>&nbsp;</p>
<p>1.复制口令 淘宝打开领取 15-13元红包</p>
<p><span style="background-color:#ADD8E6;">￥GHZf4I7VR02￥/ HU7405</span></p>
<p>淘宝扫码：</p>
<p><img alt="亲测2.6元喝蜜雪+6包麻辣棒 淘宝闪购领红包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/23/11229204bedbf39432311c9ac7c8ea5a.jpg" style="width: 220px; *//* height: 220px;" referrerpolicy="no-referrer"></p>`,r:{minutes:15.13,words:4538},t:"爬取日期: 2025-09-12",y:"a"}}],["/posts/2025-09-13.html",{loader:()=>f(()=>import("./2025-09-13.html-Cnxn6Jbp.js"),[]),meta:{u:1005,e:`
<h2>亲测0.11购16个无抗鸡蛋 拼多多百亿消费券</h2>
<p><strong>亲测0.11购16个无抗鸡蛋 拼多多百亿消费券</strong></p>
<p>这个活动每天都可以参与试试看，抽到10元无门槛</p>
<p>就可以最低0.01元购买实物，抽到10元无门槛之后点击去使用</p>
<p>可以看到可以使用的商品，我自己是买了鸡蛋</p>
<p>&nbsp;</p>
<h1>9月13日置顶</h1>
<p>拼多多APP-首页【百亿补贴】-点击【百亿消费券】点击顶部【限时抽奖】抽到10元无门槛可以购买实物</p>
<p><img alt="亲测0.11购16个无抗鸡蛋 拼多多百亿消费券_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/28/7b9d7329cfd4d6e57ff4c48188e59c31.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:15.73,words:4720},t:"爬取日期: 2025-09-13",y:"a"}}],["/posts/2025-09-14.html",{loader:()=>f(()=>import("./2025-09-14.html-CvgdpKhp.js"),[]),meta:{u:1005,e:`
<h2>移动网龄成长礼 亲测腾讯VIP会员月卡</h2>
<p><strong>移动网龄成长礼 亲测腾讯VIP会员月卡</strong></p>
<p>这个活动大家都可以参与试试哦</p>
<p>网龄成长礼，网龄生日礼、网龄惊喜礼都可以领取一下</p>
<p>&nbsp;</p>
<h1>9月14日 又可以领取了</h1>
<p>微信打开底部地址 登录移动号码 领取网龄成长礼试试</p>
<p><img alt="移动网龄成长礼 亲测腾讯VIP会员月卡_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/14/b7facb9278a97c56bc7623ef69c37052.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:8.99,words:2696},t:"爬取日期: 2025-09-14",y:"a"}}],["/posts/2025-09-15.html",{loader:()=>f(()=>import("./2025-09-15.html-D7pW2Mag.js"),[]),meta:{u:1005,e:`
<h2>淘宝淘个中国宝贝 答题赢千元大礼</h2>
<p><strong>淘宝淘个中国宝贝 答题赢千元大礼</strong></p>
<p>这个活动大家可以参与试试看哦，活动期间</p>
<p>每天10点15点20点开启活动，参与答题抽奖，有0.01元实物/红包等奖励</p>
<p><br>淘宝搜【淘个中国宝贝】每天10点15点20点开启活动</p>
<p>9月15日 前三题是&nbsp;B C C</p>
<p>15点答案：c</p>
<p>20点答案：c</p>
<p><img alt="淘宝淘个中国宝贝 答题赢千元大礼_www.iqnew,com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/15/ea1082d6f7b12630855f53db482a06a6.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.01,words:3902},t:"爬取日期: 2025-09-15",y:"a"}}],["/posts/2025-09-16.html",{loader:()=>f(()=>import("./2025-09-16.html-eNnsxcn-.js"),[]),meta:{u:1005,e:`
<h2>支付宝兑换4元券 0元喝蜜雪冰城柠檬水</h2>
<p><strong>支付宝兑换4元券 0元喝蜜雪冰城柠檬水</strong></p>
<p>这个活动大家可以参与一下哦，可以自己到店自取</p>
<p>下单的时候最后支付页面会显示立减，今天不用的话注意一下过期时间</p>
<p>&nbsp;</p>
<h1>9月16日置顶&nbsp; 新一期</h1>
<p>支付宝APP-我的-会员-搜【蜜雪】找到99积分兑换 蜜雪冰城柠檬水4元券-去使用 点单即可</p>
<p><img alt="支付宝兑换4元券 0元喝蜜雪冰城柠檬水_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/25/f8c71ba4dd9cb759e54760b2c9a2737e.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:15.19,words:4558},t:"爬取日期: 2025-09-16",y:"a"}}],["/posts/2025-09-17.html",{loader:()=>f(()=>import("./2025-09-17.html-cECsHmkQ.js"),[]),meta:{u:1005,e:`
<h2>汇添富欢乐星期三抽奖 反馈中奶茶卡</h2>
<p><strong>汇添富欢乐星期三抽奖 反馈中奶茶卡</strong></p>
<p>汇添富基金抽奖活动，微信参与</p>
<p>简单答题抽奖，随机现金红包、奶茶卡等，非必中</p>
<p>反馈中奶茶卡，可以试试看</p>
<p><br>微信打开-下拉底部【阅读原文】-进去答题选【B】</p>
<p><img alt="汇添富欢乐星期三抽奖 反馈中奶茶卡-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/17/594e9b878cde2fb54562739a3e98eea1.jpg" style="width: 645px; *//* height: 653px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.77,words:4432},t:"爬取日期: 2025-09-17",y:"a"}}],["/posts/2025-09-18.html",{loader:()=>f(()=>import("./2025-09-18.html-X0i7MARA.js"),[]),meta:{u:1005,e:`
<h2>工行悦享回归礼抽奖 亲测5元立减金</h2>
<p><strong>工行悦享回归礼抽奖 亲测5元立减金</strong></p>
<p>工行部分地区可参与，应该是长期没用工行的有</p>
<p>简单任务抽立减金，反馈中5元立减金</p>
<p><br>工行APP-任务中心-【工享回归礼】-抽奖</p>
<p><img alt="工行悦享回归礼抽奖 亲测5元立减金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/18/bb07d4b00604a937d0ebbe1cd1973bbd.jpg" style="width: 320px; *//* height: 624px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.74,words:4422},t:"爬取日期: 2025-09-18",y:"a"}}],["/posts/2025-09-19.html",{loader:()=>f(()=>import("./2025-09-19.html-DLTV_SUL.js"),[]),meta:{u:1005,e:`
<h2>金典集碎片抽现金/全年奶卡 亲测3.8元秒到</h2>
<p><strong>金典集碎片抽现金/全年奶卡 亲测3.8元秒到</strong></p>
<p>金典有机生活+小程序参与，完成任务领碎片抽奖</p>
<p>抽最高888元现金/全年奶卡等</p>
<p>可以做每日金喜任务，2天抽一次，反馈3.8元现金秒到</p>
<p>&nbsp;</p>
<h1>9月19日置顶 抽奖试试</h1>
<p>&nbsp;</p>
<p>复制发送给微信任意好友打开-下拉每日金喜领1个碎片，2个碎片抽一次</p>
<p>mp://3cdo72OhdBlmJKa</p>
<p><img alt="金典集碎片抽现金/全年奶卡 亲测3.8元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/27/42baa1a0e4a26708f305a3afc9cb175d.jpg" style="width: 641px; *//* height: 667px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.13,words:5139},t:"爬取日期: 2025-09-19",y:"a"}}],["/posts/2025-09-20.html",{loader:()=>f(()=>import("./2025-09-20.html-DbmnGK38.js"),[]),meta:{u:1005,e:`
<h2>高德扫街榜必得6元以上现金 10月1日可提现</h2>
<p><strong>高德扫街榜必得6元以上现金 10月1日可提现</strong></p>
<p>高德地图APP扫街榜活动，活动比较简单</p>
<p>每天做任务领扫街值，解锁瓜分三档红包奖励，每档可抽3次红包</p>
<p>必得随机红包，翻卡也有瓜分3千万现金，还可以抽打车券，酒店券等奖励</p>
<p>亲测一共撸到5.79元红包，满6元可提现，第二天再去做一下任务抽红包差不多就到提现门槛了</p>
<p>10月1日9点第一轮提现，10月8日9点第二轮提现</p>
<p><br>高德地图APP-首页【高德扫街榜】-右上角悬浮红包图标进去</p>`,r:{minutes:9.93,words:2980},t:"爬取日期: 2025-09-20",y:"a"}}],["/posts/2025-09-21.html",{loader:()=>f(()=>import("./2025-09-21.html-C4GaNfEZ.js"),[]),meta:{u:1005,e:`
<h2>淘宝连续签到7天 必得18.8元外卖红包</h2>
<p><strong>淘宝连续签到7天 必得18.8元外卖红包</strong></p>
<p>这个活动大家可以参与试试看哦，连续签到7天</p>
<p>必得18.8元外卖红包，不确定是不是无门槛，可以参与试试</p>
<p>&nbsp;</p>
<p>复制淘宝打开领券 右上角【红包】下拉连续签到7天必得18.8元红包</p>
<p><span style="background-color:#ADD8E6;">￥AbO74vcZEac￥/ HU7405</span></p>
<p>淘宝扫码：</p>
<p><img alt="二维码_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/21/bc6b2471c3301bb9ec9e1893aa814b52.jpg" style="width: 218px; *//* height: 220px;" referrerpolicy="no-referrer"></p>`,r:{minutes:11.34,words:3403},t:"爬取日期: 2025-09-21",y:"a"}}],["/posts/2025-09-22.html",{loader:()=>f(()=>import("./2025-09-22.html-DiR69J8E.js"),[]),meta:{u:1005,e:`
<h2>亲测0.4元购2元E卡 闲鱼领2元券</h2>
<p><strong>亲测0.4元购2元E卡 闲鱼领2元券</strong></p>
<p>这个活动大家可以抽奖试试哦，中奖之后就可以购买京东E卡</p>
<p>我是0.4元购买了2元京东E卡，还是不错的哦</p>
<p>&nbsp;</p>
<h1>9月22日置顶 部分人有</h1>
<p>&nbsp;</p>
<p>闲鱼APP-顶部【省钱神券】点进去 看看会不会弹2元券-去首页搜【E卡】可以购买抵扣</p>
<p>也可以在底部【消息】-通知消息-看看有无【恭喜获得惊喜红包】</p>
<p><img alt="亲测0.4元购2元E卡 闲鱼领2元券——www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/11/e1e90851c272b62c1a054010354a69c8.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:15.7,words:4710},t:"爬取日期: 2025-09-22",y:"a"}}],["/posts/2025-09-23.html",{loader:()=>f(()=>import("./2025-09-23.html-DVb9JZyK.js"),[]),meta:{u:1005,e:`
<h2>亲测0.4元购2元E卡 闲鱼领2元券</h2>
<p><strong>亲测0.4元购2元E卡 闲鱼领2元券</strong></p>
<p>这个活动大家可以抽奖试试哦，中奖之后就可以购买京东E卡</p>
<p>我是0.4元购买了2元京东E卡，还是不错的哦</p>
<p>&nbsp;</p>
<h1>9月23日置顶 部分人有</h1>
<p>&nbsp;</p>
<p>闲鱼APP-顶部【省钱神券】点进去 看看会不会弹2元券-去首页搜【E卡】可以购买抵扣</p>
<p>也可以在底部【消息】-通知消息-看看有无【恭喜获得惊喜红包】</p>
<p><img alt="亲测0.4元购2元E卡 闲鱼领2元券——www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/07/11/e1e90851c272b62c1a054010354a69c8.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.91,words:4472},t:"爬取日期: 2025-09-23",y:"a"}}],["/posts/2025-09-24.html",{loader:()=>f(()=>import("./2025-09-24.html-BOXMaqOl.js"),[]),meta:{u:1005,e:`
<h2>亲测0.1元蛋挞/0.9元柠檬水 支付宝神券限时低价</h2>
<p><strong>亲测0.1元蛋挞/0.9元柠檬水 支付宝神券限时低价</strong></p>
<p>支付宝神券团购限时低价活动，每天可能都有</p>
<p>地区不一样东西也不一样</p>
<p>我这里是有0.1元的库迪咖啡蛋挞、0.9元古茗柠檬水等</p>
<p><br>支付宝搜【神券】-超划算进去-限时低价每日爆款，下拉自己选择</p>
<p><img alt="亲测0.1元蛋挞/0.9元柠檬水 支付宝神券限时低价-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/24/a0bb48d8da91cf0862dfbff78fdeed46.jpg" style="width: 740px; *//* height: 492px;" referrerpolicy="no-referrer"></p>`,r:{minutes:18.69,words:5606},t:"爬取日期: 2025-09-24",y:"a"}}],["/posts/2025-09-25.html",{loader:()=>f(()=>import("./2025-09-25.html-XguvLx6L.js"),[]),meta:{u:1005,e:`
<h2>反馈100元立减金 建行浏览网点服务抽立减金</h2>
<p><strong>反馈100元立减金 建行浏览网点服务抽立减金&nbsp;</strong></p>
<p>建行任务中心新盲盒活动，都能参加</p>
<p>简单浏览任务抽最高100元微信立减金</p>
<p>反馈中100元、10元微信立减金，奖品有很多，非必中哦</p>
<p>&nbsp;</p>
<h1>9月25日置顶 新一期</h1>
<p><br>建行APP-任务中心-浏览网点服务、体验社保医保、查看电子回单试试</p>
<p>没有入口的扫码参加</p>
<p><img alt="反馈100元立减金 建行浏览网点服务抽立减金&nbsp;-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/05/12/3975f3860fed4de5637a653819da80f1.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:20.03,words:6009},t:"爬取日期: 2025-09-25",y:"a"}}],["/posts/2025-09-26.html",{loader:()=>f(()=>import("./2025-09-26.html-DMuGY3C6.js"),[]),meta:{u:1005,e:`
<h2>滴滴出行领200-50元加油券 可156加200元油</h2>
<p><strong>滴滴出行领200-50元加油券 可156加200元油</strong></p>
<p>滴滴出行APP才有，需要加油的参与一下</p>
<p>直接领200-50元加油券，到指定加油站使用即可,7天有效期记得使用</p>
<p>每日10点、16点还可抢200-100元加油券，这个有点难，自己蹲</p>
<p><br>滴滴出行APP-首页下拉【加油/充电】-顶部横幅/自动弹【金秋大促3重礼 加油立减50元】-直接领取</p>
<p><img alt="滴滴出行领200-50元加油券 可156加200元油-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/26/5357db382854b04228741f5993216447.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:21.03,words:6310},t:"爬取日期: 2025-09-26",y:"a"}}],["/posts/2025-09-27.html",{loader:()=>f(()=>import("./2025-09-27.html-Bv26qvD-.js"),[]),meta:{u:1005,e:`
<h2>移动全球通星动日抽手机/腾讯视频年卡/双权益礼包 需银卡以上</h2>
<p><strong>移动全球通星动日抽手机/腾讯视频年卡/双权益礼包 需银卡以上</strong></p>
<p>活动需要关注公众号进入，是移动全球通银卡以上的可以抽奖</p>
<p>奖品有vivo手机/腾讯年卡/贝乐虎VIP年卡/双权益礼包等，需自测</p>
<p>银卡以上的可以去试试看，看脸的</p>
<p>&nbsp;</p>
<h1>9月27日置顶 新一期</h1>
<p><br>移动APP搜【全球通星动日】26-28日每日可抽一次</p>
<p><img alt="移动全球通星动日抽手机/腾讯视频年卡/双权益礼包 需银卡以上-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2021/12/26/266bc5386fb95c8b2a566e992ac0e32b.jpg" style="width: 645px; *//* height: 569px;" referrerpolicy="no-referrer"></p>`,r:{minutes:11.04,words:3312},t:"爬取日期: 2025-09-27",y:"a"}}],["/posts/2025-09-28.html",{loader:()=>f(()=>import("./2025-09-28.html-BdVCU_tU.js"),[]),meta:{u:1005,e:`
<h2>京东抽4.1-4元补贴券 亲测0.01元撸2双袜子</h2>
<p><strong>京东抽4.1-4元补贴券 亲测0.01元撸2双袜子</strong></p>
<p>这个活动多京东号可以多撸的哦</p>
<p>大家可以参与试试看，有袜子和洗衣凝珠等等</p>
<p>1.京东APP-首页-【9.9包邮】点进去-【天天抽好运】 第一次抽红包，第二次必中4.1-4补贴卷</p>
<p>2.叠4券，以下任选1件拍下<br>-<br>𝟬💰‼中筒袜1双<br><a target="_blank" href="https://u.jd.com/0DLWS1a&nbsp;">https://u.jd.com/0DLWS1a&nbsp;</a><br>𝟬💰‼抽纸100抽1包<br><a target="_blank" href="https://u.jd.com/0OLAGKb">https://u.jd.com/0OLAGKb</a><br>𝟬💰‼洗衣凝珠20颗<br><a target="_blank" href="https://u.jd.com/0gLjJyw">https://u.jd.com/0gLjJyw</a><br>𝟬💰‼可爱日系袜子2双<br><a target="_blank" href="https://u.jd.com/0GL0F2v">https://u.jd.com/0GL0F2v</a><br>𝟬💰‼女士中筒袜2双<br><a target="_blank" href="https://u.jd.com/0rLlDsL&nbsp;">https://u.jd.com/0rLlDsL&nbsp;</a><br>𝟬💰‼抽纸75抽*2包<br><a target="_blank" href="https://u.jd.com/0rLHMW4">https://u.jd.com/0rLHMW4</a><br>0.5💰‼挂抽816张1提<br><a target="_blank" href="https://u.jd.com/0GLcul4">https://u.jd.com/0GLcul4</a></p>`,r:{minutes:12.06,words:3618},t:"爬取日期: 2025-09-28",y:"a"}}],["/posts/2025-09-29.html",{loader:()=>f(()=>import("./2025-09-29.html-uK9d_Occ.js"),[]),meta:{u:1005,e:`
<h2>亲测中优酷月卡 联通王卡超级会员日抽奖</h2>
<p><strong>亲测中优酷月卡 联通王卡超级会员日抽奖</strong></p>
<p>三网都可以参与，联通王卡中奖率大</p>
<p>抽各类视频、音乐会员，非必中</p>
<p>反馈中优酷月卡，奖品数量有限领完即止</p>
<p><br>微信打开-登录直接抽奖</p>
<p><img alt="亲测中优酷月卡 联通王卡超级会员日抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/29/285ecc2e629527beec0b9353fe7f97a9.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.9,words:4471},t:"爬取日期: 2025-09-29",y:"a"}}],["/posts/2025-09-30.html",{loader:()=>f(()=>import("./2025-09-30.html-DZDmfDEv.js"),[]),meta:{u:1005,e:`
<h2>闲鱼搜关键词抽红包 亲测17.6元红包</h2>
<p><strong>闲鱼搜关键词抽红包 亲测17.6元红包</strong></p>
<p>这个活动大家可以参与试试看哦，有多次抽奖机会</p>
<p>反复搜索关键词，就会弹抽奖，一般会中2次红包的哦</p>
<p>&nbsp;</p>
<h1>9月30日置顶</h1>
<p><br>闲鱼APP搜【十五的月亮】点进去 弹抽红包 &nbsp;反复多次搜索 试试</p>
<p><img alt="闲鱼搜关键词抽红包 亲测17.6元红包_www. iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/29/5a6a7d56d14c97e344b9b7eed5334ad6.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:16.17,words:4851},t:"爬取日期: 2025-09-30",y:"a"}}],["/posts/2025-10-01.html",{loader:()=>f(()=>import("./2025-10-01.html-DsHdyQbX.js"),[]),meta:{u:1005,e:`
<h2>淘宝特价版登录领3天免单卡</h2>
<p>
    <a rel="nofollow" target="_blank" href="https://www.qqhjy6.xyz/caiji/data/images/2025-09-29/44078c326bd27f7bd13af3fb1d269ddc.jpg"><img src="https://image.smallfawn.work/?url=https://www.qqhjy6.xyz/caiji/data/images/2025-09-29/44078c326bd27f7bd13af3fb1d269ddc.jpg" title="淘宝特价版登录领3天免单卡 " alt="淘宝特价版登录领3天免单卡 " referrerpolicy="no-referrer"></a> 
</p>`,r:{minutes:1.52,words:456},t:"爬取日期: 2025-10-01",y:"a"}}],["/posts/2025-10-02.html",{loader:()=>f(()=>import("./2025-10-02.html-g26EoiSk.js"),[]),meta:{u:1005,e:`
<h2>淘宝猜答案抢免单 每日多场抢18元免单券</h2>
<p><strong>淘宝猜答案抢免单 每日多场抢18元免单券</strong></p>
<p>这个活动今天开始的，大家都可以参与试试看哦</p>
<p>每天有多场，大家先填写答案，然后按时去抢免单即可</p>
<p>&nbsp;</p>
<h1>10月2日置顶</h1>
<p>淘宝APP搜【猜答案抢免单】本场有20万份免单-填写好答案后 准时去页面点击【到点去抢免单卡】参与即可</p>
<p>今天上午场答案：11:35</p>
<p>下午场答案：19:20</p>
<p><span style="color:#FF0000;">技巧：</span></p>`,r:{minutes:12.56,words:3769},t:"爬取日期: 2025-10-02",y:"a"}}],["/posts/2025-10-03.html",{loader:()=>f(()=>import("./2025-10-03.html-CxX8Le44.js"),[]),meta:{u:1005,e:`
<h2>微信双节碰碰乐抽红包 亲测0.58元秒到</h2>
<p><strong>微信双节碰碰乐抽红包 亲测0.58元秒到</strong></p>
<p>这个活动大家都可以参与试试看哦，玩游戏成功就可以抽奖</p>
<p>抽到现金红包秒到微信支付，还是不错的哦，没有中的话游戏机会用完抽奖</p>
<p><br>微信搜【常熟农商银行】公众号回复【家国团圆】玩游戏抽红包</p>
<p><img alt="微信双节碰碰乐抽红包 亲测0.58元秒到_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/03/59cc9f305c34077388b7cf080cbd4bb2.jpg" style="width: 650px; *//* height: 694px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.12,words:5137},t:"爬取日期: 2025-10-03",y:"a"}}],["/posts/2025-10-04.html",{loader:()=>f(()=>import("./2025-10-04.html-BwTo5u_9.js"),[]),meta:{u:1005,e:`
<h2>同程黄金周挖到黄金了 亲测2.52元现金</h2>
<p><strong>同程黄金周挖到黄金了 亲测2.52元现金</strong></p>
<p>这个活动大家可以参与试试看哦，完成任务可以有多次抽奖机会</p>
<p>抽到之后可以可以提现的哦，活动是非必中的哦，</p>
<p><br>同程旅行APP-首页横幅【黄金周 挖到真黄金了】/搜【黄金周】点击【立即参与】进去玩游戏抽红包试试</p>
<p><img alt="同程黄金周挖到黄金了 亲测2.52元现金_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/04/313a9524aa13773bd2d3d1fddaca0587.jpg" style="width: 650px; *//* height: 645px;" referrerpolicy="no-referrer"></p>`,r:{minutes:7.29,words:2188},t:"爬取日期: 2025-10-04",y:"a"}}],["/posts/2025-10-05.html",{loader:()=>f(()=>import("./2025-10-05.html-DwtUZ143.js"),[]),meta:{u:1005,e:`
<h2>移动用户抽0.6~666亓话费券</h2>
<p>
    <a rel="nofollow" target="_blank" href="https://www.qqhjy6.xyz/caiji/data/images/2025-10-03/7951b9734a3a6bb773ce89878fb40faf.jpg"><img src="https://image.smallfawn.work/?url=https://www.qqhjy6.xyz/caiji/data/images/2025-10-03/7951b9734a3a6bb773ce89878fb40faf.jpg" title="移动用户抽0.6~666亓话费券 " alt="移动用户抽0.6~666亓话费券 " referrerpolicy="no-referrer"></a> 
</p>`,r:{minutes:1.4,words:420},t:"爬取日期: 2025-10-05",y:"a"}}],["/posts/2025-10-06.html",{loader:()=>f(()=>import("./2025-10-06.html-DVBLRNuk.js"),[]),meta:{u:1005,e:`
<h2>淘宝猜答案抢免单 每日多场抢18元免单券</h2>
<p><strong>淘宝猜答案抢免单 每日多场抢18元免单券</strong></p>
<p>这个活动今天开始的，大家都可以参与试试看哦</p>
<p>每天有多场，大家先填写答案，然后按时去抢免单即可</p>
<p>&nbsp;</p>
<h1>10月6日置顶</h1>
<p>淘宝APP搜【猜答案抢免单】本场有20万份免单-填写好答案后 准时去页面点击【到点去抢免单卡】参与即可</p>
<p>今天上午场答案：</p>
<p>下午场答案：5万免单16:15</p>
<p><span style="color:#FF0000;">技巧：</span></p>`,r:{minutes:9.94,words:2982},t:"爬取日期: 2025-10-06",y:"a"}}],["/posts/2025-10-07.html",{loader:()=>f(()=>import("./2025-10-07.html-5VNO73WT.js"),[]),meta:{u:1005,e:`
<h2>工行借记卡月月花抽奖 赢最高88元微信立减金</h2>
<p><strong>工行借记卡月月花抽奖 赢最高88元微信立减金</strong></p>
<p>有工行借记卡的可以微信打开底部小程序</p>
<p>报名，消费达标就可以参与抽奖，当月消费或者转账金额达到对应金额</p>
<p>就可以参与抽奖，可以抽到最高88元微信立减金，一个月最多可以抽奖4次</p>
<p>&nbsp;</p>
<h1>10月7日置顶 达标的去抽奖</h1>
<p><br>微信打开下方小程序 报名 消费达标/转账达标抽奖试试&nbsp;</p>
<p>金额2000、5000、10000、20000 分别可以抽奖一次</p>`,r:{minutes:9.26,words:2779},t:"爬取日期: 2025-10-07",y:"a"}}],["/posts/2025-10-08.html",{loader:()=>f(()=>import("./2025-10-08.html-Dx9TPsX1.js"),[]),meta:{u:1005,e:`
<h2>淘宝秒杀0.01元撸实物6选1 签到5天领取</h2>
<p><strong>淘宝秒杀0.01元撸实物6选1 签到5天领取</strong></p>
<p>这个应该都有入口，没有的淘宝更新一下最新版本</p>
<p>简单签到5天，每天浏览10秒即可</p>
<p>1分钱任选1件包邮实物，有可乐、洗衣液、大米、抽纸、洗发水、鸡蛋</p>
<p>能参加的参加哦，还挺简单</p>
<p>&nbsp;</p>
<h1>10月8日置顶 新一轮</h1>
<p><br>淘宝APP-首页【淘宝秒杀】-中间【一份领好货】-任选一个实物-立即去逛10S即可</p>
<p><img alt="淘宝秒杀0.01元撸实物6选1 签到5天领取-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/26/528c3e7a1a93bbdcfdf93b32ba0340b5.jpg" style="width: 740px; *//* height: 549px;" referrerpolicy="no-referrer"></p>`,r:{minutes:10.28,words:3085},t:"爬取日期: 2025-10-08",y:"a"}}],["/posts/2025-10-09.html",{loader:()=>f(()=>import("./2025-10-09.html-Vjz4sFiq.js"),[]),meta:{u:1005,e:`
<h2>京东每日抽最高1000京豆 亲测188京豆秒到</h2>
<p><strong>京东每日抽最高1000京豆 亲测188京豆秒到</strong></p>
<p>京东幸运抽奖，每天可以参加抽奖一次</p>
<p>抽最高1000京豆，看运气的哦</p>
<p>亲测中188京豆，领取秒到，每天记得去抽</p>
<p>&nbsp;</p>
<h1>10月9置顶 继续参与</h1>
<p><br>京东APP-我的-京豆-右上角【立即签到】-幸运奖励最高+1000，点击抽奖</p>
<p>抽中京豆后-去APP首页-秒杀-点击【幸运奖励】领取到账</p>
<p><img alt="京东每日抽最高1000京豆 亲测188京豆秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/21/0a0548fce5a459262691a33f3001b275.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.85,words:4455},t:"爬取日期: 2025-10-09",y:"a"}}],["/posts/2025-10-10.html",{loader:()=>f(()=>import("./2025-10-10.html-D3NlQTJb.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领取《重力回路》游戏</h2>
<p><strong>Epic喜加1免费领取《重力回路》游戏</strong></p>
<p>Epic喜加1《重力回路》是一款极具经典街机精神的酷炫动作2D平台游戏</p>
<p>这款游戏是类似八九十年代的经典平台游戏，玩家可以将动作发挥到极致，将力量注入拳头揍飞敌人或是抓握敌人，拉近距离近身搏击</p>
<p>限时免费领取时间至10月16日23:00</p>
<p><br>《重力回路》</p>
<p><img alt="Epic喜加1免费领取《重力回路》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/10/aa5e1517849c1d7a11f3ed32e0bc7ede.jpg" style="width: 740px; *//* height: 442px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.2,words:4261},t:"爬取日期: 2025-10-10",y:"a"}}],["/posts/2025-10-11.html",{loader:()=>f(()=>import("./2025-10-11.html-Dl4AJbpS.js"),[]),meta:{u:1005,e:`
<h2>建行缴费达标领5+5元微信立减金 亲测5元秒到</h2>
<p><strong>建行缴费达标领5+5元微信立减金 亲测5元秒到</strong></p>
<p>建行APP上参与充手机话费的活动哦，缴费达标可以领取5+5元微信立减金</p>
<p>我是充30话费领5元立减金，亲测已领5元立减金，有建行的去试试看吧</p>
<p>&nbsp;</p>
<h1>10月11日置顶 新一期，达标领2-5元立减金</h1>
<p>&nbsp;</p>
<p>建行APP搜搜【缴费小美好】-进去，任务一、任务二，按要求去缴费后领取立减金，每月可参与</p>
<p><img alt="建行缴费达标领5+5元微信立减金 亲测5元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2023/11/02/3a6c2b0b9dd36951f57d9fedd07ae80a.jpg" style="width: 320px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:9.13,words:2739},t:"爬取日期: 2025-10-11",y:"a"}}],["/posts/2025-10-12.html",{loader:()=>f(()=>import("./2025-10-12.html-DEabS49E.js"),[]),meta:{u:1005,e:`
<h2>京东下单抽免单 亲测中425.40元免单</h2>
<p><strong>京东下单抽免单 亲测中425.40元免单</strong></p>
<p>这个免单的奖励是秒到京东钱包的哦</p>
<p>大家可以参与试试看哦，活动页面下单一次可以抽奖试试概率中免单，</p>
<p>&nbsp;</p>
<h1>10月12日置顶</h1>
<p>微信/京东打开底部复制 下拉购买医药 返回抽奖</p>
<p><img alt="京东下单抽免单 亲测中425.40元免单_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/10/f9b413da51f312197e34b659162e4e13.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:12.71,words:3814},t:"爬取日期: 2025-10-12",y:"a"}}],["/posts/2025-10-13.html",{loader:()=>f(()=>import("./2025-10-13.html-BTZrjHJD.js"),[]),meta:{u:1005,e:`
<h2>淘宝天降福利每日1元购 1元1提悬挂抽纸</h2>
<p><strong>淘宝天降福利每日1元购 1元1提悬挂抽纸&nbsp;</strong></p>
<p>淘宝天降福利活动又有了，每天可参与</p>
<p>页面各类商品都有，很多天降福利1元的商品</p>
<p>想买什么自己去选很划算，亲测1元提挂抽</p>
<p><br>复制口令淘宝打开-下拉自己找需要购买的-点击商品弹礼金直接拍</p>
<p><span style="background-color:#ADD8E6;">37￥ HU108 hrWGf0pZXfO￥</span></p>
<p><img alt="淘宝天降福利每日1元购 1元1提悬挂抽纸-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/11/11d46bec4e941f809c953aac218b7f51.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.05,words:3915},t:"爬取日期: 2025-10-13",y:"a"}}],["/posts/2025-10-14.html",{loader:()=>f(()=>import("./2025-10-14.html-BoqJl5t6.js"),[]),meta:{u:1005,e:`
<h2>建行1分钱撸4张5折公交地铁出行券 亲测秒到支付宝</h2>
<p><strong>建行1分钱撸4张5折公交地铁出行券 亲测秒到支付宝</strong></p>
<p>建行用户参加，不限卡类通用的</p>
<p>0.01元到手4张5折公交地铁券，最高抵扣1元</p>
<p>需要的可以撸一下，亲测秒到支付宝卡包</p>
<p>&nbsp;</p>
<h1>10月14日置顶 新一期可撸</h1>
<p>建行搜【惠省钱】-下拉【支付1分钱 出行享优惠】-支付1分钱购买</p>
<p><img alt="建行1分钱撸4张5折公交地铁出行券 亲测秒到支付宝-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/02/11/095c967fd23e39042844170cb58e476f.jpg" style="width: 740px; *//* height: 545px;" referrerpolicy="no-referrer"></p>`,r:{minutes:12.06,words:3617},t:"爬取日期: 2025-10-14",y:"a"}}],["/posts/2025-10-15.html",{loader:()=>f(()=>import("./2025-10-15.html-BWEbf8yP.js"),[]),meta:{u:1004,e:`
<h2>京东每日领无门槛红包 最高11111元无门槛红包</h2>
<p><strong>京东每日领无门槛红包 最高11111元无门槛红包</strong></p>
<p>这个活动晚上20点整横开始最高面额</p>
<p>大家可以参与试试看哦，每天可以领取3次</p>
<p>后期还有加码和猜拳玩法可以获得大额活动</p>
<p>连续打卡还可以获得专属加码红包哦</p>
<p>&nbsp;</p>
<h1>先领3次日常红包 20点加码多一次机会</h1>
<p><br>微信/京东打开下方地址 20点领取京东红包</p>
<p>1.<a target="_blank" href="https://u.jd.com/010hTwR">https://u.jd.com/010hTwR</a><br>2.<a target="_blank" href="https://u.jd.com/010hTwR">https://u.jd.com/010hTwR</a><br>3.<a target="_blank" href="https://u.jd.com/010hTwR">https://u.jd.com/010hTwR</a></p>`,r:{minutes:18.35,words:5506},t:"爬取日期: 2025-10-15",y:"a"}}],["/posts/2025-10-16.html",{loader:()=>f(()=>import("./2025-10-16.html-CGLvSojl.js"),[]),meta:{u:1005,e:`
<h2>淘宝双11超级红包 每日开最高25888元</h2>
<p><strong>淘宝双11超级红包 每日开最高25888元</strong></p>
<p>淘宝双11活动开始了，每日可开一次超级红包</p>
<p>今天10点开始首发红包，记得去领取</p>
<p>最高25888元无门槛红包，还有不定期加码大额红包领取</p>
<p>&nbsp;</p>
<h1>10月16日置顶 20点必得1.1元红包</h1>
<p><span style="color:#FF0000;">准备20点淘宝加码必中1.1元<br>20:00-20:15限时不限量</span>，人人有份<br>必须用这个口令，复制淘宝打开<br><span style="background-color:#ADD8E6;">09￥ MF937 tbnYf1KrCnW￥</span></p>`,r:{minutes:16.96,words:5087},t:"爬取日期: 2025-10-16",y:"a"}}],["/posts/2025-10-17.html",{loader:()=>f(()=>import("./2025-10-17.html-Bz4pYBT-.js"),[]),meta:{u:1005,e:`
<h2>京东每日领无门槛红包 最高11111元无门槛红包</h2>
<p><strong>京东每日领无门槛红包 最高11111元无门槛红包</strong></p>
<p>这个活动晚上20点整横开始最高面额</p>
<p>大家可以参与试试看哦，每天可以领取3次</p>
<p>后期还有加码和猜拳玩法可以获得大额活动</p>
<p>连续打卡还可以获得专属加码红包哦</p>
<p>&nbsp;</p>
<h1>10月17日置顶 20点额外次数</h1>
<p><br>微信/京东打开下方地址 20点领取京东红包</p>
<p>1.<a target="_blank" href="https://u.jd.com/010hTwR">https://u.jd.com/010hTwR</a><br>2.<a target="_blank" href="https://u.jd.com/010hTwR">https://u.jd.com/010hTwR</a><br>3.<a target="_blank" href="https://u.jd.com/010hTwR">https://u.jd.com/010hTwR</a></p>`,r:{minutes:14.28,words:4285},t:"爬取日期: 2025-10-17",y:"a"}}],["/posts/2025-10-18.html",{loader:()=>f(()=>import("./2025-10-18.html-C9s06pID.js"),[]),meta:{u:1005,e:`
<h2>美团闪购赢神价免单 抽18元闪购兔单券</h2>
<p><strong>美团闪购赢神价免单 抽18元闪购兔单券</strong></p>
<p>这个活动大家可以参与试试看哦，打开就有一次抽奖机会</p>
<p>有机会抽到18元免单券可以低价撸实物，多微信号可以多次抽奖试试</p>
<p>&nbsp;</p>
<h1>10月18日置顶 抽15-15元券</h1>
<p>微信打开下方小程序地址 抽奖试试</p>
<p>mp://hhJS91qzOMAbq6l</p>
<p>美团红包：<a target="_blank" href="http://dpurl.cn/luws44mz">http://dpurl.cn/luws44mz</a></p>`,r:{minutes:16.52,words:4957},t:"爬取日期: 2025-10-18",y:"a"}}],["/posts/2025-10-19.html",{loader:()=>f(()=>import("./2025-10-19.html-CIm0B9F-.js"),[]),meta:{u:1005,e:`
<h2>亲测哔哩哔哩月卡+QQ音乐绿钻月卡 联通星享日抽奖</h2>
<p><strong>亲测哔哩哔哩月卡+QQ音乐绿钻月卡 联通星享日抽奖</strong></p>
<p>需要联通手机号5-7星级用户参与，不符合的不能抽奖</p>
<p>可抽腾讯、爱奇艺、优酷月卡、滴滴打车券等</p>
<p>符合的抽应该是必中奖励，限抽一次</p>
<p>&nbsp;</p>
<h1>10月19日置顶 新一期</h1>
<p>联通APP搜【联通星享日】-进去抽奖</p>
<p><img alt="亲测哔哩哔哩月卡+QQ音乐绿钻月卡 联通星享日抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/01/20/d6d851c191df1f6c55287ab907a124c1.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:11.25,words:3374},t:"爬取日期: 2025-10-19",y:"a"}}],["/posts/2025-10-20.html",{loader:()=>f(()=>import("./2025-10-20.html-BFcJ0elt.js"),[]),meta:{u:1005,e:`
<h2>王者荣耀换区注册领1元 亲测1元秒到</h2>
<p><strong>王者荣耀换区注册领1元 亲测1元秒到</strong></p>
<p>王者荣耀新老用户参与，老用户直接换区注册一下就可以</p>
<p>不需要下载游戏，可以秒玩登录</p>
<p>亲测1元秒到，红包数量有限领完即止</p>
<p><br>微信扫码下拉新用户专属礼1亓荭包，去秒玩换区注册完就可以领（文末有秒玩地址）</p>
<p><img alt="王者荣耀换区注册领1元 亲测1元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/20/ef76750974e318ab9d4fc5c58f549aea.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:28.08,words:8424},t:"爬取日期: 2025-10-20",y:"a"}}],["/posts/2025-10-21.html",{loader:()=>f(()=>import("./2025-10-21.html-DZIn3w82.js"),[]),meta:{u:1005,e:`
<h2>淘宝双11超级红包 每日开最高25888元</h2>
<p><strong>淘宝双11超级红包 每日开最高25888元</strong></p>
<p>淘宝双11活动开始了，每日可开一次超级红包</p>
<p>今天10点开始首发红包，记得去领取</p>
<p>最高25888元无门槛红包，还有不定期加码大额红包领取</p>
<p>&nbsp;</p>
<h1>10月21日置顶 今晚20点必得1.1元&nbsp;</h1>
<p><span style="color:#FF0000;">20点掏宝必中1.1亓<br>限时不限量持续15分钟20:00-20:15</span><br>必须用这个淘口令<br><span style="background-color:#ADD8E6;">2$DneNfd042B5$:// MF1001</span></p>`,r:{minutes:12.17,words:3651},t:"爬取日期: 2025-10-21",y:"a"}}],["/posts/2025-10-22.html",{loader:()=>f(()=>import("./2025-10-22.html-DkhuM8eT.js"),[]),meta:{u:1005,e:`
<h2>淘宝双11超级红包 每日开最高25888元</h2>
<p><strong>淘宝双11超级红包 每日开最高25888元</strong></p>
<p>淘宝双11活动开始了，每日可开一次超级红包</p>
<p>今天10点开始首发红包，记得去领取</p>
<p>最高25888元无门槛红包，还有不定期加码大额红包领取</p>
<p>&nbsp;</p>
<h1>10月22日置顶 今晚20点必得1.1元&nbsp;</h1>
<p><span style="color:#FF0000;">20点掏宝必中1.1亓<br>限时不限量持续15分钟20:00-20:15</span><br>必须用这个淘口令<br><span style="background-color:#ADD8E6;">7$HmLzfdEvzy4$:// MU5183</span></p>`,r:{minutes:18.75,words:5625},t:"爬取日期: 2025-10-22",y:"a"}}],["/posts/2025-10-23.html",{loader:()=>f(()=>import("./2025-10-23.html-Ch1t02NM.js"),[]),meta:{u:1005,e:`
<h2>亲测0.88元秒到 南方基金服务登录领最高88.88元</h2>
<p><strong>亲测0.88元秒到 南方基金服务登录领最高88.88元</strong></p>
<p>活动期间可以参与领取一次</p>
<p>首次登录南方基金服务小程序即可领取，最高88.88元现金红包</p>
<p>亲测0.88元现金秒</p>
<p><br>复制发送给微信任意好友打开-立即领取</p>
<p>mp://nGREi8OGaG3mqWq</p>
<p><img alt="亲测0.88元秒到 南方基金服务登录直接领-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/23/b02aa25f298cb0840aa0597335ce063e.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:16.83,words:5050},t:"爬取日期: 2025-10-23",y:"a"}}],["/posts/2025-10-24.html",{loader:()=>f(()=>import("./2025-10-24.html-BgiBanmk.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领《Fear the Spotlight》游戏</h2>
<p><strong>Epic喜加1免费领《Fear the Spotlight》游戏</strong></p>
<p>Epic喜加1《Fear the Spotlight》是一款氛围浓厚的第三人称恐怖冒险游戏</p>
<p>其中充满令人不安的谜团。与薇薇安和艾米在放学后潜入学校，设法在失控的通灵仪式中活下来、解开触控式谜题</p>
<p>限时免费领取时间至10月30日23:00</p>
<p><br>《Fear the Spotlight》</p>
<p><img alt="Epic喜加1免费领《Fear the Spotlight》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/24/d9437886b852dd2576e7bf7d4b2db0c5.jpg" style="width: 740px; *//* height: 409px;" referrerpolicy="no-referrer"></p>`,r:{minutes:16.08,words:4824},t:"爬取日期: 2025-10-24",y:"a"}}],["/posts/2025-10-25.html",{loader:()=>f(()=>import("./2025-10-25.html-CQFXf1Nq.js"),[]),meta:{u:1005,e:`
<h2>支付宝11.11抽奖 亲测3元猫超赠金+1.68元消费红包</h2>
<p><strong>支付宝11.11抽奖 亲测3元猫超赠金+1.68元消费红包</strong></p>
<p>这个活动大家可以参与试试看哦，很简答的哦</p>
<p>打开就有多次抽奖机会，抽到奖品之后记得领取奖励</p>
<p>还可以完成任务获得，支付宝消费红包大约1元左右</p>
<p>&nbsp;</p>
<h1>10月25日置顶</h1>
<p><br>支付宝APP搜【11.11】横幅【每日11点 20点上支付宝】点进去 抽奖 了可以抽到无门槛红包/天猫无门槛赠金</p>
<p>完成任务还可以获得支付宝无门槛消费红包</p>`,r:{minutes:8.48,words:2544},t:"爬取日期: 2025-10-25",y:"a"}}],["/posts/2025-10-26.html",{loader:()=>f(()=>import("./2025-10-26.html-SRnj88iQ.js"),[]),meta:{u:1005,e:`
<h2>亲测5元秒到 京东价格保护差额返还</h2>
<p><strong>亲测5元秒到 京东价格保护差额返还</strong></p>
<p>京东时不时来价格保护一下看看</p>
<p>部分人有价保成功，亲测5元秒到</p>
<p>&nbsp;</p>
<h1>10月26日置顶</h1>
<p>1. 领红包<br><a target="_blank" href="https://u.jd.com/pgqDUAM">https://u.jd.com/pgqDUAM</a></p>
<p>扫码参与：</p>
<p><img alt="二维码_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/26/1f0d04fa042c5df398c32804481e84b5.jpg" style="width: 227px; *//* height: 220px;" referrerpolicy="no-referrer"></p>`,r:{minutes:10.21,words:3062},t:"爬取日期: 2025-10-26",y:"a"}}],["/posts/2025-10-27.html",{loader:()=>f(()=>import("./2025-10-27.html-CqEzFDMS.js"),[]),meta:{u:1005,e:`
<h2>支付宝领1元可口可乐 需到门店自取</h2>
<p><strong>支付宝领1元可口可乐 需到门店自取</strong></p>
<p>支付宝参与领取1元可口可乐优惠券哦</p>
<p>每天可领一次，最多领3次</p>
<p>领取后自己查看有无可用门店，到店支付1元即可兑换可口可乐1瓶</p>
<p><br>支付宝搜【可口可乐吧】-进去点【畅爽时刻】领券</p>
<p><img alt="支付宝领1元可口可乐 需到门店自取-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/27/079a92dca493a848f6d517fe728eff40.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:19.34,words:5802},t:"爬取日期: 2025-10-27",y:"a"}}],["/posts/2025-10-28.html",{loader:()=>f(()=>import("./2025-10-28.html-pXN1f7cu.js"),[]),meta:{u:1005,e:`
<h2>淘宝双11超级红包 每日开最高25888元</h2>
<p><strong>淘宝双11超级红包 每日开最高25888元</strong></p>
<p>淘宝双11活动开始了，每日可开一次超级红包</p>
<p>今天10点开始首发红包，记得去领取</p>
<p>最高25888元无门槛红包，还有不定期加码大额红包领取</p>
<p>&nbsp;</p>
<p><span style="color:#FF0000;">淘宝20点必得1.1亓荭包<br>20:00-20:15限时不限量</span><br>必须用这个手机淘口令<br><span style="background-color:#ADD8E6;">7$Qrxvf48KD3O$:// MF3106</span></p>`,r:{minutes:12.57,words:3772},t:"爬取日期: 2025-10-28",y:"a"}}],["/posts/2025-10-29.html",{loader:()=>f(()=>import("./2025-10-29.html-Bc-t-1hl.js"),[]),meta:{u:1005,e:`
<h2>建行社保卡福利日 每周三领60-20元银联券</h2>
<p><strong>建行社保卡福利日 每周三领60-20元银联券</strong></p>
<p>有建行社保卡的可以参与试试，受邀的可以直接领</p>
<p>每周三可参与，领取60-20元银联券</p>
<p>每个月限领一次，没领到的下周三15点再去领</p>
<p>&nbsp;</p>
<h1>10月29日置顶 新一期</h1>
<p><br>微信打开-立即参与-下拉领取60-20元银联券</p>
<p><img alt="建行社保卡福利日 每周三领60-20元银联券-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/13/8a70f27a5602bcfbcb11f1daccc60262.jpg" style="width: 645px; *//* height: 707px;" referrerpolicy="no-referrer"></p>`,r:{minutes:15.23,words:4570},t:"爬取日期: 2025-10-29",y:"a"}}],["/posts/2025-10-30.html",{loader:()=>f(()=>import("./2025-10-30.html-B7YAlG2U.js"),[]),meta:{u:1005,e:`
<h2>京东每日领无门槛红包 最高11111元无门槛红包</h2>
<p><strong>京东每日领无门槛红包 最高11111元无门槛红包</strong></p>
<p>这个活动晚上20点整横开始最高面额</p>
<p>大家可以参与试试看哦，每天可以领取3次</p>
<p>后期还有加码和猜拳玩法可以获得大额活动</p>
<p>连续打卡还可以获得专属加码红包哦</p>
<p>&nbsp;</p>
<h1>20点加码先用完机会</h1>
<p>微信/京东打开下方地址&nbsp;</p>
<p>1.<a target="_blank" href="https://u.jd.com/010hTwR">https://u.jd.com/010hTwR</a><br>2.<a target="_blank" href="https://u.jd.com/010hTwR">https://u.jd.com/010hTwR</a><br>3.<a target="_blank" href="https://u.jd.com/010hTwR">https://u.jd.com/010hTwR</a></p>`,r:{minutes:17.83,words:5348},t:"爬取日期: 2025-10-30",y:"a"}}],["/posts/2025-10-31.html",{loader:()=>f(()=>import("./2025-10-31.html-17e4SEvs.js"),[]),meta:{u:1005,e:`
<h2>移动三亿有您抽话费 亲测2元话费秒到</h2>
<p><strong>移动三亿有您抽话费 亲测2元话费秒到</strong></p>
<p>这个活动大家可以参与试试看哦，抽到话费券</p>
<p>和流量记得点击去使用，兑换秒到账的哦，每天都可以参与</p>
<p>&nbsp;</p>
<h1>10月31日置顶 集卡完成开奖</h1>
<p><br>移动APP搜【三亿有您】-做任务获得抽卡机会-翻牌抽1-666元话费-翻到话费券 记得去使用兑换&nbsp;</p>
<p><img alt="移动三亿有您抽话费 亲测2元话费秒到_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/12/4b706ef5b337baa44ebc4ab7691ee6df.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.44,words:5233},t:"爬取日期: 2025-10-31",y:"a"}}],["/posts/2025-11-01.html",{loader:()=>f(()=>import("./2025-11-01.html-BAqtceav.js"),[]),meta:{u:1005,e:`
<h2>京东球迷惊喜日 亲测京东plus年卡会员</h2>
<p><strong>京东球迷惊喜日 亲测京东plus年卡会员</strong></p>
<p>这个活动大家可以参与试试，打开就有3次抽奖机会</p>
<p>有机会抽到京东plus年卡会员，抽不到的话可以邀请好友试试</p>
<p>&nbsp;</p>
<p>微信打开底部地址 下拉抽奖试试3次机会</p>
<p><img alt="京东球迷惊喜日 亲测京东plus年卡会员_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/01/ed0bb7920deb7ebb39c6021868a15498.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.73,words:5320},t:"爬取日期: 2025-11-01",y:"a"}}],["/posts/2025-11-02.html",{loader:()=>f(()=>import("./2025-11-02.html-eRwnUuyW.js"),[]),meta:{u:1005,e:`
<h2>中行京东超级省领6元数币红包 亲测6元秒到</h2>
<p><strong>中行京东超级省领6元数币红包 亲测6元秒到</strong></p>
<p>这个活动大家可以速度参与一下哦</p>
<p>需要跳转到京东APP领取，领取之后就可以支付抵扣了</p>
<p>&nbsp;</p>
<h1>11月2日置顶 新一期领15-5元数币红包</h1>
<p>&nbsp;</p>
<p>1.中行APP搜【京东超级省】点进去顶部-【月月领券】领6元数币红包</p>
<p><img alt="中行京东超级省 领6元数币支付红包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/06/a181f21582f22deee3f2938b6b1f0484.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:8.22,words:2466},t:"爬取日期: 2025-11-02",y:"a"}}],["/posts/2025-11-03.html",{loader:()=>f(()=>import("./2025-11-03.html-B92CQWt_.js"),[]),meta:{u:1005,e:`
<h2>建行支付达标赢好礼 最高抽1998元立减金</h2>
<p><strong>建行支付达标赢好礼 最高抽1998元立减金</strong></p>
<p>建行用户参与，支付宝达标活动</p>
<p>报名参与，每月用建行卡在微信支付满5000元、10000元、30000元可分别得一次抽奖机会</p>
<p>使用建行卡在微信支付满15笔，也有一次抽奖机会</p>
<p>抽奖时间在次月9日9点以后可抽奖，支付金额越高抽到大奖概率越大</p>
<p><br>建行搜【惠省钱】-下拉【支付达标赢好礼】-进去报名参与</p>
<p><img alt="建行支付达标赢好礼 最高抽1998元立减金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/03/e10f8ee9be220e02d13915a90033e4ee.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:16.06,words:4817},t:"爬取日期: 2025-11-03",y:"a"}}],["/posts/2025-11-04.html",{loader:()=>f(()=>import("./2025-11-04.html-CdGa6RzY.js"),[]),meta:{u:1005,e:`
<h2>淘宝双11超级红包 每日开最高25888元</h2>
<p><strong>淘宝双11超级红包 每日开最高25888元</strong></p>
<p>淘宝双11活动开始了，每日可开一次超级红包</p>
<p>今天10点开始首发红包，记得去领取</p>
<p>最高25888元无门槛红包，还有不定期加码大额红包领取</p>
<p>&nbsp;</p>
<p><span style="color:#FF0000;">掏宝20点必得1.1亓荭包</span><br>20:00-20:15,限时不限量<br>必须用这个口令<br><span style="background-color:#ADD8E6;">7$nCY6fTGmNQg$:// CZ6144</span></p>`,r:{minutes:16.02,words:4805},t:"爬取日期: 2025-11-04",y:"a"}}],["/posts/2025-11-05.html",{loader:()=>f(()=>import("./2025-11-05.html-DHj2ePIO.js"),[]),meta:{u:1005,e:`
<h2>深圳农行瓜分红包赢大奖 反馈111元立减金</h2>
<p><strong>深圳农行瓜分红包赢大奖 反馈111元立减金</strong></p>
<p>深圳农行用户参加，其他地区自测哦</p>
<p>简单任务抽最高111元微信立减金</p>
<p>反馈111元立减金，符合的试试</p>
<p><br>农行APP-热门活动-体验赢好礼-圳宠粉！瓜分红包赢大奖-进去抽</p>
<p><img alt="深圳农行瓜分红包赢大奖 反馈111元立减金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/05/31c0c9f917565d5b929f2b1d680d4173.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:18.19,words:5457},t:"爬取日期: 2025-11-05",y:"a"}}],["/posts/2025-11-06.html",{loader:()=>f(()=>import("./2025-11-06.html-61KFG1FB.js"),[]),meta:{u:1005,e:`
<h2>免费领180天波点音乐会员 亲测会员秒到</h2>
<p><strong>免费领180天波点音乐会员 亲测会员秒到</strong></p>
<p>波点音乐就是QQ音乐简洁版哦</p>
<p>简单口令直接领取180天波点音乐会员</p>
<p>亲测180天会员秒到，可听VIP歌曲等</p>
<p><br>波点音乐APP-搜索【会员】-兑换码输入【我要180天会员】领取秒到</p>
<p><img alt="免费领180天波点音乐会员 亲测会员秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/06/def7bc2713247713228cd7816c65011a.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:12.92,words:3877},t:"爬取日期: 2025-11-06",y:"a"}}],["/posts/2025-11-07.html",{loader:()=>f(()=>import("./2025-11-07.html-3-FSWib9.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领取《Felix The Reaper》游戏</h2>
<p><strong>Epic喜加1免费领取《Felix The Reaper》游戏</strong></p>
<p>Epic喜加1《Felix The Reaper》，独立解谜游戏</p>
<p>游戏内容是将人类置于致命的情境中。你扮演费利克斯，这位永远翩翩起舞的死亡使者，却意外地陷入了与生命之间危险的恋情</p>
<p>免费领取时间至11月14日23:00</p>
<p><br>《Felix The Reaper》</p>
<p><img alt="Epic喜加1免费领取《Felix The Reaper》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/07/15decb7b19cb7a14573ba69f193b3f92.jpg" style="width: 740px; *//* height: 414px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.91,words:4173},t:"爬取日期: 2025-11-07",y:"a"}}],["/posts/2025-11-08.html",{loader:()=>f(()=>import("./2025-11-08.html-DYkPdceA.js"),[]),meta:{u:1005,e:`
<h2>支付宝邀好友抽大奖 必得黄金票可兑真金</h2>
<p><strong>支付宝邀好友抽大奖 必得黄金票可兑真金</strong></p>
<p>这个活动需要你邀请蚂蚁财富APP新用户助力</p>
<p>这个活动有邀请，介意的朋友就不要参与哦，</p>
<p>邀请一个好友助力必得188份黄金票，还可以获得多次抽奖机会</p>
<p>&nbsp;</p>
<h1>11月8日置顶</h1>
<p>支付宝扫底部二维码 去邀请好友助力 抽奖试试</p>
<p><img alt="支付宝邀好友抽大奖 必得黄金票可兑真金_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/09/17/cef196bf21c3242d38741a1771a2c04f.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:12.84,words:3852},t:"爬取日期: 2025-11-08",y:"a"}}],["/posts/2025-11-09.html",{loader:()=>f(()=>import("./2025-11-09.html-BZiClvmX.js"),[]),meta:{u:1005,e:`
<h2>支付宝领5元团购券 0.2元喝蜜雪冰城</h2>
<p><strong>支付宝领5元团购券 0.2元喝蜜雪冰城</strong></p>
<p>这个5元无门槛团购券不是所有账号都会弹的哦</p>
<p>大家可以自己去支付宝搜索看看，如果有的话可以0.2元喝蜜雪冰城</p>
<p><br>支付宝APP搜【神券】-横幅【限时团购价 领红包更优惠】概率弹5元团购券-随机的 中了可以喝蜜雪</p>
<p><img alt="支付宝领5元团购券 0.2元喝蜜雪冰城_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/09/d1675c3658fb003cf396c44e3c5497e2.jpg" style="width: 740px; *//* height: 534px;" referrerpolicy="no-referrer"><br>活动地址：支付宝APP</p>`,r:{minutes:12.13,words:3638},t:"爬取日期: 2025-11-09",y:"a"}}],["/posts/2025-11-10.html",{loader:()=>f(()=>import("./2025-11-10.html-Cr7M8sVi.js"),[]),meta:{u:1005,e:`
<h2>淘宝双11超级红包 每日开最高25888元</h2>
<p><strong>淘宝双11超级红包 每日开最高25888元</strong></p>
<p>淘宝双11活动开始了，每日可开一次超级红包</p>
<p>今天10点开始首发红包，记得去领取</p>
<p>最高25888元无门槛红包，还有不定期加码大额红包领取</p>
<p>&nbsp;</p>
<p><span style="color:#FF0000;">淘宝20点必得1.1元</span><br>20:00-20:15限时不限量，持续15分钟<br>必须用这个口令<br><span style="background-color:#ADD8E6;">9$uqlIfilAXkb$:// CA1831</span></p>`,r:{minutes:19.36,words:5809},t:"爬取日期: 2025-11-10",y:"a"}}],["/posts/2025-11-11.html",{loader:()=>f(()=>import("./2025-11-11.html-BOwArVFb.js"),[]),meta:{u:1005,e:`
<h2>淘宝双11超级红包 每日开最高25888元</h2>
<p><strong>淘宝双11超级红包 每日开最高25888元</strong></p>
<p>淘宝双11活动开始了，每日可开一次超级红包</p>
<p>今天10点开始首发红包，记得去领取</p>
<p>最高25888元无门槛红包，还有不定期加码大额红包领取</p>
<p>&nbsp;</p>
<p>1.<span style="color:#FF0000;">淘宝20点必得1.1亓荭包</span><br>20:00-20:15限时不限量<br>必须用这个口令<br><span style="background-color:#ADD8E6;">1$ewrLfR8zeqO$:// HU7177</span></p>`,r:{minutes:19.91,words:5972},t:"爬取日期: 2025-11-11",y:"a"}}],["/posts/2025-11-12.html",{loader:()=>f(()=>import("./2025-11-12.html-B3YugQV1.js"),[]),meta:{u:1005,e:`
<h2>亲测2.6元现金秒到 游戏人生抽现金红包</h2>
<p><strong>亲测2.6元现金秒到 游戏人生抽现金红包</strong></p>
<p>腾讯游戏人生抽奖活动，每人可抽7次</p>
<p>抽奖认现金红包，亲测中1+0.8+0.8元现金</p>
<p>需要登陆游戏后领取到账，可以腾讯先锋登录</p>
<p>&nbsp;</p>
<h1>11月12日置顶 新一期</h1>
<p><br>复制发送给微信任意好友打开</p>
<p>mp://fXx15p5CBAHfofx</p>
<p>直接抽机会全部抽完，抽到的现金/Q币去登录游戏，返回活动页面领取到-再点我的-立即兑换秒到</p>`,r:{minutes:12.41,words:3722},t:"爬取日期: 2025-11-12",y:"a"}}],["/posts/2025-11-13.html",{loader:()=>f(()=>import("./2025-11-13.html-lKOq1ssj.js"),[]),meta:{u:1005,e:`
<h2>移动微光365抽最高50元话费 次月发放</h2>
<p><strong>移动微光365抽最高50元话费 次月发放</strong></p>
<p>移动微光365问卷抽话费活动</p>
<p>简单问卷抽最高50元话费，非必中的</p>
<p>抽中话费后，在下个双月（12月）发放，会有短信提醒</p>
<p><br>微信打开-下拉阅读原文-问卷抽奖</p>
<p><img alt="移动微光365抽最高50元话费 次月发放-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/13/2fd34d9ec5501abcf70d781d3dc5dd3a.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.68,words:4404},t:"爬取日期: 2025-11-13",y:"a"}}],["/posts/2025-11-14.html",{loader:()=>f(()=>import("./2025-11-14.html-qEx9uJVo.js"),[]),meta:{u:1005,e:`
<h2>淘宝双11超级红包 每日开最高25888元</h2>
<p><strong>淘宝双11超级红包 每日开最高25888元</strong></p>
<p>淘宝双11活动开始了，每日可开一次超级红包</p>
<p>今天10点开始首发红包，记得去领取</p>
<p>最高25888元无门槛红包，还有不定期加码大额红包领取</p>
<p>&nbsp;</p>
<p><span style="color:#FF0000;">淘宝必得1.1亓荭包<br>20:00-20:15限时不限量</span><br>必须用这个口令<br><span style="background-color:#ADD8E6;">6$EBBRfQ03NIh$:// CA1831</span></p>`,r:{minutes:15.63,words:4690},t:"爬取日期: 2025-11-14",y:"a"}}],["/posts/2025-11-15.html",{loader:()=>f(()=>import("./2025-11-15.html-Bjlpckjb.js"),[]),meta:{u:1005,e:`
<h2>百度天天开盲盒 完成任务必得现金/实物</h2>
<p><strong>百度天天开盲盒 完成任务必得现金/实物</strong></p>
<p>想参与的可以参与试试看哦，每天参与可以开一个盲盒</p>
<p>盲盒里面的奖品是必得的哦，就是需要完成任务开盲盒</p>
<p>&nbsp;</p>
<h1>11月15日置顶&nbsp;</h1>
<p><br>百度APP-我的-右上角【侧边栏】-下拉至【热门活动】点进去【天天开盲盒】去完成任务开盲盒试试</p>
<p><span style="color:#FF0000;">注意：实物奖励 最后确认需要邀请好友助力获得</span></p>`,r:{minutes:11.9,words:3570},t:"爬取日期: 2025-11-15",y:"a"}}],["/posts/2025-11-16.html",{loader:()=>f(()=>import("./2025-11-16.html-D9ENGET6.js"),[]),meta:{u:1005,e:`
<h2>亲测霸王茶姬免单券 去年下单满30单领取</h2>
<p><strong>亲测霸王茶姬免单券 去年下单满30单领取</strong></p>
<p>霸王茶姬去年下单满30单，且实付大于10元的订单</p>
<p>符合的自动到账一张霸王茶姬免单券低至0.01元</p>
<p>反馈有1分钱霸王茶姬券，都去看看</p>
<p><br>复制发送给微信任意好友打开</p>
<p>点【优惠券】查看有无</p>
<p>mp://xqHLgEMBmDNwI4E</p>
<p><img alt="亲测霸王茶姬免单券 去年下单满30单领取-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/16/f2fbb1cdee387792e5badc7a5f4c54f2.jpg" style="width: 319px; *//* height: 685px;" referrerpolicy="no-referrer"></p>`,r:{minutes:7.49,words:2246},t:"爬取日期: 2025-11-16",y:"a"}}],["/posts/2025-11-17.html",{loader:()=>f(()=>import("./2025-11-17.html-BQJG5VUT.js"),[]),meta:{u:1004,e:`
<h2>霸王茶姬8周年 0.01秒杀10万杯伯牙绝弦</h2>
<p><strong>霸王茶姬8周年 0.01秒杀10万杯伯牙绝弦 &nbsp;</strong></p>
<p>这个活动大家可以参与试试看哦，可能有点难抢</p>
<p>大家可以用多个号试试看哦，抢到了就可以0.01元喝霸王茶姬了</p>
<p><br>11:17 13:17 15:17 17:17 每个时刻2万杯</p>
<p>1.美团搜【霸王茶姬】门店进去[部分门店没有横幅 就换个门店进去]-滚动横幅【伯牙绝弦 以茶会友 抢万杯0.01亓伯牙绝弦】</p>
<p>直接入口：mp://oJB4tzJYar8o3Dk</p>
`,r:{minutes:15.27,words:4581},t:"爬取日期: 2025-11-17",y:"a"}}],["/posts/2025-11-18.html",{loader:()=>f(()=>import("./2025-11-18.html-BrSziJ60.js"),[]),meta:{u:1005,e:`
<h2>亲测0.58元秒到 工银微财富答题抽奖</h2>
<p><strong>亲测0.58元秒到 工银微财富答题抽奖</strong></p>
<p>工银微财富答题抽奖活动</p>
<p>题目很简单，全对可抽现金红包，非必中</p>
<p>亲测0.58元秒到</p>
<p><br>微信打开-下拉原文-开始穿越-答题抽奖</p>
<p><img alt="亲测0.58元秒到 工银微财富答题抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/18/3708e8d4fed69c2c52f1391f955eb4c6.jpg" style="width: 645px; *//* height: 698px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.86,words:5358},t:"爬取日期: 2025-11-18",y:"a"}}],["/posts/2025-11-19.html",{loader:()=>f(()=>import("./2025-11-19.html-D1P-k1eg.js"),[]),meta:{u:1005,e:`
<h2>平安金管家必得红包 亲测2.94元秒到钱包</h2>
<p><strong>平安金管家必得红包 亲测2.94元秒到钱包</strong></p>
<p>这个活动大家可以参与试试看哦，有很多任务</p>
<p>点进去浏览大概5秒返回就就可以参与抽奖</p>
<p>把所有机用完，大概可以抽奖12次哦</p>
<p><br>平安金管家APP-首页【活动】点进去-下拉至【添平安 添健康】点进去 完成浏览任务 抽红包试试+然后还可以点击底部的【抽金条大奖】抽奖</p>
<p><img alt="平安金管家必得红包 亲测2.94元秒到钱包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/19/36a235c33ee7a73e889ad5cce465d72d.jpg" style="width: 740px; *//* height: 532px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.69,words:4107},t:"爬取日期: 2025-11-19",y:"a"}}],["/posts/2025-11-20.html",{loader:()=>f(()=>import("./2025-11-20.html-D68SaQLS.js"),[]),meta:{u:1005,e:`
<h2>交行消费抽抽抽 必得0.1-68元幸运红包</h2>
<p><strong>交行消费抽抽抽 必得0.1-68元幸运红包</strong></p>
<p>这个活动交行借记卡和交行信用卡都可以参与</p>
<p>完成指定的消费任务可以参与抽奖，总共可以抽奖3次</p>
<p>消费金额只要大于等于1元就等于完成任务了</p>
<p>&nbsp;</p>
<h1>11月20日置顶</h1>
<p>&nbsp;</p>
<p>交行APP-搜【消费抽抽抽】点击横幅进去-完成消费任务可以参与抽奖</p>
<p><img alt="交行消费抽抽抽 必得0.1-68元幸运红包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/15/5a2d9544ba78212e572a9aa7c639d5df.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:18.6,words:5580},t:"爬取日期: 2025-11-20",y:"a"}}],["/posts/2025-11-21.html",{loader:()=>f(()=>import("./2025-11-21.html-nSoQiNuM.js"),[]),meta:{u:1005,e:`
<h2>华为手机鸿蒙有礼 1.9元喝瑞幸咖啡等</h2>
<p><strong>华为手机鸿蒙有礼 1.9元喝瑞幸咖啡等</strong></p>
<p>这个活动到10月8日结束，每天5点之后开始领券</p>
<p>想参与的可以参与试试看哦，仅限华为手机参与，需要升级到对应版本</p>
<p>&nbsp;</p>
<h1>11月21日置顶</h1>
<p>参与条件：仅限华为手机用户参与；</p>
<p>登录华为账号、开通华为支付并完成绑卡；</p>
<p>1.升级智慧助手．今天App版本至15.0.15.330及以上，升级系统版本至5.0.0.135及以上。</p>
<p>4、活动期间优惠券名额有限，每日限量，领完即止。</p>`,r:{minutes:16.18,words:4855},t:"爬取日期: 2025-11-21",y:"a"}}],["/posts/2025-11-22.html",{loader:()=>f(()=>import("./2025-11-22.html-DV9im-Hm.js"),[]),meta:{u:1005,e:`
<h2>亲测0撸2片面膜+30ml洗面奶 海龟爸爸撸实物</h2>
<p><strong>亲测0撸2片面膜+30ml洗面奶 海龟爸爸撸实物</strong></p>
<p>这个活动大家可以参与试试看哦，过程还是蛮简单的哦</p>
<p>有很多实物可以兑换直接可以0元撸2个实物，</p>
<p>&nbsp;</p>
<p>1.淘宝搜【海龟爸爸官方旗舰店】-底部【会员】入会-下拉至【会员生日礼】生日选择今天领取 20+188积分</p>
<p><img alt="二维码_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/22/f4df80e7617db0f3aaaf43a1258ea10c.jpg" style="width: 215px; *//* height: 220px;" referrerpolicy="no-referrer"></p>`,r:{minutes:12.55,words:3765},t:"爬取日期: 2025-11-22",y:"a"}}],["/posts/2025-11-23.html",{loader:()=>f(()=>import("./2025-11-23.html-6hb7YnbC.js"),[]),meta:{u:1005,e:`
<h2>支付宝数币节抽最高2025红包 亲测4.8元数币红包</h2>
<p><strong>支付宝数币节抽最高2025红包 亲测4.8元数币红包</strong></p>
<p>有交行数币的参加，在试点内就可以抽奖</p>
<p>每天可抽一次，抽最高2025元数币红包</p>
<p>反馈中4.8元交行数币红包</p>
<p>&nbsp;</p>
<h1>11月23日置顶 抽奖试试</h1>
<p><br>支付宝APP搜【数币节】-进入活动-点幸运大转盘抽奖</p>
<p><img alt="支付宝数币节抽最高2025红包 亲测4.8元数币红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/06/27/afb387f7c4a2527025c3e8515fb24778.jpg" style="width: 645px; *//* height: 688px;" referrerpolicy="no-referrer"></p>`,r:{minutes:7.64,words:2291},t:"爬取日期: 2025-11-23",y:"a"}}],["/posts/2025-11-24.html",{loader:()=>f(()=>import("./2025-11-24.html-DQ16cDdJ.js"),[]),meta:{u:1005,e:`
<h2>支付宝神券团购5元无门槛券 最低0.01元喝奶茶</h2>
<p><strong>支付宝神券团购5元无门槛券 最低0.01元喝奶茶</strong></p>
<p>这个需要支付宝神券团购频道新人才可以哦</p>
<p>符合的领5元无门槛团购神券，可0.01-0.5元左右喝奶茶</p>
<p>反馈领到5元无门槛，很多0.01-0.5元左右团购</p>
<p><br>支付宝APP搜【神券】进小程序-新人弹5元无门槛团购神券，去使用即可</p>
<p><img alt="支付宝神券团购5元无门槛券 最低0.01元喝奶茶-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/24/b1fdd5dcd2715556273a49ac753aa356.jpg" style="width: 641px; *//* height: 592px;" referrerpolicy="no-referrer"></p>`,r:{minutes:18.29,words:5488},t:"爬取日期: 2025-11-24",y:"a"}}],["/posts/2025-11-25.html",{loader:()=>f(()=>import("./2025-11-25.html-CVqeo4X-.js"),[]),meta:{u:1005,e:`
<h2>做凤丹赛推荐官抽现金 亲测0.82元秒到</h2>
<p><strong>做凤丹赛推荐官抽现金 亲测0.82元秒到</strong></p>
<p>新老用户参与这个活动都有红包，最高可以抽到88元现金</p>
<p>现金秒到微信支付的哦，然后邀请好友参与你还可以获得一个随机活动</p>
<p>&nbsp;</p>
<h1>11月25日置顶 新一期</h1>
<p><br>微信打开下方小程序-第一个【立即领取】-生成海报分享后，抽最高88元红包 然后会弹鸿苞红包 领取秒到</p>
<p>mp://0xNAwKP0IjxHj2m</p>
<p>微信扫码：</p>
<p><img alt="二维码-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/25/04e97a38f2737068130cedea4ea63b96.jpg" style="width: 252px; *//* height: 259px;" referrerpolicy="no-referrer"></p>`,r:{minutes:19.16,words:5749},t:"爬取日期: 2025-11-25",y:"a"}}],["/posts/2025-11-26.html",{loader:()=>f(()=>import("./2025-11-26.html-D8HkkcQB.js"),[]),meta:{u:1005,e:`
<h2>大众点评城市火锅地图 亲测中小熊养生壶</h2>
<p><strong>大众点评城市火锅地图 亲测中小熊养生壶</strong></p>
<p>这个活动大家可以参与试试看哦，完成任务获得火锅币</p>
<p>可以抽盲盒获得累积起来可以兑换实物，活动26年1月11日结束</p>
<p>在活动结束之前每天都可以参与试试看哦</p>
<p>&nbsp;</p>
<h1>11月26日置顶</h1>
<p>大众点评APP搜【城市火锅地图】横幅进去[没有横幅 就左上角 手动改位置：上海]点进去下拉完成任务-获得火锅币-20火锅币抽盲盒试试</p>
<p><img alt="大众点评城市火锅地图 亲测中小熊养生壶_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/21/8dcb750263558b064ea6005417287970.jpg" style="width: 650px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.69,words:5307},t:"爬取日期: 2025-11-26",y:"a"}}],["/posts/2025-11-27.html",{loader:()=>f(()=>import("./2025-11-27.html-D086-yQI.js"),[]),meta:{u:1005,e:`
<h2>河北工行薪火能量站 反馈80元立减金</h2>
<p><strong>河北工行薪火能量站 反馈80元立减金</strong></p>
<p>河北工行工资卡用户参加，受邀的</p>
<p>简单任务参与抽奖，最高80元微信立减金</p>
<p>符合的参与试试，反馈80元立减金</p>
<p><br>工行APP-任务中心-河北薪火能量站活动</p>
<p><img alt="河北工行薪火能量站 反馈80元立减金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/27/abc6401dc83590e6a27765ebbb54288e.jpg" style="width: 645px; *//* height: 636px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.32,words:3997},t:"爬取日期: 2025-11-27",y:"a"}}],["/posts/2025-11-28.html",{loader:()=>f(()=>import("./2025-11-28.html-CZYEbXrV.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领取《宇宙待售》游戏</h2>
<p><strong>Epic喜加1免费领取《宇宙待售》游戏</strong></p>
<p>Epic喜加1《宇宙待售》</p>
<p>《宇宙待售》是一款手绘冒险游戏，背景设定在木星浓密的大气层中。在那里，聪慧的猩猩担任着码头工人的角色，而神秘的邪教信徒则剥去它们的皮肉，以求达到开悟的境界</p>
<p>显示免费领取时间至12月5日00:00，可以不玩但不能没有</p>
<p><br>《宇宙待售》</p>
<p><img alt="Epic喜加1免费领取《宇宙待售》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/28/806c818893d61ceb206b33367b07ceff.jpg" style="width: 740px; *//* height: 416px;" referrerpolicy="no-referrer"></p>`,r:{minutes:18.6,words:5581},t:"爬取日期: 2025-11-28",y:"a"}}],["/posts/2025-11-29.html",{loader:()=>f(()=>import("./2025-11-29.html-CrNaWHQV.js"),[]),meta:{u:1005,e:`
<h2>米荔邀请1人领5元三网话费 最高15元话费</h2>
<p><strong>米荔邀请1人领5元三网话费 最高15元话费</strong></p>
<p>这个活动是一个邀请活动，邀请一个好友完成任务就可以获得5元话费</p>
<p>话费奖励是不秒到的哦，需要你自己填写奖品确认信息</p>
<p>总共可以15元话费，想参与的可以试试看哦</p>
<p><br>微信打开下方地址 关注公主号 下拉点击【立即参与】去邀请一个好友完成任务 获得5元话费 填写中奖信息</p>
<p>mp://6mp9IVnXqone5VI</p>
<p><img alt="米荔邀请1人领5元三网话费 最高15元话费_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/29/8d4dfcfe82122da433187fff26ea2605.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:12.03,words:3610},t:"爬取日期: 2025-11-29",y:"a"}}],["/posts/2025-11-30.html",{loader:()=>f(()=>import("./2025-11-30.html-BXpaaff4.js"),[]),meta:{u:1005,e:`
<h2>亲测5元话费秒到 移动周日视频日抽奖</h2>
<p><strong>亲测5元话费秒到 移动周日视频日抽奖</strong></p>
<p>移动APP参与，有多次抽奖机会</p>
<p>抽最高100元话费/流量券/爱奇艺月卡等</p>
<p>亲测5元话费券秒到，机会费完试试看，每周日可参与</p>
<p>&nbsp;</p>
<h1>11月30日置顶 新一期</h1>
<p>&nbsp;</p>
<p>移动APP搜【周日视频日】进入活动-完成任务100福利值抽奖</p>
<p><img alt="亲测5元话费秒到 移动周日视频日抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/05/9d7c9f6bc5c191d6e02d7790e0502a65.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:8.58,words:2574},t:"爬取日期: 2025-11-30",y:"a"}}],["/posts/2025-12-01.html",{loader:()=>f(()=>import("./2025-12-01.html-B-LKXMjv.js"),[]),meta:{u:1005,e:`
<h2>支付宝领益禾堂6元券 亲测0.9元喝奶茶</h2>
<p><strong>支付宝领益禾堂6元券 亲测0.9元喝奶茶</strong></p>
<p>支付宝益禾堂小程序参与领取</p>
<p>基本都有6元食神卡立减券，去下单点指定饮品即可抵扣</p>
<p>亲测0.9元喝益禾堂暴打鲜橙</p>
<p><br>支付宝APP搜【益禾堂】-横幅【暖手更暖心 奶茶0.9元喝】进去弹6元-下单指定饮品，提交支付页面会显示立减6元</p>
<p><img alt="支付宝领益禾堂6元券 亲测0.9元喝奶茶-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/01/1025c58845cf1e7ff2044e3253a20dd4.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:18.85,words:5654},t:"爬取日期: 2025-12-01",y:"a"}}],["/posts/2025-12-02.html",{loader:()=>f(()=>import("./2025-12-02.html-EQ3gDYsl.js"),[]),meta:{u:1005,e:`
<h2>亲测1元秒到 富国基金周周红包雨抽奖</h2>
<p><strong>亲测1元秒到 富国基金周周红包雨抽奖</strong></p>
<p>微信都可以参与抽奖，有3次机会</p>
<p>基本都会中1-2个随机红包，亲测中1元现金秒到</p>
<p>&nbsp;</p>
<h1>12月2日置顶 新一期可抽奖</h1>
<p>微信搜【富国基金微管家】公众号-菜单栏【周周红包雨】-10w份红包-进去抽</p>
<p><img alt="亲测1元秒到 富国基金周周红包雨抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2024/10/09/e05060ab67649d3b6cc28447a15cc5fc.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:18.62,words:5585},t:"爬取日期: 2025-12-02",y:"a"}}],["/posts/2025-12-03.html",{loader:()=>f(()=>import("./2025-12-03.html--flWCvXK.js"),[]),meta:{u:1005,e:`
<h2>亲测0.88元现金 招行建额享好礼抽奖</h2>
<p><strong>亲测0.88元现金 招行建额享好礼抽奖</strong></p>
<p>有招行的可以参与试试看哦</p>
<p>简单任务可抽相机实物等/现金奖励</p>
<p>亲测0.88元现金红包秒到</p>
<p><br>微信扫码-下拉一重礼【建额享好礼】抽奖</p>
<p><img alt="亲测0.88元现金 招行建额享好礼抽奖-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/03/717861398db0a2c1551aa2b12969b7a2.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:19.46,words:5839},t:"爬取日期: 2025-12-03",y:"a"}}],["/posts/2025-12-04.html",{loader:()=>f(()=>import("./2025-12-04.html-k7N1EK66.js"),[]),meta:{u:1004,e:`
<h2>平安金管家健康推官享好礼 亲测中1kg大米</h2>
<p><strong>平安金管家健康推官享好礼 亲测中1kg大米</strong></p>
<p>平安金管家APP活动，简单浏览就可以抽奖</p>
<p>概率中到实物奖励，非必中的</p>
<p>反馈中东北大米1kg</p>
<p>&nbsp;</p>
<h1>12月4日置顶 抽奖试试</h1>
<p><br>微信扫码-跳转平安金管家APP-浏览5秒任务完成抽，有能力的可以邀请好友还有次数</p>
<p><img alt="平安金管家健康推官享好礼 亲测中1kg大米-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/03/d4cabc51aa025fb21d429fb64fe7f9bd.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:17.2,words:5160},t:"爬取日期: 2025-12-04",y:"a"}}],["/posts/2025-12-05.html",{loader:()=>f(()=>import("./2025-12-05.html-BHYqZ7lr.js"),[]),meta:{u:1005,e:`
<h2>Epic喜+2免费领取《杰克盒子派对4》等游戏</h2>
<p><strong>Epic喜+2免费领取《杰克盒子派对4》等游戏</strong></p>
<p>Epic喜加2《杰克盒子派对4》+《黑暗侦探》</p>
<p>《杰克盒子派对4》剧情派对系列游戏，包含五个半全新爆款游戏</p>
<p>《黑暗侦探》拿起风衣，开启第六感，加入黑暗部门，和他们一起调查双湖城离奇十足、危险重重的错综复杂案件</p>
<p>限时免费领取时间至12月12日00:00</p>
<p><br>《杰克盒子派对4》</p>
<p><img alt="Epic喜+2免费领取《杰克盒子派对4》等游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/05/c652fa4f4308d481eea7ad7448cb3b06.jpg" style="width: 740px; *//* height: 412px;" referrerpolicy="no-referrer"></p>`,r:{minutes:20.43,words:6128},t:"爬取日期: 2025-12-05",y:"a"}}],["/posts/2025-12-06.html",{loader:()=>f(()=>import("./2025-12-06.html-CTesjmRo.js"),[]),meta:{u:1005,e:`
<h2>移动云盘岁末云礼抽奖 亲测1元支付宝红包</h2>
<p><strong>移动云盘岁末云礼抽奖 亲测1元支付宝红包</strong></p>
<p>移动云盘岁末云礼抽奖活动</p>
<p>任务很简单，最多可抽奖2次，最高中5元支付宝立减金</p>
<p>亲测中1元支付宝立减金，手动领取秒到卡包</p>
<p><br>微信打开-完成生成头像+查看年度账单，抽2次</p>
<p><img alt="移动云盘岁末云礼抽奖 亲测1元支付宝红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/06/00fd07ca79503f35721a8dac386c446d.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:11.45,words:3436},t:"爬取日期: 2025-12-06",y:"a"}}],["/posts/2025-12-07.html",{loader:()=>f(()=>import("./2025-12-07.html-GSdcs-HS.js"),[]),meta:{u:1005,e:`
<h2>拼多多超级红包 连签7天必得9元红包</h2>
<p><strong>拼多多超级红包 连签7天必得9元红包&nbsp;</strong></p>
<p>这个活动大家都可以参与的哦，连续签到7天可以获得9元红包</p>
<p>还是很不错的哦，需要连续签到7天获得哦，断签了就没有资格了</p>
<p><br>微信打开底部地址 连签7天必得9元红包&nbsp;</p>
<p><img alt="拼多多超级红包 连签7天必得9元红包&nbsp;_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/02/1e7f2d3401ca1dbe4a865e385ac82b3c.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.75,words:4125},t:"爬取日期: 2025-12-07",y:"a"}}],["/posts/2025-12-08.html",{loader:()=>f(()=>import("./2025-12-08.html-BFaBJDRq.js"),[]),meta:{u:1005,e:`
<h2>亲测10元立减秒到 建行四季度金融达标好礼</h2>
<p><strong>亲测10元立减秒到 建行四季度金融达标好礼</strong></p>
<p>这个活动比较简单哦，有三个任务</p>
<p>每个任务可撸10元立减金，怕麻烦的做第一个就行</p>
<p>亲测10元立减金秒到，奖品数量有限领完即止</p>
<p><br>微信打开-报名参与-不跳转的就浏览器打开-第一个龙钱宝转入100元，转入申请后，返回领取10元立减金-领取完去撤销就行</p>
<p>其他2个10元任务也可以做，存100元定期、买100元速盈，想拿满奖励的就去做</p>
<p><img alt="亲测10元立减秒到 建行四季度金融达标好礼-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/08/793bc24f699cd2064797e3c52fcb3e6d.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:15.91,words:4772},t:"爬取日期: 2025-12-08",y:"a"}}],["/posts/2025-12-09.html",{loader:()=>f(()=>import("./2025-12-09.html-B9aFyJ4J.js"),[]),meta:{u:1005,e:`
<h2>亲测3.06元支付红包 支付宝小荷包百元挑战</h2>
<p><strong>亲测3.06元支付红包 支付宝小荷包百元挑战</strong></p>
<p>支付宝小荷包参与百元挑战活动</p>
<p>参加即可领取一个随机支付红包，基本都是1元以上哦</p>
<p>亲测3.06元支付红包，参与支付还可领最高9.99元红包</p>
<p><br>支付宝APP搜【小荷包】-点横幅【预算管理新功能 限时开放中】-开启挑战领取红包秒到卡包</p>
<p><img alt="亲测3.06元支付红包 支付宝小荷包百元挑战-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/09/0465dcbd712d48fd18fb6933664661df.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.92,words:4477},t:"爬取日期: 2025-12-09",y:"a"}}],["/posts/2025-12-10.html",{loader:()=>f(()=>import("./2025-12-10.html-DpVHUdr3.js"),[]),meta:{u:1005,e:`
<h2>工行月花越有礼抽2.8-88元支付宝红包</h2>
<p><strong>工行月花越有礼抽2.8-88元支付宝红包</strong></p>
<p>工行APP月花越有礼活动，消费达标抽奖</p>
<p>工行卡消费2000/5000元可抽奖，最高88元支付宝红包</p>
<p>可以试试用微信零钱通/余额宝，看看会不会达标</p>
<p>本月报名，达标后，9月8日-9月30日可开奖</p>
<p>&nbsp;</p>
<h1>12月10日置顶 新一期可参与</h1>
<p><br>工行APP-任务中心-下拉悦达标点右侧【更多】-【月花越有礼】-报名</p>
<p><img alt="工行月花越有礼抽2.8-88元支付宝红包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/08/27/ded24271db56a135af658b25b3b448bc.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:13.89,words:4166},t:"爬取日期: 2025-12-10",y:"a"}}],["/posts/2025-12-11.html",{loader:()=>f(()=>import("./2025-12-11.html-BVwensuD.js"),[]),meta:{u:1005,e:`
<h2>建行浏览账户明细抽最高10元立减金</h2>
<p><strong>建行浏览账户明细抽最高10元立减金</strong></p>
<p>这个是另一个活动，需要从支付宝参与的哦</p>
<p>昨天参与过的和今天不冲突</p>
<p>简单浏览明细抽奖，最高10元立减金/积分</p>
<p>&nbsp;</p>
<h1>12月11日置顶 新一期</h1>
<p><br>支付宝APP搜【中国建设银行】服务进去-点【做任务 抽好礼】-跳转建行APP-浏览后抽奖</p>
<p><img alt="建行浏览账户明细抽最高10元立减金-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/12/24347fff5414b9fce62d490d2e45f7fb.jpg" style="width: 740px; *//* height: 549px;" referrerpolicy="no-referrer"></p>`,r:{minutes:16.58,words:4973},t:"爬取日期: 2025-12-11",y:"a"}}],["/posts/2025-12-12.html",{loader:()=>f(()=>import("./2025-12-12.html-B6CxMTmY.js"),[]),meta:{u:1005,e:`
<h2>Epic喜加1免费领《霍格沃茨之遗》游戏</h2>
<p><strong>Epic喜加1免费领《霍格沃茨之遗》游戏</strong></p>
<p>Epic喜加1《霍格沃茨之遗》，冒险动作游戏</p>
<p>是一款基于《哈利·波特》系列书籍设定的，沉浸式开放世界动作角色扮演游戏</p>
<p>限时免费领取时间至12月19日00:00，可以不玩但不能没有</p>
<p><br>《霍格沃茨之遗》</p>
<p><img alt="Epic喜加1免费领《霍格沃茨之遗》游戏-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/12/c5c807151a83cd9ae203d58452b8699e.jpg" style="width: 740px; *//* height: 408px;" referrerpolicy="no-referrer"></p>`,r:{minutes:18.75,words:5625},t:"爬取日期: 2025-12-12",y:"a"}}],["/posts/2025-12-13.html",{loader:()=>f(()=>import("./2025-12-13.html-DaZo_x1R.js"),[]),meta:{u:1005,e:`
<h2>亲测抖音5.88元秒到+0.9元购10包维达抽纸</h2>
<p><strong>亲测抖音5.88元秒到+0.9元购10包维达抽纸</strong></p>
<p>这个活动大家可以速度参与一下&nbsp;</p>
<p>不是每个号都有资格参与，可以提现5.88元现金，还可以获得10元无门槛购物券</p>
<p>&nbsp;</p>
<p>1.抖音APP-左侧【三杠】顶部【设置】-下拉至【切换账号】-添加/注册新账号--注册新账号-创建一个辅助账号<br>创好后</p>
<p><img alt="亲测抖音5.88元秒到+0.9元购10包维达抽纸_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/13/e58ae8399159716d1a768b756e4409a3.jpg" style="width: 740px; *//* height: 532px;" referrerpolicy="no-referrer"></p>`,r:{minutes:11.11,words:3334},t:"爬取日期: 2025-12-13",y:"a"}}],["/posts/2025-12-14.html",{loader:()=>f(()=>import("./2025-12-14.html-DuQUkVOo.js"),[]),meta:{u:1005,e:`
<h2>工行工享月月花消费达标赢最高352元立减金</h2>
<p><strong>工行工享月月花消费达标赢最高352元立减金</strong></p>
<p>工行另一个消费达标活动，共有4档抽奖</p>
<p>消费金额达5000、10000、20000、30000元各可抽奖一次，抽2-88元立减金</p>
<p>使用微信支付绑定工行储蓄卡支付（含转账、红包、二维码付款、零钱充值、信用卡还款等）都可以</p>
<p>最多可以抽4次奖，最高赢352元微信立减金</p>
<p>&nbsp;</p>
<h1>12月14日置顶 抽奖有水</h1>
<p>&nbsp;</p>
<p>立即报名参与-达标后来抽奖（<span style="color:#FF0000;">可以直接转入微信零钱通，过两天判定达标了就可以抽</span>）</p>`,r:{minutes:9.85,words:2956},t:"爬取日期: 2025-12-14",y:"a"}}],["/posts/2025-12-15.html",{loader:()=>f(()=>import("./2025-12-15.html-CDgMZCd-.js"),[]),meta:{u:1005,e:`
<h2>淘宝88VIP 0.9元购6包维达/1元购雨伞</h2>
<p><strong>淘宝88VIP 0.9元购6包维达/1元购雨伞</strong></p>
<p>这个活动大家可以参与试试看哦需要你是88VIP，</p>
<p>如果你以前领取了这个红包，现在大概率是领取不了</p>
<p>以前没有领取过的可以参与领取购买实物试试</p>
<p><br>1.淘宝-我-88VIP-全部权益-下滑最下面1688领取去使用-领2和5无门槛红包</p>
<p><img alt="淘宝88VIP 0.9元购6包维达/1元购雨伞_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/15/ea93cb89d851525f9bf45f8128e008f2.jpg" style="width: 650px; *//* height: 704px;" referrerpolicy="no-referrer"></p>`,r:{minutes:14.2,words:4261},t:"爬取日期: 2025-12-15",y:"a"}}],["/posts/2025-12-16.html",{loader:()=>f(()=>import("./2025-12-16.html-Cucyvu4c.js"),[]),meta:{u:1005,e:`
<h2>亲测0元霸王茶姬+2元立减金 移动开通话会员领红包</h2>
<p><strong>亲测0元霸王茶姬+2元立减金 移动开通话会员领红包</strong></p>
<p>这个活动到月底结束，有一次参与活动的机会</p>
<p>最高可以抽到10元支付宝立减金/红包，霸王茶姬代金券，视频会员你等</p>
<p>想参与的可以参与试试看哦，亲测1元立减金+1元支付宝红包+霸王茶姬16元代金券</p>
<p>&nbsp;</p>
<h1>12月16日置顶</h1>
<p><br>移动云盘APP-我的-活动中心-下拉至【开通话会员领红包】点进去-完成第二个任务-返回抽奖试试</p>
<p><img alt="移动云盘0元解锁最高10元红包 亲测1元支付宝红包_www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/13/88ca8ee3223f95ad2c47d0058527209c.jpg" style="width: 740px; *//* height: 532px;" referrerpolicy="no-referrer"></p>`,r:{minutes:16.51,words:4952},t:"爬取日期: 2025-12-16",y:"a"}}],["/posts/2025-12-17.html",{loader:()=>f(()=>import("./2025-12-17.html-B7hplLw6.js"),[]),meta:{u:1005,e:`
<h2>饿了么签到抽37元免单卡 亲测秒到卡包</h2>
<p><strong>饿了么签到抽37元免单卡 亲测秒到卡包</strong></p>
<p>这个活动仅限制于今天参与，签到一下就可以参与抽奖了</p>
<p>概率可以抽中免单卡，活动没有邀请，大家可以参与试试看</p>
<p>&nbsp;</p>
<h1>12月17日置顶</h1>
<p><br>微信打开下方小程序 点击一下签到就可以抽奖了哦+浏览</p>
<p>mp://boxOZ4qiDGvEE9w</p>
<p><img alt="饿了么签到抽17元免单卡 亲测秒到卡包-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/17/c20a25100489d028a8b20eedcff015fc.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:24.02,words:7206},t:"爬取日期: 2025-12-17",y:"a"}}],["/posts/2025-12-18.html",{loader:()=>f(()=>import("./2025-12-18.html-So5tkdPD.js"),[]),meta:{u:1005,e:`
<h2>工行薪动有礼年终福利回馈 反馈10000工银i豆</h2>
<p><strong>工行薪动有礼年终福利回馈 反馈10000工银i豆</strong></p>
<p>这个部分人才有入口，自己看看能不能参加</p>
<p>可能限工资卡，直接抽取工银i豆</p>
<p>反馈中10000i豆秒到，能参加的试试看</p>
<p><br>工行APP-登录弹窗【薪动有礼 年终福利回馈】进去抽</p>
<p><img alt="工行薪动有礼年终福利回馈 反馈10000工银i豆-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/18/00360875771f69bc4273be4869b8bbcb.jpg" style="width: 645px; *//* height: 660px;" referrerpolicy="no-referrer"></p>`,r:{minutes:22.7,words:6811},t:"爬取日期: 2025-12-18",y:"a"}}],["/posts/2025-12-19.html",{loader:()=>f(()=>import("./2025-12-19.html-YXpKO9cB.js"),[]),meta:{u:1005,e:`
<h2>购1号店尊享年卡 领3J车厘子5斤/爱他美奶粉+12盒鸡蛋</h2>
<p><strong>购1号店尊享年卡 领3J车厘子5斤/爱他美奶粉+12盒鸡蛋</strong></p>
<p>有需要领3J车厘子5斤/爱他美奶粉的可以考虑一下这个年卡</p>
<p>每个月可以领一盒鸡蛋，鸡蛋是不包邮的，但是可以用E卡抵扣邮费</p>
<p><br>198亓 1号店尊享年卡</p>
<p>每月可領1箱共12箱鸡蛋 贈爱他美德国白金2段 800g<br><a target="_blank" href="https://u.jd.com/ZgorxI3">https://u.jd.com/ZgorxI3</a></p>`,r:{minutes:21.01,words:6304},t:"爬取日期: 2025-12-19",y:"a"}}],["/posts/2025-12-20.html",{loader:()=>f(()=>import("./2025-12-20.html-Cdc371Is.js"),[]),meta:{u:1005,e:`
<h2>支付宝抽0.88-5元工行立减金 亲测5元秒到</h2>
<p><strong>支付宝抽0.88-5元工行立减金 亲测5元秒到</strong></p>
<p>有工行卡的参加试试看，部分人可参与</p>
<p>直接抽取0.88-5元工行立减金+膨胀券包等，非必中</p>
<p>亲测5元工行立减金秒到卡包</p>
<p>&nbsp;</p>
<h1>12月20日置顶</h1>
<p><br>支付宝APP搜【支付宝立减金】-中间横幅【抽0.88-5元工行立减金】进去抽奖</p>
<p><img alt="支付宝抽0.88-5元工行立减金 亲测5元秒到-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/11/08/5afd8052fc3d560018b99d4e779b13be.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:8.81,words:2644},t:"爬取日期: 2025-12-20",y:"a"}}],["/posts/2025-12-21.html",{loader:()=>f(()=>import("./2025-12-21.html-Y4ExpZwm.js"),[]),meta:{u:1005,e:`
<h2>联通心愿盲盒抽奖 亲测爱奇艺会员月卡</h2>
<p><strong>联通心愿盲盒抽奖 亲测爱奇艺会员月卡</strong></p>
<p>联通用户参与活动，抽奖试非必中的</p>
<p>完成任务有多次机会抽奖，抽视频会员等奖励</p>
<p>反馈中爱奇艺黄金会员月卡</p>
<p>&nbsp;</p>
<h1>12月21日置顶 抽奖试试</h1>
<p><br>联通APP-底部【权益】-下拉左侧滚动窗口【心愿盲盒，解锁惊喜】进去抽奖</p>
<p><img alt="联通心愿盲盒抽奖 亲测爱奇艺会员月卡-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/10/06/bfe862e4458d88c102453802b75b7a0a.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:7.95,words:2385},t:"爬取日期: 2025-12-21",y:"a"}}],["/posts/2025-12-22.html",{loader:()=>f(()=>import("./2025-12-22.html-HfHiCmgy.js"),[]),meta:{u:1005,e:`
<h2>高德0.01元撸茶叶蛋/矿泉水等 限部分地区</h2>
<p><strong>高德0.01元撸茶叶蛋/矿泉水等 限部分地区</strong></p>
<p>所在地有十足便利店的可以参加一下，现在有1分钱的团购</p>
<p>可以0.01元买矿泉水、茶叶蛋、蛋挞等商品</p>
<p>亲测0.01元茶叶蛋，可以反复买三次需要的撸</p>
<p><br>高德地图APP搜【十足便利店】-进一个便利店，下拉有0.01元的团购直接买</p>
<p><img alt="高德0.01元撸茶叶蛋/矿泉水等 限部分地区-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/22/b2a9cf37764dd177e5305e10baaec44a.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:10.86,words:3259},t:"爬取日期: 2025-12-22",y:"a"}}],["/posts/2025-12-23.html",{loader:()=>f(()=>import("./2025-12-23.html-DBzVGfIw.js"),[]),meta:{u:1005,e:`
<h2>高德领5元无门槛打车券 限跨年/元旦使用</h2>
<p><strong>高德领5元无门槛打车券 限跨年/元旦使用</strong></p>
<p>这个5元无门槛打车券都可以领取一下哦</p>
<p>领着防身，限12月31日-1月1日使用，要出门打车跨年的领</p>
<p>亲测已领取秒到卡券包</p>
<p><br>高德地图APP-打车-下拉【领111元跨年专享】/右侧悬浮进-进去领取</p>
<p><img alt="" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/23/6c7f5749385f4f86c4853ec77cb821c4.jpg" style="width: 740px; *//* height: 542px;" referrerpolicy="no-referrer"></p>`,r:{minutes:10.64,words:3193},t:"爬取日期: 2025-12-23",y:"a"}}],["/posts/2025-12-24.html",{loader:()=>f(()=>import("./2025-12-24.html-BBEbEIiZ.js"),[]),meta:{u:1003,e:`
<h2>小红书星光夜市抽0.1元实物 每晚20点开启</h2>
<p><strong>小红书星光夜市抽0.1元实物 每晚20点开启</strong></p>
<p>这个活动需要解锁成就到LV1-LV3级才可以抽奖</p>
<p>有确认收货订单/签到7天领星光等都可解锁lv1级</p>
<p>简单任务攒星光，200个星光抽0.1元实物，不知道是不是必中先参与</p>
<p>每天20:00-02:00可去参与抽奖</p>
<p><br>小红书APP-底部【市集】-【星光夜市】-领星光+解锁成就到LV1，20点抽奖</p>
<p><img alt="小红书星光夜市抽0.1元实物 每晚20点开启-www.iqnew.com" src="https://image.smallfawn.work/?url=https://img.iqnew.com/d/file/p/2025/12/24/891f42b76113ff8408aa2ad7b033850b.jpg" style="width: 645px; *//* height: 711px;" referrerpolicy="no-referrer"></p>`,r:{minutes:11.71,words:3514},t:"爬取日期: 2025-12-24",y:"a"}}],["/posts/api.html",{loader:()=>f(()=>import("./api.html-WixreSyI.js"),[]),meta:{e:`<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> na</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> crypto</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"crypto"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> crypto</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">createHash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"md5"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">digest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"hex"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> ia</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  e</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ||</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">e</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {});</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">useAssignKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          imgKey</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">wbiImgKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          subKey</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">wbiSubKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        };</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">null</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">e</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">              try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">                return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> localStorage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getItem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">              } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">                return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">              }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            })(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"wbi_img_urls"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">||</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> e</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">            ?</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">            :</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">split</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"-"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">||</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        r</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        o</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> r</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> ?</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> oa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">wbiImgKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> ?</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> oa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">wbiSubKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        imgKey</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> o</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        subKey</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      };</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    })(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    o</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">imgKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">subKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">o</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> s</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          ((</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> o</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">r</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> []),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          [</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">            46</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">47</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">53</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">23</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">32</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">15</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">31</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">58</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">45</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">35</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">27</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">43</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">            5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">49</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">33</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">42</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">19</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">29</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">28</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">14</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">39</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">12</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">38</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">41</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">13</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">37</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">48</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">16</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">            24</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">55</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">40</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">61</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">26</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">17</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">60</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">51</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">22</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">25</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">54</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">21</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">56</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">59</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">            6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">63</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">57</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">62</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">36</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">34</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">44</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">52</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          ].</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">forEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">            n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">charAt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">&amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">charAt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">          r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">slice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">32</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        c</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> Math</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">round</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">Date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">now</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1e3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        u</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> Object</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">assign</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({}, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          wts</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        l</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> Object</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        f</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">[!'()*]</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">g</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">      p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> &lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">      p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">++</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> h</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> l</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">        v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">      v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> &amp;&amp;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "string"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ==</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">replace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)),</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        null</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> !=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> &amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">          f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            ""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">concat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">encodeURIComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">), </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"="</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">concat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">encodeURIComponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> m</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&amp;"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      w_rid</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> na</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">m</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">),</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      wts</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    };</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  ia</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      bvid</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "BV1PmxeeFEC4"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      cid</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "26095193229"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      up_mid</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "337521240"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      web_location</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "333.788"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      wbiImgKey</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "c458435a75b1419ca98ab6d88b4c60d4"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      wbiSubKey</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "446140f6859f439e9dd83f7ef858d1cd"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  )</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//例如https://api.bilibili.com/x/web-interface/view/conclusion/get?bvid=BV1PmxeeFEC4&amp;cid=26095193229&amp;up_mid=337521240&amp;web_location=333.788&amp;w_rid=98320e8f743b80d4006f8e07079b6c78&amp;wts=1728201932</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//AI总结接口</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.87,words:262},t:"",y:"a"}}],["/posts/idea.html",{loader:()=>f(()=>import("./idea.html-CHfcQfqy.js"),[]),meta:{e:`
<p>1.生成二维码</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">img</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">""</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/&gt;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.08,words:25},t:"vuepress 使用技巧",y:"a"}}],["/posts/page.html",{loader:()=>f(()=>import("./page.html-B5y5PjGs.js"),[]),meta:{a:"Ms.Hope",d:15778368e5,l:"2020年1月1日",c:["Guide"],g:["Page config","Guide"],u:1,e:`<p>Content before <code>more</code> comment is regarded as page excerpt.</p>
`,r:{minutes:1.14,words:341},t:"Page Config",i:"file",O:3,y:"a"}}],["/posts/tools.html",{loader:()=>f(()=>import("./tools.html-C7kMdpKE.js"),[]),meta:{u:99999,e:`
<p>IDA PRO 查看汇编代码：https://down.52pojie.cn/Tools/Disassemblers/IDA_Pro_v8.3_Portable.zip</p>
<p>VSCODE（编写代码）</p>
<p>算法助手 pro（直接 HOOK JAVA 函数 部分 JS 加密也可 HOOK 并输出调用堆栈）https://www.123pan.com/s/7G8aTd-g3T4H.html 提取码:u7Zn</p>
<p>reqable（抓包）https://reqable.com/zh-CN/</p>
<p>JADX （反编译 APK）https://github.com/skylot/jadx</p>`,r:{minutes:.75,words:224},t:"逆向工具",y:"a"}}],["/posts/vuepress-plugins.html",{loader:()=>f(()=>import("./vuepress-plugins.html-XN6SuXHz.js"),[]),meta:{u:99998,e:`
<p>vuepress 插件集合 自写加收集</p>
<h1>谷歌广告</h1>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> @smallfawn/vuepress-plugin-googleadsense</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,r:{minutes:2.79,words:836},t:"vuepress-plugins",y:"a"}}],["/posts/%E5%A5%BD%E7%8E%A9%E7%9A%84/1.html",{loader:()=>f(()=>import("./1.html-B4lgoTIx.js"),[]),meta:{d:16409952e5,l:"2022年1月1日",c:["Apple"],g:["red","big","round"],e:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.09,words:28},t:"Apple 1",i:"pen-to-square",y:"a"}}],["/posts/%E5%A5%BD%E7%8E%A9%E7%9A%84/2.html",{loader:()=>f(()=>import("./2.html-D_-Dpc-W.js"),[]),meta:{d:16410816e5,l:"2022年1月2日",c:["Apple"],g:["red","big","round"],e:`
<p>A apple article being stared.</p>
`,r:{minutes:.12,words:36},t:"Apple 2",i:"pen-to-square",y:"a"}}],["/posts/%E5%A5%BD%E7%8E%A9%E7%9A%84/3.html",{loader:()=>f(()=>import("./3.html-B6nhquyQ.js"),[]),meta:{d:1641168e6,l:"2022年1月3日",c:["Apple","Fruit"],g:["red","big","round"],e:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.1,words:29},t:"Apple 3",i:"pen-to-square",y:"a"}}],["/posts/%E5%A5%BD%E7%8E%A9%E7%9A%84/4.html",{loader:()=>f(()=>import("./4.html-BkggXT31.js"),[]),meta:{d:16412544e5,l:"2022年1月4日",c:["Apple","Fruit"],g:["red","big","round"],e:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.1,words:29},t:"Apple 4",i:"pen-to-square",y:"a"}}],["/posts/%E5%A5%BD%E7%9C%8B%E7%9A%84/1.html",{loader:()=>f(()=>import("./1.html-D1Hg-dkG.js"),[]),meta:{d:16413408e5,l:"2022年1月5日",c:["Banana","Fruit"],g:["yellow","curly","long"],e:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.1,words:29},t:"Banana 1",i:"pen-to-square",y:"a"}}],["/posts/%E5%A5%BD%E7%9C%8B%E7%9A%84/2.html",{loader:()=>f(()=>import("./2.html-Bqlu_Oxh.js"),[]),meta:{d:16414272e5,l:"2022年1月6日",c:["Banana","Fruit"],g:["yellow","curly","long"],e:`
<p>A banana article being stared with number <code>10</code>.</p>
`,r:{minutes:.14,words:41},t:"Banana 2",i:"pen-to-square",y:"a"}}],["/posts/%E5%A5%BD%E7%9C%8B%E7%9A%84/3.html",{loader:()=>f(()=>import("./3.html-B8Ufr0bt.js"),[]),meta:{d:16415136e5,l:"2022年1月7日",c:["Banana"],g:["yellow","curly","long"],e:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.09,words:28},t:"Banana 3",i:"pen-to-square",y:"a"}}],["/posts/%E5%A5%BD%E7%9C%8B%E7%9A%84/4.html",{loader:()=>f(()=>import("./4.html-Bajj9ic3.js"),[]),meta:{d:16416e8,l:"2022年1月8日",c:["Banana"],g:["yellow","curly","long"],e:`
<h2>Heading 2</h2>
<p>Here is the content.</p>
<h3>Heading 3</h3>
<p>Here is the content.</p>
`,r:{minutes:.09,words:28},t:"Banana 4",i:"pen-to-square",y:"a"}}],["/404.html",{loader:()=>f(()=>import("./404.html-CDUCmyRL.js"),[]),meta:{t:""}}],["/posts/",{loader:()=>f(()=>import("./index.html-B_BGxf_g.js"),[]),meta:{t:"Posts"}}],["/posts/%E5%A5%BD%E7%8E%A9%E7%9A%84/",{loader:()=>f(()=>import("./index.html-B7NsFZfL.js"),[]),meta:{t:"好玩的"}}],["/posts/%E5%A5%BD%E7%9C%8B%E7%9A%84/",{loader:()=>f(()=>import("./index.html-DhmjQtC0.js"),[]),meta:{t:"好看的"}}],["/category/",{loader:()=>f(()=>import("./index.html-oA6YuRJq.js"),[]),meta:{t:"分类",I:!1}}],["/category/guide/",{loader:()=>f(()=>import("./index.html-COA4nrPV.js"),[]),meta:{t:"Guide 分类",I:!1}}],["/category/apple/",{loader:()=>f(()=>import("./index.html-DSdDZ7_r.js"),[]),meta:{t:"Apple 分类",I:!1}}],["/category/fruit/",{loader:()=>f(()=>import("./index.html-BWXF6kM8.js"),[]),meta:{t:"Fruit 分类",I:!1}}],["/category/banana/",{loader:()=>f(()=>import("./index.html-CT8d4R0E.js"),[]),meta:{t:"Banana 分类",I:!1}}],["/tag/",{loader:()=>f(()=>import("./index.html-CHDR4Ro9.js"),[]),meta:{t:"标签",I:!1}}],["/tag/page-config/",{loader:()=>f(()=>import("./index.html-Csj64V-w.js"),[]),meta:{t:"标签: Page config",I:!1}}],["/tag/guide/",{loader:()=>f(()=>import("./index.html-BVi4GkHq.js"),[]),meta:{t:"标签: Guide",I:!1}}],["/tag/red/",{loader:()=>f(()=>import("./index.html-BBsmDgs1.js"),[]),meta:{t:"标签: red",I:!1}}],["/tag/big/",{loader:()=>f(()=>import("./index.html-5NofdhrP.js"),[]),meta:{t:"标签: big",I:!1}}],["/tag/round/",{loader:()=>f(()=>import("./index.html-DtDiWgJg.js"),[]),meta:{t:"标签: round",I:!1}}],["/tag/yellow/",{loader:()=>f(()=>import("./index.html-CWZKPt-d.js"),[]),meta:{t:"标签: yellow",I:!1}}],["/tag/curly/",{loader:()=>f(()=>import("./index.html-CMdj8xaj.js"),[]),meta:{t:"标签: curly",I:!1}}],["/tag/long/",{loader:()=>f(()=>import("./index.html-Cfsai46C.js"),[]),meta:{t:"标签: long",I:!1}}],["/article/",{loader:()=>f(()=>import("./index.html-C9VWS09s.js"),[]),meta:{t:"文章",I:!1}}],["/star/",{loader:()=>f(()=>import("./index.html-BO0GoGbh.js"),[]),meta:{t:"星标",I:!1}}],["/timeline/",{loader:()=>f(()=>import("./index.html-BvK1TWxY.js"),[]),meta:{t:"时间轴",I:!1}}]]);function Ff(){return B1().__VUE_DEVTOOLS_GLOBAL_HOOK__}function B1(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const Vf=typeof Proxy=="function",qf="devtools-plugin:setup",jf="plugin:settings:set";let Wn,Ta;function $f(){var e;return Wn!==void 0||(typeof window<"u"&&window.performance?(Wn=!0,Ta=window.performance):typeof globalThis<"u"&&(!((e=globalThis.perf_hooks)===null||e===void 0)&&e.performance)?(Wn=!0,Ta=globalThis.perf_hooks.performance):Wn=!1),Wn}function Mf(){return $f()?Ta.now():Date.now()}class Nf{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const s={};if(t.settings)for(const a in t.settings){const o=t.settings[a];s[a]=o.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},s);try{const a=localStorage.getItem(r),o=JSON.parse(a);Object.assign(i,o)}catch{}this.fallbacks={getSettings(){return i},setSettings(a){try{localStorage.setItem(r,JSON.stringify(a))}catch{}i=a},now(){return Mf()}},n&&n.on(jf,(a,o)=>{a===this.plugin.id&&this.fallbacks.setSettings(o)}),this.proxiedOn=new Proxy({},{get:(a,o)=>this.target?this.target.on[o]:(...l)=>{this.onQueue.push({method:o,args:l})}}),this.proxiedTarget=new Proxy({},{get:(a,o)=>this.target?this.target[o]:o==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(o)?(...l)=>(this.targetQueue.push({method:o,args:l,resolve:()=>{}}),this.fallbacks[o](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:o,args:l,resolve:c})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Hf(e,t){const n=e,s=B1(),r=Ff(),i=Vf&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(qf,e,t);else{const a=i?new Nf(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Jt=typeof document<"u";function C1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&C1(e.default)}const ve=Object.assign;function Zi(e,t){const n={};for(const s in t){const r=t[s];n[s]=gt(r)?r.map(e):e(r)}return n}const zs=()=>{},gt=Array.isArray,D1=/#/g,Uf=/&/g,Kf=/\//g,Gf=/=/g,Qf=/\?/g,O1=/\+/g,Wf=/%5B/g,Yf=/%5D/g,I1=/%5E/g,Xf=/%60/g,R1=/%7B/g,Jf=/%7C/g,S1=/%7D/g,Zf=/%20/g;function Bo(e){return encodeURI(""+e).replace(Jf,"|").replace(Wf,"[").replace(Yf,"]")}function em(e){return Bo(e).replace(R1,"{").replace(S1,"}").replace(I1,"^")}function Ba(e){return Bo(e).replace(O1,"%2B").replace(Zf,"+").replace(D1,"%23").replace(Uf,"%26").replace(Xf,"`").replace(R1,"{").replace(S1,"}").replace(I1,"^")}function tm(e){return Ba(e).replace(Gf,"%3D")}function nm(e){return Bo(e).replace(D1,"%23").replace(Qf,"%3F")}function sm(e){return e==null?"":nm(e).replace(Kf,"%2F")}function fs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const rm=/\/$/,im=e=>e.replace(rm,"");function ea(e,t,n="/"){let s,r={},i="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(s=t.slice(0,l),i=t.slice(l+1,o>-1?o:t.length),r=e(i)),o>-1&&(s=s||t.slice(0,o),a=t.slice(o,t.length)),s=pm(s??t,n),{fullPath:s+(i&&"?")+i+a,path:s,query:r,hash:fs(a)}}function am(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function lp(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function om(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&bn(t.matched[s],n.matched[r])&&L1(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function bn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function L1(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!lm(e[n],t[n]))return!1;return!0}function lm(e,t){return gt(e)?pp(e,t):gt(t)?pp(t,e):e===t}function pp(e,t){return gt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function pm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,a,o;for(a=0;a<s.length;a++)if(o=s[a],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(a).join("/")}const Yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var nr;(function(e){e.pop="pop",e.push="push"})(nr||(nr={}));var Us;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Us||(Us={}));function cm(e){if(!e)if(Jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),im(e)}const um=/^[^#]+#/;function hm(e,t){return e.replace(um,"#")+t}function dm(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Ei=()=>({left:window.scrollX,top:window.scrollY});function fm(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=dm(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function cp(e,t){return(history.state?history.state.position-t:-1)+e}const Ca=new Map;function mm(e,t){Ca.set(e,t)}function gm(e){const t=Ca.get(e);return Ca.delete(e),t}let vm=()=>location.protocol+"//"+location.host;function F1(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let o=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),lp(l,"")}return lp(n,e)+s+r}function _m(e,t,n,s){let r=[],i=[],a=null;const o=({state:d})=>{const m=F1(e,location),g=n.value,w=t.value;let b=0;if(d){if(n.value=m,t.value=d,a&&a===g){a=null;return}b=w?d.position-w.position:0}else s(m);r.forEach(y=>{y(n.value,g,{delta:b,type:nr.pop,direction:b?b>0?Us.forward:Us.back:Us.unknown})})};function l(){a=n.value}function c(d){r.push(d);const m=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(ve({},d.state,{scroll:Ei()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function up(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Ei():null}}function wm(e){const{history:t,location:n}=window,s={value:F1(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=e.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:vm()+e+l;try{t[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function a(l,c){const u=ve({},t.state,up(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function o(l,c){const u=ve({},r.value,t.state,{forward:l,scroll:Ei()});i(u.current,u,!0);const h=ve({},up(s.value,l,null),{position:u.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:o,replace:a}}function ym(e){e=cm(e);const t=wm(e),n=_m(e,t.state,t.location,t.replace);function s(i,a=!0){a||n.pauseListeners(),history.go(i)}const r=ve({location:"",base:e,go:s,createHref:hm.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function V1(e){return typeof e=="string"||e&&typeof e=="object"}function q1(e){return typeof e=="string"||typeof e=="symbol"}const j1=Symbol("");var hp;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(hp||(hp={}));function ms(e,t){return ve(new Error,{type:e,[j1]:!0},t)}function Gt(e,t){return e instanceof Error&&j1 in e&&(t==null||!!(e.type&t))}const dp="[^/]+?",bm={sensitive:!1,strict:!1,start:!0,end:!0},km=/[.+*?^${}()[\]/\\]/g;function Em(e,t){const n=ve({},bm,t),s=[];let r=n.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const d=c[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(km,"\\$&"),m+=40;else if(d.type===1){const{value:g,repeatable:w,optional:b,regexp:y}=d;i.push({name:g,repeatable:w,optional:b});const E=y||dp;if(E!==dp){m+=10;try{new RegExp(`(${E})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+x.message)}}let v=w?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(v=b&&c.length<2?`(?:/${v})`:"/"+v),b&&(v+="?"),r+=v,m+=20,b&&(m+=-8),w&&(m+=-20),E===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(c){const u=c.match(a),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",g=i[d-1];h[g.name]=m&&g.repeatable?m.split("/"):m}return h}function l(c){let u="",h=!1;for(const d of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:w,optional:b}=m,y=g in c?c[g]:"";if(gt(y)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=gt(y)?y.join("/"):y;if(!E)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:a,score:s,keys:i,parse:o,stringify:l}}function Am(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function $1(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Am(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(fp(s))return 1;if(fp(r))return-1}return r.length-s.length}function fp(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const xm={type:0,value:""},Pm=/[a-zA-Z0-9_]/;function Tm(e){if(!e)return[[]];if(e==="/")return[[xm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const r=[];let i;function a(){i&&r.push(i),i=[]}let o=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),a()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:Pm.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),a(),r}function Bm(e,t,n){const s=Em(Tm(e.path),n),r=ve(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Cm(e,t){const n=[],s=new Map;t=_p({strict:!1,end:!0,sensitive:!1},t);function r(h){return s.get(h)}function i(h,d,m){const g=!m,w=gp(h);w.aliasOf=m&&m.record;const b=_p(t,h),y=[w];if("alias"in h){const x=typeof h.alias=="string"?[h.alias]:h.alias;for(const L of x)y.push(gp(ve({},w,{components:m?m.record.components:w.components,path:L,aliasOf:m?m.record:w})))}let E,v;for(const x of y){const{path:L}=x;if(d&&L[0]!=="/"){const j=d.record.path,C=j[j.length-1]==="/"?"":"/";x.path=d.record.path+(L&&C+L)}if(E=Bm(x,d,b),m?m.alias.push(E):(v=v||E,v!==E&&v.alias.push(E),g&&h.name&&!vp(E)&&a(h.name)),M1(E)&&l(E),w.children){const j=w.children;for(let C=0;C<j.length;C++)i(j[C],E,m&&m.children[C])}m=m||E}return v?()=>{a(v)}:zs}function a(h){if(q1(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(a),h.alias.forEach(a))}}function o(){return n}function l(h){const d=Im(h,n);n.splice(d,0,h),h.record.name&&!vp(h)&&s.set(h.record.name,h)}function c(h,d){let m,g={},w,b;if("name"in h&&h.name){if(m=s.get(h.name),!m)throw ms(1,{location:h});b=m.record.name,g=ve(mp(d.params,m.keys.filter(v=>!v.optional).concat(m.parent?m.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),h.params&&mp(h.params,m.keys.map(v=>v.name))),w=m.stringify(g)}else if(h.path!=null)w=h.path,m=n.find(v=>v.re.test(w)),m&&(g=m.parse(w),b=m.record.name);else{if(m=d.name?s.get(d.name):n.find(v=>v.re.test(d.path)),!m)throw ms(1,{location:h,currentLocation:d});b=m.record.name,g=ve({},d.params,h.params),w=m.stringify(g)}const y=[];let E=m;for(;E;)y.unshift(E.record),E=E.parent;return{name:b,path:w,params:g,matched:y,meta:Om(y)}}e.forEach(h=>i(h));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function mp(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function gp(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Dm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Dm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function vp(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Om(e){return e.reduce((t,n)=>ve(t,n.meta),{})}function _p(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Im(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;$1(e,t[i])<0?s=i:n=i+1}const r=Rm(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function Rm(e){let t=e;for(;t=t.parent;)if(M1(t)&&$1(e,t)===0)return t}function M1({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Sm(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(O1," "),a=i.indexOf("="),o=fs(a<0?i:i.slice(0,a)),l=a<0?null:fs(i.slice(a+1));if(o in t){let c=t[o];gt(c)||(c=t[o]=[c]),c.push(l)}else t[o]=l}return t}function wp(e){let t="";for(let n in e){const s=e[n];if(n=tm(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(gt(s)?s.map(i=>i&&Ba(i)):[s&&Ba(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Lm(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=gt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const Fm=Symbol(""),yp=Symbol(""),Ai=Symbol(""),Co=Symbol(""),Da=Symbol("");function Os(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function fn(e,t,n,s,r,i=a=>a()){const a=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(ms(4,{from:n,to:t})):d instanceof Error?l(d):V1(d)?l(ms(2,{from:t,to:d})):(a&&s.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),o())},u=i(()=>e.call(s&&s.instances[r],t,n,c));let h=Promise.resolve(u);e.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function ta(e,t,n,s,r=i=>i()){const i=[];for(const a of e)for(const o in a.components){let l=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(C1(l)){const u=(l.__vccOpts||l)[t];u&&i.push(fn(u,n,s,a,o,r))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const h=zf(u)?u.default:u;a.mods[o]=u,a.components[o]=h;const m=(h.__vccOpts||h)[t];return m&&fn(m,n,s,a,o,r)()}))}}return i}function bp(e){const t=Oe(Ai),n=Oe(Co),s=A(()=>{const l=gn(e.to);return t.resolve(l)}),r=A(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(bn.bind(null,u));if(d>-1)return d;const m=kp(l[c-2]);return c>1&&kp(u)===m&&h[h.length-1].path!==m?h.findIndex(bn.bind(null,l[c-2])):d}),i=A(()=>r.value>-1&&$m(n.params,s.value.params)),a=A(()=>r.value>-1&&r.value===n.matched.length-1&&L1(n.params,s.value.params));function o(l={}){return jm(l)?t[gn(e.replace)?"replace":"push"](gn(e.to)).catch(zs):Promise.resolve()}if(Jt){const l=ks();if(l){const c={route:s.value,isActive:i.value,isExactActive:a.value,error:null};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),Js(()=>{c.route=s.value,c.isActive=i.value,c.isExactActive=a.value,c.error=V1(gn(e.to))?null:'Invalid "to" value'},{flush:"post"})}}return{route:s,href:A(()=>s.value.href),isActive:i,isExactActive:a,navigate:o}}const Vm=M({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bp,setup(e,{slots:t}){const n=gr(bp(e)),{options:s}=Oe(Ai),r=A(()=>({[Ep(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ep(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:p("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),qm=Vm;function jm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function $m(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!gt(r)||r.length!==s.length||s.some((i,a)=>i!==r[a]))return!1}return!0}function kp(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ep=(e,t,n)=>e??t??n,Mm=M({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Oe(Da),r=A(()=>e.route||s.value),i=Oe(yp,0),a=A(()=>{let c=gn(i);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),o=A(()=>r.value.matched[a.value]);Bt(yp,A(()=>a.value+1)),Bt(Fm,o),Bt(Da,r);const l=J();return de(()=>[l.value,o.value,e.name],([c,u,h],[d,m,g])=>{u&&(u.instances[h]=c,m&&m!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!bn(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=r.value,u=e.name,h=o.value,d=h&&h.components[u];if(!d)return Ap(n.default,{Component:d,route:c});const m=h.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,b=p(d,ve({},g,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:l}));if(Jt&&b.ref){const y={depth:a.value,name:h.name,path:h.path,meta:h.meta};(gt(b.ref)?b.ref.map(v=>v.i):[b.ref.i]).forEach(v=>{v.__vrv_devtools=y})}return Ap(n.default,{Component:b,route:c})||b}}});function Ap(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Nm=Mm;function Is(e,t){const n=ve({},e,{matched:e.matched.map(s=>Zm(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function zr(e){return{_custom:{display:e}}}let Hm=0;function zm(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const s=Hm++;Hf({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Is(t.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const d=h.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:N1})}gt(h.__vrl_devtools)&&(h.__devtoolsApi=r,h.__vrl_devtools.forEach(d=>{let m=d.route.path,g=U1,w="",b=0;d.error?(m=d.error,g=Wm,b=Ym):d.isExactActive?(g=z1,w="This is exactly active"):d.isActive&&(g=H1,w="This link is active"),u.tags.push({label:m,textColor:b,tooltip:w,backgroundColor:g})}))}),de(t.currentRoute,()=>{l(),r.notifyComponentUpdate(),r.sendInspectorTree(o),r.sendInspectorState(o)});const i="router:navigations:"+s;r.addTimelineLayer({id:i,label:`Router${s?" "+s:""} Navigations`,color:4237508}),t.onError((u,h)=>{r.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:r.now(),data:{error:u},groupId:h.meta.__navigationId}})});let a=0;t.beforeEach((u,h)=>{const d={guard:zr("beforeEach"),from:Is(h,"Current Location during this navigation"),to:Is(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:a++}),r.addTimelineEvent({layerId:i,event:{time:r.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),t.afterEach((u,h,d)=>{const m={guard:zr("afterEach")};d?(m.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},m.status=zr("❌")):m.status=zr("✅"),m.from=Is(h,"Current Location during this navigation"),m.to=Is(u,"Target location"),r.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:r.now(),data:m,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const o="router-inspector:"+s;r.addInspector({id:o,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const u=c;let h=n.getRoutes().filter(d=>!d.parent||!d.parent.record.components);h.forEach(Q1),u.filter&&(h=h.filter(d=>Oa(d,u.filter.toLowerCase()))),h.forEach(d=>G1(d,t.currentRoute.value)),u.rootNodes=h.map(K1)}let c;r.on.getInspectorTree(u=>{c=u,u.app===e&&u.inspectorId===o&&l()}),r.on.getInspectorState(u=>{if(u.app===e&&u.inspectorId===o){const d=n.getRoutes().find(m=>m.record.__vd_id===u.nodeId);d&&(u.state={options:Km(d)})}}),r.sendInspectorTree(o),r.sendInspectorState(o)})}function Um(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function Km(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(s=>`${s.name}${Um(s)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(s=>s.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const N1=15485081,H1=2450411,z1=8702998,Gm=2282478,U1=16486972,Qm=6710886,Wm=16704226,Ym=12131356;function K1(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:Gm}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:U1}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:N1}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:z1}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:H1}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Qm});let s=n.__vd_id;return s==null&&(s=String(Xm++),n.__vd_id=s),{id:s,label:n.path,tags:t,children:e.children.map(K1)}}let Xm=0;const Jm=/^\/(.*)\/([a-z]*)$/;function G1(e,t){const n=t.matched.length&&bn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(s=>bn(s,e.record))),e.children.forEach(s=>G1(s,t))}function Q1(e){e.__vd_match=!1,e.children.forEach(Q1)}function Oa(e,t){const n=String(e.re).match(Jm);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(a=>Oa(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const r=e.record.path.toLowerCase(),i=fs(r);return!t.startsWith("/")&&(i.includes(t)||r.includes(t))||i.startsWith(t)||r.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>Oa(a,t))}function Zm(e,t){const n={};for(const s in e)t.includes(s)||(n[s]=e[s]);return n}function e4(e){const t=Cm(e.routes,e),n=e.parseQuery||Sm,s=e.stringifyQuery||wp,r=e.history,i=Os(),a=Os(),o=Os(),l=Fe(Yt);let c=Yt;Jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zi.bind(null,T=>""+T),h=Zi.bind(null,sm),d=Zi.bind(null,fs);function m(T,G){let z,Z;return q1(T)?(z=t.getRecordMatcher(T),Z=G):Z=T,t.addRoute(Z,z)}function g(T){const G=t.getRecordMatcher(T);G&&t.removeRoute(G)}function w(){return t.getRoutes().map(T=>T.record)}function b(T){return!!t.getRecordMatcher(T)}function y(T,G){if(G=ve({},G||l.value),typeof T=="string"){const k=ea(n,T,G.path),P=t.resolve({path:k.path},G),O=r.createHref(k.fullPath);return ve(k,P,{params:d(P.params),hash:fs(k.hash),redirectedFrom:void 0,href:O})}let z;if(T.path!=null)z=ve({},T,{path:ea(n,T.path,G.path).path});else{const k=ve({},T.params);for(const P in k)k[P]==null&&delete k[P];z=ve({},T,{params:h(k)}),G.params=h(G.params)}const Z=t.resolve(z,G),he=T.hash||"";Z.params=u(d(Z.params));const ke=am(s,ve({},T,{hash:em(he),path:Z.path})),_=r.createHref(ke);return ve({fullPath:ke,hash:he,query:s===wp?Lm(T.query):T.query||{}},Z,{redirectedFrom:void 0,href:_})}function E(T){return typeof T=="string"?ea(n,T,l.value.path):ve({},T)}function v(T,G){if(c!==T)return ms(8,{from:G,to:T})}function x(T){return C(T)}function L(T){return x(ve(E(T),{replace:!0}))}function j(T){const G=T.matched[T.matched.length-1];if(G&&G.redirect){const{redirect:z}=G;let Z=typeof z=="function"?z(T):z;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=E(Z):{path:Z},Z.params={}),ve({query:T.query,hash:T.hash,params:Z.path!=null?{}:T.params},Z)}}function C(T,G){const z=c=y(T),Z=l.value,he=T.state,ke=T.force,_=T.replace===!0,k=j(z);if(k)return C(ve(E(k),{state:typeof k=="object"?ve({},he,k.state):he,force:ke,replace:_}),G||z);const P=z;P.redirectedFrom=G;let O;return!ke&&om(s,Z,z)&&(O=ms(16,{to:P,from:Z}),qe(Z,Z,!0,!1)),(O?Promise.resolve(O):D(P,Z)).catch(B=>Gt(B)?Gt(B,2)?B:Ve(B):X(B,P,Z)).then(B=>{if(B){if(Gt(B,2))return C(ve({replace:_},E(B.to),{state:typeof B.to=="object"?ve({},he,B.to.state):he,force:ke}),G||P)}else B=F(P,Z,!0,_,he);return H(P,Z,B),B})}function Q(T,G){const z=v(T,G);return z?Promise.reject(z):Promise.resolve()}function V(T){const G=vt.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(T):T()}function D(T,G){let z;const[Z,he,ke]=t4(T,G);z=ta(Z.reverse(),"beforeRouteLeave",T,G);for(const k of Z)k.leaveGuards.forEach(P=>{z.push(fn(P,T,G))});const _=Q.bind(null,T,G);return z.push(_),We(z).then(()=>{z=[];for(const k of i.list())z.push(fn(k,T,G));return z.push(_),We(z)}).then(()=>{z=ta(he,"beforeRouteUpdate",T,G);for(const k of he)k.updateGuards.forEach(P=>{z.push(fn(P,T,G))});return z.push(_),We(z)}).then(()=>{z=[];for(const k of ke)if(k.beforeEnter)if(gt(k.beforeEnter))for(const P of k.beforeEnter)z.push(fn(P,T,G));else z.push(fn(k.beforeEnter,T,G));return z.push(_),We(z)}).then(()=>(T.matched.forEach(k=>k.enterCallbacks={}),z=ta(ke,"beforeRouteEnter",T,G,V),z.push(_),We(z))).then(()=>{z=[];for(const k of a.list())z.push(fn(k,T,G));return z.push(_),We(z)}).catch(k=>Gt(k,8)?k:Promise.reject(k))}function H(T,G,z){o.list().forEach(Z=>V(()=>Z(T,G,z)))}function F(T,G,z,Z,he){const ke=v(T,G);if(ke)return ke;const _=G===Yt,k=Jt?history.state:{};z&&(Z||_?r.replace(T.fullPath,ve({scroll:_&&k&&k.scroll},he)):r.push(T.fullPath,he)),l.value=T,qe(T,G,z,_),Ve()}let ee;function oe(){ee||(ee=r.listen((T,G,z)=>{if(!at.listening)return;const Z=y(T),he=j(Z);if(he){C(ve(he,{replace:!0}),Z).catch(zs);return}c=Z;const ke=l.value;Jt&&mm(cp(ke.fullPath,z.delta),Ei()),D(Z,ke).catch(_=>Gt(_,12)?_:Gt(_,2)?(C(_.to,Z).then(k=>{Gt(k,20)&&!z.delta&&z.type===nr.pop&&r.go(-1,!1)}).catch(zs),Promise.reject()):(z.delta&&r.go(-z.delta,!1),X(_,Z,ke))).then(_=>{_=_||F(Z,ke,!1),_&&(z.delta&&!Gt(_,8)?r.go(-z.delta,!1):z.type===nr.pop&&Gt(_,20)&&r.go(-1,!1)),H(Z,ke,_)}).catch(zs)}))}let fe=Os(),K=Os(),$;function X(T,G,z){Ve(T);const Z=K.list();return Z.length?Z.forEach(he=>he(T,G,z)):console.error(T),Promise.reject(T)}function ae(){return $&&l.value!==Yt?Promise.resolve():new Promise((T,G)=>{fe.add([T,G])})}function Ve(T){return $||($=!T,oe(),fe.list().forEach(([G,z])=>T?z(T):G()),fe.reset()),T}function qe(T,G,z,Z){const{scrollBehavior:he}=e;if(!Jt||!he)return Promise.resolve();const ke=!z&&gm(cp(T.fullPath,0))||(Z||!z)&&history.state&&history.state.scroll||null;return Nt().then(()=>he(T,G,ke)).then(_=>_&&fm(_)).catch(_=>X(_,T,G))}const ge=T=>r.go(T);let He;const vt=new Set,at={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:b,getRoutes:w,resolve:y,options:e,push:x,replace:L,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:i.add,beforeResolve:a.add,afterEach:o.add,onError:K.add,isReady:ae,install(T){const G=this;T.component("RouterLink",qm),T.component("RouterView",Nm),T.config.globalProperties.$router=G,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>gn(l)}),Jt&&!He&&l.value===Yt&&(He=!0,x(r.location).catch(he=>{}));const z={};for(const he in Yt)Object.defineProperty(z,he,{get:()=>l.value[he],enumerable:!0});T.provide(Ai,G),T.provide(Co,k2(z)),T.provide(Da,l);const Z=T.unmount;vt.add(T),T.unmount=function(){vt.delete(T),vt.size<1&&(c=Yt,ee&&ee(),ee=null,l.value=Yt,He=!1,$=!1),Z()},Jt&&zm(T,G,t)}};function We(T){return T.reduce((G,z)=>G.then(()=>V(z)),Promise.resolve())}return at}function t4(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const o=t.matched[a];o&&(e.matched.find(c=>bn(c,o))?s.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(c=>bn(c,l))||r.push(l))}return[n,s,r]}function xn(){return Oe(Ai)}function Ht(e){return Oe(Co)}var Do=Symbol(""),Rt=()=>{const e=Oe(Do);if(!e)throw new Error("useClientData() is called without provider.");return e},n4=()=>Rt().pageComponent,Ie=()=>Rt().pageData,ye=()=>Rt().pageFrontmatter,s4=()=>Rt().pageHead,Oo=()=>Rt().pageLang,r4=()=>Rt().pageLayout,zt=()=>Rt().routeLocale,W1=()=>Rt().routePath,i4=()=>Rt().routes,Y1=()=>Rt().siteData,kr=()=>Rt().siteLocaleData,a4=Symbol(""),Ia=Fe(Sf),ls=Fe(Lf),X1=(e,t)=>{const n=Pf(e,t);if(ls.value[n])return n;const s=encodeURI(n);if(ls.value[s])return s;const r=Ia.value[n]||Ia.value[s];return r||n},At=(e,t)=>{const{pathname:n,hashAndQueries:s}=x1(e),r=X1(n,t),i=r+s;return ls.value[r]?{...ls.value[r],path:i,notFound:!1}:{...ls.value["/404.html"],path:i,notFound:!0}},o4=(e,t)=>{const{pathname:n,hashAndQueries:s}=x1(e);return X1(n,t)+s},l4=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget){const t=e.currentTarget.getAttribute("target");if(t!=null&&t.match(/\b_blank\b/i))return}return e.preventDefault(),!0}},$e=M({name:"RouteLink",props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:"route-link-active"}},slots:Object,setup(e,{slots:t}){const n=xn(),s=Ht(),r=A(()=>e.to.startsWith("#")||e.to.startsWith("?")?e.to:`/${o4(e.to,s.path).substring(1)}`);return()=>p("a",{class:["route-link",{[e.activeClass]:e.active}],href:r.value,onClick:(i={})=>{l4(i)&&n.push(e.to).catch()}},t.default())}}),p4=M({name:"AutoLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=ys(e,"config"),s=Ht(),r=Y1(),i=A(()=>br(n.value.link)),a=A(()=>n.value.target||(i.value?"_blank":void 0)),o=A(()=>a.value==="_blank"),l=A(()=>!i.value&&!o.value),c=A(()=>n.value.rel||(o.value?"noopener noreferrer":null)),u=A(()=>n.value.ariaLabel??n.value.text),h=A(()=>{if(n.value.exact)return!1;const m=Object.keys(r.value.locales);return m.length?m.every(g=>g!==n.value.link):n.value.link!=="/"}),d=A(()=>l.value?n.value.activeMatch?(n.value.activeMatch instanceof RegExp?n.value.activeMatch:new RegExp(n.value.activeMatch,"u")).test(s.path):h.value?s.path.startsWith(n.value.link):s.path===n.value.link:!1);return()=>{const{before:m,after:g,default:w}=t,b=(w==null?void 0:w(n.value))??[m==null?void 0:m(n.value),n.value.text,g==null?void 0:g(n.value)];return l.value?p($e,{class:"auto-link",to:n.value.link,active:d.value,"aria-label":u.value},()=>b):p("a",{class:"auto-link external-link",href:n.value.link,"aria-label":u.value,rel:c.value,target:a.value},b)}}}),J1=M({name:"ClientOnly",setup(e,t){const n=J(!1);return we(()=>{n.value=!0}),()=>{var s,r;return n.value?(r=(s=t.slots).default)==null?void 0:r.call(s):null}}}),Z1=M({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(e){const t=n4(),n=A(()=>{if(!e.path)return t.value;const s=At(e.path);return zd(async()=>s.loader().then(({comp:r})=>r))});return()=>p(n.value)}}),c4="Layout",u4="en-US",Dn=gr({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageHead:(e,t,n)=>{const s=Re(t.description)?t.description:n.description,r=[...Array.isArray(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:s}]];return If(r)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(n=>!!n).join(" | "),resolvePageLang:(e,t)=>e.lang||t.lang||u4,resolvePageLayout:(e,t)=>{const n=Re(e.frontmatter.layout)?e.frontmatter.layout:c4;if(!t[n])throw new Error(`[vuepress] Cannot resolve layout: ${n}`);return t[n]},resolveRouteLocale:(e,t)=>Tf(e,decodeURI(t)),resolveSiteLocaleData:({base:e,locales:t,...n},s)=>{var r;return{...n,...t[s],head:[...((r=t[s])==null?void 0:r.head)??[],...n.head]}}}),St=(e={})=>e,Ee=e=>zn(e)?e:`/${T1(e)}`;const h4=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),d4=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),ec=({size:e=48,stroke:t=4,wrapper:n=!0,height:s=2*e})=>{const r=p("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[p("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),p("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round"},[p("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),p("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return n?p("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${s}px`},r):r};ec.displayName="LoadingIcon";function As(e){return o2()?($h(e),!0):!1}function Ke(e){return typeof e=="function"?e():gn(e)}const Er=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const f4=Object.prototype.toString,m4=e=>f4.call(e)==="[object Object]",Mn=()=>{},xp=g4();function g4(){var e,t;return Er&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Io(e,t){function n(...s){return new Promise((r,i)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(r).catch(i)})}return n}const tc=e=>e();function v4(e,t={}){let n,s,r=Mn;const i=o=>{clearTimeout(o),r(),r=Mn};return o=>{const l=Ke(e),c=Ke(t.maxWait);return n&&i(n),l<=0||c!==void 0&&c<=0?(s&&(i(s),s=null),Promise.resolve(o())):new Promise((u,h)=>{r=t.rejectOnCancel?h:u,c&&!s&&(s=setTimeout(()=>{n&&i(n),s=null,u(o())},c)),n=setTimeout(()=>{s&&i(s),s=null,u(o())},l)})}}function _4(...e){let t=0,n,s=!0,r=Mn,i,a,o,l,c;!je(e[0])&&typeof e[0]=="object"?{delay:a,trailing:o=!0,leading:l=!0,rejectOnCancel:c=!1}=e[0]:[a,o=!0,l=!0,c=!1]=e;const u=()=>{n&&(clearTimeout(n),n=void 0,r(),r=Mn)};return d=>{const m=Ke(a),g=Date.now()-t,w=()=>i=d();return u(),m<=0?(t=Date.now(),w()):(g>m&&(l||!s)?(t=Date.now(),w()):o&&(i=new Promise((b,y)=>{r=c?y:b,n=setTimeout(()=>{t=Date.now(),s=!0,b(w()),u()},Math.max(0,m-g))})),!l&&!n&&(n=setTimeout(()=>s=!0,m)),s=!1,i)}}function w4(e=tc){const t=J(!0);function n(){t.value=!1}function s(){t.value=!0}const r=(...i)=>{t.value&&e(...i)};return{isActive:Hn(t),pause:n,resume:s,eventFilter:r}}function y4(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const s=t;t=void 0,s&&await s},n}function nc(e){return ks()}function b4(...e){if(e.length!==1)return ys(...e);const t=e[0];return typeof t=="function"?Hn(x2(()=>({get:t,set:Mn}))):J(t)}function k4(e,t=200,n={}){return Io(v4(t,n),e)}function E4(e,t=200,n=!1,s=!0,r=!1){return Io(_4(t,n,s,r),e)}function A4(e,t,n={}){const{eventFilter:s=tc,...r}=n;return de(e,Io(s,t),r)}function x4(e,t,n={}){const{eventFilter:s,...r}=n,{eventFilter:i,pause:a,resume:o,isActive:l}=w4(s);return{stop:A4(e,t,{...r,eventFilter:i}),pause:a,resume:o,isActive:l}}function xi(e,t=!0,n){nc()?we(e,n):t?e():Nt(e)}function P4(e,t){nc()&&wn(e,t)}function T4(e,t,n={}){const{immediate:s=!0}=n,r=J(!1);let i=null;function a(){i&&(clearTimeout(i),i=null)}function o(){r.value=!1,a()}function l(...c){a(),r.value=!0,i=setTimeout(()=>{r.value=!1,i=null,e(...c)},Ke(t))}return s&&(r.value=!0,Er&&l()),As(o),{isPending:Hn(r),start:l,stop:o}}function sr(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,r=je(e),i=J(e);function a(o){if(arguments.length)return i.value=o,i.value;{const l=Ke(n);return i.value=i.value===l?Ke(s):l,i.value}}return r?a:[i,a]}const Ot=Er?window:void 0,sc=Er?window.document:void 0,rc=Er?window.navigator:void 0;function Zt(e){var t;const n=Ke(e);return(t=n==null?void 0:n.$el)!=null?t:n}function Ne(...e){let t,n,s,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,r]=e,t=Ot):[t,n,s,r]=e,!t)return Mn;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],a=()=>{i.forEach(u=>u()),i.length=0},o=(u,h,d,m)=>(u.addEventListener(h,d,m),()=>u.removeEventListener(h,d,m)),l=de(()=>[Zt(t),Ke(r)],([u,h])=>{if(a(),!u)return;const d=m4(h)?{...h}:h;i.push(...n.flatMap(m=>s.map(g=>o(u,m,g,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),a()};return As(c),c}function B4(){const e=J(!1),t=ks();return t&&we(()=>{e.value=!0},t),e}function Ar(e){const t=B4();return A(()=>(t.value,!!e()))}function Ro(e,t={}){const{window:n=Ot}=t,s=Ar(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=J(!1),a=c=>{i.value=c.matches},o=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a))},l=Js(()=>{s.value&&(o(),r=n.matchMedia(Ke(e)),"addEventListener"in r?r.addEventListener("change",a):r.addListener(a),i.value=r.matches)});return As(()=>{l(),o(),r=void 0}),i}function Pp(e,t={}){const{controls:n=!1,navigator:s=rc}=t,r=Ar(()=>s&&"permissions"in s),i=Fe(),a=typeof e=="string"?{name:e}:e,o=Fe(),l=()=>{var u,h;o.value=(h=(u=i.value)==null?void 0:u.state)!=null?h:"prompt"};Ne(i,"change",l);const c=y4(async()=>{if(r.value){if(!i.value)try{i.value=await s.permissions.query(a)}catch{i.value=void 0}finally{l()}if(n)return pe(i.value)}});return c(),n?{state:o,isSupported:r,query:c}:o}function C4(e={}){const{navigator:t=rc,read:n=!1,source:s,copiedDuring:r=1500,legacy:i=!1}=e,a=Ar(()=>t&&"clipboard"in t),o=Pp("clipboard-read"),l=Pp("clipboard-write"),c=A(()=>a.value||i),u=J(""),h=J(!1),d=T4(()=>h.value=!1,r);function m(){a.value&&y(o.value)?t.clipboard.readText().then(E=>{u.value=E}):u.value=b()}c.value&&n&&Ne(["copy","cut"],m);async function g(E=Ke(s)){c.value&&E!=null&&(a.value&&y(l.value)?await t.clipboard.writeText(E):w(E),u.value=E,h.value=!0,d.start())}function w(E){const v=document.createElement("textarea");v.value=E??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function b(){var E,v,x;return(x=(v=(E=document==null?void 0:document.getSelection)==null?void 0:E.call(document))==null?void 0:v.toString())!=null?x:""}function y(E){return E==="granted"||E==="prompt"}return{isSupported:c,text:u,copied:h,copy:g}}const Ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Kr="__vueuse_ssr_handlers__",D4=O4();function O4(){return Kr in Ur||(Ur[Kr]=Ur[Kr]||{}),Ur[Kr]}function I4(e,t){return D4[e]||t}function R4(e){return Ro("(prefers-color-scheme: dark)",e)}function S4(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const L4={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Tp="vueuse-storage";function Un(e,t,n,s={}){var r;const{flush:i="pre",deep:a=!0,listenToStorageChanges:o=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:h=Ot,eventFilter:d,onError:m=D=>{console.error(D)},initOnMounted:g}=s,w=(u?Fe:J)(typeof t=="function"?t():t);if(!n)try{n=I4("getDefaultStorage",()=>{var D;return(D=Ot)==null?void 0:D.localStorage})()}catch(D){m(D)}if(!n)return w;const b=Ke(t),y=S4(b),E=(r=s.serializer)!=null?r:L4[y],{pause:v,resume:x}=x4(w,()=>j(w.value),{flush:i,deep:a,eventFilter:d});h&&o&&xi(()=>{n instanceof Storage?Ne(h,"storage",Q):Ne(h,Tp,V),g&&Q()}),g||Q();function L(D,H){if(h){const F={key:e,oldValue:D,newValue:H,storageArea:n};h.dispatchEvent(n instanceof Storage?new StorageEvent("storage",F):new CustomEvent(Tp,{detail:F}))}}function j(D){try{const H=n.getItem(e);if(D==null)L(H,null),n.removeItem(e);else{const F=E.write(D);H!==F&&(n.setItem(e,F),L(H,F))}}catch(H){m(H)}}function C(D){const H=D?D.newValue:n.getItem(e);if(H==null)return l&&b!=null&&n.setItem(e,E.write(b)),b;if(!D&&c){const F=E.read(H);return typeof c=="function"?c(F,b):y==="object"&&!Array.isArray(F)?{...b,...F}:F}else return typeof H!="string"?H:E.read(H)}function Q(D){if(!(D&&D.storageArea!==n)){if(D&&D.key==null){w.value=b;return}if(!(D&&D.key!==e)){v();try{(D==null?void 0:D.newValue)!==E.write(w.value)&&(w.value=C(D))}catch(H){m(H)}finally{D?Nt(x):x()}}}}function V(D){Q(D.detail)}return w}function F4(e,t,n={}){const{window:s=Ot,...r}=n;let i;const a=Ar(()=>s&&"ResizeObserver"in s),o=()=>{i&&(i.disconnect(),i=void 0)},l=A(()=>{const h=Ke(e);return Array.isArray(h)?h.map(d=>Zt(d)):[Zt(h)]}),c=de(l,h=>{if(o(),a.value&&s){i=new ResizeObserver(t);for(const d of h)d&&i.observe(d,r)}},{immediate:!0,flush:"post"}),u=()=>{o(),c()};return As(u),{isSupported:a,stop:u}}function V4(e,t={width:0,height:0},n={}){const{window:s=Ot,box:r="content-box"}=n,i=A(()=>{var h,d;return(d=(h=Zt(e))==null?void 0:h.namespaceURI)==null?void 0:d.includes("svg")}),a=J(t.width),o=J(t.height),{stop:l}=F4(e,([h])=>{const d=r==="border-box"?h.borderBoxSize:r==="content-box"?h.contentBoxSize:h.devicePixelContentBoxSize;if(s&&i.value){const m=Zt(e);if(m){const g=m.getBoundingClientRect();a.value=g.width,o.value=g.height}}else if(d){const m=Array.isArray(d)?d:[d];a.value=m.reduce((g,{inlineSize:w})=>g+w,0),o.value=m.reduce((g,{blockSize:w})=>g+w,0)}else a.value=h.contentRect.width,o.value=h.contentRect.height},n);xi(()=>{const h=Zt(e);h&&(a.value="offsetWidth"in h?h.offsetWidth:t.width,o.value="offsetHeight"in h?h.offsetHeight:t.height)});const c=de(()=>Zt(e),h=>{a.value=h?t.width:0,o.value=h?t.height:0});function u(){l(),c()}return{width:a,height:o,stop:u}}const Bp=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Pi(e,t={}){const{document:n=sc,autoExit:s=!1}=t,r=A(()=>{var y;return(y=Zt(e))!=null?y:n==null?void 0:n.querySelector("html")}),i=J(!1),a=A(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(y=>n&&y in n||r.value&&y in r.value)),o=A(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(y=>n&&y in n||r.value&&y in r.value)),l=A(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(y=>n&&y in n||r.value&&y in r.value)),c=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(y=>n&&y in n),u=Ar(()=>r.value&&n&&a.value!==void 0&&o.value!==void 0&&l.value!==void 0),h=()=>c?(n==null?void 0:n[c])===r.value:!1,d=()=>{if(l.value){if(n&&n[l.value]!=null)return n[l.value];{const y=r.value;if((y==null?void 0:y[l.value])!=null)return!!y[l.value]}}return!1};async function m(){if(!(!u.value||!i.value)){if(o.value)if((n==null?void 0:n[o.value])!=null)await n[o.value]();else{const y=r.value;(y==null?void 0:y[o.value])!=null&&await y[o.value]()}i.value=!1}}async function g(){if(!u.value||i.value)return;d()&&await m();const y=r.value;a.value&&(y==null?void 0:y[a.value])!=null&&(await y[a.value](),i.value=!0)}async function w(){await(i.value?m():g())}const b=()=>{const y=d();(!y||y&&h())&&(i.value=y)};return Ne(n,Bp,b,!1),Ne(()=>Zt(r),Bp,b,!1),s&&As(m),{isSupported:u,isFullscreen:i,enter:g,exit:m,toggle:w}}function na(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function q4(e,t,n={}){const{window:s=Ot}=n;return Un(e,t,s==null?void 0:s.localStorage,n)}function j4(e={}){const{window:t=Ot}=e;if(!t)return J(["en"]);const n=t.navigator,s=J(n.languages);return Ne(t,"languagechange",()=>{s.value=n.languages}),s}function sa(e,t=Mn,n={}){const{immediate:s=!0,manual:r=!1,type:i="text/javascript",async:a=!0,crossOrigin:o,referrerPolicy:l,noModule:c,defer:u,document:h=sc,attrs:d={}}=n,m=J(null);let g=null;const w=E=>new Promise((v,x)=>{const L=Q=>(m.value=Q,v(Q),Q);if(!h){v(!1);return}let j=!1,C=h.querySelector(`script[src="${Ke(e)}"]`);C?C.hasAttribute("data-loaded")&&L(C):(C=h.createElement("script"),C.type=i,C.async=a,C.src=Ke(e),u&&(C.defer=u),o&&(C.crossOrigin=o),c&&(C.noModule=c),l&&(C.referrerPolicy=l),Object.entries(d).forEach(([Q,V])=>C==null?void 0:C.setAttribute(Q,V)),j=!0),C.addEventListener("error",Q=>x(Q)),C.addEventListener("abort",Q=>x(Q)),C.addEventListener("load",()=>{C.setAttribute("data-loaded","true"),t(C),L(C)}),j&&(C=h.head.appendChild(C)),E||L(C)}),b=(E=!0)=>(g||(g=w(E)),g),y=()=>{if(!h)return;g=null,m.value&&(m.value=null);const E=h.querySelector(`script[src="${Ke(e)}"]`);E&&h.head.removeChild(E)};return s&&!r&&xi(b),r||P4(y),{scriptTag:m,load:b,unload:y}}function ic(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:ic(n)}}function $4(e){const t=e||window.event,n=t.target;return ic(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const ra=new WeakMap;function So(e,t=!1){const n=J(t);let s=null,r="";de(b4(e),o=>{const l=na(Ke(o));if(l){const c=l;if(ra.get(c)||ra.set(c,c.style.overflow),c.style.overflow!=="hidden"&&(r=c.style.overflow),c.style.overflow==="hidden")return n.value=!0;if(n.value)return c.style.overflow="hidden"}},{immediate:!0});const i=()=>{const o=na(Ke(e));!o||n.value||(xp&&(s=Ne(o,"touchmove",l=>{$4(l)},{passive:!1})),o.style.overflow="hidden",n.value=!0)},a=()=>{const o=na(Ke(e));!o||!n.value||(xp&&(s==null||s()),o.style.overflow=r,ra.delete(o),n.value=!1)};return As(a),A({get(){return n.value},set(o){o?i():a()}})}function Lo(e,t,n={}){const{window:s=Ot}=n;return Un(e,t,s==null?void 0:s.sessionStorage,n)}function M4(e={}){const{window:t=Ot,behavior:n="auto"}=e;if(!t)return{x:J(0),y:J(0)};const s=J(t.scrollX),r=J(t.scrollY),i=A({get(){return s.value},set(o){scrollTo({left:o,behavior:n})}}),a=A({get(){return r.value},set(o){scrollTo({top:o,behavior:n})}});return Ne(t,"scroll",()=>{s.value=t.scrollX,r.value=t.scrollY},{capture:!1,passive:!0}),{x:i,y:a}}function N4(e={}){const{window:t=Ot,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:s=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:i=!0,type:a="inner"}=e,o=J(n),l=J(s),c=()=>{t&&(a==="outer"?(o.value=t.outerWidth,l.value=t.outerHeight):i?(o.value=t.innerWidth,l.value=t.innerHeight):(o.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};if(c(),xi(c),Ne("resize",c,{passive:!0}),r){const u=Ro("(orientation: portrait)");de(u,()=>c())}return{width:o,height:l}}var ft=Uint8Array,Zn=Uint16Array,H4=Int32Array,ac=new ft([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),oc=new ft([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),z4=new ft([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),lc=function(e,t){for(var n=new Zn(31),s=0;s<31;++s)n[s]=t+=1<<e[s-1];for(var r=new H4(n[30]),s=1;s<30;++s)for(var i=n[s];i<n[s+1];++i)r[i]=i-n[s]<<5|s;return{b:n,r}},pc=lc(ac,2),cc=pc.b,U4=pc.r;cc[28]=258,U4[258]=28;var K4=lc(oc,0),G4=K4.b,Ra=new Zn(32768);for(var De=0;De<32768;++De){var on=(De&43690)>>1|(De&21845)<<1;on=(on&52428)>>2|(on&13107)<<2,on=(on&61680)>>4|(on&3855)<<4,Ra[De]=((on&65280)>>8|(on&255)<<8)>>1}var Ks=function(e,t,n){for(var s=e.length,r=0,i=new Zn(t);r<s;++r)e[r]&&++i[e[r]-1];var a=new Zn(t);for(r=1;r<t;++r)a[r]=a[r-1]+i[r-1]<<1;var o;if(n){o=new Zn(1<<t);var l=15-t;for(r=0;r<s;++r)if(e[r])for(var c=r<<4|e[r],u=t-e[r],h=a[e[r]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)o[Ra[h]>>l]=c}else for(o=new Zn(s),r=0;r<s;++r)e[r]&&(o[r]=Ra[a[e[r]-1]++]>>15-e[r]);return o},xr=new ft(288);for(var De=0;De<144;++De)xr[De]=8;for(var De=144;De<256;++De)xr[De]=9;for(var De=256;De<280;++De)xr[De]=7;for(var De=280;De<288;++De)xr[De]=8;var uc=new ft(32);for(var De=0;De<32;++De)uc[De]=5;var Q4=Ks(xr,9,1),W4=Ks(uc,5,1),ia=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Pt=function(e,t,n){var s=t/8|0;return(e[s]|e[s+1]<<8)>>(t&7)&n},aa=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Y4=function(e){return(e+7)/8|0},hc=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new ft(e.subarray(t,n))},X4=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],yt=function(e,t,n){var s=new Error(t||X4[e]);if(s.code=e,Error.captureStackTrace&&Error.captureStackTrace(s,yt),!n)throw s;return s},J4=function(e,t,n,s){var r=e.length,i=0;if(!r||t.f&&!t.l)return n||new ft(0);var a=!n,o=a||t.i!=2,l=t.i;a&&(n=new ft(r*3));var c=function(he){var ke=n.length;if(he>ke){var _=new ft(Math.max(ke*2,he));_.set(n),n=_}},u=t.f||0,h=t.p||0,d=t.b||0,m=t.l,g=t.d,w=t.m,b=t.n,y=r*8;do{if(!m){u=Pt(e,h,1);var E=Pt(e,h+1,3);if(h+=3,E)if(E==1)m=Q4,g=W4,w=9,b=5;else if(E==2){var j=Pt(e,h,31)+257,C=Pt(e,h+10,15)+4,Q=j+Pt(e,h+5,31)+1;h+=14;for(var V=new ft(Q),D=new ft(19),H=0;H<C;++H)D[z4[H]]=Pt(e,h+H*3,7);h+=C*3;for(var F=ia(D),ee=(1<<F)-1,oe=Ks(D,F,1),H=0;H<Q;){var fe=oe[Pt(e,h,ee)];h+=fe&15;var v=fe>>4;if(v<16)V[H++]=v;else{var K=0,$=0;for(v==16?($=3+Pt(e,h,3),h+=2,K=V[H-1]):v==17?($=3+Pt(e,h,7),h+=3):v==18&&($=11+Pt(e,h,127),h+=7);$--;)V[H++]=K}}var X=V.subarray(0,j),ae=V.subarray(j);w=ia(X),b=ia(ae),m=Ks(X,w,1),g=Ks(ae,b,1)}else yt(1);else{var v=Y4(h)+4,x=e[v-4]|e[v-3]<<8,L=v+x;if(L>r){l&&yt(0);break}o&&c(d+x),n.set(e.subarray(v,L),d),t.b=d+=x,t.p=h=L*8,t.f=u;continue}if(h>y){l&&yt(0);break}}o&&c(d+131072);for(var Ve=(1<<w)-1,qe=(1<<b)-1,ge=h;;ge=h){var K=m[aa(e,h)&Ve],He=K>>4;if(h+=K&15,h>y){l&&yt(0);break}if(K||yt(2),He<256)n[d++]=He;else if(He==256){ge=h,m=null;break}else{var vt=He-254;if(He>264){var H=He-257,at=ac[H];vt=Pt(e,h,(1<<at)-1)+cc[H],h+=at}var We=g[aa(e,h)&qe],T=We>>4;We||yt(3),h+=We&15;var ae=G4[T];if(T>3){var at=oc[T];ae+=aa(e,h)&(1<<at)-1,h+=at}if(h>y){l&&yt(0);break}o&&c(d+131072);var G=d+vt;if(d<ae){var z=i-ae,Z=Math.min(ae,G);for(z+d<0&&yt(3);d<Z;++d)n[d]=s[z+d]}for(;d<G;++d)n[d]=n[d-ae]}}t.l=m,t.p=ge,t.b=d,t.f=u,m&&(u=1,t.m=w,t.d=g,t.n=b)}while(!u);return d!=n.length&&a?hc(n,0,d):n.subarray(0,d)},Z4=new ft(0),e3=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&yt(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&yt(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function t3(e,t){return J4(e.subarray(e3(e,t),-4),{i:2},t,t)}var Sa=typeof TextDecoder<"u"&&new TextDecoder,n3=0;try{Sa.decode(Z4,{stream:!0}),n3=1}catch{}var s3=function(e){for(var t="",n=0;;){var s=e[n++],r=(s>127)+(s>223)+(s>239);if(n+r>e.length)return{s:t,r:hc(e,n-1)};r?r==3?(s=((s&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|s>>10,56320|s&1023)):r&1?t+=String.fromCharCode((s&31)<<6|e[n++]&63):t+=String.fromCharCode((s&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(s)}};function r3(e,t){{for(var n=new ft(e.length),s=0;s<e.length;++s)n[s]=e.charCodeAt(s);return n}for(var r=e.length,s=0;s<r;++s);}function i3(e,t){var n;if(Sa)return Sa.decode(e);var s=s3(e),r=s.s,n=s.r;return n.length&&yt(8),r}const Cp=e=>{const t=atob(e);return i3(t3(r3(t)))},Et=(e,t)=>{var s;const n=(s=(t==null?void 0:t._instance)??ks())==null?void 0:s.appContext.components;return n?e in n||pt(e)in n||dr(pt(e))in n:!1},Fo=e=>new Promise(t=>{setTimeout(t,e)}),Pr=e=>{const t=zt();return A(()=>e[t.value]??{})},Vo=e=>typeof e<"u",oa=e=>typeof e=="number",{isArray:La}=Array,rr=(e,t)=>Re(e)&&e.startsWith(t),a3=(e,t)=>Re(e)&&e.endsWith(t),{entries:xs}=Object,{keys:It}=Object,qo=e=>{if(e){if(typeof e=="number")return new Date(e);const t=Date.parse(e.toString());if(!Number.isNaN(t))return new Date(t)}return null},Ti=e=>rr(e,"/");var o3=M({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const t=A(()=>{const s=["font-icon icon"],r=`fas fa-${e.icon}`;return s.push("fa-fw fa-sm"),s.push(e.icon.includes(" ")?e.icon:r),s}),n=A(()=>{const s={};return e.color&&(s.color=e.color),e.size&&(s["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),It(s).length?s:null});return()=>e.icon?p("span",{key:e.icon,class:t.value,style:n.value}):null}});const dc=({type:e="info",text:t="",vertical:n,color:s,bgColor:r},{slots:i})=>{var a;return p("span",{class:["vp-badge",e,{diy:s||r}],style:{verticalAlign:n??!1,backgroundColor:r??!1,color:s??!1}},((a=i.default)==null?void 0:a.call(i))??t)};dc.displayName="Badge";const fc=({title:e,desc:t="",logo:n,background:s,color:r,link:i})=>{const a=[n?p("img",{class:"vp-card-logo",src:Ee(n),loading:"lazy","no-view":""}):null,p("div",{class:"vp-card-content"},[p("div",{class:"vp-card-title",innerHTML:e}),p("hr"),p("div",{class:"vp-card-desc",innerHTML:t})])],o={};return s&&(o.background=s),r&&(o.color=r),i?ki(i)?p("a",{class:"vp-card",href:i,target:"_blank",style:o},a):p($e,{to:i,class:"vp-card",style:o},()=>a):p("div",{class:"vp-card",style:o},a)};fc.displayName="VPCard";const l3={enhance:({app:e})=>{Et("FontIcon")||e.component("FontIcon",o3),Et("Badge")||e.component("Badge",dc),Et("VPCard")||e.component("VPCard",fc)},setup:()=>{sa("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),sa("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),sa("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[]},p3=Object.freeze(Object.defineProperty({__proto__:null,default:l3},Symbol.toStringTag,{value:"Module"})),Dp=async(e,t)=>{const{path:n,query:s}=e.currentRoute.value,{scrollBehavior:r}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:n,query:s,hash:t}),e.options.scrollBehavior=r},c3=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:s=5})=>{const r=xn();Ne("scroll",k4(()=>{var g,w;const a=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(a-0)<s){Dp(r,"");return}const l=window.innerHeight+a,c=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),u=Math.abs(c-l)<s,h=Array.from(document.querySelectorAll(e)),m=Array.from(document.querySelectorAll(t)).filter(b=>h.some(y=>y.hash===b.hash));for(let b=0;b<m.length;b++){const y=m[b],E=m[b+1],v=a>=(((g=y.parentElement)==null?void 0:g.offsetTop)??0)-s,x=!E||a<(((w=E.parentElement)==null?void 0:w.offsetTop)??0)-s;if(!(v&&x))continue;const j=decodeURIComponent(r.currentRoute.value.hash),C=decodeURIComponent(y.hash);if(j===C)return;if(u){for(let Q=b+1;Q<m.length;Q++)if(j===decodeURIComponent(m[Q].hash))return}Dp(r,C);return}},n))},u3=".vp-sidebar-link, .vp-toc-link",h3=".header-anchor",d3=200,f3=5,m3=St({setup(){c3({headerLinkSelector:u3,headerAnchorSelector:h3,delay:d3,offset:f3})}}),g3=Object.freeze(Object.defineProperty({__proto__:null,default:m3},Symbol.toStringTag,{value:"Module"}));let mc=e=>Re(e.title)?{title:e.title}:null;const gc=Symbol(""),v3=e=>{mc=e},_3=()=>Oe(gc),w3=e=>{e.provide(gc,mc)};var y3={"/":{title:"目录",empty:"暂无目录"}},b3=M({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(e){const t=_3(),n=Pr(y3),s=Ie(),r=i4(),i=Y1(),a=Fe(xs(r.value).map(([l,{meta:c}])=>{const u=t(c);if(!u)return null;const h=l.split("/").length;return{level:a3(l,"/")?h-2:h-1,base:l.replace(/\/[^/]+\/?$/,"/"),path:l,...u}}).filter(l=>Es(l)&&Re(l.title))),o=A(()=>{const l=e.base?Rf(P1(e.base)):s.value.path.replace(/\/[^/]+$/,"/"),c=l.split("/").length-2,u=[];return a.value.filter(({level:h,path:d})=>{if(!rr(d,l)||d===l)return!1;if(l==="/"){const m=It(i.value.locales).filter(g=>g!=="/");if(d==="/404.html"||m.some(g=>rr(d,g)))return!1}return h-c<=e.level}).sort(({title:h,level:d,order:m},{title:g,level:w,order:b})=>d-w||(oa(m)?oa(b)?m>0?b>0?m-b:-1:b<0?m-b:1:m:oa(b)?b:h.localeCompare(g))).forEach(h=>{var g;const{base:d,level:m}=h;switch(m-c){case 1:{u.push(h);break}case 2:{const w=u.find(b=>b.path===d);w&&(w.children??(w.children=[])).push(h);break}default:{const w=u.find(b=>b.path===d.replace(/\/[^/]+\/$/,"/"));if(w){const b=(g=w.children)==null?void 0:g.find(y=>y.path===d);b&&(b.children??(b.children=[])).push(h)}}}}),u});return()=>{const l=o.value.some(c=>c.children);return p("div",{class:["vp-catalog",{index:e.index}]},[e.hideHeading?null:p("h2",{class:"vp-catalog-main-title"},n.value.title),o.value.length?p(e.index?"ol":"ul",{class:["vp-catalog-list",{deep:l}]},o.value.map(({children:c=[],title:u,path:h,content:d})=>{const m=p($e,{class:"vp-catalog-title",to:h},()=>d?p(d):u);return p("li",{class:"vp-catalog-item"},l?[p("h3",{id:u,class:["vp-catalog-child-title",{"has-children":c.length}]},[p("a",{href:`#${u}`,class:"vp-catalog-header-anchor","aria-hidden":!0},"#"),m]),c.length?p(e.index?"ol":"ul",{class:"vp-child-catalogs"},c.map(({children:g=[],content:w,path:b,title:y})=>p("li",{class:"vp-child-catalog"},[p("div",{class:["vp-catalog-sub-title",{"has-children":g.length}]},[p("a",{href:`#${y}`,class:"vp-catalog-header-anchor"},"#"),p($e,{class:"vp-catalog-title",to:b},()=>w?p(w):y)]),g.length?p(e.index?"ol":"div",{class:e.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},g.map(({content:E,path:v,title:x})=>e.index?p("li",{class:"vp-sub-catalog"},p($e,{to:v},()=>E?p(E):x)):p($e,{class:"vp-sub-catalog-link",to:v},()=>E?p(E):x))):null]))):null]:p("div",{class:"vp-catalog-child-title"},m))})):p("p",{class:"vp-empty-catalog"},n.value.empty)])}}}),k3=St({enhance:({app:e})=>{w3(e),Et("Catalog",e)||e.component("Catalog",b3)}});const E3=Object.freeze(Object.defineProperty({__proto__:null,default:k3},Symbol.toStringTag,{value:"Module"}));var A3={"/":{backToTop:"返回顶部"}};const x3=M({name:"BackToTop",setup(){const e=ye(),t=Pr(A3),n=Fe(),{height:s}=V4(n),{height:r}=N4(),{y:i}=M4(),a=A(()=>e.value.backToTop!==!1&&i.value>100),o=A(()=>i.value/(s.value-r.value)*100);return we(()=>{n.value=document.body}),()=>p(ds,{name:"back-to-top"},()=>a.value?p("button",{type:"button",class:"vp-back-to-top-button","aria-label":t.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[p("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":o.value},p("svg",p("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*o.value*.48} ${Math.PI*(100-o.value)*.48}`}))),p("div",{class:"back-to-top-icon"})]):null)}}),P3=St({rootComponents:[x3]}),T3=Object.freeze(Object.defineProperty({__proto__:null,default:P3},Symbol.toStringTag,{value:"Module"}));/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const Op=(e,t)=>{e.classList.add(t)},Ip=(e,t)=>{e.classList.remove(t)},B3=e=>{var t;(t=e==null?void 0:e.parentNode)==null||t.removeChild(e)},la=(e,t,n)=>e<t?t:e>n?n:e,Rp=e=>(-1+e)*100,C3=(()=>{const e=[],t=()=>{const n=e.shift();n&&n(t)};return n=>{e.push(n),e.length===1&&t()}})(),D3=e=>e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(t,n)=>n.toUpperCase()),Gr=(()=>{const e=["Webkit","O","Moz","ms"],t={},n=i=>{const{style:a}=document.body;if(i in a)return i;const o=i.charAt(0).toUpperCase()+i.slice(1);let l=e.length;for(;l--;){const c=`${e[l]}${o}`;if(c in a)return c}return i},s=i=>{const a=D3(i);return t[a]??(t[a]=n(a))},r=(i,a,o)=>{i.style[s(a)]=o};return(i,a)=>{for(const o in a){const l=a[o];Object.hasOwn(a,o)&&Vo(l)&&r(i,o,l)}}})(),Qt={minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},Se={percent:null,isRendered:()=>!!document.getElementById("nprogress"),set:e=>{const{speed:t,easing:n}=Qt,s=Se.isStarted(),r=la(e,Qt.minimum,1);Se.percent=r===1?null:r;const i=Se.render(!s),a=i.querySelector(Qt.barSelector);return i.offsetWidth,C3(o=>{Gr(a,{transform:`translate3d(${Rp(r)}%,0,0)`,transition:`all ${t}ms ${n}`}),r===1?(Gr(i,{transition:"none",opacity:"1"}),i.offsetWidth,setTimeout(()=>{Gr(i,{transition:`all ${t}ms linear`,opacity:"0"}),setTimeout(()=>{Se.remove(),o()},t)},t)):setTimeout(()=>{o()},t)}),Se},isStarted:()=>typeof Se.percent=="number",start:()=>{Se.percent||Se.set(0);const e=()=>{setTimeout(()=>{Se.percent&&(Se.trickle(),e())},Qt.trickleSpeed)};return e(),Se},done:e=>!e&&!Se.percent?Se:Se.increase(.3+.5*Math.random()).set(1),increase:e=>{let{percent:t}=Se;return t?(t=la(t+(typeof e=="number"?e:(1-t)*la(Math.random()*t,.1,.95)),0,.994),Se.set(t)):Se.start()},trickle:()=>Se.increase(Math.random()*Qt.trickleRate),render:e=>{if(Se.isRendered())return document.getElementById("nprogress");Op(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=Qt.template;const n=t.querySelector(Qt.barSelector),s=document.querySelector(Qt.parent),r=e?"-100":Rp(Se.percent??0);return Gr(n,{transition:"all 0 linear",transform:`translate3d(${r}%,0,0)`}),s&&(s!==document.body&&Op(s,"nprogress-custom-parent"),s.appendChild(t)),t},remove:()=>{Ip(document.documentElement,"nprogress-busy"),Ip(document.querySelector(Qt.parent),"nprogress-custom-parent"),B3(document.getElementById("nprogress"))}},O3=()=>{we(()=>{const e=xn(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||Se.start()}),e.afterEach(n=>{t.add(n.path),Se.done()})})},I3=St({setup(){O3()}}),R3=Object.freeze(Object.defineProperty({__proto__:null,default:I3},Symbol.toStringTag,{value:"Module"}));var S3=Object.create,vc=Object.defineProperty,L3=Object.getOwnPropertyDescriptor,jo=Object.getOwnPropertyNames,F3=Object.getPrototypeOf,V3=Object.prototype.hasOwnProperty,q3=(e,t)=>function(){return e&&(t=(0,e[jo(e)[0]])(e=0)),t},j3=(e,t)=>function(){return t||(0,e[jo(e)[0]])((t={exports:{}}).exports,t),t.exports},$3=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of jo(t))!V3.call(e,r)&&r!==n&&vc(e,r,{get:()=>t[r],enumerable:!(s=L3(t,r))||s.enumerable});return e},M3=(e,t,n)=>(n=e!=null?S3(F3(e)):{},$3(vc(n,"default",{value:e,enumerable:!0}),e)),Tr=q3({"../../node_modules/.pnpm/tsup@8.3.0_@microsoft+api-extractor@7.43.0_@types+node@20.16.5__@swc+core@1.5.29_jiti@1.21.6__ldnw4a7r4ccknnz6q542psuydy/node_modules/tsup/assets/esm_shims.js"(){}}),N3=j3({"../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e,t){Tr(),t.exports=s;function n(i){return i instanceof Buffer?Buffer.from(i):new i.constructor(i.buffer.slice(),i.byteOffset,i.length)}function s(i){if(i=i||{},i.circles)return r(i);const a=new Map;if(a.set(Date,h=>new Date(h)),a.set(Map,(h,d)=>new Map(l(Array.from(h),d))),a.set(Set,(h,d)=>new Set(l(Array.from(h),d))),i.constructorHandlers)for(const h of i.constructorHandlers)a.set(h[0],h[1]);let o=null;return i.proto?u:c;function l(h,d){const m=Object.keys(h),g=new Array(m.length);for(let w=0;w<m.length;w++){const b=m[w],y=h[b];typeof y!="object"||y===null?g[b]=y:y.constructor!==Object&&(o=a.get(y.constructor))?g[b]=o(y,d):ArrayBuffer.isView(y)?g[b]=n(y):g[b]=d(y)}return g}function c(h){if(typeof h!="object"||h===null)return h;if(Array.isArray(h))return l(h,c);if(h.constructor!==Object&&(o=a.get(h.constructor)))return o(h,c);const d={};for(const m in h){if(Object.hasOwnProperty.call(h,m)===!1)continue;const g=h[m];typeof g!="object"||g===null?d[m]=g:g.constructor!==Object&&(o=a.get(g.constructor))?d[m]=o(g,c):ArrayBuffer.isView(g)?d[m]=n(g):d[m]=c(g)}return d}function u(h){if(typeof h!="object"||h===null)return h;if(Array.isArray(h))return l(h,u);if(h.constructor!==Object&&(o=a.get(h.constructor)))return o(h,u);const d={};for(const m in h){const g=h[m];typeof g!="object"||g===null?d[m]=g:g.constructor!==Object&&(o=a.get(g.constructor))?d[m]=o(g,u):ArrayBuffer.isView(g)?d[m]=n(g):d[m]=u(g)}return d}}function r(i){const a=[],o=[],l=new Map;if(l.set(Date,m=>new Date(m)),l.set(Map,(m,g)=>new Map(u(Array.from(m),g))),l.set(Set,(m,g)=>new Set(u(Array.from(m),g))),i.constructorHandlers)for(const m of i.constructorHandlers)l.set(m[0],m[1]);let c=null;return i.proto?d:h;function u(m,g){const w=Object.keys(m),b=new Array(w.length);for(let y=0;y<w.length;y++){const E=w[y],v=m[E];if(typeof v!="object"||v===null)b[E]=v;else if(v.constructor!==Object&&(c=l.get(v.constructor)))b[E]=c(v,g);else if(ArrayBuffer.isView(v))b[E]=n(v);else{const x=a.indexOf(v);x!==-1?b[E]=o[x]:b[E]=g(v)}}return b}function h(m){if(typeof m!="object"||m===null)return m;if(Array.isArray(m))return u(m,h);if(m.constructor!==Object&&(c=l.get(m.constructor)))return c(m,h);const g={};a.push(m),o.push(g);for(const w in m){if(Object.hasOwnProperty.call(m,w)===!1)continue;const b=m[w];if(typeof b!="object"||b===null)g[w]=b;else if(b.constructor!==Object&&(c=l.get(b.constructor)))g[w]=c(b,h);else if(ArrayBuffer.isView(b))g[w]=n(b);else{const y=a.indexOf(b);y!==-1?g[w]=o[y]:g[w]=h(b)}}return a.pop(),o.pop(),g}function d(m){if(typeof m!="object"||m===null)return m;if(Array.isArray(m))return u(m,d);if(m.constructor!==Object&&(c=l.get(m.constructor)))return c(m,d);const g={};a.push(m),o.push(g);for(const w in m){const b=m[w];if(typeof b!="object"||b===null)g[w]=b;else if(b.constructor!==Object&&(c=l.get(b.constructor)))g[w]=c(b,d);else if(ArrayBuffer.isView(b))g[w]=n(b);else{const y=a.indexOf(b);y!==-1?g[w]=o[y]:g[w]=d(b)}}return a.pop(),o.pop(),g}}}});Tr();Tr();Tr();var H3=typeof navigator<"u",Y=typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof global<"u"?global:{};typeof Y.chrome<"u"&&Y.chrome.devtools;H3&&(Y.self,Y.top);typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes("electron");Tr();var z3=M3(N3()),U3=/(?:^|[-_/])(\w)/g;function K3(e,t){return t?t.toUpperCase():""}function G3(e){return e&&`${e}`.replace(U3,K3)}function Q3(e,t){const n=e.replace(/^[a-z]:/i,"").replace(/\\/g,"/"),s=n.lastIndexOf("/"),r=n.substring(s+1);{const i=r.lastIndexOf(t);return r.substring(0,i)}}var Sp=(0,z3.default)({circles:!0});const W3={trailing:!0};function Bi(e,t=25,n={}){if(n={...W3,...n},!Number.isFinite(t))throw new TypeError("Expected `wait` to be a finite number");let s,r,i=[],a,o;const l=(c,u)=>(a=Y3(e,c,u),a.finally(()=>{if(a=null,n.trailing&&o&&!r){const h=l(c,o);return o=null,h}}),a);return function(...c){return a?(n.trailing&&(o=c),a):new Promise(u=>{const h=!r&&n.leading;clearTimeout(r),r=setTimeout(()=>{r=null;const d=n.leading?s:l(this,c);for(const m of i)m(d);i=[]},t),h?(s=l(this,c),u(s)):i.push(u)})}}async function Y3(e,t,n){return await e.apply(t,n)}function Fa(e,t={},n){for(const s in e){const r=e[s],i=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?Fa(r,t,i):typeof r=="function"&&(t[i]=r)}return t}const X3={run:e=>e()},J3=()=>X3,_c=typeof console.createTask<"u"?console.createTask:J3;function Z3(e,t){const n=t.shift(),s=_c(n);return e.reduce((r,i)=>r.then(()=>s.run(()=>i(...t))),Promise.resolve())}function e6(e,t){const n=t.shift(),s=_c(n);return Promise.all(e.map(r=>s.run(()=>r(...t))))}function pa(e,t){for(const n of[...e])n(t)}class t6{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,s={}){if(!t||typeof n!="function")return()=>{};const r=t;let i;for(;this._deprecatedHooks[t];)i=this._deprecatedHooks[t],t=i.to;if(i&&!s.allowDeprecated){let a=i.message;a||(a=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let s,r=(...i)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...i));return s=this.hook(t,r),s}removeHook(t,n){if(this._hooks[t]){const s=this._hooks[t].indexOf(n);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const s=this._hooks[t]||[];delete this._hooks[t];for(const r of s)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=Fa(t),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(t){const n=Fa(t);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Z3,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(e6,t,...n)}callHookWith(t,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&pa(this._before,r);const i=t(n in this._hooks?[...this._hooks[n]]:[],s);return i instanceof Promise?i.finally(()=>{this._after&&r&&pa(this._after,r)}):(this._after&&r&&pa(this._after,r),i)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function wc(){return new t6}var n6=Object.create,yc=Object.defineProperty,s6=Object.getOwnPropertyDescriptor,$o=Object.getOwnPropertyNames,r6=Object.getPrototypeOf,i6=Object.prototype.hasOwnProperty,a6=(e,t)=>function(){return e&&(t=(0,e[$o(e)[0]])(e=0)),t},bc=(e,t)=>function(){return t||(0,e[$o(e)[0]])((t={exports:{}}).exports,t),t.exports},o6=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of $o(t))!i6.call(e,r)&&r!==n&&yc(e,r,{get:()=>t[r],enumerable:!(s=s6(t,r))||s.enumerable});return e},l6=(e,t,n)=>(n=e!=null?n6(r6(e)):{},o6(yc(n,"default",{value:e,enumerable:!0}),e)),I=a6({"../../node_modules/.pnpm/tsup@8.3.0_@microsoft+api-extractor@7.43.0_@types+node@20.16.5__@swc+core@1.5.29_jiti@1.21.6__ldnw4a7r4ccknnz6q542psuydy/node_modules/tsup/assets/esm_shims.js"(){}}),p6=bc({"../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e,t){I(),function(n){var s={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"Ae",Å:"A",Æ:"AE",Ç:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"Oe",Ő:"O",Ø:"O",Ù:"U",Ú:"U",Û:"U",Ü:"Ue",Ű:"U",Ý:"Y",Þ:"TH",ß:"ss",à:"a",á:"a",â:"a",ã:"a",ä:"ae",å:"a",æ:"ae",ç:"c",è:"e",é:"e",ê:"e",ë:"e",ì:"i",í:"i",î:"i",ï:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"oe",ő:"o",ø:"o",ù:"u",ú:"u",û:"u",ü:"ue",ű:"u",ý:"y",þ:"th",ÿ:"y","ẞ":"SS",ا:"a",أ:"a",إ:"i",آ:"aa",ؤ:"u",ئ:"e",ء:"a",ب:"b",ت:"t",ث:"th",ج:"j",ح:"h",خ:"kh",د:"d",ذ:"th",ر:"r",ز:"z",س:"s",ش:"sh",ص:"s",ض:"dh",ط:"t",ظ:"z",ع:"a",غ:"gh",ف:"f",ق:"q",ك:"k",ل:"l",م:"m",ن:"n",ه:"h",و:"w",ي:"y",ى:"a",ة:"h",ﻻ:"la",ﻷ:"laa",ﻹ:"lai",ﻵ:"laa",گ:"g",چ:"ch",پ:"p",ژ:"zh",ک:"k",ی:"y","َ":"a","ً":"an","ِ":"e","ٍ":"en","ُ":"u","ٌ":"on","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9",က:"k",ခ:"kh",ဂ:"g",ဃ:"ga",င:"ng",စ:"s",ဆ:"sa",ဇ:"z","စျ":"za",ည:"ny",ဋ:"t",ဌ:"ta",ဍ:"d",ဎ:"da",ဏ:"na",တ:"t",ထ:"ta",ဒ:"d",ဓ:"da",န:"n",ပ:"p",ဖ:"pa",ဗ:"b",ဘ:"ba",မ:"m",ယ:"y",ရ:"ya",လ:"l",ဝ:"w",သ:"th",ဟ:"h",ဠ:"la",အ:"a","ြ":"y","ျ":"ya","ွ":"w","ြွ":"yw","ျွ":"ywa","ှ":"h",ဧ:"e","၏":"-e",ဣ:"i",ဤ:"-i",ဉ:"u",ဦ:"-u",ဩ:"aw","သြော":"aw",ဪ:"aw","၀":"0","၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","္":"","့":"","း":"",č:"c",ď:"d",ě:"e",ň:"n",ř:"r",š:"s",ť:"t",ů:"u",ž:"z",Č:"C",Ď:"D",Ě:"E",Ň:"N",Ř:"R",Š:"S",Ť:"T",Ů:"U",Ž:"Z",ހ:"h",ށ:"sh",ނ:"n",ރ:"r",ބ:"b",ޅ:"lh",ކ:"k",އ:"a",ވ:"v",މ:"m",ފ:"f",ދ:"dh",ތ:"th",ލ:"l",ގ:"g",ޏ:"gn",ސ:"s",ޑ:"d",ޒ:"z",ޓ:"t",ޔ:"y",ޕ:"p",ޖ:"j",ޗ:"ch",ޘ:"tt",ޙ:"hh",ޚ:"kh",ޛ:"th",ޜ:"z",ޝ:"sh",ޞ:"s",ޟ:"d",ޠ:"t",ޡ:"z",ޢ:"a",ޣ:"gh",ޤ:"q",ޥ:"w","ަ":"a","ާ":"aa","ި":"i","ީ":"ee","ު":"u","ޫ":"oo","ެ":"e","ޭ":"ey","ޮ":"o","ޯ":"oa","ް":"",ა:"a",ბ:"b",გ:"g",დ:"d",ე:"e",ვ:"v",ზ:"z",თ:"t",ი:"i",კ:"k",ლ:"l",მ:"m",ნ:"n",ო:"o",პ:"p",ჟ:"zh",რ:"r",ს:"s",ტ:"t",უ:"u",ფ:"p",ქ:"k",ღ:"gh",ყ:"q",შ:"sh",ჩ:"ch",ც:"ts",ძ:"dz",წ:"ts",ჭ:"ch",ხ:"kh",ჯ:"j",ჰ:"h",α:"a",β:"v",γ:"g",δ:"d",ε:"e",ζ:"z",η:"i",θ:"th",ι:"i",κ:"k",λ:"l",μ:"m",ν:"n",ξ:"ks",ο:"o",π:"p",ρ:"r",σ:"s",τ:"t",υ:"y",φ:"f",χ:"x",ψ:"ps",ω:"o",ά:"a",έ:"e",ί:"i",ό:"o",ύ:"y",ή:"i",ώ:"o",ς:"s",ϊ:"i",ΰ:"y",ϋ:"y",ΐ:"i",Α:"A",Β:"B",Γ:"G",Δ:"D",Ε:"E",Ζ:"Z",Η:"I",Θ:"TH",Ι:"I",Κ:"K",Λ:"L",Μ:"M",Ν:"N",Ξ:"KS",Ο:"O",Π:"P",Ρ:"R",Σ:"S",Τ:"T",Υ:"Y",Φ:"F",Χ:"X",Ψ:"PS",Ω:"O",Ά:"A",Έ:"E",Ί:"I",Ό:"O",Ύ:"Y",Ή:"I",Ώ:"O",Ϊ:"I",Ϋ:"Y",ā:"a",ē:"e",ģ:"g",ī:"i",ķ:"k",ļ:"l",ņ:"n",ū:"u",Ā:"A",Ē:"E",Ģ:"G",Ī:"I",Ķ:"k",Ļ:"L",Ņ:"N",Ū:"U",Ќ:"Kj",ќ:"kj",Љ:"Lj",љ:"lj",Њ:"Nj",њ:"nj",Тс:"Ts",тс:"ts",ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ś:"s",ź:"z",ż:"z",Ą:"A",Ć:"C",Ę:"E",Ł:"L",Ń:"N",Ś:"S",Ź:"Z",Ż:"Z",Є:"Ye",І:"I",Ї:"Yi",Ґ:"G",є:"ye",і:"i",ї:"yi",ґ:"g",ă:"a",Ă:"A",ș:"s",Ș:"S",ț:"t",Ț:"T",ţ:"t",Ţ:"T",а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"yo",ж:"zh",з:"z",и:"i",й:"i",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"kh",ц:"c",ч:"ch",ш:"sh",щ:"sh",ъ:"",ы:"y",ь:"",э:"e",ю:"yu",я:"ya",А:"A",Б:"B",В:"V",Г:"G",Д:"D",Е:"E",Ё:"Yo",Ж:"Zh",З:"Z",И:"I",Й:"I",К:"K",Л:"L",М:"M",Н:"N",О:"O",П:"P",Р:"R",С:"S",Т:"T",У:"U",Ф:"F",Х:"Kh",Ц:"C",Ч:"Ch",Ш:"Sh",Щ:"Sh",Ъ:"",Ы:"Y",Ь:"",Э:"E",Ю:"Yu",Я:"Ya",ђ:"dj",ј:"j",ћ:"c",џ:"dz",Ђ:"Dj",Ј:"j",Ћ:"C",Џ:"Dz",ľ:"l",ĺ:"l",ŕ:"r",Ľ:"L",Ĺ:"L",Ŕ:"R",ş:"s",Ş:"S",ı:"i",İ:"I",ğ:"g",Ğ:"G",ả:"a",Ả:"A",ẳ:"a",Ẳ:"A",ẩ:"a",Ẩ:"A",đ:"d",Đ:"D",ẹ:"e",Ẹ:"E",ẽ:"e",Ẽ:"E",ẻ:"e",Ẻ:"E",ế:"e",Ế:"E",ề:"e",Ề:"E",ệ:"e",Ệ:"E",ễ:"e",Ễ:"E",ể:"e",Ể:"E",ỏ:"o",ọ:"o",Ọ:"o",ố:"o",Ố:"O",ồ:"o",Ồ:"O",ổ:"o",Ổ:"O",ộ:"o",Ộ:"O",ỗ:"o",Ỗ:"O",ơ:"o",Ơ:"O",ớ:"o",Ớ:"O",ờ:"o",Ờ:"O",ợ:"o",Ợ:"O",ỡ:"o",Ỡ:"O",Ở:"o",ở:"o",ị:"i",Ị:"I",ĩ:"i",Ĩ:"I",ỉ:"i",Ỉ:"i",ủ:"u",Ủ:"U",ụ:"u",Ụ:"U",ũ:"u",Ũ:"U",ư:"u",Ư:"U",ứ:"u",Ứ:"U",ừ:"u",Ừ:"U",ự:"u",Ự:"U",ữ:"u",Ữ:"U",ử:"u",Ử:"ư",ỷ:"y",Ỷ:"y",ỳ:"y",Ỳ:"Y",ỵ:"y",Ỵ:"Y",ỹ:"y",Ỹ:"Y",ạ:"a",Ạ:"A",ấ:"a",Ấ:"A",ầ:"a",Ầ:"A",ậ:"a",Ậ:"A",ẫ:"a",Ẫ:"A",ắ:"a",Ắ:"A",ằ:"a",Ằ:"A",ặ:"a",Ặ:"A",ẵ:"a",Ẵ:"A","⓪":"0","①":"1","②":"2","③":"3","④":"4","⑤":"5","⑥":"6","⑦":"7","⑧":"8","⑨":"9","⑩":"10","⑪":"11","⑫":"12","⑬":"13","⑭":"14","⑮":"15","⑯":"16","⑰":"17","⑱":"18","⑲":"18","⑳":"18","⓵":"1","⓶":"2","⓷":"3","⓸":"4","⓹":"5","⓺":"6","⓻":"7","⓼":"8","⓽":"9","⓾":"10","⓿":"0","⓫":"11","⓬":"12","⓭":"13","⓮":"14","⓯":"15","⓰":"16","⓱":"17","⓲":"18","⓳":"19","⓴":"20","Ⓐ":"A","Ⓑ":"B","Ⓒ":"C","Ⓓ":"D","Ⓔ":"E","Ⓕ":"F","Ⓖ":"G","Ⓗ":"H","Ⓘ":"I","Ⓙ":"J","Ⓚ":"K","Ⓛ":"L","Ⓜ":"M","Ⓝ":"N","Ⓞ":"O","Ⓟ":"P","Ⓠ":"Q","Ⓡ":"R","Ⓢ":"S","Ⓣ":"T","Ⓤ":"U","Ⓥ":"V","Ⓦ":"W","Ⓧ":"X","Ⓨ":"Y","Ⓩ":"Z","ⓐ":"a","ⓑ":"b","ⓒ":"c","ⓓ":"d","ⓔ":"e","ⓕ":"f","ⓖ":"g","ⓗ":"h","ⓘ":"i","ⓙ":"j","ⓚ":"k","ⓛ":"l","ⓜ":"m","ⓝ":"n","ⓞ":"o","ⓟ":"p","ⓠ":"q","ⓡ":"r","ⓢ":"s","ⓣ":"t","ⓤ":"u","ⓦ":"v","ⓥ":"w","ⓧ":"x","ⓨ":"y","ⓩ":"z","“":'"',"”":'"',"‘":"'","’":"'","∂":"d",ƒ:"f","™":"(TM)","©":"(C)",œ:"oe",Œ:"OE","®":"(R)","†":"+","℠":"(SM)","…":"...","˚":"o",º:"o",ª:"a","•":"*","၊":",","။":".",$:"USD","€":"EUR","₢":"BRN","₣":"FRF","£":"GBP","₤":"ITL","₦":"NGN","₧":"ESP","₩":"KRW","₪":"ILS","₫":"VND","₭":"LAK","₮":"MNT","₯":"GRD","₱":"ARS","₲":"PYG","₳":"ARA","₴":"UAH","₵":"GHS","¢":"cent","¥":"CNY",元:"CNY",円:"YEN","﷼":"IRR","₠":"EWE","฿":"THB","₨":"INR","₹":"INR","₰":"PF","₺":"TRY","؋":"AFN","₼":"AZN",лв:"BGN","៛":"KHR","₡":"CRC","₸":"KZT",ден:"MKD",zł:"PLN","₽":"RUB","₾":"GEL"},r=["်","ް"],i={"ာ":"a","ါ":"a","ေ":"e","ဲ":"e","ိ":"i","ီ":"i","ို":"o","ု":"u","ူ":"u","ေါင်":"aung","ော":"aw","ော်":"aw","ေါ":"aw","ေါ်":"aw","်":"်","က်":"et","ိုက်":"aik","ောက်":"auk","င်":"in","ိုင်":"aing","ောင်":"aung","စ်":"it","ည်":"i","တ်":"at","ိတ်":"eik","ုတ်":"ok","ွတ်":"ut","ေတ်":"it","ဒ်":"d","ိုဒ်":"ok","ုဒ်":"ait","န်":"an","ာန်":"an","ိန်":"ein","ုန်":"on","ွန်":"un","ပ်":"at","ိပ်":"eik","ုပ်":"ok","ွပ်":"ut","န်ုပ်":"nub","မ်":"an","ိမ်":"ein","ုမ်":"on","ွမ်":"un","ယ်":"e","ိုလ်":"ol","ဉ်":"in","ံ":"an","ိံ":"ein","ုံ":"on","ައް":"ah","ަށް":"ah"},a={en:{},az:{ç:"c",ə:"e",ğ:"g",ı:"i",ö:"o",ş:"s",ü:"u",Ç:"C",Ə:"E",Ğ:"G",İ:"I",Ö:"O",Ş:"S",Ü:"U"},cs:{č:"c",ď:"d",ě:"e",ň:"n",ř:"r",š:"s",ť:"t",ů:"u",ž:"z",Č:"C",Ď:"D",Ě:"E",Ň:"N",Ř:"R",Š:"S",Ť:"T",Ů:"U",Ž:"Z"},fi:{ä:"a",Ä:"A",ö:"o",Ö:"O"},hu:{ä:"a",Ä:"A",ö:"o",Ö:"O",ü:"u",Ü:"U",ű:"u",Ű:"U"},lt:{ą:"a",č:"c",ę:"e",ė:"e",į:"i",š:"s",ų:"u",ū:"u",ž:"z",Ą:"A",Č:"C",Ę:"E",Ė:"E",Į:"I",Š:"S",Ų:"U",Ū:"U"},lv:{ā:"a",č:"c",ē:"e",ģ:"g",ī:"i",ķ:"k",ļ:"l",ņ:"n",š:"s",ū:"u",ž:"z",Ā:"A",Č:"C",Ē:"E",Ģ:"G",Ī:"i",Ķ:"k",Ļ:"L",Ņ:"N",Š:"S",Ū:"u",Ž:"Z"},pl:{ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ó:"o",ś:"s",ź:"z",ż:"z",Ą:"A",Ć:"C",Ę:"e",Ł:"L",Ń:"N",Ó:"O",Ś:"S",Ź:"Z",Ż:"Z"},sv:{ä:"a",Ä:"A",ö:"o",Ö:"O"},sk:{ä:"a",Ä:"A"},sr:{љ:"lj",њ:"nj",Љ:"Lj",Њ:"Nj",đ:"dj",Đ:"Dj"},tr:{Ü:"U",Ö:"O",ü:"u",ö:"o"}},o={ar:{"∆":"delta","∞":"la-nihaya","♥":"hob","&":"wa","|":"aw","<":"aqal-men",">":"akbar-men","∑":"majmou","¤":"omla"},az:{},ca:{"∆":"delta","∞":"infinit","♥":"amor","&":"i","|":"o","<":"menys que",">":"mes que","∑":"suma dels","¤":"moneda"},cs:{"∆":"delta","∞":"nekonecno","♥":"laska","&":"a","|":"nebo","<":"mensi nez",">":"vetsi nez","∑":"soucet","¤":"mena"},de:{"∆":"delta","∞":"unendlich","♥":"Liebe","&":"und","|":"oder","<":"kleiner als",">":"groesser als","∑":"Summe von","¤":"Waehrung"},dv:{"∆":"delta","∞":"kolunulaa","♥":"loabi","&":"aai","|":"noonee","<":"ah vure kuda",">":"ah vure bodu","∑":"jumula","¤":"faisaa"},en:{"∆":"delta","∞":"infinity","♥":"love","&":"and","|":"or","<":"less than",">":"greater than","∑":"sum","¤":"currency"},es:{"∆":"delta","∞":"infinito","♥":"amor","&":"y","|":"u","<":"menos que",">":"mas que","∑":"suma de los","¤":"moneda"},fa:{"∆":"delta","∞":"bi-nahayat","♥":"eshgh","&":"va","|":"ya","<":"kamtar-az",">":"bishtar-az","∑":"majmooe","¤":"vahed"},fi:{"∆":"delta","∞":"aarettomyys","♥":"rakkaus","&":"ja","|":"tai","<":"pienempi kuin",">":"suurempi kuin","∑":"summa","¤":"valuutta"},fr:{"∆":"delta","∞":"infiniment","♥":"Amour","&":"et","|":"ou","<":"moins que",">":"superieure a","∑":"somme des","¤":"monnaie"},ge:{"∆":"delta","∞":"usasruloba","♥":"siqvaruli","&":"da","|":"an","<":"naklebi",">":"meti","∑":"jami","¤":"valuta"},gr:{},hu:{"∆":"delta","∞":"vegtelen","♥":"szerelem","&":"es","|":"vagy","<":"kisebb mint",">":"nagyobb mint","∑":"szumma","¤":"penznem"},it:{"∆":"delta","∞":"infinito","♥":"amore","&":"e","|":"o","<":"minore di",">":"maggiore di","∑":"somma","¤":"moneta"},lt:{"∆":"delta","∞":"begalybe","♥":"meile","&":"ir","|":"ar","<":"maziau nei",">":"daugiau nei","∑":"suma","¤":"valiuta"},lv:{"∆":"delta","∞":"bezgaliba","♥":"milestiba","&":"un","|":"vai","<":"mazak neka",">":"lielaks neka","∑":"summa","¤":"valuta"},my:{"∆":"kwahkhyaet","∞":"asaonasme","♥":"akhyait","&":"nhin","|":"tho","<":"ngethaw",">":"kyithaw","∑":"paungld","¤":"ngwekye"},mk:{},nl:{"∆":"delta","∞":"oneindig","♥":"liefde","&":"en","|":"of","<":"kleiner dan",">":"groter dan","∑":"som","¤":"valuta"},pl:{"∆":"delta","∞":"nieskonczonosc","♥":"milosc","&":"i","|":"lub","<":"mniejsze niz",">":"wieksze niz","∑":"suma","¤":"waluta"},pt:{"∆":"delta","∞":"infinito","♥":"amor","&":"e","|":"ou","<":"menor que",">":"maior que","∑":"soma","¤":"moeda"},ro:{"∆":"delta","∞":"infinit","♥":"dragoste","&":"si","|":"sau","<":"mai mic ca",">":"mai mare ca","∑":"suma","¤":"valuta"},ru:{"∆":"delta","∞":"beskonechno","♥":"lubov","&":"i","|":"ili","<":"menshe",">":"bolshe","∑":"summa","¤":"valjuta"},sk:{"∆":"delta","∞":"nekonecno","♥":"laska","&":"a","|":"alebo","<":"menej ako",">":"viac ako","∑":"sucet","¤":"mena"},sr:{},tr:{"∆":"delta","∞":"sonsuzluk","♥":"ask","&":"ve","|":"veya","<":"kucuktur",">":"buyuktur","∑":"toplam","¤":"para birimi"},uk:{"∆":"delta","∞":"bezkinechnist","♥":"lubov","&":"i","|":"abo","<":"menshe",">":"bilshe","∑":"suma","¤":"valjuta"},vn:{"∆":"delta","∞":"vo cuc","♥":"yeu","&":"va","|":"hoac","<":"nho hon",">":"lon hon","∑":"tong","¤":"tien te"}},l=[";","?",":","@","&","=","+","$",",","/"].join(""),c=[";","?",":","@","&","=","+","$",","].join(""),u=[".","!","~","*","'","(",")"].join(""),h=function(b,y){var E="-",v="",x="",L=!0,j={},C,Q,V,D,H,F,ee,oe,fe,K,$,X,ae,Ve,qe="";if(typeof b!="string")return"";if(typeof y=="string"&&(E=y),ee=o.en,oe=a.en,typeof y=="object"){C=y.maintainCase||!1,j=y.custom&&typeof y.custom=="object"?y.custom:j,V=+y.truncate>1&&y.truncate||!1,D=y.uric||!1,H=y.uricNoSlash||!1,F=y.mark||!1,L=!(y.symbols===!1||y.lang===!1),E=y.separator||E,D&&(qe+=l),H&&(qe+=c),F&&(qe+=u),ee=y.lang&&o[y.lang]&&L?o[y.lang]:L?o.en:{},oe=y.lang&&a[y.lang]?a[y.lang]:y.lang===!1||y.lang===!0?{}:a.en,y.titleCase&&typeof y.titleCase.length=="number"&&Array.prototype.toString.call(y.titleCase)?(y.titleCase.forEach(function(ge){j[ge+""]=ge+""}),Q=!0):Q=!!y.titleCase,y.custom&&typeof y.custom.length=="number"&&Array.prototype.toString.call(y.custom)&&y.custom.forEach(function(ge){j[ge+""]=ge+""}),Object.keys(j).forEach(function(ge){var He;ge.length>1?He=new RegExp("\\b"+m(ge)+"\\b","gi"):He=new RegExp(m(ge),"gi"),b=b.replace(He,j[ge])});for($ in j)qe+=$}for(qe+=E,qe=m(qe),b=b.replace(/(^\s+|\s+$)/g,""),ae=!1,Ve=!1,K=0,X=b.length;K<X;K++)$=b[K],g($,j)?ae=!1:oe[$]?($=ae&&oe[$].match(/[A-Za-z0-9]/)?" "+oe[$]:oe[$],ae=!1):$ in s?(K+1<X&&r.indexOf(b[K+1])>=0?(x+=$,$=""):Ve===!0?($=i[x]+s[$],x=""):$=ae&&s[$].match(/[A-Za-z0-9]/)?" "+s[$]:s[$],ae=!1,Ve=!1):$ in i?(x+=$,$="",K===X-1&&($=i[x]),Ve=!0):ee[$]&&!(D&&l.indexOf($)!==-1)&&!(H&&c.indexOf($)!==-1)?($=ae||v.substr(-1).match(/[A-Za-z0-9]/)?E+ee[$]:ee[$],$+=b[K+1]!==void 0&&b[K+1].match(/[A-Za-z0-9]/)?E:"",ae=!0):(Ve===!0?($=i[x]+$,x="",Ve=!1):ae&&(/[A-Za-z0-9]/.test($)||v.substr(-1).match(/A-Za-z0-9]/))&&($=" "+$),ae=!1),v+=$.replace(new RegExp("[^\\w\\s"+qe+"_-]","g"),E);return Q&&(v=v.replace(/(\w)(\S*)/g,function(ge,He,vt){var at=He.toUpperCase()+(vt!==null?vt:"");return Object.keys(j).indexOf(at.toLowerCase())<0?at:at.toLowerCase()})),v=v.replace(/\s+/g,E).replace(new RegExp("\\"+E+"+","g"),E).replace(new RegExp("(^\\"+E+"+|\\"+E+"+$)","g"),""),V&&v.length>V&&(fe=v.charAt(V)===E,v=v.slice(0,V),fe||(v=v.slice(0,v.lastIndexOf(E)))),!C&&!Q&&(v=v.toLowerCase()),v},d=function(b){return function(E){return h(E,b)}},m=function(b){return b.replace(/[-\\^$*+?.()|[\]{}\/]/g,"\\$&")},g=function(w,b){for(var y in b)if(b[y]===w)return!0};if(typeof t<"u"&&t.exports)t.exports=h,t.exports.createSlug=d;else if(typeof define<"u"&&define.amd)define([],function(){return h});else try{if(n.getSlug||n.createSlug)throw"speakingurl: globals exists /(getSlug|createSlug)/";n.getSlug=h,n.createSlug=d}catch{}}(e)}}),c6=bc({"../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e,t){I(),t.exports=p6()}});I();I();I();I();I();I();I();function u6(e){return!!(e&&e.__v_isReadonly)}function kc(e){return u6(e)?kc(e.__v_raw):!!(e&&e.__v_isReactive)}function ca(e){return!!(e&&e.__v_isRef===!0)}function Vs(e){const t=e&&e.__v_raw;return t?Vs(t):e}var h6=Symbol.for("v-fgt");I();function d6(e){return e.name||e._componentTag||e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__||e.__name}function f6(e){const t=e.__file;if(t)return G3(Q3(t,".vue"))}function Lp(e,t){return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__=t,t}function Mo(e){if(e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;if(e.root)return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__}async function m6(e){const{app:t,uid:n,instance:s}=e;try{if(s.__VUE_DEVTOOLS_NEXT_UID__)return s.__VUE_DEVTOOLS_NEXT_UID__;const r=await Mo(t);if(!r)return null;const i=r.rootInstance===s;return`${r.id}:${i?"root":n}`}catch{}}function Ec(e){var t;return((t=e.subTree)==null?void 0:t.type)===h6}function Ci(e){var t,n,s;const r=d6((e==null?void 0:e.type)||{});if(r)return r;if((e==null?void 0:e.root)===e)return"Root";for(const a in(n=(t=e.parent)==null?void 0:t.type)==null?void 0:n.components)if(e.parent.type.components[a]===(e==null?void 0:e.type))return Lp(e,a);for(const a in(s=e.appContext)==null?void 0:s.components)if(e.appContext.components[a]===(e==null?void 0:e.type))return Lp(e,a);const i=f6((e==null?void 0:e.type)||{});return i||"Anonymous Component"}function Va(e,t){return t=t||`${e.id}:root`,e.instanceMap.get(t)||e.instanceMap.get(":root")}var g6=class{constructor(){this.refEditor=new v6}set(e,t,n,s){const r=Array.isArray(t)?t:t.split(".");for(;r.length>1;){const o=r.shift();e instanceof Map&&(e=e.get(o)),e instanceof Set?e=Array.from(e.values())[o]:e=e[o],this.refEditor.isRef(e)&&(e=this.refEditor.get(e))}const i=r[0],a=this.refEditor.get(e)[i];s?s(e,i,n):this.refEditor.isRef(a)?this.refEditor.set(a,n):e[i]=n}get(e,t){const n=Array.isArray(t)?t:t.split(".");for(let s=0;s<n.length;s++)if(e instanceof Map?e=e.get(n[s]):e=e[n[s]],this.refEditor.isRef(e)&&(e=this.refEditor.get(e)),!e)return;return e}has(e,t,n=!1){if(typeof e>"u")return!1;const s=Array.isArray(t)?t.slice():t.split("."),r=n?2:1;for(;e&&s.length>r;){const i=s.shift();e=e[i],this.refEditor.isRef(e)&&(e=this.refEditor.get(e))}return e!=null&&Object.prototype.hasOwnProperty.call(e,s[0])}createDefaultSetCallback(e){return(t,n,s)=>{if((e.remove||e.newKey)&&(Array.isArray(t)?t.splice(n,1):Vs(t)instanceof Map?t.delete(n):Vs(t)instanceof Set?t.delete(Array.from(t.values())[n]):Reflect.deleteProperty(t,n)),!e.remove){const r=t[e.newKey||n];this.refEditor.isRef(r)?this.refEditor.set(r,s):Vs(t)instanceof Map?t.set(e.newKey||n,s):Vs(t)instanceof Set?t.add(s):t[e.newKey||n]=s}}}},v6=class{set(e,t){if(ca(e))e.value=t;else{if(e instanceof Set&&Array.isArray(t)){e.clear(),t.forEach(r=>e.add(r));return}const n=Object.keys(t);if(e instanceof Map){const r=new Set(e.keys());n.forEach(i=>{e.set(i,Reflect.get(t,i)),r.delete(i)}),r.forEach(i=>e.delete(i));return}const s=new Set(Object.keys(e));n.forEach(r=>{Reflect.set(e,r,Reflect.get(t,r)),s.delete(r)}),s.forEach(r=>Reflect.deleteProperty(e,r))}}get(e){return ca(e)?e.value:e}isRef(e){return ca(e)||kc(e)}};I();function No(e){return Ec(e)?_6(e.subTree):e.subTree?[e.subTree.el]:[]}function _6(e){if(!e.children)return[];const t=[];return e.children.forEach(n=>{n.component?t.push(...No(n.component)):n!=null&&n.el&&t.push(n.el)}),t}I();I();function w6(){const e={top:0,bottom:0,left:0,right:0,get width(){return e.right-e.left},get height(){return e.bottom-e.top}};return e}var Qr;function y6(e){return Qr||(Qr=document.createRange()),Qr.selectNode(e),Qr.getBoundingClientRect()}function b6(e){const t=w6();if(!e.children)return t;for(let n=0,s=e.children.length;n<s;n++){const r=e.children[n];let i;if(r.component)i=Nn(r.component);else if(r.el){const a=r.el;a.nodeType===1||a.getBoundingClientRect?i=a.getBoundingClientRect():a.nodeType===3&&a.data.trim()&&(i=y6(a))}i&&k6(t,i)}return t}function k6(e,t){return(!e.top||t.top<e.top)&&(e.top=t.top),(!e.bottom||t.bottom>e.bottom)&&(e.bottom=t.bottom),(!e.left||t.left<e.left)&&(e.left=t.left),(!e.right||t.right>e.right)&&(e.right=t.right),e}var Fp={top:0,left:0,right:0,bottom:0,width:0,height:0};function Nn(e){const t=e.subTree.el;return typeof window>"u"?Fp:Ec(e)?b6(e.subTree):(t==null?void 0:t.nodeType)===1?t==null?void 0:t.getBoundingClientRect():e.subTree.component?Nn(e.subTree.component):Fp}var Ac="__vue-devtools-component-inspector__",xc="__vue-devtools-component-inspector__card__",Pc="__vue-devtools-component-inspector__name__",Tc="__vue-devtools-component-inspector__indicator__",Bc={display:"block",zIndex:2147483640,position:"fixed",backgroundColor:"#42b88325",border:"1px solid #42b88350",borderRadius:"5px",transition:"all 0.1s ease-in",pointerEvents:"none"},E6={fontFamily:"Arial, Helvetica, sans-serif",padding:"5px 8px",borderRadius:"4px",textAlign:"left",position:"absolute",left:0,color:"#e9e9e9",fontSize:"14px",fontWeight:600,lineHeight:"24px",backgroundColor:"#42b883",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},A6={display:"inline-block",fontWeight:400,fontStyle:"normal",fontSize:"12px",opacity:.7};function Ps(){return document.getElementById(Ac)}function x6(){return document.getElementById(xc)}function P6(){return document.getElementById(Tc)}function T6(){return document.getElementById(Pc)}function Ho(e){return{left:`${Math.round(e.left*100)/100}px`,top:`${Math.round(e.top*100)/100}px`,width:`${Math.round(e.width*100)/100}px`,height:`${Math.round(e.height*100)/100}px`}}function zo(e){var t;const n=document.createElement("div");n.id=(t=e.elementId)!=null?t:Ac,Object.assign(n.style,{...Bc,...Ho(e.bounds),...e.style});const s=document.createElement("span");s.id=xc,Object.assign(s.style,{...E6,top:e.bounds.top<35?0:"-35px"});const r=document.createElement("span");r.id=Pc,r.innerHTML=`&lt;${e.name}&gt;&nbsp;&nbsp;`;const i=document.createElement("i");return i.id=Tc,i.innerHTML=`${Math.round(e.bounds.width*100)/100} x ${Math.round(e.bounds.height*100)/100}`,Object.assign(i.style,A6),s.appendChild(r),s.appendChild(i),n.appendChild(s),document.body.appendChild(n),n}function Uo(e){const t=Ps(),n=x6(),s=T6(),r=P6();t&&(Object.assign(t.style,{...Bc,...Ho(e.bounds)}),Object.assign(n.style,{top:e.bounds.top<35?0:"-35px"}),s.innerHTML=`&lt;${e.name}&gt;&nbsp;&nbsp;`,r.innerHTML=`${Math.round(e.bounds.width*100)/100} x ${Math.round(e.bounds.height*100)/100}`)}function B6(e){const t=Nn(e),n=Ci(e);Ps()?Uo({bounds:t,name:n}):zo({bounds:t,name:n})}function Cc(){const e=Ps();e&&(e.style.display="none")}var qa=null;function ja(e){const t=e.target;if(t){const n=t.__vueParentComponent;if(n&&(qa=n,n.vnode.el)){const r=Nn(n),i=Ci(n);Ps()?Uo({bounds:r,name:i}):zo({bounds:r,name:i})}}}function C6(e,t){var n;if(e.preventDefault(),e.stopPropagation(),qa){const s=(n=ot.value)==null?void 0:n.app;m6({app:s,uid:s.uid,instance:qa}).then(r=>{t(r)})}}var hi=null;function D6(){Cc(),window.removeEventListener("mouseover",ja),window.removeEventListener("click",hi,!0),hi=null}function O6(){return window.addEventListener("mouseover",ja),new Promise(e=>{function t(n){n.preventDefault(),n.stopPropagation(),C6(n,s=>{window.removeEventListener("click",t,!0),hi=null,window.removeEventListener("mouseover",ja);const r=Ps();r&&(r.style.display="none"),e(JSON.stringify({id:s}))})}hi=t,window.addEventListener("click",t,!0)})}function I6(e){const t=Va(ot.value,e.id);if(t){const[n]=No(t);if(typeof n.scrollIntoView=="function")n.scrollIntoView({behavior:"smooth"});else{const s=Nn(t),r=document.createElement("div"),i={...Ho(s),position:"absolute"};Object.assign(r.style,i),document.body.appendChild(r),r.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{document.body.removeChild(r)},2e3)}setTimeout(()=>{const s=Nn(t);if(s.width||s.height){const r=Ci(t),i=Ps();i?Uo({...e,name:r,bounds:s}):zo({...e,name:r,bounds:s}),setTimeout(()=>{i&&(i.style.display="none")},1500)}},1200)}}I();var Vp,qp;(qp=(Vp=Y).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__)!=null||(Vp.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__=!0);function R6(e){let t=0;const n=setInterval(()=>{Y.__VUE_INSPECTOR__&&(clearInterval(n),t+=30,e()),t>=5e3&&clearInterval(n)},30)}function S6(){const e=Y.__VUE_INSPECTOR__,t=e.openInEditor;e.openInEditor=async(...n)=>{e.disable(),t(...n)}}function L6(){return new Promise(e=>{function t(){S6(),e(Y.__VUE_INSPECTOR__)}Y.__VUE_INSPECTOR__?t():R6(()=>{t()})})}I();I();I();I();I();var jp,$p;($p=(jp=Y).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS)!=null||(jp.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS=[]);var F6=new Proxy(Y.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS,{get(e,t,n){return Reflect.get(e,t,n)}});function V6(e,t){F6.push({...e,descriptorId:t.id,appRecord:Mo(t.app)})}var Mp,Np;(Np=(Mp=Y).__VUE_DEVTOOLS_KIT_INSPECTOR__)!=null||(Mp.__VUE_DEVTOOLS_KIT_INSPECTOR__=[]);var Ko=new Proxy(Y.__VUE_DEVTOOLS_KIT_INSPECTOR__,{get(e,t,n){return Reflect.get(e,t,n)}}),Dc=Bi(()=>{Ts.hooks.callHook("sendInspectorToClient",Oc())});function q6(e,t){Ko.push({options:e,descriptor:t,treeFilter:"",selectedNodeId:"",appRecord:Mo(t.app)}),Dc()}function Oc(){return Ko.filter(e=>e.descriptor.app===ot.value.app).filter(e=>e.descriptor.id!=="components").map(e=>{var t;const n=e.descriptor,s=e.options;return{id:s.id,label:s.label,logo:n.logo,icon:`custom-ic-baseline-${(t=s==null?void 0:s.icon)==null?void 0:t.replace(/_/g,"-")}`,packageName:n.packageName,homepage:n.homepage,pluginId:n.id}})}function ei(e,t){return Ko.find(n=>n.options.id===e&&(t?n.descriptor.app===t:!0))}function j6(){const e=wc();return e.hook("addInspector",({inspector:t,plugin:n})=>{q6(t,n.descriptor)}),e.hook("sendInspectorTree",async({inspectorId:t,plugin:n})=>{var s;if(!t||!((s=n==null?void 0:n.descriptor)!=null&&s.app))return;const r=ei(t,n.descriptor.app),i={app:n.descriptor.app,inspectorId:t,filter:(r==null?void 0:r.treeFilter)||"",rootNodes:[]};await new Promise(a=>{e.callHookWith(async o=>{await Promise.all(o.map(l=>l(i))),a()},"getInspectorTree")}),e.callHookWith(async a=>{await Promise.all(a.map(o=>o({inspectorId:t,rootNodes:i.rootNodes})))},"sendInspectorTreeToClient")}),e.hook("sendInspectorState",async({inspectorId:t,plugin:n})=>{var s;if(!t||!((s=n==null?void 0:n.descriptor)!=null&&s.app))return;const r=ei(t,n.descriptor.app),i={app:n.descriptor.app,inspectorId:t,nodeId:(r==null?void 0:r.selectedNodeId)||"",state:null},a={currentTab:`custom-inspector:${t}`};i.nodeId&&await new Promise(o=>{e.callHookWith(async l=>{await Promise.all(l.map(c=>c(i,a))),o()},"getInspectorState")}),e.callHookWith(async o=>{await Promise.all(o.map(l=>l({inspectorId:t,nodeId:i.nodeId,state:i.state})))},"sendInspectorStateToClient")}),e.hook("customInspectorSelectNode",({inspectorId:t,nodeId:n,plugin:s})=>{const r=ei(t,s.descriptor.app);r&&(r.selectedNodeId=n)}),e.hook("timelineLayerAdded",({options:t,plugin:n})=>{V6(t,n.descriptor)}),e.hook("timelineEventAdded",({options:t,plugin:n})=>{e.callHookWith(async s=>{await Promise.all(s.map(r=>r(t)))},"sendTimelineEventToClient")}),e.hook("getComponentInstances",async({app:t})=>{const n=t.__VUE_DEVTOOLS_NEXT_APP_RECORD__;if(!n)return null;const s=n.id.toString();return[...n.instanceMap].filter(([i])=>i.split(":")[0]===s).map(([,i])=>i)}),e.hook("getComponentBounds",async({instance:t})=>Nn(t)),e.hook("getComponentName",({instance:t})=>Ci(t)),e.hook("componentHighlight",({uid:t})=>{const n=ot.value.instanceMap.get(t);n&&B6(n)}),e.hook("componentUnhighlight",()=>{Cc()}),e}var Hp,zp;(zp=(Hp=Y).__VUE_DEVTOOLS_KIT_APP_RECORDS__)!=null||(Hp.__VUE_DEVTOOLS_KIT_APP_RECORDS__=[]);var Up,Kp;(Kp=(Up=Y).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__)!=null||(Up.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__={});var Gp,Qp;(Qp=(Gp=Y).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__)!=null||(Gp.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__="");var Wp,Yp;(Yp=(Wp=Y).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__)!=null||(Wp.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__=[]);var Xp,Jp;(Jp=(Xp=Y).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__)!=null||(Xp.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__=[]);var Sn="__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";function $6(){return{connected:!1,clientConnected:!1,vitePluginDetected:!0,appRecords:[],activeAppRecordId:"",tabs:[],commands:[],highPerfModeEnabled:!0,devtoolsClientDetected:{}}}var Zp,e0;(e0=(Zp=Y)[Sn])!=null||(Zp[Sn]=$6());var M6=Bi(e=>{Ts.hooks.callHook("devtoolsStateUpdated",{state:e})});Bi((e,t)=>{Ts.hooks.callHook("devtoolsConnectedUpdated",{state:e,oldState:t})});var Di=new Proxy(Y.__VUE_DEVTOOLS_KIT_APP_RECORDS__,{get(e,t,n){return t==="value"?Y.__VUE_DEVTOOLS_KIT_APP_RECORDS__:Y.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t]}}),ot=new Proxy(Y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__,{get(e,t,n){return t==="value"?Y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__:t==="id"?Y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__:Y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t]}});function Ic(){M6({...Y[Sn],appRecords:Di.value,activeAppRecordId:ot.id,tabs:Y.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,commands:Y.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__})}function N6(e){Y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__=e,Ic()}function H6(e){Y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__=e,Ic()}var qn=new Proxy(Y[Sn],{get(e,t){return t==="appRecords"?Di:t==="activeAppRecordId"?ot.id:t==="tabs"?Y.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__:t==="commands"?Y.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__:Y[Sn][t]},deleteProperty(e,t){return delete e[t],!0},set(e,t,n){return{...Y[Sn]},e[t]=n,Y[Sn][t]=n,!0}});function z6(e={}){var t,n,s;const{file:r,host:i,baseUrl:a=window.location.origin,line:o=0,column:l=0}=e;if(r){if(i==="chrome-extension"){const c=r.replace(/\\/g,"\\\\"),u=(n=(t=window.VUE_DEVTOOLS_CONFIG)==null?void 0:t.openInEditorHost)!=null?n:"/";fetch(`${u}__open-in-editor?file=${encodeURI(r)}`).then(h=>{if(!h.ok){const d=`Opening component ${c} failed`;console.log(`%c${d}`,"color:red")}})}else if(qn.vitePluginDetected){const c=(s=Y.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__)!=null?s:a;Y.__VUE_INSPECTOR__.openInEditor(c,r,o,l)}}}I();I();I();I();I();var t0,n0;(n0=(t0=Y).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__)!=null||(t0.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__=[]);var Go=new Proxy(Y.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__,{get(e,t,n){return Reflect.get(e,t,n)}});function $a(e){const t={};return Object.keys(e).forEach(n=>{t[n]=e[n].defaultValue}),t}function Qo(e){return`__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`}function U6(e){var t,n,s;const r=(n=(t=Go.find(i=>{var a;return i[0].id===e&&!!((a=i[0])!=null&&a.settings)}))==null?void 0:t[0])!=null?n:null;return(s=r==null?void 0:r.settings)!=null?s:null}function Rc(e,t){var n,s,r;const i=Qo(e);if(i){const a=localStorage.getItem(i);if(a)return JSON.parse(a)}if(e){const a=(s=(n=Go.find(o=>o[0].id===e))==null?void 0:n[0])!=null?s:null;return $a((r=a==null?void 0:a.settings)!=null?r:{})}return $a(t)}function K6(e,t){const n=Qo(e);localStorage.getItem(n)||localStorage.setItem(n,JSON.stringify($a(t)))}function G6(e,t,n){const s=Qo(e),r=localStorage.getItem(s),i=JSON.parse(r||"{}"),a={...i,[t]:n};localStorage.setItem(s,JSON.stringify(a)),Ts.hooks.callHookWith(o=>{o.forEach(l=>l({pluginId:e,key:t,oldValue:i[t],newValue:n,settings:a}))},"setPluginSettings")}I();I();I();I();I();I();I();I();I();I();I();var s0,r0,jt=(r0=(s0=Y).__VUE_DEVTOOLS_HOOK)!=null?r0:s0.__VUE_DEVTOOLS_HOOK=wc(),Q6={vueAppInit(e){jt.hook("app:init",e)},vueAppUnmount(e){jt.hook("app:unmount",e)},vueAppConnected(e){jt.hook("app:connected",e)},componentAdded(e){return jt.hook("component:added",e)},componentUpdated(e){return jt.hook("component:updated",e)},componentRemoved(e){return jt.hook("component:removed",e)},setupDevtoolsPlugin(e){jt.hook("devtools-plugin:setup",e)}},Sc={on:Q6,setupDevToolsPlugin(e,t){return jt.callHook("devtools-plugin:setup",e,t)}},W6=class{constructor({plugin:e,ctx:t}){this.hooks=t.hooks,this.plugin=e}get on(){return{visitComponentTree:e=>{this.hooks.hook("visitComponentTree",e)},inspectComponent:e=>{this.hooks.hook("inspectComponent",e)},editComponentState:e=>{this.hooks.hook("editComponentState",e)},getInspectorTree:e=>{this.hooks.hook("getInspectorTree",e)},getInspectorState:e=>{this.hooks.hook("getInspectorState",e)},editInspectorState:e=>{this.hooks.hook("editInspectorState",e)},inspectTimelineEvent:e=>{this.hooks.hook("inspectTimelineEvent",e)},timelineCleared:e=>{this.hooks.hook("timelineCleared",e)},setPluginSettings:e=>{this.hooks.hook("setPluginSettings",e)}}}notifyComponentUpdate(e){var t;const n=Oc().find(s=>s.packageName===this.plugin.descriptor.packageName);if(n!=null&&n.id){if(e){const s=[e.appContext.app,e.uid,(t=e.parent)==null?void 0:t.uid,e];jt.callHook("component:updated",...s)}else jt.callHook("component:updated");this.hooks.callHook("sendInspectorState",{inspectorId:n.id,plugin:this.plugin})}}addInspector(e){this.hooks.callHook("addInspector",{inspector:e,plugin:this.plugin}),this.plugin.descriptor.settings&&K6(e.id,this.plugin.descriptor.settings)}sendInspectorTree(e){this.hooks.callHook("sendInspectorTree",{inspectorId:e,plugin:this.plugin})}sendInspectorState(e){this.hooks.callHook("sendInspectorState",{inspectorId:e,plugin:this.plugin})}selectInspectorNode(e,t){this.hooks.callHook("customInspectorSelectNode",{inspectorId:e,nodeId:t,plugin:this.plugin})}now(){return Date.now()}addTimelineLayer(e){this.hooks.callHook("timelineLayerAdded",{options:e,plugin:this.plugin})}addTimelineEvent(e){this.hooks.callHook("timelineEventAdded",{options:e,plugin:this.plugin})}getSettings(e){return Rc(e??this.plugin.descriptor.id,this.plugin.descriptor.settings)}getComponentInstances(e){return this.hooks.callHook("getComponentInstances",{app:e})}getComponentBounds(e){return this.hooks.callHook("getComponentBounds",{instance:e})}getComponentName(e){return this.hooks.callHook("getComponentName",{instance:e})}highlightElement(e){const t=e.__VUE_DEVTOOLS_NEXT_UID__;return this.hooks.callHook("componentHighlight",{uid:t})}unhighlightElement(){return this.hooks.callHook("componentUnhighlight")}},Y6=W6;I();I();I();I();var X6="__vue_devtool_undefined__",J6="__vue_devtool_infinity__",Z6="__vue_devtool_negative_infinity__",eg="__vue_devtool_nan__";I();I();var tg={[X6]:"undefined",[eg]:"NaN",[J6]:"Infinity",[Z6]:"-Infinity"};Object.entries(tg).reduce((e,[t,n])=>(e[n]=t,e),{});I();I();I();var i0,a0;(a0=(i0=Y).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__)!=null||(i0.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__=new Set);function ng(e,t){return Sc.setupDevToolsPlugin(e,t)}function sg(e,t){const[n,s]=e;if(n.app!==t)return;const r=new Y6({plugin:{setupFn:s,descriptor:n},ctx:Ts});n.packageName==="vuex"&&r.on.editInspectorState(i=>{r.sendInspectorState(i.inspectorId)}),s(r)}function rg(e){Y.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e)||(Y.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e),Go.forEach(t=>{sg(t,e)}))}I();I();var ir="__VUE_DEVTOOLS_ROUTER__",gs="__VUE_DEVTOOLS_ROUTER_INFO__",o0,l0;(l0=(o0=Y)[gs])!=null||(o0[gs]={currentRoute:null,routes:[]});var p0,c0;(c0=(p0=Y)[ir])!=null||(p0[ir]={});new Proxy(Y[gs],{get(e,t){return Y[gs][t]}});new Proxy(Y[ir],{get(e,t){if(t==="value")return Y[ir]}});function ig(e){const t=new Map;return((e==null?void 0:e.getRoutes())||[]).filter(n=>!t.has(n.path)&&t.set(n.path,1))}function Wo(e){return e.map(t=>{let{path:n,name:s,children:r,meta:i}=t;return r!=null&&r.length&&(r=Wo(r)),{path:n,name:s,children:r,meta:i}})}function ag(e){if(e){const{fullPath:t,hash:n,href:s,path:r,name:i,matched:a,params:o,query:l}=e;return{fullPath:t,hash:n,href:s,path:r,name:i,params:o,query:l,matched:Wo(a)}}return e}function og(e,t){function n(){var s;const r=(s=e.app)==null?void 0:s.config.globalProperties.$router,i=ag(r==null?void 0:r.currentRoute.value),a=Wo(ig(r)),o=console.warn;console.warn=()=>{},Y[gs]={currentRoute:i?Sp(i):{},routes:Sp(a)},Y[ir]=r,console.warn=o}n(),Sc.on.componentUpdated(Bi(()=>{var s;((s=t.value)==null?void 0:s.app)===e.app&&(n(),Ts.hooks.callHook("routerInfoUpdated",{state:Y[gs]}))},200))}function lg(e){return{async getInspectorTree(t){const n={...t,app:ot.value.app,rootNodes:[]};return await new Promise(s=>{e.callHookWith(async r=>{await Promise.all(r.map(i=>i(n))),s()},"getInspectorTree")}),n.rootNodes},async getInspectorState(t){const n={...t,app:ot.value.app,state:null},s={currentTab:`custom-inspector:${t.inspectorId}`};return await new Promise(r=>{e.callHookWith(async i=>{await Promise.all(i.map(a=>a(n,s))),r()},"getInspectorState")}),n.state},editInspectorState(t){const n=new g6,s={...t,app:ot.value.app,set:(r,i=t.path,a=t.state.value,o)=>{n.set(r,i,a,o||n.createDefaultSetCallback(t.state))}};e.callHookWith(r=>{r.forEach(i=>i(s))},"editInspectorState")},sendInspectorState(t){const n=ei(t);e.callHook("sendInspectorState",{inspectorId:t,plugin:{descriptor:n.descriptor,setupFn:()=>({})}})},inspectComponentInspector(){return O6()},cancelInspectComponentInspector(){return D6()},getComponentRenderCode(t){const n=Va(ot.value,t);if(n)return(n==null?void 0:n.type)instanceof Function?n.type.toString():n.render.toString()},scrollToComponent(t){return I6({id:t})},openInEditor:z6,getVueInspector:L6,toggleApp(t){const n=Di.value.find(s=>s.id===t);n&&(H6(t),N6(n),og(n,ot),Dc(),rg(n.app))},inspectDOM(t){const n=Va(ot.value,t);if(n){const[s]=No(n);s&&(Y.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__=s)}},updatePluginSettings(t,n,s){G6(t,n,s)},getPluginSettings(t){return{options:U6(t),values:Rc(t)}}}}I();var u0,h0;(h0=(u0=Y).__VUE_DEVTOOLS_ENV__)!=null||(u0.__VUE_DEVTOOLS_ENV__={vitePluginDetected:!1});var d0=j6(),f0,m0;(m0=(f0=Y).__VUE_DEVTOOLS_KIT_CONTEXT__)!=null||(f0.__VUE_DEVTOOLS_KIT_CONTEXT__={hooks:d0,get state(){return{...qn,activeAppRecordId:ot.id,activeAppRecord:ot.value,appRecords:Di.value}},api:lg(d0)});var Ts=Y.__VUE_DEVTOOLS_KIT_CONTEXT__;I();l6(c6());var g0,v0;(v0=(g0=Y).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__)!=null||(g0.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__={id:0,appIds:new Set});I();function pg(e){qn.highPerfModeEnabled=e??!qn.highPerfModeEnabled}I();I();I();function cg(e){qn.devtoolsClientDetected={...qn.devtoolsClientDetected,...e};const t=Object.values(qn.devtoolsClientDetected).some(Boolean);pg(!t)}var _0,w0;(w0=(_0=Y).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__)!=null||(_0.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__=cg);I();I();I();I();I();I();I();var ug=class{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(e,t){this.keyToValue.set(e,t),this.valueToKey.set(t,e)}getByKey(e){return this.keyToValue.get(e)}getByValue(e){return this.valueToKey.get(e)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}},Lc=class{constructor(e){this.generateIdentifier=e,this.kv=new ug}register(e,t){this.kv.getByValue(e)||(t||(t=this.generateIdentifier(e)),this.kv.set(t,e))}clear(){this.kv.clear()}getIdentifier(e){return this.kv.getByValue(e)}getValue(e){return this.kv.getByKey(e)}},hg=class extends Lc{constructor(){super(e=>e.name),this.classToAllowedProps=new Map}register(e,t){typeof t=="object"?(t.allowProps&&this.classToAllowedProps.set(e,t.allowProps),super.register(e,t.identifier)):super.register(e,t)}getAllowedProps(e){return this.classToAllowedProps.get(e)}};I();I();function dg(e){if("values"in Object)return Object.values(e);const t=[];for(const n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t}function fg(e,t){const n=dg(e);if("find"in n)return n.find(t);const s=n;for(let r=0;r<s.length;r++){const i=s[r];if(t(i))return i}}function vs(e,t){Object.entries(e).forEach(([n,s])=>t(s,n))}function ti(e,t){return e.indexOf(t)!==-1}function y0(e,t){for(let n=0;n<e.length;n++){const s=e[n];if(t(s))return s}}var mg=class{constructor(){this.transfomers={}}register(e){this.transfomers[e.name]=e}findApplicable(e){return fg(this.transfomers,t=>t.isApplicable(e))}findByName(e){return this.transfomers[e]}};I();I();var gg=e=>Object.prototype.toString.call(e).slice(8,-1),Fc=e=>typeof e>"u",vg=e=>e===null,ar=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Ma=e=>ar(e)&&Object.keys(e).length===0,kn=e=>Array.isArray(e),_g=e=>typeof e=="string",wg=e=>typeof e=="number"&&!isNaN(e),yg=e=>typeof e=="boolean",bg=e=>e instanceof RegExp,or=e=>e instanceof Map,lr=e=>e instanceof Set,Vc=e=>gg(e)==="Symbol",kg=e=>e instanceof Date&&!isNaN(e.valueOf()),Eg=e=>e instanceof Error,b0=e=>typeof e=="number"&&isNaN(e),Ag=e=>yg(e)||vg(e)||Fc(e)||wg(e)||_g(e)||Vc(e),xg=e=>typeof e=="bigint",Pg=e=>e===1/0||e===-1/0,Tg=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),Bg=e=>e instanceof URL;I();var qc=e=>e.replace(/\./g,"\\."),ua=e=>e.map(String).map(qc).join("."),Gs=e=>{const t=[];let n="";for(let r=0;r<e.length;r++){let i=e.charAt(r);if(i==="\\"&&e.charAt(r+1)==="."){n+=".",r++;continue}if(i==="."){t.push(n),n="";continue}n+=i}const s=n;return t.push(s),t};I();function Ft(e,t,n,s){return{isApplicable:e,annotation:t,transform:n,untransform:s}}var jc=[Ft(Fc,"undefined",()=>null,()=>{}),Ft(xg,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Ft(kg,"Date",e=>e.toISOString(),e=>new Date(e)),Ft(Eg,"Error",(e,t)=>{const n={name:e.name,message:e.message};return t.allowedErrorProps.forEach(s=>{n[s]=e[s]}),n},(e,t)=>{const n=new Error(e.message);return n.name=e.name,n.stack=e.stack,t.allowedErrorProps.forEach(s=>{n[s]=e[s]}),n}),Ft(bg,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),n=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,n)}),Ft(lr,"set",e=>[...e.values()],e=>new Set(e)),Ft(or,"map",e=>[...e.entries()],e=>new Map(e)),Ft(e=>b0(e)||Pg(e),"number",e=>b0(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Ft(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Ft(Bg,"URL",e=>e.toString(),e=>new URL(e))];function Oi(e,t,n,s){return{isApplicable:e,annotation:t,transform:n,untransform:s}}var $c=Oi((e,t)=>Vc(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,n)=>{const s=n.symbolRegistry.getValue(t[1]);if(!s)throw new Error("Trying to deserialize unknown symbol");return s}),Cg=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),Mc=Oi(Tg,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const n=Cg[t[1]];if(!n)throw new Error("Trying to deserialize unknown typed array");return new n(e)});function Nc(e,t){return e!=null&&e.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}var Hc=Oi(Nc,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const n=t.classRegistry.getAllowedProps(e.constructor);if(!n)return{...e};const s={};return n.forEach(r=>{s[r]=e[r]}),s},(e,t,n)=>{const s=n.classRegistry.getValue(t[1]);if(!s)throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");return Object.assign(Object.create(s.prototype),e)}),zc=Oi((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,n)=>{const s=n.customTransformerRegistry.findByName(t[1]);if(!s)throw new Error("Trying to deserialize unknown custom value");return s.deserialize(e)}),Dg=[Hc,$c,zc,Mc],k0=(e,t)=>{const n=y0(Dg,r=>r.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation(e,t)};const s=y0(jc,r=>r.isApplicable(e,t));if(s)return{value:s.transform(e,t),type:s.annotation}},Uc={};jc.forEach(e=>{Uc[e.annotation]=e});var Og=(e,t,n)=>{if(kn(t))switch(t[0]){case"symbol":return $c.untransform(e,t,n);case"class":return Hc.untransform(e,t,n);case"custom":return zc.untransform(e,t,n);case"typed-array":return Mc.untransform(e,t,n);default:throw new Error("Unknown transformation: "+t)}else{const s=Uc[t];if(!s)throw new Error("Unknown transformation: "+t);return s.untransform(e,n)}};I();var es=(e,t)=>{const n=e.keys();for(;t>0;)n.next(),t--;return n.next().value};function Kc(e){if(ti(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(ti(e,"prototype"))throw new Error("prototype is not allowed as a property");if(ti(e,"constructor"))throw new Error("constructor is not allowed as a property")}var Ig=(e,t)=>{Kc(t);for(let n=0;n<t.length;n++){const s=t[n];if(lr(e))e=es(e,+s);else if(or(e)){const r=+s,i=+t[++n]==0?"key":"value",a=es(e,r);switch(i){case"key":e=a;break;case"value":e=e.get(a);break}}else e=e[s]}return e},Na=(e,t,n)=>{if(Kc(t),t.length===0)return n(e);let s=e;for(let i=0;i<t.length-1;i++){const a=t[i];if(kn(s)){const o=+a;s=s[o]}else if(ar(s))s=s[a];else if(lr(s)){const o=+a;s=es(s,o)}else if(or(s)){if(i===t.length-2)break;const l=+a,c=+t[++i]==0?"key":"value",u=es(s,l);switch(c){case"key":s=u;break;case"value":s=s.get(u);break}}}const r=t[t.length-1];if(kn(s)?s[+r]=n(s[+r]):ar(s)&&(s[r]=n(s[r])),lr(s)){const i=es(s,+r),a=n(i);i!==a&&(s.delete(i),s.add(a))}if(or(s)){const i=+t[t.length-2],a=es(s,i);switch(+r==0?"key":"value"){case"key":{const l=n(a);s.set(l,s.get(a)),l!==a&&s.delete(a);break}case"value":{s.set(a,n(s.get(a)));break}}}return e};function Ha(e,t,n=[]){if(!e)return;if(!kn(e)){vs(e,(i,a)=>Ha(i,t,[...n,...Gs(a)]));return}const[s,r]=e;r&&vs(r,(i,a)=>{Ha(i,t,[...n,...Gs(a)])}),t(s,n)}function Rg(e,t,n){return Ha(t,(s,r)=>{e=Na(e,r,i=>Og(i,s,n))}),e}function Sg(e,t){function n(s,r){const i=Ig(e,Gs(r));s.map(Gs).forEach(a=>{e=Na(e,a,()=>i)})}if(kn(t)){const[s,r]=t;s.forEach(i=>{e=Na(e,Gs(i),()=>e)}),r&&vs(r,n)}else vs(t,n);return e}var Lg=(e,t)=>ar(e)||kn(e)||or(e)||lr(e)||Nc(e,t);function Fg(e,t,n){const s=n.get(e);s?s.push(t):n.set(e,[t])}function Vg(e,t){const n={};let s;return e.forEach(r=>{if(r.length<=1)return;t||(r=r.map(o=>o.map(String)).sort((o,l)=>o.length-l.length));const[i,...a]=r;i.length===0?s=a.map(ua):n[ua(i)]=a.map(ua)}),s?Ma(n)?[s]:[s,n]:Ma(n)?void 0:n}var Gc=(e,t,n,s,r=[],i=[],a=new Map)=>{var o;const l=Ag(e);if(!l){Fg(e,r,t);const g=a.get(e);if(g)return s?{transformedValue:null}:g}if(!Lg(e,n)){const g=k0(e,n),w=g?{transformedValue:g.value,annotations:[g.type]}:{transformedValue:e};return l||a.set(e,w),w}if(ti(i,e))return{transformedValue:null};const c=k0(e,n),u=(o=c==null?void 0:c.value)!=null?o:e,h=kn(u)?[]:{},d={};vs(u,(g,w)=>{if(w==="__proto__"||w==="constructor"||w==="prototype")throw new Error(`Detected property ${w}. This is a prototype pollution risk, please remove it from your object.`);const b=Gc(g,t,n,s,[...r,w],[...i,e],a);h[w]=b.transformedValue,kn(b.annotations)?d[w]=b.annotations:ar(b.annotations)&&vs(b.annotations,(y,E)=>{d[qc(w)+"."+E]=y})});const m=Ma(d)?{transformedValue:h,annotations:c?[c.type]:void 0}:{transformedValue:h,annotations:c?[c.type,d]:d};return l||a.set(e,m),m};I();I();function Qc(e){return Object.prototype.toString.call(e).slice(8,-1)}function E0(e){return Qc(e)==="Array"}function qg(e){if(Qc(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function jg(e,t,n,s,r){const i={}.propertyIsEnumerable.call(s,t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=n),r&&i==="nonenumerable"&&Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!0,configurable:!0})}function za(e,t={}){if(E0(e))return e.map(r=>za(r,t));if(!qg(e))return e;const n=Object.getOwnPropertyNames(e),s=Object.getOwnPropertySymbols(e);return[...n,...s].reduce((r,i)=>{if(E0(t.props)&&!t.props.includes(i))return r;const a=e[i],o=za(a,t);return jg(r,i,o,e,t.nonenumerable),r},{})}var Te=class{constructor({dedupe:e=!1}={}){this.classRegistry=new hg,this.symbolRegistry=new Lc(t=>{var n;return(n=t.description)!=null?n:""}),this.customTransformerRegistry=new mg,this.allowedErrorProps=[],this.dedupe=e}serialize(e){const t=new Map,n=Gc(e,t,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const r=Vg(t,this.dedupe);return r&&(s.meta={...s.meta,referentialEqualities:r}),s}deserialize(e){const{json:t,meta:n}=e;let s=za(t);return n!=null&&n.values&&(s=Rg(s,n.values,this)),n!=null&&n.referentialEqualities&&(s=Sg(s,n.referentialEqualities)),s}stringify(e){return JSON.stringify(this.serialize(e))}parse(e){return this.deserialize(JSON.parse(e))}registerClass(e,t){this.classRegistry.register(e,t)}registerSymbol(e,t){this.symbolRegistry.register(e,t)}registerCustom(e,t){this.customTransformerRegistry.register({name:t,...e})}allowErrorProps(...e){this.allowedErrorProps.push(...e)}};Te.defaultInstance=new Te;Te.serialize=Te.defaultInstance.serialize.bind(Te.defaultInstance);Te.deserialize=Te.defaultInstance.deserialize.bind(Te.defaultInstance);Te.stringify=Te.defaultInstance.stringify.bind(Te.defaultInstance);Te.parse=Te.defaultInstance.parse.bind(Te.defaultInstance);Te.registerClass=Te.defaultInstance.registerClass.bind(Te.defaultInstance);Te.registerSymbol=Te.defaultInstance.registerSymbol.bind(Te.defaultInstance);Te.registerCustom=Te.defaultInstance.registerCustom.bind(Te.defaultInstance);Te.allowErrorProps=Te.defaultInstance.allowErrorProps.bind(Te.defaultInstance);I();I();I();I();I();I();I();I();I();I();I();I();I();I();I();I();I();I();I();I();I();I();I();var A0,x0;(x0=(A0=Y).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__)!=null||(A0.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__=[]);var P0,T0;(T0=(P0=Y).__VUE_DEVTOOLS_KIT_RPC_CLIENT__)!=null||(P0.__VUE_DEVTOOLS_KIT_RPC_CLIENT__=null);var B0,C0;(C0=(B0=Y).__VUE_DEVTOOLS_KIT_RPC_SERVER__)!=null||(B0.__VUE_DEVTOOLS_KIT_RPC_SERVER__=null);var D0,O0;(O0=(D0=Y).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__)!=null||(D0.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__=null);var I0,R0;(R0=(I0=Y).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__)!=null||(I0.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__=null);var S0,L0;(L0=(S0=Y).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__)!=null||(S0.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__=null);I();I();I();I();I();I();I();const $g=JSON.parse('{"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$7gww3Upx3TuDLylMb9ns0eYVZ81LubUgdSyl6UqyZiTjLcLWDJroe"]}},"author":{"name":"smallfawn","url":"https://smallfawn.github.io"},"logo":"https://theme-hope-assets.vuejs.press/logo.svg","repo":"vuepress-theme-hope/vuepress-theme-hope","docsDir":"src","footer":"默认页脚","displayFooter":true,"blog":{"description":"一个前端开发者","intro":"/intro.html","medias":{"Baidu":"https://example.com","BiliBili":"https://example.com","Email":"mailto:info@example.com","Gitee":"https://example.com","GitHub":"https://example.com","Gitlab":"https://example.com","QQ":"https://example.com","VuePressThemeHope":{"icon":"https://theme-hope-assets.vuejs.press/logo.svg","link":"https://theme-hope.vuejs.press"}}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家"},"navbar":["/",{"text":"博文","icon":"pen-to-square","prefix":"/posts/","children":[{"text":"好看的","icon":"pen-to-square","prefix":"好看的/","children":[{"text":"苹果1","icon":"pen-to-square","link":"1"},{"text":"苹果2","icon":"pen-to-square","link":"2"},"3","4"]},{"text":"好玩的","icon":"pen-to-square","prefix":"好玩的/","children":[{"text":"香蕉 1","icon":"pen-to-square","link":"1"},{"text":"香蕉 2","icon":"pen-to-square","link":"2"},"3","4"]},{"text":"自写vuepress插件","icon":"pen-to-square","link":"vuepress-plugins"}]},{"text":"V2 文档","icon":"book","link":"https://theme-hope.vuejs.press/zh/"}],"sidebar":{"/":["",{"text":"文章","icon":"book","prefix":"posts/","children":"structure"}]}}}}'),Mg=J($g),Wc=()=>Mg,Yc=Symbol(""),Ng=()=>{const e=Oe(Yc);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Hg=(e,t)=>{const{locales:n,...s}=e;return{...s,...n==null?void 0:n[t]}},zg=St({enhance({app:e}){const t=Wc(),n=e._context.provides[Do],s=A(()=>Hg(t.value,n.routeLocale.value));e.provide(Yc,s),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return s.value}}}),ng({app:e,id:"org.vuejs.vuepress.plugin-theme-data",label:"VuePress Theme Data Plugin",packageName:"@vuepress/plugin-theme-data",homepage:"https://v2.vuepress.vuejs.org",logo:"https://v2.vuepress.vuejs.org/images/hero.png",componentStateTypes:["VuePress"]},r=>{r.on.inspectComponent(i=>{i.instanceData.state.push({type:"VuePress",key:"themeData",editable:!1,value:t.value},{type:"VuePress",key:"themeLocaleData",editable:!1,value:s.value})})})}}),Ug=Object.freeze(Object.defineProperty({__proto__:null,default:zg},Symbol.toStringTag,{value:"Module"})),Kg=/language-(shellscript|shell|bash|sh|zsh)/,Gg=({delay:e=500,duration:t=2e3,locales:n,selector:s,showInMobile:r,ignoreSelector:i=[],transform:a})=>{const o=Ro("(max-width: 419px)"),l=A(()=>!o.value||r),c=Pr(n),u=Ie(),h=b=>{var E;if(b.hasAttribute("copy-code"))return;const y=document.createElement("button");y.type="button",y.classList.add("vp-copy-code-button"),y.setAttribute("aria-label",c.value.copy),y.setAttribute("data-copied",c.value.copied),(E=b.parentElement)==null||E.insertBefore(y,b),b.setAttribute("copy-code","")};de(()=>[u.value.path,l.value],async()=>{document.body.classList.toggle("no-copy-code",!l.value),l.value&&(await Nt(),await Fo(e),document.querySelectorAll(s.join(",")).forEach(h))},{immediate:!0});const{copy:m}=C4({legacy:!0}),g=new WeakMap,w=async(b,y,E)=>{const v=y.cloneNode(!0);i.length&&v.querySelectorAll(i.join(",")).forEach(j=>{j.remove()}),a&&a(v);let x=v.textContent||"";if(Kg.test(b.className)&&(x=x.replace(/^ *(\$|>) /gm,"")),await m(x),t<=0)return;E.classList.add("copied"),clearTimeout(g.get(E));const L=setTimeout(()=>{E.classList.remove("copied"),E.blur(),g.delete(E)},t);g.set(E,L)};Ne("click",b=>{const y=b.target;if(l.value&&y.matches('div[class*="language-"] > button.vp-copy-code-button')){const E=y.parentElement,v=y.nextElementSibling;if(!E||!v)return;w(E,v,y)}})};var Qg=[],Wg={"/":{copy:"复制代码",copied:"已复制"}},Yg=['[vp-content] div[class*="language-"] pre'];const Xg=St({setup:()=>{Gg({selector:Yg,ignoreSelector:Qg,locales:Wg,duration:2e3,delay:500,showInMobile:!1})}}),Jg=Object.freeze(Object.defineProperty({__proto__:null,default:Xg},Symbol.toStringTag,{value:"Module"})),Zg=St({setup(){Ne("beforeprint",()=>{document.querySelectorAll("details").forEach(e=>{e.open=!0})})}}),e8=Object.freeze(Object.defineProperty({__proto__:null,default:Zg},Symbol.toStringTag,{value:"Module"})),t8=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),n8="VUEPRESS_CODE_TAB_STORE",Wr=Un(n8,{}),s8=M({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const n=J(e.active),s=Fe([]),r=()=>{e.tabId&&(Wr.value[e.tabId]=e.data[n.value].id)},i=(c=n.value)=>{n.value=c<s.value.length-1?c+1:0,s.value[n.value].focus()},a=(c=n.value)=>{n.value=c>0?c-1:s.value.length-1,s.value[n.value].focus()},o=(c,u)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),n.value=u):c.key==="ArrowRight"?(c.preventDefault(),i()):c.key==="ArrowLeft"&&(c.preventDefault(),a()),e.tabId&&(Wr.value[e.tabId]=e.data[n.value].id)},l=()=>{if(e.tabId){const c=e.data.findIndex(({id:u})=>Wr.value[e.tabId]===u);if(c!==-1)return c}return e.active};return we(()=>{n.value=l(),de(()=>Wr.value[e.tabId],(c,u)=>{if(e.tabId&&c!==u){const h=e.data.findIndex(({id:d})=>d===c);h!==-1&&(n.value=h)}})}),()=>e.data.length?p("div",{class:"vp-code-tabs"},[p("div",{class:"vp-code-tabs-nav",role:"tablist"},e.data.map(({id:c},u)=>{const h=u===n.value;return p("button",{type:"button",ref:d=>{d&&(s.value[u]=d)},class:["vp-code-tab-nav",{active:h}],role:"tab","aria-controls":`codetab-${e.id}-${u}`,"aria-selected":h,onClick:()=>{n.value=u,r()},onKeydown:d=>{o(d,u)}},t[`title${u}`]({value:c,isActive:h}))})),e.data.map(({id:c},u)=>{const h=u===n.value;return p("div",{class:["vp-code-tab",{active:h}],id:`codetab-${e.id}-${u}`,role:"tabpanel","aria-expanded":h},[p("div",{class:"vp-code-tab-title"},t[`title${u}`]({value:c,isActive:h})),t[`tab${u}`]({value:c,isActive:h})])})]):null}}),r8="VUEPRESS_TAB_STORE",ha=Un(r8,{}),i8=M({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const n=J(e.active),s=Fe([]),r=()=>{e.tabId&&(ha.value[e.tabId]=e.data[n.value].id)},i=(c=n.value)=>{n.value=c<s.value.length-1?c+1:0,s.value[n.value].focus()},a=(c=n.value)=>{n.value=c>0?c-1:s.value.length-1,s.value[n.value].focus()},o=(c,u)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),n.value=u):c.key==="ArrowRight"?(c.preventDefault(),i()):c.key==="ArrowLeft"&&(c.preventDefault(),a()),r()},l=()=>{if(e.tabId){const c=e.data.findIndex(({id:u})=>ha.value[e.tabId]===u);if(c!==-1)return c}return e.active};return we(()=>{n.value=l(),de(()=>ha.value[e.tabId],(c,u)=>{if(e.tabId&&c!==u){const h=e.data.findIndex(({id:d})=>d===c);h!==-1&&(n.value=h)}})}),()=>e.data.length?p("div",{class:"vp-tabs"},[p("div",{class:"vp-tabs-nav",role:"tablist"},e.data.map(({id:c},u)=>{const h=u===n.value;return p("button",{type:"button",ref:d=>{d&&(s.value[u]=d)},class:["vp-tab-nav",{active:h}],role:"tab","aria-controls":`tab-${e.id}-${u}`,"aria-selected":h,onClick:()=>{n.value=u,r()},onKeydown:d=>{o(d,u)}},t[`title${u}`]({value:c,isActive:h}))})),e.data.map(({id:c},u)=>{const h=u===n.value;return p("div",{class:["vp-tab",{active:h}],id:`tab-${e.id}-${u}`,role:"tabpanel","aria-expanded":h},[p("div",{class:"vp-tab-title"},t[`title${u}`]({value:c,isActive:h})),t[`tab${u}`]({value:c,isActive:h})])})]):null}}),a8={enhance:({app:e})=>{e.component("CodeTabs",s8),e.component("Tabs",i8)}},o8=Object.freeze(Object.defineProperty({__proto__:null,default:a8},Symbol.toStringTag,{value:"Module"})),l8='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',p8='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>';var c8={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const da=c8,F0={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},u8=(e,t,n)=>{const s=document.createElement(e);return Es(t)&&It(t).forEach(r=>{if(r.indexOf("data"))s[r]=t[r];else{const i=r.replace("data","");s.dataset[i]=t[r]}}),s},Yo=e=>({...da,...e,jsLib:Array.from(new Set([da.jsLib??[],e.jsLib??[]].flat())),cssLib:Array.from(new Set([da.cssLib??[],e.cssLib??[]].flat()))}),ps=(e,t)=>{if(Vo(e[t]))return e[t];const n=new Promise(s=>{var i;const r=document.createElement("script");r.src=t,(i=document.querySelector("body"))==null||i.appendChild(r),r.onload=()=>{s()}});return e[t]=n,n},h8=(e,t)=>{if(t.css&&Array.from(e.childNodes).every(n=>n.nodeName!=="STYLE")){const n=u8("style",{innerHTML:t.css});e.appendChild(n)}},d8=(e,t,n)=>{const s=n.getScript();if(s&&Array.from(t.childNodes).every(r=>r.nodeName!=="SCRIPT")){const r=document.createElement("script");r.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;
${s}}`)),t.appendChild(r)}},f8=["html","js","css"],m8=e=>{const t=It(e),n={html:[],js:[],css:[],isLegal:!1};return f8.forEach(s=>{const r=t.filter(i=>F0[s].types.includes(i));if(r.length){const i=r[0];n[s]=[e[i].replace(/^\n|\n$/g,""),F0[s].map[i]??i]}}),n.isLegal=(!n.html.length||n.html[1]==="none")&&(!n.js.length||n.js[1]==="none")&&(!n.css.length||n.css[1]==="none"),n},Xc=e=>e.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),Jc=e=>`<div id="app">
${Xc(e)}
</div>`,g8=e=>`${e.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,v8=e=>e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),Zc=e=>`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?exports.default:module.exports;})({})`,_8=(e,t)=>{const n=Yo(t),s=e.js[0]??"";return{...n,html:Xc(e.html[0]??""),js:s,css:e.css[0]??"",isLegal:e.isLegal,getScript:()=>{var r;return n.useBabel?((r=window.Babel.transform(s,{presets:["es2015"]}))==null?void 0:r.code)??"":s}}},w8=/<template>([\s\S]+)<\/template>/u,y8=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,b8=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,k8=(e,t)=>{const n=Yo(t),s=e.html[0]??"",r=w8.exec(s),i=y8.exec(s),a=b8.exec(s),o=(r==null?void 0:r[1].replace(/^\n|\n$/g,""))??"",[l="",c=""]=i?[i[4].replace(/^\n|\n$/g,""),i[3]]:[],[u="",h=""]=a?[a[4].replace(/^\n|\n$/g,""),a[3]]:[],d=c===""&&(h===""||h==="css");return{...n,html:Jc(o),js:v8(l),css:u,isLegal:d,jsLib:[n.vue,...n.jsLib],getScript:()=>{var g,w;const m=t.useBabel?((w=(g=window.Babel)==null?void 0:g.transform(l,{presets:["es2015"]}))==null?void 0:w.code)??"":l.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Zc(m)};appOptions.template=\`${o.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},E8=(e,t)=>{var r;const n=Yo(t),s=e.js[0]??"";return{...n,html:Jc(""),js:g8(s),css:e.css[0]??((r=e.js[0])==null?void 0:r.replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim())??"",isLegal:e.isLegal,jsLib:[n.react,n.reactDOM,...n.jsLib],jsx:!0,getScript:()=>{var a,o;const i=((o=(a=window.Babel)==null?void 0:a.transform(s,{presets:["es2015","react"]}))==null?void 0:o.code)??"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Zc(i)}))`}}},cs={},A8=e=>Promise.all([ps(cs,e.babel),ps(cs,e.react),ps(cs,e.reactDOM)]),x8=e=>{const t=[ps(cs,e.vue)];return e.useBabel&&t.push(ps(cs,e.babel)),Promise.all(t)},P8=e=>e.useBabel?ps(cs,e.babel):Promise.resolve();var T8=M({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const[n,s]=sr(!1),r=Fe(),i=Fe(),a=J("0"),o=J(!1),l=A(()=>JSON.parse(e.config?Cp(e.config):"{}")),c=A(()=>{const g=JSON.parse(Cp(e.code));return m8(g)}),u=A(()=>e.type==="react"?E8(c.value,l.value):e.type==="vue"?k8(c.value,l.value):_8(c.value,l.value)),h=A(()=>u.value.isLegal),d=(g=!1)=>{const w=r.value.attachShadow({mode:"open"}),b=document.createElement("div");b.classList.add("code-demo-app"),w.appendChild(b),h.value?(g&&(b.innerHTML=u.value.html),h8(w,u.value),d8(e.id,w,u.value),a.value="0"):a.value="auto",o.value=!0},m=()=>{switch(e.type){case"react":return A8(u.value).then(()=>d());case"vue":return x8(u.value).then(()=>d());default:return P8(u.value).then(()=>d(!0))}};return Ne("beforeprint",()=>{s(!0)}),we(async()=>{await Fo(800),await m()}),()=>{var g;return p("div",{class:"vp-container vp-code-demo",id:e.id},[p("div",{class:"vp-container-header"},[u.value.isLegal?p("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",n.value?"down":"end"],onClick:()=>{a.value=n.value?"0":`${i.value.clientHeight+13.8}px`,s()}}):null,e.title?p("span",{class:"vp-container-title"},decodeURIComponent(e.title)):null,u.value.isLegal&&u.value.jsfiddle!==!1?p("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[p("input",{type:"hidden",name:"html",value:u.value.html}),p("input",{type:"hidden",name:"js",value:u.value.js}),p("input",{type:"hidden",name:"css",value:u.value.css}),p("input",{type:"hidden",name:"wrap",value:"1"}),p("input",{type:"hidden",name:"panel_js",value:"3"}),p("input",{type:"hidden",name:"resources",value:[...u.value.cssLib,...u.value.jsLib].join(",")}),p("button",{type:"submit",class:"jsfiddle-button",innerHTML:p8,"aria-label":"JSFiddle","data-balloon-pos":"down"})]):null,!u.value.isLegal||u.value.codepen!==!1?p("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[p("input",{type:"hidden",name:"data",value:JSON.stringify({html:u.value.html,js:u.value.js,css:u.value.css,js_external:u.value.jsLib.join(";"),css_external:u.value.cssLib.join(";"),layout:u.value.codepenLayout,html_pre_processor:c.value?c.value.html[1]:"none",js_pre_processor:c.value?c.value.js[1]:u.value.jsx?"babel":"none",css_pre_processor:c.value?c.value.css[1]:"none",editors:u.value.codepenEditors})}),p("button",{type:"submit",innerHTML:l8,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"down"})]):null]),o.value?null:p(ec,{class:"vp-code-demo-loading"}),p("div",{ref:r,class:"vp-code-demo-display",style:{display:h.value&&o.value?"block":"none"}}),p("div",{class:"vp-code-demo-code-wrapper",style:{height:a.value}},p("div",{ref:i,class:"vp-code-demo-codes"},(g=t.default)==null?void 0:g.call(t)))])}}}),B8=M({name:"MdDemo",props:{id:{type:String,required:!0},title:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const[n,s]=sr(!1),r=Fe(),i=J("0");return Ne("beforeprint",()=>{s(!0)}),()=>{var a,o;return p("div",{class:"vp-container vp-md-demo",id:e.id},[p("div",{class:"vp-container-header"},[p("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-md-demo-toggle-button",n.value?"down":"end"],onClick:()=>{i.value=n.value?"0":`${r.value.clientHeight+13.8}px`,s()}}),e.title?p("div",{class:"vp-container-title"},decodeURIComponent(e.title)):null]),p("div",{class:"vp-md-demo-display"},(a=t.default)==null?void 0:a.call(t)),p("div",{class:"vp-md-demo-code-wrapper",style:{height:i.value}},p("div",{ref:r,class:"vp-md-demo-codes"},(o=t.code)==null?void 0:o.call(t)))])}}});const C8={enhance:({app:e})=>{e.component("CodeDemo",T8),e.component("MdDemo",B8)}},D8=Object.freeze(Object.defineProperty({__proto__:null,default:C8},Symbol.toStringTag,{value:"Module"})),O8=J({}),eu=Symbol(""),I8=()=>Oe(eu),R8=e=>{e.provide(eu,O8)},S8='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',L8=e=>Re(e)?Array.from(document.querySelectorAll(e)):e.map(t=>Array.from(document.querySelectorAll(t))).flat(),tu=e=>new Promise((t,n)=>{e.complete?t({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>{t(tu(e))},e.onerror=()=>{n()})}),F8=(e,{download:t=!0,fullscreen:n=!0}={})=>{e.on("uiRegister",()=>{if(e.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:s=>{const r=[];let i=-1;for(let a=0;a<e.getNumItems();a++){const o=document.createElement("div");o.className="photo-swipe-bullet",o.onclick=l=>{e.goTo(r.indexOf(l.target))},r.push(o),s.appendChild(o)}e.on("change",()=>{i>=0&&r[i].classList.remove("active"),r[e.currIndex].classList.add("active"),i=e.currIndex})}}),n){const{isSupported:s,toggle:r}=Pi();s.value&&e.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{r()}})}t&&e.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:s=>{s.setAttribute("download",""),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener"),e.on("change",()=>{s.setAttribute("href",e.currSlide.data.src)})}})})},V8=(e,{scrollToClose:t=!0,download:n=!0,fullscreen:s=!0,...r})=>f(async()=>{const{default:i}=await import("./photoswipe.esm-GXRgw7eJ.js");return{default:i}},[]).then(({default:i})=>{let a=null;const o=e.map(l=>({html:S8,element:l,msrc:l.src}));return e.forEach((l,c)=>{const u=()=>{a==null||a.destroy(),a=new i({preloaderDelay:0,showHideAnimationType:"zoom",...r,dataSource:o,index:c,...t?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),F8(a,{download:n,fullscreen:s}),a.addFilter("thumbEl",()=>l),a.addFilter("placeholderSrc",()=>l.src),a.init()};l.getAttribute("photo-swipe")||(l.style.cursor="zoom-in",l.addEventListener("click",()=>{u()}),l.addEventListener("keypress",({key:h})=>{h==="Enter"&&u()}),l.setAttribute("photo-swipe","")),tu(l).then(h=>{o.splice(c,1,h),a==null||a.refreshSlideContent(c)})}),t?Ne("wheel",()=>{a==null||a.close()}):()=>{}}),q8=({selector:e,locales:t,delay:n=500,download:s=!0,fullscreen:r=!0,scrollToClose:i=!0})=>{const a=I8(),o=Pr(t),l=Ie(),c=ye();let u=null;const h=()=>{const{photoSwipe:d}=c.value;d!==!1&&Nt().then(()=>Fo(n)).then(async()=>{const m=Re(d)?d:e;u=await V8(L8(m),{...a.value,...o.value,download:s,fullscreen:r,scrollToClose:i})})};we(()=>{h(),de(()=>[l.value.path,a.value],()=>{u==null||u(),h()})}),wn(()=>{u==null||u()})};var j8={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const $8="[vp-content] :not(a) > img:not([no-view])",M8=j8,N8=800,H8=!0,z8=!0,U8=!0;var K8=St({enhance:({app:e})=>{R8(e)},setup:()=>{q8({selector:$8,delay:N8,locales:M8,download:H8,fullscreen:z8,scrollToClose:U8})}});const G8=Object.freeze(Object.defineProperty({__proto__:null,default:K8},Symbol.toStringTag,{value:"Module"})),nu="VUEPRESS_REDIRECT_STATUS",V0=q4(nu,{}),q0=Lo(nu,{}),Q8=e=>{const t=j4(),n=zt(),s=xs(e.config);return A(()=>{if(s.some(([r])=>n.value===r)){for(const r of t.value)for(const[i,a]of s)if(a.includes(r))return i===n.value?null:{lang:r,localePath:i}}return null})};var W8=M({name:"RedirectModal",props:{config:{type:Object,required:!0},locales:{type:Object,required:!0}},setup(e){const t=xn(),n=W1(),s=zt(),r=Q8(e.config),i=J(),a=So(i),o=J(!1),l=A(()=>{if(!r.value)return null;const{lang:u,localePath:h}=r.value,d=[e.locales[h],e.locales[s.value]];return{hint:d.map(({hint:m})=>m.replace("$1",u)),switch:d.map(({switch:m})=>m.replace("$1",u)).join(" / "),cancel:d.map(({cancel:m})=>m).join(" / "),remember:d.map(({remember:m})=>m).join(" / ")}}),c=()=>{q0.value[s.value]=!0,o.value&&(V0.value[s.value]=!0),a.value=!1};return de(n,()=>{a.value=!1}),we(async()=>{i.value=document.body,await Nt(),r.value&&!q0.value[s.value]&&!V0.value[s.value]&&(a.value=!0)}),yo(()=>{a.value=!1}),()=>p(A1,{name:"redirect-modal-fade"},()=>{var u,h,d,m;return a.value?p("div",{key:"mask",class:"redirect-modal-mask"},p("div",{key:"popup",class:"redirect-modal-wrapper"},[p("div",{class:"redirect-modal-content"},(u=l.value)==null?void 0:u.hint.map(g=>p("p",g))),p("div",{class:"redirect-modal-hint"},[p("input",{id:"remember-redirect",type:"checkbox",value:o.value,onChange:()=>{o.value=!o.value}}),p("label",{for:"remember-redirect"},(h=l.value)==null?void 0:h.remember)]),p("button",{type:"button",class:"redirect-modal-action primary",onClick:()=>{c(),t.replace(n.value.replace(s.value,r.value.localePath))}},(d=l.value)==null?void 0:d.switch),p("button",{type:"button",class:"redirect-modal-action",onClick:()=>{c()}},(m=l.value)==null?void 0:m.cancel)])):null})}}),Y8={config:{},autoLocale:!1,localeFallback:!0,defaultBehavior:"defaultLocale"},X8={"/":{name:"简体中文",hint:"您的首选语言是 $1，是否切换到该语言？",switch:"切换到 $1",cancel:"取消",remember:"记住我的选择"}};const su=Y8;var J8=St({setup(){},rootComponents:[()=>p(W8,{config:su,locales:X8})]});const Z8=Object.freeze(Object.defineProperty({__proto__:null,config:su,default:J8},Symbol.toStringTag,{value:"Module"})),me=({name:e="",color:t="currentColor",ariaLabel:n},{attrs:s,slots:r})=>{var i;return p("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:t,"aria-label":n??`${e} icon`,...s},(i=r.default)==null?void 0:i.call(r))};me.displayName="IconBase";const Ii=(e,{slots:t})=>{var n;return(n=t.default)==null?void 0:n.call(t)},e7=e=>zn(e)?e:`https://github.com/${e}`,Xo=(e="")=>!zn(e)||e.includes("github.com")?"GitHub":e.includes("bitbucket.org")?"Bitbucket":e.includes("gitlab.com")?"GitLab":e.includes("gitee.com")?"Gitee":null,ru=()=>p(me,{name:"github"},()=>p("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));ru.displayName="GitHubIcon";const iu=()=>p(me,{name:"gitee"},()=>p("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));iu.displayName="GiteeIcon";const au=()=>p(me,{name:"bitbucket"},()=>p("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));au.displayName="BitbucketIcon";const ou=()=>p(me,{name:"source"},()=>p("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));ou.displayName="SourceIcon";const t7=({link:e,type:t=Xo(e??"")})=>{if(!t)return null;const n=t.toLowerCase();return p(n==="bitbucket"?au:n==="github"?ru:n==="gitlab"?"GitLab":n==="gitee"?iu:ou)},n7=(e,t=0)=>{let n=3735928559^t,s=1103547991^t;for(let r=0,i;r<e.length;r++)i=e.charCodeAt(r),n=Math.imul(n^i,2654435761),s=Math.imul(s^i,1597334677);return n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(s^s>>>13,3266489909),s=Math.imul(s^s>>>16,2246822507),s^=Math.imul(n^n>>>13,3266489909),4294967296*(2097151&s)+(n>>>0)},Br=(e,t)=>n7(e)%t;let s7=class{constructor(){Fi(this,"containerElement");Fi(this,"messageElements",{});const t="message-container",n=document.getElementById(t);n?this.containerElement=n:(this.containerElement=document.createElement("div"),this.containerElement.id=t,document.body.appendChild(this.containerElement))}pop(t,n=2e3){const s=document.createElement("div"),r=Date.now();return s.className="message move-in",s.innerHTML=t,this.containerElement.appendChild(s),this.messageElements[r]=s,n>0&&setTimeout(()=>{this.close(r)},n),r}close(t){if(t){const n=this.messageElements[t];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.messageElements[t]})}else It(this.messageElements).forEach(n=>this.close(Number(n)))}destroy(){document.body.removeChild(this.containerElement)}};const lu=/#.*$/u,r7=e=>{const t=lu.exec(e);return t?t[0]:""},j0=e=>decodeURI(e).replace(lu,"").replace(/\/index\.html$/iu,"/").replace(/\/(README|index)\.md$/iu,"/").replace(/\.(?:html|md)$/iu,""),pu=(e,t)=>{if(!Vo(t))return!1;const n=j0(e.path),s=j0(t),r=r7(t);return r?r===e.hash&&(!s||n===s):n===s};var i7=e=>Object.prototype.toString.call(e)==="[object Object]",pr=e=>typeof e=="string";const{isArray:cu}=Array,$0=e=>i7(e)&&pr(e.name),cr=(e,t=!1)=>e?cu(e)?e.map(n=>pr(n)?{name:n}:$0(n)?n:null).filter(n=>n!==null):pr(e)?[{name:e}]:$0(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?"":"| false"} | undefined\`, but got`,e),[]):[],uu=(e,t)=>{if(e){if(cu(e)&&e.every(pr))return e;if(pr(e))return[e];console.error(`Expect ${t} to be \`string[] | string | undefined\`, but got`,e)}return[]},hu=e=>uu(e,"category"),du=e=>uu(e,"tag");var M0={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const fu=()=>{const e=Ie();return A(()=>e.value.readingTime??null)},mu=(e,t)=>{const{minutes:n,words:s}=e,{less1Minute:r,word:i,time:a}=t;return{time:n<1?r:a.replace("$time",Math.round(n).toString()),words:i.replace("$word",s.toString())}},N0={words:"",time:""},Ua=typeof M0>"u"?null:M0,gu=()=>Ua?Pr(Ua):A(()=>null),a7=()=>{if(typeof Ua>"u")return A(()=>N0);const e=fu(),t=gu();return A(()=>e.value&&t.value?mu(e.value,t.value):N0)},Ut=()=>Wc(),ce=()=>Ng(),it=()=>{const e=Ut();return A(()=>!!e.value.pure)},ni=()=>null,o7="719px",l7="1440px",p7="false",c7="9",Kn={mobileBreakPoint:o7,pcBreakPoint:l7,enableThemeColor:p7,colorNumber:c7},Jo={"/posts/":["page","api","idea","vuepress-plugins",{text:"好玩的",prefix:"好玩的/",collapsible:!0,children:["1","2","3","4"]},{text:"好看的",prefix:"好看的/",collapsible:!0,children:["1","2","3","4"]},"2024-10-04","2024-10-05","2024-10-06","2024-10-07","2024-10-08","2024-10-09","2024-10-10","2024-10-11","2024-10-12","2024-10-13","2024-10-14","2024-10-15","2024-10-16","2024-10-17","2024-10-18","2024-10-19","2024-10-20","2024-10-21","2024-10-22","2024-10-23","2024-10-24","2024-10-25","2024-10-26","2024-10-27","2024-10-28","2024-10-29","2024-10-30","2024-10-31","2024-11-01","2024-11-02","2024-11-03","2024-11-04","2024-11-05","2024-11-06","2024-11-07","2024-11-08","2024-11-09","2024-11-10","2024-11-11","2024-11-12","2024-11-13","2024-11-14","2024-11-15","2024-11-16","2024-11-17","2024-11-18","2024-11-19","2024-11-20","2024-11-21","2024-11-22","2024-11-23","2024-11-24","2024-11-25","2024-11-26","2024-11-27","2024-11-28","2024-11-29","2024-11-30","2024-12-01","2024-12-02","2024-12-03","2024-12-04","2024-12-05","2024-12-06","2024-12-07","2024-12-08","2024-12-09","2024-12-10","2024-12-11","2024-12-12","2024-12-13","2024-12-14","2024-12-15","2024-12-16","2024-12-17","2024-12-18","2024-12-19","2024-12-20","2024-12-21","2024-12-22","2024-12-23","2024-12-24","2024-12-25","2024-12-26","2024-12-27","2024-12-28","2024-12-29","2024-12-30","2024-12-31","2025-01-01","2025-01-02","2025-01-03","2025-01-04","2025-01-05","2025-01-06","2025-01-07","2025-01-08","2025-01-09","2025-01-10","2025-01-11","2025-01-12","2025-01-13","2025-01-14","2025-01-15","2025-01-16","2025-01-17","2025-01-18","2025-01-19","2025-01-20","2025-01-22","2025-01-23","2025-01-24","2025-01-25","2025-04-05","2025-04-06","2025-04-07","2025-04-08","2025-04-09","2025-04-10","2025-04-11","2025-04-12","2025-04-13","2025-04-14","2025-04-15","2025-04-16","2025-04-17","2025-04-18","2025-04-19","2025-04-20","2025-04-21","2025-04-22","2025-04-23","2025-04-24","2025-04-25","2025-04-26","2025-04-27","2025-04-28","2025-04-29","2025-04-30","2025-05-01","2025-05-02","2025-05-03","2025-05-04","2025-05-05","2025-05-06","2025-05-07","2025-05-08","2025-05-09","2025-05-10","2025-05-11","2025-05-12","2025-05-13","2025-05-14","2025-05-15","2025-05-16","2025-05-17","2025-05-18","2025-05-19","2025-05-20","2025-05-21","2025-05-22","2025-05-23","2025-05-24","2025-05-25","2025-05-26","2025-05-27","2025-05-28","2025-05-29","2025-05-30","2025-05-31","2025-06-01","2025-06-02","2025-06-03","2025-06-04","2025-06-05","2025-06-06","2025-06-07","2025-06-08","2025-06-09","2025-06-10","2025-06-11","2025-06-12","2025-06-13","2025-06-14","2025-06-15","2025-06-16","2025-06-17","2025-06-18","2025-06-19","2025-06-20","2025-06-21","2025-06-22","2025-06-23","2025-06-24","2025-06-25","2025-06-26","2025-06-27","2025-06-28","2025-06-29","2025-06-30","2025-07-01","2025-07-02","2025-07-03","2025-07-04","2025-07-05","2025-07-06","2025-07-07","2025-07-08","2025-07-09","2025-07-10","2025-07-11","2025-07-12","2025-07-13","2025-07-14","2025-07-15","2025-07-16","2025-07-17","2025-07-18","2025-07-19","2025-07-20","2025-07-21","2025-07-22","2025-07-23","2025-07-24","2025-07-25","2025-07-26","2025-07-27","2025-07-28","2025-07-29","2025-07-30","2025-07-31","2025-08-01","2025-08-02","2025-08-03","2025-08-04","2025-08-05","2025-08-06","2025-08-07","2025-08-08","2025-08-09","2025-08-10","2025-08-11","2025-08-12","2025-08-13","2025-08-14","2025-08-15","2025-08-16","2025-08-17","2025-08-18","2025-08-19","2025-08-20","2025-08-21","2025-08-22","2025-08-23","2025-08-24","2025-08-25","2025-08-26","2025-08-27","2025-08-28","2025-08-29","2025-08-30","2025-08-31","2025-09-01","2025-09-02","2025-09-03","2025-09-04","2025-09-05","2025-09-06","2025-09-07","2025-09-08","2025-09-09","2025-09-10","2025-09-11","2025-09-12","2025-09-13","2025-09-14","2025-09-15","2025-09-16","2025-09-17","2025-09-18","2025-09-19","2025-09-20","2025-09-21","2025-09-22","2025-09-23","2025-09-24","2025-09-25","2025-09-26","2025-09-27","2025-09-28","2025-09-29","2025-09-30","2025-10-01","2025-10-02","2025-10-03","2025-10-04","2025-10-05","2025-10-06","2025-10-07","2025-10-08","2025-10-09","2025-10-10","2025-10-11","2025-10-12","2025-10-13","2025-10-14","2025-10-15","2025-10-16","2025-10-17","2025-10-18","2025-10-19","2025-10-20","2025-10-21","2025-10-22","2025-10-23","2025-10-24","2025-10-25","2025-10-26","2025-10-27","2025-10-28","2025-10-29","2025-10-30","2025-10-31","2025-11-01","2025-11-02","2025-11-03","2025-11-04","2025-11-05","2025-11-06","2025-11-07","2025-11-08","2025-11-09","2025-11-10","2025-11-11","2025-11-12","2025-11-13","2025-11-14","2025-11-15","2025-11-16","2025-11-17","2025-11-18","2025-11-19","2025-11-20","2025-11-21","2025-11-22","2025-11-23","2025-11-24","2025-11-25","2025-11-26","2025-11-27","2025-11-28","2025-11-29","2025-11-30","2025-12-01","2025-12-02","2025-12-03","2025-12-04","2025-12-05","2025-12-06","2025-12-07","2025-12-08","2025-12-09","2025-12-10","2025-12-11","2025-12-12","2025-12-13","2025-12-14","2025-12-15","2025-12-16","2025-12-17","2025-12-18","2025-12-19","2025-12-20","2025-12-21","2025-12-22","2025-12-23","2025-12-24","tools"]},Qe=e=>{const{icon:t="",color:n,size:s}=e,r=n||s?{}:null;return n&&(r.color=n),s&&(r.height=Number.isNaN(Number(s))?s:`${s}px`),zn(t)?p("img",{class:"icon",src:t,alt:"","no-view":"",style:r}):Ti(t)?p("img",{class:"icon",src:Ee(t),alt:"","aria-hidden":"","no-view":"",style:r}):p(Dt("FontIcon"),e)};Qe.displayName="HopeIcon";const vu=()=>{const e=ce();return A(()=>e.value.author)},u7="http://.",Gn=()=>{const e=xn(),t=Ht();return n=>{if(n)if(Ti(n))t.path!==n&&e.push(n);else if(br(n))window&&window.open(n);else{const s=t.path.slice(0,t.path.lastIndexOf("/"));e.push(new URL(`${s}/${encodeURI(n)}`,u7).pathname)}}},_u=()=>{const e=ye(),t=vu();return A(()=>{const{author:n}=e.value;return n?cr(n):n===!1?[]:cr(t.value,!1)})},h7=()=>{const e=ye(),t=Oe(Symbol.for("categoryMap"));return A(()=>hu(e.value.category??e.value.categories).map(n=>{var s;return{name:n,path:((s=t==null?void 0:t.value.map[n])==null?void 0:s.path)??""}}))},d7=()=>{const e=ye(),t=Oe(Symbol.for("tagMap"));return A(()=>du(e.value.tag??e.value.tags).map(n=>{var s;return{name:n,path:((s=t==null?void 0:t.value.map[n])==null?void 0:s.path)??""}}))},f7=()=>{const e=ye(),t=Ie();return A(()=>{const n=qo(e.value.date);if(n)return n;const{createdTime:s}=t.value.git??{};return s?new Date(s):null})},m7=()=>{const e=ce(),t=Ie(),n=ye(),s=_u(),r=h7(),i=d7(),a=f7(),o=fu(),l=a7(),c=A(()=>({author:s.value,category:r.value,date:a.value,localizedDate:t.value.localizedDate,tag:i.value,isOriginal:n.value.isOriginal??!1,readingTime:o.value,readingTimeLocale:l.value,pageview:n.value.pageview??!0})),u=A(()=>n.value.pageInfo??e.value.pageInfo??null);return{info:c,items:u}},Zo=(e,t)=>"activeMatch"in t?new RegExp(t.activeMatch,"u").test(e.path):pu(e,t.link),el=(e,t)=>"children"in t?!!t.prefix&&pu(e,t.prefix)||t.children.some(n=>el(e,n)):Zo(e,t),Ka=e=>!ki(e)&&!br(e);var rt=(e=>(e.title="t",e.shortTitle="s",e.icon="i",e.index="I",e.order="O",e.breadcrumbExclude="b",e))(rt||{}),Je=(e=>(e.type="y",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e))(Je||{}),wu=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(wu||{});const di=(e,t=!1,n)=>{const{meta:s,path:r,notFound:i}=At(e,n);return i?{text:r,link:r}:{text:!t&&s[rt.shortTitle]?s[rt.shortTitle]:s[rt.title]||r,link:r,...s[rt.icon]?{icon:s[rt.icon]}:{}}},Ln=(e="",t="")=>Ti(t)||br(t)?t:`${P1(e)}${t}`,yu=(e,t)=>{const n=Re(e)?di(Ln(t,e)):e.link?{...e,link:Ka(e.link)?At(Ln(t,e.link)).path:e.link}:e;if("children"in n){const s=Ln(t,n.prefix),r=n.children==="structure"?Jo[s]:n.children;return{...n,prefix:s,children:r.map(i=>yu(i,s))}}return{...n}},Ga=({config:e,prefix:t=""})=>e.map(n=>yu(n,t)),g7=({config:e,routePath:t,headerDepth:n})=>{const s=It(e).sort((r,i)=>i.length-r.length);for(const r of s)if(rr(decodeURI(t),r)){const i=e[r];return Ga({config:i==="structure"?Jo[r]:i||[],headerDepth:n,prefix:r})}return console.warn(`${decodeURI(t)} is missing sidebar config.`),[]},v7=({config:e,headerDepth:t,routeLocale:n,routePath:s})=>e==="structure"?Ga({config:Jo[n],headerDepth:t,prefix:n}):La(e)?Ga({config:e,headerDepth:t}):Es(e)?g7({config:e,routePath:s,headerDepth:t}):[],bu=Symbol(""),_7=()=>{const e=ye(),t=ce(),n=zt(),s=W1(),r=A(()=>e.value.home?!1:e.value.sidebar??t.value.sidebar??"structure"),i=A(()=>e.value.headerDepth??t.value.headerDepth??2),a=A(()=>v7({config:r.value,headerDepth:i.value,routeLocale:n.value,routePath:s.value}));Bt(bu,a)},tl=()=>{const e=Oe(bu);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},{mobileBreakPoint:w7,pcBreakPoint:y7}=Kn,H0=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,Cr=()=>{const e=J(!1),t=J(!1),n=()=>{e.value=window.innerWidth<=(H0(w7)??719),t.value=window.innerWidth>=(H0(y7)??1440)};return Ne("resize",n,!1),Ne("orientationchange",n,!1),we(()=>{n()}),{isMobile:e,isPC:t}},ku=Symbol(""),Dr=()=>{const e=Oe(ku);if(!e)throw new Error("useDarkmode() is called without provider.");return e},b7=e=>{const t=Ut(),n=R4(),s=A(()=>t.value.darkmode??"switch"),r=Un("vuepress-theme-hope-scheme","auto"),i=A(()=>{const o=s.value;return o==="disable"?!1:o==="enable"?!0:o==="auto"?n.value:o==="toggle"?r.value==="dark":r.value==="dark"||r.value==="auto"&&n.value}),a=A(()=>{const o=s.value;return o==="switch"||o==="toggle"});e.provide(ku,{canToggle:a,config:s,isDarkmode:i,status:r}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>i.value}})},k7=()=>{const{config:e,isDarkmode:t,status:n}=Dr();Js(()=>{e.value==="disable"?n.value="light":e.value==="enable"?n.value="dark":e.value==="toggle"&&n.value==="auto"&&(n.value="light")}),we(()=>{de(t,s=>document.documentElement.setAttribute("data-theme",s?"dark":"light"),{immediate:!0})})};var E7=M({name:"PageFooter",setup(){const e=Ut(),t=ce(),n=ye(),s=_u(),r=A(()=>{const{copyright:c,footer:u}=n.value;return u!==!1&&!!(c||u||t.value.displayFooter)}),i=A(()=>{const{footer:c}=n.value;return c===!1?!1:Re(c)?c:t.value.footer??""}),a=A(()=>s.value.map(({name:c})=>c).join(", ")),o=c=>`Copyright © ${new Date().getFullYear()} ${a.value} ${c?`${c} Licensed`:""}`,l=A(()=>{const{copyright:c,license:u=""}=n.value,{license:h}=e.value,{copyright:d}=t.value;return c??(u?o(u):d??(a.value||h?o(h):!1))});return()=>r.value?p("footer",{class:"vp-footer-wrapper","vp-footer":""},[i.value?p("div",{class:"vp-footer",innerHTML:i.value}):null,l.value?p("div",{class:"vp-copyright",innerHTML:l.value}):null]):null}}),lt=M({name:"AutoLink",props:{config:{type:Object,required:!0}},emits:["focusout"],slots:Object,setup(e,{emit:t,slots:n}){return()=>{const{icon:s}=e.config;return p(p4,{...e,onFocusout:()=>t("focusout")},{default:n.default?()=>n.default():null,before:n.before?()=>n.before():s?()=>p(Qe,{icon:s}):null,after:n.after?()=>n.after():null})}}}),A7=M({name:"NavbarDropdown",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=Ie(),s=ys(e,"config"),r=A(()=>s.value.ariaLabel??s.value.text),i=J(!1);de(()=>n.value.path,()=>{i.value=!1});const a=o=>{o.detail===0&&(i.value=!i.value)};return()=>{var o;return p("div",{class:["vp-dropdown-wrapper",{open:i.value}]},[p("button",{type:"button",class:"vp-dropdown-title","aria-label":r.value,onClick:a},[((o=t.title)==null?void 0:o.call(t))||[p(Qe,{icon:s.value.icon}),e.config.text],p("span",{class:"arrow"}),p("ul",{class:"vp-dropdown"},s.value.children.map((l,c)=>{const u=c===s.value.children.length-1;return p("li",{class:"vp-dropdown-item"},"children"in l?[p("h4",{class:"vp-dropdown-subtitle"},l.link?p(lt,{config:l,onFocusout:()=>{l.children.length===0&&u&&(i.value=!1)}}):l.text),p("ul",{class:"vp-dropdown-subitems"},l.children.map((h,d)=>p("li",{class:"vp-dropdown-subitem"},p(lt,{config:h,onFocusout:()=>{d===l.children.length-1&&u&&(i.value=!1)}}))))]:p(lt,{config:l,onFocusout:()=>{u&&(i.value=!1)}}))}))])])}}});const Eu=(e,t="")=>Re(e)?di(Ln(t,e)):"children"in e?{...e,...e.link&&Ka(e.link)?{link:At(Ln(t,e.link)).path}:{},children:e.children.map(n=>Eu(n,Ln(t,e.prefix)))}:{...e,link:Ka(e.link)?At(Ln(t,e.link)).path:e.link},Au=()=>{const e=ce();return A(()=>(e.value.navbar||[]).map(t=>Eu(t)))},x7=()=>{const e=ce(),t=A(()=>e.value.repo),n=A(()=>t.value?e7(t.value):null),s=A(()=>t.value?Xo(t.value):null),r=A(()=>n.value?e.value.repoLabel??s.value??"Source":null);return A(()=>!n.value||!r.value||e.value.repoDisplay===!1?null:{type:s.value??"Source",label:r.value,link:n.value})};var P7=M({name:"NavScreenMenu",props:{config:{type:Object,required:!0}},setup(e){const t=Ie(),n=ys(e,"config"),s=A(()=>n.value.ariaLabel??n.value.text),r=J(!1);de(()=>t.value.path,()=>{r.value=!1});const i=(a,o)=>o[o.length-1]===a;return()=>[p("button",{type:"button",class:["vp-nav-screen-menu-title",{active:r.value}],"aria-label":s.value,onClick:()=>{r.value=!r.value}},[p("span",{class:"text"},[p(Qe,{icon:n.value.icon}),e.config.text]),p("span",{class:["arrow",r.value?"down":"end"]})]),p("ul",{class:["vp-nav-screen-menu",{hide:!r.value}]},n.value.children.map(a=>p("li",{class:"vp-nav-screen-menu-item"},"children"in a?[p("h4",{class:"vp-nav-screen-menu-subtitle"},a.link?p(lt,{config:a,onFocusout:()=>{i(a,n.value.children)&&a.children.length===0&&(r.value=!1)}}):a.text),p("ul",{class:"vp-nav-screen-menu-subitems"},a.children.map(o=>p("li",{class:"vp-nav-screen-menu-subitem"},p(lt,{config:o,onFocusout:()=>{i(o,a.children)&&i(a,n.value.children)&&(r.value=!1)}}))))]:p(lt,{config:a,onFocusout:()=>{i(a,n.value.children)&&(r.value=!1)}}))))]}}),T7=M({name:"NavScreenLinks",setup(){const e=Au();return()=>e.value.length?p("nav",{class:"nav-screen-links"},e.value.map(t=>p("div",{class:"navbar-links-item"},"children"in t?p(P7,{config:t}):p(lt,{config:t})))):null}});const xu=()=>p(me,{name:"dark"},()=>p("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));xu.displayName="DarkIcon";const Pu=()=>p(me,{name:"light"},()=>p("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));Pu.displayName="LightIcon";const Tu=()=>p(me,{name:"auto"},()=>p("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Tu.displayName="AutoIcon";const Bu=()=>p(me,{name:"enter-fullscreen"},()=>p("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Bu.displayName="EnterFullScreenIcon";const Cu=()=>p(me,{name:"cancel-fullscreen"},()=>p("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Cu.displayName="CancelFullScreenIcon";const Du=()=>p(me,{name:"outlook"},()=>[p("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Du.displayName="OutlookIcon";var Ou=M({name:"ColorModeSwitch",setup(){const{config:e,isDarkmode:t,status:n}=Dr(),s=it(),r=()=>{e.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"},i=async a=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!s.value)||!a){r();return}const o=a.clientX,l=a.clientY,c=Math.hypot(Math.max(o,innerWidth-o),Math.max(l,innerHeight-l)),u=t.value;await document.startViewTransition(async()=>{r(),await Nt()}).ready,t.value!==u&&document.documentElement.animate({clipPath:t.value?[`circle(${c}px at ${o}px ${l}px)`,`circle(0px at ${o}px ${l}px)`]:[`circle(0px at ${o}px ${l}px)`,`circle(${c}px at ${o}px ${l}px)`]},{duration:400,pseudoElement:t.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>p("button",{type:"button",class:"vp-color-mode-switch",id:"color-mode-switch",onClick:i},[p(Tu,{style:{display:n.value==="auto"?"block":"none"}}),p(xu,{style:{display:n.value==="dark"?"block":"none"}}),p(Pu,{style:{display:n.value==="light"?"block":"none"}})])}}),B7=M({name:"ColorMode",setup(){const e=ce(),{canToggle:t}=Dr(),n=A(()=>e.value.outlookLocales.darkmode);return()=>t.value?p("div",{class:"vp-color-mode"},[p("label",{class:"vp-color-mode-title",for:"color-mode-switch"},n.value),p(Ou)]):null}});const z0=Kn.enableThemeColor==="true";var C7=M({name:"ToggleFullScreenButton",setup(){const{isSupported:e,isFullscreen:t,toggle:n}=Pi();return()=>e?p("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:t.value,onClick:()=>n()},t.value?p(Cu):p(Bu)):null}}),Iu=M({name:"ToggleFullScreenButton",setup(){const e=ce(),{isSupported:t}=Pi(),n=A(()=>e.value.outlookLocales.fullscreen);return()=>t?p("div",{class:"full-screen-wrapper"},[p("label",{class:"full-screen-title",for:"full-screen-switch"},n.value),p(C7)]):null}}),Ru=M({name:"OutlookSettings",setup(){const e=Ut(),t=it(),n=A(()=>!t.value&&e.value.fullscreen);return()=>p(J1,()=>[null,p(B7),n.value?p(Iu):null])}}),D7=M({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:t,slots:n}){const s=Ie(),{isMobile:r}=Cr(),i=Fe(),a=So(i);return we(()=>{i.value=document.body,de(r,o=>{!o&&e.show&&(a.value=!1,t("close"))}),de(()=>s.value.path,()=>{a.value=!1,t("close")})}),wn(()=>{a.value=!1}),()=>p(ds,{name:"fade",onEnter:()=>{a.value=!0},onAfterLeave:()=>{a.value=!1}},()=>{var o,l;return e.show?p("div",{id:"nav-screen",class:"vp-nav-screen"},p("div",{class:"vp-nav-screen-container"},[(o=n.before)==null?void 0:o.call(n),p(T7),p("div",{class:"vp-outlook-wrapper"},p(Ru)),(l=n.after)==null?void 0:l.call(n)])):null})}}),O7=M({name:"NavbarBrand",setup(){const e=zt(),t=kr(),n=ce(),s=A(()=>n.value.home??e.value),r=A(()=>t.value.title),i=A(()=>n.value.navbarTitle??r.value),a=A(()=>n.value.logo?Ee(n.value.logo):null),o=A(()=>n.value.logoDark?Ee(n.value.logoDark):null);return()=>p($e,{to:s.value,class:"vp-brand","aria-label":n.value.routeLocales.home},()=>[a.value?p("img",{class:["vp-nav-logo",{light:!!o.value}],src:a.value,alt:""}):null,o.value?p("img",{class:["vp-nav-logo dark"],src:o.value,alt:""}):null,i.value?p("span",{class:["vp-site-name",{"hide-in-pad":a.value&&(n.value.hideSiteNameOnMobile??!0)}]},i.value):null])}}),I7=M({name:"NavbarLinks",setup(){const e=Au();return()=>e.value.length?p("nav",{class:"vp-nav-links"},e.value.map(t=>p("div",{class:"vp-nav-item hide-in-mobile"},"children"in t?p(A7,{config:t}):p(lt,{config:t})))):null}}),R7=M({name:"RepoLink",setup(){const e=x7();return()=>e.value?p("div",{class:"vp-nav-item vp-action"},p("a",{class:"vp-action-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},p(t7,{type:e.value.type,style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const Su=({active:e=!1},{emit:t})=>p("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>t("toggle")},p("span",[p("span",{class:"vp-top"}),p("span",{class:"vp-middle"}),p("span",{class:"vp-bottom"})]));Su.displayName="ToggleNavbarButton";const Qa=(e,{emit:t})=>p("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>t("toggle")},p("span",{class:"icon"}));Qa.displayName="ToggleSidebarButton",Qa.emits=["toggle"];var S7=M({name:"OutlookButton",setup(){const e=Ut(),t=Ie(),{canToggle:n}=Dr(),{isSupported:s}=Pi(),r=it(),i=J(!1),a=A(()=>!r.value&&e.value.fullscreen&&s),o=A(()=>n.value||a.value);return de(()=>t.value.path,()=>{i.value=!1}),()=>o.value?p("div",{class:"vp-nav-item hide-in-mobile"},n.value&&!a.value&&!z0?p(Ou):a.value&&!n.value&&!z0?p(Iu):p("button",{type:"button",class:["vp-outlook-button",{open:i.value}],tabindex:"-1","aria-hidden":!0},[p(Du),p("div",{class:"vp-outlook-dropdown"},p(Ru))])):null}}),L7=M({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:t,slots:n}){const s=ce(),{isMobile:r}=Cr(),i=J(!1),a=A(()=>{const{navbarAutoHide:u="mobile"}=s.value;return u!=="none"&&(u==="always"||r.value)}),o=A(()=>s.value.navbarLayout??{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),l={Brand:O7,Language:ni,Links:I7,Repo:R7,Outlook:S7,Search:Et("SearchBox")?Dt("SearchBox"):ni},c=u=>l[u]??(Et(u)?Dt(u):ni);return()=>{var u,h,d,m,g,w,b,y,E;return[p("header",{key:"navbar",id:"navbar",class:["vp-navbar",{"auto-hide":a.value}],"vp-navbar":""},[p("div",{class:"vp-navbar-start"},[p(Qa,{onToggle:()=>{i.value&&(i.value=!1),t("toggleSidebar")}}),(u=n.startBefore)==null?void 0:u.call(n),(h=o.value.start)==null?void 0:h.map(v=>p(c(v))),(d=n.startAfter)==null?void 0:d.call(n)]),p("div",{class:"vp-navbar-center"},[(m=n.centerBefore)==null?void 0:m.call(n),(g=o.value.center)==null?void 0:g.map(v=>p(c(v))),(w=n.centerAfter)==null?void 0:w.call(n)]),p("div",{class:"vp-navbar-end"},[(b=n.endBefore)==null?void 0:b.call(n),(y=o.value.end)==null?void 0:y.map(v=>p(c(v))),(E=n.endAfter)==null?void 0:E.call(n),p(Su,{active:i.value,onToggle:()=>{i.value=!i.value}})])]),p(D7,{show:i.value,onClose:()=>{i.value=!1}},{before:n.screenTop?()=>n.screenTop():null,after:n.screenBottom?()=>n.screenBottom():null})]}}}),F7=M({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const t=Ht();return()=>Re(e.config.link)?p(lt,{class:["vp-sidebar-link",{active:Zo(t,e.config)}],config:{...e.config,exact:!0}}):p("p",e,[p(Qe,{icon:e.config.icon}),e.config.text])}}),V7=M({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:t}){const n=Ht(),s=J(!1),r=A(()=>el(n,e.config)),i=A(()=>Zo(n,e.config)),a=A(()=>e.open||e.config.expanded&&!s.value);return()=>{const{collapsible:o,children:l=[],icon:c,prefix:u,link:h,text:d}=e.config;return p("section",{class:"vp-sidebar-group"},[p(o?"button":"p",{class:["vp-sidebar-header",{clickable:o||h,exact:i.value,active:r.value}],...o?{type:"button",onClick:()=>{s.value=!0,t("toggle")}}:{}},[p(Qe,{icon:c}),h?p(lt,{class:"vp-sidebar-title no-external-link-icon",config:{text:d,link:h}}):p("span",{class:"vp-sidebar-title"},d),o?p("span",{class:["vp-arrow",a.value?"down":"end"]}):null]),a.value||!o?p(Lu,{key:u,config:l}):null])}}}),Lu=M({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const t=Ht(),n=J(-1),s=r=>{n.value=r===n.value?-1:r};return de(()=>t.path,()=>{const r=e.config.findIndex(i=>el(t,i));n.value=r},{immediate:!0,flush:"post"}),()=>p("ul",{class:"vp-sidebar-links"},e.config.map((r,i)=>p("li","children"in r?p(V7,{config:r,open:i===n.value,onToggle:()=>s(i)}):p(F7,{config:r}))))}}),q7=M({name:"SideBar",slots:Object,setup(e,{slots:t}){const n=Ht(),s=tl(),r=Fe();return we(()=>{de(()=>n.hash,i=>{const a=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${i}"]`);if(!a)return;const{top:o,height:l}=r.value.getBoundingClientRect(),{top:c,height:u}=a.getBoundingClientRect();c<o?a.scrollIntoView(!0):c+u>o+l&&a.scrollIntoView(!1)},{immediate:!0})}),()=>{var i,a,o;return p("aside",{ref:r,key:"sidebar",id:"sidebar",class:"vp-sidebar","vp-sidebar":""},[(i=t.top)==null?void 0:i.call(t),((a=t.default)==null?void 0:a.call(t))??p(Lu,{config:s.value}),(o=t.bottom)==null?void 0:o.call(t)])}}}),nl=M({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:t}){const n=xn(),s=ye(),r=Ut(),i=ce(),{isMobile:a,isPC:o}=Cr(),l=it(),[c,u]=sr(!1),[h,d]=sr(!1),m=tl(),g=J(!1),w=A(()=>e.noNavbar||s.value.navbar===!1||i.value.navbar===!1?!1:!!(i.value.logo??i.value.repo??i.value.navbar)),b=A(()=>e.noSidebar?!1:s.value.sidebar!==!1&&m.value.length!==0&&!s.value.home),y=A(()=>s.value.externalLinkIcon??r.value.externalLinkIcon??!0),E=A(()=>!e.noToc&&!s.value.home&&(s.value.toc??i.value.toc??!0)),v={x:0,y:0},x=C=>{v.x=C.changedTouches[0].clientX,v.y=C.changedTouches[0].clientY},L=C=>{const Q=C.changedTouches[0].clientX-v.x,V=C.changedTouches[0].clientY-v.y;Math.abs(Q)>Math.abs(V)*1.5&&Math.abs(Q)>40&&(Q>0&&v.x<=80?u(!0):u(!1))};let j=0;return Ne("scroll",E4(()=>{const C=window.scrollY;C<=58||C<j?g.value=!1:j+200<C&&!c.value&&(g.value=!0),j=C},300,!0)),de(a,C=>{C||u(!1)}),we(()=>{const C=So(document.body);de(c,V=>{C.value=V});const Q=n.afterEach(()=>{u(!1)});wn(()=>{C.value=!1,Q()})}),()=>p(Et("GlobalEncrypt")?Dt("GlobalEncrypt"):Ii,()=>p("div",{class:["theme-container",{"hide-navbar":g.value,"no-navbar":!w.value,"sidebar-collapsed":!a.value&&!o.value&&h.value,"sidebar-open":a.value&&c.value,"no-sidebar":!b.value&&!t.sidebar&&!t.sidebarTop&&!t.sidebarBottom,"external-link-icon":y.value,pure:l.value,"has-toc":E.value},e.containerClass,s.value.containerClass??""],"vp-container":"",onTouchStart:x,onTouchEnd:L},[w.value?p(L7,{onToggleSidebar:()=>u()},{startBefore:t.navbarStartBefore?()=>t.navbarStartBefore():null,startAfter:t.navbarStartAfter?()=>t.navbarStartAfter():null,centerBefore:t.navbarCenterBefore?()=>t.navbarCenterBefore():null,centerAfter:t.navbarCenterAfter?()=>t.navbarCenterAfter():null,endBefore:t.navbarEndBefore?()=>t.navbarEndBefore():null,endAfter:t.navbarEndAfter?()=>t.navbarEndAfter():null,screenTop:t.navScreenTop?()=>t.navScreenTop():null,screenBottom:t.navScreenBottom?()=>t.navScreenBottom():null}):null,p(ds,{name:"fade"},()=>c.value?p("div",{class:"vp-sidebar-mask",onClick:()=>u(!1)}):null),p(ds,{name:"fade"},()=>a.value?null:p("div",{class:"toggle-sidebar-wrapper",onClick:()=>d()},p("span",{class:["arrow",h.value?"end":"start"]}))),p(q7,{},{default:t.sidebar?()=>t.sidebar():null,top:t.sidebarTop?()=>t.sidebarTop():null,bottom:t.sidebarBottom?()=>t.sidebarBottom():null}),t.default(),p(E7)]))}});const le=M({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:t}){const n=r=>{r.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,r.style.transform="translateY(-20px)",r.style.opacity="0"},s=r=>{r.style.transform="translateY(0)",r.style.opacity="1"};return()=>{const r={name:"drop",appear:e.appear,onAppear:n,onAfterAppear:s,onEnter:n,onAfterEnter:s,onBeforeLeave:n},i=()=>t.default();return e.type==="group"?p(A1,r,i):p(ds,r,i)}}}),_s=({custom:e})=>p(Z1,{class:["theme-hope-content",{custom:e}],"vp-content":""});_s.displayName="MarkdownContent",_s.props={custom:Boolean};const Fu=()=>p(me,{name:"author"},()=>p("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));Fu.displayName="AuthorIcon";const Vu=()=>p(me,{name:"calendar"},()=>p("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Vu.displayName="CalendarIcon";const qu=()=>p(me,{name:"category"},()=>p("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));qu.displayName="CategoryIcon";const ju=()=>p(me,{name:"print"},()=>p("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));ju.displayName="PrintIcon";const $u=()=>p(me,{name:"tag"},()=>p("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));$u.displayName="TagIcon";const Mu=()=>p(me,{name:"timer"},()=>p("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Mu.displayName="TimerIcon";const Nu=()=>p(me,{name:"word"},()=>[p("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),p("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Nu.displayName="WordIcon";const Pn=()=>{const e=ce();return A(()=>e.value.metaLocales)};var j7=M({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0}},setup(e){const t=Pn(),n=it();return()=>e.author.length?p("span",{class:"page-author-info","aria-label":`${t.value.author}${n.value?"":"🖊"}`,...n.value?{}:{"data-balloon-pos":"up"}},[p(Fu),p("span",e.author.map(s=>s.url?p("a",{class:"page-author-item",href:s.url,target:"_blank",rel:"noopener noreferrer"},s.name):p("span",{class:"page-author-item"},s.name))),p("span",{property:"author",content:e.author.map(s=>s.name).join(", ")})]):null}}),$7=M({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0}},setup(e){const t=Pn(),n=Gn(),s=it();return()=>e.category.length?p("span",{class:"page-category-info","aria-label":`${t.value.category}${s.value?"":"🌈"}`,...s.value?{}:{"data-balloon-pos":"up"}},[p(qu),e.category.map(({name:r,path:i})=>p("span",{class:["page-category-item",{[`color${Br(r,Number(Kn.colorNumber))}`]:!s.value,clickable:i}],role:i?"navigation":"",onClick:()=>{i&&n(i)}},r)),p("meta",{property:"articleSection",content:e.category.map(({name:r})=>r).join(",")})]):null}}),M7=M({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""}},setup(e){const t=Oo(),n=Pn(),s=it();return()=>e.date?p("span",{class:"page-date-info","aria-label":`${n.value.date}${s.value?"":"📅"}`,...s.value?{}:{"data-balloon-pos":"up"}},[p(Vu),p("span",{"data-allow-mismatch":"text"},e.localizedDate||e.date.toLocaleDateString(t.value)),p("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),N7=M({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const t=Pn();return()=>e.isOriginal?p("span",{class:"page-original-info"},t.value.origin):null}}),H7=M({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null}},setup(e){const t=Pn(),n=it(),s=A(()=>{if(!e.readingTime)return null;const{minutes:r}=e.readingTime;return r<1?"PT1M":`PT${Math.round(r)}M`});return()=>{var r,i;return(r=e.readingTimeLocale)!=null&&r.time?p("span",{class:"page-reading-time-info","aria-label":`${t.value.readingTime}${n.value?"":"⌛"}`,...n.value?{}:{"data-balloon-pos":"up"}},[p(Mu),p("span",(i=e.readingTimeLocale)==null?void 0:i.time),p("meta",{property:"timeRequired",content:s.value})]):null}}}),z7=M({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]}},setup(e){const t=Pn(),n=Gn(),s=it();return()=>e.tag.length?p("span",{class:"page-tag-info","aria-label":`${t.value.tag}${s.value?"":"🏷"}`,...s.value?{}:{"data-balloon-pos":"up"}},[p($u),e.tag.map(({name:r,path:i})=>p("span",{class:["page-tag-item",{[`color${Br(r,Number(Kn.colorNumber))}`]:!s.value,clickable:i}],role:i?"navigation":"",onClick:()=>{i&&n(i)}},r)),p("meta",{property:"keywords",content:e.tag.map(({name:r})=>r).join(",")})]):null}}),U7=M({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null}},setup(e){const t=Pn(),n=it();return()=>{var s,r,i;return(s=e.readingTimeLocale)!=null&&s.words?p("span",{class:"page-word-info","aria-label":`${t.value.words}${n.value?"":"🔠"}`,...n.value?{}:{"data-balloon-pos":"up"}},[p(Nu),p("span",(r=e.readingTimeLocale)==null?void 0:r.words),p("meta",{property:"wordCount",content:(i=e.readingTime)==null?void 0:i.words})]):null}}}),Hu=M({name:"PageInfo",components:{AuthorInfo:j7,CategoryInfo:$7,DateInfo:M7,OriginalInfo:N7,PageViewInfo:ni,ReadingTimeInfo:H7,TagInfo:z7,WordInfo:U7},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const t=it();return()=>e.items?p("div",{class:"page-info"},e.items.map(n=>p(Dt(`${n}Info`),{...e.info,isPure:t.value}))):null}}),K7=M({name:"PrintButton",setup(){const e=Ut(),t=ce();return()=>e.value.print===!1?null:p("button",{type:"button",class:"print-button",title:t.value.metaLocales.print,onClick:()=>{window.print()}},p(ju))}}),zu=M({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:t}){const n=Ht(),s=Ie(),r=Pn(),[i,a]=sr(),o=Fe(),l=J("-1.7rem"),c=h=>{var d;(d=o.value)==null||d.scrollTo({top:h,behavior:"smooth"})},u=()=>{if(o.value){const h=document.querySelector(".vp-toc-item.active");h?l.value=`${h.getBoundingClientRect().top-o.value.getBoundingClientRect().top+o.value.scrollTop}px`:l.value="-1.7rem"}else l.value="-1.7rem"};return we(()=>{de(()=>n.hash,h=>{if(o.value){const d=document.querySelector(`#toc a.vp-toc-link[href$="${h}"]`);if(!d)return;const{top:m,height:g}=o.value.getBoundingClientRect(),{top:w,height:b}=d.getBoundingClientRect();w<m?c(o.value.scrollTop+w-m):w+b>m+g&&c(o.value.scrollTop+w+b-m-g)}}),de(()=>n.fullPath,u,{flush:"post",immediate:!0})}),()=>{var g,w;const h=({title:b,level:y,slug:E})=>p($e,{to:`#${E}`,class:["vp-toc-link",`level${y}`],onClick:()=>{a()}},()=>b),d=(b,y)=>b.length&&y>0?p("ul",{class:"vp-toc-list"},b.map(E=>{const v=d(E.children,y-1);return[p("li",{class:["vp-toc-item",{active:n.hash===`#${E.slug}`}]},h(E)),v?p("li",v):null]})):null,m=e.items.length?d(e.items,e.headerDepth):s.value.headers?d(s.value.headers,e.headerDepth):null;return m?p("div",{class:"vp-toc-placeholder"},[p("aside",{id:"toc"},[(g=t.before)==null?void 0:g.call(t),p("div",{class:"vp-toc-header",onClick:()=>{a()}},[r.value.toc,p(K7),p("div",{class:["arrow",i.value?"down":"end"]})]),p("div",{class:["vp-toc-wrapper",i.value?"open":""],ref:o},[m,p("div",{class:"vp-toc-marker",style:{top:l.value}})]),(w=t.after)==null?void 0:w.call(t)])]):null}}}),sl=M({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=Ie(),n=ce(),s=Fe(),r=({target:i})=>{const a=document.querySelector(i.hash);if(a){const o=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",o)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",o),a.focus(),window.scrollTo(0,0)}};return we(()=>{de(()=>t.value.path,()=>s.value.focus())}),()=>[p("span",{ref:s,tabindex:"-1"}),p("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:r},n.value.routeLocales.skipToContent)]}});let fa=null,Rs=null;const Wa={wait:()=>fa,pending:()=>{fa=new Promise(e=>{Rs=e})},resolve:()=>{Rs==null||Rs(),fa=null,Rs=null}},rl=(e,{slots:t})=>p(ds,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:Wa.resolve,onBeforeLeave:Wa.pending},()=>t.default());rl.displayName="FadeSlideY";const G7=(e,t)=>{const n=e.replace(t,"/").split("/"),s=[];let r=To(t);return n.forEach((i,a)=>{a!==n.length-1?(r+=`${i}/`,s.push({link:r,name:i||"Home"})):i!==""&&(r+=i,s.push({link:r,name:i}))}),s},U0=(e,t)=>e===!1?e:Es(e)?{...e,link:di(e.link,!0,t).link}:Re(e)?di(e,!0,t):null,Ya=(e,t,n)=>{const s=e.findIndex(i=>i.link===t);if(s!==-1){const i=e[s+n];return i?i.link?i:"prefix"in i&&!At(i.prefix).notFound?{...i,link:i.prefix}:null:null}for(const i of e)if("children"in i){const a=Ya(i.children,t,n);if(a)return a}const r=e.findIndex(i=>"prefix"in i&&i.prefix===t);if(r!==-1){const i=e[r+n];return i?i.link?i:"prefix"in i&&!At(i.prefix).notFound?{...i,link:i.prefix}:null:null}return null},Q7=()=>{const e=ye(),t=ce(),n=tl(),s=Ht(),r=A(()=>{const a=U0(e.value.prev,s.path);return a===!1?null:a??(t.value.prevLink===!1?null:Ya(n.value,s.path,-1))}),i=A(()=>{const a=U0(e.value.next,s.path);return a===!1?null:a??(t.value.nextLink===!1?null:Ya(n.value,s.path,1))});return{prevLink:r,nextLink:i}},Xa=(e,{slots:t})=>{var h,d;const{bgImage:n,bgImageDark:s,bgImageStyle:r,color:i,description:a,image:o,imageDark:l,header:c,features:u=[]}=e;return p("div",{class:"vp-feature-wrapper"},[n?p("div",{class:["vp-feature-bg",{light:s}],style:[{"background-image":`url(${n})`},r]}):null,s?p("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${s})`},r]}):null,p("div",{class:"vp-feature",style:i?{color:i}:{}},[((h=t.image)==null?void 0:h.call(t,e))??[o?p("img",{class:["vp-feature-image",{light:l}],src:Ee(o),alt:""}):null,l?p("img",{class:"vp-feature-image dark",src:Ee(l),alt:""}):null],((d=t.info)==null?void 0:d.call(t,e))??[c?p("h2",{class:"vp-feature-header"},c):null,a?p("p",{class:"vp-feature-description",innerHTML:a}):null],u.length?p("div",{class:"vp-features"},u.map(({icon:m,title:g,details:w,link:b})=>{const y=[p("h3",{class:"vp-feature-title"},[p(Qe,{icon:m}),p("span",{innerHTML:g})]),p("p",{class:"vp-feature-details",innerHTML:w})];return b?ki(b)?p("a",{class:"vp-feature-item link",href:b,"aria-label":g,target:"_blank"},y):p($e,{class:"vp-feature-item link",to:b,"aria-label":g},()=>y):p("div",{class:"vp-feature-item"},y)})):null])])};Xa.displayName="FeaturePanel";var W7=M({name:"HeroInfo",slots:Object,setup(e,{slots:t}){const n=ye(),s=kr(),r=A(()=>n.value.heroFullScreen??!1),i=A(()=>{const{heroText:c,tagline:u}=n.value;return{text:c??s.value.title??"Hello",tagline:u??s.value.description??"",isFullScreen:r.value}}),a=A(()=>{const{heroText:c,heroImage:u,heroImageDark:h,heroAlt:d,heroImageStyle:m}=n.value;return{image:u?Ee(u):null,imageDark:h?Ee(h):null,imageStyle:m,alt:d??c??"",isFullScreen:r.value}}),o=A(()=>{const{bgImage:c,bgImageDark:u,bgImageStyle:h}=n.value;return{image:Re(c)?Ee(c):null,imageDark:Re(u)?Ee(u):null,bgStyle:h,isFullScreen:r.value}}),l=A(()=>n.value.actions??[]);return()=>{var c,u,h;return p("header",{class:["vp-hero-info-wrapper",{fullscreen:r.value}]},[((c=t.bg)==null?void 0:c.call(t,o.value))??[o.value.image?p("div",{class:["vp-hero-mask",{light:o.value.imageDark}],style:[{"background-image":`url(${o.value.image})`},o.value.bgStyle]}):null,o.value.imageDark?p("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${o.value.imageDark})`},o.value.bgStyle]}):null],p("div",{class:"vp-hero-info"},[((u=t.logo)==null?void 0:u.call(t,a.value))??p(le,{appear:!0,type:"group"},()=>{const{image:d,imageDark:m,imageStyle:g,alt:w}=a.value;return[d?p("img",{key:"light",class:["vp-hero-image",{light:m}],style:g,src:d,alt:w}):null,m?p("img",{key:"dark",class:"vp-hero-image dark",style:g,src:m,alt:w}):null]}),((h=t.info)==null?void 0:h.call(t,i.value))??p("div",{class:"vp-hero-infos"},[i.value.text?p(le,{appear:!0,delay:.04},()=>p("h1",{id:"main-title",class:"vp-hero-title"},i.value.text)):null,i.value.tagline?p(le,{appear:!0,delay:.08},()=>p("p",{id:"main-description",innerHTML:i.value.tagline})):null,l.value.length?p(le,{appear:!0,delay:.12},()=>p("p",{class:"vp-hero-actions"},l.value.map(d=>p(lt,{class:["vp-hero-action",d.type??"default","no-external-link-icon"],config:d},d.icon?{before:()=>p(Qe,{icon:d.icon})}:{})))):null])])])}}});const Uu=(e,{slots:t})=>{var d,m,g;const{bgImage:n,bgImageDark:s,bgImageStyle:r,color:i,description:a,image:o,imageDark:l,header:c,highlights:u=[],type:h="un-order"}=e;return p("div",{class:"vp-highlight-wrapper",style:i?{color:i}:{}},[n?p("div",{class:["vp-highlight-bg",{light:s}],style:[{"background-image":`url(${n})`},r]}):null,s?p("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${s})`},r]}):null,p("div",{class:"vp-highlight"},[((d=t.image)==null?void 0:d.call(t,e))??[o?p("img",{class:["vp-highlight-image",{light:l}],src:Ee(o),alt:""}):null,l?p("img",{class:"vp-highlight-image dark",src:Ee(l),alt:""}):null],((m=t.info)==null?void 0:m.call(t,e))??[p("div",{class:"vp-highlight-info-wrapper"},p("div",{class:"vp-highlight-info"},[c?p("h2",{class:"vp-highlight-header",innerHTML:c}):null,a?p("p",{class:"vp-highlight-description",innerHTML:a}):null,((g=t.highlights)==null?void 0:g.call(t,u))??p(h==="order"?"ol":h==="no-order"?"dl":"ul",{class:"vp-highlights"},u.map(({icon:w,title:b,details:y,link:E})=>{const v=[p(h==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[w?p(Qe,{class:"vp-highlight-icon",icon:w}):null,p("span",{innerHTML:b})]),y?p(h==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:y}):null];return p(h==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:E}]},E?ki(E)?p("a",{class:"vp-highlight-item link",href:E,"aria-label":b,target:"_blank"},v):p($e,{class:"vp-highlight-item link",to:E,"aria-label":b},()=>v):p("div",{class:"vp-highlight-item"},v))}))]))]])])};Uu.displayName="HighlightPanel";var Y7=M({name:"HomePage",slots:Object,setup(e,{slots:t}){const n=ye(),s=A(()=>{const{features:i}=n.value;return La(i)?i:null}),r=A(()=>{const{highlights:i}=n.value;return La(i)?i:null});return()=>{var i,a,o,l;return p("main",{id:"main-content",class:"vp-page vp-project-home","aria-labelledby":n.value.heroText===null?"":"main-title"},[(i=t.top)==null?void 0:i.call(t),p(W7),((a=r.value)==null?void 0:a.map(c=>"features"in c?p(Xa,c):p(Uu,c)))??(s.value?p(le,{appear:!0,delay:.24},()=>p(Xa,{features:s.value})):null),(o=t.center)==null?void 0:o.call(t),p(le,{appear:!0,delay:.32},()=>p(_s)),(l=t.bottom)==null?void 0:l.call(t)])}}}),X7=M({name:"BreadCrumb",setup(){const e=Ie(),t=zt(),n=ye(),s=ce(),r=Fe([]),i=A(()=>(n.value.breadcrumb??s.value.breadcrumb??!0)&&r.value.length>1),a=A(()=>n.value.breadcrumbIcon??s.value.breadcrumbIcon??!0),o=()=>{const l=G7(e.value.path,t.value).map(({link:c,name:u})=>{const{path:h,meta:d,notFound:m}=At(c);return m||d[rt.breadcrumbExclude]?null:{title:d[rt.shortTitle]||d[rt.title]||u,icon:d[rt.icon],path:h}}).filter(c=>c!==null);l.length>1&&(r.value=l)};return we(()=>{de(()=>e.value.path,o,{immediate:!0})}),()=>p("nav",{class:["vp-breadcrumb",{disable:!i.value}]},i.value?p("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},r.value.map((l,c)=>p("li",{class:{"is-active":r.value.length-1===c},property:"itemListElement",typeof:"ListItem"},[p($e,{to:l.path,property:"item",typeof:"WebPage"},()=>[a.value?p(Qe,{icon:l.icon}):null,p("span",{property:"name"},l.title||"Unknown")]),p("meta",{property:"position",content:c+1})]))):[])}}),J7=M({name:"PageNav",setup(){const e=ce(),t=Gn(),{prevLink:n,nextLink:s}=Q7();return Ne("keydown",r=>{r.altKey&&(r.key==="ArrowRight"?s.value&&(t(s.value.link),r.preventDefault()):r.key==="ArrowLeft"&&n.value&&(t(n.value.link),r.preventDefault()))}),()=>n.value||s.value?p("nav",{class:"vp-page-nav"},[n.value?p(lt,{class:"prev",config:n.value},()=>{var r,i;return[p("div",{class:"hint"},[p("span",{class:"arrow start"}),e.value.metaLocales.prev]),p("div",{class:"link"},[p(Qe,{icon:(r=n.value)==null?void 0:r.icon}),(i=n.value)==null?void 0:i.text])]}):null,s.value?p(lt,{class:"next",config:s.value},()=>{var r,i;return[p("div",{class:"hint"},[e.value.metaLocales.next,p("span",{class:"arrow end"})]),p("div",{class:"link"},[(r=s.value)==null?void 0:r.text,p(Qe,{icon:(i=s.value)==null?void 0:i.icon})])]}):null]):null}});const Z7=()=>{const e=ce(),t=Ie(),n=ye();return A(()=>{var s;return n.value.contributors??e.value.contributors??!0?((s=t.value.git)==null?void 0:s.contributors)??null:null})},ev={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},tv=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:s,editLinkPattern:r})=>{if(!s)return null;const i=Xo(e);let a;return r?a=r:i!==null&&(a=ev[i]),a?a.replace(/:repo/u,zn(e)?e:`https://github.com/${e}`).replace(/:branch/u,t).replace(/:path/u,T1(`${To(n)}/${s}`)):null},nv=()=>{const e=ce(),t=Ie(),n=ye();return A(()=>{const{repo:s,docsRepo:r=s,docsBranch:i="main",docsDir:a="",editLink:o,editLinkPattern:l=""}=e.value;if(!(n.value.editLink??o??!0)||!r)return null;const c=tv({docsRepo:r,docsBranch:i,docsDir:a,editLinkPattern:l,filePathRelative:t.value.filePathRelative});return c?{text:e.value.metaLocales.editLink,link:c}:null})},sv=()=>{const e=kr(),t=ce(),n=Ie(),s=ye();return A(()=>{var r,i;return!(s.value.lastUpdated??t.value.lastUpdated??!0)||!((r=n.value.git)!=null&&r.updatedTime)?null:new Date((i=n.value.git)==null?void 0:i.updatedTime).toLocaleString(e.value.lang)})};var rv=M({name:"PageTitle",setup(){const e=Ie(),t=ye(),n=ce(),{info:s,items:r}=m7();return()=>p("div",{class:"vp-page-title"},[p("h1",[n.value.titleIcon===!1?null:p(Qe,{icon:t.value.icon}),e.value.title]),p(Hu,{info:s.value,...r.value===null?{}:{items:r.value}}),p("hr")])}});const Ku=()=>p(me,{name:"edit"},()=>[p("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),p("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Ku.displayName="EditIcon";var iv=M({name:"PageMeta",setup(){const e=ce(),t=nv(),n=sv(),s=Z7();return()=>{var i;const{metaLocales:r}=e.value;return p("footer",{class:"vp-page-meta"},[t.value?p("div",{class:"vp-meta-item edit-link"},p(lt,{class:"vp-meta-label",config:t.value},{before:()=>p(Ku)})):null,p("div",{class:"vp-meta-item git-info"},[n.value?p("div",{class:"update-time"},[p("span",{class:"vp-meta-label"},`${r.lastUpdated}: `),p("span",{class:"vp-meta-info","data-allow-mismatch":"text"},n.value)]):null,(i=s.value)!=null&&i.length?p("div",{class:"contributors"},[p("span",{class:"vp-meta-label"},`${r.contributors}: `),s.value.map(({email:a,name:o},l)=>[p("span",{class:"vp-meta-info",title:`email: ${a}`},o),l!==s.value.length-1?",":""])]):null])])}}}),av=M({name:"NormalPage",slots:Object,setup(e,{slots:t}){const n=ye(),{isDarkmode:s}=Dr(),r=ce(),i=A(()=>n.value.toc??r.value.toc??!0),a=A(()=>n.value.headerDepth??r.value.headerDepth??2);return()=>p("main",{id:"main-content",class:"vp-page"},p(Et("LocalEncrypt")?Dt("LocalEncrypt"):Ii,()=>{var o,l,c,u;return[(o=t.top)==null?void 0:o.call(t),n.value.cover?p("div",{class:"page-cover"},p("img",{src:Ee(n.value.cover),alt:"","no-view":""})):null,p(X7),p(rv),i.value?p(zu,{headerDepth:a.value},{before:t.tocBefore?()=>t.tocBefore():null,after:t.tocAfter?()=>t.tocAfter():null}):null,(l=t.contentBefore)==null?void 0:l.call(t),p(_s),(c=t.contentAfter)==null?void 0:c.call(t),p(iv),p(J7),Et("CommentService")?p(Dt("CommentService"),{darkmode:s.value}):null,(u=t.bottom)==null?void 0:u.call(t)]}))}}),ov=M({name:"PortfolioHero",slots:Object,setup(e,{slots:t}){const n=vu(),s=ye(),r=J(0),i=A(()=>{var d;return((d=s.value.titles)==null?void 0:d[r.value])??""}),a=J(""),o=A(()=>{const{name:d,avatar:m,avatarDark:g,avatarAlt:w,avatarStyle:b}=s.value;return{name:d??n.value.name,avatar:m?Ee(m):null,avatarDark:g?Ee(g):null,avatarStyle:b,alt:(w||d)??""}}),l=A(()=>{const{bgImage:d,bgImageDark:m,bgImageStyle:g}=s.value;return{image:Re(d)?Ee(d):null,imageDark:Re(m)?Ee(m):null,bgStyle:g}}),c=A(()=>{const{welcome:d,name:m,titles:g,medias:w}=s.value;return{name:m??n.value.name,welcome:d??"👋 Hi There, I'm",title:a.value,titles:g??[],medias:w??[]}}),u=()=>{a.value="";let d=0,m=!1;const g=async()=>{if(!m)if(a.value+=i.value[d],d+=1,await Nt(),d<i.value.length)setTimeout(()=>{g()},150);else{const w=c.value.titles.length;setTimeout(()=>{r.value=w<=1||r.value===c.value.titles.length-1?0:r.value+1},1e3)}};return g(),()=>{m=!0}};let h;return we(()=>{de(i,()=>{h==null||h(),h=u()},{immediate:!0})}),()=>{var d,m,g;return p("section",{id:"portfolio",class:["vp-portfolio",{bg:l.value.image}]},[((d=t.bg)==null?void 0:d.call(t,l.value))??[l.value.image?p("div",{class:["vp-portfolio-mask",{light:l.value.imageDark}],style:[{background:`url(${l.value.image}) center/cover no-repeat`},l.value.bgStyle]}):null,l.value.imageDark?p("div",{class:"vp-portfolio-mask dark",style:[{background:`url(${l.value.imageDark}) center/cover no-repeat`},l.value.bgStyle]}):null],((m=t.avatar)==null?void 0:m.call(t,o.value))??p("div",{class:"vp-portfolio-avatar"},[p(le,{delay:.04},()=>{const{avatarDark:w,name:b,alt:y,avatarStyle:E}=o.value;return[p("img",{key:"light",class:{light:w},src:o.value.avatar,title:b,alt:y,style:E}),w?p("img",{key:"dark",class:"dark",src:w,title:b,alt:y,style:E}):null]})]),p("div",{class:"vp-portfolio-container"},((g=t.info)==null?void 0:g.call(t,c.value))??p("div",{class:"vp-portfolio-info"},[p(le,{appear:!0,delay:.08},()=>p("h6",{class:"vp-portfolio-welcome"},c.value.welcome)),p(le,{appear:!0,delay:.12},()=>p("h1",{class:"vp-portfolio-name",id:"main-title"},c.value.name)),p(le,{appear:!0,delay:.16},()=>p("h2",{class:"vp-portfolio-title"},a.value)),p(le,{appear:!0,delay:.2},()=>c.value.medias.length?p("div",{class:"vp-portfolio-medias"},c.value.medias.map(({name:w,url:b,icon:y})=>p("a",{class:"vp-portfolio-media",href:b,rel:"noopener noreferrer",target:"_blank",title:w},p(Qe,{icon:y})))):Et("SocialMedias")?p(Dt("SocialMedias")):null)]))])}}}),lv=M({name:"PortfolioHome",setup(){const e=ye(),t=A(()=>e.value.content??"portfolio");return()=>p("main",{id:"main-content",class:"vp-page vp-portfolio-home","aria-labelledby":"main-title"},[p(ov),t.value==="none"?null:p("div",{},p(le,{appear:!0,delay:.24},()=>p(_s,{class:{"vp-portfolio-content":t.value==="portfolio"}})))])}}),pv=M({name:"Layout",slots:Object,setup(e,{slots:t}){const n=Ut(),s=ce(),r=Ie(),i=ye(),a=it(),{isMobile:o}=Cr(),l=A(()=>{var c,u;return((c=s.value.blog)==null?void 0:c.sidebarDisplay)??((u=n.value.blog)==null?void 0:u.sidebarDisplay)??"mobile"});return()=>[p(sl),p(nl,{},{default:()=>{var c;return((c=t.default)==null?void 0:c.call(t))??(i.value.portfolio?p(lv):i.value.home?p(Y7):p(a.value?Ii:rl,()=>p(av,{key:r.value.path},{top:t.top?()=>t.top():null,bottom:t.bottom?()=>t.bottom():null,contentBefore:t.contentBefore?()=>t.contentBefore():null,contentAfter:t.contentAfter?()=>t.contentAfter():null,tocBefore:t.tocBefore?()=>t.tocBefore():null,tocAfter:t.tocAfter?()=>t.tocAfter():null})))},navScreenBottom:l.value==="none"&&Et("BloggerInfo")?()=>p(Dt("BloggerInfo")):null,sidebar:!o.value&&l.value==="always"&&Et("BloggerInfo")?()=>p(Dt("BloggerInfo")):null})]}}),cv=M({name:"NotFoundHint",setup(){const e=ce(),t=()=>{const n=e.value.routeLocales.notFoundMsg;return n[Math.floor(Math.random()*n.length)]};return()=>p("div",{class:"not-found-hint"},[p("p",{class:"error-code"},"404"),p("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),p("p",{class:"error-hint"},t())])}}),uv=M({name:"NotFound",slots:Object,setup(e,{slots:t}){const n=xn(),s=zt(),r=ce();return()=>[p(sl),p(nl,{noSidebar:!0},()=>{var i;return p("main",{id:"main-content",class:"vp-page not-found"},((i=t.default)==null?void 0:i.call(t))??[p(cv),p("div",{class:"actions"},[p("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},r.value.routeLocales.back),p("button",{type:"button",class:"action-button",onClick:()=>{n.push(r.value.home??s.value)}},r.value.routeLocales.home)])])})]}});const hv={Baidu:'<svg xmlns="http://www.w3.org/2000/svg" class="icon baidu-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#2319DC"/><path fill="#FFF" d="M320 528c65-14 56-92 54-109-3-26-34-72-76-68-52 4-60 81-60 81-7 35 17 110 82 96m121-131c36 0 65-41 65-92 0-52-29-93-65-93s-65 41-65 93c0 51 29 92 65 92m155 7c48 6 79-46 86-85 6-38-25-84-59-91-35-8-77 46-81 82-5 44 6 87 54 94m191 65c0-19-15-75-73-75-57 0-65 53-65 91 0 35 3 85 75 84 71-2 63-81 63-100m-73 163s-74-57-118-119c-59-92-142-55-170-8s-72 76-78 84-90 53-71 135c18 83 83 81 83 81s49 5 104-7c56-13 104 3 104 3s131 43 166-41c36-84-20-128-20-128"/><path fill="#2319DC" d="M453 552v56h-45s-46 3-61 54c-6 35 4 55 6 59s17 29 53 37h85V553zm-1 172h-34s-24-1-31-29c-4-12 0-26 2-31 2-6 10-19 26-23h37zm60-111v107s2 27 39 37h98V613h-42v108h-40s-13-2-16-12v-97z"/></svg>',BiliBili:'<svg xmlns="http://www.w3.org/2000/svg" class="icon bilibili-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1296db"/><path fill="#fff" d="M745.363 177.725a47 47 0 0 1 0 66.3L702.5 286.85h44A141 141 0 0 1 887 427.512v281.25a141 141 0 0 1-141 140.626H277.25A141 141 0 0 1 137 708.763v-281.25a141 141 0 0 1 141-141h43.725l-42.788-42.825a47 47 0 1 1 66.263-66.3l99.45 99.45c2.963 2.962 5.438 6.187 7.425 9.637h120.487c1.988-3.45 4.5-6.75 7.463-9.675l99.413-99.45a47 47 0 0 1 66.3 0zm1.012 203.25h-468.75a47 47 0 0 0-46.763 43.388l-.112 3.525v281.25c0 24.712 19.125 44.962 43.387 46.724l3.488.15h468.75a47 47 0 0 0 46.763-43.387l.112-3.487v-281.25c0-26-21-47-47-46.876zm-375 93.75c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47zm281.25 0c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47z"/></svg>',Email:'<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>',Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',Gitlab:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitlab-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#E8F0FF"/><path fill="#E24329" d="m512 808 110-340H402z"/><path fill="#FC6D26" d="M512 808 402 468H247z"/><path fill="#E24329" d="M247 468h155l-67-204c-4-11-19-11-22 0z"/><path fill="#FC6D26" d="m512 808 110-340h156z"/><path fill="#FCA326" d="m778 468 33 104c3 10-1 19-9 25L512 808z"/><path fill="#E24329" d="M778 468H622l68-204c3-11 18-11 21 0z"/><path fill="#FCA326" d="M512 808 222 597c-8-5-12-16-9-25l34-104z"/></svg>',QQ:'<svg xmlns="http://www.w3.org/2000/svg" class="icon qq-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5eaade"/><path fill="#fff" d="M805.25 585.542c-15-48.188-32.25-88.688-58.781-154.97 4.125-174.093-68.25-314.905-234.938-314.905-168.562 0-239.344 143.625-234.844 314.906-26.625 66.375-43.78 106.594-58.78 154.969-31.876 102.656-21.563 145.125-13.688 146.062 16.875 2.063 65.718-77.25 65.718-77.25 0 45.938 23.625 105.844 74.813 149.063-24.75 7.593-80.344 28.03-67.125 50.437 10.688 18.094 183.938 11.531 233.906 5.906 49.969 5.625 223.219 12.188 233.906-5.906 13.22-22.312-42.468-42.844-67.125-50.437 51.188-43.313 74.813-103.22 74.813-149.063 0 0 48.844 79.313 65.719 77.25 7.969-1.031 18.281-43.5-13.594-146.062z"/></svg>'},dv={category:{"/":{path:"/category/",map:{Guide:{path:"/category/guide/",indexes:[0]},Apple:{path:"/category/apple/",indexes:[1,2,3,4]},Fruit:{path:"/category/fruit/",indexes:[5,6,1,2]},Banana:{path:"/category/banana/",indexes:[7,8,5,6]}}}},tag:{"/":{path:"/tag/",map:{"Page config":{path:"/tag/page-config/",indexes:[0]},Guide:{path:"/tag/guide/",indexes:[0]},red:{path:"/tag/red/",indexes:[1,2,3,4]},big:{path:"/tag/big/",indexes:[1,2,3,4]},round:{path:"/tag/round/",indexes:[1,2,3,4]},yellow:{path:"/tag/yellow/",indexes:[7,8,5,6]},curly:{path:"/tag/curly/",indexes:[7,8,5,6]},long:{path:"/tag/long/",indexes:[7,8,5,6]}}}}},Gu=["/posts/page.html","/posts/%E5%A5%BD%E7%8E%A9%E7%9A%84/4.html","/posts/%E5%A5%BD%E7%8E%A9%E7%9A%84/3.html","/posts/%E5%A5%BD%E7%8E%A9%E7%9A%84/2.html","/posts/%E5%A5%BD%E7%8E%A9%E7%9A%84/1.html","/posts/%E5%A5%BD%E7%9C%8B%E7%9A%84/2.html","/posts/%E5%A5%BD%E7%9C%8B%E7%9A%84/1.html","/posts/%E5%A5%BD%E7%9C%8B%E7%9A%84/4.html","/posts/%E5%A5%BD%E7%9C%8B%E7%9A%84/3.html","/posts/tools.html","/posts/vuepress-plugins.html","/posts/2024-10-07.html","/posts/2024-10-06.html","/posts/2024-10-08.html","/posts/2024-10-09.html","/posts/2024-10-10.html","/posts/2024-10-11.html","/posts/2024-10-12.html","/posts/2024-10-13.html","/posts/2024-10-14.html","/posts/2024-10-15.html","/posts/2024-10-18.html","/posts/2024-10-19.html","/posts/2024-10-20.html","/posts/2024-10-21.html","/posts/2024-10-22.html","/posts/2024-10-23.html","/posts/2024-10-24.html","/posts/2024-10-25.html","/posts/2024-10-26.html","/posts/2024-10-27.html","/posts/2024-10-28.html","/posts/2024-10-29.html","/posts/2024-10-30.html","/posts/2024-10-31.html","/posts/2024-11-01.html","/posts/2024-11-02.html","/posts/2024-11-03.html","/posts/2024-11-04.html","/posts/2024-11-05.html","/posts/2024-11-06.html","/posts/2024-11-07.html","/posts/2024-11-08.html","/posts/2024-11-09.html","/posts/2024-11-10.html","/posts/2024-11-11.html","/posts/2024-11-12.html","/posts/2024-11-13.html","/posts/2024-11-14.html","/posts/2024-11-15.html","/posts/2024-11-16.html","/posts/2024-11-17.html","/posts/2024-11-18.html","/posts/2024-11-19.html","/posts/2024-11-20.html","/posts/2024-11-21.html","/posts/2024-11-22.html","/posts/2024-11-23.html","/posts/2024-11-24.html","/posts/2024-11-25.html","/posts/2024-11-26.html","/posts/2024-11-27.html","/posts/2024-11-28.html","/posts/2024-11-29.html","/posts/2024-11-30.html","/posts/2024-12-01.html","/posts/2024-12-02.html","/posts/2024-12-03.html","/posts/2024-12-04.html","/posts/2024-12-05.html","/posts/2024-12-06.html","/posts/2024-12-07.html","/posts/2024-12-08.html","/posts/2024-12-09.html","/posts/2024-12-10.html","/posts/2024-12-11.html","/posts/2024-12-12.html","/posts/2024-12-13.html","/posts/2024-12-14.html","/posts/2024-12-15.html","/posts/2024-12-16.html","/posts/2024-12-17.html","/posts/2024-12-18.html","/posts/2024-12-19.html","/posts/2024-12-20.html","/posts/2024-12-21.html","/posts/2024-12-22.html","/posts/2024-12-23.html","/posts/2024-12-24.html","/posts/2024-12-25.html","/posts/2024-12-26.html","/posts/2024-12-27.html","/posts/2024-12-28.html","/posts/2024-12-29.html","/posts/2024-12-30.html","/posts/2024-12-31.html","/posts/2025-01-01.html","/posts/2025-01-02.html","/posts/2025-01-03.html","/posts/2025-01-04.html","/posts/2025-01-05.html","/posts/2025-01-06.html","/posts/2025-01-07.html","/posts/2025-01-08.html","/posts/2025-01-09.html","/posts/2025-01-10.html","/posts/2025-01-11.html","/posts/2025-01-12.html","/posts/2025-01-13.html","/posts/2025-01-14.html","/posts/2025-01-15.html","/posts/2025-01-16.html","/posts/2025-01-17.html","/posts/2025-01-18.html","/posts/2025-01-19.html","/posts/2025-01-20.html","/posts/2025-01-22.html","/posts/2025-01-23.html","/posts/2025-01-24.html","/posts/2025-04-06.html","/posts/2025-04-08.html","/posts/2025-04-09.html","/posts/2025-04-10.html","/posts/2025-04-11.html","/posts/2025-04-12.html","/posts/2025-04-14.html","/posts/2025-04-15.html","/posts/2025-04-16.html","/posts/2025-04-17.html","/posts/2025-04-18.html","/posts/2025-04-19.html","/posts/2025-04-20.html","/posts/2025-04-21.html","/posts/2025-04-22.html","/posts/2025-04-23.html","/posts/2025-04-24.html","/posts/2025-04-25.html","/posts/2025-04-26.html","/posts/2025-04-27.html","/posts/2025-05-01.html","/posts/2025-05-03.html","/posts/2025-05-04.html","/posts/2025-05-05.html","/posts/2025-05-06.html","/posts/2025-05-07.html","/posts/2025-05-08.html","/posts/2025-05-09.html","/posts/2025-05-10.html","/posts/2025-05-11.html","/posts/2025-05-13.html","/posts/2025-05-14.html","/posts/2025-05-15.html","/posts/2025-05-16.html","/posts/2025-05-17.html","/posts/2025-05-18.html","/posts/2025-05-19.html","/posts/2025-05-20.html","/posts/2025-05-21.html","/posts/2025-05-22.html","/posts/2025-05-23.html","/posts/2025-05-24.html","/posts/2025-05-25.html","/posts/2025-05-26.html","/posts/2025-05-27.html","/posts/2025-05-28.html","/posts/2025-05-29.html","/posts/2025-05-30.html","/posts/2025-05-31.html","/posts/2025-06-01.html","/posts/2025-06-02.html","/posts/2025-06-03.html","/posts/2025-06-04.html","/posts/2025-06-05.html","/posts/2025-06-06.html","/posts/2025-06-07.html","/posts/2025-06-08.html","/posts/2025-06-09.html","/posts/2025-06-10.html","/posts/2025-06-11.html","/posts/2025-06-12.html","/posts/2025-06-13.html","/posts/2025-06-14.html","/posts/2025-06-15.html","/posts/2025-06-16.html","/posts/2025-06-17.html","/posts/2025-06-18.html","/posts/2025-06-19.html","/posts/2025-06-20.html","/posts/2025-06-21.html","/posts/2025-06-22.html","/posts/2025-06-23.html","/posts/2025-06-24.html","/posts/2025-06-25.html","/posts/2025-06-26.html","/posts/2025-06-27.html","/posts/2025-06-28.html","/posts/2025-06-29.html","/posts/2025-06-30.html","/posts/2025-07-01.html","/posts/2025-07-02.html","/posts/2025-07-03.html","/posts/2025-07-04.html","/posts/2025-07-05.html","/posts/2025-07-06.html","/posts/2025-07-07.html","/posts/2025-07-08.html","/posts/2025-07-09.html","/posts/2025-07-10.html","/posts/2025-07-11.html","/posts/2025-07-12.html","/posts/2025-07-13.html","/posts/2025-07-14.html","/posts/2025-07-15.html","/posts/2025-07-16.html","/posts/2025-07-17.html","/posts/2025-07-18.html","/posts/2025-07-19.html","/posts/2025-07-20.html","/posts/2025-07-21.html","/posts/2025-07-22.html","/posts/2025-07-23.html","/posts/2025-07-24.html","/posts/2025-07-25.html","/posts/2025-07-26.html","/posts/2025-07-27.html","/posts/2025-07-28.html","/posts/2025-07-29.html","/posts/2025-07-30.html","/posts/2025-07-31.html","/posts/2025-08-01.html","/posts/2025-08-02.html","/posts/2025-08-03.html","/posts/2025-08-04.html","/posts/2025-08-05.html","/posts/2025-08-06.html","/posts/2025-08-07.html","/posts/2025-08-08.html","/posts/2025-08-09.html","/posts/2025-08-10.html","/posts/2025-08-11.html","/posts/2025-08-12.html","/posts/2025-08-13.html","/posts/2025-08-15.html","/posts/2025-08-16.html","/posts/2025-08-17.html","/posts/2025-08-18.html","/posts/2025-08-19.html","/posts/2025-08-20.html","/posts/2025-08-21.html","/posts/2025-08-22.html","/posts/2025-08-23.html","/posts/2025-08-24.html","/posts/2025-08-25.html","/posts/2025-08-27.html","/posts/2025-08-28.html","/posts/2025-08-29.html","/posts/2025-08-30.html","/posts/2025-08-31.html","/posts/2025-09-01.html","/posts/2025-09-02.html","/posts/2025-09-03.html","/posts/2025-09-04.html","/posts/2025-09-05.html","/posts/2025-09-06.html","/posts/2025-09-07.html","/posts/2025-09-08.html","/posts/2025-09-09.html","/posts/2025-09-10.html","/posts/2025-09-11.html","/posts/2025-09-12.html","/posts/2025-09-13.html","/posts/2025-09-14.html","/posts/2025-09-15.html","/posts/2025-09-16.html","/posts/2025-09-17.html","/posts/2025-09-18.html","/posts/2025-09-19.html","/posts/2025-09-20.html","/posts/2025-09-21.html","/posts/2025-09-22.html","/posts/2025-09-23.html","/posts/2025-09-24.html","/posts/2025-09-25.html","/posts/2025-09-26.html","/posts/2025-09-27.html","/posts/2025-09-28.html","/posts/2025-09-29.html","/posts/2025-09-30.html","/posts/2025-10-01.html","/posts/2025-10-02.html","/posts/2025-10-03.html","/posts/2025-10-04.html","/posts/2025-10-05.html","/posts/2025-10-06.html","/posts/2025-10-07.html","/posts/2025-10-08.html","/posts/2025-10-09.html","/posts/2025-10-10.html","/posts/2025-10-11.html","/posts/2025-10-12.html","/posts/2025-10-13.html","/posts/2025-10-14.html","/posts/2025-10-16.html","/posts/2025-10-17.html","/posts/2025-10-18.html","/posts/2025-10-19.html","/posts/2025-10-20.html","/posts/2025-10-21.html","/posts/2025-10-22.html","/posts/2025-10-23.html","/posts/2025-10-24.html","/posts/2025-10-25.html","/posts/2025-10-26.html","/posts/2025-10-27.html","/posts/2025-10-28.html","/posts/2025-10-29.html","/posts/2025-10-30.html","/posts/2025-10-31.html","/posts/2025-11-01.html","/posts/2025-11-02.html","/posts/2025-11-03.html","/posts/2025-11-04.html","/posts/2025-11-05.html","/posts/2025-11-06.html","/posts/2025-11-07.html","/posts/2025-11-08.html","/posts/2025-11-09.html","/posts/2025-11-10.html","/posts/2025-11-11.html","/posts/2025-11-12.html","/posts/2025-11-13.html","/posts/2025-11-14.html","/posts/2025-11-15.html","/posts/2025-11-16.html","/posts/2025-11-18.html","/posts/2025-11-19.html","/posts/2025-11-20.html","/posts/2025-11-21.html","/posts/2025-11-22.html","/posts/2025-11-23.html","/posts/2025-11-24.html","/posts/2025-11-25.html","/posts/2025-11-26.html","/posts/2025-11-27.html","/posts/2025-11-28.html","/posts/2025-11-29.html","/posts/2025-11-30.html","/posts/2025-12-01.html","/posts/2025-12-02.html","/posts/2025-12-03.html","/posts/2025-12-05.html","/posts/2025-12-06.html","/posts/2025-12-07.html","/posts/2025-12-08.html","/posts/2025-12-09.html","/posts/2025-12-10.html","/posts/2025-12-11.html","/posts/2025-12-12.html","/posts/2025-12-13.html","/posts/2025-12-14.html","/posts/2025-12-15.html","/posts/2025-12-16.html","/posts/2025-12-17.html","/posts/2025-12-18.html","/posts/2025-12-19.html","/posts/2025-12-20.html","/posts/2025-12-21.html","/posts/2025-12-22.html","/posts/2025-12-23.html","/posts/2024-10-05.html","/posts/2024-10-16.html","/posts/2024-10-17.html","/posts/2025-04-07.html","/posts/2025-04-13.html","/posts/2025-04-30.html","/posts/2025-05-02.html","/posts/2025-05-12.html","/posts/2025-08-14.html","/posts/2025-08-26.html","/posts/2025-10-15.html","/posts/2025-11-17.html","/posts/2025-12-04.html","/posts/2025-12-24.html","/posts/2025-01-25.html","/posts/2025-04-28.html","/posts/2025-04-05.html","/posts/2024-10-04.html","/posts/2025-04-29.html","/posts/api.html","/posts/idea.html"],fv={article:{"/":{path:"/article/",indexes:[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,0,7,8,5,6,1,2,3,4,388,389]}},star:{"/":{path:"/star/",indexes:[5,3,0]}},timeline:{"/":{path:"/timeline/",indexes:[7,8,5,6,1,2,3,4,0]}}},Ja=Fe(dv);Hn(Ja);const Qu=e=>{const t=Ie(),n=ye(),s=zt();return A(()=>{var o;const r=e??((o=n.value.blog)==null?void 0:o.key)??"";if(!r)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!(r in Ja.value))throw new Error(`useBlogCategory: key ${r} is invalid`);const i=Ja.value[r][s.value],a={path:i.path,map:{}};for(const l in i.map){const c=i.map[l];a.map[l]={path:c.path,items:[]};for(const u of c.indexes){const{path:h,meta:d}=At(Gu[u]);a.map[l].items.push({path:h,info:d})}t.value.path===c.path&&(a.currentItems=a.map[l].items)}return a})},Za=Fe(fv);Hn(Za);const Ri=e=>{const t=ye(),n=zt();return A(()=>{var a;const s=e??((a=t.value.blog)==null?void 0:a.key)??"";if(!s)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!(s in Za.value))throw new Error(`useBlogType: key ${e} is invalid`);const r=Za.value[s][n.value],i={path:r.path,items:[]};for(const o of r.indexes){const{path:l,meta:c}=At(Gu[o]);i.items.push({path:l,info:c})}return i})},il=()=>p(me,{name:"lock"},()=>p("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));il.displayName="LockIcon";var mv=[];const Wu=Symbol(""),al=()=>{const e=Oe(Wu);if(!e)throw new Error("useTimeline() is called without provider.");return e},gv=()=>{const e=Ri("timeline"),t=Oo(),n=A(()=>{const s=[];return e.value.items.forEach(({info:r,path:i})=>{const a=qo(r[Je.date]);if(a){const o=a.getFullYear();(!s[0]||s[0].year!==o)&&s.unshift({year:o,items:[]}),s[0].items.push({date:a.toLocaleDateString(t.value,{month:"numeric",day:"numeric"}),info:r,path:i})}}),{...e.value,config:s.reverse()}});Bt(Wu,n)},Yu=Symbol(""),Or=()=>{const e=Oe(Yu);if(!e)throw new Error("useArticles() is called without provider.");return e},vv=()=>{const e=Ri("article");Bt(Yu,e)},Xu=Symbol.for("categoryMap"),Ir=()=>{const e=Oe(Xu);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},_v=()=>{const e=Qu("category");Bt(Xu,e)},Ju=Symbol(""),ol=()=>{const e=Oe(Ju);if(!e)throw new Error("useStars() is called without provider.");return e},wv=()=>{const e=Ri("star");Bt(Ju,e)},Zu=Symbol.for("tagMap"),Rr=()=>{const e=Oe(Zu);if(!e)throw new Error("useTagMap() is called without provider.");return e},yv=()=>{const e=Qu("tag");Bt(Zu,e)},bv=()=>{vv(),_v(),wv(),yv(),gv()},Sr=()=>{const e=Ut(),t=ce();return A(()=>({...e.value.blog,...t.value.blog}))},kv=e=>{const t=ce();return A(()=>{const{[Je.author]:n}=e.value;return n?cr(n):n===!1?[]:cr(t.value.author,!1)})},Ev=e=>{const t=Ir();return A(()=>hu(e.value[Je.category]).map(n=>({name:n,path:t.value.map[n].path})))},Av=e=>{const t=Rr();return A(()=>du(e.value[Je.tag]).map(n=>({name:n,path:t.value.map[n].path})))},xv=e=>A(()=>{const{[Je.date]:t}=e.value;return qo(t)}),Pv=e=>{const t=ys(e,"info"),n=Sr(),s=kv(t),r=Ev(t),i=Av(t),a=xv(t),o=gu(),l=A(()=>({author:s.value,category:r.value,date:a.value,localizedDate:t.value[Je.localizedDate]??"",tag:i.value,isOriginal:t.value[Je.isOriginal]??!1,readingTime:t.value[Je.readingTime]??null,readingTimeLocale:t.value[Je.readingTime]&&o.value?mu(t.value[Je.readingTime],o.value):null,pageview:e.path})),c=A(()=>n.value.articleInfo);return{info:l,items:c}};var eh=M({name:"SocialMedias",setup(){const e=Sr(),t=it(),n=A(()=>xs(e.value.medias??{}).map(([s,r])=>typeof r=="string"?{name:s,icon:hv[s],link:r}:{name:s,...r}));return()=>n.value.length?p("div",{class:"vp-social-medias"},n.value.map(({name:s,icon:r,link:i})=>p("a",{class:"vp-social-media",href:i,rel:"noopener noreferrer",target:"_blank","aria-label":s||"",...t.value?{}:{"data-balloon-pos":"up"},innerHTML:zn(r)?`<img class="icon ${s}-icon" src="${r}">`:r}))):null}}),ll=M({name:"BloggerInfo",setup(){const e=Sr(),t=kr(),n=ce(),s=Or(),r=Ir(),i=Rr(),a=al(),o=Gn(),l=A(()=>{var d;return e.value.name??((d=cr(n.value.author)[0])==null?void 0:d.name)??t.value.title}),c=A(()=>e.value.avatar??n.value.logo),u=A(()=>n.value.blogLocales),h=A(()=>e.value.intro);return()=>{const{article:d,category:m,tag:g,timeline:w}=u.value,b=[[s.value.path,s.value.items.length,d],[r.value.path,It(r.value.map).length,m],[i.value.path,It(i.value.map).length,g],[a.value.path,a.value.items.length,w]];return p("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[p("div",{class:"vp-blogger",...h.value?{"aria-label":u.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>o(h.value)}:{}},[c.value?p("img",{class:"vp-blogger-avatar",src:Ee(c.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,l.value?p("div",{class:"vp-blogger-name",property:"name"},l.value):null,e.value.description?p("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,h.value?p("meta",{property:"url",content:Ee(h.value)}):null]),p("div",{class:"vp-blog-counts"},b.map(([y,E,v])=>p($e,{class:"vp-blog-count",to:y},()=>[p("div",{class:"count"},E),p("div",v)]))),p(eh)])}}});const pl=()=>p(me,{name:"category"},()=>p("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));pl.displayName="CategoryIcon";const cl=()=>p(me,{name:"tag"},()=>p("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));cl.displayName="TagIcon";const ul=()=>p(me,{name:"timeline"},()=>p("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));ul.displayName="TimelineIcon";const th=()=>p(me,{name:"slides"},()=>p("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));th.displayName="SlideIcon";const nh=()=>p(me,{name:"sticky"},()=>[p("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);nh.displayName="StickyIcon";const Si=()=>p(me,{name:"article"},()=>p("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));Si.displayName="ArticleIcon";const sh=()=>p(me,{name:"book"},()=>p("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));sh.displayName="BookIcon";const rh=()=>p(me,{name:"link"},()=>p("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));rh.displayName="LinkIcon";const ih=()=>p(me,{name:"project"},()=>p("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));ih.displayName="ProjectIcon";const ah=()=>p(me,{name:"friend"},()=>p("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));ah.displayName="FriendIcon";const eo=()=>p(me,{name:"slide-down"},()=>p("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));eo.displayName="SlideDownIcon";const oh=()=>p("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});oh.displayName="EmptyIcon";var Tv=M({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const n=ys(e,"info"),{info:s,items:r}=Pv(e);return()=>{var d,m,g;const{[rt.title]:i,[Je.type]:a,[Je.isEncrypted]:o=!1,[Je.cover]:l,[Je.excerpt]:c,[Je.sticky]:u}=n.value,h=s.value;return p("div",{class:"vp-article-wrapper"},p("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((d=t.cover)==null?void 0:d.call(t,{cover:l}))??(l?[p("img",{class:"vp-article-cover",src:Ee(l),alt:"",loading:"lazy"}),p("meta",{property:"image",content:Ee(l)})]:[]),u?p(nh):null,p($e,{to:e.path},()=>{var w;return((w=t.title)==null?void 0:w.call(t,{title:i,isEncrypted:o,type:a}))??p("header",{class:"vp-article-title"},[o?p(il):null,a===wu.slide?p(th):null,p("span",{property:"headline"},i)])}),((m=t.excerpt)==null?void 0:m.call(t,{excerpt:c}))??(c?p("div",{class:"vp-article-excerpt",innerHTML:c}):null),p("hr",{class:"vp-article-hr"}),((g=t.info)==null?void 0:g.call(t,{info:h}))??p(Hu,{info:h,...r.value?{items:r.value}:{}})]))}}}),Bv=M({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:t}){let n;const s=ce(),r=J(""),i=A(()=>s.value.paginationLocales),a=A(()=>Math.ceil(e.total/e.perPage)),o=A(()=>!!a.value&&a.value!==1),l=A(()=>a.value<7?!1:e.current>4),c=A(()=>a.value<7?!1:e.current<a.value-3),u=A(()=>{const{current:m}=e;let g=1,w=a.value;const b=[];a.value>=7&&(m<=4&&m<a.value-3?(g=1,w=5):m>4&&m>=a.value-3?(w=a.value,g=a.value-4):a.value>7&&(g=m-2,w=m+2));for(let y=g;y<=w;y++)b.push(y);return b}),h=m=>t("updateCurrentPage",m),d=m=>{const g=parseInt(m,10);g<=a.value&&g>0?h(g):n.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${i.value.errorText.replace(/\$page/gu,a.value.toString())}`)};return we(()=>{n=new s7}),()=>p("div",{class:"vp-pagination"},o.value?p("nav",{class:"vp-pagination-list"},[p("div",{class:"vp-pagination-number "},[e.current>1?p("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>h(e.current-1)},i.value.prev):null,l.value?[p("div",{role:"navigation",onClick:()=>h(1)},1),p("div",{class:"ellipsis"},"...")]:null,u.value.map(m=>p("div",{key:m,class:{active:e.current===m},role:"navigation",onClick:()=>h(m)},m)),c.value?[p("div",{class:"ellipsis"},"..."),p("div",{role:"navigation",onClick:()=>h(a.value)},a.value)]:null,e.current<a.value?p("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>h(e.current+1)},i.value.next):null]),p("div",{class:"vp-pagination-nav"},[p("label",{for:"navigation-text"},`${i.value.navigate}: `),p("input",{id:"navigation-text",value:r.value,onInput:({target:m})=>{r.value=m.value},onKeydown:m=>{m.key==="Enter"&&(m.preventDefault(),d(r.value))}}),p("button",{class:"vp-pagination-button",type:"button",role:"navigation",title:i.value.action,onClick:()=>d(r.value)},i.value.action)])]):[])}}),hl=M({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const t=Ht(),n=xn(),s=Sr(),r=J(1),i=A(()=>s.value.articlePerPage??10),a=A(()=>e.items.slice((r.value-1)*i.value,r.value*i.value)),o=async l=>{r.value=l;const c={...t.query};!(c.page===l.toString()||l===1&&!c.page)&&(l===1?delete c.page:c.page=l.toString(),await n.push({path:t.path,query:c}))};return we(()=>{const{page:l}=t.query;o(l?Number(l):1),de(r,()=>{const c=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,c)},100)})}),()=>p("div",{id:"article-list",class:"vp-article-list",role:"feed"},a.value.length?[...a.value.map(({info:l,path:c},u)=>p(le,{appear:!0,delay:u*.04},()=>p(Tv,{key:c,info:l,path:c}))),p(Bv,{current:r.value,perPage:i.value,total:e.items.length,onUpdateCurrentPage:o})]:p(oh))}}),lh=M({name:"CategoryList",setup(){const e=Ie(),t=Ir();return()=>p("ul",{class:"vp-category-list"},xs(t.value.map).sort(([,n],[,s])=>s.items.length-n.items.length).map(([n,{path:s,items:r}])=>p("li",{class:["vp-category",`color${Br(n,Number(Kn.colorNumber))}`,{active:s===e.value.path}]},p($e,{to:s},()=>[n,p("span",{class:"vp-category-count"},r.length)]))))}}),ph=M({name:"TagList",setup(){const e=ye(),t=Rr(),n=s=>{var r;return s===((r=e.value.blog)==null?void 0:r.name)};return()=>p("ul",{class:"vp-tag-list"},xs(t.value.map).sort(([,s],[,r])=>r.items.length-s.items.length).map(([s,{path:r,items:i}])=>p("li",{class:["vp-tag",`color${Br(s,Number(Kn.colorNumber))}`,{active:n(s)}]},p($e,{to:r},()=>[s,p("span",{class:"vp-tag-count"},i.length)]))))}}),Cv=M({name:"TimelineList",setup(){const e=ce(),t=al(),n=Gn(),s=A(()=>e.value.blogLocales.timeline);return()=>p("div",{class:"timeline-list-wrapper"},[p("div",{class:"timeline-list-title",onClick:()=>n(t.value.path)},[p(ul),p("span",{class:"num"},t.value.items.length),s.value]),p("hr"),p("div",{class:"timeline-content"},p("ul",{class:"timeline-list"},t.value.config.map(({year:r,items:i},a)=>p(le,{appear:!0,delay:.08*(a+1)},()=>p("li",[p("h3",{class:"timeline-year"},r),p("ul",{class:"timeline-year-wrapper"},i.map(({date:o,info:l,path:c})=>p("li",{class:"timeline-item"},[p("span",{class:"timeline-date"},o),p($e,{class:"timeline-title",to:c},()=>l[rt.title])])))])))))])}});const Dv={article:Si,category:pl,tag:cl,timeline:ul};var ch=M({name:"InfoList",setup(){const e=ce(),t=Or(),n=Ir(),s=A(()=>It(n.value.map).length),r=ol(),i=Rr(),a=A(()=>It(i.value.map).length),o=Gn(),l=J("article"),c=A(()=>e.value.blogLocales);return()=>p("div",{class:"vp-blog-infos"},[p("div",{class:"vp-blog-type-switcher"},xs(Dv).map(([u,h])=>p("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{l.value=u}},p("div",{class:["vp-blog-type-icon-wrapper",{active:l.value===u}],"aria-label":c.value[u],"data-balloon-pos":"up"},p(h))))),p(le,()=>l.value==="article"?p("div",{class:"vp-star-article-wrapper"},[p("div",{class:"title",onClick:()=>o(t.value.path)},[p(Si),p("span",{class:"num"},t.value.items.length),c.value.article]),p("hr"),r.value.items.length?p("ul",{class:"vp-star-articles"},r.value.items.map(({info:u,path:h},d)=>p(le,{appear:!0,delay:.08*(d+1)},()=>p("li",{class:"vp-star-article"},p($e,{to:h},()=>u[rt.title]))))):p("div",{class:"vp-star-article-empty"},c.value.empty.replace("$text",c.value.star))]):l.value==="category"?p("div",{class:"vp-category-wrapper"},[s.value?[p("div",{class:"title",onClick:()=>o(n.value.path)},[p(pl),p("span",{class:"num"},s.value),c.value.category]),p("hr"),p(le,{delay:.04},()=>p(lh))]:p("div",{class:"vp-category-empty"},c.value.empty.replace("$text",c.value.category))]):l.value==="tag"?p("div",{class:"vp-tag-wrapper"},[a.value?[p("div",{class:"title",onClick:()=>o(i.value.path)},[p(cl),p("span",{class:"num"},a.value),c.value.tag]),p("hr"),p(le,{delay:.04},()=>p(ph))]:p("div",{class:"vp-tag-empty"},c.value.empty.replace("$text",c.value.tag))]):p(le,()=>p(Cv)))])}}),Li=M({name:"BlogWrapper",slots:Object,setup(e,{slots:t}){const{isMobile:n}=Cr();return()=>[p(sl),p(nl,{noSidebar:!0,noToc:!0},{default:()=>t.default(),navScreenBottom:()=>p(ll),sidebar:n.value?()=>p(ch):null})]}});const Lr=()=>p("aside",{class:"vp-blog-info-wrapper"},[p(le,()=>p(ll)),p(le,{delay:.04},()=>p(ch))]);Lr.displayName="InfoPanel";var Ov=M({name:"BlogPage",setup(){const e=Ie(),t=ye(),n=Ir(),s=Rr();return()=>{const{key:r="",name:i=""}=t.value.blog||{},a=i?r==="category"?n.value.map[i].items:r==="tag"?s.value.map[i].items:[]:[];return p(Li,()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[p(le,()=>r==="category"?p(lh):r==="tag"?p(ph):null),i?p(le,{appear:!0,delay:.24},()=>p(hl,{key:e.value.path,items:a})):null]),p(le,{delay:.16},()=>p(Lr,{key:"blog"}))])))}}});const Iv="//theme-hope-assets.vuejs.press/hero/default.jpg";var Rv=M({name:"BlogHero",slots:Object,setup(e,{slots:t}){const n=ye(),s=kr(),r=Fe(),i=A(()=>n.value.heroFullScreen??!1),a=A(()=>{const{heroText:l,heroImage:c,heroImageDark:u,heroAlt:h,heroImageStyle:d,tagline:m}=n.value;return{text:l??s.value.title??"Hello",tagline:m??"",image:c?Ee(c):null,imageDark:u?Ee(u):null,alt:h??l??"",imageStyle:d,isFullScreen:i.value}}),o=A(()=>{const{bgImage:l,bgImageDark:c,bgImageStyle:u}=n.value;return{image:Re(l)?Ee(l):l===!1?null:Iv,imageDark:Re(c)?Ee(c):null,bgStyle:u,isFullScreen:i.value}});return()=>{var l,c;return n.value.hero===!1?null:p("div",{ref:r,class:["vp-blog-hero",{fullscreen:i.value,"no-bg":!o.value.image}]},[((l=t.bg)==null?void 0:l.call(t,o.value))??[o.value.image?p("div",{class:["vp-blog-mask",{light:o.value.imageDark}],style:[{background:`url(${o.value.image}) center/cover no-repeat`},o.value.bgStyle]}):null,o.value.imageDark?p("div",{class:"vp-blog-mask dark",style:[{background:`url(${o.value.imageDark}) center/cover no-repeat`},o.value.bgStyle]}):null],((c=t.info)==null?void 0:c.call(t,a.value))??[p(le,{appear:!0,type:"group",delay:.04},()=>{const{image:u,imageDark:h,imageStyle:d,alt:m}=a.value;return[u?p("img",{key:"light",class:["vp-blog-hero-image",{light:h}],style:d,src:u,alt:m}):null,h?p("img",{key:"dark",class:"vp-blog-hero-image dark",style:d,src:h,alt:m}):null]}),p(le,{appear:!0,delay:.08},()=>a.value.text?p("h1",{class:"vp-blog-hero-title"},a.value.text):null),p(le,{appear:!0,delay:.12},()=>a.value.tagline?p("p",{class:"vp-blog-hero-description",innerHTML:a.value.tagline}):null)],a.value.isFullScreen?p("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:r.value.clientHeight,behavior:"smooth"})}},[p(eo),p(eo)]):null])}}});const Sv=["link","article","book","project","friend"];var Lv=M({name:"ProjectPanel",components:{ArticleIcon:Si,BookIcon:sh,FriendIcon:ah,LinkIcon:rh,ProjectIcon:ih},props:{items:{type:Array,required:!0}},setup(e){const t=it(),n=Gn(),s=(r="",i="icon")=>Sv.includes(r)?p(Dt(`${r}-icon`)):zn(r)?p("img",{class:"vp-project-image",src:r,alt:i}):Ti(r)?p("img",{class:"vp-project-image",src:Ee(r),alt:i}):p(Qe,{icon:r});return()=>p("div",{class:"vp-project-panel"},e.items.map(({icon:r,link:i,name:a,desc:o,background:l})=>p("div",{class:["vp-project-card",{[`color${Br(a,Number(Kn.colorNumber))}`]:!t.value&&!l}],...l?{style:l}:{},onClick:()=>n(i)},[s(r,a),p("div",{class:"vp-project-name"},a),p("div",{class:"vp-project-desc"},o)])))}}),Fv=M({name:"BlogHomePage",setup(){const e=Or(),t=ye(),n=A(()=>t.value.projects??[]);return()=>p("div",{class:"vp-page vp-blog-home"},[p(Rv),p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[n.value.length?p(le,{appear:!0,delay:.16},()=>p(Lv,{items:n.value})):null,p(le,{appear:!0,delay:.24},()=>p(hl,{items:e.value.items}))]),p(le,{appear:!0,delay:.16},()=>p(Lr,{key:"blog"}))]),p(le,{appear:!0,delay:.28},()=>p(_s))])}});const uh=()=>p(Li,()=>p(Fv));uh.displayName="BlogHome";var Vv=M({name:"ArticleType",setup(){const e=Ie(),t=zt(),n=ce(),s=Or(),r=ol(),i=A(()=>{const a=n.value.blogLocales;return[{text:a.all,path:s.value.path},{text:a.star,path:r.value.path},...mv.map(({key:o,path:l})=>{const c=l.replace(/^\//,t.value);return{text:a[o]??At(c).meta[rt.title]??o,path:c}})]});return()=>p("ul",{class:"vp-article-type-wrapper"},i.value.map(a=>p("li",{class:["vp-article-type",{active:a.path===e.value.path}]},p($e,{to:a.path},()=>a.text))))}}),qv=M({name:"BlogPage",setup(){const e=Ri(),t=ye(),n=Ie(),s=Or(),r=ol(),i=A(()=>{const{key:a="",type:o}=t.value.blog||{};return a==="star"?r.value.items:o==="type"&&a?e.value.items:s.value.items});return()=>p(Li,()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[p(le,()=>p(Vv)),p(le,{appear:!0,delay:.24},()=>p(hl,{key:n.value.path,items:i.value}))]),p(le,{delay:.16},()=>p(Lr,{key:"blog"}))])))}}),jv=M({name:"TimelineItems",setup(){const e=Sr(),t=ce(),n=al(),s=A(()=>e.value.timeline??t.value.blogLocales.timelineTitle),r=A(()=>n.value.config.map(({year:i})=>({title:i.toString(),level:2,slug:i.toString(),children:[]})));return()=>p("div",{class:"timeline-wrapper"},p("ul",{class:"timeline-content"},[p(le,()=>p("li",{class:"motto"},s.value)),p(zu,{items:r.value}),n.value.config.map(({year:i,items:a},o)=>p(le,{appear:!0,delay:.08*(o+1),type:"group"},()=>[p("h3",{key:"title",id:i,class:"timeline-year-title"},p("span",i)),p("li",{key:"content",class:"timeline-year-list"},[p("ul",{class:"timeline-year-wrapper"},a.map(({date:l,info:c,path:u})=>p("li",{class:"timeline-item"},[p("span",{class:"timeline-date"},l),p($e,{class:"timeline-title",to:u},()=>c[rt.title])])))])]))]))}});const hh=()=>p(Li,()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[p(le,{appear:!0,delay:.24},()=>p(jv))]),p(le,{delay:.16},()=>p(Lr,{key:"blog"}))])));hh.displayName="Timeline";var $v={};const Yn="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),ma=Array.from({length:64},(e,t)=>t),Yr=e=>Array(e).fill(-1),ln=[...Yr(46),0,1,...ma.slice(54,64),...Yr(7),...ma.slice(2,28),...Yr(6),...ma.slice(28,54),...Yr(5)],K0=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],G0=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],dh=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],to=(e,t)=>{if(t<=0||t>e.length)throw Error(`Illegal len: ${t}`);let n=0,s,r;const i=[];for(;n<t;){if(s=e[n++]&255,i.push(Yn[s>>2&63]),s=(s&3)<<4,n>=t){i.push(Yn[s&63]);break}if(r=e[n++]&255,s|=r>>4&15,i.push(Yn[s&63]),s=(r&15)<<2,n>=t){i.push(Yn[s&63]);break}r=e[n++]&255,s|=r>>6&3,i.push(Yn[s&63]),i.push(Yn[r&63])}return i.join("")},Mv=(e,t)=>{const n=e.length;let s=0,r=0,i,a,o,l,c,u;const h=[];for(;s<n-1&&r<t&&(u=e.charCodeAt(s++),i=u<ln.length?ln[u]:-1,u=e.charCodeAt(s++),a=u<ln.length?ln[u]:-1,!(i==-1||a==-1||(c=i<<2>>>0,c|=(a&48)>>4,h.push(String.fromCharCode(c)),++r>=t||s>=n)||(u=e.charCodeAt(s++),o=u<ln.length?ln[u]:-1,o==-1)||(c=(a&15)<<4>>>0,c|=(o&60)>>2,h.push(String.fromCharCode(c)),++r>=t||s>=n)));)u=e.charCodeAt(s++),l=u<ln.length?ln[u]:-1,c=(o&3)<<6>>>0,c|=l,h.push(String.fromCharCode(c)),++r;return h.map(d=>d.charCodeAt(0))},Nv=(e,t)=>{let n=null;for(typeof e=="number"&&(n=e,e=()=>null);n!==null||(n=e())!==null;)n<128?t(n&127):n<2048?(t(n>>6&31|192),t(n&63|128)):n<65536?(t(n>>12&15|224),t(n>>6&63|128),t(n&63|128)):(t(n>>18&7|240),t(n>>12&63|128),t(n>>6&63|128),t(n&63|128)),n=null},Hv=(e,t)=>{let n,s=null;for(;(n=s!==null?s:e())!==null;){if(n>=55296&&n<=57343&&(s=e())!==null&&s>=56320&&s<=57343){t((n-55296)*1024+s-56320+65536),s=null;continue}t(n)}s!==null&&t(s)},zv=(e,t)=>{Hv(e,function(n){Nv(n,t)})},Uv=typeof process=="object"&&$v.NEXT_RUNTIME==="edge"?setTimeout:typeof setImmediate=="function"?setImmediate:typeof process=="object"&&typeof process.nextTick=="function"?process.nextTick:setTimeout,Kv=e=>{const t=[];let n=0;return zv(()=>n>=e.length?null:e.charCodeAt(n++),s=>{t.push(s)}),t},ur=(e,t,n,s)=>{let r,i=e[t],a=e[t+1];return i^=n[0],r=s[i>>>24],r+=s[256|i>>16&255],r^=s[512|i>>8&255],r+=s[768|i&255],a^=r^n[1],r=s[a>>>24],r+=s[256|a>>16&255],r^=s[512|a>>8&255],r+=s[768|a&255],i^=r^n[2],r=s[i>>>24],r+=s[256|i>>16&255],r^=s[512|i>>8&255],r+=s[768|i&255],a^=r^n[3],r=s[a>>>24],r+=s[256|a>>16&255],r^=s[512|a>>8&255],r+=s[768|a&255],i^=r^n[4],r=s[i>>>24],r+=s[256|i>>16&255],r^=s[512|i>>8&255],r+=s[768|i&255],a^=r^n[5],r=s[a>>>24],r+=s[256|a>>16&255],r^=s[512|a>>8&255],r+=s[768|a&255],i^=r^n[6],r=s[i>>>24],r+=s[256|i>>16&255],r^=s[512|i>>8&255],r+=s[768|i&255],a^=r^n[7],r=s[a>>>24],r+=s[256|a>>16&255],r^=s[512|a>>8&255],r+=s[768|a&255],i^=r^n[8],r=s[i>>>24],r+=s[256|i>>16&255],r^=s[512|i>>8&255],r+=s[768|i&255],a^=r^n[9],r=s[a>>>24],r+=s[256|a>>16&255],r^=s[512|a>>8&255],r+=s[768|a&255],i^=r^n[10],r=s[i>>>24],r+=s[256|i>>16&255],r^=s[512|i>>8&255],r+=s[768|i&255],a^=r^n[11],r=s[a>>>24],r+=s[256|a>>16&255],r^=s[512|a>>8&255],r+=s[768|a&255],i^=r^n[12],r=s[i>>>24],r+=s[256|i>>16&255],r^=s[512|i>>8&255],r+=s[768|i&255],a^=r^n[13],r=s[a>>>24],r+=s[256|a>>16&255],r^=s[512|a>>8&255],r+=s[768|a&255],i^=r^n[14],r=s[i>>>24],r+=s[256|i>>16&255],r^=s[512|i>>8&255],r+=s[768|i&255],a^=r^n[15],r=s[a>>>24],r+=s[256|a>>16&255],r^=s[512|a>>8&255],r+=s[768|a&255],i^=r^n[16],e[t]=a^n[17],e[t+1]=i,e},Jn=(e,t)=>{let n=0;for(let s=0;s<4;++s)n=n<<8|e[t]&255,t=(t+1)%e.length;return{key:n,offp:t}},Q0=(e,t,n)=>{const s=t.length,r=n.length;let i=0,a=[0,0],o;for(let l=0;l<s;l++)o=Jn(e,i),i=o.offp,t[l]=t[l]^o.key;for(let l=0;l<s;l+=2)a=ur(a,0,t,n),t[l]=a[0],t[l+1]=a[1];for(let l=0;l<r;l+=2)a=ur(a,0,t,n),n[l]=a[0],n[l+1]=a[1]},Gv=(e,t,n,s)=>{const r=n.length,i=s.length;let a=0,o=[0,0],l;for(let c=0;c<r;c++)l=Jn(t,a),a=l.offp,n[c]=n[c]^l.key;a=0;for(let c=0;c<r;c+=2)l=Jn(e,a),a=l.offp,o[0]^=l.key,l=Jn(e,a),a=l.offp,o[1]^=l.key,o=ur(o,0,n,s),n[c]=o[0],n[c+1]=o[1];for(let c=0;c<i;c+=2)l=Jn(e,a),a=l.offp,o[0]^=l.key,l=Jn(e,a),a=l.offp,o[1]^=l.key,o=ur(o,0,n,s),s[c]=o[0],s[c+1]=o[1]},W0=(e,t,n,s,r)=>{const i=dh.slice(),a=i.length;if(n<4||n>31){const d=new Error(`Illegal number of rounds (4-31): ${n}`);if(s===!1)return Promise.reject(d);throw d}if(t.length!==16){const d=new Error(`Illegal salt length: ${t.length} != 16`);if(s===!1)return Promise.reject(d);throw d}n=1<<n>>>0;let o,l,c=0,u;Int32Array?(o=new Int32Array(K0),l=new Int32Array(G0)):(o=K0.slice(),l=G0.slice()),Gv(t,e,o,l);const h=()=>{if(c<n){const d=Date.now();for(;c<n&&(c=c+1,Q0(e,o,l),Q0(t,o,l),!(Date.now()-d>100)););}else{for(c=0;c<64;c++)for(u=0;u<a>>1;u++)ur(i,u<<1,o,l);const d=[];for(c=0;c<a;c++)d.push((i[c]>>24&255)>>>0),d.push((i[c]>>16&255)>>>0),d.push((i[c]>>8&255)>>>0),d.push((i[c]&255)>>>0);return s===!1?Promise.resolve(d):d}if(s===!1)return new Promise(d=>Uv(()=>{h().then(d)}))};if(s===!1)return h();{let d;for(;;)if(typeof(d=h())<"u")return d||[]}},Qv=e=>{try{let t;typeof window<"u"?t=window.crypto??window.msCrypto:t=globalThis.crypto;const n=new Uint32Array(e);return t==null||t.getRandomValues(n),Array.from(n)}catch{throw Error("WebCryptoAPI is not available")}},Wv=(e=10)=>{if(typeof e!="number")throw Error("Illegal arguments: "+typeof e);e<4?e=4:e>31&&(e=31);const t=[];return t.push("$2a$"),e<10&&t.push("0"),t.push(e.toString()),t.push("$"),t.push(to(Qv(16),16)),t.join("")};function Yv(e,t,n,s){if(typeof e!="string"||typeof t!="string"){const m=new Error("Invalid string / salt: Not a string");if(n===!1)return Promise.reject(m);throw m}let r,i;if(t.charAt(0)!=="$"||t.charAt(1)!=="2"){const m=new Error("Invalid salt version: "+t.substring(0,2));if(n===!1)return Promise.reject(m);throw m}if(t.charAt(2)==="$")r="\0",i=3;else{if(r=t.charAt(2),r!=="a"&&r!=="b"&&r!=="y"||t.charAt(3)!=="$"){const m=Error("Invalid salt revision: "+t.substring(2,4));if(n===!1)return Promise.reject(m);throw m}i=4}if(t.charAt(i+2)>"$"){const m=new Error("Missing salt rounds");if(n===!1)return Promise.reject(m);throw m}const a=parseInt(t.substring(i,i+1),10)*10,o=parseInt(t.substring(i+1,i+2),10),l=a+o,c=t.substring(i+3,i+25);e+=r>="a"?"\0":"";const u=Kv(e),h=Mv(c,16),d=m=>{const g=[];return g.push("$2"),r>="a"&&g.push(r),g.push("$"),l<10&&g.push("0"),g.push(l.toString()),g.push("$"),g.push(to(h,h.length)),g.push(to(m,dh.length*4-1)),g.join("")};return n===!1?W0(u,h,l,!1).then(m=>d(m)):d(W0(u,h,l,!0))}const Xv=(e,t=10)=>{if(typeof t=="number"&&(t=Wv(t)),typeof e!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof t);return Yv(e,t,!0)},no=(e,t)=>{if(typeof e!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof t);return t.length!==60?!1:Xv(e,t.substring(0,t.length-31))===t};var fh=M({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(e,{emit:t}){const n=ye(),s=ce(),r=J(""),i=J(!1),a=J(!1),o=A(()=>s.value.encryptLocales);let l=null;const c=()=>{l&&clearTimeout(l),i.value=!1,t("verify",r.value,a.value),Nt().then(()=>{i.value=!0,l=setTimeout(()=>{i.value=!1},1e3)})};return()=>p("div",{class:["vp-decrypt-layer",{expand:e.full||n.value.home}]},p("div",{class:"vp-decrypt-modal"},[p("div",{class:["vp-decrypt-hint",{tried:i.value}]},i.value?o.value.errorHint:p(il,{"aria-label":o.value.iconLabel})),p("div",{class:"vp-decrypt-input"},[p("input",{type:"password",value:r.value,placeholder:o.value.placeholder,onInput:({target:u})=>{r.value=u.value},onKeydown:({key:u})=>{u==="Enter"&&c()}})]),p("div",{class:"vp-remember-password"},[p("input",{id:"remember-password",type:"checkbox",value:a.value,onChange:()=>a.value=!a.value}),p("label",{for:"remember-password"},o.value.remember)]),p("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>c()},"OK")]))}});const mh=()=>{const e=Ut();return A(()=>e.value.encrypt||{})},Y0="VUEPRESS_HOPE_GLOBAL_TOKEN",Jv=()=>{const e=mh(),t=Un(Y0,""),n=Lo(Y0,""),s=A(()=>{const{global:i=!1,admin:a=[]}=e.value;return i&&a.length>0}),r=A(()=>{if(s.value){if(t.value)return e.value.admin.some(i=>no(t.value,i));if(n.value)return e.value.admin.some(i=>no(n.value,i))}return!1});return{isEncrypted:s,isDecrypted:r,validate:(i,a=!1)=>{(a?t:n).value=i}}},ga=(e="",t)=>!!e&&no(e,t),X0="VUEPRESS_HOPE_PATH_TOKEN",Zv=()=>{const e=Ie(),t=mh(),n=Un(X0,{}),s=Lo(X0,{}),r=a=>Es(t.value.config)?It(t.value.config).filter(o=>rr(decodeURI(a),o)).sort((o,l)=>l.length-o.length):[],i=a=>{const o=r(a);if(o.length>0){const{config:l={}}=t.value;return{isEncrypted:!0,isDecrypted:o.some(c=>n.value[c]&&l[c].some(u=>ga(n.value[c],u))||s.value[c]&&l[c].some(u=>ga(s.value[c],u)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:A(()=>i(e.value.path)),getStatus:i,validate:(a,o=!1)=>{const{config:l={}}=t.value,c=r(e.value.path);for(const u of c)if(l[u].filter(h=>ga(a,h))){(o?n:s).value[u]=a;break}}}};var e9=M({name:"GlobalEncrypt",slots:Object,setup(e,{slots:t}){const{isDecrypted:n,isEncrypted:s,validate:r}=Jv(),i=it(),a=J(!1);return we(()=>{a.value=!0}),()=>p(i.value?Ii:rl,()=>s.value?a.value?n.value?t.default():p(fh,{full:!0,onVerify:r}):null:t.default())}}),t9=M({name:"LocalEncrypt",slots:Object,setup(e,{slots:t}){const{status:n,validate:s}=Zv(),r=J(!1);return we(()=>{r.value=!0}),()=>{const{isEncrypted:i,isDecrypted:a}=n.value;return i?r.value?a?t.default():p(fh,{full:!0,onVerify:s}):null:t.default()}}});v3(e=>{const t=e.t,n=e.I!==!1,s=e.i;return n?{title:t,content:s?()=>[p(Qe,{icon:s}),t]:null,order:e.O,index:e.I}:null});const n9={enhance:({app:e,router:t})=>{const{scrollBehavior:n}=t.options;t.options.scrollBehavior=async(...s)=>(await Wa.wait(),n(...s)),b7(e),e.component("HopeIcon",Qe),e.component("BloggerInfo",ll),e.component("SocialMedias",eh),e.component("GlobalEncrypt",e9),e.component("LocalEncrypt",t9)},setup:()=>{k7(),_7(),bv()},layouts:{Layout:pv,NotFound:uv,BlogCategory:Ov,BlogHome:uh,BlogType:qv,Timeline:hh}},s9=Object.freeze(Object.defineProperty({__proto__:null,default:n9},Symbol.toStringTag,{value:"Module"})),gh=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},r9={__name:"app",props:{type:{type:String,required:!0,default:""}},setup(e,{expose:t}){t();const n=e,s=J("");we(()=>{console.log("开始获取hitokoto"),fetch(`https://v1.hitokoto.cn/?c=${n.type}`).then(i=>i.json()).then(i=>{s.value=i.hitokoto})});const r={props:n,hitokoto:s,ref:J,onMounted:we};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function i9(e,t,n,s,r,i){return Zs(),p1("div",null,[Ao("span",null,i2(s.hitokoto),1)])}const a9=gh(r9,[["render",i9],["__file","app.vue"]]),o9="a",l9=St({enhance({app:e}){e.component("hitokoto",{render(){return p(a9,{type:o9})}})}}),p9=Object.freeze(Object.defineProperty({__proto__:null,default:l9},Symbol.toStringTag,{value:"Module"})),c9={__name:"app",props:{text:{type:String,required:!0,default:"watermark"},fontSize:{type:Number,default:40},gap:{type:Number,default:20}},setup(e,{expose:t}){t();function n(u){return A(()=>{const h=document.createElement("canvas"),d=window.devicePixelRatio||1,g=`${u.fontSize*d}px serif`,w=h.getContext("2d");w.font=g;const{width:b}=w.measureText(u.text),y=Math.max(100,b)+u.gap*d;return h.width=y,h.height=y,w.translate(h.width/2,h.height/2),w.rotate(Math.PI/180*-45),w.fillStyle="rgba(0, 0, 0, 0.3)",w.font=g,w.textAlign="center",w.textBaseline="middle",w.fillText(u.text,0,0),{base64:h.toDataURL(),size:y,styleSize:y/d}})}const s=e,r=n(s),i=J(null),a=J(0);let o;Js(()=>{if(a.value,!i.value)return;o&&o.remove();const{base64:u,styleSize:h}=r.value;o=document.createElement("div"),o.style.backgroundImage=`url(${u})`,o.style.backgroundSize=`${h}px ${h}px`,o.style.backgroundRepeat="repeat",o.style.zIndex=9999,o.style.position="absolute",o.style.inset=0,i.value.appendChild(o)});let l;we(()=>{l=new MutationObserver(u=>{for(const h of u){for(const d of h.removedNodes)if(d===o){a.value++;return}if(h.target===o){a.value++;return}}}),l.observe(i.value,{childList:!0,attributes:!0,subtree:!0})}),wn(()=>{l&&l.disconnect(),o=null});const c={useWatermarkBg:n,props:s,bg:r,parentRef:i,flag:a,get div(){return o},set div(u){o=u},get ob(){return l},set ob(u){l=u},onMounted:we,onUnmounted:wn,ref:J,watchEffect:Js,computed:A};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},u9={class:"watermark-container",ref:"parentRef"};function h9(e,t,n,s,r,i){return Zs(),p1("div",u9,[s5(e.$slots,"default",{},void 0)],512)}const d9=gh(c9,[["render",h9],["__scopeId","data-v-57c8406f"],["__file","app.vue"]]),f9=`

转载自: smallfawn 地址: https://smallfawn.github.io`,m9=St({enhance({app:e}){e.component("watermark",d9),typeof window<"u"&&typeof document<"u"&&addEventListener("copy",function(t){let r=window.getSelection().toString()+f9;t.clipboardData&&(t.clipboardData.setData("text/plain",r),t.preventDefault())})}}),g9=Object.freeze(Object.defineProperty({__proto__:null,default:m9},Symbol.toStringTag,{value:"Module"})),Xr=[h4,d4,p3,g3,E3,T3,R3,Ug,Jg,e8,t8,o8,D8,G8,Z8,s9,p9,g9].map(e=>e.default).filter(Boolean),v9=JSON.parse('{"base":"/","lang":"zh-CN","title":"smallfawn","description":"smallfawn","head":[["meta",{"name":"google-adsense-account","content":"ca-pub-2247483547544632"}]],"locales":{}}');var qs=Fe(v9),_9=ym,w9=()=>{const e=e4({history:_9(To("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(t,n,s)=>s||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{if(t.path!==n.path||n===Yt){const s=At(t.fullPath);if(s.path!==t.fullPath)return s.path;const r=await s.loader();t.meta={...s.meta,_pageChunk:r}}else t.path===n.path&&(t.meta=n.meta)}),e},y9=e=>{e.component("ClientOnly",J1),e.component("Content",Z1),e.component("RouteLink",$e)},b9=(e,t,n)=>{const s=A(()=>t.currentRoute.value.path),r=x2((b,y)=>({get(){return b(),t.currentRoute.value.meta._pageChunk},set(E){t.currentRoute.value.meta._pageChunk=E,y()}})),i=A(()=>Dn.resolveLayouts(n)),a=A(()=>Dn.resolveRouteLocale(qs.value.locales,s.value)),o=A(()=>Dn.resolveSiteLocaleData(qs.value,a.value)),l=A(()=>r.value.comp),c=A(()=>r.value.data),u=A(()=>c.value.frontmatter),h=A(()=>Dn.resolvePageHeadTitle(c.value,o.value)),d=A(()=>Dn.resolvePageHead(h.value,u.value,o.value)),m=A(()=>Dn.resolvePageLang(c.value,o.value)),g=A(()=>Dn.resolvePageLayout(c.value,i.value)),w={layouts:i,pageData:c,pageComponent:l,pageFrontmatter:u,pageHead:d,pageHeadTitle:h,pageLang:m,pageLayout:g,redirects:Ia,routeLocale:a,routePath:s,routes:ls,siteData:qs,siteLocaleData:o};return e.provide(Do,w),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>u.value},$head:{get:()=>d.value},$headTitle:{get:()=>h.value},$lang:{get:()=>m.value},$page:{get:()=>c.value},$routeLocale:{get:()=>a.value},$site:{get:()=>qs.value},$siteLocale:{get:()=>o.value},$withBase:{get:()=>Ee}}),w},k9=([e,t,n=""])=>{const s=Object.entries(t).map(([o,l])=>Re(l)?`[${o}=${JSON.stringify(l)}]`:l?`[${o}]`:"").join(""),r=`head > ${e}${s}`;return Array.from(document.querySelectorAll(r)).find(o=>o.innerText===n)??null},E9=([e,t,n])=>{if(!Re(e))return null;const s=document.createElement(e);return Es(t)&&Object.entries(t).forEach(([r,i])=>{Re(i)?s.setAttribute(r,i):i&&s.setAttribute(r,"")}),Re(n)&&s.appendChild(document.createTextNode(n)),s},A9=()=>{const e=s4(),t=Oo();let n=[];const s=()=>{e.value.forEach(a=>{const o=k9(a);o&&n.push(o)})},r=()=>{const a=[];return e.value.forEach(o=>{const l=E9(o);l&&a.push(l)}),a},i=()=>{document.documentElement.lang=t.value;const a=r();n.forEach((o,l)=>{const c=a.findIndex(u=>o.isEqualNode(u));c===-1?(o.remove(),delete n[l]):a.splice(c,1)}),a.forEach(o=>document.head.appendChild(o)),n=[...n.filter(o=>!!o),...a]};Bt(a4,i),we(()=>{s(),de(e,i,{immediate:!1})})},x9=bf,P9=async()=>{var s;const e=x9({name:"Vuepress",setup(){var a;A9();for(const o of Xr)(a=o.setup)==null||a.call(o);const r=Xr.flatMap(({rootComponents:o=[]})=>o.map(l=>p(l))),i=r4();return()=>[p(i.value),r]}}),t=w9();y9(e);const n=b9(e,t,Xr);{const{setupDevtools:r}=await f(async()=>{const{setupDevtools:i}=await import("./setupDevtools-7MC2TMWH-DXxo3hkJ.js");return{setupDevtools:i}},[]);r(e,n)}for(const r of Xr)await((s=r.enhance)==null?void 0:s.call(r,{app:e,router:t,siteData:qs}));return e.use(t),{app:e,router:t}};P9().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{ze as F,gh as _,Le as a,Ao as b,p1 as c,P9 as createVueApp,u1 as d,D9 as e,Rd as f,O9 as g,C9 as h,I5 as i,M as j,p as k,J as l,B9 as n,Zs as o,Dt as r,ng as s,i2 as t,de as w};
