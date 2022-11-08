import { Request, Response } from 'express';
import { checkUser } from '../repositories/userRepository.js';
import { Credentials } from '../protocols/Credentials.js';

export default async function userMiddleware(
  req: Request,
  res: Response,
  next: Function
) {
  const userCredentials = req.body as Credentials;

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
