function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const bodyColor = document.querySelector('body')
const text = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColorBtn);

function onChangeColorBtn() {
    text.textContent = getRandomHexColor();
    bodyColor.style.backgroundColor = getRandomHexColor();
}