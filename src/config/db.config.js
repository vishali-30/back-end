const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'task_tracker',
    connectionLimit: 5,
});

class ExecuteQuery {
    pool;

    constructor() {
        this.pool = connection
    }

    async WithoutParams(sql) {
        console.log(sql)
        const result = await this.pool.query(sql)
        console.log('---WithoutParams --- Output JSON Length :' + result != null && result.length > 0 ? result[0].length : '');
        return result[0];
    }

    async WithParams(sql, params) {
        console.log(sql, params)
        const result = await this.pool.query(sql, params)
        console.log('---WithParams --- Output JSON Length :' + result != null && result.length > 0 ? result[0].length : '');
        return result[0];
    }
}

module.exports = { ExecuteQuery };