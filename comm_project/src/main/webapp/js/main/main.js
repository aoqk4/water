$(document).ready(function() {
	
	$("#btnSearch").click(function(e){
		var url = "main/getMainInfos.do";
		var param = new Object();
		param.noticeSj = $("#noticeSj").val();
		
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
			
			if(result){
				$.each(result.mainResult, function(idx, item){
					var tr = $('<tr>');
					
					var td1= $('<td>').text(item.noticeId);
					var td2= $('<td>').text(item.noticeSj);
					
					tr.append(td1).append(td2);
					
					$('#listbody').append(tr);
				});
			}
			
		})
		.fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});
	});
	
	$("#btnSearchdlwhdtjr").click(function(e){
		var url = "/deviceAPI/sensorGet";
		var param = new Object();
		param.noticeSj = $("#noticeSj").val();
		
		console.log(url);
		
		$.ajax({
			url: url,
			type: 'GET',
			contentType: 'application/json',
			dataType: 'json',
//			data: JSON.stringify(param),
		}).done(function(result) {
			
			console.log("result : ", result);
			
//			if(result){
//				$.each(result.getResult, function(idx, item){
//					var tr = $('<tr>');
//					
//					var td1= $('<td>').text(item.deviceId);
//					var td2= $('<td>').text(item.deviceNm);
//					
//					tr.append(td1).append(td2);
//					
//					$('#listbody').append(tr);
//				});
//			}
			
		})
		.fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});
	});

	$("#button8").click(function(e){
		var url = "/deviceAPI/sensorPost";
		var param = new Object();
		param.sensorId = 8
		param.pageNum = ($("#noticeSj").val()) * 10;
		
		console.log(param);
		
		$.ajax({
			url: url,
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify(param),
		}).done(function(result) {
			
			console.log("result : ", result);
			
//			if(result){
//				$.each(result.getValue, function(idx, item){
//					var tr = $('<tr>');
//					var td0= $('<td>').text(result.getValue.length - idx);
//					var td1= $('<td>').text(item.sensorVal);
//					var td2= $('<td>').text(item.createdAt.date.year + "년"
//							+ item.createdAt.date.month + "월"
//							+ item.createdAt.date.day + "일 "
//							+ item.createdAt.time.hour + ":"
//							+ item.createdAt.time.minute + ":"
//							+ item.createdAt.time.second);
//					
//					tr.append(td0).append(td2).append(td1);
//					
//					$('#listbody').append(tr);
//				});
//			}
			
		})
		.fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});
	});
	$("#button9").click(function(e){
		var url = "/deviceAPI/sensorPost";
		var param = new Object();
		param.sensorId = 9
		
		console.log(url);
		
		$.ajax({
			url: url,
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify(param),
		}).done(function(result) {
			
			console.log("result : ", result);
			
//			if(result){
//				$.each(result.getValue, function(idx, item){
//					var tr = $('<tr>');
//					var td0= $('<td>').text(result.getValue.length - idx);
//					var td1= $('<td>').text(item.sensorVal);
//					var td2= $('<td>').text(item.createdAt.date.year + "년"
//							+ item.createdAt.date.month + "월"
//							+ item.createdAt.date.day + "일 "
//							+ item.createdAt.time.hour + ":"
//							+ item.createdAt.time.minute + ":"
//							+ item.createdAt.time.second);
//					
//					tr.append(td0).append(td2).append(td1);
//					
//					$('#listbody').append(tr);
//				});
//			}			
		})
		.fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});
	});
	$("#button10").click(function(e){
		var url = "/deviceAPI/sensorPost";
		var param = new Object();
		param.sensorId = 10
		
		console.log(url);
		
		$.ajax({
			url: url,
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify(param),
		}).done(function(result) {
			
			console.log("result : ", result);
			
//			if(result){
//				$.each(result.getValue, function(idx, item){
//					var tr = $('<tr>');
//					var td0= $('<td>').text(result.getValue.length - idx);
//					var td1= $('<td>').text(item.sensorVal);
//					var td2= $('<td>').text(item.createdAt.date.year + "년"
//							+ item.createdAt.date.month + "월"
//							+ item.createdAt.date.day + "일 "
//							+ item.createdAt.time.hour + ":"
//							+ item.createdAt.time.minute + ":"
//							+ item.createdAt.time.second);
//					
//					tr.append(td0).append(td2).append(td1);
//					
//					$('#listbody').append(tr);
//				});
//			}
			
		})
		.fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});
	});
	$("#button11").click(function(e){
		var url = "/deviceAPI/sensorPost";
		var param = new Object();
		param.sensorId = 11
		
		console.log(url);
		
		$.ajax({
			url: url,
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify(param),
		}).done(function(result) {
			
			console.log("result : ", result);
			
//			if(result){
//				$.each(result.getValue, function(idx, item){
//					var tr = $('<tr>');
//					var td0= $('<td>').text(result.getValue.length - idx);
//					var td1= $('<td>').text(item.sensorVal);
//					var td2= $('<td>').text(item.createdAt.date.year + "년"
//							+ item.createdAt.date.month + "월"
//							+ item.createdAt.date.day + "일 "
//							+ item.createdAt.time.hour + ":"
//							+ item.createdAt.time.minute + ":"
//							+ item.createdAt.time.second);
//					
//					tr.append(td0).append(td2).append(td1);
//					
//					$('#listbody').append(tr);
//				});
//			}
			
		})
		.fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});
	});
	
});
