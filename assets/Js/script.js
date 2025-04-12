
/* Lightbox script - zoom na imagem*/ 
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const imagensProdutos = document.querySelectorAll(".produto-img");

imagensProdutos.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove("active");
    }
});

/* Fim do Lightbox*/

/* Menu mobile script */

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/Images/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/Images/close_white_36dp.svg";
    }
}

/* Exibir o botão apenas quando o usuário rolar a página */
window.onscroll = function () {
    var btn = document.getElementById("btnTopo");
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};