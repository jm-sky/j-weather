import Vue from 'vue'

export default ({ app }) => {
  // console.log('[boot][app]', app);
  app.data = app.data || {};
  app.data.KEYS = {};
  app.data.KEYS.OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
  app.data.weatherData = null;
  app.data.backgroundColor = '#046';
}
