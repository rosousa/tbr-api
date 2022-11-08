import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bookRoute from './routes/bookRoute.js';
import userRoute from './routes/userRoute.js';

const app: Application = express();

app.use(cors());
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
app.use(userRoute);

app.listen(4000, () => console.log(`Listening on port ${PORT}`));
