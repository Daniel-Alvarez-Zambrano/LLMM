
let url = 'https://raw.githubusercontent.com/Daniel-Alvarez-Zambrano/LLMM/main/JSON/jsonTiempo.json';

const PartIzq = document.getElementById("parte_izquierda");
const Pronosticos = document.getElementById("pronosticos");
const ExtraDatos = document.getElementById("extra");

async function fetchJSON(url){

  const respuesta = await fetch(url);
  const json = await respuesta.json();
  return json;
}

fetchJSON(url)
  .then(json => {  
       
  var tiempoHoyElement = document.createElement("div");
        tiempoHoyElement.classList.add("hoy");

          tiempoHoyElement.innerHTML = 
      ` 
          <img class="img-dia-actual" src=${json.dias[0].estado.icono}>
          <h3 class="temperatura-dia-actual">${json.dias[0].temperatura}ºC</h3>
          <h2 class="estado-nombre-dia">${json.dias[0].estado.nombre}</h2>
          <h2 class="ciudad">${json.ciudad}</h2>
      `;

   PartIzq.appendChild(tiempoHoyElement);

   var vientoHoyElement = document.createElement("div");
        vientoHoyElement.classList.add("datos-viento");

          vientoHoyElement.innerHTML = 
      ` 
          <h2 class="viento">Viento</h2>
		  <h3 class="viento-dia">${json.dias[0].viento} km/h</h3>
      `;

   ExtraDatos.appendChild(vientoHoyElement);
   
   var humedadHoyElement = document.createElement("div");
        humedadHoyElement.classList.add("datos-humedad");

          humedadHoyElement.innerHTML = 
      ` 
          <h2 class="viento">Humedad</h2>
		  <h3 class="viento-dia">${json.dias[0].humedad} %</h3>
      `;

   ExtraDatos.appendChild(humedadHoyElement);

     for (const dias of json.dias){
             
          if (!(dias.dia ==json.dias[0].dia)) {

        var tiempoElement = document.createElement("div");
        tiempoElement.classList.add("dias");

          tiempoElement.innerHTML = 
      ` 
          <h2 class="dia">${dias.dia}</h2>
          <img class="img-dia" src=${dias.estado.icono}>
          <h3 class="temperatura-dia">${dias.temperatura}ºC</h3>
      `;

       Pronosticos.appendChild(tiempoElement);
        
      }
    }

	});



