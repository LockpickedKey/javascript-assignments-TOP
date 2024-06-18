const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const confirmBtn = formDialog.querySelector("#submitButton");

showButton.addEventListener("click", () => {
      dialog.showModal();
});

closeButton.addEventListener("click", () => {
      dialog.close();
});

confirmBtn.addEventListener("click", (event) => {
      event.preventDefault();
      dialog.close(); 
});

const myLibrary = [];
const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const pages = document.querySelector("#pages").value;
const read = document.querySelector("#read").value;

function Book(title, author, pages, read){
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
}
    
function addBookToLibrary() {
      let newBook = new Book(title, author, pages, read);
      myLibrary.push(newBook);
}