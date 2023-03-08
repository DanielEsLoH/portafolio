"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{1544:function(e,t,n){n.d(t,{M:function(){return g}});var r=n(7294),o=n(6337),u=n(4454),i=n(240),c=n(6681);class a extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function l({children:e,isPresent:t}){let n=(0,r.useId)(),o=(0,r.useRef)(null),u=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:i,left:c}=u.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;let a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${i}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[t]),r.createElement(a,{isPresent:t,childRef:o,sizeRef:u},r.cloneElement(e,{ref:o}))}let s=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:u,presenceAffectsLayout:a,mode:s})=>{let d=(0,c.h)(f),m=(0,r.useId)(),p=(0,r.useMemo)(()=>({id:m,initial:t,isPresent:n,custom:u,onExitComplete:e=>{for(let t of(d.set(e,!0),d.values()))if(!t)return;o&&o()},register:e=>(d.set(e,!1),()=>d.delete(e))}),a?void 0:[n]);return(0,r.useMemo)(()=>{d.forEach((e,t)=>d.set(t,!1))},[n]),r.useEffect(()=>{n||d.size||!o||o()},[n]),"popLayout"===s&&(e=r.createElement(l,{isPresent:n},e)),r.createElement(i.O.Provider,{value:p},e)};function f(){return new Map}var d=n(5364),m=n(8868),p=n(5411);let h=e=>e.key||"",g=({children:e,custom:t,initial:n=!0,onExitComplete:i,exitBeforeEnter:c,presenceAffectsLayout:a=!0,mode:l="sync"})=>{c&&(l="wait");let[f]=(0,o.N)(),g=(0,r.useContext)(d.p).forceRender;g&&(f=g);let v=(0,u.t)(),y=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),E=y,w=new Set,x=(0,r.useRef)(E),b=(0,r.useRef)(new Map).current,C=(0,r.useRef)(!0);if((0,m.L)(()=>{C.current=!1,function(e,t){e.forEach(e=>{let n=h(e);t.set(n,e)})}(y,b),x.current=E}),(0,p.z)(()=>{C.current=!0,b.clear(),w.clear()}),C.current)return r.createElement(r.Fragment,null,E.map(e=>r.createElement(s,{key:h(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:a,mode:l},e)));E=[...E];let S=x.current.map(h),L=y.map(h),O=S.length;for(let e=0;e<O;e++){let t=S[e];-1===L.indexOf(t)&&w.add(t)}return"wait"===l&&w.size&&(E=[]),w.forEach(e=>{if(-1!==L.indexOf(e))return;let n=b.get(e);if(!n)return;let o=S.indexOf(e),u=()=>{b.delete(e),w.delete(e);let t=x.current.findIndex(t=>t.key===e);if(x.current.splice(t,1),!w.size){if(x.current=y,!1===v.current)return;f(),i&&i()}};E.splice(o,0,r.createElement(s,{key:h(n),isPresent:!1,onExitComplete:u,custom:t,presenceAffectsLayout:a,mode:l},n))}),E=E.map(e=>{let t=e.key;return w.has(t)?e:r.createElement(s,{key:h(e),isPresent:!0,presenceAffectsLayout:a,mode:l},e)}),r.createElement(r.Fragment,null,w.size?E:E.map(e=>(0,r.cloneElement)(e)))}},8939:function(e,t,n){let r,o;n.r(t),n.d(t,{AnimatePresence:function(){return l.M},AnimateSharedLayout:function(){return x},AnimationType:function(){return t4.r},DeprecatedLayoutGroupContext:function(){return p},DragControls:function(){return tn},FlatTree:function(){return t$.E},LayoutGroup:function(){return E},LayoutGroupContext:function(){return m.p},LazyMotion:function(){return M},MotionConfig:function(){return S},MotionConfigContext:function(){return b._},MotionContext:function(){return tD.v},MotionValue:function(){return B.H},PresenceContext:function(){return t_.O},Reorder:function(){return J},SwitchLayoutGroupContext:function(){return tF.g},VisualElement:function(){return tf.l},addPointerEvent:function(){return t7.a},addPointerInfo:function(){return t5.s},addScaleCorrector:function(){return td.B},animate:function(){return e7.j},animateValue:function(){return eu.y0},animateVisualElement:function(){return e0.d5},animationControls:function(){return e4},animations:function(){return X.s},anticipate:function(){return tG.L},backIn:function(){return tH.G2},backInOut:function(){return tH.XL},backOut:function(){return tH.CG},buildTransform:function(){return tE.P},calcLength:function(){return t3.JO},checkTargetForNewValues:function(){return e1.GJ},circIn:function(){return tN.Z7},circInOut:function(){return tN.X7},circOut:function(){return tN.Bn},clamp:function(){return tw.u},color:function(){return tM.$},complex:function(){return tP.P},createBox:function(){return tZ.dO},createDomMotionComponent:function(){return u.F},createMotionComponent:function(){return tc.F},cubicBezier:function(){return tY._},delay:function(){return tx.g},distance:function(){return tb.T},distance2D:function(){return tb.y},domAnimation:function(){return Q},domMax:function(){return en},easeIn:function(){return tU.YQ},easeInOut:function(){return tU.mZ},easeOut:function(){return tU.Vv},filterProps:function(){return C.L},frameData:function(){return tL.w},inertia:function(){return tO.I},interpolate:function(){return W.s},isBrowser:function(){return t9.j},isDragActive:function(){return t6.gD},isMotionComponent:function(){return tl},isMotionValue:function(){return $.i},isValidMotionProp:function(){return e8.Z},m:function(){return a},makeUseVisualState:function(){return tj.t},mix:function(){return k.C},motion:function(){return u.E},motionValue:function(){return B.B},optimizedAppearDataAttribute:function(){return tR.M},pipe:function(){return tC.z},progress:function(){return tS.Y},px:function(){return tI.px},resolveMotionValue:function(){return eo.b},spring:function(){return tW.S},startOptimizedAppearAnimation:function(){return tz},sync:function(){return G.Z_},transform:function(){return F},unwrapMotionComponent:function(){return ts},useAnimation:function(){return e6},useAnimationControls:function(){return e3},useAnimationFrame:function(){return eH},useCycle:function(){return e9},useDeprecatedAnimatedState:function(){return tq},useDeprecatedInvertedScale:function(){return t1},useDomEvent:function(){return ti},useDragControls:function(){return to},useElementScroll:function(){return eF},useForceUpdate:function(){return h.N},useInView:function(){return tt},useInstantLayoutTransition:function(){return tp},useInstantTransition:function(){return tv},useIsPresent:function(){return e2.hO},useIsomorphicLayoutEffect:function(){return H.L},useMotionTemplate:function(){return er},useMotionValue:function(){return z},useMotionValueEvent:function(){return eJ},usePresence:function(){return e2.oO},useReducedMotion:function(){return eq},useReducedMotionConfig:function(){return eQ},useResetProjection:function(){return ty},useScroll:function(){return e_},useSpring:function(){return ei},useTime:function(){return eN},useTransform:function(){return U},useUnmountEffect:function(){return t8.z},useVelocity:function(){return ec},useViewportScroll:function(){return eG},useVisualElementContext:function(){return tD.B},useWillChange:function(){return eZ},wrap:function(){return e5}});var u=n(7312),i=n(9169),c=n(7108);let a=(0,i.D)(c.w);var l=n(1544),s=n(4394),f=n(7294),d=n(6681),m=n(5364);let p=(0,f.createContext)(null);var h=n(6337);let g=e=>!e.isLayoutDirty&&e.willUpdate(!1),v=e=>!0===e,y=e=>v(!0===e)||"id"===e,E=({children:e,id:t,inheritId:n,inherit:r=!0})=>{void 0!==n&&(r=n);let o=(0,f.useContext)(m.p),u=(0,f.useContext)(p),[i,c]=(0,h.N)(),a=(0,f.useRef)(null),l=o.id||u;null===a.current&&(y(r)&&l&&(t=t?l+"-"+t:l),a.current={id:t,group:v(r)&&o.group||function(){let e=new Set,t=new WeakMap,n=()=>e.forEach(g);return{add:r=>{e.add(r),t.set(r,r.addEventListener("willUpdate",n))},remove:r=>{e.delete(r);let o=t.get(r);o&&(o(),t.delete(r)),n()},dirty:n}}()});let s=(0,f.useMemo)(()=>({...a.current,forceRender:i}),[c]);return f.createElement(m.p.Provider,{value:s},e)},w=0,x=({children:e})=>(f.useEffect(()=>{(0,s.K)(!1,"AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")},[]),f.createElement(E,{id:(0,d.h)(()=>`asl-${w++}`)},e));var b=n(6014),C=n(8041);function S({children:e,isValidProp:t,...n}){t&&(0,C.K)(t),(n={...(0,f.useContext)(b._),...n}).isStatic=(0,d.h)(()=>n.isStatic);let r=(0,f.useMemo)(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return f.createElement(b._.Provider,{value:r},e)}var L=n(398),O=n(1879);function M({children:e,features:t,strict:n=!1}){let[,r]=(0,f.useState)(!P(t)),o=(0,f.useRef)(void 0);if(!P(t)){let{renderer:e,...n}=t;o.current=e,(0,O.K)(n)}return(0,f.useEffect)(()=>{P(t)&&t().then(({renderer:e,...t})=>{(0,O.K)(t),o.current=e,r(!0)})},[]),f.createElement(L.u.Provider,{value:{renderer:o.current,strict:n}},e)}function P(e){return"function"==typeof e}let I=(0,f.createContext)(null);var A=n(10),k=n(22);let R=(0,f.forwardRef)(function({children:e,as:t="ul",axis:n="y",onReorder:r,values:o,...i},c){let a=(0,d.h)(()=>(0,u.E)(t)),l=[],m=(0,f.useRef)(!1);return(0,s.k)(Boolean(o),"Reorder.Group must be provided a values prop"),(0,f.useEffect)(()=>{m.current=!1}),f.createElement(a,{...i,ref:c,ignoreStrict:!0},f.createElement(I.Provider,{value:{axis:n,registerItem:(e,t)=>{t&&-1===l.findIndex(t=>e===t.value)&&(l.push({value:e,layout:t[n]}),l.sort(V))},updateOrder:(e,t,n)=>{if(m.current)return;let u=function(e,t,n,r){if(!r)return e;let o=e.findIndex(e=>e.value===t);if(-1===o)return e;let u=r>0?1:-1,i=e[o+u];if(!i)return e;let c=e[o],a=i.layout,l=(0,k.C)(a.min,a.max,.5);return 1===u&&c.layout.max+n>l||-1===u&&c.layout.min+n<l?(0,A.uo)(e,o,o+u):e}(l,e,t,n);l!==u&&(m.current=!0,r(u.map(T).filter(e=>-1!==o.indexOf(e))))}}},e))});function T(e){return e.value}function V(e,t){return e.layout.min-t.layout.min}var B=n(3234);function z(e){let t=(0,d.h)(()=>(0,B.B)(e)),{isStatic:n}=(0,f.useContext)(b._);if(n){let[,n]=(0,f.useState)(e);(0,f.useEffect)(()=>t.on("change",n),[])}return t}var W=n(4606);let D=e=>"object"==typeof e&&e.mix,_=e=>D(e)?e.mix:void 0;function F(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],o=e[1+n],u=e[2+n],i=e[3+n],c=(0,W.s)(o,u,{mixer:_(u[0]),...i});return t?c(r):c}var G=n(404),H=n(8868);function N(e,t){let n=z(t()),r=()=>n.set(t());return r(),(0,H.L)(()=>{let t=()=>G.Z_.update(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),G.qY.update(r)}}),n}function U(e,t,n,r){let o="function"==typeof t?t:F(t,n,r);return Array.isArray(e)?Y(e,o):Y([e],([e])=>o(e))}function Y(e,t){let n=(0,d.h)(()=>[]);return N(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}var $=n(406);function j(e,t=0){return(0,$.i)(e)?e:z(t)}let Z=(0,f.forwardRef)(function({children:e,style:t={},value:n,as:r="li",onDrag:o,layout:i=!0,...c},a){let l=(0,d.h)(()=>(0,u.E)(r)),m=(0,f.useContext)(I),p={x:j(t.x),y:j(t.y)},h=U([p.x,p.y],([e,t])=>e||t?1:"unset"),g=(0,f.useRef)(null);(0,s.k)(Boolean(m),"Reorder.Item must be a child of Reorder.Group");let{axis:v,registerItem:y,updateOrder:E}=m;return(0,f.useEffect)(()=>{y(n,g.current)},[m]),f.createElement(l,{drag:v,...c,dragSnapToOrigin:!0,style:{...t,x:p.x,y:p.y,zIndex:h},layout:i,onDrag:(e,t)=>{let{velocity:r}=t;r[v]&&E(n,p[v].get(),r[v]),o&&o(e,t)},onLayoutMeasure:e=>{g.current=e},ref:a,ignoreStrict:!0},e)}),J={Group:R,Item:Z};var X=n(3093),K=n(3899),q=n(4307);let Q={renderer:q.b,...X.s,...K.E};var ee=n(3083),et=n(237);let en={...Q,...ee.o,...et.b};function er(e,...t){let n=e.length;return N(t.filter($.i),function(){let r="";for(let o=0;o<n;o++){r+=e[o];let n=t[o];n&&(r+=(0,$.i)(n)?n.get():n)}return r})}var eo=n(6399),eu=n(7077);function ei(e,t={}){let{isStatic:n}=(0,f.useContext)(b._),r=(0,f.useRef)(null),o=z((0,$.i)(e)?e.get():e),u=()=>{r.current&&r.current.stop()};return(0,f.useInsertionEffect)(()=>o.attach((e,i)=>n?i(e):(u(),r.current=(0,eu.y0)({keyframes:[o.get(),e],velocity:o.getVelocity(),type:"spring",...t,onUpdate:i}),o.get()),u),[JSON.stringify(t)]),(0,H.L)(()=>{if((0,$.i)(e))return e.on("change",e=>o.set(parseFloat(e)))},[o]),o}function ec(e){let t=z(e.getVelocity());return(0,f.useEffect)(()=>e.on("velocityChange",e=>{t.set(e)}),[e]),t}function ea(e,t){var n;return"string"==typeof e?t?(null!==(n=t[e])&&void 0!==n||(t[e]=document.querySelectorAll(e)),e=t[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}let el=new WeakMap;function es({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=el.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function ef(e){e.forEach(es)}let ed=new Set,em=e=>"function"==typeof e,ep=(e,t,n)=>t-e==0?1:(n-e)/(t-e),eh=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),eg=()=>({time:0,x:eh(),y:eh()}),ev={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function ey(e,t,n,r){var o;let u=n[t],{length:i,position:c}=ev[t],a=u.current,l=n.time;u.current=e["scroll"+c],u.scrollLength=e["scroll"+i]-e["client"+i],u.offset.length=0,u.offset[0]=0,u.offset[1]=u.scrollLength,u.progress=ep(0,u.scrollLength,u.current);let s=r-l;u.velocity=s>50?0:(o=u.current-a,s?o*(1e3/s):0)}let eE=e=>e,ew=(e,t,n)=>-n*e+n*t+e;function ex(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let o=ep(0,t,r);e.push(ew(n,1,o))}}function eb(e){let t=[0];return ex(t,e-1),t}let eC=e=>"number"==typeof e,eS=e=>Array.isArray(e)&&!eC(e[0]),eL=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e},eO=(e,t,n)=>Math.min(Math.max(n,e),t),eM={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},eP=e=>"string"==typeof e,eI={start:0,center:.5,end:1};function eA(e,t,n=0){let r=0;if(void 0!==eI[e]&&(e=eI[e]),eP(e)){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return eC(e)&&(r=t*e),n+r}let ek=[0,0],eR={x:0,y:0},eT=new WeakMap,eV=new WeakMap,eB=new WeakMap,ez=e=>e===document.documentElement?window:e;function eW(e,t){(0,s.K)(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let eD=()=>({scrollX:(0,B.B)(0),scrollY:(0,B.B)(0),scrollXProgress:(0,B.B)(0),scrollYProgress:(0,B.B)(0)});function e_({container:e,target:t,layoutEffect:n=!0,...u}={}){let i=(0,d.h)(eD),c=n?H.L:f.useEffect;return c(()=>(eW("target",t),eW("container",e),function(e,t={}){var{container:n=document.documentElement}=t,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}(t,["container"]);let i=eB.get(n);i||(i=new Set,eB.set(n,i));let c=eg(),a=function(e,t,n,r={}){var o,u;let i=r.axis||"y";return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!=e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{var o;ey(e,"x",o=n,t),ey(e,"y",o,t),o.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=eM.All}=n,{target:o=e,axis:u="y"}=n,i="y"===u?"height":"width",c=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){let{top:e,left:t}=r.getBBox();for(n.x+=t,n.y+=e;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(o,e):eR,a=o===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:o.clientWidth,height:o.clientHeight},l={width:e.clientWidth,height:e.clientHeight};t[u].offset.length=0;let s=!t[u].interpolate,f=r.length;for(let e=0;e<f;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:ek,u=0;return eC(e)?o=[e,e]:eP(e)&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,eI[e]?e:"0"]),eA(o[0],n,r)-eA(o[1],t)}(r[e],l[i],a[i],c[u]);s||n===t[u].interpolatorOffsets[e]||(s=!0),t[u].offset[e]=n}s&&(t[u].interpolate=function(e,t=eb(e.length),n=eE){let r=e.length,o=r-t.length;return o>0&&ex(t,o),o=>{var u;let i=0;for(;i<r-2&&!(o<t[i+1]);i++);let c=eO(0,1,ep(t[i],t[i+1],o)),a=(u=i,eS(n)?n[eL(0,n.length,u)]:n);return c=a(c),ew(e[i],e[i+1],c)}}(eb(f),t[u].offset),t[u].interpolatorOffsets=[...t[u].offset]),t[u].progress=t[u].interpolate(t[u].current)}(e,n,r)},notify:em(t)?()=>t(n):(o=t,u=n[i],o.pause(),o.forEachNative((e,{easing:t})=>{var n,r;if(e.updateDuration)t||(e.easing=eE),e.updateDuration(1);else{let o={duration:1e3};t||(o.easing="linear"),null===(r=null===(n=e.effect)||void 0===n?void 0:n.updateTiming)||void 0===r||r.call(n,o)}}),()=>{o.currentTime=u.progress})}}(n,e,c,u);if(i.add(a),!eT.has(n)){let e=()=>{let e=performance.now();for(let e of i)e.measure();for(let t of i)t.update(e);for(let e of i)e.notify()};eT.set(n,e);let t=ez(n);window.addEventListener("resize",e,{passive:!0}),n!==document.documentElement&&eV.set(n,em(n)?(ed.add(n),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};ed.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{ed.delete(n),!ed.size&&o&&(o=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(ef));let n=ea(e);return n.forEach(e=>{let n=el.get(e);n||(n=new Set,el.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=el.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(n,e)),t.addEventListener("scroll",e,{passive:!0})}let l=eT.get(n),s=requestAnimationFrame(l);return()=>{var t;"function"!=typeof e&&e.stop(),cancelAnimationFrame(s);let r=eB.get(n);if(!r||(r.delete(a),r.size))return;let o=eT.get(n);eT.delete(n),o&&(ez(n).removeEventListener("scroll",o),null===(t=eV.get(n))||void 0===t||t(),window.removeEventListener("resize",o))}}(({x:e,y:t})=>{i.scrollX.set(e.current),i.scrollXProgress.set(e.progress),i.scrollY.set(t.current),i.scrollYProgress.set(t.progress)},{...u,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[]),i}function eF(e){return e_({container:e})}function eG(){return e_()}function eH(e){let t=(0,f.useRef)(0),{isStatic:n}=(0,f.useContext)(b._);(0,f.useEffect)(()=>{if(n)return;let r=({timestamp:n,delta:r})=>{t.current||(t.current=n),e(n-t.current,r)};return G.Z_.update(r,!0),()=>G.qY.update(r)},[e])}function eN(){let e=z(0);return eH(t=>e.set(t)),e}var eU=n(7630),eY=n(4714),e$=n(3193);class ej extends B.H{constructor(){super(...arguments),this.members=[],this.transforms=new Set}add(e){let t;eY.G.has(e)?(this.transforms.add(e),t="transform"):e.startsWith("origin")||(0,eU.o)(e)||"willChange"===e||(t=(0,e$.D)(e)),t&&((0,A.y4)(this.members,t),this.update())}remove(e){eY.G.has(e)?(this.transforms.delete(e),this.transforms.size||(0,A.cl)(this.members,"transform")):(0,A.cl)(this.members,(0,e$.D)(e)),this.update()}update(){this.set(this.members.length?this.members.join(", "):"auto")}}function eZ(){return(0,d.h)(()=>new ej("auto"))}function eJ(e,t,n){(0,f.useInsertionEffect)(()=>e.on(t,n),[e,t,n])}var eX=n(270),eK=n(9609);function eq(){eK.O.current||(0,eX.A)();let[e]=(0,f.useState)(eK.n.current);return e}function eQ(){let e=eq(),{reducedMotion:t}=(0,f.useContext)(b._);return"never"!==t&&("always"===t||e)}var e0=n(7107),e1=n(5759);function e4(){let e=!1,t=new Set,n={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(n,r){(0,s.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let o=[];return t.forEach(e=>{o.push((0,e0.d5)(e,n,{transitionOverride:r}))}),Promise.all(o)},set:n=>((0,s.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{(0,e1.gg)(e,n)})),stop(){t.forEach(e=>{(0,e0.p_)(e)})},mount:()=>(e=!0,()=>{e=!1,n.stop()})};return n}function e3(){let e=(0,d.h)(e4);return(0,H.L)(e.mount,[]),e}let e6=e3;var e7=n(2064);let e5=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e};function e9(...e){let t=(0,f.useRef)(0),[n,r]=(0,f.useState)(e[t.current]),o=(0,f.useCallback)(n=>{t.current="number"!=typeof n?e5(0,e.length,t.current+1):n,r(e[t.current])},[e.length,...e]);return[n,o]}var e8=n(9630),e2=n(5947);let te={any:0,all:1};function tt(e,{root:t,margin:n,amount:r,once:o=!1}={}){let[u,i]=(0,f.useState)(!1);return(0,f.useEffect)(()=>{if(!e.current||o&&u)return;let c=()=>(i(!0),o?void 0:()=>i(!1)),a={root:t&&t.current||void 0,margin:n,amount:"some"===r?"any":r};return function(e,t,{root:n,margin:r,amount:o="any"}={}){if("undefined"==typeof IntersectionObserver)return()=>{};let u=ea(e),i=new WeakMap,c=e=>{e.forEach(e=>{let n=i.get(e.target);if(e.isIntersecting!==Boolean(n)){if(e.isIntersecting){let n=t(e);em(n)?i.set(e.target,n):a.unobserve(e.target)}else n&&(n(e),i.delete(e.target))}})},a=new IntersectionObserver(c,{root:n,rootMargin:r,threshold:"number"==typeof o?o:te[o]});return u.forEach(e=>a.observe(e)),()=>a.disconnect()}(e.current,c,a)},[t,e,n,o]),u}class tn{constructor(){this.componentControls=new Set}subscribe(e){return this.componentControls.add(e),()=>this.componentControls.delete(e)}start(e,t){this.componentControls.forEach(n=>{n.start(e.nativeEvent||e,t)})}}let tr=()=>new tn;function to(){return(0,d.h)(tr)}var tu=n(8456);function ti(e,t,n,r){(0,f.useEffect)(()=>{let o=e.current;if(n&&o)return(0,tu.E)(o,t,n,r)},[e,t,n,r])}var tc=n(9012),ta=n(4839);function tl(e){return null!==e&&"object"==typeof e&&ta.a in e}function ts(e){if(tl(e))return e[ta.a]}var tf=n(2263),td=n(4561),tm=n(7046);function tp(){return th}function th(e){tm.J.current&&(tm.J.current.isUpdating=!1,tm.J.current.blockUpdate(),e&&e())}var tg=n(8627);function tv(){let[e,t]=(0,h.N)();return(0,f.useEffect)(()=>{G.Z_.postRender(()=>G.Z_.postRender(()=>tg.c.current=!1))},[t]),t=>{th(()=>{tg.c.current=!0,e(),t()})}}function ty(){let e=f.useCallback(()=>{let e=tm.J.current;e&&e.resetTree()},[]);return e}var tE=n(8439),tw=n(4169),tx=n(3378),tb=n(8178),tC=n(3624),tS=n(3967),tL=n(7367),tO=n(7749),tM=n(5385),tP=n(1550),tI=n(6190);let tA=(e,t)=>`${e}: ${t}`;var tk=n(4733),tR=n(3939);let tT=new Map;function tV(e,t,n,r){let o=tA(e,eY.G.has(t)?"transform":t),u=tT.get(o);if(!u)return 0;let{animation:i,startTime:c}=u,a=()=>{tT.delete(o);try{i.cancel()}catch(e){}};if(null===c)return a(),0;{let e=performance.now();return r.update(()=>{n.animation&&(n.animation.currentTime=performance.now()-e)}),r.render(a),e-c||0}}var tB=n(1662);function tz(e,t,n,r,o){let u=e.dataset[tR.t];if(!u)return;window.HandoffAppearAnimations=tV;let i=tA(u,t),c=(0,tk.p)(e,t,[n[0],n[0]],{duration:1e4,ease:"linear"});tT.set(i,{animation:c,startTime:null});let a=()=>{c.cancel();let u=(0,tk.p)(e,t,n,r);document.timeline&&(u.startTime=document.timeline.currentTime),tT.set(i,{animation:u,startTime:performance.now()}),o&&o(u)};c.ready?c.ready.then(a).catch(tB.Z):a()}var tW=n(3511),tD=n(4451),t_=n(240),tF=n(1705),tG=n(1749),tH=n(6808),tN=n(7255),tU=n(6260),tY=n(7156),t$=n(1419),tj=n(5180),tZ=n(1512);let tJ=()=>({});class tX extends tf.l{build(){}measureInstanceViewportBox(){return(0,tZ.dO)()}resetTransform(){}restoreTransform(){}removeValueFromRenderState(){}renderInstance(){}scrapeMotionValuesFromProps(){return tJ()}getBaseTargetFromProps(){}readValueFromInstance(e,t,n){return n.initialState[t]||0}sortInstanceNodePosition(){return 0}makeTargetAnimatableFromInstance({transition:e,transitionEnd:t,...n}){let r=(0,e1.P$)(n,e||{},this);return(0,e1.GJ)(this,n,r),{transition:e,transitionEnd:t,...n}}}let tK=(0,tj.t)({scrapeMotionValuesFromProps:tJ,createRenderState:tJ});function tq(e){let[t,n]=(0,f.useState)(e),r=tK({},!1),o=(0,d.h)(()=>new tX({props:{},visualState:r,presenceContext:null},{initialState:e}));(0,f.useEffect)(()=>(o.mount({}),()=>o.unmount()),[o]),(0,f.useEffect)(()=>{o.update({onUpdate:e=>{n({...e})}},null)},[n,o]);let u=(0,d.h)(()=>e=>(0,e0.d5)(o,e));return[t,u]}let tQ=e=>e>.001?1/e:1e5,t0=!1;function t1(e){let t=z(1),n=z(1),r=(0,tD.B)();(0,s.k)(!!(e||r),"If no scale values are provided, useInvertedScale must be used within a child of another motion component."),(0,s.K)(t0,"useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."),t0=!0,e?(t=e.scaleX||t,n=e.scaleY||n):r&&(t=r.getValue("scaleX",1),n=r.getValue("scaleY",1));let o=U(t,tQ),u=U(n,tQ);return{scaleX:o,scaleY:u}}var t4=n(3233),t3=n(6645),t6=n(7544),t7=n(486),t5=n(8148),t9=n(1741),t8=n(5411)},6337:function(e,t,n){n.d(t,{N:function(){return i}});var r=n(404),o=n(7294),u=n(4454);function i(){let e=(0,u.t)(),[t,n]=(0,o.useState)(0),i=(0,o.useCallback)(()=>{e.current&&n(t+1)},[t]),c=(0,o.useCallback)(()=>r.Z_.postRender(i),[i]);return[c,t]}},4454:function(e,t,n){n.d(t,{t:function(){return u}});var r=n(7294),o=n(8868);function u(){let e=(0,r.useRef)(!1);return(0,o.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},5411:function(e,t,n){n.d(t,{z:function(){return o}});var r=n(7294);function o(e){return(0,r.useEffect)(()=>()=>e(),[])}}}]);