boton.onclick = mostrarResultado;

function mostrarResultado(){
resultado.classList.remove("invisible");
resultado.classList.add("visible");
}


function mostrar(){
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const dni = document.getElementById("dni");
    const estado = document.getElementById("estado");
    const hobbys = document.getElementsByName("hobby");
    const nacimiento = document.getElementById("nacimiento");
    const condiciones = document.getElementById("condiciones");
    const resultado = document.getElementById("resultado");
    const boton = document.getElementById("boton");
    let hobbyElegido = "";
    let eleccionCondiciones = "No";
    for (var i = 0, length = hobbys.length; i < length; i++) {
         if (hobbys[i].checked) {
             hobbyElegido = hobbys[i];
             break;
        }
    }

if(condiciones.checked){
    eleccionCondiciones = "Sí";
}

resultado.value =
"Nombre: " + nombre.value +
", apellidos: " + apellidos.value +
", dni: " + dni.value +
", estado actual: " + estado.value +
", fecha de nacimiento: " + nacimiento.value +
" y hobby: " + hobbyElegido.value +
". ¿Ha aceptado las condiciones? " + eleccionCondiciones;

 let miArray = [];
 miArray.push(resultado.value);
 console.log(miArray);

return false;
}