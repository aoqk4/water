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

	var a = [];
	// console.log(a);
	var i = 0, j = 0;

	function postTemper(sensor) {
		// 시작 센서 데이터 불러옴
		var url = "http://61.103.243.89:8080/deviceAPI/post" + sensor;
		// http://61.103.243.89:8080/deviceAPI/{posttemper}
		console.log(url);
		var param = new Object();
		param.noticeSj = $("#noticeSj").val();
		var data = []; // 전체 데이터 넣을 곳
		$.ajax({
			url : url,
			type : "POST",
			contentType : "application/json",
			dataType : "json",
			async : false, // ture:비동기/false:동기 (기다렸다가 실행)
			data : JSON.stringify(param),
		}).done(function(result) {
			a = null;
			a = result;
			// console.log(a);
		});
	}

	function for1(sensor) {
		var listDiv;
		var listBody;
		for (i = 0; i < 50; i++) {
			var tr = $("<tr>");
			var td1 = $("<td>").text(a[i].date + " " + a[i].time);
			if (sensor == "temper") {
				var td2 = $("<td>").text(a[i].temper);
			} else if (sensor == "ph") {
				var td2 = $("<td>").text(a[i].ph);
			} else if (sensor == "light") {
				var td2 = $("<td>").text(a[i].light);
			} else if (sensor == "level") {
				var td2 = $("<td>").text(a[i].Fishbowl);
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
				// 맨 밑에 내려갔을 때
				// $("#confirm").attr("disabled", false); // 비활성화를 false 즉, 활성화
				// 함

				for (i = j; i < j + 50 && i < a.length; i++) {
					var tr = $("<tr>");
					var td1 = $("<td>").text(a[i].date + " " + a[i].time);
					if (sensor == "temper") {
						var td2 = $("<td>").text(a[i].temper);
					} else if (sensor == "ph") {
						var td2 = $("<td>").text(a[i].ph);
					} else if (sensor == "light") {
						var td2 = $("<td>").text(a[i].light);
					} else if (sensor == "level") {
						var td2 = $("<td>").text(a[i].Fishbowl);
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
	;

	// var url = "http://61.103.243.89:8080/deviceAPI/post";
	// // http://61.103.243.89:8080/deviceAPI/post{sensor}
	// var param = new Object();
	// param.offset = 15; // **************** 현재 데이터 갯수만 보내줌. 그래야 그 다음 값 가지고 옴
	//

	$("#modal_opne_btn_temper").click(function() {
		postTemper("temper");
		for1("temper");
		$("#reload1").click(function() {
			console.log("reload click");
			$("#table1 > tbody").empty();
			a = [];
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
			a = [];
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
			a = [];
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
			a = [];
			i = 0;
			j = 0;
			postTemper("level");
			for1("level");
		});
	});
});
