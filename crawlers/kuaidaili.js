const Crawler = require("crawler");
const config = require("./config");
const crawler = new Crawler();
crawler.direct({
  uri: "http://www.kuaidaili.com/free/",
  userAgent: config.userAgent,
  callback: function(error, response) {
    if (error) {
      console.log(error);
    }
    const $ = response.$;
    console.log(response);
    // console.log($("title").text());
    //   const $trs = $("#list tbody tr");
    //   // console.log($trs);
    //   const ips = $trs.map((index, element) => {
    //     console.log(element);
    //     // const ipTd = $(element).find("td");
    //     // console.log(ipTd);
    //   });
  }
});
