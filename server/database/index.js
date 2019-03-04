const { Pool } = require('pg');
require

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: 'shopfront_db',
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
})

const getTime = (request, response) => {
    pool.query('SELECT NOW()', (err, results) => {
        if (err) {
            return console.log(err);
        }
        console.log('PostgreSQL connected...')
    })
}

const getProducts = (request, response) => {
    pool.query('SELECT * FROM products ORDER BY id ASC', (err, results) => {
        if (err) {
            return "Error"
        }
        response.status(200).json(results.rows)
    })
}

module.exports = { getTime, getProducts }