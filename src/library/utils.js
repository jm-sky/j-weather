const $utils = {
  //--------------------------------------------
  makeQueryParams(params = {}) {
    let queryParams = [];

    Object.keys(params).forEach(key => {
      queryParams.push(`${key}=${params[key]}`);
    })

    return queryParams.join('&')
  },
  //--------------------------------------------
  parseJSON(string) {
    let jsonObject = null;

    if (typeof string == 'object') {
      return string
    }

    try {
      jsonObject = JSON.parse(string);
    } catch(_) {
      console.warn('Could not parse JSON string', string);
    }

    return jsonObject
  },
  //--------------------------------------------
}

module.exports = $utils;
