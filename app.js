/**************************************************************************************************************************************************************************
 * Objetivo: Desenvolver um projeto para a empresa Viva Moda que calcula juros compostos
 * Autor: Pedro Henrique
 * Data: 05/08/2025
 * Versão: 1.0
 *************************************************************************************************************************************************************************/

// Import da biblioteca do readline
const readline = require('readline')

const entradaDeDados = readline.createInterface(){
    input: stdin,
    output: stdout
}

// Entrada de dados do cliente
entradaDeDados.question('Nome: ', function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Produto: ', function(produto){
        let itemComprado = produto

        entradaDeDados.question('Preço inicial R$', function(valor){
            let capitalInicial = valor

            entradaDeDados.question('Taxa percentual de juros: ', function(juros){
                let percentualJuros = juros

                entradaDeDados.question('Número de parcelas anuais: ', function(parcelas){
                    parcelasAnuais = parcelas

                    entradaDeDados.question('Tempo de parcelamento (em anos): ', function(tempo){
                        let tempoParcelamento = tempo
                    })
                })
            })
        })
    })
})


