let boton = document.getElementById("btnanimar");
let img1 = document.getElementById("imagen1");
let img2 = document.getElementById("imagen2");
let img3 = document.getElementById("imagen3");

function vibrar(event){
event.preventDefault()
    img1.classList.add("vuelta");
    img2.classList.add("vuelta");
    img3.classList.add("vuelta");
}