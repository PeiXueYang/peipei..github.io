webpackJsonp([0],{"3Cdv":function(e,t){},"8uiW":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),n=r.n(a),c=r("exGp"),o=r.n(c),s={data:function(){var e=this;return{name:"",total:20,columns1:[{title:"#",key:"Index",width:70,align:"center"},{title:"货主公司",key:"company",align:"center"},{title:"联系人",key:"concact",align:"center"},{title:"联系电话",key:"phone",align:"center"},{title:"偏好航线",key:"preLine",align:"center"},{title:"偏好船型",key:"preShip",align:"center"},{title:"偏好货种",key:"preGoods",align:"center"},{title:"详情",key:"detail",align:"center",render:function(t,r){return t("Button",{props:{type:"primary"},style:{display:"inline-block",width:100,background:"red;"},on:{click:function(){var t=e.$router.resolve({path:"/hzCenter/hzdetail",query:{code:r.row.code}});window.open(t.href,"_blank")}}},"查看")}}],data1:[],currentPage:1,size:10}},watch:{name:function(){this.name||(this.size=10,this.huozhuList(),localStorage.removeItem("searchInfo"))}},methods:{huozhuList:function(){var e=this;return o()(n.a.mark(function t(){var r,a,c;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={currentPage:e.currentPage,size:e.size},t.prev=1,t.next=4,e.$http.huozhuList(r);case 4:0==(a=t.sent).data.status&&a.data.result instanceof Array?(e.total=a.data.total,c=a.data.result,e.data1=[],e.commonFn(c)):(e.$Notice.error({desc:"暂无数据"}),e.data1=[],e.total=0),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(1),e.$Notice.error({desc:"服务器错误,请稍后重试."}),Error(t.t0);case 12:case"end":return t.stop()}},t,e,[[1,8]])}))()},changePage:function(e){this.currentPage=e,localStorage.searchInfo?this.search(e):this.huozhuList()},sizeChange:function(e){this.size=e,this.name?this.search():this.huozhuList()},commonFn:function(e){var t=this;e.forEach(function(e,r){t.data1.push({Index:Number((t.currentPage-1)*t.size)+Number(r)+1,company:e.companyName,concact:e.clientName,phone:e.phone,preLine:e.preferVoyage,preShip:e.preferShipType,preGoods:e.preferCargo,companyId:e.companyId,code:e.code,detail:"查看"})})},search:function(e){var t=this;return o()(n.a.mark(function r(){var a,c,o;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(t.name){r.next=3;break}return t.$Notice.error({desc:"请输入货主公司"}),r.abrupt("return",!1);case 3:return t.currentPage=e||1,a={currentPage:t.currentPage,size:t.size,trem:t.name},r.prev=5,r.next=8,t.$http.selectCargoOwnerInfo(a);case 8:if(c=r.sent,t.total=c.data.total,t.data1=[],c.data.status||!(c.data.result instanceof Array)){r.next=18;break}localStorage.setItem("searchInfo",t.name),t.$Notice.success({desc:"查询成功"}),o=c.data.result,t.commonFn(o),r.next=20;break;case 18:return t.$Notice.error({desc:"暂无数据"}),r.abrupt("return",!1);case 20:r.next=27;break;case 22:throw r.prev=22,r.t0=r.catch(5),localStorage.removeItem("searchInfo"),t.$Notice.error({desc:"服务器错误,请稍后重试."}),Error(r.t0);case 27:case"end":return r.stop()}},r,t,[[5,22]])}))()}},created:function(){this.huozhuList()},destroyed:function(){localStorage.removeItem("searchInfo")}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Card",{staticClass:"card"},[r("Breadcrumb",[r("BreadcrumbItem",[e._v("货主中心")]),e._v(" "),r("BreadcrumbItem",[e._v("货主列表")])],1),e._v(" "),r("div",{staticClass:"box-container"},[r("div",{staticStyle:{margin:"20px 0 40px 0"}},[r("Input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入货主公司"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("Button",{attrs:{type:"primary"},on:{click:function(t){return e.search()}}},[e._v("搜索")])],1),e._v(" "),r("Table",{attrs:{border:"",columns:e.columns1,data:e.data1}}),e._v(" "),r("Page",{staticClass:"pages",attrs:{total:e.total,current:e.currentPage,"page-size":e.size,"show-elevator":"","show-sizer":""},on:{"on-page-size-change":e.sizeChange,"on-change":e.changePage}})],1)],1)},staticRenderFns:[]};var u=r("VU/8")(s,i,!1,function(e){r("3Cdv")},"data-v-53d750b6",null);t.default=u.exports}});
//# sourceMappingURL=0.22286953edb8a6ec14f9.js.map