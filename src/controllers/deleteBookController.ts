import { Request, Response } from 'express';
import { readBook, deleteBook } from '../repositories/bookRepository.js';

export default async function remove(req: Request, res: Response) {
  const book: { title: string } = req.body;

  if (!book.title) {
    return res.sendStatus(400);
  }

  try {
    const bookExists = await readBook(book.title);

    if (bookExists.rowCount === 0) {
      return res.sendStatus(400);
    }

    await deleteBook(book.title);

    res.send({ message: 'Book deleted' });
  } catch (error) {
    res.sendStatus(500);
  }
}
