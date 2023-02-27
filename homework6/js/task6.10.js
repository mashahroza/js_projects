const inputText = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxCollection = document.querySelector('#boxes');


createBtn.addEventListener('click', onCreateBtn);
function onCreateBtn() {
    createBoxes(onInputText());
}

destroyBtn.addEventListener('click', onDestroyBtn);
function onDestroyBtn () {
    boxCollection.innerHTML = '';
}


inputText.addEventListener('blur', onInputText);
function onInputText () {
    const number = Number(inputText.value);
    return number
}

function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        boxCollection.append(div);
        div.classList.add('.create-box');
        div.style.height = `${30 + 10 * i}px`;
        div.style.width = `${30 + 10 * i}px`;
        div.style.background = getRandomHexColor();
    }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}