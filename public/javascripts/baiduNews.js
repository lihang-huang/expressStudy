if (!localStorage.newsTab) {
    // 当没有localStorage时执行，设置初始值
    localStorage.setItem("newsTab", "various");
}


var createHTML = function(data) {
    $(".container").empty(); //清除container类下面的元素
    $.each(data, function(index, value) {
        // 为不同页签建立分支
        if (value.tab == "various") {
            var newsItem = $('<div>').addClass("news-item").appendTo("#various-page");
            var innerList = $('<div>').addClass("inner-list").appendTo(newsItem);
            var newsImage = $('<img>').addClass("news-image cf").attr("src", value.img_address1).appendTo(innerList);
            var innerText = $('<div>').addClass("inner-text").appendTo(innerList);
            var newsTitle = $('<p>').addClass("news-title").append(value.news_title).appendTo(innerText);
            var time = new Date(value.news_time);
            var newsTime = $('<span>').addClass("news-time").append(time.toDateString()).appendTo(innerText);
            if (value.news_cart != '') {
                // 不为空时才执行
                var newsCart = $('<span>').addClass("news-cart").append(value.news_cart).appendTo(innerText);
            }
        } else if (value.tab == "location") {
            var newsItem = $('<div>').addClass("news-item").appendTo("#local-page");
            var innerList = $('<div>').addClass("inner-list").appendTo(newsItem);
            var newsTitle = $('<p>').addClass("news-title").append(value.news_title).appendTo(innerList);
            var time = new Date(value.news_time);
            var newsTime = $('<span>').addClass("news-time").append(time.toDateString()).appendTo(innerList);
            if (value.news_cart != '') {
                // 不为空时才执行
                var newsCart = $('<span>').addClass("news-cart").append(value.news_cart).appendTo(innerList);
            }
        } else {
            var newsItem = $('<div>').addClass("news-item").appendTo("#entertainment-page");
            var innerList = $('<div>').addClass("inner-list").appendTo(newsItem);
            var newsTitle = $('<p>').addClass("news-title news-title2").append(value.news_title).appendTo(innerList);
            var temDiv = $("<div>").addClass("tem-con cf").appendTo(innerList);
            var newsImage1 = $('<img>').addClass("news-image").attr("src", value.img_address1).appendTo(temDiv);
            var newsImage2 = $('<img>').addClass("news-image").attr("src", value.img_address2).appendTo(temDiv);
            var newsImage3 = $('<img>').addClass("news-image").attr("src", value.img_address3).appendTo(temDiv);
            var time = new Date(value.news_time);
            var newsTime = $('<span>').addClass("news-time").append(time.toDateString()).appendTo(innerList);
            if (value.news_cart != '') {
                // 不为空时才执行
                var newsCart = $('<span>').addClass("news-cart").append(value.news_cart).appendTo(innerList);
            }
        }
    });
}

var changeSign = function(arg) {
    //切换标记
    $("#" + arg + ">a").css("border-bottom", "2px solid #fff");
}

$(document).ready(function() {

    $.ajax({
        //请求数据
        url: "http://localhost:3000/getNews",
        data: { tab: localStorage.getItem("newsTab"), state: "initial" },
        type: "POST",
        dataType: "json",
        success: function(data) {
            createHTML(data);
            changeSign(localStorage.getItem("newsTab"));
        }
    });

    $(".change-btn").click(function() {
        localStorage.setItem("newsTab", $(this).attr("data-tab"));
        //请求一次信息
        $.ajax({
            //请求数据
            url: "http://localhost:3000/getNews",
            data: { tab: localStorage.getItem("newsTab"), state: "initial" },
            type: "POST",
            dataType: "json",
            success: function(data) {
                createHTML(data);
                changeSign(localStorage.getItem("newsTab"));
            }
        });
    });
});
