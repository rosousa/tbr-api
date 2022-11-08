import express from 'express';

const app = express();

const PORT: number = 4000;

app.get('/status', (req, res) => {
  res
    .send({
      message: 'Ok',
    })
    .status(200);
});

app.listen(4000, () => console.log(`Listening on port ${PORT}`));
