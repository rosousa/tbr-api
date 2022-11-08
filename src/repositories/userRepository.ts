import db from '../database/db.js';

async function checkUser(email: string) {
  return db.query(`SELECT * FROM users WHERE email = $1;`, [email]);
}

function createUser(name: string, email: string, password: string): object {
  return db.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`,
    [name, email, password]
  );
}

export { createUser, checkUser };
