/**Busca el icono y abre el menu movil */

const buttons = Array.from(document.querySelectorAll(".mobile-menu .mobile-menu__link[role='button'], .mobile-menu .mobile-menu__sub-menu-link[role='button']"))
buttons.forEach(button => {
    const icon = button.querySelector("[class*='fas']")

    button.addEventListener("click", () => {
        icon.classList.toggle('fa-caret-down')
        icon.classList.toggle('fa-caret-up')

        const mobileMenu = button.nextElementSibling
        mobileMenu.classList.toggle('mobile-menu__sub-menu_open')
    })
})