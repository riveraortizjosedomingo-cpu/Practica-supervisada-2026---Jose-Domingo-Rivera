const inputRespuesta = document.getElementById("respuesta");
const botonVerificar = document.getElementById("verificar");
const imagenPokemon = document.getElementById("imagen-pokemon");
const botonSiguiente = document.getElementById("siguiente");
const mensaje = document.getElementById("mensaje");
function obtenerPokemonAleatorio() {
    const numeroPokemon = Math.floor(Math.random() * 151) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
          imagenPokemon.src = data.sprites.front_default;
          imagenPokemon.style.filter = "brightness(0)";
          imagenPokemon.style.width = "150px";
          imagenPokemon.style.height = "100px";
          PokemonNombre = data.name;
          console.log(PokemonNombre);
          })

      }
    obtenerPokemonAleatorio();
botonVerificar.addEventListener("click", function() {
  const verificar = inputRespuesta.value;
  if (verificar === PokemonNombre) {
    mensaje.innerHTML = "Correcto, Es " + PokemonNombre;
    imagenPokemon.style.filter = "brightness(1)";
    imagenPokemon.style.width = "200px";
    imagenPokemon.style.height = "150px";
  } else if (verificar === "") {
    mensaje.innerHTML = "Por favor, ingresa una respuesta.";
  } else {
    inputRespuesta.value = "";
    mensaje.innerHTML = "Incorrecto. Intenta de nuevo.";
  }

})
botonSiguiente.addEventListener("click", function() {
  obtenerPokemonAleatorio();
  inputRespuesta.value = "";
  mensaje.innerHTML = "";
  console.clear();
})
