(()=>{var $t=Object.defineProperty;var $=(r,e)=>()=>(r&&(e=r(r=0)),e);var vt=(r,e)=>{for(var t in e)$t(r,t,{get:e[t],enumerable:!0})};var W,V,se,Ue,L,De,O,Re,ae,le=$(()=>{W=globalThis,V=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol(),Ue=new WeakMap,L=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(V&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=Ue.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ue.set(t,e))}return e}toString(){return this.cssText}},De=r=>new L(typeof r=="string"?r:r+"",void 0,se),O=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,n,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[o+1],r[0]);return new L(t,r,se)},Re=(r,e)=>{if(V)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),n=W.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)}},ae=V?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return De(t)})(r):r});var wt,xt,St,At,Et,kt,G,Me,Ct,Tt,U,ce,He,Ie,b,K=$(()=>{le();le();({is:wt,defineProperty:xt,getOwnPropertyDescriptor:St,getOwnPropertyNames:At,getOwnPropertySymbols:Et,getPrototypeOf:kt}=Object),G=globalThis,Me=G.trustedTypes,Ct=Me?Me.emptyScript:"",Tt=G.reactiveElementPolyfillSupport,U=(r,e)=>r,ce={toAttribute(r,e){switch(e){case Boolean:r=r?Ct:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},He=(r,e)=>!wt(r,e),Ie={attribute:!0,type:String,converter:ce,reflect:!1,useDefault:!1,hasChanged:He};Symbol.metadata??=Symbol("metadata"),G.litPropertyMetadata??=new WeakMap;b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&xt(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){let{get:n,set:o}=St(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:n,set(s){let l=n?.call(this);o?.call(this,s),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ie}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let e=kt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let t=this.properties,i=[...At(t),...Et(t)];for(let n of i)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let n of i)t.unshift(ae(n))}else e!==void 0&&t.push(ae(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Re(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:ce).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){let i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let o=i.getPropertyOptions(n),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ce;this._$Em=n;let l=s.fromAttribute(t,o.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(e,t,i,n=!1,o){if(e!==void 0){let s=this.constructor;if(n===!1&&(o=this[e]),i??=s.getPropertyOptions(e),!((i.hasChanged??He)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:o},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,o]of i){let{wrapped:s}=o,l=this[n];s!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,o,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[U("elementProperties")]=new Map,b[U("finalized")]=new Map,Tt?.({ReactiveElement:b}),(G.reactiveElementVersions??=[]).push("2.1.2")});function Je(r,e){if(!fe(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fe!==void 0?Fe.createHTML(e):e}function k(r,e,t=r,i){if(e===E)return e;let n=i!==void 0?t._$Co?.[i]:t._$Cl,o=M(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(r),n._$AT(r,t,i)),i!==void 0?(t._$Co??=[])[i]=n:t._$Cl=n),n!==void 0&&(e=k(r,n._$AS(r,e.values),n,i)),e}var _e,ze,q,Fe,Ke,v,qe,Pt,A,R,M,fe,Nt,he,D,Be,je,x,We,Ve,Ye,ye,u,Wt,Vt,E,_,Ge,S,Lt,I,de,H,C,pe,ue,me,ge,Ot,Ze,Y=$(()=>{_e=globalThis,ze=r=>r,q=_e.trustedTypes,Fe=q?q.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ke="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,qe="?"+v,Pt=`<${qe}>`,A=document,R=()=>A.createComment(""),M=r=>r===null||typeof r!="object"&&typeof r!="function",fe=Array.isArray,Nt=r=>fe(r)||typeof r?.[Symbol.iterator]=="function",he=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Be=/-->/g,je=/>/g,x=RegExp(`>|${he}(?:([^\\s"'>=/]+)(${he}*=${he}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),We=/'/g,Ve=/"/g,Ye=/^(?:script|style|textarea|title)$/i,ye=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),u=ye(1),Wt=ye(2),Vt=ye(3),E=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Ge=new WeakMap,S=A.createTreeWalker(A,129);Lt=(r,e)=>{let t=r.length-1,i=[],n,o=e===2?"<svg>":e===3?"<math>":"",s=D;for(let l=0;l<t;l++){let a=r[l],d,c,p=-1,m=0;for(;m<a.length&&(s.lastIndex=m,c=s.exec(a),c!==null);)m=s.lastIndex,s===D?c[1]==="!--"?s=Be:c[1]!==void 0?s=je:c[2]!==void 0?(Ye.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=x):c[3]!==void 0&&(s=x):s===x?c[0]===">"?(s=n??D,p=-1):c[1]===void 0?p=-2:(p=s.lastIndex-c[2].length,d=c[1],s=c[3]===void 0?x:c[3]==='"'?Ve:We):s===Ve||s===We?s=x:s===Be||s===je?s=D:(s=x,n=void 0);let g=s===x&&r[l+1].startsWith("/>")?" ":"";o+=s===D?a+Pt:p>=0?(i.push(d),a.slice(0,p)+Ke+a.slice(p)+v+g):a+v+(p===-2?l:g)}return[Je(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},I=class r{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,s=0,l=e.length-1,a=this.parts,[d,c]=Lt(e,t);if(this.el=r.createElement(d,i),S.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=S.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let p of n.getAttributeNames())if(p.endsWith(Ke)){let m=c[s++],g=n.getAttribute(p).split(v),f=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:f[2],strings:g,ctor:f[1]==="."?pe:f[1]==="?"?ue:f[1]==="@"?me:C}),n.removeAttribute(p)}else p.startsWith(v)&&(a.push({type:6,index:o}),n.removeAttribute(p));if(Ye.test(n.tagName)){let p=n.textContent.split(v),m=p.length-1;if(m>0){n.textContent=q?q.emptyScript:"";for(let g=0;g<m;g++)n.append(p[g],R()),S.nextNode(),a.push({type:2,index:++o});n.append(p[m],R())}}}else if(n.nodeType===8)if(n.data===qe)a.push({type:2,index:o});else{let p=-1;for(;(p=n.data.indexOf(v,p+1))!==-1;)a.push({type:7,index:o}),p+=v.length-1}o++}}static createElement(e,t){let i=A.createElement("template");return i.innerHTML=e,i}};de=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??A).importNode(t,!0);S.currentNode=n;let o=S.nextNode(),s=0,l=0,a=i[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new H(o,o.nextSibling,this,e):a.type===1?d=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(d=new ge(o,this,e)),this._$AV.push(d),a=i[++l]}s!==a?.index&&(o=S.nextNode(),s++)}return S.currentNode=A,n}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},H=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),M(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Nt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=I.createElement(Je(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{let o=new de(n,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=Ge.get(e.strings);return t===void 0&&Ge.set(e.strings,t=new I(e)),t}k(e){fe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,n=0;for(let o of e)n===t.length?t.push(i=new r(this.O(R()),this.O(R()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=ze(e).nextSibling;ze(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,o){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(e,t=this,i,n){let o=this.strings,s=!1;if(o===void 0)e=k(this,e,t,0),s=!M(e)||e!==this._$AH&&e!==E,s&&(this._$AH=e);else{let l=e,a,d;for(e=o[0],a=0;a<o.length-1;a++)d=k(this,l[i+a],t,a),d===E&&(d=this._$AH[a]),s||=!M(d)||d!==this._$AH[a],d===_?e=_:e!==_&&(e+=(d??"")+o[a+1]),this._$AH[a]=d}s&&!n&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},pe=class extends C{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},ue=class extends C{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},me=class extends C{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??_)===E)return;let i=this._$AH,n=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==_&&(i===_||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ge=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}},Ot=_e.litHtmlPolyfillSupport;Ot?.(I,H),(_e.litHtmlVersions??=[]).push("3.3.2");Ze=(r,e,t)=>{let i=t?.renderBefore??e,n=i._$litPart$;if(n===void 0){let o=t?.renderBefore??null;i._$litPart$=n=new H(e.insertBefore(R(),o),o,void 0,t??{})}return n._$AI(r),n}});var be,y,Ut,Qe=$(()=>{K();K();Y();Y();be=globalThis,y=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};y._$litElement$=!0,y.finalized=!0,be.litElementHydrateSupport?.({LitElement:y});Ut=be.litElementPolyfillSupport;Ut?.({LitElement:y});(be.litElementVersions??=[]).push("4.2.2")});var Xe=$(()=>{});var $e=$(()=>{K();Y();Qe();Xe()});var et,T,h,z,J,Z=$(()=>{et="samsung-ha-dryer-card",T={device_name:"dryer",title:"Dryer",show_subtitle:!0,layout_mode:"hero",show_completion_time:!0,show_status_chips:!0,show_power:!0,show_energy:!0,show_wrinkle_prevent_control:!0,finished_green_duration:60,show_drum_progress:!0,drum_progress_color:"#5b9cf6",completion_color_threshold_1:50,completion_color_threshold_2:30,icons:{appliance:"mdi:tumble-dryer",start:"mdi:play",pause:"mdi:pause",stop:"mdi:stop",child_lock:"mdi:lock",remote_control:"mdi:remote",wrinkle_prevent:"mdi:tshirt-crew",power:"mdi:flash",energy:"mdi:lightning-bolt",complete:"mdi:clock-outline"}},h={machineState:"machine_state",jobState:"job_state",completionTime:"completion_time",command:"command",childLock:"child_lock",remoteControl:"remote_control",wrinklePreventActive:"wrinkle_prevent_active",wrinklePreventSwitch:"wrinkle_prevent_switch",power:"power",cycleEnergy:"cycle_energy"},z={cooling:"Cooling",delay_wash:"Delayed",drying:"Drying",finished:"Finished",none:"Idle",refreshing:"Refreshing",weight_sensing:"Sensing Load",wrinkle_prevent:"Wrinkle Prevent",dehumidifying:"Dehumidifying",ai_drying:"AI Drying",sanitizing:"Sanitizing",internal_care:"Internal Care",freeze_protection:"Freeze Protection",continuous_dehumidifying:"Continuous Dehumidifying",thawing_frozen_inside:"Thawing"},J={run:"Running",pause:"Paused",stop:"Stopped"}});var dt={};vt(dt,{SamsungHADryerCardEditor:()=>te});var Dt,Rt,Mt,te,Se=$(()=>{$e();Z();Dt=[{key:"machine_state_entity",label:"Machine State Entity"},{key:"job_state_entity",label:"Job State Entity"},{key:"completion_time_entity",label:"Completion Time Entity"},{key:"command_entity",label:"Command Entity"},{key:"child_lock_entity",label:"Child Lock Entity"},{key:"remote_control_entity",label:"Remote Control Entity"},{key:"wrinkle_prevent_active_entity",label:"Wrinkle Prevent Active Entity"},{key:"wrinkle_prevent_switch_entity",label:"Wrinkle Prevent Switch Entity"},{key:"power_entity",label:"Power Entity"},{key:"energy_entity",label:"Energy Entity"}],Rt=[{key:"show_subtitle",label:"Show subtitle"},{key:"show_completion_time",label:"Show completion time"},{key:"show_status_chips",label:"Show status chips"},{key:"show_power",label:"Show power"},{key:"show_energy",label:"Show cycle energy"},{key:"show_wrinkle_prevent_control",label:"Show wrinkle prevent control"},{key:"show_drum_progress",label:"Show drum progress fill"}],Mt=[{key:"appliance",label:"Appliance Icon"},{key:"start",label:"Start Icon"},{key:"pause",label:"Pause Icon"},{key:"stop",label:"Stop Icon"},{key:"child_lock",label:"Child Lock Icon"},{key:"remote_control",label:"Remote Icon"},{key:"wrinkle_prevent",label:"Wrinkle Prevent Icon"},{key:"power",label:"Power Icon"},{key:"energy",label:"Energy Icon"},{key:"complete",label:"Completion Icon"}],te=class extends y{static properties={hass:{},_config:{state:!0}};static styles=O`
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
  `;setConfig(e){this._config={...T,...e,icons:{...T.icons,...e&&e.icons||{}}}}_emitConfig(e){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}_updateField(e,t){let i={...this._config};t===""||t===null||t===void 0?delete i[e]:i[e]=t,this._emitConfig(i)}_updateBoolean(e,t){this._emitConfig({...this._config,[e]:t})}_updateIcon(e,t){let i={...this._config.icons||{}};t===""||t===null||t===void 0?delete i[e]:i[e]=t,this._emitConfig({...this._config,icons:i})}_renderTextField(e,t,i,n=""){return u`
      <div class="field">
        <ha-textfield
          .label=${e}
          .value=${t||""}
          .helper=${n}
          .helperPersistent=${!!n}
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
    `}_renderThresholdColorRow(e){let t=`completion_color_threshold_${e}`,i=`completion_color_${e}`,n=this._config[t],o=this._config[i]||"";return u`
      <div class="threshold-row">
        <ha-textfield
          .label=${`Threshold ${e} (%)`}
          .value=${n!=null?String(n):""}
          type="number"
          min="0"
          max="100"
          @input=${s=>{let l=s.target.value;this._updateField(t,l===""?void 0:Number(l))}}
        ></ha-textfield>
        <ha-textfield
          .label=${`Color ${e} (hex)`}
          .value=${o}
          placeholder="#RRGGBB"
          @input=${s=>this._updateField(i,s.target.value)}
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
        ${Rt.map(e=>this._renderSwitch(e.label,e.key))}
        ${this._renderTextField("Drum progress color (hex)",this._config.drum_progress_color,e=>this._updateField("drum_progress_color",e.target.value),"Color of the progress fill inside the drum circle")}
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
        ${Dt.map(e=>this._renderEntityField(e.label,e.key))}
      </div>

      <div class="section">
        <div class="section-title">Icons</div>
        <div class="icon-grid">
          ${Mt.map(e=>this._renderTextField(e.label,this._config.icons&&this._config.icons[e.key],t=>this._updateIcon(e.key,t.target.value)))}
        </div>
      </div>
    `}};customElements.define("samsung-ha-dryer-card-editor",te)});$e();Z();function tt(r){return{...T,...r,icons:{...T.icons,...r&&r.icons||{}}}}function it(r){let e=r.device_name||"dryer";return{[h.machineState]:r.machine_state_entity||`sensor.${e}_machine_state`,[h.jobState]:r.job_state_entity||`sensor.${e}_job_state`,[h.completionTime]:r.completion_time_entity||`sensor.${e}_completion_time`,[h.command]:r.command_entity||`select.${e}`,[h.childLock]:r.child_lock_entity||`binary_sensor.${e}_child_lock`,[h.remoteControl]:r.remote_control_entity||`binary_sensor.${e}_remote_control`,[h.wrinklePreventActive]:r.wrinkle_prevent_active_entity||`binary_sensor.${e}_wrinkle_prevent_active`,[h.wrinklePreventSwitch]:r.wrinkle_prevent_switch_entity||`switch.${e}_wrinkle_prevent`,[h.power]:r.power_entity||`sensor.${e}_power`,[h.cycleEnergy]:r.energy_entity||`sensor.${e}_power_energy`}}function F(r,e){return e?r.states[e]:void 0}function Q(r,e){let t=F(r,e);return t?t.state:void 0}function B(r,e){return Q(r,e)==="on"}function X(r){return r==null||r==="unknown"||r==="unavailable"}function ve(r){return!r||X(r)?"Unknown":r.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function rt(r,e){return r==="pause"?"Paused":r==="run"?z[e]||J[r]||"Running":r==="stop"&&e==="finished"?"Finished":r==="stop"&&e&&e!=="none"?z[e]||"Stopped":J[r]||ve(r)||"Stopped"}function nt(r,e){return r==="pause"&&e&&e!=="none"?z[e]||ve(e):r==="run"?J[r]||"Running":e==="finished"?"Cycle complete":e&&e!=="none"?z[e]||ve(e):"Ready"}function ot(r,e){if(!r||r.state!=="stop")return!1;if(!e)return!0;let t=new Date(r.last_changed);return Number.isNaN(t.getTime())?!0:Date.now()-t.getTime()<=e*6e4}function st(r,e){return!X(e)&&(r==="run"||r==="pause")}function at(r,e){if(X(e))return"";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;try{return new Intl.DateTimeFormat(r.locale?.language||"en-US",{hour:"2-digit",hour12:!1,minute:"2-digit"}).format(t)}catch{return t.toLocaleTimeString([],{hour:"2-digit",hour12:!1,minute:"2-digit"})}}function lt(r){if(!r)return null;let e=new Date(r).getTime(),t=Date.now(),i=e-t;if(Number.isNaN(e)||i<=0)return null;let n=Math.floor(i/6e4),o=Math.floor(i%6e4/1e3);if(n<10)return`${n}m ${o}s`;if(n<=90)return`${n}m`;let s=Math.floor(n/60),l=n%60;return l>0?`${s}h ${l}m`:`${s}h`}function we(r,e){let t=r?.attributes?.power_consumption_start;if(!t||!e)return null;let i=new Date(t).getTime(),n=new Date(e).getTime(),o=Date.now();return Number.isNaN(i)||Number.isNaN(n)||n<=i?null:Math.max(0,Math.min(100,(n-o)/(n-i)*100))}function ct(r,e,t){let i=t.completion_color_threshold_1,n=t.completion_color_1,o=t.completion_color_threshold_2,s=t.completion_color_2;if(!i&&i!==0&&!o&&o!==0||!n&&!s)return null;let l=we(r,e);if(l===null)return null;let a=[];i!=null&&n&&a.push({threshold:Number(i),color:n}),o!=null&&s&&a.push({threshold:Number(o),color:s}),a.sort((d,c)=>d.threshold-c.threshold);for(let{threshold:d,color:c}of a)if(l<=d)return c;return null}function xe(r,e,t){if(X(e))return"";let i=Number(e);return Number.isNaN(i)?`${e}${t?` ${t}`:""}`:`${new Intl.NumberFormat(r.locale?.language||"en-US",{maximumFractionDigits:i>=100?0:1}).format(i)}${t?` ${t}`:""}`}Z();async function ee(r,e,t){e&&await r.hass.callService("select","select_option",{entity_id:e,option:t})}async function ht(r,e){e&&await r.hass.callService("homeassistant","toggle",{entity_id:e})}var Ae=class extends y{static properties={hass:{},_config:{state:!0}};static async getConfigElement(){return await Promise.resolve().then(()=>(Se(),dt)),document.createElement("samsung-ha-dryer-card-editor")}static getStubConfig(){return{device_name:"dryer",title:"Dryer",show_subtitle:!0,layout_mode:"hero",show_completion_time:!0,show_status_chips:!0,show_power:!0,show_energy:!0,show_wrinkle_prevent_control:!0}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=tt(e)}connectedCallback(){super.connectedCallback(),this._tickInterval=setInterval(()=>this.requestUpdate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._tickInterval&&(clearInterval(this._tickInterval),this._tickInterval=null)}getCardSize(){return this._config?.layout_mode==="compact"?4:5}async _fetchLastKnownState(e){try{let t=[e[h.machineState],e[h.jobState],e[h.completionTime],e[h.power],e[h.cycleEnergy]].filter(Boolean).join(","),i=new Date().toISOString(),o=`history/period/${new Date(Date.now()-36e5).toISOString()}?filter_entity_id=${t}&end_time=${i}&minimal_response&significant_changes_only`,s=await this.hass.callApi("GET",o);if(!s||!s.length)return null;let l=p=>{let m=s.find(g=>g.length&&g[0].entity_id===p);if(!m)return null;for(let g=m.length-1;g>=0;g--)if(m[g].state!=="unavailable"&&m[g].state!=="unknown")return m[g];return null},a=l(e[h.machineState]);if(!a)return null;let d=l(e[h.jobState]),c=l(e[h.power]);return{machineStateEntity:a,machineState:a.state,jobState:d?d.state:void 0,completion:l(e[h.completionTime])?.state,powerState:c||void 0,energyState:l(e[h.cycleEnergy])||void 0}}catch{return null}}static styles=O`
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
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drum-progress {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      opacity: 0.55;
      pointer-events: none;
    }

    .hero.compact .drum-progress {
      width: 88px;
      height: 88px;
    }

    .drum {
      position: relative;
      z-index: 1;
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

    .countdown {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 4px;
      color: var(--primary-text-color);
    }

    .hero.compact .countdown {
      font-size: 1.1rem;
    }

    .secondary-status {
      color: var(--secondary-text-color);
      font-size: 0.88rem;
      line-height: 1.35;
    }

    .hero.compact .secondary-status {
      font-size: 0.82rem;
    }

    .completion {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 38px;
      padding: 0 14px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      font-size: 0.92rem;
      font-weight: 600;
      color: var(--primary-text-color);
      flex-shrink: 0;
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

    .stale-icon {
      --mdc-icon-size: 16px;
      color: var(--warning-color, #ffa600);
      vertical-align: middle;
      margin-left: 4px;
    }

    ha-card.stale .card {
      opacity: 0.6;
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

    @keyframes pulse {
      0%, 100% {
        opacity: 0.55;
      }
      50% {
        opacity: 0.25;
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
    `}renderHeader(e,t,i,n,o){let s=n?`color: ${n};`:"";return u`
      <div class="header">
        <div class="header-left">
          <div class="header-icon">
            <ha-icon .icon=${e.icons.appliance}></ha-icon>
          </div>
          <div class="header-text">
            <div class="title">${e.title}${o?u` <ha-icon class="stale-icon" .icon=${"mdi:cloud-off-outline"}></ha-icon>`:""}</div>
            ${e.show_subtitle?u`<div class="subtitle">Samsung SmartThings Dryer</div>`:""}
          </div>
        </div>
        ${t?u`
              <div class="completion" style=${s}>
                <ha-icon .icon=${e.icons.complete}></ha-icon>
                <span>Completes at ${at(this.hass,i)}</span>
              </div>
            `:""}
      </div>
    `}renderHero(e,t,i,n,o,s){let l=`hero ${e.layout_mode==="compact"?"compact":""}`;return u`
      <div class=${l}>
        <div class="drum-wrap">
          ${s?u`<div class="drum-progress" style=${s}></div>`:""}
          <div class=${o}>
            <div class="drum-center">
              <ha-icon .icon=${e.icons.appliance}></ha-icon>
            </div>
          </div>
        </div>

        <div class="hero-info">
          <div class="primary-status">${t}</div>
          ${n?u`<div class="countdown">${n}</div>`:""}
          <div class="secondary-status">${i}</div>
        </div>
      </div>
    `}render(){if(!this.hass||!this._config)return u``;let e=this._config,t=it(e),i=F(this.hass,t[h.machineState]),n=i?i.state:void 0,o=Q(this.hass,t[h.jobState]),s=Q(this.hass,t[h.completionTime]),l=F(this.hass,t[h.power]),a=F(this.hass,t[h.cycleEnergy]),d=isUnavailable(n);d?!this._cachedState&&!this._historyPending&&(this._historyPending=!0,this._fetchLastKnownState(t).then(N=>{N&&(this._cachedState=N),this._historyPending=!1,this.requestUpdate()})):this._cachedState={machineStateEntity:i,machineState:n,jobState:o,completion:s,powerState:l,energyState:a};let c=d&&this._cachedState?this._cachedState:null,p=c?c.machineStateEntity:i,m=c?c.machineState:n,g=c?c.jobState:o,f=c?c.completion:s,P=c?c.powerState:l,ie=c?c.energyState:a,{isRunning:re,isPaused:Ee,isStopped:ke}=this.getStateFlags(m),w=B(this.hass,t[h.wrinklePreventActive]),pt=w||ot(p,e.finished_green_duration),ut=w?"Finished":rt(m,g),mt=w?"Wrinkle Prevent":nt(m,g),ne=!w&&e.show_completion_time&&st(m,f),gt=ne?ct(P,f,e):null,_t=(()=>{if(!e.show_drum_progress||!re&&!Ee||w)return null;let N=we(P,f);if(N===null)return null;let yt=e.drum_progress_color||"#5b9cf6",bt=.1+(100-N)*.009,Oe=`background: ${yt}; transform: translate(-50%, -50%) scale(${bt});`;if(f){let j=(new Date(f).getTime()-Date.now())/6e4;if(j<=10&&j>0){let oe;j>5?oe=3:oe=3-(5-j)/5*2.25,Oe+=` animation: pulse ${oe}s ease-in-out infinite;`}}return Oe})(),Ce=B(this.hass,t[h.wrinklePreventSwitch]),Te=B(this.hass,t[h.childLock]),Pe=B(this.hass,t[h.remoteControl]),Ne=P?xe(this.hass,P.state,P.attributes.unit_of_measurement):"",Le=ie?xe(this.hass,ie.state,ie.attributes.unit_of_measurement):"",ft=["drum",re?"running":""].filter(Boolean).join(" ");return u`
      <ha-card class=${[pt?"finished":"",d?"stale":""].filter(Boolean).join(" ")}>
        <div class="card">
          ${this.renderHeader(e,ne,f,gt,d)}

          ${this.renderHero(e,ut,mt,ne?lt(f):null,ft,_t)}

          ${e.show_status_chips?u`
                <div class="chips">
                  ${this.renderChip(e.icons.child_lock,Te?"Child Lock On":"Child Lock Off",Te)}
                  ${this.renderChip(e.icons.remote_control,Pe?"Remote Enabled":"Remote Disabled",Pe)}
                  ${this.renderChip(e.icons.wrinkle_prevent,w?"Wrinkle Prevent Active":"Wrinkle Prevent Idle",w)}
                </div>
              `:""}

          <div class="controls">
            <button
              class="control-btn primary"
              ?disabled=${re}
              @click=${()=>ee(this,t[h.command],"run")}
            >
              Start
            </button>
            <button
              class="control-btn"
              ?disabled=${Ee||ke}
              @click=${()=>ee(this,t[h.command],"pause")}
            >
              Pause
            </button>
            <button
              class="control-btn"
              ?disabled=${ke}
              @click=${()=>ee(this,t[h.command],"stop")}
            >
              Stop
            </button>
          </div>

          ${e.show_wrinkle_prevent_control?u`
                <button
                  class="toggle-btn ${Ce?"active":""}"
                  @click=${()=>ht(this,t[h.wrinklePreventSwitch])}
                >
                  ${Ce?"Wrinkle Prevent Enabled":"Enable Wrinkle Prevent"}
                </button>
              `:""}

          <div class="metrics">
            ${e.show_power&&Ne?this.renderMetric("Power",Ne,e.icons.power):""}
            ${e.show_energy&&Le?this.renderMetric("Cycle Energy",Le,e.icons.energy):""}
          </div>
        </div>
      </ha-card>
    `}};customElements.define(et,Ae);Se();window.customCards=window.customCards||[];window.customCards.push({type:"samsung-ha-dryer-card",name:"Samsung HA Dryer Card",description:"A SmartThings-based Samsung dryer card for Home Assistant"});})();
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
