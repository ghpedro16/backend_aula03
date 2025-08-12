/**************************************************************************************************************************************************************************
 * Objetivo: Desenvolver um projeto para a empresa Viva Moda que calcula juros compostos
 * Autor: Pedro Henrique
 * Data: 05/08/2025
 * Versão: 1.0
 *************************************************************************************************************************************************************************/

// Import da biblioteca do readline
const readline = require('readline')

// Variaveis que contem mensagens de erros
const MESSAGE_ERROR_EMPTY = 'ERRO: Existem campos que não foram preenchidos.'
const MESSAGE_ERROR_NOT_NUMBER = 'ERRO: Não é possivel calcular com a entrada de letras.'
//const MESSAGE_ERROR_OUT_OF_RANGER = 'ERRO: Os valores informados precisam ser entre 0 e 10.'

const calculoDeJuros = require('./modulo/calculo.js')
const mensagem = require('./modulo/saida.js')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

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

                       if(nomeCliente == '' || itemComprado == '' || capitalInicial == '' || percentualJuros == '' || parcelasAnuais == '' || tempoParcelamento == ''){
                         console.log(MESSAGE_ERROR_EMPTY)
                        }else if(isNaN(nomeCliente) == false || isNaN(capitalInicial) || isNaN(percentualJuros) || isNaN(parcelasAnuais) || isNaN(tempoParcelamento)){
                            console.log(MESSAGE_ERROR_NOT_NUMBER)
                        }else{
                            let valorFinal = calculoDeJuros.calcularJuros(valor, juros, parcelas, tempo)
                            console.log(mensagem.saidaDeDados(nome, produto, valor, parcelas, valorFinal))
                        }
                    })
                })
            })
        })
    })
})