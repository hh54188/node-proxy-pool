const Crawler = require("crawler");
const config = require("./config");
const crawler = new Crawler();
crawler.direct({
  uri: "http://www.goubanjia.com/",
  userAgent: config.userAgent,
  callback: function(error, response) {
    if (error) {
      return console.log(error);
    }

    if (response && response.statusCode !== 200) {
      return console.log(response);
    }

    const $ = response.$;
    const $tds = $("#list tbody tr td.ip");
    const ips = $tds
      .map((index, element) => {
        return $(element).text();
      })
      .get();
    console.log(ips);
  }
});
