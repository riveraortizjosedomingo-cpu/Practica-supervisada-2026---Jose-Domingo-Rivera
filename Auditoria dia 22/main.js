var acumulado = 0; 
let primero = true;

const inputcalcular = document.getElementById("inputcalcular");
const btncalcular = document.getElementById("btncalcular");
const btnrestar = document.getElementById("btnrestar");
const btnmulti = document.getElementById("btnmulti");
const btndiv = document.getElementById("btndiv")
const resultado = document.getElementById("resultado");
const btnborrar = document.getElementById("btnborrar");


btncalcular.addEventListener("click", function() {
        const valorTexto = inputcalcular.value.trim();
        if (valorTexto == "") {
            resultado.textContent = "Ingresa un número válido";
            return;
        }
        const numero = Number(valorTexto);
        if (numero === 0) {
            inputcalcular.value = "";
            resultado.textContent = "Se ha reiniciado el contador";
            alert("Suma finalizada.");
            acumulado = 0;
            return;
        }
        acumulado = acumulado + numero;
        resultado.textContent = "La suma acumulada es... " + acumulado;
        inputcalcular.value = "";
    });
btnrestar.addEventListener("click", function(){
    const valorTexto = inputcalcular.value.trim();
    if (valorTexto == ""){
        resultado.textContent = "Ingresa un numero valido";
        return;
    }
    const numero = Number(valorTexto);
    if(numero == 0){
    inputcalcular.value = "";
    resultado.textContent = "Se ha reiniciado el contador";
    alert("Resta finalizada");
    acumulado = 0;
    return;
    }
    if(primero){
        acumulado = numero
        primero = false;
    } else {
        acumulado = acumulado - numero;
        }
    resultado.textContent = "La resta acumulada es..." + acumulado;
    inputcalcular.value = ""
})
btnmulti.addEventListener("click", function(){
        const valorTexto = inputcalcular.value.trim();
    if (valorTexto == ""){
        resultado.textContent = "Ingresa un numero valido";
        return;
    }
    const numero = Number(valorTexto);
    if(numero == 0){
    inputcalcular.value = "";
    resultado.textContent = "Se ha reiniciado el contador";
    alert("Multiplicación finalizada");
    acumulado = 0;
    return;
}
if (primero){
    acumulado = numero;
    primero=false;
} else {
    acumulado = acumulado * numero;
}
resultado.textContent = "La multiplicación acumulada es..." + acumulado;
inputcalcular.value = "";
})
btndiv.addEventListener("click", function(){
    const valorTexto = inputcalcular.value.trim();
    if (valorTexto == ""){
        resultado.textContent = "Ingresa un numero valido";
        return;
    }
    const numero = Number(valorTexto);
    if(numero == 0){
    inputcalcular.value = "";
    resultado.textContent = "Se ha reiniciado el contador";
    alert("Multiplicación finalizada");
    acumulado = 0;
    return;
    }
    if(primero){
        acumulado = numero;
        primero = false;
    } else {
        acumulado = acumulado / numero;
    }
    
    resultado.textContent = "La división acumulada es..." + acumulado
    inputcalcular.value = "";
})
btnborrar.addEventListener("click", function(){
    inputcalcular.value = "";
    acumulado = 0;
    primero = true;
    resultado.textContent = "El contador se ha reiniciado.";
    return;
})










