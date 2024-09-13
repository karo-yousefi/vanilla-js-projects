[1mdiff --git a/projects/2-flexbox-generator/index.html b/projects/2-flexbox-generator/index.html[m
[1mindex 86fa0cd..62162db 100644[m
[1m--- a/projects/2-flexbox-generator/index.html[m
[1m+++ b/projects/2-flexbox-generator/index.html[m
[36m@@ -10,13 +10,13 @@[m
 <body>[m
 	<div class="container">[m
 		<div class="showcase-container">[m
[31m-			<div class="box"></div>[m
[31m-[m
 		</div>[m
 [m
 		<div class="selection-container">[m
[31m-			<button class="generate-button">Generate</button>[m
[31m-			<select name="number-of-elements" class="select" id="select-number" hidden>[m
[32m+[m			[32m<button class="button next">next-></button>[m
[32m+[m			[32m<button class="button previous"><-previous</button>[m
[32m+[m
[32m+[m			[32m<select name="number-of-elements" class="select" id="select-number">[m
 				<option value="" hidden selected disabled>Number of elements</option>[m
 				<option value="1">1</option>[m
 				<option value="2">2</option>[m
[36m@@ -28,18 +28,22 @@[m
 				<option value="8">8</option>[m
 				<option value="9">9</option>[m
 			</select>[m
[31m-			<select name="direction" class="select" id="select-direction" hidden>[m
[32m+[m
[32m+[m			[32m<select name="flex-box" class="select hidden" id="select-on-off">[m
[32m+[m				[32m<option value="" hidden selected disabled>flex-box</option>[m
[32m+[m				[32m<option value="on">on</option>[m
[32m+[m				[32m<option value="off">off</option>[m
[32m+[m			[32m</select>[m
[32m+[m[41m			[m
[32m+[m			[32m<select name="direction" class="select hidden" id="select-direction">[m
 				<option value="" hidden selected disabled>Direction</option>[m
 				<option value="row">row</option>[m
 				<option value="column">column</option>[m
 			</select>[m
[31m-			<select name="wrap" class="select" id="select-wrap" hidden>[m
[31m-				<option value="" hidden selected disabled>Wrap</option>[m
[31m-				<option value="no-wrap">no wrap</option>[m
[31m-				<option value="wrap">wrap</option>[m
[31m-			</select>[m
[31m-			<select name="horizontal-row" class="select" id="select-hor-row" hidden>[m
[31m-				<option value="" hidden selected disabled>Horizontal</option>[m
[32m+[m
[32m+[m			[32m<!-- justify-content -->[m
[32m+[m			[32m<select name="justify-content" class="select hidden" id="select-justify">[m
[32m+[m				[32m<option value="" hidden selected disabled>Justify Content</option>[m
 				<option value="flex-start">flex-start</option>[m
 				<option value="center">center</option>[m
 				<option value="flex-end">flex-end</option>[m
[36m@@ -47,28 +51,22 @@[m
 				<option value="space-between">space-between</option>[m
 				<option value="space-evenly">space-evenly</option>[m
 			</select>[m
[31m-			<select name="horizontal-column" class="select" id="select-hor-col" hidden>[m
[31m-				<option value="" hidden selected disabled>Horizontal</option>[m
[31m-				<option value="flex-start">flex-start</option>[m
[31m-				<option value="center">center</option>[m
[31m-				<option value="flex-end">flex-end</option>[m
[31m-			</select>[m
[31m-			<select name="vertical-row" class="select" id="select-ver-row" hidden>[m
[31m-				<option value="" hidden selected disabled>Vertical</option>[m
[32m+[m
[32m+[m			[32m<!-- align-items -->[m
[32m+[m			[32m<select name="align-items" class="select hidden" id="select-align">[m
[32m+[m				[32m<option value="" hidden selected disabled>Align Items</option>[m
 				<option value="flex-start">flex-start</option>[m
 				<option value="center">center</option>[m
 				<option value="flex-end">flex-end</option>[m
 			</select>[m
[31m-			<select name="vertical-column" class="select" id="select-ver-col" hidden>[m
[31m-				<option value="" hidden selected disabled>Vertical</option>[m
[31m-				<option value="flex-start">flex-start</option>[m
[31m-				<option value="center">center</option>[m
[31m-				<option value="flex-end">flex-end</option>[m
[31m-				<option value="space-around">space-around</option>[m
[31m-				<option value="space-between">space-between</option>[m
[31m-				<option value="space-evenly">space-evenly</option>[m
[32m+[m[41m			[m
[32m+[m			[32m<input type="text" name="gap" placeholder="gap" class="select hidden" id="select-gap">[m
[32m+[m
[32m+[m			[32m<select name="wrap" class="select  hidden" id="select-wrap">[m
[32m+[m				[32m<option value="" hidden selected disabled>Wrap</option>[m
[32m+[m				[32m<option value="no-wrap">no wrap</option>[m
[32m+[m				[32m<option value="wrap">wrap</option>[m
 			</select>[m
[31m-			<input type="text" name="gap" placeholder="gap" class="select" id="select-gap" hidden>[m
 		</div>[m
 		<div class="code-container">[m
 [m
