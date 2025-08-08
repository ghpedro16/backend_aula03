/**************************************************************************************************************************************************************************
 * Objetivo: Desenvolver um projeto para a empresa Viva Moda que calcula juros compostos
 * Autor: Pedro Henrique
 * Data: 05/08/2025
 * Versão: 1.0
 *************************************************************************************************************************************************************************/

function calcularJuros(valor, juros, parcelas, tempo){

    let capitalInicial = valor
    let percentualJuros = juros
    let parcelasAnuais = parcelas
    let tempoParcelamento = tempo

    let montanteFinal = Number(capitalInicial) * Math.pow((1 + Number((percentualJuros / 100)) / Number(parcelasAnuais)) , Number(parcelasAnuais) * Number(tempoParcelamento))

    return Number(montanteFinal)
}

//console.log(calcularJuros(1000, 10, 12, 1))

module.exports = {
    calcularJuros,
}