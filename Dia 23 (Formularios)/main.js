const btnfecha = document.getElementById("btnfecha");
const inputfecha = document.getElementById("inputedad");
const mensaje = document.getElementById("resultado");
const mensaje2 = document.getElementById("resul1");
const inputnombre = document.getElementById("nombre");
const btnborrar = document.getElementById("btnborrar");
const select = document.getElementById("select1");
const listabarca = document.getElementById("lista-barca");
const listareal = document.getElementById("lista-real");
const listabayern = document.getElementById("lista-bayern");
const eliminardato = document.getElementById("btnquitar")
btnfecha.addEventListener("click", function () {
    const nombre = inputnombre.value;
    const equipo = select.value;
    const fecha = inputfecha.value;
    const fechadenacimiento = new Date(fecha);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechadenacimiento.getFullYear();
    if(edad>=16){
        const elemento = document.createElement("li");
        elemento.textContent = nombre + " - " + edad + " años";
        if (equipo == "Barca") {
            listabarca.appendChild(elemento);
        } else if (equipo == "RealMadrid") {
            listareal.appendChild(elemento);
        } else if (equipo == "BayernMunich") {
            listabayern.appendChild(elemento);
        }
        inputfecha.value ="";
        inputnombre.value="";
    } else if(edad<16) {
        mensaje.textContent = "Lo sentimos, eres menor de edad."
        

    } else if(inputfecha.value=""||inputnombre.value=="") {
        mensaje2.textContent = "LLene los datos que se solicitan."
    }
});
eliminardato.addEventListener("click", function () {
    const equipo = select.value;

    if (equipo === "Barca" && listabarca.lastElementChild) {
        listabarca.lastElementChild.remove();
    } else if (equipo === "RealMadrid" && listareal.lastElementChild) {
        listareal.lastElementChild.remove();
    } else if (equipo === "BayernMunich" && listabayern.lastElementChild) {
        listabayern.lastElementChild.remove();
    }
});


btnborrar.addEventListener("click", function () {
    if (inputfecha.value==""||inputnombre.value==""){
        mensaje2.innerHTML = "";}
    mensaje.innerHTML = "";
    listabarca.innerHTML = "";
    listareal.innerHTML = "";
    listabayern.innerHTML = "";
    
});