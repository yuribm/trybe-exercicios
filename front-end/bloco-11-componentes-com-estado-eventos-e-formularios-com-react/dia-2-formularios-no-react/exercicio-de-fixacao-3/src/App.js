// para este exercício foi copiado o código do exercício de fixação 2
// 7 - Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.
// 8 - Faça duas validações em um desses componentes filhos e uma em um outro.
// 9 - Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário.

import Form from "./components/Forms";
import './App.css';

function App() {
  return (
    <div className="App">
     <Form />
    </div>
  );
}

export default App;
