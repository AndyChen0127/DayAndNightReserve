(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"toThousandFilter",(function(){return Ce})),a.d(n,"toDateFormat",(function(){return Te})),a.d(n,"subStr",(function(){return Oe})),a.d(n,"stringToDate",(function(){return Se}));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("d3b7"),a("159b"),a("b64b"),a("4de4");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("router-link",{attrs:{to:"/"}},[a("v-app-bar-title",{staticClass:"ml-3 font-weight-bold black--text"},[e._v("預約點餐")])],1)],1),a("v-main",[a("snackbar"),a("router-view")],1),a("v-footer",{attrs:{color:"primary",padless:""}},[a("v-row",{attrs:{justify:"center","no-gutters":""}},[a("v-col",{staticClass:"primary lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[a("v-icon",{attrs:{dark:"",small:""}},[e._v("mdi-copyright")]),e._v(" "),a("strong",[e._v("Draw Coffee All Rights Reserved")])],1)],1)],1),a("overlay")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-snackbar",{attrs:{top:"",right:"",color:"warning",timeout:-1},scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[a("v-btn",e._b({attrs:{fab:"",text:"",small:""},on:{click:e.close}},"v-btn",n,!1),[a("v-icon",{attrs:{dark:""}},[e._v("mdi-close")])],1)]}}]),model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-alert-circle-outline")]),e._v(" "+e._s(this.$store.state.snackbar.msg)+" ")],1)},c=[],l={computed:{visible:function(){return this.$store.state.snackbar.visible}},methods:{close:function(){this.$store.commit("snackbar/ClOSE_SNACKBAR")}}},d=l,u=a("2877"),f=a("6544"),p=a.n(f),v=a("8336"),b=a("132d"),m=a("2db4"),h=Object(u["a"])(d,i,c,!1,null,null,null),j=h.exports;p()(h,{VBtn:v["a"],VIcon:b["a"],VSnackbar:m["a"]});var g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-overlay",{attrs:{value:e.visible,"z-index":"2000"}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)},y=[],_={computed:{visible:function(){return this.$store.state.overlay.visible}}},k=_,w=a("a797"),x=a("490a"),C=Object(u["a"])(k,g,y,!1,null,null,null),T=C.exports;p()(C,{VOverlay:w["a"],VProgressCircular:x["a"]});var O={name:"App",components:{Snackbar:j,Overlay:T},data:function(){return{}}},S=O,D=a("7496"),A=a("40dc"),M=a("bb78"),P=a("62ad"),V=a("553a"),N=a("f6c4"),I=a("0fd9"),z=Object(u["a"])(S,r,o,!1,null,null,null),E=z.exports;p()(z,{VApp:D["a"],VAppBar:A["a"],VAppBarTitle:M["a"],VCol:P["a"],VFooter:V["a"],VIcon:b["a"],VMain:N["a"],VRow:I["a"]});var $=a("2f62"),R={namespaced:!0,state:{msg:"",visible:!1},mutations:{SHOW_SNACKBAR:function(e,t){e.visible=!0,e.msg=t.msg},ClOSE_SNACKBAR:function(e){e.visible=!1}},actions:{openMsg:function(e,t){e.commit("SHOW_SNACKBAR",{msg:t.msg}),t.timeout&&setTimeout((function(){e.commit("ClOSE_SNACKBAR")}),t.timeout)}}},B=R,F={namespaced:!0,state:{visible:!1},mutations:{LODING_OVERLAY:function(e){e.visible=!0},ClOSE_OVERLAY:function(e){e.visible=!1}},actions:{openOverlay:function(e){e.commit("LODING_OVERLAY")},closeOverlay:function(e){e.commit("ClOSE_OVERLAY")}}},U=F;s["a"].use($["a"]);var L=new $["a"].Store({modules:{snackbar:B,overlay:U}}),Y=a("f309");s["a"].use(Y["a"]);var K=new Y["a"]({}),W=a("bc3a"),q=a.n(W);function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;L.dispatch("snackbar/openMsg",{msg:e,timeout:t})}function H(){L.dispatch("overlay/openOverlay")}function J(){L.dispatch("overlay/closeOverlay")}var Z=q.a.create({baseURL:"/api",timeout:Object({NODE_ENV:"production",VUE_APP_BASE_API:"/api",VUE_APP_MODE:"prod",BASE_URL:"/"}).REQ_TIMEOUT,withCredentials:!0});function Q(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get";return H(),"get"===a?Z({url:e,method:"get",params:t}):"post"===a?Z({url:e,method:"post",data:t}):null}Z.interceptors.request.use((function(e){return e}),(function(e){return G("連線失敗",3e3),Promise.reject(e)})),Z.interceptors.response.use((function(e){var t=e.data;return J(),t}),(function(e){switch(J(),e.response.status){case 400:G("參數錯誤!!",3e3);break;default:G(e.response.data,3e3);break}return Promise.reject(e)}));var X=a("8c4f"),ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{lg:"6",md:"6",sm:"12",xs:"12"}},[a("v-card",{attrs:{"max-width":"800"}},[a("v-card-title",{staticClass:"justify-center"},[a("h4",[e._v("菜單")])]),a("v-card-text",[a("v-simple-table",{attrs:{height:"300px"},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v(" 餐點 ")]),a("th",{staticClass:"text-left"},[e._v(" 價格 ")]),a("th",{staticClass:"text-left"})])]),a("tbody",e._l(e.manu,(function(t){return a("tr",{key:t.ID},[a("td",[e._v(e._s(t.Name))]),a("td",[e._v(e._s(t.ShowPice))]),a("td",[a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return e.addPord(t)}}},[e._v(" 加入 ")])],1)])})),0)]},proxy:!0}])})],1)],1)],1)],1),a("v-btn",{attrs:{fab:"",fixed:"",right:"",bottom:"",color:"success"},on:{click:e.showDialog}},[a("v-badge",{attrs:{left:"",color:"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[a("count-to",{attrs:{suffix:" ("+e.shoppingCar.length+")","start-val":e.prev,"end-val":e.totalAmount,duration:1200}})]},proxy:!0}])},[a("v-icon",[e._v("mdi-cart")])],1)],1),a("v-dialog",{attrs:{width:"600"},model:{value:e.AddDialog,callback:function(t){e.AddDialog=t},expression:"AddDialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 font-weight-bold grey lighten-2"},[e._v(" 餐點內容 "),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.AddDialog=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("span",{staticClass:"text-h6"},[e._v(e._s(e.tempModel.Name))])])],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-select",{attrs:{items:e.addModel.Type,label:e.addModel.TypeName,"item-text":"name","item-value":"value"},model:{value:e.tempModel.Type,callback:function(t){e.$set(e.tempModel,"Type",t)},expression:"tempModel.Type"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:[function(e){return e&&e>0||"不能小於0"}],label:"數量",type:"number",min:"0"},model:{value:e.tempModel.Count,callback:function(t){e.$set(e.tempModel,"Count",t)},expression:"tempModel.Count"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("span",{staticClass:"text-h6"},[e._v("總金額 $"+e._s(e.tempTotalPrice))])])],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.AddDialog=!1}}},[e._v(" 關閉 ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.goAdd()}}},[e._v(" 加入 ")])],1)],1)],1),a("v-dialog",{attrs:{width:"600"},on:{"click:outside":function(t){e.step=1}},model:{value:e.ShpppingCarDialog,callback:function(t){e.ShpppingCarDialog=t},expression:"ShpppingCarDialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 font-weight-bold grey lighten-2"},[1==e.step?[e._v(" 餐點清單 ")]:e._e(),2==e.step?[e._v(" 個人資料 ")]:e._e(),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.ShpppingCarDialog=!1,e.step=1}}},[a("v-icon",[e._v("mdi-close")])],1)],2),a("v-window",{attrs:{touchless:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[a("v-window-item",{attrs:{value:1}},[a("v-simple-table",{attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",e._l(e.table_headers,(function(t){return a("th",{key:t.value,class:t.class,attrs:{width:t.width}},[e._v(e._s(t.text))])})),0)]),a("tbody",e._l(e.shoppingCar,(function(t){return a("tr",{key:t.ID+","+t.Type},[a("td",[e._v(e._s(t.Name))]),a("td",[e._v(e._s(e.showType(t)))]),a("td",[e._v(e._s(t.Count))]),a("td",{attrs:{align:"end"}},[e._v(e._s(e._f("toThousandFilter")(t.TotalPrice)))]),a("td",{attrs:{align:"center"}},[a("v-icon",{attrs:{dense:"",color:"red darken-1"},on:{click:function(a){return e.delItem(t)}}},[e._v("mdi-delete")])],1)])})),0)]},proxy:!0}])})],1),a("v-window-item",{attrs:{value:2}},[a("v-card-text",[a("v-form",{ref:"orderForm",model:{value:e.validOrder,callback:function(t){e.validOrder=t},expression:"validOrder"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:[function(e){return!!e||"必填項目"},function(e){return e&&e.length<=10||"長度限制10"}],label:"真實姓名",maxlength:"50"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:[function(e){return!!e||"必填項目"},function(e){return/[0-9#-]/.test(e)||"只能輸入數字或-,#"},function(e){return e&&e.length<=20||"長度限制20"}],label:"聯絡電話",maxlength:"20"},model:{value:e.userContact,callback:function(t){e.userContact=t},expression:"userContact"}})],1)],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("h4",{staticClass:"mr-4"},[e._v("總計金額: "+e._s(e._f("toThousandFilter")(e.totalAmount)))]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],attrs:{color:"error"},on:{click:e.clearAll}},[e._v("全部清空")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],attrs:{color:"primary"},on:{click:function(t){e.step=2}}},[e._v("確認預約")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:2==e.step,expression:"step == 2"}],attrs:{color:"secondary"},on:{click:function(t){e.step=1}}},[e._v("返回")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:2==e.step,expression:"step == 2"}],attrs:{color:"success"},on:{click:e.goCreateOrder}},[e._v("送出訂單")])],1)],1)],1)],1)},te=[],ae=(a("d81d"),a("a9e3"),a("7db0"),a("b0c0"),a("c740"),a("a434"),a("ec1b")),ne=a.n(ae),se={name:"Index",components:{countTo:ne.a},data:function(){return{manu:[],shoppingCar:[],dialog:!1,prev:0,AddDialog:!1,addModel:{},tempModel:{},validOrder:!1,step:1,ShpppingCarDialog:!1,table_headers:[{text:"餐點",value:"Name"},{text:"規格",value:"Type"},{text:"數量",value:"Count"},{text:"金額",value:"TotalPrice",class:"text-right text-no-wrap"},{text:"操作",width:60,value:"actions",class:"text-center"}],userName:null,userContact:null}},computed:{tempTotalPrice:function(){return this.tempModel.TotalPrice=this.tempModel.UnitPrice*this.tempModel.Count,this.tempModel.TotalPrice},totalAmount:function(){var e=this.shoppingCar.map((function(e){return Number(e.TotalPrice)}));return this.shoppingCar.length>0?e.reduce((function(e,t){return e+t})):0}},watch:{"tempModel.Type":function(e){this.tempModel.UnitPrice=this.addModel.Price[e]}},created:function(){this.manu.push({ID:1,Name:"拿鐵",Price:[50,70],ShowPice:"$ 50/70",Type:[{name:"小",value:0},{name:"大",value:1}],TypeName:"容量"}),this.manu.push({ID:2,Name:"美式",Price:[40,60],ShowPice:"$ 40/60",Type:[{name:"小",value:0},{name:"大",value:1}],TypeName:"容量"}),this.manu.push({ID:3,Name:"厚片吐司",Price:[60,60,60],ShowPice:"$ 60",Type:[{name:"巧克力",value:0},{name:"花生",value:1},{name:"奶酥",value:2}],TypeName:"口味"})},methods:{showType:function(e){var t=this.manu.find((function(t){return t.ID===e.ID}));return t.Type[e.Type].name},addPord:function(e){this.tempModel={ID:e.ID,Name:e.Name,Type:0,UnitPrice:e.Price[0],Count:1,TotalPrice:e.Price[0]},this.addModel=e,this.AddDialog=!0},goAdd:function(){var e=this,t=this.shoppingCar.findIndex((function(t){return t.ID===e.tempModel.ID&&t.Type===e.tempModel.Type}));-1!=t?(this.shoppingCar[t].Count+=this.tempModel.Count,this.shoppingCar[t].TotalPrice+=this.tempModel.TotalPrice):this.shoppingCar.push(this.tempModel),this.AddDialog=!1},showDialog:function(){this.shoppingCar.length>0?this.ShpppingCarDialog=!0:this.msg("購物車無任何餐點~",2e3)},delItem:function(e){var t=this.shoppingCar.findIndex((function(t){return t.ID===e.ID&&t.Type===e.Type}));this.shoppingCar.splice(t,1)},clearAll:function(){this.shoppingCar=[]},goCreateOrder:function(){this.sendnotify(),this.$refs.orderForm.validate()},sendnotify:function(){var e=a("6058")("A64rb1kxzZgog9pT0Tt5ote6l3d12mY8o97kZl65mIG");e.notify({message:"send test"}).then((function(){console.log("send completed!")}))}}},re=se,oe=a("4ca6"),ie=a("b0af"),ce=a("99d9"),le=a("a523"),de=a("169a"),ue=a("4bd4"),fe=a("b974"),pe=a("1f4f"),ve=a("2fa4"),be=a("8654"),me=a("f665"),he=a("1e6c"),je=Object(u["a"])(re,ee,te,!1,null,null,null),ge=je.exports;p()(je,{VBadge:oe["a"],VBtn:v["a"],VCard:ie["a"],VCardActions:ce["a"],VCardText:ce["b"],VCardTitle:ce["c"],VCol:P["a"],VContainer:le["a"],VDialog:de["a"],VForm:ue["a"],VIcon:b["a"],VRow:I["a"],VSelect:fe["a"],VSimpleTable:pe["a"],VSpacer:ve["a"],VTextField:be["a"],VWindow:me["a"],VWindowItem:he["a"]}),s["a"].use(X["a"]);var ye=[{path:"*",name:"Index",component:ge}],_e=new X["a"]({routes:ye}),ke=_e,we=(a("ac1f"),a("5319"),a("25f0"),a("1276"),a("c1df")),xe=a.n(we);function Ce(e){return(+e||0).toString().replace(/^-?\d+/g,(function(e){return e.replace(/(?=(?!\b)(\d{3})+$)/g,",")}))}function Te(e,t){return e?xe()(e).format(t):""}function Oe(e,t,a){return a?e?e.toString().substring(t,a):"":e?e.toString().substring(t):""}function Se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy/MM/dd",a=new Date(Date.parse(e)),n=a.getFullYear(),s=a.getMonth()+1;s=s<10?"0"+s:s;var r=a.getDate();r=r<10?"0"+r:r;for(var o="",i=t.split("/"),c=0;c<i.length;c++)switch(i[c]){case"yyyy":o+=n;break;case"MM":o.length>0&&(o+="/"),o+=s;break;case"dd":o.length>0&&(o+="/"),o+=r;break}return o}s["a"].config.productionTip=!1,s["a"].mixin({methods:{dbio:Q,msg:G}}),Object.keys(n).forEach((function(e){s["a"].filter(e,n[e])})),new s["a"]({vuetify:K,store:L,router:ke,render:function(e){return e(E)}}).$mount("#app")}});
//# sourceMappingURL=app.9af1c97a.js.map