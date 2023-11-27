let headerLogo = document.querySelector('.site-header__logo')
let navbarInner = document.querySelector('.navbar__inner')
let siteHeader = document.querySelector('.site-header')
let siteHeaderBg = document.querySelector('.site-header__img')
let siteHeaderNavbar = document.querySelector('.site-header__navbar')
let siteHeaderNavbarNav = document.querySelector('.site-header__navbar-nav')
let siteHeaderToggler = document.querySelector('.site-header__toggler')
let headerNavItems = document.querySelectorAll('.site-header__nav-item')
let siteHeaderHeadline = document.querySelector('.site-header__headline')
let siteHeaderForm = document.querySelector('.site-header__form')
let siteHeaderFormBtn = document.querySelector('.site-header__form-btn')

console.log(siteHeaderForm);


siteHeaderToggler.addEventListener('click', function () {
    if (siteHeaderToggler.classList.contains('collapsed')) {
        hideOpenedHeaderNav();
        hideHeaderNavItems();
        hideHeaderHeadline();
        if (document.body.clientWidth > 576) { 
            showHeaderForm();
        } else {
            hideHeaderFormBtn();
        }
    } else {
        showOpenedHeaderNav();
        showHeaderNavItems();
        showHeaderHeadline();
        hideHeaderForm() 
        if (document.body.clientWidth > 576) { 
            showHeaderFormBtn();
        } else {
            hideHeaderForm();
        }
    }
})

window.addEventListener('resize', () => {
    if (siteHeaderToggler.classList.contains('collapsed') && document.body.clientWidth < 992) {
        hideOpenedHeaderNav();
        hideHeaderNavItems();
        if (document.body.clientWidth < 576) {
            hideHeaderForm();
            showHeaderFormBtn();
        } else if (document.body.clientWidth > 576) {
            showHeaderForm();
            hideHeaderFormBtn();
        }
    } else if ((siteHeaderToggler.classList.contains('collapsed') != true) && document.body.clientWidth < 992) {
        showOpenedHeaderNav();
        showHeaderNavItems();
    } else if (document.body.clientWidth > 992) {
        hideOpenedHeaderNav();
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

function hideHeaderHeadline() {
    siteHeaderHeadline.classList.remove('d-none')
    siteHeaderHeadline.classList.add('d-block')
}

function showHeaderHeadline() {
    siteHeaderHeadline.classList.add('d-none')
    siteHeaderHeadline.classList.remove('d-block')
}

function hideHeaderFormBtn() {
    siteHeaderFormBtn.classList.remove('d-none')
    siteHeaderFormBtn.classList.add('d-block')
}

function showHeaderFormBtn() {
    siteHeaderFormBtn.classList.add('d-none')
    siteHeaderFormBtn.classList.remove('d-block')
}

function hideHeaderForm() {
    siteHeaderForm.classList.add('d-none')
    siteHeaderForm.classList.remove('d-grid')
}

function showHeaderForm() {
    siteHeaderForm.classList.remove('d-none')
    siteHeaderForm.classList.add('d-grid')
}