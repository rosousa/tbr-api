import db from '../database/db.js';
import { Book } from '../protocols/Book.js';

function createBook(book: Book) {
  return db.query(
    `INSERT INTO books (title, author, genre) VALUES ($1, $2, $3) RETURNING id;`,
    [book.title, book.author, book.genre]
  );
}

function readBook(title: string) {
  return db.query(`SELECT * FROM books WHERE title = $1;`, [title]);
}

function readBooks() {
  return db.query(`SELECT * FROM books;`);
}

function updateBook(title: string, status: boolean) {
  return db.query(`UPDATE books SET status = $1 WHERE title = $2;`, [
    status,
    title,
  ]);
}

function deleteBook(title: string) {
  return db.query(`DELETE FROM books WHERE title = $1;`, [title]);
}

export { createBook, readBook, readBooks, updateBook, deleteBook };
