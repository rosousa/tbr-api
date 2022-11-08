import db from '../database/db.js';
import { Credentials } from '../protocols/Credentials.js';

function checkUser(email: string) {
  return db.query(`SELECT * FROM users WHERE email = $1;`, [email]);
}

function createUser(user: Credentials) {
  return db.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`,
    [user.name, user.email, user.password]
  );
}

export { createUser, checkUser };
