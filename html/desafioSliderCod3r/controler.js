// Passo representa por cada pixel
function mover(element, start, end, step, callback) {
    const newStart = start - step
    if (newStart >= end) {
        element.style.left = newStart + 'px'
        setTimeout(() => mover(element, newStart, end, step, callback), 7)
    }else {
        callback()
    }
}

function slider() {
    const nodelins = document.querySelectorAll('[wm-slider] > p')
    const slides = Array.from(nodelins)
    console.log(slides.length);
    exibirSlide(slides, slides[0])
}

function getProximoSlide(lista, atual) {
    const i = lista.indexOf(atual) + 1
    return i < lista.length  ? lista[i] : lista[0] 
}

function exibirSlide(slides, slide) {
    slide.style.display = 'block'

    // A propriedade innerWidth refere-se a largura da minha página
    const inicio = innerWidth
    // A propriedade clientWidth refere-se a largura do meu elemento
    const fim = -slide.clientWidth

    slide.style.left = `${inicio}px`

    mover(slide, inicio, fim, 5, () => {
        slide.style.display = 'none'
        exibirSlide(slides, getProximoSlide(slides, slide))
    })
}
slider()