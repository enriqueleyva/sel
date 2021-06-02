function setup() {
    var table = document.getElementById("t_facturas");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        row = table.rows[i];
        row.onclick = function(){

            var cell_id = this.getElementsByTagName("td")[0];
            console.log(cell_id.innerHTML);
            // var id_tabla = cell_id.innerHTML;
            document.getElementById("id_factura").innerHTML = `ID DE FACTURA: ${cell_id.innerHTML}`;
            // document.getElementById("busqueda").value = id_tabla
        };
    }
}

function inicio() {
    
}