(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{206:function(t,s,a){"use strict";a.r(s);var l={data:()=>({action1:[{theme:"error",text:"右按钮1",onClick:()=>console.log("右按钮1")},{theme:"success",text:"右按钮2",onClick:()=>console.log("右按钮2")}]}),methods:{handleClose(t){console.log(t)},handleOpen(t){console.log(t)}}},n=a(1),e=Object(n.a)(l,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-swipe-action",{attrs:{autoClose:"",right:t.action1},on:{close:t.handleClose,open:t.handleOpen}},[a("za-cell",[t._v("左滑看看（自动关闭）")])],1),t._v(" "),a("za-swipe-action",{attrs:{left:t.action1},on:{close:t.handleClose,open:t.handleOpen}},[a("za-cell",[t._v("右滑看看")])],1),t._v(" "),a("za-swipe-action",{attrs:{left:t.action1,right:t.action1},on:{close:t.handleClose,open:t.handleOpen}},[a("za-cell",[t._v("左右都能滑动")])],1)],1)])]),t._m(1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("基本\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[t._v("滑动操作 SwipeAction")]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("基本")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-action")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("autoClose")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('""')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("close")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleClose"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("open")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOpen"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":right")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"action1"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("左滑看看（自动关闭）"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-action")]),t._v(">")]),t._v("\n\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-action")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("close")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleClose"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("open")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOpen"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":left")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"action1"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("右滑看看"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-action")]),t._v(">")]),t._v("\n\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-action")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("close")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleClose"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("open")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOpen"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":left")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"action1"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":right")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"action1"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("左右都能滑动"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-action")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("h3",[t._v("Vue Script")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("<script name="),a("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("action1")]),t._v(":[\n        {\n          "),a("span",{staticClass:"hljs-attr"},[t._v("theme")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'error'")]),t._v(",\n          "),a("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'右按钮1'")]),t._v(",\n          "),a("span",{staticClass:"hljs-attr"},[t._v("onClick")]),t._v(": "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[t._v("()")]),t._v(" =>")]),t._v(" "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("'右按钮1'")]),t._v("),\n        },\n        {\n          "),a("span",{staticClass:"hljs-attr"},[t._v("theme")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'success'")]),t._v(",\n          "),a("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'右按钮2'")]),t._v(",\n          "),a("span",{staticClass:"hljs-attr"},[t._v("onClick")]),t._v(": "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[t._v("()")]),t._v(" =>")]),t._v(" "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("'右按钮2'")]),t._v("),\n        },\n      ]\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    handleClose(reason) {\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(reason);\n    },\n    handleOpen(reason) {\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(reason);\n    },\n  },\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])]),t._v("\n")])]),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("SwipeAction Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prefixCls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("za-swipeaction")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类名前缀")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("left")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("arrayOf(object)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[ ]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object: { theme, text, onClick }")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("左侧按钮组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("right")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("arrayOf(object)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[ ]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object: { theme, text, onClick }")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("右侧按钮组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("autoClose")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击按钮是否自动关闭")])])])]),t._v(" "),a("h4",[t._v("SwipeAction Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("open")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("打开时的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("direaction, 可能值left, right")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("close")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("关闭时的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("reason, 可能值retract, touchaway")])])])])])}],!1,null,null,null);s.default=e.exports},323:function(t,s,a){var l={"./2.0.0/swipeAction.md":206};function n(t){var s=e(t);return a(s)}function e(t){var s=l[t];if(!(s+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s}n.keys=function(){return Object.keys(l)},n.resolve=e,t.exports=n,n.id=323}}]);
//# sourceMappingURL=103.1ee2aceeb56d12a131ac.js.map