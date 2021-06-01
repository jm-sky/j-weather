<template>
<q-page class="flex column">
  <div class="bg"></div>

  <div class="col q-pt-lg q-px-md">
    <q-input v-model="search" placeholder="Search" dark borderless>
      <template v-slot:before>
        <q-icon @click="getMyLocation" name="my_location" />
      </template>

      <template v-slot:append>
        <q-btn round dense flat icon="search" />
      </template>
    </q-input>
  </div>

  <template v-if="weatherData">
    <div class="col text-white text-center">
      <div class="text-h4 text-weight-light">
        {{ weatherData.name || 'n/a' }}
      </div>
      <div class="text-h6 text-weight-light">
        {{ weatherData.weather[0].main }}
      </div>
      <div class="text-h1 text-weight-thin relative-position">
        <span>{{ Math.round(weatherData.main.temp) }}</span>
        <span class="text-h4 degree">&deg;C</span>
      </div>
    </div>

    <div class="col text-center">
      <img :src="`${imgUrl}${ weatherData.weather[0].icon }@2x.png`" />
    </div>

  </template>

  <template v-else>
    <div class="col column text-center text-white">
      <div class="col text-h2 text-weight-thin">
        J-Weather
      </div>
      <q-btn @click="getMyLocation" class="col" flat>
        <q-icon left size="3em" name="my_location" />
        <div>Find My Location</div>
      </q-btn>
    </div>
  </template>

  <div v-if="message" @click="message = null" class="message q-pa-md text-white text-center">
    {{ message }}
  </div>

  <div class="col skyline"></div>
</q-page>

</template>

<script>
export default {
  //====================================================
  name: 'PageIndex',
  //====================================================
  data() {
    return {
      loading: false,
      search: '',
      coords: null,
      weatherData: null,
      message: null,
      apiKey: null,
      apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
      imgUrl: 'http://openweathermap.org/img/wn/',
      units: 'metric'
    }
  },
  //====================================================
  computed: {
    //==============
    lat() {
      return this.coords.latitude;
    },
    //==============
    lon() {
      return this.coords.longitude;
    },
    //==============
  },
  //====================================================
  methods: {
    //==============
    noLocationDataError() {
      this.message = 'No location data available';
    },
    //==============
    getMyLocation() {
      console.log('[getMyLocation]')

      this.$q.loading.show({ delay: 200 });

      navigator.geolocation.getCurrentPosition(position => {
        console.log('[getMyLocation] position:', position)
        this.$q.loading.hide()
        this.coords = position.coords;
        this.getWeatherByCoords();
      }, _ => {
        this.$q.loading.hide()
        this.noLocationDataError();
      });
    },
    //==============
    getWeatherByCoords() {
      console.log('[getWeatherByCoords] coords:', this.coords)
      if (!this.lat) return this.noLocationDataError();
      if (!this.lon) return this.noLocationDataError();

      this.$q.loading.show({ delay: 200 });
      this.$axios(`${ this.apiUrl }?lat=${ this.lat }&lon=${ this.lon }&units=${ this.units }&appid=${ this.apiKey }`)
      .then(response => {
        this.$q.loading.hide()
        this.weatherData = response.data;
      })
      .catch(_ => {
        this.$q.loading.hide()
        this.message = 'Could not load weather data...';
      })
    },
    //==============
    getWeatherBySearch() {
      console.log('[getWeatherByCoords] search:', this.search)

      this.$axios(`${ this.apiUrl }?q=${ this.search }&units=${ this.units }&appid=${ this.apiKey }`)
      .then(response => {
        this.weatherData = response.data;
      })
      .catch(_ => {
        this.message = 'Could not load weather data...';
      })
    },
    //==============
    //==============
  }
  //====================================================
}
</script>

<style lang="scss">
.q-page {
  // background: linear-gradient(to bottom, #777a, #000a);
  background: radial-gradient(circle at top, #5558, #0008);
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #046;
  z-index: -1;
}

.degree {
  position: absolute;
  top: 0;
}

.skyline {
  flex: 0 0 100px;
  background: url('../assets/bg.png');
  background-size: contain;
  background-position: center bottom;
}

.message {
  width: calc(100vw);
  position: fixed;
  top: 80px;
  left: 0;
  background: #fff5;
}
</style>
