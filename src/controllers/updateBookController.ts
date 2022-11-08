import { Request, Response } from 'express';
import { BookUpdate } from '../protocols/Book.js';
import { readBook, updateBook } from '../repositories/bookRepository.js';

export default async function update(req: Request, res: Response) {
  const book = req.body as BookUpdate;

  if (typeof book.title !== 'string' || typeof book.status !== 'boolean') {
    return res.sendStatus(400);
  }

  try {
    const bookExists = await readBook(book.title);

    if (bookExists.rowCount === 0) {
      return res.sendStatus(400);
    }

    await updateBook(book.title, book.status);

    res.status(200).send({ message: 'Book updated' });
  } catch (error) {
    res.sendStatus(500);
  }
}
