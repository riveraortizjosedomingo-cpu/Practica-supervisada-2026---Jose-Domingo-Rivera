document.getElementById("Encontrar").addEventListener("click", Encontrarr);

function Encontrarr(e) {

        e.preventDefault(); 

 
    const input = document.getElementById("inputEncontrar").value.trim().toLowerCase();
    

    const resul = document.getElementById("Resultado"); 

    if (input === "beca universitaria") {
        resul.textContent = "Sirve para financiar tus estudios superiores y reducir los gastos académicos.";
    } else if (input === "curso de programación" || input === "curso de programacion") {
        resul.textContent = "Un curso de programación podría servirte para abrirte las puertas al mundo de la informática.";
    } else if (input === "programa de emprendimiento") {
        resul.textContent = "Un programa de emprendimiento nos podría servir para emprender y aprender a administrar nuestro propio negocio.";
    } else if (input === "ofertas de empleo") {
        resul.textContent = "Las ofertas de empleo abren puertas al mundo laboral, esto te puede servir para tener experiencia y crecer personalmente.";
    } else if (input === "programas de financiamiento" || input === "programas de financimiento") {
        resul.textContent = "Sirve para acceder a préstamos, créditos o capital semilla para tus proyectos.";
    } else if (input === "") {
        resul.textContent = "Ingresa alguna de las opciones, por favor.";
    } else {
        resul.textContent = "Ingresa algo válido.";
    }
function actualizarEstadoRed() {
    if (!navigator.onLine) {
        estadoRed.textContent = "Estás sin conexión. Mostrando última búsqueda guardada.";
        estadoRed.style.color = "#d97706";
        
        // Recuperar último resultado si la red se cae
        const guardado = JSON.parse(localStorage.getItem("ultimaOportunidad"));
        if (guardado) {
            resul.textContent = `[Sin conexión] ${guardado.respuesta}`;
            inputElemen.value = guardado.busqueda;
        }
    } else {
        estadoRed.textContent = "Conectado";
        estadoRed.style.color = "#16a34a";
    }
}

window.addEventListener("online", actualizarEstadoRed);
window.addEventListener("offline", actualizarEstadoRed);
document.addEventListener("DOMContentLoaded", actualizarEstadoRed);
}