(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{b41f:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"flex column content-center"},[e("div",{staticClass:"col q-pt-lg text-white text-center"},[e("div",{staticClass:"text-h4 text-weight-thin"},[t._v("Settings")]),e("div",{staticClass:"q-pt-lg fixed-top-right"},[e("q-btn",{attrs:{to:"/",flat:""}},[t._v("HOME")])],1),e("q-separator",{staticClass:"q-my-md",attrs:{inset:""}}),e("div",{staticClass:"q-py-xs"},[e("q-toggle",{attrs:{label:"Save location","left-label":""},model:{value:t.saveLocation,callback:function(s){t.saveLocation=s},expression:"saveLocation"}})],1),e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"q-py-xs"},[e("q-toggle",{attrs:{label:"Show pressure","left-label":""},model:{value:t.show.pressure,callback:function(s){t.$set(t.show,"pressure",s)},expression:"show.pressure"}})],1),e("div",{staticClass:"q-py-xs"},[e("q-toggle",{attrs:{label:"Show humidity","left-label":""},model:{value:t.show.humidity,callback:function(s){t.$set(t.show,"humidity",s)},expression:"show.humidity"}})],1),e("div",{staticClass:"q-py-xs"},[e("q-toggle",{attrs:{label:"Show wind speed","left-label":""},model:{value:t.show.windSpeed,callback:function(s){t.$set(t.show,"windSpeed",s)},expression:"show.windSpeed"}})],1),e("q-separator",{staticClass:"q-my-sm",attrs:{inset:""}}),e("div",{staticClass:"q-py-xs"},[e("q-toggle",{attrs:{label:"Background overlay","left-label":""},model:{value:t.backgroundOverlay,callback:function(s){t.backgroundOverlay=s},expression:"backgroundOverlay"}})],1),e("div",{staticClass:"q-py-xs"},[e("q-input",{staticClass:"my-input",attrs:{filled:"",label:"Background Color",dark:""},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[e("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-color",{model:{value:t.backgroundColor,callback:function(s){t.backgroundColor=s},expression:"backgroundColor"}})],1)],1)]},proxy:!0}]),model:{value:t.backgroundColor,callback:function(s){t.backgroundColor=s},expression:"backgroundColor"}})],1)],1)],1)])},a=[],l={name:"Settings",data(){return{}},computed:{saveLocation:{get(){return this.$root.settings.saveLocation},set(t){this.$root.settings.saveLocation=t}},show:{get(){return this.$root.settings.show},set(t){this.$root.settings.show=t}},backgroundOverlay:{get(){return this.$root.settings.backgroundOverlay},set(t){this.$root.settings.backgroundOverlay=t}},backgroundColor:{get(){return this.$root.settings.backgroundColor},set(t){this.$root.settings.backgroundColor=t}}}},r=l,n=e("2877"),i=e("9989"),c=e("9c40"),u=e("eb85"),d=e("9564"),p=e("27f9"),g=e("0016"),b=e("7cbe"),h=e("b498"),v=e("eebe"),k=e.n(v),w=Object(n["a"])(r,o,a,!1,null,null,null);s["default"]=w.exports;k()(w,"components",{QPage:i["a"],QBtn:c["a"],QSeparator:u["a"],QToggle:d["a"],QInput:p["a"],QIcon:g["a"],QPopupProxy:b["a"],QColor:h["a"]})}}]);