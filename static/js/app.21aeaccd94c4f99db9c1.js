webpackJsonp([21],{"7QVd":function(t,n){},"8Py1":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),r=e("Dd8w"),a=e.n(r),i=[{Submenu:"运力管理",Icon:"ios-disc",name:1,MenuItem:[{title:"运力匹配",path:"/",name:"1-1",childMenu:[]}]},{Submenu:"货主中心",name:2,Icon:"md-person",MenuItem:[{title:"货主列表",path:"/hzCenter/hzlist",name:"2-1",childMenu:[]}]},{Submenu:"船东中心",name:3,Icon:"md-people",MenuItem:[{title:"船东列表",path:"/cdCenter/cdlist",name:"3-1",childMenu:[]}]},{Submenu:"船舶中心",name:4,Icon:"ios-boat",MenuItem:[{title:"船舶列表",path:"/shipCenter/shiplist",name:"4-1",childMenu:[]}]},{Submenu:"港口中心",name:5,Icon:"md-pint",MenuItem:[{title:"港口列表",path:"/portCenter/portlist",name:"5-1",childMenu:[]}]},{Submenu:"市场管理",name:6,Icon:"ios-briefcase",MenuItem:[{title:"货物运价",path:"/goodsprice",name:"6-1",childMenu:[]},{title:"货物供需",path:"/goodssupply",name:"6-2",childMenu:[]},{title:"油价",path:"/oilprice",name:"6-3",childMenu:[]},{title:"添加货种",path:"/addCargo",name:"6-4",childMenu:[]}]}],u=e("NYxO"),c={data:function(){return{sidebar:"",name:"1-1"}},computed:a()({},Object(u.c)(["toHome"])),watch:{toHome:function(){this.select("1-1")}},methods:{select:function(t){this.name=t,localStorage.setItem("name",t)}},mounted:function(){this.sidebar=i,this.name=localStorage.name?localStorage.name:this.name}},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"sidebar"},[e("Menu",{attrs:{"active-name":t.name,"open-names":["1"]},on:{"on-select":t.select}},t._l(t.sidebar,function(n){return e("Submenu",{key:n.name,attrs:{name:n.name}},[e("template",{slot:"title"},[e("Icon",{attrs:{type:n.Icon}}),t._v("\n             "+t._s(n.Submenu)+"\n          ")],1),t._v(" "),t._l(n.MenuItem,function(n){return e("router-link",{key:n.name,attrs:{to:n.path}},[e("MenuItem",{attrs:{name:n.name}},[t._v(" "+t._s(n.title))])],1)})],2)}),1)],1)},staticRenderFns:[]};var p=e("VU/8")(c,s,!1,function(t){e("8Py1")},"data-v-a8a37598",null).exports,l={data:function(){return{user:"",num:2}},methods:a()({},Object(u.b)(["goToHome"]),{loginOut:function(){localStorage.removeItem("id"),localStorage.removeItem("token"),localStorage.removeItem("staff_name"),localStorage.removeItem("name"),this.$router.push({path:"/login"})},toHome:function(){localStorage.setItem("name","1-1"),this.$router.replace({path:"/"}),this.goToHome(this.num++)}}),mounted:function(){this.user=localStorage.staff_name}},h={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"box"},[e("div",{staticClass:"logo-box"},[e("div",[e("img",{staticClass:"logo",attrs:{src:"http://fygw.oss-cn-shanghai.aliyuncs.com/white_logo.png",alt:""},on:{click:t.toHome}})]),t._v(" "),e("div",{staticClass:"titles"},[t._v("海易通数据管理中心")])]),t._v(" "),e("div",{staticClass:"userInfo"},[e("Menu",{attrs:{mode:"vertical"}},[e("Submenu",{attrs:{name:"1"}},[e("template",{slot:"title"},[e("Icon",{attrs:{type:"ios-contact"}}),t._v("\n          "+t._s(t.user)+"\n\n        ")],1),t._v(" "),e("Menu-item",{staticClass:"menu-items",attrs:{name:"3-1"},nativeOn:{click:function(n){return t.loginOut(n)}}},[e("span",[t._v("退出")])])],2)],1)],1)])},staticRenderFns:[]};var f={name:"App",data:function(){return{isLogin:!1}},components:{sidebar:p,navbar:e("VU/8")(l,h,!1,function(t){e("T9Pl")},"data-v-7e2f1cfc",null).exports},watch:{$route:function(t,n){"/login"===t.path?this.isLogin=!1:this.isLogin=!0}},mounted:function(){window.addEventListener("beforeunload",function(t){localStorage.removeItem("searchInfo")})}},d={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{class:this.isLogin?"active":"",attrs:{id:"app"}},[this.isLogin?n("navbar"):this._e(),this._v(" "),this.isLogin?n("sidebar"):this._e(),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var m=e("VU/8")(f,d,!1,function(t){e("Y1zd")},null,null).exports,g=e("/ocq");o.default.use(g.a);var v=new g.a({routes:[{path:"/login",name:"login",component:function(t){return e.e(12).then(function(){var n=[e("Luci")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/",name:"yunli",component:function(t){return e.e(4).then(function(){var n=[e("I+If")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/yunli/yunliship",name:"yunliship",component:function(t){return e.e(13).then(function(){var n=[e("VoTc")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/hzCenter",name:"hzCenter",component:function(t){return e.e(0).then(function(){var n=[e("8uiW")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/hzCenter/hzlist",name:"hzlist",component:function(t){return e.e(0).then(function(){var n=[e("8uiW")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/hzCenter/updatehz",name:"updatehz",component:function(t){return e.e(16).then(function(){var n=[e("pFJm")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/hzCenter/hzdetail",name:"hzdetail",component:function(t){return e.e(15).then(function(){var n=[e("MxWd")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/cdCenter",name:"cdCenter",component:function(t){return e.e(2).then(function(){var n=[e("y3kW")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/cdCenter/cdlist",name:"cdlist",component:function(t){return e.e(2).then(function(){var n=[e("y3kW")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/cdCenter/updatecd",name:"updatecd",component:function(t){return e.e(8).then(function(){var n=[e("7gAx")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/cdCenter/cddetail",name:"cddetail",component:function(t){return e.e(6).then(function(){var n=[e("3ylG")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/shipCenter",name:"shipCenter",component:function(t){return e.e(1).then(function(){var n=[e("OMZp")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/shipCenter/shiplist",name:"shiplist",component:function(t){return e.e(1).then(function(){var n=[e("OMZp")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/shipCenter/updateship",name:"updateship",component:function(t){return e.e(7).then(function(){var n=[e("tXtQ")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/shipCenter/shipdetail",name:"shipdetail",component:function(t){return e.e(17).then(function(){var n=[e("XGYT")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/portCenter",name:"portCenter",component:function(t){return e.e(3).then(function(){var n=[e("1Cuu")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/portCenter/portlist",name:"portlist",component:function(t){return e.e(3).then(function(){var n=[e("1Cuu")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/portCenter/updateport",name:"updateport",component:function(t){return e.e(14).then(function(){var n=[e("JDQT")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/portCenter/portdetail",name:"portdetail",component:function(t){return e.e(11).then(function(){var n=[e("SBkQ")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/goodsprice",name:"goodsprice",component:function(t){return e.e(5).then(function(){var n=[e("jISy")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/goodssupply",name:"goodssupply",component:function(t){return e.e(18).then(function(){var n=[e("ArMc")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/oilprice",name:"oilprice",component:function(t){return e.e(10).then(function(){var n=[e("NMf5")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/addCargo",name:"addCargo",component:function(t){return e.e(19).then(function(){var n=[e("smRs")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"*",name:"notfund",component:function(t){return e.e(9).then(function(){var n=[e("qiFm")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]}),y=e("Xxa5"),C=e.n(y),P=e("exGp"),I=e.n(P),b=e("//Fk"),S=e.n(b),w=e("mtWM"),L=e.n(w),_=e("b3L9"),O=e.n(_);L.a.defaults.baseURL="http://47.103.83.177/data_manage_center_new/",L.a.interceptors.request.use(function(t){return _.Spin.show(),t},function(t){return S.a.reject(t)}),L.a.interceptors.response.use(function(t){return _.Spin.hide(),t},function(t){return _.Spin.hide(),S.a.reject(t)});var F=function(t,n,e){return L()({method:t,url:n,data:e,withCredentials:!0})},M={login:function(t){return F("post","backend/staff/staffLogin",t)},huozhuList:function(t){return F("post","cargoOwner/getCargoOwnerList",t)},huozhuDetail:function(t){return F("post","cargoOwner/getCargoCompanyInfo",t)},updatehzInfo:function(t){return F("post","cargoOwner/updateCargoCompanyInfo",t)},selectCargoOwnerInfo:function(t){return F("post","cargoOwner/selectCargoOwnerInfo",t)},cdList:function(t){return F("post","shipOwner/getShipOwnerList",t)},cdDetail:function(t){return F("post","shipOwner/getShipOwnerInfo",t)},updatecd:function(t){return F("post","shipOwner/updateShipOwnerInfo",t)},selectShipOwnerInfo:function(t){return F("post","shipOwner/selectShipOwnerInfo",t)},shipList:function(t){return F("post","ship/getShipList",t)},shipDetail:function(t){return F("post","ship/getShipInfo",t)},updateShip:function(t){return F("post","ship/updateShipInfo",t)},selectShipInfo:function(t){return F("post","ship/selectShipInfo",t)},portList:function(t){return F("post","port/getPortList",t)},portDetail:function(t){return F("post","port/getPortDetail",t)},updatePort:function(t){return F("post","port/updatePortInfo",t)},selectPortInfo:function(t){return F("post","port/selectPortInfo",t)},addCargo:function(t){return F("post","marketFreight/addCargo",t)},getCargoInfo:function(t){return F("get","marketFreight/getCargoInfoByCargo",t)},updateCargoInfoByCargo:function(t){return F("post","marketFreight/updateCargoInfoByCargo",t)},addCargoInfoByCargo:function(t){return F("post","marketFreight/addCargoInfoByCargo",t)},getPowerPlantInfo:function(t){return F("get","powerPlant/getPowerPlantInfo",t)},addPowerPlantInfo:function(t){return F("post","powerPlant/addPowerPlant",t)},addPowerPlantDailyInfo:function(t){return F("post","powerPlant/addPowerPlantDailyInfo",t)},deletePowerPlantDailyInfo:function(t){return F("post","powerPlant/deletePowerPlantDailyInfo",t)},deletePowerPlantInfo:function(t){return F("post","powerPlant/deletePowerPlantInfo",t)},getPlatformFuelPriceInfo:function(){return F("get","fuelCompany/getPlatformFuelPriceInfo")},getFuelComapanyPriceInfo:function(){return F("get","fuelCompany/getFuelComapanyPriceInfo")},updateFuelComapanyPrice:function(t){return F("post","fuelCompany/updateFuelComapanyPrice",t)},addPlatformPrice:function(t){return F("post","fuelCompany/addPlatformPrice",t)},addFuelComapany:function(t){return F("post","fuelCompany/addFuelComapany",t)},deleteFuelComapany:function(t){return F("post","fuelCompany/deleteFuelComapany",t)},deleteFuelComapanyPrice:function(t){return F("post","fuelCompany/deleteFuelComapanyPrice",t)},addFuelComapanyPrice:function(t){return F("post","fuelCompany/addFuelComapanyPrice",t)},getCargosList:function(t){return F("get","cargo/getCargo",t)},getSeaPort:function(t){return F("get","port/findSeaPorts",t)},getRiverPort:function(t){return F("get","port/findRiverPorts",t)},riverShipListByInfo:function(t){return F("post","ship/getRiverShipListByInfo",t)},seaShipListByInfo:function(t){return F("post","ship/getSeaShipListByInfo",t)},shipHistoryOrder:function(t){return F("post","ship/getShipHistoryOrder",t)},shipHistoryVoyage:function(t){return F("post","ship/getShipHistoryVoyage",t)},shipInfoAndLostPosition:function(t){return F("post","ship/getShipInfoAndLostPosition",t)},AddCargo:function(t){return F("post","cargo/addCargoType",t)},updateCargoType:function(t){return F("post","cargo/updateCargoStatus",t)},getAllCargoType:function(){return F("get","cargo/getAllCargoType")},getShipHistory:function(t){return F("post","ship/getShipHistory5D",t)}};o.default.use(u.a);var H=new u.a.Store({state:{notice:0,cargoList:[],seaPort:[],riverPort:[],toHome:1},getters:{getNotice:function(t){return t.notice},getCargoList:function(t){return t.cargoList},getSeaPort:function(t){return t.seaPort},getRiverPort:function(t){return t.riverPort},toHome:function(t){return t.toHome}},mutations:{getNotice:function(t,n){t.cargoList=n},getCargoList:function(t,n){t.cargoList=n},getSeaPort:function(t,n){t.seaPort=n},getRiverPort:function(t,n){t.riverPort=n},toHome:function(t,n){t.toHome=n}},actions:{getNoticeFn:function(t,n){(0,t.commit)("getNotice",n)},goToHome:function(t,n){t.commit("toHome",n)},getCargoListFn:function(t,n){var e=this,o=t.commit;return I()(C.a.mark(function t(){var n;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.getCargosList();case 2:!(n=t.sent).data.status&&n.data.result instanceof Array&&o("getCargoList",n.data.result);case 4:case"end":return t.stop()}},t,e)}))()},getSeaPortFn:function(t,n){var e=this,o=t.commit;return I()(C.a.mark(function t(){var n,r,a,i,u;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.getSeaPort();case 2:if(!(n=t.sent).data.status&&n.data.result instanceof Array){for(i in r=n.data.result,a=[],r)for(u in a.push({label:r[i].province,value:r[i].code,children:[]}),r[i].children)a[i].children.push({label:r[i].children[u].port,value:r[i].children[u].code});o("getSeaPort",a)}case 4:case"end":return t.stop()}},t,e)}))()},getRiverPortFn:function(t,n){var e=this,o=t.commit;return I()(C.a.mark(function t(){var n,r,a,i,u;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.getRiverPort();case 2:if(!(n=t.sent).data.status&&n.data.result instanceof Array){for(i in r=n.data.result,a=[],r)for(u in a.push({label:r[i].province,value:r[i].code,children:[]}),r[i].children)a[i].children.push({label:r[i].children[u].port,value:r[i].children[u].code});o("getRiverPort",a)}case 4:case"end":return t.stop()}},t,e)}))()}}}),k=(e("7QVd"),e("AJcs")),z=e.n(k);o.default.prototype.$http=M,o.default.prototype.$MD5=z.a,o.default.use(O.a),o.default.config.productionTip=!1,o.default.config.TOKEN_ROUTER_CHECK=!0,o.default.config.TOKEN_API_CHECK=!0,v.beforeEach(function(t,n,e){O.a.LoadingBar.start();var o=localStorage.token;o?"login"==t.name?o?e("/"):e():"index"==t.name?(e(),O.a.LoadingBar.finish()):null==t.name?(O.a.LoadingBar.finish(),e("*")):e():("login"==t.name?e():e("/login"),O.a.LoadingBar.finish())}),v.afterEach(function(t){O.a.LoadingBar.finish(),window.scrollTo(0,0)}),new o.default({el:"#app",router:v,store:H,components:{App:m},template:"<App/>"})},T9Pl:function(t,n){},Y1zd:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.21aeaccd94c4f99db9c1.js.map