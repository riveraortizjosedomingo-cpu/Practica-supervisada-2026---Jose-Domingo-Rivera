const formulario = document.querySelector('#formulario');
const busqueda = document.querySelector('#busqueda');
const boton = document.querySelector('#boton');
const estado = document.querySelector('#estado');
const resultado = document.querySelector('#resultado');

async function cargarPersonaje(nombre) {
  const url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nombre)}`;

  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`HTTP ${respuesta.status}`);
  }

  return respuesta.json();
}

function render(datos) {
  const tipos = datos.types
    .map(item => item.type.name)
    .join(', ');

  resultado.innerHTML = `
    <article class="tarjeta">
      <img
        src="${datos.sprites.front_default}"
        alt="${datos.name}"
      >

      <h2>${datos.name}</h2>

      <p>Tipos: ${tipos}</p>
      <p>ID: ${datos.id}</p>
    </article>
  `;
}

formulario.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nombre = busqueda.value.trim();


  if (!nombre) {
    estado.textContent = 'Escribe un Pokémon.';
    return;
  }

  try {
  
    estado.textContent = 'Cargando…';
    boton.disabled = true;

    const datos = await cargarPersonaje(nombre);

   
    render(datos);
    estado.textContent = 'Pokémon encontrado.';
  } catch (error) {


    resultado.innerHTML = '';

    if (error.message === 'HTTP 404') {
      estado.textContent = 'No encontramos ese Pokémon.';
    } else {
      estado.textContent =
        'No pudimos conectarnos con la API. Revisa tu conexión.';
    }

  } finally {
    boton.disabled = false;
  }
});


