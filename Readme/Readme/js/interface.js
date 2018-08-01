$(function () {
	$.mask_fullscreen();
	//全局变量
	var RelativeUrl, ClientInfo, OperatorInfo, reJson, vi="1234567890123456",lisence="00000000";
    //选项卡切换
    $("#tab").find(".tab-name").click(function(){
    	var _index = $(this).index();
    	var tc = $(".tab-content .tab-con");
        $("#tab .tab-name").removeClass("active");
        tc.css("display", "none");
        tc.eq(_index).css("display", "block");
        $(".tab-content").attr("data-id", tc.eq(_index).attr("id"));
        $(this).addClass("active");
    })
   // $("#url-copy").attr("data-clipboard-text",$("#request-url").text());
   //在服务器环境才能看到复制后的效果
   zclipFun("url-copy", function(){return $("#request-url").text();})
   zclipFun("leftTab-copy", function () {
   	var id = $("#left-tab").find(".tab-content").attr("data-id");
   	var text = "";
   	if (id == "export-json") {
   		return alert("json请手动拷贝，谢谢！");
   	}
   	text = $("#" + id).text();
   	return text;
   })
   function zclipFun(copyID,fun) {
   	$("#" + copyID).zclip({
   		path: "./image/ZeroClipboard.swf",
   		copy: fun,
   		afterCopy: function () {/* 复制成功后的操作 */
   			alert("ok");
   		}
   	})
   }
    //格式化显示json
    //参数参考链接https://blog.csdn.net/ardo_pass/article/details/78819254
   //$("#export-json").JSONView(json2, { collapsed: false });
   //$("#result-json").JSONView(json2, { collapsed: false });  

   //$("#asc span").text(aesJson);
	//$("#md5 span").text(md5Json);

	//右侧菜单请求导入
   
   var MenuUrl = "data.json";"/ServerWSCHttp/GetMenuJson.aspx";
   $.ajaxSetup({ cache: false });//首次加载清缓存
   $.ajax({
   	type: "GET",
   	url: MenuUrl,
   	cache:true,
   	success: function (data) {
   		var list = "";
   		RelativeUrl = data.RelativeUrl;
   		ClientInfo = data.ClientInfo;
   		OperatorInfo = data.OperatorInfo;
   		$.each(data.MenuList, function (i,val) {
   			list += "<li title=" + val.Url + "><a href='#'  data-Field=" + escape(JSON.stringify(val.Field)) + "   data-desc=" + JSON.stringify(val.Remark) + " data-name=" + JSON.stringify(val.Url) + "  data-url=" + RelativeUrl + val.Url + ">" + val.Url + "</a></li>";//拼菜单
   		});
   		$("#side-menu").find(".nav").append(list);
   		$.mask_close_all();
   	}
   });
	//菜单-点击事件
   $("#side-menu .nav").on("click", "li a", function () {      //只需要找到你点击的是哪个ul里面的就行
   	    $("#field-table tbody").html("");
      	var field =unescape($(this).attr("data-Field"));
      	if (field == "null" || field == null) {
   	    	return;
   	    }
      	var fieldList = JSON.parse(field);
   		var tr = "";
   		$.each(fieldList, function (key, val) {
   			tr += "<tr><td>" + key + "</td><td>" + val.Remark + "</td><td>" + val.Type + "</td><td><input type='text'></td></tr>";//拼tr
   		});
   		$("#field-table tbody").prepend(tr);
   		$("#request-url").text($(this).attr("data-url"));//url
   		$("#name-post").text($(this).attr("data-name"));//remark
   		$("#desc-post").text($(this).attr("data-desc"));//remark
   		
   	});
	//生成Json-点击事件
   	$("#make-json").unbind("click").bind("click", function () {
   		reJson = {};
   		$('#field-table tbody tr').each(function (i) {// 遍历 tr
   			var key, value, type;
   			$(this).children('td').each(function (j) {//遍历 tr 的各个 td
   				if(j == 0){//取每行第一个td
   					key =$(this).text();
   				}
   				if (j == 2) {//取每行第三个td
   					type = $(this).text();
   				}
   				if (j == 3) {//取每行第四个td
   					value = $(this).find('input').val();
   				}
   			});
   			if (type == "String" || type == "Int32" || type == "Decimal" || type == "DateTime" || type == "Int16") {
   				reJson[key] = value;
   			} else {//对象
   				reJson[key] = JSON.parse(value);
   			}
   		});
   		reJson["ClientInfo"] = ClientInfo.Value;
   		reJson["OperatorInfo"] = OperatorInfo.Value;
   		//加密
   		var aesJson = String(AES.Encrypt(JSON.stringify(reJson),vi,vi));
   		var md5Json = MD5(aesJson + lisence);
   		//$("#export-json").JSONView(reJson, { collapsed: false });
   		$("#export-json textarea").text(JSON.stringify(reJson));
   		$("#asc span").text(aesJson);
   		$("#md5 span").text(md5Json);
   	});
	//提交接口 点击事件 
   	$("#post-btn").unbind("click").bind("click", function () {
   		$.ajax({
   			type: "POST",
   			data:{MD5:$("#md5 span").text(),DATA:$("#asc span").text()},
   			url: $("#request-url").text(),
   			success: function (data) {
   				//$("#result-json").JSONView(data,{ collapsed: false });
   				$("#result-json").text(data);
   			}
   		});
   	})
})