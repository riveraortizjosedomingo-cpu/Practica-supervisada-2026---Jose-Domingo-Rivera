const inputpersonas = document.getElementById("personas");
const inputcantidad = document.getElementById("result");
const btnpersonas = document.getElementById("btnPersonas");
const btncalcular = document.getElementById("btnResultado")
const textoresul = document.getElementById("resultado");

btncalcular.addEventListener("click", function(){
    const personas = Number(inputpersonas.value);
    const cantidad = Number(inputcantidad.value);
    if (personas <= 0 || cantidad <= 0){
        textoresul.textContent="Ingresa unos valores";
        return;
    } 

    var resultado = cantidad / personas;
    textoresul.textContent = "Cada uno tendra que pagar: Q" + resultado;
})


