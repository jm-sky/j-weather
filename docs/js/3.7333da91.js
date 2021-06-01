(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0565":function(t,e,a){"use strict";a("16f0")},"16f0":function(t,e,a){},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex column"},[a("div",{staticClass:"col q-pt-md q-px-md"},[a("q-input",{attrs:{placeholder:"Search",dark:"",borderless:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getWeatherBySearch(e)},focus:function(t){t.target.select&&t.target.select()}},scopedSlots:t._u([{key:"before",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"my_location"},on:{click:t.getLocation}})]},proxy:!0},{key:"append",fn:function(){return[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"search"},on:{click:t.getWeatherBySearch}}),a("q-btn",{attrs:{to:"/settings",round:"",dense:"",flat:"",icon:"menu"}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t.weatherData?[a("div",{staticClass:"col text-white text-center"},[a("div",{staticClass:"q-py-sm text-h4 text-weight-light"},[t._v("\n        "+t._s(t.weatherData.name||"n/a")+"\n        "),a("sup",{staticStyle:{"font-size":"40%"}},[t._v(t._s(t.weatherData.sys.country))])]),a("div",{staticClass:"q-py-sm text-h6 text-weight-light"},[t._v("\n        "+t._s(t.weatherData.weather[0].main)+"\n      ")]),a("div",{staticClass:"q-py-sm text-h1 text-weight-thin relative-position"},[a("span",[t._v(t._s(Math.round(t.weatherData.main.temp)))]),a("span",{staticClass:"text-h4 degree"},[t._v("°C")])]),a("div",{staticClass:"q-pt-md detailed-view"},[t.detailedView.pressure?a("div",{staticClass:"q-py-xs"},[t._v("\n          Pressure "+t._s(t.weatherData.main.pressure)+" hPa\n        ")]):t._e(),t.detailedView.humidity?a("div",{staticClass:"q-py-xs"},[t._v("\n          Humidity: "+t._s(t.weatherData.main.humidity)+"%\n        ")]):t._e(),t.detailedView.windSpeed?a("div",{staticClass:"q-py-xs"},[t._v("\n          Wind speed: "+t._s(t.weatherData.wind.speed)+" m/s\n        ")]):t._e()])]),a("div",{staticClass:"col text-center"},[a("img",{attrs:{src:""+t.imgUrl+t.weatherData.weather[0].icon+"@2x.png"}})])]:[a("div",{staticClass:"col column text-center text-white"},[a("div",{staticClass:"col text-h2 text-weight-thin"},[t._v("\n        J-Weather\n      ")]),a("q-btn",{staticClass:"col",attrs:{flat:""},on:{click:t.getLocation}},[a("q-icon",{attrs:{left:"",size:"3em",name:"my_location"}}),a("div",[t._v("Find My Location")])],1)],1)],t.message?a("div",{staticClass:"message q-pa-md text-white text-center cursor-pointer",on:{click:function(e){t.message=null}}},[a("q-icon",{attrs:{name:"info"}}),t._v("\n    "+t._s(t.message)+"\n  ")],1):t._e(),a("div",{staticClass:"col skyline"})],2)},i=[];const o=!1;var n={name:"PageIndex",data(){return{loading:!1,search:"",message:null,apiKey:this.$root.KEYS.OPENWEATHER_API_KEY,apiUrl:"https://api.openweathermap.org/data/2.5/weather",imgUrl:"https://openweathermap.org/img/wn/",freegeoipUrl:"https://freegeoip.app/json/",units:"metric",backgroundColor:"#046"}},computed:{detailedView(){return this.$root.settings.show},coords:{get(){return this.$root.coords},set(t){this.$root.saveCoords(t)}},weatherData:{get(){return this.$root.weatherData},set(t){this.$root.weatherData=t}},lat(){return this.coords.latitude},lon(){return this.coords.longitude}},methods:{noLocationDataError(){this.message="No location data available"},getLocation(){o&&console.log("[getLocation]"),this.$q.loading.show({delay:100}),this.$q.platform.is.electron?this.$axios.get(this.freegeoipUrl).then((t=>{this.coords=t.data,this.getWeatherByCoords()})).catch((t=>{this.$q.loading.hide(),this.noLocationDataError()})):navigator.geolocation.getCurrentPosition((t=>{o&&console.log("[getLocation] position:",t),this.coords=t.coords,this.getWeatherByCoords()}),(t=>{this.$q.loading.hide(),this.noLocationDataError()}))},getWeatherByParams(t){let e,a;t.units=this.units,t.appid=this.apiKey,e=this.$utils.makeQueryParams(t),a=`${this.apiUrl}?${e}`,this.$q.loading.show({delay:100}),this.$axios(a).then((t=>{this.$q.loading.hide(),this.weatherData=t.data})).catch((t=>{this.$q.loading.hide(),this.message="Could not load weather data..."}))},getWeatherByCoords(){return o&&console.log("[getWeatherByCoords] coords:",this.coords),this.lat&&this.lon?void this.getWeatherByParams({lat:this.lat,lon:this.lon}):this.noLocationDataError()},getWeatherBySearch(){o&&console.log("[getWeatherByCoords] search:",this.search),this.getWeatherByParams({q:this.search})}},created(){this.$root.settings.saveLocation&&this.coords&&this.getWeatherByCoords()}},r=n,c=(a("0565"),a("2877")),h=a("9989"),l=a("27f9"),d=a("0016"),g=a("9c40"),p=a("eebe"),u=a.n(p),m=Object(c["a"])(r,s,i,!1,null,null,null);e["default"]=m.exports;u()(m,"components",{QPage:h["a"],QInput:l["a"],QIcon:d["a"],QBtn:g["a"]})}}]);