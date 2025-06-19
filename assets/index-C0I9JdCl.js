(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ty={exports:{}},kl={},ny={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),hE=Symbol.for("react.portal"),dE=Symbol.for("react.fragment"),fE=Symbol.for("react.strict_mode"),pE=Symbol.for("react.profiler"),mE=Symbol.for("react.provider"),gE=Symbol.for("react.context"),yE=Symbol.for("react.forward_ref"),_E=Symbol.for("react.suspense"),vE=Symbol.for("react.memo"),wE=Symbol.for("react.lazy"),xp=Symbol.iterator;function EE(t){return t===null||typeof t!="object"?null:(t=xp&&t[xp]||t["@@iterator"],typeof t=="function"?t:null)}var ry={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iy=Object.assign,sy={};function Mi(t,e,n){this.props=t,this.context=e,this.refs=sy,this.updater=n||ry}Mi.prototype.isReactComponent={};Mi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function oy(){}oy.prototype=Mi.prototype;function bh(t,e,n){this.props=t,this.context=e,this.refs=sy,this.updater=n||ry}var Fh=bh.prototype=new oy;Fh.constructor=bh;iy(Fh,Mi.prototype);Fh.isPureReactComponent=!0;var Np=Array.isArray,ay=Object.prototype.hasOwnProperty,Uh={current:null},ly={key:!0,ref:!0,__self:!0,__source:!0};function uy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ay.call(e,r)&&!ly.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ho,type:t,key:s,ref:o,props:i,_owner:Uh.current}}function TE(t,e){return{$$typeof:ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ho}function IE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dp=/\/+/g;function Lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?IE(""+t.key):e.toString(36)}function ya(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ho:case hE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Lu(o,0):r,Np(i)?(n="",t!=null&&(n=t.replace(Dp,"$&/")+"/"),ya(i,e,n,"",function(h){return h})):i!=null&&(jh(i)&&(i=TE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Np(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Lu(s,l);o+=ya(s,e,n,u,i)}else if(u=EE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Lu(s,l++),o+=ya(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qo(t,e,n){if(t==null)return t;var r=[],i=0;return ya(t,r,"","",function(s){return e.call(n,s,i++)}),r}function SE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},_a={transition:null},AE={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:_a,ReactCurrentOwner:Uh};function cy(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Qo,forEach:function(t,e,n){Qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qo(t,function(){e++}),e},toArray:function(t){return Qo(t,function(e){return e})||[]},only:function(t){if(!jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=Mi;J.Fragment=dE;J.Profiler=pE;J.PureComponent=bh;J.StrictMode=fE;J.Suspense=_E;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AE;J.act=cy;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=iy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)ay.call(e,u)&&!ly.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:ho,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:gE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mE,_context:t},t.Consumer=t};J.createElement=uy;J.createFactory=function(t){var e=uy.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:yE,render:t}};J.isValidElement=jh;J.lazy=function(t){return{$$typeof:wE,_payload:{_status:-1,_result:t},_init:SE}};J.memo=function(t,e){return{$$typeof:vE,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=_a.transition;_a.transition={};try{t()}finally{_a.transition=e}};J.unstable_act=cy;J.useCallback=function(t,e){return at.current.useCallback(t,e)};J.useContext=function(t){return at.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return at.current.useDeferredValue(t)};J.useEffect=function(t,e){return at.current.useEffect(t,e)};J.useId=function(){return at.current.useId()};J.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return at.current.useMemo(t,e)};J.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};J.useRef=function(t){return at.current.useRef(t)};J.useState=function(t){return at.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return at.current.useTransition()};J.version="18.3.1";ny.exports=J;var _e=ny.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=_e,RE=Symbol.for("react.element"),CE=Symbol.for("react.fragment"),PE=Object.prototype.hasOwnProperty,xE=kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NE={key:!0,ref:!0,__self:!0,__source:!0};function hy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)PE.call(e,r)&&!NE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:RE,type:t,key:s,ref:o,props:i,_owner:xE.current}}kl.Fragment=CE;kl.jsx=hy;kl.jsxs=hy;ty.exports=kl;var N=ty.exports,dy={exports:{}},Tt={},fy={exports:{}},py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var X=z.length;z.push(G);e:for(;0<X;){var ge=X-1>>>1,ae=z[ge];if(0<i(ae,G))z[ge]=G,z[X]=ae,X=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],X=z.pop();if(X!==G){z[0]=X;e:for(var ge=0,ae=z.length,Se=ae>>>1;ge<Se;){var en=2*(ge+1)-1,tn=z[en],nn=en+1,rn=z[nn];if(0>i(tn,X))nn<ae&&0>i(rn,tn)?(z[ge]=rn,z[nn]=X,ge=nn):(z[ge]=tn,z[en]=X,ge=en);else if(nn<ae&&0>i(rn,X))z[ge]=rn,z[nn]=X,ge=nn;else break e}}return G}function i(z,G){var X=z.sortIndex-G.sortIndex;return X!==0?X:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,g=3,A=!1,R=!1,x=!1,O=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=z)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function V(z){if(x=!1,S(z),!R)if(n(u)!==null)R=!0,Wi(j);else{var G=n(h);G!==null&&Zt(V,G.startTime-z)}}function j(z,G){R=!1,x&&(x=!1,E(y),y=-1),A=!0;var X=g;try{for(S(G),m=n(u);m!==null&&(!(m.expirationTime>G)||z&&!k());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,g=m.priorityLevel;var ae=ge(m.expirationTime<=G);G=t.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(u)&&r(u),S(G)}else r(u);m=n(u)}if(m!==null)var Se=!0;else{var en=n(h);en!==null&&Zt(V,en.startTime-G),Se=!1}return Se}finally{m=null,g=X,A=!1}}var U=!1,w=null,y=-1,_=5,T=-1;function k(){return!(t.unstable_now()-T<_)}function P(){if(w!==null){var z=t.unstable_now();T=z;var G=!0;try{G=w(!0,z)}finally{G?I():(U=!1,w=null)}}else U=!1}var I;if(typeof v=="function")I=function(){v(P)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,fr=St.port2;St.port1.onmessage=P,I=function(){fr.postMessage(null)}}else I=function(){O(P,0)};function Wi(z){w=z,U||(U=!0,I())}function Zt(z,G){y=O(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||A||(R=!0,Wi(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var X=g;g=G;try{return z()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=g;g=z;try{return G()}finally{g=X}},t.unstable_scheduleCallback=function(z,G,X){var ge=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ge+X:ge):X=ge,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=X+ae,z={id:f++,callback:G,priorityLevel:z,startTime:X,expirationTime:ae,sortIndex:-1},X>ge?(z.sortIndex=X,e(h,z),n(u)===null&&z===n(h)&&(x?(E(y),y=-1):x=!0,Zt(V,X-ge))):(z.sortIndex=ae,e(u,z),R||A||(R=!0,Wi(j))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var G=g;return function(){var X=g;g=G;try{return z.apply(this,arguments)}finally{g=X}}}})(py);fy.exports=py;var DE=fy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE=_e,Et=DE;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var my=new Set,Fs={};function Ur(t,e){wi(t,e),wi(t+"Capture",e)}function wi(t,e){for(Fs[t]=e,t=0;t<e.length;t++)my.add(e[t])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=Object.prototype.hasOwnProperty,OE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vp={},Op={};function LE(t){return _c.call(Op,t)?!0:_c.call(Vp,t)?!1:OE.test(t)?Op[t]=!0:(Vp[t]=!0,!1)}function ME(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bE(t,e,n,r){if(e===null||typeof e>"u"||ME(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var zh=/[\-:]([a-z])/g;function Bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zh,Bh);$e[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zh,Bh);$e[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zh,Bh);$e[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function $h(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bE(e,n,i,r)&&(n=null),r||i===null?LE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kn=VE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),qh=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),gy=Symbol.for("react.provider"),yy=Symbol.for("react.context"),Hh=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),Ec=Symbol.for("react.suspense_list"),Wh=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),_y=Symbol.for("react.offscreen"),Lp=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Mu;function gs(t){if(Mu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mu=e&&e[1]||""}return`
`+Mu+t}var bu=!1;function Fu(t,e){if(!t||bu)return"";bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?gs(t):""}function FE(t){switch(t.tag){case 5:return gs(t.type);case 16:return gs("Lazy");case 13:return gs("Suspense");case 19:return gs("SuspenseList");case 0:case 2:case 15:return t=Fu(t.type,!1),t;case 11:return t=Fu(t.type.render,!1),t;case 1:return t=Fu(t.type,!0),t;default:return""}}function Tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Xr:return"Portal";case vc:return"Profiler";case qh:return"StrictMode";case wc:return"Suspense";case Ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yy:return(t.displayName||"Context")+".Consumer";case gy:return(t._context.displayName||"Context")+".Provider";case Hh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wh:return e=t.displayName||null,e!==null?e:Tc(t.type)||"Memo";case On:e=t._payload,t=t._init;try{return Tc(t(e))}catch{}}return null}function UE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tc(e);case 8:return e===qh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jE(t){var e=vy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xo(t){t._valueTracker||(t._valueTracker=jE(t))}function wy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ic(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ey(t,e){e=e.checked,e!=null&&$h(t,"checked",e,!1)}function Sc(t,e){Ey(t,e);var n=ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ac(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ac(t,e,n){(e!=="number"||Fa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ys=Array.isArray;function ui(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(ys(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function Ty(t,e){var n=ir(e.value),r=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Up(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Iy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Iy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jo,Sy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Us(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zE=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(t){zE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ss[e]=Ss[t]})});function Ay(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ss.hasOwnProperty(t)&&Ss[t]?(""+e).trim():e+"px"}function ky(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ay(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var BE=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cc(t,e){if(e){if(BE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Pc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function Kh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nc=null,ci=null,hi=null;function jp(t){if(t=mo(t)){if(typeof Nc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Nl(e),Nc(t.stateNode,t.type,e))}}function Ry(t){ci?hi?hi.push(t):hi=[t]:ci=t}function Cy(){if(ci){var t=ci,e=hi;if(hi=ci=null,jp(t),e)for(t=0;t<e.length;t++)jp(e[t])}}function Py(t,e){return t(e)}function xy(){}var Uu=!1;function Ny(t,e,n){if(Uu)return t(e,n);Uu=!0;try{return Py(t,e,n)}finally{Uu=!1,(ci!==null||hi!==null)&&(xy(),Cy())}}function js(t,e){var n=t.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Dc=!1;if(yn)try{var as={};Object.defineProperty(as,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{Dc=!1}function $E(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var As=!1,Ua=null,ja=!1,Vc=null,qE={onError:function(t){As=!0,Ua=t}};function HE(t,e,n,r,i,s,o,l,u){As=!1,Ua=null,$E.apply(qE,arguments)}function WE(t,e,n,r,i,s,o,l,u){if(HE.apply(this,arguments),As){if(As){var h=Ua;As=!1,Ua=null}else throw Error(b(198));ja||(ja=!0,Vc=h)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zp(t){if(jr(t)!==t)throw Error(b(188))}function KE(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zp(i),t;if(s===r)return zp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function Vy(t){return t=KE(t),t!==null?Oy(t):null}function Oy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Oy(t);if(e!==null)return e;t=t.sibling}return null}var Ly=Et.unstable_scheduleCallback,Bp=Et.unstable_cancelCallback,GE=Et.unstable_shouldYield,QE=Et.unstable_requestPaint,ke=Et.unstable_now,YE=Et.unstable_getCurrentPriorityLevel,Gh=Et.unstable_ImmediatePriority,My=Et.unstable_UserBlockingPriority,za=Et.unstable_NormalPriority,XE=Et.unstable_LowPriority,by=Et.unstable_IdlePriority,Rl=null,Wt=null;function JE(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:tT,ZE=Math.log,eT=Math.LN2;function tT(t){return t>>>=0,t===0?32:31-(ZE(t)/eT|0)|0}var Zo=64,ea=4194304;function _s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_s(l):(s&=o,s!==0&&(r=_s(s)))}else o=n&~i,o!==0?r=_s(o):s!==0&&(r=_s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bt(e),i=1<<n,r|=t[n],e&=~i;return r}function nT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=nT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fy(){var t=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),t}function ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bt(e),t[e]=n}function iT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function Uy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jy,Yh,zy,By,$y,Lc=!1,ta=[],Hn=null,Wn=null,Kn=null,zs=new Map,Bs=new Map,Mn=[],sT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(t,e){switch(t){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bs.delete(e.pointerId)}}function ls(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=mo(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function oT(t,e,n,r,i){switch(e){case"focusin":return Hn=ls(Hn,t,e,n,r,i),!0;case"dragenter":return Wn=ls(Wn,t,e,n,r,i),!0;case"mouseover":return Kn=ls(Kn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zs.set(s,ls(zs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bs.set(s,ls(Bs.get(s)||null,t,e,n,r,i)),!0}return!1}function qy(t){var e=Er(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=Dy(n),e!==null){t.blockedOn=e,$y(t.priority,function(){zy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xc=r,n.target.dispatchEvent(r),xc=null}else return e=mo(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function qp(t,e,n){va(t)&&n.delete(e)}function aT(){Lc=!1,Hn!==null&&va(Hn)&&(Hn=null),Wn!==null&&va(Wn)&&(Wn=null),Kn!==null&&va(Kn)&&(Kn=null),zs.forEach(qp),Bs.forEach(qp)}function us(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,aT)))}function $s(t){function e(i){return us(i,t)}if(0<ta.length){us(ta[0],t);for(var n=1;n<ta.length;n++){var r=ta[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Hn!==null&&us(Hn,t),Wn!==null&&us(Wn,t),Kn!==null&&us(Kn,t),zs.forEach(e),Bs.forEach(e),n=0;n<Mn.length;n++)r=Mn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Mn.length&&(n=Mn[0],n.blockedOn===null);)qy(n),n.blockedOn===null&&Mn.shift()}var di=kn.ReactCurrentBatchConfig,$a=!0;function lT(t,e,n,r){var i=se,s=di.transition;di.transition=null;try{se=1,Xh(t,e,n,r)}finally{se=i,di.transition=s}}function uT(t,e,n,r){var i=se,s=di.transition;di.transition=null;try{se=4,Xh(t,e,n,r)}finally{se=i,di.transition=s}}function Xh(t,e,n,r){if($a){var i=Mc(t,e,n,r);if(i===null)Yu(t,e,r,qa,n),$p(t,r);else if(oT(i,t,e,n,r))r.stopPropagation();else if($p(t,r),e&4&&-1<sT.indexOf(t)){for(;i!==null;){var s=mo(i);if(s!==null&&jy(s),s=Mc(t,e,n,r),s===null&&Yu(t,e,r,qa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yu(t,e,r,null,n)}}var qa=null;function Mc(t,e,n,r){if(qa=null,t=Kh(r),t=Er(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qa=t,null}function Hy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(YE()){case Gh:return 1;case My:return 4;case za:case XE:return 16;case by:return 536870912;default:return 16}default:return 16}}var Bn=null,Jh=null,wa=null;function Wy(){if(wa)return wa;var t,e=Jh,n=e.length,r,i="value"in Bn?Bn.value:Bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wa=i.slice(t,1<r?1-r:void 0)}function Ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function Hp(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?na:Hp,this.isPropagationStopped=Hp,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),e}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=It(bi),po=we({},bi,{view:0,detail:0}),cT=It(po),zu,Bu,cs,Cl=we({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(zu=t.screenX-cs.screenX,Bu=t.screenY-cs.screenY):Bu=zu=0,cs=t),zu)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),Wp=It(Cl),hT=we({},Cl,{dataTransfer:0}),dT=It(hT),fT=we({},po,{relatedTarget:0}),$u=It(fT),pT=we({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),mT=It(pT),gT=we({},bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yT=It(gT),_T=we({},bi,{data:0}),Kp=It(_T),vT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ET={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ET[t])?!!e[t]:!1}function ed(){return TT}var IT=we({},po,{key:function(t){if(t.key){var e=vT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ed,charCode:function(t){return t.type==="keypress"?Ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ST=It(IT),AT=we({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=It(AT),kT=we({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ed}),RT=It(kT),CT=we({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),PT=It(CT),xT=we({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),NT=It(xT),DT=[9,13,27,32],td=yn&&"CompositionEvent"in window,ks=null;yn&&"documentMode"in document&&(ks=document.documentMode);var VT=yn&&"TextEvent"in window&&!ks,Ky=yn&&(!td||ks&&8<ks&&11>=ks),Qp=" ",Yp=!1;function Gy(t,e){switch(t){case"keyup":return DT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function OT(t,e){switch(t){case"compositionend":return Qy(e);case"keypress":return e.which!==32?null:(Yp=!0,Qp);case"textInput":return t=e.data,t===Qp&&Yp?null:t;default:return null}}function LT(t,e){if(Zr)return t==="compositionend"||!td&&Gy(t,e)?(t=Wy(),wa=Jh=Bn=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ky&&e.locale!=="ko"?null:e.data;default:return null}}var MT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!MT[t.type]:e==="textarea"}function Yy(t,e,n,r){Ry(r),e=Ha(e,"onChange"),0<e.length&&(n=new Zh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Rs=null,qs=null;function bT(t){a_(t,0)}function Pl(t){var e=ni(t);if(wy(e))return t}function FT(t,e){if(t==="change")return e}var Xy=!1;if(yn){var qu;if(yn){var Hu="oninput"in document;if(!Hu){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),Hu=typeof Jp.oninput=="function"}qu=Hu}else qu=!1;Xy=qu&&(!document.documentMode||9<document.documentMode)}function Zp(){Rs&&(Rs.detachEvent("onpropertychange",Jy),qs=Rs=null)}function Jy(t){if(t.propertyName==="value"&&Pl(qs)){var e=[];Yy(e,qs,t,Kh(t)),Ny(bT,e)}}function UT(t,e,n){t==="focusin"?(Zp(),Rs=e,qs=n,Rs.attachEvent("onpropertychange",Jy)):t==="focusout"&&Zp()}function jT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(qs)}function zT(t,e){if(t==="click")return Pl(e)}function BT(t,e){if(t==="input"||t==="change")return Pl(e)}function $T(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:$T;function Hs(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_c.call(e,i)||!jt(t[i],e[i]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,e){var n=em(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function Zy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e_(){for(var t=window,e=Fa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fa(t.document)}return e}function nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qT(t){var e=e_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zy(n.ownerDocument.documentElement,n)){if(r!==null&&nd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=tm(n,s);var o=tm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HT=yn&&"documentMode"in document&&11>=document.documentMode,ei=null,bc=null,Cs=null,Fc=!1;function nm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fc||ei==null||ei!==Fa(r)||(r=ei,"selectionStart"in r&&nd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cs&&Hs(Cs,r)||(Cs=r,r=Ha(bc,"onSelect"),0<r.length&&(e=new Zh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ei)))}function ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ti={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Wu={},t_={};yn&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function xl(t){if(Wu[t])return Wu[t];if(!ti[t])return t;var e=ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return Wu[t]=e[n];return t}var n_=xl("animationend"),r_=xl("animationiteration"),i_=xl("animationstart"),s_=xl("transitionend"),o_=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){o_.set(t,e),Ur(e,[t])}for(var Ku=0;Ku<rm.length;Ku++){var Gu=rm[Ku],WT=Gu.toLowerCase(),KT=Gu[0].toUpperCase()+Gu.slice(1);ur(WT,"on"+KT)}ur(n_,"onAnimationEnd");ur(r_,"onAnimationIteration");ur(i_,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(s_,"onTransitionEnd");wi("onMouseEnter",["mouseout","mouseover"]);wi("onMouseLeave",["mouseout","mouseover"]);wi("onPointerEnter",["pointerout","pointerover"]);wi("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GT=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function im(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,WE(r,e,void 0,t),t.currentTarget=null}function a_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;im(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;im(i,l,h),s=u}}}if(ja)throw t=Vc,ja=!1,Vc=null,t}function de(t,e){var n=e[$c];n===void 0&&(n=e[$c]=new Set);var r=t+"__bubble";n.has(r)||(l_(e,t,2,!1),n.add(r))}function Qu(t,e,n){var r=0;e&&(r|=4),l_(n,t,r,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Ws(t){if(!t[ia]){t[ia]=!0,my.forEach(function(n){n!=="selectionchange"&&(GT.has(n)||Qu(n,!1,t),Qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ia]||(e[ia]=!0,Qu("selectionchange",!1,e))}}function l_(t,e,n,r){switch(Hy(e)){case 1:var i=lT;break;case 4:i=uT;break;default:i=Xh}n=i.bind(null,e,n,t),i=void 0,!Dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Er(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ny(function(){var h=s,f=Kh(n),m=[];e:{var g=o_.get(t);if(g!==void 0){var A=Zh,R=t;switch(t){case"keypress":if(Ea(n)===0)break e;case"keydown":case"keyup":A=ST;break;case"focusin":R="focus",A=$u;break;case"focusout":R="blur",A=$u;break;case"beforeblur":case"afterblur":A=$u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=dT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=RT;break;case n_:case r_:case i_:A=mT;break;case s_:A=PT;break;case"scroll":A=cT;break;case"wheel":A=NT;break;case"copy":case"cut":case"paste":A=yT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Gp}var x=(e&4)!==0,O=!x&&t==="scroll",E=x?g!==null?g+"Capture":null:g;x=[];for(var v=h,S;v!==null;){S=v;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,E!==null&&(V=js(v,E),V!=null&&x.push(Ks(v,V,S)))),O)break;v=v.return}0<x.length&&(g=new A(g,R,null,n,f),m.push({event:g,listeners:x}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==xc&&(R=n.relatedTarget||n.fromElement)&&(Er(R)||R[_n]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(R=n.relatedTarget||n.toElement,A=h,R=R?Er(R):null,R!==null&&(O=jr(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(A=null,R=h),A!==R)){if(x=Wp,V="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Gp,V="onPointerLeave",E="onPointerEnter",v="pointer"),O=A==null?g:ni(A),S=R==null?g:ni(R),g=new x(V,v+"leave",A,n,f),g.target=O,g.relatedTarget=S,V=null,Er(f)===h&&(x=new x(E,v+"enter",R,n,f),x.target=S,x.relatedTarget=O,V=x),O=V,A&&R)t:{for(x=A,E=R,v=0,S=x;S;S=Kr(S))v++;for(S=0,V=E;V;V=Kr(V))S++;for(;0<v-S;)x=Kr(x),v--;for(;0<S-v;)E=Kr(E),S--;for(;v--;){if(x===E||E!==null&&x===E.alternate)break t;x=Kr(x),E=Kr(E)}x=null}else x=null;A!==null&&sm(m,g,A,x,!1),R!==null&&O!==null&&sm(m,O,R,x,!0)}}e:{if(g=h?ni(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var j=FT;else if(Xp(g))if(Xy)j=BT;else{j=jT;var U=UT}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=zT);if(j&&(j=j(t,h))){Yy(m,j,n,f);break e}U&&U(t,g,h),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Ac(g,"number",g.value)}switch(U=h?ni(h):window,t){case"focusin":(Xp(U)||U.contentEditable==="true")&&(ei=U,bc=h,Cs=null);break;case"focusout":Cs=bc=ei=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,nm(m,n,f);break;case"selectionchange":if(HT)break;case"keydown":case"keyup":nm(m,n,f)}var w;if(td)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Zr?Gy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Ky&&n.locale!=="ko"&&(Zr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Zr&&(w=Wy()):(Bn=f,Jh="value"in Bn?Bn.value:Bn.textContent,Zr=!0)),U=Ha(h,y),0<U.length&&(y=new Kp(y,t,null,n,f),m.push({event:y,listeners:U}),w?y.data=w:(w=Qy(n),w!==null&&(y.data=w)))),(w=VT?OT(t,n):LT(t,n))&&(h=Ha(h,"onBeforeInput"),0<h.length&&(f=new Kp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=w))}a_(m,e)})}function Ks(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ha(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=js(t,n),s!=null&&r.unshift(Ks(t,s,i)),s=js(t,e),s!=null&&r.push(Ks(t,s,i))),t=t.return}return r}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=js(n,s),u!=null&&o.unshift(Ks(n,u,l))):i||(u=js(n,s),u!=null&&o.push(Ks(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var QT=/\r\n?/g,YT=/\u0000|\uFFFD/g;function om(t){return(typeof t=="string"?t:""+t).replace(QT,`
`).replace(YT,"")}function sa(t,e,n){if(e=om(e),om(t)!==e&&n)throw Error(b(425))}function Wa(){}var Uc=null,jc=null;function zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,XT=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,JT=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(ZT)}:Bc;function ZT(t){setTimeout(function(){throw t})}function Xu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$s(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$s(e)}function Gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fi=Math.random().toString(36).slice(2),qt="__reactFiber$"+Fi,Gs="__reactProps$"+Fi,_n="__reactContainer$"+Fi,$c="__reactEvents$"+Fi,e1="__reactListeners$"+Fi,t1="__reactHandles$"+Fi;function Er(t){var e=t[qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lm(t);t!==null;){if(n=t[qt])return n;t=lm(t)}return e}t=n,n=t.parentNode}return null}function mo(t){return t=t[qt]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Nl(t){return t[Gs]||null}var qc=[],ri=-1;function cr(t){return{current:t}}function pe(t){0>ri||(t.current=qc[ri],qc[ri]=null,ri--)}function ce(t,e){ri++,qc[ri]=t.current,t.current=e}var sr={},tt=cr(sr),dt=cr(!1),Pr=sr;function Ei(t,e){var n=t.type.contextTypes;if(!n)return sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function Ka(){pe(dt),pe(tt)}function um(t,e,n){if(tt.current!==sr)throw Error(b(168));ce(tt,e),ce(dt,n)}function u_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,UE(t)||"Unknown",i));return we({},n,r)}function Ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Pr=tt.current,ce(tt,t),ce(dt,dt.current),!0}function cm(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=u_(t,e,Pr),r.__reactInternalMemoizedMergedChildContext=t,pe(dt),pe(tt),ce(tt,t)):pe(dt),ce(dt,n)}var ln=null,Dl=!1,Ju=!1;function c_(t){ln===null?ln=[t]:ln.push(t)}function n1(t){Dl=!0,c_(t)}function hr(){if(!Ju&&ln!==null){Ju=!0;var t=0,e=se;try{var n=ln;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ln=null,Dl=!1}catch(i){throw ln!==null&&(ln=ln.slice(t+1)),Ly(Gh,hr),i}finally{se=e,Ju=!1}}return null}var ii=[],si=0,Qa=null,Ya=0,At=[],kt=0,xr=null,cn=1,hn="";function _r(t,e){ii[si++]=Ya,ii[si++]=Qa,Qa=t,Ya=e}function h_(t,e,n){At[kt++]=cn,At[kt++]=hn,At[kt++]=xr,xr=t;var r=cn;t=hn;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cn=1<<32-bt(e)+i|n<<i|r,hn=s+t}else cn=1<<s|n<<i|r,hn=t}function rd(t){t.return!==null&&(_r(t,1),h_(t,1,0))}function id(t){for(;t===Qa;)Qa=ii[--si],ii[si]=null,Ya=ii[--si],ii[si]=null;for(;t===xr;)xr=At[--kt],At[kt]=null,hn=At[--kt],At[kt]=null,cn=At[--kt],At[kt]=null}var wt=null,_t=null,me=!1,Mt=null;function d_(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,_t=Gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:cn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,_t=null,!0):!1;default:return!1}}function Hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wc(t){if(me){var e=_t;if(e){var n=e;if(!hm(t,e)){if(Hc(t))throw Error(b(418));e=Gn(n.nextSibling);var r=wt;e&&hm(t,e)?d_(r,n):(t.flags=t.flags&-4097|2,me=!1,wt=t)}}else{if(Hc(t))throw Error(b(418));t.flags=t.flags&-4097|2,me=!1,wt=t}}}function dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function oa(t){if(t!==wt)return!1;if(!me)return dm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zc(t.type,t.memoizedProps)),e&&(e=_t)){if(Hc(t))throw f_(),Error(b(418));for(;e;)d_(t,e),e=Gn(e.nextSibling)}if(dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=wt?Gn(t.stateNode.nextSibling):null;return!0}function f_(){for(var t=_t;t;)t=Gn(t.nextSibling)}function Ti(){_t=wt=null,me=!1}function sd(t){Mt===null?Mt=[t]:Mt.push(t)}var r1=kn.ReactCurrentBatchConfig;function hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function aa(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fm(t){var e=t._init;return e(t._payload)}function p_(t){function e(E,v){if(t){var S=E.deletions;S===null?(E.deletions=[v],E.flags|=16):S.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=Jn(E,v),E.index=0,E.sibling=null,E}function s(E,v,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<v?(E.flags|=2,v):S):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,v,S,V){return v===null||v.tag!==6?(v=sc(S,E.mode,V),v.return=E,v):(v=i(v,S),v.return=E,v)}function u(E,v,S,V){var j=S.type;return j===Jr?f(E,v,S.props.children,V,S.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===On&&fm(j)===v.type)?(V=i(v,S.props),V.ref=hs(E,v,S),V.return=E,V):(V=Ca(S.type,S.key,S.props,null,E.mode,V),V.ref=hs(E,v,S),V.return=E,V)}function h(E,v,S,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=oc(S,E.mode,V),v.return=E,v):(v=i(v,S.children||[]),v.return=E,v)}function f(E,v,S,V,j){return v===null||v.tag!==7?(v=Rr(S,E.mode,V,j),v.return=E,v):(v=i(v,S),v.return=E,v)}function m(E,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=sc(""+v,E.mode,S),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yo:return S=Ca(v.type,v.key,v.props,null,E.mode,S),S.ref=hs(E,null,v),S.return=E,S;case Xr:return v=oc(v,E.mode,S),v.return=E,v;case On:var V=v._init;return m(E,V(v._payload),S)}if(ys(v)||os(v))return v=Rr(v,E.mode,S,null),v.return=E,v;aa(E,v)}return null}function g(E,v,S,V){var j=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:l(E,v,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Yo:return S.key===j?u(E,v,S,V):null;case Xr:return S.key===j?h(E,v,S,V):null;case On:return j=S._init,g(E,v,j(S._payload),V)}if(ys(S)||os(S))return j!==null?null:f(E,v,S,V,null);aa(E,S)}return null}function A(E,v,S,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return E=E.get(S)||null,l(v,E,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Yo:return E=E.get(V.key===null?S:V.key)||null,u(v,E,V,j);case Xr:return E=E.get(V.key===null?S:V.key)||null,h(v,E,V,j);case On:var U=V._init;return A(E,v,S,U(V._payload),j)}if(ys(V)||os(V))return E=E.get(S)||null,f(v,E,V,j,null);aa(v,V)}return null}function R(E,v,S,V){for(var j=null,U=null,w=v,y=v=0,_=null;w!==null&&y<S.length;y++){w.index>y?(_=w,w=null):_=w.sibling;var T=g(E,w,S[y],V);if(T===null){w===null&&(w=_);break}t&&w&&T.alternate===null&&e(E,w),v=s(T,v,y),U===null?j=T:U.sibling=T,U=T,w=_}if(y===S.length)return n(E,w),me&&_r(E,y),j;if(w===null){for(;y<S.length;y++)w=m(E,S[y],V),w!==null&&(v=s(w,v,y),U===null?j=w:U.sibling=w,U=w);return me&&_r(E,y),j}for(w=r(E,w);y<S.length;y++)_=A(w,E,y,S[y],V),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?y:_.key),v=s(_,v,y),U===null?j=_:U.sibling=_,U=_);return t&&w.forEach(function(k){return e(E,k)}),me&&_r(E,y),j}function x(E,v,S,V){var j=os(S);if(typeof j!="function")throw Error(b(150));if(S=j.call(S),S==null)throw Error(b(151));for(var U=j=null,w=v,y=v=0,_=null,T=S.next();w!==null&&!T.done;y++,T=S.next()){w.index>y?(_=w,w=null):_=w.sibling;var k=g(E,w,T.value,V);if(k===null){w===null&&(w=_);break}t&&w&&k.alternate===null&&e(E,w),v=s(k,v,y),U===null?j=k:U.sibling=k,U=k,w=_}if(T.done)return n(E,w),me&&_r(E,y),j;if(w===null){for(;!T.done;y++,T=S.next())T=m(E,T.value,V),T!==null&&(v=s(T,v,y),U===null?j=T:U.sibling=T,U=T);return me&&_r(E,y),j}for(w=r(E,w);!T.done;y++,T=S.next())T=A(w,E,y,T.value,V),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?y:T.key),v=s(T,v,y),U===null?j=T:U.sibling=T,U=T);return t&&w.forEach(function(P){return e(E,P)}),me&&_r(E,y),j}function O(E,v,S,V){if(typeof S=="object"&&S!==null&&S.type===Jr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Yo:e:{for(var j=S.key,U=v;U!==null;){if(U.key===j){if(j=S.type,j===Jr){if(U.tag===7){n(E,U.sibling),v=i(U,S.props.children),v.return=E,E=v;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===On&&fm(j)===U.type){n(E,U.sibling),v=i(U,S.props),v.ref=hs(E,U,S),v.return=E,E=v;break e}n(E,U);break}else e(E,U);U=U.sibling}S.type===Jr?(v=Rr(S.props.children,E.mode,V,S.key),v.return=E,E=v):(V=Ca(S.type,S.key,S.props,null,E.mode,V),V.ref=hs(E,v,S),V.return=E,E=V)}return o(E);case Xr:e:{for(U=S.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(E,v.sibling),v=i(v,S.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=oc(S,E.mode,V),v.return=E,E=v}return o(E);case On:return U=S._init,O(E,v,U(S._payload),V)}if(ys(S))return R(E,v,S,V);if(os(S))return x(E,v,S,V);aa(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,S),v.return=E,E=v):(n(E,v),v=sc(S,E.mode,V),v.return=E,E=v),o(E)):n(E,v)}return O}var Ii=p_(!0),m_=p_(!1),Xa=cr(null),Ja=null,oi=null,od=null;function ad(){od=oi=Ja=null}function ld(t){var e=Xa.current;pe(Xa),t._currentValue=e}function Kc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function fi(t,e){Ja=t,od=oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function xt(t){var e=t._currentValue;if(od!==t)if(t={context:t,memoizedValue:e,next:null},oi===null){if(Ja===null)throw Error(b(308));oi=t,Ja.dependencies={lanes:0,firstContext:t}}else oi=oi.next=t;return e}var Tr=null;function ud(t){Tr===null?Tr=[t]:Tr.push(t)}function g_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ud(e)):(n.next=i.next,i.next=n),e.interleaved=n,vn(t,r)}function vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ln=!1;function cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,vn(t,n)}return i=r.interleaved,i===null?(e.next=e,ud(r)):(e.next=i.next,i.next=e),r.interleaved=e,vn(t,n)}function Ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qh(t,n)}}function pm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Za(t,e,n,r){var i=t.updateQueue;Ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,x=l;switch(g=e,A=n,x.tag){case 1:if(R=x.payload,typeof R=="function"){m=R.call(A,m,g);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=x.payload,g=typeof R=="function"?R.call(A,m,g):R,g==null)break e;m=we({},m,g);break e;case 2:Ln=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=m):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=m}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var go={},Kt=cr(go),Qs=cr(go),Ys=cr(go);function Ir(t){if(t===go)throw Error(b(174));return t}function hd(t,e){switch(ce(Ys,e),ce(Qs,t),ce(Kt,go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rc(e,t)}pe(Kt),ce(Kt,e)}function Si(){pe(Kt),pe(Qs),pe(Ys)}function __(t){Ir(Ys.current);var e=Ir(Kt.current),n=Rc(e,t.type);e!==n&&(ce(Qs,t),ce(Kt,n))}function dd(t){Qs.current===t&&(pe(Kt),pe(Qs))}var ye=cr(0);function el(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zu=[];function fd(){for(var t=0;t<Zu.length;t++)Zu[t]._workInProgressVersionPrimary=null;Zu.length=0}var Ia=kn.ReactCurrentDispatcher,ec=kn.ReactCurrentBatchConfig,Nr=0,ve=null,xe=null,Oe=null,tl=!1,Ps=!1,Xs=0,i1=0;function Ge(){throw Error(b(321))}function pd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function md(t,e,n,r,i,s){if(Nr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ia.current=t===null||t.memoizedState===null?l1:u1,t=n(r,i),Ps){s=0;do{if(Ps=!1,Xs=0,25<=s)throw Error(b(301));s+=1,Oe=xe=null,e.updateQueue=null,Ia.current=c1,t=n(r,i)}while(Ps)}if(Ia.current=nl,e=xe!==null&&xe.next!==null,Nr=0,Oe=xe=ve=null,tl=!1,e)throw Error(b(300));return t}function gd(){var t=Xs!==0;return Xs=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ve.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Nt(){if(xe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Oe===null?ve.memoizedState:Oe.next;if(e!==null)Oe=e,xe=t;else{if(t===null)throw Error(b(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Oe===null?ve.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function Js(t,e){return typeof e=="function"?e(t):e}function tc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Nr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ve.lanes|=f,Dr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,jt(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,Dr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jt(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function v_(){}function w_(t,e){var n=ve,r=Nt(),i=e(),s=!jt(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,yd(I_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Zs(9,T_.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(b(349));Nr&30||E_(n,e,i)}return i}function E_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T_(t,e,n,r){e.value=n,e.getSnapshot=r,S_(e)&&A_(t)}function I_(t,e,n){return n(function(){S_(e)&&A_(t)})}function S_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function A_(t){var e=vn(t,1);e!==null&&Ft(e,t,1,-1)}function gm(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Js,lastRenderedState:t},e.queue=t,t=t.dispatch=a1.bind(null,ve,t),[e.memoizedState,t]}function Zs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function k_(){return Nt().memoizedState}function Sa(t,e,n,r){var i=$t();ve.flags|=t,i.memoizedState=Zs(1|e,n,void 0,r===void 0?null:r)}function Vl(t,e,n,r){var i=Nt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&pd(r,o.deps)){i.memoizedState=Zs(e,n,s,r);return}}ve.flags|=t,i.memoizedState=Zs(1|e,n,s,r)}function ym(t,e){return Sa(8390656,8,t,e)}function yd(t,e){return Vl(2048,8,t,e)}function R_(t,e){return Vl(4,2,t,e)}function C_(t,e){return Vl(4,4,t,e)}function P_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function x_(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4,4,P_.bind(null,e,t),n)}function _d(){}function N_(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function D_(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function V_(t,e,n){return Nr&21?(jt(n,e)||(n=Fy(),ve.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function s1(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=ec.transition;ec.transition={};try{t(!1),e()}finally{se=n,ec.transition=r}}function O_(){return Nt().memoizedState}function o1(t,e,n){var r=Xn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},L_(t))M_(e,n);else if(n=g_(t,e,n,r),n!==null){var i=ot();Ft(n,t,r,i),b_(n,e,r)}}function a1(t,e,n){var r=Xn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(L_(t))M_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,jt(l,o)){var u=e.interleaved;u===null?(i.next=i,ud(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=g_(t,e,i,r),n!==null&&(i=ot(),Ft(n,t,r,i),b_(n,e,r))}}function L_(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function M_(t,e){Ps=tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function b_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qh(t,n)}}var nl={readContext:xt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},l1={readContext:xt,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sa(4194308,4,P_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sa(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=o1.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:gm,useDebugValue:_d,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=gm(!1),e=t[0];return t=s1.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=$t();if(me){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Le===null)throw Error(b(349));Nr&30||E_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ym(I_.bind(null,r,s,t),[t]),r.flags|=2048,Zs(9,T_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=Le.identifierPrefix;if(me){var n=hn,r=cn;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=i1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},u1={readContext:xt,useCallback:N_,useContext:xt,useEffect:yd,useImperativeHandle:x_,useInsertionEffect:R_,useLayoutEffect:C_,useMemo:D_,useReducer:tc,useRef:k_,useState:function(){return tc(Js)},useDebugValue:_d,useDeferredValue:function(t){var e=Nt();return V_(e,xe.memoizedState,t)},useTransition:function(){var t=tc(Js)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:v_,useSyncExternalStore:w_,useId:O_,unstable_isNewReconciler:!1},c1={readContext:xt,useCallback:N_,useContext:xt,useEffect:yd,useImperativeHandle:x_,useInsertionEffect:R_,useLayoutEffect:C_,useMemo:D_,useReducer:nc,useRef:k_,useState:function(){return nc(Js)},useDebugValue:_d,useDeferredValue:function(t){var e=Nt();return xe===null?e.memoizedState=t:V_(e,xe.memoizedState,t)},useTransition:function(){var t=nc(Js)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:v_,useSyncExternalStore:w_,useId:O_,unstable_isNewReconciler:!1};function Ot(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Xn(t),s=mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Qn(t,s,i),e!==null&&(Ft(e,t,i,r),Ta(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Xn(t),s=mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qn(t,s,i),e!==null&&(Ft(e,t,i,r),Ta(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=Xn(t),i=mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qn(t,i,r),e!==null&&(Ft(e,t,r,n),Ta(e,t,r))}};function _m(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hs(n,r)||!Hs(i,s):!0}function F_(t,e,n){var r=!1,i=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=xt(s):(i=ft(e)?Pr:tt.current,r=e.contextTypes,s=(r=r!=null)?Ei(t,i):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function vm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function Qc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},cd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xt(s):(s=ft(e)?Pr:tt.current,i.context=Ei(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ol.enqueueReplaceState(i,i.state,null),Za(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ai(t,e){try{var n="",r=e;do n+=FE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function rc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var h1=typeof WeakMap=="function"?WeakMap:Map;function U_(t,e,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){il||(il=!0,oh=r),Yc(t,e)},n}function j_(t,e,n){n=mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yc(t,e),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new h1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=A1.bind(null,t,e,n),e.then(t,t))}function Em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mn(-1,1),e.tag=2,Qn(n,e,1))),n.lanes|=1),t)}var d1=kn.ReactCurrentOwner,ht=!1;function st(t,e,n,r){e.child=t===null?m_(e,null,n,r):Ii(e,t.child,n,r)}function Im(t,e,n,r,i){n=n.render;var s=e.ref;return fi(e,i),r=md(t,e,n,r,s,i),n=gd(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(me&&n&&rd(e),e.flags|=1,st(t,e,r,i),e.child)}function Sm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,z_(t,e,s,r,i)):(t=Ca(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(o,r)&&t.ref===e.ref)return wn(t,e,i)}return e.flags|=1,t=Jn(s,r),t.ref=e.ref,t.return=e,e.child=t}function z_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Hs(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,wn(t,e,i)}return Xc(t,e,n,r,i)}function B_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(li,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(li,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(li,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(li,yt),yt|=r;return st(t,e,i,n),e.child}function $_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xc(t,e,n,r,i){var s=ft(n)?Pr:tt.current;return s=Ei(e,s),fi(e,i),n=md(t,e,n,r,s,i),r=gd(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(me&&r&&rd(e),e.flags|=1,st(t,e,n,i),e.child)}function Am(t,e,n,r,i){if(ft(n)){var s=!0;Ga(e)}else s=!1;if(fi(e,i),e.stateNode===null)Aa(t,e),F_(e,n,r),Qc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=xt(h):(h=ft(n)?Pr:tt.current,h=Ei(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&vm(e,o,r,h),Ln=!1;var g=e.memoizedState;o.state=g,Za(e,r,o,i),u=e.memoizedState,l!==r||g!==u||dt.current||Ln?(typeof f=="function"&&(Gc(e,n,f,r),u=e.memoizedState),(l=Ln||_m(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,y_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ot(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=xt(u):(u=ft(n)?Pr:tt.current,u=Ei(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&vm(e,o,r,u),Ln=!1,g=e.memoizedState,o.state=g,Za(e,r,o,i);var R=e.memoizedState;l!==m||g!==R||dt.current||Ln?(typeof A=="function"&&(Gc(e,n,A,r),R=e.memoizedState),(h=Ln||_m(e,n,h,r,g,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Jc(t,e,n,r,s,i)}function Jc(t,e,n,r,i,s){$_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&cm(e,n,!1),wn(t,e,s);r=e.stateNode,d1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ii(e,t.child,null,s),e.child=Ii(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&cm(e,n,!0),e.child}function q_(t){var e=t.stateNode;e.pendingContext?um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&um(t,e.context,!1),hd(t,e.containerInfo)}function km(t,e,n,r,i){return Ti(),sd(i),e.flags|=256,st(t,e,n,r),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function H_(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return Wc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bl(o,r,0,null),t=Rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=eh(n),e.memoizedState=Zc,t):vd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return f1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Jn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Jn(l,s):(s=Rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zc,r}return s=t.child,t=s.sibling,r=Jn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vd(t,e){return e=bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function la(t,e,n,r){return r!==null&&sd(r),Ii(e,t.child,null,n),t=vd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function f1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=rc(Error(b(422))),la(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bl({mode:"visible",children:r.children},i,0,null),s=Rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ii(e,t.child,null,o),e.child.memoizedState=eh(o),e.memoizedState=Zc,s);if(!(e.mode&1))return la(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=rc(s,r,void 0),la(t,e,o,r)}if(l=(o&t.childLanes)!==0,ht||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vn(t,i),Ft(r,t,i,-1))}return Ad(),r=rc(Error(b(421))),la(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=k1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=Gn(i.nextSibling),wt=e,me=!0,Mt=null,t!==null&&(At[kt++]=cn,At[kt++]=hn,At[kt++]=xr,cn=t.id,hn=t.overflow,xr=e),e=vd(e,r.children),e.flags|=4096,e)}function Rm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kc(t.return,e,n)}function ic(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function W_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,n,e);else if(t.tag===19)Rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&el(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ic(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&el(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ic(e,!0,n,null,s);break;case"together":ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Aa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function p1(t,e,n){switch(e.tag){case 3:q_(e),Ti();break;case 5:__(e);break;case 1:ft(e.type)&&Ga(e);break;case 4:hd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Xa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?H_(t,e,n):(ce(ye,ye.current&1),t=wn(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return W_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,B_(t,e,n)}return wn(t,e,n)}var K_,th,G_,Q_;K_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};th=function(){};G_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ir(Kt.current);var s=null;switch(n){case"input":i=Ic(t,i),r=Ic(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=kc(t,i),r=kc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wa)}Cc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Fs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Fs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Q_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ds(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function m1(t,e,n){var r=e.pendingProps;switch(id(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return ft(e.type)&&Ka(),Qe(e),null;case 3:return r=e.stateNode,Si(),pe(dt),pe(tt),fd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(uh(Mt),Mt=null))),th(t,e),Qe(e),null;case 5:dd(e);var i=Ir(Ys.current);if(n=e.type,t!==null&&e.stateNode!=null)G_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Qe(e),null}if(t=Ir(Kt.current),oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qt]=e,r[Gs]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<vs.length;i++)de(vs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Mp(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Fp(r,s),de("invalid",r)}Cc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,l,t),i=["children",""+l]):Fs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Xo(r),bp(r,s,!0);break;case"textarea":Xo(r),Up(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Iy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qt]=e,t[Gs]=r,K_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<vs.length;i++)de(vs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Mp(t,r),i=Ic(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),de("invalid",t);break;case"textarea":Fp(t,r),i=kc(t,r),de("invalid",t);break;default:i=r}Cc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?ky(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Sy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Us(t,u):typeof u=="number"&&Us(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&$h(t,s,u,o))}switch(n){case"input":Xo(t),bp(t,r,!1);break;case"textarea":Xo(t),Up(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ui(t,!!r.multiple,s,!1):r.defaultValue!=null&&ui(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)Q_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Ir(Ys.current),Ir(Kt.current),oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[qt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=e,e.stateNode=r}return Qe(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&_t!==null&&e.mode&1&&!(e.flags&128))f_(),Ti(),e.flags|=98560,s=!1;else if(s=oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[qt]=e}else Ti(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Mt!==null&&(uh(Mt),Mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Ne===0&&(Ne=3):Ad())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return Si(),th(t,e),t===null&&Ws(e.stateNode.containerInfo),Qe(e),null;case 10:return ld(e.type._context),Qe(e),null;case 17:return ft(e.type)&&Ka(),Qe(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ds(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=el(t),o!==null){for(e.flags|=128,ds(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>ki&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304)}else{if(!r)if(t=el(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Qe(e),null}else 2*ke()-s.renderingStartTime>ki&&n!==1073741824&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return Sd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function g1(t,e){switch(id(e),e.tag){case 1:return ft(e.type)&&Ka(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Si(),pe(dt),pe(tt),fd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dd(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Ti()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Si(),null;case 10:return ld(e.type._context),null;case 22:case 23:return Sd(),null;case 24:return null;default:return null}}var ua=!1,Je=!1,y1=typeof WeakSet=="function"?WeakSet:Set,$=null;function ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function nh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var Cm=!1;function _1(t,e){if(Uc=$a,t=e_(),nd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,g=null;t:for(;;){for(var A;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)g=m,m=A;for(;;){if(m===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jc={focusedElem:t,selectionRange:n},$a=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var x=R.memoizedProps,O=R.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?x:Ot(e.type,x),O);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(V){Ie(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return R=Cm,Cm=!1,R}function xs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nh(e,n,s)}i=i.next}while(i!==r)}}function Ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Y_(t){var e=t.alternate;e!==null&&(t.alternate=null,Y_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qt],delete e[Gs],delete e[$c],delete e[e1],delete e[t1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function X_(t){return t.tag===5||t.tag===3||t.tag===4}function Pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wa));else if(r!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}var Fe=null,Lt=!1;function Dn(t,e,n){for(n=n.child;n!==null;)J_(t,e,n),n=n.sibling}function J_(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:Je||ai(n,e);case 6:var r=Fe,i=Lt;Fe=null,Dn(t,e,n),Fe=r,Lt=i,Fe!==null&&(Lt?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Lt?(t=Fe,n=n.stateNode,t.nodeType===8?Xu(t.parentNode,n):t.nodeType===1&&Xu(t,n),$s(t)):Xu(Fe,n.stateNode));break;case 4:r=Fe,i=Lt,Fe=n.stateNode.containerInfo,Lt=!0,Dn(t,e,n),Fe=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nh(n,e,o),i=i.next}while(i!==r)}Dn(t,e,n);break;case 1:if(!Je&&(ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Dn(t,e,n);break;case 21:Dn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Dn(t,e,n),Je=r):Dn(t,e,n);break;default:Dn(t,e,n)}}function xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new y1),e.forEach(function(r){var i=R1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,Lt=!1;break e;case 3:Fe=l.stateNode.containerInfo,Lt=!0;break e;case 4:Fe=l.stateNode.containerInfo,Lt=!0;break e}l=l.return}if(Fe===null)throw Error(b(160));J_(s,o,i),Fe=null,Lt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ie(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Z_(e,t),e=e.sibling}function Z_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Bt(t),r&4){try{xs(3,t,t.return),Ll(3,t)}catch(x){Ie(t,t.return,x)}try{xs(5,t,t.return)}catch(x){Ie(t,t.return,x)}}break;case 1:Vt(e,t),Bt(t),r&512&&n!==null&&ai(n,n.return);break;case 5:if(Vt(e,t),Bt(t),r&512&&n!==null&&ai(n,n.return),t.flags&32){var i=t.stateNode;try{Us(i,"")}catch(x){Ie(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ey(i,s),Pc(l,o);var h=Pc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?ky(i,m):f==="dangerouslySetInnerHTML"?Sy(i,m):f==="children"?Us(i,m):$h(i,f,m,h)}switch(l){case"input":Sc(i,s);break;case"textarea":Ty(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?ui(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?ui(i,!!s.multiple,s.defaultValue,!0):ui(i,!!s.multiple,s.multiple?[]:"",!1))}i[Gs]=s}catch(x){Ie(t,t.return,x)}}break;case 6:if(Vt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Ie(t,t.return,x)}}break;case 3:if(Vt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$s(e.containerInfo)}catch(x){Ie(t,t.return,x)}break;case 4:Vt(e,t),Bt(t);break;case 13:Vt(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Td=ke())),r&4&&xm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||f,Vt(e,t),Je=h):Vt(e,t),Bt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(m=$=f;$!==null;){switch(g=$,A=g.child,g.tag){case 0:case 11:case 14:case 15:xs(4,g,g.return);break;case 1:ai(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(x){Ie(r,n,x)}}break;case 5:ai(g,g.return);break;case 22:if(g.memoizedState!==null){Dm(m);continue}}A!==null?(A.return=g,$=A):Dm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ay("display",o))}catch(x){Ie(t,t.return,x)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(x){Ie(t,t.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Vt(e,t),Bt(t),r&4&&xm(t);break;case 21:break;default:Vt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(X_(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Us(i,""),r.flags&=-33);var s=Pm(t);sh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Pm(t);ih(t,l,o);break;default:throw Error(b(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function v1(t,e,n){$=t,ev(t)}function ev(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ua;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=ua;var h=Je;if(ua=o,(Je=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Vm(i):u!==null?(u.return=o,$=u):Vm(i);for(;s!==null;)$=s,ev(s),s=s.sibling;$=i,ua=l,Je=h}Nm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Nm(t)}}function Nm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Ll(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ot(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&$s(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Je||e.flags&512&&rh(e)}catch(g){Ie(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Dm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Vm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ll(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{rh(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{rh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var w1=Math.ceil,rl=kn.ReactCurrentDispatcher,wd=kn.ReactCurrentOwner,Ct=kn.ReactCurrentBatchConfig,ne=0,Le=null,Ce=null,ze=0,yt=0,li=cr(0),Ne=0,eo=null,Dr=0,Ml=0,Ed=0,Ns=null,ut=null,Td=0,ki=1/0,an=null,il=!1,oh=null,Yn=null,ca=!1,$n=null,sl=0,Ds=0,ah=null,ka=-1,Ra=0;function ot(){return ne&6?ke():ka!==-1?ka:ka=ke()}function Xn(t){return t.mode&1?ne&2&&ze!==0?ze&-ze:r1.transition!==null?(Ra===0&&(Ra=Fy()),Ra):(t=se,t!==0||(t=window.event,t=t===void 0?16:Hy(t.type)),t):1}function Ft(t,e,n,r){if(50<Ds)throw Ds=0,ah=null,Error(b(185));fo(t,n,r),(!(ne&2)||t!==Le)&&(t===Le&&(!(ne&2)&&(Ml|=n),Ne===4&&bn(t,ze)),pt(t,r),n===1&&ne===0&&!(e.mode&1)&&(ki=ke()+500,Dl&&hr()))}function pt(t,e){var n=t.callbackNode;rT(t,e);var r=Ba(t,t===Le?ze:0);if(r===0)n!==null&&Bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bp(n),e===1)t.tag===0?n1(Om.bind(null,t)):c_(Om.bind(null,t)),JT(function(){!(ne&6)&&hr()}),n=null;else{switch(Uy(r)){case 1:n=Gh;break;case 4:n=My;break;case 16:n=za;break;case 536870912:n=by;break;default:n=za}n=lv(n,tv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tv(t,e){if(ka=-1,Ra=0,ne&6)throw Error(b(327));var n=t.callbackNode;if(pi()&&t.callbackNode!==n)return null;var r=Ba(t,t===Le?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ol(t,r);else{e=r;var i=ne;ne|=2;var s=rv();(Le!==t||ze!==e)&&(an=null,ki=ke()+500,kr(t,e));do try{I1();break}catch(l){nv(t,l)}while(!0);ad(),rl.current=s,ne=i,Ce!==null?e=0:(Le=null,ze=0,e=Ne)}if(e!==0){if(e===2&&(i=Oc(t),i!==0&&(r=i,e=lh(t,i))),e===1)throw n=eo,kr(t,0),bn(t,r),pt(t,ke()),n;if(e===6)bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!E1(i)&&(e=ol(t,r),e===2&&(s=Oc(t),s!==0&&(r=s,e=lh(t,s))),e===1))throw n=eo,kr(t,0),bn(t,r),pt(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:vr(t,ut,an);break;case 3:if(bn(t,r),(r&130023424)===r&&(e=Td+500-ke(),10<e)){if(Ba(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bc(vr.bind(null,t,ut,an),e);break}vr(t,ut,an);break;case 4:if(bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*w1(r/1960))-r,10<r){t.timeoutHandle=Bc(vr.bind(null,t,ut,an),r);break}vr(t,ut,an);break;case 5:vr(t,ut,an);break;default:throw Error(b(329))}}}return pt(t,ke()),t.callbackNode===n?tv.bind(null,t):null}function lh(t,e){var n=Ns;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=ol(t,e),t!==2&&(e=ut,ut=n,e!==null&&uh(e)),t}function uh(t){ut===null?ut=t:ut.push.apply(ut,t)}function E1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bn(t,e){for(e&=~Ed,e&=~Ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bt(e),r=1<<n;t[n]=-1,e&=~r}}function Om(t){if(ne&6)throw Error(b(327));pi();var e=Ba(t,0);if(!(e&1))return pt(t,ke()),null;var n=ol(t,e);if(t.tag!==0&&n===2){var r=Oc(t);r!==0&&(e=r,n=lh(t,r))}if(n===1)throw n=eo,kr(t,0),bn(t,e),pt(t,ke()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,ut,an),pt(t,ke()),null}function Id(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(ki=ke()+500,Dl&&hr())}}function Vr(t){$n!==null&&$n.tag===0&&!(ne&6)&&pi();var e=ne;ne|=1;var n=Ct.transition,r=se;try{if(Ct.transition=null,se=1,t)return t()}finally{se=r,Ct.transition=n,ne=e,!(ne&6)&&hr()}}function Sd(){yt=li.current,pe(li)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,XT(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(id(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ka();break;case 3:Si(),pe(dt),pe(tt),fd();break;case 5:dd(r);break;case 4:Si();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:ld(r.type._context);break;case 22:case 23:Sd()}n=n.return}if(Le=t,Ce=t=Jn(t.current,null),ze=yt=e,Ne=0,eo=null,Ed=Ml=Dr=0,ut=Ns=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Tr=null}return t}function nv(t,e){do{var n=Ce;try{if(ad(),Ia.current=nl,tl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tl=!1}if(Nr=0,Oe=xe=ve=null,Ps=!1,Xs=0,wd.current=null,n===null||n.return===null){Ne=1,eo=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Em(o);if(A!==null){A.flags&=-257,Tm(A,o,l,s,e),A.mode&1&&wm(s,h,e),e=A,u=h;var R=e.updateQueue;if(R===null){var x=new Set;x.add(u),e.updateQueue=x}else R.add(u);break e}else{if(!(e&1)){wm(s,h,e),Ad();break e}u=Error(b(426))}}else if(me&&l.mode&1){var O=Em(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Tm(O,o,l,s,e),sd(Ai(u,l));break e}}s=u=Ai(u,l),Ne!==4&&(Ne=2),Ns===null?Ns=[s]:Ns.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=U_(s,u,e);pm(s,E);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Yn===null||!Yn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=j_(s,l,e);pm(s,V);break e}}s=s.return}while(s!==null)}sv(n)}catch(j){e=j,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function rv(){var t=rl.current;return rl.current=nl,t===null?nl:t}function Ad(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Le===null||!(Dr&268435455)&&!(Ml&268435455)||bn(Le,ze)}function ol(t,e){var n=ne;ne|=2;var r=rv();(Le!==t||ze!==e)&&(an=null,kr(t,e));do try{T1();break}catch(i){nv(t,i)}while(!0);if(ad(),ne=n,rl.current=r,Ce!==null)throw Error(b(261));return Le=null,ze=0,Ne}function T1(){for(;Ce!==null;)iv(Ce)}function I1(){for(;Ce!==null&&!GE();)iv(Ce)}function iv(t){var e=av(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?sv(t):Ce=e,wd.current=null}function sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=g1(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Ce=null;return}}else if(n=m1(n,e,yt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Ne===0&&(Ne=5)}function vr(t,e,n){var r=se,i=Ct.transition;try{Ct.transition=null,se=1,S1(t,e,n,r)}finally{Ct.transition=i,se=r}return null}function S1(t,e,n,r){do pi();while($n!==null);if(ne&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iT(t,s),t===Le&&(Ce=Le=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ca||(ca=!0,lv(za,function(){return pi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var o=se;se=1;var l=ne;ne|=4,wd.current=null,_1(t,n),Z_(n,t),qT(jc),$a=!!Uc,jc=Uc=null,t.current=n,v1(n),QE(),ne=l,se=o,Ct.transition=s}else t.current=n;if(ca&&(ca=!1,$n=t,sl=i),s=t.pendingLanes,s===0&&(Yn=null),JE(n.stateNode),pt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(il)throw il=!1,t=oh,oh=null,t;return sl&1&&t.tag!==0&&pi(),s=t.pendingLanes,s&1?t===ah?Ds++:(Ds=0,ah=t):Ds=0,hr(),null}function pi(){if($n!==null){var t=Uy(sl),e=Ct.transition,n=se;try{if(Ct.transition=null,se=16>t?16:t,$n===null)var r=!1;else{if(t=$n,$n=null,sl=0,ne&6)throw Error(b(331));var i=ne;for(ne|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:xs(8,f,s)}var m=f.child;if(m!==null)m.return=f,$=m;else for(;$!==null;){f=$;var g=f.sibling,A=f.return;if(Y_(f),f===h){$=null;break}if(g!==null){g.return=A,$=g;break}$=A}}}var R=s.alternate;if(R!==null){var x=R.child;if(x!==null){R.child=null;do{var O=x.sibling;x.sibling=null,x=O}while(x!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xs(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,$=E;break e}$=s.return}}var v=t.current;for($=v;$!==null;){o=$;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,$=S;else e:for(o=v;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ll(9,l)}}catch(j){Ie(l,l.return,j)}if(l===o){$=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,$=V;break e}$=l.return}}if(ne=i,hr(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Rl,t)}catch{}r=!0}return r}finally{se=n,Ct.transition=e}}return!1}function Lm(t,e,n){e=Ai(n,e),e=U_(t,e,1),t=Qn(t,e,1),e=ot(),t!==null&&(fo(t,1,e),pt(t,e))}function Ie(t,e,n){if(t.tag===3)Lm(t,t,n);else for(;e!==null;){if(e.tag===3){Lm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=Ai(n,t),t=j_(e,t,1),e=Qn(e,t,1),t=ot(),e!==null&&(fo(e,1,t),pt(e,t));break}}e=e.return}}function A1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(ze&n)===n&&(Ne===4||Ne===3&&(ze&130023424)===ze&&500>ke()-Td?kr(t,0):Ed|=n),pt(t,e)}function ov(t,e){e===0&&(t.mode&1?(e=ea,ea<<=1,!(ea&130023424)&&(ea=4194304)):e=1);var n=ot();t=vn(t,e),t!==null&&(fo(t,e,n),pt(t,n))}function k1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ov(t,n)}function R1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),ov(t,n)}var av;av=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,p1(t,e,n);ht=!!(t.flags&131072)}else ht=!1,me&&e.flags&1048576&&h_(e,Ya,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Aa(t,e),t=e.pendingProps;var i=Ei(e,tt.current);fi(e,n),i=md(null,e,r,t,i,n);var s=gd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,Ga(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cd(e),i.updater=Ol,e.stateNode=i,i._reactInternals=e,Qc(e,r,t,n),e=Jc(null,e,r,!0,s,n)):(e.tag=0,me&&s&&rd(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Aa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=P1(r),t=Ot(r,t),i){case 0:e=Xc(null,e,r,t,n);break e;case 1:e=Am(null,e,r,t,n);break e;case 11:e=Im(null,e,r,t,n);break e;case 14:e=Sm(null,e,r,Ot(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Xc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Am(t,e,r,i,n);case 3:e:{if(q_(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,y_(t,e),Za(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ai(Error(b(423)),e),e=km(t,e,r,n,i);break e}else if(r!==i){i=Ai(Error(b(424)),e),e=km(t,e,r,n,i);break e}else for(_t=Gn(e.stateNode.containerInfo.firstChild),wt=e,me=!0,Mt=null,n=m_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ti(),r===i){e=wn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return __(e),t===null&&Wc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zc(r,i)?o=null:s!==null&&zc(r,s)&&(e.flags|=32),$_(t,e),st(t,e,o,n),e.child;case 6:return t===null&&Wc(e),null;case 13:return H_(t,e,n);case 4:return hd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ii(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Im(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Xa,r._currentValue),r._currentValue=o,s!==null)if(jt(s.value,o)){if(s.children===i.children&&!dt.current){e=wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=mn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,fi(e,n),i=xt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Ot(r,e.pendingProps),i=Ot(r.type,i),Sm(t,e,r,i,n);case 15:return z_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Aa(t,e),e.tag=1,ft(r)?(t=!0,Ga(e)):t=!1,fi(e,n),F_(e,r,i),Qc(e,r,i,n),Jc(null,e,r,!0,t,n);case 19:return W_(t,e,n);case 22:return B_(t,e,n)}throw Error(b(156,e.tag))};function lv(t,e){return Ly(t,e)}function C1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new C1(t,e,n,r)}function kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function P1(t){if(typeof t=="function")return kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hh)return 11;if(t===Wh)return 14}return 2}function Jn(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ca(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jr:return Rr(n.children,i,s,e);case qh:o=8,i|=8;break;case vc:return t=Rt(12,n,e,i|2),t.elementType=vc,t.lanes=s,t;case wc:return t=Rt(13,n,e,i),t.elementType=wc,t.lanes=s,t;case Ec:return t=Rt(19,n,e,i),t.elementType=Ec,t.lanes=s,t;case _y:return bl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gy:o=10;break e;case yy:o=9;break e;case Hh:o=11;break e;case Wh:o=14;break e;case On:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rr(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function bl(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=_y,t.lanes=n,t.stateNode={isHidden:!1},t}function sc(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function oc(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function x1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ju(0),this.expirationTimes=ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rd(t,e,n,r,i,s,o,l,u){return t=new x1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cd(s),t}function N1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function uv(t){if(!t)return sr;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(ft(n))return u_(t,n,e)}return e}function cv(t,e,n,r,i,s,o,l,u){return t=Rd(n,r,!0,t,i,s,o,l,u),t.context=uv(null),n=t.current,r=ot(),i=Xn(n),s=mn(r,i),s.callback=e??null,Qn(n,s,i),t.current.lanes=i,fo(t,i,r),pt(t,r),t}function Fl(t,e,n,r){var i=e.current,s=ot(),o=Xn(i);return n=uv(n),e.context===null?e.context=n:e.pendingContext=n,e=mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qn(i,e,o),t!==null&&(Ft(t,i,o,s),Ta(t,i,o)),o}function al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cd(t,e){Mm(t,e),(t=t.alternate)&&Mm(t,e)}function D1(){return null}var hv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pd(t){this._internalRoot=t}Ul.prototype.render=Pd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Fl(t,e,null,null)};Ul.prototype.unmount=Pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Fl(null,t,null,null)}),e[_n]=null}};function Ul(t){this._internalRoot=t}Ul.prototype.unstable_scheduleHydration=function(t){if(t){var e=By();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mn.length&&e!==0&&e<Mn[n].priority;n++);Mn.splice(n,0,t),n===0&&qy(t)}};function xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bm(){}function V1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=al(o);s.call(h)}}var o=cv(e,r,t,0,null,!1,!1,"",bm);return t._reactRootContainer=o,t[_n]=o.current,Ws(t.nodeType===8?t.parentNode:t),Vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=al(u);l.call(h)}}var u=Rd(t,0,!1,null,null,!1,!1,"",bm);return t._reactRootContainer=u,t[_n]=u.current,Ws(t.nodeType===8?t.parentNode:t),Vr(function(){Fl(e,u,n,r)}),u}function zl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=al(o);l.call(u)}}Fl(e,o,t,i)}else o=V1(n,e,t,i,r);return al(o)}jy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_s(e.pendingLanes);n!==0&&(Qh(e,n|1),pt(e,ke()),!(ne&6)&&(ki=ke()+500,hr()))}break;case 13:Vr(function(){var r=vn(t,1);if(r!==null){var i=ot();Ft(r,t,1,i)}}),Cd(t,1)}};Yh=function(t){if(t.tag===13){var e=vn(t,134217728);if(e!==null){var n=ot();Ft(e,t,134217728,n)}Cd(t,134217728)}};zy=function(t){if(t.tag===13){var e=Xn(t),n=vn(t,e);if(n!==null){var r=ot();Ft(n,t,e,r)}Cd(t,e)}};By=function(){return se};$y=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};Nc=function(t,e,n){switch(e){case"input":if(Sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nl(r);if(!i)throw Error(b(90));wy(r),Sc(r,i)}}}break;case"textarea":Ty(t,n);break;case"select":e=n.value,e!=null&&ui(t,!!n.multiple,e,!1)}};Py=Id;xy=Vr;var O1={usingClientEntryPoint:!1,Events:[mo,ni,Nl,Ry,Cy,Id]},fs={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L1={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vy(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||D1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{Rl=ha.inject(L1),Wt=ha}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O1;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xd(e))throw Error(b(200));return N1(t,e,null,n)};Tt.createRoot=function(t,e){if(!xd(t))throw Error(b(299));var n=!1,r="",i=hv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rd(t,1,!1,null,null,n,!1,r,i),t[_n]=e.current,Ws(t.nodeType===8?t.parentNode:t),new Pd(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=Vy(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Vr(t)};Tt.hydrate=function(t,e,n){if(!jl(e))throw Error(b(200));return zl(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!xd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cv(e,null,t,1,n??null,i,!1,s,o),t[_n]=e.current,Ws(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ul(e)};Tt.render=function(t,e,n){if(!jl(e))throw Error(b(200));return zl(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!jl(t))throw Error(b(40));return t._reactRootContainer?(Vr(function(){zl(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};Tt.unstable_batchedUpdates=Id;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!jl(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return zl(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dv)}catch(t){console.error(t)}}dv(),dy.exports=Tt;var M1=dy.exports,fv,Fm=M1;fv=Fm.createRoot,Fm.hydrateRoot;var Um={};/**
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
 */const pv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},b1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[f],n[m],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):b1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new F1;const g=s<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const R=h<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class F1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U1=function(t){const e=pv(t);return mv.encodeByteArray(e,!0)},ll=function(t){return U1(t).replace(/\./g,"")},gv=function(t){try{return mv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function j1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const z1=()=>j1().__FIREBASE_DEFAULTS__,B1=()=>{if(typeof process>"u"||typeof Um>"u")return;const t=Um.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gv(t[1]);return e&&JSON.parse(e)},Bl=()=>{try{return z1()||B1()||$1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yv=t=>{var e,n;return(n=(e=Bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},q1=t=>{const e=yv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_v=()=>{var t;return(t=Bl())===null||t===void 0?void 0:t.config},vv=t=>{var e;return(e=Bl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class H1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function W1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ll(JSON.stringify(n)),ll(JSON.stringify(o)),""].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function G1(){var t;const e=(t=Bl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Q1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Y1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function X1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J1(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Z1(){return!G1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eI(){try{return typeof indexedDB=="object"}catch{return!1}}function tI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const nI="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nI,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function rI(t,e){return t.replace(iI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iI=/\{\$([^}]+)}/g;function sI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ul(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(jm(s)&&jm(o)){if(!ul(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jm(t){return t!==null&&typeof t=="object"}/**
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
 */function _o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oI(t,e){const n=new aI(t,e);return n.subscribe.bind(n)}class aI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ac),i.error===void 0&&(i.error=ac),i.complete===void 0&&(i.complete=ac);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ac(){}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class Or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wr="[DEFAULT]";/**
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
 */class uI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new H1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hI(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cI(t){return t===wr?void 0:t}function hI(t){return t.instantiationMode==="EAGER"}/**
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
 */class dI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const fI={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},pI=ee.INFO,mI={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},gI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nd{constructor(e){this.name=e,this._logLevel=pI,this._logHandler=gI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const yI=(t,e)=>e.some(n=>t instanceof n);let zm,Bm;function _I(){return zm||(zm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vI(){return Bm||(Bm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wv=new WeakMap,ch=new WeakMap,Ev=new WeakMap,lc=new WeakMap,Dd=new WeakMap;function wI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Zn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wv.set(n,t)}).catch(()=>{}),Dd.set(e,t),e}function EI(t){if(ch.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ch.set(t,e)}let hh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ev.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TI(t){hh=t(hh)}function II(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uc(this),e,...n);return Ev.set(r,e.sort?e.sort():[e]),Zn(r)}:vI().includes(t)?function(...e){return t.apply(uc(this),e),Zn(wv.get(this))}:function(...e){return Zn(t.apply(uc(this),e))}}function SI(t){return typeof t=="function"?II(t):(t instanceof IDBTransaction&&EI(t),yI(t,_I())?new Proxy(t,hh):t)}function Zn(t){if(t instanceof IDBRequest)return wI(t);if(lc.has(t))return lc.get(t);const e=SI(t);return e!==t&&(lc.set(t,e),Dd.set(e,t)),e}const uc=t=>Dd.get(t);function AI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Zn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Zn(o.result),u.oldVersion,u.newVersion,Zn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const kI=["get","getKey","getAll","getAllKeys","count"],RI=["put","add","delete","clear"],cc=new Map;function $m(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=RI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kI.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return cc.set(e,s),s}TI(t=>({...t,get:(e,n,r)=>$m(e,n)||t.get(e,n,r),has:(e,n)=>!!$m(e,n)||t.has(e,n)}));/**
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
 */class CI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dh="@firebase/app",qm="0.10.13";/**
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
 */const En=new Nd("@firebase/app"),xI="@firebase/app-compat",NI="@firebase/analytics-compat",DI="@firebase/analytics",VI="@firebase/app-check-compat",OI="@firebase/app-check",LI="@firebase/auth",MI="@firebase/auth-compat",bI="@firebase/database",FI="@firebase/data-connect",UI="@firebase/database-compat",jI="@firebase/functions",zI="@firebase/functions-compat",BI="@firebase/installations",$I="@firebase/installations-compat",qI="@firebase/messaging",HI="@firebase/messaging-compat",WI="@firebase/performance",KI="@firebase/performance-compat",GI="@firebase/remote-config",QI="@firebase/remote-config-compat",YI="@firebase/storage",XI="@firebase/storage-compat",JI="@firebase/firestore",ZI="@firebase/vertexai-preview",eS="@firebase/firestore-compat",tS="firebase",nS="10.14.1";/**
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
 */const fh="[DEFAULT]",rS={[dh]:"fire-core",[xI]:"fire-core-compat",[DI]:"fire-analytics",[NI]:"fire-analytics-compat",[OI]:"fire-app-check",[VI]:"fire-app-check-compat",[LI]:"fire-auth",[MI]:"fire-auth-compat",[bI]:"fire-rtdb",[FI]:"fire-data-connect",[UI]:"fire-rtdb-compat",[jI]:"fire-fn",[zI]:"fire-fn-compat",[BI]:"fire-iid",[$I]:"fire-iid-compat",[qI]:"fire-fcm",[HI]:"fire-fcm-compat",[WI]:"fire-perf",[KI]:"fire-perf-compat",[GI]:"fire-rc",[QI]:"fire-rc-compat",[YI]:"fire-gcs",[XI]:"fire-gcs-compat",[JI]:"fire-fst",[eS]:"fire-fst-compat",[ZI]:"fire-vertex","fire-js":"fire-js",[tS]:"fire-js-all"};/**
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
 */const cl=new Map,iS=new Map,ph=new Map;function Hm(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(ph.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;ph.set(e,t);for(const n of cl.values())Hm(n,t);for(const n of iS.values())Hm(n,t);return!0}function Vd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ht(t){return t.settings!==void 0}/**
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
 */const sS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new yo("app","Firebase",sS);/**
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
 */class oS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
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
 */const Ui=nS;function Tv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw er.create("bad-app-name",{appName:String(i)});if(n||(n=_v()),!n)throw er.create("no-options");const s=cl.get(i);if(s){if(ul(n,s.options)&&ul(r,s.config))return s;throw er.create("duplicate-app",{appName:i})}const o=new dI(i);for(const u of ph.values())o.addComponent(u);const l=new oS(n,r,o);return cl.set(i,l),l}function Iv(t=fh){const e=cl.get(t);if(!e&&t===fh&&_v())return Tv();if(!e)throw er.create("no-app",{appName:t});return e}function tr(t,e,n){var r;let i=(r=rS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(l.join(" "));return}Ri(new Or(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const aS="firebase-heartbeat-database",lS=1,to="firebase-heartbeat-store";let hc=null;function Sv(){return hc||(hc=AI(aS,lS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(to)}catch(n){console.warn(n)}}}}).catch(t=>{throw er.create("idb-open",{originalErrorMessage:t.message})})),hc}async function uS(t){try{const n=(await Sv()).transaction(to),r=await n.objectStore(to).get(Av(t));return await n.done,r}catch(e){if(e instanceof Rn)En.warn(e.message);else{const n=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function Wm(t,e){try{const r=(await Sv()).transaction(to,"readwrite");await r.objectStore(to).put(e,Av(t)),await r.done}catch(n){if(n instanceof Rn)En.warn(n.message);else{const r=er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(r.message)}}}function Av(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cS=1024,hS=30*24*60*60*1e3;class dS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Km();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=hS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Km(),{heartbeatsToSend:r,unsentEntries:i}=fS(this._heartbeatsCache.heartbeats),s=ll(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return En.warn(n),""}}}function Km(){return new Date().toISOString().substring(0,10)}function fS(t,e=cS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eI()?tI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gm(t){return ll(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mS(t){Ri(new Or("platform-logger",e=>new CI(e),"PRIVATE")),Ri(new Or("heartbeat",e=>new dS(e),"PRIVATE")),tr(dh,qm,t),tr(dh,qm,"esm2017"),tr("fire-js","")}mS("");function Od(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gS=kv,Rv=new yo("auth","Firebase",kv());/**
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
 */const hl=new Nd("@firebase/auth");function yS(t,...e){hl.logLevel<=ee.WARN&&hl.warn(`Auth (${Ui}): ${t}`,...e)}function Pa(t,...e){hl.logLevel<=ee.ERROR&&hl.error(`Auth (${Ui}): ${t}`,...e)}/**
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
 */function Xt(t,...e){throw Md(t,...e)}function Ut(t,...e){return Md(t,...e)}function Ld(t,e,n){const r=Object.assign(Object.assign({},gS()),{[e]:n});return new yo("auth","Firebase",r).create(e,{appName:t.name})}function nr(t){return Ld(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cv(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xt(t,"argument-error"),Ld(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Md(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rv.create(t,...e)}function W(t,e,...n){if(!t)throw Md(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pa(e),new Error(e)}function Tn(t,e){t||dn(e)}/**
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
 */function mh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _S(){return Qm()==="http:"||Qm()==="https:"}function Qm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function vS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_S()||Y1()||"connection"in navigator)?navigator.onLine:!0}function wS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=K1()||X1()}get(){return vS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bd(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Pv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ES={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TS=new vo(3e4,6e4);function Fd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ji(t,e,n,r,i={}){return xv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=_o(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return Q1()||(h.referrerPolicy="no-referrer"),Pv.fetch()(Nv(t,t.config.apiHost,n,l),h)})}async function xv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ES),e);try{const i=new SS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw da(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw da(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw da(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ld(t,f,h);Xt(t,f)}}catch(i){if(i instanceof Rn)throw i;Xt(t,"network-request-failed",{message:String(i)})}}async function IS(t,e,n,r,i={}){const s=await ji(t,e,n,r,i);return"mfaPendingCredential"in s&&Xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Nv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bd(t.config,i):`${t.config.apiScheme}://${i}`}class SS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),TS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ut(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function AS(t,e){return ji(t,"POST","/v1/accounts:delete",e)}async function Dv(t,e){return ji(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kS(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=Ud(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vs(dc(i.auth_time)),issuedAtTime:Vs(dc(i.iat)),expirationTime:Vs(dc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dc(t){return Number(t)*1e3}function Ud(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pa("JWT malformed, contained fewer than 3 sections"),null;try{const i=gv(n);return i?JSON.parse(i):(Pa("Failed to decode base64 JWT payload"),null)}catch(i){return Pa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ym(t){const e=Ud(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function no(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&RS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class CS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await no(t,Dv(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Vv(s.providerUserInfo):[],l=xS(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new gh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function PS(t){const e=Me(t);await dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Vv(t){return t.map(e=>{var{providerId:n}=e,r=Od(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function NS(t,e){const n=await xv(t,{},async()=>{const r=_o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Nv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Pv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DS(t,e){return ji(t,"POST","/v2/accounts:revokeToken",Fd(t,e))}/**
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
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ym(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Ym(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await NS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function Vn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Od(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await no(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kS(this,e)}reload(){return PS(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await no(this,AS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:V,isAnonymous:j,providerData:U,stsTokenManager:w}=n;W(S&&w,e,"internal-error");const y=mi.fromJSON(this.name,w);W(typeof S=="string",e,"internal-error"),Vn(m,e.name),Vn(g,e.name),W(typeof V=="boolean",e,"internal-error"),W(typeof j=="boolean",e,"internal-error"),Vn(A,e.name),Vn(R,e.name),Vn(x,e.name),Vn(O,e.name),Vn(E,e.name),Vn(v,e.name);const _=new fn({uid:S,auth:e,email:g,emailVerified:V,displayName:m,isAnonymous:j,photoURL:R,phoneNumber:A,tenantId:x,stsTokenManager:y,createdAt:E,lastLoginAt:v});return U&&Array.isArray(U)&&(_.providerData=U.map(T=>Object.assign({},T))),O&&(_._redirectEventId=O),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new mi;i.updateFromServerResponse(n);const s=new fn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await dl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Vv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new mi;l.updateFromIdToken(r);const u=new fn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Xm=new Map;function pn(t){Tn(t instanceof Function,"Expected a class definition");let e=Xm.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xm.set(t,e),e)}/**
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
 */class Ov{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ov.type="NONE";const Jm=Ov;/**
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
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xa(this.userKey,i.apiKey,s),this.fullPersistenceKey=xa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gi(pn(Jm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||pn(Jm);const o=xa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=fn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new gi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new gi(s,e,r))}}/**
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
 */function Zm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jv(e))return"Blackberry";if(zv(e))return"Webos";if(Mv(e))return"Safari";if((e.includes("chrome/")||bv(e))&&!e.includes("edge/"))return"Chrome";if(Uv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lv(t=nt()){return/firefox\//i.test(t)}function Mv(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bv(t=nt()){return/crios\//i.test(t)}function Fv(t=nt()){return/iemobile/i.test(t)}function Uv(t=nt()){return/android/i.test(t)}function jv(t=nt()){return/blackberry/i.test(t)}function zv(t=nt()){return/webos/i.test(t)}function jd(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VS(t=nt()){var e;return jd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OS(){return J1()&&document.documentMode===10}function Bv(t=nt()){return jd(t)||Uv(t)||zv(t)||jv(t)||/windows phone/i.test(t)||Fv(t)}/**
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
 */function $v(t,e=[]){let n;switch(t){case"Browser":n=Zm(nt());break;case"Worker":n=`${Zm(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ui}/${r}`}/**
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
 */class LS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function MS(t,e={}){return ji(t,"GET","/v2/passwordPolicy",Fd(t,e))}/**
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
 */const bS=6;class FS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:bS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class US{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eg(this),this.idTokenSubscription=new eg(this),this.beforeStateQueue=new LS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dv(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(nr(this));const n=e?Me(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MS(this),n=new FS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$v(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zi(t){return Me(t)}class eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=oI(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jS(t){zd=t}function zS(t){return zd.loadJS(t)}function BS(){return zd.gapiScript}function $S(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function qS(t,e){const n=Vd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ul(s,e??{}))return i;Xt(i,"already-initialized")}return n.initialize({options:e})}function HS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WS(t,e,n){const r=zi(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=qv(e),{host:o,port:l}=KS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),GS()}function qv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KS(t){const e=qv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tg(o)}}}function tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Hv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
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
 */async function yi(t,e){return IS(t,"POST","/v1/accounts:signInWithIdp",Fd(t,e))}/**
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
 */const QS="http://localhost";class Lr extends Hv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Od(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yi(e,n)}buildRequest(){const e={requestUri:QS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_o(n)}return e}}/**
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
 */class $l{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wo extends $l{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends wo{constructor(){super("facebook.com")}static credential(e){return Lr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class un extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Lr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
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
 */class Un extends wo{constructor(){super("github.com")}static credential(e){return Lr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */class jn extends wo{constructor(){super("twitter.com")}static credential(e,n){return Lr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
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
 */class Ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await fn._fromIdTokenResponse(e,r,i),o=ng(r);return new Ci({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ng(r);return new Ci({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ng(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fl extends Rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fl(e,n,r,i)}}function Wv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fl._fromErrorAndOperation(t,s,e,r):s})}async function YS(t,e,n=!1){const r=await no(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ci._forOperation(t,"link",r)}/**
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
 */async function XS(t,e,n=!1){const{auth:r}=t;if(Ht(r.app))return Promise.reject(nr(r));const i="reauthenticate";try{const s=await no(t,Wv(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=Ud(s.idToken);W(o,r,"internal-error");const{sub:l}=o;return W(t.uid===l,r,"user-mismatch"),Ci._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),s}}/**
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
 */async function JS(t,e,n=!1){if(Ht(t.app))return Promise.reject(nr(t));const r="signIn",i=await Wv(t,r,e),s=await Ci._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function ZS(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function eA(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function tA(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function nA(t){return Me(t).signOut()}const pl="__sak";/**
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
 */class Kv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pl,"1"),this.storage.removeItem(pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rA=1e3,iA=10;class Gv extends Kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);OS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gv.type="LOCAL";const sA=Gv;/**
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
 */class Qv extends Kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qv.type="SESSION";const Yv=Qv;/**
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
 */function oA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await oA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ql.receivers=[];/**
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
 */function Bd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Bd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Gt(){return window}function lA(t){Gt().location.href=t}/**
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
 */function Xv(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function uA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hA(){return Xv()?self:null}/**
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
 */const Jv="firebaseLocalStorageDb",dA=1,ml="firebaseLocalStorage",Zv="fbase_key";class Eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hl(t,e){return t.transaction([ml],e?"readwrite":"readonly").objectStore(ml)}function fA(){const t=indexedDB.deleteDatabase(Jv);return new Eo(t).toPromise()}function yh(){const t=indexedDB.open(Jv,dA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ml,{keyPath:Zv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ml)?e(r):(r.close(),await fA(),e(await yh()))})})}async function rg(t,e,n){const r=Hl(t,!0).put({[Zv]:e,value:n});return new Eo(r).toPromise()}async function pA(t,e){const n=Hl(t,!1).get(e),r=await new Eo(n).toPromise();return r===void 0?null:r.value}function ig(t,e){const n=Hl(t,!0).delete(e);return new Eo(n).toPromise()}const mA=800,gA=3;class e0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ql._getInstance(hA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uA(),!this.activeServiceWorker)return;this.sender=new aA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yh();return await rg(e,pl,"1"),await ig(e,pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ig(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hl(i,!1).getAll();return new Eo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}e0.type="LOCAL";const yA=e0;new vo(3e4,6e4);/**
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
 */function $d(t,e){return e?pn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qd extends Hv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _A(t){return JS(t.auth,new qd(t),t.bypassAuthState)}function vA(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),XS(n,new qd(t),t.bypassAuthState)}async function wA(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),YS(n,new qd(t),t.bypassAuthState)}/**
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
 */class t0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _A;case"linkViaPopup":case"linkViaRedirect":return wA;case"reauthViaPopup":case"reauthViaRedirect":return vA;default:Xt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EA=new vo(2e3,1e4);async function TA(t,e,n){if(Ht(t.app))return Promise.reject(Ut(t,"operation-not-supported-in-this-environment"));const r=zi(t);Cv(t,e,$l);const i=$d(r,n);return new Sr(r,"signInViaPopup",e,i).executeNotNull()}class Sr extends t0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EA.get())};e()}}Sr.currentPopupAction=null;/**
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
 */const IA="pendingRedirect",Na=new Map;class SA extends t0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Na.get(this.auth._key());if(!e){try{const r=await AA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Na.set(this.auth._key(),e)}return this.bypassAuthState||Na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AA(t,e){const n=r0(e),r=n0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function kA(t,e){return n0(t)._set(r0(e),"true")}function RA(t,e){Na.set(t._key(),e)}function n0(t){return pn(t._redirectPersistence)}function r0(t){return xa(IA,t.config.apiKey,t.name)}/**
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
 */function CA(t,e,n){return PA(t,e,n)}async function PA(t,e,n){if(Ht(t.app))return Promise.reject(nr(t));const r=zi(t);Cv(t,e,$l),await r._initializationPromise;const i=$d(r,n);return await kA(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function xA(t,e){return await zi(t)._initializationPromise,i0(t,e,!1)}async function i0(t,e,n=!1){if(Ht(t.app))return Promise.reject(nr(t));const r=zi(t),i=$d(r,e),o=await new SA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const NA=10*60*1e3;class DA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!s0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NA&&this.cachedEventUids.clear(),this.cachedEventUids.has(sg(e))}saveEventToCache(e){this.cachedEventUids.add(sg(e)),this.lastProcessedEventTime=Date.now()}}function sg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function s0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return s0(t);default:return!1}}/**
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
 */async function OA(t,e={}){return ji(t,"GET","/v1/projects",e)}/**
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
 */const LA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MA=/^https?/;async function bA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OA(t);for(const n of e)try{if(FA(n))return}catch{}Xt(t,"unauthorized-domain")}function FA(t){const e=mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MA.test(n))return!1;if(LA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const UA=new vo(3e4,6e4);function og(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jA(t){return new Promise((e,n)=>{var r,i,s;function o(){og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{og(),n(Ut(t,"network-request-failed"))},timeout:UA.get()})}if(!((i=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gt().gapi)===null||s===void 0)&&s.load)o();else{const l=$S("iframefcb");return Gt()[l]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},zS(`${BS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Da=null,e})}let Da=null;function zA(t){return Da=Da||jA(t),Da}/**
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
 */const BA=new vo(5e3,15e3),$A="__/auth/iframe",qA="emulator/auth/iframe",HA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KA(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bd(e,qA):`https://${t.config.authDomain}/${$A}`,r={apiKey:e.apiKey,appName:t.name,v:Ui},i=WA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_o(r).slice(1)}`}async function GA(t){const e=await zA(t),n=Gt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:KA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),l=Gt().setTimeout(()=>{s(o)},BA.get());function u(){Gt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const QA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YA=500,XA=600,JA="_blank",ZA="http://localhost";class ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ek(t,e,n,r=YA,i=XA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},QA),{width:r.toString(),height:i.toString(),top:s,left:o}),h=nt().toLowerCase();n&&(l=bv(h)?JA:n),Lv(h)&&(e=e||ZA,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,R])=>`${g}${A}=${R},`,"");if(VS(h)&&l!=="_self")return tk(e||"",l),new ag(null);const m=window.open(e||"",l,f);W(m,t,"popup-blocked");try{m.focus()}catch{}return new ag(m)}function tk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nk="__/auth/handler",rk="emulator/auth/handler",ik=encodeURIComponent("fac");async function lg(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ui,eventId:i};if(e instanceof $l){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof wo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${ik}=${encodeURIComponent(u)}`:"";return`${sk(t)}?${_o(l).slice(1)}${h}`}function sk({config:t}){return t.emulator?bd(t,rk):`https://${t.authDomain}/${nk}`}/**
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
 */const fc="webStorageSupport";class ok{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yv,this._completeRedirectFn=i0,this._overrideRedirectResult=RA}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lg(e,n,r,mh(),i);return ek(e,o,Bd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lg(e,n,r,mh(),i);return lA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GA(e),r=new DA(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fc,{type:fc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fc];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bv()||Mv()||jd()}}const ak=ok;var ug="@firebase/auth",cg="1.7.9";/**
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
 */class lk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ck(t){Ri(new Or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$v(t)},h=new US(r,i,s,u);return HS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new Or("auth-internal",e=>{const n=zi(e.getProvider("auth").getImmediate());return(r=>new lk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(ug,cg,uk(t)),tr(ug,cg,"esm2017")}/**
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
 */const hk=5*60,dk=vv("authIdTokenMaxAge")||hk;let hg=null;const fk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dk)return;const i=n==null?void 0:n.token;hg!==i&&(hg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pk(t=Iv()){const e=Vd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qS(t,{popupRedirectResolver:ak,persistence:[yA,sA,Yv]}),r=vv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=fk(s.toString());eA(n,o,()=>o(n.currentUser)),ZS(n,l=>o(l))}}const i=yv("auth");return i&&WS(n,`http://${i}`),n}function mk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ck("Browser");var gk="firebase",yk="10.14.1";/**
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
 */tr(gk,yk,"app");var dg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cr,o0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.D=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(T,k,P){for(var I=Array(arguments.length-2),St=2;St<arguments.length;St++)I[St-2]=arguments[St];return y.prototype[k].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,_){_||(_=0);var T=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)T[k]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(k=0;16>k;++k)T[k]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],k=w.g[2];var P=w.g[3],I=y+(P^_&(k^P))+T[0]+3614090360&4294967295;y=_+(I<<7&4294967295|I>>>25),I=P+(k^y&(_^k))+T[1]+3905402710&4294967295,P=y+(I<<12&4294967295|I>>>20),I=k+(_^P&(y^_))+T[2]+606105819&4294967295,k=P+(I<<17&4294967295|I>>>15),I=_+(y^k&(P^y))+T[3]+3250441966&4294967295,_=k+(I<<22&4294967295|I>>>10),I=y+(P^_&(k^P))+T[4]+4118548399&4294967295,y=_+(I<<7&4294967295|I>>>25),I=P+(k^y&(_^k))+T[5]+1200080426&4294967295,P=y+(I<<12&4294967295|I>>>20),I=k+(_^P&(y^_))+T[6]+2821735955&4294967295,k=P+(I<<17&4294967295|I>>>15),I=_+(y^k&(P^y))+T[7]+4249261313&4294967295,_=k+(I<<22&4294967295|I>>>10),I=y+(P^_&(k^P))+T[8]+1770035416&4294967295,y=_+(I<<7&4294967295|I>>>25),I=P+(k^y&(_^k))+T[9]+2336552879&4294967295,P=y+(I<<12&4294967295|I>>>20),I=k+(_^P&(y^_))+T[10]+4294925233&4294967295,k=P+(I<<17&4294967295|I>>>15),I=_+(y^k&(P^y))+T[11]+2304563134&4294967295,_=k+(I<<22&4294967295|I>>>10),I=y+(P^_&(k^P))+T[12]+1804603682&4294967295,y=_+(I<<7&4294967295|I>>>25),I=P+(k^y&(_^k))+T[13]+4254626195&4294967295,P=y+(I<<12&4294967295|I>>>20),I=k+(_^P&(y^_))+T[14]+2792965006&4294967295,k=P+(I<<17&4294967295|I>>>15),I=_+(y^k&(P^y))+T[15]+1236535329&4294967295,_=k+(I<<22&4294967295|I>>>10),I=y+(k^P&(_^k))+T[1]+4129170786&4294967295,y=_+(I<<5&4294967295|I>>>27),I=P+(_^k&(y^_))+T[6]+3225465664&4294967295,P=y+(I<<9&4294967295|I>>>23),I=k+(y^_&(P^y))+T[11]+643717713&4294967295,k=P+(I<<14&4294967295|I>>>18),I=_+(P^y&(k^P))+T[0]+3921069994&4294967295,_=k+(I<<20&4294967295|I>>>12),I=y+(k^P&(_^k))+T[5]+3593408605&4294967295,y=_+(I<<5&4294967295|I>>>27),I=P+(_^k&(y^_))+T[10]+38016083&4294967295,P=y+(I<<9&4294967295|I>>>23),I=k+(y^_&(P^y))+T[15]+3634488961&4294967295,k=P+(I<<14&4294967295|I>>>18),I=_+(P^y&(k^P))+T[4]+3889429448&4294967295,_=k+(I<<20&4294967295|I>>>12),I=y+(k^P&(_^k))+T[9]+568446438&4294967295,y=_+(I<<5&4294967295|I>>>27),I=P+(_^k&(y^_))+T[14]+3275163606&4294967295,P=y+(I<<9&4294967295|I>>>23),I=k+(y^_&(P^y))+T[3]+4107603335&4294967295,k=P+(I<<14&4294967295|I>>>18),I=_+(P^y&(k^P))+T[8]+1163531501&4294967295,_=k+(I<<20&4294967295|I>>>12),I=y+(k^P&(_^k))+T[13]+2850285829&4294967295,y=_+(I<<5&4294967295|I>>>27),I=P+(_^k&(y^_))+T[2]+4243563512&4294967295,P=y+(I<<9&4294967295|I>>>23),I=k+(y^_&(P^y))+T[7]+1735328473&4294967295,k=P+(I<<14&4294967295|I>>>18),I=_+(P^y&(k^P))+T[12]+2368359562&4294967295,_=k+(I<<20&4294967295|I>>>12),I=y+(_^k^P)+T[5]+4294588738&4294967295,y=_+(I<<4&4294967295|I>>>28),I=P+(y^_^k)+T[8]+2272392833&4294967295,P=y+(I<<11&4294967295|I>>>21),I=k+(P^y^_)+T[11]+1839030562&4294967295,k=P+(I<<16&4294967295|I>>>16),I=_+(k^P^y)+T[14]+4259657740&4294967295,_=k+(I<<23&4294967295|I>>>9),I=y+(_^k^P)+T[1]+2763975236&4294967295,y=_+(I<<4&4294967295|I>>>28),I=P+(y^_^k)+T[4]+1272893353&4294967295,P=y+(I<<11&4294967295|I>>>21),I=k+(P^y^_)+T[7]+4139469664&4294967295,k=P+(I<<16&4294967295|I>>>16),I=_+(k^P^y)+T[10]+3200236656&4294967295,_=k+(I<<23&4294967295|I>>>9),I=y+(_^k^P)+T[13]+681279174&4294967295,y=_+(I<<4&4294967295|I>>>28),I=P+(y^_^k)+T[0]+3936430074&4294967295,P=y+(I<<11&4294967295|I>>>21),I=k+(P^y^_)+T[3]+3572445317&4294967295,k=P+(I<<16&4294967295|I>>>16),I=_+(k^P^y)+T[6]+76029189&4294967295,_=k+(I<<23&4294967295|I>>>9),I=y+(_^k^P)+T[9]+3654602809&4294967295,y=_+(I<<4&4294967295|I>>>28),I=P+(y^_^k)+T[12]+3873151461&4294967295,P=y+(I<<11&4294967295|I>>>21),I=k+(P^y^_)+T[15]+530742520&4294967295,k=P+(I<<16&4294967295|I>>>16),I=_+(k^P^y)+T[2]+3299628645&4294967295,_=k+(I<<23&4294967295|I>>>9),I=y+(k^(_|~P))+T[0]+4096336452&4294967295,y=_+(I<<6&4294967295|I>>>26),I=P+(_^(y|~k))+T[7]+1126891415&4294967295,P=y+(I<<10&4294967295|I>>>22),I=k+(y^(P|~_))+T[14]+2878612391&4294967295,k=P+(I<<15&4294967295|I>>>17),I=_+(P^(k|~y))+T[5]+4237533241&4294967295,_=k+(I<<21&4294967295|I>>>11),I=y+(k^(_|~P))+T[12]+1700485571&4294967295,y=_+(I<<6&4294967295|I>>>26),I=P+(_^(y|~k))+T[3]+2399980690&4294967295,P=y+(I<<10&4294967295|I>>>22),I=k+(y^(P|~_))+T[10]+4293915773&4294967295,k=P+(I<<15&4294967295|I>>>17),I=_+(P^(k|~y))+T[1]+2240044497&4294967295,_=k+(I<<21&4294967295|I>>>11),I=y+(k^(_|~P))+T[8]+1873313359&4294967295,y=_+(I<<6&4294967295|I>>>26),I=P+(_^(y|~k))+T[15]+4264355552&4294967295,P=y+(I<<10&4294967295|I>>>22),I=k+(y^(P|~_))+T[6]+2734768916&4294967295,k=P+(I<<15&4294967295|I>>>17),I=_+(P^(k|~y))+T[13]+1309151649&4294967295,_=k+(I<<21&4294967295|I>>>11),I=y+(k^(_|~P))+T[4]+4149444226&4294967295,y=_+(I<<6&4294967295|I>>>26),I=P+(_^(y|~k))+T[11]+3174756917&4294967295,P=y+(I<<10&4294967295|I>>>22),I=k+(y^(P|~_))+T[2]+718787259&4294967295,k=P+(I<<15&4294967295|I>>>17),I=_+(P^(k|~y))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var _=y-this.blockSize,T=this.B,k=this.h,P=0;P<y;){if(k==0)for(;P<=_;)i(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<y;)if(T[k++]=w.charCodeAt(P++),k==this.blockSize){i(this,T),k=0;break}}else for(;P<y;)if(T[k++]=w[P++],k==this.blockSize){i(this,T),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var _=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.u(w),w=Array(16),y=_=0;4>y;++y)for(var T=0;32>T;T+=8)w[_++]=this.g[y]>>>T&255;return w};function s(w,y){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function o(w,y){this.h=y;for(var _=[],T=!0,k=w.length-1;0<=k;k--){var P=w[k]|0;T&&P==y||(_[k]=P,T=!1)}this.g=_}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return O(h(-w));for(var y=[],_=1,T=0;w>=_;T++)y[T]=w/_|0,_*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return O(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),T=m,k=0;k<w.length;k+=8){var P=Math.min(8,w.length-k),I=parseInt(w.substring(k,k+P),y);8>P?(P=h(Math.pow(y,P)),T=T.j(P).add(h(I))):(T=T.j(_),T=T.add(h(I)))}return T}var m=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-O(this).m();for(var w=0,y=1,_=0;_<this.g.length;_++){var T=this.i(_);w+=(0<=T?T:4294967296+T)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(x(this))return"-"+O(this).toString(w);for(var y=h(Math.pow(w,6)),_=this,T="";;){var k=V(_,y).g;_=E(_,k.j(y));var P=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=k,R(_))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function x(w){return w.h==-1}t.l=function(w){return w=E(this,w),x(w)?-1:R(w)?0:1};function O(w){for(var y=w.g.length,_=[],T=0;T<y;T++)_[T]=~w.g[T];return new o(_,~w.h).add(g)}t.abs=function(){return x(this)?O(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],T=0,k=0;k<=y;k++){var P=T+(this.i(k)&65535)+(w.i(k)&65535),I=(P>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);T=I>>>16,P&=65535,I&=65535,_[k]=I<<16|P}return new o(_,_[_.length-1]&-2147483648?-1:0)};function E(w,y){return w.add(O(y))}t.j=function(w){if(R(this)||R(w))return m;if(x(this))return x(w)?O(this).j(O(w)):O(O(this).j(w));if(x(w))return O(this.j(O(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,_=[],T=0;T<2*y;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var k=0;k<w.g.length;k++){var P=this.i(T)>>>16,I=this.i(T)&65535,St=w.i(k)>>>16,fr=w.i(k)&65535;_[2*T+2*k]+=I*fr,v(_,2*T+2*k),_[2*T+2*k+1]+=P*fr,v(_,2*T+2*k+1),_[2*T+2*k+1]+=I*St,v(_,2*T+2*k+1),_[2*T+2*k+2]+=P*St,v(_,2*T+2*k+2)}for(T=0;T<y;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=y;T<2*y;T++)_[T]=0;return new o(_,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function S(w,y){this.g=w,this.h=y}function V(w,y){if(R(y))throw Error("division by zero");if(R(w))return new S(m,m);if(x(w))return y=V(O(w),y),new S(O(y.g),O(y.h));if(x(y))return y=V(w,O(y)),new S(O(y.g),y.h);if(30<w.g.length){if(x(w)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,T=y;0>=T.l(w);)_=j(_),T=j(T);var k=U(_,1),P=U(T,1);for(T=U(T,2),_=U(_,2);!R(T);){var I=P.add(T);0>=I.l(w)&&(k=k.add(_),P=I),T=U(T,1),_=U(_,1)}return y=E(w,k.j(y)),new S(k,y)}for(k=m;0<=w.l(y);){for(_=Math.max(1,Math.floor(w.m()/y.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=h(_),I=P.j(y);x(I)||0<I.l(w);)_-=T,P=h(_),I=P.j(y);R(P)&&(P=g),k=k.add(P),w=E(w,I)}return new S(k,w)}t.A=function(w){return V(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)&w.i(T);return new o(_,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)|w.i(T);return new o(_,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)^w.i(T);return new o(_,this.h^w.h)};function j(w){for(var y=w.g.length+1,_=[],T=0;T<y;T++)_[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(_,w.h)}function U(w,y){var _=y>>5;y%=32;for(var T=w.g.length-_,k=[],P=0;P<T;P++)k[P]=0<y?w.i(P+_)>>>y|w.i(P+_+1)<<32-y:w.i(P+_);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Cr=o}).apply(typeof dg<"u"?dg:typeof self<"u"?self:typeof window<"u"?window:{});var fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var a0,ws,l0,Va,_h,u0,c0,h0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fa=="object"&&fa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var C=a[p];if(!(C in d))break e;d=d[C]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,C={next:function(){if(!p&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function R(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,C,D){for(var F=Array(arguments.length-2),le=2;le<arguments.length;le++)F[le-2]=arguments[le];return c.prototype[C].apply(p,F)}}function x(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const C=a.length||0,D=p.length||0;a.length=C+D;for(let F=0;F<D;F++)a[C+F]=p[F]}else a.push(p)}}class E{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(d in p)a[d]=p[d];for(let D=0;D<_.length;D++)d=_[D],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function k(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class St{constructor(){this.h=this.g=null}add(c,d){const p=fr.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var fr=new E(()=>new Wi,a=>a.reset());class Wi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Zt,z=!1,G=new St,X=()=>{const a=l.Promise.resolve(void 0);Zt=()=>{a.then(ge)}};var ge=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){P(d)}var c=fr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var en=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function tn(a,c){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{V(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:nn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&tn.aa.h.call(this)}}R(tn,Se);var nn={2:"touch",3:"pen",4:"mouse"};tn.prototype.h=function(){tn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),Ow=0;function Lw(a,c,d,p,C){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=C,this.key=++Ow,this.da=this.fa=!1}function No(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Do(a){this.src=a,this.g={},this.h=0}Do.prototype.add=function(a,c,d,p,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var F=fu(a,c,p,C);return-1<F?(c=a[F],d||(c.fa=!1)):(c=new Lw(c,this.src,D,!!p,C),c.fa=d,a.push(c)),c};function du(a,c){var d=c.type;if(d in a.g){var p=a.g[d],C=Array.prototype.indexOf.call(p,c,void 0),D;(D=0<=C)&&Array.prototype.splice.call(p,C,1),D&&(No(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function fu(a,c,d,p){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==p)return C}return-1}var pu="closure_lm_"+(1e6*Math.random()|0),mu={};function Nf(a,c,d,p,C){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Nf(a,c[D],d,p,C);return null}return d=Of(d),a&&a[rn]?a.K(c,d,h(p)?!!p.capture:!!p,C):Mw(a,c,d,!1,p,C)}function Mw(a,c,d,p,C,D){if(!c)throw Error("Invalid event type");var F=h(C)?!!C.capture:!!C,le=yu(a);if(le||(a[pu]=le=new Do(a)),d=le.add(c,d,p,F,D),d.proxy)return d;if(p=bw(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)en||(C=F),C===void 0&&(C=!1),a.addEventListener(c.toString(),p,C);else if(a.attachEvent)a.attachEvent(Vf(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function bw(){function a(d){return c.call(a.src,a.listener,d)}const c=Fw;return a}function Df(a,c,d,p,C){if(Array.isArray(c))for(var D=0;D<c.length;D++)Df(a,c[D],d,p,C);else p=h(p)?!!p.capture:!!p,d=Of(d),a&&a[rn]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=fu(D,d,p,C),-1<d&&(No(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=yu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=fu(c,d,p,C)),(d=-1<a?c[a]:null)&&gu(d))}function gu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[rn])du(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(Vf(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=yu(c))?(du(d,a),d.h==0&&(d.src=null,c[pu]=null)):No(a)}}}function Vf(a){return a in mu?mu[a]:mu[a]="on"+a}function Fw(a,c){if(a.da)a=!0;else{c=new tn(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&gu(a),a=d.call(p,c)}return a}function yu(a){return a=a[pu],a instanceof Do?a:null}var _u="__closure_events_fn_"+(1e9*Math.random()>>>0);function Of(a){return typeof a=="function"?a:(a[_u]||(a[_u]=function(c){return a.handleEvent(c)}),a[_u])}function He(){ae.call(this),this.i=new Do(this),this.M=this,this.F=null}R(He,ae),He.prototype[rn]=!0,He.prototype.removeEventListener=function(a,c,d,p){Df(this,a,c,d,p)};function rt(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Se(c,a);else if(c instanceof Se)c.target=c.target||a;else{var C=c;c=new Se(p,a),T(c,C)}if(C=!0,d)for(var D=d.length-1;0<=D;D--){var F=c.g=d[D];C=Vo(F,p,!0,c)&&C}if(F=c.g=a,C=Vo(F,p,!0,c)&&C,C=Vo(F,p,!1,c)&&C,d)for(D=0;D<d.length;D++)F=c.g=d[D],C=Vo(F,p,!1,c)&&C}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)No(d[p]);delete a.g[c],a.h--}}this.F=null},He.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},He.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Vo(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,D=0;D<c.length;++D){var F=c[D];if(F&&!F.da&&F.capture==d){var le=F.listener,be=F.ha||F.src;F.fa&&du(a.i,F),C=le.call(be,p)!==!1&&C}}return C&&!p.defaultPrevented}function Lf(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Mf(a){a.g=Lf(()=>{a.g=null,a.i&&(a.i=!1,Mf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Uw extends ae{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Mf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(a){ae.call(this),this.h=a,this.g={}}R(Ki,ae);var bf=[];function Ff(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&gu(c)},a),a.g={}}Ki.prototype.N=function(){Ki.aa.N.call(this),Ff(this)},Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vu=l.JSON.stringify,jw=l.JSON.parse,zw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function wu(){}wu.prototype.h=null;function Uf(a){return a.h||(a.h=a.i())}function jf(){}var Gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Eu(){Se.call(this,"d")}R(Eu,Se);function Tu(){Se.call(this,"c")}R(Tu,Se);var pr={},zf=null;function Oo(){return zf=zf||new He}pr.La="serverreachability";function Bf(a){Se.call(this,pr.La,a)}R(Bf,Se);function Qi(a){const c=Oo();rt(c,new Bf(c))}pr.STAT_EVENT="statevent";function $f(a,c){Se.call(this,pr.STAT_EVENT,a),this.stat=c}R($f,Se);function it(a){const c=Oo();rt(c,new $f(c,a))}pr.Ma="timingevent";function qf(a,c){Se.call(this,pr.Ma,a),this.size=c}R(qf,Se);function Yi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Xi(){this.g=!0}Xi.prototype.xa=function(){this.g=!1};function Bw(a,c,d,p,C,D){a.info(function(){if(a.g)if(D)for(var F="",le=D.split("&"),be=0;be<le.length;be++){var re=le[be].split("=");if(1<re.length){var We=re[0];re=re[1];var Ke=We.split("_");F=2<=Ke.length&&Ke[1]=="type"?F+(We+"="+re+"&"):F+(We+"=redacted&")}}else F=null;else F=D;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+c+`
`+d+`
`+F})}function $w(a,c,d,p,C,D,F){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+c+`
`+d+`
`+D+" "+F})}function $r(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Hw(a,d)+(p?" "+p:"")})}function qw(a,c){a.info(function(){return"TIMEOUT: "+c})}Xi.prototype.info=function(){};function Hw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var F=1;F<C.length;F++)C[F]=""}}}}return vu(d)}catch{return c}}var Lo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Iu;function Mo(){}R(Mo,wu),Mo.prototype.g=function(){return new XMLHttpRequest},Mo.prototype.i=function(){return{}},Iu=new Mo;function Pn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wf}function Wf(){this.i=null,this.g="",this.h=!1}var Kf={},Su={};function Au(a,c,d){a.L=1,a.v=jo(sn(c)),a.m=d,a.P=!0,Gf(a,null)}function Gf(a,c){a.F=Date.now(),bo(a),a.A=sn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),lp(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Wf,a.g=kp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Uw(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(bf[0]=C.toString()),C=bf);for(var D=0;D<C.length;D++){var F=Nf(d,C[D],p||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Qi(),Bw(a.i,a.u,a.A,a.l,a.R,a.m)}Pn.prototype.ca=function(a){a=a.target;const c=this.M;c&&on(a)==3?c.j():this.Y(a)},Pn.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=on(this.g);var c=this.g.Ba();const Wr=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||mp(this.g)))){this.J||Ke!=4||c==7||(c==8||0>=Wr?Qi(3):Qi(2)),ku(this);var d=this.g.Z();this.X=d;t:if(Qf(this)){var p=mp(this.g);a="";var C=p.length,D=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),Ji(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(D&&c==C-1)});p.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,$w(this.i,this.u,this.A,this.l,this.R,Ke,d),this.o){if(this.T&&!this.K){t:{if(this.g){var le,be=this.g;if((le=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(le)){var re=le;break t}}re=null}if(d=re)$r(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ru(this,d);else{this.o=!1,this.s=3,it(12),mr(this),Ji(this);break e}}if(this.P){d=!0;let Dt;for(;!this.J&&this.C<F.length;)if(Dt=Ww(this,F),Dt==Su){Ke==4&&(this.s=4,it(14),d=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==Kf){this.s=4,it(15),$r(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else $r(this.i,this.l,Dt,null),Ru(this,Dt);if(Qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||F.length!=0||this.h.h||(this.s=1,it(16),d=!1),this.o=this.o&&d,!d)$r(this.i,this.l,F,"[Invalid Chunked Response]"),mr(this),Ji(this);else if(0<F.length&&!this.W){this.W=!0;var We=this.j;We.g==this&&We.ba&&!We.M&&(We.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Vu(We),We.M=!0,it(11))}}else $r(this.i,this.l,F,null),Ru(this,F);Ke==4&&mr(this),this.o&&!this.J&&(Ke==4?Tp(this.j,this):(this.o=!1,bo(this)))}else uE(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),mr(this),Ji(this)}}}catch{}finally{}};function Qf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ww(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?Su:(d=Number(c.substring(d,p)),isNaN(d)?Kf:(p+=1,p+d>c.length?Su:(c=c.slice(p,p+d),a.C=p+d,c)))}Pn.prototype.cancel=function(){this.J=!0,mr(this)};function bo(a){a.S=Date.now()+a.I,Yf(a,a.I)}function Yf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Yi(g(a.ba,a),c)}function ku(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Pn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(qw(this.i,this.A),this.L!=2&&(Qi(),it(17)),mr(this),this.s=2,Ji(this)):Yf(this,this.S-a)};function Ji(a){a.j.G==0||a.J||Tp(a.j,a)}function mr(a){ku(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Ff(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ru(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Cu(d.h,a))){if(!a.K&&Cu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Wo(d),qo(d);else break e;Du(d),it(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Yi(g(d.Za,d),6e3));if(1>=Zf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else yr(d,11)}else if((a.K||d.g==a)&&Wo(d),!v(c))for(C=d.Da.g.parse(c),c=0;c<C.length;c++){let re=C[c];if(d.T=re[0],re=re[1],d.G==2)if(re[0]=="c"){d.K=re[1],d.ia=re[2];const We=re[3];We!=null&&(d.la=We,d.j.info("VER="+d.la));const Ke=re[4];Ke!=null&&(d.Aa=Ke,d.j.info("SVER="+d.Aa));const Wr=re[5];Wr!=null&&typeof Wr=="number"&&0<Wr&&(p=1.5*Wr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Dt=a.g;if(Dt){const Go=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Go){var D=p.h;D.g||Go.indexOf("spdy")==-1&&Go.indexOf("quic")==-1&&Go.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Pu(D,D.h),D.h=null))}if(p.D){const Ou=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ou&&(p.ya=Ou,he(p.I,p.D,Ou))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var F=a;if(p.qa=Ap(p,p.J?p.ia:null,p.W),F.K){ep(p.h,F);var le=F,be=p.L;be&&(le.I=be),le.B&&(ku(le),bo(le)),p.g=F}else wp(p);0<d.i.length&&Ho(d)}else re[0]!="stop"&&re[0]!="close"||yr(d,7);else d.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?yr(d,7):Nu(d):re[0]!="noop"&&d.l&&d.l.ta(re),d.v=0)}}Qi(4)}catch{}}var Kw=class{constructor(a,c){this.g=a,this.map=c}};function Xf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zf(a){return a.h?1:a.g?a.g.size:0}function Cu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Pu(a,c){a.g?a.g.add(c):a.h=c}function ep(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Xf.prototype.cancel=function(){if(this.i=tp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return x(a.i)}function Gw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function Qw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function np(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=Qw(a),p=Gw(a),C=p.length,D=0;D<C;D++)c.call(void 0,p[D],d&&d[D],a)}var rp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),C=null;if(0<=p){var D=a[d].substring(0,p);C=a[d].substring(p+1)}else D=a[d];c(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,Fo(this,a.j),this.o=a.o,this.g=a.g,Uo(this,a.s),this.l=a.l;var c=a.i,d=new ts;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),ip(this,d),this.m=a.m}else a&&(c=String(a).match(rp))?(this.h=!1,Fo(this,c[1]||"",!0),this.o=Zi(c[2]||""),this.g=Zi(c[3]||"",!0),Uo(this,c[4]),this.l=Zi(c[5]||"",!0),ip(this,c[6]||"",!0),this.m=Zi(c[7]||"")):(this.h=!1,this.i=new ts(null,this.h))}gr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(es(c,sp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(es(c,sp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(es(d,d.charAt(0)=="/"?Zw:Jw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",es(d,tE)),a.join("")};function sn(a){return new gr(a)}function Fo(a,c,d){a.j=d?Zi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Uo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function ip(a,c,d){c instanceof ts?(a.i=c,nE(a.i,a.h)):(d||(c=es(c,eE)),a.i=new ts(c,a.h))}function he(a,c,d){a.i.set(c,d)}function jo(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function es(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Xw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Xw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sp=/[#\/\?@]/g,Jw=/[#\?:]/g,Zw=/[#\?]/g,eE=/[#\?@]/g,tE=/#/g;function ts(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function xn(a){a.g||(a.g=new Map,a.h=0,a.i&&Yw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ts.prototype,t.add=function(a,c){xn(this),this.i=null,a=qr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function op(a,c){xn(a),c=qr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function ap(a,c){return xn(a),c=qr(a,c),a.g.has(c)}t.forEach=function(a,c){xn(this),this.g.forEach(function(d,p){d.forEach(function(C){a.call(c,C,p,this)},this)},this)},t.na=function(){xn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const C=a[p];for(let D=0;D<C.length;D++)d.push(c[p])}return d},t.V=function(a){xn(this);let c=[];if(typeof a=="string")ap(this,a)&&(c=c.concat(this.g.get(qr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return xn(this),this.i=null,a=qr(this,a),ap(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function lp(a,c,d){op(a,c),0<d.length&&(a.i=null,a.g.set(qr(a,c),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const D=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var C=D;F[p]!==""&&(C+="="+encodeURIComponent(String(F[p]))),a.push(C)}}return this.i=a.join("&")};function qr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function nE(a,c){c&&!a.j&&(xn(a),a.i=null,a.g.forEach(function(d,p){var C=p.toLowerCase();p!=C&&(op(this,p),lp(this,C,d))},a)),a.j=c}function rE(a,c){const d=new Xi;if(l.Image){const p=new Image;p.onload=A(Nn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=A(Nn,d,"TestLoadImage: error",!1,c,p),p.onabort=A(Nn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(Nn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function iE(a,c){const d=new Xi,p=new AbortController,C=setTimeout(()=>{p.abort(),Nn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(D=>{clearTimeout(C),D.ok?Nn(d,"TestPingServer: ok",!0,c):Nn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Nn(d,"TestPingServer: error",!1,c)})}function Nn(a,c,d,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(d)}catch{}}function sE(){this.g=new zw}function oE(a,c,d){const p=d||"";try{np(a,function(C,D){let F=C;h(C)&&(F=vu(C)),c.push(p+D+"="+encodeURIComponent(F))})}catch(C){throw c.push(p+"type="+encodeURIComponent("_badmap")),C}}function zo(a){this.l=a.Ub||null,this.j=a.eb||!1}R(zo,wu),zo.prototype.g=function(){return new Bo(this.l,this.j)},zo.prototype.i=function(a){return function(){return a}}({});function Bo(a,c){He.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Bo,He),t=Bo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,rs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ns(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,rs(this)),this.g&&(this.readyState=3,rs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;up(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function up(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ns(this):rs(this),this.readyState==3&&up(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ns(this))},t.Qa=function(a){this.g&&(this.response=a,ns(this))},t.ga=function(){this.g&&ns(this)};function ns(a){a.readyState=4,a.l=null,a.j=null,a.v=null,rs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function rs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cp(a){let c="";return U(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function xu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=cp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function Te(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Te,He);var aE=/^https?$/i,lE=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Iu.g(),this.v=this.o?Uf(this.o):Uf(Iu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){hp(this,D);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)d.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const D of p.keys())d.set(D,p.get(D));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(lE,c,void 0))||p||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,F]of d)this.g.setRequestHeader(D,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){hp(this,D)}};function hp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,dp(a),$o(a)}function dp(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,rt(this,"complete"),rt(this,"abort"),$o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$o(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?fp(this):this.bb())},t.bb=function(){fp(this)};function fp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||on(a)!=4||a.Z()!=2)){if(a.u&&on(a)==4)Lf(a.Ea,0,a);else if(rt(a,"readystatechange"),on(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=F===0){var C=String(a.D).match(rp)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!aE.test(C?C.toLowerCase():"")}d=p}if(d)rt(a,"complete"),rt(a,"success");else{a.m=6;try{var D=2<on(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",dp(a)}}finally{$o(a)}}}}function $o(a,c){if(a.g){pp(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||rt(a,"ready");try{d.onreadystatechange=p}catch{}}}function pp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function on(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),jw(c)}};function mp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function uE(a){const c={};a=(a.g&&2<=on(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(v(a[p]))continue;var d=k(a[p]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[C]||[];c[C]=D,D.push(d)}w(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function is(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function gp(a){this.Aa=0,this.i=[],this.j=new Xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=is("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=is("baseRetryDelayMs",5e3,a),this.cb=is("retryDelaySeedMs",1e4,a),this.Wa=is("forwardChannelMaxRetries",2,a),this.wa=is("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xf(a&&a.concurrentRequestLimit),this.Da=new sE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=gp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){it(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Ap(this,null,this.W),Ho(this)};function Nu(a){if(yp(a),a.G==3){var c=a.U++,d=sn(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),ss(a,d),c=new Pn(a,a.j,c),c.L=2,c.v=jo(sn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=kp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),bo(c)}Sp(a)}function qo(a){a.g&&(Vu(a),a.g.cancel(),a.g=null)}function yp(a){qo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ho(a){if(!Jf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Zt||X(),z||(Zt(),z=!0),G.add(c,a),a.B=0}}function cE(a,c){return Zf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Yi(g(a.Ga,a,c),Ip(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Pn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=vp(this,C,c),d=sn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),ss(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(cp(D)))+"&"+c:this.m&&xu(d,this.m,D)),Pu(this.h,C),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),C.T=!0,Au(C,d,null)):Au(C,d,c),this.G=2}}else this.G==3&&(a?_p(this,a):this.i.length==0||Jf(this.h)||_p(this))};function _p(a,c){var d;c?d=c.l:d=a.U++;const p=sn(a.I);he(p,"SID",a.K),he(p,"RID",d),he(p,"AID",a.T),ss(a,p),a.m&&a.o&&xu(p,a.m,a.o),d=new Pn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=vp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Pu(a.h,d),Au(d,p,c)}function ss(a,c){a.H&&U(a.H,function(d,p){he(c,p,d)}),a.l&&np({},function(d,p){he(c,p,d)})}function vp(a,c,d){d=Math.min(a.i.length,d);var p=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){const F=["count="+d];D==-1?0<d?(D=C[0].g,F.push("ofs="+D)):D=0:F.push("ofs="+D);let le=!0;for(let be=0;be<d;be++){let re=C[be].g;const We=C[be].map;if(re-=D,0>re)D=Math.max(0,C[be].g-100),le=!1;else try{oE(We,F,"req"+re+"_")}catch{p&&p(We)}}if(le){p=F.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function wp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Zt||X(),z||(Zt(),z=!0),G.add(c,a),a.v=0}}function Du(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Yi(g(a.Fa,a),Ip(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ep(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Yi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),qo(this),Ep(this))};function Vu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ep(a){a.g=new Pn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=sn(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),ss(a,c),a.m&&a.o&&xu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=jo(sn(c)),d.m=null,d.P=!0,Gf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,qo(this),Du(this),it(19))};function Wo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Tp(a,c){var d=null;if(a.g==c){Wo(a),Vu(a),a.g=null;var p=2}else if(Cu(a.h,c))d=c.D,ep(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;p=Oo(),rt(p,new qf(p,d)),Ho(a)}else wp(a);else if(C=c.s,C==3||C==0&&0<c.X||!(p==1&&cE(a,c)||p==2&&Du(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),C){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function Ip(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function yr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),p=a.Xa;const C=!p;p=new gr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fo(p,"https"),jo(p),C?rE(p.toString(),d):iE(p.toString(),d)}else it(2);a.G=0,a.l&&a.l.sa(c),Sp(a),yp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Sp(a){if(a.G=0,a.ka=[],a.l){const c=tp(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Ap(a,c,d){var p=d instanceof gr?sn(d):new gr(d);if(p.g!="")c&&(p.g=c+"."+p.g),Uo(p,p.s);else{var C=l.location;p=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var D=new gr(null);p&&Fo(D,p),c&&(D.g=c),C&&Uo(D,C),d&&(D.l=d),p=D}return d=a.D,c=a.ya,d&&c&&he(p,d,c),he(p,"VER",a.la),ss(a,p),p}function kp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Te(new zo({eb:d})):new Te(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rp(){}t=Rp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ko(){}Ko.prototype.g=function(a,c){return new gt(a,c)};function gt(a,c){He.call(this),this.g=new gp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Hr(this)}R(gt,He),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Nu(this.g)},gt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=vu(a),a=d);c.i.push(new Kw(c.Ya++,a)),c.G==3&&Ho(c)},gt.prototype.N=function(){this.g.l=null,delete this.j,Nu(this.g),delete this.g,gt.aa.N.call(this)};function Cp(a){Eu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(Cp,Eu);function Pp(){Tu.call(this),this.status=1}R(Pp,Tu);function Hr(a){this.g=a}R(Hr,Rp),Hr.prototype.ua=function(){rt(this.g,"a")},Hr.prototype.ta=function(a){rt(this.g,new Cp(a))},Hr.prototype.sa=function(a){rt(this.g,new Pp)},Hr.prototype.ra=function(){rt(this.g,"b")},Ko.prototype.createWebChannel=Ko.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,h0=function(){return new Ko},c0=function(){return Oo()},u0=pr,_h={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Lo.NO_ERROR=0,Lo.TIMEOUT=8,Lo.HTTP_ERROR=6,Va=Lo,Hf.COMPLETE="complete",l0=Hf,jf.EventType=Gi,Gi.OPEN="a",Gi.CLOSE="b",Gi.ERROR="c",Gi.MESSAGE="d",He.prototype.listen=He.prototype.K,ws=jf,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,a0=Te}).apply(typeof fa<"u"?fa:typeof self<"u"?self:typeof window<"u"?window:{});const fg="@firebase/firestore";/**
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
 */let Xe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let Bi="10.14.0";/**
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
 */const Mr=new Nd("@firebase/firestore");function ps(){return Mr.logLevel}function q(t,...e){if(Mr.logLevel<=ee.DEBUG){const n=e.map(Hd);Mr.debug(`Firestore (${Bi}): ${t}`,...n)}}function In(t,...e){if(Mr.logLevel<=ee.ERROR){const n=e.map(Hd);Mr.error(`Firestore (${Bi}): ${t}`,...n)}}function Pi(t,...e){if(Mr.logLevel<=ee.WARN){const n=e.map(Hd);Mr.warn(`Firestore (${Bi}): ${t}`,...n)}}function Hd(t){if(typeof t=="string")return t;try{/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Bi}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function oe(t,e){t||K()}function Y(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class d0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class vk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wk{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new d0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Xe(e)}}class Ek{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Tk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ek(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ik{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){oe(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.R=n.token,new Ik(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ak(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class f0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ak(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ue(0,0))}static max(){return new Q(new ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ro{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ro.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ro?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends ro{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const kk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends ro{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return kk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(fe.fromString(e))}static fromName(e){return new H(fe.fromString(e).popFirst(5))}static empty(){return new H(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new fe(e.slice()))}}function Rk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new ue(n+1,0):new ue(n,r));return new or(i,H.empty(),e)}function Ck(t){return new or(t.readTime,t.key,-1)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(Q.min(),H.empty(),-1)}static max(){return new or(Q.max(),H.empty(),-1)}}function Pk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const xk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function To(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==xk)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Dk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Io(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wd.oe=-1;function Wl(t){return t==null}function gl(t){return t===0&&1/t==-1/0}function Vk(t){return typeof t=="number"&&Number.isInteger(t)&&!gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function pg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function p0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pa(this.root,e,this.comparator,!0)}}class pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Be{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mg(this.data.getIterator())}getIteratorFrom(e){return new mg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class mg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vt{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new vt([])}unionWith(e){let n=new Be(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class m0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new m0("Invalid base64 string: "+s):s}}(e);return new qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const Ok=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(t){if(oe(!!t),typeof t=="string"){let e=0;const n=Ok.exec(t);if(oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
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
 */function Kd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gd(t){const e=t.mapValue.fields.__previous_value__;return Kd(e)?Gd(e):e}function io(t){const e=ar(t.mapValue.fields.__local_write_time__.timestampValue);return new ue(e.seconds,e.nanos)}/**
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
 */class Lk{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class so{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new so("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof so&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ma={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kd(t)?4:bk(t)?9007199254740991:Mk(t)?10:11:K()}function Jt(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return io(t).isEqual(io(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ar(i.timestampValue),l=ar(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return br(i.bytesValue).isEqual(br(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?gl(o)===gl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xi(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(pg(o)!==pg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Jt(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function oo(t,e){return(t.values||[]).find(n=>Jt(n,e))!==void 0}function Ni(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return gg(t.timestampValue,e.timestampValue);case 4:return gg(io(t),io(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(s,o){const l=br(s),u=br(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ie(l[h],u[h]);if(f!==0)return f}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Ae(s.latitude),Ae(o.latitude));return l!==0?l:ie(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},g=o.fields||{},A=(l=m.value)===null||l===void 0?void 0:l.arrayValue,R=(u=g.value)===null||u===void 0?void 0:u.arrayValue,x=ie(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:yg(A,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ma.mapValue&&o===ma.mapValue)return 0;if(s===ma.mapValue)return 1;if(o===ma.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=ie(u[m],f[m]);if(g!==0)return g;const A=Ni(l[u[m]],h[f[m]]);if(A!==0)return A}return ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K()}}function gg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=ar(t),r=ar(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function yg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ni(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function Di(t){return vh(t)}function vh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vh(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function _g(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wh(t){return!!t&&"integerValue"in t}function Qd(t){return!!t&&"arrayValue"in t}function vg(t){return!!t&&"nullValue"in t}function wg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oa(t){return!!t&&"mapValue"in t}function Mk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Os(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Os(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Os(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Os(n)}setAll(e){let n=je.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Os(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Oa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Os(this.value))}}function g0(t){const e=[];return zr(t.fields,(n,r)=>{const i=new je([n]);if(Oa(r)){const s=g0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new vt(e)}/**
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
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Q.min(),Q.min(),Q.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,Q.min(),Q.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Q.min(),Q.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yl{constructor(e,n){this.position=e,this.inclusive=n}}function Eg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Ni(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ao{constructor(e,n="asc"){this.field=e,this.dir=n}}function Fk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */let y0=class{};class Pe extends y0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jk(e,n,r):n==="array-contains"?new $k(e,r):n==="in"?new qk(e,r):n==="not-in"?new Hk(e,r):n==="array-contains-any"?new Wk(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zk(e,r):new Bk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ni(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(Ni(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends y0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new zt(e,n)}matches(e){return _0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _0(t){return t.op==="and"}function v0(t){return Uk(t)&&_0(t)}function Uk(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function Eh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Di(t.value);if(v0(t))return t.filters.map(e=>Eh(e)).join(",");{const e=t.filters.map(n=>Eh(n)).join(",");return`${t.op}(${e})`}}function w0(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&Jt(r.value,i.value)}(t,e):t instanceof zt?function(r,i){return i instanceof zt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&w0(o,i.filters[l]),!0):!1}(t,e):void K()}function E0(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Di(n.value)}`}(t):t instanceof zt?function(n){return n.op.toString()+" {"+n.getFilters().map(E0).join(" ,")+"}"}(t):"Filter"}class jk extends Pe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class zk extends Pe{constructor(e,n){super(e,"in",n),this.keys=T0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bk extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=T0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function T0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class $k extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qd(n)&&oo(n.arrayValue,this.value)}}class qk extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oo(this.value.arrayValue,n)}}class Hk extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!oo(this.value.arrayValue,n)}}class Wk extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>oo(this.value.arrayValue,r))}}/**
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
 */class Kk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Ig(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Kk(t,e,n,r,i,s,o)}function Yd(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Eh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Wl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Di(r)).join(",")),e.ue=n}return e.ue}function Xd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Fk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!w0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tg(t.startAt,e.startAt)&&Tg(t.endAt,e.endAt)}function Th(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class $i{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Gk(t,e,n,r,i,s,o,l){return new $i(t,e,n,r,i,s,o,l)}function Kl(t){return new $i(t)}function Sg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function I0(t){return t.collectionGroup!==null}function Ls(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Be(je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ao(s,r))}),n.has(je.keyField().canonicalString())||e.ce.push(new ao(je.keyField(),r))}return e.ce}function Qt(t){const e=Y(t);return e.le||(e.le=Qk(e,Ls(t))),e.le}function Qk(t,e){if(t.limitType==="F")return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ao(i.field,s)});const n=t.endAt?new yl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new yl(t.startAt.position,t.startAt.inclusive):null;return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ih(t,e){const n=t.filters.concat([e]);return new $i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _l(t,e,n){return new $i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gl(t,e){return Xd(Qt(t),Qt(e))&&t.limitType===e.limitType}function S0(t){return`${Yd(Qt(t))}|lt:${t.limitType}`}function Gr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>E0(i)).join(", ")}]`),Wl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Di(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Di(i)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function Ql(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ls(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Eg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ls(r),i)||r.endAt&&!function(o,l,u){const h=Eg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ls(r),i))}(t,e)}function Yk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function A0(t){return(e,n)=>{let r=!1;for(const i of Ls(t)){const s=Xk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Xk(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ni(u,h):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return p0(this.inner)}size(){return this.innerSize}}/**
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
 */const Jk=new Ee(H.comparator);function Sn(){return Jk}const k0=new Ee(H.comparator);function Es(...t){let e=k0;for(const n of t)e=e.insert(n.key,n);return e}function R0(t){let e=k0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ar(){return Ms()}function C0(){return Ms()}function Ms(){return new qi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Zk=new Ee(H.comparator),eR=new Be(H.comparator);function Z(...t){let e=eR;for(const n of t)e=e.add(n);return e}const tR=new Be(ie);function nR(){return tR}/**
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
 */function Jd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gl(e)?"-0":e}}function P0(t){return{integerValue:""+t}}function x0(t,e){return Vk(e)?P0(e):Jd(t,e)}/**
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
 */class Yl{constructor(){this._=void 0}}function rR(t,e,n){return t instanceof vl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Kd(s)&&(s=Gd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof lo?D0(t,e):t instanceof uo?V0(t,e):function(i,s){const o=N0(i,s),l=Ag(o)+Ag(i.Pe);return wh(o)&&wh(i.Pe)?P0(l):Jd(i.serializer,l)}(t,e)}function iR(t,e,n){return t instanceof lo?D0(t,e):t instanceof uo?V0(t,e):n}function N0(t,e){return t instanceof co?function(r){return wh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vl extends Yl{}class lo extends Yl{constructor(e){super(),this.elements=e}}function D0(t,e){const n=O0(e);for(const r of t.elements)n.some(i=>Jt(i,r))||n.push(r);return{arrayValue:{values:n}}}class uo extends Yl{constructor(e){super(),this.elements=e}}function V0(t,e){let n=O0(e);for(const r of t.elements)n=n.filter(i=>!Jt(i,r));return{arrayValue:{values:n}}}class co extends Yl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ag(t){return Ae(t.integerValue||t.doubleValue)}function O0(t){return Qd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class sR{constructor(e,n){this.field=e,this.transform=n}}function oR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof lo&&i instanceof lo||r instanceof uo&&i instanceof uo?xi(r.elements,i.elements,Jt):r instanceof co&&i instanceof co?Jt(r.Pe,i.Pe):r instanceof vl&&i instanceof vl}(t.transform,e.transform)}class aR{constructor(e,n){this.version=e,this.transformResults=n}}class Pt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function La(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xl{}function L0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zd(t.key,Pt.none()):new So(t.key,t.data,Pt.none());{const n=t.data,r=ct.empty();let i=new Be(je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new dr(t.key,r,new vt(i.toArray()),Pt.none())}}function lR(t,e,n){t instanceof So?function(i,s,o){const l=i.value.clone(),u=Rg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof dr?function(i,s,o){if(!La(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Rg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(M0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bs(t,e,n,r){return t instanceof So?function(s,o,l,u){if(!La(s.precondition,o))return l;const h=s.value.clone(),f=Cg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof dr?function(s,o,l,u){if(!La(s.precondition,o))return l;const h=Cg(s.fieldTransforms,u,o),f=o.data;return f.setAll(M0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return La(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function uR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=N0(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function kg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xi(r,i,(s,o)=>oR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class So extends Xl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class dr extends Xl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function M0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rg(t,e,n){const r=new Map;oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,iR(o,l,n[i]))}return r}function Cg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rR(s,o,e))}return r}class Zd extends Xl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cR extends Xl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=C0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=L0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,(n,r)=>kg(n,r))&&xi(this.baseMutations,e.baseMutations,(n,r)=>kg(n,r))}}class ef{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length);let i=function(){return Zk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ef(e,n,r,i)}}/**
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
 */class dR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Re,te;function pR(t){switch(t){default:return K();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function b0(t){if(t===void 0)return In("GRPC error has no .code"),L.UNKNOWN;switch(t){case Re.OK:return L.OK;case Re.CANCELLED:return L.CANCELLED;case Re.UNKNOWN:return L.UNKNOWN;case Re.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Re.INTERNAL:return L.INTERNAL;case Re.UNAVAILABLE:return L.UNAVAILABLE;case Re.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Re.NOT_FOUND:return L.NOT_FOUND;case Re.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Re.ABORTED:return L.ABORTED;case Re.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Re.DATA_LOSS:return L.DATA_LOSS;default:return K()}}(te=Re||(Re={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mR(){return new TextEncoder}/**
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
 */const gR=new Cr([4294967295,4294967295],0);function Pg(t){const e=mR().encode(t),n=new o0;return n.update(e),new Uint8Array(n.digest())}function xg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Cr([n,r],0),new Cr([i,s],0)]}class tf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ts(`Invalid padding: ${n}`);if(r<0)throw new Ts(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Cr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Cr.fromNumber(r)));return i.compare(gR)===1&&(i=new Cr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Pg(e),[r,i]=xg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new tf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Pg(e),[r,i]=xg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Jl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jl(Q.min(),i,new Ee(ie),Sn(),Z())}}class Ao{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ao(r,n,Z(),Z(),Z())}}/**
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
 */class Ma{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class F0{constructor(e,n){this.targetId=e,this.me=n}}class U0{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ng{constructor(){this.fe=0,this.ge=Vg(),this.pe=qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),n=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Ao(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Vg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Sn(),this.qe=Dg(),this.Qe=new Ee(ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Th(s))if(r===0){const o=new H(s.path);this.Ue(n,o,Ze.newNoDocument(o,Q.min()))}else oe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=br(r).toUint8Array()}catch(u){if(u instanceof m0)return Pi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new tf(o,i,s)}catch(u){return Pi(u instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Th(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ze.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Z();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Jl(e,n,this.Qe,this.ke,r);return this.ke=Sn(),this.qe=Dg(),this.Qe=new Ee(ie),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ng,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Be(ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ng),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Dg(){return new Ee(H.comparator)}function Vg(){return new Ee(H.comparator)}const _R={asc:"ASCENDING",desc:"DESCENDING"},vR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wR={and:"AND",or:"OR"};class ER{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sh(t,e){return t.useProto3Json||Wl(e)?e:{value:e}}function wl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function j0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TR(t,e){return wl(t,e.toTimestamp())}function Yt(t){return oe(!!t),Q.fromTimestamp(function(n){const r=ar(n);return new ue(r.seconds,r.nanos)}(t))}function nf(t,e){return Ah(t,e).canonicalString()}function Ah(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function z0(t){const e=fe.fromString(t);return oe(W0(e)),e}function kh(t,e){return nf(t.databaseId,e.path)}function pc(t,e){const n=z0(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H($0(n))}function B0(t,e){return nf(t.databaseId,e)}function IR(t){const e=z0(t);return e.length===4?fe.emptyPath():$0(e)}function Rh(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $0(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Og(t,e,n){return{name:kh(t,e),fields:n.value.mapValue.fields}}function SR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string"),qe.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:b0(h.code);return new B(f,h.message||"")}(o);n=new U0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pc(t,r.document.name),s=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):Q.min(),l=new ct({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ma(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pc(t,r.document),s=r.readTime?Yt(r.readTime):Q.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ma([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pc(t,r.document),s=r.removedTargetIds||[];n=new Ma([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new fR(i,s),l=r.targetId;n=new F0(l,o)}}return n}function AR(t,e){let n;if(e instanceof So)n={update:Og(t,e.key,e.value)};else if(e instanceof Zd)n={delete:kh(t,e.key)};else if(e instanceof dr)n={update:Og(t,e.key,e.data),updateMask:OR(e.fieldMask)};else{if(!(e instanceof cR))return K();n={verify:kh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof vl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof lo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof co)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:TR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function kR(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Yt(i.updateTime):Yt(s);return o.isEqual(Q.min())&&(o=Yt(s)),new aR(o,i.transformResults||[])}(n,e))):[]}function RR(t,e){return{documents:[B0(t,e.path)]}}function CR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=B0(t,i);const s=function(h){if(h.length!==0)return H0(zt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Qr(g.field),direction:NR(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Sh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function PR(t){let e=IR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=q0(m);return g instanceof zt&&v0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(R){return new ao(Yr(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Wl(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,A=m.values||[];return new yl(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,A=m.values||[];return new yl(A,g)}(n.endAt)),Gk(e,i,o,s,l,"F",u,h)}function xR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function q0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yr(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Yr(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yr(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yr(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Yr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zt.create(n.compositeFilter.filters.map(r=>q0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function NR(t){return _R[t]}function DR(t){return vR[t]}function VR(t){return wR[t]}function Qr(t){return{fieldPath:t.canonicalString()}}function Yr(t){return je.fromServerFormat(t.fieldPath)}function H0(t){return t instanceof Pe?function(n){if(n.op==="=="){if(wg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NAN"}};if(vg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NAN"}};if(vg(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(n.field),op:DR(n.op),value:n.value}}}(t):t instanceof zt?function(n){const r=n.getFilters().map(i=>H0(i));return r.length===1?r[0]:{compositeFilter:{op:VR(n.op),filters:r}}}(t):K()}function OR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function W0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class qn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class LR{constructor(e){this.ct=e}}function MR(t){const e=PR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_l(e,e.limit,"L"):e}/**
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
 */class bR{constructor(){this.un=new FR}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(or.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class FR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(fe.comparator)).toArray()}}/**
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
 */class Vi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vi(0)}static kn(){return new Vi(-1)}}/**
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
 */class UR{constructor(){this.changes=new qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&bs(r.mutation,i,vt.empty(),ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Ar();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Es();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Sn();const o=Ms(),l=function(){return Ms()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof dr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),bs(f.mutation,h,f.mutation.getFieldMask(),ue.now())):o.set(h.key,vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new jR(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ms();let i=new Ee((o,l)=>o-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||vt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=C0();f.forEach(g=>{if(!s.has(g)){const A=L0(n.get(g),r.get(g));A!==null&&m.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):I0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Ar());let l=-1,u=s;return o.next(h=>M.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Z())).next(f=>({batchId:l,changes:R0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Es();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Es();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(m,g){return new $i(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=Es();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&bs(f.mutation,h,vt.empty(),ue.now()),Ql(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class BR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Yt(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:MR(i.bundledQuery),readTime:Yt(i.readTime)}}(n)),M.resolve()}}/**
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
 */class $R{constructor(){this.overlays=new Ee(H.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Ar(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Ar(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ar(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dR(n,r));let s=this.Ir.get(n);s===void 0&&(s=Z(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class qR{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class rf{constructor(){this.Tr=new Be(Ve.Er),this.dr=new Be(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=Z();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||ie(e.wr,n.wr)}static Ar(e,n){return ie(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
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
 */class HR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Be(Ve.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(ie);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new H(s),0);let l=new Be(ie);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class WR{constructor(e){this.Mr=e,this.docs=function(){return new Ee(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=Sn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Sn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Pk(Ck(f),r)<=0||(i.has(f.key)||Ql(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KR(this)}getSize(e){return M.resolve(this.size)}}class KR extends UR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class GR{constructor(e){this.persistence=e,this.Nr=new qi(n=>Yd(n),Xd),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new rf,this.targetCount=0,this.kr=Vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class QR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Wd(0),this.Kr=!1,this.Kr=!0,this.$r=new qR,this.referenceDelegate=e(this),this.Ur=new GR(this),this.indexManager=new bR,this.remoteDocumentCache=function(i){return new WR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new LR(n),this.Gr=new BR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $R,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new HR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new YR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class YR extends Nk{constructor(e){super(),this.currentSequenceNumber=e}}class sf{constructor(e){this.persistence=e,this.Jr=new rf,this.Yr=null}static Zr(e){return new sf(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class of{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new of(e,n.fromCache,r,i)}}/**
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
 */class XR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class JR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Z1()?8:Dk(nt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new XR;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ps()<=ee.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Gr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(ps()<=ee.DEBUG&&q("QueryEngine","Query:",Gr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ps()<=ee.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Gr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):M.resolve())}Yi(e,n){if(Sg(n))return M.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_l(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,_l(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Sg(n)||i.isEqual(Q.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(ps()<=ee.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gr(n)),this.rs(e,o,n,Rk(i,-1)).next(l=>l))})}ts(e,n){let r=new Be(A0(e));return n.forEach((i,s)=>{Ql(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ps()<=ee.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Gr(n)),this.Ji.getDocumentsMatchingQuery(e,n,or.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class ZR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(ie),this._s=new qi(s=>Yd(s),Xd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function eC(t,e,n,r){return new ZR(t,e,n,r)}async function K0(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Z();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function tC(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,g=m.keys();let A=M.resolve();return g.forEach(R=>{A=A.next(()=>f.getEntry(u,R)).next(x=>{const O=h.docVersions.get(R);oe(O!==null),x.version.compareTo(O)<0&&(m.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function G0(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function nC(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(qe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(m,A),function(x,O,E){return x.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=Sn(),h=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(rC(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Q.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function rC(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Sn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function iC(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sC(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ch(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Io(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Lg(t,e,n){const r=Y(t);let i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=Y(u),g=m._s.get(f);return g!==void 0?M.resolve(m.os.get(g)):m.Ur.getTargetData(h,f)}(r,o,Qt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:Z())).next(l=>(oC(r,Yk(e),l),{documents:l,Ts:s})))}function oC(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Mg{constructor(){this.activeTargetIds=nR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aC{constructor(){this.so=new Mg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Mg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lC{_o(e){}shutdown(){}}/**
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
 */class bg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ga=null;function mc(){return ga===null?ga=function(){return 268435456+Math.round(2147483648*Math.random())}():ga++,"0x"+ga.toString(16)}/**
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
 */const uC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ye="WebChannelConnection";class hC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=mc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Pi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=uC[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=mc();return new Promise((o,l)=>{const u=new a0;u.setWithCredentials(!0),u.listenOnce(l0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Va.NO_ERROR:const f=u.getResponseJson();q(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Va.TIMEOUT:q(Ye,`RPC '${e}' ${s} timed out`),l(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case Va.HTTP_ERROR:const m=u.getStatus();if(q(Ye,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const A=g==null?void 0:g.error;if(A&&A.status&&A.message){const R=function(O){const E=O.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(A.status);l(new B(R,A.message))}else l(new B(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(L.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{q(Ye,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);q(Ye,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=mc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=h0(),l=c0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,A=!1;const R=new cC({Io:O=>{A?q(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(g||(q(Ye,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),q(Ye,`RPC '${e}' stream ${i} sending:`,O),m.send(O))},To:()=>m.close()}),x=(O,E,v)=>{O.listen(E,S=>{try{v(S)}catch(V){setTimeout(()=>{throw V},0)}})};return x(m,ws.EventType.OPEN,()=>{A||(q(Ye,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),x(m,ws.EventType.CLOSE,()=>{A||(A=!0,q(Ye,`RPC '${e}' stream ${i} transport closed`),R.So())}),x(m,ws.EventType.ERROR,O=>{A||(A=!0,Pi(Ye,`RPC '${e}' stream ${i} transport errored:`,O),R.So(new B(L.UNAVAILABLE,"The operation could not be completed")))}),x(m,ws.EventType.MESSAGE,O=>{var E;if(!A){const v=O.data[0];oe(!!v);const S=v,V=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(V){q(Ye,`RPC '${e}' stream ${i} received error:`,V);const j=V.status;let U=function(_){const T=Re[_];if(T!==void 0)return b0(T)}(j),w=V.message;U===void 0&&(U=L.INTERNAL,w="Unknown error status: "+j+" with message "+V.message),A=!0,R.So(new B(U,w)),m.close()}else q(Ye,`RPC '${e}' stream ${i} received:`,v),R.bo(v)}}),x(l,u0.STAT_EVENT,O=>{O.stat===_h.PROXY?q(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===_h.NOPROXY&&q(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function gc(){return typeof document<"u"?document:null}/**
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
 */function Zl(t){return new ER(t,!0)}/**
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
 */class Q0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Y0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Q0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dC extends Y0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=SR(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Yt(o.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Rh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Th(u)?{documents:RR(s,u)}:{query:CR(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=j0(s,o.resumeToken);const h=Sh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=wl(s,o.snapshotVersion.toTimestamp());const h=Sh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=xR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Rh(this.serializer),n.removeTarget=e,this.a_(n)}}class fC extends Y0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return oe(!!e.streamToken),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=kR(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Rh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AR(this.serializer,r))};this.a_(n)}}/**
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
 */class pC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ah(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ah(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(In(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class gC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Br(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await ko(h),h.q_.set("Unknown"),h.L_.delete(4),await eu(h)}(this))})}),this.q_=new mC(r,i)}}async function eu(t){if(Br(t))for(const e of t.B_)await e(!0)}async function ko(t){for(const e of t.B_)await e(!1)}function X0(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),cf(n)?uf(n):Hi(n).r_()&&lf(n,e))}function af(t,e){const n=Y(t),r=Hi(n);n.N_.delete(e),r.r_()&&J0(n,e),n.N_.size===0&&(r.r_()?r.o_():Br(n)&&n.q_.set("Unknown"))}function lf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hi(t).A_(e)}function J0(t,e){t.Q_.xe(e),Hi(t).R_(e)}function uf(t){t.Q_=new yR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Hi(t).start(),t.q_.v_()}function cf(t){return Br(t)&&!Hi(t).n_()&&t.N_.size>0}function Br(t){return Y(t).L_.size===0}function Z0(t){t.Q_=void 0}async function yC(t){t.q_.set("Online")}async function _C(t){t.N_.forEach((e,n)=>{lf(t,e)})}async function vC(t,e){Z0(t),cf(t)?(t.q_.M_(e),uf(t)):t.q_.set("Unknown")}async function wC(t,e,n){if(t.q_.set("Online"),e instanceof U0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await El(t,r)}else if(e instanceof Ma?t.Q_.Ke(e):e instanceof F0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await G0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(qe.EMPTY_BYTE_STRING,f.snapshotVersion)),J0(s,u);const m=new qn(f.target,u,h,f.sequenceNumber);lf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await El(t,r)}}async function El(t,e,n){if(!Io(e))throw e;t.L_.add(1),await ko(t),t.q_.set("Offline"),n||(n=()=>G0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await eu(t)})}function ew(t,e){return e().catch(n=>El(t,n,e))}async function tu(t){const e=Y(t),n=lr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;EC(e);)try{const i=await iC(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,TC(e,i)}catch(i){await El(e,i)}tw(e)&&nw(e)}function EC(t){return Br(t)&&t.O_.length<10}function TC(t,e){t.O_.push(e);const n=lr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function tw(t){return Br(t)&&!lr(t).n_()&&t.O_.length>0}function nw(t){lr(t).start()}async function IC(t){lr(t).p_()}async function SC(t){const e=lr(t);for(const n of t.O_)e.m_(n.mutations)}async function AC(t,e,n){const r=t.O_.shift(),i=ef.from(r,e,n);await ew(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await tu(t)}async function kC(t,e){e&&lr(t).V_&&await async function(r,i){if(function(o){return pR(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();lr(r).s_(),await ew(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await tu(r)}}(t,e),tw(t)&&nw(t)}async function Fg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Br(n);n.L_.add(3),await ko(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await eu(n)}async function RC(t,e){const n=Y(t);e?(n.L_.delete(2),await eu(n)):e||(n.L_.add(2),await ko(n),n.q_.set("Unknown"))}function Hi(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new dC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:yC.bind(null,t),Ro:_C.bind(null,t),mo:vC.bind(null,t),d_:wC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),cf(t)?uf(t):t.q_.set("Unknown")):(await t.K_.stop(),Z0(t))})),t.K_}function lr(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new fC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:IC.bind(null,t),mo:kC.bind(null,t),f_:SC.bind(null,t),g_:AC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await tu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class hf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new hf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function df(t,e){if(In("AsyncQueue",`${e}: ${t}`),Io(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class _i{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Es(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new _i(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ug{constructor(){this.W_=new Ee(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Oi(e,n,_i.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class CC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class PC{constructor(){this.queries=jg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=jg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function jg(){return new qi(t=>S0(t),Gl)}async function ff(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new CC,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=df(o,`Initialization of query '${Gr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&mf(n)}async function pf(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xC(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&mf(n)}function NC(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function mf(t){t.Y_.forEach(e=>{e.next()})}var Ph,zg;(zg=Ph||(Ph={})).ea="default",zg.Cache="cache";class gf{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ph.Cache}}/**
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
 */class rw{constructor(e){this.key=e}}class iw{constructor(e){this.key=e}}class DC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=A0(e),this.Ra=new _i(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ug,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),A=Ql(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),x=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let O=!1;g&&A?g.data.isEqual(A.data)?R!==x&&(r.track({type:3,doc:A}),O=!0):this.ga(g,A)||(r.track({type:2,doc:A}),O=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),O=!0):g&&!A&&(r.track({type:1,doc:g}),O=!0,(u||h)&&(l=!0)),O&&(A?(o=o.add(A),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(A,R){const x=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return x(A)-x(R)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Oi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ug,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new iw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new rw(r))}),n}ba(e){this.Ta=e.Ts,this.da=Z();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Oi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class VC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OC{constructor(e){this.key=e,this.va=!1}}class LC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new qi(l=>S0(l),Gl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(H.comparator),this.Na=new Map,this.La=new rf,this.Ba={},this.ka=new Map,this.qa=Vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function MC(t,e,n=!0){const r=cw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await sw(r,e,n,!0),i}async function bC(t,e){const n=cw(t);await sw(n,e,!0,!1)}async function sw(t,e,n,r){const i=await sC(t.localStore,Qt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await FC(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&X0(t.remoteStore,i),l}async function FC(t,e,n,r,i){t.Ka=(m,g,A)=>async function(x,O,E,v){let S=O.view.ma(E);S.ns&&(S=await Lg(x.localStore,O.query,!1).then(({documents:w})=>O.view.ma(w,S)));const V=v&&v.targetChanges.get(O.targetId),j=v&&v.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(S,x.isPrimaryClient,V,j);return $g(x,O.targetId,U.wa),U.snapshot}(t,m,g,A);const s=await Lg(t.localStore,e,!0),o=new DC(e,s.Ts),l=o.ma(s.documents),u=Ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);$g(t,n,h.wa);const f=new VC(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function UC(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Gl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ch(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&af(r.remoteStore,i.targetId),xh(r,i.targetId)}).catch(To)):(xh(r,i.targetId),await Ch(r.localStore,i.targetId,!0))}async function jC(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),af(n.remoteStore,r.targetId))}async function zC(t,e,n){const r=GC(t);try{const i=await function(o,l){const u=Y(o),h=ue.now(),f=l.reduce((A,R)=>A.add(R.key),Z());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let R=Sn(),x=Z();return u.cs.getEntries(A,f).next(O=>{R=O,R.forEach((E,v)=>{v.isValidDocument()||(x=x.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,R)).next(O=>{m=O;const E=[];for(const v of l){const S=uR(v,m.get(v.key).overlayedDocument);S!=null&&E.push(new dr(v.key,S,g0(S.value.mapValue),Pt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,E,l)}).next(O=>{g=O;const E=O.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(A,O.batchId,E)})}).then(()=>({batchId:g.batchId,changes:R0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ee(ie)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Ro(r,i.changes),await tu(r.remoteStore)}catch(i){const s=df(i,"Failed to persist write");n.reject(s)}}async function ow(t,e){const n=Y(t);try{const r=await nC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?oe(o.va):i.removedDocuments.size>0&&(oe(o.va),o.va=!1))}),await Ro(n,r,e)}catch(r){await To(r)}}function Bg(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(h=!0)}),h&&mf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BC(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(H.comparator);o=o.insert(s,Ze.newNoDocument(s,Q.min()));const l=Z().add(s),u=new Jl(Q.min(),new Map,new Ee(ie),o,l);await ow(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),yf(r)}else await Ch(r.localStore,e,!1).then(()=>xh(r,e,n)).catch(To)}async function $C(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await tC(n.localStore,e);lw(n,r,null),aw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ro(n,i)}catch(i){await To(i)}}async function qC(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(oe(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);lw(r,e,n),aw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ro(r,i)}catch(i){await To(i)}}function aw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function lw(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function xh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||uw(t,r)})}function uw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(af(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),yf(t))}function $g(t,e,n){for(const r of n)r instanceof rw?(t.La.addReference(r.key,e),HC(t,r)):r instanceof iw?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||uw(t,r.key)):K()}function HC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),yf(t))}function yf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new OC(n)),t.Oa=t.Oa.insert(n,r),X0(t.remoteStore,new qn(Qt(Kl(n.path)),r,"TargetPurposeLimboResolution",Wd.oe))}}async function Ro(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=of.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(h,g=>M.forEach(g.$i,A=>f.persistence.referenceDelegate.addReference(m,g.targetId,A)).next(()=>M.forEach(g.Ui,A=>f.persistence.referenceDelegate.removeReference(m,g.targetId,A)))))}catch(m){if(!Io(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const A=f.os.get(g),R=A.snapshotVersion,x=A.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(g,x)}}}(r.localStore,s))}async function WC(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await K0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new B(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ro(n,r.hs)}}function KC(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return Z().add(r.key);{let i=Z();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function cw(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ow.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BC.bind(null,e),e.Ca.d_=xC.bind(null,e.eventManager),e.Ca.$a=NC.bind(null,e.eventManager),e}function GC(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$C.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qC.bind(null,e),e}class Tl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return eC(this.persistence,new JR,e.initialUser,this.serializer)}Ga(e){return new QR(sf.Zr,this.serializer)}Wa(e){return new aC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tl.provider={build:()=>new Tl};class Nh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WC.bind(null,this.syncEngine),await RC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PC}()}createDatastore(e){const n=Zl(e.databaseInfo.databaseId),r=function(s){return new hC(s)}(e.databaseInfo);return function(s,o,l,u){return new pC(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new gC(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Bg(this.syncEngine,n,0),function(){return bg.D()?new bg:new lC}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new LC(i,s,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ko(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Nh.provider={build:()=>new Nh};/**
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
 */class _f{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class QC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=f0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=df(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await K0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YC(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Fg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Fg(e.remoteStore,i)),t._onlineComponents=e}async function YC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Pi("Error using user provided cache. Falling back to memory cache: "+n),await yc(t,new Tl)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await yc(t,new Tl);return t._offlineComponents}async function hw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await qg(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await qg(t,new Nh))),t._onlineComponents}function XC(t){return hw(t).then(e=>e.syncEngine)}async function Il(t){const e=await hw(t),n=e.eventManager;return n.onListen=MC.bind(null,e.syncEngine),n.onUnlisten=UC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=bC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jC.bind(null,e.syncEngine),n}function JC(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new _f({next:g=>{f.Za(),o.enqueueAndForget(()=>pf(s,m));const A=g.docs.has(l);!A&&g.fromCache?h.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?h.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new gf(Kl(l.path),f,{includeMetadataChanges:!0,_a:!0});return ff(s,m)}(await Il(t),t.asyncQueue,e,n,r)),r.promise}function ZC(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new _f({next:g=>{f.Za(),o.enqueueAndForget(()=>pf(s,m)),g.fromCache&&u.source==="server"?h.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new gf(l,f,{includeMetadataChanges:!0,_a:!0});return ff(s,m)}(await Il(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function dw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Hg=new Map;/**
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
 */function fw(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eP(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wg(t){if(!H.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kg(t){if(H.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function mt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nu(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Gg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ru{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _k;switch(r.type){case"firstParty":return new Tk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hg.get(n);r&&(q("ComponentProvider","Removing Datastore"),Hg.delete(n),r.terminate())}(this),Promise.resolve()}}function tP(t,e,n,r={}){var i;const s=(t=mt(t,ru))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=W1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(h)}t._authCredentials=new vk(new d0(l,u))}}/**
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
 */class Cn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cn(this.firestore,e,this._query)}}class et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class rr extends Cn{constructor(e,n,r){super(e,n,Kl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new H(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function Dh(t,e,...n){if(t=Me(t),fw("collection","path",e),t instanceof ru){const r=fe.fromString(e,...n);return Kg(r),new rr(t,null,r)}{if(!(t instanceof et||t instanceof rr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Kg(r),new rr(t.firestore,null,r)}}function vi(t,e,...n){if(t=Me(t),arguments.length===1&&(e=f0.newId()),fw("doc","path",e),t instanceof ru){const r=fe.fromString(e,...n);return Wg(r),new et(t,null,new H(r))}{if(!(t instanceof et||t instanceof rr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Wg(r),new et(t.firestore,t instanceof rr?t.converter:null,new H(r))}}/**
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
 */class Qg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Q0(this,"async_queue_retry"),this.Vu=()=>{const r=gc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=gc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new gn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Io(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw In("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=hf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Yg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class An extends ru{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Qg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qg(e),this._firestoreClient=void 0,await e}}}function nP(t,e){const n=typeof t=="object"?t:Iv(),r=typeof t=="string"?t:"(default)",i=Vd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=q1("firestore");s&&tP(i,...s)}return i}function iu(t){if(t._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rP(t),t._firestoreClient}function rP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new Lk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,dw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new QC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Li(qe.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Li(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class su{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ou{constructor(e){this._methodName=e}}/**
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
 */class vf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class wf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const iP=/^__.*__$/;class sP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new So(e,this.data,n,this.fieldTransforms)}}class pw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Ef{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Sl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(mw(this.Cu)&&iP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class oP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zl(e)}Qu(e,n,r,i=!1){return new Ef({Cu:e,methodName:n,qu:r,path:je.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function au(t){const e=t._freezeSettings(),n=Zl(t._databaseId);return new oP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gw(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);If("Data must be an object, but it was:",o,r);const l=yw(r,o);let u,h;if(s.merge)u=new vt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=Vh(e,m,n);if(!o.contains(g))throw new B(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);vw(f,g)||f.push(g)}u=new vt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new sP(new ct(l),u,h)}class lu extends ou{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lu}}class Tf extends ou{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new co(e.serializer,x0(e.serializer,this.$u));return new sR(e.path,n)}isEqual(e){return e instanceof Tf&&this.$u===e.$u}}function aP(t,e,n,r){const i=t.Qu(1,e,n);If("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();zr(r,(u,h)=>{const f=Sf(e,u,n);h=Me(h);const m=i.Nu(f);if(h instanceof lu)s.push(f);else{const g=Co(h,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new vt(s);return new pw(o,l,i.fieldTransforms)}function lP(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Vh(e,r,n)],u=[i];if(s.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Vh(e,s[g])),u.push(s[g+1]);const h=[],f=ct.empty();for(let g=l.length-1;g>=0;--g)if(!vw(h,l[g])){const A=l[g];let R=u[g];R=Me(R);const x=o.Nu(A);if(R instanceof lu)h.push(A);else{const O=Co(R,x);O!=null&&(h.push(A),f.set(A,O))}}const m=new vt(h);return new pw(f,m,o.fieldTransforms)}function uP(t,e,n,r=!1){return Co(n,t.Qu(r?4:3,e))}function Co(t,e){if(_w(t=Me(t)))return If("Unsupported field value:",e,t),yw(t,e);if(t instanceof ou)return function(r,i){if(!mw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Co(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return x0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ue.fromDate(r);return{timestampValue:wl(i.serializer,s)}}if(r instanceof ue){const s=new ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wl(i.serializer,s)}}if(r instanceof vf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Li)return{bytesValue:j0(i.serializer,r._byteString)};if(r instanceof et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:nf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof wf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Jd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${nu(r)}`)}(t,e)}function yw(t,e){const n={};return p0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,i)=>{const s=Co(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function _w(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ue||t instanceof vf||t instanceof Li||t instanceof et||t instanceof ou||t instanceof wf)}function If(t,e,n){if(!_w(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=nu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Vh(t,e,n){if((e=Me(e))instanceof su)return e._internalPath;if(typeof e=="string")return Sf(t,e);throw Sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const cP=new RegExp("[~\\*/\\[\\]]");function Sf(t,e,n){if(e.search(cP)>=0)throw Sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new su(...e.split("."))._internalPath}catch{throw Sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(L.INVALID_ARGUMENT,l+t+u)}function vw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ww{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hP extends ww{data(){return super.data()}}function uu(t,e){return typeof e=="string"?Sf(t,e):e instanceof su?e._internalPath:e._delegate._internalPath}/**
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
 */function Ew(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Af{}class kf extends Af{}function Tw(t,e,...n){let r=[];e instanceof Af&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Rf).length,l=s.filter(u=>u instanceof cu).length;if(o>1||o>0&&l>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class cu extends kf{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cu(e,n,r)}_apply(e){const n=this._parse(e);return Sw(e._query,n),new Cn(e.firestore,e.converter,Ih(e._query,n))}_parse(e){const n=au(e.firestore);return function(s,o,l,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Jg(m,f);const A=[];for(const R of m)A.push(Xg(u,s,R));g={arrayValue:{values:A}}}else g=Xg(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Jg(m,f),g=uP(l,o,m,f==="in"||f==="not-in");return Pe.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Iw(t,e,n){const r=e,i=uu("where",t);return cu._create(i,r,n)}class Rf extends Af{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)Sw(o,u),o=Ih(o,u)}(e._query,n),new Cn(e.firestore,e.converter,Ih(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cf extends kf{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ao(s,o)}(e._query,this._field,this._direction);return new Cn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new $i(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function dP(t,e="asc"){const n=e,r=uu("orderBy",t);return Cf._create(r,n)}class Pf extends kf{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Pf(e,n,r)}_apply(e){return new Cn(e.firestore,e.converter,_l(e._query,this._limit,this._limitType))}}function fP(t){return Pf._create("limit",t,"F")}function Xg(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!I0(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!H.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _g(t,new H(r))}if(n instanceof et)return _g(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nu(n)}.`)}function Jg(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sw(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class pP{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new wf(s)}convertGeoPoint(e){return new vf(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(io(e));default:return null}}convertTimestamp(e){const n=ar(e);return new ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);oe(W0(r));const i=new so(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||In(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Aw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Is{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kw extends ww{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(uu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ba extends kw{data(e={}){return super.data(e)}}class Rw{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Is(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ba(this._firestore,this._userDataWriter,r.key,r,new Is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ba(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Is(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ba(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Is(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:mP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function gP(t){t=mt(t,et);const e=mt(t.firestore,An);return JC(iu(e),t._key).then(n=>Cw(e,t,n))}class xf extends pP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function yP(t){t=mt(t,Cn);const e=mt(t.firestore,An),n=iu(e),r=new xf(e);return Ew(t._query),ZC(n,t._query).then(i=>new Rw(e,r,t,i))}function Zg(t,e,n){t=mt(t,et);const r=mt(t.firestore,An),i=Aw(t.converter,e,n);return hu(r,[gw(au(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Pt.none())])}function Oh(t,e,n,...r){t=mt(t,et);const i=mt(t.firestore,An),s=au(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof su?lP(s,"updateDoc",t._key,e,n,r):aP(s,"updateDoc",t._key,e),hu(i,[o.toMutation(t._key,Pt.exists(!0))])}function _P(t){return hu(mt(t.firestore,An),[new Zd(t._key,Pt.none())])}function vP(t,e){const n=mt(t.firestore,An),r=vi(t),i=Aw(t.converter,e);return hu(n,[gw(au(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Pt.exists(!1))]).then(()=>r)}function wP(t,...e){var n,r,i;t=Me(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Yg(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Yg(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(t instanceof et)h=mt(t.firestore,An),f=Kl(t._key.path),u={next:m=>{e[o]&&e[o](Cw(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=mt(t,Cn);h=mt(m.firestore,An),f=m._query;const g=new xf(h);u={next:A=>{e[o]&&e[o](new Rw(h,g,m,A))},error:e[o+1],complete:e[o+2]},Ew(t._query)}return function(g,A,R,x){const O=new _f(x),E=new gf(A,O,R);return g.asyncQueue.enqueueAndForget(async()=>ff(await Il(g),E)),()=>{O.Za(),g.asyncQueue.enqueueAndForget(async()=>pf(await Il(g),E))}}(iu(h),f,l,u)}function hu(t,e){return function(r,i){const s=new gn;return r.asyncQueue.enqueueAndForget(async()=>zC(await XC(r),i,s)),s.promise}(iu(t),e)}function Cw(t,e,n){const r=n.docs.get(e._key),i=new xf(t);return new kw(t,i,e._key,r,new Is(n.hasPendingWrites,n.fromCache),e.converter)}function Pw(t){return new Tf("increment",t)}(function(e,n=!0){(function(i){Bi=i})(Ui),Ri(new Or("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new An(new wk(r.getProvider("auth-internal")),new Sk(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new so(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),tr(fg,"4.7.3",e),tr(fg,"4.7.3","esm2017")})();const EP={apiKey:"AIzaSyB8GC3QQBIF26qRIbnUduaIQ0fZzLbqUAI",authDomain:"link-shortener-e5ffa.firebaseapp.com",projectId:"link-shortener-e5ffa",storageBucket:"link-shortener-e5ffa.firebasestorage.app",messagingSenderId:"107415316049",appId:"1:107415316049:web:e1ba27f5033908f970ba70"},xw=Tv(EP),ms=pk(xw),zn=nP(xw),Lh=new un;Lh.setCustomParameters({prompt:"select_account"});const Po=()=>{const[t,e]=_e.useState(null),[n,r]=_e.useState(!0);return _e.useEffect(()=>{const o=tA(ms,l=>{e(l),r(!1)});return xA(ms).catch(l=>{console.error("Error handling redirect result:",l)}),o},[]),_e.useEffect(()=>{if(!t)return;(async()=>{try{const l=vi(zn,"users",t.uid);(await gP(l)).exists()?await Zg(l,{displayName:t.displayName,email:t.email,photoURL:t.photoURL,updatedAt:ue.now()},{merge:!0}):await Zg(l,{uid:t.uid,displayName:t.displayName,email:t.email,photoURL:t.photoURL,createdAt:ue.now(),updatedAt:ue.now()})}catch(l){console.error("Error saving user data:",l)}})()},[t]),{user:t,loading:n,signInWithGoogle:async()=>{try{await TA(ms,Lh)}catch(o){console.error("Popup sign-in failed, falling back to redirect:",o);try{await CA(ms,Lh)}catch(l){console.error("Error signing in with redirect:",l)}}},logout:async()=>{try{await nA(ms)}catch(o){console.error("Error signing out:",o)}}}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var TP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),De=(t,e)=>{const n=_e.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>_e.createElement("svg",{ref:f,...TP,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${IP(t)}`,l].join(" "),...h},[...e.map(([m,g])=>_e.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=De("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=De("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=De("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=De("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=De("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=De("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=De("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=De("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=De("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=De("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=De("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=De("MousePointer",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=De("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=De("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=De("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=De("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=De("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=De("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=De("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),zP={name:"Dark",primary:"from-blue-500 to-cyan-400",secondary:"from-blue-600 to-cyan-500",accent:"blue",gradient:"bg-gradient-to-br from-gray-900 to-gray-800"},xo=()=>(_e.useEffect(()=>{document.documentElement.classList.add("dark")},[]),{currentTheme:"dark",preference:"dark",themeConfig:zP,changePreference:()=>{},toggleDark:()=>{}}),BP=()=>{const{user:t,logout:e}=Po(),{themeConfig:n}=xo();return N.jsx("header",{className:`bg-gradient-to-r ${n.primary} shadow-lg`,children:N.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:N.jsxs("div",{className:"flex justify-between items-center py-4",children:[N.jsxs("div",{className:"flex items-center space-x-3",children:[N.jsx("div",{className:"p-2 bg-white/20 dark:bg-gray-800/40 rounded-lg backdrop-blur-sm",children:N.jsx(Al,{className:"w-6 h-6 text-white"})}),N.jsx("h1",{className:"text-2xl font-bold text-white",children:"LinkShort"})]}),N.jsx("div",{className:"flex items-center space-x-4",children:t&&N.jsxs("div",{className:"flex items-center space-x-3",children:[N.jsxs("div",{className:"flex items-center space-x-2 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg px-3 py-2",children:[t.photoURL?N.jsx("img",{src:t.photoURL,alt:t.displayName||"User",className:"w-6 h-6 rounded-full"}):N.jsx(jP,{className:"w-5 h-5 text-white"}),N.jsx("span",{className:"text-white text-sm font-medium",children:t.displayName||t.email})]}),N.jsx("button",{onClick:e,className:"p-2 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700/70 rounded-lg transition-all duration-200",title:"Sign Out",children:N.jsx(DP,{className:"w-5 h-5 text-white"})})]})})]})})})},$P=()=>{const{signInWithGoogle:t}=Po(),{themeConfig:e}=xo();return N.jsx("div",{className:`min-h-screen ${e.gradient} flex items-center justify-center px-4 dark:text-gray-100`,children:N.jsxs("div",{className:"max-w-2xl text-center space-y-6",children:[N.jsx("div",{className:`inline-flex p-4 bg-gradient-to-r ${e.primary} rounded-2xl`,children:N.jsx(Al,{className:"w-10 h-10 text-white"})}),N.jsx("h1",{className:"text-4xl font-bold text-gray-100",children:"LinkShort"}),N.jsx("p",{className:"text-gray-300",children:"Shorten your links with style and track their performance with beautiful analytics."}),N.jsx("p",{className:"text-gray-400",children:"Create custom aliases, organize your links and view click statistics. All in a modern and responsive interface."}),N.jsx("button",{onClick:t,className:`mt-6 bg-gradient-to-r ${e.primary} hover:${e.secondary} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl`,children:"Get Started"})]})})},Nw=t=>{const[e,n]=_e.useState([]),[r,i]=_e.useState(!0);return _e.useEffect(()=>{if(!t){n([]),i(!1);return}const h=Tw(Dh(zn,"links"),Iw("userId","==",t),dP("createdAt","desc"));return wP(h,m=>{const g=m.docs.map(A=>{var O,E;const R=A.data(),x=window.location.origin+"/link-shortener/";return{id:A.id,...R,shortUrl:R.shortUrl||`${x.replace(/\/$/,"")}/${R.userId}/${R.customAlias||R.shortCode}`,openInNewTab:R.openInNewTab??!0,createdAt:((O=R.createdAt)==null?void 0:O.toDate())||new Date,updatedAt:((E=R.updatedAt)==null?void 0:E.toDate())||new Date}});n(g),i(!1)})},[t]),{links:e,loading:r,createLink:async h=>{if(t){h.title||(h.title=""),h.description||(h.description="");try{const m=`${(window.location.origin+"/link-shortener/").replace(/\/$/,"")}/${t}/${h.shortCode}`;await vP(Dh(zn,"links"),{...h,shortUrl:m,userId:t,clicks:0,createdAt:ue.now(),updatedAt:ue.now()})}catch(f){throw console.error("Error creating link:",f),f}}},updateLink:async(h,f)=>{try{await Oh(vi(zn,"links",h),{...f,updatedAt:ue.now()})}catch(m){throw console.error("Error updating link:",m),m}},deleteLink:async h=>{try{await _P(vi(zn,"links",h))}catch(f){throw console.error("Error deleting link:",f),f}},incrementClicks:async h=>{try{await Oh(vi(zn,"links",h),{clicks:Pw(1),updatedAt:ue.now()})}catch(f){console.error("Error incrementing clicks:",f)}}}},qP=()=>{const{user:t}=Po(),{createLink:e}=Nw((t==null?void 0:t.uid)||null),[n,r]=_e.useState(""),[i,s]=_e.useState(""),[o,l]=_e.useState(""),[u,h]=_e.useState(""),[f,m]=_e.useState(!0),[g,A]=_e.useState(!1),{themeConfig:R}=xo(),x=()=>Math.random().toString(36).substring(2,8),O=async E=>{if(E.preventDefault(),!(!n.trim()||!t)){A(!0);try{await e({originalUrl:n.trim(),shortCode:i.trim()||x(),customAlias:i.trim()||void 0,title:o.trim()||void 0,description:u.trim()||void 0,openInNewTab:f,userId:t.uid,isActive:!0}),r(""),s(""),l(""),h(""),m(!0)}catch(v){console.error("Error creating link:",v)}finally{A(!1)}}};return N.jsxs("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 dark:border-gray-700",children:[N.jsxs("div",{className:"flex items-center space-x-3 mb-6",children:[N.jsx("div",{className:`p-2 bg-gradient-to-r ${R.primary} rounded-lg`,children:N.jsx(LP,{className:"w-5 h-5 text-white"})}),N.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100",children:"Create Short Link"})]}),N.jsxs("form",{onSubmit:O,className:"space-y-4",children:[N.jsxs("div",{children:[N.jsxs("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:[N.jsx(NP,{className:"w-4 h-4"}),N.jsx("span",{children:"Original URL *"})]}),N.jsx("input",{type:"url",value:n,onChange:E=>r(E.target.value),placeholder:"https://example.com/very-long-url",className:"w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-900 dark:text-gray-100",required:!0})]}),N.jsxs("div",{children:[N.jsxs("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:[N.jsx(UP,{className:"w-4 h-4"}),N.jsx("span",{children:"Custom Alias (Optional)"})]}),N.jsx("input",{type:"text",value:i,onChange:E=>s(E.target.value.replace(/[^a-zA-Z0-9-_]/g,"")),placeholder:"my-custom-link",className:"w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-900 dark:text-gray-100"}),N.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:"Only letters, numbers, hyphens, and underscores allowed"})]}),N.jsxs("div",{children:[N.jsxs("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:[N.jsx(ey,{className:"w-4 h-4"}),N.jsx("span",{children:"Title (Optional)"})]}),N.jsx("input",{type:"text",value:o,onChange:E=>l(E.target.value),placeholder:"My Awesome Link",className:"w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-900 dark:text-gray-100"})]}),N.jsxs("div",{children:[N.jsxs("label",{className:"flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:[N.jsx(ey,{className:"w-4 h-4"}),N.jsx("span",{children:"Description (Optional)"})]}),N.jsx("textarea",{value:u,onChange:E=>h(E.target.value),placeholder:"Brief description of your link",rows:3,className:"w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white dark:bg-gray-900 dark:text-gray-100"})]}),N.jsx("button",{type:"submit",disabled:g||!n.trim(),className:`w-full bg-gradient-to-r ${R.primary} hover:${R.secondary} disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl`,children:g?"Creating...":"Create Short Link"})]})]})},HP=({link:t,onEdit:e,onDelete:n,onCopy:r})=>{const[i,s]=_e.useState(!1),{themeConfig:o}=xo(),l=t.shortUrl||`${window.location.origin}${"/link-shortener/".replace(/\/$/,"")}/${t.userId}/${t.customAlias||t.shortCode}`,u=i?t.originalUrl:t.originalUrl.length>50?t.originalUrl.substring(0,50)+"...":t.originalUrl,h=f=>new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(f);return N.jsxs("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-200",children:[N.jsxs("div",{className:"flex items-start justify-between mb-4",children:[N.jsxs("div",{className:"flex-1",children:[t.title&&N.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-100 mb-1",children:t.title}),t.description&&N.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm mb-3",children:t.description}),N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex items-center space-x-2",children:[N.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Short URL:"}),N.jsxs("button",{onClick:()=>r(l),className:`text-sm font-mono bg-gradient-to-r ${o.primary} text-white px-3 py-1 rounded-lg hover:shadow-md transition-all duration-200 flex items-center space-x-1`,children:[N.jsx("span",{children:l}),N.jsx(kP,{className:"w-3 h-3"})]})]}),N.jsxs("div",{className:"flex items-center space-x-2",children:[N.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Original:"}),N.jsxs("div",{className:"flex items-center space-x-1",children:[N.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-100 font-mono break-all",children:u}),t.originalUrl.length>50&&N.jsx("button",{onClick:()=>s(!i),className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:i?N.jsx(CP,{className:"w-4 h-4"}):N.jsx(PP,{className:"w-4 h-4"})})]})]})]})]}),N.jsxs("div",{className:"flex items-center space-x-2 ml-4",children:[N.jsxs("div",{className:`flex items-center space-x-1 bg-gradient-to-r ${o.primary} text-white px-3 py-1 rounded-lg`,children:[N.jsx(SP,{className:"w-3 h-3"}),N.jsx("span",{className:"text-sm font-semibold",children:t.clicks})]}),N.jsx("div",{className:`w-3 h-3 rounded-full ${t.isActive?"bg-green-400":"bg-red-400"}`,title:t.isActive?"Active":"Inactive"})]})]}),N.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700",children:[N.jsxs("div",{className:"text-xs text-gray-500 dark:text-gray-400",children:["Created ",h(t.createdAt)]}),N.jsxs("div",{className:"flex items-center space-x-2",children:[N.jsx("a",{href:l,target:t.openInNewTab?"_blank":"_self",rel:"noopener noreferrer",className:"p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",title:"Open short link",children:N.jsx(RP,{className:"w-4 h-4"})}),N.jsx("button",{onClick:()=>e(t),className:"p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",title:"Edit link",children:N.jsx(OP,{className:"w-4 h-4"})}),N.jsx("button",{onClick:()=>n(t.id),className:"p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors",title:"Delete link",children:N.jsx(bP,{className:"w-4 h-4"})})]})]})]})},WP=()=>{const{user:t}=Po(),{links:e,loading:n,updateLink:r,deleteLink:i}=Nw((t==null?void 0:t.uid)||null),{themeConfig:s}=xo(),[o,l]=_e.useState(""),[u,h]=_e.useState("all"),f=x=>{navigator.clipboard.writeText(x)},m=x=>{r(x.id,{isActive:!x.isActive})},g=e.filter(x=>{var v,S;const O=!o||((v=x.title)==null?void 0:v.toLowerCase().includes(o.toLowerCase()))||x.originalUrl.toLowerCase().includes(o.toLowerCase())||((S=x.customAlias)==null?void 0:S.toLowerCase().includes(o.toLowerCase())),E=u==="all"||u==="active"&&x.isActive||u==="inactive"&&!x.isActive;return O&&E}),A=e.reduce((x,O)=>x+O.clicks,0),R=e.filter(x=>x.isActive).length;return n?N.jsx("div",{className:`min-h-screen ${s.gradient} flex items-center justify-center dark:text-gray-100`,children:N.jsxs("div",{className:"text-center",children:[N.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),N.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Loading your links..."})]})}):N.jsx("div",{className:`min-h-screen ${s.gradient} dark:text-gray-100`,children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[N.jsx("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 dark:border-gray-700",children:N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Total Links"}),N.jsx("p",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:e.length})]}),N.jsx(Al,{className:"w-8 h-8 text-blue-500"})]})}),N.jsx("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 dark:border-gray-700",children:N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Total Clicks"}),N.jsx("p",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:A})]}),N.jsx(VP,{className:"w-8 h-8 text-green-500"})]})}),N.jsx("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 dark:border-gray-700",children:N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Active Links"}),N.jsx("p",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:R})]}),N.jsx(FP,{className:"w-8 h-8 text-purple-500"})]})}),N.jsx("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 dark:border-gray-700",children:N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"This Month"}),N.jsx("p",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:e.filter(x=>{const O=new Date,E=new Date(x.createdAt);return E.getMonth()===O.getMonth()&&E.getFullYear()===O.getFullYear()}).length})]}),N.jsx(AP,{className:"w-8 h-8 text-orange-500"})]})})]}),N.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[N.jsx("div",{className:"lg:col-span-1",children:N.jsx(qP,{})}),N.jsx("div",{className:"lg:col-span-2",children:N.jsxs("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 dark:border-gray-700",children:[N.jsxs("div",{className:"flex items-center justify-between mb-6",children:[N.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100",children:"Your Links"}),N.jsxs("div",{className:"flex items-center space-x-4",children:[N.jsxs("div",{className:"relative",children:[N.jsx(MP,{className:"w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),N.jsx("input",{type:"text",placeholder:"Search links...",value:o,onChange:x=>l(x.target.value),className:"pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white dark:bg-gray-900 dark:text-gray-100"})]}),N.jsxs("div",{className:"relative",children:[N.jsx(xP,{className:"w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),N.jsxs("select",{value:u,onChange:x=>h(x.target.value),className:"pl-10 pr-8 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none bg-white dark:bg-gray-900 dark:text-gray-100",children:[N.jsx("option",{value:"all",children:"All Links"}),N.jsx("option",{value:"active",children:"Active"}),N.jsx("option",{value:"inactive",children:"Inactive"})]})]})]})]}),N.jsx("div",{className:"space-y-4 max-h-96 overflow-y-auto",children:g.length===0?N.jsxs("div",{className:"text-center py-8",children:[N.jsx(Al,{className:"w-12 h-12 text-gray-300 mx-auto mb-4"}),N.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:e.length===0?"No links created yet":"No links match your search"})]}):g.map(x=>N.jsx(HP,{link:x,onEdit:m,onDelete:i,onCopy:f},x.id))})]})})]})]})})};function KP(){const{user:t,loading:e}=Po();return e?N.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center dark:text-gray-100",children:N.jsxs("div",{className:"text-center",children:[N.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),N.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Loading..."})]})}):t?N.jsxs("div",{className:"min-h-screen",children:[N.jsx(BP,{}),N.jsx(WP,{})]}):N.jsx($P,{})}const GP=async t=>{const e=async n=>{var s,o;const r=Tw(Dh(zn,"links"),Iw(n,"==",t),fP(1)),i=await yP(r);if(!i.empty){const l=i.docs[0],u=l.data();return{id:l.id,...u,openInNewTab:u.openInNewTab??!0,shortUrl:u.shortUrl,createdAt:((s=u.createdAt)==null?void 0:s.toDate())||new Date,updatedAt:((o=u.updatedAt)==null?void 0:o.toDate())||new Date}}return null};return await e("customAlias")||await e("shortCode")},QP=async t=>{await Oh(vi(zn,"links",t),{clicks:Pw(1),updatedAt:ue.now()})},Dw="/link-shortener/".replace(/\/$/,""),Vw=window.location.pathname.replace(Dw,"");console.log("Base Path:",Dw);console.log("Current Path:",Vw);const Mh=Vw.match(/^\/([^/]+)\/([^/?#]+)/);console.log("Redirect Match:",Mh);if(Mh){const t=decodeURIComponent(Mh[2]);(async()=>{const e=await GP(t);if(e){try{await QP(e.id)}catch(n){console.error("Failed to record click:",n)}e.openInNewTab?window.open(e.originalUrl,"_self","noopener,noreferrer"):window.location.replace(e.originalUrl)}else document.body.innerHTML="<h1>Link not found</h1>"})()}else fv(document.getElementById("root")).render(N.jsx(_e.StrictMode,{children:N.jsx(KP,{})}));
