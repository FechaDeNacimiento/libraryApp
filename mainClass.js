const showFormBtn = document.getElementById('show-form')
const addNewBookBtn = document.getElementById('add-book')
const bookForm = document.getElementById('form')

const titleField = document.getElementById('title')
const authorField = document.getElementById('author')
const pagesField = document.getElementById('pages')
const urlField = document.getElementById('url')

class Book {
  myLibrary = []

  constructor (title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }

  info () {
    return (
            `${titleField.value} by ${authorField.value}, ${pagesField.value} pages`
    )
  }

  addBookToLibrary (title, author, pages) {
    const newBook = new Book(title, author, pages)
    this.myLibrary = [newBook]
  }

  displayBook () {
    this.myLibrary.forEach((book) => {
      const bookCard = document.createElement('div')
      const bookImg = document.createElement('img')
      const deleteBtn = document.createElement('button')
      deleteBtn.textContent = 'Delete'

      bookCard.textContent = this.info()
      deleteBtn.addEventListener('click', () => {
        document.body.removeChild(bookCard)
        document.body.removeChild(deleteBtn)
      })
      
      bookCard.appendChild(bookImg)
      bookImg.src = urlField.value
      document.body.append(bookCard)
      document.body.append(deleteBtn)
    })
  }

  showForm () {
    bookForm.style.display = 'none'

    showFormBtn.addEventListener('click', () => {
      if (bookForm.style.display === 'none') {
        // 👇️ this SHOWS the form
        bookForm.style.display = 'block'
      } else {
        // 👇️ this HIDES the form
        bookForm.style.display = 'none'
      }
    })
  }

  addNewBookFunc () {
    addNewBookBtn.addEventListener('click', () => {
      this.addBookToLibrary(titleField, authorField, pagesField)
      bookForm.style.display = 'none'

      this.displayBook()
      bookForm.reset()
      console.log()
    })
  }
}

(() => {
  const App = new Book()
  App.showForm()
  App.addNewBookFunc()
  App.displayBook()
})()
