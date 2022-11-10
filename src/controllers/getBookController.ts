import { Request, Response } from 'express';
import { readBooks } from '../repositories/bookRepository.js';

async function getBooks(req: Request, res: Response) {
  try {
    const result = await readBooks();

    res.status(200).send(result.rows);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function getBooksRead(req: Request, res: Response) {
  try {
    const result = await readBooks();

    const booksRead: Array<object> = result.rows.filter((book) => book.status);

    res.status(200).send(booksRead);
  } catch (error) {
    res.sendStatus(500);
  }
}

export { getBooks, getBooksRead };
