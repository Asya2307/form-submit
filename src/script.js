document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.querySelector('.email');
    const password = form.querySelector('.password');
    const confirmPassword = form.querySelector('.confirm-password');

    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    const fields = [
        {
            element: email,
            value: emailValue,
        },
        {
            element: password,
            value: passwordValue,
        },
        {
            element: confirmPassword,
            value: confirmPasswordValue,
        },
    ];

    fields.forEach((field) => {
        if (field.value.length > 0) {
            field.element.classList.add('is-valid');

            if (field.element.classList.contains('is-invalid')) {
                field.element.classList.remove('is-invalid');
            } 
        } else {
            field.element.classList.add('is-invalid');

            if (field.element.classList.contains('is-valid')) {
                field.element.classList.remove('is-valid');
            } 
        }
    });

    const invaslidFields = [ ...form.querySelectorAll('.is-invalid') ];

     if (invaslidFields.length === 0) {
        document.querySelector('.email-output').textContent = emailValue;
        document.querySelector('.password-output').textContent = passwordValue;
        document.querySelector('.confirm-password-output').textContent = confirmPasswordValue;
     }
});
