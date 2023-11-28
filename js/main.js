let headerLogo = document.querySelector('.site-header__logo')
let navbarInner = document.querySelector('.navbar__inner')
let siteHeader = document.querySelector('.site-header')
let siteHeaderBg = document.querySelector('.site-header__img')
let siteHeaderNavbar = document.querySelector('.site-header__navbar')
let siteHeaderNavbarNav = document.querySelector('.site-header__navbar-nav')
let siteHeaderToggler = document.querySelector('.site-header__toggler')
let headerNavItems = document.querySelectorAll('.site-header__nav-item')
let navbarNavWrap = document.querySelector('.navbar-nav-wrap')
let headerFormBtn = document.querySelector('.site-header__form-btn')
let headerForm = document.querySelector('.site-header__form')

siteHeaderToggler.addEventListener('click', function () {
    if (siteHeaderToggler.classList.contains('collapsed')) {
        hideOpenedHeaderNav();
        hideHeaderNavItems();
        navbarNavWrap.classList.remove('navbar-nav-open')
    } else {
        showOpenedHeaderNav();
        showHeaderNavItems();
        navbarNavWrap.classList.add('navbar-nav-open')
    }
})

headerFormBtn.addEventListener('click', function() {
    headerFormBtn.classList.add('d-none')
    headerForm.classList.remove('d-none')
    headerForm.classList.add('d-grid')
})


window.addEventListener('resize', () => {
    if (siteHeaderToggler.classList.contains('collapsed') && document.body.clientWidth < 992) {
        hideOpenedHeaderNav();
        hideHeaderNavItems();
    } else if ((siteHeaderToggler.classList.contains('collapsed') != true) 
    && document.body.clientWidth < 992) {
        showOpenedHeaderNav();
        showHeaderNavItems();
    } else if (document.body.clientWidth > 992) {
        hideOpenedHeaderNav();
        showHeaderNavItems();
        navbarNavWrap.classList.remove('navbar-nav-open')
        siteHeaderToggler.classList.add('collapsed')
    } 
})

function hideHeaderNavItems() {
    headerNavItems.forEach((item) => {
        item.style.opacity = '0'
        item.classList.remove('icon-right')
    })
}
function showHeaderNavItems() {
    headerNavItems.forEach((item) => {
        item.style.opacity = '1'
        if (document.body.clientWidth < 992) {
            item.classList.add('icon-right')
        }
    })
}
function hideOpenedHeaderNav() {
    siteHeaderNavbarNav.classList.add('align-items-center')
    headerLogo.classList.remove('d-none')
    headerLogo.classList.add('d-block')
    navbarInner.classList.remove('justify-content-end')
    siteHeaderBg.classList.remove('hidden');
    siteHeader.classList.remove('site-header--open-menu')
}

function showOpenedHeaderNav() {
    siteHeaderNavbarNav.classList.remove('align-items-center')
    headerLogo.classList.add('d-none')
    headerLogo.classList.remove('d-block')
    navbarInner.classList.add('justify-content-end')
    siteHeaderBg.classList.add('hidden');
    siteHeader.classList.add('site-header--open-menu')
}
