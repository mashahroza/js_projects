// Напиши функцию calculateTotalPrice(allProdcuts, productName), 
// которая получает массив объектов и имя продукта (значение свойства name). 
// Возвращает общую стоимость продукта (цена * количество).

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];
  
const calculateTotalPrice = function(allProdcuts, productName) {
    const products =  [...allProdcuts];
    for(product of products) {
        if (product.name == productName) {
            return product.price * product.quantity
        }
    }
};

console.log(calculateTotalPrice(products, 'Радар'));
  
console.log(calculateTotalPrice(products, 'Дроид'));