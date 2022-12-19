
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

function scroll(data){
    var scrollTop = $(this).scrollTop();
    var innerHeight = $(this).innerHeight();
    var scrollHeight = $(this).prop("scrollHeight");

    if (scrollTop + innerHeight + 1 >= scrollHeight) {	// 맨 밑에 내려갔을 때
      // $("#confirm").attr("disabled", false);  // 비활성화를 false 즉, 활성화 함
//      $.ajax({
//        url: "http://61.103.243.89:8080/deviceAPI/posttemper",
//        type: "POST",
//        contentType: "application/json",
//        dataType: "json",
//        data: JSON.stringify(param),
//      })
//        .done
//        (function (data) {
//          console.log("data : ", data);
          if (data) {
            $.each(data, function (idx, item) {
              var tr = $("<tr>");
              var td1 = $("<td>").text(item.date + "  " + item.time);
              var td2 = $("<td>").text(item.temper);
              tr.append(td1).append(td2);
              
              if(sensor == "temper"){
            	  $("#listbody1").append(tr);
              } else if(sensor == "ph"){
            	  $("#listbody2").append(tr);
              } else if(sensor == "light"){
            	  $("#listbody3").append(tr);
              } else if(sensor == "level"){
            	  $("#listbody4").append(tr);
              }
              
            });
          }
        }
//        .fail(function () {
//          alert("AJAX Error! Please refresh the page!'");
//        });
//    }
};

function post(sensor) {
  // 시작 센서 데이터 불러옴

  var url = "http://61.103.243.89:8080/deviceAPI/post" + sensor;
  // http://61.103.243.89:8080/deviceAPI/{posttemper}
  var param = new Object();
  param.noticeSj = $("#noticeSj").val();
//  param.offset = 15; // **************** 현재 데이터 갯수만 보내줌. 그래야 그 다음 값 가지고 옴
//  console.log(sensor);
	console.log(JSON.stringify(param));
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
      data = result;	// result를 data 배열에 넣음!!!!*************여기서부터 해야 됌!!!!!!배열에 넣고 불러오는 것 까지 & 버튼 누를 때마다 초기화
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
          	  var td2 = $("<td>").text(item.Fishbowl);
                tr.append(td1).append(td2);
                $("#listbody4").append(tr);
                console.log("level 눌ㄹ림");
            }
            // var td2 = $('<td>').text(item.sensor);
//            tr.append(td1).append(td2);
//            $("#listbody").append(tr);
          
            scroll(data);
