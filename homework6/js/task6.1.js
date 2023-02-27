// 1. Посчитает и выведет в консоль количество категорий 
// в ul#categories, то есть элементов li.item.

const ulCategories = document.querySelector('#categories');
const items = ulCategories.children;
console.log(`Number of categories: ${items.length}`);

// 2. Для каждого элемента li.item в списке ul#categories, 
//    найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
// 3. и количество элементов в категории (всех вложенных в него <li>).

const  elCategories = document.querySelectorAll('.item');

for (let category of elCategories) {
    const title = category.firstElementChild;
    console.log(`Category: ${title.textContent}`);

    const elements = category.lastElementChild;
    const element = elements.children
    console.log(`Elements: ${element.length}`) 
}