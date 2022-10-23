
const myLibrary = (function() {
  const myLibrary = [
    {
      authorName: 'Ernest Hemingway',
      bookTitle: 'The Old Man and the Sea',
      yearPublished: 1952,
      numberOfPages: 127,
      isRead: true,
      id: 1
    },
    {
      authorName: 'Ernest Hemingway',
      bookTitle: 'The Sun Also Rises',
      yearPublished: 1926,
      numberOfPages: 178,
      isRead: true,
      id: 2
    }
  ];

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

  _render();

  function _render() {
    (function() {
      while (libraryShelf.firstChild) {
          libraryShelf.removeChild(libraryShelf.firstChild);
      }
  })();

    myLibrary.map(book => {
      let newDiv = document.createElement('div');
      newDiv.className = 'book';
      let heading = document.createElement('h3');
      heading.textContent = book.bookTitle;
      let author = document.createElement('h4');
      author.textContent = book.authorName;
      let published = document.createElement('p');
      published.textContent = book.yearPublished;
      let pages = document.createElement('p');
      pages.textContent = book.numberOfPages;
      let read = document.createElement('p');
      read.textContent = book.isRead ? 'Read' : 'Not Read';
      newDiv.appendChild(heading);
      newDiv.appendChild(author);
      newDiv.appendChild(published);
      newDiv.appendChild(pages);
      newDiv.appendChild(read);
      libraryShelf.appendChild(newDiv);
    })
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
    deleteBookFromLibrary
  }
})();
