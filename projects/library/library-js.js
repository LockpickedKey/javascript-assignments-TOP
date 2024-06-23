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
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myLibrary.push(newBook);
}

// const addError = (error) => {
//     let errorText = document.createElement('div');
//     errorText.textContent = `* Please enter an '${error.id}'`;
//     errorText.classList.add('error-text');
//     form.insertBefore(errorText, title);
// }

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
	clearForm();
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
    /*update table*/
    dialog.close();
});

clearButton.addEventListener("click", (event) => {
	clearForm();
});