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

// const func = (modalBtn, sensor) =>{
// console.log(modalBtn);
// var url = "http://61.103.243.89:8080/deviceAPI/post" + sensor;
// // http://61.103.243.89:8080/deviceAPI/{posttemper}
// var param = new Object();
// param.offset = 15;// **************** 현재 데이터 갯수만 보내줌. 그래야 그 다음 값 가지고 옴
// $(modalBtn).click(function(e) {
//
// // param. = $("#modal_opne_btn_temp").val();
// console.log(url);
//
// $.ajax({ // 시작 센서 데이터 불러옴
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
//
// }).fail(function() {
// alert("AJAX Error! Please refresh the page!'");
// });
//
// });
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

function post(sensor) {
  // 시작 센서 데이터 불러옴

  var url = "http://61.103.243.89:8080/deviceAPI/post" + sensor;
  // http://61.103.243.89:8080/deviceAPI/{posttemper}
  var param = new Object();
  param.offset = 15; // **************** 현재 데이터 갯수만 보내줌. 그래야 그 다음 값 가지고 옴
  console.log(sensor);
  var data = []; 
  
  $.ajax({
    url: url,
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(param),
  })
    .done(function (result) {
      console.log("result : ", result);
      data = result;	// result를 data 배열에 넣음!!!!
      if (data) {
    	  console.log("data : ", data );
          $.each(data, function (idx, item) {
            var tr = $("<tr>");
            var td1 = $("<td>").text(item.date + " " + item.time);
            if( sensor == "temper"){ 
          	  var td2 = $("<td>").text(item.temper);
                tr.append(td1).append(td2);
                $("#listbody1").append(tr);
                console.log("temper 눌ㄹ림");
            } else if( sensor == "ph"){ 
          	  var td2 = $("<td>").text(item.ph);
                tr.append(td1).append(td2);
                $("#listbody2").append(tr);
                console.log("ph 눌ㄹ림");
            } else if( sensor == "light"){ 
          	  var td2 = $("<td>").text(item.light);
                tr.append(td1).append(td2);
                $("#listbody3").append(tr);
                console.log("light 눌ㄹ림");
            } else if( sensor == "level"){ 
          	  var td2 = $("<td>").text(item.level);
                tr.append(td1).append(td2);
                $("#listbody4").append(tr);
                console.log("level 눌ㄹ림");
            }
            // var td2 = $('<td>').text(item.sensor);
//            tr.append(td1).append(td2);
//            $("#listbody").append(tr);
          });
        }
      
    })
    .fail(function () {
      alert("AJAX Error! Please refresh the page!'");
    });
}

$(document).ready(function () {
  var url = "http://61.103.243.89:8080/deviceAPI/post";
  // http://61.103.243.89:8080/deviceAPI/post{sensor}
  var param = new Object();
  param.offset = 15; // **************** 현재 데이터 갯수만 보내줌. 그래야
  // 그 다음 값 가지고 옴

  $("#modal_opne_btn_temper").click(function () {
    post("temper");
//    $("#listDiv").scroll(function () {
//      // 스크롤 할 때마다 센서 데이터 불러옴
//      var scrollTop = $(this).scrollTop();
//      var innerHeight = $(this).innerHeight();
//      var scrollHeight = $(this).prop("scrollHeight");
//
//      if (scrollTop + innerHeight + 1 >= scrollHeight) {
//        // 맨 밑에 내려갔을 때
//        // $("#confirm").attr("disabled",
//        // false); //
//        // 비활성화를 false
//        // 즉, 활성화 함
//        $.ajax({
//          url: "http://61.103.243.89:8080/deviceAPI/posttemper",
//          type: "POST",
//          contentType: "application/json",
//          dataType: "json",
//          data: JSON.stringify(param),
//        })
//          .done(function (result) {
//            console.log("result : ", result);
//
//            if (result) {
//              $.each(result, function (idx, item) {
//                var tr = $("<tr>");
//                var td1 = $("<td>").text(item.date + "  " + item.time);
//                var td2 = $("<td>").text(item.temper);
//
//                tr.append(td1).append(td2);
//
//                $("#listbody").append(tr);
//              });
//            }
//          })
//          .fail(function () {
//            alert("AJAX Error! Please refresh the page!'");
//          });
//      }
//    });
  });
  $("#modal_opne_btn_ph").click(function () {
    post("ph");
    
  });
  $("#modal_opne_btn_light").click(function () {
    post("light");
  });
  $("#modal_opne_btn_level").click(function () {
    post("level");
  });
});
