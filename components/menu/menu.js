var menuItems = document.querySelectorAll(".item-menu");

function selecionaLink() {
    menuItems.forEach((item) => 
        item.classList.remove("active"))
    this.classList.add("active");
}

menuItems.forEach((item) => 
    item.addEventListener("click", selecionaLink))

var botaoMenu = document.querySelector("#botaoMenu");
var menuLateral = document.querySelector(".menu-lateral");

function alteraIcone() {
    if (menuLateral.classList.contains("expandir")) {
        botaoMenu.classList.remove("bi-list");
        botaoMenu.classList.add("bi-x");
    } else {
        botaoMenu.classList.remove("bi-x");
        botaoMenu.classList.add("bi-list");
    }
}

botaoMenu.addEventListener("click", () => {
    menuLateral.classList.toggle("expandir");
    alteraIcone();
})

var botaoMenuMobile = document.querySelector("#botaoMenuMobile");

botaoMenuMobile.addEventListener("click", () => {
    menuLateral.classList.remove("expandir");
    menuLateral.classList.add("expandir");
    alteraIcone();
})

