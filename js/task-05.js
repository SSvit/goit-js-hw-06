// Напиши скрипт, який під час набору тексту в інпуті input#name-input 
// (подія input), підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


// 1.
const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

textInput.addEventListener('input', event => {
	output.textContent = event.target.value

	if (event.target.value === '') {
		output.textContent = 'Anonymous'
	}
})


// 1.

// const refsAn = {
//      inputText: document.querySelector("#name-input"),
//      outputText: document.querySelector("#name-output"),
// };

// console.log(textInput);
// console.log(output);

// refsAn.inputText.addEventListener("input", (event) => {
// refsAn.inputText.value === ""
// 	? (refsAn.outputText.textContent = "Anonymous")
// 	: (refsAn.outputText.textContent = event.currentTarget.value);
// });

