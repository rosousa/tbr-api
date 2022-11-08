import { Router } from 'express';
import createBookController from '../controllers/createBookController.js';
import { getBooks } from '../controllers/getBookController.js';
import updateBook from '../controllers/updateBookController.js';
import deleteBook from '../controllers/deleteBookController.js';

const route = Router();

route.post('/book', createBookController);
route.get('/book', getBooks);
route.patch('/book', updateBook);
route.delete('/book', deleteBook);

export default route;
