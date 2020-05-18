const body = document.querySelector('body')

for (let i = 0; i < 25; i++) {
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute('src', './addw.png')
    div.style.width = 'calc(100% / 7)'
    div.style.height = 'calc(100% / 7)'

    let div2 = document.createElement('div')
    let img2 = document.createElement('img')
    img2.setAttribute('src', './add.png')
    div2.style.width = 'calc(100% / 7)'
    div2.style.height = 'calc(100% / 7)'

    div.appendChild(img)
    div2.appendChild(img2)
    
    body.appendChild(div)
    body.appendChild(div2)
}
body.removeChild(body.lastChild)
console.log(divs);