(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{623:function(t,e,n){},624:function(t,e,n){},625:function(t,e,n){"use strict";var a=n(623);n.n(a).a},626:function(t,e,n){"use strict";var a={data:()=>({}),components:{},created(){},mounted(){},methods:{}},s=(n(625),n(0)),i=Object(s.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"main-container"},[this._t("default")],2)])},[],!1,null,"4d605d3f",null);e.a=i.exports},627:function(t,e,n){"use strict";var a=n(624);n.n(a).a},628:function(t,e,n){"use strict";var a={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}},s=(n(627),n(0)),i=Object(s.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"simulator"},[e("iframe",{staticStyle:{width:"375px",height:"667px"},attrs:{src:this.componentPath,title:"simulator",frameBorder:"0"}})])},[],!1,null,"1196af06",null);e.a=i.exports},759:function(t,e,n){"use strict";n.r(e);var a=n(2),s=n(628),i={components:{Container:n(626).a,Simulator:s.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/",""),a.default.component("Demo",function(e,a){n.e(84).then(function(){var a=[n(726)(`./${t}/message.md`)];e.apply(null,a)}.bind(this)).catch(n.oe)})}},r=n(0),o=Object(r.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("Container",[e("Demo"),this._v(" "),e("Simulator",{attrs:{url:this.path}})],1)},[],!1,null,null,null);e.default=o.exports}}]);