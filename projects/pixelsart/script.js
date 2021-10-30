// função que gera os pixels no pixel-board
function generatePixels(quantidade) {
  const pai = document.querySelector('#pixel-board');
  pai.innerHTML = '';
  pai.style.width = `${quantidade * 40}px`;
  for (let i = 0; i < quantidade * quantidade; i += 1) {
    const pixel = document.createElement('span');
    pixel.classList.add('pixel');
    pai.appendChild(pixel);
  }
}
// chamando a função para gerar 25 pixels no pixel-board
generatePixels(5);

function colorSelect(e) {
  if (e.target.id !== 'color-palette') {
    document.querySelector('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  }
}

function changeColor(e) {
  if (e.target.id !== 'pixel-board') {
    const color = document.querySelector('.selected').getAttribute('data-color');
    e.target.style.backgroundColor = color;
  }
}

function clearBoard() {
  const allPixels = document.querySelectorAll('.pixel');
  allPixels.forEach((pixel) => {
    const stylePixel = pixel.style;
    stylePixel.backgroundColor = 'white';
  });
}

function changeBoard() {
  const n = document.querySelector('#board-size').value;
  if (n === '') {
    alert('Board inválido!');
    return;
  }
  if (n < 5) {
    generatePixels(5);
  } else if (n > 50) {
    generatePixels(50);
  } else {
    generatePixels(n);
  }
}

function random() {
  return Math.floor(Math.random() * 255 + 1);
}

function generateColors() {
  const colors = document.querySelectorAll('.color');
  for (let i = 1; i < 4; i += 1) {
    const r = random();
    const g = random();
    const b = random();
    colors[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    colors[i].setAttribute('data-color', `rgb(${r}, ${g}, ${b})`);
  }
}

generateColors();

document.querySelector('#color-palette').addEventListener('click', colorSelect);
document.querySelector('#pixel-board').addEventListener('click', changeColor);
document.querySelector('#clear-board').addEventListener('click', clearBoard);
document.querySelector('#generate-board').addEventListener('click', changeBoard);
