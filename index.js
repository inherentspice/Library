
const myLibrary = (function() {
  const myLibrary = [];

  //cacheDom
  const libraryShelf = document.getElementById('library-shelf');
  const form = document.getElementById('book-information');
  const submitButton = document.getElementById('new-book');
  // const deleteButton = document.getElementById('delete-button');
  const authorInfo = document.getElementById('author');
  const titleInfo = document.getElementById('title');
  const yearInfo = document.getElementById('year');
  const pagesInfo = document.getElementById('pages');
  const isReadInfo = document.getElementById('isRead');

  //bindEvents

  submitButton.addEventListener('click', addBookToLibrary);
  // deleteButton.addEventListener('click', deleteBookFromLibrary);

  function _render() {
    console.log(myLibrary)
  }

  function bookConstructor() {
    const authorName = authorInfo.value;
    const bookTitle = titleInfo.value;
    const yearPublished = yearInfo.value;
    const numberOfPages = pagesInfo.value;
    const isRead = isReadInfo.value;
    const id = myLibrary.length + 1;

    return { authorName, bookTitle, yearPublished, numberOfPages, isRead, id}
  }

  function addBookToLibrary(event) {
    event.preventDefault()
    const newBook = bookConstructor()
    myLibrary.push(newBook)
    _render()
  }

  function deleteBookFromLibrary() {
    console.log('deleting')
  }

  return {
    addBookToLibrary,
    deleteBookFromLibrary,
    _render
  }
})();
