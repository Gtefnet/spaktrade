(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"001e":function(t,e,a){t.exports=a.p+"img/phone.10a054ce.svg"},"1f6f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view")],1)},r=[],n={name:"App",components:{},data:function(){return{}}},o=n,c=a("2877"),l=a("6544"),d=a.n(l),u=a("7496"),v=Object(c["a"])(o,i,r,!1,null,null,null),m=v.exports;d()(v,{VApp:u["a"]});var p=a("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var f=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("app-bar"),a("v-main",[a("carousel"),a("home-body")],1),a("footer-app")],1)},g=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{staticClass:"bar",attrs:{app:"",dark:"","shrink-on-scroll":"",prominent:"",id:"appbar"}},[a("v-app-bar-nav-icon"),a("v-toolbar-title",[t._v("Spak Trade")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v(t._s(t.searchIcon))])],1),a("div",{staticClass:"hidden-md-and-down"},t._l(t.barItems,(function(e,s){return a("v-btn",{key:s,staticClass:"ml-1 mr-1",attrs:{text:"",router:"",to:e.to}},[t._v(t._s(e.title)),a("v-icon",{attrs:{right:""}},[t._v(t._s(e.icon))])],1)})),1),a("v-btn",{attrs:{router:"",to:"/login",color:"white",rounded:"",outlined:""}},[t._v("Login")])],1)],1)},_=[],x=a("94ed"),C={components:{},data:function(){return{searchIcon:x["f"],barItems:[{title:"Traders",icon:x["l"],to:"/"},{title:"Combos",icon:x["i"],to:"#!"},{title:"Cryptos",icon:x["a"],to:"#!"},{title:"Features",icon:x["c"],to:"#!"},{title:"Contact Us",icon:x["b"],to:"#!"}]}}},y=C,w=(a("87b9"),a("40dc")),k=a("5bc1"),V=a("8336"),S=a("132d"),T=a("2fa4"),I=a("2a7f"),j=Object(c["a"])(y,h,_,!1,null,"bb2256ee",null),q=j.exports;d()(j,{VAppBar:w["a"],VAppBarNavIcon:k["a"],VBtn:V["a"],VIcon:S["a"],VSpacer:T["a"],VToolbarTitle:I["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-carousel",{attrs:{cycle:"",id:"carousel","show-arrows-on-hover":""}},t._l(t.slides,(function(t,e){return a("v-carousel-item",{key:e},[a("iframe",{attrs:{id:"frame",src:t.src,width:"100%",height:"500"}},[a("v-img",{attrs:{contain:"",src:t.src,height:"90%",width:"90%"}})],1)])})),1)},O=[],A={data:function(){return{slides:[{src:"https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/finance_0bdk.svg"},{src:"https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/investing_7u74.svg"},{src:"https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/personal_finance_tqcd.svg"},{src:"https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/around_the_world_v9nu.svg"},{src:"https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_deal_cpi9.svg"}]}}},P=A,D=(a("9cb9"),a("5e66")),E=a("3e35"),L=a("adda"),$=Object(c["a"])(P,B,O,!1,null,"d5a7f664",null),F=$.exports;d()($,{VCarousel:D["a"],VCarouselItem:E["a"],VImg:L["a"]});var U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-container",[s("span",{staticClass:"display-1"},[t._v("How it works")]),s("v-card",{staticClass:"mx-auto text-center",attrs:{elevation:"7"}},[s("v-container",[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[s("v-avatar",{attrs:{tile:"",size:"100"}},[s("v-icon",[t._v(t._s(t.testIcon))])],1),s("p",{staticClass:"subtitle-1 font-weight-bold",staticStyle:{"text-align":"center !important"}},[t._v("Traders join Spak Trade")]),s("v-container",[s("v-card-text",{staticClass:"workText caption"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione, eligendi nesciunt facere fuga adipisci itaque odit error quasi unde similique enim impedit ex provident, hic molestias, quo dolorum modi! ")])],1)],1),s("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[s("v-avatar",{attrs:{tile:"",size:"100"}},[s("v-icon",[t._v(t._s(t.testIcon))])],1),s("p",{staticClass:"subtitle-1 font-weight-bold",staticStyle:{"text-align":"center !important"},attrs:{id:"workTitle"}},[t._v("Traders join Spak Trade")]),s("v-container",[s("v-card-text",{staticClass:"workText caption"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione, eligendi nesciunt facere fuga adipisci itaque odit error quasi unde similique enim impedit ex provident, hic molestias, quo dolorum modi! ")])],1)],1),s("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[s("v-avatar",{attrs:{tile:"",size:"100"}},[s("v-icon",[t._v(t._s(t.testIcon))])],1),s("p",{staticClass:"subtitle-1 font-weight-bold",staticStyle:{"text-align":"center !important"},attrs:{id:"workTitle"}},[t._v("Traders join Spak Trade")]),s("v-container",[s("v-card-text",{staticClass:"workText caption"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione, eligendi nesciunt facere fuga adipisci itaque odit error quasi unde similique enim impedit ex provident, hic molestias, quo dolorum modi! ")])],1)],1)],1)],1)],1)],1),s("v-sheet",{staticClass:"mt-8"},[s("v-container",[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[s("v-btn",{staticClass:"text-center purple darken-3 mr-2",attrs:{large:"",dark:"",rounded:"",block:""}},[t._v("Join as an investor")])],1),s("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[s("v-btn",{staticClass:"ml-2",attrs:{color:"purple darken-3",large:"",rounded:"",outlined:"",block:""}},[t._v("Join as an investor")])],1)],1)],1)],1),s("v-sheet",{staticClass:"tradeVolume mt-12"},[s("div",{staticClass:"text-center"},[s("v-card",{staticClass:"mx-auto volume",attrs:{"max-height":"150","min-height":"150",width:"50%",elevation:"12"}},[s("v-contianer",[s("v-row",{attrs:{justify:"start"}},[s("v-card-text",{staticClass:"headline mt-12"},[t._v("Trading Volume")])],1)],1)],1),s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[s("span",{staticClass:"headline indigo--text text--darken-3"},[t._v("Performance")]),s("p",{staticClass:"text-center caption"},[t._v("Pick among the best Traders and instantly convert their advice into live trades.")]),s("v-card",{staticClass:"mt-5 mx-auto elevation-3"},[s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Trader")]),s("th",{staticClass:"text-left"},[t._v("Amount")]),s("th",{staticClass:"text-left"},[t._v("Investors")])])]),s("tbody",t._l(t.items,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.name))]),s("td",[t._v(t._s(e.amount))]),s("td",[t._v(t._s(e.investors))])])})),0)]},proxy:!0}])})],1)],1),s("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[s("span",{staticClass:"headline indigo--text text--darken-3"},[t._v("Top Traders")]),s("p",{staticClass:"text-center caption"},[t._v(" Combined top 5 traders' performance $429,181 (66258.3 pips). ")]),s("v-card",{staticClass:"mt-10 mx-auto elevation-3",attrs:{"min-height":"286"}},[s("v-sparkline",{attrs:{fill:t.fill,gradient:t.gradient,"line-width":t.width,height:"200",padding:t.padding,smooth:t.radius||!1,value:t.value,"auto-draw":""}})],1)],1),s("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[s("span",{staticClass:"headline indigo--text text--darken-3"},[t._v("Market Sentiment")]),s("p",{staticClass:"text-center caption"},[t._v("Currency Pairs selected by ZuluTraders during the last 4 hours")]),s("v-card",{staticClass:"mt-5 mx-auto elevation-3",staticStyle:{"background-color":"transparent !important"},attrs:{elevation:"0"}},[s("v-row",[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",[s("span",[t._v("EUR/USD")]),s("v-container",[s("v-progress-linear",{attrs:{active:t.active,"background-opacity":t.opacity,bottom:t.bottom,height:t.height,rounded:t.rounded,value:t.progressValue,color:"indigo"}}),s("v-spacer")],1),s("v-divider",{staticClass:"mx-4"}),s("v-card-actions",[s("v-btn",{staticClass:"buyBtn",attrs:{text:"",disabled:""}},[s("span",{staticClass:"buyBtn"},[t._v("buy")]),s("span",{staticClass:"buyBtnSub"},[t._v("15.4%")])]),s("br"),s("v-spacer"),s("v-btn",{staticClass:"sellBtn",attrs:{text:"",disabled:""}},[t._v("sell"),s("span",{staticClass:"sellBtnSub"},[t._v("15.4%")])])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",[s("span",[t._v("EUR/USD")]),s("v-container",[s("v-progress-linear",{attrs:{active:t.active,"background-opacity":t.opacity,bottom:t.bottom,height:t.height,rounded:t.rounded,value:t.progressValue,color:"indigo"}}),s("v-spacer")],1),s("v-divider",{staticClass:"mx-4"}),s("v-card-actions",[s("v-btn",{staticClass:"buyBtn",attrs:{text:"",disabled:""}},[s("span",{staticClass:"buyBtn"},[t._v("buy")]),s("span",{staticClass:"buyBtnSub"},[t._v("15.4%")])]),s("br"),s("v-spacer"),s("v-btn",{staticClass:"sellBtn",attrs:{text:"",disabled:""}},[t._v("sell"),s("span",{staticClass:"sellBtnSub"},[t._v("15.4%")])])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",[s("span",[t._v("EUR/USD")]),s("v-container",[s("v-progress-linear",{attrs:{active:t.active,"background-opacity":t.opacity,bottom:t.bottom,height:t.height,rounded:t.rounded,value:t.progressValue,color:"indigo"}}),s("v-spacer")],1),s("v-divider",{staticClass:"mx-4"}),s("v-card-actions",[s("v-btn",{staticClass:"buyBtn",attrs:{text:"",disabled:""}},[s("span",{staticClass:"buyBtn"},[t._v("buy")]),s("span",{staticClass:"buyBtnSub"},[t._v("15.4%")])]),s("br"),s("v-spacer"),s("v-btn",{staticClass:"sellBtn",attrs:{text:"",disabled:""}},[t._v("sell"),s("span",{staticClass:"sellBtnSub"},[t._v("15.4%")])])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-card",[s("span",[t._v("EUR/USD")]),s("v-container",[s("v-progress-linear",{attrs:{active:t.active,"background-opacity":t.opacity,bottom:t.bottom,height:t.height,rounded:t.rounded,value:t.progressValue,color:"indigo"}}),s("v-spacer")],1),s("v-divider",{staticClass:"mx-4"}),s("v-card-actions",[s("v-btn",{staticClass:"buyBtn",attrs:{text:"",disabled:""}},[s("span",{staticClass:"buyBtn"},[t._v("buy")]),s("span",{staticClass:"buyBtnSub"},[t._v("15.4%")])]),s("br"),s("v-spacer"),s("v-btn",{staticClass:"sellBtn",attrs:{text:"",disabled:""}},[t._v("sell"),s("span",{staticClass:"sellBtnSub"},[t._v("15.4%")])])],1)],1)],1)],1)],1)],1)],1)],1)],1)]),s("v-sheet",{attrs:{height:"150"}}),s("v-sheet",{staticClass:"sheet2 mt-12"},[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[s("v-card",{staticClass:"mx-auto disc",attrs:{flat:""}},[s("v-card-text",{staticClass:"mb-3 blue-grey--text body-1 mt-5"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem maiores, sunt culpa consequatur in, qui voluptas ad amet est perspiciatis tenetur velit asperiores, alias atque nulla animi necessitatibus sequi? Qooi voluptas ad amet est perspiciatis tenetur velit asperiores, alias atque nulla animi necessitatibus sequi? ")]),s("v-card-text",{staticClass:"ml-n-5",staticStyle:{"text-align":"center !important"}},[s("v-icon",{attrs:{size:"100",color:"pink darken-2"}},[t._v(t._s(t.speedIcon2))]),s("span",{staticClass:"purple--text font-weight-bold",staticStyle:{"font-size":"2rem !important"}},[t._v("221")])],1)],1),s("v-btn",{attrs:{large:"",ripple:"",outlined:"",color:"indigo"}},[t._v("Explore"),s("v-icon",{attrs:{right:""}},[t._v(t._s(t.speedIcon1))])],1),s("v-btn",{staticClass:"ml-2",attrs:{large:"",dark:"",color:"indigo"}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(t.findIcon))]),t._v("discover people")],1)],1),s("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[s("v-img",{attrs:{src:a("8b36")}})],1)],1)],1)],1),s("v-sheet",[s("v-row",[s("v-card",{attrs:{flat:""}},[s("v-container",[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[s("v-card",{attrs:{flat:""}},[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"4",sm:"6"}},[s("v-img",{attrs:{src:a("001e"),contain:""}})],1),s("v-col",{attrs:{cols:"12",md:"6",sm:"6"}},[s("h6",{staticClass:"text-center font-weight-light pink--text text--darken-3",staticStyle:{"font-size":"1.1rem !important"}},[s("span",{staticClass:"font-weight-bold"},[t._v("Spak")]),t._v(" your mobile")]),s("v-card-text",{staticStyle:{"text-align":"left !important"}},[t._v(" Check out our Android, iPhone, iPad and desktop widget apps. ")]),s("v-card-actions",{staticClass:"text-center"},[s("v-btn",{staticStyle:{"text-transform":"lowercase !important"},attrs:{dark:"",color:"pink darken-4",rounded:""}},[t._v("download now")])],1)],1)],1)],1)],1)],1),s("v-divider",{attrs:{vertical:""}}),s("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[s("v-card",{attrs:{flat:""}},[s("v-container",[s("v-card-title",{staticClass:"font-weight-light grey--text"},[t._v("testimonials: ")]),s("v-card-text",{staticClass:"body-1"},[s("i",[t._v(" The social aspect with Traders makes for an educational experience and transparent service. The analytics are very useful ")])]),s("p",{staticClass:"text-right"},[s("b",[t._v("Omar - AAA635899F")])])],1)],1)],1),s("v-divider",{attrs:{vertical:""}}),s("v-col",{attrs:{cols:"12",md:"3",sm:"12"}},[s("v-card",{attrs:{flat:""}},[s("v-container",[s("v-card-title",{staticClass:"font-weight-light grey--text"},[t._v("as seen in: ")]),s("v-card-text",{staticClass:"body-1 text-center"},[s("v-avatar",{attrs:{tile:"",size:"100"}},[s("v-icon",[t._v(t._s(t.newsIcon))])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),s("v-sheet",{staticClass:"mt-5 account blue-grey lighten-5"},[s("v-container",[s("h5",{staticClass:"text-center title"},[t._v("Join us at Spaktrade")]),s("v-card-text",{staticClass:"body-1",staticStyle:{"text-align":"center !important"}},[t._v(" Create a real money account Or practise with a Demo ")]),s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"6",sm:"12"}}),s("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[s("v-card",{attrs:{elevation:"1"}},[s("v-container",[s("form",{attrs:{action:""}},[s("v-row",[s("v-col",{attrs:{cols:"12",md:"6",sm:"6"}},[s("v-text-field",{attrs:{label:"First Name",outlined:"",type:"text",dense:"",required:""}})],1),s("v-col",{attrs:{cols:"12",md:"6",sm:"6"}},[s("v-text-field",{attrs:{label:"Last Name",outlined:"",type:"text",dense:"",required:""}})],1),s("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[s("v-text-field",{attrs:{label:"E-mail",type:"email",outlined:"",required:""}})],1),s("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[s("v-text-field",{attrs:{label:"Password",type:"password",outlined:"",required:""}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12",md:"3",sm:"3"}},[s("v-select",{attrs:{items:t.items,rules:[function(t){return!!t||"Item is required"}],label:"+234",required:"",outlined:""}})],1),s("v-col",{attrs:{cols:"12",md:"9",sm:"9"}},[s("v-text-field",{attrs:{outlined:"",label:"phone number",type:"number",required:""}})],1)],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"6",sm:"6"}},[s("v-switch",{staticClass:"ma-2",attrs:{label:"Demo Account"},model:{value:t.disabled,callback:function(e){t.disabled=e},expression:"disabled"}})],1),s("v-col",{attrs:{cols:"12",md:"6",sm:"6"}},[s("v-switch",{staticClass:"ma-2",attrs:{label:"Real Account"},model:{value:t.disabled,callback:function(e){t.disabled=e},expression:"disabled"}})],1),s("v-container",[s("div",{staticClass:"text-center"},[s("v-checkbox",{attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],label:"I have read and I accept the Terms and Conditions and the Privacy Policy of SpakTrade.",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1)])],1),s("div",{staticClass:"text-center"},[s("v-container",[s("v-btn",{staticClass:"text-center indigo",attrs:{dark:"",rounded:"",block:""}},[t._v("Create Account")])],1)],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"3",sm:"4"}},[s("v-divider")],1),s("v-col",{attrs:{cols:"12",md:"4",sm:"4"}},[s("span",{staticClass:"ml-6 signUp"},[t._v("Or Sign up using ")])]),s("v-col",{attrs:{cols:"12",md:"3",sm:"4"}},[s("v-divider")],1)],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"4",sm:"6"}},[s("v-btn",{staticClass:"facebook font-weight-bold",staticStyle:{"text-transform":"lowercase !important","font-size":"1.2rem !important"},attrs:{rounded:"",block:"",dark:""}},[t._v("facebook")])],1),s("v-col",{attrs:{cols:"12",md:"4",sm:"6"}},[s("v-btn",{staticClass:"text--capitalize",staticStyle:{"text-transform":"none !important","font-size":"1.2rem !important"},attrs:{rounded:"",outlined:"",color:"blue-grey darken-4",block:""}},[s("span",{staticClass:"googleB font-weight-bold"},[t._v("G")]),s("span",{staticClass:"googleR font-weight-bold"},[t._v("o")]),s("span",{staticClass:"googleY font-weight-bold"},[t._v("o")]),s("span",{staticClass:"googleB font-weight-bold"},[t._v("g")]),s("span",{staticClass:"googleG font-weight-bold"},[t._v("l")]),s("span",{staticClass:"googleR font-weight-bold"},[t._v("e")])])],1)],1),s("div",{staticClass:"text-center"},[s("p",{staticClass:"caption blue-grey--text"},[t._v("We will never post anything without your permission")])])],1)])],1)],1)],1)],1)],1)],1)],1)},z=[],R=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],M={data:function(){return{speedIcon1:x["k"],speedIcon2:x["j"],findIcon:x["d"],testIcon:x["e"],newsIcon:x["g"],fill:!0,gradient:R[3],gradients:R,padding:8,radius:10,value:[0,4,6,7,8,9,10,6,9,0],width:2,active:!0,height:7,progressValue:30,items:[{name:"Fujinch",amount:"$4k",investors:19},{name:"John smith",amount:"$100",investors:2180},{name:"Alex00",amount:"$4k",investors:120},{name:"PORTO",amount:"$21",investors:69},{name:"Veronica",amount:"$67",investors:1109}]}}},N=M,J=(a("bf8f"),a("8212")),H=a("b0af"),Y=a("99d9"),G=a("ac7c"),Q=a("62ad"),W=a("a523"),Z=a("ce7e"),K=a("8e36"),X=a("0fd9"),tt=a("b974"),et=a("8dd9"),at=a("1f4f"),st=a("7f2e"),it=a("b73d"),rt=a("8654"),nt=Object(c["a"])(N,U,z,!1,null,"f7a85ec8",null),ot=nt.exports;d()(nt,{VAvatar:J["a"],VBtn:V["a"],VCard:H["a"],VCardActions:Y["a"],VCardText:Y["b"],VCardTitle:Y["c"],VCheckbox:G["a"],VCol:Q["a"],VContainer:W["a"],VDivider:Z["a"],VIcon:S["a"],VImg:L["a"],VProgressLinear:K["a"],VRow:X["a"],VSelect:tt["a"],VSheet:et["a"],VSimpleTable:at["a"],VSpacer:T["a"],VSparkline:st["a"],VSwitch:it["a"],VTextField:rt["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"indigo darken-4 white--text text-center",attrs:{flat:"",tile:""}},[a("v-card-text",t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1),a("v-card-text",{staticClass:"white--text pt-0"},[t._v(" Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ")]),a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[a("v-list",{staticClass:"indigo darken-3 listz",attrs:{disabled:""}},[a("v-card-title",{staticClass:"text-center font-weight-bold",staticStyle:{"text-align":"center !important"}},[t._v("Connect")]),a("v-card-text",{staticStyle:{"text-align":"left !important"}},[t._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore quo eum. Deserunt perferendis incidunt corporis est, alias repudiandae ullam sunt soluta qui, ipsa provident quia animi voluptates eos beatae! ")])],1)],1),a("v-col",{attrs:{cols:"12",md:"5",sm:"12"}},[a("v-sheet",{attrs:{color:"indigo darken-4"}},[a("v-form",[a("v-text-field",{attrs:{label:"Contact Us",outlined:"",rounded:"",solo:"",color:""}})],1)],1),a("v-btn",[t._v("send "),a("v-icon",{attrs:{right:""}},[t._v(t._s(t.sendIcon))])],1)],1)],1)],1),a("v-divider"),a("v-card-text",{staticClass:"white--text grey darken-4"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",{staticClass:"overline"},[t._v("spak trade")]),a("span",{staticClass:"ml-2",attrs:{id:"footer-text"}},[t._v("© Copyright All Rights reserved")])])],1)],1)},lt=[],dt={data:function(){return{sendIcon:x["h"],icons:["fab fa-facebook","fab fa-twitter","fab fa-google-plus","fab fa-linkedin","fab fa-instagram"],footerItems:[{text:"Lorem Ipsum Dolor",icon:x["h"]},{text:"Lorem Ipsum Dolor",icon:x["h"]},{text:"Lorem Ipsum Dolor",icon:x["h"]},{text:"Lorem Ipsum Dolor",icon:x["h"]},{text:"Lorem Ipsum Dolor",icon:x["h"]}]}}},ut=dt,vt=(a("ba38"),a("553a")),mt=a("4bd4"),pt=a("8860"),ft=Object(c["a"])(ut,ct,lt,!1,null,"2ccc13c8",null),bt=ft.exports;d()(ft,{VBtn:V["a"],VCard:H["a"],VCardText:Y["b"],VCardTitle:Y["c"],VCol:Q["a"],VContainer:W["a"],VDivider:Z["a"],VFooter:vt["a"],VForm:mt["a"],VIcon:S["a"],VList:pt["a"],VRow:X["a"],VSheet:et["a"],VTextField:rt["a"]});var gt={name:"Home",components:{"app-bar":q,carousel:F,"home-body":ot,"footer-app":bt}},ht=gt,_t=a("f6c4"),xt=Object(c["a"])(ht,b,g,!1,null,null,null),Ct=xt.exports;d()(xt,{VMain:_t["a"]});var yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],kt={},Vt=Object(c["a"])(kt,yt,wt,!1,null,null,null),St=Vt.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{outlined:"",color:"white"}},s),[t._v("Login")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("h1",[t._v("Login interface Under development")]),a("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v("close")])],1)],1)},It=[],jt={data:function(){return{dialog:!1}}},qt=jt,Bt=a("169a"),Ot=Object(c["a"])(qt,Tt,It,!1,null,null,null),At=Ot.exports;d()(Ot,{VBtn:V["a"],VCard:H["a"],VDialog:Bt["a"]});var Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({staticClass:"ml-2",attrs:{outlined:"",color:"white"}},s),[t._v("Sign-Up")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("h1",[t._v("Signup interface Under development")]),a("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v("close")])],1)],1)},Dt=[],Et={data:function(){return{dialog:!1}}},Lt=Et,$t=Object(c["a"])(Lt,Pt,Dt,!1,null,null,null),Ft=$t.exports;d()($t,{VBtn:V["a"],VCard:H["a"],VDialog:Bt["a"]}),s["a"].use(f["a"]);var Ut=[{path:"/",name:"Home",component:Ct},{path:"/about",name:"About",component:St},{path:"/login",name:"Login",component:At},{path:"/signup",name:"Signjup",component:Ft}],zt=new f["a"]({mode:"history",base:"/",routes:Ut}),Rt=zt,Mt=a("2f62");s["a"].use(Mt["a"]);var Nt=new Mt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Jt=a("f309");s["a"].use(Jt["a"]);var Ht=new Jt["a"]({icons:{iconfont:"mdiSvg"}});s["a"].config.productionTip=!1,new s["a"]({router:Rt,store:Nt,vuetify:Ht,render:function(t){return t(m)}}).$mount("#app")},"57a7":function(t,e,a){},"68d6":function(t,e,a){},"87b9":function(t,e,a){"use strict";var s=a("1f6f"),i=a.n(s);i.a},"8b36":function(t,e,a){t.exports=a.p+"img/discover.2fc33819.svg"},"9cb9":function(t,e,a){"use strict";var s=a("68d6"),i=a.n(s);i.a},ba38:function(t,e,a){"use strict";var s=a("e6ce"),i=a.n(s);i.a},bf8f:function(t,e,a){"use strict";var s=a("57a7"),i=a.n(s);i.a},e6ce:function(t,e,a){}});
//# sourceMappingURL=app.3cd6482e.js.map