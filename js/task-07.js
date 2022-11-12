const inputEl = document.querySelector('input#font-size-control')
const abracadabra = document.querySelector('span#text')

inputEl.addEventListener('input', e => {
    abracadabra.style.fontSize = `${e.target.value }px`
})
console.log(inputEl)

