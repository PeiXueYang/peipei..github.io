webpackJsonp([16],{kkH3:function(t,e){},pFJm:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Xxa5"),a=s.n(r),n=s("exGp"),o=s.n(n),i={data:function(){return{value1:"1",value2:"2",result:"",offUrl:"",offsUrl:"",note:"",preLine:[{starLine:"",endLine:""}],preShip:[{shipType:""}],preGoods:[{goodsType:""}]}},methods:{huozhuDetail:function(){var t=this;return o()(a.a.mark(function e(){var s,r,n,o,i,c,l,p;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s={code:t.$route.query.code},e.prev=1,e.next=4,t.$http.huozhuDetail(s);case 4:if(0==(r=e.sent).data.status){if(t.result=r.data.result,t.offUrl=r.data.result.companyOfficialUrl,t.offsUrl=r.data.result.companyBidUrl,t.note=r.data.result.companyInfo,r.data.result.preferCargo)for(o in n=r.data.result.preferCargo.split(","),t.preGoods=[],n)t.preGoods.push({goodsType:n[o]});if(r.data.result.preferShipType)for(c in i=r.data.result.preferShipType.split(","),t.preShip=[],i)t.preShip.push({shipType:i[c]});if(r.data.result.preferVoyage)for(p in l=r.data.result.preferVoyage.split(","),t.preLine=[],l)t.preLine.push({starLine:l[p].split("-")[0],endLine:l[p].split("-")[1]})}e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),Error(e.t0);case 11:case"end":return e.stop()}},e,t,[[1,8]])}))()},addFun:function(t,e){switch(t){case 0:this.preLine.push({starLine:"",endLine:""});break;case 1:this.preShip.push({shipType:""});break;case 2:this.preGoods.push({goodsType:""})}},minusFun:function(t,e){switch(t){case 0:this.preLine.splice(e,1);break;case 1:this.preShip.splice(e,1);break;case 2:this.preGoods.splice(e,1)}},save:function(){var t=this;return o()(a.a.mark(function e(){var s,r,n,o,i,c,l,p;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(r in s=[],t.preShip)s.push(t.preShip[r].shipType);for(o in n=[],t.preGoods)n.push(t.preGoods[o].goodsType);for(c in i=[],t.preLine)i.push(t.preLine[c].starLine+"-"+t.preLine[c].endLine);return l={cargoOwnerCompanyCode:t.$route.query.code,companyBidUrl:t.offsUrl,companyOfficialUrl:t.offUrl,info:t.note,preferShipType:s.join(","),preferCargo:n.join(","),preferVoyage:i.join(",")},e.prev=7,e.next=10,t.$http.updatehzInfo(l);case 10:if((p=e.sent).data.status){e.next=16;break}t.$Notice.success({desc:"保存成功"}),setTimeout(function(){var e=t.$router.resolve({path:"/hzCenter/hzdetail",query:{code:t.$route.query.code}}).href;window.open(e,"_blank")},1300),e.next=18;break;case 16:return t.$Notice.error({desc:p.data.msg}),e.abrupt("return",!1);case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(7),t.$Notice.error({desc:"服务器错误,请稍后重试."}),console.log(e.t0);case 24:case"end":return e.stop()}},e,t,[[7,20]])}))()}},created:function(){this.huozhuDetail()}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Card",{staticClass:"card"},[s("Breadcrumb",[s("BreadcrumbItem",[t._v("货主中心")]),t._v(" "),s("BreadcrumbItem",[t._v("修改货主信息")])],1),t._v(" "),s("div",{staticClass:"box-container"},[s("Collapse",{attrs:{accordion:""},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[s("Panel",{attrs:{name:"1"}},[s("span",[t._v("货主信息")]),t._v(" "),s("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[s("Col",{attrs:{span:"3"}},[t._v("货主")]),t._v(" "),s("Col",{attrs:{span:"10"}},[t._v(t._s(t.result.companyName))])],1),t._v(" "),s("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[s("Col",{attrs:{span:"3"}},[t._v("货主官网网址")]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("Input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入货主官网网址"},model:{value:t.offUrl,callback:function(e){t.offUrl=e},expression:"offUrl"}})],1),t._v(" "),s("Col",{attrs:{span:"3"}},[t._v("官网招标网址")]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("Input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入官网招标网址"},model:{value:t.offsUrl,callback:function(e){t.offsUrl=e},expression:"offsUrl"}})],1)],1),t._v(" "),s("Row",{staticClass:"row",staticStyle:{margin:"10px 0"},attrs:{slot:"content"},slot:"content"},[s("Col",{attrs:{span:"3"}},[t._v("货主简介")]),t._v(" "),s("Col",{attrs:{span:"8"}},[s("Input",{staticStyle:{width:"220px"},attrs:{type:"textarea",rows:4,placeholder:"请输入货主简介"},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}})],1)],1),t._v(" "),s("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[s("Divider")],1),t._v(" "),s("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[s("h3",[t._v("业务状况")])]),t._v(" "),t._l(t.preLine,function(e,r){return s("Row",{key:r,staticClass:"row",attrs:{slot:"content"},slot:"content"},[s("Col",{attrs:{span:"3"}},[s("span",r?[t._v(" ")]:[t._v("偏好航线")])]),t._v(" "),s("Col",{attrs:{span:"15"}},[s("Input",{staticStyle:{width:"120px"},attrs:{placeholder:"起始航线"},model:{value:e.starLine,callback:function(s){t.$set(e,"starLine",s)},expression:"item.starLine"}}),t._v(" "),s("span",{staticStyle:{margin:"0 10px"}},[t._v("到")]),t._v(" "),s("Input",{staticStyle:{width:"120px"},attrs:{placeholder:"结束航线"},model:{value:e.endLine,callback:function(s){t.$set(e,"endLine",s)},expression:"item.endLine"}}),t._v(" "),s("Icon",r?{staticClass:"icons",attrs:{type:"ios-remove-circle"},on:{click:function(e){return t.minusFun(0,r)}}}:{staticClass:"icons",attrs:{type:"ios-add-circle"},on:{click:function(e){return t.addFun(0,r)}}})],1)],1)}),t._v(" "),t._l(t.preShip,function(e,r){return s("Row",{key:r+100,staticClass:"row",attrs:{slot:"content"},slot:"content"},[s("Col",{attrs:{span:"3"}},[s("span",r?[t._v(" ")]:[t._v("偏好船型")])]),t._v(" "),s("Col",{attrs:{span:"15"}},[s("Input",{staticStyle:{width:"220px"},attrs:{placeholder:"偏好船型"},model:{value:e.shipType,callback:function(s){t.$set(e,"shipType",s)},expression:"item.shipType"}}),t._v(" "),s("Icon",r?{staticClass:"icons",attrs:{type:"ios-remove-circle"},on:{click:function(e){return t.minusFun(1,r)}}}:{staticClass:"icons",attrs:{type:"ios-add-circle"},on:{click:function(e){return t.addFun(1,r)}}})],1)],1)}),t._v(" "),t._l(t.preGoods,function(e,r){return s("Row",{key:r+1e3,staticClass:"row",attrs:{slot:"content"},slot:"content"},[s("Col",{attrs:{span:"3"}},[s("span",r?[t._v(" ")]:[t._v("偏好货种")])]),t._v(" "),s("Col",{attrs:{span:"15"}},[s("Input",{staticStyle:{width:"220px"},attrs:{placeholder:"偏好货种"},model:{value:e.goodsType,callback:function(s){t.$set(e,"goodsType",s)},expression:"item.goodsType"}}),t._v(" "),s("Icon",r?{staticClass:"icons",attrs:{type:"ios-remove-circle"},on:{click:function(e){return t.minusFun(2,r)}}}:{staticClass:"icons",attrs:{type:"ios-add-circle"},on:{click:function(e){return t.addFun(2,r)}}})],1)],1)}),t._v(" "),s("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[s("Divider")],1),t._v(" "),s("Row",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[s("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)],2)],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")(i,c,!1,function(t){s("kkH3")},"data-v-31f57eda",null);e.default=l.exports}});
//# sourceMappingURL=16.1613d3cdee0c0c750eb5.js.map