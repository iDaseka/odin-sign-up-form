const pw1 = document.querySelector('#password');
const pw2 = document.querySelector('#password2');
const inputs = document.querySelectorAll('input');

inputs.forEach(input =>{
    input.addEventListener('input', function() {
        if ((input.validity.valid) ) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        }
        else{
            input.classList.remove('valid');
            input.classList.add('invalid');
        }

        if (input === pw1 || input === pw2) {
            passwords();
        }
    });

    input.addEventListener('blur', function() {
        if (!input.value.trim()) {
            input.classList.remove('valid', 'invalid')
        }
    });
});

function passwords(){
    if (pw1.value === pw2.value){
        pw1.classList.remove('invalid')
        pw1.classList.add('valid')
        pw2.classList.remove('invalid')
        pw2.classList.add('valid')
    }
    else{
        pw1.classList.remove('valid')
        pw1.classList.add('invalid')
        pw2.classList.remove('valid')
        pw2.classList.add('invalid')
    }
}