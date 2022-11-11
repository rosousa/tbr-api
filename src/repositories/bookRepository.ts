import { Query, QueryResult } from 'pg';
import db from '../database/db.js';
import { Book } from '../protocols/Book.js';

function createBook(book: Book): Promise<QueryResult> {
  return db.query(
    `INSERT INTO books (title, author, genre) VALUES ($1, $2, $3) RETURNING id;`,
    [book.title, book.author, book.genre]
  );
}

function readBook(title: string): Promise<QueryResult<Book>> {
  return db.query(`SELECT * FROM books WHERE title = $1;`, [title]);
}

function readBooks(): Promise<QueryResult> {
  return db.query(`SELECT * FROM books;`);
}

function updateBook(title: string, status: boolean): Promise<QueryResult> {
  return db.query(`UPDATE books SET status = $1 WHERE title = $2;`, [
    status,
    title,
  ]);
}

function deleteBook(title: string): Promise<QueryResult> {
  return db.query(`DELETE FROM books WHERE title = $1;`, [title]);
}

export { createBook, readBook, readBooks, updateBook, deleteBook };
