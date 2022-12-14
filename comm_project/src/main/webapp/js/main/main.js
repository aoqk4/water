$(document).ready(function() {

	$("#modal_opne_btn_temp").click(function(e) {
		var url = "main/getMainInfos.do";
		var param = new Object();
		param.temper = $("#modal_opne_btn_temp").val();
		param. = $("#modal_opne_btn_temp").val();

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
				$.each(result.mainResult, function(idx, item) {
					var tr = $('<tr>');

					var td1 = $('<td>').text(item.noticeId);
					var td2 = $('<td>').text(item.noticeSj);

					tr.append(td1).append(td2);

					$('#listbody').append(tr);
				});
			}

		}).fail(function() {
			alert("AJAX Error! Please refresh the page!'");
		});
	});
});