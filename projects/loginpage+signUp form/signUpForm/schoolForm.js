showDetails();
//Grab all id's that we want dob/age
let submitBn = document.getElementById('btnSubmit')
submitBn.addEventListener('click', submitForm);
function submitForm(e) {
    let studentName = document.getElementById('studentName');
    let fatherName = document.getElementById('fatherName');
    let dob = document.getElementById('birthDate');
    let age = document.getElementById('age');
    let phoneNo = document.getElementById('phoneNumber');
    let stuClass = document.getElementById('stuClass');
    let cnicNumber = document.getElementById('cnicNumber');
    let adress = document.getElementById('adress');
    let gender;
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let custom = document.getElementById('custom');

    //Condiotions for gender
    if (male.checked) {
        gender = male.value;
    }
    else if (female.checked) {
        gender = female.value;
    }
    else if (custom.checked) {
        gender = custom.value;
    }
    //Validation
    if (studentName.value == '') {
        let validStuName = document.getElementById('stuValid');
        validStuName.setAttribute('style', 'display:block;color:red;font-size:13px;');
        studentName.setAttribute('style', 'border-color:red');

        //to show error or success message
        show('danger', 'Registration failed');
    }

    else if (fatherName.value == '') {
        let validFatherName = document.getElementById('fatherValid');
        validFatherName.setAttribute('style', 'display:block;color:red;font-size:13px;');
        fatherName.setAttribute('style', 'border-color:red');

        //to show error or success message
        show('danger', 'Registration failed');
    }
    else if (dob.value == 0) {
        let validDob = document.getElementById('validDob');
        validDob.setAttribute('style', 'display:block;color:red;font-size:13px;');
        dob.setAttribute('style', 'border-color:red');

        //to show error or success message
        show('danger', 'Registration failed');
    }

    else if (age.value == 0) {
        let validAge = document.getElementById('validAge');
        validAge.setAttribute('style', 'display:block;color:red;font-size:13px;');
        age.setAttribute('style', 'border-color:red');

        //to show error or success message
        show('danger', 'Registration failed');
    }
    else if (phoneNo.value == 0) {
        let validPhone = document.getElementById('validPhone');
        validPhone.setAttribute('style', 'display:block;color:red;font-size:13px;');
        phoneNo.setAttribute('style', 'border-color:red');

        //to show error or success message
        show('danger', 'Registration failed');
    }

    else if (stuClass.value == 0) {
        let validClass = document.getElementById('validClass');
        validClass.setAttribute('style', 'display:block;color:red;font-size:13px;');
        stuClass.setAttribute('style', 'border-color:red');

        //to show error or success message
        show('danger', 'Registration failed');
    }
    else if (cnicNumber.value == 0) {
        let validCNIC = document.getElementById('validCNIC');
        validCNIC.setAttribute('style', 'display:block;color:red;font-size:13px;');
        cnicNumber.setAttribute('style', 'border-color:red');

        //to show error or success message
        show('danger', 'Registration failed');
    }
    else if (adress.value == '') {
        let validAdress = document.getElementById('validAdress');
        validAdress.setAttribute('style', 'display:block;color:red;font-size:13px;');
        adress.setAttribute('style', 'border-color:red');

        //to show error or success message
        show('danger', 'Registration failed');
    }
    else if (gender == null) {
        let validGender = document.getElementById('validGender');
        validGender.setAttribute('style', 'display:block;color:red;font-size:13px;');
        let genderBox = document.getElementById('genderBox');
        genderBox.setAttribute('style', 'border-color:red; width:20%;');

        //to show error or success message
        show('danger', 'Registration failed');
    }

    else {

        //To get and save details in local storage

        let saveDetails;
        let details = localStorage.getItem('details');
        if (details == null) {
            saveDetails = [];
        }
        else {
            saveDetails = JSON.parse(details);
        }
        let detailsObj = {
            studentName: studentName.value,
            fatherName: fatherName.value,
            dob: dob.value,
            age: age.value,
            phoneNo: phoneNo.value,
            stuClass: stuClass.value,
            cnicNumber: cnicNumber.value,
            adress: adress.value,
            gender: gender,
        }
        saveDetails.push(detailsObj);
        localStorage.setItem('details', JSON.stringify(saveDetails));
        clear();
        let validStuName = document.getElementById('stuValid');
        validStuName.setAttribute('style', 'display:none;');
        studentName.setAttribute('style', 'border-color:none');

        show('success', 'Registration Complete');
    }
    showDetails();
    e.preventDefault();
}

//To show details from local storage

function showDetails() {
    let saveDetails;
    let details = localStorage.getItem('details');
    if (details == null) {
        saveDetails = [];
    }
    else {
        saveDetails = JSON.parse(details);
    }

    let innerString = '';
    saveDetails.forEach(function (element, index) {
        innerString += `<tr>
                            <td>${element.studentName}</td>
                            <td>${element.fatherName}</td>
                            <td>${element.dob}</td>
                            <td>${element.age}</td>
                            <td>${element.phoneNo}</td>
                            <td>${element.stuClass}</td>
                            <td>${element.cnicNumber}</td>
                            <td>${element.adress}</td>
                            <td>${element.gender}</td>
                            <td><button class="btn btn-primary" id="${index}" onclick="deleteInfo(this.id)">Delete Info</button></td>
                        </tr>`
    });
    if (saveDetails.length !== 0) {

        let displayDetails = document.getElementById('tableBody');
        displayDetails.innerHTML = innerString;
    }
    else {
        let nothingToShow = document.getElementById('tableBody');
        nothingToShow.innerHTML = `Nothing To show. Go to upper Section To add Some Info. Thanks`;
    }
}
function deleteInfo(index) {

    let details = localStorage.getItem('details');
    let saveDetails;
    if (details == null) {
        saveDetails = [];
    }
    else {
        saveDetails = JSON.parse(details);

    }
    saveDetails.splice(index, 1);
    localStorage.setItem('details', JSON.stringify(saveDetails));
    showDetails();

}
//Function to clear after submitting
function clear() {
    let schoolForm = document.getElementById('schoolForm');
    schoolForm.reset();
}
//Function to display error
function show(alert, showmessage) {
    let text;
    if (alert === 'success') {
        text = 'Success:'
    }
    else {
        text = 'Error:'
    }
    let message = document.getElementById('message');
    message.innerHTML =`<div class="alert alert-${alert} alert-dismissible fade show" role="alert">
                            <strong>${text}</strong> ${showmessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
    setTimeout(function() {
        message.innerHTML = '';
    }, 5000);

}
