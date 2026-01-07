const boutonRetour = document.querySelector('.btn-retour');

if(boutonRetour){
    boutonRetour.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// --- GESTION DE LA COULEUR ---
window.addEventListener('scroll', function() {
    
    const hauteurMax = document.documentElement.scrollHeight - window.innerHeight;
    const positionActuelle = window.scrollY;
    let pourcentage = positionActuelle / hauteurMax;
    if (pourcentage > 1) pourcentage = 1;
    if (pourcentage < 0) pourcentage = 0;
    const valeurBleu = Math.round(pourcentage * 180);
    document.body.style.backgroundColor = `rgb(0, 0, ${valeurBleu})`;
});