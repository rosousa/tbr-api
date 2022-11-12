import { Request, Response } from 'express';
import { readBook, updateBook } from '../repositories/bookRepository.js';
import { QueryResult } from 'pg';
import { BookUpdate } from '../protocols/Book.js';
import { Book } from '../protocols/Book.js';

export default async function update(req: Request, res: Response) {
  const book: BookUpdate = req.body;

  if (typeof book.title !== 'string' || typeof book.status !== 'boolean') {
    return res.sendStatus(400);
  }

  try {
    const bookExists: QueryResult<Book> = await readBook(book.title);

    if (bookExists.rowCount === 0) {
      return res.status(400).send({ message: "Book doesn't exist" });
    }

    await updateBook(book.title, book.status);

    res.status(200).send({ message: 'Book updated' });
  } catch (error) {
    res.sendStatus(500);
  }
}
