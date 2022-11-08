import { Request, Response } from 'express';
import { Book } from '../protocols/Book.js';
import { createBook, readBook } from '../repositories/bookRepository.js';

export default async function create(req: Request, res: Response) {
  const book: Book = req.body;

  if (!book.title || !book.author || !book.genre) {
    return res.sendStatus(400);
  }

  try {
    const bookExists = await readBook(book.title);

    if (bookExists.rowCount !== 0) {
      return res.status(409).send({ message: 'Book is already registered' });
    }

    const result = await createBook(book);

    res.status(201).send({ id: result.rows[0].id });
  } catch (error) {
    res.sendStatus(500);
  }
}
