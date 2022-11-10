function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const changeButton = document.querySelector('button.change-color')
const body = document.querySelector('body')
// const button = document.querySelector('button')
const colorValue = document.querySelector('span.color')


changeButton.addEventListener('click', e => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  // button.style.backgroundColor = color;
  colorValue.textContent = color;
})