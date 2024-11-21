import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    user: 'postgres',  
    host: 'localhost',              
    database: 'postgres',  
    password: '123456',     
    port: 5432,                     
  });

export function dbConnection(){
pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error connecting to PostgreSQL:', err.stack);
    }
    console.log('Connected to PostgreSQL!');
    release(); // Release the client back to the pool
});
}