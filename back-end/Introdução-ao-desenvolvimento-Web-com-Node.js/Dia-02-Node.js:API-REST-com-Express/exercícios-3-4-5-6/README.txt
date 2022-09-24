 Observe o array de objetos abaixo:

const activities = [

  {

    id: 1,

    description: 'Banho no cachorro',

    status: 'A fazer',

  },

  {

    id: 2,

    description: 'Cortar a grama',

    status: 'A fazer',

  },

  {

    id: 3,

    description: 'Estudar JavaScript',

    status: 'Feito',

  },

];

Agora, faça os exercícios a seguir:

    Crie um servidor Node.js utilizando o framework Express

    Crie um endpoint do tipo GET com a rota /myActivities/:id, que possa listar uma atividade do array por id

    Crie um endpoint do tipo GET com a rota /myActivities, que possa listar todas as atividades do array

    Crie um endpoint do tipo GET com a rota /filter/myActivities, que possa listar todas as atividades filtradas por status do array. A rota deve receber a informação por query e a chave deve-se chamar status. A chave status vai trazer consigo valor de Feito ou A fazer e o endpoint deve fazer o filtro das atividades

