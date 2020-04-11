// MENU RESPONSIVO

let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    
    document.body.style.overflow = show ? "hidden" : "initial"
    // Só bloqueia a rolagem quando o menu hamburguer não estiver ativado
    
    menuSection.classList.toggle("on", show)
    show = !show
})