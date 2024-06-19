const myLibrary = [];
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
      addBookToLibrary();
      dialog.close(); 
});

function Book(title, author, pages, read){
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