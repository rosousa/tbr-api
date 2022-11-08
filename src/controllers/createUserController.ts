import { Request, Response } from 'express';
import { createUser } from '../repositories/userRepository.js';

type Credentials = {
  name: 'string';
  email: 'string';
  password: 'string';
};

export default function create(req: Request, res: Response) {
  const userCredentials = res.locals.credentials as Credentials;

  try {
    createUser(userCredentials);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
