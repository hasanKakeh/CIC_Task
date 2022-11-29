"use strict";(self.webpackChunkcic_task=self.webpackChunkcic_task||[]).push([[687],{6687:(Jr,Gt,b)=>{b.r(Gt),b.d(Gt,{CitiesModule:()=>Wr});var N=b(6895),di=b(4466),Ht=b(2655),R=b(433),a=b(8256),fe=b(9751),jt=b(515),ct=b(9646),B=b(7579),he=b(8421),$t=b(5577),ui=b(1144),ae=b(576),_i=b(3268);const pi=["addListener","removeListener"],gi=["addEventListener","removeEventListener"],fi=["on","off"];function A(t,n,e,i){if((0,ae.m)(e)&&(i=e,e=void 0),i)return A(t,n,e).pipe((0,_i.Z)(i));const[o,s]=function bi(t){return(0,ae.m)(t.addEventListener)&&(0,ae.m)(t.removeEventListener)}(t)?gi.map(r=>l=>t[r](n,l,e)):function hi(t){return(0,ae.m)(t.addListener)&&(0,ae.m)(t.removeListener)}(t)?pi.map(Vt(t,n)):function mi(t){return(0,ae.m)(t.on)&&(0,ae.m)(t.off)}(t)?fi.map(Vt(t,n)):[];if(!o&&(0,ui.z)(t))return(0,$t.z)(r=>A(r,n,e))((0,he.Xf)(t));if(!o)throw new TypeError("Invalid event target");return new fe.y(r=>{const l=(...c)=>r.next(1<c.length?c:c[0]);return o(l),()=>s(l)})}function Vt(t,n){return e=>i=>t[e](n,i)}var vi=b(727);class yi extends vi.w0{constructor(n,e){super()}schedule(n,e=0){return this}}const $e={setInterval(t,n,...e){const{delegate:i}=$e;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){const{delegate:n}=$e;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Ni=b(8737);const Lt={now:()=>(Lt.delegate||Date).now(),delegate:void 0};class Se{constructor(n,e=Se.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}}Se.now=Lt.now;const Ti=new class Ci extends Se{constructor(n,e=Se.now){super(n,e),this.actions=[],this._active=!1}flush(n){const{actions:e}=this;if(this._active)return void e.push(n);let i;this._active=!0;do{if(i=n.execute(n.state,n.delay))break}while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}}(class Di extends yi{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;const o=this.id,s=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(s,o,e)),this.pending=!0,this.delay=e,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(s,this.id,e),this}requestAsyncId(n,e,i=0){return $e.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;null!=e&&$e.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(n,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let o,i=!1;try{this.work(n)}catch(s){i=!0,o=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,Ni.P)(i,this),null!=n&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}});var wi=b(3532);const{isArray:Oi}=Array;function Ut(t){return 1===t.length&&Oi(t[0])?t[0]:t}var oe=b(5403);var X=b(1135),Ve=(b(9841),b(5032));new fe.y(Ve.Z);var Jt=b(3269);function Le(...t){const n=(0,Jt.jO)(t),e=Ut(t);return e.length?new fe.y(i=>{let o=e.map(()=>[]),s=e.map(()=>!1);i.add(()=>{o=s=null});for(let r=0;!i.closed&&r<e.length;r++)(0,he.Xf)(e[r]).subscribe((0,oe.x)(i,l=>{if(o[r].push(l),o.every(c=>c.length)){const c=o.map(d=>d.shift());i.next(n?n(...c):c),o.some((d,u)=>!d.length&&s[u])&&i.complete()}},()=>{s[r]=!0,!o[r].length&&i.complete()}));return()=>{o=s=null}}):jt.E}var Zt=b(7272),Ke=b(4482);function x(t){return(0,Ke.e)((n,e)=>{(0,he.Xf)(t).subscribe((0,oe.x)(e,()=>e.complete(),Ve.Z)),!e.closed&&n.subscribe(e)})}var se=b(9300),G=b(5698),ee=b(4004),qt=(b(8675),b(4671)),Qt=b(3900),Xt=b(8505);function pt(...t){const n=(0,Jt.jO)(t);return(0,Ke.e)((e,i)=>{const o=t.length,s=new Array(o);let r=t.map(()=>!1),l=!1;for(let c=0;c<o;c++)(0,he.Xf)(t[c]).subscribe((0,oe.x)(i,d=>{s[c]=d,!l&&!r[c]&&(r[c]=!0,(l=r.every(qt.y))&&(r=null))},Ve.Z));e.subscribe((0,oe.x)(i,c=>{if(l){const d=[c,...s];i.next(n?n(...d):d)}}))})}b(9718),Math,Math,Math;const Ka=["*"],lo=["dialog"];function Ct(t){return"string"==typeof t}function re(t){return null!=t}function ye(t){return(t||document.body).getBoundingClientRect()}const vn={animation:!0,transitionTimerDelayMs:5},is=()=>{},{transitionTimerDelayMs:as}=vn,Ae=new Map,P=(t,n,e,i)=>{let o=i.context||{};const s=Ae.get(n);if(s)switch(i.runningTransition){case"continue":return jt.E;case"stop":t.run(()=>s.transition$.complete()),o=Object.assign(s.context,o),Ae.delete(n)}const r=e(n,i.animation,o)||is;if(!i.animation||"none"===window.getComputedStyle(n).transitionProperty)return t.run(()=>r()),(0,ct.of)(void 0).pipe(function ts(t){return n=>new fe.y(e=>n.subscribe({next:r=>t.run(()=>e.next(r)),error:r=>t.run(()=>e.error(r)),complete:()=>t.run(()=>e.complete())}))}(t));const l=new B.x,c=new B.x,d=l.pipe(function ki(...t){return n=>(0,Zt.z)(n,(0,ct.of)(...t))}(!0));Ae.set(n,{transition$:l,complete:()=>{c.next(),c.complete()},context:o});const u=function ns(t){const{transitionDelay:n,transitionDuration:e}=window.getComputedStyle(t);return 1e3*(parseFloat(n)+parseFloat(e))}(n);return t.runOutsideAngular(()=>{const p=A(n,"transitionend").pipe(x(d),(0,se.h)(({target:g})=>g===n));(function Wt(...t){return 1===(t=Ut(t)).length?(0,he.Xf)(t[0]):new fe.y(function Mi(t){return n=>{let e=[];for(let i=0;e&&!n.closed&&i<t.length;i++)e.push((0,he.Xf)(t[i]).subscribe((0,oe.x)(n,o=>{if(e){for(let s=0;s<e.length;s++)s!==i&&e[s].unsubscribe();e=null}n.next(o)})))}}(t))})(function dt(t=0,n,e=Ti){let i=-1;return null!=n&&((0,wi.K)(n)?e=n:i=n),new fe.y(o=>{let s=function Si(t){return t instanceof Date&&!isNaN(t)}(t)?+t-e.now():t;s<0&&(s=0);let r=0;return e.schedule(function(){o.closed||(o.next(r++),0<=i?this.schedule(void 0,i):o.complete())},s)})}(u+as).pipe(x(d)),p,c).pipe(x(d)).subscribe(()=>{Ae.delete(n),t.run(()=>{r(),l.next(),l.complete()})})}),l.asObservable()};let qe=(()=>{class t{constructor(){this.animation=vn.animation}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var E=(()=>{return(t=E||(E={}))[t.Tab=9]="Tab",t[t.Enter=13]="Enter",t[t.Escape=27]="Escape",t[t.Space=32]="Space",t[t.PageUp=33]="PageUp",t[t.PageDown=34]="PageDown",t[t.End=35]="End",t[t.Home=36]="Home",t[t.ArrowLeft=37]="ArrowLeft",t[t.ArrowUp=38]="ArrowUp",t[t.ArrowRight=39]="ArrowRight",t[t.ArrowDown=40]="ArrowDown",E;var t})();typeof navigator<"u"&&navigator.userAgent&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2||/Android/.test(navigator.userAgent));const kn=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function Rn(t){const n=Array.from(t.querySelectorAll(kn)).filter(e=>-1!==e.tabIndex);return[n[0],n[n.length-1]]}new Date(1882,10,12),new Date(2174,10,25);class ue{constructor(n,e,i){this.nodes=n,this.viewRef=e,this.componentRef=i}}let ar=(()=>{class t{constructor(e,i){this._el=e,this._zone=i}ngOnInit(){this._zone.onStable.asObservable().pipe((0,G.q)(1)).subscribe(()=>{P(this._zone,this._el.nativeElement,(e,i)=>{i&&ye(e),e.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return P(this._zone,this._el.nativeElement,({classList:e})=>e.remove("show"),{animation:this.animation,runningTransition:"stop"})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.SBq),a.Y36(a.R0b))},t.\u0275cmp=a.Xpm({type:t,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(e,i){2&e&&(a.Tol("modal-backdrop"+(i.backdropClass?" "+i.backdropClass:"")),a.ekj("show",!i.animation)("fade",i.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},decls:0,vars:0,template:function(e,i){},encapsulation:2}),t})();class $n{close(n){}dismiss(n){}}class or{constructor(n,e,i,o){this._windowCmptRef=n,this._contentRef=e,this._backdropCmptRef=i,this._beforeDismiss=o,this._closed=new B.x,this._dismissed=new B.x,this._hidden=new B.x,n.instance.dismissEvent.subscribe(s=>{this.dismiss(s)}),this.result=new Promise((s,r)=>{this._resolve=s,this._reject=r}),this.result.then(null,()=>{})}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(x(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(x(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}close(n){this._windowCmptRef&&(this._closed.next(n),this._resolve(n),this._removeModalElements())}_dismiss(n){this._dismissed.next(n),this._reject(n),this._removeModalElements()}dismiss(n){if(this._windowCmptRef)if(this._beforeDismiss){const e=this._beforeDismiss();!function bn(t){return t&&t.then}(e)?!1!==e&&this._dismiss(n):e.then(i=>{!1!==i&&this._dismiss(n)},()=>{})}else this._dismiss(n)}_removeModalElements(){const n=this._windowCmptRef.instance.hide(),e=this._backdropCmptRef?this._backdropCmptRef.instance.hide():(0,ct.of)(void 0);n.subscribe(()=>{const{nativeElement:i}=this._windowCmptRef.location;i.parentNode.removeChild(i),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),e.subscribe(()=>{if(this._backdropCmptRef){const{nativeElement:i}=this._backdropCmptRef.location;i.parentNode.removeChild(i),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),Le(n,e).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}}var Ge=(()=>{return(t=Ge||(Ge={}))[t.BACKDROP_CLICK=0]="BACKDROP_CLICK",t[t.ESC=1]="ESC",Ge;var t})();let sr=(()=>{class t{constructor(e,i,o){this._document=e,this._elRef=i,this._zone=o,this._closed$=new B.x,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new a.vpe,this.shown=new B.x,this.hidden=new B.x}get fullscreenClass(){return!0===this.fullscreen?" modal-fullscreen":Ct(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(e){this.dismissEvent.emit(e)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe((0,G.q)(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){const{nativeElement:e}=this._elRef,i={animation:this.animation,runningTransition:"stop"},r=Le(P(this._zone,e,()=>e.classList.remove("show"),i),P(this._zone,this._dialogEl.nativeElement,()=>{},i));return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){const e={animation:this.animation,runningTransition:"continue"};Le(P(this._zone,this._elRef.nativeElement,(s,r)=>{r&&ye(s),s.classList.add("show")},e),P(this._zone,this._dialogEl.nativeElement,()=>{},e)).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){const{nativeElement:e}=this._elRef;this._zone.runOutsideAngular(()=>{A(e,"keydown").pipe(x(this._closed$),(0,se.h)(o=>o.which===E.Escape)).subscribe(o=>{this.keyboard?requestAnimationFrame(()=>{o.defaultPrevented||this._zone.run(()=>this.dismiss(Ge.ESC))}):"static"===this.backdrop&&this._bumpBackdrop()});let i=!1;A(this._dialogEl.nativeElement,"mousedown").pipe(x(this._closed$),(0,Xt.b)(()=>i=!1),(0,Qt.w)(()=>A(e,"mouseup").pipe(x(this._closed$),(0,G.q)(1))),(0,se.h)(({target:o})=>e===o)).subscribe(()=>{i=!0}),A(e,"click").pipe(x(this._closed$)).subscribe(({target:o})=>{e===o&&("static"===this.backdrop?this._bumpBackdrop():!0===this.backdrop&&!i&&this._zone.run(()=>this.dismiss(Ge.BACKDROP_CLICK))),i=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){const{nativeElement:e}=this._elRef;if(!e.contains(document.activeElement)){const i=e.querySelector("[ngbAutofocus]"),o=Rn(e)[0];(i||o||e).focus()}}_restoreFocus(){const e=this._document.body,i=this._elWithFocus;let o;o=i&&i.focus&&e.contains(i)?i:e,this._zone.runOutsideAngular(()=>{setTimeout(()=>o.focus()),this._elWithFocus=null})}_bumpBackdrop(){"static"===this.backdrop&&P(this._zone,this._elRef.nativeElement,({classList:e})=>(e.add("modal-static"),()=>e.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(N.K0),a.Y36(a.SBq),a.Y36(a.R0b))},t.\u0275cmp=a.Xpm({type:t,selectors:[["ngb-modal-window"]],viewQuery:function(e,i){if(1&e&&a.Gf(lo,7),2&e){let o;a.iGM(o=a.CRH())&&(i._dialogEl=o.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(e,i){2&e&&(a.uIk("aria-modal",!0)("aria-labelledby",i.ariaLabelledBy)("aria-describedby",i.ariaDescribedBy),a.Tol("modal d-block"+(i.windowClass?" "+i.windowClass:"")),a.ekj("fade",i.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},ngContentSelectors:Ka,decls:4,vars:2,consts:[["role","document"],["dialog",""],[1,"modal-content"]],template:function(e,i){1&e&&(a.F$t(),a.TgZ(0,"div",0,1)(2,"div",2),a.Hsn(3),a.qZA()()),2&e&&a.Tol("modal-dialog"+(i.size?" modal-"+i.size:"")+(i.centered?" modal-dialog-centered":"")+i.fullscreenClass+(i.scrollable?" modal-dialog-scrollable":"")+(i.modalDialogClass?" "+i.modalDialogClass:""))},styles:["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"],encapsulation:2}),t})(),rr=(()=>{class t{constructor(e){this._document=e}hide(){const e=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),i=this._document.body,o=i.style,{overflow:s,paddingRight:r}=o;if(e>0){const l=parseFloat(window.getComputedStyle(i).paddingRight);o.paddingRight=`${l+e}px`}return o.overflow="hidden",()=>{e>0&&(o.paddingRight=r),o.overflow=s}}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(N.K0))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),lr=(()=>{class t{constructor(e,i,o,s,r,l){this._applicationRef=e,this._injector=i,this._document=o,this._scrollBar=s,this._rendererFactory=r,this._ngZone=l,this._activeWindowCmptHasChanged=new B.x,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._backdropAttributes=["animation","backdropClass"],this._modalRefs=[],this._windowAttributes=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],this._windowCmpts=[],this._activeInstances=new a.vpe,this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){const c=this._windowCmpts[this._windowCmpts.length-1];((t,n,e,i=!1)=>{this._ngZone.runOutsideAngular(()=>{const o=A(n,"focusin").pipe(x(e),(0,ee.U)(s=>s.target));A(n,"keydown").pipe(x(e),(0,se.h)(s=>s.which===E.Tab),pt(o)).subscribe(([s,r])=>{const[l,c]=Rn(n);(r===l||r===n)&&s.shiftKey&&(c.focus(),s.preventDefault()),r===c&&!s.shiftKey&&(l.focus(),s.preventDefault())}),i&&A(n,"click").pipe(x(e),pt(o),(0,ee.U)(s=>s[1])).subscribe(s=>s.focus())})})(0,c.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(c.location.nativeElement)}})}_restoreScrollBar(){const e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(e,i,o,s){const r=s.container instanceof HTMLElement?s.container:re(s.container)?this._document.querySelector(s.container):this._document.body,l=this._rendererFactory.createRenderer(null,null);if(!r)throw new Error(`The specified modal container "${s.container||"body"}" was not found in the DOM.`);this._hideScrollBar();const c=new $n,d=this._getContentRef(e,s.injector||i,o,c,s);let u=!1!==s.backdrop?this._attachBackdrop(e,r):void 0,p=this._attachWindowComponent(e,r,d),_=new or(p,d,u,s.beforeDismiss);return this._registerModalRef(_),this._registerWindowCmpt(p),_.hidden.pipe((0,G.q)(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(l.removeClass(this._document.body,"modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),c.close=g=>{_.close(g)},c.dismiss=g=>{_.dismiss(g)},this._applyWindowOptions(p.instance,s),1===this._modalRefs.length&&l.addClass(this._document.body,"modal-open"),u&&u.instance&&(this._applyBackdropOptions(u.instance,s),u.changeDetectorRef.detectChanges()),p.changeDetectorRef.detectChanges(),_}get activeInstances(){return this._activeInstances}dismissAll(e){this._modalRefs.forEach(i=>i.dismiss(e))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(e,i){let s=e.resolveComponentFactory(ar).create(this._injector);return this._applicationRef.attachView(s.hostView),i.appendChild(s.location.nativeElement),s}_attachWindowComponent(e,i,o){let r=e.resolveComponentFactory(sr).create(this._injector,o.nodes);return this._applicationRef.attachView(r.hostView),i.appendChild(r.location.nativeElement),r}_applyWindowOptions(e,i){this._windowAttributes.forEach(o=>{re(i[o])&&(e[o]=i[o])})}_applyBackdropOptions(e,i){this._backdropAttributes.forEach(o=>{re(i[o])&&(e[o]=i[o])})}_getContentRef(e,i,o,s,r){return o?o instanceof a.Rgc?this._createFromTemplateRef(o,s):Ct(o)?this._createFromString(o):this._createFromComponent(e,i,o,s,r):new ue([])}_createFromTemplateRef(e,i){const s=e.createEmbeddedView({$implicit:i,close(r){i.close(r)},dismiss(r){i.dismiss(r)}});return this._applicationRef.attachView(s),new ue([s.rootNodes],s)}_createFromString(e){const i=this._document.createTextNode(`${e}`);return new ue([[i]])}_createFromComponent(e,i,o,s,r){const l=e.resolveComponentFactory(o),c=a.zs3.create({providers:[{provide:$n,useValue:s}],parent:i}),d=l.create(c),u=d.location.nativeElement;return r.scrollable&&u.classList.add("component-host-scrollable"),this._applicationRef.attachView(d.hostView),new ue([[u]],d.hostView,d)}_setAriaHidden(e){const i=e.parentElement;i&&e!==this._document.body&&(Array.from(i.children).forEach(o=>{o!==e&&"SCRIPT"!==o.nodeName&&(this._ariaHiddenValues.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}),this._setAriaHidden(i))}_revertAriaHidden(){this._ariaHiddenValues.forEach((e,i)=>{e?i.setAttribute("aria-hidden",e):i.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(e){const i=()=>{const o=this._modalRefs.indexOf(e);o>-1&&(this._modalRefs.splice(o,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(e),this._activeInstances.emit(this._modalRefs),e.result.then(i,i)}_registerWindowCmpt(e){this._windowCmpts.push(e),this._activeWindowCmptHasChanged.next(),e.onDestroy(()=>{const i=this._windowCmpts.indexOf(e);i>-1&&(this._windowCmpts.splice(i,1),this._activeWindowCmptHasChanged.next())})}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(a.z2F),a.LFG(a.zs3),a.LFG(N.K0),a.LFG(rr),a.LFG(a.FYo),a.LFG(a.R0b))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),cr=(()=>{class t{constructor(e){this._ngbConfig=e,this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return void 0===this._animation?this._ngbConfig.animation:this._animation}set animation(e){this._animation=e}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(qe))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Vn=(()=>{class t{constructor(e,i,o,s){this._moduleCFR=e,this._injector=i,this._modalStack=o,this._config=s}open(e,i={}){const o={...this._config,animation:this._config.animation,...i};return this._modalStack.open(this._moduleCFR,this._injector,e,o)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(e){this._modalStack.dismissAll(e)}hasOpenModals(){return this._modalStack.hasOpenModals()}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(a._Vd),a.LFG(a.zs3),a.LFG(lr),a.LFG(cr))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();new a.OlP("live announcer delay",{providedIn:"root",factory:function xr(){return 100}});let ei=(()=>{class t{constructor(e){this._modalService=e,this.modalRef=[]}getRef(){return this.modalRef[this.modalRef.length-1]}open(e,i){let o={centered:!0};o=Object.assign(o,i),this.modalRef.push(this._modalService.open(e,o))}close(){let e=this.modalRef.pop();e&&e.close()}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(Vn))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),ti=(()=>{class t{constructor(){this.cities$=new X.X([{id:0,country:"Egypt",name:"Cairo",code:"#045"},{id:1,country:"Egypt",name:"Giza",code:"#048"}])}getCities$(){return this.cities$.asObservable()}getLastCityId(){let e=0;return this.cities$.getValue().forEach(i=>{i.id>e&&(e=i.id)}),e}addOrUpdateCity(e){let i=this.cities$.getValue();const o=i.findIndex(({id:s})=>e.id===s);if(-1===o)return i.push({...e,id:this.getLastCityId()+1}),void this.cities$.next(i);i[o]=e,this.cities$.next(i)}delete(e){let i=this.cities$.getValue();i=i.filter(o=>o.id!=e),this.cities$.next(i)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var ni=b(9987);function Ir(t,n){if(1&t&&(a.TgZ(0,"th",4),a._uU(1),a.qZA()),2&t){const e=n.$implicit;a.xp6(1),a.hij(" ",e.name," ")}}function Ar(t,n){if(1&t&&(a.TgZ(0,"td",6),a._uU(1),a.qZA()),2&t){const e=n.$implicit,i=a.oxw().$implicit;a.xp6(1),a.Oqu(i[e.id])}}function Pr(t,n){if(1&t){const e=a.EpF();a.TgZ(0,"tr"),a.YNc(1,Ar,2,1,"td",5),a.TgZ(2,"td",6)(3,"div",7)(4,"button",8),a.NdJ("click",function(){const s=a.CHM(e).$implicit,r=a.oxw();return a.KtG(r.onClickAction.emit({action:"edit",data:s}))}),a._UZ(5,"i",9),a.qZA(),a.TgZ(6,"button",10),a.NdJ("click",function(){const s=a.CHM(e).$implicit,r=a.oxw();return a.KtG(r.onClickAction.emit({action:"delete",data:s}))}),a._UZ(7,"i",11),a.qZA()()()()}if(2&t){const e=a.oxw();a.xp6(1),a.Q6J("ngForOf",e.columns)}}let Fr=(()=>{class t{constructor(){this.columns=[],this.onClickAction=new a.vpe}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["data-table"]],inputs:{columns:"columns",data:"data"},outputs:{onClickAction:"onClickAction"},decls:7,vars:2,consts:[[1,"table","curved","table-hover","table-responsive","table-striped"],["scope","col",4,"ngFor","ngForOf"],[1,"header-cell"],[4,"ngFor","ngForOf"],["scope","col"],["class","cell",4,"ngFor","ngForOf"],[1,"cell"],[1,"d-flex","justify-content-center"],[1,"btn","btn-sm","btn-info",3,"click"],["aria-hidden","true",1,"fa","fa-pencil"],[1,"btn","btn-sm","ms-2","btn-danger",3,"click"],["aria-hidden","true",1,"fa","fa-trash-o"]],template:function(e,i){1&e&&(a.TgZ(0,"table",0)(1,"thead")(2,"tr"),a.YNc(3,Ir,2,1,"th",1),a._UZ(4,"th",2),a.qZA()(),a.TgZ(5,"tbody"),a.YNc(6,Pr,8,1,"tr",3),a.qZA()()),2&e&&(a.xp6(3),a.Q6J("ngForOf",i.columns),a.xp6(3),a.Q6J("ngForOf",i.data))},dependencies:[N.sg]}),t})();var Br=b(5307);function Gr(t,n){1&t&&(a.TgZ(0,"h2"),a._uU(1,"Add city"),a.qZA())}function Hr(t,n){1&t&&(a.TgZ(0,"h2"),a._uU(1,"Edit city"),a.qZA())}let jr=(()=>{class t{constructor(e,i,o){this._vs=e,this._ms=i,this._cs=o,this.validationMessages={country:{required:"Country is required"},name:{required:"City is required"}},this.formErrors={},this.isEdit=!1}ngOnInit(){this.initFormGroup(),this.trackFormChanges(),this.city&&(this.isEdit=!0,this.setFormValue(this.city))}initFormGroup(){this.cityForm=new R.cw({country:new R.NI(null,R.kI.required),name:new R.NI(null,R.kI.required),code:new R.NI})}setFormValue(e){this.cityForm.patchValue({...e})}trackFormChanges(){this.cityForm.valueChanges.subscribe(e=>{this.logValidationMessages()})}logValidationMessages(){this.formErrors=this._vs.getValidationErrors(this.cityForm,this.validationMessages)}submit(){if(console.log(this.cityForm.value),this.cityForm.valid){const e=this.isEdit?{id:this.city.id,...this.cityForm.value}:this.cityForm.value;this._cs.addOrUpdateCity(e),this.close()}else this.cityForm.markAllAsTouched(),this.cityForm.markAsDirty(),this.logValidationMessages()}close(){this._ms.close()}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(Br.R),a.Y36(ei),a.Y36(ti))},t.\u0275cmp=a.Xpm({type:t,selectors:[["city-form"]],inputs:{city:"city"},decls:12,vars:7,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],["formControlName","country","label","Country",3,"formControlError"],["formControlName","name","label","City",1,"mt-2",3,"formControlError"],["formControlName","code","label","Code",1,"mt-2",3,"formControlError"],[1,"mt-4","float-end"],["type","button",1,"btn","btn-secondary","px-3",3,"click"],[1,"btn","btn-primary","px-3","ms-2"]],template:function(e,i){1&e&&(a.TgZ(0,"div"),a.YNc(1,Gr,2,0,"h2",0),a.YNc(2,Hr,2,0,"h2",0),a.qZA(),a.TgZ(3,"form",1),a.NdJ("ngSubmit",function(){return i.submit()}),a._UZ(4,"text-input",2)(5,"text-input",3)(6,"text-input",4),a.TgZ(7,"div",5)(8,"button",6),a.NdJ("click",function(){return i.close()}),a._uU(9," Close "),a.qZA(),a.TgZ(10,"button",7),a._uU(11),a.qZA()()()),2&e&&(a.xp6(1),a.Q6J("ngIf",!i.isEdit),a.xp6(1),a.Q6J("ngIf",i.isEdit),a.xp6(1),a.Q6J("formGroup",i.cityForm),a.xp6(1),a.Q6J("formControlError",i.formErrors.country),a.xp6(1),a.Q6J("formControlError",i.formErrors.name),a.xp6(1),a.Q6J("formControlError",i.formErrors.code),a.xp6(5),a.hij(" ",i.isEdit?"Edit":"Add"," "))},dependencies:[ni.t,R._Y,R.JJ,R.JL,R.sg,R.u,N.O5]}),t})(),$r=(()=>{class t{transform(e,i,...o){return e?i?(i=i?.toLocaleLowerCase(),e.filter(s=>o.find(r=>s[r]?.toLocaleLowerCase().includes(i)))):e:[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Yjl({name:"filter",type:t,pure:!0}),t})();const Vr=["cityForm"];function Lr(t,n){if(1&t&&(a.TgZ(0,"div",9),a._UZ(1,"city-form",10),a.qZA()),2&t){const e=a.oxw();a.xp6(1),a.Q6J("city",e.city)}}const Kr=[{path:"",component:(()=>{class t{constructor(e,i){this._ms=e,this._cs=i,this.columns=[{name:"Country",id:"country"},{name:"City",id:"name"},{name:"Code",id:"code"}]}ngOnInit(){this.initFormGroup(),this.data=this._cs.getCities$()}openCityModal(e){this.city=e,this._ms.open(this.cityForm)}initFormGroup(){this.formGroup=new R.cw({search:new R.NI})}onClickActionTable({action:e,data:i}){switch(e){case"edit":this.openCityModal(i);break;case"delete":this._cs.delete(i.id)}}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(ei),a.Y36(ti))},t.\u0275cmp=a.Xpm({type:t,selectors:[["view"]],viewQuery:function(e,i){if(1&e&&a.Gf(Vr,5),2&e){let o;a.iGM(o=a.CRH())&&(i.cityForm=o.first)}},decls:15,vars:10,consts:[[1,"container","mt-4"],[1,"row","mt-4"],[1,"col-lg-4",3,"formGroup"],["formControlName","search","placeholder","search here..."],[1,"col-lg-1","col-sm-3","mt-sm-2","mt-lg-0","ms-auto"],[1,"btn","w-100","btn-primary",3,"click"],[1,"mt-2"],[3,"columns","data","onClickAction"],["cityForm",""],[1,"modal-body"],[3,"city"]],template:function(e,i){1&e&&(a.TgZ(0,"div",0)(1,"h1"),a._uU(2,"Cities"),a.qZA(),a.TgZ(3,"div",1)(4,"div",2),a._UZ(5,"text-input",3),a.qZA(),a.TgZ(6,"div",4)(7,"button",5),a.NdJ("click",function(){return i.openCityModal(null)}),a._uU(8," Add "),a.qZA()(),a.TgZ(9,"div",6)(10,"data-table",7),a.NdJ("onClickAction",function(s){return i.onClickActionTable(s)}),a.ALo(11,"filter"),a.ALo(12,"async"),a.qZA()()()(),a.YNc(13,Lr,2,1,"ng-template",null,8,a.W1O)),2&e&&(a.xp6(4),a.Q6J("formGroup",i.formGroup),a.xp6(6),a.Q6J("columns",i.columns)("data",a.gM2(11,3,a.lcZ(12,8,i.data),i.formGroup.controls.search.value,"country","city")))},dependencies:[ni.t,R.JJ,R.JL,R.sg,R.u,Fr,jr,N.Ov,$r]}),t})()}];let Ur=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[Ht.Bz.forChild(Kr),Ht.Bz]}),t})(),Wr=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[di.m,N.ez,Ur]}),t})()}}]);