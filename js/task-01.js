// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій 
// в ul#categories, тобто елементів li.item.

// 2. Для кожного элемента li.item у спику ul#categories, 
// знайде і виведе в консоль текст заголовку елемента 
//(тегу <h2>) і кількість елементів в категорії (усіх <li>, 
// вкладених в нього).


const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`)

categoriesList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});