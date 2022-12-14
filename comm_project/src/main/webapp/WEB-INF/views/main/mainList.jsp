<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<style>
table {
	width: 100%;
	border: 1px solid #444444;
	border-collapse: collapse;
}

th, td {
	border: 1px solid #444444;
	padding: 10px;
}
</style>

<script type="text/javascript" src="/js/lib/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="/js/main/main.js"></script>
<script type="text/javascript">
	$(document).ready(function() {

	});
</script>
</head>
<body>
	<input type="text" id="noticeSj" name="noticeSj" value="" />
	<input type="button" id="btnSearch" value="조회"
		style="margin-bottom: 40px;" />
	<input type="button" id="btnSearchdlwhdtjr" value="이종석"
		style="margin-bottom: 40px;" />
	<input type="button" id="button8" value="8"
		style="margin-bottom: 40px;" />
	<input type="button" id="button9" value="9"
		style="margin-bottom: 40px;" />
	<input type="button" id="button10" value="10"
		style="margin-bottom: 40px;" />
	<input type="button" id="button11" value="11"
		style="margin-bottom: 40px;" />
	<div id="listDiv">
		<table>
			<thead>
				<tr>
					<th>Num</th>
					<th>Time</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody id="listbody">

			</tbody>
		</table>
	</div>
</body>
</html>