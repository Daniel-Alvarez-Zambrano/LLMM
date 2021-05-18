let url = 'https://api.pokemontcg.io/v2/cards';
let urlFiltrarNombre = 'https://api.pokemontcg.io/v2/cards?q=name:';

const PartAbj = document.getElementById("parte_abajo");
const busqueda = document.getElementById("busquedaPKMN");
const formulario = document.getElementById("formularioBusqueda");
let precio=0;

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
        calcularPrecio(pkmn)
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
        <h3>Valor: ${precio} $</h3>
        </div>
      `;
 
    PartAbj.appendChild(pokmnElement);

    }
  });

formulario.addEventListener("submit", (event) =>{
  event.preventDefault();
  const palabra = busquedaPKMN.value;
  if (palabra) {
    filtrarPorNombre(palabra);
    busquedaPKMN.value = "";
  }  
 });

function filtrarPorNombre(palabra){
  fetchJSON(urlFiltrarNombre + palabra + "*").then(json =>{
    console.log(json);
    recargarListaCartas(json);
  });
}

function recargarListaCartas(cartas){
  PartAbj.innerHTML = "";

  cartas.data.forEach((pkmn) => {
     const cartaElement = document.createElement("div");
     cartaElement.classList.add("carta");
     calcularPrecio(pkmn)

        cartaElement.innerHTML = 
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
        <h3>Valor: ${precio} $</h3>
        </div>
      `;
 
    PartAbj.appendChild(cartaElement);
  });
}


function calcularPrecio(pkmn){
          if (pkmn.tcgplayer.prices.holofoil!==undefined) {
              
              if (pkmn.tcgplayer.prices.holofoil.market!==null) {
                precio=pkmn.tcgplayer.prices.holofoil.market
              }   
              else if (pkmn.tcgplayer.prices.holofoil.market==null) {
                precio=pkmn.tcgplayer.prices.holofoil.mid
              }
              
            } 
              
              else if(pkmn.tcgplayer.prices.normal!==undefined){

                if (pkmn.tcgplayer.prices.normal.market!==null) {
                  precio=pkmn.tcgplayer.prices.normal.market
                } 
                else if (pkmn.tcgplayer.prices.normal.market==null) {
                  precio=pkmn.tcgplayer.prices.normal.mid
                }
              
              }

               
               else if(pkmn.tcgplayer.prices.reverseHolofoil!==undefined){
                 
                 if (pkmn.tcgplayer.prices.reverseHolofoil.market!==null) {
                  precio=pkmn.tcgplayer.prices.reverseHolofoil.market
                 }
                 else if (pkmn.tcgplayer.prices.reverseHolofoil.market==null) {
                  precio=pkmn.tcgplayer.prices.reverseHolofoil.mid
                } 
               
               }
}