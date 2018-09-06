window.fbAsyncInit = function () {
    FB.init({
        appId: '1831903046923089',
        cookie: true,
        xfbml: true,
        version: 'v3.1'
    });

    FB.AppEvents.logPageView();

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function checkLoginState() {
    FB.getLoginStatus(function (response) {
        // statusChangeCallback(response);
        console.log(response);

        $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/users/loginFacebook',
            data: response.authResponse
        })
            .done(result => {
                localStorage.setItem('token', result.token)
                window.location = 'index.html'
            })

            .fail(err => {
                console.log(err);

            })
    });
}



let token = localStorage.getItem('token')
if (token) {
    window.location = 'index.html'
}

function register() {
    console.log($("#name").val());

    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/users/signup',
        data: {
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#password").val()
        }
    })
        .done(result => {
            swal("register succes, please login to acces website");
            $("#name").val("")
            $("#email").val("")
            $("#password").val("")
        })
        .fail(err => {
            swal("oops", "email already in use", "error");
        })
}
function login() {
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/users/signin',
        data: {
            email: $("#email1").val(),
            password: $("#password1").val()
        }
    })
        .done(result => {
            localStorage.setItem('token', result.data.token)
            window.location = 'index.html'
        })
        .fail(err => {
            swal("oops", "email / password wrong!", "error");
        })

}
$("#login").click(function () {
    $(".message").css("transform", "translateX(0)");
    if ($(".message").hasClass("login")) {
        $(".message").removeClass("signup");
    }
    $(".message").addClass("login");
});

$("#signup").click(function () {
    $(".message").css("transform", "translateX(100%)");
    if ($(".message").hasClass("login")) {
        $(".message").removeClass("login");
    }
    $(".message").addClass("signup");
});
