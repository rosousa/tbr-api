import { Router } from 'express';
import createBookController from '../controllers/createBookController.js';

const route = Router();

route.post('/book', createBookController);

export default route;
