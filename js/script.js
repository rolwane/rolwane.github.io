const myName = 'Rolwane Borges';
const occupation1 = 'Web Developer';
const occupation2 = 'Designer';
const span = document.querySelector('#typeWriter');

let count = 2;

function typeWriter(phrase) {
  setTimeout(() => {
    for (let i = 0; i < phrase.length; i++) {
      setTimeout(() => {
        span.innerHTML += phrase[i];
      }, 120 * i)
    }
  }, 900)

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

function clearSpan() {
  let letras = span.innerHTML.split('');
  for (let i = 0; i < letras.length; i++) {
    setTimeout(() => {
      letras.pop();
      span.innerHTML = letras.join('')
    }, 40 * i);
  }
}

setTimeout(() => {
  clearSpan();
  typeWriter(occupation1);
}, 2500);

document.querySelector('#btn-ver').addEventListener('click', () => {
  const aboutMePosition = document.querySelector('#about-me').offsetTop;
  window.scrollTo(0, aboutMePosition);
});
