let numerador = prompt("Insira o numerador.");
let denominador = prompt("Insira o denominador.");
if (denominador != 0) {
    alert(`${numerador} dividido por ${denominador} é ${numerador / denominador}`);
} else{
    alert("Não é possível dividir por zero");
}