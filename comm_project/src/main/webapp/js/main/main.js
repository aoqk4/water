// $(('#modal_opne_btn_temper').children('#listDiv')).scroll(function() { // 스크롤
// 할 때마다 센서 데이터 불러옴
// var scrollTop = $(this).scrollTop();
// var innerHeight = $(this).innerHeight();
// var scrollHeight = $(this).prop("scrollHeight");
//
// if (scrollTop + innerHeight + 1 >= scrollHeight) {
// // 맨 밑에 내려갔을 때
// // $("#confirm").attr("disabled", false); // 비활성화를 false 즉, 활성화 함
// $.ajax({
// url : "http://61.103.243.89:8080/deviceAPI/posttemper",
// type : 'POST',
// contentType : 'application/json',
// dataType : 'json',
// data : JSON.stringify(param),
// }).done(function(result) {
//
// console.log("result : ", result);
//
// if (result) {
// $.each(result, function(idx, item) {
// var tr = $('<tr>');
//
// var td1 = $('<td>').text(item.date + " " + item.time);
// var td2 = $('<td>').text(item.temper);
//
// tr.append(td1).append(td2);
//
// $('#listbody').append(tr);
// });
// }
// }).fail(function() {
// alert("AJAX Error! Please refresh the page!'");
// });
// }
// });

//const func = (modalBtn, sensor) => {
//  console.log(modalBtn);
//  var url = "http://61.103.243.89:8080/deviceAPI/post" + sensor;
//  // http://61.103.243.89:8080/deviceAPI/{posttemper}
//  var param = new Object();
//  param.offset = 15; // **************** 현재 데이터 갯수만 보내줌. 그래야 그 다음 값 가지고 옴
//  $(modalBtn).click(function (e) {
//    // param. = $("#modal_opne_btn_temp").val();
//    console.log(url);
//
//    $.ajax({
//      // 시작 센서 데이터 불러옴
//      url: url,
//      type: "POST",
//      contentType: "application/json",
//      dataType: "json",
//      data: JSON.stringify(param),
//    })
//      .done(function (result) {
//        console.log("result : ", result);
//
//        if (result) {
//          $.each(result, function (idx, item) {
//            var tr = $("<tr>");
//
//            var td1 = $("<td>").text(item.date + " " + item.time);
//            var td2 = $("<td>").text(item.temper);
//
//            tr.append(td1).append(td2);
//
//            $("#listbody").append(tr);
//          });
//        }
//      })
//      .fail(function () {
//        alert("AJAX Error! Please refresh the page!'");
//      });
//  });
//
// $("#listDiv").scroll(function() { // 스크롤 할 때마다 센서 데이터 불러옴
// var scrollTop = $(this).scrollTop();
// var innerHeight = $(this).innerHeight();
// var scrollHeight = $(this).prop("scrollHeight");
//
// if (scrollTop + innerHeight + 1 >= scrollHeight) {
// // 맨 밑에 내려갔을 때
// // $("#confirm").attr("disabled", false); // 비활성화를 false 즉, 활성화 함
// $.ajax({
// url : url,
// type : 'POST',
// contentType : 'application/json',
// dataType : 'json',
// data : JSON.stringify(param),
// }).done(function(result) {
//
// console.log("result : ", result);
//
// if (result) {
// $.each(result, function(idx, item) {
// var tr = $('<tr>');
//
// var td1 = $('<td>').text(item.date + " " + item.time);
// var td2 = $('<td>').text(item.temper);
//
// tr.append(td1).append(td2);
//
// $('#listbody').append(tr);
// });
// }
// }).fail(function() {
// alert("AJAX Error! Please refresh the page!'");
// });
// }
// });
// }

