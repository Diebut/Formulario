//buscar el boton enviar datos
let buttonEnviar = document.getElementById('btn-enviar-datos'); //buscar dentro del elemento un documento con el ID

buttonEnviar.addEventListener('click', function () {
    //alert('Este es otro ensaje de Alerta!!');

    let inputNombre = document.getElementById('input-nombre');
    let inputCorreo = document.getElementById('input-correo');

    if (inputNombre.value == "") {
        alert("Error: El Nombre esta vacio.")
    }

    if (inputCorreo.value == "") {
        alert("Error: El Correo esta vacio.")
    }

});

//identificamos ambos input de su id para limpiarlos
let buttonLimpiar = document.getElementById('btn-limpiar-datos');

buttonLimpiar.addEventListener('click', function () {
   alert('Limpiar');
   //buscar el input del nombre
   let inputNombre = document.getElementById('input-nombre');
   inputNombre.value = "";

   //buscar el input del correo
   let inputCorreo = document.getElementById('input-correo');
   inputCorreo.value = '';

});