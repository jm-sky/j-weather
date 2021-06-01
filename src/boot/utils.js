import Vue from 'vue'

const $utils = {
  //--------------------------------------------
  makeQueryParams(params = {}) {
    let queryParams = [];

    Object.keys(params).forEach(key => {
      queryParams.push(`${key}=${params[key]}`);
    })

    return queryParams.join('&')
  }
  //--------------------------------------------
}

Vue.prototype.$utils = $utils;
