(()=>{"use strict";var n={874:(n,e,t)=>{t.d(e,{A:()=>s});var i=t(601),o=t.n(i),r=t(314),a=t.n(r)()(o());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},365:(n,e,t)=>{t.d(e,{A:()=>s});var i=t(601),o=t.n(i),r=t(314),a=t.n(r)()(o());a.push([n.id,'* {\n  font-family: "Roboto";\n  box-sizing: border-box;\n}\n\nsvg {\n  max-width: 20px;\n  width: 1rem;\n}\n\na {\n  text-decoration: none;\n}\n\nbody {\n  width: 100vw;\n  box-sizing: border-box;\n  overflow-x: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: "Playfair Display", serif;\n}\n\nheader {\n  max-width: 1000px;\n  position: relative;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 0;\n  margin: 0 auto;\n  gap: 1rem;\n}\n\n.profile-pic-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  margin: 0 auto;\n}\n\n.profile-pic-container > img {\n  width: 100%;\n}\n\n.profile-pic-container > h1 {\n  position: absolute;\n  bottom: 1%;\n  margin: 0;\n  color: white;\n  font-weight: 900;\n  text-shadow: 1px 1px 2px black;\n}\n\n.profile-description-container {\n  text-align: center;\n  background-color: white;\n}\n\n.profile-description-container > p {\n  max-width: 400px;\n}\n\n.profile-description-container > :last-child {\n  font-size: 1.5rem;\n}\n\n.content {\n  max-width: 1000px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5rem;\n}\n\n.container {\n  max-width: 90%;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  display: flex;\n  flex-direction: column;\n  background-color: whitesmoke;\n}\n\n.project-screenshot {\n  display: flex;\n  /* padding: 1rem; */\n  justify-content: center;\n  align-items: center;\n  background-color: orange;\n}\n\n.project-screenshot > img {\n  height: auto;\n  width: 100%;\n  object-fit: cover;\n  margin: auto;\n}\n\n.project-screenshot > img:hover {\n  transform: scale(1.05);\n}\n\n.project-description {\n  padding: 1rem;\n\n  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */\n  /* height: 250px; */\n}\n\n.project-title {\n  display: flex;\n  justify-content: space-around;\n  font-size: 1rem;\n}\n\n.project-links {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1em;\n}\n\n.project-description > p {\n  /* padding: 1rem; */\n}\n\n.footer-background {\n  background-color: #0891b2;\n}\n\nfooter {\n  max-width: 1000px;\n  display: flex;\n  flex-direction: column;\n  /* background-color: #0891b2; */\n  color: white;\n  margin: 0 auto;\n  margin-top: 2rem;\n}\n\nfooter > div img,\nfooter .devicon-github-original {\n  /* max-height: 1rem; */\n  font-size: 2rem;\n  width: 2rem;\n  height: auto;\n}\n\nfooter > div {\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n}\n\nfooter > h2 {\n  text-align: center;\n}\n\nfooter a {\n  color: white;\n}\n\nfooter > :last-child {\n  /* text-align: center; */\n  /* display: flex; */\n  /* justify-content: center; */\n  /* gap: 1rem; */\n}\n\nfooter > picture,\nfooter picture > img {\n  width: 100%;\n  display: block;\n  max-width: 100%;\n}\n\n.triangle {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 400px solid #0891b2;\n  border-right: 800px solid transparent;\n  overflow: hidden;\n  max-width: 100%;\n  z-index: -2;\n}\n\n@media (max-width: 800px) {\n  .profile-pic-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    margin: 0 auto;\n    max-width: 400px;\n  }\n}\n\n@media (min-width: 800px) and (max-width: 1199px) {\n  header {\n    display: block;\n    position: relative;\n    text-align: center;\n    padding: 1rem;\n    padding-top: 7rem;\n    width: 90%;\n    background-color: transparent;\n  }\n\n  .profile-pic-container {\n    width: 150px;\n    float: left;\n    margin: 50px;\n    transform: scale(1.8) translate(-10%, -10%);\n    /* transform: translate(30px); */\n    /* position: relative; */\n    /* left: 175px; */\n    /* border: 3px solid #73ad21; */\n  }\n\n  header h1 {\n    position: absolute;\n    bottom: 0;\n    left: 80px;\n    top: 0px;\n    width: 300px;\n    margin: 0.67em;\n  }\n\n  .profile-description-container {\n    padding: 5rem;\n    margin: auto;\n    line-height: 1.5;\n    text-align: center;\n    width: 100%;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n\n  .profile-description-container > p {\n    text-align: justify;\n    max-width: 100%;\n    /* margin: 0; */\n  }\n\n  .profile-description-container > h2 {\n    font-size: 2.5rem;\n    display: inline;\n    text-align: center;\n  }\n\n  .profile-description-container > :last-child {\n    display: none;\n  }\n\n  .content {\n    width: 90%;\n  }\n\n  .container {\n    max-width: 100%;\n    height: 100%;\n  }\n  .projects {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-auto-rows: 1fr;\n    justify-items: center;\n    gap: 4rem;\n    height: 100%;\n  }\n\n  .project-title {\n    justify-content: space-between;\n    align-content: center;\n    align-items: center;\n    font-size: 1.5rem;\n    height: 50%;\n  }\n\n  .project-links {\n    gap: 0.5rem;\n  }\n\n  .project-title svg {\n    max-width: 100%;\n    width: 1.5rem;\n  }\n\n  .project-title h3 {\n    font-weight: 900;\n    flex-shrink: 1;\n    margin: 0;\n  }\n\n  .project-description {\n    height: 50%;\n    max-height: 100%;\n  }\n\n  footer {\n    width: 90%;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 2rem;\n    padding: 1rem;\n  }\n\n  footer > div {\n    gap: 1rem;\n    padding: 1rem 0;\n    /* display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: space-between; */\n  }\n\n  footer > picture,\n  footer picture > img {\n    display: block;\n    /* padding: 2rem; */\n  }\n\n  footer > picture {\n    max-width: 50%;\n    padding: 2rem 0 1rem 0;\n  }\n\n  .footer-info {\n    justify-content: space-between;\n  }\n\n  /* \n  footer > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: space-between;\n  }\n\n  .p footer {\n    justify-content: center;\n  }\n   */\n\n  .triangle {\n    border-top: 500px solid #0891b2;\n    border-right: 2000px solid transparent;\n    overflow: hidden;\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  /* body {\n    padding-top: 2rem;\n    background-color: transparent;\n  } */\n\n  .triangle {\n    border-top: 500px solid #0891b2;\n    border-right: 3500px solid transparent;\n    overflow: hidden;\n    max-width: 100%;\n  }\n\n  header {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    justify-items: center;\n    box-shadow: none;\n    text-align: center;\n    /* margin-top: 1rem; */\n    padding-top: 3rem;\n    gap: 0;\n    width: 100%;\n    background-color: transparent;\n  }\n\n  header h1 {\n    font-size: 2.5rem;\n  }\n\n  .profile-pic-container {\n    margin: 0;\n    transform: none;\n  }\n\n  .profile-description-container {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    align-content: space-between;\n    text-align: justify;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    padding: 1rem;\n    width: 100%;\n    line-height: 1.5rem;\n  }\n\n  .profile-description-container p {\n    max-width: 100%;\n    margin: 0;\n  }\n\n  .profile-description-container > h2 {\n    padding: 1rem 0;\n    margin: 0;\n    font-size: 2rem;\n  }\n\n  .profile-description-container > :last-child {\n    text-align: end;\n  }\n\n  .content {\n    width: 100%;\n    padding: 0;\n  }\n\n  .container {\n    max-width: 100%;\n    height: 100%;\n  }\n\n  .projects {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-auto-rows: 1fr;\n    justify-items: center;\n    gap: 2rem;\n    height: 100%;\n    line-height: 1.5rem;\n  }\n\n  .project-title {\n    justify-content: space-between;\n    align-content: center;\n    align-items: center;\n    font-size: 1.5rem;\n    height: 50%;\n  }\n\n  .project-links {\n    gap: 0.5rem;\n  }\n\n  .project-title svg {\n    max-width: 100%;\n    width: 1.5rem;\n  }\n\n  .project-title h3 {\n    font-weight: 900;\n    flex-shrink: 1;\n    margin: 0;\n  }\n\n  .project-description {\n    height: 50%;\n    max-height: 100%;\n  }\n\n  footer {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 2rem;\n    padding: 0;\n  }\n\n  footer > div {\n    padding: 1rem 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: space-between;\n  }\n\n  .p footer {\n    justify-content: center;\n  }\n\n  .footer-info {\n    justify-content: space-between;\n  }\n\n  footer > picture {\n    margin: 1rem 0;\n    max-width: 50%;\n  }\n}\n\n/* .triangle {\n  position: relative;\n  width: 0;\n  height: 0;\n} */\n\n/* .triangle:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-top: 400px solid #0891b2;\n  border-right: 550px solid transparent;\n  background-color: #0891b2;\n} */\n\n/* Photo by <a href="https://unsplash.com/@richtervet?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Rich Tervet</a> on <a href="https://unsplash.com/photos/gray-laptop-computer-turned-on-q2GNdFmhxx4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>\n   */\n',""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);i&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],s=0;s<n.length;s++){var c=n[s],d=i.base?c[0]+i.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var m=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var h=o(f,i);i.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var c=i(n,o),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),i=t(825),o=t.n(i),r=t(659),a=t.n(r),s=t(56),c=t.n(s),d=t(540),l=t.n(d),p=t(113),m=t.n(p),f=t(874),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(f.A,h),f.A&&f.A.locals&&f.A.locals;var u=t(365),g={};g.styleTagTransform=m(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(u.A,g),u.A&&u.A.locals&&u.A.locals})()})();