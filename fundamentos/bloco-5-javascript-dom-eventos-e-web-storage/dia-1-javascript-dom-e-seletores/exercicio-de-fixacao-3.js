function mudaCorDoBackground (element, index, color) {
  document.getElementsByTagName(element)[index].style.backgroundColor = color;
}

mudaCorDoBackground('h1', 0, 'limegreen');

mudaCorDoBackground('h3', 0, 'purple');

mudaCorDoBackground('h3', 1, 'purple');

mudaCorDoBackground('h3', 2, 'black');

mudaCorDoBackground('h3', 3, 'black');

mudaCorDoBackground('section', 0, 'orange');

mudaCorDoBackground('section', 1, 'gold');

mudaCorDoBackground('footer', 0, 'darkgreen');