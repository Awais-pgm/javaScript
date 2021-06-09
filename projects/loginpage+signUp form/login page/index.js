//First grab all of the elements
let submitBtn = document.getElementById('submit');
let submitForm = document.getElementById('submitForm');
let userName = document.getElementById('userName');
let password = document.getElementById('password');
let validEmail = document.getElementById('validEmail');
let validPassword = document.getElementById('validPassword');
let successMessage = document.getElementById('successMessage');
let dbUserNames = "awaistayyab27@gmail.com";
let dbPassword = 123456;

submitBtn.addEventListener('click', submitFormAction);
function submitFormAction(e) {
    //Conditions to make sure validity
    if (userName.value != dbUserNames) {
        validEmail.setAttribute('style', 'display;block;color:red');
      //  
       

       
        }
        else  if (password.value != dbPassword) {

            validEmail.setAttribute('style', 'display:none;');
            validPassword.setAttribute('style', 'display:block;color:red')
            successMessage.setAttribute('style', 'display: none');
        

    }
    else {
        successMessage.setAttribute('style', 'display: flex; justify-content:center;color:#0ac1ac');
       
        setTimeout(() => {
            successMessage.innerHTML = '';
            window.open('http://127.0.0.1:5500/signUpForm/schoolForm.html');
        }, 5000);
        validPassword.setAttribute('style', 'display:none;'); 
        validEmail.setAttribute('style', 'display:none;');
        
    }
    e.preventDefault();
    submitForm.reset();
}

