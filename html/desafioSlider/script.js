let time = 3000
let currentIndexImage = 0
let imagens = document.querySelectorAll("#slider img, source")
let qtdImages = imagens.length

function nextImage() {

    imagens[currentIndexImage].classList.remove('selected')

    currentIndexImage++
    if (currentIndexImage >= qtdImages) {
        currentIndexImage = 0
    }    
    imagens[currentIndexImage].classList.add("selected")
}

function start() {
    setInterval(nextImage, time)
}

window.addEventListener("load", start)