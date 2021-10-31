function parallax() {
    let scroll = document.documentElement.scrollTop;
    document.querySelector('#bg-home').style.top = `${scroll * 0.5}px`;
}

function competenceAnimation() {
    let scroll = document.documentElement.scrollTop;
    let competence = document.querySelectorAll('.competence .fill');
    if (scroll > (competence[0].offsetTop / 2)) {
        competence[0].style.width = '90%';
        competence[1].style.width = '75%';
        competence[2].style.width = '50%';
        competence[3].style.width = '20%';
    }
}

window.addEventListener('scroll', () => {
    parallax();
    competenceAnimation();
});