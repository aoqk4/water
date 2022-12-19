<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script language="javascript">
</script>
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
/* mystyle.css */
/* The Modal (background) */

/* The Close Button */
.close {
	color: #aaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
}

.close:hover, .close:focus {
	color: black;
	text-decoration: none;
	cursor: pointer;
}

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
.modal h2 {
	margin: 0;
}

.modal button {

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
				[ 'Month', 'ph', 'temp' ], [ '2004/05', 165, 400 ],
				[ '2005/06', 135, 386 ], [ '2006/07', 157, 127 ],
				[ '2006/07', 157, 429 ] ]);
		var options = { /* 차트 옵션 setting - XY축 레이블 설정, 타이들 정의, 그래프 타입(seires:{5:{type:'line'}})*/
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
		window.addEventListener('resize', drawVisualization, false); // 반응형
		/* window.addEventListener('resize', getElementById(''), false); */// 반응형
	}
</script>
</head>
<body style="background: #324e7b;">
	<!-- background: linear-gradient(#7cbac9, #507496); -->
	<div
		style="color: #f8f8f8; display: flex; justify-content: center; font-size: 40px; font-weight: bold; font-style: inherit; padding-bottom: 30px; padding-top: 40px">수조
		관리 시스템 WEB</div>
	<div>
		<!-- *************FILTER************* -->
		<div
			style="display: flex; justify-content: flex-end; padding-right: 12%;">
			<select id="time" onChange={}
				style="margin: 15px; width: 100px; height: 35px; font-size: 20px; font-weight: normal; font-style: inherit;">
				<option value="hour">hour</option>
				<option value="week">week</option>
				<option value="month">month</option>
			</select>
		</div>

		<!-- *************Chart************* -->
		<div
			style="display: flex; justify-content: center; width: 100%; height: 50vh; padding-bottom: 0%">
			<div id="chart_div" style="width: 90%; height: 80%;"></div>
		</div>
		<div
			style="display: flex; justify-content: flex-end; position: relative; right: 90px; bottom: 50px;">
			<div
				style="display: flex; justify-content: space-around; align-items: center; width: 10%; border-radius: 2px; border-color: white; margin-bottom: 40px;">
				<div
					style="display: flex; justify-content: center; width: 30px; height: 30px; border-radius: 50%; border-width: 0px; background-color: #b4cd93;"></div>
				<div style="color: white;">정상</div>
				<div
					style="display: flex; justify-content: center; width: 30px; height: 30px; border-radius: 50%; border-width: 0px; background-color: #c94e4e;"></div>
				<div style="color: white;">이상</div>
			</div>
		</div>
	</div>


	<div
		style="width: 93%; height: 21%; margin-left: 3%; display: flex; justify-content: space-around;">
		<div id="root">
			<!-- 모달창 -->
			<button type="button" id="modal_opne_btn_temper" value="temper"
				style="position: relative; background-color: #fad3cf; width: 170px; height: 170px; font-size: 20px; border-radius: 5%; border-width: 0px; box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .2);">
				Temperature
				<div id="light_temper"
					style="position: absolute; right: -30px; top: -30px; display: flex; justify-content: center; width: 60px; height: 60px; border-radius: 50%; border-width: 0px; background-color: #b4cd93;"></div>
			</button>
		</div>
		<div id="root">
			<!-- 모달창 -->
			<button type="button" id="modal_opne_btn_ph" value="ph"
				style="position: relative; background-color: #fad3cf; width: 170px; height: 170px; font-size: 20px; border-radius: 5%; border-width: 0px; box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .2);">
				Ph
				<div id="light_ph"
					style="position: absolute; right: -30px; top: -30px; display: flex; justify-content: center; width: 60px; height: 60px; border-radius: 50%; border-width: 0px; background-color: #b4cd93;"></div>
			</button>
		</div>
		<div id="root" style="">
			<!-- 모달창 -->
			<button type="button" id="modal_opne_btn_light" value="light"
				style="position: relative; background-color: #fad3cf; width: 170px; height: 170px; font-size: 20px; border-radius: 5%; border-width: 0px; box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .2);">
				Light
				<div id="light_light"
					style="position: absolute; right: -30px; top: -30px; display: flex; justify-content: center; width: 60px; height: 60px; border-radius: 50%; border-width: 0px; background-color: #c94e4e;"></div>
			</button>
		</div>
		<div id="root" style="">
			<!-- 모달창 -->
			<button type="button" id="modal_opne_btn_level" value="level"
				style="position: relative; background-color: #fad3cf; width: 170px; height: 170px; font-size: 20px; border-radius: 5%; border-width: 0px; box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .2);">
				WaterLevel
				<div id="light_waterLevel"
					style="position: absolute; right: -30px; top: -30px; display: flex; justify-content: center; width: 60px; height: 60px; border-radius: 50%; border-width: 0px; background-color: #b4cd93;"></div>
			</button>
		</div>
	</div>
	<div id="modal1" class="modal">
		<div class="modal_content">
			<button type="button" id="modal_close_btn_temper">X</button>
			<h2>Temperature</h2>
			<input type="text" id="noticeSj" name="noticeSj" value="" />
			********테이블********* <input type="button" id="btnSearch" value="조회"
				style="margin-bottom: 40px;" /> main.js 버튼 연결! <input type="button"
				id="btnSearch" value="조회" style="margin-bottom: 40px;" />
			<div id="listDiv1" style="max-height: 700px; overflow: auto;">
				<table>
					<thead
						style="background-color: #fad3cf !important; position: sticky; top: 0">
						<tr>
							<th>ID</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody id="listbody1"
						style="max-height: 700px; overflow: auto; width: 350px; height: 200px;">
					</tbody>
				</table>
			</div>
		</div>
		<div class="modal_layer"></div>
	</div>
	<div id="modal2" class="modal">
		<div class="modal_content">
			<button type="button" id="modal_close_btn_ph">X</button>
			<h2>Ph</h2>
			<input type="text" id="noticeSj" name="noticeSj" value="" />
			********테이블********* <input type="button" id="btnSearch" value="조회"
				style="margin-bottom: 40px;" /> main.js 버튼 연결! <input type="button"
				id="btnSearch" value="조회" style="margin-bottom: 40px;" />
			<div id="listDiv2" style="max-height: 700px; overflow: auto;">
				<table>
					<thead
						style="background-color: #fad3cf !important; position: sticky; top: 0">
						<tr>
							<th>ID</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody id="listbody2"
						style="max-height: 700px; overflow: auto; width: 350px; height: 200px;">
					</tbody>
				</table>
			</div>
		</div>
		<div class="modal_layer"></div>
	</div>
	<div id="modal3" class="modal">
		<div class="modal_content">
			<button type="button" id="modal_close_btn_light">X</button>
			<h2>Light</h2>
			<input type="text" id="noticeSj" name="noticeSj" value="" />
			********테이블********* <input type="button" id="btnSearch" value="조회"
				style="margin-bottom: 40px;" /> main.js 버튼 연결! <input type="button"
				id="btnSearch" value="조회" style="margin-bottom: 40px;" />
			<div id="listDiv3" style="max-height: 700px; overflow: auto;">
				<table>
					<thead
						style="background-color: #fad3cf !important; position: sticky; top: 0">
						<tr>
							<th>ID</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody id="listbody3"
						style="max-height: 700px; overflow: auto; width: 350px; height: 200px;">
					</tbody>
				</table>
			</div>
		</div>
		<div class="modal_layer"></div>
	</div>
	<div id="modal4" class="modal">
		<div class="modal_content">
			<button type="button" id="modal_close_btn_level">X</button>
			<h2>WaterLevel</h2>
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
				<button type="button" id="modal_opne_btn_ph"
					style="background-color: #edd28c; width: 170px; height: 170px; font-size: 20px; border-radius: 5%; border-width: 1px;">Ph</button>
			</div>
			<div id="root">
				<!-- 모달창 -->
				<button type="button" id="modal_opne_btn_light"
					style="background-color: #edd28c; width: 170px; height: 170px; font-size: 20px; border-radius: 5%; border-width: 1px;">Light</button>
			</div>
			<div id="root">
				<!-- 모달창 -->
				<button type="button" id="modal_opne_btn_level"
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
			<div id="listDiv4" style="max-height: 700px; overflow: auto;">
				<table>
					<thead
						style="background-color: #fad3cf !important; position: sticky; top: 0">
						<tr>
							<th>ID</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody id="listbody4"
						style="max-height: 700px; overflow: auto; width: 350px; height: 200px;">
			<div id="listDiv" style="max-height: 50%; overflow: auto;">
				<table>
					<thead>
						<tr>
							<th>num</th>
							<th>time</th>
							<th>value</th>
						</tr>
					</thead>
					<tbody id="listbody"
						style="width: 350px; height: 200px;">
					</tbody>
				</table>
			</div>
		</div>
		<div class="modal_layer"></div>
	</div>

</body>
<script>
	document.getElementById("modal_opne_btn_temper").onclick = function() {
		document.getElementById("modal1").style.display = "block";
	}
	document.getElementById("modal_close_btn_temper").onclick = function() {
		document.getElementById("modal1").style.display = "none";
	}
	document.getElementById("modal_opne_btn_ph").onclick = function() {
		document.getElementById("modal2").style.display = "block";
	}
	document.getElementById("modal_close_btn_ph").onclick = function() {
		document.getElementById("modal2").style.display = "none";
	}
	document.getElementById("modal_opne_btn_light").onclick = function() {
		document.getElementById("modal3").style.display = "block";
	}
	document.getElementById("modal_close_btn_light").onclick = function() {
		document.getElementById("modal3").style.display = "none";
	}
	document.getElementById("modal_opne_btn_level").onclick = function() {
		document.getElementById("modal4").style.display = "block";
	}
	document.getElementById("modal_close_btn_level").onclick = function() {
		document.getElementById("modal4").style.display = "none";
	}
</script>


</html>
		<!-- <div class="modal_layer"></div> -->
	</div>
	<script>
		document.getElementById("modal_opne_btn_temp").onclick = function() {
			document.getElementById("modal").style.display = "block";
		}
		document.getElementById("modal_close_btn").onclick = function() {
			document.getElementById("modal").style.display = "none";
		}
	</script>



</body>

</html>
