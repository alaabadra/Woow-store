const requestApi = require('request');

const requestModule = (options, cb) => {
  requestApi(options, (error, res, body) => {
    if (error) {
      cb(new TypeError('error'));
    } else {
      cb(null, body);
    }
  });
};
module.exports = {requestModule};