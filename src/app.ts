import express, { Application, Request, Response } from 'express';
import bookRoute from './routes/bookRoute.js';

const app: Application = express();

app.use(express.json());

const PORT: number = 4000;

app.get('/status', (req: Request, res: Response) => {
  res
    .send({
      message: 'Ok',
    })
    .status(200);
});

app.use(bookRoute);

app.listen(4000, () => console.log(`Listening on port ${PORT}`));
