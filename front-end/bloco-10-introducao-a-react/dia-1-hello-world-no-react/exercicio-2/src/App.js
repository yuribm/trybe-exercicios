// EXERCICIO 2: Crie um novo projeto utilizando npx create-react-app.
// Na pasta src, crie um novo arquivo chamado Header.jsx , que representará o componente Header;
// No arquivo Header.jsx , crie uma classe React, chamada Header . Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;
// No arquivo App.js , importe o componente Header criado anteriormente;
// Renderize o componente Header no App.js ;
// Na pasta src, crie um novo arquivo chamado Content.jsx , que representará o componente Content ;
// Dentro do arquivo Content.jsx , crie uma classe React chamada Content ;
// Ainda no arquivo Content.jsx , adicione o seguinte array:
// A classe Content deve renderizar o array conteudos com a utilização da função map, como visto anteriormente, com o seguinte formato:
// Lembre-se de adicionar o atributo 'key' ao elemento pai dessa lista, na renderização.
// Exporte o componente Content ;
// No arquivo App.js , importe o componente Content criado anteriormente;
// Renderize o componente Content no App.js ;
// Crie um novo arquivo Footer.jsx ;
// No arquivo Footer.jsx , crie uma classe chamada Footer .
// A classe Footer deve renderizar uma tag h1 com o texto "E isso é só o começo...". Não esqueça de exportar o componente criado.
// Importe o componente Footer no app.js
// Renderize o componente Footer no app.js .

// EXERCÍCIO BÔNUS:
// Estilize a aplicação do exercicio 3. Para isso, adicione classes para estilização dos seus componentes de forma que cada conteúdo listado seja um Card.
// Para adicionar uma classe de estilização em um elemento HTML, utilize o atributo className:

import './App.css';
import Header from './Header'
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default App;
