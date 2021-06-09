showallbooks();

let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', toSaveBooks);
function toSaveBooks(e) {
    let nameBook = document.getElementById('nameBook').value;
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
    //To get books from storage
    let saveBooks = [];
    let books = localStorage.getItem('book');
    if (books == null) {
        saveBooks = [];
    }
    else {
        saveBooks = JSON.parse(books);
    }

    let myBooks = {
        title: nameBook,
        author: author,
        typeOfBook: type,
    }
    saveBooks.push(myBooks);
    localStorage.setItem('book', JSON.stringify(saveBooks));
    // console.log(saveBooks);
    showallbooks();
    //To prevent from default behaviour
    e.preventDefault();
}



function showallbooks() {
    let books = localStorage.getItem('book');
    let bookArray;
    if (books == null) {
        bookArray = [];
    } else {
        bookArray = JSON.parse(books);
    }
    let html = '';
    bookArray.forEach(function (element, index) {
        html += `<tr>
                               <td>${element.title}</td>
                               <td>${element.author}</td>
                               <td>${element.typeOfBook}</td>
                               <td><button 
                               id="${index}" onclick="bookDelete(this.id)" class="btn btn-primary">Delete</button></td>

                           </tr>`;
    });
    let tbody = document.getElementById('tableBody');
    tbody.innerHTML = html;
}

function bookDelete(index) {
    let books = localStorage.getItem('book');
    let bookArray;
    if (books == null) {
        bookArray = [];
    } else {
        bookArray = JSON.parse(books);
    }
    bookArray.splice(index, 1);
    localStorage.setItem("book", JSON.stringify(bookArray));
    showallbooks();

}