const boutonRetour = document.querySelector('.btn-retour');
boutonRetour.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});