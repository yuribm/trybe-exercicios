// para este exercício, foi copiado o código do exercício anterior.
// 3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.
// 4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.
// 5 - Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos . Acrescente um ao seu formulário.
// 6 - Encapsule alguns dos seus campos num fieldset . Entenda como ele funciona lendo a documentação .
// import './App.css';
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
