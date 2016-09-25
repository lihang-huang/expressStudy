var dateChange = function(obj) {
    //封装一个日期格式化函数   
    var year = obj.getFullYear();
    if (obj.getMonth() + 1 < 10) {
        var month = "0" + obj.getMonth();
    } else {
        var month = obj.getMonth() + 1;
    }

    if (obj.getDate() < 10) {
        var date = '0' + obj.getDate();
    } else {
        var date = obj.getDate();
    }
    var result = year + '-' + month + '-' + date;
    return result;
}

//添加新闻
var addnews = function(data) {
    //先清除tbody中的元素
    $("#news-con").empty();
    $.each(data, function(index, value) {
        // 在tbody下追加新闻
        var tr = $("<tr>").appendTo("#news-con");
        var td1 = $("<td>").addClass("count-id").append(value.news_id).appendTo(tr);
        var td2 = $("<td>").addClass("data-news-title").append(value.news_title).appendTo(tr);
        var td3 = $("<td>").addClass("data-news-category").append(value.news_cart).appendTo(tr);
        var td4 = $("<td>").addClass("data-news-img1").append(value.img_address1).appendTo(tr);
        var td5 = $("<td>").addClass("data-news-img2").append(value.img_address2).appendTo(tr);
        var td6 = $("<td>").addClass("data-news-img3").append(value.img_address3).appendTo(tr);
        var time = new Date(value.news_time);
        var td7 = $("<td>").addClass("data-add-date").append(dateChange(time)).appendTo(tr);
        var handle = $("<td>").appendTo(tr);
        var set = $("<span>").addClass("set").append("修改 ").appendTo(handle);
        var btnDelete = $("<span>").addClass("delete").append("删除").appendTo(handle);
    });
}

var globalstate = ""; //设置一个全局变量用来表示哪个分页
if (!localStorage.tab) {
    // 当没有localStorage时执行，设置初始值
    localStorage.setItem("tab", "various");
}

$(document).ready(function() {
    //登陆部分
    if ($.cookie('login') == null) {
        alert("请先登录！");
        window.location.href = "login";
    } else {
        $("#username").text($.cookie("username"));
        //做以下操作
        //请求加载一次数据
        $.ajax({
            url: "http://localhost:3000/load",
            // contentType:"application/json",
            data: { tab: localStorage.tab },
            type: 'POST',
            dataType: 'json',
            success: function(data) {
                //切换样式
                $("#set-news").css("display", "none");
                $("#add-news").css("display", "none");
                $("#news-list").css("display", "table");
                // //将返回值传入addnews函数
                addnews(data);
            }
        });

        //注册注销事件
        $("#logout").click(function() {
            var check = confirm("是否确认注销？");
            if (check) {
                $.cookie('login', null);
                $.cookie('username', null);
                alert("注销成功！");
                //重新定向
                window.location.href = 'login';
            }
        });

        //切换分类
        $("#addNewsBtn").click(function() {
            $("#add-news").css("display", "block");
            $("#set-news").css("display", "none");
            $("#news-list").css("display", "none");
        });

        //利用事件委托绑定在tbody
        $("#news-con").on("click", ".set", function() {
            //修改按钮
            $("#set-news").css("display", "block");
            $("#news-list").css("display", "none");
            //先传入值
            $("#s-news-id").attr("value", $(this).parent().parent().find(".count-id").text());
            $("#s-news-title").attr("value", $(this).parent().parent().find(".data-news-title").text());
            $("#s-news-category").attr("value", $(this).parent().parent().find(".data-news-category").text());
            $("#s-news-img1").attr("value", $(this).parent().parent().find(".data-news-img1").text());
            $("#s-news-img2").attr("value", $(this).parent().parent().find(".data-news-img2").text());
            $("#s-news-img3").attr("value", $(this).parent().parent().find(".data-news-img3").text());
            $("#s-date").attr("value", $(this).parent().parent().find(".data-add-date").text());
            $("#s-new-tab").attr("value", globalstate);
        }).on("click", ".delete", function() {
            var info = confirm("删除后将无法恢复，请确认是否删除？");
            if (info) {
                //删除操作
                var temVal = $(this).parent().parent().find(".count-id").text();
                console.log(temVal);
                var temNode = $(this).parent().parent();
                console.log(temNode);
                $.ajax({
                    url: "http://localhost:3000/admin/delete",
                    type: "POST",
                    data: { id: temVal },
                    dataType: "text",
                    success: function(data) {
                        alert(data);
                        temNode.remove();
                    }
                });
            }
        });

        // 异步请求不同页签内容
        $(".ntab").click(function() {
            //向服务器请求数据
            var val = this.value;
            globalstate = this.value; //将数据写入全局变量中
            localStorage.tab = this.value; //localStorage写入
            $.ajax({
                url: "http://localhost:3000/load",
                // contentType:"application/json",
                data: { tab: val },
                type: 'POST',
                dataType: 'json',
                success: function(data) {
                    //切换样式
                    $("#set-news").css("display", "none");
                    $("#add-news").css("display", "none");
                    $("#news-list").css("display", "table");
                    //将返回值传入addnews函数
                    addnews(data);
                }
            });
        })

        // 添加新闻
        $("#add-news").submit(function(event) {
            event.preventDefault();
            var formData = new FormData($("#add-news")[0]);
            $.ajax({
                url: "http://localhost:3000/admin/addnews",
                data: formData,
                processData: false,
                contentType: false,
                cache: false,
                type: "POST",
                dataType: "text",
                success: function(data) {
                    alert("添加成功！");
                    $.ajax({
                        url: "http://localhost:3000/load",
                        // contentType:"application/json",
                        data: { tab: data },
                        type: 'POST',
                        dataType: 'json',
                        success: function(data2) {
                            //切换样式
                            $("#set-news").css("display", "none");
                            $("#add-news").css("display", "none");
                            $("#news-list").css("display", "table");
                            //将返回值传入addnews函数
                            addnews(data2);
                        }
                    });
                }
            });
            $("#add-news")[0].reset() // 重置表单
            return false;
        });

        // 修改新闻
        $("#set-news").submit(function() {
            event.preventDefault();
            var formData = new FormData($("#set-news")[0]);
            $.ajax({
                url: "http://localhost:3000/admin/setnews",
                data: formData,
                processData: false,
                contentType: false,
                cache: false,
                type: "POST",
                dataType: "text",
                success: function(data) {
                    alert("修改成功！");
                    //修改成功后，自动跳转到所属页签
                    $.ajax({
                        url: "http://localhost:3000/load",
                        // contentType:"application/json",
                        data: { tab: data },
                        type: 'POST',
                        dataType: 'json',
                        success: function(data2) {
                            //切换样式
                            $("#set-news").css("display", "none");
                            $("#add-news").css("display", "none");
                            $("#news-list").css("display", "table");
                            //将返回值传入addnews函数
                            addnews(data2);
                        }
                    });
                }
            });
            return false;
        });
    }
});
