const myLibrary = [];
const form = document.querySelector('.form');
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const confirmButton = formDialog.querySelector("#submitButton");
const clearButton = formDialog.querySelector("#clear-form-button");
const titleErrorText = document.querySelector("#titleErrorText");
const authorErrorText = document.querySelector("#authorErrorText");
const pagesErrorText = document.querySelector("#pagesErrorText");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const titleValue = document.querySelector("#title").value;
    const authorValue = document.querySelector("#author").value;
    const pagesValue = document.querySelector("#pages").value;
    const readValue = document.querySelector("#read").checked;
    let newBook = new Book(titleValue, authorValue, pagesValue, readValue);
    myLibrary.push(newBook);
}

const removeError = () => {
	titleErrorText.innerHTML = "";
	authorErrorText.innerHTML = "";
	pagesErrorText.innerHTML = "";
}

const validateForm = () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    if (title.value == "") {
		titleErrorText.innerHTML = "*Please enter a title";
    } else removeError();
	if (author.value == "") {
		authorErrorText.innerHTML = "*Please enter the author";
    } else removeError();
	if (pages.value == "") {
		pagesErrorText.innerHTML = "*Please enter the page number";
    } else removeError();
	if(title.value == "" || author.value == "" || pages.value == "") return false;
}

function clearForm() {
	title.value = "";
	author.value = "";
	pages.value = "";
	removeError();
}

confirmButton.addEventListener("click", (event) => {
    if (validateForm() == false) return;
    event.preventDefault();
    addBookToLibrary();
    clearForm();
    dialog.close();
});

clearButton.addEventListener("click", () => {
	clearForm();
});