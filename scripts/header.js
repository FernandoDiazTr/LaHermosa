//cuando se carga la pagina en el navegador
const logoImgList = Array.from(document.querySelectorAll('.header .header__logo-image'))
logoImgList[1].style.display = 'none'

//funcionalidad para manipular el menu movil lateral
let isMobileMenuOpen = false
const barsButton = document.querySelector('.header .header__mobile-bars')
barsButton.addEventListener('click', e => {
    const mobileMenu = document.querySelector('.header .mobile-menu')
    
    if (!isMobileMenuOpen) {
        e.target.classList.remove('fa-bars')
        e.target.classList.add('fa-times')
        mobileMenu.classList.add('mobile-menu_open')
        isMobileMenuOpen = true
    } else {
        e.target.classList.remove('fa-times')
        e.target.classList.add('fa-bars')
        mobileMenu.classList.remove('mobile-menu_open')
        isMobileMenuOpen = false
    }
})