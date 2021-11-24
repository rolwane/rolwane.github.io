const myName = 'Rolwane Borges';
const occupation1 = 'Web Developer';
const occupation2 = 'Designer';
const span = document.querySelector('#typeWriter');

let count = 2;


// Função que faz o efeito de digitação

function typeWriter(phrase) {
  setTimeout(() => {
    for (let i = 0; i < phrase.length; i++) {
      setTimeout(() => {
        span.innerHTML += phrase[i];
      }, 120 * i)
    }
  }, 900);
}


// Função que deleta como se tivesse digitando

function clearSpan() {
  let letras = span.innerHTML.split('');
  for (let i = 0; i < letras.length; i++) {
    setTimeout(() => {
      letras.pop();
      span.innerHTML = letras.join('')
    }, 40 * i);
  }

  typeWriterLoop();
}


// Função de loop para o efeito de escrever fique se repetindo

function typeWriterLoop() {
  setTimeout(() => {
    clearSpan();
    if (count === 0) {
      typeWriter(myName);
      count = 1;
    } else if (count === 1) {
      typeWriter(occupation1);
      count = 2;
    } else {
      typeWriter(occupation2);
      count = 0;
    } 
  }, 5500);
}


// timeOut para iniciar o loop do efeito de digitação

setTimeout(() => {
  clearSpan();
  typeWriter(occupation1);
}, 2500);


// Efeito scroll ao clicar no btn ver-mais

document.querySelector('#btn-ver').addEventListener('click', () => {
  const aboutMePosition = document.querySelector('#about-me').offsetTop;
  window.scrollTo(0, aboutMePosition);
});


// Função responsável por animar o fill das skills

const progress = () => {
  const skills = document.querySelectorAll('.skill .progress-fill');

  for (let i = 0; i < skills.length; i++) {
    let percent = i === 0 ? 90 : i === 1 ? 75 : 60;
    setTimeout(() => skills[i].style.width = `${percent}%`, 200 * i);
  }
}


let loop; // Variável usada para criar um efeito de debounce no evento scroll

window.addEventListener('scroll', () => {
  clearTimeout(loop);
  loop = setTimeout(() => {
    const scroll = (document.documentElement.scrollTop + (window.innerHeight * 3) / 4);
    const target = (document.querySelector('.skill').offsetTop);
    if (scroll > target) progress();
  }, 50)
});
