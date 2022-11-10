import db from '../database/db.js';
function createBook(book) {
    return db.query("INSERT INTO books (title, author, genre) VALUES ($1, $2, $3) RETURNING id;", [book.title, book.author, book.genre]);
}
function readBook(title) {
    return db.query("SELECT * FROM books WHERE title = $1;", [title]);
}
function readBooks() {
    return db.query("SELECT * FROM books;");
}
function updateBook(title, status) {
    return db.query("UPDATE books SET status = $1 WHERE title = $2;", [
        status,
        title,
    ]);
}
function deleteBook(title) {
    return db.query("DELETE FROM books WHERE title = $1;", [title]);
}
export { createBook, readBook, readBooks, updateBook, deleteBook };
