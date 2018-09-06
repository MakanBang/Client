let token = localStorage.getItem('token')
if(token){
    $('#login').hide()
}else{
    $('#logout').hide()
}

function login(){
    window.location = 'login.html'
}

function logout(){
    localStorage.removeItem('token')
    window.location = 'login.html'
}