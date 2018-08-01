<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Readme.aspx.cs" Inherits="Readme.Readme" %>

<!DOCTYPE html>

<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>接口文档</title>

	<link href="./css/bootstrap.min.css" rel="stylesheet">
	<link href="./css/font-awesome.css" rel="stylesheet">
	<link href="./css/animate.css" rel="stylesheet">
	<link href="./css/style.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/jquery.jsonview.min.css">

</head>

<body class="pace-done">

	<div id="wrapper" class="main-wrapper">
		<div class="header clearfix">
			<ul class="fuc-tab fr">
				<li class="text fl"><a href="/BackgroundBrowser/IndexNew.aspx">后台接口测试页</a></li>
				<li class="text fl"><a href="/ServerWSCHttp/APIsInfo.aspx">Api详细参数信息</a></li>
				<li class="text active fl">加解密校验</li>
				<li class="text fl">缓存资料收集</li>
				<li class="text fl">填充缓存</li>
			</ul>
			<div class="search fr">
				<select class="select">
					<option>接口名字</option>
				</select>
				<input type="text" name="" class="input-search">
				<span class="icon"><i class="fa fa-search"></i></span>
			</div>

		</div>
		<nav class="navbar-default navbar-static-side" role="navigation">
			<div class="sidebar-collapse">
				<ul class="nav metismenu" id="side-menu">
					<li class="">
						<a href="#">
							<i class="fa fa-sitemap"></i>
							<span class="nav-label">Post</span>
							<span class="fa arrow"></span>
						</a>
						<ul class="nav nav-second-level collapse" style="height: 0px;">
							<!--<li class="">
								<a href="#">Third Level <span class="fa arrow"></span></a>
								<ul class="nav nav-third-level collapse" style="height: 0px;">
									<li>
										<a href="#">Third Level Item1111111111111111</a>
									</li>
									<li>
										<a href="#">Third Level Item</a>
									</li>
									<li>
										<a href="#">Third Level Item</a>
									</li>

								</ul>
							</li>
							<li><a href="#">Second Level Item</a></li>
							<li><a href="#">Second Level Item</a></li>
							<li><a href="#">Second Level Item</a></li>-->
						</ul>
					</li>

				</ul>

			</div>
		</nav>

		<div id="page-wrapper" class="page-wrapper gray-bg" style="min-height: 1029px;">
			<div class="row content-detail">
				<div class="col-lg-12">
					<div class="request-parm request-wrap">
						<ul class="ul-list">
							<li class="item1 clearfix">
								<h2 class="title fl">接口详情</h2>
								<p class="tips fl"> JSON = POST参数 | DATA=AES(JSON) | MD5=MD5(DATA+LICENSE)</p>
								<button class="btns fr red-c">刷新缓存</button>
							</li>
							<li class="item2">
								<span class="name span-left">接口名称</span>
								<span class="name-text" id="name-post">未知</span>
							</li>
							<li class="item3">
								<span class="type span-left">请求类型</span>
								<span class="type-text orange-b">post</span>
							</li>
							<li class="item4 clearfix">
								<span class="url span-left">请求url</span>
								<span class="url-text blue-b" id="request-url">未知</span>
								<button class="btns fr gray-c url" id="url-copy">copy</button>
							</li>
							<li>
								<span class="desc span-left">接口作用</span>
								<span class="desc-text" id="desc-post">未知</span>
							</li>
						</ul>
					</div>
					<div class="request-list request-wrap">
						<div class="item1 clearfix">
							<h2 class="title fl">请求参数列表</h2>
							<button class="btns fr orange-c" id="make-json">生成JSON</button>
						</div>
						<div class="table-wrap">
							<table id="field-table">
								<thead>
									<tr>
										<th>变量名</th>
										<th>含义</th>
										<th>类型</th>
										<th>值</th>
									</tr>
								</thead>
								<tbody></tbody>
							</table>
						</div>
						<div class="request-json-wrap clearfix">
							<div class="request-data fl" id="left-tab">
								<ul class="tab clearfix" id="tab">
									<li class="tab-name fl active">导出JSON</li>
									<li class="tab-name fl">DATA密文</li>
									<li class="tab-name fl">MD5校验</li>
								</ul>
								<div class="tab-content" data-id="export-json">
									<div class="tab-con" style="display: block;" id="export-json"><textarea class="tab-textarea"></textarea></div>
									<div class="tab-con" id="asc"><span></span></div>
									<div class="tab-con" id="md5"><span></span></div>
								</div>
								<button class="btns gray-c" id="leftTab-copy">copy</button>
							</div>
							<span class="try-btn orange-c" id="post-btn">提交!</span>
							<div class="result-json fr">
								<div class="text-json" id="result-json"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>



	<!-- Mainly scripts -->

	<script src="./js/lib/jquery-2.1.1.js"></script>
	<script src="js/lib/aes.js"></script>
	<script src="js/lib/md5.js"></script>
	<script src="js/lib/enctypt.js"></script>
	<script src="js/lib/json2.js"></script>
	<!-- json格式化显示高亮插件 -->
	<script src="js/lib/jquery.jsonview.min.js"></script>
	<!-- 复制插件 -->
	<script src="js/lib/jquery.zclip.js"></script>
	<!-- <script src="js/clipboard.min.js"></script> -->
	<script src="./js/lib/bootstrap.min.js"></script>
	<script src="./js/lib/jquery.metisMenu.js"></script>
	<script src="./js/lib/jquery.slimscroll.min.js"></script>
	<!--遮罩-->
	<script src="js/lib/load.js"></script>
	<!-- Custom and plugin javascript -->
	<script src="./js/lib/inspinia.js"></script>
	<script src="js/interface.js"></script>




</body>
</html>