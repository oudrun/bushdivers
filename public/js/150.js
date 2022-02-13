"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[150],{8150:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});t(7294);var r=t(5398),s=t(6584),a=t(5628),l=t(6603),i=t(5893),o=function(e){var n=e.fleet.map((function(e){return(0,i.jsx)(a.Z,{content:(0,i.jsx)(l.Z,{fleet:e})},e.id)}));return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{title:"Fleet"}),n]})};o.layout=function(e){return(0,i.jsx)(r.Z,{children:e,title:"Fleet"})};const c=o},6603:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(1636),s=t(5893);const a=function(e){var n=e.fleet,t=(0,r.qt)().props.auth,a=function(e){switch(e){case 1:return"Available";case 2:return"Reserved";case 3:return"In Use"}},l=function(){return t.user.user_roles.includes("fleet_manager")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row items-start justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"md:ml-3",children:[(0,s.jsxs)("div",{className:"text-2xl",children:[n.type," - ",n.manufacturer," ",n.name]}),(0,s.jsxs)("p",{children:[n.aircraft.length," aircraft in fleet"]})]}),(0,s.jsx)("img",{className:"rounded w-full md:w-auto",src:n.image_url})]}),(0,s.jsxs)("div",{className:"ml-2",children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row mt-2 md:mt-0",children:[(0,s.jsxs)("div",{className:"md:mr-8",children:[(0,s.jsx)("span",{className:"text-md font-bold text-gray-600",children:"Powerplants: "}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{children:[n.number_of_engines,"x ",n.powerplants]})]}),(0,s.jsxs)("div",{className:"md:mr-8",children:[(0,s.jsx)("span",{className:"text-md font-bold text-gray-600",children:"Fuel Type: "}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:1===n.fuel_type?(0,s.jsx)("span",{children:"Avgas"}):(0,s.jsx)("span",{children:"Jet Fuel"})})]}),(0,s.jsxs)("div",{className:"mr-8",children:[(0,s.jsx)("span",{className:"text-md font-bold text-gray-600",children:"Fuel Capacity: "}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{children:[n.fuel_capacity.toLocaleString(navigator.language)," gal"]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row mt-4",children:[(0,s.jsxs)("div",{className:"mr-8",children:[(0,s.jsx)("span",{className:"text-md font-bold text-gray-600",children:"Service Ceiling: "}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{children:[n.service_ceiling.toLocaleString(navigator.language)," ft"]})]}),(0,s.jsxs)("div",{className:"mr-8",children:[(0,s.jsx)("span",{className:"text-md font-bold text-gray-600",children:"Max Range: "}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{children:[n.range.toLocaleString(navigator.language)," nm"]})]}),(0,s.jsxs)("div",{className:"mr-8",children:[(0,s.jsx)("span",{className:"text-md font-bold text-gray-600",children:"Max Cruise Speed: "}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{children:[n.cruise_speed.toLocaleString(navigator.language)," kts"]})]}),(0,s.jsxs)("div",{className:"mr-8",children:[(0,s.jsx)("span",{className:"text-md font-bold text-gray-600",children:"PAX Capacity: "}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:n.pax_capacity})]}),(0,s.jsxs)("div",{className:"mr-8",children:[(0,s.jsx)("span",{className:"text-md font-bold text-gray-600",children:"Cargo Capacity: "}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{children:[n.cargo_capacity.toLocaleString(navigator.language)," lbs"]})]})]})]})]}),t.user&&(0,s.jsx)("div",{className:"mt-3 overflow-x-auto",children:n.aircraft.length>0&&(0,s.jsxs)("table",{className:"table table-auto",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{scope:"col",children:"Registration"}),(0,s.jsx)("th",{scope:"col",children:"Hub"}),(0,s.jsx)("th",{scope:"col",children:"Current Location"}),(0,s.jsx)("th",{scope:"col",children:"Flight Time (minutes)"}),(0,s.jsx)("th",{scope:"col",children:"Status"}),l()&&(0,s.jsx)("th",{scope:"col",children:"Action"})]})}),(0,s.jsx)("tbody",{children:n.aircraft.map((function(e){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.rU,{href:"/aircraft/".concat(e.id),children:e.registration})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.rU,{href:"/airports/".concat(e.hub_id),children:e.hub_id})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.rU,{href:"/airports/".concat(e.current_airport_id),children:e.current_airport_id})}),(0,s.jsx)("td",{children:e.flight_time_mins}),(0,s.jsxs)("td",{children:[a(e.state)," ",e.maintenance_status&&(0,s.jsx)("span",{className:"ml-2 text-orange-500",children:(0,s.jsx)("i",{className:"material-icons",children:"engineering"})})]}),l()&&(0,s.jsx)("td",{children:(0,s.jsx)(r.rU,{href:"/aircraft/".concat(e.id),className:"btn btn-secondary btn-small",children:"Maintenance"})})]},e.id)}))})]})})]})}},5628:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var r=t(5893);function s(e){var n=e.title,t=e.content;return(0,r.jsxs)("div",{className:"bg-white rounded shadow p-4 my-4",children:[n&&(0,r.jsx)("div",{className:"text-2xl border-b pb-2",children:n}),(0,r.jsx)("div",{children:t&&t})]})}},2629:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var r=t(5893);const s=function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"bg-opacity-40 p-2 mx-12 my-2 rounded shadow-lg ".concat("success"===e.type?"bg-green-100":"bg-red-100"),children:[(0,r.jsx)("span",{className:"success"===e.type?"text-green-900":"text-red-900",children:"success"===e.type?(0,r.jsx)("span",{className:"text-green-900 text-lg font-bold",children:"Success"}):(0,r.jsx)("span",{className:"text-red-900 text-lg font-bold",children:"Error"})}),(0,r.jsx)("span",{className:"ml-2",children:e.message})]})})}},5222:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),s=t(5893);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,s,a=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);l=!0);}catch(e){i=!0,s=e}finally{try{l||null==t.return||t.return()}finally{if(i)throw s}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e){var n,t=a((0,r.useState)(!1),2),l=t[0],i=t[1];return(0,s.jsxs)("div",{className:"inline-block relative",onMouseEnter:function(){n=setTimeout((function(){i(!0)}),400)},onMouseLeave:function(){clearInterval(n),i(!1)},children:[e.children,l&&(0,s.jsx)("div",{className:"tooltip ".concat(e.direction||"top"),children:e.content})]})}},5398:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var r=t(1636),s=t(5646),a=t(2669),l=t(2629),i=t(5893);function o(e){var n=e.children,t=e.title,o=(0,r.qt)().props.flash;return(0,i.jsxs)("main",{className:"flex flex-col h-screen z-0",children:[(0,i.jsx)(r.Fb,{title:t}),(0,i.jsx)(s.Z,{}),o.error&&(0,i.jsx)(l.Z,{type:"error",message:o.error}),o.success&&(0,i.jsx)(l.Z,{type:"success",message:o.success}),(0,i.jsx)("div",{className:"flex-grow p-4",children:n}),(0,i.jsx)(a.Z,{})]})}},2669:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(1636),s=t(5893);const a=function(){var e=(new Date).getFullYear();return(0,s.jsx)("footer",{children:(0,s.jsxs)("div",{className:"bg-gray-100 flex justify-between p-4",children:[(0,s.jsxs)("div",{children:["© Bush Divers ",e]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(r.rU,{className:"mr-4",href:"/privacy",children:"Privacy Policy"}),(0,s.jsx)(r.rU,{href:"/supporters",children:"Supporters"})]})]})})}},5646:(e,n,t)=>{t.d(n,{Z:()=>J});var r,s,a,l=t(7294);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function d(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function u(e,n){if(e in n){for(var t=n[e],r=arguments.length,s=new Array(r>2?r-2:0),a=2;a<r;a++)s[a-2]=arguments[a];return"function"==typeof t?t.apply(void 0,s):t}var l=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(l,u),l}function f(e){var n=e.props,t=e.slot,a=e.defaultTag,l=e.features,c=e.visible,d=void 0===c||c,f=e.name;if(d)return m(n,t,a,f);var p=null!=l?l:r.None;if(p&r.Static){var h=n.static,x=void 0!==h&&h,v=o(n,["static"]);if(x)return m(v,t,a,f)}if(p&r.RenderStrategy){var g,j=n.unmount,b=void 0===j||j,y=o(n,["unmount"]);return u(b?s.Unmount:s.Hidden,((g={})[s.Unmount]=function(){return null},g[s.Hidden]=function(){return m(i({},y,{hidden:!0,style:{display:"none"}}),t,a,f)},g))}return m(n,t,a,f)}function m(e,n,t,r){var s;void 0===n&&(n={});var a=h(e,["unmount","static"]),i=a.as,c=void 0===i?t:i,u=a.children,f=a.refName,m=void 0===f?"ref":f,p=o(a,["as","children","refName"]),x=void 0!==e.ref?((s={})[m]=e.ref,s):{},v="function"==typeof u?u(n):u;if(p.className&&"function"==typeof p.className&&(p.className=p.className(n)),c===l.Fragment&&Object.keys(p).length>0){if(!(0,l.isValidElement)(v)||Array.isArray(v)&&v.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(p).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,l.cloneElement)(v,Object.assign({},function(e,n,t){for(var r,s=Object.assign({},e),a=function(){var t,a=r.value;void 0!==e[a]&&void 0!==n[a]&&Object.assign(s,((t={})[a]=function(t){t.defaultPrevented||e[a](t),t.defaultPrevented||n[a](t)},t))},l=d(t);!(r=l()).done;)a();return s}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(h(p,["ref"])),v.props,["onClick"]),x))}return(0,l.createElement)(c,Object.assign({},h(p,["ref"]),c!==l.Fragment&&x),v)}function p(e){var n;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function h(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),s=d(n);!(t=s()).done;){var a=t.value;a in r&&delete r[a]}return r}function x(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,l.useRef)(n);return(0,l.useEffect)((function(){r.current=n}),[n]),(0,l.useCallback)((function(e){for(var n,t=d(r.current);!(n=t()).done;){var s=n.value;null!=s&&("function"==typeof s?s(e):s.current=e)}}),[r])}function v(e){for(var n,t,r=e.parentElement,s=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(s=r),r=r.parentElement;var a=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!a||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(s))&&a}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(s||(s={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(a||(a={}));var g="undefined"!=typeof window?l.useLayoutEffect:l.useEffect,j={serverHandoffComplete:!1};var b=0;function y(){return++b}function N(){var e=function(){var e=(0,l.useState)(j.serverHandoffComplete),n=e[0],t=e[1];return(0,l.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,l.useEffect)((function(){!1===j.serverHandoffComplete&&(j.serverHandoffComplete=!0)}),[]),n}(),n=(0,l.useState)(e?y:null),t=n[0],r=n[1];return g((function(){null===t&&r(y())}),[t]),null!=t?""+t:void 0}var w,S,k,C,E=(0,l.createContext)(null);function P(e){var n=e.value,t=e.children;return l.createElement(E.Provider,{value:n},t)}E.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(w||(w={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(k||(k={})),function(e){e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel"}(C||(C={}));var I=((S={})[C.ToggleDisclosure]=function(e){var n;return i({},e,{disclosureState:u(e.disclosureState,(n={},n[k.Open]=k.Closed,n[k.Closed]=k.Open,n))})},S[C.CloseDisclosure]=function(e){return e.disclosureState===k.Closed?e:i({},e,{disclosureState:k.Closed})},S[C.LinkPanel]=function(e){return!0===e.linkedPanel?e:i({},e,{linkedPanel:!0})},S[C.UnlinkPanel]=function(e){return!1===e.linkedPanel?e:i({},e,{linkedPanel:!1})},S[C.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:i({},e,{buttonId:n.buttonId})},S[C.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:i({},e,{panelId:n.panelId})},S),O=(0,l.createContext)(null);function A(e){var n=(0,l.useContext)(O);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+_.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return n}O.displayName="DisclosureContext";var T=(0,l.createContext)(null);function U(e){var n=(0,l.useContext)(T);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+_.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,U),t}return n}T.displayName="DisclosureAPIContext";var D=(0,l.createContext)(null);function L(e,n){return u(n.type,I,e,n)}D.displayName="DisclosurePanelContext";var F=l.Fragment;function _(e){var n,t=e.defaultOpen,r=void 0!==t&&t,s=o(e,["defaultOpen"]),a="headlessui-disclosure-button-"+N(),i="headlessui-disclosure-panel-"+N(),c=(0,l.useReducer)(L,{disclosureState:r?k.Open:k.Closed,linkedPanel:!1,buttonId:a,panelId:i}),d=c[0].disclosureState,m=c[1];(0,l.useEffect)((function(){return m({type:C.SetButtonId,buttonId:a})}),[a,m]),(0,l.useEffect)((function(){return m({type:C.SetPanelId,panelId:i})}),[i,m]);var p=(0,l.useCallback)((function(e){m({type:C.CloseDisclosure});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:document.getElementById(a):document.getElementById(a);null==n||n.focus()}),[m,a]),h=(0,l.useMemo)((function(){return{close:p}}),[p]),x=(0,l.useMemo)((function(){return{open:d===k.Open,close:p}}),[d,p]);return l.createElement(O.Provider,{value:c},l.createElement(T.Provider,{value:h},l.createElement(P,{value:u(d,(n={},n[k.Open]=w.Open,n[k.Closed]=w.Closed,n))},f({props:s,slot:x,defaultTag:F,name:"Disclosure"}))))}var H=p((function e(n,t){var r=A([_.name,e.name].join(".")),s=r[0],o=r[1],c=x(t),d=(0,l.useContext)(D),u=null!==d&&d===s.panelId,m=(0,l.useCallback)((function(e){var n;if(u){if(s.disclosureState===k.Closed)return;switch(e.key){case a.Space:case a.Enter:e.preventDefault(),e.stopPropagation(),o({type:C.ToggleDisclosure}),null==(n=document.getElementById(s.buttonId))||n.focus()}}else switch(e.key){case a.Space:case a.Enter:e.preventDefault(),e.stopPropagation(),o({type:C.ToggleDisclosure})}}),[o,u,s.disclosureState]),p=(0,l.useCallback)((function(e){switch(e.key){case a.Space:e.preventDefault()}}),[]),h=(0,l.useCallback)((function(e){var t;v(e.currentTarget)||(n.disabled||(u?(o({type:C.ToggleDisclosure}),null==(t=document.getElementById(s.buttonId))||t.focus()):o({type:C.ToggleDisclosure})))}),[o,n.disabled,s.buttonId,u]),g=(0,l.useMemo)((function(){return{open:s.disclosureState===k.Open}}),[s]);return f({props:i({},n,u?{type:"button",onKeyDown:m,onClick:h}:{ref:c,id:s.buttonId,type:"button","aria-expanded":n.disabled?void 0:s.disclosureState===k.Open,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:m,onKeyUp:p,onClick:h}),slot:g,defaultTag:"button",name:"Disclosure.Button"})})),B=r.RenderStrategy|r.Static,Z=p((function e(n,t){var r=A([_.name,e.name].join(".")),s=r[0],a=r[1],o=U([_.name,e.name].join(".")).close,c=x(t,(function(){s.linkedPanel||a({type:C.LinkPanel})})),d=(0,l.useContext)(E),u=null!==d?d===w.Open:s.disclosureState===k.Open;(0,l.useEffect)((function(){return function(){return a({type:C.UnlinkPanel})}}),[a]),(0,l.useEffect)((function(){var e;s.disclosureState!==k.Closed||null!=(e=n.unmount)&&!e||a({type:C.UnlinkPanel})}),[s.disclosureState,n.unmount,a]);var m=(0,l.useMemo)((function(){return{open:s.disclosureState===k.Open,close:o}}),[s,o]),p={ref:c,id:s.panelId},h=n;return l.createElement(D.Provider,{value:s.panelId},f({props:i({},h,p),slot:m,defaultTag:"div",features:B,visible:u,name:"Disclosure.Panel"}))}));_.Button=H,_.Panel=Z;var M=t(1636),R=t(5893);const q=function(e){return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)("div",{className:e.mobile?"px-2 pt-2 pb-3 space-y-1":"flex space-x-4",children:[(0,R.jsx)(M.rU,{href:"/hubs",className:e.mobile?"nav-link mobile":"nav-link",children:"Hubs"}),(0,R.jsx)(M.rU,{href:"/fleet",className:e.mobile?"nav-link mobile":"nav-link",children:"Fleet"})]})})};var K=t(5222);const z=function(e){var n=(0,M.qt)().props.auth;return(0,R.jsx)(R.Fragment,{children:n.user?(0,R.jsxs)("div",{className:"flex items-center",children:[(0,R.jsx)("div",{children:(0,R.jsx)(M.rU,{className:"link mr-2",href:"/dashboard",children:"Return to App"})}),(0,R.jsxs)("div",{className:"flex items-center mx-2",children:[(0,R.jsx)("img",{width:"60",className:"mr-3",src:n.user.rank.image}),(0,R.jsx)(K.Z,{content:"Profile",direction:"left",children:(0,R.jsx)(M.rU,{href:"/profile",children:(0,R.jsxs)("span",{className:"flex flex-col",children:[(0,R.jsx)("span",{className:"font-semibold text-orange-500 tracking-wide leading-none",children:n.user.name}),(0,R.jsxs)("span",{className:"text-gray-500 text-xs leading-none mt-1",children:[n.user.pilot_id," ",n.user.rank.name]})]})})})]})]}):(0,R.jsxs)("div",{className:e.mobile?"relative mb-4 ml-2":"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[(0,R.jsx)(M.rU,{href:"/register",className:"btn btn-secondary mr-2",children:"Join Us"}),(0,R.jsx)(M.rU,{href:"/login",className:"btn btn-primary",children:"Crew Login"})]})})};function J(){return(0,R.jsx)(_,{as:"nav",className:"bg-white border-b-2 border-orange-500 shadow-sm z-10",children:function(e){var n=e.open;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("div",{className:"px-2 sm:px-6 lg:px-8",children:(0,R.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[(0,R.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:(0,R.jsxs)(_.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-50",children:[(0,R.jsx)("span",{className:"sr-only",children:"Open main menu"}),n?(0,R.jsx)("div",{className:"block h-6 w-6","aria-hidden":"true",children:(0,R.jsx)("i",{className:"material-icons",children:"close"})}):(0,R.jsx)("div",{className:"block h-6 w-6","aria-hidden":"true",children:(0,R.jsx)("i",{className:"material-icons",children:"menu"})})]})}),(0,R.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[(0,R.jsxs)("div",{className:"flex-shrink-0 flex items-center",children:[(0,R.jsx)(M.rU,{href:"/",children:(0,R.jsx)("img",{className:"block lg:hidden h-9 w-auto",src:"https://res.cloudinary.com/dji0yvkef/image/upload/v1628691598/BDLogo.png",alt:"Workflow"})}),(0,R.jsx)(M.rU,{href:"/",children:(0,R.jsx)("img",{className:"hidden lg:block h-9 w-auto",src:"https://res.cloudinary.com/dji0yvkef/image/upload/v1628691598/BDLogo.png",alt:"Workflow"})}),(0,R.jsx)("span",{className:"hidden lg:block ml-3",children:"Bush Divers"})]}),(0,R.jsx)("div",{className:"hidden sm:block sm:ml-6",children:(0,R.jsx)(q,{})})]}),(0,R.jsx)("div",{className:"hidden sm:block sm:ml-6",children:(0,R.jsx)(z,{})})]})}),(0,R.jsxs)(_.Panel,{className:"sm:hidden",children:[(0,R.jsx)(q,{mobile:!0}),(0,R.jsx)(z,{mobile:!0})]})]})}})}},6584:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var r=t(5893);function s(e){var n=e.title;return(0,r.jsx)("div",{className:"text-gray-700 text-4xl mb-4",children:n})}}}]);