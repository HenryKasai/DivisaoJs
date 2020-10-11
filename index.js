let numerador = prompt("Insira o numerador.");
let denominador = prompt("Insira o denominador.");
if (numerador == null || denominador == null) {
    alert("Insira um valor válido");
} else {
    if (denominador != 0) {
        alert(`${numerador} dividido por ${denominador} é ${numerador / denominador}`);
    } else{
        alert("Não é possível dividir por zero");
    }
}
