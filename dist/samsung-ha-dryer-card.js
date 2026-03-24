(()=>{var rt=Object.defineProperty;var $=(r,e)=>()=>(r&&(e=r(r=0)),e);var st=(r,e)=>{for(var t in e)rt(r,t,{get:e[t],enumerable:!0})};var I,z,Q,Ae,T,Se,P,Ee,X,ee=$(()=>{I=globalThis,z=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),Ae=new WeakMap,T=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(z&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=Ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ae.set(t,e))}return e}toString(){return this.cssText}},Se=r=>new T(typeof r=="string"?r:r+"",void 0,Q),P=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new T(t,r,Q)},Ee=(r,e)=>{if(z)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=I.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},X=z?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return Se(t)})(r):r});var ot,nt,at,lt,ct,dt,F,ke,ht,pt,N,te,Te,Ce,b,B=$(()=>{ee();ee();({is:ot,defineProperty:nt,getOwnPropertyDescriptor:at,getOwnPropertyNames:lt,getOwnPropertySymbols:ct,getPrototypeOf:dt}=Object),F=globalThis,ke=F.trustedTypes,ht=ke?ke.emptyScript:"",pt=F.reactiveElementPolyfillSupport,N=(r,e)=>r,te={toAttribute(r,e){switch(e){case Boolean:r=r?ht:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Te=(r,e)=>!ot(r,e),Ce={attribute:!0,type:String,converter:te,reflect:!1,useDefault:!1,hasChanged:Te};Symbol.metadata??=Symbol("metadata"),F.litPropertyMetadata??=new WeakMap;b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&nt(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:o}=at(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){let l=s?.call(this);o?.call(this,n),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ce}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;let e=dt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){let t=this.properties,i=[...lt(t),...ct(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(X(s))}else e!==void 0&&t.push(X(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ee(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:te).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let o=i.getPropertyOptions(s),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:te;this._$Em=s;let l=n.fromAttribute(t,o.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,i,s=!1,o){if(e!==void 0){let n=this.constructor;if(s===!1&&(o=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??Te)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,o]of i){let{wrapped:n}=o,l=this[s];n!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[N("elementProperties")]=new Map,b[N("finalized")]=new Map,pt?.({ReactiveElement:b}),(F.reactiveElementVersions??=[]).push("2.1.2")});function ze(r,e){if(!ce(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ne!==void 0?Ne.createHTML(e):e}function E(r,e,t=r,i){if(e===S)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,o=L(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=E(r,s._$AS(r,e.values),s,i)),e}var le,Pe,j,Ne,De,v,He,ut,A,O,L,ce,mt,ie,R,Re,Oe,w,Le,Ue,Ie,de,u,Et,kt,S,m,Me,x,gt,U,re,M,k,se,oe,ne,ae,_t,Fe,W=$(()=>{le=globalThis,Pe=r=>r,j=le.trustedTypes,Ne=j?j.createPolicy("lit-html",{createHTML:r=>r}):void 0,De="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,He="?"+v,ut=`<${He}>`,A=document,O=()=>A.createComment(""),L=r=>r===null||typeof r!="object"&&typeof r!="function",ce=Array.isArray,mt=r=>ce(r)||typeof r?.[Symbol.iterator]=="function",ie=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Re=/-->/g,Oe=/>/g,w=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Le=/'/g,Ue=/"/g,Ie=/^(?:script|style|textarea|title)$/i,de=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),u=de(1),Et=de(2),kt=de(3),S=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Me=new WeakMap,x=A.createTreeWalker(A,129);gt=(r,e)=>{let t=r.length-1,i=[],s,o=e===2?"<svg>":e===3?"<math>":"",n=R;for(let l=0;l<t;l++){let a=r[l],d,p,c=-1,g=0;for(;g<a.length&&(n.lastIndex=g,p=n.exec(a),p!==null);)g=n.lastIndex,n===R?p[1]==="!--"?n=Re:p[1]!==void 0?n=Oe:p[2]!==void 0?(Ie.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=w):p[3]!==void 0&&(n=w):n===w?p[0]===">"?(n=s??R,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?w:p[3]==='"'?Ue:Le):n===Ue||n===Le?n=w:n===Re||n===Oe?n=R:(n=w,s=void 0);let _=n===w&&r[l+1].startsWith("/>")?" ":"";o+=n===R?a+ut:c>=0?(i.push(d),a.slice(0,c)+De+a.slice(c)+v+_):a+v+(c===-2?l:_)}return[ze(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},U=class r{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0,l=e.length-1,a=this.parts,[d,p]=gt(e,t);if(this.el=r.createElement(d,i),x.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=x.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let c of s.getAttributeNames())if(c.endsWith(De)){let g=p[n++],_=s.getAttribute(c).split(v),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:f[2],strings:_,ctor:f[1]==="."?se:f[1]==="?"?oe:f[1]==="@"?ne:k}),s.removeAttribute(c)}else c.startsWith(v)&&(a.push({type:6,index:o}),s.removeAttribute(c));if(Ie.test(s.tagName)){let c=s.textContent.split(v),g=c.length-1;if(g>0){s.textContent=j?j.emptyScript:"";for(let _=0;_<g;_++)s.append(c[_],O()),x.nextNode(),a.push({type:2,index:++o});s.append(c[g],O())}}}else if(s.nodeType===8)if(s.data===He)a.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(v,c+1))!==-1;)a.push({type:7,index:o}),c+=v.length-1}o++}}static createElement(e,t){let i=A.createElement("template");return i.innerHTML=e,i}};re=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??A).importNode(t,!0);x.currentNode=s;let o=x.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new M(o,o.nextSibling,this,e):a.type===1?d=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(d=new ae(o,this,e)),this._$AV.push(d),a=i[++l]}n!==a?.index&&(o=x.nextNode(),n++)}return x.currentNode=A,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},M=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),L(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):mt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=U.createElement(ze(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let o=new re(s,this),n=o.u(this.options);o.p(t),this.T(n),this._$AH=o}}_$AC(e){let t=Me.get(e.strings);return t===void 0&&Me.set(e.strings,t=new U(e)),t}k(e){ce(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let o of e)s===t.length?t.push(i=new r(this.O(O()),this.O(O()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=Pe(e).nextSibling;Pe(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},k=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,t=this,i,s){let o=this.strings,n=!1;if(o===void 0)e=E(this,e,t,0),n=!L(e)||e!==this._$AH&&e!==S,n&&(this._$AH=e);else{let l=e,a,d;for(e=o[0],a=0;a<o.length-1;a++)d=E(this,l[i+a],t,a),d===S&&(d=this._$AH[a]),n||=!L(d)||d!==this._$AH[a],d===m?e=m:e!==m&&(e+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!s&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},se=class extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},oe=class extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},ne=class extends k{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??m)===S)return;let i=this._$AH,s=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==m&&(i===m||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ae=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}},_t=le.litHtmlPolyfillSupport;_t?.(U,M),(le.litHtmlVersions??=[]).push("3.3.2");Fe=(r,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let o=t?.renderBefore??null;i._$litPart$=s=new M(e.insertBefore(O(),o),o,void 0,t??{})}return s._$AI(r),s}});var he,y,ft,Be=$(()=>{B();B();W();W();he=globalThis,y=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};y._$litElement$=!0,y.finalized=!0,he.litElementHydrateSupport?.({LitElement:y});ft=he.litElementPolyfillSupport;ft?.({LitElement:y});(he.litElementVersions??=[]).push("4.2.2")});var je=$(()=>{});var pe=$(()=>{B();W();Be();je()});var We,C,h,V,G,K=$(()=>{We="samsung-ha-dryer-card",C={device_name:"dryer",title:"Dryer",show_subtitle:!0,layout_mode:"hero",show_completion_time:!0,show_status_chips:!0,show_power:!0,show_energy:!0,show_wrinkle_prevent_control:!0,finished_green_duration:60,icons:{appliance:"mdi:tumble-dryer",start:"mdi:play",pause:"mdi:pause",stop:"mdi:stop",child_lock:"mdi:lock",remote_control:"mdi:remote",wrinkle_prevent:"mdi:tshirt-crew",power:"mdi:flash",energy:"mdi:lightning-bolt",complete:"mdi:clock-outline"}},h={machineState:"machine_state",jobState:"job_state",completionTime:"completion_time",command:"command",childLock:"child_lock",remoteControl:"remote_control",wrinklePreventActive:"wrinkle_prevent_active",wrinklePreventSwitch:"wrinkle_prevent_switch",power:"power",cycleEnergy:"cycle_energy"},V={cooling:"Cooling",delay_wash:"Delayed",drying:"Drying",finished:"Finished",none:"Idle",refreshing:"Refreshing",weight_sensing:"Sensing Load",wrinkle_prevent:"Wrinkle Prevent",dehumidifying:"Dehumidifying",ai_drying:"AI Drying",sanitizing:"Sanitizing",internal_care:"Internal Care",freeze_protection:"Freeze Protection",continuous_dehumidifying:"Continuous Dehumidifying",thawing_frozen_inside:"Thawing"},G={run:"Running",pause:"Paused",stop:"Stopped"}});var et={};st(et,{SamsungHADryerCardEditor:()=>Z});var yt,bt,$t,Z,ge=$(()=>{pe();K();yt=[{key:"machine_state_entity",label:"Machine State Entity"},{key:"job_state_entity",label:"Job State Entity"},{key:"completion_time_entity",label:"Completion Time Entity"},{key:"command_entity",label:"Command Entity"},{key:"child_lock_entity",label:"Child Lock Entity"},{key:"remote_control_entity",label:"Remote Control Entity"},{key:"wrinkle_prevent_active_entity",label:"Wrinkle Prevent Active Entity"},{key:"wrinkle_prevent_switch_entity",label:"Wrinkle Prevent Switch Entity"},{key:"power_entity",label:"Power Entity"},{key:"energy_entity",label:"Energy Entity"}],bt=[{key:"show_subtitle",label:"Show subtitle"},{key:"show_completion_time",label:"Show completion time"},{key:"show_status_chips",label:"Show status chips"},{key:"show_power",label:"Show power"},{key:"show_energy",label:"Show cycle energy"},{key:"show_wrinkle_prevent_control",label:"Show wrinkle prevent control"}],$t=[{key:"appliance",label:"Appliance Icon"},{key:"start",label:"Start Icon"},{key:"pause",label:"Pause Icon"},{key:"stop",label:"Stop Icon"},{key:"child_lock",label:"Child Lock Icon"},{key:"remote_control",label:"Remote Icon"},{key:"wrinkle_prevent",label:"Wrinkle Prevent Icon"},{key:"power",label:"Power Icon"},{key:"energy",label:"Energy Icon"},{key:"complete",label:"Completion Icon"}],Z=class extends y{static properties={hass:{},_config:{state:!0}};static styles=P`
    :host {
      display: block;
    }

    .section {
      padding: 12px 0;
      border-bottom: 1px solid var(--divider-color);
    }

    .section:last-child {
      border-bottom: none;
    }

    .section-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 12px;
    }

    .field {
      margin-bottom: 12px;
    }

    .field:last-child {
      margin-bottom: 0;
    }

    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
    }

    .threshold-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 12px;
    }

    .threshold-row:last-child {
      margin-bottom: 0;
    }

    .select-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .select-label {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    select {
      min-height: 40px;
      border-radius: 10px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color);
      color: var(--primary-text-color);
      padding: 0 10px;
      font: inherit;
    }
  `;setConfig(e){this._config={...C,...e,icons:{...C.icons,...e&&e.icons||{}}}}_emitConfig(e){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_updateField(e,t){let i={...this._config};t===""||t===null||t===void 0?delete i[e]:i[e]=t,this._emitConfig(i)}_updateBoolean(e,t){this._emitConfig({...this._config,[e]:t})}_updateIcon(e,t){let i={...this._config.icons||{}};t===""||t===null||t===void 0?delete i[e]:i[e]=t,this._emitConfig({...this._config,icons:i})}_renderTextField(e,t,i,s=""){return u`
      <div class="field">
        <ha-textfield
          .label=${e}
          .value=${t||""}
          .helper=${s}
          .helperPersistent=${!!s}
          @input=${i}
        ></ha-textfield>
      </div>
    `}_renderEntityField(e,t){return u`
      <div class="field">
        <ha-entity-picker
          .hass=${this.hass}
          .label=${e}
          .value=${this._config[t]||""}
          allow-custom-entity
          @value-changed=${i=>this._updateField(t,i.detail.value)}
        ></ha-entity-picker>
      </div>
    `}_renderSwitch(e,t){return u`
      <div class="field">
        <ha-formfield .label=${e}>
          <ha-switch
            .checked=${!!this._config[t]}
            @change=${i=>this._updateBoolean(t,i.target.checked)}
          ></ha-switch>
        </ha-formfield>
      </div>
    `}_renderThresholdColorRow(e){let t=`completion_color_threshold_${e}`,i=`completion_color_${e}`,s=this._config[t],o=this._config[i]||"";return u`
      <div class="threshold-row">
        <ha-textfield
          .label=${`Threshold ${e} (%)`}
          .value=${s!=null?String(s):""}
          type="number"
          min="0"
          max="100"
          @input=${n=>{let l=n.target.value;this._updateField(t,l===""?void 0:Number(l))}}
        ></ha-textfield>
        <ha-textfield
          .label=${`Color ${e} (hex)`}
          .value=${o}
          placeholder="#RRGGBB"
          @input=${n=>this._updateField(i,n.target.value)}
        ></ha-textfield>
      </div>
    `}_renderLayoutModeField(){return u`
      <div class="field">
        <div class="select-field">
          <div class="select-label">Layout Mode</div>
          <select
            .value=${this._config.layout_mode||"hero"}
            @change=${e=>this._updateField("layout_mode",e.target.value)}
          >
            <option value="hero">Hero</option>
            <option value="compact">Compact</option>
          </select>
        </div>
      </div>
    `}render(){return!this.hass||!this._config?u``:u`
      <div class="section">
        <div class="section-title">General</div>
        ${this._renderTextField("Title",this._config.title,e=>this._updateField("title",e.target.value))}
        ${this._renderTextField("Device Name",this._config.device_name,e=>this._updateField("device_name",e.target.value),"Used for automatic entity discovery, for example: dryer")}
        ${this._renderLayoutModeField()}
      </div>

      <div class="section">
        <div class="section-title">Display Options</div>
        ${bt.map(e=>this._renderSwitch(e.label,e.key))}
        ${this._renderTextField("Green highlight duration (minutes)",this._config.finished_green_duration!=null?String(this._config.finished_green_duration):"",e=>this._updateField("finished_green_duration",e.target.value===""?void 0:Number(e.target.value)),"How long the card stays green after finishing (0 = always)")}
      </div>

      <div class="section">
        <div class="section-title">Completion Time Colors</div>
        <div class="field" style="color: var(--secondary-text-color); font-size: 0.85rem; margin-bottom: 12px;">
          Color the remaining-time badge when below a % threshold. Leave blank to use the default color.
        </div>
        ${this._renderThresholdColorRow(1)}
        ${this._renderThresholdColorRow(2)}
      </div>

      <div class="section">
        <div class="section-title">Entities</div>
        ${yt.map(e=>this._renderEntityField(e.label,e.key))}
      </div>

      <div class="section">
        <div class="section-title">Icons</div>
        <div class="icon-grid">
          ${$t.map(e=>this._renderTextField(e.label,this._config.icons&&this._config.icons[e.key],t=>this._updateIcon(e.key,t.target.value)))}
        </div>
      </div>
    `}};customElements.define("samsung-ha-dryer-card-editor",Z)});pe();K();function Ve(r){return{...C,...r,icons:{...C.icons,...r&&r.icons||{}}}}function Ge(r){let e=r.device_name||"dryer";return{[h.machineState]:r.machine_state_entity||`sensor.${e}_machine_state`,[h.jobState]:r.job_state_entity||`sensor.${e}_job_state`,[h.completionTime]:r.completion_time_entity||`sensor.${e}_completion_time`,[h.command]:r.command_entity||`select.${e}`,[h.childLock]:r.child_lock_entity||`binary_sensor.${e}_child_lock`,[h.remoteControl]:r.remote_control_entity||`binary_sensor.${e}_remote_control`,[h.wrinklePreventActive]:r.wrinkle_prevent_active_entity||`binary_sensor.${e}_wrinkle_prevent_active`,[h.wrinklePreventSwitch]:r.wrinkle_prevent_switch_entity||`switch.${e}_wrinkle_prevent`,[h.power]:r.power_entity||`sensor.${e}_power`,[h.cycleEnergy]:r.energy_entity||`sensor.${e}_power_energy`}}function D(r,e){return e?r.states[e]:void 0}function Y(r,e){let t=D(r,e);return t?t.state:void 0}function H(r,e){return Y(r,e)==="on"}function q(r){return r==null||r==="unknown"||r==="unavailable"}function ue(r){return!r||q(r)?"Unknown":r.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function Ke(r,e){return r==="pause"?"Paused":r==="run"?V[e]||G[r]||"Running":r==="stop"?"Finished":G[r]||ue(r)||"Finished"}function Ye(r,e){return r==="pause"&&e&&e!=="none"?V[e]||ue(e):r==="run"?G[r]||"Running":e==="finished"?"Cycle complete":e&&e!=="none"?V[e]||ue(e):"Ready"}function qe(r,e){if(!r||r.state!=="stop")return!1;if(!e)return!0;let t=new Date(r.last_changed);return Number.isNaN(t.getTime())?!0:Date.now()-t.getTime()<=e*6e4}function Je(r,e){return!q(e)&&(r==="run"||r==="pause")}function Ze(r,e){if(q(e))return"";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;try{return new Intl.DateTimeFormat(r.locale?.language||"en-US",{hour:"2-digit",hour12:!1,minute:"2-digit"}).format(t)}catch{return t.toLocaleTimeString([],{hour:"2-digit",hour12:!1,minute:"2-digit"})}}function Qe(r,e,t){let i=t.completion_color_threshold_1,s=t.completion_color_1,o=t.completion_color_threshold_2,n=t.completion_color_2;if(!i&&i!==0&&!o&&o!==0||!s&&!n)return null;let l=r?.attributes?.power_consumption_start;if(!l||!e)return null;let a=new Date(l).getTime(),d=new Date(e).getTime(),p=Date.now();if(Number.isNaN(a)||Number.isNaN(d)||d<=a)return null;let c=Math.max(0,Math.min(100,(d-p)/(d-a)*100)),g=[];i!=null&&s&&g.push({threshold:Number(i),color:s}),o!=null&&n&&g.push({threshold:Number(o),color:n}),g.sort((_,f)=>_.threshold-f.threshold);for(let{threshold:_,color:f}of g)if(c<=_)return f;return null}function me(r,e,t){if(q(e))return"";let i=Number(e);return Number.isNaN(i)?`${e}${t?` ${t}`:""}`:`${new Intl.NumberFormat(r.locale?.language||"en-US",{maximumFractionDigits:i>=100?0:1}).format(i)}${t?` ${t}`:""}`}K();async function J(r,e,t){e&&await r.hass.callService("select","select_option",{entity_id:e,option:t})}async function Xe(r,e){e&&await r.hass.callService("homeassistant","toggle",{entity_id:e})}var _e=class extends y{static properties={hass:{},_config:{state:!0}};static async getConfigElement(){return await Promise.resolve().then(()=>(ge(),et)),document.createElement("samsung-ha-dryer-card-editor")}static getStubConfig(){return{device_name:"dryer",title:"Dryer",show_subtitle:!0,layout_mode:"hero",show_completion_time:!0,show_status_chips:!0,show_power:!0,show_energy:!0,show_wrinkle_prevent_control:!0}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=Ve(e)}getCardSize(){return this._config?.layout_mode==="compact"?4:5}static styles=P`
    :host {
      display: block;
    }

    ha-card {
      position: relative;
      overflow: hidden;
      border-radius: 28px;
      padding: 20px;
      background:
        radial-gradient(circle at top right, rgba(255, 255, 255, 0.12), transparent 30%),
        radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.06), transparent 28%),
        linear-gradient(
          180deg,
          var(--ha-card-background, var(--card-background-color)) 0%,
          color-mix(
            in srgb,
            var(--ha-card-background, var(--card-background-color)) 92%,
            black 8%
          ) 100%
        );
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.05),
        0 8px 28px rgba(0, 0, 0, 0.16);
    }

    .card {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .header-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.09);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
      flex-shrink: 0;
    }

    .header-icon ha-icon {
      --mdc-icon-size: 22px;
    }

    .header-text {
      min-width: 0;
    }

    .title {
      font-size: 1.08rem;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: 0.01em;
    }

    .subtitle {
      margin-top: 2px;
      color: var(--secondary-text-color);
      font-size: 0.84rem;
      line-height: 1.2;
    }

    .status-badge {
      flex-shrink: 0;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      color: var(--primary-text-color);
      font-size: 0.78rem;
      font-weight: 700;
      line-height: 1;
      white-space: nowrap;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .hero {
      display: grid;
      grid-template-columns: 140px 1fr;
      gap: 20px;
      align-items: center;
    }

    .hero.compact {
      grid-template-columns: 88px 1fr;
      gap: 14px;
    }

    .drum-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drum {
      position: relative;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.06) 42%, rgba(0, 0, 0, 0.18) 70%, rgba(0, 0, 0, 0.28) 100%);
      box-shadow:
        inset 0 2px 12px rgba(255, 255, 255, 0.12),
        inset 0 -10px 24px rgba(0, 0, 0, 0.22),
        0 12px 30px rgba(0, 0, 0, 0.16);
    }

    .hero.compact .drum {
      width: 88px;
      height: 88px;
    }

    .drum::before {
      content: "";
      position: absolute;
      inset: 10px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 38%, rgba(0, 0, 0, 0.25) 100%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: inset 0 2px 10px rgba(255, 255, 255, 0.06);
    }

    .hero.compact .drum::before {
      inset: 7px;
    }

    .drum::after {
      content: "";
      position: absolute;
      inset: 24px;
      border-radius: 50%;
      border: 2px dashed rgba(255, 255, 255, 0.14);
      transform-origin: center;
      animation: none;
    }

    .hero.compact .drum::after {
      inset: 16px;
    }

    .drum.running::after {
      animation: spin 6s linear infinite;
    }

    .drum-center {
      position: relative;
      z-index: 1;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.10);
      box-shadow:
        inset 0 1px 6px rgba(255, 255, 255, 0.08),
        0 2px 10px rgba(0, 0, 0, 0.16);
      backdrop-filter: blur(3px);
    }

    .hero.compact .drum-center {
      width: 40px;
      height: 40px;
    }

    .drum-center ha-icon {
      --mdc-icon-size: 30px;
    }

    .hero.compact .drum-center ha-icon {
      --mdc-icon-size: 22px;
    }

    .hero-info {
      min-width: 0;
    }

    .primary-status {
      font-size: 1.75rem;
      font-weight: 800;
      line-height: 1.08;
      letter-spacing: 0.01em;
      margin-bottom: 6px;
    }

    .hero.compact .primary-status {
      font-size: 1.3rem;
      margin-bottom: 4px;
    }

    .secondary-status {
      color: var(--secondary-text-color);
      font-size: 0.96rem;
      line-height: 1.35;
      margin-bottom: 12px;
    }

    .hero.compact .secondary-status {
      font-size: 0.88rem;
      margin-bottom: 8px;
    }

    .completion {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 34px;
      padding: 0 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      font-size: 0.84rem;
      font-weight: 600;
      color: var(--primary-text-color);
    }

    .completion ha-icon {
      --mdc-icon-size: 16px;
      color: var(--secondary-text-color);
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 34px;
      padding: 0 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      font-size: 0.82rem;
      font-weight: 600;
      line-height: 1;
    }

    .chip ha-icon {
      --mdc-icon-size: 16px;
    }

    .chip.on {
      background: rgba(255, 255, 255, 0.11);
    }

    .chip.off {
      opacity: 0.78;
    }

    .controls {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .control-btn,
    .toggle-btn {
      min-height: 46px;
      border: none;
      outline: none;
      border-radius: 16px;
      font: inherit;
      font-weight: 700;
      letter-spacing: 0.01em;
      cursor: pointer;
      transition:
        transform 0.15s ease,
        opacity 0.15s ease,
        background 0.15s ease,
        box-shadow 0.15s ease;
    }

    .control-btn {
      background: rgba(255, 255, 255, 0.08);
      color: var(--primary-text-color);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    .control-btn.primary {
      background: var(--primary-color);
      color: var(--text-primary-color, white);
      box-shadow: 0 8px 18px color-mix(in srgb, var(--primary-color) 34%, transparent);
    }

    .toggle-btn {
      width: 100%;
      background: rgba(255, 255, 255, 0.07);
      color: var(--primary-text-color);
    }

    .toggle-btn.active {
      background: color-mix(in srgb, var(--primary-color) 26%, rgba(255, 255, 255, 0.08));
    }

    .control-btn:hover:not(:disabled),
    .toggle-btn:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    .control-btn:active:not(:disabled),
    .toggle-btn:active:not(:disabled) {
      transform: translateY(0);
    }

    .control-btn:disabled,
    .toggle-btn:disabled {
      cursor: default;
      opacity: 0.45;
      box-shadow: none;
    }

    .metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .metric {
      border-radius: 18px;
      padding: 14px;
      background: rgba(255, 255, 255, 0.07);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    .metric-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 8px;
    }

    .metric-label {
      color: var(--secondary-text-color);
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 1.2;
    }

    .metric-value {
      font-size: 1.05rem;
      font-weight: 800;
      line-height: 1.2;
      letter-spacing: 0.01em;
    }

    .metric ha-icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
    }

    ha-card.finished {
      background:
        radial-gradient(circle at top right, rgba(255, 255, 255, 0.10), transparent 30%),
        radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.05), transparent 28%),
        linear-gradient(180deg, #1a3d2a 0%, #112a1c 100%);
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 480px) {
      .hero {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .hero.compact {
        grid-template-columns: 1fr;
      }

      .drum-wrap {
        justify-content: center;
      }

      .completion {
        justify-content: center;
      }
    }
  `;getStateFlags(e){return{isRunning:e==="run",isPaused:e==="pause",isStopped:e==="stop"}}renderChip(e,t,i){return u`
      <div class="chip ${i?"on":"off"}" aria-label="${t}">
        <ha-icon .icon=${e}></ha-icon>
        <span>${t}</span>
      </div>
    `}renderMetric(e,t,i){return u`
      <div class="metric">
        <div class="metric-top">
          <div class="metric-label">${e}</div>
          <ha-icon .icon=${i}></ha-icon>
        </div>
        <div class="metric-value">${t}</div>
      </div>
    `}renderHeader(e,t){return u`
      <div class="header">
        <div class="header-left">
          <div class="header-icon">
            <ha-icon .icon=${e.icons.appliance}></ha-icon>
          </div>
          <div class="header-text">
            <div class="title">${e.title}</div>
            ${e.show_subtitle?u`<div class="subtitle">Samsung SmartThings Dryer</div>`:""}
          </div>
        </div>
        <div class="status-badge">${t}</div>
      </div>
    `}renderHero(e,t,i,s,o,n,l){let a=`hero ${e.layout_mode==="compact"?"compact":""}`,d=l?`color: ${l};`:"";return u`
      <div class=${a}>
        <div class="drum-wrap">
          <div class=${n}>
            <div class="drum-center">
              <ha-icon .icon=${e.icons.appliance}></ha-icon>
            </div>
          </div>
        </div>

        <div class="hero-info">
          <div class="primary-status">${t}</div>
          <div class="secondary-status">${i}</div>

          ${s?u`
                <div class="completion" style=${d}>
                  <ha-icon .icon=${e.icons.complete}></ha-icon>
                  <span>Completes at ${Ze(this.hass,o)}</span>
                </div>
              `:""}
        </div>
      </div>
    `}render(){if(!this.hass||!this._config)return u``;let e=this._config,t=Ge(e),i=D(this.hass,t[h.machineState]),s=i?i.state:void 0,o=Y(this.hass,t[h.jobState]),n=Y(this.hass,t[h.completionTime]),l=D(this.hass,t[h.power]),a=D(this.hass,t[h.cycleEnergy]),{isRunning:d,isPaused:p,isStopped:c}=this.getStateFlags(s),g=qe(i,e.finished_green_duration),_=c&&!g?"Stopped":Ke(s,o),f=Ye(s,o),fe=e.show_completion_time&&Je(s,n),tt=fe?Qe(l,n,e):null,ye=H(this.hass,t[h.wrinklePreventActive]),be=H(this.hass,t[h.wrinklePreventSwitch]),$e=H(this.hass,t[h.childLock]),ve=H(this.hass,t[h.remoteControl]),we=l?me(this.hass,l.state,l.attributes.unit_of_measurement):"",xe=a?me(this.hass,a.state,a.attributes.unit_of_measurement):"",it=["drum",d?"running":""].filter(Boolean).join(" ");return u`
      <ha-card class=${g?"finished":""}>
        <div class="card">
          ${this.renderHeader(e,f)}

          ${this.renderHero(e,_,f,fe,n,it,tt)}

          ${e.show_status_chips?u`
                <div class="chips">
                  ${this.renderChip(e.icons.child_lock,$e?"Child Lock On":"Child Lock Off",$e)}
                  ${this.renderChip(e.icons.remote_control,ve?"Remote Enabled":"Remote Disabled",ve)}
                  ${this.renderChip(e.icons.wrinkle_prevent,ye?"Wrinkle Prevent Active":"Wrinkle Prevent Idle",ye)}
                </div>
              `:""}

          <div class="controls">
            <button
              class="control-btn primary"
              ?disabled=${d}
              @click=${()=>J(this,t[h.command],"run")}
            >
              Start
            </button>
            <button
              class="control-btn"
              ?disabled=${p||c}
              @click=${()=>J(this,t[h.command],"pause")}
            >
              Pause
            </button>
            <button
              class="control-btn"
              ?disabled=${c}
              @click=${()=>J(this,t[h.command],"stop")}
            >
              Stop
            </button>
          </div>

          ${e.show_wrinkle_prevent_control?u`
                <button
                  class="toggle-btn ${be?"active":""}"
                  @click=${()=>Xe(this,t[h.wrinklePreventSwitch])}
                >
                  ${be?"Wrinkle Prevent Enabled":"Enable Wrinkle Prevent"}
                </button>
              `:""}

          <div class="metrics">
            ${e.show_power&&we?this.renderMetric("Power",we,e.icons.power):""}
            ${e.show_energy&&xe?this.renderMetric("Cycle Energy",xe,e.icons.energy):""}
          </div>
        </div>
      </ha-card>
    `}};customElements.define(We,_e);ge();window.customCards=window.customCards||[];window.customCards.push({type:"samsung-ha-dryer-card",name:"Samsung HA Dryer Card",description:"A SmartThings-based Samsung dryer card for Home Assistant"});})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
