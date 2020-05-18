const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#000000',
    ol: '#fbc02d',
    header:'#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padra: '#616161',

    get(tag){
        return this[tag] ? this[tag] : this.padra
    }
}

const nodelist = document.querySelectorAll(".tag").forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()
    elemento.style.borderColor = colors.get(tagName)

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        // A função insertBefore recebe dois parâmetros, o que vai ser inserido, e antes do primeiro elemento filho que haja dentro da minha variável elemento que é uma tag html, por assim dizer 
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})
