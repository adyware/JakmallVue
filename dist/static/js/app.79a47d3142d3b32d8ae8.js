webpackJsonp([1],{NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App"},a,!1,function(t){e("Pe99")},null,null).exports,o=e("/ocq"),n={name:"Step1",data:function(){return{sendDropCheckBox:!1,name:"",phone:"",address:"",dropName:"",dropPhoneNum:"",cosOfGood:5e4,dropFee:0,total:0,countSisaAddress:0,initForm:!0,isError:{name:!1,phone:!1,dropName:!1,dropPhoneNum:!1,address:!1,email:!1},isSuccess:{name:!1,phone:!1,dropName:!1,dropPhoneNum:!1,address:!1,email:!1}}},methods:{setDropFee:function(){this.sendDropCheckBox=!this.sendDropCheckBox,this.sendDropCheckBox?this.dropFee=5900:(this.dropFee=0,this.isError.dropName=!1,this.isSuccess.dropName=!1,this.isError.dropPhoneNum=!1,this.isSuccess.dropPhoneNum=!1,this.dropName="",this.dropPhoneNum="")},requiredHandle:function(t){this.initForm=!1;var s=t.target.value,e=t.target.name;this[e]=s,s.length>0?(this.isError[e]=!1,this.isSuccess[e]=!0):(this.isError[e]=!0,this.isSuccess[e]=!1)},phoneHandle:function(t){this.initForm=!1;var s=t.target.value,e=t.target.name;this[e]=s,s.length>=6&&s.length<=20&&s.match(/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g)?(this.isError[e]=!1,this.isSuccess[e]=!0):(this.isError[e]=!0,this.isSuccess[e]=!1)},addressHandle:function(t){this.initForm=!1;var s=t.target.value,e=t.target.name;this[e]=s,this.countSisaAddress=120-s.length,this.countSisaAddress<0&&(this.countSisaAddress=0),s.length>0&&s.length<=120?(console.log("123"),console.log(e),this.isError[e]=!1,this.isSuccess[e]=!0):(this.isError[e]=!0,this.isSuccess[e]=!1)},emailHandle:function(t){this.initForm=!1;var s=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,e=t.target.value,i=t.target.name;this[i]=e,console.log(s.test(e)),e.match(s)?(this.isError[i]=!1,this.isSuccess[i]=!0):(this.isError[i]=!0,this.isSuccess[i]=!1)}},computed:{countTotal:function(){return this.dropFee+this.cosOfGood},getTotalError:function(){for(var t in this.isError)if(this.isError.hasOwnProperty(t)&&(this.isError[t]||""==this[t]))return!0;return!1}}},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"breadcrumbs"},[e("div",{staticClass:"bread-menus active"},[e("span",{staticClass:"numb"},[t._v("1")]),t._v(" Delivery\n      ")]),t._v(" "),e("div",{staticClass:"bread-menus"},[e("span",{staticClass:"numb"},[t._v("2")]),t._v(" Delivery\n      ")]),t._v(" "),e("div",{staticClass:"bread-menus"},[e("span",{staticClass:"numb"},[t._v("3")]),t._v(" Delivery\n      ")])]),t._v(" "),e("div",{staticClass:"top-left-navs"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-arrow-left"}),t._v(" Back to chart")])]),t._v(" "),e("div",{staticClass:"row-custom "},[e("div",{staticClass:"col-8"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"title"},[t._v("Delivery details")]),t._v(" "),e("div",{staticClass:"right-option"},[e("label",{attrs:{for:"dropshipper"}},[e("input",{attrs:{type:"checkbox",name:"",id:"dropshipper"}}),t._v(" Send as dropshipper\n            ")])])]),t._v(" "),e("div",{staticClass:"row-custom forms"},[e("div",{staticClass:"col-7"},[e("input",{staticClass:"custom-field",attrs:{type:"text",name:"",id:"",placeholder:"Name"}}),t._v(" "),e("input",{staticClass:"custom-field",attrs:{type:"text",name:"",id:"",placeholder:"Phone number"}}),t._v(" "),e("textarea",{staticClass:"custom-field",attrs:{name:"",id:"",cols:"30",rows:"5"}})]),t._v(" "),e("div",{staticClass:"col-5"},[e("input",{staticClass:"custom-field",attrs:{type:"text",name:"",id:"",placeholder:"Dropshipper name"}}),t._v(" "),e("input",{staticClass:"custom-field",attrs:{type:"text",name:"",id:"",placeholder:"Dropshipper phone number"}})])])]),t._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"right-panel"},[e("div",{staticClass:"top-section"},[e("div",{staticClass:"sec-title"},[t._v("Summary")]),t._v(" "),e("p",{staticClass:"sub-title"},[t._v("10 item purchased")])]),t._v(" "),e("div",{staticClass:"calculate"},[e("table",{staticClass:"tables no-border"},[e("tr",[e("td",{staticClass:"item-names"},[t._v("Cost of goods")]),t._v(" "),e("td",[t._v("Rp. 500, 000,-")])]),t._v(" "),e("tr",[e("td",{staticClass:"item-names"},[t._v("Drop shipping fee")]),t._v(" "),e("td",[t._v("Rp. 500, 000,-")])]),t._v(" "),e("tr",[e("td",{staticClass:"sec-title text-left"},[t._v("Total")]),t._v(" "),e("td",{staticClass:"sec-title"},[t._v("Rp. 1000,000,-")])])]),t._v(" "),e("button",{staticClass:"btn-custom btn-orange"},[t._v("Continue to Payment")])])])])])])}]};var l=e("VU/8")(n,c,!1,function(t){e("eTiu")},"data-v-1227dab8",null).exports;i.a.use(o.a);var d=new o.a({routes:[{path:"/",name:"Step1",component:l}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:d,components:{App:r},template:"<App/>"})},Pe99:function(t,s){},eTiu:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.79a47d3142d3b32d8ae8.js.map