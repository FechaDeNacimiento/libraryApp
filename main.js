const showFormBtn = document.getElementById("show-form");
const addNewBookBtn = document.getElementById("add-book");
const bookForm = document.getElementById("form");

const titleField = document.getElementById("title");
const authorField = document.getElementById("author");
const pagesField = document.getElementById("pages");

const Book = () => {
    
    let myLibrary = [];

    const info = ()=>{return `${title.value} by ${author.value}, ${pages.value} pages`;}

    const addBookToLibrary = (title, author, pages) => {
        const newBook = Book(title, author, pages);
        myLibrary = [newBook];
    }

    const displayBook = () => {
        myLibrary.forEach((book) => {
            const bookCard = document.createElement("div");
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete"
        
            bookCard.textContent = info();
            deleteBtn.addEventListener("click", () => {
              document.body.removeChild(bookCard);
              document.body.removeChild(deleteBtn);
              console.log(myLibrary)
            });
        
            document.body.append(bookCard);
            document.body.append(deleteBtn);
        });
    } 

    const showForm = () => {
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

    const addNewBookFun = () => {
        addNewBookBtn.addEventListener("click", () => {        
            addBookToLibrary(titleField, authorField, pagesField);
            bookForm.style.display = "none";
        
            displayBook();
            bookForm.reset();
            console.log()
        });
    }

    return {
        showForm,
        addNewBookFun,
        displayBook
    }
}

(()=> {
    const App = Book();
    App.showForm()
    App.addNewBookFun()
    App.displayBook()
} )();