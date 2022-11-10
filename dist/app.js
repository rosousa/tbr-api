import express from 'express';
import bookRoute from './routes/bookRoute.js';
var app = express();
app.use(express.json());
var PORT = 4000;
app.get('/status', function (req, res) {
    res
        .send({
        message: 'Ok'
    })
        .status(200);
});
app.use(bookRoute);
app.listen(4000, function () { return console.log("Listening on port ".concat(PORT)); });
