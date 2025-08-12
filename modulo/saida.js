/***********************************************************************************************************************************************************************
 * Objetivo: Arquivo responsável pela função de saída de dados ao cliente
 * Autor: Pedro Henrique
 * Data: 08/08/2025
 * Versão: 1.0
*************************************************************************************************************************************************************************/

function saidaDeDados(nome, produto, valor, parcelas, valorFinal){

    let mensagemFinal = `
********************** [Vida Moda] **********************
Muito obrigado por realizar a sua compra conosco Sr(a) ${nome}.
A compra do produto ${produto}, tem um valor de: R$${valor}.
A sua compra será parcelada em ${parcelas} vezes e o Sr(a) pagará: R$${valorFinal}

Muito obrigado por escolher a [Viva Moda].    
*********************************************************
`

    if(mensagemFinal == undefined){
        return false
    } else {
        return mensagemFinal
    }
   
}

module.exports = {
    saidaDeDados
}