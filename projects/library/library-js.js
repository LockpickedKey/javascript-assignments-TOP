const myLibrary = [];
const form = document.querySelector('.form');
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const confirmButton = formDialog.querySelector("#submitButton");
const clearButton = formDialog.querySelector("#clear-form-button")

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

// const removeError = (error) => {
// }

// const validateForm = () => {
//     const title = document.querySelector("#title");
//     const author = document.querySelector("#author");
//     const pages = document.querySelector("#pages");
//     if (title.value == "") {
// 		addError(title);
//         return false;
//     } else removeError(title);
// 	if (author.value == "") {
// 		addError(author);
// 	    return false;
//     } else removeError();
// 	if (pages.value == "") {
// 		addError(pages);
//         return false;
//     } else removeError();
// }

function clearForm() {
	title.value = "";
	author.value = "";
	pages.value = "";
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