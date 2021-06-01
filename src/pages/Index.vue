<template>
<q-page class="flex column">
  <!-- <div class="bg-overlay"></div> -->

  <div class="col q-pt-md q-px-md">
    <q-input
        v-model="search"
        @keyup.enter="getWeatherBySearch"
        @focus="$event.target.select ? $event.target.select() : null"
        placeholder="Search"
        dark
        borderless>
      <template v-slot:before>
        <q-icon @click="getLocation" name="my_location" />
      </template>

      <template v-slot:append>
        <q-btn @click="getWeatherBySearch" round dense flat icon="search" />
        <q-btn to="/settings" round dense flat icon="menu" />
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
      <q-btn @click="getLocation" class="col" flat>
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
const DEBUG = true;

export default {
  //====================================================
  name: 'PageIndex',
  //====================================================
  data() {
    return {
      loading: false,
      search: '',
      coords: null,
      message: null,
      apiKey: this.$root.KEYS.OPENWEATHER_API_KEY,
      apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
      imgUrl: 'http://openweathermap.org/img/wn/',
      units: 'metric',
      backgroundColor: '#046'
    }
  },
  //====================================================
  computed: {
    //==============
    weatherData: {
      get() {
        return this.$root.weatherData;
      },
      set(weatherData) {
        this.$root.weatherData = weatherData;
      }
    },
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
    getLocation() {
      if (DEBUG) console.log('[getLocation]')

      this.$q.loading.show({ delay: 200 });

      if (this.$q.platform.is.electron) {
        this.$axios.get('https://freegeoip.app/json/')
        .then(response => {
          this.coords = response.data;
          this.getWeatherByCoords();
        })
        .catch(_ => {
          this.$q.loading.hide()
          this.noLocationDataError();
        })
        return;
      }

      navigator.geolocation.getCurrentPosition(position => {
        if (DEBUG) console.log('[getLocation] position:', position)
        this.coords = position.coords;
        this.getWeatherByCoords();
      }, _ => {
        this.$q.loading.hide()
        this.noLocationDataError();
      });
    },
    //==============
    getWeatherByParams(params) {
      let queryParams, url;

      params.units = this.units;
      params.appid = this.apiKey;

      queryParams = this.$utils.makeQueryParams(params);
      url = `${ this.apiUrl }?${ queryParams }`;

      this.$q.loading.show({ delay: 200 });
      this.$axios(url)
      .then(response => {
        this.$q.loading.hide();
        this.weatherData = response.data;
      })
      .catch(_ => {
        this.$q.loading.hide();
        this.message = 'Could not load weather data...';
      })
    },
    //==============
    getWeatherByCoords() {
      if (DEBUG) console.log('[getWeatherByCoords] coords:', this.coords)
      if (!this.lat) return this.noLocationDataError();
      if (!this.lon) return this.noLocationDataError();

      this.getWeatherByParams({ lat: this.lat, lon: this.lon });
    },
    //==============
    getWeatherBySearch() {
      if (DEBUG) console.log('[getWeatherByCoords] search:', this.search)

      this.getWeatherByParams({ q: this.search });
    },
    //==============
  }
  //====================================================
}
</script>

<style lang="scss">
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
