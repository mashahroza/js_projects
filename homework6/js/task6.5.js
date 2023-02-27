const inputName = document.querySelector('#name-input');
// console.log(value)
const userName = document.querySelector('#name-output')
// console.log(userName)


inputName.addEventListener('input', (event) => {
    userName.textContent = event.currentTarget.value;
    // console.log(userName.textContent);
    if (event.currentTarget.value == '') {
        userName.textContent = 'Anonymous';
    }
});

