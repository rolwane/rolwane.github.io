window.addEventListener('scroll', () => {

    let scroll = document.documentElement.scrollTop;

    // Efeito parallax no background da home
    document.querySelector('#home').style.backgroundPositionY = `${scroll * 0.6}px`;


    let competencePosition = document.querySelector('.competence').offsetTop;

    if (scroll > (competencePosition / 3)) {
        document.querySelector('.competence:nth-child(1) .fill').style.width = '85%';
        document.querySelector('.competence:nth-child(2) .fill').style.width = '75%';
        document.querySelector('.competence:nth-child(3) .fill').style.width = '50%';
        document.querySelector('.competence:nth-child(4) .fill').style.width = '20%';
    }
});