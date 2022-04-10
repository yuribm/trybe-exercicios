import logo from './logo.svg';
import Image from './Image';
import './App.css';

function App() {

  const url = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'

  return (
    <Image source={url} alternativeText='cute cat staring' />
  );
}

export default App;
