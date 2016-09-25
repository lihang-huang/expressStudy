$(document).ready(function() {
    if ($.cookie('login') == "1") {
        alert('Hello '+$.cookie('username')+' 您已登陆！');
        window.location.href = 'admin';
    }
    //document ready
    $("#formData").submit(function(event) {
        event.preventDefault();
        // var dataform = new FormData($("#formData")[0]);
        $.ajax({
            url: 'http://localhost:3000/login/check',
            type: "POST",
            dataType: "json",
            data: $(this).serialize(),
            // data:dataform,
            success: function(data) {
                if (data.code == '1') {
                    $.cookie('login', data.code, { expires: 3 });
                    $.cookie('username', data.username, { expires: 3 });
                    alert("登陆成功！");
                    window.location.href = 'admin';
                } else {
                    alert("您的账号密码有误，请重新核对");
                }
            }
        });
    });
});
