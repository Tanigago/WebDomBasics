const buttonX2 = document.querySelector("button");
const inputPesadilla = document.querySelector("input");

function multiplicador (event) {
    console.log("Hurra!");
    
    const resultado = inputPesadilla.value * 2;
    inputPesadilla.value = resultado;
}

buttonX2.addEventListener("click", multiplicador);