//  function scroll(data) {
//    var scrollTop = $(this).scrollTop();
//    var innerHeight = $(this).innerHeight();
//    var scrollHeight = $(this).prop("scrollHeight");
//
//    if (scrollTop + innerHeight + 1 >= scrollHeight) {
//      // 맨 밑에 내려갔을 때
//      // $("#confirm").attr("disabled", false); // 비활성화를 false 즉, 활성화 함
//      // $.ajax({
//      // url: "http://61.103.243.89:8080/deviceAPI/posttemper",
//      // type: "POST",
//      // contentType: "application/json",
//      // dataType: "json",
//      // data: JSON.stringify(param),
//      // })
//      // .done
//      // (function (data) {
//      // console.log("data : ", data);
//      if (data) {
//        $.each(data, function (idx, item) {
//          var tr = $("<tr>");
//          var td1 = $("<td>").text(item.date + "  " + item.time);
//          var td2 = $("<td>").text(item.temper);
//          tr.append(td1).append(td2);
//
//          if (sensor == "temper") {
//            $("#listbody1").append(tr);
//          } else if (sensor == "ph") {
//            $("#listbody2").append(tr);
//          } else if (sensor == "light") {
//            $("#listbody3").append(tr);
//          } else if (sensor == "level") {
//            $("#listbody4").append(tr);
//          }
//        });
//      }
//    }
//  }

