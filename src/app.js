var App = {};

App = {
  //TODO uncomment this
  init: function(time = "UPSNext" /*, state*/){
    var state = "KY";
    var current = this.getFormatDate(-1);
    var adjustment = this.getAdjustment(time,state);
      var endtime = this.getFormatDate(adjustment);
        $('#calendar').fullCalendar({
//          defaultData: current,
          editable: false,
          hiddenDays: [6],
          events:
            [
              {
                title: 'Delivery',
                start: endtime+"T20:59:59"
              },
          /*    {
                title: 'Delivery',
                start: '2018-06-16',
                end: '2018-06-17'//endtime
              },
*/
          ],
  })
  $(".fc-time").hide();``
  $(".fc-right").hide();
},

  getFormatDate: function(adjustment) {
    var dateObj = new Date();
    var month = dateObj.getMonth() + 1;
    if(adjustment === -1) {
        var day = dateObj.getDate() + 1;
    } else {
      var day = dateObj.getDate() + adjustment + 1;
      if(day > 31) {
        var month = dataObj.getMonth() + 2;
        if(month > 12) {
          month = 1;
        }
        var day = 1;
      }
      for(var n = 0;n < adjustment;n++) {
        var tmpday = dateObj.getDay();
        if(tmpday + n == 4) {
          day++;
        }
      }
    }
    var year = dateObj.getFullYear();
    if(month > 9) {
       var newdate = year + "-" + month + "-" + day;
    } else {
      var newdate = newdate = year + "-0" + month + "-" + day;
    }
    console.log(newdate);
    return newdate;
  },

  getAdjustment: function(plan,state) {
          var data = {
            "ground": {
              "CA": 2,
              "OR": 3,
              "WA": 3,
              "NV": 2,
              "UT": 2,
              "ID": 3,
              "MT": 4,
              "AZ": 2,
              "WY": 3,
              "CO": 3,
              "NM": 3,
              "TX": 4,
              "OK": 3,
              "KS": 4,
              "NE": 4,
              "SD": 4,
              "ND": 4,
              "MN": 5,
              "IA": 4,
              "MO": 4,
              "AR": 4,
              "LA": 4,
              "WI": 4,
              "IL": 4,
              "KY": 4,
              "TN": 4,
              "MS": 4,
              "AL": 4,
              "GA": 4,
              "FL": 4,
              "SC": 5,
              "NC": 5,
              "VA": 5,
              "WV": 5,
              "OH": 4,
              "MD": 4,
              "DE": 4,
              "PA": 4,
              "NJ": 4,
              "CT": 5,
              "NY": 5,
              "MA": 5,
              "NH": 5,
              "VT": 5,
              "ME": 5,
              "RI": 5,
              "HI": 3,
              "AK": 3,
              "MI": 4,
              "IN": 4
            },
            "UPS2": {
              "title": "UPS2nd Day Air",
              "value": 2
            },
            "UPSNext": {
              "title": "UPSNext Day Air Save",
              "value": 1
            }
          }

        if(plan == 'ground') {
          return data[plan][state];
        } else {
          return data[plan].value;
        }
  }
}
