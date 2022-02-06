const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
input.value = parseInt(window.getComputedStyle(text).fontSize)

 
input.addEventListener('input', onChangeText)

function onChangeText(event) {
let value = event.target.value
text.style.fontSize = `${value}px`
console.log(value) 
}
