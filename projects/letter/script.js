const p = document.querySelector('#carta-gerada');

const classes = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

function random(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function generateLetter() {
  const text = document.querySelector('#carta-texto').value;
  if (text.match(/[a-z]|[0-9]/gi)) {
    const letters = text.split(' ');
    p.innerText = '';
    letters.forEach((letter) => {
      const span = document.createElement('span');
      const nClasses = random(1, 4);
      for (let i = 0; i < nClasses; i += 1) {
        const categoria = classes[random(0, 3)];
        const classe = categoria[random(0, categoria.length - 1)];
        span.classList.add(classe);
      }
      span.innerText = letter;
      p.appendChild(span);
    });
  } else {
    p.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

function coutLetter(e) {
  const text = e.target.value.split(' ');
  document.querySelector('#carta-contador').innerText = text.length;
}

document.querySelector('#criar-carta').addEventListener('click', generateLetter);
document.querySelector('#carta-texto').addEventListener('keyup', coutLetter);
