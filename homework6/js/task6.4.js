let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn)
const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn)
const number = document.querySelector('#value');
// console.log(number)

decrementBtn.addEventListener('click', handleDecrementBtnClick);
incrementBtn.addEventListener('click', handleIncrementBtnClick);

function handleDecrementBtnClick () {
    counterValue -= 1;
    number.textContent = counterValue;
    // console.log(number.textContent);
}

function handleIncrementBtnClick () {
    counterValue += 1;
    number.textContent = counterValue;
    // console.log(number.textContent);
}

