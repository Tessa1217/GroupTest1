<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<script src="js/movie.js"></script>
<style>
	table {
		border: 1px solid #000;
		border-collapse: collapse;
		text-align: center;
	}
	th, td {
		border: 1px solid #000;
	}
	td:last-Child {
		text-align: left;
	}
	.card-container{
		display: inline-grid;
		width: 90%;
		margin: 0 auto;
		padding: 2.5%;
		grid-template-columns: 25% 25% 25% 25%;
	}
	.card-item {
		border: 1px solid #000;
		padding: 5%;
		margin: 2%;
		border-radius: 10px;
	}
	.card-item h3, #image {
		text-align: center;
	}
	
</style>
</head>
<body>
	<div class="card-container">
	</div>
</body>
</html>