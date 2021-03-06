const Crawler = require("crawler");
const config = require("./config");
const {
  userAgent,
  goubanjia,
  ip66,
  data5u,
  xdaili,
  xicidaili,
  ip3366,
  coderbusy,
  nianshao,
  proxydb
} = config;
const crawler = new Crawler();
crawler.direct({
  uri: proxydb.uri,
  userAgent: config.userAgent,
  callback: function(error, response) {
    if (error) {
      return console.log(error);
    }

    if (response && response.statusCode !== 200) {
      return console.log(response);
    }

    proxydb.callback(response.$, response);
  }
});
