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
