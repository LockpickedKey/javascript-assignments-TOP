const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const myLibrary = [];
const title = document.getElementById("title").value
const author = document.getElementById("author").value
const pages = document.getElementById("pages").value
const read = document.getElementById("read").value

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