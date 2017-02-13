<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="style.css">
	<link href='https://fonts.googleapis.com/css?family=Josefin+Sans:400,600' rel='stylesheet' type='text/css'>
	<title>@coru510 icons</title>
	<script type="text/javascript">

	function changeIcon(url) {
		document.getElementById("big_icon").src = url;
	}

	</script>
</head>
<body>
	<div class="sidemenu">
		<h1>@coru510 icons</h1>
		<div id="thumbnails">
			<?php

			if ($dir = opendir("icons/")) {
			    while (($file = readdir($dir)) !== false) {
			        if ($file != "." && $file != ".." && strpos($file, "jpg") == true || strpos($file, "JPG") == true) {
			        	echo "<img src=\"icons/$file\" class=\"thumbnail\" onclick=\"changeIcon('icons/$file')\">";
			        }
			    } 
			    closedir($dir);
			}
			?>
			<p>Click to change</p>
		</div>
	</div>
	<div class="icon">
		<img src="icons/icon_1.jpg" id="big_icon">
	</div>
</body>
</html>