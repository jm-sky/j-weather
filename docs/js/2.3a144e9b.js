(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0565":function(t,e,a){"use strict";a("16f0")},"16f0":function(t,e,a){},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex column"},[a("div",{staticClass:"bg"}),a("div",{staticClass:"col q-pt-lg q-px-md"},[a("q-input",{attrs:{placeholder:"Search",dark:"",borderless:""},scopedSlots:t._u([{key:"before",fn:function(){return[a("q-icon",{attrs:{name:"my_location"},on:{click:t.getMyLocation}})]},proxy:!0},{key:"append",fn:function(){return[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"search"}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t.weatherData?[a("div",{staticClass:"col text-white text-center"},[a("div",{staticClass:"text-h4 text-weight-light"},[t._v("\n        "+t._s(t.weatherData.name||"n/a")+"\n      ")]),a("div",{staticClass:"text-h6 text-weight-light"},[t._v("\n        "+t._s(t.weatherData.weather[0].main)+"\n      ")]),a("div",{staticClass:"text-h1 text-weight-thin relative-position"},[a("span",[t._v(t._s(Math.round(t.weatherData.main.temp)))]),a("span",{staticClass:"text-h4 degree"},[t._v("°C")])])]),a("div",{staticClass:"col text-center"},[a("img",{attrs:{src:""+t.imgUrl+t.weatherData.weather[0].icon+"@2x.png"}})])]:[a("div",{staticClass:"col column text-center text-white"},[a("div",{staticClass:"col text-h2 text-weight-thin"},[t._v("\n        J-Weather\n      ")]),a("q-btn",{staticClass:"col",attrs:{flat:""},on:{click:t.getMyLocation}},[a("q-icon",{attrs:{left:"",size:"3em",name:"my_location"}}),a("div",[t._v("Find My Location")])],1)],1)],t.message?a("div",{staticClass:"message q-pa-md text-white text-center",on:{click:function(e){t.message=null}}},[t._v("\n    "+t._s(t.message)+"\n  ")]):t._e(),a("div",{staticClass:"col skyline"})],2)},i=[],o={name:"PageIndex",data(){return{loading:!1,search:"",coords:null,weatherData:null,message:null,apiKey:"890e1ed76977a47038cb1d1864269f10",apiUrl:"https://api.openweathermap.org/data/2.5/weather",imgUrl:"http://openweathermap.org/img/wn/",units:"metric"}},computed:{lat(){return this.coords.latitude},lon(){return this.coords.longitude}},methods:{noLocationDataError(){this.message="No location data available"},getMyLocation(){console.log("[getMyLocation]"),this.$q.loading.show({delay:200}),navigator.geolocation.getCurrentPosition((t=>{console.log("[getMyLocation] position:",t),this.$q.loading.hide(),this.coords=t.coords,this.getWeatherByCoords()}),(t=>{this.$q.loading.hide(),this.noLocationDataError()}))},getWeatherByCoords(){return console.log("[getWeatherByCoords] coords:",this.coords),this.lat&&this.lon?(this.$q.loading.show({delay:200}),void this.$axios(`${this.apiUrl}?lat=${this.lat}&lon=${this.lon}&units=${this.units}&appid=${this.apiKey}`).then((t=>{this.$q.loading.hide(),this.weatherData=t.data})).catch((t=>{this.$q.loading.hide(),this.message="Could not load weather data..."}))):this.noLocationDataError()},getWeatherBySearch(){console.log("[getWeatherByCoords] search:",this.search),this.$axios(`${this.apiUrl}?q=${this.search}&units=${this.units}&appid=${this.apiKey}`).then((t=>{this.weatherData=t.data})).catch((t=>{this.message="Could not load weather data..."}))}}},n=o,r=(a("0565"),a("2877")),l=a("9989"),c=a("27f9"),h=a("0016"),d=a("9c40"),g=a("eebe"),u=a.n(g),p=Object(r["a"])(n,s,i,!1,null,null,null);e["default"]=p.exports;u()(p,"components",{QPage:l["a"],QInput:c["a"],QIcon:h["a"],QBtn:d["a"]})}}]);