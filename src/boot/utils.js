import Vue from 'vue';
const $utils = require('../library/utils.js');

console.log('[$utils]', $utils);

Vue.prototype.$utils = $utils;
