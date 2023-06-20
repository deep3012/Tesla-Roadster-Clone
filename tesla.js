const menuBtn = document.querySelector('.menu-btn');
const menuBtnMobile = document.querySelector('.menu-btn-mobile');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const backDrop = document.querySelector('.sidebar-backdrop');
const navbarMenu = document.querySelector('.navbar-menu');

AOS.init();

menuBtn.addEventListener('click', sidebarOpen);
menuBtnMobile.addEventListener('click', sidebarOpen);

function sidebarOpen() {
    sidebar.style.right = "0";
    backDrop.style.display = "block";

    setTimeout(() => {
        backDrop.style.opacity = "1";
    }, 50);

    document.body.classList.add('sidebar-open-body');
}

closeBtn.addEventListener('click', () => {
    sidebar.style.right = "-20em";
    backDrop.style.display = "none";
}, 300);

const text = document.querySelector('.roof-text');
const roofImg = document.querySelector('.banner-img');

window.addEventListener('scroll', () => {
    if (text.classList.contains('aos-animate')) {
        roofImg.classList.add('roof-2');
    } else {
        roofImg.classList.remove('roof-2');
    }
});
