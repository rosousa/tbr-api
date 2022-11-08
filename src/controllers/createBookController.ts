import { Request, Response } from 'express';

type Book = {
  title: string;
  author: string;
  genre: string;
};

export default function create(req: Request, res: Response) {
  const book: Book = req.body;

  if (!book.title || !book.author || !book.genre) {
    return res.sendStatus(400);
  }

  res
    .send({
      message: 'Created',
    })
    .status(201);
}
