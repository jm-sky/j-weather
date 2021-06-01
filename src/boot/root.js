import Vue from 'vue'

export default ({ app }) => {
  // console.log('[boot][app]', app);
  app.data = app.data || {};
  app.data.KEYS = {};
  app.data.KEYS.OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
  app.data.coords = null;
  app.data.weatherData = null;
  app.data.settings = {};
  app.data.settings.show = {};
  app.data.settings.show.pressure = true;
  app.data.settings.show.humidity = true;
  app.data.settings.show.windSpeed = true;
  app.data.settings.backgroundColor = '#046';
  app.data.settings.backgroundOverlay = true;
  app.data.settings.saveLocation = true;

  app.methods = app.methods || {};
  app.watch = app.watch || {};

  //--------------------------------------------------
  app.methods.saveCoords = function(coords) {
    coords = { accuracy: coords.accuracy,
               altitude: coords.altitude,
               altitudeAccuracy: coords.altitudeAccuracy,
               heading: coords.heading,
               latitude: coords.latitude,
               longitude: coords.longitude,
               speed: coords.speed };

    if (this.settings.saveLocation) {
      let json = JSON.stringify(coords);

      if (json.length > 4) {
        localStorage.setItem('coords', json);
      }
    }

    this.$root.coords = coords;
  }
  //--------------------------------------------------
  app.watch.settings = {
    deep: true,
    handler: function() {
      let json = JSON.stringify(this.settings);
      localStorage.setItem('settings', json);

      if (this.settings.saveLocation === false) {
        localStorage.removeItem('coords');
      }
    }
  }
  //--------------------------------------------------
  app.created = function() {
    let coords = this.$utils.parseJSON(localStorage.getItem('coords'));
    let settings = this.$utils.parseJSON(localStorage.getItem('settings'));

    if (coords) this.coords = coords;
    if (settings) {
      this.settings = Object.assign({}, this.settings, settings);
    }
  }
  //--------------------------------------------------
}
