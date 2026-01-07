window.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner");
    const btn = document.querySelector(".banner-cta");
    const flash = document.getElementById("flash");

    // 1. DÉCLENCHEMENT DES ANIMATIONS D'ENTRÉE
    setTimeout(() => {
        banner.classList.add("is-visible");
    }, 300);

    // 2. EFFET DE BRILLANCE DORÉE (SHINE)
    setTimeout(() => {
        banner.classList.add("shine-effect");
    }, 1800);

    // 3. INTERACTION AU CLIC (EFFET FLASH)
    if (btn && flash) {
        btn.addEventListener("click", () => {
            flash.classList.remove("flash-active");
            void flash.offsetWidth; // Force le redémarrage
            flash.classList.add("flash-active");
        });
    }
});