// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое. (elem.textContent = ...)
// Добавит элементу класс item.(elem.classList.add(cls))
// После чего вставит все <li> за одну операцию в список ul.ingredients. (element.append(el1, el2, ...))

const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const products = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
    const item = document.createElement("li");
    item.textContent = ingredient;

    products.append(item);

    item.classList.add("item");
}