//            $("#listDiv").scroll(function () {
//                // 스크롤 할 때마다 센서 데이터 불러옴
//                var scrollTop = $(this).scrollTop();
//                var innerHeight = $(this).innerHeight();
//                var scrollHeight = $(this).prop("scrollHeight");
//
//                if (scrollTop + innerHeight + 1 >= scrollHeight) {	// 맨 밑에 내려갔을 때
//                  // $("#confirm").attr("disabled", false);  // 비활성화를 false 즉, 활성화 함
//                  $.ajax({
//                    url: "http://61.103.243.89:8080/deviceAPI/posttemper",
//                    type: "POST",
//                    contentType: "application/json",
//                    dataType: "json",
//                    data: JSON.stringify(param),
//                  })
//                    .done(function (result) {
//                      console.log("result : ", result);
//
//                      if (result) {
//                        $.each(result, function (idx, item) {
//                          var tr = $("<tr>");
//                          var td1 = $("<td>").text(item.date + "  " + item.time);
//                          var td2 = $("<td>").text(item.temper);
//
//                          tr.append(td1).append(td2);
//
//                          $("#listbody").append(tr);
//                        });
//                      }
//                    })
//                    .fail(function () {
//                      alert("AJAX Error! Please refresh the page!'");
//                    });
//                }
//              });
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
    $("#listDiv").scroll(function () {
      // 스크롤 할 때마다 센서 데이터 불러옴
      var scrollTop = $(this).scrollTop();
      var innerHeight = $(this).innerHeight();
      var scrollHeight = $(this).prop("scrollHeight");
      
      if (scrollTop + innerHeight + 1 >= scrollHeight) {	// 맨 밑에 내려갔을 때
        // $("#confirm").attr("disabled", false);  // 비활성화를 false 즉, 활성화 함
        $.ajax({
          url: "http://61.103.243.89:8080/deviceAPI/posttemper",
          type: "POST",
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify(param),
        })
          .done(function (result) {
            console.log("result : ", result);

            if (result) {
              $.each(result, function (idx, item) {
                var tr = $("<tr>");
                var td1 = $("<td>").text(item.date + "  " + item.time);
                var td2 = $("<td>").text(item.temper);

                tr.append(td1).append(td2);

                $("#listbody").append(tr);
              });
            }
          })
          .fail(function () {
            alert("AJAX Error! Please refresh the page!'");
          });
      }
    });
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
$(document).ready(function() {
	
	var tempCount = 0;
	var phCount = 0;
	var levelCount = 0;
	var lightCount = 0;
	
	const postTemp = (url, param, count) => {

		$.ajax({
			url: url,
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify(param),
		})
		.done(function(result) {
			
			
			
			console.log("result : ", result);
			console.log(count + result.length);
			
			if(result){
				$.each(result, function(idx, item){
					var tr = $('<tr>');
					
					var td0= $('<td>').text(idx + count + 1);
					var td1= $('<td>').text(item.date + " " + item.time);
					var td2= $('<td>').text(item.temper);
					
					tr.append(td0).append(td1).append(td2);
					
					$('#listbody').append(tr);
				});
			}
			
			count += result.length
			
			
			
		})
		.fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});
		
		return count;
	} 
	
	// temp버튼 클릭 시
	$("#modal_opne_btn_temp").click(function() {
		var url = "http://61.103.243.89:8080/deviceAPI/posttemper";
		var param = new Object();
		param.offset = tempCount;
		
		console.log(JSON.stringify(param));
		
		tempCount = postTemp(url, param, tempCount);
	});
	
	// temp table 마지막까지 스크롤시 다음 데이터 호출
	$("#listDiv").scroll(function(){
		var scrollTop = $(this).scrollTop();
		var innerHeight = $(this).innerHeight();
		var scrollHeight = $(this).prop('scrollHeight');
		
		if(scrollTop + innerHeight + 1 >= scrollHeight){
			var url = "http://61.103.243.89:8080/deviceAPI/posttemper";
			var param = new Object();
			param.offset = tempCount;
			
			console.log(JSON.stringify(param));
			console.log(postTemp(url, param, tempCount));
// tempCount = postTemp(url, param, tempCount);
		}
// console.log(scrollTop);
// console.log(innerHeight);
// console.log(scrollHeight);
	})
	
	$("#modal_opne_btn_ph").click(function(e){
		var url = "http://61.103.243.89:8080/deviceAPI/postph";
		var param = new Object();
		param.offset = phCount;
		
		console.log(JSON.stringify(param));
		
		$.ajax({
			url: url,
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify(param),
		})
		.done(function(result) {
			
			
			
			console.log("result : ", result);
			console.log(tempCount);
			
			if(result){
				$.each(result, function(idx, item){
					var tr = $('<tr>');
					
					var td0= $('<td>').text(idx + tempCount + 1);
					var td1= $('<td>').text(item.date + " " + item.time);
					var td2= $('<td>').text(item.ph);
					
					tr.append(td0).append(td1).append(td2);
					
					$('#listbody').append(tr);
				});
			}
			phCount += result.length;
			
		})
		.fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});
	});
	
	$("#modal_opne_btn_light").click(function(e){
		var url = "http://61.103.243.89:8080/deviceAPI/postlight";
		var param = new Object();
		param.offset = lightCount;
		
		console.log(JSON.stringify(param));
		
		$.ajax({
			url: url,
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify(param),
		})
		.done(function(result) {
			
			
			
			console.log("result : ", result);
			console.log(tempCount);
			
			if(result){
				$.each(result, function(idx, item){
					var tr = $('<tr>');
					
					var td0= $('<td>').text(idx + tempCount + 1);
					var td1= $('<td>').text(item.date + " " + item.time);
					var td2= $('<td>').text(item.light);
					
					tr.append(td0).append(td1).append(td2);
					
					$('#listbody').append(tr);
				});
			}
			lightCount += result.length;
			
		})
		.fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});
	});
	
	$("#modal_opne_btn_level").click(function(e){
		var url = "http://61.103.243.89:8080/deviceAPI/postlevel";
		var param = new Object();
		param.offset = levelCount;
		
		console.log(JSON.stringify(param));
		
		$.ajax({
			url: url,
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify(param),
		})
		.done(function(result) {
			
			
			
			console.log("result : ", result);
			console.log(tempCount);
			
			if(result){
				$.each(result, function(idx, item){
					var tr = $('<tr>');
					
					var td0= $('<td>').text(idx + tempCount + 1);
					var td1= $('<td>').text(item.date + " " + item.time);
					var td2= $('<td>').text(item.Fishbowl);
					
					tr.append(td0).append(td1).append(td2);
					
					$('#listbody').append(tr);
				});
			}
			levelCount += result.length;
			
		})
		.fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});
	});
});
