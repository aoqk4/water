$(document).ready(function () {
  // const contents = document.querySelector(".contents") // tbody 태그

  var sensors = [];
  // console.log(a);
  var i = 0,
    j = 0;
  var selURL;
  var charts = [];
  var selectVal = "hour";

  function postTemper(sensor) {
    // 시작 센서 데이터 불러옴
    var url = "http://61.103.243.89:8080/deviceAPI/post" + sensor;
    // http://61.103.243.89:8080/deviceAPI/{posttemper}
    console.log(url);
    var param = new Object();
    param.noticeSj = $("#noticeSj").val();
    // var data = []; // 전체 데이터 넣을 곳
    $.ajax({
      url: url,
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      async: false, // ture:비동기/false:동기 (기다렸다가 실행)
      data: JSON.stringify(param),
    }).done(function (result) {
      sensors = null;
      sensors = result;
      // console.log(a);
    });
  }

  function minus(a, b) {
    if ((a - b > 0.2 || b - a > 0.2) == true) {
      return true;
    } else {
      return false;
    }
  }

  function date(a, b) {
    a = Date.parse(a);
    b = Date.parse(b);

    if (a == b) {
      return true;
    } else {
      return false;
    }
  }

  var charts2 = [];
  
  function chart1() {
    $.ajax({
      url: "http://61.103.243.89:8080/deviceAPI/getcharthour",
      type: "GET",
      contentType: "application/json",
      dataType: "json",
      async: false, // ture:비동기/false:동기 (기다렸다가 실행)
    }).done(function (result) {
    	charts2 = result;
//      console.log(charts);
    });
  }
  
  var abc = setInterval(() => 	// status light
  {
	  chart1();
	  postTemper("temper");
	  postTemper("ph");
	  
	  var light_temper = $("#light_temper");
	  var light_ph = $("#light_ph");

	  var cha = charts2[0].created_at.split(" ");
	  var origin_date = cha[0]; // 가장 최근 원본 날짜(string)
//	  console.log(origin_date);
	  var origin_temper = charts2[0].temper; // 가장 최근 원본 데이터 **데이터가 별로 없어서 20일 날짜로 함! -> 원래는 charts[0].temper임
	  var origin_ph = charts2[0].ph; // 가장 최근 원본 데이터 **데이터가 별로 없어서 20일 날짜로 함! -> 원래는 charts[0].temper임
//	  console.log(origin_temper);
	  var origin_ph = charts2[0].ph;
	  var comp = sensors[0].date; // 가장 최근 센서 날짜(string)
//	  console.log(sensors[0].temper);
//	  console.log("555555555");

	  light_temper.css("background-color", "#b4cd93");
	  light_ph.css("background-color", "#b4cd93");
	  if (date(origin_date, comp) == true) {
	    // 날짜가 같으면
	    if (minus(origin_temper, sensors[0].temper) == true) {
	      // 원본데이터와 비교데이터 차이가 많이 나면
	      light_temper.css("background-color", "#c94e4e");
	    }
	    if (minus(origin_ph, sensors[0].ph) == true) {
		      // 원본데이터와 비교데이터 차이가 많이 나면
		      light_ph.css("background-color", "#c94e4e");
		    }
	  }
	  
  }, 3000);
  


  function for1(sensor) {
    var listDiv;
    var listBody;
    var cha = charts[2].created_at.split(" ");
    var origin_date = cha[0]; // 가장 최근 원본 날짜(string)
    var origin_sensor;

    for (i = 0; i < 50; i++) {
      var tr = $("<tr>");
      var td1 = $("<td>").text(sensors[i].date + " " + sensors[i].time);
      var td2;
      var comp = sensors[i].date;

      if (sensor == "temper") {
        origin_sensor = charts[2].temper; // 가장 최근 원본 비교 데이터 **데이터가 별로 없어서 20일 날짜로 함! -> 원래는 charts[0].temper임
        td2 = $("<td>").text(sensors[i].temper);
        //        light_temper.css("background-color","green");
        //        circle.css('background-color','blue')
        if (date(origin_date, comp) == true) {
          // 날짜가 같으면
          //          console.log("날짜 같음");
          if (minus(origin_sensor, sensors[i].temper) == true) {
            // 원본데이터와 비교데이터 차이가 많이 나면
            td2.css("color", "red");
            td1.css("color", "red");
            //            if(i == 0){
            //                light_temper.css("background-color","#c94e4e");
            //            }
          }
        }
      } else if (sensor == "ph") {
        origin_sensor = charts[2].ph;
        td2 = $("<td>").text(sensors[i].ph);
        if (date(origin_date, comp) == true) {
          // 날짜가 같으면
          console.log("날짜 같음");
          if (minus(origin_sensor, sensors[i].ph) == true) {
            // 원본데이터와 비교데이터 차이가 많이 나면
            td2.css("color", "red");
            td1.css("color", "red");
            light_ph.css("background-color", "red");
          }
        }
        if (td2.css("color") == "red") {
        }
      } else if (sensor == "light") {
        td2 = $("<td>").text(sensors[i].light);
      } else if (sensor == "level") {
        td2 = $("<td>").text(sensors[i].Fishbowl);
      }
      tr.append(td1).append(td2);

      if (sensor == "temper") {
        $("#listbody1").append(tr);
      } else if (sensor == "ph") {
        $("#listbody2").append(tr);
      } else if (sensor == "light") {
        $("#listbody3").append(tr);
      } else if (sensor == "level") {
        $("#listbody4").append(tr);
      }
      j = i;
    }

    if (sensor == "temper") {
      listDiv = "#listDiv1";
    } else if (sensor == "ph") {
      listDiv = "#listDiv2";
    } else if (sensor == "light") {
      listDiv = "#listDiv3";
    } else if (sensor == "level") {
      listDiv = "#listDiv4";
    }

    $(listDiv).scroll(function () {
      var scrollTop = $(this).scrollTop();
      var innerHeight = $(this).innerHeight();
      var scrollHeight = $(this).prop("scrollHeight");

      if (scrollTop + innerHeight + 1 >= scrollHeight) {
        for (i = j; i < j + 50 && i < sensors.length; i++) {
          var tr = $("<tr>");
          var td1 = $("<td>").text(sensors[i].date + " " + sensors[i].time);
          if (sensor == "temper") {
            var td2 = $("<td>").text(sensors[i].temper);
            origin_sensor = charts[2].temper; // 가장 최근 원본 비교 데이터 **데이터가 별로 없어서 20일 날짜로 함! -> 원래는 charts[0].temper임
            td2 = $("<td>").text(sensors[i].temper);
            if (date(origin_date, comp) == true) {
              // 날짜가 같으면
              //              console.log("날짜 같음");
              if (minus(origin_sensor, sensors[i].temper) == true) {
                // 원본데이터와 비교데이터 차이가 많이 나면
                td2.css("color", "red");
                td1.css("color", "red");
              }
            }
          } else if (sensor == "ph") {
            var td2 = $("<td>").text(sensors[i].ph);
            origin_sensor = charts[2].ph; // 가장 최근 원본 비교 데이터 **데이터가 별로 없어서 20일 날짜로 함! -> 원래는 charts[0].temper임
            td2 = $("<td>").text(sensors[i].ph);
            if (date(origin_date, comp) == true) {
              // 날짜가 같으면
              //              console.log("날짜 같음");
              if (minus(origin_sensor, sensors[i].ph) == true) {
                // 원본데이터와 비교데이터 차이가 많이 나면
                td2.css("color", "red");
                td1.css("color", "red");
              }
            }
          } else if (sensor == "light") {
            var td2 = $("<td>").text(sensors[i].light);
          } else if (sensor == "level") {
            var td2 = $("<td>").text(sensors[i].Fishbowl);
          }

          tr.append(td1).append(td2);

          if (sensor == "temper") {
            listBody = "#listbody1";
          } else if (sensor == "ph") {
            listBody = "#listbody2";
          } else if (sensor == "light") {
            listBody = "#listbody3";
          } else if (sensor == "level") {
            listBody = "#listbody4";
          }
          $(listBody).append(tr);
        }
        j = i;
      }
    });
  }
  function defaultChart() {
    // 페이지 첫 렌더링
    selURL = "http://61.103.243.89:8080/deviceAPI/getcharthour";
    var param = new Object();
    param.noticeSj = $("#noticeSj").val();
    $.ajax({
      url: selURL,
      type: "GET",
      contentType: "application/json",
      dataType: "json",
      async: false, // ture:비동기/false:동기 (기다렸다가 실행)
    }).done(function (result) {
      charts = result;
//      console.log(charts);
    });
  }

  defaultChart();

  $("#time").change(function () {
    // selectBox 선택 후 렌더링
    selectVal = $(this).val(); // value값 가져오기
    if (selectVal == "hour") {
//      console.log("hour찍힘~~~~~~~~~~");
      selURL = "http://61.103.243.89:8080/deviceAPI/getcharthour";
    } else if (selectVal == "day") {
      selURL = "http://61.103.243.89:8080/deviceAPI/getchartday";
//      console.log("day찍힘~~~~~~~~~~");
    }
    var param = new Object();
    param.noticeSj = $("#noticeSj").val();
    $.ajax({
      url: selURL,
      type: "GET",
      contentType: "application/json",
      dataType: "json",
      async: false, // ture:비동기/false:동기 (기다렸다가 실행)
    }).done(function (result) {
      charts = result;
//      console.log(charts);
    });
    google.charts.setOnLoadCallback(drawVisualization);
  });

  google.charts.load("current", {
    packages: ["corechart"],
  });
  google.charts.setOnLoadCallback(drawVisualization);
  function drawVisualization() {
    /* 차트 데이터 setting */ var data;
    data = google.visualization.arrayToDataTable([
      ["Month", "ph", "temp"],
      [
        charts[5].created_at,
        parseFloat(charts[5].ph),
        parseFloat(charts[5].temper),
      ],
      [
        charts[4].created_at,
        parseFloat(charts[4].ph),
        parseFloat(charts[4].temper),
      ],
      [
        charts[3].created_at,
        parseFloat(charts[3].ph),
        parseFloat(charts[3].temper),
      ],
      [
        charts[2].created_at,
        parseFloat(charts[2].ph),
        parseFloat(charts[2].temper),
      ],
      [
        charts[1].created_at,
        parseFloat(charts[1].ph),
        parseFloat(charts[1].temper),
      ],
      [
        charts[0].created_at,
        parseFloat(charts[0].ph),
        parseFloat(charts[0].temper),
      ],
    ]);
    var options = {
      /*
       * 차트 옵션 setting - XY축 레이블 설정, 타이들 정의, 그래프
       * 타입(seires:{5:{type:'line'}})
       */
      /* title : '수조 관리 데이터 차트', */
      chartArea: {
        width: "80%",
        height: "85%",
        left: 50,
        right: 110,
        top: 20,
        backgroundColor: {
          fill: "",
        },
      },
      labels: {
        fontColor: "white",
        fontSize: 18,
      },
      backgroundColor: {
        fill: "",
      },
      bar: {
        groupWidth: "27%",
        color: "yellow",
      },
      seriesType: "bars",
      colors: ["#9ab5c1", "#c1867b"],
      // colors : [ '#f5c16c', '#9ab5c1' ],
      vAxis: {
        textStyle: {
          color: "white",
          fontSize: 19,
        },
      },
      hAxis: {
        textStyle: {
          color: "white",
          fontSize: 19,
        },
      },
      legend: {
        textStyle: {
          color: "white",
          fontSize: 16,
        },
      },
    };

    var chart = new google.visualization.ComboChart(
      document.getElementById("chart_div")
    ); /* 차트 그리기 */
    chart.draw(data, options);
    /*
     * 아래에 선언해놓은 div객체에 맵핑시켜서 차트 만듦(combochart는
     * 차트 모양 변경)
     */
    window.addEventListener("resize", drawVisualization, false); // 반응형
    /* window.addEventListener('resize', getElementById(''), false); */ // 반응형
  }

  $("#modal_opne_btn_temper").click(function () {
	  clearInterval(abc);
    postTemper("temper");
    for1("temper");
    $("#reload1").click(function () {
      console.log("reload click");
      $("#table1 > tbody").empty();
      $("#listDiv1").scrollTop(0);
      sensors = [];
      i = 0;
      j = 0;
      postTemper("temper");
      for1("temper");
    });
  });
  $("#modal_opne_btn_ph").click(function () {
	  clearInterval(abc);
    postTemper("ph");
    for1("ph");
    $("#reload2").click(function () {
      console.log("reload click");
      $("#table2 > tbody").empty();
      $("#listDiv2").scrollTop(0);
      sensors = [];
      i = 0;
      j = 0;
      postTemper("ph");
      for1("ph");
    });
  });
  $("#modal_opne_btn_light").click(function () {
	  clearInterval(abc);
    postTemper("light");
    for1("light");
    $("#reload3").click(function () {
      console.log("reload click");
      $("#table3 > tbody").empty();
      $("#listDiv3").scrollTop(0);
      sensors = [];
      i = 0;
      j = 0;
      postTemper("light");
      for1("light");
    });
  });
  $("#modal_opne_btn_level").click(function () {
	  clearInterval(abc);
    postTemper("level");
    for1("level");
    $("#reload4").click(function () {
      console.log("reload click");
      $("#table4 > tbody").empty();
      $("#listDiv4").scrollTop(0);
      sensors = [];
      i = 0;
      j = 0;
      postTemper("level");
      for1("level");
    });
  });
});
