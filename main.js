const showFormBtn = document.getElementById("show-form");
const addNewBookBtn = document.getElementById("add-book");
const bookForm = document.getElementById("form");

const titleField = document.getElementById("title");
const authorField = document.getElementById("author");
const pagesField = document.getElementById("pages");
const urlField = document.getElementById("url");

class Book {
  myLibrary = [];

  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    this.myLibrary = [newBook];
  }

  displayBook() {
    this.myLibrary.forEach((book) => {
      const bookCard = document.createElement("div");
      const bookImg = document.createElement("img");
      const deleteBtn = document.createElement("button");
      const bookTitle = document.createElement("p");
      const bookAuthor = document.createElement("p");
      const bookPages = document.createElement("p");
      deleteBtn.textContent = "Delete";
      deleteBtn.id = "deleteBtn";

      bookTitle.textContent = `"${titleField.value}" `;
      bookAuthor.textContent = authorField.value;
      bookPages.textContent = pagesField.value;
      deleteBtn.addEventListener("click", () => {
        document.body.removeChild(bookCard);
        document.body.removeChild(deleteBtn);
      });

      bookCard.appendChild(bookImg);
      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookPages);
      bookCard.append(deleteBtn);
      bookCard.id = "card";
      bookImg.id = "bookImg";
      bookImg.src = urlField.value;
      document.body.append(bookCard);
    });
  }

  showForm() {
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

  addNewBookFunc() {
    addNewBookBtn.addEventListener("click", () => {
      this.addBookToLibrary(titleField, authorField, pagesField);
      bookForm.style.display = "none";

      this.displayBook();
      bookForm.reset();
      console.log();
    });
  }
}

(() => {
  const App = new Book();
  App.showForm();
  App.addNewBookFunc();
  App.displayBook();
})();
