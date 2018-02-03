const Crawler = require("crawler");
const config = require("../crawlers/config");
const crawler = new Crawler();
crawler.direct({
  uri: "http://example.com",
  proxy: "http://112.114.78.12:8118",
  userAgent: config.userAgent,
  callback: function(error, response) {
    if (error) {
      return console.log(error);
    }

    if (response && response.statusCode !== 200) {
      return console.log(response);
    }
    const $ = response.$;
    console.log($("title").text());
  }
});
