const cancel = document.querySelector('.cancel');
const bookList = document.querySelector('.book-first');
const summary = document.querySelector('.summary');
const addBook = document.querySelector('.add-book');
const modalForm = document.querySelector('.form-modal');
const titulo = document.querySelector('.titulo');
const autor = document.querySelector('.autor');
const paginas = document.querySelector('.paginas');
const leer = document.querySelector('.leer');
const listaDos = document.querySelector('.list-dos');
let readStato = document.getElementById('leido');
const read = document.querySelector('.read');
const TOGGLE_CLASS_NAME = 'read-stato';
const readStatus = document.querySelector('.read-status');
const submitted = document.querySelector('.update');
let bTitle = document.getElementById('book_title');
let bAuthor = document.getElementById('book_author');
let numberP = document.getElementById('pages');
let readYN = document.getElementById('readYN');
const emptyL = document.querySelector('.emptiness');

let myLibrary = [];

function loadPg() {
    bookList.classList.add('book-intro');
    bookList.classList.remove('book-list');
    summary.style.visibility = 'visible';
}


function emptyLibrary() {
    if (summary.style.visibility === 'hidden') {
        if (bookList.classList.contains('active') === true) {
            emptyL.style.visibility = 'hidden'
        }
        else if (bookList.classList.contains('active') === false) {
            emptyL.style.visibility = 'visible'
        };
    }
    else {
        emptyL.style.visibility = 'hidden';
    }
}

function checkActive() {
    let activo = document.querySelectorAll('.list'); {
        if (activo.length === 0) {
            bookList.classList.remove('active');
            emptyL.style.visibility = 'visible';
        }
        else if(activo.length > 0) {
            emptyL.style.visibility = 'hidden';
        }
    }
}

function bringForm() {
    const lista = document.querySelectorAll('.list');
    bookList.classList.remove('book-intro');
    bookList.classList.add('book-list');
    summary.style.visibility = 'hidden';
    lista.forEach((lista) => {
        lista.style.visibility = 'visible';
        lista.classList.add('blurred');
    })
    modalForm.style.visibility = 'visible';
}


function changeRead(event) {
    event.target.classList.toggle(TOGGLE_CLASS_NAME)
    if (event.target.classList.contains(TOGGLE_CLASS_NAME)) {
        event.target.innerHTML = 'Read'
    }
    else {
        event.target.innerHTML = 'Not Read'
    }
}

function deleteBook(event) {
    event.target.parentNode.parentNode.parentNode.remove();
    {
        checkActive();
    }
    emptyLibrary();
}

function removeForm() {
    const lista = document.querySelectorAll('.list');
    let inputF = document.querySelectorAll('input');
    modalForm.style.visibility = 'hidden';
    inputF.forEach((inputF) => {
        inputF.value = null;
    })
    lista.forEach((lista) => {
        lista.classList.remove('blurred');
    })
    {
    checkActive();}
    emptyLibrary();
}


/*Render Book*/

function showme(event) {
    let esteLibro = bTitle.value;
    let esteAutor = bAuthor.value;
    let paginasLibro = numberP.value;
    let leerSN = readYN.value; {
        if (esteLibro === '' || esteAutor === '' || paginasLibro === '') {
            alert("Please Complete Form");
            bringForm();
        }
        else if (bookList.classList.contains('active')) {
            if (leerSN === "No") {
                let nList = document.createElement('div');
                nList.classList.add('list');
                nList.style.visibility = 'visible';
                nList.innerHTML = `<div class="title">Title</div>
        <div class="author">Author</div>
        <div class="pages">Pages</div>
        <div class="read" id="reado"><button onclick="changeRead(event)" type="submit" class="read-status" id="leido">Not Read</button></div>
        <div class="icons">
                <a><img class="erase" onclick="deleteBook(event);emptyLibrary()" alt="delete" src="images/trash-can-outline.svg"></a>
            </div>
        <div class="titulo">${esteLibro}</div>
        <div class="autor">${esteAutor}</div>
        <div class="paginas">${paginasLibro}</div>`;
                bookList.insertBefore(nList, modalForm);
            }
            else if (leerSN === "Yes") {
                let nList = document.createElement('div');
                nList.classList.add('list');
                nList.style.visibility = 'visible';
                nList.innerHTML = `<div class="title">Title</div>
        <div class="author">Author</div>
        <div class="pages">Pages</div>
        <div class="read" id="reado"><button onclick="changeRead(event)" type="submit" class="read-status read-stato" id="leido">Read</button></div>
        <div class="icons">
                <a><img class="erase" onclick="deleteBook(event);emptyLibrary()" alt="delete" src="images/trash-can-outline.svg"></a>
            </div>
        <div class="titulo">${esteLibro}</div>
        <div class="autor">${esteAutor}</div>
        <div class="paginas">${paginasLibro}</div>`;
                bookList.insertBefore(nList, modalForm);
            }
            removeForm();
        }
        else {
            if (leerSN === "No") {
                let nList = document.createElement('div');
                nList.classList.add('list');
                bookList.classList.add('active');
                nList.style.visibility = 'visible';
                nList.innerHTML = `<div class="title">Title</div>
        <div class="author">Author</div>
        <div class="pages">Pages</div>
        <div class="read" id="reado"><button onclick="changeRead(event)" type="submit" class="read-status" id="leido">Not Read</button></div>
        <div class="icons">
                <a><img class="erase" onclick="deleteBook(event);emptyLibrary()" alt="delete" src="images/trash-can-outline.svg"></a>
            </div>
        <div class="titulo">${esteLibro}</div>
        <div class="autor">${esteAutor}</div>
        <div class="paginas">${paginasLibro}</div>`;
                bookList.insertBefore(nList, modalForm);
            }
            else if (leerSN === "Yes") {
                let nList = document.createElement('div');
                nList.classList.add('list');
                bookList.classList.add('active');
                nList.style.visibility = 'visible';
                nList.innerHTML = `<div class="title">Title</div>
        <div class="author">Author</div>
        <div class="pages">Pages</div>
        <div class="read" id="reado"><button onclick="changeRead(event)" type="submit" class="read-status read-stato" id="leido">Read</button></div>
        <div class="icons">
                <a><img class="erase" onclick="deleteBook(event);emptyLibrary()" alt="delete" src="images/trash-can-outline.svg"></a>
            </div>
        <div class="titulo">${esteLibro}</div>
        <div class="autor">${esteAutor}</div>
        <div class="paginas">${paginasLibro}</div>`;
                bookList.insertBefore(nList, modalForm);
            }
            removeForm();
        }
        {
            event.preventDefault();
        }
    }
}

/*Render Book*/


addBook.addEventListener('click', () => { bringForm() });

cancel.addEventListener('click', () => {removeForm(); emptyLibrary()});

submitted.addEventListener('click', showme);

loadPg();