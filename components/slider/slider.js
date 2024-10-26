let cont = 1;
document.getElementById("radio1").checked = true;

setInterval(() => {
    nextSlide();
}, 3000);

function nextSlide() {
    cont++;
    if (cont > 4) {
        cont = 1;
    }
    document.getElementById("radio" + cont).checked = true;
}

