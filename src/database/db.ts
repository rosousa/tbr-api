import pg from 'pg';

const { Pool } = pg;

const connection = new Pool({
  connectionString: 'postgresql://postgres:123456@localhost:5432/tbr',
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});

export default connection;
