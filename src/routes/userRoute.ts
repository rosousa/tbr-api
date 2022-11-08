import { Router } from 'express';
import createUser from '../controllers/createUserController.js';
import userMiddleware from '../middlewares/userMiddleware.js';

const route = Router();

route.post('/user', userMiddleware, createUser);

export default route;
