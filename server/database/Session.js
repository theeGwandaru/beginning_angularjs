const mysql = require('mysql');

class Session {
    constructor() {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: '127.0.0.1',
            user: 'stockTradingApp',
            password: 'password',
            database: 'central_depository_db'
        })
    }
}

module.exports = Session;