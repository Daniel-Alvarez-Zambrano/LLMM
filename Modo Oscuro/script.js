
const botonModo = document.getElementById("botonModo");
const contenedor = document.getElementById("contenedor");

botonModo.onclick = cambiarModo;

function cambiarModo(){
	if (contenedor.classList.contains("modoClaro")) {
		contenedor.classList.remove("modoClaro");
		contenedor.classList.add("modoOscuro");
	}else{
		if (contenedor.classList.contains("modoOscuro")) {
			contenedor.classList.remove("modoOscuro");
			contenedor.classList.add("modoClaro");
		}
	}
}
