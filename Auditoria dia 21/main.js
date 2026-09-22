
const inputpendiente = document.getElementById("input_pendiente");
const btnpendiente = document.getElementById("btnpendiente");
const lista_pendiente = document.getElementById("lista_pendiente");

btnpendiente.addEventListener("click", () => {
    const texto1 = inputpendiente.value.trim();
    if (texto1 !== "") {
        const nuevo_item = document.createElement("li");
        nuevo_item.textContent = texto1;

        inputpendiente.value = ""; 
        
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "-";
        btnBorrar.style.marginLeft = "10px";
        
        btnBorrar.addEventListener("click", () => {
            nuevo_item.remove(); 
        });

        nuevo_item.appendChild(btnBorrar);
        

        lista_pendiente.appendChild(nuevo_item);
    }
});



const inputcompletado = document.getElementById("input_completado");
const btncompletado = document.getElementById("btncompletado");
const lista_completada = document.getElementById("lista_completada");

btncompletado.addEventListener("click", () => {
    const texto2 = inputcompletado.value.trim();
    if (texto2 !== "") {
        const nuevo_item2 = document.createElement("li");
        nuevo_item2.textContent = texto2;

        inputcompletado.value = "";
        
        const btnBorrar2 = document.createElement("button");
        btnBorrar2.textContent = "-";
        btnBorrar2.style.marginLeft = "10px";
        
        btnBorrar2.addEventListener("click", () => {
            nuevo_item2.remove(); 
        });

        nuevo_item2.appendChild(btnBorrar2);
        
        lista_completada.appendChild(nuevo_item2);
    }
});



    






