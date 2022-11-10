import pg from 'pg';
var Pool = pg.Pool;
var connection = new Pool({
    connectionString: 'postgresql://postgres:123456@localhost:5432/tbr'
});
export default connection;
