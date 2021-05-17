let url = 'https://api.pokemontcg.io/v2/cards';

const PartAbj = document.getElementById("parte_abajo");

async function fetchJSON(url){
  const respuesta = await fetch(url);
  const json = await respuesta.json();
  return json;
}

fetchJSON(url)
  .then(json => { 

  	for (const pkmn of json.data){
       
        var pokmnElement = document.createElement("div");
        pokmnElement.classList.add("carta");

        pokmnElement.innerHTML = 
      ` 
          <div class="img-carta"><img src=${pkmn.images.small}></div>
          <div class="datos-carta">
				<h1>${pkmn.name}</h1>
				<h3>Serie: ${pkmn.set.series}</h3>
				<h3>Caja: ${pkmn.set.name}</h3>
				<h3>Lanzamiento: ${pkmn.set.releaseDate}</h3>
				<h3>Número de carta: ${pkmn.number}</h3>
				<h3>Cartas imprimidas: ${pkmn.set.printedTotal}</h3>
				<h3>Rareza: ${pkmn.rarity}</h3>
				<h3>Valor: ${pkmn.tcgplayer.prices}$</h3>
          </div>
      `;
 
    PartAbj.appendChild(pokmnElement);

  	}

  });

function mostrar(){
	const busqueda = document.getElementById("busquedaPKMN");

    const prueba = "PKMN: " + busquedaPKMN.value; 

    console.log(prueba);
return false;
}