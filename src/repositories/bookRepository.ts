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

export { createBook, readBook };
