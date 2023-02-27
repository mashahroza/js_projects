const sizeControl = document.querySelector('#font-size-control');
const fontSize = document.querySelector('#text');

sizeControl.addEventListener('input', onSizeControl)

function onSizeControl() {
    const value = Number(sizeControl.value);
    fontSize.style.fontSize = `${value}px`;
}