$(document).ready(function() {
	// const contents = document.querySelector(".contents") // tbody 태그

	var sensors = [];
	// console.log(a);
	var i = 0, j = 0;
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
			url : url,
			type : "POST",
			contentType : "application/json",
			dataType : "json",
			async : false, // ture:비동기/false:동기 (기다렸다가 실행)
			data : JSON.stringify(param),
		}).done(function(result) {
			sensors = null;
			sensors = result;
			// console.log(a);
		});
	}

	function for1(sensor) {
		var listDiv;
		var listBody;
//		console.log(charts[5].temper);
//		console.log(typeof sensors[2].date);
//		console.log(typeof charts[2].created_at);
//		console.log(sensors[2].date);
//		console.log(charts[2].created_at);
//		var date = (charts[2].created_at).split(" ");
		console.log(typeof Date.parse(sensors[2].date));
//		Date.parse(date[0]);

		for (i = 0; i < 50; i++) {
			var tr = $("<tr>");
			var td1 = $("<td>").text(sensors[i].date + " " + sensors[i].time);
			if (sensor == "temper") {
				var td2 = $("<td>").text(sensors[i].temper);
//				var cha = (charts[i].created_at).split(" ");
////				var origin = Date.parse(cha[0]);
//				var comp =  Date.parse(sensors[i].date);
//				if(cha[0] == comp){	// 만약 날짜가 같으면
//					if(charts[i].temper < sensors[i].temper && (charts[i].temper - sensors[i].temper) > 2){
//						console.log("존나 큼");
//					}*********************************여기 할 차례 값 비교하기!!!!!!!!!!!!!!!
//				}
				
			} else if (sensor == "ph") {
				var td2 = $("<td>").text(sensors[i].ph);
			} else if (sensor == "light") {
				var td2 = $("<td>").text(sensors[i].light);
			} else if (sensor == "level") {
				var td2 = $("<td>").text(sensors[i].Fishbowl);
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

		$(listDiv).scroll(function() {

			var scrollTop = $(this).scrollTop();
			var innerHeight = $(this).innerHeight();
			var scrollHeight = $(this).prop("scrollHeight");

			if (scrollTop + innerHeight + 1 >= scrollHeight) {
				for (i = j; i < j + 50 && i < sensors.length; i++) {
					var tr = $("<tr>");
					var td1 = $("<td>").text(sensors[i].date + " " + sensors[i].time);
					if (sensor == "temper") {
						var td2 = $("<td>").text(sensors[i].temper);
//						if(sensors[i].temper){
//						
//						}
					} else if (sensor == "ph") {
						var td2 = $("<td>").text(sensors[i].ph);
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
	};
	function defaultChart(){	// 페이지 첫 렌더링
		selURL = "http://61.103.243.89:8080/deviceAPI/getcharthour";
		var param = new Object();
		param.noticeSj = $("#noticeSj").val();
		$.ajax({
			url : selURL,
			type : "GET",
			contentType : "application/json",
			dataType : "json",
			async : false, // ture:비동기/false:동기 (기다렸다가 실행)
		}).done(function(result) {
			charts = result;
			console.log(charts);
		})
	}
	defaultChart();

	$("#time").change(function() {	// selectBox 선택 후 렌더링
		selectVal = ($(this).val()); // value값 가져오기
		if(selectVal == "hour"){
			console.log("hour찍힘~~~~~~~~~~");
			selURL = "http://61.103.243.89:8080/deviceAPI/getcharthour";
		} else if(selectVal == "day"){
			selURL = "http://61.103.243.89:8080/deviceAPI/getchartday";
			console.log("day찍힘~~~~~~~~~~");
		}
		var param = new Object();
		param.noticeSj = $("#noticeSj").val();
		$.ajax({
			url : selURL,
			type : "GET",
			contentType : "application/json",
			dataType : "json",
			async : false, // ture:비동기/false:동기 (기다렸다가 실행)
		}).done(function(result) {
			charts = result;
			console.log(charts);
		})
		google.charts.setOnLoadCallback(drawVisualization);
	});
	
	google.charts.load('current', {
		'packages' : [ 'corechart' ]
	});
	google.charts.setOnLoadCallback(drawVisualization);
	function drawVisualization() { /* 차트 데이터 setting */
		var data;
			data = google.visualization.arrayToDataTable([
					[ 'Month', 'ph', 'temp' ],
					[ charts[5].created_at, parseFloat(charts[5].ph), parseFloat(charts[5].temper)],
					[ charts[4].created_at, parseFloat(charts[4].ph), parseFloat(charts[4].temper)],
					[ charts[3].created_at, parseFloat(charts[3].ph), parseFloat(charts[3].temper)],
					[ charts[2].created_at, parseFloat(charts[2].ph), parseFloat(charts[2].temper)],
					[ charts[1].created_at, parseFloat(charts[1].ph), parseFloat(charts[1].temper)],
					[ charts[0].created_at, parseFloat(charts[0].ph), parseFloat(charts[0].temper)],
			]);
		var options = { /*
						 * 차트 옵션 setting - XY축 레이블 설정, 타이들 정의, 그래프
						 * 타입(seires:{5:{type:'line'}})
						 */
			/* title : '수조 관리 데이터 차트', */
			chartArea : {
				width : "80%",
				height : "85%",
				left : 50,
				right : 110,
				top : 20,
				backgroundColor : {
					fill : '',
				},
			},
			labels : {
				fontColor : "white",
				fontSize : 18
			},
			backgroundColor : {
				fill : '',
			},
			bar : {
				groupWidth : '27%',
				color : 'yellow'
			},
			seriesType : 'bars',
			colors : [ '#fef4a9', '#cabbe9' ],
			vAxis : {
				textStyle : {
					color : 'white',
					fontSize : 19
				}
			},
			hAxis : {
				textStyle : {
					color : 'white',
					fontSize : 19
				}
			},
			legend : {
				textStyle : {
					color : 'white',
					fontSize : 16

				}
			},
		};

		var chart = new google.visualization.ComboChart(document
				.getElementById('chart_div')); /* 차트 그리기 */
		chart.draw(data, options); /*
									 * 아래에 선언해놓은 div객체에 맵핑시켜서 차트 만듦(combochart는
									 * 차트 모양 변경)
									 */
		window.addEventListener('resize', drawVisualization, false); // 반응형
		/* window.addEventListener('resize', getElementById(''), false); */// 반응형
	};

	$("#modal_opne_btn_temper").click(function() {
		postTemper("temper");
		for1("temper");
		$("#reload1").click(function() {
			console.log("reload click");
			$("#table1 > tbody").empty();
			$('#listDiv1').scrollTop(0);
			sensors = [];
			i = 0;
			j = 0;
			postTemper("temper");
			for1("temper");
		});
	});
	$("#modal_opne_btn_ph").click(function() {
		postTemper("ph");
		for1("ph");
		$("#reload2").click(function() {
			console.log("reload click");
			$("#table2 > tbody").empty();
			$('#listDiv2').scrollTop(0);
			sensors = [];
			i = 0;
			j = 0;
			postTemper("ph");
			for1("ph");
		});
	});
	$("#modal_opne_btn_light").click(function() {
		postTemper("light");
		for1("light");
		$("#reload3").click(function() {
			console.log("reload click");
			$("#table3 > tbody").empty();
			$('#listDiv3').scrollTop(0);
			sensors = [];
			i = 0;
			j = 0;
			postTemper("light");
			for1("light");
		});
	});
	$("#modal_opne_btn_level").click(function() {
		postTemper("level");
		for1("level");
		$("#reload4").click(function() {
			console.log("reload click");
			$("#table4 > tbody").empty();
			$('#listDiv4').scrollTop(0);
			sensors = [];
			i = 0;
			j = 0;
			postTemper("level");
			for1("level");
		});
	});
});
