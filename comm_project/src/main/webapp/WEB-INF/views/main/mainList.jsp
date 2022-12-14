<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<script>String sensor[] = new String['ph','temp','light','water']</script>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html">
<!-- 차트 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<!-- 모달창 -->
<title>수조 관리 시스템</title>

<style>
table {
	width: 100%;
	border: 1px solid #444444;
	border-collapse: collapse;
	height: 100%;
	overflow: auto;
}

th, td {
	border: 1px solid #444444;
	padding: 10px;
}

#modal { /* 모달창 */
	display: none;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	z-index: 1;
	/* 	overflow-y: initial !important; */
}

#modal h2 {
	margin: 0;
}

#modal button {
	display: inline-block;
	width: 100px;
	margin-left: calc(100% - 100px - 10px);
}

#modal .modal_content {
	width: 700px;
	margin: 100px auto;
	padding: 20px 10px;
	background: #fff;
	border: 2px solid #666;
}

#modal .modal_layer {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: -1;
}

#modal_opne_btn:hover {
	background-color: #8877b0;
}
</style>


<script type="text/javascript" src="/js/lib/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="/js/main/main.js"></script>
<!-- js파일 연결 url -->
<script type="text/javascript">
	$(document).ready(function() {

	});
</script>

<script type="text/javascript"
	src="https://www.gstatic.com/charts/loader.js"></script>
<!-- 차트 -->
<script type="text/javascript">
	google.charts.load('current', {
		'packages' : [ 'corechart' ]
	});
	google.charts.setOnLoadCallback(drawVisualization);

	function drawVisualization() { /* 차트 데이터 setting */
		var data = google.visualization.arrayToDataTable([
				[ 'Month', 'ph', 'temp'],
				[ '2004/05', 165, 400],
				[ '2005/06', 135, 500],
				[ '2006/07', 157, 127 ],
				[ '2006/07', 157, 429 ]]);
		var options = { /* 차트 옵션 setting - XY축 레이블 설정, 타이들 정의, 그래프 타입(seires:{5:{type:'line'}})*/
			/* title : '수조 관리 데이터 차트', */
			 chartArea: {
				width:"80%",height:"85%", left:50, right:110,top: 20,
				/* series: {
		            0: { color: '#ffffff' },
		            1: { color: '#c784de' }
		        }, */
                backgroundColor: {
	                    fill: '',
	                },
	            },
	            backgroundColor: {
	                fill: '',
	            },
	            bar: { groupWidth: '27%', color: 'yellow' },
				seriesType : 'bars'
			/*  vAxis : {
				title : 'Cups'
			},
			hAxis : {
				title : 'Month'
			},  */
			/* series : {
				5 : {
					type : 'line'
				}
			} */    
		};

		var chart = new google.visualization.ComboChart(document
				.getElementById('chart_div')); /* 차트 그리기 */
		chart.draw(data, options); /* 아래에 선언해놓은 div객체에 맵핑시켜서 차트 만듦(combochart는 차트 모양 변경) */
		window.addEventListener('resize', drawVisualization, false);	// 반응형
		window.addEventListener('resize', getElementById(''), false);	// 반응형
				
	}
</script>
</head>
<body style="background: #507496;">
	<!-- background: linear-gradient(#7cbac9, #507496); -->
	<div
		style="color: #cfdff4; display: flex; justify-content: center; font-size: 40px; font-weight: bold; font-style: inherit; padding-bottom: 30px; padding-top: 40px">수조
		관리 시스템 WEB</div>

	<!-- *************CHART************* -->
	<div
		style="display: flex; justify-content: center; width: 100%; height: 50%;">
		<div id="chart_div" style="width: 90%; height: 85%;"></div>

	</div>


	<!-- *************FILTER************* -->
	<div style="display: flex; justify-content: end;">
		<select id="time" onChange={}
			style="margin: 15px; width: 100px; height: 35px; font-size: 20px; font-weight: normal; font-style: inherit;">
			<option value="hour">hour</option>
			<option value="week">week</option>
			<option value="month">month</option>
		</select>
	</div>
	<div style="width: 100%; height: 21%">
		<div style="display: flex; justify-content: space-around;">
			<div id="root">
				<!-- 모달창 -->
				<button type="button" id="modal_opne_btn_temp"
					style="background-color: #edd28c; width: 170px; height: 170px; font-size: 20px; border-radius: 5%; border-width: 1px;">Temprature</button>
			</div>
			<div id="root">
				<!-- 모달창 -->
				<button type="button" id="modal_opne_btn"
					style="background-color: #edd28c; width: 170px; height: 170px; font-size: 20px; border-radius: 5%; border-width: 1px;">Ph</button>
			</div>
			<div id="root">
				<!-- 모달창 -->
				<button type="button" id="modal_opne_btn"
					style="background-color: #edd28c; width: 170px; height: 170px; font-size: 20px; border-radius: 5%; border-width: 1px;">Light</button>
			</div>
			<div id="root">
				<!-- 모달창 -->
				<button type="button" id="modal_opne_btn"
					style="background-color: #edd28c; width: 170px; height: 170px; font-size: 20px; border-radius: 5%; border-width: 1px;">Water</button>
			</div>
		</div>
		<div
			style="display: flex; justify-content: space-around; margin-top: 10px">
			<div id="light"
				style="display: flex; justify-content: center; width: 170px; height: 30px; border-width: 1px; border-style: solid; border-color: black; background-color: gray;"></div>
			<div id="light"
				style="display: flex; justify-content: center; width: 170px; height: 30px; border-width: 1px; border-style: solid; border-color: black; background-color: gray;"></div>
			<div id="light"
				style="display: flex; justify-content: center; width: 170px; height: 30px; border-width: 1px; border-style: solid; border-color: black; background-color: gray;"></div>
			<div id="light"
				style="display: flex; justify-content: center; width: 170px; height: 30px; border-width: 1px; border-style: solid; border-color: black; background-color: gray;"></div>

		</div>
	</div>
	<div id="modal">
		<div class="modal_content">
			<button type="button" id="modal_close_btn">X</button>
			<h2>센서명</h2>
			<p>센서데이터</p>
			<input type="text" id="noticeSj" name="noticeSj" value="" />
			********테이블********* <input type="button" id="btnSearch" value="조회"
				style="margin-bottom: 40px;" /> main.js 버튼 연결! <input type="button"
				id="btnSearch" value="조회" style="margin-bottom: 40px;" />
			<div id="listDiv" style="max-height: 50%; overflow: auto;">
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>제목</th>
						</tr>
					</thead>
					<tbody id="listbody"
						style="overflow: auto; width: 350px; height: 200px;">

					</tbody>
				</table>
			</div>
		</div>
		<div class="modal_layer"></div>
	</div>
	<script>
		document.getElementById("modal_opne_btn").onclick = function() {
			document.getElementById("modal").style.display = "block";
		}
		document.getElementById("modal_close_btn").onclick = function() {
			document.getElementById("modal").style.display = "none";
		}
	</script>
	


</body>

</html>

