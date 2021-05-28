
var user, pw;
var script_url = 'https://script.google.com/macros/s/AKfycby0i077iv5W8e4-l-f4EmnWgN8G3zN18Mqdm51MKW-Qe1cULQCz8skCnsEeFEnJlvt47g/exec'

function setup() {
    user    = select('#user')
    pw      = select('#pw')
    btn_login = select('#ingresar');
    btn_login.mouseClicked(login)

}

function login() {
    
    if (user.value() && pw.value()) {
        var url = script_url + "?callback=ctrlq&" +
            "&usuario=" + user.value() +
            "&pass=" +  pw.value()+
            "&action=login_nacional";
        
        var request = jQuery.ajax({
            crossDomain: true,
            url: url,
            method: "GET",
            dataType: "jsonp",
        });
        
        
        
    }else{
        swal('Hay campos vacíos','','error');
    }

}

function ctrlq(e) {
    console.log(e)
    if (e.id) {
        localStorage.setItem('id', e.id);
        location.href="pages/calendario.html";
    }else{
        swal(e.result,'','error')
    }
}