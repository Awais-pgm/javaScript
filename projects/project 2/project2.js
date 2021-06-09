showbooks();

//Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Constructor

function Display() {

}

// Add methods to display prototype
// Display.prototype.add = function (book) {

//     // tableBody = document.getElementById('tableBody');
//     // let uiString = `<tr>
//     //                     <td>${book.name}</td>
//     //                     <td>${book.author}</td>
//     //                     <td>${book.type}</td>
//     //                 </tr>`;
//     // tableBody.innerHTML += uiString;
// }
//To clear inputs after adding a book
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
//Implementition the validate function
Display.prototype.validate = function (book) {
    if (book.name.length <= 0 || book.author.length <= 0) {
        return false;
    }
    else {
        return true;
    }
}

//To show error or succes messages
Display.prototype.show = function (type, displayMessage) {
    let boldText;
    if(type==='success'){
        boldText = 'success';
    }
    else{
        boldText = 'Error!';
    }
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${boldText}</strong> ${displayMessage}.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`
    setTimeout(function () {
        message.innerHTML = '';
    }, 5000);
}

//Add submit event listener to form|| Library Form

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById('nameBook').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    // console.log(book);
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);

        display.clear();
        display.show('success', 'Your book is added');
        showbooks();
    }
    else {
        //Show Error to the user
        display.show('danger', `Your book can't be added`);
    }

    e.preventDefault();
}
//Store in local storage and get it from local storage

let btnsubmit = document.getElementById('btnsubmit');


btnsubmit.addEventListener('click', function (e) {




    let nameBook = document.getElementById('nameBook');
    let author = document.getElementById('author');
    let books = localStorage.getItem('book');
    let notesObj;

    if(books == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(books);
    }
    let myObj = {
        Booktitle: nameBook.value,
        BookAuthor: author.value,
    }
    notesObj.push(myObj);
    localStorage.setItem('book', JSON.stringify(notesObj));

});

function showbooks(){

    let books = localStorage.getItem('book');

    if(books == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(books);
    }
   let tableBody = document.getElementById('tableBody');
   let uiString = '';
    notesObj.forEach(function(element , index) {
         uiString += `<tr>
                        <td>${element.Booktitle}</td>
                        <td>${element.BookAuthor}</td>
                    </tr>`;
    });
    
   
    tableBody.innerHTML = uiString;



}



    

