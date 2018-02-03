module.exports = {
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36",
  goubanjia: {
    uri: "http://www.goubanjia.com/",
    callback: $ => {
      const $tds = $("#list tbody tr td.ip");
      const ips = $tds
        .map((index, element) => {
          return $(element).text();
        })
        .get();
      console.log(ips);
    }
  },
  ip66: {
    uri: "http://m.66ip.cn/",
    callback: $ => {
      const $trs = $(".profit-c table tr");
      const ips = $trs
        .map((index, element) => {
          if (!index) {
            return "";
          }

          const $tds = $(element).find("td");
          const ip = $tds.eq(0).text();
          const port = $tds.eq(1).text();
          return `${ip}:${port}`;
        })
        .get()
        .filter(ip => ip);
      console.log(ips);
    }
  },
  data5u: {
    uri: "http://www.data5u.com/",
    callback: $ => {
      const $uls = $("ul.l2");
      const ips = $uls
        .map((index, element) => {
          const ip = $(element)
            .find("span")
            .eq(0)
            .text();
          const port = $(element)
            .find("span li.port")
            .text();
          return `${ip}:${port}`;
        })
        .get();
      console.log(ips);
    }
  },
  xdaili: {
    uri: "http://www.xdaili.cn/ipagent//freeip/getFreeIps?page=1&rows=10",
    callback: ($, response) => {
      const jsonResposne = JSON.parse(response.body);
      const { RESULT: { rows } } = jsonResposne;
      const ips = rows.map(({ ip, port }) => {
        return `${ip}:${port}`;
      });
      console.log(ips);
    }
  },
  xicidaili: {
    uri: "http://www.xicidaili.com/",
    callback: $ => {
      const $trs = $("#ip_list tr[class!=subtitle]");
      const ips = $trs
        .map((index, element) => {
          const $ths = $(element).find("th");
          const $tds = $(element).find("td");
          if ($ths.length) {
            return "";
          }

          const ip = $tds.eq(1).text();
          const port = $tds.eq(2).text();

          return `${ip}:${port}`;
        })
        .get()
        .filter(ip => ip)
        .slice(0, 20 * 4); // 最后20条数据是sockets ip代理，所以剔除
      console.log(ips);
    }
  },
  proxylistplus: {
    uri: "https://list.proxylistplus.com/Fresh-HTTP-Proxy-List-1",
    callback: $ => {
      const $trs = $("table.bg tr.cells");
      const ips = $trs.map((index, element) => {
        const $tds = $(element).find("td");
        const ip = $tds.eq(1).text();
        const port = $tds.eq(2).text();
        return `${ip}:${port}`;
      });
      console.log(ips);
    }
  },
  ip3366: {
    uri: "http://www.ip3366.net/",
    callback: $ => {
      const $trs = $("#list tbody tr");
      const ips = $trs
        .map((index, element) => {
          const tds = $(element).find("td");
          const ip = tds.eq(0).text();
          const port = tds.eq(1).text();
          return `${ip}:${port}`;
        })
        .get();
      console.log(ips);
    }
  },
  coderbusy: {
    uri: "https://proxy.coderbusy.com/",
    callback: $ => {
      const $trs = $(".proxy-server-table tbody tr");
      const ips = $trs
        .map((index, element) => {
          const tds = $(element).find("td");
          const ip = tds
            .eq(0)
            .text()
            .replace(/\s+/g, "");
          const port = tds.eq(1).text();
          return `${ip}:${port}`;
        })
        .get();
      console.log(ips);
    }
  },
  nianshao: {
    uri: "http://www.nianshao.me/",
    callback: $ => {
      const $trs = $(".mainPanel table tbody tr");
      const ips = $trs
        .map((index, element) => {
          const tds = $(element).find("td");
          const ip = tds.eq(0).text();
          const port = tds.eq(1).text();
          return `${ip}:${port}`;
        })
        .get();
      console.log(ips);
    }
  },
  proxydb: {
    uri: "http://proxydb.net/",
    callback: $ => {
      const $trs = $(".container table tbody tr");
      const ips = $trs.map((index, element) => {
        console.log("----------");
        const scriptElement = $(element).find("td script");
        const scriptContent = scriptElement.html();
        eval(scriptContent);
        console.log(script.html());
        // const firstTd = tds.eq(0);
        // console.log(firstTd.html());
        // console.log(firstTd.length);
        // const link = $(firstTd).find("a");
        // console.log(link.length);
        // console.log(link);
        // const target = $(tds.eq(0))
        //   .find("a")
        //   .text();
        // console.log(target);
      });
    }
  }
};
