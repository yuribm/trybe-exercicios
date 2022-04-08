// Responda às perguntas a seguir para ter certeza de que você entendeu os textos. Discuta a resposta com o restante da turma (que tal uma pessoa abrir uma conversa no Slack para conversarem a respeito?!). Se bater alguma dúvida, volte aos textos!

// 1 - O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
// RESPOSTA: O código assíncrono é executado em paralelo com outros códigos, não sendo bloqueado em uma ordem de execução. Já o código síncrono segue uma ordem específica de execução, na qual o código posterior espera a execução do anterior para ser executado.

// 2 - Quando você tem que enfileirar várias callbacks , que problema surge?
// RESPOSTA: Surge o chamado "callback hell", aumentando muito a dificuldade de compreensão do código, tornando-se menos intuitivo.

// 3 - Por que as Promises são uma forma de resolver esse problema?
// RESPOSTA: As promises são formas de tornar o código assíncrono, facilitando a sua interpretação. 

// 4 - Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
// RESPOSTA: Devido a incerteza acerca do tempo de resposta e da possibilidade de ocorrência de algum erro, a comunicação com a API deve ser assíncrona, sem bloquear a execução do restante do código. 

// 5 - Dada a resposta anterior, o que é fetch e para que ele serve?
// RESPOSTA: Fetch é uma forma de comunicação, através dele é feita uma requisição à API.