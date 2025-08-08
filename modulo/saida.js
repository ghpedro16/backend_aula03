/***********************************************************************************************************************************************************************
 * Objetivo: Arquivo responsável pela função de saída de dados ao cliente
 * Autor: Pedro Henrique
 * Data: 08/08/2025
 * Versão: 1.0
*************************************************************************************************************************************************************************/
//const app = require('../app.js')
//const calculo = require('./calculo.js')

function saidaDeDados(nome, produto, valor, parcelas){
    let valorFinal = calculo.calcularJuros(valor, calcularJuros, parcelas, tempo)

    let mensagemFinal

    console.log('******************* [Nome da Empresa] *******************')
    console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nome}.`)
    console.log(`A compra do produto ${produto}, tem um valor de: ${valor}}.`)
    console.log(`A sua compra será parcelada em ${parcelas} vezes e o Sr(a) pagará: ${valorFinal}`)
    console.log('')
    console.log('Muito obrigado por escolher a [Nome da Empresa].')
    console.log('*********************************************************')

    if(mensagemFinal == undefined){
        return false
    } else {
        return mensagemFinal
    }
   
}

module.exports = {
    saidaDeDados,
    
}

//console.log(saidaDeDados('Pedro', 'XBox', '1200', '12'))