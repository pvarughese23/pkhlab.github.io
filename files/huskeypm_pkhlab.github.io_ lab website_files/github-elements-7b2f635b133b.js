"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["github-elements"],{44671(a,b,c){c(76150),c(38257),c(14840),c(57260),c(13002),c(73921);var d=c(27034);c(51941),c(88309),c(40987),c(57852),c(88823),window.IncludeFragmentElement.prototype.fetch=a=>(a.headers.append("X-Requested-With","XMLHttpRequest"),window.fetch(a)),c(8392);var e=c(76006),f=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let g=class GitCloneHelpElement extends HTMLElement{updateURL(a){let b=a.currentTarget,c=b.getAttribute("data-url")||"";if(this.helpField.value=c,b.matches(".js-git-protocol-clone-url"))for(let d of this.helpTexts)d.textContent=c;for(let e of this.cloneURLButtons)e.classList.remove("selected");b.classList.add("selected")}};function h(a,b,c){if(!b.has(a))throw TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function i(a,b){var c,d,e=h(a,b,"get");return c=a,(d=e).get?d.get.call(c):d.value}function j(a,b,c){!function(a,b){if(b.has(a))throw TypeError("Cannot initialize the same private elements twice on an object")}(a,b),b.set(a,c)}function k(a,b,c){var d=h(a,b,"set");return!function(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw TypeError("attempted to set read only private field");b.value=c}}(a,d,c),c}function l(a,b){let c=[],d=0;for(let e=0;e<a.length;e++){let f=a[e],g=b.indexOf(f,d);if(-1===g)break;d=g+1,c.push(g)}return c}f([e.fA],g.prototype,"helpField",void 0),f([e.GO],g.prototype,"helpTexts",void 0),f([e.GO],g.prototype,"cloneURLButtons",void 0),g=f([e.Ih],g);var m=new WeakMap,n=new WeakMap,o=new WeakMap,p=new WeakMap;let q=class MarkedTextElement extends HTMLElement{get query(){return this.ownerInput?this.ownerInput.value:this.getAttribute("query")||""}set query(a){this.setAttribute("query",a)}get ownerInput(){let a=this.ownerDocument.getElementById(this.getAttribute("data-owner-input")||"");return a instanceof HTMLInputElement?a:null}connectedCallback(){this.handleEvent(),this.ownerInput?.addEventListener("input",this),k(this,o,new MutationObserver(()=>this.handleEvent()))}handleEvent(){i(this,p)&&cancelAnimationFrame(i(this,p)),k(this,p,requestAnimationFrame(()=>this.mark()))}disconnectedCallback(){this.ownerInput?.removeEventListener("input",this),i(this,o).disconnect()}mark(){let a=this.textContent||"",b=this.query;if(a===i(this,m)&&b===i(this,n))return;k(this,m,a),k(this,n,b),i(this,o).disconnect();let c=0,d=document.createDocumentFragment();for(let e of(this.positions||l)(b,a)){if(Number(e)!==e||e<c||e>a.length)continue;let f=a.slice(c,e);""!==f&&d.appendChild(document.createTextNode(a.slice(c,e))),c=e+1;let g=document.createElement("mark");g.textContent=a[e],d.appendChild(g)}d.appendChild(document.createTextNode(a.slice(c))),this.replaceChildren(d),i(this,o).observe(this,{attributes:!0,childList:!0,subtree:!0})}constructor(...a){super(...a),j(this,m,{writable:!0,value:""}),j(this,n,{writable:!0,value:""}),j(this,o,{writable:!0,value:void 0}),j(this,p,{writable:!0,value:void 0})}};q.observedAttributes=["query","data-owner-input"],window.customElements.get("marked-text")||(window.MarkedTextElement=q,window.customElements.define("marked-text",q));var r=c(33267);let s=class PasswordStrengthElement extends HTMLElement{connectedCallback(){this.addEventListener("input",t)}disconnectedCallback(){this.removeEventListener("input",t)}};function t(a){let b=a.currentTarget;if(!(b instanceof s))return;let c=a.target;if(!(c instanceof HTMLInputElement))return;let d=c.form;if(!(d instanceof HTMLFormElement))return;let e=u(c.value,{minimumCharacterCount:Number(b.getAttribute("minimum-character-count")),passphraseLength:Number(b.getAttribute("passphrase-length"))});if(e.valid){c.setCustomValidity("");let f=b.querySelector("dl.form-group");f&&(f.classList.remove("errored"),f.classList.add("successed"))}else c.setCustomValidity(b.getAttribute("invalid-message")||"Invalid");v(b,e),(0,r.G)(d)}function u(a,b){let c={valid:!1,hasMinimumCharacterCount:a.length>=b.minimumCharacterCount,hasMinimumPassphraseLength:0!==b.passphraseLength&&a.length>=b.passphraseLength,hasLowerCase:/[a-z]/.test(a),hasNumber:/\d/.test(a)};return c.valid=c.hasMinimumPassphraseLength||c.hasMinimumCharacterCount&&c.hasLowerCase&&c.hasNumber,c}function v(a,b){let c=a.querySelector("[data-more-than-n-chars]"),d=a.querySelector("[data-min-chars]"),e=a.querySelector("[data-number-requirement]"),f=a.querySelector("[data-letter-requirement]"),g=a.getAttribute("error-class")?.split(" ").filter(a=>a.length>0)||[],h=a.getAttribute("pass-class")?.split(" ").filter(a=>a.length>0)||[];for(let i of[c,d,e,f])i?.classList.remove(...g,...h);if(b.hasMinimumPassphraseLength&&c)c.classList.add(...h);else if(b.valid)d.classList.add(...h),e.classList.add(...h),f.classList.add(...h);else{let j=b.hasMinimumCharacterCount?h:g,k=b.hasNumber?h:g,l=b.hasLowerCase?h:g;c?.classList.add(...g),d.classList.add(...j),e.classList.add(...k),f.classList.add(...l)}}window.customElements.get("password-strength")||(window.PasswordStrengthElement=s,window.customElements.define("password-strength",s)),c(18999);var w=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let x=class PollIncludeFragmentElement extends d.Z{async fetch(a,b=1e3){let c=await super.fetch(a);return 202===c.status?(await new Promise(a=>setTimeout(a,b)),this.fetch(a,1.5*b)):c}connectedCallback(){super.connectedCallback(),this.retryButton&&this.retryButton.addEventListener("click",()=>{this.refetch()})}};w([e.fA],x.prototype,"retryButton",void 0),x=w([e.Ih],x);var y=c(10160);let z=/\s|\(|\[/;function A(a,b,c){let d=a.lastIndexOf(b,c-1);if(-1===d)return;let e=a.lastIndexOf(" ",c-1);if(e>d)return;let f=a.lastIndexOf("\n",c-1);if(f>d)return;let g=a[d-1];if(g&&!z.test(g))return;let h=a.substring(d+b.length,c);return{word:h,position:d+b.length,beginningOfLine:B(g)}}let B=a=>void 0===a||/\n/.test(a),C=["position:absolute;","overflow:auto;","word-wrap:break-word;","top:0px;","left:-9999px;"],D=["box-sizing","font-family","font-size","font-style","font-variant","font-weight","height","letter-spacing","line-height","max-height","min-height","padding-bottom","padding-left","padding-right","padding-top","border-bottom","border-left","border-right","border-top","text-decoration","text-indent","text-transform","width","word-spacing"],E=new WeakMap,F=new WeakMap,G=class SlashCommandExpander{destroy(){this.input.removeEventListener("paste",this.onpaste),this.input.removeEventListener("input",this.oninput),this.input.removeEventListener("keydown",this.onkeydown),this.input.removeEventListener("blur",this.onblur)}activate(a,b){this.input===document.activeElement&&this.setMenu(a,b)}deactivate(){let a=this.menu,b=this.combobox;return!!a&&!!b&&(this.menu=null,this.combobox=null,a.removeEventListener("combobox-commit",this.oncommit),a.removeEventListener("mousedown",this.onmousedown),b.destroy(),a.remove(),!0)}setMenu(a,b){this.deactivate(),this.menu=b,b.id||(b.id=`text-expander-${Math.floor(1e5*Math.random()).toString()}`),this.expander.append(b);let c=b.querySelector(".js-command-list-container");c?this.combobox=new y.Z(this.input,c):this.combobox=new y.Z(this.input,b);let{top:d,left:e}=function(a,b=a.selectionEnd){let{mirror:c,marker:d}=function(a,b){let c=a.nodeName.toLowerCase();if("textarea"!==c&&"input"!==c)throw Error("expected textField to a textarea or input");let d=E.get(a);if(d&&d.parentElement===a.parentElement)d.textContent="";else{d=document.createElement("div"),E.set(a,d);let e=window.getComputedStyle(a),f=C.slice(0);"textarea"===c?f.push("white-space:pre-wrap;"):f.push("white-space:nowrap;");for(let g=0,h=D.length;g<h;g++){let i=D[g];f.push(`${i}:${e.getPropertyValue(i)};`)}d.style.cssText=f.join(" ")}let j=document.createElement("span");j.style.cssText="position: absolute;",j.innerHTML="&nbsp;";let k,l;if("number"==typeof b){let m=a.value.substring(0,b);m&&(k=document.createTextNode(m)),(m=a.value.substring(b))&&(l=document.createTextNode(m))}else{let n=a.value;n&&(k=document.createTextNode(n))}if(k&&d.appendChild(k),d.appendChild(j),l&&d.appendChild(l),!d.parentElement){if(!a.parentElement)throw Error("textField must have a parentElement to mirror");a.parentElement.insertBefore(d,a)}return d.scrollTop=a.scrollTop,d.scrollLeft=a.scrollLeft,{mirror:d,marker:j}}(a,b),e=c.getBoundingClientRect(),f=d.getBoundingClientRect();return setTimeout(()=>{c.remove()},5e3),{top:f.top-e.top,left:f.left-e.left}}(this.input,a.position),f=parseInt(window.getComputedStyle(this.input).fontSize);b.style.top=`${d+f}px`,b.style.left=`${e}px`,this.combobox.start(),b.addEventListener("combobox-commit",this.oncommit),b.addEventListener("mousedown",this.onmousedown),this.combobox.navigate(1)}setValue(a){if(null==a)return;let b=this.match;if(!b)return;let{cursor:c,value:d}=this.replaceCursorMark(a);d=d?.length===0?d:`${d} `;let e=b.position-b.key.length,f=b.position+b.text.length;this.input.focus();let g=!1;try{this.input.setSelectionRange(e,f),g=document.execCommand("insertText",!1,d)}catch(h){g=!1}if(!g){let i=this.input.value.substring(0,b.position-b.key.length),j=this.input.value.substring(b.position+b.text.length);this.input.value=i+d+j}this.deactivate(),c=e+(c||d.length),this.input.selectionStart=c,this.input.selectionEnd=c}replaceCursorMark(a){let b=/%cursor%/gm,c=b.exec(a);return c?{cursor:c.index,value:a.replace(b,"")}:{cursor:null,value:a}}async onCommit({target:a}){let b=a;if(!(b instanceof HTMLElement)||!this.combobox)return;let d=this.match;if(!d)return;let e={item:b,key:d.key,value:null},f=new CustomEvent("text-expander-value",{cancelable:!0,detail:e}),g=!this.expander.dispatchEvent(f),{onValue:h}=await c.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(c.bind(c,97542));await h(this.expander,d.key,b),!g&&e.value&&this.setValue(e.value)}onBlur(){if(this.interactingWithMenu){this.interactingWithMenu=!1;return}this.deactivate()}onPaste(){this.justPasted=!0}async delay(a){return new Promise(b=>setTimeout(b,a))}async onInput(){if(this.justPasted){this.justPasted=!1;return}let a=this.findMatch();if(a){if(this.match=a,await this.delay(this.appropriateDelay(this.match)),this.match!==a)return;let b=await this.notifyProviders(a);if(!this.match)return;b?this.activate(a,b):this.deactivate()}else this.match=null,this.deactivate()}appropriateDelay(a){return a.beginningOfLine?0:""!==a.text?0:250}findMatch(){let a=this.input.selectionEnd,b=this.input.value;for(let c of this.expander.keys){let d=A(b,c,a);if(d)return{text:d.word,key:c,position:d.position,beginningOfLine:d.beginningOfLine}}}async notifyProviders(a){let b=[],d=a=>b.push(a),e=new CustomEvent("text-expander-change",{cancelable:!0,detail:{provide:d,text:a.text,key:a.key}}),f=!this.expander.dispatchEvent(e);if(f)return;let{onChange:g}=await c.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(c.bind(c,97542));g(this.expander,a.key,d,a.text);let h=await Promise.all(b),i=h.filter(a=>a.matched).map(a=>a.fragment);return i[0]}onMousedown(){this.interactingWithMenu=!0}onKeydown(a){"Escape"===a.key&&this.deactivate()&&(a.stopImmediatePropagation(),a.preventDefault())}constructor(a,b){this.expander=a,this.input=b,this.combobox=null,this.menu=null,this.match=null,this.justPasted=!1,this.oninput=this.onInput.bind(this),this.onpaste=this.onPaste.bind(this),this.onkeydown=this.onKeydown.bind(this),this.oncommit=this.onCommit.bind(this),this.onmousedown=this.onMousedown.bind(this),this.onblur=this.onBlur.bind(this),this.interactingWithMenu=!1,b.addEventListener("paste",this.onpaste),b.addEventListener("input",this.oninput),b.addEventListener("keydown",this.onkeydown),b.addEventListener("blur",this.onblur)}},H=class SlashCommandExpanderElement extends HTMLElement{get keys(){let a=this.getAttribute("keys");return a?a.split(" "):[]}connectedCallback(){let a=this.querySelector('input[type="text"], textarea');if(!(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement))return;let b=new G(this,a);F.set(this,b)}disconnectedCallback(){let a=F.get(this);a&&(a.destroy(),F.delete(this))}setValue(a){let b=F.get(this);b&&b.setValue(a)}setMenu(a,b=!1){let c=F.get(this);c&&c.match&&(b&&(c.interactingWithMenu=!0),c.setMenu(c.match,a))}closeMenu(){let a=F.get(this);a&&a.setValue("")}isLoading(){let a=this.getElementsByClassName("js-slash-command-expander-loading")[0];if(a){let b=a.cloneNode(!0);b.classList.remove("d-none"),this.setMenu(b)}}showError(){let a=this.getElementsByClassName("js-slash-command-expander-error")[0];if(a){let b=a.cloneNode(!0);b.classList.remove("d-none"),this.setMenu(b)}}};window.customElements.get("slash-command-expander")||(window.SlashCommandExpanderElement=H,window.customElements.define("slash-command-expander",H));var I=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let J=class TextSuggesterElement extends HTMLElement{acceptSuggestion(){this.suggestion?.textContent&&(this.input.value=this.suggestion.textContent,this.input.dispatchEvent(new Event("input")),this.suggestionContainer&&(this.suggestionContainer.hidden=!0),this.input.focus())}};function K(a,b,c){if(!b.has(a))throw TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function L(a,b){var c,d,e=K(a,b,"get");return c=a,(d=e).get?d.get.call(c):d.value}function M(a,b,c){!function(a,b){if(b.has(a))throw TypeError("Cannot initialize the same private elements twice on an object")}(a,b),b.set(a,c)}function N(a,b,c){var d=K(a,b,"set");return!function(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw TypeError("attempted to set read only private field");b.value=c}}(a,d,c),c}I([e.fA],J.prototype,"input",void 0),I([e.fA],J.prototype,"suggestionContainer",void 0),I([e.fA],J.prototype,"suggestion",void 0),J=I([e.Ih],J);var O=new WeakMap,P=new WeakMap,Q=new WeakMap,R=new WeakMap,S=new WeakMap,T=new WeakMap;let U=class VirtualFilterInputElement extends HTMLElement{static get observedAttributes(){return["src","loading","data-property","aria-owns"]}get filtered(){if(L(this,T))return L(this,T);if(this.hasAttribute("aria-owns")){var a;let b=this.ownerDocument.getElementById(this.getAttribute("aria-owns")||"");b&&Boolean((a=b)instanceof Set||a&&"object"==typeof a&&"size"in a&&"add"in a&&"delete"in a&&"clear"in a)&&N(this,T,b)}return N(this,T,L(this,T)||new Set)}set filtered(a){N(this,T,a)}get input(){return this.querySelector("input, textarea")}get src(){return this.getAttribute("src")||""}set src(a){this.setAttribute("src",a)}get loading(){return"lazy"===this.getAttribute("loading")?"lazy":"eager"}set loading(a){this.setAttribute("loading",a)}get accept(){return this.getAttribute("accept")||""}set accept(a){this.setAttribute("accept",a)}get property(){return this.getAttribute("data-property")||""}set property(a){this.setAttribute("data-property",a)}reset(){this.filtered.clear(),N(this,S,new Set)}clear(){this.input&&(this.input.value="",this.input.dispatchEvent(new Event("input")))}attributeChangedCallback(a,b,c){let d=this.isConnected&&this.src,e="eager"===this.loading,f=b!==c;("src"===a||"data-property"===a)&&f&&(N(this,Q,null),L(this,R)&&clearTimeout(L(this,R))),d&&e&&("src"===a||"loading"===a||"accept"===a||"data-property"===a)&&f?(cancelAnimationFrame(L(this,P)),N(this,P,requestAnimationFrame(()=>this.load()))):"aria-owns"===a&&N(this,T,null)}connectedCallback(){this.src&&"eager"===this.loading&&(cancelAnimationFrame(L(this,P)),N(this,P,requestAnimationFrame(()=>this.load())));let a=this.input;if(!a)return;let b=this.getAttribute("aria-owns");null!==b&&this.attributeChangedCallback("aria-owns","",b),a.setAttribute("autocomplete","off"),a.setAttribute("spellcheck","false"),this.src&&"lazy"===this.loading&&(document.activeElement===a?this.load():a.addEventListener("focus",()=>{this.load()},{once:!0})),a.addEventListener("input",this)}disconnectedCallback(){this.input?.removeEventListener("input",this)}handleEvent(a){"input"===a.type&&(L(this,R)&&clearTimeout(L(this,R)),N(this,R,window.setTimeout(()=>this.filterItems(),(this.input?.value?.length,300))))}async load(){L(this,O)?.abort(),N(this,O,new AbortController);let{signal:a}=L(this,O);if(!this.src)throw Error("missing src");if(await new Promise(a=>setTimeout(a,0)),!a.aborted){this.dispatchEvent(new Event("loadstart"));try{let b=await this.fetch(this.request(),{signal:a,headers:{"X-Requested-With":"XMLHttpRequest"}});if(location.origin+this.src!==b.url)return;if(!b.ok)throw Error(`Failed to load resource: the server responded with a status of ${b.status}`);N(this,S,new Set((await b.json())[this.property])),N(this,Q,null),this.dispatchEvent(new Event("loadend"))}catch(c){if(a.aborted){this.dispatchEvent(new Event("loadend"));return}throw(async()=>{this.dispatchEvent(new Event("error")),this.dispatchEvent(new Event("loadend"))})(),c}this.filtered.clear(),this.filterItems()}}request(){return new Request(this.src,{method:"GET",credentials:"same-origin",headers:{Accept:this.accept||"application/json"}})}fetch(a,b){return fetch(a,b)}filterItems(){let a=this.input?.value.trim()??"",b=L(this,Q);if(N(this,Q,a),a===b)return;this.dispatchEvent(new CustomEvent("virtual-filter-input-filter"));let c;for(let d of(b&&a.includes(b)?c=this.filtered:(c=L(this,S),this.filtered.clear()),c))this.filter(d,a)?this.filtered.add(d):this.filtered.delete(d);this.dispatchEvent(new CustomEvent("virtual-filter-input-filtered"))}constructor(...a){super(...a),M(this,O,{writable:!0,value:void 0}),M(this,P,{writable:!0,value:0}),M(this,Q,{writable:!0,value:null}),M(this,R,{writable:!0,value:void 0}),M(this,S,{writable:!0,value:new Set}),M(this,T,{writable:!0,value:null}),this.filter=(a,b)=>String(a).includes(b)}};function V(a,b,c){if(!b.has(a))throw TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function W(a,b){var c,d,e=V(a,b,"get");return c=a,(d=e).get?d.get.call(c):d.value}function X(a,b,c){!function(a,b){if(b.has(a))throw TypeError("Cannot initialize the same private elements twice on an object")}(a,b),b.set(a,c)}function Y(a,b,c){var d=V(a,b,"set");return!function(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw TypeError("attempted to set read only private field");b.value=c}}(a,d,c),c}window.customElements.get("virtual-filter-input")||(window.VirtualFilterInputElement=U,window.customElements.define("virtual-filter-input",U));let Z=new IntersectionObserver(a=>{for(let b of a)b.isIntersecting&&b.target instanceof ag&&"eager"===b.target.updating&&b.target.update()});var $=new WeakMap,_=new WeakMap,aa=new WeakMap,ab=new WeakMap,ac=new WeakMap,ad=new WeakMap,ae=new WeakMap;let af=Symbol.iterator,ag=class VirtualListElement extends HTMLElement{static get observedAttributes(){return["data-updating","aria-activedescendant"]}get updating(){return"lazy"===this.getAttribute("data-updating")?"lazy":"eager"}set updating(a){this.setAttribute("data-updating",a)}get size(){return W(this,_).size}get range(){let a=this.getBoundingClientRect().height,{scrollTop:b}=this,c=`${b}-${a}`;if(W(this,ac).has(c))return W(this,ac).get(c);let d=0,e=0,f=0,g=0,h=W(this,aa);for(let i of W(this,_)){let j=h.get(i)||W(this,ab);if(f+j<b)f+=j,d+=1,e+=1;else if(g-j<a)g+=j,e+=1;else if(g>=a)break}return[d,e]}get list(){let a=this.querySelector("ul, ol, tbody");if(!a)throw Error("virtual-list must have a container element inside: any of <ul>, <ol>, <tbody>");return a}attributeChangedCallback(a,b,c){if(b===c||!this.isConnected)return;let d="data-updating"===a&&"eager"===c,e="data-sorted"===a&&this.hasAttribute("data-sorted");if((d||e)&&this.update(),"aria-activedescendant"===a){let f=this.getIndexByElementId(c);this.dispatchEvent(new ActiveDescendantChangedEvent(f,c)),"eager"===this.updating&&this.update()}}connectedCallback(){this.addEventListener("scroll",()=>this.update()),this.updateSync=this.updateSync.bind(this),Z.observe(this)}update(){W(this,ae)&&cancelAnimationFrame(W(this,ae)),!W(this,$)&&this.hasAttribute("data-sorted")?Y(this,ae,requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("virtual-list-sort",{cancelable:!0}))&&this.sort()})):Y(this,ae,requestAnimationFrame(this.updateSync))}renderItem(a){let b={item:a,fragment:document.createDocumentFragment()};return this.dispatchEvent(new CustomEvent("virtual-list-render-item",{detail:b})),b.fragment.children[0]}recalculateHeights(a){let b=this.list;if(!b)return;let c=this.renderItem(a);if(!c)return;b.append(c);let d=b.children[0].getBoundingClientRect().height;b.replaceChildren(),d&&(Y(this,ab,d),W(this,aa).set(a,d))}getIndexByElementId(a){if(!a)return -1;let b=0;for(let[,c]of W(this,ad)){if(c.id===a||c.querySelector(`#${a}`))return b;b++}return -1}updateSync(){let a=this.list,[b,c]=this.range;if(c<b)return;let d=!this.dispatchEvent(new CustomEvent("virtual-list-update",{cancelable:!0}));if(d)return;let e=new Map,f=W(this,ad),g=-1,h=!0,i=0,j=0,k=0;for(let l of W(this,_)){if(-1!==g||Number.isFinite(W(this,ab))&&0!==W(this,ab)||this.recalculateHeights(l),g+=1,k=W(this,aa).get(l)||W(this,ab),g<b){i+=k,j=i;continue}if(g>c){h=!1;break}let m=null;if(f.has(l))m=f.get(l);else{if(!(m=this.renderItem(l)))continue;m.querySelector("[aria-setsize]")?.setAttribute("aria-setsize",W(this,_).size.toString()),m.querySelector("[aria-posinset]")?.setAttribute("aria-posinset",(g+1).toString()),f.set(l,m)}m.querySelector("[tabindex]")?.setAttribute("data-scrolltop",j.toString()),j+=k,e.set(l,m)}a.replaceChildren(...e.values()),a.style.paddingTop=`${i}px`;let n=this.size*W(this,ab);a.style.height=`${n||0}px`;let o=!1,p=this.getBoundingClientRect().bottom;for(let[q,r]of e){let{height:s,bottom:t}=r.getBoundingClientRect();o=o||t>=p,W(this,aa).set(q,s)}let u=!h&&this.size>e.size;if(u&&!o)return W(this,ac).delete(`${this.scrollTop}-${this.getBoundingClientRect().height}`),this.update();this.dispatchEvent(new RenderedEvent(f)),this.dispatchEvent(new CustomEvent("virtual-list-updated"))}resetRenderCache(){Y(this,ad,new Map)}has(a){return W(this,_).has(a)}add(a){return W(this,_).add(a),Y(this,$,!1),Number.isFinite(W(this,ab))||this.recalculateHeights(a),this.resetRenderCache(),this.dispatchEvent(new Event("virtual-list-data-updated")),"eager"===this.updating&&this.update(),this}delete(a){let b=W(this,_).delete(a);return Y(this,$,!1),W(this,aa).delete(a),this.resetRenderCache(),this.dispatchEvent(new Event("virtual-list-data-updated")),"eager"===this.updating&&this.update(),b}clear(){W(this,_).clear(),W(this,aa).clear(),Y(this,ab,1/0),Y(this,$,!0),this.resetRenderCache(),this.dispatchEvent(new Event("virtual-list-data-updated")),"eager"===this.updating&&this.update()}forEach(a,b){for(let c of this)a.call(b,c,c,this)}entries(){return W(this,_).entries()}values(){return W(this,_).values()}keys(){return W(this,_).keys()}[af](){return W(this,_)[Symbol.iterator]()}sort(a){return Y(this,_,new Set(Array.from(this).sort(a))),Y(this,$,!0),this.dispatchEvent(new Event("virtual-list-data-updated")),"eager"===this.updating&&this.update(),this}constructor(...a){super(...a),X(this,$,{writable:!0,value:!1}),X(this,_,{writable:!0,value:new Set}),X(this,aa,{writable:!0,value:new Map}),X(this,ab,{writable:!0,value:1/0}),X(this,ac,{writable:!0,value:new Map}),X(this,ad,{writable:!0,value:new Map}),X(this,ae,{writable:!0,value:0})}};class ActiveDescendantChangedEvent extends Event{constructor(a,b){super("virtual-list-activedescendant-changed"),this.index=a,this.id=b}}class RenderedEvent extends Event{constructor(a){super("virtual-list-rendered"),this.rowsCache=a}}window.customElements.get("virtual-list")||(window.VirtualListElement=ag,window.customElements.define("virtual-list",ag));var ah=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ai=class VisiblePasswordElement extends HTMLElement{show(){this.input.type="text",this.input.focus(),this.showButton.hidden=!0,this.hideButton.hidden=!1}hide(){this.input.type="password",this.input.focus(),this.hideButton.hidden=!0,this.showButton.hidden=!1}};ah([e.fA],ai.prototype,"input",void 0),ah([e.fA],ai.prototype,"showButton",void 0),ah([e.fA],ai.prototype,"hideButton",void 0),ai=ah([e.Ih],ai)},33267(a,b,c){c.d(b,{G:()=>i});var d=c(7256),e=c(36071),f=c(59753);function g(a){let b=a.getAttribute("data-required-value"),c=a.getAttribute("data-required-value-prefix");if(a.value===b)a.setCustomValidity("");else{let d=b;c&&(d=c+d),a.setCustomValidity(d)}}(0,d.q6)("[data-required-value]",function(a){let b=a.currentTarget;g(b)}),(0,f.on)("change","[data-required-value]",function(a){let b=a.currentTarget;g(b),i(b.form)}),(0,d.q6)("[data-required-trimmed]",function(a){let b=a.currentTarget;""===b.value.trim()?b.setCustomValidity(b.getAttribute("data-required-trimmed")):b.setCustomValidity("")}),(0,f.on)("change","[data-required-trimmed]",function(a){let b=a.currentTarget;""===b.value.trim()?b.setCustomValidity(b.getAttribute("data-required-trimmed")):b.setCustomValidity(""),i(b.form)}),(0,d.ZG)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]",a=>{let b=a.checkValidity();function c(){let c=a.checkValidity();c!==b&&a.form&&i(a.form),b=c}a.addEventListener("input",c),a.addEventListener("blur",function b(){a.removeEventListener("input",c),a.removeEventListener("blur",b)})});let h=new WeakMap;function i(a){let b=a.checkValidity();for(let c of a.querySelectorAll("button[data-disable-invalid]"))c.disabled=!b}(0,e.N7)("button[data-disable-invalid]",{constructor:HTMLButtonElement,initialize(a){let b=a.form;if(b){var c;c=b,h.get(c)||(c.addEventListener("change",()=>i(c)),h.set(c,!0)),a.disabled=!b.checkValidity()}}}),(0,e.N7)("input[data-required-change], textarea[data-required-change]",function(a){let b=a,c="radio"===b.type&&b.form?b.form.elements.namedItem(b.name).value:null;function d(a){let d=b.form;if(a&&"radio"===b.type&&d&&c)for(let e of d.elements.namedItem(b.name))e instanceof HTMLInputElement&&e.setCustomValidity(b.value===c?"unchanged":"");else b.setCustomValidity(b.value===(c||b.defaultValue)?"unchanged":"")}b.addEventListener("input",d),b.addEventListener("change",d),d(),b.form&&i(b.form)}),document.addEventListener("reset",function(a){if(a.target instanceof HTMLFormElement){let b=a.target;setTimeout(()=>i(b))}})},8392(a,b,c){c.d(b,{Z:()=>l});var d=c(47142);let e=(a,b,c)=>{if(!(0,d.CD)(a,b))return-1/0;let e=(0,d.Gs)(a,b);return e<c?-1/0:e},f=(a,b,c)=>{a.textContent="";let e=0;for(let f of(0,d.m7)(b,c)){let g=c.slice(e,f);""!==g&&a.appendChild(document.createTextNode(c.slice(e,f))),e=f+1;let h=document.createElement("mark");h.textContent=c[f],a.appendChild(h)}a.appendChild(document.createTextNode(c.slice(e)))},g=new WeakMap,h=new WeakMap,i=new WeakMap,j=a=>{if(!i.has(a)&&a instanceof HTMLElement){let b=(a.getAttribute("data-value")||a.textContent||"").trim();return i.set(a,b),b}return i.get(a)||""},k=class FuzzyListElement extends HTMLElement{connectedCallback(){let a=this.querySelector("ul");if(!a)return;let b=new Set(a.querySelectorAll("li")),c=this.querySelector("input");c instanceof HTMLInputElement&&c.addEventListener("input",()=>{this.value=c.value});let e=new MutationObserver(a=>{let c=!1;for(let e of a)if("childList"===e.type&&e.addedNodes.length){for(let f of e.addedNodes)if(f instanceof HTMLLIElement&&!b.has(f)){let g=j(f);c=c||(0,d.CD)(this.value,g),b.add(f)}}c&&this.sort()});e.observe(a,{childList:!0});let f={handler:e,items:b,lazyItems:new Map,timer:null};h.set(this,f)}disconnectedCallback(){let a=h.get(this);a&&(a.handler.disconnect(),h.delete(this))}addLazyItems(a,b){let c=h.get(this);if(!c)return;let{lazyItems:e}=c,{value:f}=this,g=!1;for(let i of a)e.set(i,b),g=g||Boolean(f)&&(0,d.CD)(f,i);g&&this.sort()}sort(){let a=g.get(this);a&&(a.aborted=!0);let b={aborted:!1};g.set(this,b);let{minScore:c,markSelector:d,maxMatches:k,value:l}=this,m=h.get(this);if(!m||!this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort",{cancelable:!0,detail:l})))return;let{items:n,lazyItems:o}=m,p=this.hasAttribute("mark-selector"),q=this.querySelector("ul");if(!q)return;let r=[];if(l){for(let s of n){let t=j(s),u=e(l,t,c);u!== -1/0&&r.push({item:s,score:u})}for(let[v,w]of o){let x=e(l,v,c);x!== -1/0&&r.push({text:v,render:w,score:x})}r.sort((a,b)=>b.score-a.score).splice(k)}else{let y=r.length;for(let z of n){if(y>=k)break;r.push({item:z,score:1}),y+=1}for(let[A,B]of o){if(y>=k)break;r.push({text:A,render:B,score:1}),y+=1}}requestAnimationFrame(()=>{if(b.aborted)return;let a=q.querySelector('input[type="radio"]:checked');q.textContent="";let c=0,e=()=>{if(b.aborted)return;let g=Math.min(r.length,c+100),h=document.createDocumentFragment();for(let k=c;k<g;k+=1){let m=r[k],s=null;if("render"in m&&"text"in m){let{render:t,text:u}=m;s=t(u),n.add(s),i.set(s,u),o.delete(u)}else"item"in m&&(s=m.item);s instanceof HTMLElement&&(p&&f(d&&s.querySelector(d)||s,p?l:"",j(s)),h.appendChild(s))}c=g;let v=!1;if(a instanceof HTMLInputElement)for(let w of h.querySelectorAll('input[type="radio"]:checked'))w instanceof HTMLInputElement&&w.value!==a.value&&(w.checked=!1,v=!0);if(q.appendChild(h),a&&v&&a.dispatchEvent(new Event("change",{bubbles:!0})),g<r.length)requestAnimationFrame(e);else{q.hidden=0===r.length;let x=this.querySelector("[data-fuzzy-list-show-on-empty]");x&&(x.hidden=r.length>0),this.dispatchEvent(new CustomEvent("fuzzy-list-sorted",{detail:r.length}))}};e()})}get value(){return this.getAttribute("value")||""}set value(a){this.setAttribute("value",a)}get markSelector(){return this.getAttribute("mark-selector")||""}set markSelector(a){a?this.setAttribute("mark-selector",a):this.removeAttribute("mark-selector")}get minScore(){return Number(this.getAttribute("min-score")||0)}set minScore(a){Number.isNaN(a)||this.setAttribute("min-score",String(a))}get maxMatches(){return Number(this.getAttribute("max-matches")||1/0)}set maxMatches(a){Number.isNaN(a)||this.setAttribute("max-matches",String(a))}static get observedAttributes(){return["value","mark-selector","min-score","max-matches"]}attributeChangedCallback(a,b,c){if(b===c)return;let d=h.get(this);d&&(d.timer&&window.clearTimeout(d.timer),d.timer=window.setTimeout(()=>this.sort(),100))}},l=k;window.customElements.get("fuzzy-list")||(window.FuzzyListElement=k,window.customElements.define("fuzzy-list",k))},7256(a,b,c){c.d(b,{ZG:()=>h,q6:()=>j,w4:()=>i});var d=c(8439);let e=!1,f=new d.Z;function g(a){let b=a.target;if(b instanceof HTMLElement&&b.nodeType!==Node.DOCUMENT_NODE)for(let c of f.matches(b))c.data.call(null,b)}function h(a,b){e||(e=!0,document.addEventListener("focus",g,!0)),f.add(a,b),document.activeElement instanceof HTMLElement&&document.activeElement.matches(a)&&b(document.activeElement)}function i(a,b,c){function d(b){let e=b.currentTarget;e&&(e.removeEventListener(a,c),e.removeEventListener("blur",d))}h(b,function(b){b.addEventListener(a,c),b.addEventListener("blur",d)})}function j(a,b){function c(a){let{currentTarget:d}=a;d&&(d.removeEventListener("input",b),d.removeEventListener("blur",c))}h(a,function(a){a.addEventListener("input",b),a.addEventListener("blur",c)})}},18999(a,b,c){c.d(b,{X:()=>e});var d=c(36071);function e(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}(0,d.N7)(".js-remove-unless-platform",function(a){!function(a){let b=(a.getAttribute("data-platforms")||"").split(","),c=e();return Boolean(c&&b.includes(c))}(a)&&a.remove()})}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe","vendors-node_modules_github_auto-complete-element_dist_index_js-node_modules_github_catalyst_-6afc16","vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_github_mark-f079ea","vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-b4f804","vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_github_text-ex-3415a8","vendors-node_modules_primer_view-components_app_components_primer_primer_js-node_modules_gith-6a1af4"],()=>b(44671));var c=a.O()}])
//# sourceMappingURL=github-elements-6ee0866efe16.js.map