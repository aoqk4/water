$(document).ready(function() {

	var url = "http://61.103.243.89:8080/deviceAPI/posttemper";
	var param = new Object();
	param.offset = 15;// **************** 현재 데이터 갯수만 보내줌. 그래야 그 다음 값 가지고 옴!!
	// param. = $("#modal_opne_btn_temp").val();

	$("#modal_opne_btn").click(function(e) {

		console.log(JSON.stringify(param));

		$.ajax({
			url : url,
			type : 'POST',
			contentType : 'application/json',
			dataType : 'json',
			data : JSON.stringify(param),
		}).done(function(result) {

			console.log("result : ", result);

			if (result) {
				$.each(result, function(idx, item) {
					var tr = $('<tr>');

					var td1 = $('<td>').text(item.date + "  " + item.time);
					var td2 = $('<td>').text(item.temper);

					tr.append(td1).append(td2);

					$('#listbody').append(tr);
				});
			}

		}).fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});

	});

	$("#listDiv").scroll(function() {
		var scrollTop = $(this).scrollTop();
		var innerHeight = $(this).innerHeight();
		var scrollHeight = $(this).prop("scrollHeight");

		if (scrollTop + innerHeight + 1 >= scrollHeight) {
			// 맨 밑에 내려갔을 때
			// $("#confirm").attr("disabled", false); // 비활성화를 false 즉, 활성화 함
			$.ajax({
				url : url,
				type : 'POST',
				contentType : 'application/json',
				dataType : 'json',
				data : JSON.stringify(param),
			}).done(function(result) {

				console.log("result : ", result);

				if (result) {
					$.each(result, function(idx, item) {
						var tr = $('<tr>');

						var td1 = $('<td>').text(item.date + "  " + item.time);
						var td2 = $('<td>').text(item.temper);

						tr.append(td1).append(td2);

						$('#listbody').append(tr);
					});
				}
			}).fail(function() {
				alert("AJAX Error! Please refresh the page!'");
			});
		}
	});
});