function setup() {
    let aleatorio = Math.round(Math.random()*10);

    if (aleatorio <= 0) {
        aleatorio = 1;
    };
    console.log(aleatorio)
    $("#t_facturas_restantes").html("");
    for (var i = 0; i < aleatorio; i++) {
        var tr = `<tr>
            <td>` + 'Concepto ' + parseFloat(i+1)  + `</td>
            <td>` + 'Monto '+ parseFloat(i+1) + `</td>
        </tr>`;
        $("#t_facturas_restantes").append(tr)
    }
}

function consultaDia(dia) {
    console.log(dia);
    let aleatorio = Math.round(Math.random()*10);
    if (aleatorio <= 0) {
        aleatorio = 1;
    };
    $("#t_facturas").html("");
    for (var i = 0; i < aleatorio; i++) {
        var tr = `<tr>
            <td>` + 'Concepto ' + parseFloat(i+1)  + `</td>
            <td>` + 'Monto '+ parseFloat(i+1) + `</td>
        </tr>`;
        $("#t_facturas").append(tr)
    }
}

