"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["issues","app_assets_modules_github_soft-nav_navigate_ts"],{7102(a,b,c){c.d(b,{H:()=>f,v:()=>e});var d=c(59753);function e(){let a=document.getElementById("ajax-error-message");a&&(a.hidden=!1)}function f(){let a=document.getElementById("ajax-error-message");a&&(a.hidden=!0)}(0,d.on)("deprecatedAjaxError","[data-remote]",function(a){let b=a.detail,{error:c,text:d}=b;a.currentTarget===a.target&&"abort"!==c&&"canceled"!==c&&(/<html/.test(d)?(e(),a.stopImmediatePropagation()):setTimeout(function(){!a.defaultPrevented&&e()},0))}),(0,d.on)("deprecatedAjaxSend","[data-remote]",function(){f()}),(0,d.on)("click",".js-ajax-error-dismiss",function(){f()})},96393(a,b,c){c.d(b,{Bt:()=>h,DN:()=>k,KL:()=>n,Se:()=>j,qC:()=>o,sw:()=>l});var d=c(59753),e=c(16821),f=c(7102);function g(a,b,c){return a.dispatchEvent(new CustomEvent(b,{bubbles:!0,cancelable:c}))}function h(a,b){b&&(i(a,b),(0,e.j)(b)),g(a,"submit",!0)&&a.submit()}function i(a,b){if(!(a instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(b instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==b.type)throw TypeError("The specified element is not a submit button.");if(!a||a!==b.form)throw Error("The specified element is not owned by the form element.")}function j(a,b){if("boolean"==typeof b){if(a instanceof HTMLInputElement)a.checked=b;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===a.type)throw TypeError("checkbox can't be set to string value");a.value=b}g(a,"change",!1)}function k(a,b){for(let c in b){let d=b[c],e=a.elements.namedItem(c);e instanceof HTMLInputElement?e.value=d:e instanceof HTMLTextAreaElement&&(e.value=d)}}function l(a){if(!(a instanceof HTMLElement))return!1;let b=a.nodeName.toLowerCase(),c=(a.getAttribute("type")||"").toLowerCase();return"select"===b||"textarea"===b||"input"===b&&"submit"!==c&&"reset"!==c||a.isContentEditable}function m(a){return new URLSearchParams(a)}function n(a,b){let c=new URLSearchParams(a.search),d=m(b);for(let[e,f]of d)c.append(e,f);return c.toString()}function o(a){return m(new FormData(a)).toString()}(0,d.on)("click",".js-remote-submit-button",async function(a){let b=a.currentTarget,c=b.form;a.preventDefault();let d;try{d=await fetch(c.action,{method:c.method,body:new FormData(c),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}d&&!d.ok&&(0,f.v)()})},2128(a,b,c){var d=c(76006),e=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let f=class InputDemuxElement extends HTMLElement{connectedCallback(){this.control&&(this.storedInput=Array(this.control.children.length).fill("")),this.addEventListener("input",this.relayInput.bind(this)),this.addEventListener("keydown",this.relayKeydown.bind(this));let a=this.closest("details");a&&a.addEventListener("toggle",()=>{a.open&&this.source.focus()})}relayKeydown(a){if((this.isControlTab(a.target)||a.target===this.source)&&("ArrowDown"===a.key||"Tab"===a.key))a.preventDefault(),a.stopPropagation(),this.routeCustomEvent(new CustomEvent("focus-list"));else if("Escape"===a.key){let b=this.closest("details");b&&b.removeAttribute("open")}}isControlTab(a){return!!a&&!!this.control&&Array.from(this.control.children).includes(a)}relayInput(a){if(!a.target)return;let b=a.target,c=b.value;this.routeCustomEvent(new CustomEvent("input-entered",{detail:c}))}routeCustomEvent(a){let b=this.sinks[this.selectedIndex];b.dispatchEvent(a)}get selectedIndex(){if(!this.control)return 0;let a=this.control.querySelector('[aria-selected="true"]');return a?Array.from(this.control.children).indexOf(a):0}storeInput(){this.storedInput[this.selectedIndex]=this.source.value}updateInput(a){this.source.value=this.storedInput[this.selectedIndex];let b=a.detail.relatedTarget.getAttribute("data-filter-placeholder");this.source.placeholder=b,this.source.setAttribute("aria-label",b),this.notifySelected()}notifySelected(){let a=this.sinks[this.selectedIndex],b=new CustomEvent("tab-selected");a.dispatchEvent(b)}};e([d.fA],f.prototype,"source",void 0),e([d.GO],f.prototype,"sinks",void 0),e([d.fA],f.prototype,"control",void 0),f=e([d.Ih],f)},90114(a,b,c){(0,c(59753).on)("details-menu-selected",".js-sync-select-menu-icon",function(a){let b=document.querySelector(".js-sync-select-menu-icon-completed"),c=document.querySelector(".js-sync-select-menu-icon-canceled"),d=a.detail.relatedTarget.querySelector('input[name="state_reason"]'),e=d?d.value:null;"not_planned"===e?(b.style.display="none",c.style.display="inline-block"):(b.style.display="inline-block",c.style.display="none")},{capture:!0})},60798(a,b,c){c.d(b,{QZ:()=>v,ZH:()=>B,jK:()=>w,T_:()=>A,Sw:()=>z,VF:()=>y,VH:()=>C});var d=c(5690),e=c(59753),f=c(98105),g=c(11793),h=c(7322),i=c(36071);function j(a,b){let c=a,d=a.ownerDocument;(c===d||c===d.defaultView||c===d.documentElement||c===d.body)&&(c=d);let e=d.defaultView.Document;if(c instanceof e){let f=null!=b.top?b.top:d.defaultView.pageYOffset,g=null!=b.left?b.left:d.defaultView.pageXOffset;d.defaultView.scrollTo(g,f);return}let h=d.defaultView.HTMLElement;if(!(c instanceof h))throw Error("invariant");c.scrollTop=b.top,null!=b.left&&(c.scrollLeft=b.left)}var k=c(5150);let l=navigator.userAgent.match(/Macintosh/),m=l?"metaKey":"ctrlKey",n=l?"Meta":"Control",o=!1,p={x:0,y:0};function q(a){a instanceof MouseEvent&&((p.x!==a.clientX||p.y!==a.clientY)&&(o=!1),p={x:a.clientX,y:a.clientY})}function r(a){if(o)return;let b=a.currentTarget,{target:c}=a;if(!(c instanceof Element)||!(b instanceof HTMLElement)||!b.closest(".js-active-navigation-container"))return;let d=c.closest(".js-navigation-item");d&&I(d,b)}(0,i.N7)(".js-navigation-container:not(.js-navigation-container-no-mouse)",{subscribe:a=>(0,d.qC)((0,d.RB)(a,"mouseover",q),(0,d.RB)(a,"mouseover",r))});let s=0;function t(a){if(a.target!==document.body&&a.target instanceof HTMLElement&&!a.target.classList.contains("js-navigation-enable"))return;o=!0;let b=J(),c=!1;if(b){let d=b.querySelector(".js-navigation-item.navigation-focus")||b;c=(0,e.f)(d,"navigation:keydown",{hotkey:(0,g.EL)(a),originalEvent:a,originalTarget:a.target})}c||a.preventDefault()}function u(a){let b=a.modifierKey||a.altKey||a.ctrlKey||a.metaKey,c=(0,e.f)(a.currentTarget,"navigation:open",{modifierKey:b,shiftKey:a.shiftKey});c||a.preventDefault()}function v(a){let b=J();a!==b&&(null!==b&&w(b),a?.classList.add("js-active-navigation-container"))}function w(a){a.classList.remove("js-active-navigation-container")}(0,i.N7)(".js-active-navigation-container",{add(){1== ++s&&document.addEventListener("keydown",t)},remove(){0== --s&&document.removeEventListener("keydown",t)}}),(0,e.on)("navigation:keydown",".js-active-navigation-container",function(a){let b=a.currentTarget,c=a.detail.originalTarget.matches("input, textarea"),d=a.target;if((0,h.Zf)(a.detail.originalEvent)){if(d.classList.contains("js-navigation-item")){if(c){if(l)switch((0,g.EL)(a.detail.originalEvent)){case"Control+n":E(d,b);break;case"Control+p":D(d,b)}switch((0,g.EL)(a.detail.originalEvent)){case"ArrowUp":D(d,b);break;case"ArrowDown":E(d,b);break;case"Enter":case`${n}+Enter`:H(d,a.detail.originalEvent[m])}}else{if(l)switch((0,g.EL)(a.detail.originalEvent)){case"Control+n":E(d,b);break;case"Control+p":D(d,b);break;case"Alt+v":F(d,b);break;case"Control+v":G(d,b)}switch((0,g.EL)(a.detail.originalEvent)){case"j":case"J":E(d,b);break;case"k":case"K":D(d,b);break;case"o":case"Enter":case`${n}+Enter`:H(d,a.detail[m])}}}else{let e=K(b)[0];if(e){if(c)l&&"Control+n"===(0,g.EL)(a.detail.originalEvent)&&I(e,b),"ArrowDown"===(0,g.EL)(a.detail.originalEvent)&&I(e,b);else{if(l)switch((0,g.EL)(a.detail.originalEvent)){case"Control+n":case"Control+v":I(e,b)}"j"===(0,g.EL)(a.detail.originalEvent)&&I(e,b)}}}if(c){if(l)switch((0,g.EL)(a.detail.originalEvent)){case"Control+n":case"Control+p":a.preventDefault()}switch((0,g.EL)(a.detail.originalEvent)){case"ArrowUp":case"ArrowDown":case"Enter":a.preventDefault()}}else{if(l)switch((0,g.EL)(a.detail.originalEvent)){case"Control+n":case"Control+p":case"Control+v":case"Alt+v":a.preventDefault()}switch((0,g.EL)(a.detail.originalEvent)){case"j":case"k":case"o":case"Enter":case`${m}+Enter`:a.preventDefault()}}}}),(0,e.on)("click",".js-active-navigation-container .js-navigation-item",function(a){u(a)}),(0,e.on)("navigation:keyopen",".js-active-navigation-container .js-navigation-item",function(a){let b=a.currentTarget.classList.contains("js-navigation-open")?a.currentTarget:a.currentTarget.querySelector(".js-navigation-open");if(b instanceof HTMLAnchorElement){if(a.detail.modifierKey)window.open(b.href,"_blank"),window.focus();else{let c=b.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0}));c&&b.click()}a.preventDefault()}else u(a)});let x=[];function y(a){let b=J();b&&x.push(b),v(a)}function z(a){w(a),B(a);let b=x.pop();b&&v(b)}function A(a,b){let c=K(a)[0],d=(b||a).closest(".js-navigation-item")||c;if(v(a),d instanceof HTMLElement){let e=I(d,a);if(e)return;let g=(0,f.VZ)(d);N(g,d)}}function B(a){let b=a.querySelectorAll(".js-navigation-item.navigation-focus");for(let c of b)c.classList.remove("navigation-focus")}function C(a,b){B(a),A(a,b)}function D(a,b){let c=K(b),d=c.indexOf(a),e=c[d-1];if(e){let g=I(e,b);if(g)return;let h=(0,f.VZ)(e);"page"===L(b)?M(h,e):N(h,e)}}function E(a,b){let c=K(b),d=c.indexOf(a),e=c[d+1];if(e){let g=I(e,b);if(g)return;let h=(0,f.VZ)(e);"page"===L(b)?M(h,e):N(h,e)}}function F(a,b){let c=K(b),d=c.indexOf(a),e=(0,f.VZ)(a);if(null==e)return;let g,h;for(;(g=c[d-1])&&(h=(0,f._C)(g,e))&&h.top>=0;)d--;if(g){let i=I(g,b);if(i)return;M(e,g)}}function G(a,b){let c=K(b),d=c.indexOf(a),e=(0,f.VZ)(a);if(null==e)return;let g,h;for(;(g=c[d+1])&&(h=(0,f._C)(g,e))&&h.bottom>=0;)d++;if(g){let i=I(g,b);if(i)return;M(e,g)}}function H(a,b=!1){(0,e.f)(a,"navigation:keyopen",{modifierKey:b})}function I(a,b){return!(0,e.f)(a,"navigation:focus")||(B(b),a.classList.add("navigation-focus"),!1)}function J(){return document.querySelector(".js-active-navigation-container")}function K(a){let b=[];for(let c of a.querySelectorAll(".js-navigation-item"))c instanceof HTMLElement&&(0,k.Z)(c)&&b.push(c);return b}function L(a){return a.getAttribute("data-navigation-scroll")||"item"}function M(a,b,c="smooth"){let d=(0,f._C)(b,a);d&&(d.bottom<=0?b.scrollIntoView({behavior:c,block:"start"}):d.top<=0&&b.scrollIntoView({behavior:c,block:"end"}))}function N(a,b){let c=(0,f.oE)(b,a),d=(0,f._C)(b,a);if(null!=c&&null!=d){if(d.bottom<=0&&document.body){let e=null!=a.offsetParent?a.scrollHeight:document.body.scrollHeight,g=e-(c.bottom+d.height);j(a,{top:g})}else d.top<=0&&j(a,{top:c.top})}}},16821(a,b,c){function d(a){let b=a.closest("form");if(!(b instanceof HTMLFormElement))return;let c=e(b);if(a.name){let d=a.matches("input[type=submit]")?"Submit":"",f=a.value||d;c||((c=document.createElement("input")).type="hidden",c.classList.add("js-submit-button-value"),b.prepend(c)),c.name=a.name,c.value=f}else c&&c.remove()}function e(a){let b=a.querySelector("input.js-submit-button-value");return b instanceof HTMLInputElement?b:null}c.d(b,{j:()=>d,u:()=>e})},99947(a,b,c){c.r(b),c.d(b,{softNavigate:()=>f});var d=c(74395),e=c(40381);function f(a,b){(0,e.LD)("turbo"),(0,d.Vn)(a,{...b})}},5690(a,b,c){c.d(b,{RB:()=>d,qC:()=>e,w0:()=>Subscription});class Subscription{constructor(a){this.closed=!1,this.unsubscribe=()=>{a(),this.closed=!0}}}function d(a,b,c,d={capture:!1}){return a.addEventListener(b,c,d),new Subscription(()=>{a.removeEventListener(b,c,d)})}function e(...a){return new Subscription(()=>{for(let b of a)b.unsubscribe()})}},5916(a,b,c){function d(a){let b=a.split("\u200D"),c=0;for(let d of b){let e=Array.from(d.split(/[\ufe00-\ufe0f]/).join("")).length;c+=e}return c/b.length}function e(a,b,c,d=!0){let e=a.value.substring(0,a.selectionEnd||0),f=a.value.substring(a.selectionEnd||0);return h(a,(e=e.replace(b,c))+(f=f.replace(b,c)),e.length,d),c}function f(a,b,c){if(null===a.selectionStart||null===a.selectionEnd)return e(a,b,c);let d=a.value.substring(0,a.selectionStart),f=a.value.substring(a.selectionEnd);return h(a,d+c+f,d.length),c}function g(a,b,c={}){let d=a.selectionEnd||0,e=a.value.substring(0,d),f=a.value.substring(d),g=""===a.value||e.match(/\n$/)?"":"\n",h=c.appendNewline?"\n":"",i=g+b+h;a.value=e+i+f;let j=d+i.length;return a.selectionStart=j,a.selectionEnd=j,a.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1})),a.focus(),i}function h(a,b,c,d=!0){a.value=b,d&&(a.selectionStart=c,a.selectionEnd=c),a.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1}))}function i(a,b){let c=[...a],d=new TextEncoder,e=new Uint8Array(4);for(let f=0;f<c.length;f++){let g=c[f],{written:h,read:i}=d.encodeInto(g,e);if(!h||!i)return -1;let j=h-i;if(0!==j&&(f<b&&(b-=j),f>=b))break}return b}c.d(b,{Om:()=>g,lp:()=>e,rq:()=>d,t4:()=>f,yb:()=>i})},5150(a,b,c){c.d(b,{Z:()=>d});function d(a){var b;return!((b=a).offsetWidth<=0)||!(b.offsetHeight<=0)}},10695(a,b,c){var d,e,f=c(96393),g=c(7322),h=c(36071),i=c(59753),j=c(7256);(0,h.N7)(".js-issue-row .js-issues-list-check:checked",{add(a){a.closest(".js-issue-row").classList.add("selected")},remove(a){a.closest(".js-issue-row").classList.remove("selected")}}),(0,i.on)("navigation:keydown",".js-issue-row",function(a){(0,g.Zf)(a.detail.originalEvent)&&"x"===a.detail.hotkey&&(function a(b){let c=b.querySelector(".js-issues-list-check");c instanceof HTMLInputElement&&(0,f.Se)(c,!c.checked)}(a.currentTarget),a.preventDefault(),a.stopPropagation())}),(0,j.ZG)("#js-issues-search",function(a){let b=a;b.value=b.value});var k=c(46263),l=c(35338),m=c(5690),n=c(72586),o=c(60798),p=c(96776),q=c(65935),r=c(91582);let s=new WeakMap,t=new WeakMap;async function u(a){if((0,n.M)(a))return;let b=a.getAttribute("data-url"),c=await (0,l.a)(document,b);(0,p._8)(document,()=>{a.replaceWith(c)})}(0,h.N7)(".js-milestone-issues",{subscribe:a=>(0,m.RB)(a,"socket:message",async function(a){let b=a.currentTarget,c=a.detail.data,d=b.querySelector(".js-milestone-issues-container");if(t.has(d)){t.delete(d);return}await (0,r.Z)();let e=document.querySelector(".js-client-uid");e instanceof HTMLInputElement&&e.value===c.client_uid||u(b)})}),(0,q.AC)(".js-milestone-sort-form",async function(a,b){let c=await b.json(),d=c.json,e=a.querySelector(".js-milestone-reorder-feedback");e.textContent="",d.error?a.querySelector(".js-milestone-changed").classList.remove("d-none"):(a.querySelector(".js-timestamp").value=d.updated_at,e.textContent=e.getAttribute("data-success-text")||"")});let v=(0,k.D)(function(a){var b,c;let{newIndex:d,item:e}=a,g=e.closest(".js-milestone-issues-container"),h=e.getAttribute("data-id")||"",i=(b=g,c=d-1,b.querySelectorAll(".js-draggable-issue")[c]),j=i&&i.getAttribute("data-id"),k=g.closest(".js-milestone-sort-form");k.querySelector(".js-item-id").value=h,k.querySelector(".js-prev-id").value=j||"",t.set(g,!0),(0,f.Bt)(k)},200);function w(a,b){v({oldIndex:void 0,item:b,newIndex:Array.from(a.querySelectorAll(".js-draggable-issue")).indexOf(b),trackingLabel:"keyboard-shortcut"}),(0,o.VH)(b.closest(".js-navigation-container"),b)}async function x(a){if(s.has(a))return;let{Sortable:b}=await Promise.all([c.e("vendors-node_modules_github_sortablejs_Sortable_js"),c.e("app_assets_modules_github_sortable-behavior_ts")]).then(c.bind(c,53179)),d=b.create(a,{animation:150,item:".js-draggable-issue",handle:".js-drag-handle",onUpdate:v,chosenClass:"is-dragging"});s.set(a,d)}function y(a){let b=a.currentTarget;if(!(b instanceof HTMLElement))return;let c=b.querySelector(".js-milestone-edit-cancel"),d=c.getAttribute("data-confirm-changes");d&&((0,n.T)(b)?c.setAttribute("data-confirm",d):c.removeAttribute("data-confirm"))}(0,i.on)("click",".js-draggable-issue .js-sortable-button",async function({currentTarget:a}){let{moveWithButton:b}=await Promise.all([c.e("vendors-node_modules_github_sortablejs_Sortable_js"),c.e("app_assets_modules_github_sortable-behavior_ts")]).then(c.bind(c,53179));b(a,a.closest(".js-draggable-issue"),v)}),(0,i.on)("navigation:keydown",".js-draggable-issues-container .js-draggable-issue",function(a){if(!(0,g.Zf)(a.detail.originalEvent))return;let b=a.currentTarget,c=b.closest(".js-draggable-issues-container");if("J"===a.detail.hotkey){let d=b.nextElementSibling;d&&(d.after(b),w(c,b),a.preventDefault(),a.stopPropagation())}else if("K"===a.detail.hotkey){let e=b.previousElementSibling;e&&(e.before(b),w(c,b),a.preventDefault(),a.stopPropagation())}}),(0,h.N7)(".js-draggable-issues-container",{add:x,remove:function(a){let b=s.get(a);b&&b.destroy()}}),(0,i.on)("change",".js-milestone-edit-form",y),(0,i.on)("click",".js-milestone-edit-form",y);let z,A=null;function B(a){let{item:b,oldIndex:c}=a;A=b.parentNode.children[c+1]}async function C(a){let{oldIndex:b,newIndex:c,item:d}=a;if(b===c)return;let e=d.closest(".js-pinned-issues-reorder-form");z.option("disabled",!0);let f=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{"X-Requested-With":"XMLHttpRequest"}});if(f.ok)z.option("disabled",!1);else{let g=d.parentNode;A?g.insertBefore(d,A):g.appendChild(d)}}(0,h.N7)(".js-pinned-issues-reorder-list",{async add(a){let{Sortable:b}=await Promise.all([c.e("vendors-node_modules_github_sortablejs_Sortable_js"),c.e("app_assets_modules_github_sortable-behavior_ts")]).then(c.bind(c,53179));z=b.create(a,{animation:150,item:".js-pinned-issue-list-item",handle:".js-pinned-issue-reorder",onUpdate:C,onStart:B,chosenClass:"is-dragging"})}}),(0,i.on)("submit",".js-pinned-issues-reorder-form",function(a){a.preventDefault()}),(0,i.on)("click",".js-pinned-issue-list-item .js-sortable-button",async function({currentTarget:a}){let b=a,{moveWithButton:d}=await Promise.all([c.e("vendors-node_modules_github_sortablejs_Sortable_js"),c.e("app_assets_modules_github_sortable-behavior_ts")]).then(c.bind(c,53179));d(b,b.closest(".js-pinned-issue-list-item"),C)});var D=c(16762);let E=null,F=null;async function G(){let a=document.querySelector(".js-quick-pull-new-branch-name"),b=a.value,c=a.getAttribute("data-generated-branch"),d=document.querySelector(".js-quick-pull-normalization-info"),e=new FormData;e.append("ref",b);let f=a.getAttribute("data-check-url"),g=a.parentElement.querySelector(".js-data-check-url-csrf");E?.abort();let{signal:h}=E=new AbortController;try{let i=await fetch(f,{mode:"same-origin",method:"POST",body:e,headers:{Accept:"application/json","Scoped-CSRF-Token":g.value,"X-Requested-With":"XMLHttpRequest"}});if(i.ok){let j=await i.json();if(b!==a.value)return;let k=j.normalized_ref;if(d.innerHTML=null==j.message_html?"":j.message_html,!k){let l=d.querySelector("code");l.textContent=c}F&&(F.value=k||"")}}catch{}if(!h.aborted){if(b!==a.value)return;F&&(F.value=b)}}let H=(0,k.D)(G,200);function I(){return document.querySelectorAll(".js-template-editor").length>0}function J(){let a=document.querySelectorAll(".js-template-form.is-loading").length;if(a>0)return"loading";let b=document.querySelectorAll(".js-template-form.is-errored").length;return b>0?"error":"ok"}function K(){let a=document.querySelector(".js-commit-templates-form"),b=a.querySelector(".js-blob-submit"),c=document.querySelector(".js-template-commit-form-error-message"),d=document.querySelector(".js-template-commit-form-loading-message");switch(J()){case"loading":c.classList.add("d-none"),d.classList.remove("d-none"),a.setAttribute("disabled","disabled"),b.setAttribute("disabled","disabled");break;case"error":c.classList.remove("d-none"),d.classList.add("d-none"),a.setAttribute("disabled","disabled"),b.setAttribute("disabled","disabled");break;default:c.classList.add("d-none"),d.classList.add("d-none"),a.removeAttribute("disabled"),b.removeAttribute("disabled")}}async function L(a){a.classList.add("is-loading"),K();let b=a.querySelector('[name="filename"]').value,c=a.querySelector('[name="old_filename"]'),d=c.value,e={};for(let f of document.querySelectorAll(".js-template-form")){let g=f.querySelector('[name="filename"]').value;e[g]={};let h=new FormData(f);for(let[i,j]of h.entries())e[g][i]=j.toString()}let k=new FormData(a);k.append("current",b),k.append("templates",JSON.stringify(e));let l=await fetch(a.action,{method:"POST",body:k,headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(!l.ok)return;let m=await l.json(),n=(0,D.r)(document,m.html);a.closest(".js-template-preview").replaceWith(n);let o=document.querySelector(".js-hidden-template-fields"),p=o.querySelector(`[data-filename="${d}"]`);if(p instanceof HTMLInputElement)p.value=m.markdown,p.setAttribute("data-filename",m.filename),p.name=`templates[][${m.filename}]`;else{let q=document.createElement("input");q.type="hidden",q.name=`templates[][${m.filename}]`,q.setAttribute("data-filename",m.filename),q.value=m.markdown,o.append(q)}a.classList.remove("is-loading"),K()}function M(){for(let a of document.querySelectorAll(".js-template-form"))L(a)}(0,h.N7)(".js-template-form .js-issue-labels",{add(a){let b=a.closest(".js-issue-template-labels-container");if(!b)return;let c=b.querySelector(".js-issue-template-labels");for(let d of(c.value="",a.children)){let e=d.getAttribute("data-name");e&&!c.value.includes(e)&&(""===c.value?c.value=e:c.value=`${c.value}, ${e}`)}}}),(0,h.N7)(".js-template-form .js-issue-assignees",{add(a){let b=a.closest(".js-issue-template-assignees-container"),c=b.querySelector(".js-issue-template-assignees");for(let d of(c.value="",a.children)){let e=d.querySelector("span");if(e){let f=e.getAttribute("data-assignee-name");f&&!c.value.includes(f)&&(""===c.value?c.value=f:c.value=`${c.value}, ${f}`)}}}}),(0,i.on)("change",".js-quick-pull-choice-option",function(a){if(!I())return;let b=a.currentTarget,c=document.querySelector(".js-quick-pull-new-branch-name");c.toggleAttribute("required","quick-pull"===b.value)}),(0,j.q6)(".js-quick-pull-new-branch-name",function(a){if(!I())return;let b=a.target,c=b.value,d=document.querySelector(".js-quick-pull-target-branch");d.value=c,c.length&&H()}),(0,j.q6)(".js-synced-template-input",function(a){let b=a.target,c=b.getAttribute("data-sync");if(!c)return;let d=b.closest(".js-sync-container"),e=d.querySelectorAll(`[data-sync-with="${c}"]`),f=b.value;if(""===f.trim()){for(let g of e){let h=g.getAttribute("data-sync-blank");if(h){g.textContent="";let i=document.createElement("span");i.className="color-fg-muted",i.textContent=h,g.appendChild(i)}}return}for(let j of e)j.textContent=b.value;if("name"===c){let k=d.querySelector(".js-sync-filename");k.value=`${f.replace(RegExp("[^\\p{Letter}\\p{Mark}\\p{Number}\\p{Connector_Punctuation}\\p{Emoji}]","gu"),"-")}.md`.toLowerCase()}}),(0,i.on)("submit",".js-template-form",function(a){a.preventDefault();let b=a.currentTarget;L(b)}),(0,i.on)("click",".js-toggle-template-commit",function(){let a=document.querySelector(".js-template-commit-pane");a.classList.toggle("d-none"),a.classList.contains("d-none")||M()}),(0,i.on)("submit",".js-commit-templates-form",function(a){"ok"!==J()&&a.preventDefault(),K()}),(0,i.on)("click",".js-refresh-template-content",async function(a){let b=a.currentTarget,c=b.closest(".js-template-form"),d=c.querySelector(".js-template-content-preview");d.innerHTML='<span class="color-fg-muted">Loading preview...</span>';let e=c.querySelector(".js-template-content-textarea").value,f=b.getAttribute("data-markdown-preview-url");if(!f)return;let g=b.parentElement.querySelector(".js-data-markdown-preview-url-csrf"),h=new FormData;h.append("markdown",e);let i=await fetch(f,{mode:"same-origin",method:"POST",body:h,headers:{"Scoped-CSRF-Token":g.value,"X-Requested-With":"XMLHttpRequest"}});if(!i.ok)return;let j=await i.text();d.innerHTML=j}),(0,i.on)("click",".js-custom-template-toggle",a=>{let b=a.target,c=b.closest(".js-template-preview"),d=!c.classList.contains("expand-preview");if(function(){let a=document.querySelectorAll(".js-template-preview");for(let b of a)b.classList.remove("expand-preview")}(),d)c.classList.add("expand-preview"),c.scrollIntoView({behavior:"smooth",block:"start"});else{let e=c.querySelector(".js-template-form");L(e)}}),(0,i.on)("click",".js-remove-template-button",function(a){let b=a.target.closest(".js-template-preview"),c=b.getAttribute("data-filename"),d=document.querySelector(".js-hidden-template-fields"),e=document.querySelector(".js-toggle-template-commit"),f=d.querySelector(`[data-filename="${c}"]`);f&&f.remove(),e.disabled=!1,b.remove(),M()}),(0,i.on)("click",".js-edit-custom-field-header",function(a){let b=a.target.closest(".js-custom-field-header");b.classList.toggle("section-focus");let c=document.querySelector(".js-toggle-template-commit");c.disabled=!1}),(0,i.on)("details-menu-selected",".js-add-template",function(a){let b=document.querySelector(".js-templates-container"),c=document.querySelector(".js-toggle-template-commit"),d=a.detail.relatedTarget.value;if(!d)return;c.disabled=!1;let e=document.getElementById(d);b.append(e.content.cloneNode(!0))},{capture:!0});var N=c(76006),O=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let P=((d=class TrackedIssuesProgressElement extends HTMLElement{attributeChangedCallback(a,b,c){null!==b&&b!==c&&(this.timer&&cancelAnimationFrame(this.timer),this.timer=requestAnimationFrame(()=>this.update()))}update(){let a=Number(this.getAttribute("data-completed")||0),b=Number(this.getAttribute("data-total")||0);if(this.label.textContent=this.getLabelContent(a,b),this.progress&&b>0){let c=Number(this.progress.getAttribute("data-circumference")||0),d=Number(this.stroke.getAttribute("stroke-width")||0),e=a/b*100,f=e<100?(100-e)/100*c+d/2:0;this.stroke.setAttribute("stroke-dashoffset",f.toString()),0===a?(this.progress.parentElement.style.display="none",this.checklist.style.display="flex"):(this.progress.parentElement.style.display="flex",this.checklist.style.display="none")}}getLabelContent(a,b){return a>0?a===b?`${this.pluralizeTasks(b)} done`:`${a} of ${this.pluralizeTasks(b)}`:this.pluralizeTasks(b)}pluralizeTasks(a){return 1===a?"1 task":`${a} tasks`}}).observedAttributes=["data-total","data-completed"],d);O([N.fA],P.prototype,"label",void 0),O([N.fA],P.prototype,"progress",void 0),O([N.fA],P.prototype,"checklist",void 0),O([N.fA],P.prototype,"stroke",void 0),P=O([N.Ih],P);var Q=c(99947);let R=new WeakMap,S=new WeakMap;function T(a){if(!R.has(a))return;let b=document.querySelector(".js-triage-loader-template"),c=a.querySelector(".js-triage-deferred-content");c.textContent="",c.append(b.content.cloneNode(!0));let d=X(a.getAttribute("data-url"),W());c.querySelector("include-fragment").setAttribute("src",d),R.delete(a)}async function U(a){let b=a.querySelector("form");if(S.has(b)){!function(a,b){let c=a.closest(".js-issues-toolbar-triage");c.querySelector(".js-issue-triage-spinner").hidden=!b,c.querySelector(".js-issue-triage-error").hidden=!0}(a,!0);try{let c=await fetch(b.action,{method:b.method,body:new FormData(b),headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}});if(!c.ok){let d=Error(),e=c.statusText?` ${c.statusText}`:"";throw d.message=`HTTP ${c.status}${e}`,d}let f=await c.json();S.delete(b),await (0,l.D)(f.job.url,{headers:{accept:"application/json"}}),(0,Q.softNavigate)(window.location.href,{action:"replace"})}catch(g){!function(a,b){let c=a.closest(".js-issues-toolbar-triage");c.querySelector(".js-issue-triage-spinner").hidden=!0,c.querySelector(".js-issue-triage-error").hidden=!b}(a,!0)}}}function V(a){let b="true"===a.getAttribute("aria-checked"),c=a.getAttribute("name")||a.getAttribute("data-name"),d=a.getAttribute("value")||a.getAttribute("data-value"),e=document.createElement("input");switch(e.type="hidden",e.name=c,a.getAttribute("role")){case"menuitem":case"menuitemradio":e.value=d;break;case"menuitemcheckbox":e.value=b?d:"0"}return e}function W(){return Array.from(document.querySelectorAll(".js-issues-list-check:checked")).map(a=>[a.name,a.value])}function X(a,b){let c=new URL(a,window.location.origin),d=new URLSearchParams(c.search);for(let[e,f]of b)d.append(e,f);return c.search=d.toString(),c.toString()}(0,i.on)("change",".js-issues-list-check",function(){let a=!!document.querySelector(".js-issues-list-check:checked");for(let b of(document.querySelector("#js-issues-toolbar").classList.toggle("triage-mode",a),document.querySelectorAll(".js-issue-triage-menu")))R.set(b,!0)}),(0,i.on)("toggle",".js-issue-triage-menu",function(a){let b=a.currentTarget;b.hasAttribute("open")?T(b):U(b)},{capture:!0}),(0,i.on)("details-menu-selected",".js-issue-triage-menu details-menu",function(a){let b=a.detail.relatedTarget,c=b.closest("form"),d=V(b),e=c.querySelector(".js-issues-triage-fields"),f=e.querySelector(`[name='${d.name}']`);f?f.replaceWith(d):e.append(d),S.set(c,!0)},{capture:!0}),(0,q.AC)(".js-undo-issue-event-form",async(a,b)=>{await b.text();let c=a.getAttribute("action");a.remove();let d=document.querySelectorAll(`.js-undo-issue-event-form[action="${c}"]`);for(let e=0;e<d.length;e++)d[e].remove()});var Y,Z=c(44245),$=c(91800),_=c(26803);(Y=e||(e={})).NONE="",Y.ALT="alt",Y.META="meta";let aa=e.NONE,ab=navigator.userAgent.match(/Macintosh/),ac=new WeakMap;function ad(a){let b=document.querySelector(".js-convert-task-to-issue-enabled");if(!b)return;let c=b.querySelector(".js-convert-task-to-issue-data"),d=c.getAttribute("data-tooltip-label-inline"),f=c.getAttribute("data-tooltip-label-open"),g=c.getAttribute("data-tooltip-label-open-same-tab");for(let h of a)aa===e.ALT?h.setAttribute("aria-label",g):aa===e.META?h.setAttribute("aria-label",f):h.setAttribute("aria-label",d)}function ae(a){let b=a.currentTarget,c=b.closest("li.plain-task-item");if(!c||c.classList.contains("is-loading"))return;let d=document.querySelector(".js-convert-task-to-issue-enabled");d&&(d.disabled=!0);let f=c.getAttribute("data-title"),g=c.getAttribute("data-position");if(aa!==e.NONE){ag(a,d,f,g);return}(0,Z.nj)(d),ai(c);let h=document.getElementById("js-inline-convert-to-issue-title"),i=document.getElementById("js-inline-convert-to-issue-position");h.value=f,i.value=g;let j=document.querySelector(".js-inline-convert-to-issue-form");j&&j instanceof HTMLFormElement&&av(j,d,c)}function af(a){return a.altKey||a.ctrlKey&&a.shiftKey||a.shiftKey||a.metaKey}function ag(a,b,c,d){let f=b.querySelector(".js-convert-task-to-issue-data"),g=f.getAttribute("data-url"),h=f.getAttribute("data-parent-issue-number"),i=`${g}?convert_from_task=true&parent_issue_number=${h}&title=${encodeURIComponent(c)}&position=${d}`;aa===e.ALT?window.open(`${i}&click_type=current_tab`,"_self","noopener,noreferrer"):window.open(`${i}&click_type=new_tab`,"_blank","noopener,noreferrer"),ah()}function ah(){aa=e.NONE}function ai(a){a.classList.add("is-loading");let b=a.querySelector("input[type='checkbox']"),c=document.querySelector(".js-convert-task-to-issue-spinner").cloneNode(!0);c.removeAttribute("hidden"),b.parentNode?.insertBefore(c,b.nextSibling);let d=a.querySelector("button");d.hidden=!0}function aj(a,b){for(let c of b){if(an(c))return;let d=c.querySelector("ul, ol");if(d&&c.classList.add("pb-0"),c.classList.add("position-relative","border-right-0"),al(c)||am(c)||!ao(c))continue;c.classList.add("plain-task-item");let e=ak(),f="";if(d){for(let g of c.childNodes)g.nodeType===Node.TEXT_NODE&&(f+=g.nodeValue);c.insertBefore(e,d)}else c.classList.add("pr-6"),f=ap(c.innerHTML),c.appendChild(e);0===f.trim().length&&(f=aA(c),f=ap(f)),f=aq(f);let h=f.split("\n")[0].trim(),i=ay(c).toString();c.setAttribute("data-title",h),c.setAttribute("data-position",i);let j=document.createElement("span");j.hidden=!0,j.className="js-clear",c.appendChild(j);let k=`Press Enter to convert to an issue instantly. Press ${ab?"Option":"Alt"}-Enter to open the create new issue form in the current tab. Press Shift-Enter to open the create new issue form.`;j.textContent=`Create an issue with the title ${h}. ${k}`;let l=i.replace(/,/,"-");j.id=`button-description-${l}`,e.setAttribute("aria-describedby",`button-description-${l}`)}}function ak(){let a=document.querySelector(".js-convert-to-issue-button")?.cloneNode(!0);return a.removeAttribute("hidden"),a.addEventListener("focus",at),a.addEventListener("blur",au),a}function al(a){return 0!==a.querySelectorAll(":scope > span > .js-issue-link").length||0!==a.querySelectorAll(":scope > p > span > .js-issue-link").length}function am(a){return 0!==a.querySelectorAll(":scope > span > .js-security-alert-link").length}function an(a){return!!a.querySelector("button.convert-to-issue-button")}function ao(a){return!!a.classList.contains("task-list-item")}function ap(a){return a.replace(/<(?!\/?code)[^>]+>/g,"").replace(/<\/?code>/g,"`").replace(/<\/?code[^>]+>/g,"`").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#96;/g,"`").replace(/&#x27;/g,"'").replace(/&apos;/g,"'").replace(/&amp;/g,"&").trim()}function aq(a){return a.replace(/^\s*\d+\.\s+/g,"").replace(/:\s*$/,"").trim()}function ar(a){let b=a.target;if(!b)return;b.parentElement?.classList.remove("hovered"),b.classList.remove("hovered");let c=b.parentElement?.closest(".enabled.task-list-item");c?.classList.add("hovered")}function as(a){let b=a.target;if(!b)return;let c=b.parentElement?.closest(".enabled.task-list-item");c?.classList.remove("hovered"),b.classList.add("hovered")}function at(a){let b=a.target;if(!b)return;let c=b.parentElement?.closest(".enabled.task-list-item");c?.classList.add("hovered")}function au(a){let b=a.target;if(!b)return;let c=b.parentElement?.closest(".enabled.task-list-item");c?.classList.remove("hovered")}async function av(a,b,c){let d,e;try{e=await (d=await fetch(a.action,{method:a.method,body:new FormData(a),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})).json()}catch{}ax(),d&&!d.ok?e?(aw(e),(0,Z.L$)(b),function(a){if(!a)return;a.classList.remove("is-loading");let b=a.querySelector(".loading-spinner");a.removeChild(b)}(c)):aw():e&&(0,$.x)(`${e.title} was converted to an issue.`)}function aw(a){if(a?.url&&a?.url_title){let b=document.querySelector(".js-convert-to-issue-update-error-toast"),c=b.content.firstElementChild,d=c.querySelector("a");d.href=a.url,d.textContent=a.url_title,(0,_.x)(document.querySelector(".js-convert-to-issue-update-error-toast").innerHTML)}else(0,_.x)(document.querySelector(".js-convert-to-issue-save-error-toast").innerHTML)}function ax(){let a=document.getElementById("js-inline-convert-to-issue-title"),b=document.getElementById("js-inline-convert-to-issue-position");a.value="",b.value=""}function ay(a){let b=az(a);if(!b)throw Error(".contains-task-list not found");let c=a?Array.from(b.children).indexOf(a):-1;return[(0,Z.SE)(b),c]}function az(a){let b=a.parentElement;return b?b.closest(".contains-task-list"):null}function aA(a){for(let b of a.children){if("P"===b.tagName)return b.textContent||"";if("INPUT"===b.tagName)return b.nextSibling?.textContent||""}return""}(0,h.N7)(".js-convert-task-to-issue-enabled .comment-body",{add(a){var b;let c=(b=a,Array.from(b.querySelectorAll("ul.contains-task-list > li")));aj(a,c);let d=new AbortController;ac.set(a,d),function a(b,c){let d=Array.from(b.querySelectorAll("button.convert-to-issue-button"));window.addEventListener("keydown",a=>{af(a)&&(aa=e.META,a.altKey&&(aa=e.ALT),ad(d))},{signal:c}),window.addEventListener("keyup",()=>{ah(),ad(d)},{signal:c})}(a,d.signal)},remove(a){let b=ac.get(a);b&&b.abort()}}),(0,h.N7)(".enabled.task-list-item",{subscribe:a=>(0,m.qC)((0,m.RB)(a,"mouseenter",as),(0,m.RB)(a,"mouseleave",ar))}),(0,h.N7)(".js-convert-to-issue-button",{subscribe:a=>(0,m.qC)((0,m.RB)(a,"click",ae))}),(0,h.N7)(".js-convert-task-to-issue-enabled .task-list-item-checkbox",{subscribe:a=>(0,m.qC)((0,m.RB)(a,"focus",at),(0,m.RB)(a,"blur",au))}),(0,h.N7)(".js-convert-task-to-issue-enabled .js-issue-link",{subscribe:a=>(0,m.qC)((0,m.RB)(a,"focus",at),(0,m.RB)(a,"blur",au))}),c(90114),c(2128);var aB=c(5916);(0,i.on)("click",".js-add-tasklist-button",function(a){if(!(a.target instanceof Element))return;let b=a.target.closest(".js-previewable-comment-form"),c=b.querySelector("textarea.js-comment-field"),d=c.selectionStart||0,e=c.selectionEnd||0,f="- [ ] Add a draft title or issue reference here";d!==e&&(f=c.value.slice(d,e),c.value=c.value.replace(f,""));let g=`\`\`\`[tasklist]
### Tasks
${f}
\`\`\``;(0,aB.Om)(c,g,{appendNewline:!0});let h=g.length+1;c.selectionStart=d+h,c.selectionEnd=d+h;let i=a.target.closest("form");if(!i)return;let j=document.createElement("input");j.setAttribute("type","hidden"),j.setAttribute("name","trigger"),j.setAttribute("value","add_tasklist_button"),i.appendChild(j)}),(0,i.on)("click",".js-dismiss-tasklist-blocks-onboarding-notice",async function(a){let b=a.currentTarget.getAttribute("data-url"),c=a.currentTarget.parentElement.querySelector(".js-data-url-csrf"),d=new FormData;d.append("notice","tasklist_blocks_onboarding_prompt");let e=await fetch(b,{method:"POST",mode:"same-origin",body:d,headers:{"Scoped-CSRF-Token":c.value,"X-Requested-With":"XMLHttpRequest"}});if(e.ok){let f=document.querySelectorAll(".js-tasklist-blocks-onboarding-notice");for(let g of f)g.remove()}})},91800(a,b,c){c.d(b,{N:()=>e,x:()=>f});var d=c(67825);function e(a){f(h(a))}function f(a){g(a)}function g(a){let b=d.n4?.querySelector("#js-global-screen-reader-notice");b&&(b.textContent===a?b.textContent=`${a}\u00A0`:b.textContent=a)}function h(a){return(a.getAttribute("aria-label")||a.innerText||"").trim()}}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe","vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js","vendors-node_modules_github_remote-form_dist_index_js-node_modules_github_catalyst_lib_index_-af4267","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_primer_behaviors_dist_es-81d31d","app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_be-f5afdb","app_assets_modules_github_has-interactions_ts-app_assets_modules_github_parse-html_ts-app_ass-2a13eb"],()=>b(10695));var c=a.O()}])
//# sourceMappingURL=issues-385ef9e578f3.js.map