let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

function sendContact() {
    let formEmail = document.getElementById('formEmail');
    let formBody = document.getElementById('formBody');

    // Check if the E-Mail is valid
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formEmail.value)) {
        if (formEmail.value && formBody.value) {
            // Sending the E-Mail
            document.getElementById('formInformation').innerText = 'Thanks for reaching us.';
        } else {
            document.getElementById('formInformation').innerText = 'Please fill out all the information.';
        }
    } else {
        document.getElementById('formInformation').innerText = 'Please enter a valid E-Mail.';
    }
}
