'use strict'

var resultado = document.getElementById('resultado')

function somar (){
    const valor1 = document.getElementById('numero1').value;

    const valor2 = document.getElementById('numero2').value;


    const soma = parseFloat(valor1) + parseFloat(valor2);

    const total = 'A soma é: ' + soma;

    resultado.textContent = total;
}


function subtrair (){
    const valor1 = document.getElementById('numero1').value;

    const valor2 = document.getElementById('numero2').value;


    const subtracao = parseFloat(valor1) - parseFloat(valor2);

    const total = 'A subtração é: ' + subtracao;

    resultado.textContent = total;
}


function multiplicar (){
    const valor1 = document.getElementById('numero1').value;

    const valor2 = document.getElementById('numero2').value;


    const multiplicacao = parseFloat(valor1) * parseFloat(valor2);

    const total = 'A multiplicação é: ' + multiplicacao;

    resultado.textContent = total;
}


function dividir (){
    const valor1 = document.getElementById('numero1').value;

    const valor2 = document.getElementById('numero2').value;


    const divisao = parseFloat(valor1) / parseFloat(valor2);

    const total = 'A divisão é: ' + divisao;

    resultado.textContent = total;
}

document.getElementById('soma').addEventListener('click', somar);
document.getElementById('subtrair').addEventListener('click', subtrair);
document.getElementById('multiplicar').addEventListener('click', multiplicar);
document.getElementById('dividir').addEventListener('click', dividir);