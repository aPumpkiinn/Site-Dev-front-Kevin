const helice = document.querySelector(".helice");

let lastScroll = 0;
let ticking = false;

function rotateHelice(scrollPos) {
    // La rotation est proportionnelle au scroll
    const angle = scrollPos * 0.5;  // ajuste la vitesse ici
    helice.style.transform = `rotate(${angle}deg)`;
}

window.addEventListener("scroll", () => {
    lastScroll = window.scrollY;

    if (!ticking) {
        requestAnimationFrame(() => {
            rotateHelice(lastScroll);
            ticking = false;
        });

        ticking = true;
    }
});