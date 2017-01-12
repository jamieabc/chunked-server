var http = require('http');

http.createServer(function (request, response) {
  console.log('request.url: ', request.url);
  console.log('sending data...');

  // set response header to chunk transfer
  response.setHeader('Transfer-Encoding', 'chunked');

  // vast_error => vast_errors
  // video_imps => imps

  var common = [
    {
      "advertiser_name"      : "adv-testdata",
      "profit"               : 0.588373,
      "advertiser_category"  : "",
      "rev_ecpm"             : 9.992713950177937,
      "imps"                 : 562,
      "media_cost"           : 5.02753224,
      "convs"                : 0,
      "cost_ecpm"            : 8.945786903914591,
      "rev"                  : 5.61590524,
      "date"                 : "2016/11/18",
      "end_date"             : "",
      "advertiser_id"        : "1",
      "clicks"               : 561,
      "from_date"            : "",
      "time"                 : "00: 00: 00",
      "avg_watch_time"       : 5.0,
      "complete"             : 100,
      "cost_ecpv"            : 80.8,
      "est_total_watch_time" : 1000.0,
      "first_quartile"       : 25,
      "mid_point"            : 50,
      "rev_ecpv"             : 50.5,
      "skips"                : 300,
      "third_quartile"       : 75,
      "vast_errors"          : 10,
      "view_rate"            : 0.2,
      "views"                : 100,
      "vtr"                  : 0.5,
    }, {
      "advertiser_name"      : "adv-testdata",
      "profit"               : 0.63567293,
      "advertiser_category"  : "",
      "rev_ecpm"             : 9.992967364085668,
      "imps"                 : 607,
      "media_cost"           : 5.43005826,
      "convs"                : 0,
      "cost_ecpm"            : 8.945730247116968,
      "rev"                  : 6.06573119,
      "date"                 : "2016/11/18",
      "end_date"             : "",
      "advertiser_id"        : "1",
      "clicks"               : 606,
      "from_date"            : "",
      "time"                 : "08: 00: 00",
      "avg_watch_time"       : 5.0,
      "complete"             : 100,
      "cost_ecpv"            : 80.8,
      "est_total_watch_time" : 1000.0,
      "first_quartile"       : 25,
      "mid_point"            : 50,
      "rev_ecpv"             : 50.5,
      "skips"                : 300,
      "third_quartile"       : 75,
      "vast_errors"          : 10,
      "view_rate"            : 0.2,
      "views"                : 100,
      "vtr"                  : 0.5,
    }, {
      "advertiser_name"      : "adv-testdata",
      "profit"               : 0.85833431,
      "advertiser_category"  : "",
      "rev_ecpm"             : 9.99276094017094,
      "imps"                 : 819,
      "media_cost"           : 7.3257369,
      "convs"                : 0,
      "cost_ecpm"            : 8.9447336996337,
      "rev"                  : 8.18407121,
      "date"                 : "2016/11/18",
      "end_date"             : "",
      "advertiser_id"        : "1",
      "clicks"               : 819,
      "from_date"            : "",
      "time"                 : "02: 00: 00",
      "avg_watch_time"       : 5.0,
      "complete"             : 100,
      "cost_ecpv"            : 80.8,
      "est_total_watch_time" : 1000.0,
      "first_quartile"       : 25,
      "mid_point"            : 50,
      "rev_ecpv"             : 50.5,
      "skips"                : 300,
      "third_quartile"       : 75,
      "vast_errors"          : 10,
      "view_rate"            : 0.2,
      "views"                : 100,
      "vtr"                  : 0.5,
    }, {
      "advertiser_name"      : "adv-testdata",
      "profit"               : 0.7073624,
      "advertiser_category"  : "",
      "rev_ecpm"             : 9.992820874074074,
      "imps"                 : 675,
      "media_cost"           : 6.03779169,
      "convs"                : 0,
      "cost_ecpm"            : 8.944876577777778,
      "rev"                  : 6.74515409,
      "date"                 : "2016/11/18",
      "end_date"             : "",
      "advertiser_id"        : "1",
      "clicks"               : 675,
      "from_date"            : "",
      "time"                 : "04: 00: 00",
      "avg_watch_time"       : 5.0,
      "complete"             : 100,
      "cost_ecpv"            : 80.8,
      "est_total_watch_time" : 1000.0,
      "first_quartile"       : 25,
      "mid_point"            : 50,
      "rev_ecpv"             : 50.5,
      "skips"                : 300,
      "third_quartile"       : 75,
      "vast_errors"          : 10,
      "view_rate"            : 0.2,
      "views"                : 100,
      "vtr"                  : 0.5,
    }, {
      "advertiser_name"      : "adv-testdata",
      "profit"               : 0.19281542,
      "advertiser_category"  : "",
      "rev_ecpm"             : 9.992658641304349,
      "imps"                 : 184,
      "media_cost"           : 1.64583377,
      "convs"                : 0,
      "cost_ecpm"            : 8.94474875,
      "rev"                  : 1.83864919,
      "date"                 : "2016/11/18",
      "end_date"             : "",
      "advertiser_id"        : "1",
      "clicks"               : 183,
      "from_date"            : "",
      "time"                 : "05: 00: 00",
      "avg_watch_time"       : 5.0,
      "complete"             : 100,
      "cost_ecpv"            : 80.8,
      "est_total_watch_time" : 1000.0,
      "first_quartile"       : 25,
      "mid_point"            : 50,
      "rev_ecpv"             : 50.5,
      "skips"                : 300,
      "third_quartile"       : 75,
      "vast_errors"          : 10,
      "view_rate"            : 0.2,
      "views"                : 100,
      "vtr"                  : 0.5,
    }, {
      "advertiser_name"      : "adv-testdata",
      "profit"               : 0.87190962,
      "advertiser_category"  : "",
      "rev_ecpm"             : 9.992835564903848,
      "imps"                 : 832,
      "media_cost"           : 7.44212957,
      "convs"                : 0,
      "cost_ecpm"            : 8.944867271634614,
      "rev"                  : 8.31403919,
      "date"                 : "2016/11/18",
      "end_date"             : "",
      "advertiser_id"        : "1",
      "clicks"               : 833,
      "from_date"            : "",
      "time"                 : "03: 00: 00",
      "avg_watch_time"       : 5.0,
      "complete"             : 100,
      "cost_ecpv"            : 80.8,
      "est_total_watch_time" : 1000.0,
      "first_quartile"       : 25,
      "mid_point"            : 50,
      "rev_ecpv"             : 50.5,
      "skips"                : 300,
      "third_quartile"       : 75,
      "vast_errors"          : 10,
      "view_rate"            : 0.2,
      "views"                : 100,
      "vtr"                  : 0.5,
    }, {
      "advertiser_name"      : "adv-testdata",
      "profit"               : 0.08618514,
      "advertiser_category"  : "",
      "rev_ecpm"             : 9.99248,
      "imps"                 : 82,
      "media_cost"           : 0.73319822,
      "convs"                : 0,
      "cost_ecpm"            : 8.941441707317072,
      "rev"                  : 0.81938336,
      "date"                 : "2016/11/17",
      "end_date"             : "",
      "advertiser_id"        : "1",
      "clicks"               : 82,
      "from_date"            : "",
      "time"                 : "22: 00: 00",
      "avg_watch_time"       : 5.0,
      "complete"             : 100,
      "cost_ecpv"            : 80.8,
      "est_total_watch_time" : 1000.0,
      "first_quartile"       : 25,
      "mid_point"            : 50,
      "rev_ecpv"             : 50.5,
      "skips"                : 300,
      "third_quartile"       : 75,
      "vast_errors"          : 10,
      "view_rate"            : 0.2,
      "views"                : 100,
      "vtr"                  : 0.5,
    }, {
      "advertiser_name"      : "adv-testdata",
      "profit"               : 0.87877945,
      "advertiser_category"  : "",
      "rev_ecpm"             : 9.992793420738975,
      "imps"                 : 839,
      "media_cost"           : 7.50517423,
      "convs"                : 0,
      "cost_ecpm"            : 8.945380488676996,
      "rev"                  : 8.38395368,
      "date"                 : "2016/11/18",
      "end_date"             : "",
      "advertiser_id"        : "1",
      "clicks"               : 839,
      "from_date"            : "",
      "time"                 : "01: 00: 00",
      "avg_watch_time"       : 5.0,
      "complete"             : 100,
      "cost_ecpv"            : 80.8,
      "est_total_watch_time" : 1000.0,
      "first_quartile"       : 25,
      "mid_point"            : 50,
      "rev_ecpv"             : 50.5,
      "skips"                : 300,
      "third_quartile"       : 75,
      "vast_errors"          : 10,
      "view_rate"            : 0.2,
      "views"                : 100,
      "vtr"                  : 0.5,
    }, {
      "advertiser_name"      : "adv-testdata",
      "profit"               : 0.11004876,
      "advertiser_category"  : "",
      "rev_ecpm"             : 9.99248,
      "imps"                 : 105,
      "media_cost"           : 0.93916164,
      "convs"                : 0,
      "cost_ecpm"            : 8.944396571428571,
      "rev"                  : 1.0492104,
      "date"                 : "2016/11/18",
      "end_date"             : "",
      "advertiser_id"        : "1",
      "clicks"               : 106,
      "from_date"            : "",
      "time"                 : "09: 00: 00",
      "avg_watch_time"       : 5.0,
      "complete"             : 100,
      "cost_ecpv"            : 80.8,
      "est_total_watch_time" : 1000.0,
      "first_quartile"       : 25,
      "mid_point"            : 50,
      "rev_ecpv"             : 50.5,
      "skips"                : 300,
      "third_quartile"       : 75,
      "vast_errors"          : 10,
      "view_rate"            : 0.2,
      "views"                : 100,
      "vtr"                  : 0.5,
    }, {
      "advertiser_name"      : "adv-testdata",
      "profit"               : 0.07359593,
      "advertiser_category"  : "",
      "rev_ecpm"             : 9.99248,
      "imps"                 : 70,
      "media_cost"           : 0.62587767,
      "convs"                : 0,
      "cost_ecpm"            : 8.941109571428573,
      "rev"                  : 0.6994736,
      "date"                 : "2016/11/17",
      "end_date"             : "",
      "advertiser_id"        : "1",
      "clicks"               : 71,
      "from_date"            : "",
      "time"                 : "23: 00: 00",
      "avg_watch_time"       : 5.0,
      "complete"             : 100,
      "cost_ecpv"            : 80.8,
      "est_total_watch_time" : 1000.0,
      "first_quartile"       : 25,
      "mid_point"            : 50,
      "rev_ecpv"             : 50.5,
      "skips"                : 300,
      "third_quartile"       : 75,
      "vast_errors"          : 10,
      "view_rate"            : 0.2,
      "views"                : 100,
      "vtr"                  : 0.5,
    }
  ];

  const li_data = {
    "line_item_id"   : "1",
    "line_item_name" : "line item"
  };

  const cam_data = {
    "line_item_id"   : "1",
    "line_item_name" : "line item",
    "campaign_id"   : "1",
    "campaign_name" : "campaign"
  };

  const creative_data = {
    "line_item_id"   : "1",
    "line_item_name" : "line item",
    "campaign_id"   : "1",
    "campaign_name" : "campaign",
    "creative_id"   : "1",
    "creative_name" : "creative",
    "width"         : 200,
    "height"        : 320
  };

  var data;

  // for different url, generating different data set
  if (request.url.includes('advertiser')) {
    data = common;
  } else if (request.url.includes('line')) {
    data = common.map((obj) => {
      for (key in li_data) {
        obj[key] = li_data[key];
      }
      return obj;
    });
  } else if (request.url.includes('campaign')) {
    data = common.map((obj) => {
      for (key in cam_data) {
        obj[key] = cam_data[key];
      }
      return obj;
    });
  } else if (request.url.includes('creative')){
    data = common.map((obj) => {
      for (key in creative_data) {
        obj[key] = creative_data[key];
      }
      return obj;
    });
  } else {
    const token = {token: 'test_teken'}
    response.write(JSON.stringify(token));
    response.end();
    return;
  }

  var idx = 0;

  // loop through data, return each record with time stamp of 250 ms
  function loop(idx, times) {
    if (idx === times) {
      return;
    }

    (function loopWithDelay() {
      setTimeout(() => {
        if (idx < times) {
          response.write(JSON.stringify(common[idx]) + "\r\n");
          idx++;
          loop(idx, times);
        } else {
          response.end();
          return;
        }
      }, 250);
    })();
  }

  loop(0, data.length);

}).listen(9999, null);
