# goit-js-hw-06
 TASK-01
 Напиши скрипт, який:
 1. Порахує і виведе в консоль кількість категорій  в ul#categories, тобто елементів li.item.
 2. Для кожного элемента li.item у спику ul#categories,  знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
 і кількість елементів в категорії (усіх <li>,  вкладених в нього).


В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Productss
Elements: 3

Category: Technologies
Elements: 5



TASK-02
Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.





TASK-03
Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.


Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.




TASK-04
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.




TASK-05
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".




TASK-06
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// const textInput = document.querySelector('#validation-input')
// console.log(textInput.getAttribute('data-length'))
// textInput.addEventListener('blur', event => {
// 	if (event.target.value.length == textInput.getAttribute('data-length')) {
// 		textInput.classList.add('valid')
// 		if (textInput.classList.contains('invalid')) {
// 			textInput.classList.remove('invalid')
// 		}
// 	} else {
// 		if (textInput.classList.contains('valid')) {
// 			textInput.classList.remove('valid')
// 		}
// 		textInput.classList.add('invalid')
// 	}
// })


// const refs = {
// 	inputEl: document.querySelector('#validation-input'),
// };

// const symbals = Number(refs.inputEl.dataset.length);
// console.log(symbals);

// refs.inputEl.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
// 	console.log(event.currentTarget.value.length);
// 	event.currentTarget.value.length === symbals
// 	? refs.inputEl.classList.add('valid')
// 	: refs.inputEl.classList.add('invelid');
// }



// const validInput = document.querySelector("#validation-input");
// const dataValue = Number(validInput.dataset.length);

// validInput.addEventListener("blur", changeClass);

// function changeClass(event) {
// 	if (event.currentTarget.value.length === 0) {
// 		validInput.classList.remove("invalid");
// 		validInput.classList. remove("valid");
// 	} else if (event.currentTarget.value.length === dataValue) {
// 		validInput.classList.add("invalid");
// 		validInput.classList.remove("valid");
// 	} else if (event.currentTarget.value.length !== dataValue) {
// 		validInput.classList.add("invalid");
// 		validInput.classList.remove("valid");
// 	}
// }



// const input = document.querySelector("#validation-input");
// input.addEventListener("blur", onValidInput);

// function onValidInput() {
//     if (input.value.length === Number(input.dataset.length)) {
//         input.classList.add('valid');
//     } else {
//         input.classList.add('invalid');
//     }
//     // console.log(currentTarget.value.length);
//     console.log(input.dataset.length);
// }




const inputRef = document.querySelector('#validation-input');

const symbolLength = Number(inputRef.dataset.length);

const onInputBlurAdd = event => {
	if (event.currentTarget.value.length >= symbolLength) {
		inputRef.classList.add('valid');
		inputRef.classList.remove('invalid'); 
	} else {
		inputRef.classList.add('invalid');
		inputRef.classList.remove('valid');
	}
};

inputRef.addEventListener('blur', onInputBlurAdd);



TASK-07
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.




TASK-08
Напиши скрипт управління формою логіна.

Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.




TASK-09
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

Для генерування випадкового кольору використовуй функцію getRandomHexColor.