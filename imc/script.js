/*function calculaImc() {
    let nome = document.getElementById('nome').value;
    let pesoEmQuilos = document.getElementById('peso').value;
    let alturaEmMetros = document.getElementById('altura').value;

    valorImc = pesoEmQuilos / (alturaEmMetros ^ 2);

    if (valorImc < 17) {
        resultado = "Muito abaixo do peso";
    } else if (valorImc >= 17 && valorImc < 18, 5) {
        resultado = "Abaixo do peso";
    } else if (valorImc >= 18, 5 && valorImc < 25) {
        resultado = "Peso normal";
    } else if (valorImc >= 25 && valorImc < 30) {
        resultado = "Acima do peso";
    } else if (valorImc >= 30 && valorImc < 35) {
        resultado = "Obesidade I";
    } else {
        resultado = "Obesidade II";
    }

    alert(calculaImc());
}*/


let pesoEmQuilos = 40
let alturaEmMetros = 1.75

valorImc = pesoEmQuilos / (alturaEmMetros ^ 2);

if (valorImc < 17) {
    console.log("Muito abaixo do peso");
} else if (valorImc >= 17 && valorImc < 18.5) {
    console.log("Abaixo do peso");
} else if (valorImc >= 18.5 && valorImc < 25) {
    console.log("Peso normal");

} else if (valorImc >= 25 && valorImc < 30) {
    console.log("Acima do peso");
} else if (valorImc >= 30 && valorImc < 35) {
    console.log("Obesidade I");
} else {
    console.log("Obesidade II");
}

console.log(valorImc)