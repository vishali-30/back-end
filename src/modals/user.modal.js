// import { connection } from "./../config/db.config"

const { connection, ExecuteQuery } = require("./../config/db.config")


class UserModal {
    constructor() { }

    // List all Users
    async findAll() {
        const executionQuery = new ExecuteQuery();
        const sql = "SELECT * FROM users"
        const results = await executionQuery.WithoutParams(sql);
        console.log(results)
        return results;
    }


    async findOne(userId) {
        const executionQuery = new ExecuteQuery();
        const sql = "SELECT * FROM users WHERE id = ?"
        const results = await executionQuery.WithParams(sql, [userId]);
        console.log(results)
        return results;
    }



    async create(newUser) {
        // {
        //     first_name: "surya",
        //     last_name: "Umapathy",
        //     email: "suryaumapathy2812",
        // }
        // const results = await executionQuery.WithParams(sql, [first_name, last_name, email]);
        const { first_name, last_name, email_id, phone_number } = newUser
        const executionQuery = new ExecuteQuery();
        const sql = "INSERT INTO users (first_name,last_name,email_id,phone_number) VALUES (?,?,?,?)"; 
        const results = await executionQuery.WithParams(sql,[newUser.first_name,newUser.last_name,newUser.email_id,newUser.phone_number]);
        return results;
    }



}

module.exports = UserModal