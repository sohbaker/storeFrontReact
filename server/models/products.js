const db = require('../database');

class Products {
    static getProducts(request, response) {
        pool.query('SELECT * FROM products ORDER BY id ASC', (err, results) => {
            if (err) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }
}



module.exports = Products