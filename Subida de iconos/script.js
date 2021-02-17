
const botonClick = document.getElementById("botonClick");
const contenedor = document.getElementById("contenedorGlobos");

botonClick.onclick = soltarGlobos;


function createBallon(){
	const globo = document.createElement('div');

	globo.classList.add('globo');

	globo.innerText = '🎈';

	globo.style.left = Math.random() * 100 + "vw";

	globo.style.animationDuration = Math.random() * 2 + 3 + "s";

	document.body.appendChild(globo);

	setTimeout(function() { globo.remove(); }, 5000);
}

function soltarGlobos(){
	setInterval(createBallon, 1000);
	contenedor.remove();
}
