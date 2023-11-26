let headerLogo = document.querySelector('.site-header__logo')
let navbarInner = document.querySelector('.navbar__inner')
let siteHeaderBg = document.querySelector('.site-header__img')
let siteHeaderNavbar = document.querySelector('.site-header__navbar')
let siteHeaderNavbarNav = document.querySelector('.site-header__navbar-nav')
let siteHeaderToggler = document.querySelector('.site-header__toggler')
let headerNavItems = document.querySelectorAll('.site-header__nav-item')


siteHeaderToggler.addEventListener('click', function () {
    if (siteHeaderToggler.classList.contains('collapsed')) {
        hideHeaderNav();
        hideHeaderNavItems();
    } else {
        showHeaderNav();
        showHeaderNavItems();
    }
})

window.addEventListener('resize', () => {
    if (siteHeaderToggler.classList.contains('collapsed') && document.body.clientWidth < 992) {
        hideHeaderNav();
        hideHeaderNavItems();
    } else if ((siteHeaderToggler.classList.contains('collapsed') != true) && document.body.clientWidth < 992) {
        showHeaderNav();
        showHeaderNavItems();
    } else if (document.body.clientWidth > 992) {
        hideHeaderNav();
        showHeaderNavItems();
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
function hideHeaderNav() {
    siteHeaderNavbarNav.classList.add('align-items-center')
    headerLogo.classList.remove('d-none')
    headerLogo.classList.add('d-block')
    navbarInner.classList.remove('justify-content-end')
    siteHeaderBg.classList.remove('hidden');
}

function showHeaderNav() {
    siteHeaderNavbarNav.classList.remove('align-items-center')
    headerLogo.classList.add('d-none')
    headerLogo.classList.remove('d-block')
    navbarInner.classList.add('justify-content-end')
    siteHeaderBg.classList.add('hidden');
}