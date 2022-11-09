const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// document.createElement()
// const list = document.querySelector('#ingredients')

// const heading = document.createElement("li");
// console.log(heading); 

// heading.textContent = "Potatoes";
// console.log(heading); 

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1. Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const listEl = document.querySelector('#ingredients')
const liArray = []

ingredients.forEach(ingredient => {
	const itemLi = document.createElement('li')
	itemLi.className = 'item'
	itemLi.textContent = ingredient
	liArray.push(itemLi)
})

listEl.append(...liArray)
console.log(liArray);