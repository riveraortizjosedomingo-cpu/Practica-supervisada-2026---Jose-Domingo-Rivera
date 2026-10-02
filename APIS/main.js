const boton = document.getElementById("btnPost");
const input = document.getElementById("inputPost");
const resultado = document.getElementById("resultado");
const btnborrar = document.getElementById("borrar");
const post = input.value;

function obtenerdato(post) {

fetch(`https://jsonplaceholder.typicode.com/posts/3${post}`)
    .then(function(response) {
        if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
    }
    return response.json();
})
    .then(function(data) {
        resultado.innerHTML = `<h2>Titulo: <br>${data.title}</h2>
        <p><strong>Cuerpo del post:</strong> <br>${data.body}</p>`;
        console.log('Datos obtenidos:', data);
    })
    .catch(function(error) {
        console.error('Error:', error.message);
        resultado.innerHTML = `<p style="color: red;">Error al obtener los datos: ${error.message}</p>`;
    })
}


boton.addEventListener("click", function() {
    obtenerdato(post);
    input.value = "";
    
});
btnborrar.addEventListener("click", function() {
    resultado.innerHTML = "";
    console.clear();
    console.log("Se ha borrado el contenido del resultado y la consola.");
})