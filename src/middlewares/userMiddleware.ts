import { Request, Response } from 'express';
import { checkUser } from '../repositories/userRepository.js';

type Credentials = {
  name: 'string';
  email: 'string';
  password: 'string';
};

export default async function userMiddleware(
  req: Request,
  res: Response,
  next: Function
) {
  const userCredentials: Credentials = req.body;

  if (
    !userCredentials.name ||
    !userCredentials.email ||
    !userCredentials.password
  ) {
    return res.sendStatus(400);
  }

  try {
    const userExists = await checkUser(userCredentials.email);

    if (userExists.rowCount !== 0) {
      return res.sendStatus(409);
    }

    res.locals.credentials = userCredentials;

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
