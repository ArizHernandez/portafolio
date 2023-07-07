import{c as A,g as d,r as O,t as b,R as I}from"./index-d4f38c36.js";var S={exports:{}},N={exports:{}};(function(t,e){(function(r,o){t.exports=o()})(A,function(){var r=typeof Promise=="function",o=typeof self=="object"?self:A,i=typeof Symbol<"u",s=typeof Map<"u",n=typeof Set<"u",u=typeof WeakMap<"u",f=typeof WeakSet<"u",m=typeof DataView<"u",h=i&&typeof Symbol.iterator<"u",x=i&&typeof Symbol.toStringTag<"u",B=n&&typeof Set.prototype.entries=="function",_=s&&typeof Map.prototype.entries=="function",G=B&&Object.getPrototypeOf(new Set().entries()),Q=_&&Object.getPrototypeOf(new Map().entries()),T=h&&typeof Array.prototype[Symbol.iterator]=="function",Z=T&&Object.getPrototypeOf([][Symbol.iterator]()),P=h&&typeof String.prototype[Symbol.iterator]=="function",J=P&&Object.getPrototypeOf(""[Symbol.iterator]()),Y=8,$=-1;function X(a){var M=typeof a;if(M!=="object")return M;if(a===null)return"null";if(a===o)return"global";if(Array.isArray(a)&&(x===!1||!(Symbol.toStringTag in a)))return"Array";if(typeof window=="object"&&window!==null){if(typeof window.location=="object"&&a===window.location)return"Location";if(typeof window.document=="object"&&a===window.document)return"Document";if(typeof window.navigator=="object"){if(typeof window.navigator.mimeTypes=="object"&&a===window.navigator.mimeTypes)return"MimeTypeArray";if(typeof window.navigator.plugins=="object"&&a===window.navigator.plugins)return"PluginArray"}if((typeof window.HTMLElement=="function"||typeof window.HTMLElement=="object")&&a instanceof window.HTMLElement){if(a.tagName==="BLOCKQUOTE")return"HTMLQuoteElement";if(a.tagName==="TD")return"HTMLTableDataCellElement";if(a.tagName==="TH")return"HTMLTableHeaderCellElement"}}var D=x&&a[Symbol.toStringTag];if(typeof D=="string")return D;var l=Object.getPrototypeOf(a);return l===RegExp.prototype?"RegExp":l===Date.prototype?"Date":r&&l===Promise.prototype?"Promise":n&&l===Set.prototype?"Set":s&&l===Map.prototype?"Map":f&&l===WeakSet.prototype?"WeakSet":u&&l===WeakMap.prototype?"WeakMap":m&&l===DataView.prototype?"DataView":s&&l===Q?"Map Iterator":n&&l===G?"Set Iterator":T&&l===Z?"Array Iterator":P&&l===J?"String Iterator":l===null?"Object":Object.prototype.toString.call(a).slice(Y,$)}return X})})(N);var H=N.exports;/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */var k=H;function R(){this._key="chai/deep-eql__"+Math.random()+Date.now()}R.prototype={get:function(e){return e[this._key]},set:function(e,r){Object.isExtensible(e)&&Object.defineProperty(e,this._key,{value:r,configurable:!0})}};var g=typeof WeakMap=="function"?WeakMap:R;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function q(t,e,r){if(!r||y(t)||y(e))return null;var o=r.get(t);if(o){var i=o.get(e);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function p(t,e,r,o){if(!(!r||y(t)||y(e))){var i=r.get(t);i?i.set(e,o):(i=new g,i.set(e,o),r.set(t,i))}}/*!
 * Primary Export
 */S.exports=v;S.exports.MemoizeMap=g;function v(t,e,r){if(r&&r.comparator)return z(t,e,r);var o=F(t,e);return o!==null?o:z(t,e,r)}function F(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e?!0:y(t)||y(e)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function z(t,e,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new g;var o=r&&r.comparator,i=q(t,e,r.memoize);if(i!==null)return i;var s=q(e,t,r.memoize);if(s!==null)return s;if(o){var n=o(t,e);if(n===!1||n===!0)return p(t,e,r.memoize,n),n;var u=F(t,e);if(u!==null)return u}var f=k(t);if(f!==k(e))return p(t,e,r.memoize,!1),!1;p(t,e,r.memoize,!0);var m=ee(t,e,f,r);return p(t,e,r.memoize,m),m}function ee(t,e,r,o){switch(r){case"String":case"Number":case"Boolean":case"Date":return v(t.valueOf(),e.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return t===e;case"Error":return K(t,e,["name","message","code"],o);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return c(t,e,o);case"RegExp":return te(t,e);case"Generator":return re(t,e,o);case"DataView":return c(new Uint8Array(t.buffer),new Uint8Array(e.buffer),o);case"ArrayBuffer":return c(new Uint8Array(t),new Uint8Array(e),o);case"Set":return U(t,e,o);case"Map":return U(t,e,o);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return t.equals(e);case"Temporal.Duration":return t.total("nanoseconds")===e.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return t.toString()===e.toString();default:return ie(t,e,o)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function te(t,e){return t.toString()===e.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function U(t,e,r){if(t.size!==e.size)return!1;if(t.size===0)return!0;var o=[],i=[];return t.forEach(function(n,u){o.push([n,u])}),e.forEach(function(n,u){i.push([n,u])}),c(o.sort(),i.sort(),r)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function c(t,e,r){var o=t.length;if(o!==e.length)return!1;if(o===0)return!0;for(var i=-1;++i<o;)if(v(t[i],e[i],r)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function re(t,e,r){return c(E(t),E(e),r)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function oe(t){return typeof Symbol<"u"&&typeof t=="object"&&typeof Symbol.iterator<"u"&&typeof t[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function j(t){if(oe(t))try{return E(t[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function E(t){for(var e=t.next(),r=[e.value];e.done===!1;)e=t.next(),r.push(e.value);return r}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function L(t){var e=[];for(var r in t)e.push(r);return e}function W(t){for(var e=[],r=Object.getOwnPropertySymbols(t),o=0;o<r.length;o+=1){var i=r[o];Object.getOwnPropertyDescriptor(t,i).enumerable&&e.push(i)}return e}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function K(t,e,r,o){var i=r.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(v(t[r[s]],e[r[s]],o)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function ie(t,e,r){var o=L(t),i=L(e),s=W(t),n=W(e);if(o=o.concat(s),i=i.concat(n),o.length&&o.length===i.length)return c(C(o).sort(),C(i).sort())===!1?!1:K(t,e,o,r);var u=j(t),f=j(e);return u.length&&u.length===f.length?(u.sort(),f.sort(),c(u,f,r)):o.length===0&&u.length===0&&i.length===0&&f.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function y(t){return t===null||typeof t!="object"}function C(t){return t.map(function(r){return typeof r=="symbol"?r.toString():r})}var se=S.exports;const ae=d(se),V="tsparticles";class w extends O.Component{constructor(e){super(e),this.state={init:!1,library:void 0}}destroy(){this.state.library&&(this.state.library.destroy(),this.setState({library:void 0}))}shouldComponentUpdate(e){return!ae(e,this.props)}componentDidUpdate(){this.refresh()}forceUpdate(){this.refresh().then(()=>{super.forceUpdate()})}componentDidMount(){(async()=>(this.props.init&&await this.props.init(b),this.setState({init:!0},async()=>{await this.loadParticles()})))()}componentWillUnmount(){this.destroy()}render(){const{width:e,height:r,className:o,canvasClassName:i,id:s}=this.props;return I.createElement("div",{className:o,id:s},I.createElement("canvas",{className:i,style:{...this.props.style,width:e,height:r}}))}async refresh(){this.destroy(),await this.loadParticles()}async loadParticles(){if(!this.state.init)return;const e=async i=>{this.props.container&&(this.props.container.current=i),this.setState({library:i}),this.props.loaded&&await this.props.loaded(i)},r=this.props.id??w.defaultProps.id??V,o=this.props.url?await b.loadJSON(r,this.props.url):await b.load(r,this.props.params??this.props.options);await e(o)}}w.defaultProps={width:"100%",height:"100%",options:{},style:{},url:void 0,id:V};const ue=w;export{ue as Particles,ue as default};
