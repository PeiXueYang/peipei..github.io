webpackJsonp([6],{"3ylG":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Xxa5"),r=e.n(a),o=e("exGp"),n=e.n(o),_={data:function(){return{value1:"1",value2:"2",result:{}}},methods:{cdDetail:function(){var t=this;return n()(r.a.mark(function s(){var e,a;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return e={shipOwnerCode:t.$route.query.code},s.prev=1,s.next=4,t.$http.cdDetail(e);case 4:0==(a=s.sent).data.status&&a.data.result instanceof Object&&(t.result=a.data.result),s.next=12;break;case 8:throw s.prev=8,s.t0=s.catch(1),t.$Notice.error({desc:"服务器错误,请稍后重试."}),Error(s.t0);case 12:case"end":return s.stop()}},s,t,[[1,8]])}))()}},created:function(){this.cdDetail()}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Card",{staticClass:"card"},[e("Breadcrumb",[e("BreadcrumbItem",[t._v("船东中心")]),t._v(" "),e("BreadcrumbItem",[t._v("船东详情")])],1),t._v(" "),e("div",{staticClass:"box-container"},[e("Collapse",{attrs:{accordion:""},model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}},[e("Panel",{attrs:{name:"1"}},[e("span",[t._v("船东信息")]),t._v(" "),e("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[e("Col",{attrs:{span:"2"}},[t._v("姓名")]),t._v(" "),e("Col",{attrs:{span:"6"}},[t._v(t._s(t.result.shipOwnerName?t.result.shipOwnerName:"-"))]),t._v(" "),e("Col",{attrs:{span:"2"}},[t._v("手机号")]),t._v(" "),e("Col",{attrs:{span:"6"}},[t._v(t._s(t.result.phone?t.result.phone:"-"))]),t._v(" "),e("Col",{attrs:{span:"2"}},[t._v("船务公司")]),t._v(" "),e("Col",{attrs:{span:"6"}},[t._v(t._s(t.result.companyName?t.result.companyName:"-"))])],1),t._v(" "),e("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[e("Col",{attrs:{span:"2"}},[t._v("船务公司网址")]),t._v(" "),e("Col",{attrs:{span:"8"}},[t._v(t._s(t.result.companyOfficialUrl?t.result.companyOfficialUrl:"-"))])],1),t._v(" "),e("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[e("Col",{attrs:{span:"2"}},[t._v("公司简介")]),t._v(" "),e("Col",{attrs:{span:"20"}},[t._v(t._s(t.result.info?t.result.info:"-")+"\n            ")])],1),t._v(" "),e("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[e("Divider")],1),t._v(" "),e("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[e("h3",[t._v("历史交易记录")])]),t._v(" "),e("Row",{attrs:{slot:"content"},slot:"content"},[e("table",{staticClass:"table table-row"},[e("tr",[e("td",[t._v("#")]),t._v(" "),e("td",[t._v("装货港")]),t._v(" "),e("td",[t._v("卸货港")]),t._v(" "),e("td",[t._v("货方运价")]),t._v(" "),e("td",[t._v("装货吨位")]),t._v(" "),e("td",[t._v("货种")]),t._v(" "),e("td",[t._v("订单创建时间")]),t._v(" "),e("td",[t._v("订单结束时间")])]),t._v(" "),t._l(t.result.historyOrder,function(s,a){return e("tr",{key:s.id},[e("td",[t._v(t._s(a+1))]),t._v(" "),e("td",[t._v(t._s(s.loadPorts))]),t._v(" "),e("td",[t._v(t._s(s.discPorts))]),t._v(" "),e("td",[t._v(t._s(s.freights))]),t._v(" "),e("td",[t._v(t._s(s.cargoVolume))]),t._v(" "),e("td",[t._v(t._s(s.cargo))]),t._v(" "),e("td",[t._v(t._s(s.createTime))]),t._v(" "),e("td",[t._v(t._s(s.financeEndTime))])])})],2)]),t._v(" "),e("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[e("Divider")],1),t._v(" "),e("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[e("h3",[t._v("所有船舶信息")])]),t._v(" "),e("Row",{attrs:{slot:"content"},slot:"content"},[e("table",{staticClass:"table table-row"},[e("tr",[e("td",[t._v("#")]),t._v(" "),e("td",[t._v("船名")]),t._v(" "),e("td",[t._v("mmsi")]),t._v(" "),e("td",[t._v("船长")]),t._v(" "),e("td",[t._v("船宽")]),t._v(" "),e("td",[t._v("载重吨位")]),t._v(" "),e("td",[t._v("证书吨位")]),t._v(" "),e("td",[t._v("TPC")]),t._v(" "),e("td",[t._v("船舶详情")])]),t._v(" "),t._l(t.result.allShipInfo,function(s,a){return e("tr",{key:s.id},[e("td",[t._v(t._s(a+1))]),t._v(" "),e("td",[t._v(t._s(s.shipnameCn))]),t._v(" "),e("td",[t._v(t._s(s.mmsi))]),t._v(" "),e("td",[t._v(t._s(s.length))]),t._v(" "),e("td",[t._v(t._s(s.breadth))]),t._v(" "),e("td",[t._v(t._s(s.loadTons))]),t._v(" "),e("td",[t._v(t._s(s.certTons))]),t._v(" "),e("td",[t._v(t._s(s.tpc))]),t._v(" "),e("td",[e("router-link",{attrs:{to:{name:"shipdetail",query:{code:s.code}},target:"_blank"}},[t._v("查看")])],1)])})],2)]),t._v(" "),e("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[e("Button",{attrs:{type:"primary"}},[e("router-link",{staticStyle:{color:"#fff"},attrs:{to:{path:"/cdCenter/updatecd",query:{code:this.$route.query.code}}}},[t._v("修改船东信息")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var l=e("VU/8")(_,v,!1,function(t){e("Qi8a")},"data-v-e01df65c",null);s.default=l.exports},Qi8a:function(t,s){}});
//# sourceMappingURL=6.f7696c958cf61a9fd230.js.map