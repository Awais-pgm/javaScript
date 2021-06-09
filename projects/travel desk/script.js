const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;

// console.log(name,email,phone);
username.addEventListener('blur',()=>{
    
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z\s]){2,20}$/;
    let str = username.value;
   
    if(regex.test(str)){   
        username.classList.remove('is-invalid')
         validName = true;
    }
    else{
        username.classList.add('is-invalid')
         validName = false;
    }
})
email.addEventListener('blur',()=>{
    console.log('email is blured')
    //validate email here

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]{2,7})/;
    let str = email.value;
    if(regex.test(str)){
        console.log('Email is valid');
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
        validEmail = true;
    }
    else{
        console.log('Email is not valid');
        email.classList.add('is-invalid')
        validEmail = false;
    }

})
phone.addEventListener('blur',()=>{
    //validate phone here

    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    if(regex.test(str)){
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        validPhone = true;
        
    }
    else{
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
    
})
let submit =  document.getElementById('submit');
submit.addEventListener('click',submitFunction);

function submitFunction(e){

    if(validEmail && validName && validPhone){
        show('success','Your Form has been submitted successfully');
        storeValues();

    }
    else{
        show('danger','Your form cannot be submitted due to some error');
    }
    e.preventDefault();
    
    
}
function show(alert,showMessage){
    let text = '';
    if(alert === 'success'){
        text = "Success";
    }
    else{
        text = 'Error';
    }
    let alertDiv = document.getElementById('alert');
        alertDiv.innerHTML = `<div class="alert alert-${alert} alert-dismissible fade show"       role="alert" id="sucess">
                    <strong>${text}:</strong> ${showMessage}.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
        setTimeout(() => {
            alertDiv.innerHTML = '';
        }, 3000);

}
function storeValues(){
  let  storeUsername = username.value;
  let  storeEmail = email.value;
  let  storePhone = phone.value;
  
  let myobj = {
      dbUsername:storeUsername,
      dbEmail:storeEmail,
      dbPhone:storePhone,
  }
  let myarr = [];
  myarr.push(myobj);
  console.log(myarr);
}
