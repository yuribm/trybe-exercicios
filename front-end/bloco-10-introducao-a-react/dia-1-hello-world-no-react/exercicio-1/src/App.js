// Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app
// ⚠️ Substitua o nome-app pelo que você desejar para seu app ⚠️
// Crie uma lista de tarefas simples seguindo os passos abaixo:
// insira a função Task a seguir acima do seu componente App dentro do arquivo App.js :

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

// agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start .
// por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App .

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tasks = ['task1', 'task2', 'task3', 'task4', 'task5']

  const tasksLi = tasks.map((element, index) => <li key={index}>{element}</li>)

  return (
    <div className="App">
      <ol>
      {Task('test0')}
      {tasksLi}
      </ol>

    </div>
  );
}

export default App;
