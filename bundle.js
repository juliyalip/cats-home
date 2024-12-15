(()=>{"use strict";var n={66:(n,t,e)=>{e.d(t,{A:()=>l});var o=e(601),r=e.n(o),i=e(314),a=e.n(i)()(r());a.push([n.id,'.main {\n  background-color: var(--common-white);\n  padding-bottom: 96px;\n}\n\n.container {\n  max-width: 1128px;\n  margin: auto;\n  padding: 0 16px;\n}\n\n.posts {\n  margin-bottom: 80px;\n  display: grid;\n  gap: 12px;\n  grid-template-columns: 1fr;\n}\n\n\n.post > a {\n  position: relative;\n  color: var(--common-white);\n}\n\n.overlay {\n  border-radius: 0px 0px 16px 16px;\n  background-color: rgba(18, 18, 22, 0.5);\n  padding: 12px 20px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.post-title {\n  color: var(--common-white);\n  font-family: var(--common-font);\n}\n\n/*  BLOG SECTION -------------*/\n\n.blog {\n  display: grid;\n  gap: 48px;\n}\n\n.blog-link {\n  color: var(--common-black);\n  display: grid;\n  gap: 20px;\n}\n\n.blog-title {\n  color: var(--grey, #2c2c2c);\n  font-family: var(--common-font);\n  margin-bottom: 12px;\n}\n\n.blog-text {\n  color: var(--grey, #2c2c2c);\n  font-family: var(--common-font);\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n/*  Social section ----------*/\n\n.socials-list{\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px 8px\n}\n\n.socials-title {\n  color: var(--grey, #2c2c2c);\n  font-family: var(--common-font);\n  margin-bottom: 24px;\n}\n.social-link {\n  padding: 8px;\n  color: var(--common-black, #2f2f37);\n  border-radius: 16px;\n  font-family: var(--common-font);\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  display: grid;\n  grid-template-columns: 32px 1fr;\n  align-items: center;\n  justify-items: center;\n}\n\n.socials-item:nth-child(1) .social-link {\n  background-color: var(--navy);\n}\n\n.socials-item:nth-child(2) .social-link {\n  background-color: var(--pink);\n}\n\n.socials-item:nth-child(3) .social-link {\n  background-color: var(--scarlet);\n}\n\n.socials-item:nth-child(4) .social-link {\n  background-color: var(--turquoise);\n}\n\n.socials-item:nth-child(5) .social-link {\n  background-color: var(--yellow);\n}\n\n.socials-item:nth-child(6) .social-link {\n  background-color: var(--lilac);\n}\n\n.video-title {\n  color: var(--grey, #2c2c2c);\n  font-family: var(--common-font);\n}\n\n.footer {\n  padding: 16px;\n  background-color: var(--blue-light);\n}\n\n@media (min-width: 768px) {\n  .posts {\n    gap: 24px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .post:first-child {\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n    position: relative; \n    overflow: hidden; \n    display: flex; \n    align-items: stretch; \n    border-radius: 16px;\n  }\n\n  .post:first-child picture {\n    display: flex; \n    width: 100%; \n    height: 100%; \n  }\n\n  .post:first-child img {\n    width: 100%; \n    height: 100%; \n    object-fit: cover; \n  }\n\n  .longread{\n    display: grid;\n    gap: 96px\n  }\n\n  .blog {\n    gap: 36px;\n  }\n\n  .blog-link {\n    gap: 24px;\n    grid-template-columns: 264px 1fr;\n  }\n  .socials-list {\n    gap: 24px\n  }\n}\n\n@media (min-width: 1440px) {\n  .longread {\n    grid-template-areas:\n      "b b s"\n      "b b s"\n      "b b v"\n      "b b .";\n    gap: 60px 24px;\n  }\n\n  .blog {\n    grid-area: b;\n  }\n  .social {\n    grid-area: s;\n  }\n  .video {\n    grid-area: v;\n  }\n}',""]);const l=a},381:(n,t,e)=>{e.d(t,{A:()=>l});var o=e(601),r=e.n(o),i=e(314),a=e.n(i)()(r());a.push([n.id,".header {\n    background-color: var(--common-white);\n    padding: 16px 0;\n  }\n  \n  .header-container {\n    display: grid;\n    grid-template-columns: 24px 1fr;\n    column-gap: 8px;\n    align-items: center;\n  }\n  \n  .logo {\n    display: block;\n    width: 24px;\n    height: 24px;\n  }\n  \n  .label {\n    color: var(--orange);\n    font-family: var(--common-font);\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 40px;\n    letter-spacing: 0.5px;\n  }",""]);const l=a},732:(n,t,e)=>{e.d(t,{A:()=>l});var o=e(601),r=e.n(o),i=e(314),a=e.n(i)()(r());a.push([n.id,":root {\n    --common-white: #fff;\n    --orange: #f07f2e;\n    --grey: #2c2c2c;\n    --common-black: #2f2f37;\n    --blue-light: #ecf6ff;\n    --navy: #d8def8;\n    --scarlet: #fae8ea;\n    --yellow: #fffddc;\n    --pink: #ffe8f1;\n    --turquoise: #e9f9f8;\n    --lilac: #f2eef8;\n    --common-font: Montserrat, Helvetica, sans-serif;\n  }\n  \n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  .title {\n    font-size: 28px;\n    font-weight: 700;\n    line-height: 36px;\n    letter-spacing: 0.5px;\n  }\n  \n  .sub-title {\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 20px;\n    letter-spacing: 0.5px;\n  }\n  \n  img {\n    display: block;\n    width: 100%;\n   \n  }\n  \n  a {\n    text-decoration: none;\n    display: block;\n  }\n  \n  ul {\n    list-style: none;\n  }\n\n  li{\n    list-style: none;\n  }\n\n  .container{\n    max-width: 1128px;\n    padding: 0 15px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .main{\n    background-color: var(--common-white);\n    padding-bottom: 96px;\n}\n@media (min-width: 768px) {\n  .sub-title {\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 28px;\n    letter-spacing: 0.5px;\n  }\n}",""]);const l=a},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],l=0;l<n.length;l++){var c=n[l],s=o.base?c[0]+o.base:c[0],p=i[s]||0,d="".concat(s," ").concat(p);i[s]=p+1;var f=e(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var u=r(m,o);o.byIndex=l,t.splice(l,0,{identifier:d,updater:u,references:1})}a.push(d)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=e(i[a]);t[l].references--}for(var c=o(n,r),s=0;s<i.length;s++){var p=e(i[s]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=c}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var o=e(72),r=e.n(o),i=e(825),a=e.n(i),l=e(659),c=e.n(l),s=e(56),p=e.n(s),d=e(540),f=e.n(d),m=e(113),u=e.n(m),g=e(732),h={};h.styleTagTransform=u(),h.setAttributes=p(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=f(),r()(g.A,h),g.A&&g.A.locals&&g.A.locals;var v=e(381),x={};x.styleTagTransform=u(),x.setAttributes=p(),x.insert=c().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=f(),r()(v.A,x),v.A&&v.A.locals&&v.A.locals;var b=e(66),y={};y.styleTagTransform=u(),y.setAttributes=p(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=f(),r()(b.A,y),b.A&&b.A.locals&&b.A.locals})();