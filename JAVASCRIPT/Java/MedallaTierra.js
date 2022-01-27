
    <h1>Ninetales</h1>
    fetch('https://pokeapi.co/api/v2/pokemon/ninetales')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('elemento')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
  <img src='${pokemon.sprites.front_default}'><p>${pokemon.ability}<p><p>${pokemon.weight}<p>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))
    
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png">
    <P>Ninetales, conocido como Kyukon la evolución de vulpix es una especie de Pokémon en Nintendo y de la franquicia Pokémon de Game Freak. Se trata de un pokémon tipo Fuego. Ninetales evoluciona de Vulpix cuando se lo expone a una piedra fuego.</P>
    <a href="https://www.pokemon.com/el/pokedex/ninetales">Pokedex</a>

    <h1>Entei</h1>
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png">
    <P>Entei es un Pokémon legendario de tipo fuego introducido en la segunda generación. Es uno de los tres perros legendarios junto con Raikou y Suicune. Por su forma de captura en los videojuegos, es un Pokémon errante.</P>
    <a href="https://www.pokemon.com/el/pokedex/entei">Pokedex</a>

    <h1>Zapdos</h1>
    <img src="https://static.wikia.nocookie.net/espokemon/images/d/d8/Zapdos.png/revision/latest?cb=20160316194916">
    <P>Zapdos es un Pokémon legendario de tipo eléctrico/volador introducido en la primera generación. Es la segunda de las tres aves legendarias de Kanto junto a Moltres y Articuno. En Pokémon Platino, Pokémon X y Pokémon Y es un Pokémon errante.</P>
    <a href="https://pokemon.fandom.com/es/wiki/Zapdos">Pokedex</a>
