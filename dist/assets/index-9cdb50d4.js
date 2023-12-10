(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Zc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Me={},as=[],nn=()=>{},lv=()=>!1,cv=/^on[^a-z]/,Sa=t=>cv.test(t),eu=t=>t.startsWith("onUpdate:"),et=Object.assign,tu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uv=Object.prototype.hasOwnProperty,Ie=(t,e)=>uv.call(t,e),Z=Array.isArray,ls=t=>Gi(t)==="[object Map]",Ca=t=>Gi(t)==="[object Set]",td=t=>Gi(t)==="[object Date]",de=t=>typeof t=="function",Ke=t=>typeof t=="string",Es=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Lp=t=>(ke(t)||de(t))&&de(t.then)&&de(t.catch),Fp=Object.prototype.toString,Gi=t=>Fp.call(t),hv=t=>Gi(t).slice(8,-1),Up=t=>Gi(t)==="[object Object]",nu=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Do=Zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ka=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dv=/-(\w)/g,vn=ka(t=>t.replace(dv,(e,n)=>n?n.toUpperCase():"")),fv=/\B([A-Z])/g,Ms=ka(t=>t.replace(fv,"-$1").toLowerCase()),Oa=ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vo=ka(t=>t?`on${Oa(t)}`:""),Ur=(t,e)=>!Object.is(t,e),Mo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Go=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},pv=t=>{const e=Ke(t)?Number(t):NaN;return isNaN(e)?t:e};let nd;const rc=()=>nd||(nd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xr(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?yv(r):xr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||ke(t))return t}const gv=/;(?![^(]*\))/g,mv=/:([^]+)/,_v=/\/\*[^]*?\*\//g;function yv(t){const e={};return t.replace(_v,"").split(gv).forEach(n=>{if(n){const r=n.split(mv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xe(t){let e="";if(Ke(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=xe(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function He(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ke(e)&&(t.class=xe(e)),n&&(t.style=xr(n)),t}const vv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ev=Zc(vv);function $p(t){return!!t||t===""}function wv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Na(t[r],e[r]);return n}function Na(t,e){if(t===e)return!0;let n=td(t),r=td(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Es(t),r=Es(e),n||r)return t===e;if(n=Z(t),r=Z(e),n||r)return n&&r?wv(t,e):!1;if(n=ke(t),r=ke(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Na(t[o],e[o]))return!1}}return String(t)===String(e)}function Iv(t,e){return t.findIndex(n=>Na(n,e))}const ct=t=>Ke(t)?t:t==null?"":Z(t)||ke(t)&&(t.toString===Fp||!de(t.toString))?JSON.stringify(t,Bp,2):String(t),Bp=(t,e)=>e&&e.__v_isRef?Bp(t,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ca(e)?{[`Set(${e.size})`]:[...e.values()]}:ke(e)&&!Z(e)&&!Up(e)?String(e):e;let Yt;class jp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Yt;try{return Yt=this,e()}finally{Yt=n}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Tv(t){return new jp(t)}function Av(t,e=Yt){e&&e.active&&e.effects.push(t)}function bv(){return Yt}const ru=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qp=t=>(t.w&or)>0,Hp=t=>(t.n&or)>0,Pv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=or},Rv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];qp(s)&&!Hp(s)?s.delete(t):e[n++]=s,s.w&=~or,s.n&=~or}e.length=n}},Jo=new WeakMap;let ri=0,or=1;const sc=30;let Zt;const Dr=Symbol(""),ic=Symbol("");class su{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Av(this,r)}run(){if(!this.active)return this.fn();let e=Zt,n=er;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Zt,Zt=this,er=!0,or=1<<++ri,ri<=sc?Pv(this):rd(this),this.fn()}finally{ri<=sc&&Rv(this),or=1<<--ri,Zt=this.parent,er=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Zt===this?this.deferStop=!0:this.active&&(rd(this),this.onStop&&this.onStop(),this.active=!1)}}function rd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let er=!0;const zp=[];function Ls(){zp.push(er),er=!1}function Fs(){const t=zp.pop();er=t===void 0?!0:t}function Ft(t,e,n){if(er&&Zt){let r=Jo.get(t);r||Jo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ru()),Kp(s)}}function Kp(t,e){let n=!1;ri<=sc?Hp(t)||(t.n|=or,n=!qp(t)):n=!t.has(Zt),n&&(t.add(Zt),Zt.deps.push(t))}function Sn(t,e,n,r,s,i){const o=Jo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Es(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?nu(n)&&a.push(o.get("length")):(a.push(o.get(Dr)),ls(t)&&a.push(o.get(ic)));break;case"delete":Z(t)||(a.push(o.get(Dr)),ls(t)&&a.push(o.get(ic)));break;case"set":ls(t)&&a.push(o.get(Dr));break}if(a.length===1)a[0]&&oc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);oc(ru(l))}}function oc(t,e){const n=Z(t)?t:[...t];for(const r of n)r.computed&&sd(r);for(const r of n)r.computed||sd(r)}function sd(t,e){(t!==Zt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Sv(t,e){var n;return(n=Jo.get(t))==null?void 0:n.get(e)}const Cv=Zc("__proto__,__v_isRef,__isVue"),Wp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Es)),id=kv();function kv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Te(this);for(let i=0,o=this.length;i<o;i++)Ft(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ls();const r=Te(this)[e].apply(this,n);return Fs(),r}}),t}function Ov(t){const e=Te(this);return Ft(e,"has",t),e.hasOwnProperty(t)}class Gp{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?Hv:Xp:i?Yp:Jp).get(e))return e;const o=Z(e);if(!s){if(o&&Ie(id,n))return Reflect.get(id,n,r);if(n==="hasOwnProperty")return Ov}const a=Reflect.get(e,n,r);return(Es(n)?Wp.has(n):Cv(n))||(s||Ft(e,"get",n),i)?a:it(a)?o&&nu(n)?a:a.value:ke(a)?s?eg(a):Da(a):a}}class Qp extends Gp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(ws(i)&&it(i)&&!it(r))return!1;if(!this._shallow&&(!Yo(r)&&!ws(r)&&(i=Te(i),r=Te(r)),!Z(e)&&it(i)&&!it(r)))return i.value=r,!0;const o=Z(e)&&nu(n)?Number(n)<e.length:Ie(e,n),a=Reflect.set(e,n,r,s);return e===Te(s)&&(o?Ur(r,i)&&Sn(e,"set",n,r):Sn(e,"add",n,r)),a}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Sn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Es(n)||!Wp.has(n))&&Ft(e,"has",n),r}ownKeys(e){return Ft(e,"iterate",Z(e)?"length":Dr),Reflect.ownKeys(e)}}class Nv extends Gp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xv=new Qp,Dv=new Nv,Vv=new Qp(!0),iu=t=>t,xa=t=>Reflect.getPrototypeOf(t);function yo(t,e,n=!1,r=!1){t=t.__v_raw;const s=Te(t),i=Te(e);n||(Ur(e,i)&&Ft(s,"get",e),Ft(s,"get",i));const{has:o}=xa(s),a=r?iu:n?cu:Ti;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function vo(t,e=!1){const n=this.__v_raw,r=Te(n),s=Te(t);return e||(Ur(t,s)&&Ft(r,"has",t),Ft(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Eo(t,e=!1){return t=t.__v_raw,!e&&Ft(Te(t),"iterate",Dr),Reflect.get(t,"size",t)}function od(t){t=Te(t);const e=Te(this);return xa(e).has.call(e,t)||(e.add(t),Sn(e,"add",t,t)),this}function ad(t,e){e=Te(e);const n=Te(this),{has:r,get:s}=xa(n);let i=r.call(n,t);i||(t=Te(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ur(e,o)&&Sn(n,"set",t,e):Sn(n,"add",t,e),this}function ld(t){const e=Te(this),{has:n,get:r}=xa(e);let s=n.call(e,t);s||(t=Te(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Sn(e,"delete",t,void 0),i}function cd(){const t=Te(this),e=t.size!==0,n=t.clear();return e&&Sn(t,"clear",void 0,void 0),n}function wo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Te(o),l=e?iu:t?cu:Ti;return!t&&Ft(a,"iterate",Dr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Io(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),o=ls(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?iu:e?cu:Ti;return!e&&Ft(i,"iterate",l?ic:Dr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Bn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Mv(){const t={get(i){return yo(this,i)},get size(){return Eo(this)},has:vo,add:od,set:ad,delete:ld,clear:cd,forEach:wo(!1,!1)},e={get(i){return yo(this,i,!1,!0)},get size(){return Eo(this)},has:vo,add:od,set:ad,delete:ld,clear:cd,forEach:wo(!1,!0)},n={get(i){return yo(this,i,!0)},get size(){return Eo(this,!0)},has(i){return vo.call(this,i,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:wo(!0,!1)},r={get(i){return yo(this,i,!0,!0)},get size(){return Eo(this,!0)},has(i){return vo.call(this,i,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:wo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Io(i,!1,!1),n[i]=Io(i,!0,!1),e[i]=Io(i,!1,!0),r[i]=Io(i,!0,!0)}),[t,n,e,r]}const[Lv,Fv,Uv,$v]=Mv();function ou(t,e){const n=e?t?$v:Uv:t?Fv:Lv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const Bv={get:ou(!1,!1)},jv={get:ou(!1,!0)},qv={get:ou(!0,!1)},Jp=new WeakMap,Yp=new WeakMap,Xp=new WeakMap,Hv=new WeakMap;function zv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kv(t){return t.__v_skip||!Object.isExtensible(t)?0:zv(hv(t))}function Da(t){return ws(t)?t:au(t,!1,xv,Bv,Jp)}function Zp(t){return au(t,!1,Vv,jv,Yp)}function eg(t){return au(t,!0,Dv,qv,Xp)}function au(t,e,n,r,s){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Kv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function cs(t){return ws(t)?cs(t.__v_raw):!!(t&&t.__v_isReactive)}function ws(t){return!!(t&&t.__v_isReadonly)}function Yo(t){return!!(t&&t.__v_isShallow)}function tg(t){return cs(t)||ws(t)}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function lu(t){return Go(t,"__v_skip",!0),t}const Ti=t=>ke(t)?Da(t):t,cu=t=>ke(t)?eg(t):t;function ng(t){er&&Zt&&(t=Te(t),Kp(t.dep||(t.dep=ru())))}function rg(t,e){t=Te(t);const n=t.dep;n&&oc(n)}function it(t){return!!(t&&t.__v_isRef===!0)}function Je(t){return sg(t,!1)}function Wv(t){return sg(t,!0)}function sg(t,e){return it(t)?t:new Gv(t,e)}class Gv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Te(e),this._value=n?e:Ti(e)}get value(){return ng(this),this._value}set value(e){const n=this.__v_isShallow||Yo(e)||ws(e);e=n?e:Te(e),Ur(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ti(e),rg(this))}}function b(t){return it(t)?t.value:t}const Qv={get:(t,e,n)=>b(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return it(s)&&!it(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ig(t){return cs(t)?t:new Proxy(t,Qv)}function Jv(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=Xv(t,n);return e}class Yv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Sv(Te(this._object),this._key)}}function Xv(t,e,n){const r=t[e];return it(r)?r:new Yv(t,e,n)}class Zv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new su(e,()=>{this._dirty||(this._dirty=!0,rg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Te(this);return ng(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function eE(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=nn):(r=t.get,s=t.set),new Zv(r,s,i||!s,n)}function tr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Va(i,e,n)}return s}function Wt(t,e,n,r){if(de(t)){const i=tr(t,e,n,r);return i&&Lp(i)&&i.catch(o=>{Va(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Wt(t[i],e,n,r));return s}function Va(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){tr(l,null,10,[t,o,a]);return}}tE(t,n,s,r)}function tE(t,e,n,r=!0){console.error(t)}let Ai=!1,ac=!1;const bt=[];let un=0;const us=[];let Tn=null,br=0;const og=Promise.resolve();let uu=null;function ag(t){const e=uu||og;return t?e.then(this?t.bind(this):t):e}function nE(t){let e=un+1,n=bt.length;for(;e<n;){const r=e+n>>>1,s=bt[r],i=bi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function hu(t){(!bt.length||!bt.includes(t,Ai&&t.allowRecurse?un+1:un))&&(t.id==null?bt.push(t):bt.splice(nE(t.id),0,t),lg())}function lg(){!Ai&&!ac&&(ac=!0,uu=og.then(ug))}function rE(t){const e=bt.indexOf(t);e>un&&bt.splice(e,1)}function sE(t){Z(t)?us.push(...t):(!Tn||!Tn.includes(t,t.allowRecurse?br+1:br))&&us.push(t),lg()}function ud(t,e=Ai?un+1:0){for(;e<bt.length;e++){const n=bt[e];n&&n.pre&&(bt.splice(e,1),e--,n())}}function cg(t){if(us.length){const e=[...new Set(us)];if(us.length=0,Tn){Tn.push(...e);return}for(Tn=e,Tn.sort((n,r)=>bi(n)-bi(r)),br=0;br<Tn.length;br++)Tn[br]();Tn=null,br=0}}const bi=t=>t.id==null?1/0:t.id,iE=(t,e)=>{const n=bi(t)-bi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ug(t){ac=!1,Ai=!0,bt.sort(iE);const e=nn;try{for(un=0;un<bt.length;un++){const n=bt[un];n&&n.active!==!1&&tr(n,null,14)}}finally{un=0,bt.length=0,cg(),Ai=!1,uu=null,(bt.length||us.length)&&ug()}}function oE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Me;d&&(s=n.map(f=>Ke(f)?f.trim():f)),h&&(s=n.map(Qo))}let a,l=r[a=Vo(e)]||r[a=Vo(vn(e))];!l&&i&&(l=r[a=Vo(Ms(e))]),l&&Wt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wt(c,t,6,s)}}function hg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const l=c=>{const u=hg(c,e,!0);u&&(a=!0,et(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ke(t)&&r.set(t,null),null):(Z(i)?i.forEach(l=>o[l]=null):et(o,i),ke(t)&&r.set(t,o),o)}function Ma(t,e){return!t||!Sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,Ms(e))||Ie(t,e))}let ft=null,La=null;function Xo(t){const e=ft;return ft=t,La=t&&t.type.__scopeId||null,e}function dr(t){La=t}function fr(){La=null}function hs(t,e=ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Td(-1);const i=Xo(e);let o;try{o=t(...s)}finally{Xo(i),r._d&&Td(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Cl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:y,inheritAttrs:_}=t;let v,R;const N=Xo(t);try{if(n.shapeFlag&4){const k=s||r,Q=k;v=cn(u.call(Q,k,h,i,f,d,y)),R=l}else{const k=e;v=cn(k.length>1?k(i,{attrs:l,slots:a,emit:c}):k(i,null)),R=e.props?l:aE(l)}}catch(k){pi.length=0,Va(k,t,1),v=ze(Gt)}let A=v;if(R&&_!==!1){const k=Object.keys(R),{shapeFlag:Q}=A;k.length&&Q&7&&(o&&k.some(eu)&&(R=lE(R,o)),A=ar(A,R))}return n.dirs&&(A=ar(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),v=A,Xo(N),v}const aE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Sa(n))&&((e||(e={}))[n]=t[n]);return e},lE=(t,e)=>{const n={};for(const r in t)(!eu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?hd(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ma(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?hd(r,o,c):!0:!!o;return!1}function hd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ma(n,i))return!0}return!1}function uE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const du="components",hE="directives";function dd(t,e){return fu(du,t,!0,e)||t}const dg=Symbol.for("v-ndc");function Lo(t){return Ke(t)?fu(du,t,!1)||t:t||dg}function dE(t){return fu(hE,t)}function fu(t,e,n=!0,r=!1){const s=ft||st;if(s){const i=s.type;if(t===du){const a=iw(i,!1);if(a&&(a===e||a===vn(e)||a===Oa(vn(e))))return i}const o=fd(s[t]||i[t],e)||fd(s.appContext[t],e);return!o&&r?i:o}}function fd(t,e){return t&&(t[e]||t[vn(e)]||t[Oa(vn(e))])}const fE=t=>t.__isSuspense;function pE(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):sE(t)}function gE(t,e){return pu(t,null,{flush:"post"})}const To={};function zt(t,e,n){return pu(t,e,n)}function pu(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Me){var a;const l=bv()===((a=st)==null?void 0:a.scope)?st:null;let c,u=!1,h=!1;if(it(t)?(c=()=>t.value,u=Yo(t)):cs(t)?(c=()=>t,r=!0):Z(t)?(h=!0,u=t.some(k=>cs(k)||Yo(k)),c=()=>t.map(k=>{if(it(k))return k.value;if(cs(k))return Cr(k);if(de(k))return tr(k,l,2)})):de(t)?e?c=()=>tr(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Wt(t,l,3,[f])}:c=nn,e&&r){const k=c;c=()=>Cr(k())}let d,f=k=>{d=N.onStop=()=>{tr(k,l,4),d=N.onStop=void 0}},y;if(Ri)if(f=nn,e?n&&Wt(e,l,3,[c(),h?[]:void 0,f]):c(),s==="sync"){const k=lw();y=k.__watcherHandles||(k.__watcherHandles=[])}else return nn;let _=h?new Array(t.length).fill(To):To;const v=()=>{if(N.active)if(e){const k=N.run();(r||u||(h?k.some((Q,se)=>Ur(Q,_[se])):Ur(k,_)))&&(d&&d(),Wt(e,l,3,[k,_===To?void 0:h&&_[0]===To?[]:_,f]),_=k)}else N.run()};v.allowRecurse=!!e;let R;s==="sync"?R=v:s==="post"?R=()=>Vt(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),R=()=>hu(v));const N=new su(c,R);e?n?v():_=N.run():s==="post"?Vt(N.run.bind(N),l&&l.suspense):N.run();const A=()=>{N.stop(),l&&l.scope&&tu(l.scope.effects,N)};return y&&y.push(A),A}function mE(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?fg(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=st;Is(this);const a=pu(s,i.bind(r),n);return o?Is(o):Mr(),a}function fg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Cr(t,e){if(!ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),it(t))Cr(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)Cr(t[n],e);else if(Ca(t)||ls(t))t.forEach(n=>{Cr(n,e)});else if(Up(t))for(const n in t)Cr(t[n],e);return t}function ui(t,e){const n=ft;if(n===null)return t;const r=ja(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Me]=e[i];o&&(de(o)&&(o={mounted:o,updated:o}),o.deep&&Cr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Ls(),Wt(l,n,8,[t.el,a,t,e]),Fs())}}const Kn=Symbol("_leaveCb"),Ao=Symbol("_enterCb");function _E(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Us(()=>{t.isMounted=!0}),gu(()=>{t.isUnmounting=!0}),t}const Ht=[Function,Array],pg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ht,onEnter:Ht,onAfterEnter:Ht,onEnterCancelled:Ht,onBeforeLeave:Ht,onLeave:Ht,onAfterLeave:Ht,onLeaveCancelled:Ht,onBeforeAppear:Ht,onAppear:Ht,onAfterAppear:Ht,onAppearCancelled:Ht},yE={name:"BaseTransition",props:pg,setup(t,{slots:e}){const n=Eu(),r=_E();let s;return()=>{const i=e.default&&mg(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const _ of i)if(_.type!==Gt){o=_;break}}const a=Te(t),{mode:l}=a;if(r.isLeaving)return kl(o);const c=pd(o);if(!c)return kl(o);const u=lc(c,a,r,n);cc(c,u);const h=n.subTree,d=h&&pd(h);let f=!1;const{getTransitionKey:y}=c.type;if(y){const _=y();s===void 0?s=_:_!==s&&(s=_,f=!0)}if(d&&d.type!==Gt&&(!Pr(c,d)||f)){const _=lc(d,a,r,n);if(cc(d,_),l==="out-in")return r.isLeaving=!0,_.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},kl(o);l==="in-out"&&c.type!==Gt&&(_.delayLeave=(v,R,N)=>{const A=gg(r,d);A[String(d.key)]=d,v[Kn]=()=>{R(),v[Kn]=void 0,delete u.delayedLeave},u.delayedLeave=N})}return o}}},vE=yE;function gg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function lc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:y,onBeforeAppear:_,onAppear:v,onAfterAppear:R,onAppearCancelled:N}=e,A=String(t.key),k=gg(n,t),Q=(H,ie)=>{H&&Wt(H,r,9,ie)},se=(H,ie)=>{const he=ie[1];Q(H,ie),Z(H)?H.every(Oe=>Oe.length<=1)&&he():H.length<=1&&he()},F={mode:i,persisted:o,beforeEnter(H){let ie=a;if(!n.isMounted)if(s)ie=_||a;else return;H[Kn]&&H[Kn](!0);const he=k[A];he&&Pr(t,he)&&he.el[Kn]&&he.el[Kn](),Q(ie,[H])},enter(H){let ie=l,he=c,Oe=u;if(!n.isMounted)if(s)ie=v||l,he=R||c,Oe=N||u;else return;let j=!1;const q=H[Ao]=$e=>{j||(j=!0,$e?Q(Oe,[H]):Q(he,[H]),F.delayedLeave&&F.delayedLeave(),H[Ao]=void 0)};ie?se(ie,[H,q]):q()},leave(H,ie){const he=String(t.key);if(H[Ao]&&H[Ao](!0),n.isUnmounting)return ie();Q(h,[H]);let Oe=!1;const j=H[Kn]=q=>{Oe||(Oe=!0,ie(),q?Q(y,[H]):Q(f,[H]),H[Kn]=void 0,k[he]===t&&delete k[he])};k[he]=t,d?se(d,[H,j]):j()},clone(H){return lc(H,e,n,r)}};return F}function kl(t){if(Fa(t))return t=ar(t),t.children=null,t}function pd(t){return Fa(t)?t.children?t.children[0]:void 0:t}function cc(t,e){t.shapeFlag&6&&t.component?cc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function mg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Le?(o.patchFlag&128&&s++,r=r.concat(mg(o.children,e,a))):(e||o.type!==Gt)&&r.push(a!=null?ar(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function wn(t,e){return de(t)?(()=>et({name:t.name},e,{setup:t}))():t}const hi=t=>!!t.type.__asyncLoader,Fa=t=>t.type.__isKeepAlive;function EE(t,e){_g(t,"a",e)}function wE(t,e){_g(t,"da",e)}function _g(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ua(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Fa(s.parent.vnode)&&IE(r,e,n,s),s=s.parent}}function IE(t,e,n,r){const s=Ua(e,t,r,!0);mu(()=>{tu(r[e],s)},n)}function Ua(t,e,n=st,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ls(),Is(n);const a=Wt(e,n,t,o);return Mr(),Fs(),a});return r?s.unshift(i):s.push(i),i}}const Vn=t=>(e,n=st)=>(!Ri||t==="sp")&&Ua(t,(...r)=>e(...r),n),TE=Vn("bm"),Us=Vn("m"),AE=Vn("bu"),bE=Vn("u"),gu=Vn("bum"),mu=Vn("um"),PE=Vn("sp"),RE=Vn("rtg"),SE=Vn("rtc");function CE(t,e=st){Ua("ec",t,e)}function An(t,e,n,r){let s;const i=n&&n[r];if(Z(t)||Ke(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ke(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function kE(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(Z(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}function Ne(t,e,n={},r,s){if(ft.isCE||ft.parent&&hi(ft.parent)&&ft.parent.isCE)return e!=="default"&&(n.name=e),ze("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),z();const o=i&&yg(i(n)),a=en(Le,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function yg(t){return t.some(e=>ta(e)?!(e.type===Gt||e.type===Le&&!yg(e.children)):!0)?t:null}function OE(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:Vo(r)]=t[r];return n}const uc=t=>t?kg(t)?ja(t)||t.proxy:uc(t.parent):null,di=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uc(t.parent),$root:t=>uc(t.root),$emit:t=>t.emit,$options:t=>_u(t),$forceUpdate:t=>t.f||(t.f=()=>hu(t.update)),$nextTick:t=>t.n||(t.n=ag.bind(t.proxy)),$watch:t=>mE.bind(t)}),Ol=(t,e)=>t!==Me&&!t.__isScriptSetup&&Ie(t,e),NE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ol(r,e))return o[e]=1,r[e];if(s!==Me&&Ie(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Ie(c,e))return o[e]=3,i[e];if(n!==Me&&Ie(n,e))return o[e]=4,n[e];hc&&(o[e]=0)}}const u=di[e];let h,d;if(u)return e==="$attrs"&&Ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Me&&Ie(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ie(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ol(s,e)?(s[e]=n,!0):r!==Me&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Me&&Ie(t,o)||Ol(e,o)||(a=i[0])&&Ie(a,o)||Ie(r,o)||Ie(di,o)||Ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vg(){return xE().slots}function xE(){const t=Eu();return t.setupContext||(t.setupContext=Ng(t))}function gd(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hc=!0;function DE(t){const e=_u(t),n=t.proxy,r=t.ctx;hc=!1,e.beforeCreate&&md(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:y,activated:_,deactivated:v,beforeDestroy:R,beforeUnmount:N,destroyed:A,unmounted:k,render:Q,renderTracked:se,renderTriggered:F,errorCaptured:H,serverPrefetch:ie,expose:he,inheritAttrs:Oe,components:j,directives:q,filters:$e}=e;if(c&&VE(c,r,null),o)for(const ve in o){const ge=o[ve];de(ge)&&(r[ve]=ge.bind(n))}if(s){const ve=s.call(n,n);ke(ve)&&(t.data=Da(ve))}if(hc=!0,i)for(const ve in i){const ge=i[ve],_t=de(ge)?ge.bind(n,n):de(ge.get)?ge.get.bind(n,n):nn,Be=!de(ge)&&de(ge.set)?ge.set.bind(n):nn,yt=oe({get:_t,set:Be});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>yt.value,set:vt=>yt.value=vt})}if(a)for(const ve in a)Eg(a[ve],r,n,ve);if(l){const ve=de(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(ge=>{ds(ge,ve[ge])})}u&&md(u,t,"c");function _e(ve,ge){Z(ge)?ge.forEach(_t=>ve(_t.bind(n))):ge&&ve(ge.bind(n))}if(_e(TE,h),_e(Us,d),_e(AE,f),_e(bE,y),_e(EE,_),_e(wE,v),_e(CE,H),_e(SE,se),_e(RE,F),_e(gu,N),_e(mu,k),_e(PE,ie),Z(he))if(he.length){const ve=t.exposed||(t.exposed={});he.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>n[ge],set:_t=>n[ge]=_t})})}else t.exposed||(t.exposed={});Q&&t.render===nn&&(t.render=Q),Oe!=null&&(t.inheritAttrs=Oe),j&&(t.components=j),q&&(t.directives=q)}function VE(t,e,n=nn){Z(t)&&(t=dc(t));for(const r in t){const s=t[r];let i;ke(s)?"default"in s?i=Pt(s.from||r,s.default,!0):i=Pt(s.from||r):i=Pt(s),it(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function md(t,e,n){Wt(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Eg(t,e,n,r){const s=r.includes(".")?fg(n,r):()=>n[r];if(Ke(t)){const i=e[t];de(i)&&zt(s,i)}else if(de(t))zt(s,t.bind(n));else if(ke(t))if(Z(t))t.forEach(i=>Eg(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&zt(s,i,t)}}function _u(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Zo(l,c,o,!0)),Zo(l,e,o)),ke(e)&&i.set(e,l),l}function Zo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Zo(t,i,n,!0),s&&s.forEach(o=>Zo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ME[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ME={data:_d,props:yd,emits:yd,methods:si,computed:si,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:si,directives:si,watch:FE,provide:_d,inject:LE};function _d(t,e){return e?t?function(){return et(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function LE(t,e){return si(dc(t),dc(e))}function dc(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function si(t,e){return t?et(Object.create(null),t,e):e}function yd(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:et(Object.create(null),gd(t),gd(e??{})):e}function FE(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function wg(){return{app:null,config:{isNativeTag:lv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let UE=0;function $E(t,e){return function(r,s=null){de(r)||(r=et({},r)),s!=null&&!ke(s)&&(s=null);const i=wg(),o=new WeakSet;let a=!1;const l=i.app={_uid:UE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:cw,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&de(c.install)?(o.add(c),c.install(l,...u)):de(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=ze(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ja(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){ea=l;try{return c()}finally{ea=null}}};return l}}let ea=null;function ds(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function Pt(t,e,n=!1){const r=st||ft;if(r||ea){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ea._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function BE(t,e,n,r=!1){const s={},i={};Go(i,Ba,1),t.propsDefaults=Object.create(null),Ig(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Zp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Te(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ma(t.emitsOptions,d))continue;const f=e[d];if(l)if(Ie(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const y=vn(d);s[y]=fc(l,a,y,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{Ig(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!Ie(e,h)&&((u=Ms(h))===h||!Ie(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=fc(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Ie(e,h))&&(delete i[h],c=!0)}c&&Sn(t,"set","$attrs")}function Ig(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Do(l))continue;const c=e[l];let u;s&&Ie(s,u=vn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ma(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Te(n),c=a||Me;for(let u=0;u<i.length;u++){const h=i[u];n[h]=fc(s,l,h,c[h],t,!Ie(c,h))}}return o}function fc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ie(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Is(s),r=c[n]=l.call(null,e),Mr())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ms(n))&&(r=!0))}return r}function Tg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!de(t)){const u=h=>{l=!0;const[d,f]=Tg(h,e,!0);et(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ke(t)&&r.set(t,as),as;if(Z(i))for(let u=0;u<i.length;u++){const h=vn(i[u]);vd(h)&&(o[h]=Me)}else if(i)for(const u in i){const h=vn(u);if(vd(h)){const d=i[u],f=o[h]=Z(d)||de(d)?{type:d}:et({},d);if(f){const y=Id(Boolean,f.type),_=Id(String,f.type);f[0]=y>-1,f[1]=_<0||y<_,(y>-1||Ie(f,"default"))&&a.push(h)}}}const c=[o,a];return ke(t)&&r.set(t,c),c}function vd(t){return t[0]!=="$"}function Ed(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function wd(t,e){return Ed(t)===Ed(e)}function Id(t,e){return Z(e)?e.findIndex(n=>wd(n,t)):de(e)&&wd(e,t)?0:-1}const Ag=t=>t[0]==="_"||t==="$stable",yu=t=>Z(t)?t.map(cn):[cn(t)],qE=(t,e,n)=>{if(e._n)return e;const r=hs((...s)=>yu(e(...s)),n);return r._c=!1,r},bg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ag(s))continue;const i=t[s];if(de(i))e[s]=qE(s,i,r);else if(i!=null){const o=yu(i);e[s]=()=>o}}},Pg=(t,e)=>{const n=yu(e);t.slots.default=()=>n},HE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Te(e),Go(e,"_",n)):bg(e,t.slots={})}else t.slots={},e&&Pg(t,e);Go(t.slots,Ba,1)},zE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(et(s,e),!n&&a===1&&delete s._):(i=!e.$stable,bg(e,s)),o=e}else e&&(Pg(t,e),o={default:1});if(i)for(const a in s)!Ag(a)&&o[a]==null&&delete s[a]};function pc(t,e,n,r,s=!1){if(Z(t)){t.forEach((d,f)=>pc(d,e&&(Z(e)?e[f]:e),n,r,s));return}if(hi(r)&&!s)return;const i=r.shapeFlag&4?ja(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Me?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ke(c)?(u[c]=null,Ie(h,c)&&(h[c]=null)):it(c)&&(c.value=null)),de(l))tr(l,a,12,[o,u]);else{const d=Ke(l),f=it(l);if(d||f){const y=()=>{if(t.f){const _=d?Ie(h,l)?h[l]:u[l]:l.value;s?Z(_)&&tu(_,i):Z(_)?_.includes(i)||_.push(i):d?(u[l]=[i],Ie(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ie(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Vt(y,n)):y()}}}const Vt=pE;function KE(t){return WE(t)}function WE(t,e){const n=rc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=nn,insertStaticContent:y}=t,_=(p,g,m,E=null,T=null,P=null,L=!1,x=null,D=!!g.dynamicChildren)=>{if(p===g)return;p&&!Pr(p,g)&&(E=w(p),vt(p,T,P,!0),p=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:C,ref:X,shapeFlag:K}=g;switch(C){case $a:v(p,g,m,E);break;case Gt:R(p,g,m,E);break;case fi:p==null&&N(g,m,E,L);break;case Le:j(p,g,m,E,T,P,L,x,D);break;default:K&1?Q(p,g,m,E,T,P,L,x,D):K&6?q(p,g,m,E,T,P,L,x,D):(K&64||K&128)&&C.process(p,g,m,E,T,P,L,x,D,V)}X!=null&&T&&pc(X,p&&p.ref,P,g||p,!g)},v=(p,g,m,E)=>{if(p==null)r(g.el=a(g.children),m,E);else{const T=g.el=p.el;g.children!==p.children&&c(T,g.children)}},R=(p,g,m,E)=>{p==null?r(g.el=l(g.children||""),m,E):g.el=p.el},N=(p,g,m,E)=>{[p.el,p.anchor]=y(p.children,g,m,E,p.el,p.anchor)},A=({el:p,anchor:g},m,E)=>{let T;for(;p&&p!==g;)T=d(p),r(p,m,E),p=T;r(g,m,E)},k=({el:p,anchor:g})=>{let m;for(;p&&p!==g;)m=d(p),s(p),p=m;s(g)},Q=(p,g,m,E,T,P,L,x,D)=>{L=L||g.type==="svg",p==null?se(g,m,E,T,P,L,x,D):ie(p,g,T,P,L,x,D)},se=(p,g,m,E,T,P,L,x)=>{let D,C;const{type:X,props:K,shapeFlag:J,transition:re,dirs:pe}=p;if(D=p.el=o(p.type,P,K&&K.is,K),J&8?u(D,p.children):J&16&&H(p.children,D,null,E,T,P&&X!=="foreignObject",L,x),pe&&Er(p,null,E,"created"),F(D,p,p.scopeId,L,E),K){for(const be in K)be!=="value"&&!Do(be)&&i(D,be,null,K[be],P,p.children,E,T,nt);"value"in K&&i(D,"value",null,K.value),(C=K.onVnodeBeforeMount)&&ln(C,E,p)}pe&&Er(p,null,E,"beforeMount");const Pe=GE(T,re);Pe&&re.beforeEnter(D),r(D,g,m),((C=K&&K.onVnodeMounted)||Pe||pe)&&Vt(()=>{C&&ln(C,E,p),Pe&&re.enter(D),pe&&Er(p,null,E,"mounted")},T)},F=(p,g,m,E,T)=>{if(m&&f(p,m),E)for(let P=0;P<E.length;P++)f(p,E[P]);if(T){let P=T.subTree;if(g===P){const L=T.vnode;F(p,L,L.scopeId,L.slotScopeIds,T.parent)}}},H=(p,g,m,E,T,P,L,x,D=0)=>{for(let C=D;C<p.length;C++){const X=p[C]=x?Wn(p[C]):cn(p[C]);_(null,X,g,m,E,T,P,L,x)}},ie=(p,g,m,E,T,P,L)=>{const x=g.el=p.el;let{patchFlag:D,dynamicChildren:C,dirs:X}=g;D|=p.patchFlag&16;const K=p.props||Me,J=g.props||Me;let re;m&&wr(m,!1),(re=J.onVnodeBeforeUpdate)&&ln(re,m,g,p),X&&Er(g,p,m,"beforeUpdate"),m&&wr(m,!0);const pe=T&&g.type!=="foreignObject";if(C?he(p.dynamicChildren,C,x,m,E,pe,P):L||ge(p,g,x,null,m,E,pe,P,!1),D>0){if(D&16)Oe(x,g,K,J,m,E,T);else if(D&2&&K.class!==J.class&&i(x,"class",null,J.class,T),D&4&&i(x,"style",K.style,J.style,T),D&8){const Pe=g.dynamicProps;for(let be=0;be<Pe.length;be++){const Ve=Pe[be],Ut=K[Ve],Fn=J[Ve];(Fn!==Ut||Ve==="value")&&i(x,Ve,Ut,Fn,T,p.children,m,E,nt)}}D&1&&p.children!==g.children&&u(x,g.children)}else!L&&C==null&&Oe(x,g,K,J,m,E,T);((re=J.onVnodeUpdated)||X)&&Vt(()=>{re&&ln(re,m,g,p),X&&Er(g,p,m,"updated")},E)},he=(p,g,m,E,T,P,L)=>{for(let x=0;x<g.length;x++){const D=p[x],C=g[x],X=D.el&&(D.type===Le||!Pr(D,C)||D.shapeFlag&70)?h(D.el):m;_(D,C,X,null,E,T,P,L,!0)}},Oe=(p,g,m,E,T,P,L)=>{if(m!==E){if(m!==Me)for(const x in m)!Do(x)&&!(x in E)&&i(p,x,m[x],null,L,g.children,T,P,nt);for(const x in E){if(Do(x))continue;const D=E[x],C=m[x];D!==C&&x!=="value"&&i(p,x,C,D,L,g.children,T,P,nt)}"value"in E&&i(p,"value",m.value,E.value)}},j=(p,g,m,E,T,P,L,x,D)=>{const C=g.el=p?p.el:a(""),X=g.anchor=p?p.anchor:a("");let{patchFlag:K,dynamicChildren:J,slotScopeIds:re}=g;re&&(x=x?x.concat(re):re),p==null?(r(C,m,E),r(X,m,E),H(g.children,m,X,T,P,L,x,D)):K>0&&K&64&&J&&p.dynamicChildren?(he(p.dynamicChildren,J,m,T,P,L,x),(g.key!=null||T&&g===T.subTree)&&Rg(p,g,!0)):ge(p,g,m,X,T,P,L,x,D)},q=(p,g,m,E,T,P,L,x,D)=>{g.slotScopeIds=x,p==null?g.shapeFlag&512?T.ctx.activate(g,m,E,L,D):$e(g,m,E,T,P,L,D):Ce(p,g,D)},$e=(p,g,m,E,T,P,L)=>{const x=p.component=tw(p,E,T);if(Fa(p)&&(x.ctx.renderer=V),nw(x),x.asyncDep){if(T&&T.registerDep(x,_e),!p.el){const D=x.subTree=ze(Gt);R(null,D,g,m)}return}_e(x,p,g,m,T,P,L)},Ce=(p,g,m)=>{const E=g.component=p.component;if(cE(p,g,m))if(E.asyncDep&&!E.asyncResolved){ve(E,g,m);return}else E.next=g,rE(E.update),E.update();else g.el=p.el,E.vnode=g},_e=(p,g,m,E,T,P,L)=>{const x=()=>{if(p.isMounted){let{next:X,bu:K,u:J,parent:re,vnode:pe}=p,Pe=X,be;wr(p,!1),X?(X.el=pe.el,ve(p,X,L)):X=pe,K&&Mo(K),(be=X.props&&X.props.onVnodeBeforeUpdate)&&ln(be,re,X,pe),wr(p,!0);const Ve=Cl(p),Ut=p.subTree;p.subTree=Ve,_(Ut,Ve,h(Ut.el),w(Ut),p,T,P),X.el=Ve.el,Pe===null&&uE(p,Ve.el),J&&Vt(J,T),(be=X.props&&X.props.onVnodeUpdated)&&Vt(()=>ln(be,re,X,pe),T)}else{let X;const{el:K,props:J}=g,{bm:re,m:pe,parent:Pe}=p,be=hi(g);if(wr(p,!1),re&&Mo(re),!be&&(X=J&&J.onVnodeBeforeMount)&&ln(X,Pe,g),wr(p,!0),K&&we){const Ve=()=>{p.subTree=Cl(p),we(K,p.subTree,p,T,null)};be?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ve()):Ve()}else{const Ve=p.subTree=Cl(p);_(null,Ve,m,E,p,T,P),g.el=Ve.el}if(pe&&Vt(pe,T),!be&&(X=J&&J.onVnodeMounted)){const Ve=g;Vt(()=>ln(X,Pe,Ve),T)}(g.shapeFlag&256||Pe&&hi(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&p.a&&Vt(p.a,T),p.isMounted=!0,g=m=E=null}},D=p.effect=new su(x,()=>hu(C),p.scope),C=p.update=()=>D.run();C.id=p.uid,wr(p,!0),C()},ve=(p,g,m)=>{g.component=p;const E=p.vnode.props;p.vnode=g,p.next=null,jE(p,g.props,E,m),zE(p,g.children,m),Ls(),ud(),Fs()},ge=(p,g,m,E,T,P,L,x,D=!1)=>{const C=p&&p.children,X=p?p.shapeFlag:0,K=g.children,{patchFlag:J,shapeFlag:re}=g;if(J>0){if(J&128){Be(C,K,m,E,T,P,L,x,D);return}else if(J&256){_t(C,K,m,E,T,P,L,x,D);return}}re&8?(X&16&&nt(C,T,P),K!==C&&u(m,K)):X&16?re&16?Be(C,K,m,E,T,P,L,x,D):nt(C,T,P,!0):(X&8&&u(m,""),re&16&&H(K,m,E,T,P,L,x,D))},_t=(p,g,m,E,T,P,L,x,D)=>{p=p||as,g=g||as;const C=p.length,X=g.length,K=Math.min(C,X);let J;for(J=0;J<K;J++){const re=g[J]=D?Wn(g[J]):cn(g[J]);_(p[J],re,m,null,T,P,L,x,D)}C>X?nt(p,T,P,!0,!1,K):H(g,m,E,T,P,L,x,D,K)},Be=(p,g,m,E,T,P,L,x,D)=>{let C=0;const X=g.length;let K=p.length-1,J=X-1;for(;C<=K&&C<=J;){const re=p[C],pe=g[C]=D?Wn(g[C]):cn(g[C]);if(Pr(re,pe))_(re,pe,m,null,T,P,L,x,D);else break;C++}for(;C<=K&&C<=J;){const re=p[K],pe=g[J]=D?Wn(g[J]):cn(g[J]);if(Pr(re,pe))_(re,pe,m,null,T,P,L,x,D);else break;K--,J--}if(C>K){if(C<=J){const re=J+1,pe=re<X?g[re].el:E;for(;C<=J;)_(null,g[C]=D?Wn(g[C]):cn(g[C]),m,pe,T,P,L,x,D),C++}}else if(C>J)for(;C<=K;)vt(p[C],T,P,!0),C++;else{const re=C,pe=C,Pe=new Map;for(C=pe;C<=J;C++){const Xe=g[C]=D?Wn(g[C]):cn(g[C]);Xe.key!=null&&Pe.set(Xe.key,C)}let be,Ve=0;const Ut=J-pe+1;let Fn=!1,jt=0;const Jt=new Array(Ut);for(C=0;C<Ut;C++)Jt[C]=0;for(C=re;C<=K;C++){const Xe=p[C];if(Ve>=Ut){vt(Xe,T,P,!0);continue}let Et;if(Xe.key!=null)Et=Pe.get(Xe.key);else for(be=pe;be<=J;be++)if(Jt[be-pe]===0&&Pr(Xe,g[be])){Et=be;break}Et===void 0?vt(Xe,T,P,!0):(Jt[Et-pe]=C+1,Et>=jt?jt=Et:Fn=!0,_(Xe,g[Et],m,null,T,P,L,x,D),Ve++)}const Un=Fn?QE(Jt):as;for(be=Un.length-1,C=Ut-1;C>=0;C--){const Xe=pe+C,Et=g[Xe],$n=Xe+1<X?g[Xe+1].el:E;Jt[C]===0?_(null,Et,m,$n,T,P,L,x,D):Fn&&(be<0||C!==Un[be]?yt(Et,m,$n,2):be--)}}},yt=(p,g,m,E,T=null)=>{const{el:P,type:L,transition:x,children:D,shapeFlag:C}=p;if(C&6){yt(p.component.subTree,g,m,E);return}if(C&128){p.suspense.move(g,m,E);return}if(C&64){L.move(p,g,m,V);return}if(L===Le){r(P,g,m);for(let K=0;K<D.length;K++)yt(D[K],g,m,E);r(p.anchor,g,m);return}if(L===fi){A(p,g,m);return}if(E!==2&&C&1&&x)if(E===0)x.beforeEnter(P),r(P,g,m),Vt(()=>x.enter(P),T);else{const{leave:K,delayLeave:J,afterLeave:re}=x,pe=()=>r(P,g,m),Pe=()=>{K(P,()=>{pe(),re&&re()})};J?J(P,pe,Pe):Pe()}else r(P,g,m)},vt=(p,g,m,E=!1,T=!1)=>{const{type:P,props:L,ref:x,children:D,dynamicChildren:C,shapeFlag:X,patchFlag:K,dirs:J}=p;if(x!=null&&pc(x,null,m,p,!0),X&256){g.ctx.deactivate(p);return}const re=X&1&&J,pe=!hi(p);let Pe;if(pe&&(Pe=L&&L.onVnodeBeforeUnmount)&&ln(Pe,g,p),X&6)Jr(p.component,m,E);else{if(X&128){p.suspense.unmount(m,E);return}re&&Er(p,null,g,"beforeUnmount"),X&64?p.type.remove(p,g,m,T,V,E):C&&(P!==Le||K>0&&K&64)?nt(C,g,m,!1,!0):(P===Le&&K&384||!T&&X&16)&&nt(D,g,m),E&&Ln(p)}(pe&&(Pe=L&&L.onVnodeUnmounted)||re)&&Vt(()=>{Pe&&ln(Pe,g,p),re&&Er(p,null,g,"unmounted")},m)},Ln=p=>{const{type:g,el:m,anchor:E,transition:T}=p;if(g===Le){tt(m,E);return}if(g===fi){k(p);return}const P=()=>{s(m),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(p.shapeFlag&1&&T&&!T.persisted){const{leave:L,delayLeave:x}=T,D=()=>L(m,P);x?x(p.el,P,D):D()}else P()},tt=(p,g)=>{let m;for(;p!==g;)m=d(p),s(p),p=m;s(g)},Jr=(p,g,m)=>{const{bum:E,scope:T,update:P,subTree:L,um:x}=p;E&&Mo(E),T.stop(),P&&(P.active=!1,vt(L,p,g,m)),x&&Vt(x,g),Vt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},nt=(p,g,m,E=!1,T=!1,P=0)=>{for(let L=P;L<p.length;L++)vt(p[L],g,m,E,T)},w=p=>p.shapeFlag&6?w(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),U=(p,g,m)=>{p==null?g._vnode&&vt(g._vnode,null,null,!0):_(g._vnode||null,p,g,null,null,null,m),ud(),cg(),g._vnode=p},V={p:_,um:vt,m:yt,r:Ln,mt:$e,mc:H,pc:ge,pbc:he,n:w,o:t};let G,we;return e&&([G,we]=e(V)),{render:U,hydrate:G,createApp:$E(U,G)}}function wr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function GE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rg(t,e,n=!1){const r=t.children,s=e.children;if(Z(r)&&Z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Wn(s[i]),a.el=o.el),n||Rg(o,a)),a.type===$a&&(a.el=o.el)}}function QE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const JE=t=>t.__isTeleport,Le=Symbol.for("v-fgt"),$a=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),fi=Symbol.for("v-stc"),pi=[];let tn=null;function z(t=!1){pi.push(tn=t?null:[])}function YE(){pi.pop(),tn=pi[pi.length-1]||null}let Pi=1;function Td(t){Pi+=t}function Sg(t){return t.dynamicChildren=Pi>0?tn||as:null,YE(),Pi>0&&tn&&tn.push(t),t}function ne(t,e,n,r,s,i){return Sg(O(t,e,n,r,s,i,!0))}function en(t,e,n,r,s){return Sg(ze(t,e,n,r,s,!0))}function ta(t){return t?t.__v_isVNode===!0:!1}function Pr(t,e){return t.type===e.type&&t.key===e.key}const Ba="__vInternal",Cg=({key:t})=>t??null,Fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||it(t)||de(t)?{i:ft,r:t,k:e,f:!!n}:t:null);function O(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cg(e),ref:e&&Fo(e),scopeId:La,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ft};return a?(vu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),Pi>0&&!o&&tn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&tn.push(l),l}const ze=XE;function XE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===dg)&&(t=Gt),ta(t)){const a=ar(t,e,!0);return n&&vu(a,n),Pi>0&&!i&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag|=-2,a}if(ow(t)&&(t=t.__vccOpts),e){e=Mt(e);let{class:a,style:l}=e;a&&!Ke(a)&&(e.class=xe(a)),ke(l)&&(tg(l)&&!Z(l)&&(l=et({},l)),e.style=xr(l))}const o=Ke(t)?1:fE(t)?128:JE(t)?64:ke(t)?4:de(t)?2:0;return O(t,e,n,r,s,o,i,!0)}function Mt(t){return t?tg(t)||Ba in t?et({},t):t:null}function ar(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Xt(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Cg(a),ref:e&&e.ref?n&&s?Z(s)?s.concat(Fo(e)):[s,Fo(e)]:Fo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ar(t.ssContent),ssFallback:t.ssFallback&&ar(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Vr(t=" ",e=0){return ze($a,null,t,e)}function AO(t,e){const n=ze(fi,null,t);return n.staticCount=e,n}function It(t="",e=!1){return e?(z(),en(Gt,null,t)):ze(Gt,null,t)}function cn(t){return t==null||typeof t=="boolean"?ze(Gt):Z(t)?ze(Le,null,t.slice()):typeof t=="object"?Wn(t):ze($a,null,String(t))}function Wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ar(t)}function vu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),vu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ba in e)?e._ctx=ft:s===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),r&64?(n=16,e=[Vr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xt(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xe([e.class,r.class]));else if(s==="style")e.style=xr([e.style,r.style]);else if(Sa(s)){const i=e[s],o=r[s];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ln(t,e,n,r=null){Wt(t,e,7,[n,r])}const ZE=wg();let ew=0;function tw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ZE,i={uid:ew++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new jp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tg(r,s),emitsOptions:hg(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=oE.bind(null,i),t.ce&&t.ce(i),i}let st=null;const Eu=()=>st||ft;let wu,Yr,Ad="__VUE_INSTANCE_SETTERS__";(Yr=rc()[Ad])||(Yr=rc()[Ad]=[]),Yr.push(t=>st=t),wu=t=>{Yr.length>1?Yr.forEach(e=>e(t)):Yr[0](t)};const Is=t=>{wu(t),t.scope.on()},Mr=()=>{st&&st.scope.off(),wu(null)};function kg(t){return t.vnode.shapeFlag&4}let Ri=!1;function nw(t,e=!1){Ri=e;const{props:n,children:r}=t.vnode,s=kg(t);BE(t,n,s,e),HE(t,r);const i=s?rw(t,e):void 0;return Ri=!1,i}function rw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=lu(new Proxy(t.ctx,NE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Ng(t):null;Is(t),Ls();const i=tr(r,t,0,[t.props,s]);if(Fs(),Mr(),Lp(i)){if(i.then(Mr,Mr),e)return i.then(o=>{bd(t,o,e)}).catch(o=>{Va(o,t,0)});t.asyncDep=i}else bd(t,i,e)}else Og(t,e)}function bd(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=ig(e)),Og(t,n)}let Pd;function Og(t,e,n){const r=t.type;if(!t.render){if(!e&&Pd&&!r.render){const s=r.template||_u(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=et(et({isCustomElement:i,delimiters:a},o),l);r.render=Pd(s,c)}}t.render=r.render||nn}{Is(t),Ls();try{DE(t)}finally{Fs(),Mr()}}}function sw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ft(t,"get","$attrs"),e[n]}}))}function Ng(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return sw(t)},slots:t.slots,emit:t.emit,expose:e}}function ja(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ig(lu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in di)return di[n](t)},has(e,n){return n in e||n in di}}))}function iw(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function ow(t){return de(t)&&"__vccOpts"in t}const oe=(t,e)=>eE(t,e,Ri);function Iu(t,e,n){const r=arguments.length;return r===2?ke(e)&&!Z(e)?ta(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ta(n)&&(n=[n]),ze(t,e,n))}const aw=Symbol.for("v-scx"),lw=()=>Pt(aw),cw="3.3.9",uw="http://www.w3.org/2000/svg",Rr=typeof document<"u"?document:null,Rd=Rr&&Rr.createElement("template"),hw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Rr.createElementNS(uw,t):Rr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rr.createTextNode(t),createComment:t=>Rr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Rd.innerHTML=r?`<svg>${t}</svg>`:t;const a=Rd.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},jn="transition",Ys="animation",Si=Symbol("_vtc"),qa=(t,{slots:e})=>Iu(vE,dw(t),e);qa.displayName="Transition";const xg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};qa.props=et({},pg,xg);const Ir=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Sd=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function dw(t){const e={};for(const j in t)j in xg||(e[j]=t[j]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,y=fw(s),_=y&&y[0],v=y&&y[1],{onBeforeEnter:R,onEnter:N,onEnterCancelled:A,onLeave:k,onLeaveCancelled:Q,onBeforeAppear:se=R,onAppear:F=N,onAppearCancelled:H=A}=e,ie=(j,q,$e)=>{Tr(j,q?u:a),Tr(j,q?c:o),$e&&$e()},he=(j,q)=>{j._isLeaving=!1,Tr(j,h),Tr(j,f),Tr(j,d),q&&q()},Oe=j=>(q,$e)=>{const Ce=j?F:N,_e=()=>ie(q,j,$e);Ir(Ce,[q,_e]),Cd(()=>{Tr(q,j?l:i),qn(q,j?u:a),Sd(Ce)||kd(q,r,_,_e)})};return et(e,{onBeforeEnter(j){Ir(R,[j]),qn(j,i),qn(j,o)},onBeforeAppear(j){Ir(se,[j]),qn(j,l),qn(j,c)},onEnter:Oe(!1),onAppear:Oe(!0),onLeave(j,q){j._isLeaving=!0;const $e=()=>he(j,q);qn(j,h),mw(),qn(j,d),Cd(()=>{j._isLeaving&&(Tr(j,h),qn(j,f),Sd(k)||kd(j,r,v,$e))}),Ir(k,[j,$e])},onEnterCancelled(j){ie(j,!1),Ir(A,[j])},onAppearCancelled(j){ie(j,!0),Ir(H,[j])},onLeaveCancelled(j){he(j),Ir(Q,[j])}})}function fw(t){if(t==null)return null;if(ke(t))return[Nl(t.enter),Nl(t.leave)];{const e=Nl(t);return[e,e]}}function Nl(t){return pv(t)}function qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Si]||(t[Si]=new Set)).add(e)}function Tr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Si];n&&(n.delete(e),n.size||(t[Si]=void 0))}function Cd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let pw=0;function kd(t,e,n,r){const s=t._endId=++pw,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=gw(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),i()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function gw(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(`${jn}Delay`),i=r(`${jn}Duration`),o=Od(s,i),a=r(`${Ys}Delay`),l=r(`${Ys}Duration`),c=Od(a,l);let u=null,h=0,d=0;e===jn?o>0&&(u=jn,h=o,d=i.length):e===Ys?c>0&&(u=Ys,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?jn:Ys:null,d=u?u===jn?i.length:l.length:0);const f=u===jn&&/\b(transform|all)(,|$)/.test(r(`${jn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Od(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Nd(n)+Nd(t[r])))}function Nd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function mw(){return document.body.offsetHeight}function _w(t,e,n){const r=t[Si];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tu=Symbol("_vod"),xd={beforeMount(t,{value:e},{transition:n}){t[Tu]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Xs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Xs(t,!0),r.enter(t)):r.leave(t,()=>{Xs(t,!1)}):Xs(t,e))},beforeUnmount(t,{value:e}){Xs(t,e)}};function Xs(t,e){t.style.display=e?t[Tu]:"none"}function yw(t,e,n){const r=t.style,s=Ke(n);if(n&&!s){if(e&&!Ke(e))for(const i in e)n[i]==null&&gc(r,i,"");for(const i in n)gc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Tu in t&&(r.display=i)}}const Dd=/\s*!important$/;function gc(t,e,n){if(Z(n))n.forEach(r=>gc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=vw(t,e);Dd.test(n)?t.setProperty(Ms(r),n.replace(Dd,""),"important"):t[r]=n}}const Vd=["Webkit","Moz","ms"],xl={};function vw(t,e){const n=xl[e];if(n)return n;let r=vn(e);if(r!=="filter"&&r in t)return xl[e]=r;r=Oa(r);for(let s=0;s<Vd.length;s++){const i=Vd[s]+r;if(i in t)return xl[e]=i}return e}const Md="http://www.w3.org/1999/xlink";function Ew(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Md,e.slice(6,e.length)):t.setAttributeNS(Md,e,n);else{const i=Ev(e);n==null||i&&!$p(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ww(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=$p(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Sr(t,e,n,r){t.addEventListener(e,n,r)}function Iw(t,e,n,r){t.removeEventListener(e,n,r)}const Ld=Symbol("_vei");function Tw(t,e,n,r,s=null){const i=t[Ld]||(t[Ld]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Aw(e);if(r){const c=i[e]=Rw(r,s);Sr(t,a,c,l)}else o&&(Iw(t,a,o,l),i[e]=void 0)}}const Fd=/(?:Once|Passive|Capture)$/;function Aw(t){let e;if(Fd.test(t)){e={};let r;for(;r=t.match(Fd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ms(t.slice(2)),e]}let Dl=0;const bw=Promise.resolve(),Pw=()=>Dl||(bw.then(()=>Dl=0),Dl=Date.now());function Rw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Wt(Sw(r,n.value),e,5,[r])};return n.value=t,n.attached=Pw(),n}function Sw(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ud=/^on[a-z]/,Cw=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?_w(t,r,s):e==="style"?yw(t,n,r):Sa(e)?eu(e)||Tw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kw(t,e,r,s))?ww(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ew(t,e,r,s))};function kw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ud.test(e)&&de(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ud.test(e)&&Ke(n)?!1:e in t}function Kr(t){const e=Eu();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>_c(i,s))},r=()=>{const s=t(e.proxy);mc(e.subTree,s),n(s)};gE(r),Us(()=>{const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),mu(()=>s.disconnect())})}function mc(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{mc(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)_c(t.el,e);else if(t.type===Le)t.children.forEach(n=>mc(n,e));else if(t.type===fi){let{el:n,anchor:r}=t;for(;n&&(_c(n,e),n!==r);)n=n.nextSibling}}function _c(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const na=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>Mo(e,n):e};function Ow(t){t.target.composing=!0}function $d(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fs=Symbol("_assign"),Bd={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[fs]=na(s);const i=r||s.props&&s.props.type==="number";Sr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Qo(a)),t[fs](a)}),n&&Sr(t,"change",()=>{t.value=t.value.trim()}),e||(Sr(t,"compositionstart",Ow),Sr(t,"compositionend",$d),Sr(t,"change",$d))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[fs]=na(i),t.composing)return;const o=s||t.type==="number"?Qo(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},bO={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ca(e);Sr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Qo(ra(o)):ra(o));t[fs](t.multiple?s?new Set(i):i:i[0])}),t[fs]=na(r)},mounted(t,{value:e}){jd(t,e)},beforeUpdate(t,e,n){t[fs]=na(n)},updated(t,{value:e}){jd(t,e)}};function jd(t,e){const n=t.multiple;if(!(n&&!Z(e)&&!Ca(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=ra(i);if(n)Z(e)?i.selected=Iv(e,o)>-1:i.selected=e.has(o);else if(Na(ra(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ra(t){return"_value"in t?t._value:t.value}const Nw=["ctrl","shift","alt","meta"],xw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nw.some(n=>t[`${n}Key`]&&!e.includes(n))},Ts=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=xw[e[s]];if(i&&i(n,e))return}return t(n,...r)},Dw=et({patchProp:Cw},hw);let qd;function Vw(){return qd||(qd=KE(Dw))}const Mw=(...t)=>{const e=Vw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Lw(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Lw(t){return Ke(t)?document.querySelector(t):t}var Fw=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Uw=Symbol();var Hd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hd||(Hd={}));function $w(){const t=Tv(!0),e=t.run(()=>Je({}));let n=[],r=[];const s=lu({install(i){s._a=i,i.provide(Uw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Fw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ts=typeof window<"u";function Bw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function Vl(t,e){const n={};for(const r in e){const s=e[r];n[r]=sn(s)?s.map(t):t(s)}return n}const gi=()=>{},sn=Array.isArray,jw=/\/$/,qw=t=>t.replace(jw,"");function Ml(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ww(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Hw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&As(e.matched[r],n.matched[s])&&Dg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Kw(t[n],e[n]))return!1;return!0}function Kw(t,e){return sn(t)?Kd(t,e):sn(e)?Kd(e,t):t===e}function Kd(t,e){return sn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ww(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ci;(function(t){t.pop="pop",t.push="push"})(Ci||(Ci={}));var mi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mi||(mi={}));function Gw(t){if(!t)if(ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qw(t)}const Qw=/^[^#]+#/;function Jw(t,e){return t.replace(Qw,"#")+e}function Yw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ha=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Yw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wd(t,e){return(history.state?history.state.position-e:-1)+t}const yc=new Map;function Zw(t,e){yc.set(t,e)}function eI(t){const e=yc.get(t);return yc.delete(t),e}let tI=()=>location.protocol+"//"+location.host;function Vg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),zd(l,"")}return zd(n,t)+r+s}function nI(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=Vg(t,location),y=n.value,_=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===y){o=null;return}v=_?d.position-_.position:0}else r(f);s.forEach(R=>{R(n.value,y,{delta:v,type:Ci.pop,direction:v?v>0?mi.forward:mi.back:mi.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Re({},d.state,{scroll:Ha()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Gd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ha():null}}function rI(t){const{history:e,location:n}=window,r={value:Vg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:tI()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Re({},e.state,Gd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Re({},s.value,e.state,{forward:l,scroll:Ha()});i(u.current,u,!0);const h=Re({},Gd(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function sI(t){t=Gw(t);const e=rI(t),n=nI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:Jw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function iI(t){return typeof t=="string"||t&&typeof t=="object"}function Mg(t){return typeof t=="string"||typeof t=="symbol"}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lg=Symbol("");var Qd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qd||(Qd={}));function bs(t,e){return Re(new Error,{type:t,[Lg]:!0},e)}function In(t,e){return t instanceof Error&&Lg in t&&(e==null||!!(t.type&e))}const Jd="[^/]+?",oI={sensitive:!1,strict:!1,start:!0,end:!0},aI=/[.+*?^${}()[\]/\\]/g;function lI(t,e){const n=Re({},oI,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(aI,"\\$&"),f+=40;else if(d.type===1){const{value:y,repeatable:_,optional:v,regexp:R}=d;i.push({name:y,repeatable:_,optional:v});const N=R||Jd;if(N!==Jd){f+=10;try{new RegExp(`(${N})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${y}" (${N}): `+k.message)}}let A=_?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(A=v&&c.length<2?`(?:/${A})`:"/"+A),v&&(A+="?"),s+=A,f+=20,v&&(f+=-8),_&&(f+=-20),N===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",y=i[d-1];h[y.name]=f&&y.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:y,repeatable:_,optional:v}=f,R=y in c?c[y]:"";if(sn(R)&&!_)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const N=sn(R)?R.join("/"):R;if(!N)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function cI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function uI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=cI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Yd(r))return 1;if(Yd(s))return-1}return s.length-r.length}function Yd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hI={type:0,value:""},dI=/[a-zA-Z0-9_]/;function fI(t){if(!t)return[[]];if(t==="/")return[[hI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:dI.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function pI(t,e,n){const r=lI(fI(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function gI(t,e){const n=[],r=new Map;e=ef({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,y=mI(u);y.aliasOf=d&&d.record;const _=ef(e,u),v=[y];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of A)v.push(Re({},y,{components:d?d.record.components:y.components,path:k,aliasOf:d?d.record:y}))}let R,N;for(const A of v){const{path:k}=A;if(h&&k[0]!=="/"){const Q=h.record.path,se=Q[Q.length-1]==="/"?"":"/";A.path=h.record.path+(k&&se+k)}if(R=pI(A,h,_),d?d.alias.push(R):(N=N||R,N!==R&&N.alias.push(R),f&&u.name&&!Zd(R)&&o(u.name)),y.children){const Q=y.children;for(let se=0;se<Q.length;se++)i(Q[se],R,d&&d.children[se])}d=d||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return N?()=>{o(N)}:gi}function o(u){if(Mg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&uI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Fg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Zd(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},y,_;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw bs(1,{location:u});_=d.record.name,f=Re(Xd(h.params,d.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Xd(u.params,d.keys.map(N=>N.name))),y=d.stringify(f)}else if("path"in u)y=u.path,d=n.find(N=>N.re.test(y)),d&&(f=d.parse(y),_=d.record.name);else{if(d=h.name?r.get(h.name):n.find(N=>N.re.test(h.path)),!d)throw bs(1,{location:u,currentLocation:h});_=d.record.name,f=Re({},h.params,u.params),y=d.stringify(f)}const v=[];let R=d;for(;R;)v.unshift(R.record),R=R.parent;return{name:_,path:y,params:f,matched:v,meta:yI(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Xd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_I(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function _I(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Zd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yI(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function ef(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Fg(t,e){return e.children.some(n=>n===t||Fg(t,n))}const Ug=/#/g,vI=/&/g,EI=/\//g,wI=/=/g,II=/\?/g,$g=/\+/g,TI=/%5B/g,AI=/%5D/g,Bg=/%5E/g,bI=/%60/g,jg=/%7B/g,PI=/%7C/g,qg=/%7D/g,RI=/%20/g;function Au(t){return encodeURI(""+t).replace(PI,"|").replace(TI,"[").replace(AI,"]")}function SI(t){return Au(t).replace(jg,"{").replace(qg,"}").replace(Bg,"^")}function vc(t){return Au(t).replace($g,"%2B").replace(RI,"+").replace(Ug,"%23").replace(vI,"%26").replace(bI,"`").replace(jg,"{").replace(qg,"}").replace(Bg,"^")}function CI(t){return vc(t).replace(wI,"%3D")}function kI(t){return Au(t).replace(Ug,"%23").replace(II,"%3F")}function OI(t){return t==null?"":kI(t).replace(EI,"%2F")}function sa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function NI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace($g," "),o=i.indexOf("="),a=sa(o<0?i:i.slice(0,o)),l=o<0?null:sa(i.slice(o+1));if(a in e){let c=e[a];sn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function tf(t){let e="";for(let n in t){const r=t[n];if(n=CI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(sn(r)?r.map(i=>i&&vc(i)):[r&&vc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function xI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=sn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const DI=Symbol(""),nf=Symbol(""),bu=Symbol(""),Hg=Symbol(""),Ec=Symbol("");function Zs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(bs(4,{from:n,to:e})):h instanceof Error?a(h):iI(h)?a(bs(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ll(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(VI(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Gn(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Bw(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Gn(d,n,r,i,o)()}))}}return s}function VI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function rf(t){const e=Pt(bu),n=Pt(Hg),r=oe(()=>e.resolve(b(t.to))),s=oe(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(As.bind(null,u));if(d>-1)return d;const f=sf(l[c-2]);return c>1&&sf(u)===f&&h[h.length-1].path!==f?h.findIndex(As.bind(null,l[c-2])):d}),i=oe(()=>s.value>-1&&UI(n.params,r.value.params)),o=oe(()=>s.value>-1&&s.value===n.matched.length-1&&Dg(n.params,r.value.params));function a(l={}){return FI(l)?e[b(t.replace)?"replace":"push"](b(t.to)).catch(gi):Promise.resolve()}return{route:r,href:oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const MI=wn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rf,setup(t,{slots:e}){const n=Da(rf(t)),{options:r}=Pt(bu),s=oe(()=>({[of(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[of(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Iu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),LI=MI;function FI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function UI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!sn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function sf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const of=(t,e,n)=>t??e??n,$I=wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Pt(Ec),s=oe(()=>t.route||r.value),i=Pt(nf,0),o=oe(()=>{let c=b(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=oe(()=>s.value.matched[o.value]);ds(nf,oe(()=>o.value+1)),ds(DI,a),ds(Ec,s);const l=Je();return zt(()=>[l.value,a.value,t.name],([c,u,h],[d,f,y])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!As(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return af(n.default,{Component:d,route:c});const f=h.props[u],y=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=Iu(d,Re({},y,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return af(n.default,{Component:v,route:c})||v}}});function af(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zg=$I;function BI(t){const e=gI(t.routes,t),n=t.parseQuery||NI,r=t.stringifyQuery||tf,s=t.history,i=Zs(),o=Zs(),a=Zs(),l=Wv(Hn);let c=Hn;ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vl.bind(null,w=>""+w),h=Vl.bind(null,OI),d=Vl.bind(null,sa);function f(w,U){let V,G;return Mg(w)?(V=e.getRecordMatcher(w),G=U):G=w,e.addRoute(G,V)}function y(w){const U=e.getRecordMatcher(w);U&&e.removeRoute(U)}function _(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function R(w,U){if(U=Re({},U||l.value),typeof w=="string"){const m=Ml(n,w,U.path),E=e.resolve({path:m.path},U),T=s.createHref(m.fullPath);return Re(m,E,{params:d(E.params),hash:sa(m.hash),redirectedFrom:void 0,href:T})}let V;if("path"in w)V=Re({},w,{path:Ml(n,w.path,U.path).path});else{const m=Re({},w.params);for(const E in m)m[E]==null&&delete m[E];V=Re({},w,{params:h(m)}),U.params=h(U.params)}const G=e.resolve(V,U),we=w.hash||"";G.params=u(d(G.params));const p=Hw(r,Re({},w,{hash:SI(we),path:G.path})),g=s.createHref(p);return Re({fullPath:p,hash:we,query:r===tf?xI(w.query):w.query||{}},G,{redirectedFrom:void 0,href:g})}function N(w){return typeof w=="string"?Ml(n,w,l.value.path):Re({},w)}function A(w,U){if(c!==w)return bs(8,{from:U,to:w})}function k(w){return F(w)}function Q(w){return k(Re(N(w),{replace:!0}))}function se(w){const U=w.matched[w.matched.length-1];if(U&&U.redirect){const{redirect:V}=U;let G=typeof V=="function"?V(w):V;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=N(G):{path:G},G.params={}),Re({query:w.query,hash:w.hash,params:"path"in G?{}:w.params},G)}}function F(w,U){const V=c=R(w),G=l.value,we=w.state,p=w.force,g=w.replace===!0,m=se(V);if(m)return F(Re(N(m),{state:typeof m=="object"?Re({},we,m.state):we,force:p,replace:g}),U||V);const E=V;E.redirectedFrom=U;let T;return!p&&zw(r,G,V)&&(T=bs(16,{to:E,from:G}),yt(G,G,!0,!1)),(T?Promise.resolve(T):he(E,G)).catch(P=>In(P)?In(P,2)?P:Be(P):ge(P,E,G)).then(P=>{if(P){if(In(P,2))return F(Re({replace:g},N(P.to),{state:typeof P.to=="object"?Re({},we,P.to.state):we,force:p}),U||E)}else P=j(E,G,!0,g,we);return Oe(E,G,P),P})}function H(w,U){const V=A(w,U);return V?Promise.reject(V):Promise.resolve()}function ie(w){const U=tt.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(w):w()}function he(w,U){let V;const[G,we,p]=jI(w,U);V=Ll(G.reverse(),"beforeRouteLeave",w,U);for(const m of G)m.leaveGuards.forEach(E=>{V.push(Gn(E,w,U))});const g=H.bind(null,w,U);return V.push(g),nt(V).then(()=>{V=[];for(const m of i.list())V.push(Gn(m,w,U));return V.push(g),nt(V)}).then(()=>{V=Ll(we,"beforeRouteUpdate",w,U);for(const m of we)m.updateGuards.forEach(E=>{V.push(Gn(E,w,U))});return V.push(g),nt(V)}).then(()=>{V=[];for(const m of p)if(m.beforeEnter)if(sn(m.beforeEnter))for(const E of m.beforeEnter)V.push(Gn(E,w,U));else V.push(Gn(m.beforeEnter,w,U));return V.push(g),nt(V)}).then(()=>(w.matched.forEach(m=>m.enterCallbacks={}),V=Ll(p,"beforeRouteEnter",w,U),V.push(g),nt(V))).then(()=>{V=[];for(const m of o.list())V.push(Gn(m,w,U));return V.push(g),nt(V)}).catch(m=>In(m,8)?m:Promise.reject(m))}function Oe(w,U,V){a.list().forEach(G=>ie(()=>G(w,U,V)))}function j(w,U,V,G,we){const p=A(w,U);if(p)return p;const g=U===Hn,m=ts?history.state:{};V&&(G||g?s.replace(w.fullPath,Re({scroll:g&&m&&m.scroll},we)):s.push(w.fullPath,we)),l.value=w,yt(w,U,V,g),Be()}let q;function $e(){q||(q=s.listen((w,U,V)=>{if(!Jr.listening)return;const G=R(w),we=se(G);if(we){F(Re(we,{replace:!0}),G).catch(gi);return}c=G;const p=l.value;ts&&Zw(Wd(p.fullPath,V.delta),Ha()),he(G,p).catch(g=>In(g,12)?g:In(g,2)?(F(g.to,G).then(m=>{In(m,20)&&!V.delta&&V.type===Ci.pop&&s.go(-1,!1)}).catch(gi),Promise.reject()):(V.delta&&s.go(-V.delta,!1),ge(g,G,p))).then(g=>{g=g||j(G,p,!1),g&&(V.delta&&!In(g,8)?s.go(-V.delta,!1):V.type===Ci.pop&&In(g,20)&&s.go(-1,!1)),Oe(G,p,g)}).catch(gi)}))}let Ce=Zs(),_e=Zs(),ve;function ge(w,U,V){Be(w);const G=_e.list();return G.length?G.forEach(we=>we(w,U,V)):console.error(w),Promise.reject(w)}function _t(){return ve&&l.value!==Hn?Promise.resolve():new Promise((w,U)=>{Ce.add([w,U])})}function Be(w){return ve||(ve=!w,$e(),Ce.list().forEach(([U,V])=>w?V(w):U()),Ce.reset()),w}function yt(w,U,V,G){const{scrollBehavior:we}=t;if(!ts||!we)return Promise.resolve();const p=!V&&eI(Wd(w.fullPath,0))||(G||!V)&&history.state&&history.state.scroll||null;return ag().then(()=>we(w,U,p)).then(g=>g&&Xw(g)).catch(g=>ge(g,w,U))}const vt=w=>s.go(w);let Ln;const tt=new Set,Jr={currentRoute:l,listening:!0,addRoute:f,removeRoute:y,hasRoute:v,getRoutes:_,resolve:R,options:t,push:k,replace:Q,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:_e.add,isReady:_t,install(w){const U=this;w.component("RouterLink",LI),w.component("RouterView",zg),w.config.globalProperties.$router=U,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>b(l)}),ts&&!Ln&&l.value===Hn&&(Ln=!0,k(s.location).catch(we=>{}));const V={};for(const we in Hn)Object.defineProperty(V,we,{get:()=>l.value[we],enumerable:!0});w.provide(bu,U),w.provide(Hg,Zp(V)),w.provide(Ec,l);const G=w.unmount;tt.add(w),w.unmount=function(){tt.delete(w),tt.size<1&&(c=Hn,q&&q(),q=null,l.value=Hn,Ln=!1,ve=!1),G()}}};function nt(w){return w.reduce((U,V)=>U.then(()=>ie(V)),Promise.resolve())}return Jr}function jI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>As(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>As(c,l))||s.push(l))}return[n,r,s]}const Pu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qI={__name:"App",setup(t){return(e,n)=>(z(),ne("div",null,[ze(b(zg))]))}},HI=Pu(qI,[["__scopeId","data-v-bbb44087"]]),zI="modulepreload",KI=function(t){return"/"+t},lf={},Xr=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=KI(i),i in lf)return;lf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":zI,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},WI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new GI;const d=i<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const y=c<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QI=function(t){const e=Kg(t);return Wg.encodeByteArray(e,!0)},ia=function(t){return QI(t).replace(/\./g,"")},Gg=function(t){try{return Wg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=()=>JI().__FIREBASE_DEFAULTS__,XI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gg(t[1]);return e&&JSON.parse(e)},Ru=()=>{try{return YI()||XI()||ZI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qg=t=>{var e,n;return(n=(e=Ru())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eT=t=>{const e=Qg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jg=()=>{var t;return(t=Ru())===null||t===void 0?void 0:t.config},Yg=t=>{var e;return(e=Ru())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ia(JSON.stringify(n)),ia(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function sT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oT(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aT(){try{return typeof indexedDB=="object"}catch{return!1}}function lT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cT,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?uT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Mn(s,a,r)}}function uT(t,e){return t.replace(hT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hT=/\{\$([^}]+)}/g;function dT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(cf(i)&&cf(o)){if(!oa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function cf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fT(t,e){const n=new pT(t,e);return n.subscribe.bind(n)}class pT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fl),s.error===void 0&&(s.error=Fl),s.complete===void 0&&(s.complete=Fl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class $r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yT(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_T(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _T(t){return t===Ar?void 0:t}function yT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const ET={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},wT=ye.INFO,IT={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},TT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=IT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Su{constructor(e){this.name=e,this._logLevel=wT,this._logHandler=TT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ET[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const AT=(t,e)=>e.some(n=>t instanceof n);let uf,hf;function bT(){return uf||(uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PT(){return hf||(hf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xg=new WeakMap,wc=new WeakMap,Zg=new WeakMap,Ul=new WeakMap,Cu=new WeakMap;function RT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xg.set(n,t)}).catch(()=>{}),Cu.set(e,t),e}function ST(t){if(wc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});wc.set(t,e)}let Ic={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CT(t){Ic=t(Ic)}function kT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($l(this),e,...n);return Zg.set(r,e.sort?e.sort():[e]),nr(r)}:PT().includes(t)?function(...e){return t.apply($l(this),e),nr(Xg.get(this))}:function(...e){return nr(t.apply($l(this),e))}}function OT(t){return typeof t=="function"?kT(t):(t instanceof IDBTransaction&&ST(t),AT(t,bT())?new Proxy(t,Ic):t)}function nr(t){if(t instanceof IDBRequest)return RT(t);if(Ul.has(t))return Ul.get(t);const e=OT(t);return e!==t&&(Ul.set(t,e),Cu.set(e,t)),e}const $l=t=>Cu.get(t);function NT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nr(o.result),l.oldVersion,l.newVersion,nr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const xT=["get","getKey","getAll","getAllKeys","count"],DT=["put","add","delete","clear"],Bl=new Map;function df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bl.get(e))return Bl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=DT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xT.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Bl.set(e,i),i}CT(t=>({...t,get:(e,n,r)=>df(e,n)||t.get(e,n,r),has:(e,n)=>!!df(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tc="@firebase/app",ff="0.9.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Su("@firebase/app"),LT="@firebase/app-compat",FT="@firebase/analytics-compat",UT="@firebase/analytics",$T="@firebase/app-check-compat",BT="@firebase/app-check",jT="@firebase/auth",qT="@firebase/auth-compat",HT="@firebase/database",zT="@firebase/database-compat",KT="@firebase/functions",WT="@firebase/functions-compat",GT="@firebase/installations",QT="@firebase/installations-compat",JT="@firebase/messaging",YT="@firebase/messaging-compat",XT="@firebase/performance",ZT="@firebase/performance-compat",e0="@firebase/remote-config",t0="@firebase/remote-config-compat",n0="@firebase/storage",r0="@firebase/storage-compat",s0="@firebase/firestore",i0="@firebase/firestore-compat",o0="firebase",a0="10.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="[DEFAULT]",l0={[Tc]:"fire-core",[LT]:"fire-core-compat",[UT]:"fire-analytics",[FT]:"fire-analytics-compat",[BT]:"fire-app-check",[$T]:"fire-app-check-compat",[jT]:"fire-auth",[qT]:"fire-auth-compat",[HT]:"fire-rtdb",[zT]:"fire-rtdb-compat",[KT]:"fire-fn",[WT]:"fire-fn-compat",[GT]:"fire-iid",[QT]:"fire-iid-compat",[JT]:"fire-fcm",[YT]:"fire-fcm-compat",[XT]:"fire-perf",[ZT]:"fire-perf-compat",[e0]:"fire-rc",[t0]:"fire-rc-compat",[n0]:"fire-gcs",[r0]:"fire-gcs-compat",[s0]:"fire-fst",[i0]:"fire-fst-compat","fire-js":"fire-js",[o0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map,bc=new Map;function c0(t,e){try{t.container.addComponent(e)}catch(n){Br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(bc.has(e))return Br.debug(`There were multiple attempts to register component ${e}.`),!1;bc.set(e,t);for(const n of aa.values())c0(n,t);return!0}function ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rr=new Qi("app","Firebase",u0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=a0;function em(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ac,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(n||(n=Jg()),!n)throw rr.create("no-options");const i=aa.get(s);if(i){if(oa(n,i.options)&&oa(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const o=new vT(s);for(const l of bc.values())o.addComponent(l);const a=new h0(n,r,o);return aa.set(s,a),a}function tm(t=Ac){const e=aa.get(t);if(!e&&t===Ac&&Jg())return em();if(!e)throw rr.create("no-app",{appName:t});return e}function sr(t,e,n){var r;let s=(r=l0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Br.warn(a.join(" "));return}Ps(new $r(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="firebase-heartbeat-database",f0=1,ki="firebase-heartbeat-store";let jl=null;function nm(){return jl||(jl=NT(d0,f0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ki)}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),jl}async function p0(t){try{return await(await nm()).transaction(ki).objectStore(ki).get(rm(t))}catch(e){if(e instanceof Mn)Br.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Br.warn(n.message)}}}async function pf(t,e){try{const r=(await nm()).transaction(ki,"readwrite");await r.objectStore(ki).put(e,rm(t)),await r.done}catch(n){if(n instanceof Mn)Br.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Br.warn(r.message)}}}function rm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=1024,m0=30*24*60*60*1e3;class _0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new v0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=gf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=m0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gf(),{heartbeatsToSend:r,unsentEntries:s}=y0(this._heartbeatsCache.heartbeats),i=ia(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gf(){return new Date().toISOString().substring(0,10)}function y0(t,e=g0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),mf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),mf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class v0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aT()?lT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await p0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function mf(t){return ia(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){Ps(new $r("platform-logger",e=>new VT(e),"PRIVATE")),Ps(new $r("heartbeat",e=>new _0(e),"PRIVATE")),sr(Tc,ff,t),sr(Tc,ff,"esm2017"),sr("fire-js","")}E0("");function Ou(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function sm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const w0=sm,im=new Qi("auth","Firebase",sm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Su("@firebase/auth");function I0(t,...e){la.logLevel<=ye.WARN&&la.warn(`Auth (${$s}): ${t}`,...e)}function Uo(t,...e){la.logLevel<=ye.ERROR&&la.error(`Auth (${$s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,...e){throw Nu(t,...e)}function gn(t,...e){return Nu(t,...e)}function T0(t,e,n){const r=Object.assign(Object.assign({},w0()),{[e]:n});return new Qi("auth","Firebase",r).create(e,{appName:t.name})}function Nu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return im.create(t,...e)}function ue(t,e,...n){if(!t)throw Nu(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uo(e),new Error(e)}function On(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function A0(){return _f()==="http:"||_f()==="https:"}function _f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A0()||sT()||"connection"in navigator)?navigator.onLine:!0}function P0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=rT()||iT()}get(){return b0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=new Yi(3e4,6e4);function Du(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bs(t,e,n,r,s={}){return am(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ji(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),om.fetch()(lm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function am(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},R0),e);try{const s=new k0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bo(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw T0(t,u,c);kn(t,u)}}catch(s){if(s instanceof Mn)throw s;kn(t,"network-request-failed",{message:String(s)})}}async function C0(t,e,n,r,s={}){const i=await Bs(t,e,n,r,s);return"mfaPendingCredential"in i&&kn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function lm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xu(t.config,s):`${t.config.apiScheme}://${s}`}class k0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),S0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(t,e){return Bs(t,"POST","/v1/accounts:delete",e)}async function N0(t,e){return Bs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function x0(t,e=!1){const n=mt(t),r=await n.getIdToken(e),s=Vu(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_i(ql(s.auth_time)),issuedAtTime:_i(ql(s.iat)),expirationTime:_i(ql(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ql(t){return Number(t)*1e3}function Vu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gg(n);return s?JSON.parse(s):(Uo("Failed to decode base64 JWT payload"),null)}catch(s){return Uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function D0(t){const e=Vu(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&V0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function V0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Oi(t,N0(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?U0(i.providerUserInfo):[],a=F0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new cm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function L0(t){const e=mt(t);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function F0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function U0(t){return t.map(e=>{var{providerId:n}=e,r=Ou(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(t,e){const n=await am(t,{},async()=>{const r=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=lm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",om.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function B0(t,e){return Bs(t,"POST","/v2/accounts:revokeToken",Du(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):D0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ue(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ni;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ni,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ou(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new M0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return x0(this,e)}reload(){return L0(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Oi(this,O0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:k,isAnonymous:Q,providerData:se,stsTokenManager:F}=n;ue(A&&F,e,"internal-error");const H=Ni.fromJSON(this.name,F);ue(typeof A=="string",e,"internal-error"),zn(h,e.name),zn(d,e.name),ue(typeof k=="boolean",e,"internal-error"),ue(typeof Q=="boolean",e,"internal-error"),zn(f,e.name),zn(y,e.name),zn(_,e.name),zn(v,e.name),zn(R,e.name),zn(N,e.name);const ie=new Lr({uid:A,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:Q,photoURL:y,phoneNumber:f,tenantId:_,stsTokenManager:H,createdAt:R,lastLoginAt:N});return se&&Array.isArray(se)&&(ie.providerData=se.map(he=>Object.assign({},he))),v&&(ie._redirectEventId=v),ie}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ni;s.updateFromServerResponse(n);const i=new Lr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ca(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=new Map;function Pn(t){On(t instanceof Function,"Expected a class definition");let e=yf.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}um.type="NONE";const vf=um;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$o(this.userKey,s.apiKey,i),this.fullPersistenceKey=$o("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ps(Pn(vf),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Pn(vf);const o=$o(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Lr._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ps(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ps(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gm(e))return"Blackberry";if(mm(e))return"Webos";if(Mu(e))return"Safari";if((e.includes("chrome/")||dm(e))&&!e.includes("edge/"))return"Chrome";if(pm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hm(t=Ct()){return/firefox\//i.test(t)}function Mu(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dm(t=Ct()){return/crios\//i.test(t)}function fm(t=Ct()){return/iemobile/i.test(t)}function pm(t=Ct()){return/android/i.test(t)}function gm(t=Ct()){return/blackberry/i.test(t)}function mm(t=Ct()){return/webos/i.test(t)}function za(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function j0(t=Ct()){var e;return za(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function q0(){return oT()&&document.documentMode===10}function _m(t=Ct()){return za(t)||pm(t)||mm(t)||gm(t)||/windows phone/i.test(t)||fm(t)}function H0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t,e=[]){let n;switch(t){case"Browser":n=Ef(Ct());break;case"Worker":n=`${Ef(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(t,e={}){return Bs(t,"GET","/v2/passwordPolicy",Du(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=6;class G0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:W0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wf(this),this.idTokenSubscription=new wf(this),this.beforeStateQueue=new z0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=im,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await K0(this),n=new G0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await B0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ym(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&I0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lu(t){return mt(t)}class wf{constructor(e){this.auth=e,this.observer=null,this.addObserver=fT(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Y0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",J0().appendChild(r)})}function X0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(t,e){const n=ku(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(oa(i,e??{}))return s;kn(s,"already-initialized")}return n.initialize({options:e})}function eA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tA(t,e,n){const r=Lu(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=vm(e),{host:o,port:a}=nA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||rA()}function vm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nA(t){const e=vm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:If(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:If(o)}}}function If(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e){return C0(t,"POST","/v1/accounts:signInWithIdp",Du(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="http://localhost";class jr extends Em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ou(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new jr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:sA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends wm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Xi{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Xi{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Xi{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Lr._fromIdTokenResponse(e,r,s),o=Tf(r);return new Rs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Tf(r);return new Rs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Tf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends Mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ua.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ua(e,n,r,s)}}function Im(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ua._fromErrorAndOperation(t,i,e,r):i})}async function iA(t,e,n=!1){const r=await Oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Oi(t,Im(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=Vu(i.idToken);ue(o,r,"internal-error");const{sub:a}=o;return ue(t.uid===a,r,"user-mismatch"),Rs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e,n=!1){const r="signIn",s=await Im(t,r,e),i=await Rs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function lA(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function cA(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function Tm(t,e,n,r){return mt(t).onAuthStateChanged(e,n,r)}const ha="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ha,"1"),this.storage.removeItem(ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(){const t=Ct();return Mu(t)||za(t)}const hA=1e3,dA=10;class bm extends Am{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uA()&&H0(),this.fallbackToPolling=_m(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);q0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bm.type="LOCAL";const fA=bm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm extends Am{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pm.type="SESSION";const Rm=Pm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await pA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ka.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Fu("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function mA(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function _A(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vA(){return Sm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="firebaseLocalStorageDb",EA=1,da="firebaseLocalStorage",km="fbase_key";class Zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wa(t,e){return t.transaction([da],e?"readwrite":"readonly").objectStore(da)}function wA(){const t=indexedDB.deleteDatabase(Cm);return new Zi(t).toPromise()}function Rc(){const t=indexedDB.open(Cm,EA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(da,{keyPath:km})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(da)?e(r):(r.close(),await wA(),e(await Rc()))})})}async function Af(t,e,n){const r=Wa(t,!0).put({[km]:e,value:n});return new Zi(r).toPromise()}async function IA(t,e){const n=Wa(t,!1).get(e),r=await new Zi(n).toPromise();return r===void 0?null:r.value}function bf(t,e){const n=Wa(t,!0).delete(e);return new Zi(n).toPromise()}const TA=800,AA=3;class Om{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>AA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ka._getInstance(vA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _A(),!this.activeServiceWorker)return;this.sender=new gA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rc();return await Af(e,ha,"1"),await bf(e,ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Af(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>IA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wa(s,!1).getAll();return new Zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Om.type="LOCAL";const bA=Om;new Yi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t,e){return e?Pn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends Em{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RA(t){return aA(t.auth,new Uu(t),t.bypassAuthState)}function SA(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),oA(n,new Uu(t),t.bypassAuthState)}async function CA(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),iA(n,new Uu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RA;case"linkViaPopup":case"linkViaRedirect":return CA;case"reauthViaPopup":case"reauthViaRedirect":return SA;default:kn(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=new Yi(2e3,1e4);class is extends Nm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kA.get())};e()}}is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="pendingRedirect",Bo=new Map;class NA extends Nm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bo.get(this.auth._key());if(!e){try{const r=await xA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bo.set(this.auth._key(),e)}return this.bypassAuthState||Bo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xA(t,e){const n=MA(e),r=VA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function DA(t,e){Bo.set(t._key(),e)}function VA(t){return Pn(t._redirectPersistence)}function MA(t){return $o(OA,t.config.apiKey,t.name)}async function LA(t,e,n=!1){const r=Lu(t),s=PA(r,e),o=await new NA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=10*60*1e3;class UA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$A(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pf(e))}saveEventToCache(e){this.cachedEventUids.add(Pf(e)),this.lastProcessedEventTime=Date.now()}}function Pf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $A(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e={}){return Bs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qA=/^https?/;async function HA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BA(t);for(const n of e)try{if(zA(n))return}catch{}kn(t,"unauthorized-domain")}function zA(t){const e=Pc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qA.test(n))return!1;if(jA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=new Yi(3e4,6e4);function Rf(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WA(t){return new Promise((e,n)=>{var r,s,i;function o(){Rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rf(),n(gn(t,"network-request-failed"))},timeout:KA.get()})}if(!((s=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mn().gapi)===null||i===void 0)&&i.load)o();else{const a=X0("iframefcb");return mn()[a]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},Y0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw jo=null,e})}let jo=null;function GA(t){return jo=jo||WA(t),jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new Yi(5e3,15e3),JA="__/auth/iframe",YA="emulator/auth/iframe",XA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eb(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xu(e,YA):`https://${t.config.authDomain}/${JA}`,r={apiKey:e.apiKey,appName:t.name,v:$s},s=ZA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ji(r).slice(1)}`}async function tb(t){const e=await GA(t),n=mn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:eb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),a=mn().setTimeout(()=>{i(o)},QA.get());function l(){mn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rb=500,sb=600,ib="_blank",ob="http://localhost";class Sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ab(t,e,n,r=rb,s=sb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nb),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ct().toLowerCase();n&&(a=dm(c)?ib:n),hm(c)&&(e=e||ob,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(j0(c)&&a!=="_self")return lb(e||"",a),new Sf(null);const h=window.open(e||"",a,u);ue(h,t,"popup-blocked");try{h.focus()}catch{}return new Sf(h)}function lb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="__/auth/handler",ub="emulator/auth/handler",hb=encodeURIComponent("fac");async function Cf(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$s,eventId:s};if(e instanceof wm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Xi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${hb}=${encodeURIComponent(l)}`:"";return`${db(t)}?${Ji(a).slice(1)}${c}`}function db({config:t}){return t.emulator?xu(t,ub):`https://${t.authDomain}/${cb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="webStorageSupport";class fb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rm,this._completeRedirectFn=LA,this._overrideRedirectResult=DA}async _openPopup(e,n,r,s){var i;On((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Cf(e,n,r,Pc(),s);return ab(e,o,Fu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Cf(e,n,r,Pc(),s);return mA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tb(e),r=new UA(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hl,{type:Hl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Hl];o!==void 0&&n(!!o),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _m()||Mu()||za()}}const pb=fb;var kf="@firebase/auth",Of="1.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _b(t){Ps(new $r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ym(t)},c=new Q0(r,s,i,l);return eA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new $r("auth-internal",e=>{const n=Lu(e.getProvider("auth").getImmediate());return(r=>new gb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(kf,Of,mb(t)),sr(kf,Of,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=5*60,vb=Yg("authIdTokenMaxAge")||yb;let Nf=null;const Eb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vb)return;const s=n==null?void 0:n.token;Nf!==s&&(Nf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Dm(t=tm()){const e=ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Z0(t,{popupRedirectResolver:pb,persistence:[bA,fA,Rm]}),r=Yg("authTokenSyncURL");if(r){const i=Eb(r);cA(n,i,()=>i(n.currentUser)),lA(n,o=>i(o))}const s=Qg("auth");return s&&tA(n,`http://${s}`),n}_b("Browser");var wb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,$u=$u||{},le=wb||self;function Ga(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function eo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ib(t){return Object.prototype.hasOwnProperty.call(t,zl)&&t[zl]||(t[zl]=++Tb)}var zl="closure_uid_"+(1e9*Math.random()>>>0),Tb=0;function Ab(t,e,n){return t.call.apply(t.bind,arguments)}function bb(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Rt=Ab:Rt=bb,Rt.apply(null,arguments)}function Po(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function at(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function pr(){this.s=this.s,this.o=this.o}var Pb=0;pr.prototype.s=!1;pr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Pb!=0)&&Ib(this)};pr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function xf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ga(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function St(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}St.prototype.h=function(){this.defaultPrevented=!0};var Rb=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};le.addEventListener("test",n,e),le.removeEventListener("test",n,e)}catch{}return t}();function xi(t){return/^[\s\xa0]*$/.test(t)}function Qa(){var t=le.navigator;return t&&(t=t.userAgent)?t:""}function hn(t){return Qa().indexOf(t)!=-1}function ju(t){return ju[" "](t),t}ju[" "]=function(){};function Sb(t,e){var n=EP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Cb=hn("Opera"),Ss=hn("Trident")||hn("MSIE"),Mm=hn("Edge"),Sc=Mm||Ss,Lm=hn("Gecko")&&!(Qa().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge"))&&!(hn("Trident")||hn("MSIE"))&&!hn("Edge"),kb=Qa().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge");function Fm(){var t=le.document;return t?t.documentMode:void 0}var Cc;e:{var Kl="",Wl=function(){var t=Qa();if(Lm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Mm)return/Edge\/([\d\.]+)/.exec(t);if(Ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kb)return/WebKit\/(\S+)/.exec(t);if(Cb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Wl&&(Kl=Wl?Wl[1]:""),Ss){var Gl=Fm();if(Gl!=null&&Gl>parseFloat(Kl)){Cc=String(Gl);break e}}Cc=Kl}var kc;if(le.document&&Ss){var Df=Fm();kc=Df||parseInt(Cc,10)||void 0}else kc=void 0;var Ob=kc;function Di(t,e){if(St.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Lm){e:{try{ju(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Nb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Di.$.h.call(this)}}at(Di,St);var Nb={2:"touch",3:"pen",4:"mouse"};Di.prototype.h=function(){Di.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var to="closure_listenable_"+(1e6*Math.random()|0),xb=0;function Db(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++xb,this.fa=this.ia=!1}function Ja(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function qu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Vb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Um(t){const e={};for(const n in t)e[n]=t[n];return e}const Vf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $m(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Vf.length;i++)n=Vf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ya(t){this.src=t,this.g={},this.h=0}Ya.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Nc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Db(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Oc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Vm(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ja(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Nc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Hu="closure_lm_"+(1e6*Math.random()|0),Ql={};function Bm(t,e,n,r,s){if(r&&r.once)return qm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Bm(t,e[i],n,r,s);return null}return n=Wu(n),t&&t[to]?t.O(e,n,eo(r)?!!r.capture:!!r,s):jm(t,e,n,!1,r,s)}function jm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=eo(s)?!!s.capture:!!s,a=Ku(t);if(a||(t[Hu]=a=new Ya(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Mb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Rb||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(zm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Mb(){function t(n){return e.call(t.src,t.listener,n)}const e=Lb;return t}function qm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)qm(t,e[i],n,r,s);return null}return n=Wu(n),t&&t[to]?t.P(e,n,eo(r)?!!r.capture:!!r,s):jm(t,e,n,!0,r,s)}function Hm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Hm(t,e[i],n,r,s);else r=eo(r)?!!r.capture:!!r,n=Wu(n),t&&t[to]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Nc(i,n,r,s),-1<n&&(Ja(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ku(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Nc(e,n,r,s)),(n=-1<t?e[t]:null)&&zu(n))}function zu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[to])Oc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(zm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ku(e))?(Oc(n,t),n.h==0&&(n.src=null,e[Hu]=null)):Ja(t)}}}function zm(t){return t in Ql?Ql[t]:Ql[t]="on"+t}function Lb(t,e){if(t.fa)t=!0;else{e=new Di(e,this);var n=t.listener,r=t.la||t.src;t.ia&&zu(t),t=n.call(r,e)}return t}function Ku(t){return t=t[Hu],t instanceof Ya?t:null}var Jl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wu(t){return typeof t=="function"?t:(t[Jl]||(t[Jl]=function(e){return t.handleEvent(e)}),t[Jl])}function ot(){pr.call(this),this.i=new Ya(this),this.S=this,this.J=null}at(ot,pr);ot.prototype[to]=!0;ot.prototype.removeEventListener=function(t,e,n,r){Hm(this,t,e,n,r)};function pt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new St(e,t);else if(e instanceof St)e.target=e.target||t;else{var s=e;e=new St(r,t),$m(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ro(o,r,!0,e)&&s}if(o=e.g=t,s=Ro(o,r,!0,e)&&s,s=Ro(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ro(o,r,!1,e)&&s}ot.prototype.N=function(){if(ot.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ja(n[r]);delete t.g[e],t.h--}}this.J=null};ot.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ot.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ro(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Oc(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Gu=le.JSON.stringify;class Fb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ub(){var t=Qu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $b{constructor(){this.h=this.g=null}add(e,n){const r=Km.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Km=new Fb(()=>new Bb,t=>t.reset());class Bb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function qb(t){le.setTimeout(()=>{throw t},0)}let Vi,Mi=!1,Qu=new $b,Wm=()=>{const t=le.Promise.resolve(void 0);Vi=()=>{t.then(Hb)}};var Hb=()=>{for(var t;t=Ub();){try{t.h.call(t.g)}catch(n){qb(n)}var e=Km;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mi=!1};function Xa(t,e){ot.call(this),this.h=t||1,this.g=e||le,this.j=Rt(this.qb,this),this.l=Date.now()}at(Xa,ot);M=Xa.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),pt(this,"tick"),this.ga&&(Ju(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ju(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Xa.$.N.call(this),Ju(this),delete this.g};function Yu(t,e,n){if(typeof t=="function")n&&(t=Rt(t,n));else if(t&&typeof t.handleEvent=="function")t=Rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(t,e||0)}function Gm(t){t.g=Yu(()=>{t.g=null,t.i&&(t.i=!1,Gm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zb extends pr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Gm(this)}N(){super.N(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(t){pr.call(this),this.h=t,this.g={}}at(Li,pr);var Mf=[];function Qm(t,e,n,r){Array.isArray(n)||(n&&(Mf[0]=n.toString()),n=Mf);for(var s=0;s<n.length;s++){var i=Bm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Jm(t){qu(t.g,function(e,n){this.g.hasOwnProperty(n)&&zu(e)},t),t.g={}}Li.prototype.N=function(){Li.$.N.call(this),Jm(this)};Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Za(){this.g=!0}Za.prototype.Ea=function(){this.g=!1};function Kb(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Wb(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function os(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Qb(t,n)+(r?" "+r:"")})}function Gb(t,e){t.info(function(){return"TIMEOUT: "+e})}Za.prototype.info=function(){};function Qb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Gu(n)}catch{return e}}var Wr={},Lf=null;function el(){return Lf=Lf||new ot}Wr.Ta="serverreachability";function Ym(t){St.call(this,Wr.Ta,t)}at(Ym,St);function Fi(t){const e=el();pt(e,new Ym(e))}Wr.STAT_EVENT="statevent";function Xm(t,e){St.call(this,Wr.STAT_EVENT,t),this.stat=e}at(Xm,St);function xt(t){const e=el();pt(e,new Xm(e,t))}Wr.Ua="timingevent";function Zm(t,e){St.call(this,Wr.Ua,t),this.size=e}at(Zm,St);function no(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){t()},e)}var tl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},e_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xu(){}Xu.prototype.h=null;function Ff(t){return t.h||(t.h=t.i())}function t_(){}var ro={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Zu(){St.call(this,"d")}at(Zu,St);function eh(){St.call(this,"c")}at(eh,St);var xc;function nl(){}at(nl,Xu);nl.prototype.g=function(){return new XMLHttpRequest};nl.prototype.i=function(){return{}};xc=new nl;function so(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Li(this),this.P=Jb,t=Sc?125:void 0,this.V=new Xa(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new n_}function n_(){this.i=null,this.g="",this.h=!1}var Jb=45e3,r_={},Dc={};M=so.prototype;M.setTimeout=function(t){this.P=t};function Vc(t,e,n){t.L=1,t.A=sl(Nn(e)),t.u=n,t.S=!0,s_(t,null)}function s_(t,e){t.G=Date.now(),io(t),t.B=Nn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),d_(n.i,"t",r),t.o=0,n=t.l.J,t.h=new n_,t.g=x_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new zb(Rt(t.Pa,t,t.g),t.O)),Qm(t.U,t.g,"readystatechange",t.nb),e=t.I?Um(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Fi(),Kb(t.j,t.v,t.B,t.m,t.W,t.u)}M.nb=function(t){t=t.target;const e=this.M;e&&fn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=fn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Sc||this.g&&(this.h.h||this.g.ja()||jf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Fi(3):Fi(2)),rl(this);var n=this.g.da();this.ca=n;t:if(i_(this)){var r=jf(this.g);t="";var s=r.length,i=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),yi(this);var o="";break t}this.h.i=new le.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Wb(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xi(a)){var c=a;break t}}c=null}if(n=c)os(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mc(this,n);else{this.i=!1,this.s=3,xt(12),kr(this),yi(this);break e}}this.S?(o_(this,u,o),Sc&&this.i&&u==3&&(Qm(this.U,this.V,"tick",this.mb),this.V.start())):(os(this.j,this.m,o,null),Mc(this,o)),u==4&&kr(this),this.i&&!this.J&&(u==4?C_(this.l,this):(this.i=!1,io(this)))}else _P(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),kr(this),yi(this)}}}catch{}finally{}};function i_(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function o_(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=Yb(t,n),s==Dc){e==4&&(t.s=4,xt(14),r=!1),os(t.j,t.m,null,"[Incomplete Response]");break}else if(s==r_){t.s=4,xt(15),os(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else os(t.j,t.m,s,null),Mc(t,s);i_(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,xt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),oh(e),e.M=!0,xt(11))):(os(t.j,t.m,n,"[Invalid Chunked Response]"),kr(t),yi(t))}M.mb=function(){if(this.g){var t=fn(this.g),e=this.g.ja();this.o<e.length&&(rl(this),o_(this,t,e),this.i&&t!=4&&io(this))}};function Yb(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Dc:(n=Number(e.substring(n,r)),isNaN(n)?r_:(r+=1,r+n>e.length?Dc:(e=e.slice(r,r+n),t.o=r+n,e)))}M.cancel=function(){this.J=!0,kr(this)};function io(t){t.Y=Date.now()+t.P,a_(t,t.P)}function a_(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=no(Rt(t.lb,t),e)}function rl(t){t.C&&(le.clearTimeout(t.C),t.C=null)}M.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Gb(this.j,this.B),this.L!=2&&(Fi(),xt(17)),kr(this),this.s=2,yi(this)):a_(this,this.Y-t)};function yi(t){t.l.H==0||t.J||C_(t.l,t)}function kr(t){rl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ju(t.V),Jm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Mc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Lc(n.i,t))){if(!t.K&&Lc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ga(n),ll(n);else break e;ih(n),xt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=no(Rt(n.ib,n),6e3));if(1>=g_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Or(n,11)}else if((t.K||n.g==t)&&ga(n),!xi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(th(i,i.h),i.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Fe(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=N_(r,r.J?r.pa:null,r.Y),o.K){m_(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(rl(a),io(a)),r.g=o}else R_(r);0<n.j.length&&cl(n)}else c[0]!="stop"&&c[0]!="close"||Or(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Or(n,7):sh(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Fi(4)}catch{}}function Xb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ga(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Zb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ga(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function l_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ga(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Zb(t),r=Xb(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var c_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Fr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fr){this.h=t.h,fa(this,t.j),this.s=t.s,this.g=t.g,pa(this,t.m),this.l=t.l;var e=t.i,n=new Ui;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Uf(this,n),this.o=t.o}else t&&(e=String(t).match(c_))?(this.h=!1,fa(this,e[1]||"",!0),this.s=ii(e[2]||""),this.g=ii(e[3]||"",!0),pa(this,e[4]),this.l=ii(e[5]||"",!0),Uf(this,e[6]||"",!0),this.o=ii(e[7]||"")):(this.h=!1,this.i=new Ui(null,this.h))}Fr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(oi(e,$f,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(oi(e,$f,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(oi(n,n.charAt(0)=="/"?rP:nP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",oi(n,iP)),t.join("")};function Nn(t){return new Fr(t)}function fa(t,e,n){t.j=n?ii(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function pa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Uf(t,e,n){e instanceof Ui?(t.i=e,oP(t.i,t.h)):(n||(e=oi(e,sP)),t.i=new Ui(e,t.h))}function Fe(t,e,n){t.i.set(e,n)}function sl(t){return Fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ii(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function oi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $f=/[#\/\?@]/g,nP=/[#\?:]/g,rP=/[#\?]/g,sP=/[#\?@]/g,iP=/#/g;function Ui(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gr(t){t.g||(t.g=new Map,t.h=0,t.i&&eP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Ui.prototype;M.add=function(t,e){gr(this),this.i=null,t=js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function u_(t,e){gr(t),e=js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function h_(t,e){return gr(t),e=js(t,e),t.g.has(e)}M.forEach=function(t,e){gr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};M.ta=function(){gr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};M.Z=function(t){gr(this);let e=[];if(typeof t=="string")h_(this,t)&&(e=e.concat(this.g.get(js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return gr(this),this.i=null,t=js(this,t),h_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function d_(t,e,n){u_(t,e),0<n.length&&(t.i=null,t.g.set(js(t,e),Bu(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oP(t,e){e&&!t.j&&(gr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(u_(this,r),d_(this,s,n))},t)),t.j=e}var aP=class{constructor(t,e){this.g=t,this.map=e}};function f_(t){this.l=t||lP,le.PerformanceNavigationTiming?(t=le.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(le.g&&le.g.Ka&&le.g.Ka()&&le.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lP=10;function p_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function g_(t){return t.h?1:t.g?t.g.size:0}function Lc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function th(t,e){t.g?t.g.add(e):t.h=e}function m_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}f_.prototype.cancel=function(){if(this.i=__(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function __(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Bu(t.i)}var cP=class{stringify(t){return le.JSON.stringify(t,void 0)}parse(t){return le.JSON.parse(t,void 0)}};function uP(){this.g=new cP}function hP(t,e,n){const r=n||"";try{l_(t,function(s,i){let o=s;eo(s)&&(o=Gu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function dP(t,e){const n=new Za;if(le.Image){const r=new Image;r.onload=Po(So,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Po(So,n,r,"TestLoadImage: error",!1,e),r.onabort=Po(So,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Po(So,n,r,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function So(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function il(t){this.l=t.ec||null,this.j=t.ob||!1}at(il,Xu);il.prototype.g=function(){return new ol(this.l,this.j)};il.prototype.i=function(t){return function(){return t}}({});function ol(t,e){ot.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=nh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(ol,ot);var nh=0;M=ol.prototype;M.open=function(t,e){if(this.readyState!=nh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$i(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||le).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oo(this)),this.readyState=nh};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof le.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;y_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function y_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?oo(this):$i(this),this.readyState==3&&y_(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,oo(this))};M.Ya=function(t){this.g&&(this.response=t,oo(this))};M.ka=function(){this.g&&oo(this)};function oo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$i(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $i(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fP=le.JSON.parse;function We(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=v_,this.L=this.M=!1}at(We,ot);var v_="",pP=/^https?$/i,gP=["POST","PUT"];M=We.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():xc.g(),this.C=this.u?Ff(this.u):Ff(xc),this.g.onreadystatechange=Rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Bf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=le.FormData&&t instanceof le.FormData,!(0<=Vm(gP,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{I_(this),0<this.B&&((this.L=mP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Rt(this.ua,this)):this.A=Yu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Bf(this,i)}};function mP(t){return Ss&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof $u<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))};function Bf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,E_(t),al(t)}function E_(t){t.F||(t.F=!0,pt(t,"complete"),pt(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,pt(this,"complete"),pt(this,"abort"),al(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),al(this,!0)),We.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?w_(this):this.kb())};M.kb=function(){w_(this)};function w_(t){if(t.h&&typeof $u<"u"&&(!t.C[1]||fn(t)!=4||t.da()!=2)){if(t.v&&fn(t)==4)Yu(t.La,0,t);else if(pt(t,"readystatechange"),fn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(c_)[1]||null;!s&&le.self&&le.self.location&&(s=le.self.location.protocol.slice(0,-1)),r=!pP.test(s?s.toLowerCase():"")}n=r}if(n)pt(t,"complete"),pt(t,"success");else{t.m=6;try{var i=2<fn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",E_(t)}}finally{al(t)}}}}function al(t,e){if(t.g){I_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||pt(t,"ready");try{n.onreadystatechange=r}catch{}}}function I_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(le.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function fn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fP(e)}};function jf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case v_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function _P(t){const e={};t=(t.g&&2<=fn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(xi(t[r]))continue;var n=jb(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}Vb(e,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function T_(t){let e="";return qu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function rh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=T_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Fe(t,e,n))}function ei(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function A_(t){this.Ga=0,this.j=[],this.l=new Za,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ei("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ei("baseRetryDelayMs",5e3,t),this.hb=ei("retryDelaySeedMs",1e4,t),this.eb=ei("forwardChannelMaxRetries",2,t),this.xa=ei("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new f_(t&&t.concurrentRequestLimit),this.Ja=new uP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=A_.prototype;M.ra=8;M.H=1;function sh(t){if(b_(t),t.H==3){var e=t.W++,n=Nn(t.I);if(Fe(n,"SID",t.K),Fe(n,"RID",e),Fe(n,"TYPE","terminate"),ao(t,n),e=new so(t,t.l,e),e.L=2,e.A=sl(Nn(n)),n=!1,le.navigator&&le.navigator.sendBeacon)try{n=le.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&le.Image&&(new Image().src=e.A,n=!0),n||(e.g=x_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),io(e)}O_(t)}function ll(t){t.g&&(oh(t),t.g.cancel(),t.g=null)}function b_(t){ll(t),t.u&&(le.clearTimeout(t.u),t.u=null),ga(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&le.clearTimeout(t.m),t.m=null)}function cl(t){if(!p_(t.i)&&!t.m){t.m=!0;var e=t.Na;Vi||Wm(),Mi||(Vi(),Mi=!0),Qu.add(e,t),t.C=0}}function yP(t,e){return g_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=no(Rt(t.Na,t,e),k_(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new so(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Um(i),$m(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=P_(this,s,e),n=Nn(this.I),Fe(n,"RID",t),Fe(n,"CVER",22),this.F&&Fe(n,"X-HTTP-Session-Id",this.F),ao(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(T_(i)))+"&"+e:this.o&&rh(n,this.o,i)),th(this.i,s),this.bb&&Fe(n,"TYPE","init"),this.P?(Fe(n,"$req",e),Fe(n,"SID","null"),s.aa=!0,Vc(s,n,null)):Vc(s,n,e),this.H=2}}else this.H==3&&(t?qf(this,t):this.j.length==0||p_(this.i)||qf(this))};function qf(t,e){var n;e?n=e.m:n=t.W++;const r=Nn(t.I);Fe(r,"SID",t.K),Fe(r,"RID",n),Fe(r,"AID",t.V),ao(t,r),t.o&&t.s&&rh(r,t.o,t.s),n=new so(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=P_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),th(t.i,n),Vc(n,r,e)}function ao(t,e){t.na&&qu(t.na,function(n,r){Fe(e,r,n)}),t.h&&l_({},function(n,r){Fe(e,r,n)})}function P_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Rt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{hP(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function R_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Vi||Wm(),Mi||(Vi(),Mi=!0),Qu.add(e,t),t.A=0}}function ih(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=no(Rt(t.Ma,t),k_(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,S_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=no(Rt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,xt(10),ll(this),S_(this))};function oh(t){t.B!=null&&(le.clearTimeout(t.B),t.B=null)}function S_(t){t.g=new so(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Nn(t.wa);Fe(e,"RID","rpc"),Fe(e,"SID",t.K),Fe(e,"AID",t.V),Fe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Fe(e,"TO",t.qa),Fe(e,"TYPE","xmlhttp"),ao(t,e),t.o&&t.s&&rh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=sl(Nn(e)),n.u=null,n.S=!0,s_(n,t)}M.ib=function(){this.v!=null&&(this.v=null,ll(this),ih(this),xt(19))};function ga(t){t.v!=null&&(le.clearTimeout(t.v),t.v=null)}function C_(t,e){var n=null;if(t.g==e){ga(t),oh(t),t.g=null;var r=2}else if(Lc(t.i,e))n=e.F,m_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=el(),pt(r,new Zm(r,n)),cl(t)}else R_(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&yP(t,e)||r==2&&ih(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Or(t,5);break;case 4:Or(t,10);break;case 3:Or(t,6);break;default:Or(t,2)}}}function k_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Or(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Rt(t.pb,t);n||(n=new Fr("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||fa(n,"https"),sl(n)),dP(n.toString(),r)}else xt(2);t.H=0,t.h&&t.h.za(e),O_(t),b_(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),xt(2)):(this.l.info("Failed to ping google.com"),xt(1))};function O_(t){if(t.H=0,t.ma=[],t.h){const e=__(t.i);(e.length!=0||t.j.length!=0)&&(xf(t.ma,e),xf(t.ma,t.j),t.i.i.length=0,Bu(t.j),t.j.length=0),t.h.ya()}}function N_(t,e,n){var r=n instanceof Fr?Nn(n):new Fr(n);if(r.g!="")e&&(r.g=e+"."+r.g),pa(r,r.m);else{var s=le.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Fr(null);r&&fa(i,r),e&&(i.g=e),s&&pa(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Fe(r,n,e),Fe(r,"VER",t.ra),ao(t,r),r}function x_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new We(new il({ob:n})):new We(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function D_(){}M=D_.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function ma(){if(Ss&&!(10<=Number(Ob)))throw Error("Environmental error: no available transport.")}ma.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){ot.call(this),this.g=new A_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!xi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qs(this)}at(Bt,ot);Bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;xt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=N_(t,null,t.Y),cl(t)};Bt.prototype.close=function(){sh(this.g)};Bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Gu(t),t=n);e.j.push(new aP(e.fb++,t)),e.H==3&&cl(e)};Bt.prototype.N=function(){this.g.h=null,delete this.j,sh(this.g),delete this.g,Bt.$.N.call(this)};function V_(t){Zu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}at(V_,Zu);function M_(){eh.call(this),this.status=1}at(M_,eh);function qs(t){this.g=t}at(qs,D_);qs.prototype.Ba=function(){pt(this.g,"a")};qs.prototype.Aa=function(t){pt(this.g,new V_(t))};qs.prototype.za=function(t){pt(this.g,new M_)};qs.prototype.ya=function(){pt(this.g,"b")};function vP(){this.blockSize=-1}function on(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}at(on,vP);on.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Yl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}on.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Yl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Yl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Yl(this,r),s=0;break}}this.h=s,this.i+=e};on.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Se(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var EP={};function ah(t){return-128<=t&&128>t?Sb(t,function(e){return new Se([e|0],0>e?-1:0)}):new Se([t|0],0>t?-1:0)}function pn(t){if(isNaN(t)||!isFinite(t))return ms;if(0>t)return ht(pn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Fc;return new Se(e,0)}function L_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ht(L_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pn(Math.pow(e,8)),r=ms,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=pn(Math.pow(e,i)),r=r.R(i).add(pn(o))):(r=r.R(n),r=r.add(pn(o)))}return r}var Fc=4294967296,ms=ah(0),Uc=ah(1),Hf=ah(16777216);M=Se.prototype;M.ea=function(){if(Kt(this))return-ht(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Fc+r)*e,e*=Fc}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Rn(this))return"0";if(Kt(this))return"-"+ht(this).toString(t);for(var e=pn(Math.pow(t,6)),n=this,r="";;){var s=ya(n,e).g;n=_a(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Rn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Rn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Kt(t){return t.h==-1}M.X=function(t){return t=_a(this,t),Kt(t)?-1:Rn(t)?0:1};function ht(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Se(n,~t.h).add(Uc)}M.abs=function(){return Kt(this)?ht(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Se(n,n[n.length-1]&-2147483648?-1:0)};function _a(t,e){return t.add(ht(e))}M.R=function(t){if(Rn(this)||Rn(t))return ms;if(Kt(this))return Kt(t)?ht(this).R(ht(t)):ht(ht(this).R(t));if(Kt(t))return ht(this.R(ht(t)));if(0>this.X(Hf)&&0>t.X(Hf))return pn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Co(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Co(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Co(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Co(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Se(n,0)};function Co(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ti(t,e){this.g=t,this.h=e}function ya(t,e){if(Rn(e))throw Error("division by zero");if(Rn(t))return new ti(ms,ms);if(Kt(t))return e=ya(ht(t),e),new ti(ht(e.g),ht(e.h));if(Kt(e))return e=ya(t,ht(e)),new ti(ht(e.g),e.h);if(30<t.g.length){if(Kt(t)||Kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Uc,r=e;0>=r.X(t);)n=zf(n),r=zf(r);var s=Zr(n,1),i=Zr(r,1);for(r=Zr(r,2),n=Zr(n,2);!Rn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Zr(r,1),n=Zr(n,1)}return e=_a(t,s.R(e)),new ti(s,e)}for(s=ms;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=pn(n),o=i.R(e);Kt(o)||0<o.X(t);)n-=r,i=pn(n),o=i.R(e);Rn(i)&&(i=Uc),s=s.add(i),t=_a(t,o)}return new ti(s,t)}M.gb=function(t){return ya(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Se(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Se(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Se(n,this.h^t.h)};function zf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Se(n,t.h)}function Zr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Se(s,t.h)}ma.prototype.createWebChannel=ma.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;tl.NO_ERROR=0;tl.TIMEOUT=8;tl.HTTP_ERROR=6;e_.COMPLETE="complete";t_.EventType=ro;ro.OPEN="a";ro.CLOSE="b";ro.ERROR="c";ro.MESSAGE="d";ot.prototype.listen=ot.prototype.O;We.prototype.listenOnce=We.prototype.P;We.prototype.getLastError=We.prototype.Sa;We.prototype.getLastErrorCode=We.prototype.Ia;We.prototype.getStatus=We.prototype.da;We.prototype.getResponseJson=We.prototype.Wa;We.prototype.getResponseText=We.prototype.ja;We.prototype.send=We.prototype.ha;We.prototype.setWithCredentials=We.prototype.Oa;on.prototype.digest=on.prototype.l;on.prototype.reset=on.prototype.reset;on.prototype.update=on.prototype.j;Se.prototype.add=Se.prototype.add;Se.prototype.multiply=Se.prototype.R;Se.prototype.modulo=Se.prototype.gb;Se.prototype.compare=Se.prototype.X;Se.prototype.toNumber=Se.prototype.ea;Se.prototype.toString=Se.prototype.toString;Se.prototype.getBits=Se.prototype.D;Se.fromNumber=pn;Se.fromString=L_;var wP=function(){return new ma},IP=function(){return el()},Xl=tl,TP=e_,AP=Wr,Kf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ko=t_,bP=We,PP=on,_s=Se;const Wf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Su("@firebase/firestore");function ni(){return qr.logLevel}function W(t,...e){if(qr.logLevel<=ye.DEBUG){const n=e.map(lh);qr.debug(`Firestore (${Hs}): ${t}`,...n)}}function xn(t,...e){if(qr.logLevel<=ye.ERROR){const n=e.map(lh);qr.error(`Firestore (${Hs}): ${t}`,...n)}}function Cs(t,...e){if(qr.logLevel<=ye.WARN){const n=e.map(lh);qr.warn(`Firestore (${Hs}): ${t}`,...n)}}function lh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function De(t,e){t||ae()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class SP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CP{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new F_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new Tt(e)}}class kP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new NP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=DP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function ks(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Ze(0,0))}static max(){return new ce(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends Bi{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const VP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Bi{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return VP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new B(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new B(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Ue.fromString(e))}static fromName(e){return new ee(Ue.fromString(e).popFirst(5))}static empty(){return new ee(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Ue(e.slice()))}}function MP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new lr(s,ee.empty(),e)}function LP(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(ce.min(),ee.empty(),-1)}static max(){return new lr(ce.max(),ee.empty(),-1)}}function FP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $P{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==UP)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function co(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}ch._e=-1;function ul(t){return t==null}function va(t){return t===0&&1/t==-1/0}function BP(t){return typeof t=="number"&&Number.isInteger(t)&&!va(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oo(this.root,e,this.comparator,!0)}}class Oo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qf(this.data.getIterator())}getIteratorFrom(e){return new Qf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class Qf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new $t([])}unionWith(e){let n=new gt(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new B_("Invalid base64 string: "+i):i}}(e);return new kt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const jP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(De(!!t),typeof t=="string"){let e=0;const n=jP.exec(t);if(De(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hr(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hh(t){const e=t.mapValue.fields.__previous_value__;return uh(e)?hh(e):e}function ji(t){const e=cr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class qi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uh(t)?4:HP(t)?9007199254740991:10:ae()}function En(t,e){if(t===e)return!0;const n=zr(t);if(n!==zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ji(t).isEqual(ji(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=cr(s.timestampValue),a=cr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Hr(s.bytesValue).isEqual(Hr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),a=Qe(i.doubleValue);return o===a?va(o)===va(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ks(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Gf(o)!==Gf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!En(o[l],a[l])))return!1;return!0}(t,e);default:return ae()}}function Hi(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Os(t,e){if(t===e)return 0;const n=zr(t),r=zr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Qe(i.integerValue||i.doubleValue),l=Qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Jf(t.timestampValue,e.timestampValue);case 4:return Jf(ji(t),ji(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Hr(i),l=Hr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ae(a[c],l[c]);if(u!==0)return u}return Ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ae(Qe(i.latitude),Qe(o.latitude));return a!==0?a:Ae(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Os(a[c],l[c]);if(u)return u}return Ae(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===No.mapValue&&o===No.mapValue)return 0;if(i===No.mapValue)return 1;if(o===No.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Ae(l[h],u[h]);if(d!==0)return d;const f=Os(a[l[h]],c[u[h]]);if(f!==0)return f}return Ae(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ae()}}function Jf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=cr(t),r=cr(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function Ns(t){return $c(t)}function $c(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$c(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$c(n.fields[o])}`;return s+"}"}(t.mapValue):ae()}function Yf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bc(t){return!!t&&"integerValue"in t}function dh(t){return!!t&&"arrayValue"in t}function Xf(t){return!!t&&"nullValue"in t}function Zf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qo(t){return!!t&&"mapValue"in t}function vi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vi(n)}setAll(e){let n=dt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=vi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Gr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt(vi(this.value))}}function j_(t){const e=[];return Gr(t.fields,(n,r)=>{const s=new dt([n]);if(qo(r)){const i=j_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new At(e,0,ce.min(),ce.min(),ce.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,s){return new At(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new At(e,2,n,ce.min(),ce.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,ce.min(),ce.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.position=e,this.inclusive=n}}function ep(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=Os(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function zP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{}class Ye extends q_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WP(e,n,r):n==="array-contains"?new JP(e,r):n==="in"?new YP(e,r):n==="not-in"?new XP(e,r):n==="array-contains-any"?new ZP(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GP(e,r):new QP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Os(n,this.value)):n!==null&&zr(this.value)===zr(n)&&this.matchesComparison(Os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends q_{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new an(e,n)}matches(e){return H_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function H_(t){return t.op==="and"}function z_(t){return KP(t)&&H_(t)}function KP(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function jc(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Ns(t.value);if(z_(t))return t.filters.map(e=>jc(e)).join(",");{const e=t.filters.map(n=>jc(n)).join(",");return`${t.op}(${e})`}}function K_(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&En(r.value,s.value)}(t,e):t instanceof an?function(r,s){return s instanceof an&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&K_(o,s.filters[a]),!0):!1}(t,e):void ae()}function W_(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Ns(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(W_).join(" ,")+"}"}(t):"Filter"}class WP extends Ye{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class GP extends Ye{constructor(e,n){super(e,"in",n),this.keys=G_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QP extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=G_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function G_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class JP extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dh(n)&&Hi(n.arrayValue,this.value)}}class YP extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hi(this.value.arrayValue,n)}}class XP extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hi(this.value.arrayValue,n)}}class ZP extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function np(t,e=null,n=[],r=[],s=null,i=null,o=null){return new eR(t,e,n,r,s,i,o)}function fh(t){const e=fe(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ul(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ns(r)).join(",")),e.ce=n}return e.ce}function ph(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!K_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tp(t.startAt,e.startAt)&&tp(t.endAt,e.endAt)}function qc(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function tR(t,e,n,r,s,i,o,a){return new zs(t,e,n,r,s,i,o,a)}function hl(t){return new zs(t)}function rp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Q_(t){return t.collectionGroup!==null}function Ei(t){const e=fe(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new gt(dt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new zi(i,r))}),n.has(dt.keyField().canonicalString())||e.le.push(new zi(dt.keyField(),r))}return e.le}function _n(t){const e=fe(t);return e.he||(e.he=nR(e,Ei(t))),e.he}function nR(t,e){if(t.limitType==="F")return np(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zi(s.field,i)});const n=t.endAt?new Ea(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ea(t.startAt.position,t.startAt.inclusive):null;return np(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hc(t,e){const n=t.filters.concat([e]);return new zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zc(t,e,n){return new zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dl(t,e){return ph(_n(t),_n(e))&&t.limitType===e.limitType}function J_(t){return`${fh(_n(t))}|lt:${t.limitType}`}function ns(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>W_(s)).join(", ")}]`),ul(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ns(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ns(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function fl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=ep(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Ei(r),s)||r.endAt&&!function(o,a,l){const c=ep(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Ei(r),s))}(t,e)}function rR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Y_(t){return(e,n)=>{let r=!1;for(const s of Ei(t)){const i=sR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function sR(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Os(l,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=new je(ee.comparator);function Dn(){return iR}const X_=new je(ee.comparator);function ai(...t){let e=X_;for(const n of t)e=e.insert(n.key,n);return e}function Z_(t){let e=X_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nr(){return wi()}function ey(){return wi()}function wi(){return new Ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const oR=new je(ee.comparator),aR=new gt(ee.comparator);function me(...t){let e=aR;for(const n of t)e=e.add(n);return e}const lR=new gt(Ae);function cR(){return lR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:va(e)?"-0":e}}function ny(t){return{integerValue:""+t}}function uR(t,e){return BP(e)?ny(e):ty(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this._=void 0}}function hR(t,e,n){return t instanceof wa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&uh(i)&&(i=hh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ki?sy(t,e):t instanceof Wi?iy(t,e):function(s,i){const o=ry(s,i),a=sp(o)+sp(s.Ie);return Bc(o)&&Bc(s.Ie)?ny(a):ty(s.serializer,a)}(t,e)}function dR(t,e,n){return t instanceof Ki?sy(t,e):t instanceof Wi?iy(t,e):n}function ry(t,e){return t instanceof Ia?function(r){return Bc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class wa extends pl{}class Ki extends pl{constructor(e){super(),this.elements=e}}function sy(t,e){const n=oy(e);for(const r of t.elements)n.some(s=>En(s,r))||n.push(r);return{arrayValue:{values:n}}}class Wi extends pl{constructor(e){super(),this.elements=e}}function iy(t,e){let n=oy(e);for(const r of t.elements)n=n.filter(s=>!En(s,r));return{arrayValue:{values:n}}}class Ia extends pl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function sp(t){return Qe(t.integerValue||t.doubleValue)}function oy(t){return dh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ki&&s instanceof Ki||r instanceof Wi&&s instanceof Wi?ks(r.elements,s.elements,En):r instanceof Ia&&s instanceof Ia?En(r.Ie,s.Ie):r instanceof wa&&s instanceof wa}(t.transform,e.transform)}class pR{constructor(e,n){this.version=e,this.transformResults=n}}class rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ho(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gl{}function ay(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gh(t.key,rn.none()):new uo(t.key,t.data,rn.none());{const n=t.data,r=Lt.empty();let s=new gt(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new mr(t.key,r,new $t(s.toArray()),rn.none())}}function gR(t,e,n){t instanceof uo?function(s,i,o){const a=s.value.clone(),l=op(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof mr?function(s,i,o){if(!Ho(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=op(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ly(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ii(t,e,n,r){return t instanceof uo?function(i,o,a,l){if(!Ho(i.precondition,o))return a;const c=i.value.clone(),u=ap(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof mr?function(i,o,a,l){if(!Ho(i.precondition,o))return a;const c=ap(i.fieldTransforms,l,o),u=o.data;return u.setAll(ly(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Ho(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function mR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ry(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function ip(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ks(r,s,(i,o)=>fR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uo extends gl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mr extends gl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ly(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function op(t,e,n){const r=new Map;De(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,dR(o,a,n[s]))}return r}function ap(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,hR(i,o,e))}return r}class gh extends gl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _R extends gl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&gR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ii(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ii(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ey();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=ay(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&ks(this.mutations,e.mutations,(n,r)=>ip(n,r))&&ks(this.baseMutations,e.baseMutations,(n,r)=>ip(n,r))}}class mh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length);let s=function(){return oR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,Ee;function wR(t){switch(t){default:return ae();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function cy(t){if(t===void 0)return xn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ge.OK:return I.OK;case Ge.CANCELLED:return I.CANCELLED;case Ge.UNKNOWN:return I.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return I.INTERNAL;case Ge.UNAVAILABLE:return I.UNAVAILABLE;case Ge.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ge.NOT_FOUND:return I.NOT_FOUND;case Ge.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ge.ABORTED:return I.ABORTED;case Ge.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ge.DATA_LOSS:return I.DATA_LOSS;default:return ae()}}(Ee=Ge||(Ge={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=new _s([4294967295,4294967295],0);function lp(t){const e=IR().encode(t),n=new PP;return n.update(e),new Uint8Array(n.digest())}function cp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _s([n,r],0),new _s([s,i],0)]}class _h{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new li(`Invalid padding: ${n}`);if(r<0)throw new li(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new li(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new li(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=_s.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(_s.fromNumber(r)));return s.compare(TR)===1&&(s=new _s([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=lp(e),[r,s]=cp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _h(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=lp(e),[r,s]=cp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class li extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ml(ce.min(),s,new je(Ae),Dn(),me())}}class ho{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ho(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class uy{constructor(e,n){this.targetId=e,this.fe=n}}class hy{constructor(e,n,r=kt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class up{constructor(){this.ge=0,this.pe=dp(),this.ye=kt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=me(),n=me(),r=me();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae()}}),new ho(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=dp()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,De(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class AR{constructor(e){this.Le=e,this.ke=new Map,this.qe=Dn(),this.Qe=hp(),this.Ke=new je(Ae)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(qc(i))if(r===0){const o=new ee(i.path);this.We(n,o,At.newNoDocument(o,ce.min()))}else De(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Hr(r).toUint8Array()}catch(l){if(l instanceof B_)return Cs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new _h(o,s,i)}catch(l){return Cs(l instanceof li?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&qc(a.target)){const l=new ee(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,At.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=me();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new ml(e,n,this.Ke,this.qe,r);return this.qe=Dn(),this.Qe=hp(),this.Ke=new je(Ae),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new up,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new gt(Ae),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new up),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function hp(){return new je(ee.comparator)}function dp(){return new je(ee.comparator)}const bR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),PR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),RR=(()=>({and:"AND",or:"OR"}))();class SR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kc(t,e){return t.useProto3Json||ul(e)?e:{value:e}}function Ta(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CR(t,e){return Ta(t,e.toTimestamp())}function yn(t){return De(!!t),ce.fromTimestamp(function(n){const r=cr(n);return new Ze(r.seconds,r.nanos)}(t))}function yh(t,e){return function(r){return new Ue(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function fy(t){const e=Ue.fromString(t);return De(_y(e)),e}function Wc(t,e){return yh(t.databaseId,e.path)}function Zl(t,e){const n=fy(e);if(n.get(1)!==t.databaseId.projectId)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(py(n))}function Gc(t,e){return yh(t.databaseId,e)}function kR(t){const e=fy(t);return e.length===4?Ue.emptyPath():py(e)}function Qc(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function py(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fp(t,e,n){return{name:Wc(t,e),fields:n.value.mapValue.fields}}function OR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(De(u===void 0||typeof u=="string"),kt.fromBase64String(u||"")):(De(u===void 0||u instanceof Uint8Array),kt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:cy(c.code);return new B(u,c.message||"")}(o);n=new hy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zl(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):ce.min(),a=new Lt({mapValue:{fields:r.document.fields}}),l=At.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new zo(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Zl(t,r.document),i=r.readTime?yn(r.readTime):ce.min(),o=At.newNoDocument(s,i),a=r.removedTargetIds||[];n=new zo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Zl(t,r.document),i=r.removedTargetIds||[];n=new zo([],i,s,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ER(s,i),a=r.targetId;n=new uy(a,o)}}return n}function NR(t,e){let n;if(e instanceof uo)n={update:fp(t,e.key,e.value)};else if(e instanceof gh)n={delete:Wc(t,e.key)};else if(e instanceof mr)n={update:fp(t,e.key,e.data),updateMask:BR(e.fieldMask)};else{if(!(e instanceof _R))return ae();n={verify:Wc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof wa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ki)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ia)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:CR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae()}(t,e.precondition)),n}function xR(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(ce.min())&&(o=yn(i)),new pR(o,s.transformResults||[])}(n,e))):[]}function DR(t,e){return{documents:[Gc(t,e.path)]}}function VR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Gc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return my(an.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:rs(h.field),direction:FR(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Kc(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function MR(t){let e=kR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=gy(h);return d instanceof an&&z_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new zi(ss(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ul(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Ea(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Ea(f,d)}(n.endAt)),tR(e,s,o,i,a,"F",l,c)}function LR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ss(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ss(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ss(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ss(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(ss(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>gy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function FR(t){return bR[t]}function UR(t){return PR[t]}function $R(t){return RR[t]}function rs(t){return{fieldPath:t.canonicalString()}}function ss(t){return dt.fromServerFormat(t.fieldPath)}function my(t){return t instanceof Ye?function(n){if(n.op==="=="){if(Zf(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NAN"}};if(Xf(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zf(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NAN"}};if(Xf(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(n.field),op:UR(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(s=>my(s));return r.length===1?r[0]:{compositeFilter:{op:$R(n.op),filters:r}}}(t):ae()}function BR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _y(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,s,i=ce.min(),o=ce.min(),a=kt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.ut=e}}function qR(t){const e=MR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.on=new zR}addToCollectionParentIndex(e,n){return this.on.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(lr.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class zR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new gt(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new gt(Ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new xs(0)}static Nn(){return new xs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ii(r.mutation,s,$t.empty(),Ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=Nr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ai();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Dn();const o=wi(),a=function(){return wi()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof mr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ii(u.mutation,c,u.mutation.getFieldMask(),Ze.now())):o.set(c.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new WR(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=wi();let s=new je((o,a)=>o-a),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||$t.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||me()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=ey();u.forEach(d=>{if(!i.has(d)){const f=ay(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Q_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(Nr());let a=-1,l=i;return o.next(c=>S.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,me())).next(u=>({batchId:a,changes:Z_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let s=ai();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ai();return this.indexManager.getCollectionParents(e,i).next(a=>S.forEach(a,l=>{const c=function(h,d){return new zs(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,At.newInvalidDocument(u)))});let a=ai();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Ii(u.mutation,c,$t.empty(),Ze.now()),fl(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return S.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:qR(s.bundledQuery),readTime:yn(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this.overlays=new je(ee.comparator),this.lr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nr();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=Nr(),i=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Nr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Nr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return S.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vR(n,r));let i=this.lr.get(n);i===void 0&&(i=me(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.hr=new gt(rt.Pr),this.Ir=new gt(rt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new rt(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new ee(new Ue([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new ee(new Ue([])),r=new rt(n,e),s=new rt(n,e+1);let i=me();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new rt(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return ee.comparator(e.key,n.key)||Ae(e.gr,n.gr)}static Tr(e,n){return Ae(e.gr,n.gr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new gt(rt.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yR(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new rt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(Ae);return n.forEach(s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),S.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const o=new rt(new ee(i),0);let a=new gt(Ae);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),S.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return S.forEach(n.mutations,s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new rt(n,0),s=this.yr.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.Cr=e,this.docs=function(){return new je(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const o=n.path,a=new ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||FP(LP(u),r)<=0||(s.has(u.key)||fl(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZR(this)}getSize(e){return S.resolve(this.size)}}class ZR extends KR{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.persistence=e,this.Fr=new Ks(n=>fh(n),ph),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Mr=0,this.Or=new vh,this.targetCount=0,this.Nr=xs.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),S.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new xs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.kn(n),S.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n){this.Br={},this.overlays={},this.Lr=new ch(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new eS(this),this.indexManager=new HR,this.remoteDocumentCache=function(s){return new XR(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new jR(n),this.Kr=new QR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new YR(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new nS(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class nS extends $P{constructor(e){super(),this.currentSequenceNumber=e}}class Eh{constructor(e){this.persistence=e,this.Gr=new vh,this.zr=null}static jr(e){return new Eh(e)}get Hr(){if(this.zr)return this.zr;throw ae()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,r=>{const s=ee.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return S.or([()=>S.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new rS;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(ni()<=ye.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ns(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(ni()<=ye.DEBUG&&W("QueryEngine","Query:",ns(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(ni()<=ye.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ns(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):S.resolve())}zi(e,n){if(rp(n))return S.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=zc(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,zc(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,r,s){return rp(n)||s.isEqual(ce.min())?S.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?S.resolve(null):(ni()<=ye.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ns(n)),this.Xi(e,o,n,MP(s,-1)).next(a=>a))})}Yi(e,n){let r=new gt(Y_(e));return n.forEach((s,i)=>{fl(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return ni()<=ye.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ns(n)),this.Gi.getDocumentsMatchingQuery(e,n,lr.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new je(Ae),this.ns=new Ks(i=>fh(i),ph),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GR(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function oS(t,e,n,r){return new iS(t,e,n,r)}async function yy(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=me();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function aS(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=S.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(l,y)).next(_=>{const v=c.docVersions.get(y);De(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),u.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=me();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function vy(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function lS(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(kt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(_,v,R){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(i,f))});let l=Dn(),c=me();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(cS(i,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(ce.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=s,i))}function cS(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function uS(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hS(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Jc(t,e,n){const r=fe(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!co(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function pp(t,e,n){const r=fe(t);let s=ce.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=fe(l),d=h.ns.get(u);return d!==void 0?S.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(r,o,_n(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:me())).next(a=>(dS(r,rR(e),a),{documents:a,ls:i})))}function dS(t,e,n){let r=t.rs.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class gp{constructor(){this.activeTargetIds=cR()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fS{constructor(){this.eo=new gp,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new gp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo=null;function ec(){return xo===null?xo=function(){return 268435456+Math.round(2147483648*Math.random())}():xo++,"0x"+xo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class _S extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=ec(),l=this.So(n,r);W("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,l,c,s).then(u=>(W("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Cs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=gS[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=ec();return new Promise((o,a)=>{const l=new bP;l.setWithCredentials(!0),l.listenOnce(TP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Xl.NO_ERROR:const u=l.getResponseJson();W(wt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Xl.TIMEOUT:W(wt,`RPC '${e}' ${i} timed out`),a(new B(I.DEADLINE_EXCEEDED,"Request time out"));break;case Xl.HTTP_ERROR:const h=l.getStatus();if(W(wt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(v){const R=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(R)>=0?R:I.UNKNOWN}(f.status);a(new B(y,f.message))}else a(new B(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(I.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{W(wt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);W(wt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}vo(e,n,r){const s=ec(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wP(),a=IP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");W(wt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const y=new mS({co:v=>{f?W(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(W(wt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),W(wt,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},lo:()=>h.close()}),_=(v,R,N)=>{v.listen(R,A=>{try{N(A)}catch(k){setTimeout(()=>{throw k},0)}})};return _(h,ko.EventType.OPEN,()=>{f||W(wt,`RPC '${e}' stream ${s} transport opened.`)}),_(h,ko.EventType.CLOSE,()=>{f||(f=!0,W(wt,`RPC '${e}' stream ${s} transport closed`),y.Ro())}),_(h,ko.EventType.ERROR,v=>{f||(f=!0,Cs(wt,`RPC '${e}' stream ${s} transport errored:`,v),y.Ro(new B(I.UNAVAILABLE,"The operation could not be completed")))}),_(h,ko.EventType.MESSAGE,v=>{var R;if(!f){const N=v.data[0];De(!!N);const A=N,k=A.error||((R=A[0])===null||R===void 0?void 0:R.error);if(k){W(wt,`RPC '${e}' stream ${s} received error:`,k);const Q=k.status;let se=function(ie){const he=Ge[ie];if(he!==void 0)return cy(he)}(Q),F=k.message;se===void 0&&(se=I.INTERNAL,F="Unknown error status: "+Q+" with message "+k.message),f=!0,y.Ro(new B(se,F)),h.close()}else W(wt,`RPC '${e}' stream ${s} received:`,N),y.Vo(N)}}),_(a,AP.STAT_EVENT,v=>{v.stat===Kf.PROXY?W(wt,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Kf.NOPROXY&&W(wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function tc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t){return new SR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Ey(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new B(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yS extends wy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=OR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?yn(o.readTime):ce.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Qc(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=qc(l)?{documents:DR(i,l)}:{query:VR(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=dy(i,o.resumeToken);const c=Kc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ce.min())>0){a.readTime=Ta(i,o.snapshotVersion.toTimestamp());const c=Kc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=LR(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Qc(this.serializer),n.removeTarget=e,this.e_(n)}}class vS extends wy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=xR(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.I_(r,n)}return De(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Qc(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>NR(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(I.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(I.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class wS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(xn(n),this.f_=!1):W("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Qr(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=fe(l);c.C_.add(4),await fo(c),c.M_.set("Unknown"),c.C_.delete(4),await yl(c)}(this))})}),this.M_=new wS(r,s)}}async function yl(t){if(Qr(t))for(const e of t.v_)await e(!0)}async function fo(t){for(const e of t.v_)await e(!1)}function Iy(t,e){const n=fe(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Ah(n)?Th(n):Ws(n).Ho()&&Ih(n,e))}function Ty(t,e){const n=fe(t),r=Ws(n);n.D_.delete(e),r.Ho()&&Ay(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Qr(n)&&n.M_.set("Unknown"))}function Ih(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ws(t).u_(e)}function Ay(t,e){t.x_.Oe(e),Ws(t).c_(e)}function Th(t){t.x_=new AR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.M_.g_()}function Ah(t){return Qr(t)&&!Ws(t).jo()&&t.D_.size>0}function Qr(t){return fe(t).C_.size===0}function by(t){t.x_=void 0}async function TS(t){t.D_.forEach((e,n)=>{Ih(t,e)})}async function AS(t,e){by(t),Ah(t)?(t.M_.w_(e),Th(t)):t.M_.set("Unknown")}async function bS(t,e,n){if(t.M_.set("Online"),e instanceof hy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Aa(t,r)}else if(e instanceof zo?t.x_.$e(e):e instanceof uy?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(ce.min()))try{const r=await vy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.D_.get(l);if(!u)return;i.D_.set(l,u.withResumeToken(kt.EMPTY_BYTE_STRING,u.snapshotVersion)),Ay(i,l);const h=new Zn(u.target,l,c,u.sequenceNumber);Ih(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Aa(t,r)}}async function Aa(t,e,n){if(!co(e))throw e;t.C_.add(1),await fo(t),t.M_.set("Offline"),n||(n=()=>vy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await yl(t)})}function Py(t,e){return e().catch(n=>Aa(t,n,e))}async function vl(t){const e=fe(t),n=ur(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;PS(e);)try{const s=await uS(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,RS(e,s)}catch(s){await Aa(e,s)}Ry(e)&&Sy(e)}function PS(t){return Qr(t)&&t.b_.length<10}function RS(t,e){t.b_.push(e);const n=ur(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Ry(t){return Qr(t)&&!ur(t).jo()&&t.b_.length>0}function Sy(t){ur(t).start()}async function SS(t){ur(t).E_()}async function CS(t){const e=ur(t);for(const n of t.b_)e.P_(n.mutations)}async function kS(t,e,n){const r=t.b_.shift(),s=mh.from(r,e,n);await Py(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await vl(t)}async function OS(t,e){e&&ur(t).h_&&await async function(r,s){if(function(o){return wR(o)&&o!==I.ABORTED}(s.code)){const i=r.b_.shift();ur(r).Yo(),await Py(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await vl(r)}}(t,e),Ry(t)&&Sy(t)}async function _p(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Qr(n);n.C_.add(3),await fo(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await yl(n)}async function NS(t,e){const n=fe(t);e?(n.C_.delete(2),await yl(n)):e||(n.C_.add(2),await fo(n),n.M_.set("Unknown"))}function Ws(t){return t.O_||(t.O_=function(n,r,s){const i=fe(n);return i.A_(),new yS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:TS.bind(null,t),Io:AS.bind(null,t),a_:bS.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Ah(t)?Th(t):t.M_.set("Unknown")):(await t.O_.stop(),by(t))})),t.O_}function ur(t){return t.N_||(t.N_=function(n,r,s){const i=fe(n);return i.A_(),new vS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:SS.bind(null,t),Io:OS.bind(null,t),T_:CS.bind(null,t),I_:kS.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await vl(t)):(await t.N_.stop(),t.b_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new bh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ph(t,e){if(xn("AsyncQueue",`${e}: ${t}`),co(t))return new B(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=ai(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.B_=new je(ee.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):ae():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ds{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ds(e,n,ys.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this.k_=void 0,this.listeners=[]}}class DS{constructor(){this.queries=new Ks(e=>J_(e),dl),this.onlineState="Unknown",this.q_=new Set}}async function Rh(t,e){const n=fe(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new xS),s)try{i.k_=await n.onListen(r)}catch(o){const a=Ph(o,`Initialization of query '${ns(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&Ch(n)}async function Sh(t,e){const n=fe(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function VS(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Ch(n)}function MS(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ch(t){t.q_.forEach(e=>{e.next()})}class kh{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.key=e}}class ky{constructor(e){this.key=e}}class LS{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=me(),this.mutatedKeys=me(),this._a=Y_(e),this.aa=new ys(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new yp,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=fl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?y!==_&&(r.track({type:3,doc:f}),v=!0):this.ha(d,f)||(r.track({type:2,doc:f}),v=!0,(l&&this._a(f,l)>0||c&&this._a(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(f,y){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return _(f)-_(y)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],l=this.oa.size===0&&this.current&&!s?1:0,c=l!==this.sa;return this.sa=l,o.length!==0||c?{snapshot:new Ds(this.query,e.aa,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new yp,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=me(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new ky(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new Cy(r))}),n}da(e){this.ia=e.ls,this.oa=me();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Ds.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class FS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class US{constructor(e){this.key=e,this.Ra=!1}}class $S{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ks(a=>J_(a),dl),this.fa=new Map,this.ga=new Set,this.pa=new je(ee.comparator),this.ya=new Map,this.wa=new vh,this.Sa={},this.ba=new Map,this.Da=xs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function BS(t,e){const n=YS(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await hS(n.localStore,_n(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await jS(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Iy(n.remoteStore,o)}return s}async function jS(t,e,n,r,s){t.va=(h,d,f)=>async function(_,v,R,N){let A=v.view.ca(R);A.Zi&&(A=await pp(_.localStore,v.query,!1).then(({documents:F})=>v.view.ca(F,A)));const k=N&&N.targetChanges.get(v.targetId),Q=N&&N.targetMismatches.get(v.targetId)!=null,se=v.view.applyChanges(A,_.isPrimaryClient,k,Q);return Ep(_,v.targetId,se.Ta),se.snapshot}(t,h,d,f);const i=await pp(t.localStore,e,!0),o=new LS(e,i.ls),a=o.ca(i.documents),l=ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Ep(t,n,c.Ta);const u=new FS(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function qS(t,e){const n=fe(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!dl(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Jc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ty(n.remoteStore,r.targetId),Yc(n,r.targetId)}).catch(lo)):(Yc(n,r.targetId),await Jc(n.localStore,r.targetId,!0))}async function HS(t,e,n){const r=XS(t);try{const s=await function(o,a){const l=fe(o),c=Ze.now(),u=a.reduce((f,y)=>f.add(y.key),me());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Dn(),_=me();return l.ss.getEntries(f,u).next(v=>{y=v,y.forEach((R,N)=>{N.isValidDocument()||(_=_.add(R))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(v=>{h=v;const R=[];for(const N of a){const A=mR(N,h.get(N.key).overlayedDocument);A!=null&&R.push(new mr(N.key,A,j_(A.value.mapValue),rn.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,R,a)}).next(v=>{d=v;const R=v.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,v.batchId,R)})}).then(()=>({batchId:d.batchId,changes:Z_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new je(Ae)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(r,s.batchId,n),await po(r,s.changes),await vl(r.remoteStore)}catch(s){const i=Ph(s,"Failed to persist write");n.reject(i)}}async function Oy(t,e){const n=fe(t);try{const r=await lS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?De(o.Ra):s.removedDocuments.size>0&&(De(o.Ra),o.Ra=!1))}),await po(n,r,e)}catch(r){await lo(r)}}function vp(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=fe(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&Ch(l)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zS(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new je(ee.comparator);o=o.insert(i,At.newNoDocument(i,ce.min()));const a=me().add(i),l=new ml(ce.min(),new Map,new je(Ae),o,a);await Oy(r,l),r.pa=r.pa.remove(i),r.ya.delete(e),Oh(r)}else await Jc(r.localStore,e,!1).then(()=>Yc(r,e,n)).catch(lo)}async function KS(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await aS(n.localStore,e);xy(n,r,null),Ny(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await po(n,s)}catch(s){await lo(s)}}async function WS(t,e,n){const r=fe(t);try{const s=await function(o,a){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(De(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);xy(r,e,n),Ny(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await po(r,s)}catch(s){await lo(s)}}function Ny(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function xy(t,e,n){const r=fe(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function Yc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||Dy(t,r)})}function Dy(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Ty(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Oh(t))}function Ep(t,e,n){for(const r of n)r instanceof Cy?(t.wa.addReference(r.key,e),GS(t,r)):r instanceof ky?(W("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||Dy(t,r.key)):ae()}function GS(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(W("SyncEngine","New document in limbo: "+n),t.ga.add(r),Oh(t))}function Oh(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new ee(Ue.fromString(e)),r=t.Da.next();t.ya.set(r,new US(n)),t.pa=t.pa.insert(n,r),Iy(t.remoteStore,new Zn(_n(hl(n.path)),r,"TargetPurposeLimboResolution",ch._e))}}async function po(t,e,n){const r=fe(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=wh.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(l,c){const u=fe(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(c,d=>S.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>S.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!co(h))throw h;W("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),y=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(y);u.ts=u.ts.insert(d,_)}}}(r.localStore,i))}async function QS(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await yy(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new B(I.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await po(n,r._s)}}function JS(t,e){const n=fe(t),r=n.ya.get(e);if(r&&r.Ra)return me().add(r.key);{let s=me();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function YS(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Oy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zS.bind(null,e),e.Va.a_=VS.bind(null,e.eventManager),e.Va.Fa=MS.bind(null,e.eventManager),e}function XS(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WS.bind(null,e),e}class wp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_l(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return oS(this.persistence,new sS,e.initialUser,this.serializer)}createPersistence(e){return new tS(Eh.jr,this.serializer)}createSharedClientState(e){return new fS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QS.bind(null,this.syncEngine),await NS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DS}()}createDatastore(e){const n=_l(e.databaseInfo.databaseId),r=function(i){return new _S(i)}(e.databaseInfo);return function(i,o,a,l){return new ES(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new IS(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>vp(this.syncEngine,n,0),function(){return mp.D()?new mp:new pS}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new $S(s,i,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=fe(n);W("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await fo(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=U_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{W("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(W("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ph(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ip(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nC(t);W("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>_p(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>_p(e.remoteStore,i)),t._onlineComponents=e}function tC(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function nC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tC(n))throw n;Cs("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new wp)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await nc(t,new wp);return t._offlineComponents}async function Vy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Ip(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Ip(t,new ZS))),t._onlineComponents}function rC(t){return Vy(t).then(e=>e.syncEngine)}async function ba(t){const e=await Vy(t),n=e.eventManager;return n.onListen=BS.bind(null,e.syncEngine),n.onUnlisten=qS.bind(null,e.syncEngine),n}function sC(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Nh({next:d=>{o.enqueueAndForget(()=>Sh(i,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new B(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new B(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new kh(hl(a.path),u,{includeMetadataChanges:!0,J_:!0});return Rh(i,h)}(await ba(t),t.asyncQueue,e,n,r)),r.promise}function iC(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Nh({next:d=>{o.enqueueAndForget(()=>Sh(i,h)),d.fromCache&&l.source==="server"?c.reject(new B(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new kh(a,u,{includeMetadataChanges:!0,J_:!0});return Rh(i,h)}(await ba(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t,e,n){if(!n)throw new B(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oC(t,e,n,r){if(e===!0&&r===!0)throw new B(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ap(t){if(!ee.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bp(t){if(ee.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function El(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=El(t);throw new B(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=My((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RP;switch(r.type){case"firstParty":return new OP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Tp.get(n);r&&(W("ComponentProvider","Removing Datastore"),Tp.delete(n),r.terminate())}(this),Promise.resolve()}}function aC(t,e,n,r={}){var s;const i=(t=Qt(t,wl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Tt.MOCK_USER;else{a=nT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Tt(c)}t._authCredentials=new SP(new F_(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _r(this.firestore,e,this._query)}}class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class ir extends _r{constructor(e,n,r){super(e,n,hl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new ee(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function Fy(t,e,...n){if(t=mt(t),Ly("collection","path",e),t instanceof wl){const r=Ue.fromString(e,...n);return bp(r),new ir(t,null,r)}{if(!(t instanceof Dt||t instanceof ir))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return bp(r),new ir(t.firestore,null,r)}}function Uy(t,e,...n){if(t=mt(t),arguments.length===1&&(e=U_.newId()),Ly("doc","path",e),t instanceof wl){const r=Ue.fromString(e,...n);return Ap(r),new Dt(t,null,new ee(r))}{if(!(t instanceof Dt||t instanceof ir))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Ap(r),new Dt(t.firestore,t instanceof ir?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Ey(this,"async_queue_retry"),this.iu=()=>{const n=tc();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=tc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Cn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!co(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw xn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=bh.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&ae()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Rp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class hr extends wl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new lC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$y(this),this._firestoreClient.terminate()}}function cC(t,e){const n=typeof t=="object"?t:tm(),r=typeof t=="string"?t:e||"(default)",s=ku(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=eT("firestore");i&&aC(s,...i)}return s}function Il(t){return t._firestoreClient||$y(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $y(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new qP(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,My(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new eC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vs(kt.fromBase64String(e))}catch(n){throw new B(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vs(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=/^__.*__$/;class hC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new uo(e,this.data,n,this.fieldTransforms)}}class By{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function jy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class Vh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Vh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Pa(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(jy(this.Iu)&&uC.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class dC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_l(e)}pu(e,n,r,s=!1){return new Vh({Iu:e,methodName:n,gu:r,path:dt.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mh(t){const e=t._freezeSettings(),n=_l(t._databaseId);return new dC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fC(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Lh("Data must be an object, but it was:",o,r);const a=qy(r,o);let l,c;if(i.merge)l=new $t(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Xc(e,h,n);if(!o.contains(d))throw new B(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);zy(u,d)||u.push(d)}l=new $t(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new hC(new Lt(a),l,c)}class Al extends xh{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Al}}function pC(t,e,n,r){const s=t.pu(1,e,n);Lh("Data must be an object, but it was:",s,r);const i=[],o=Lt.empty();Gr(r,(l,c)=>{const u=Fh(e,l,n);c=mt(c);const h=s.Ru(u);if(c instanceof Al)i.push(u);else{const d=go(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new $t(i);return new By(o,a,s.fieldTransforms)}function gC(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[Xc(e,r,n)],l=[s];if(i.length%2!=0)throw new B(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Xc(e,i[d])),l.push(i[d+1]);const c=[],u=Lt.empty();for(let d=a.length-1;d>=0;--d)if(!zy(c,a[d])){const f=a[d];let y=l[d];y=mt(y);const _=o.Ru(f);if(y instanceof Al)c.push(f);else{const v=go(y,_);v!=null&&(c.push(f),u.set(f,v))}}const h=new $t(c);return new By(u,h,o.fieldTransforms)}function mC(t,e,n,r=!1){return go(n,t.pu(r?4:3,e))}function go(t,e){if(Hy(t=mt(t)))return Lh("Unsupported field value:",e,t),qy(t,e);if(t instanceof xh)return function(r,s){if(!jy(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=go(a,s.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ze.fromDate(r);return{timestampValue:Ta(s.serializer,i)}}if(r instanceof Ze){const i=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ta(s.serializer,i)}}if(r instanceof Dh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vs)return{bytesValue:dy(s.serializer,r._byteString)};if(r instanceof Dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${El(r)}`)}(t,e)}function qy(t,e){const n={};return $_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(t,(r,s)=>{const i=go(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Hy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof Dh||t instanceof Vs||t instanceof Dt||t instanceof xh)}function Lh(t,e,n){if(!Hy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=El(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Xc(t,e,n){if((e=mt(e))instanceof Tl)return e._internalPath;if(typeof e=="string")return Fh(t,e);throw Pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const _C=new RegExp("[~\\*/\\[\\]]");function Fh(t,e,n){if(e.search(_C)>=0)throw Pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tl(...e.split("."))._internalPath}catch{throw Pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new B(I.INVALID_ARGUMENT,a+t+l)}function zy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yC extends Ky{data(){return super.data()}}function bl(t,e){return typeof e=="string"?Fh(t,e):e instanceof Tl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uh{}class Gy extends Uh{}function vC(t,e,...n){let r=[];e instanceof Uh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof $h).length,a=i.filter(l=>l instanceof Pl).length;if(o>1||o>0&&a>0)throw new B(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Pl extends Gy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Pl(e,n,r)}_apply(e){const n=this._parse(e);return Qy(e._query,n),new _r(e.firestore,e.converter,Hc(e._query,n))}_parse(e){const n=Mh(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){kp(h,u);const f=[];for(const y of h)f.push(Cp(l,i,y));d={arrayValue:{values:f}}}else d=Cp(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||kp(h,u),d=mC(a,o,h,u==="in"||u==="not-in");return Ye.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Sp(t,e,n){const r=e,s=bl("where",t);return Pl._create(s,r,n)}class $h extends Uh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $h(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:an.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)Qy(o,l),o=Hc(o,l)}(e._query,n),new _r(e.firestore,e.converter,Hc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bh extends Gy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new B(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zi(i,o)}(e._query,this._field,this._direction);return new _r(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new zs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function CO(t,e="asc"){const n=e,r=bl("orderBy",t);return Bh._create(r,n)}function Cp(t,e,n){if(typeof(n=mt(n))=="string"){if(n==="")throw new B(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Q_(e)&&n.indexOf("/")!==-1)throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!ee.isDocumentKey(r))throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yf(t,new ee(r))}if(n instanceof Dt)return Yf(t,n._key);throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${El(n)}.`)}function kp(t,e){if(!Array.isArray(t)||t.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qy(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class EC{convertValue(e,n="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Dh(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const n=cr(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);De(_y(r));const s=new qi(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(n)||xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jy extends Ky{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ko(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ko extends Jy{data(e={}){return super.data(e)}}class Yy{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ci(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ko(this._firestore,this._userDataWriter,r.key,r,new ci(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Ko(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ci(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ko(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ci(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:IC(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function IC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(t){t=Qt(t,Dt);const e=Qt(t.firestore,hr);return sC(Il(e),t._key).then(n=>Xy(e,t,n))}class jh extends EC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function TC(t){t=Qt(t,_r);const e=Qt(t.firestore,hr),n=Il(e),r=new jh(e);return Wy(t._query),iC(n,t._query).then(s=>new Yy(e,r,t,s))}function OO(t,e,n,...r){t=Qt(t,Dt);const s=Qt(t.firestore,hr),i=Mh(s);let o;return o=typeof(e=mt(e))=="string"||e instanceof Tl?gC(i,"updateDoc",t._key,e,n,r):pC(i,"updateDoc",t._key,e),qh(s,[o.toMutation(t._key,rn.exists(!0))])}function AC(t){return qh(Qt(t.firestore,hr),[new gh(t._key,rn.none())])}function NO(t,e){const n=Qt(t.firestore,hr),r=Uy(t),s=wC(t.converter,e);return qh(n,[fC(Mh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,rn.exists(!1))]).then(()=>r)}function xO(t,...e){var n,r,s;t=mt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Rp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Rp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Dt)c=Qt(t.firestore,hr),u=hl(t._key.path),l={next:h=>{e[o]&&e[o](Xy(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Qt(t,_r);c=Qt(h.firestore,hr),u=h._query;const d=new jh(c);l={next:f=>{e[o]&&e[o](new Yy(c,d,h,f))},error:e[o+1],complete:e[o+2]},Wy(t._query)}return function(d,f,y,_){const v=new Nh(_),R=new kh(f,v,y);return d.asyncQueue.enqueueAndForget(async()=>Rh(await ba(d),R)),()=>{v.Na(),d.asyncQueue.enqueueAndForget(async()=>Sh(await ba(d),R))}}(Il(c),u,a,l)}function qh(t,e){return function(r,s){const i=new Cn;return r.asyncQueue.enqueueAndForget(async()=>HS(await rC(r),s,i)),i.promise}(Il(t),e)}function Xy(t,e,n){const r=n.docs.get(e._key),s=new jh(t);return new Jy(t,s,e._key,r,new ci(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Hs=s})($s),Ps(new $r("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new hr(new CP(r.getProvider("auth-internal")),new xP(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qi(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),sr(Wf,"4.4.0",e),sr(Wf,"4.4.0","esm2017")})();var bC="firebase",PC="10.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr(bC,PC,"app");const RC={apiKey:"AIzaSyBALxNnVyLoIa34USkJHWcs37S6GVJ3VfA",authDomain:"inventoryvuefirebase.firebaseapp.com",projectId:"inventoryvuefirebase",storageBucket:"inventoryvuefirebase.appspot.com",messagingSenderId:"31562894830",appId:"1:31562894830:web:c26b5315d02e2823b992ff",measurementId:"G-9J0PRYWN5D"},Ra=em(RC),Zy=cC(Ra),ev=Dm(Ra);Ra.config.globalProperties&&Tm(ev,t=>{Ra.config.globalProperties.$currentUser=t});const Gs=t=>(dr("data-v-32874aa3"),t=t(),fr(),t),SC={class:"wrapper"},CC=Gs(()=>O("div",{class:"sidebar-header"},[O("h3",null,"ระบบจัดการอะไหล่รถยนต์")],-1)),kC={class:"list-unstyled components"},OC={class:"ms-1"},NC=Gs(()=>O("i",{class:"bx bx-log-in me-2"},null,-1)),xC=Gs(()=>O("span",{class:"ms-1"},"ออกจากระบบ",-1)),DC=[NC,xC],VC={id:"content"},MC={class:"navbar navbar-expand px-3 border-bottom shadow-sm mb-4 bg-white"},LC=Gs(()=>O("i",{class:"text-danger logout",style:{"font-size":"25px"}},null,-1)),FC=[LC],UC={href:"#","data-bs-toggle":"modal","data-bs-target":"#RemoveAccount",class:"btn btn-success"},$C={class:"position-relative"},BC={class:"row"},jC={class:"col-12"},qC={class:"card shadow-sm border-0 p-4"},HC={class:"modal fade",id:"RemoveAccount",tabindex:"-1","aria-labelledby":"RemoveAccountLabel","aria-hidden":"true"},zC={class:"modal-dialog"},KC={class:"modal-content"},WC=Gs(()=>O("div",{class:"modal-header"},[O("h1",{class:"modal-title fs-5",id:"RemoveAccountLabel"},"ข้อมูลส่วนตัว"),O("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),GC={class:"modal-body"},QC={class:"row"},JC={class:"col-12 mb-3"},YC=Gs(()=>O("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"ปิด",-1)),XC={__name:"DefaultLayout",setup(t){const e=Je(!1),n=()=>{e.value=!e.value},r=()=>{vs.push({name:"Employee"})},s=Je(""),i=Je("");Us(async()=>{s.value=JSON.parse(localStorage.getItem("user")).email,i.value=JSON.parse(localStorage.getItem("user")).uid});const o=async()=>{$("#RemoveAccount").modal("hide");const c=Uy(Fy(Zy,"users"),i.value);localStorage.removeItem("user"),await AC(c),Swal.fire({position:"center",icon:"success",title:"ลบบัญชีสำเร็จ",showConfirmButton:!1,timer:1500}),vs.push("/login")},a=Je([{text:"ข้อมูลอะไหล่รถยนต์",link:"Stock",icon:"bx bx-spreadsheet"},{text:"เบิกอะไหล่รถยนต์",link:"Order",icon:"bx bx-store-alt"},{text:"ข้อมูลพนักงาน",link:"Employee",icon:"bx bxs-user-account"},{text:"แจ้งปัญหาการใช้งาน",link:"Problem",icon:"bx bx-comment-error"},{text:"สรุปรายงาน",link:"Report",icon:"bx bxs-report"}]),l=()=>{localStorage.removeItem("user"),vs.push("/login")};return(c,u)=>{const h=dd("router-link"),d=dd("router-view");return z(),ne("div",null,[O("div",SC,[O("nav",{id:"sidebar",class:xe({active:e.value})},[CC,O("ul",kC,[(z(!0),ne(Le,null,An(a.value,(f,y)=>(z(),ne("li",{key:y},[ze(h,{to:{name:f.link}},{default:hs(()=>[O("i",{class:xe(["me-2",f.icon])},null,2),O("span",OC,ct(f.text),1)]),_:2},1032,["to"])]))),128)),O("li",{class:"bg-danger"},[O("a",{href:"#",onClick:l},DC)])])],2),O("div",VC,[O("nav",MC,[O("button",{type:"button",id:"sidebarCollapse",class:"btn",onClick:n},[O("i",{style:{"font-size":"20px"},class:xe(`${e.value?"bx bx-x":"bx bx-align-left"}`)},null,2)]),O("div",{class:"navbar-collapse navbar"},[O("ul",{class:"navbar-nav"},[O("li",{class:"nav-item dropdown",onClick:l},FC)])]),O("div",null,[O("a",UC,ct(s.value),1)])]),O("div",$C,[O("div",BC,[O("div",jC,[O("div",qC,[ze(d,{class:"router-view"},{default:hs(({Component:f})=>[ze(qa,{name:"page-slide",mode:"out-in"},{default:hs(()=>[(z(),en(Lo(f)))]),_:2},1024)]),_:1})])])])])]),O("div",HC,[O("div",zC,[O("div",KC,[WC,O("div",GC,[O("div",QC,[O("div",JC,[O("span",null,"อีเมล: "+ct(s.value),1)]),O("div",{class:"mb-3"},[O("button",{type:"button",onClick:o,class:"btn btn-danger w-100"},"ลบบัญชี")])])]),O("div",{class:"modal-footer"},[O("a",{href:"#",onClick:r,class:"btn btn-primary","data-bs-dismiss":"modal"},"แก้ไขข้อมูล"),YC])])])])])])}}},ZC=Pu(XC,[["__scopeId","data-v-32874aa3"]]);const mo=t=>(dr("data-v-90aeb216"),t=t(),fr(),t),e1={class:"warpper"},t1={class:"form-signin"},n1={class:"card shadow border-0"},r1={class:"card-body"},s1=["onSubmit"],i1=mo(()=>O("h1",{class:"h3 fw-normal text-center"},"ระบบจัดการอะไหล่รถยนต์",-1)),o1=mo(()=>O("div",{class:"border-primary border mb-3"},null,-1)),a1={key:0,class:"alert alert-danger"},l1={class:"mb-3"},c1=mo(()=>O("label",{for:"floatingInput"},"อีเมล",-1)),u1={class:"mb-3"},h1=mo(()=>O("label",{for:"floatingPassword"},"รหัสผ่าน",-1)),d1=["disabled"],f1={class:"d-flex justify-content-center align-items-center"},p1={key:0,class:"spinner-border text-light",role:"status"},g1=mo(()=>O("span",{class:"visually-hidden"},"Loading...",-1)),m1=[g1],_1={key:1,class:"ms-2"},y1={key:2,class:"ms-2"},v1={__name:"Login",setup(t){const e=Je(""),n=Je(""),r=Je(null),s=Je(!1),i=Je(""),o=async()=>{var l;s.value=!0;const a=vC(Fy(Zy,"users"),Sp("email","==",e.value),Sp("password","==",n.value));try{const c=await TC(a);if(c.empty)s.value=!1,i.value="อีเมลหรือรหัสผ่านไม่ถูกต้อง";else{const u={...c.docs[0].data(),uid:(l=c.docs[0])==null?void 0:l.id};u.isAuthentication=!0,localStorage.setItem("user",JSON.stringify(u)),i.value="",s.value=!1,vs.push("/stock")}}catch(c){i.value=c}};return Tm(ev,a=>{r.value=a}),(a,l)=>(z(),ne("div",e1,[O("main",t1,[O("div",n1,[O("div",r1,[O("form",{class:"m-4",onSubmit:Ts(o,["prevent"])},[i1,o1,i.value?(z(),ne("div",a1,[O("span",null,ct(i.value),1)])):It("",!0),O("div",l1,[c1,ui(O("input",{required:"","onUpdate:modelValue":l[0]||(l[0]=c=>e.value=c),type:"text",class:"form-control",placeholder:"อีเมล"},null,512),[[Bd,e.value]])]),O("div",u1,[h1,ui(O("input",{required:"","onUpdate:modelValue":l[1]||(l[1]=c=>n.value=c),type:"password",class:"form-control",placeholder:"รหัสผ่าน"},null,512),[[Bd,n.value]])]),O("button",{class:"w-100 btn btn-lg btn-primary",type:"submit",disabled:s.value},[O("div",f1,[s.value?(z(),ne("div",p1,m1)):It("",!0),s.value?(z(),ne("span",y1,"เข้าสู่ระบบ...")):(z(),ne("span",_1,"เข้าสู่ระบบ"))])],8,d1)],40,s1)])])])]))}},E1=Pu(v1,[["__scopeId","data-v-90aeb216"]]);Dm();const w1=[{path:"/",name:"Home",component:()=>Xr(()=>import("./Stock-c57217ca.js"),["assets/Stock-c57217ca.js","assets/index.esm2017-31610523.js","assets/Loader-bf1a129c.js","assets/Loader-41b03428.css","assets/jspdf.plugin.autotable-ea3ddaf5.js"])},{path:"stock",name:"Stock",component:()=>Xr(()=>import("./Stock-c57217ca.js"),["assets/Stock-c57217ca.js","assets/index.esm2017-31610523.js","assets/Loader-bf1a129c.js","assets/Loader-41b03428.css","assets/jspdf.plugin.autotable-ea3ddaf5.js"])},{path:"order",name:"Order",component:()=>Xr(()=>import("./Order-ad948bab.js"),["assets/Order-ad948bab.js","assets/index.esm2017-31610523.js"])},{path:"employee",name:"Employee",component:()=>Xr(()=>import("./Employee-638ba6d6.js"),["assets/Employee-638ba6d6.js","assets/jspdf.plugin.autotable-ea3ddaf5.js"])},{path:"report",name:"Report",component:()=>Xr(()=>import("./Report-07694930.js"),["assets/Report-07694930.js","assets/Loader-bf1a129c.js","assets/Loader-41b03428.css","assets/jspdf.plugin.autotable-ea3ddaf5.js"])},{path:"problem",name:"Problem",component:()=>Xr(()=>import("./Problem-a002826c.js"),[])}],vs=BI({history:sI("/"),mode:"history",routes:[{path:"/",name:"public",component:ZC,redirect:"/",children:w1,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:E1,meta:{requiresAuth:!1}}]});vs.beforeEach((t,e,n)=>{const r=t.matched.some(a=>a.meta.requiresAuth),s=localStorage.getItem("user"),i=s?JSON.parse(s):{},o=(i==null?void 0:i.isAuthentication)||!1;r&&!o?n("/login"):t.path==="/login"&&o?n("/"):n()});var I1=Object.defineProperty,T1=Object.defineProperties,A1=Object.getOwnPropertyDescriptors,Op=Object.getOwnPropertySymbols,b1=Object.prototype.hasOwnProperty,P1=Object.prototype.propertyIsEnumerable,Np=(t,e,n)=>e in t?I1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,dn=(t,e)=>{for(var n in e||(e={}))b1.call(e,n)&&Np(t,n,e[n]);if(Op)for(var n of Op(e))P1.call(e,n)&&Np(t,n,e[n]);return t},Wo=(t,e)=>T1(t,A1(e)),yr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const R1=t=>(dr("data-v-e0a0b7f0"),t=t(),fr(),t),S1=["onClick"],C1=["checked"],k1=R1(()=>O("label",{for:"checbox"},null,-1)),O1=wn({__name:"MultipleSelectCheckBox",props:{status:{type:String,required:!0}},emits:["change"],setup(t,{emit:e}){const n=t;Kr(o=>({"51ab8a49":b(i)}));const r=oe(()=>n.status==="allSelected"),s=()=>{e("change",!r.value)},i=Pt("themeColor");return(o,a)=>(z(),ne("div",{class:"easy-checkbox",onClick:Ts(s,["stop","prevent"])},[O("input",{type:"checkbox",checked:b(r),class:xe(t.status)},null,10,C1),k1],8,S1))}});var N1=yr(O1,[["__scopeId","data-v-e0a0b7f0"]]);const x1=t=>(dr("data-v-7e69a276"),t=t(),fr(),t),D1=["checked"],V1=x1(()=>O("label",{for:"checbox"},null,-1)),M1=wn({__name:"SingleSelectCheckBox",props:{checked:{type:Boolean,required:!0}},emits:["change"],setup(t,{emit:e}){Kr(r=>({fdaf7e9e:b(n)}));const n=Pt("themeColor");return(r,s)=>(z(),ne("div",{class:"easy-checkbox",onClick:s[0]||(s[0]=Ts(i=>e("change"),["stop","prevent"]))},[O("input",{type:"checkbox",checked:t.checked},null,8,D1),V1]))}});var L1=yr(M1,[["__scopeId","data-v-7e69a276"]]);const F1=t=>(dr("data-v-4ca5de3a"),t=t(),fr(),t),U1={class:"easy-data-table__rows-selector"},$1={class:"rows-input"},B1=F1(()=>O("div",{class:"triangle"},null,-1)),j1=["onClick"],q1=wn({__name:"RowsSelector",props:{modelValue:{type:Number,required:!0},rowsItems:{type:Array,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t;Kr(h=>({"1b889342":b(u)}));const r=Je(!1),s=Je(!1),i=Pt("dataTable");zt(r,h=>{if(h&&i){const d=window.innerHeight,f=i.value.getBoundingClientRect().height,y=i.value.getBoundingClientRect().top;d-(f+y)<=100?s.value=!0:s.value=!1}});const o=oe({get:()=>n.modelValue,set:h=>{e("update:modelValue",h)}}),a=h=>{o.value=h,r.value=!1},l=(h,d)=>{let f=h.parentNode;for(;f!=null;){if(f.classList&&f.classList.contains(d))return!0;f=f.parentNode}return!1},c=h=>{l(h.target,"easy-data-table__rows-selector")||(r.value=!1)};Us(()=>{document.addEventListener("click",c)}),gu(()=>{document.removeEventListener("click",c)});const u=Pt("themeColor");return(h,d)=>(z(),ne("div",U1,[O("div",{class:"rows-input__wrapper",onClick:d[0]||(d[0]=f=>r.value=!r.value)},[O("div",$1,ct(b(o)),1),B1]),O("ul",{class:xe(["select-items",{show:r.value,inside:s.value}])},[(z(!0),ne(Le,null,An(t.rowsItems,f=>(z(),ne("li",{key:f,class:xe({selected:f===b(o)}),onClick:y=>a(f)},ct(f),11,j1))),128))],2)]))}});var H1=yr(q1,[["__scopeId","data-v-4ca5de3a"]]);const Rl=t=>(dr("data-v-1fa3a520"),t=t(),fr(),t),z1={class:"lds-ring"},K1=Rl(()=>O("div",null,null,-1)),W1=Rl(()=>O("div",null,null,-1)),G1=Rl(()=>O("div",null,null,-1)),Q1=Rl(()=>O("div",null,null,-1)),J1=[K1,W1,G1,Q1],Y1=wn({__name:"Loading",setup(t){Kr(n=>({26774109:b(e)}));const e=Pt("themeColor");return(n,r)=>(z(),ne("div",z1,J1))}});var X1=yr(Y1,[["__scopeId","data-v-1fa3a520"]]);const Z1={class:"loader-line"},ek=wn({__name:"LoadingLine",setup(t){Kr(n=>({"0d327f57":b(e)}));const e=Pt("themeColor");return(n,r)=>(z(),ne("div",Z1))}});var tk=yr(ek,[["__scopeId","data-v-7d281cac"]]);const nk={class:"buttons-pagination"},rk=["onClick"],sk=wn({__name:"ButtonsPagination",props:{maxPaginationNumber:{type:Number,required:!0},currentPaginationNumber:{type:Number,required:!0}},emits:["updatePage"],setup(t,{emit:e}){const n=t;Kr(a=>({"40dd4f07":b(o)}));const r=7,s=a=>{a.type==="button"&&!a.active&&e("updatePage",a.page)},i=oe(()=>{const a=[];if(n.maxPaginationNumber<=r)for(let l=1;l<=n.maxPaginationNumber;l+=1)a.push({type:"button",page:l,active:l===n.currentPaginationNumber,activePrev:l+1===n.currentPaginationNumber});else if([1,2,n.maxPaginationNumber,n.maxPaginationNumber-1].includes(n.currentPaginationNumber))for(let l=1;l<=r;l+=1)if(l<=3)a.push({type:"button",page:l,active:l===n.currentPaginationNumber,activePrev:l+1===n.currentPaginationNumber});else if(l===4)a.push({type:"omission"});else{const c=n.maxPaginationNumber-(r-l);a.push({type:"button",page:c,active:c===n.currentPaginationNumber,activePrev:c+1===n.currentPaginationNumber})}else if([3,4].includes(n.currentPaginationNumber))for(let l=1;l<=r;l+=1)l<=5?a.push({type:"button",page:l,active:l===n.currentPaginationNumber,activePrev:l+1===n.currentPaginationNumber}):l===6?a.push({type:"omission"}):a.push({type:"button",page:n.maxPaginationNumber,active:n.maxPaginationNumber===n.currentPaginationNumber,activePrev:l+1===n.currentPaginationNumber});else if([n.maxPaginationNumber-2,n.maxPaginationNumber-3].includes(n.currentPaginationNumber))for(let l=1;l<=r;l+=1)if(l===1)a.push({type:"button",page:1,active:n.currentPaginationNumber===1,activePrev:l+1===n.currentPaginationNumber});else if(l===2)a.push({type:"omission"});else{const c=n.maxPaginationNumber-(r-l);a.push({type:"button",page:c,active:c===n.currentPaginationNumber,activePrev:c+1===n.currentPaginationNumber})}else for(let l=1;l<=r;l+=1)if(l===1)a.push({type:"button",page:1,active:n.currentPaginationNumber===1,activePrev:l+1===n.currentPaginationNumber});else if(l===2||l===6)a.push({type:"omission"});else if(l===7)a.push({type:"button",page:n.maxPaginationNumber,active:n.maxPaginationNumber===n.currentPaginationNumber,activePrev:l+1===n.currentPaginationNumber});else{const c=4-l,u=n.currentPaginationNumber-c;a.push({type:"button",page:u,active:u===n.currentPaginationNumber,activePrev:u+1===n.currentPaginationNumber})}return a}),o=Pt("themeColor");return(a,l)=>(z(),ne("div",nk,[(z(!0),ne(Le,null,An(b(i),(c,u)=>(z(),ne("div",{key:u,class:xe(["item",{button:c.type==="button",active:c.type==="button"&&c.active,"active-prev":c.type==="button"&&c.activePrev,omission:c.type==="omission"}]),onClick:h=>s(c)},ct(c.type==="button"?c.page:"..."),11,rk))),128))]))}});var ik=yr(sk,[["__scopeId","data-v-4c681fa2"]]);const tv=t=>(dr("data-v-c9da5286"),t=t(),fr(),t),ok=tv(()=>O("span",{class:"arrow arrow-right"},null,-1)),ak=[ok],lk=tv(()=>O("span",{class:"arrow arrow-left"},null,-1)),ck=[lk],uk=wn({__name:"PaginationArrows",props:{isFirstPage:{type:Boolean,required:!1},isLastPage:{type:Boolean,required:!1}},emits:["clickPrevPage","clickNextPage"],setup(t,{emit:e}){const n=vg();return(r,s)=>(z(),ne(Le,null,[O("div",{class:xe(["previous-page__click-button",{"first-page":t.isFirstPage}]),onClick:s[0]||(s[0]=i=>e("clickPrevPage"))},ak,2),b(n).buttonsPagination?Ne(r.$slots,"buttonsPagination",{key:0},void 0,!0):It("",!0),O("div",{class:xe(["next-page__click-button",{"last-page":t.isLastPage}]),onClick:s[1]||(s[1]=i=>e("clickNextPage"))},ck,2)],64))}});var hk=yr(uk,[["__scopeId","data-v-c9da5286"]]);function dk(t,e,n,r){return{clickRow:(i,o,a)=>{if(t.value!==o)return;const l=dn({},i);if(e.value){const{checkbox:c}=i;delete l.checkbox,l.isSelected=c}if(n.value){const{index:c}=i;delete l.index,l.indexInCurrentPage=c}r("clickRow",l,a)}}}function fk(t,e,n){const r=Je([]);return{expandingItemIndexList:r,updateExpandingItemIndexList:(o,a,l)=>{l.stopPropagation();const c=r.value.indexOf(o);if(c!==-1)r.value.splice(c,1);else{const u=t.value.findIndex(h=>JSON.stringify(h)===JSON.stringify(a));n("expandRow",e.value+u,a),r.value.push(e.value+u)}},clearExpandingItemIndexList:()=>{r.value=[]}}}function pk(t){const e=oe(()=>t.value.filter(s=>s.fixed)),n=oe(()=>e.value.length?e.value[e.value.length-1].value:""),r=oe(()=>{if(!e.value.length)return[];const s=e.value.map(i=>{var o;return(o=i.width)!=null?o:100});return e.value.map((i,o)=>{var a,l;return{value:i.value,fixed:(a=i.fixed)!=null?a:!0,width:(l=i.width)!=null?l:100,distance:o===0?0:s.reduce((c,u,h)=>{let d=c;return h<o&&(d+=u),d})}})});return{fixedHeaders:e,lastFixedColumn:n,fixedColumnsInfos:r}}function gk(t,e,n,r,s,i,o,a,l,c,u,h,d,f,y,_,v,R,N){const A=oe(()=>o.value.findIndex(q=>q.fixed)!==-1),k=oe(()=>A.value?o.value.filter(q=>q.fixed):[]),Q=oe(()=>o.value.filter(q=>!q.fixed)),F=Je(((q,$e)=>Array.isArray(q)&&Array.isArray($e)?{sortBy:q,sortDesc:$e.map(Ce=>Ce==="desc")}:q!==""?{sortBy:y.value,sortDesc:_.value==="desc"}:null)(y.value,_.value)),H=oe(()=>{var q;const Ce=[...k.value,...Q.value].map(_t=>{const Be=Object.assign(_t);if(Be.sortable&&(Be.sortType="none"),d.value)if(Array.isArray(d.value.sortBy)&&Array.isArray(d.value.sortType)&&d.value.sortBy.includes(Be.value)){const yt=d.value.sortBy.indexOf(Be.value);Be.sortType=d.value.sortType[yt]}else Be.value===d.value.sortBy&&d.value.sortType&&(Be.sortType=d.value.sortType);if(F.value&&Array.isArray(F.value.sortBy)&&Array.isArray(F.value.sortDesc)&&F.value.sortBy.includes(Be.value)){const yt=F.value.sortBy.indexOf(Be.value);Be.sortType=F.value.sortDesc[yt]?"desc":"asc"}else F.value&&Be.value===F.value.sortBy&&(Be.sortType=F.value.sortDesc?"desc":"asc");return Be});let _e=[];a.value?_e=[s.value||A.value?{text:"",value:"expand",fixed:!0,width:n.value}:{text:"",value:"expand"},...Ce]:_e=Ce;let ve=[];f.value?ve=[i.value||A.value?{text:t.value,value:"index",fixed:!0,width:l.value}:{text:t.value,value:"index"},..._e]:ve=_e;let ge=[];return c.value?ge=[r.value||A.value?{text:"checkbox",value:"checkbox",fixed:!0,width:(q=e.value)!=null?q:36}:{text:"checkbox",value:"checkbox"},...ve]:ge=ve,ge}),ie=oe(()=>H.value.map(q=>q.value));return{clientSortOptions:F,headerColumns:ie,headersForRender:H,updateSortField:(q,$e)=>{let Ce=null;if($e==="none"?Ce="asc":$e==="asc"?Ce="desc":Ce=h.value?"asc":null,u.value&&R(q,Ce),F.value&&Array.isArray(F.value.sortBy)&&Array.isArray(F.value.sortDesc)){const _e=F.value.sortBy.indexOf(q);_e===-1?Ce!==null&&(F.value.sortBy.push(q),F.value.sortDesc.push(Ce==="desc")):Ce===null?(F.value.sortDesc.splice(_e,1),F.value.sortBy.splice(_e,1)):F.value.sortDesc[_e]=Ce==="desc"}else Ce===null?F.value=null:F.value={sortBy:q,sortDesc:Ce==="desc"};N("updateSort",{sortType:Ce,sortBy:q})},isMultiSorting:q=>d.value&&Array.isArray(d.value.sortBy)?d.value.sortBy.includes(q):F.value&&Array.isArray(F.value.sortBy)?F.value.sortBy.includes(q):!1,getMultiSortNumber:q=>d.value&&Array.isArray(d.value.sortBy)?d.value.sortBy.indexOf(q)+1:F.value&&Array.isArray(F.value.sortBy)?F.value.sortBy.indexOf(q)+1:!1}}function mk(t,e,n,r,s,i,o,a,l){const c=oe(()=>(t.value-1)*s.value+1),u=oe(()=>n.value?Math.min(l.value,t.value*s.value):Math.min(a.value.length,t.value*s.value)),h=oe(()=>n.value?r.value:a.value.slice(c.value-1,u.value)),d=oe(()=>o.value?h.value.map((_,v)=>dn({index:c.value+v},_)):h.value),f=oe(()=>i.value.length===0||i.value.every(v=>a.value.findIndex(R=>JSON.stringify(v)===JSON.stringify(R))===-1)?"noneSelected":i.value.length===a.value.length&&i.value.every(R=>a.value.findIndex(N=>JSON.stringify(R)===JSON.stringify(N))!==-1)?"allSelected":"partSelected"),y=oe(()=>e.value?f.value==="allSelected"?d.value.map(_=>dn({checkbox:!0},_)):f.value==="noneSelected"?d.value.map(_=>dn({checkbox:!1},_)):d.value.map(_=>{const v=i.value.findIndex(R=>{const N=dn({},_);return delete N.index,JSON.stringify(R)===JSON.stringify(N)})!==-1;return dn({checkbox:v},_)}):d.value);return{currentPageFirstIndex:c,currentPageLastIndex:u,multipleSelectStatus:f,pageItems:y}}function _k(t,e,n,r,s,i,o){const a=Je(i.value?i.value.page:t.value),l=oe(()=>Math.ceil(r.value/s.value)),c=oe(()=>l.value===0||a.value===l.value),u=oe(()=>a.value===1);return{currentPaginationNumber:a,maxPaginationNumber:l,isLastPage:c,isFirstPage:u,nextPage:()=>{if(r.value!==0&&!c.value&&!n.value)if(e.value){const _=a.value+1;o(_)}else a.value+=1},prevPage:()=>{if(r.value!==0&&!u.value&&!n.value)if(e.value){const _=a.value-1;o(_)}else a.value-=1},updatePage:_=>{n.value||(e.value?o(_):a.value=_)},updateCurrentPaginationNumber:_=>{a.value=_}}}function yk(t,e,n,r){const s=oe(()=>!t.value&&e.value.findIndex(a=>a===r.value)===-1?[r.value,...e.value]:e.value),i=Je(n.value?n.value.rowsPerPage:r.value);return{rowsItemsComputed:s,rowsPerPageRef:i,updateRowsPerPage:a=>{i.value=a}}}function vk(t,e,n){const r=oe({get:()=>{if(t.value){const{page:a,rowsPerPage:l,sortBy:c,sortType:u}=t.value;return{page:a,rowsPerPage:l,sortBy:c??null,sortType:u??null}}return null},set:a=>{n("update:serverOptions",a)}});return{serverOptionsComputed:r,updateServerOptionsPage:a=>{r.value&&(r.value=Wo(dn({},r.value),{page:a}))},updateServerOptionsSort:(a,l)=>{if(r.value)if(e.value&&Array.isArray(r.value.sortBy)&&Array.isArray(r.value.sortType)){const c=r.value.sortBy.findIndex(u=>u===a);c===-1&&l!==null&&(r.value.sortBy.push(a),r.value.sortType.push(l)),l===null?(r.value.sortBy.splice(c,1),r.value.sortType.splice(c,1)):r.value.sortType[c]=l}else r.value=Wo(dn({},r.value),{sortBy:l!==null?a:null,sortType:l})},updateServerOptionsRowsPerPage:a=>{r.value&&(r.value=Wo(dn({},r.value),{page:1,rowsPerPage:a}))}}}function Nt(t,e){var n;if(t.includes(".")){const r=t.split("."),{length:s}=r;let i,o=0;for(;o<s;){if(o===0)i=e[r[0]];else if(i&&typeof i=="object")i=i[r[o]];else{i="";break}o+=1}return i??""}return(n=e[t])!=null?n:""}function Ek(t,e){const n=Nt(t,e);return Array.isArray(n)?n.join(","):n}function wk(t,e,n,r,s,i,o,a,l,c){const u=A=>{if(typeof i.value=="string"&&i.value!=="")return Nt(i.value,A);if(Array.isArray(i.value)){let k="";return i.value.forEach(Q=>{k+=Nt(Q,A)}),k}return Object.values(A).join(" ")},h=oe(()=>{if(!n.value&&o.value!==""){const A=new RegExp(o.value,"i");return r.value.filter(k=>A.test(u(k)))}return r.value}),d=oe(()=>{let A=[...h.value];return e.value?(e.value.forEach(k=>{A=A.filter(Q=>{const{field:se,comparison:F,criteria:H}=k;if(typeof F=="function")return F(Nt(se,Q),H);const ie=Nt(se,Q);switch(F){case"=":return ie===H;case"!=":return ie!==H;case">":return ie>H;case"<":return ie<H;case"<=":return ie<=H;case">=":return ie>=H;case"between":return ie>=Math.min(...H)&&ie<=Math.max(...H);case"in":return H.includes(ie);default:return ie===H}})}),A):h.value});zt(d,A=>{e.value&&c("updateFilter",A)},{immediate:!0,deep:!0});function f(A,k,Q,se){const F=A[se],H=k[se];return(se===0?Q:f(A,k,Q,se-1)).sort((he,Oe)=>{let j=!0;for(let q=0;q<se;q+=1)if(Nt(A[q],he)!==Nt(A[q],Oe)){j=!1;break}return j?Nt(F,he)<Nt(F,Oe)?H?1:-1:Nt(F,he)>Nt(F,Oe)?H?-1:1:0:0})}const y=oe(()=>{if(n.value)return r.value;if(t.value===null)return d.value;const{sortBy:A,sortDesc:k}=t.value,Q=[...d.value];return l&&Array.isArray(A)&&Array.isArray(k)?A.length===0?Q:f(A,k,Q,A.length-1):Q.sort((se,F)=>Nt(A,se)<Nt(A,F)?k?1:-1:Nt(A,se)>Nt(A,F)?k?-1:1:0)}),_=oe(()=>n.value?a.value:y.value.length),v=oe({get:()=>{var A;return(A=s.value)!=null?A:[]},set:A=>{c("update:itemsSelected",A)}});return{totalItems:y,selectItemsComputed:v,totalItemsLength:_,toggleSelectAll:A=>{v.value=A?y.value:[],A&&c("selectAll")},toggleSelectItem:A=>{const k=A.checkbox;if(delete A.checkbox,delete A.index,k)v.value=v.value.filter(Q=>JSON.stringify(Q)!==JSON.stringify(A)),c("deselectRow",A);else{const Q=v.value;Q.unshift(A),v.value=Q,c("selectRow",A)}}}}var Ik={alternating:{type:Boolean,default:!1},buttonsPagination:{type:Boolean,default:!1},checkboxColumnWidth:{type:Number,default:null},currentPage:{type:Number,default:1},emptyMessage:{type:String,default:"No Available Data"},expandColumnWidth:{type:Number,default:36},filterOptions:{type:Array,default:null},fixedExpand:{type:Boolean,default:!1},fixedHeader:{type:Boolean,default:!0},fixedCheckbox:{type:Boolean,default:!1},fixedIndex:{type:Boolean,default:!1},headerTextDirection:{type:String,default:"left"},bodyTextDirection:{type:String,default:"left"},hideFooter:{type:Boolean,default:!1},hideRowsPerPage:{type:Boolean,default:!1},hideHeader:{type:Boolean,default:!1},indexColumnWidth:{type:Number,default:60},itemsSelected:{type:Array,default:null},loading:{type:Boolean,default:!1},rowsPerPage:{type:Number,default:25},rowsItems:{type:Array,default:()=>[25,50,100]},rowsPerPageMessage:{type:String,default:"rows per page:"},searchField:{type:[String,Array],default:""},searchValue:{type:String,default:""},serverOptions:{type:Object,default:null},serverItemsLength:{type:Number,default:0},showIndex:{type:Boolean,default:!1},sortBy:{type:[String,Array],default:""},sortType:{type:[String,Array],default:"asc"},multiSort:{type:Boolean,default:!1},tableMinHeight:{type:Number,default:180},tableHeight:{type:Number,default:null},themeColor:{type:String,default:"#42b883"},tableClassName:{type:String,default:""},headerClassName:{type:String,default:""},headerItemClassName:{type:[Function,String],default:""},bodyRowClassName:{type:[Function,String],default:""},bodyExpandRowClassName:{type:[Function,String],default:""},bodyItemClassName:{type:[Function,String],default:""},noHover:{type:Boolean,default:!1},borderCell:{type:Boolean,default:!1},mustSort:{type:Boolean,default:!1},rowsOfPageSeparatorMessage:{type:String,default:"of"},clickEventType:{type:String,default:"single"},clickRowToExpand:{type:Boolean,default:!1},tableNodeId:{type:String,default:""},showIndexSymbol:{type:String,default:"#"},preventContextMenuRow:{type:Boolean,default:!0}};const Tk=t=>(dr("data-v-32683533"),t=t(),fr(),t),Ak=["id"],bk=["onClick"],Pk={key:3,class:"header-text"},Rk={key:5,class:"multi-sort__number"},Sk=["onClick","onDblclick","onContextmenu"],Ck=["onClick"],kk=["colspan"],Ok={key:0,class:"vue3-easy-data-table__loading"},Nk=Tk(()=>O("div",{class:"vue3-easy-data-table__loading-mask"},null,-1)),xk={class:"loading-entity"},Dk={key:1,class:"vue3-easy-data-table__message"},Vk={key:0,class:"vue3-easy-data-table__footer"},Mk={key:0,class:"pagination__rows-per-page"},Lk={class:"pagination__items-index"},Fk=wn({__name:"DataTable",props:Wo(dn({},Ik),{items:{type:Array,required:!0},headers:{type:Array,required:!0}}),emits:["clickRow","contextmenuRow","selectRow","deselectRow","expandRow","updateSort","updateFilter","update:itemsSelected","update:serverOptions","updatePageItems","updateTotalItems","selectAll"],setup(t,{expose:e,emit:n}){const r=t;Kr(te=>({da0d4328:b(Ln),"3037e504":b(vt)}));const{tableNodeId:s,clickEventType:i,bodyTextDirection:o,checkboxColumnWidth:a,currentPage:l,expandColumnWidth:c,filterOptions:u,fixedCheckbox:h,fixedExpand:d,fixedHeader:f,fixedIndex:y,headers:_,headerTextDirection:v,indexColumnWidth:R,items:N,itemsSelected:A,loading:k,mustSort:Q,multiSort:se,rowsItems:F,rowsPerPage:H,searchField:ie,searchValue:he,serverItemsLength:Oe,serverOptions:j,showIndex:q,sortBy:$e,sortType:Ce,tableHeight:_e,tableMinHeight:ve,themeColor:ge,rowsOfPageSeparatorMessage:_t,showIndexSymbol:Be,preventContextMenuRow:yt}=Jv(r),vt=oe(()=>_e.value?`${_e.value}px`:null),Ln=oe(()=>`${ve.value}px`);ds("themeColor",ge.value);const tt=vg(),Jr=oe(()=>!!tt.pagination),nt=oe(()=>!!tt.loading),w=oe(()=>!!tt.expand),U=oe(()=>!!tt.body),V=Je(),G=Je();ds("dataTable",V);const we=Je(!1);Us(()=>{G.value.addEventListener("scroll",()=>{we.value=G.value.scrollLeft>0})});const p=oe(()=>A.value!==null),g=oe(()=>j.value!==null),{serverOptionsComputed:m,updateServerOptionsPage:E,updateServerOptionsSort:T,updateServerOptionsRowsPerPage:P}=vk(j,se,n),{clientSortOptions:L,headerColumns:x,headersForRender:D,updateSortField:C,isMultiSorting:X,getMultiSortNumber:K}=gk(Be,a,c,h,d,y,_,w,R,p,g,Q,m,q,$e,Ce,se,T,n),{rowsItemsComputed:J,rowsPerPageRef:re,updateRowsPerPage:pe}=yk(g,F,j,H),{totalItems:Pe,selectItemsComputed:be,totalItemsLength:Ve,toggleSelectAll:Ut,toggleSelectItem:Fn}=wk(L,u,g,N,A,ie,he,Oe,se,n),{currentPaginationNumber:jt,maxPaginationNumber:Jt,isLastPage:Un,isFirstPage:Xe,nextPage:Et,prevPage:$n,updatePage:Qs,updateCurrentPaginationNumber:rv}=_k(l,g,k,Ve,re,j,E),{currentPageFirstIndex:zh,currentPageLastIndex:Kh,multipleSelectStatus:Wh,pageItems:vr}=mk(jt,p,g,N,re,be,q,Pe,Ve),Js=oe(()=>jt.value===0?0:(jt.value-1)*re.value),{expandingItemIndexList:Gh,updateExpandingItemIndexList:Qh,clearExpandingItemIndexList:Jh}=fk(vr,Js,n),{fixedHeaders:Sl,lastFixedColumn:Yh,fixedColumnsInfos:sv}=pk(D),{clickRow:Xh}=dk(i,p,q,n),iv=(te,qt)=>{yt.value&&qt.preventDefault(),n("contextmenuRow",te,qt)},ov=te=>{var qt;const Y=(qt=te.width)!=null?qt:Sl.value.length?100:null;if(Y)return`width: ${Y}px; min-width: ${Y}px;`},Zh=(te,qt="th")=>{if(!Sl.value.length)return;const Y=sv.value.find(lt=>lt.value===te);if(Y)return`left: ${Y.distance}px;z-index: ${qt==="th"?3:1};position: sticky;`};return zt(k,(te,qt)=>{m.value&&te===!1&&qt===!0&&(rv(m.value.page),Jh())}),zt(re,te=>{g.value?P(te):Qs(1)}),zt([he,u],()=>{g.value||Qs(1)}),zt([jt,L,ie,he,u],()=>{Jh()},{deep:!0}),zt(vr,te=>{n("updatePageItems",te)},{deep:!0}),zt(Pe,te=>{n("updateTotalItems",te)},{deep:!0}),e({currentPageFirstIndex:zh,currentPageLastIndex:Kh,clientItemsLength:Ve,maxPaginationNumber:Jt,currentPaginationNumber:jt,isLastPage:Un,isFirstPage:Xe,nextPage:Et,prevPage:$n,updatePage:Qs,rowsPerPageOptions:J,rowsPerPageActiveOption:re,updateRowsPerPageActiveOption:pe}),(te,qt)=>(z(),ne("div",{ref_key:"dataTable",ref:V,class:xe(["vue3-easy-data-table",[te.tableClassName]])},[O("div",{ref_key:"tableBody",ref:G,class:xe(["vue3-easy-data-table__main",{"fixed-header":b(f),"fixed-height":b(_e),"show-shadow":we.value,"table-fixed":b(Sl).length,hoverable:!te.noHover,"border-cell":te.borderCell}])},[O("table",{id:b(s)},[O("colgroup",null,[(z(!0),ne(Le,null,An(b(D),(Y,lt)=>(z(),ne("col",{key:lt,style:xr(ov(Y))},null,4))),128))]),b(tt)["customize-headers"]?Ne(te.$slots,"customize-headers",{key:0},void 0,!0):b(D).length&&!te.hideHeader?(z(),ne("thead",{key:1,class:xe(["vue3-easy-data-table__header",[te.headerClassName]])},[O("tr",null,[(z(!0),ne(Le,null,An(b(D),(Y,lt)=>(z(),ne("th",{key:lt,class:xe([{sortable:Y.sortable,none:Y.sortable&&Y.sortType==="none",desc:Y.sortable&&Y.sortType==="desc",asc:Y.sortable&&Y.sortType==="asc",shadow:Y.value===b(Yh)},typeof te.headerItemClassName=="string"?te.headerItemClassName:te.headerItemClassName(Y,lt+1)]),style:xr(Zh(Y.value)),onClick:Ts(qe=>Y.sortable&&Y.sortType?b(C)(Y.value,Y.sortType):null,["stop"])},[Y.text==="checkbox"?(z(),en(N1,{key:b(Wh),status:b(Wh),onChange:b(Ut)},null,8,["status","onChange"])):(z(),ne("span",{key:1,class:xe(["header",`direction-${b(v)}`])},[b(tt)[`header-${Y.value}`]?Ne(te.$slots,`header-${Y.value}`,He(Xt({key:0},Y)),void 0,!0):b(tt)[`header-${Y.value.toLowerCase()}`]?Ne(te.$slots,`header-${Y.value.toLowerCase()}`,He(Xt({key:1},Y)),void 0,!0):b(tt).header?Ne(te.$slots,"header",He(Xt({key:2},Y)),void 0,!0):(z(),ne("span",Pk,ct(Y.text),1)),Y.sortable?(z(),ne("i",{key:Y.sortType?Y.sortType:"none",class:xe(["sortType-icon",{desc:Y.sortType==="desc"}])},null,2)):It("",!0),b(se)&&b(X)(Y.value)?(z(),ne("span",Rk,ct(b(K)(Y.value)),1)):It("",!0)],2))],14,bk))),128))])],2)):It("",!0),b(U)?Ne(te.$slots,"body",He(Xt({key:2},b(vr))),void 0,!0):b(x).length?(z(),ne("tbody",{key:3,class:xe(["vue3-easy-data-table__body",{"row-alternation":te.alternating}])},[Ne(te.$slots,"body-prepend",He(Mt({items:b(vr),pagination:{isFirstPage:b(Xe),isLastPage:b(Un),currentPaginationNumber:b(jt),maxPaginationNumber:b(Jt),nextPage:b(Et),prevPage:b($n)},headers:b(D)})),void 0,!0),(z(!0),ne(Le,null,An(b(vr),(Y,lt)=>(z(),ne(Le,{key:lt},[O("tr",{class:xe([{"even-row":(lt+1)%2===0},typeof te.bodyRowClassName=="string"?te.bodyRowClassName:te.bodyRowClassName(Y,lt+1)]),onClick:qe=>{b(Xh)(Y,"single",qe),te.clickRowToExpand&&b(Qh)(lt+b(Js),Y,qe)},onDblclick:qe=>{b(Xh)(Y,"double",qe)},onContextmenu:qe=>{iv(Y,qe)}},[(z(!0),ne(Le,null,An(b(x),(qe,av)=>(z(),ne("td",{key:av,style:xr(Zh(qe,"td")),class:xe([{shadow:qe===b(Yh),"can-expand":qe==="expand"},typeof te.bodyItemClassName=="string"?te.bodyItemClassName:te.bodyItemClassName(qe,lt+1),`direction-${b(o)}`]),onClick:ed=>qe==="expand"?b(Qh)(lt+b(Js),Y,ed):null},[b(tt)[`item-${qe}`]?Ne(te.$slots,`item-${qe}`,He(Xt({key:0},Y)),void 0,!0):b(tt)[`item-${qe.toLowerCase()}`]?Ne(te.$slots,`item-${qe.toLowerCase()}`,He(Xt({key:1},Y)),void 0,!0):qe==="expand"?(z(),ne("i",{key:2,class:xe(["expand-icon",{expanding:b(Gh).includes(b(Js)+lt)}])},null,2)):qe==="checkbox"?(z(),en(L1,{key:3,checked:Y[qe],onChange:ed=>b(Fn)(Y)},null,8,["checked","onChange"])):b(tt).item?Ne(te.$slots,"item",He(Xt({key:4},{column:qe,item:Y})),void 0,!0):(z(),ne(Le,{key:5},[Vr(ct(b(Ek)(qe,Y)),1)],64))],14,Ck))),128))],42,Sk),b(w)&&b(Gh).includes(lt+b(Js))?(z(),ne("tr",{key:0,class:xe([{"even-row":(lt+1)%2===0},typeof te.bodyExpandRowClassName=="string"?te.bodyExpandRowClassName:te.bodyExpandRowClassName(Y,lt+1)])},[O("td",{colspan:b(D).length,class:"expand"},[Y.expandLoading?(z(),en(tk,{key:0,class:"expand-loading"})):It("",!0),Ne(te.$slots,"expand",He(Mt(Y)),void 0,!0)],8,kk)],2)):It("",!0)],64))),128)),Ne(te.$slots,"body-append",He(Mt({items:b(vr),pagination:{isFirstPage:b(Xe),isLastPage:b(Un),currentPaginationNumber:b(jt),maxPaginationNumber:b(Jt),nextPage:b(Et),prevPage:b($n),updatePage:b(Qs)},headers:b(D)})),void 0,!0)],2)):It("",!0)],8,Ak),b(k)?(z(),ne("div",Ok,[Nk,O("div",xk,[b(nt)?Ne(te.$slots,"loading",{key:0},void 0,!0):(z(),en(X1,{key:1}))])])):It("",!0),!b(vr).length&&!b(k)?(z(),ne("div",Dk,[Ne(te.$slots,"empty-message",{},()=>[Vr(ct(te.emptyMessage),1)],!0)])):It("",!0)],2),te.hideFooter?It("",!0):(z(),ne("div",Vk,[te.hideRowsPerPage?It("",!0):(z(),ne("div",Mk,[Vr(ct(te.rowsPerPageMessage)+" ",1),ze(H1,{modelValue:b(re),"onUpdate:modelValue":qt[0]||(qt[0]=Y=>it(re)?re.value=Y:null),"rows-items":b(J)},null,8,["modelValue","rows-items"])])),O("div",Lk,ct(`${b(zh)}–${b(Kh)}`)+" "+ct(b(_t))+" "+ct(b(Ve)),1),b(Jr)?Ne(te.$slots,"pagination",He(Xt({key:1},{isFirstPage:b(Xe),isLastPage:b(Un),currentPaginationNumber:b(jt),maxPaginationNumber:b(Jt),nextPage:b(Et),prevPage:b($n)})),void 0,!0):(z(),en(hk,{key:2,"is-first-page":b(Xe),"is-last-page":b(Un),onClickNextPage:b(Et),onClickPrevPage:b($n)},kE({_:2},[te.buttonsPagination?{name:"buttonsPagination",fn:hs(()=>[ze(ik,{"current-pagination-number":b(jt),"max-pagination-number":b(Jt),onUpdatePage:b(Qs)},null,8,["current-pagination-number","max-pagination-number","onUpdatePage"])]),key:"0"}:void 0]),1032,["is-first-page","is-last-page","onClickNextPage","onClickPrevPage"]))]))],2))}});var nv=yr(Fk,[["__scopeId","data-v-32683533"]]);typeof window<"u"&&window.Vue&&window.Vue.createApp({}).component("Vue3EasyDataTable",nv);var Uk=Object.defineProperty,$k=Object.defineProperties,Bk=Object.getOwnPropertyDescriptors,xp=Object.getOwnPropertySymbols,jk=Object.prototype.hasOwnProperty,qk=Object.prototype.propertyIsEnumerable,Dp=(t,e,n)=>e in t?Uk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,es=(t,e)=>{for(var n in e||(e={}))jk.call(e,n)&&Dp(t,n,e[n]);if(xp)for(var n of xp(e))qk.call(e,n)&&Dp(t,n,e[n]);return t},Vp=(t,e)=>$k(t,Bk(e));const Hk={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(t){this.autoscroll&&t&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var t;const e=((t=this.$refs.dropdownMenu)==null?void 0:t.children[this.typeAheadPointer])||!1;if(e){const n=this.getDropdownViewport(),{top:r,bottom:s,height:i}=e.getBoundingClientRect();if(r<n.top)return this.$refs.dropdownMenu.scrollTop=e.offsetTop;if(s>n.bottom)return this.$refs.dropdownMenu.scrollTop=e.offsetTop-(n.height-i)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},zk={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let t=0;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},open(t){t&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let t=this.typeAheadPointer-1;t>=0;t--)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadDown(){for(let t=this.typeAheadPointer+1;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadSelect(){const t=this.filteredOptions[this.typeAheadPointer];t&&this.selectable(t)&&this.select(t)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},Kk={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(t){this.mutableLoading=t}},methods:{toggleLoading(t=null){return t==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=t}}},Hh=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Wk={},Gk={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},Qk=O("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),Jk=[Qk];function Yk(t,e){return z(),ne("svg",Gk,Jk)}const Xk=Hh(Wk,[["render",Yk]]),Zk={},eO={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},tO=O("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),nO=[tO];function rO(t,e){return z(),ne("svg",eO,nO)}const sO=Hh(Zk,[["render",rO]]),Mp={Deselect:Xk,OpenIndicator:sO},iO={mounted(t,{instance:e}){if(e.appendToBody){const{height:n,top:r,left:s,width:i}=e.$refs.toggle.getBoundingClientRect();let o=window.scrollX||window.pageXOffset,a=window.scrollY||window.pageYOffset;t.unbindPosition=e.calculatePosition(t,e,{width:i+"px",left:o+s+"px",top:a+r+n+"px"}),document.body.appendChild(t)}},unmounted(t,{instance:e}){e.appendToBody&&(t.unbindPosition&&typeof t.unbindPosition=="function"&&t.unbindPosition(),t.parentNode&&t.parentNode.removeChild(t))}};function oO(t){const e={};return Object.keys(t).sort().forEach(n=>{e[n]=t[n]}),JSON.stringify(e)}let aO=0;function lO(){return++aO}const cO={components:es({},Mp),directives:{appendToBody:iO},mixins:[Hk,zk,Kk],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:t=>t},selectable:{type:Function,default:t=>!0},getOptionLabel:{type:Function,default(t){return typeof t=="object"?t.hasOwnProperty(this.label)?t[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(t)}.
https://vue-select.org/api/props.html#getoptionlabel`):t}},getOptionKey:{type:Function,default(t){if(typeof t!="object")return t;try{return t.hasOwnProperty("id")?t.id:oO(t)}catch(e){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,t,e)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(t,e,n){return(e||"").toLocaleLowerCase().indexOf(n.toLocaleLowerCase())>-1}},filter:{type:Function,default(t,e){return t.filter(n=>{let r=this.getOptionLabel(n);return typeof r=="number"&&(r=r.toString()),this.filterBy(n,r,e)})}},createOption:{type:Function,default(t){return typeof this.optionList[0]=="object"?{[this.label]:t}:t}},resetOnOptionsChange:{default:!1,validator:t=>["function","boolean"].includes(typeof t)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:t,multiple:e}){return t&&!e}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(t,e)=>t},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(t,e,{width:n,top:r,left:s}){t.style.top=r,t.style.left=s,t.style.width=n}},dropdownShouldOpen:{type:Function,default({noDrop:t,open:e,mutableLoading:n}){return t?!1:e&&!n}},uid:{type:[String,Number],default:()=>lO()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let t=this.modelValue;return this.isTrackingValues&&(t=this.$data._value),t!=null&&t!==""?[].concat(t):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const t={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:es({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:e=>this.search=e.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:t,listFooter:t,header:Vp(es({},t),{deselect:this.deselect}),footer:Vp(es({},t),{deselect:this.deselect})}},childComponents(){return es(es({},Mp),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const t=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return t;const e=this.search.length?this.filter(t,this.search,this):t;if(this.taggable&&this.search.length){const n=this.createOption(this.search);this.optionExists(n)||e.unshift(n)}return e},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(t,e){const n=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(t,e,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&n()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(t){this.isTrackingValues&&this.setInternalValueFromOptions(t)}},multiple(){this.clearSelection()},open(t){this.$emit(t?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(t){Array.isArray(t)?this.$data._value=t.map(e=>this.findOptionFromReducedValue(e)):this.$data._value=this.findOptionFromReducedValue(t)},select(t){this.$emit("option:selecting",t),this.isOptionSelected(t)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(t):(this.taggable&&!this.optionExists(t)&&(this.$emit("option:created",t),this.pushTag(t)),this.multiple&&(t=this.selectedValue.concat(t)),this.updateValue(t),this.$emit("option:selected",t)),this.onAfterSelect(t)},deselect(t){this.$emit("option:deselecting",t),this.updateValue(this.selectedValue.filter(e=>!this.optionComparator(e,t))),this.$emit("option:deselected",t)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(t){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(t){typeof this.modelValue>"u"&&(this.$data._value=t),t!==null&&(Array.isArray(t)?t=t.map(e=>this.reduce(e)):t=this.reduce(t)),this.$emit("update:modelValue",t)},toggleDropdown(t){const e=t.target!==this.searchEl;e&&t.preventDefault();const n=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||n.filter(Boolean).some(r=>r.contains(t.target)||r===t.target)){t.preventDefault();return}this.open&&e?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(t){return this.selectedValue.some(e=>this.optionComparator(e,t))},isOptionDeselectable(t){return this.isOptionSelected(t)&&this.deselectFromDropdown},optionComparator(t,e){return this.getOptionKey(t)===this.getOptionKey(e)},findOptionFromReducedValue(t){const e=r=>JSON.stringify(this.reduce(r))===JSON.stringify(t),n=[...this.options,...this.pushedTags].filter(e);return n.length===1?n[0]:n.find(r=>this.optionComparator(r,this.$data._value))||t},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let t=null;this.multiple&&(t=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(t)}},optionExists(t){return this.optionList.some(e=>this.optionComparator(e,t))},normalizeOptionForSlot(t){return typeof t=="object"?t:{[this.label]:t}},pushTag(t){this.pushedTags.push(t)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:t,multiple:e}=this;this.clearSearchOnBlur({clearSearchOnSelect:t,multiple:e})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(t){const e=s=>(s.preventDefault(),!this.isComposing&&this.typeAheadSelect()),n={8:s=>this.maybeDeleteValue(),9:s=>this.onTab(),27:s=>this.onEscape(),38:s=>(s.preventDefault(),this.typeAheadUp()),40:s=>(s.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(s=>n[s]=e);const r=this.mapKeydown(n,this);if(typeof r[t.keyCode]=="function")return r[t.keyCode](t)}}},uO=["dir"],hO=["id","aria-expanded","aria-owns"],dO={ref:"selectedOptions",class:"vs__selected-options"},fO=["disabled","title","aria-label","onClick"],pO={ref:"actions",class:"vs__actions"},gO=["disabled"],mO={class:"vs__spinner"},_O=["id"],yO=["id","aria-selected","onMouseover","onClick"],vO={key:0,class:"vs__no-options"},EO=Vr(" Sorry, no matching options. "),wO=["id"];function IO(t,e,n,r,s,i){const o=dE("append-to-body");return z(),ne("div",{dir:n.dir,class:xe(["v-select",i.stateClasses])},[Ne(t.$slots,"header",He(Mt(i.scope.header))),O("div",{id:`vs${n.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":i.dropdownOpen.toString(),"aria-owns":`vs${n.uid}__listbox`,"aria-label":"Search for option",onMousedown:e[1]||(e[1]=a=>i.toggleDropdown(a))},[O("div",dO,[(z(!0),ne(Le,null,An(i.selectedValue,(a,l)=>Ne(t.$slots,"selected-option-container",{option:i.normalizeOptionForSlot(a),deselect:i.deselect,multiple:n.multiple,disabled:n.disabled},()=>[(z(),ne("span",{key:n.getOptionKey(a),class:"vs__selected"},[Ne(t.$slots,"selected-option",He(Mt(i.normalizeOptionForSlot(a))),()=>[Vr(ct(n.getOptionLabel(a)),1)]),n.multiple?(z(),ne("button",{key:0,ref_for:!0,ref:c=>s.deselectButtons[l]=c,disabled:n.disabled,type:"button",class:"vs__deselect",title:`Deselect ${n.getOptionLabel(a)}`,"aria-label":`Deselect ${n.getOptionLabel(a)}`,onClick:c=>i.deselect(a)},[(z(),en(Lo(i.childComponents.Deselect)))],8,fO)):It("",!0)]))])),256)),Ne(t.$slots,"search",He(Mt(i.scope.search)),()=>[O("input",Xt({class:"vs__search"},i.scope.search.attributes,OE(i.scope.search.events)),null,16)])],512),O("div",pO,[ui(O("button",{ref:"clearButton",disabled:n.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:e[0]||(e[0]=(...a)=>i.clearSelection&&i.clearSelection(...a))},[(z(),en(Lo(i.childComponents.Deselect)))],8,gO),[[xd,i.showClearButton]]),Ne(t.$slots,"open-indicator",He(Mt(i.scope.openIndicator)),()=>[n.noDrop?It("",!0):(z(),en(Lo(i.childComponents.OpenIndicator),He(Xt({key:0},i.scope.openIndicator.attributes)),null,16))]),Ne(t.$slots,"spinner",He(Mt(i.scope.spinner)),()=>[ui(O("div",mO,"Loading...",512),[[xd,t.mutableLoading]])])],512)],40,hO),ze(qa,{name:n.transition},{default:hs(()=>[i.dropdownOpen?ui((z(),ne("ul",{id:`vs${n.uid}__listbox`,ref:"dropdownMenu",key:`vs${n.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:e[2]||(e[2]=Ts((...a)=>i.onMousedown&&i.onMousedown(...a),["prevent"])),onMouseup:e[3]||(e[3]=(...a)=>i.onMouseUp&&i.onMouseUp(...a))},[Ne(t.$slots,"list-header",He(Mt(i.scope.listHeader))),(z(!0),ne(Le,null,An(i.filteredOptions,(a,l)=>(z(),ne("li",{id:`vs${n.uid}__option-${l}`,key:n.getOptionKey(a),role:"option",class:xe(["vs__dropdown-option",{"vs__dropdown-option--deselect":i.isOptionDeselectable(a)&&l===t.typeAheadPointer,"vs__dropdown-option--selected":i.isOptionSelected(a),"vs__dropdown-option--highlight":l===t.typeAheadPointer,"vs__dropdown-option--disabled":!n.selectable(a)}]),"aria-selected":l===t.typeAheadPointer?!0:null,onMouseover:c=>n.selectable(a)?t.typeAheadPointer=l:null,onClick:Ts(c=>n.selectable(a)?i.select(a):null,["prevent","stop"])},[Ne(t.$slots,"option",He(Mt(i.normalizeOptionForSlot(a))),()=>[Vr(ct(n.getOptionLabel(a)),1)])],42,yO))),128)),i.filteredOptions.length===0?(z(),ne("li",vO,[Ne(t.$slots,"no-options",He(Mt(i.scope.noOptions)),()=>[EO])])):It("",!0),Ne(t.$slots,"list-footer",He(Mt(i.scope.listFooter)))],40,_O)),[[o]]):(z(),ne("ul",{key:1,id:`vs${n.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,wO))]),_:3},8,["name"]),Ne(t.$slots,"footer",He(Mt(i.scope.footer)))],10,uO)}const TO=Hh(cO,[["render",IO]]);const _o=Mw(HI);_o.component("v-select",TO);_o.component("EasyDataTable",nv);_o.use($w());_o.use(vs);_o.mount("#app");export{Vr as A,mt as B,eT as C,tm as D,Ps as E,$r as F,sr as G,nT as H,Mn as I,b as J,ct as K,ev as L,bO as M,Le as N,An as O,Pu as P,dr as Q,fr as R,$s as S,Xr as T,AO as U,ku as _,dd as a,z as b,oe as c,ne as d,O as e,en as f,It as g,ze as h,hs as i,Ts as j,Fy as k,Zy as l,NO as m,xe as n,Us as o,Uy as p,kO as q,Je as r,vC as s,CO as t,OO as u,Bd as v,ui as w,xO as x,AC as y,zt as z};
