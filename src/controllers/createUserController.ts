import { Request, Response } from 'express';
import { createUser } from '../repositories/userRepository.js';

type Credentials = {
  name: 'string';
  email: 'string';
  password: 'string';
};

export default async function create(req: Request, res: Response) {
  const userCredentials: Credentials = res.locals.credentials;

  try {
    createUser(
      userCredentials.name,
      userCredentials.email,
      userCredentials.password
    );

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
