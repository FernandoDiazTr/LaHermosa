//cuando se carga la pagina en el navegador
const logoImgList = Array.from(document.querySelectorAll('.header .header__logo-image'))
logoImgList[1].style.display = 'none'

//funcionalidad para manipular el menu movil lateral
const barsButton = document.querySelector('.header .header__mobile-bars')
const mobileMenu = document.querySelector('.header .mobile-menu')
barsButton.addEventListener('click', e => {
    e.target.classList.toggle('fa-bars')
    e.target.classList.toggle('fa-times')
    mobileMenu.classList.toggle('mobile-menu_open')
})

//cuando el header se queda pegado
const observer = new IntersectionObserver(
    ([e]) => {
        e.target.toggleAttribute('stuck', e.intersectionRatio < 1)
        logoImgList[0].style.display = 'none'
        logoImgList[1].style.display = 'block'

        if (e.intersectionRatio === 1) {
            logoImgList[0].style.display = 'block'
            logoImgList[1].style.display = 'none'
        }
    },
    { threshold: 1.0 }
)
observer.observe(document.querySelector('header.header'))