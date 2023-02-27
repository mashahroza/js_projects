const form = document.querySelector('.login-form');
const submitBtn = document.querySelector('button');

form.addEventListener('submit', onSubmitBtn);

function onSubmitBtn (event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
       alert("Please fill in all the fields!");
    }
                    // Elements
    else {
        const formEl = event.currentTarget.elements;

        const email = formEl.email.value;
        const password = formEl.password.value;

        const values = {
            email,
            password,
        };

        console.log(values);
        event.currentTarget.reset();
    }

                    // FormData
    // else {
    //     const formData = new FormData(event.currentTarget);
    //     console.log(formData);

    //     formData.forEach((value, name) => {
    //         // console.log('name', name);
    //         // console.log('value', value);
    //         console.log(`${name}: ${value}`)
    //     });

    //     event.currentTarget.reset();
    //  };

}