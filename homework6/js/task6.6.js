const inputText = document.querySelector('#validation-input');

let nameLength = inputText.getAttribute('data-length');
nameLength = Number(nameLength);

inputText.addEventListener('blur', onInputText)

function onInputText () {
    // console.log(inputText.value);
    if (inputText.value.length <= nameLength) {
        inputText.classList.add('valid')
    } else (
        // console.log(inputText)
        inputText.classList.add('invalid')
    )
}