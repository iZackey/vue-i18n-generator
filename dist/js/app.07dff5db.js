(function(e){function t(t){for(var r,l,o=t[0],u=t[1],c=t[2],f=0,p=[];f<o.length;f++)l=o[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("5c96"),i=n.n(a),l=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticStyle:{height:"100%"}},[n("el-header",{attrs:{height:"auto"}},[n("el-dialog",{attrs:{title:"帮助文档",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("p",[e._v("新文档就先新增根节点再添加语言")]),n("p",[e._v("已有文档就点导入或者拖到下方文本框")]),n("p",[e._v("鼠标移动到路径上，会出现“复制”按钮，方便复制路径")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)]),n("el-row",{staticClass:"row"},[n("el-col",{attrs:{span:8}},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleAppendRoot}},[e._v("添加根节点Key")]),n("el-button",{attrs:{type:"success"},on:{click:e.addLanguage}},[e._v("添加 语言")])],1),n("el-col",{attrs:{span:8}},[n("el-input",{model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}},[n("template",{slot:"prepend"},[e._v("文件名：")])],2)],1),n("el-col",{staticClass:"text-right",attrs:{span:8}},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleImport}},[e._v("导入")]),n("el-button",{on:{click:e.handleExport}},[e._v("导出")]),n("el-button",{attrs:{type:"info"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("查看帮助")])],1)],1)],1),n("el-main",[n("el-table",{ref:"singleTable",attrs:{height:"400","highlight-current-row":"",data:e.list,"row-key":"fullPath"},on:{"current-change":e.handleCurrentChange}},[n("el-table-column",{attrs:{type:"index"}}),n("el-table-column",{attrs:{prop:"key",label:"key"}}),n("el-table-column",{attrs:{prop:"fullPath",label:"路径"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"cell-fullPath"},[n("span",[e._v(e._s(t.row.fullPath))]),n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.copyText(t.row.fullPath)}}},[e._v("复制")])],1)]}}])}),e._l(e.languages,(function(t){return n("el-table-column",{key:t,attrs:{label:t},scopedSlots:e._u([{key:"default",fn:function(r){return[0===r.row.children.length?n("el-input",{class:{"is-invalid":!r.row.languages[t]},model:{value:r.row.languages[t],callback:function(n){e.$set(r.row.languages,t,n)},expression:"scope.row.languages[lang]"}}):e._e()]}}],null,!0)})})),n("el-table-column",{attrs:{label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.handleRemove(t.row)}}},[e._v("移除")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return e.handleAppend(t.row)}}},[e._v("添加子节点")])]}}])})],2),n("div",[n("p",[e._v("拖拽文件到文本框，可导入现有数据")]),n("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入内容",value:e.formatText},nativeOn:{drop:function(t){return t.preventDefault(),e.handleDrop(t)}}})],1)],1)],1)}),o=[],u=(n("8615"),n("456d"),n("7f7f"),n("ac6a"),n("7618")),c=n("d225"),s=n("b0b4");n("28a5");function f(e,t){var n=t.split("."),r=e;do{r=r[n.shift()]}while(n.length);return r}var p=function(){function e(t,n,r){var a=this;Object(c["a"])(this,e),this.key=t,this.children=[],"object"===Object(u["a"])(n)&&Object.keys(n).forEach((function(t){a.append(new e(t,n[t],r))})),this.languages={},r&&setTimeout((function(){a.languages=Object.keys(r).reduce((function(e,t){var n=r[t];return e[t]=f(n,a.fullPath),e}),{})}),0)}return Object(s["a"])(e,[{key:"getLang",value:function(e){var t={};return this.children.length?t[this.key]=this.children.reduce((function(t,n){return Object.assign(t,n.getLang(e))}),{}):t[this.key]=this.languages[e],t}},{key:"append",value:function(e){e.parent=this,this.children.push(e)}},{key:"remove",value:function(){var e=this;this.parent.children=this.parent.children.filter((function(t){return t.key!==e.key})),0===this.parent.children.length&&(this.parent.languages={})}},{key:"fullPath",get:function(){return this.parent?"".concat(this.parent.fullPath,".").concat(this.key):this.key}}]),e}(),d={name:"App",components:{},data:function(){return{filename:"message.json",dialogVisible:!1,list:[],languages:[],currentRow:null}},computed:{formatText:function(){var e=this,t={};return this.languages.forEach((function(n){t[n]=e.list.reduce((function(e,t){var r=t.getLang(n);return Object.assign(e,r)}),{})})),JSON.stringify(t)}},created:function(){},methods:{addKey:function(){var e=this;this.$prompt("","请输入Key").then((function(t){var n=t.value;if(n){var r=new p(n);e.currentRow?e.currentRow.append(r):e.list.push(r)}}))},addLanguage:function(){var e=this;this.$prompt("","请输入语言包名称").then((function(t){var n=t.value;n&&e.languages.push(n)}))},handleCurrentChange:function(e){this.currentRow=e},handleImport:function(){var e=this,t=document.createElement("input");t.type="file",t.accept="application/json",t.onchange=function(t){var n=t.target.files;e.importByFile(n)},t.click()},handleExport:function(){var e=new Blob([this.formatText]),t=document.createElement("a");t.download=this.filename,t.href=window.URL.createObjectURL(e),t.click()},handleDrop:function(e){var t=e.dataTransfer.files;this.importByFile(t)},importByFile:function(e){var t=this;if(1===e.length){var n=e[0];this.filename=n.name;var r=new FileReader;r.onload=function(e){var n=JSON.parse(e.target.result);t.languages=Object.keys(n);var r=Object.values(n),a=r[0];t.list=Object.keys(a).map((function(e){return new p(e,a[e],n)}))},r.readAsText(n)}},setCurrent:function(e){this.$refs.singleTable.setCurrentRow(e)},copyText:function(e){var t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.top=0,t.style.opacity=0,document.body.appendChild(t),t.select(),document.execCommand("copy")&&this.$message("文字 ".concat(e," 已复制")),document.body.removeChild(t)},handleRemove:function(e){e.parent?e.remove():this.list=this.list.filter((function(t){return t.key!==e.key}))},handleAppend:function(e){this.setCurrent(e),this.addKey()},handleAppendRoot:function(){this.setCurrent(null),this.addKey()}}},h=d,g=(n("034f"),n("5c64"),n("2877")),v=Object(g["a"])(h,l,o,!1,null,null,null),y=v.exports;r["default"].config.productionTip=!1,r["default"].use(i.a),new r["default"]({render:function(e){return e(y)}}).$mount("#app")},"5c64":function(e,t,n){"use strict";var r=n("6ee5"),a=n.n(r);a.a},"64a9":function(e,t,n){},"6ee5":function(e,t,n){}});
//# sourceMappingURL=app.07dff5db.js.map