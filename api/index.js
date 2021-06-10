const express = require('express');
const cors = require('cors');
const DotEnv = require('dotenv');
const axios = require('axios');
const $utils = require('../src/library/utils.js');

const app = express();
const port = 3000;
const parsedEnv = DotEnv.config().parsed
const OPENWEATHER_API_KEY = parsedEnv.OPENWEATHER_API_KEY;
const API_URL = parsedEnv.API_URL;
const GEOIP_URL = parsedEnv.GEOIP_URL;

app.use(cors());

//------------------------------------------------------
app.get('/', (req, res) => {
  res.send('Hello!');
});

//------------------------------------------------------
app.get('/api', (req, res) => {
  let params, queryParams;

  params = req.query;
  params.appid = OPENWEATHER_API_KEY;
  queryParams = $utils.makeQueryParams(params);

  axios(`${API_URL}?${queryParams}`)
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    res.json(error);
  })
});
//------------------------------------------------------


//------------------------------------------------------
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
