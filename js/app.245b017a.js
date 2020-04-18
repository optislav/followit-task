(function(t){function e(e){for(var o,c,i=e[0],l=e[1],s=e[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},r=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/followit-task/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"22b4":function(t,e,n){"use strict";var o=n("7e27"),a=n.n(o);a.a},5341:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Editor")],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"col"},[n("Panel",{attrs:{heading:"Edit text"}},[n("p",{staticClass:"text",attrs:{spellcheck:"false"}},t._l(t.textElements,(function(e,o){return n("TextElement",{key:t.makeKey(o,e),attrs:{config:e,name:String(o)},on:{input:t.handleTextElementInput},nativeOn:{click:function(e){return t.selectTextElement(e)}}})})),1)]),n("div",{staticClass:"json"},[n("Panel",{attrs:{heading:"Export JSON"}},[n("pre",[t._v(t._s(t.json))]),n("Button",{on:{click:t.copyJSON}},[t._v("Copy JSON")])],1)],1)],1),n("div",{staticClass:"col"},[n("Panel",{attrs:{heading:"Change styles"}},[n("Toolbar",{attrs:{disabled:t.isToolbarDisabled},on:{"change-bg":t.changeBackground,"change-color":t.changeColor,"change-font":t.changeFont}})],1)],1)])},i=[],l=(n("99af"),n("d81d"),n("b0c0"),n("5530")),s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text-element",style:{color:t.config.color,fontSize:t.config.fontSize,backgroundColor:t.config.backgroundColor},attrs:{contenteditable:"true","data-name":t.name},domProps:{innerHTML:t._s(t.config.text)},on:{input:t.handleInput}})}],f={props:{config:{type:Object,required:!0},name:{type:String,required:!0}},methods:{handleInput:function(t){this.$emit("input",t.target.innerHTML,t.target.dataset.name)}}},d=f,p=(n("22b4"),n("2877")),h=Object(p["a"])(d,s,u,!1,null,"0b8b7505",null),m=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toolbar"},[n("div",{staticClass:"pickers"},[n("label",{staticClass:"picker"},[n("div",[t._v("Pick color")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"color",name:"color"},domProps:{value:t.color},on:{input:function(e){e.target.composing||(t.color=e.target.value)}}})]),n("label",{staticClass:"picker"},[n("div",[t._v("Choose font size")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],attrs:{type:"number",name:"font"},domProps:{value:t.fontSize},on:{input:function(e){e.target.composing||(t.fontSize=e.target.value)}}})])]),n("div",{staticClass:"buttons"},[n("Button",{attrs:{disabled:t.disabled},on:{click:t.changeColor}},[t._v(" Change color ")]),n("Button",{attrs:{disabled:t.disabled},on:{click:t.changeBackground}},[t._v(" Change background ")]),n("Button",{attrs:{disabled:t.disabled},on:{click:t.changeFontSize}},[t._v(" Change font ")])],1)])},b=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",attrs:{type:"button",role:"button"},on:{click:function(e){return t.$emit("click",e)}}},[t._t("default")],2)},x=[],y={},C=y,_=(n("955f"),Object(p["a"])(C,v,x,!1,null,"ed119240",null)),S=_.exports,k={components:{Button:S},data:function(){return{fontSize:"14",color:"00ff00"}},props:{disabled:{type:Boolean,required:!0}},methods:{changeFontSize:function(){this.$emit("change-font",this.fontSize)},changeBackground:function(){this.$emit("change-bg",this.color)},changeColor:function(){this.$emit("change-color",this.color)}}},E=k,O=(n("f9ec"),Object(p["a"])(E,g,b,!1,null,"497c1286",null)),j=O.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("h2",{staticClass:"heading"},[t._v(t._s(t.heading))]),t._t("default")],2)},z=[],P={props:{heading:{type:String,required:!0}}},$=P,w=(n("f2cc"),Object(p["a"])($,T,z,!1,null,"e61222a4",null)),B=w.exports,N=[{text:"Hi My lovely",fontSize:"25px",color:"#ff0000",backgroundColor:"#ffffff"},{text:"little",fontSize:"25px",color:"#ff0000",backgroundColor:"#ffffff"},{text:"Ponny",fontSize:"25px",color:"#ff0000",backgroundColor:"#ffffff"}],I=function(t){var e=document.createElement("textarea");document.body.appendChild(e),e.value=t,e.select(),document.execCommand("copy"),document.body.removeChild(e)},J=(n("4160"),n("159b"),function(t){var e=[],n={},o=t.map((function(t){return Object(l["a"])({},t)}));return o.forEach((function(t){if(t.backgroundColor===n.backgroundColor&&t.fontSize===n.fontSize&&t.color===n.color){var o=e[e.length-1];o.text+=" ".concat(t.text)}else e.push(t);n=t})),e}),M={data:function(){return{textElements:N.map((function(t){return Object(l["a"])({},t)})),selectedInputName:null}},computed:{isToolbarDisabled:function(){return!this.selectedInputName},json:function(){var t=J(this.textElements);return JSON.stringify(t,null,2)}},components:{TextElement:m,Toolbar:j,Button:S,Panel:B},methods:{makeKey:function(t,e){var n=e.fontSize,o=e.backgroundColor,a=e.color;return"".concat(t).concat(n).concat(o).concat(a)},handleTextElementInput:function(t,e){this.$set(this.textElements[e],"text",t)},selectTextElement:function(t){this.selectedInputName=t.target.dataset.name},changeTextElementStyle:function(t,e){var n=this.selectedInputName,o=this.textElements;this.$set(o[n],t,e)},changeBackground:function(t){this.changeTextElementStyle("backgroundColor",t)},changeColor:function(t){this.changeTextElementStyle("color",t)},changeFont:function(t){this.changeTextElementStyle("fontSize","".concat(t,"px"))},copyJSON:function(){I(this.json)}}},q=M,F=(n("fc2a"),Object(p["a"])(q,c,i,!1,null,"44db3e68",null)),H=F.exports,D={name:"App",components:{Editor:H}},K=D,L=(n("5c0b"),Object(p["a"])(K,a,r,!1,null,null,null)),A=L.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"6a62":function(t,e,n){},"7e27":function(t,e,n){},"955f":function(t,e,n){"use strict";var o=n("f1fa"),a=n.n(o);a.a},"990b":function(t,e,n){},"9c0c":function(t,e,n){},f1fa:function(t,e,n){},f2cc:function(t,e,n){"use strict";var o=n("990b"),a=n.n(o);a.a},f9ec:function(t,e,n){"use strict";var o=n("5341"),a=n.n(o);a.a},fc2a:function(t,e,n){"use strict";var o=n("6a62"),a=n.n(o);a.a}});
//# sourceMappingURL=app.245b017a.js.map