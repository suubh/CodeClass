let checkbox=document.querySelector('input[name=theme]');
checkbox.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
    }
})
function sendContact(){
    alert("Thanks for reaching us .");
}