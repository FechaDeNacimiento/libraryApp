const showFormBtn = document.getElementById("show-form");
const addNewBookBtn = document.getElementById("add-book");
const bookForm = document.getElementById("form");

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages`;
};

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary = [newBook];
}

function displayBook() {
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"

    bookCard.textContent = book.info();
    deleteBtn.addEventListener("click", () => {
      document.body.removeChild(bookCard);
      document.body.removeChild(deleteBtn);
      console.log(myLibrary)
    });

    document.body.append(bookCard);
    document.body.append(deleteBtn);
  });
}

function showForm() {
  bookForm.style.display = "none";

  showFormBtn.addEventListener("click", () => {
    if (bookForm.style.display === "none") {
      // 👇️ this SHOWS the form
      bookForm.style.display = "block";
    } else {
      // 👇️ this HIDES the form
      bookForm.style.display = "none";
    }
  });
}

function addNewBookFun() {
  addNewBookBtn.addEventListener("click", () => {
    const titleField = document.getElementById("title").value;
    const authorField = document.getElementById("author").value;
    const pagesField = document.getElementById("pages").value;

    addBookToLibrary(titleField, authorField, pagesField);
    bookForm.style.display = "none";

    displayBook();
    bookForm.reset();
  });
}

(()=>{
  showForm()
  addNewBookFun()
  displayBook()
})();