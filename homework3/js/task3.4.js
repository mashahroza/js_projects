// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее. 
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

const countTotalSalary = function(employees) {
    let total = 0;
    const values = Object.values(employees);
    for (value of values) {
        total += value
    }

    return total
};

console.log(countTotalSalary({})); 
  
console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
);
  
console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
);