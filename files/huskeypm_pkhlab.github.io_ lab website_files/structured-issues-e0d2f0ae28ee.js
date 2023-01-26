"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["structured-issues"],{59753(a,b,c){function d(){if(!(this instanceof d))return new d;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}c.d(b,{f:()=>B,on:()=>A});var e,f=window.document.documentElement,g=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector;d.prototype.matchesSelector=function(a,b){return g.call(a,b)},d.prototype.querySelectorAll=function(a,b){return b.querySelectorAll(a)},d.prototype.indexes=[];var h=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;d.prototype.indexes.push({name:"ID",selector:function(a){var b;if(b=a.match(h))return b[0].slice(1)},element:function(a){if(a.id)return[a.id]}});var i=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;d.prototype.indexes.push({name:"CLASS",selector:function(a){var b;if(b=a.match(i))return b[0].slice(1)},element:function(a){var b=a.className;if(b){if("string"==typeof b)return b.split(/\s/);if("object"==typeof b&&"baseVal"in b)return b.baseVal.split(/\s/)}}});var j=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;d.prototype.indexes.push({name:"TAG",selector:function(a){var b;if(b=a.match(j))return b[0].toUpperCase()},element:function(a){return[a.nodeName.toUpperCase()]}}),d.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},e="function"==typeof window.Map?window.Map:function(){function a(){this.map={}}return a.prototype.get=function(a){return this.map[a+" "]},a.prototype.set=function(a,b){this.map[a+" "]=b},a}();var k=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function l(a,b){var c,d,e,f,g,h,i=(a=a.slice(0).concat(a.default)).length,j=b,l=[];do if(k.exec(""),(e=k.exec(j))&&(j=e[3],e[2]||!j)){for(c=0;c<i;c++)if(g=(h=a[c]).selector(e[1])){for(d=l.length,f=!1;d--;)if(l[d].index===h&&l[d].key===g){f=!0;break}f||l.push({index:h,key:g});break}}while(e)return l}function m(a,b){var c,d,e;for(c=0,d=a.length;c<d;c++)if(e=a[c],b.isPrototypeOf(e))return e}function n(a,b){return a.id-b.id}d.prototype.logDefaultIndexUsed=function(){},d.prototype.add=function(a,b){var c,d,f,g,h,i,j,k,n=this.activeIndexes,o=this.selectors,p=this.selectorObjects;if("string"==typeof a){for(d=0,p[(c={id:this.uid++,selector:a,data:b}).id]=c,j=l(this.indexes,a);d<j.length;d++)g=(k=j[d]).key,f=k.index,h=m(n,f),h||((h=Object.create(f)).map=new e,n.push(h)),f===this.indexes.default&&this.logDefaultIndexUsed(c),i=h.map.get(g),i||(i=[],h.map.set(g,i)),i.push(c);this.size++,o.push(a)}},d.prototype.remove=function(a,b){if("string"==typeof a){var c,d,e,f,g,h,i,j,k=this.activeIndexes,m=this.selectors=[],n=this.selectorObjects,o={},p=1===arguments.length;for(e=0,c=l(this.indexes,a);e<c.length;e++)for(d=c[e],f=k.length;f--;)if(h=k[f],d.index.isPrototypeOf(h)){if(i=h.map.get(d.key))for(g=i.length;g--;)(j=i[g]).selector===a&&(p||j.data===b)&&(i.splice(g,1),o[j.id]=!0);break}for(e in o)delete n[e],this.size--;for(e in n)m.push(n[e].selector)}},d.prototype.queryAll=function(a){if(!this.selectors.length)return[];var b,c,d,e,f,g,h,i,j={},k=[],l=this.querySelectorAll(this.selectors.join(", "),a);for(b=0,d=l.length;b<d;b++)for(c=0,f=l[b],e=(g=this.matches(f)).length;c<e;c++)j[(i=g[c]).id]?h=j[i.id]:(h={id:i.id,selector:i.selector,data:i.data,elements:[]},j[i.id]=h,k.push(h)),h.elements.push(f);return k.sort(n)},d.prototype.matches=function(a){if(!a)return[];var b,c,d,e,f,g,h,i,j,k,l,m=this.activeIndexes,o={},p=[];for(b=0,e=m.length;b<e;b++)if(i=(h=m[b]).element(a)){for(c=0,f=i.length;c<f;c++)if(j=h.map.get(i[c]))for(d=0,g=j.length;d<g;d++)!o[l=(k=j[d]).id]&&this.matchesSelector(a,k.selector)&&(o[l]=!0,p.push(k))}return p.sort(n)};var o={},p={},q=new WeakMap,r=new WeakMap,s=new WeakMap,t=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function u(a,b,c){var d=a[b];return a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)},a}function v(){q.set(this,!0)}function w(){q.set(this,!0),r.set(this,!0)}function x(){return s.get(this)||null}function y(a,b){t&&Object.defineProperty(a,"currentTarget",{configurable:!0,enumerable:!0,get:b||t.get})}function z(a){if(function(a){try{return a.eventPhase,!0}catch(b){return!1}}(a)){var b=(1===a.eventPhase?p:o)[a.type];if(b){var c=function(a,b,c){var d=[],e=b;do{if(1!==e.nodeType)break;var f=a.matches(e);if(f.length){var g={node:e,observers:f};c?d.unshift(g):d.push(g)}}while(e=e.parentElement)return d}(b,a.target,1===a.eventPhase);if(c.length){u(a,"stopPropagation",v),u(a,"stopImmediatePropagation",w),y(a,x);for(var d=0,e=c.length;d<e&&!q.get(a);d++){var f=c[d];s.set(a,f.node);for(var g=0,h=f.observers.length;g<h&&!r.get(a);g++)f.observers[g].data.call(f.node,a)}s.delete(a),y(a)}}}}function A(a,b,c){var e=arguments.length>3&& void 0!==arguments[3]?arguments[3]:{},f=!!e.capture,g=f?p:o,h=g[a];h||(h=new d,g[a]=h,document.addEventListener(a,z,f)),h.add(b,c)}function B(a,b,c){return a.dispatchEvent(new CustomEvent(b,{bubbles:!0,cancelable:!0,detail:c}))}},33267(a,b,c){c.d(b,{G:()=>i});var d=c(7256),e=c(36071),f=c(59753);function g(a){let b=a.getAttribute("data-required-value"),c=a.getAttribute("data-required-value-prefix");if(a.value===b)a.setCustomValidity("");else{let d=b;c&&(d=c+d),a.setCustomValidity(d)}}(0,d.q6)("[data-required-value]",function(a){let b=a.currentTarget;g(b)}),(0,f.on)("change","[data-required-value]",function(a){let b=a.currentTarget;g(b),i(b.form)}),(0,d.q6)("[data-required-trimmed]",function(a){let b=a.currentTarget;""===b.value.trim()?b.setCustomValidity(b.getAttribute("data-required-trimmed")):b.setCustomValidity("")}),(0,f.on)("change","[data-required-trimmed]",function(a){let b=a.currentTarget;""===b.value.trim()?b.setCustomValidity(b.getAttribute("data-required-trimmed")):b.setCustomValidity(""),i(b.form)}),(0,d.ZG)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]",a=>{let b=a.checkValidity();function c(){let c=a.checkValidity();c!==b&&a.form&&i(a.form),b=c}a.addEventListener("input",c),a.addEventListener("blur",function b(){a.removeEventListener("input",c),a.removeEventListener("blur",b)})});let h=new WeakMap;function i(a){let b=a.checkValidity();for(let c of a.querySelectorAll("button[data-disable-invalid]"))c.disabled=!b}(0,e.N7)("button[data-disable-invalid]",{constructor:HTMLButtonElement,initialize(a){let b=a.form;if(b){var c;c=b,h.get(c)||(c.addEventListener("change",()=>i(c)),h.set(c,!0)),a.disabled=!b.checkValidity()}}}),(0,e.N7)("input[data-required-change], textarea[data-required-change]",function(a){let b=a,c="radio"===b.type&&b.form?b.form.elements.namedItem(b.name).value:null;function d(a){let d=b.form;if(a&&"radio"===b.type&&d&&c)for(let e of d.elements.namedItem(b.name))e instanceof HTMLInputElement&&e.setCustomValidity(b.value===c?"unchanged":"");else b.setCustomValidity(b.value===(c||b.defaultValue)?"unchanged":"")}b.addEventListener("input",d),b.addEventListener("change",d),d(),b.form&&i(b.form)}),document.addEventListener("reset",function(a){if(a.target instanceof HTMLFormElement){let b=a.target;setTimeout(()=>i(b))}})},7256(a,b,c){c.d(b,{ZG:()=>h,q6:()=>j,w4:()=>i});var d=c(8439);let e=!1,f=new d.Z;function g(a){let b=a.target;if(b instanceof HTMLElement&&b.nodeType!==Node.DOCUMENT_NODE)for(let c of f.matches(b))c.data.call(null,b)}function h(a,b){e||(e=!0,document.addEventListener("focus",g,!0)),f.add(a,b),document.activeElement instanceof HTMLElement&&document.activeElement.matches(a)&&b(document.activeElement)}function i(a,b,c){function d(b){let e=b.currentTarget;e&&(e.removeEventListener(a,c),e.removeEventListener("blur",d))}h(b,function(b){b.addEventListener(a,c),b.addEventListener("blur",d)})}function j(a,b){function c(a){let{currentTarget:d}=a;d&&(d.removeEventListener("input",b),d.removeEventListener("blur",c))}h(a,function(a){a.addEventListener("input",b),a.addEventListener("blur",c)})}},48993(a,b,c){function d(a){e(a),f(a)}function e(a){let b=a.closest(".form-group");if(b){let c=b.querySelectorAll(".js-structured-issue-multi-select-option[aria-checked='true']"),d=b?.querySelector(".js-structured-issue-multi-select-summary-button > span[data-menu-button]");if(d){let e=[];for(let f of c){let g=f.querySelector("input");g&&e.push(g.value)}d.textContent=e.join(", ")}}}function f(a){if("true"!==a.getAttribute("data-required"))return;let b=a.closest(".form-group");if(b){let c=b.querySelectorAll(".js-structured-issue-multi-select-option[data-required='true']");for(let d of c){let e=d.querySelector("input");e&&("true"===a.getAttribute("aria-checked")?e.removeAttribute("required"):Array.from(c).every(a=>"true"!==a.getAttribute("aria-checked"))&&e.setAttribute("required","required"))}}}(0,c(36071).N7)(".js-structured-issue-multi-select-option[aria-checked='true']",{add:a=>d(a),remove:a=>d(a)});var g=c(59753),h=c(7256),i=c(33267);function j(a){let b=a.closest(".form-group-body");if(!b)return;let c=b.querySelector(".js-structured-issue-textarea-expander");c&&(c.value=a.value)}function k(){let a=document.querySelector(".js-preview-panel");a&&a.classList.contains("border-bottom")&&a.classList.remove("border-bottom")}(0,g.on)("focusin",".js-structured-issue-textarea-expander",function({currentTarget:a}){(function a(){let b=document.querySelectorAll(".js-structured-issue-textarea-expander");for(let c of b)c.hidden=!1})(),function a(b){k();let c=document.querySelector(".js-wysiwyg-container"),d=b.closest(".form-group-body");if(!d||!c)return;let e=d.querySelector(".js-wysiwyg-target");if(e){e.appendChild(c),c.hidden=!1;let f=d.querySelector(".comment-form-textarea");f.value=b.value,f.placeholder=b.placeholder,b.hidden=!0,d.querySelector(".js-write-tab").click(),f.focus()}}(a)}),(0,h.q6)(".comment-form-textarea",function({currentTarget:a}){j(a);let b=document.querySelector(".new_issue");b&&(0,i.G)(b)}),(0,g.on)("change",".js-comment-field",function({currentTarget:a}){j(a);let b=document.querySelector(".new_issue");b&&(0,i.G)(b)})}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js"],()=>b(48993));var c=a.O()}])
//# sourceMappingURL=structured-issues-cdb033f551a3.js.map