import pg from 'pg';

const { Pool } = pg;

const connection = new Pool({
  connectionString: 'postgres://yqvjddfxloheak:a725f0370d35028010edf5b734d1c0114fee331812b3b011387d76b04410a303@ec2-3-209-39-2.compute-1.amazonaws.com:5432/da0qmfffno84kr',
  ssl: {
    rejectUnauthorized: false,
  },
});

export default connection;
