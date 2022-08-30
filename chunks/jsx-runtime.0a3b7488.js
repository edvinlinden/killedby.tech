import{r as l}from"./index.7db4cd94.js";function _(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const O=()=>{const[e,r]=l.exports.useState(0);return l.exports.useEffect(()=>{const o=()=>{r(window.pageYOffset)};return window.addEventListener("scroll",o),o(),()=>window.removeEventListener("scroll",o)},[]),e};var u={exports:{}},n={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=l.exports,a=60103;n.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var p=Symbol.for;a=p("react.element"),n.Fragment=p("react.fragment")}var m=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,o){var t,s={},i=null,f=null;o!==void 0&&(i=""+o),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(f=r.ref);for(t in r)y.call(r,t)&&!v.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)s[t]===void 0&&(s[t]=r[t]);return{$$typeof:a,type:e,key:i,ref:f,props:s,_owner:m.current}}n.jsx=c;n.jsxs=c;(function(e){e.exports=n})(u);const w=_(u.exports),{jsx:j,jsxs:E,Fragment:P}=w;export{P as F,j as a,E as j,O as u};
