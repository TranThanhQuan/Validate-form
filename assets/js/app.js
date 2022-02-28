var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var cornfirmpassword = document.querySelector('#cornfirmpassword')
var form = document.querySelector('form')


function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error')
    small.innerText = message;
}


function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error')
    small.innerText = ''
}


function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()
        
        if(!input.value) {
            isEmptyError = true;
            showError(input, "Khong duoc de trong")
        }
        else{
            showSuccess(input)
        }
    }); 
    
    return isEmptyError
}



function checkEmail(input){
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim()
    let isEmailError = regexEmail.test(input.value)

    if(regexEmail.test(input.value)){
        showSuccess(input);
    }
    else{
        showError(input,"Email invalid" );
    }
    return isEmailError;
}

function checkLengthError(input, min, max){
    input.value = input.value.trim()
    if(input.value.length < min){
        showError(input, `Phai co it nhat ${min} ki tu`)
        return true
    }

    if(input.value.length > max) {
        showError(input, `Khong duoc qua ${max} ki tu`)
        return true
    }

    showSuccess(input)
    return false

}



function checkMatchPassword(passwordInput, cfpasswordInput){
    if(passwordInput.value !== cfpasswordInput.value){
        showError(cfpasswordInput,`Mat khau khong trung khop`)
        return true
    }
    return false  
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    let isEmptyError = checkEmptyError([username, email, password, cornfirmpassword])
    let isEmailError = checkEmail(email)
    let isUsernameLengthError = checkLengthError(username, 3, 10)
    let isPasswordLegnthError = checkLengthError(password, 3, 10)
    let isMatchError = checkMatchPassword(password, cornfirmpassword)

    if(isEmptyError || isEmailError || isPasswordLegnthError || isUsernameLengthError || isMatchError){
        //do notthing
    }
    else{
        //do something
    }
})
