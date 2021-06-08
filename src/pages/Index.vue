<template>
<q-page class="flex column">

  <div class="col q-pt-md q-px-md">
    <q-input
        v-model="search"
        @keyup.enter="getWeatherBySearch"
        @focus="$event.target.select ? $event.target.select() : null"
        :placeholder="$t('Search')"
        dark
        borderless>
      <template v-slot:before>
        <q-icon @click="getLocation" name="my_location" class="cursor-pointer" />
      </template>

      <template v-slot:append>
        <q-btn @click="getWeatherBySearch" round dense flat icon="search" />
        <q-btn to="/settings" round dense flat icon="menu" />
      </template>
    </q-input>
  </div>

  <template v-if="weatherData">
    <div class="col text-white text-center">
      <div class="q-py-sm text-h4 text-weight-light">
        {{ weatherData.name || 'n/a' }}
        <sup style="font-size: 40%">{{ weatherData.sys.country }}</sup>
      </div>
      <div class="q-py-sm text-h6 text-weight-light">
        {{ weatherData.weather[0].main }}
      </div>
      <div class="q-py-sm text-h1 text-weight-thin relative-position">
        <span>{{ Math.round(weatherData.main.temp) }}</span>
        <span class="text-h4 degree">&deg;C</span>
      </div>

      <div class="q-pt-md detailed-view">
        <div v-if="detailedView.pressure" class="q-py-xs">
          {{ $t('Pressure') }} {{ weatherData.main.pressure	}} hPa
        </div>
        <div v-if="detailedView.humidity" class="q-py-xs">
          {{ $t('Humidity') }}: {{ weatherData.main.humidity  }}%
        </div>
        <div v-if="detailedView.windSpeed" class="q-py-xs">
          {{ $t('Wind speed') }}: {{ weatherData.wind.speed }} m/s
        </div>
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
        <div>{{ $t('Find My Location') }}</div>
      </q-btn>
    </div>
  </template>

  <div v-if="message" @click="message = null" class="message q-pa-md text-white text-center cursor-pointer">
    <q-icon name="info"></q-icon>
    {{ message }}
  </div>

  <div class="col skyline"></div>
</q-page>

</template>

<script>
const DEBUG = false;

export default {
  //====================================================
  name: 'PageIndex',
  //====================================================
  data() {
    return {
      loading: false,
      search: '',
      message: null,
      apiKey: process.env.OPENWEATHER_API_KEY,
      apiUrl: process.env.API_URL,
      imgUrl: process.env.IMG_URL,
      freegeoipUrl: process.env.FREEGEOIP_URL,
      units: process.env.UNITS || "metric",
      backgroundColor:  process.env.BACKGROUND_COLOR || "#046",
    }
  },
  //====================================================
  computed: {
    //==============
    detailedView() {
      return this.$root.settings.show;
    },
    //==============
    coords: {
      get() {
        return this.$root.coords;
      },
      set(coords) {
        this.$root.saveCoords(coords);
      }
    },
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

      this.$q.loading.show({ delay: 100 });

      if (this.$q.platform.is.electron) {
        this.$axios.get(this.freegeoipUrl)
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

      if (this.units) params.units = this.units;
      if (this.apiKey) params.appid = this.apiKey;

      queryParams = this.$utils.makeQueryParams(params);
      url = `${ this.apiUrl }?${ queryParams }`;

      this.$q.loading.show({ delay: 100 });
      this.$axios(url)
      .then(response => {
        this.$q.loading.hide();
        this.weatherData = response.data;
      })
      .catch(_ => {
        this.$q.loading.hide();
        this.message = `${this.$t('Could not load weather data')}...`;
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
  },
  //====================================================
  created() {
    if (this.$root.settings.saveLocation && this.coords) {
      this.getWeatherByCoords();
    }
  },
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

.detailed-view {
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
}
</style>
