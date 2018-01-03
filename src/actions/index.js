function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        title: book.title
    }
}
