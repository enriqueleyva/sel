
var user, pw;
var script_url = 'https://script.google.com/macros/s/AKfycbz3OseL35TM0Qge_IDC2AuCF2e7tlxYb-DuhBqedpPGO73sukiHu95AGD9mid6Kc-gHCQ/exec'

function setup() {
    user    = select('#user')
    pw      = select('#pw')
    btn_login = select('#ingresar');
    btn_login.mouseClicked(login)

}

function login() {
    
    if (user.value() && pw.value()) {
        // var url = script_url + "?callback=ctrlq&" +
        //     "&usuario=" + user.value() +
        //     "&pass=" +  pw.value()+
        //     "&action=login_nacional";
        
        // var request = jQuery.ajax({
        //     crossDomain: true,
        //     url: url,
        //     method: "GET",
        //     dataType: "jsonp",
        // });
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "S=maestro=ltE9yfn70QUanwP3CQdqFuwoXuI2LvyMKscmLJctsts");
        

        console.log(user.value(), pw.value());
        var raw = JSON.stringify({
            "user": user.value(),
            "pass": pw.value(),
            "origen": "NAL"
        });


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
            mode: 'cors'
        };

        fetch("https://script.google.com/macros/s/AKfycbxoa-lGi2H-8r_vo7YCs_9gkU1plr2ITj-ZBbZG/exec", requestOptions)
        .then(response => {response.text(); console.log(response)})
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
        
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
