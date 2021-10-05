let checkbox=document.querySelector('input[name=theme]');
let formSubmit = document.querySelector('#form-submit');
let inputMail = document.querySelector('#input-email');
let inputMessage = document.querySelector('#input-message');

checkbox.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
    }
})

formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching us .");
    inputMail.value = "";
    inputMessage.value = "";
})
