
let myLibrary = [];
initializeFunctions();

//Making new variable for div that I want to insert into


//Adding a div with HTML based off of what the Array contains. 
function addBookDiv() {
    let bookContainer = document.getElementById('flex-container');
    bookContainer.innerHTML = '';
    for (i = 0; i < myLibrary.length; i++) {
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `<div class = ${(myLibrary[i].haveRead == true) ? 'read' : 'book'} id = "book${i}"> 
        <div class = "removebuttonholder"><button class = "deletex" id = "deletex" data-buttonnumber = "${i}">x</button></div>   
        <div class = "bookname"> ${myLibrary[i].title}</div>
        <div class = "bookinfo">
        Author: ${myLibrary[i].author}
        <br>
        Page Count: ${myLibrary[i].pageCount}
        </div>
        <button class = ${(myLibrary[i].haveRead) ? "unread" : "read"} data-buttonnumber = "${i}">${(myLibrary[i].haveRead) ? "Unread?" : "Read?"}</button>
        </div>`
  bookContainer.appendChild(bookDiv);
  
}

}
//Book Constructor
function Book(title, author, pageCount, haveRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.haveRead = haveRead;
    this.info = function() {
     return `${title}, by ${author}, ${pageCount} pages, ${(haveRead) ? "have read" : "not read yet"}`;
   
    };
}



//Create book and add it to library Array
function addBookToLibrary(title, author, pageCount, haveRead) {
    let bookName = new Book(title, author, pageCount, haveRead);
    myLibrary.push(bookName);
}
//Buttons for adding and removing Book Add Area
let topAddButton = document.getElementById('addbutton');
let addBookArea = document.querySelector('.addbookarea');

topAddButton.addEventListener('click', () => {
    addBookArea.setAttribute('style', 'display: block');
})

let bookAreaX = document.getElementById('bookareax');
bookAreaX.addEventListener('click', () => {
    removeBookArea();
    clearInputAreas(titleInput, authorInput, pageCountInput, readInput);
})
function removeBookArea() {
    addBookArea.setAttribute('style', 'display: none');
}
//Adding a book from the add book area
let submitButton = document.getElementById('submit');
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pageCountInput = document.getElementById('pagecount');
let readInput = document.getElementById('read');

submitButton.addEventListener('click', () => {
    if (titleInput.value != '' && authorInput.value != '' && pageCountInput.value != '') {
        addBookToLibrary(titleInput.value, authorInput.value, pageCountInput.value, readInput.checked);
        removeBookArea();
        initializeFunctions();
        clearInputAreas(titleInput, authorInput, pageCountInput, readInput);
    }
    else {
        alert('Please fill out all form fields.');
    }
})
function clearInputAreas(titleInput, authorInput, pageCountInput, readInput) {
    titleInput.value = '';
    authorInput.value = '';
    pageCountInput.value = '';
    readInput.checked = false;

}


//let titleInput = document.getElementById('title');
//addThisBook();

function readOrUnread() {
//Buttons to mark as READ or UNREAD - need to CHECK if this works for multiple
let readButton = document.querySelectorAll('button.read');
readButton.forEach(btn => {
    btn.addEventListener('click', () => {
        let buttonNumber = btn.getAttribute('data-buttonnumber');
        myLibrary[buttonNumber].haveRead = true;
        initializeFunctions();

})
    })

let unreadButton = document.querySelectorAll('button.unread');
unreadButton.forEach(btn => {
    btn.addEventListener('click', () => {
        let buttonNumber = btn.getAttribute('data-buttonnumber');
        myLibrary[buttonNumber].haveRead = false;
        initializeFunctions();

})
    })
}

//Top area remove button and its ability to add red x div to all books.
function turnOnRemoveButton() {
    let bookXButtonHolder = document.querySelectorAll('.removebuttonholder');
let removeButton = document.getElementById('removebutton');
removeButton.addEventListener('click', () => {
    bookXButtonHolder.forEach(div => {
        let isDivOn = (div.getAttribute('class') !== 'removebuttonholder');
        (isDivOn) ? div.setAttribute('class', 'removebuttonholder') : div.setAttribute('class', 'removebuttonholderON');
    })
})
}
//Individual book remove buttons
function turnOnBookXButtons() {
let bookRemoveButtons = document.querySelectorAll('.deletex');
bookRemoveButtons.forEach(removeButton => {
    removeButton.addEventListener('click', () => {
        let xButtonId = removeButton.getAttribute('data-buttonnumber');
        myLibrary.splice(xButtonId, 1);
        initializeFunctions();

    })

})
}

function initializeFunctions() {
    addBookDiv();
    turnOnRemoveButton();
    turnOnBookXButtons();
    readOrUnread();
}