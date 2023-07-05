//buscar el boton enviar datos
let buttonEnviar = document.getElementById('btn-enviar-datos'); //buscar dentro del elemento un documento con el ID

buttonEnviar.addEventListener('click', function () {
    //alert('Este es otro ensaje de Alerta!!');

    let inputNombre = document.getElementById('input-nombre');
    let inputCorreo = document.getElementById('input-correo');
    let pMensaje = document.getElementById('p-mensaje-error');
    let pMensajeConfirmacion = document.getElementById('p-mensaje-confirmacion');

    if (inputNombre.value == "") {
        //alert("Error: El Nombre esta vacio.")
        pMensaje.innerHTML = "Error: El Nombre esta vacio."
    }

    else if (inputCorreo.value == "") {
        //alert("Error: El Correo esta vacio.")
        pMensaje.innerHTML = "Error: El Correo esta vacio."
    }
    else if (inputCorreo.value.length < 5) {
        pMensaje.innerHTML = "Error: El Correo es muy corto."
    }
    else if (inputCorreo.value.length > 100) {
        pMensaje.innerHTML = "Error: El Correo excede la longitud permitida."
    }
    
    else{
        pMensaje.innerHTML = ""; // se limpie el error
        pMensajeConfirmacion.innerHTML = "los datos se enviaron correctamente";
        
    }
   

});

//identificamos ambos input de su id para limpiarlos
let buttonLimpiar = document.getElementById('btn-limpiar-datos');

buttonLimpiar.addEventListener('click', function () {
   alert('Limpiar');
   //buscar el input del nombre
   let inputNombre = document.getElementById('input-nombre');
   inputNombre.value = '';

   //buscar el input del correo
   let inputCorreo = document.getElementById('input-correo');
   inputCorreo.value = '';

});

//variables
const url ='https://jsonplaceholder.typicode.com/users'
//evento
document.addEventListener("DOMContentLoaded", LLamarAPI);
const respuesta = document.querySelector("#respuesta");

function LLamarAPI(){
    fetch(url)
    .then(resp => resp.json())
    .then((data) =>{
        mostrarHMTL(data)
    })

//funciones
console.log("Corriendo...")

}
function mostrarHMTL(datos) {
    datos.forEach(item => { //hace referencia a todos los elementos
        //console.log(item);
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.email}</td>`

        respuesta.appendChild(row);
    });
}



    // let url = 'https://jsonplaceholder.typicode.com/users' // 1 
    // fetch(url) // 2 
    // .then(response => response.json()) // 3 - se resuelve la promesa al obtner la respuesta la pasa aun detereminado formato  
    // .then(data => mostrarData(data)) //  4 - leemos este object data y lo mostramos por consola 
    // .catch(error => console.error()) //5 - si hay un error sera atrpado por la palabra reservada catch 
    //     const mostrarData = (data)=>{
    //         console.log(data)
    //         let body = ''
    //     for (let i = 0; i < data.length; i++) {
    //         body +=  `<tr><td>${data[i].nombre}</td><td>${data[i].correo}</td><td>${data[i].id}</td></tr>`
    // }
    // document.getElementById('data').innerHTML = body
    // }



    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((Response) => Response.json())
    // .then((usuarios)=>{
    //     let tablaUsuarios = document.querySelector("#table-usuarios tbody");

    //     for (const itemUsuario of usuarios) {
    //         let tr = "<tr> <td>" + itemUsuario.nombre + "</td> <td>" + itemUsuario.correo + "</td> </tr>"
    //         tablaUsuarios.innerHTML += tr;
    //     }
    // });

