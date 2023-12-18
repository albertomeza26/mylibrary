const cancel = document.querySelector('.cancel');
const bookList = document.querySelector('.book-first');
const summary = document.querySelector('.summary');
const addBook = document.querySelector('.add-book');
const list = document.querySelector('.list');
const modalForm = document.querySelector('.form-modal');
const titulo = document.querySelector('.titulo');
const autor = document.querySelector('.autor');
const paginas = document.querySelector('.paginas');
const leer = document.querySelector('.leer');
const listaDos = document.querySelector('.list-dos');
const readStato = document.getElementById('leido');
/*const readStato = document.querySelector('.read-stato');*/
const read = document.querySelector('.read');
const readStatus = document.querySelectorAll('.read-status');


let myLibrary = [];

function loadPg() {
    bookList.classList.add('book-intro');
    bookList.classList.remove('book-list');
    summary.style.visibility = 'visible';
}

function bringForm() {
    const lista = document.querySelectorAll('.list');
    bookList.classList.remove('book-intro');
    bookList.classList.add('book-list');
    summary.style.visibility = 'hidden';
    lista.forEach((lista) => {
        lista.style.visibility = 'visible';
        lista.classList.add('blurred');})
    modalForm.style.visibility = 'visible';
}

/*function changeRead() {
    readStatus.forEach((readStatus) => {
    readStatus.addEventListener('click', () => {
  if (readStatus.innerHTML === 'Not Read') {
        readStatus.style.backgroundColor = 'rgb(0, 255, 0, .5)';
        readStatus.innerHTML = 'Read';}
    else if (readStatus.innerHTML === 'Read') {
        readStatus.style.backgroundColor = 'rgb(255, 0, 0, .5)'
        readStatus.innerHTML = 'Not Read';
    }})});

}*/

function changeRead() {
    readStatus.forEach((readStatus) => {
  if (readStatus.innerHTML === 'Not Read') {
        readStatus.style.backgroundColor = 'rgb(0, 255, 0, .5)';
        readStatus.innerHTML = 'Read';}
    else if (readStatus.innerHTML === 'Read') {
        readStatus.style.backgroundColor = 'rgb(255, 0, 0, .5)'
        readStatus.innerHTML = 'Not Read';
    }});

}

function removeForm() {
    const lista = document.querySelectorAll('.list');
    modalForm.style.visibility = 'hidden';
    lista.forEach((lista) => {
        lista.classList.remove('blurred');})
}

function Book(title, author, pages, read) {
this.title = title;
this.author = author;
this.pages = pages;
    this.read = read;
this.newInfo = function() {
myLibrary.push({title, author, pages, read});
};
}
   
/*function renderBook () {
        let bookUno = myLibrary.find(item => item.title == 'The Hobbit');
        {let nList = document.createElement('div');
        nList.classList.add('list');
        nList.style.visibility = 'visible';
        nList.innerHTML = `<div class="title">Title</div>
        <div class="author">Author</div>
        <div class="pages">Pages</div>
        <div class="read"><button type="submit" class="read-status">Not Read</button></div>
        <div class="icons">
                <a><img class="edit" alt="edit" src="images/pencil.svg"></a>
                <a><img class="erase" alt="delete" src="images/trash-can-outline.svg"></a>
            </div>
        <div class="titulo">${bookUno.title}</div>
        <div class="autor">${bookUno.author}</div>
        <div class="paginas">${bookUno.pages}</div>`;
        bookList.insertBefore(nList, modalForm);}
    }*/
    function renderBook () {
        let bookUno = myLibrary.find(item => item.title == 'The Hobbit');
        {let nList = document.createElement('div');
        nList.classList.add('list');
        nList.style.visibility = 'visible';
            {let oList = document.createElement('div');
            oList.classList.add('read');
                {let boton = document.createElement('button');
                boton.classList.add('read-status');
                boton.setAttribute('id', 'leido');
                boton.innerHTML = 'Not Read';
                oList.appendChild(boton);}
            nList.appendChild(oList);}
        bookList.insertBefore(nList, modalForm);}
    }
   

function renderDetail () {
        let detail = document.createElement('div');
        detail.classList.add('title');
        detail.innerHTML = 'Title';
        listaDos.appendChild(detail);
}

Object.setPrototypeOf(renderBook.prototype, Book.prototype);

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read');    
theHobbit.newInfo();
const scarface = new Book('Scarface', 'Brian de Palma', '300 pages', 'not read')
scarface.newInfo();
loadPg();

function alerta()
{for (let prop in myLibrary) {
   alert (prop);
}}

/*function cadaUno() {
    myLibrary.forEach((item) => {
        titulo.innerHTML = `${item}`;
    })
}*/

function bookDivs() {
    for (let i = 1; i <= myLibrary.length; i++) {
        renderBook();
    }
}

function cadaUno() {
    let bookUno = myLibrary.find(item => item.title == 'The Hobbit');
    alert(bookUno.title);
}


addBook.addEventListener('click', () => {bringForm()});

cancel.addEventListener('click', () => {removeForm()});

readStato.addEventListener('click', () => changeRead());
