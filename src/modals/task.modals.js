
const { connection, ExecuteQuery } = require("./../config/db.config")


class TaskModal {
    constructor() { }

    // List all tasks
    async findAll() {

        const executionQuery = new ExecuteQuery();
        const sql = "SELECT * FROM tasks"
        const results = await executionQuery.WithoutParams(sql);
        console.log(results)
        return results;
    }

    async findOne(taskId) {
        const executionQuery = new ExecuteQuery();
        const sql = "SELECT * FROM tasks WHERE id = ?"
        const results = await executionQuery.WithParams(sql, [taskId]);
        console.log(results)
        return results;
    }

    async create(taskNameDetails) {
        const { task_name } = taskNameDetails
        const executionQuery = new ExecuteQuery();
        const sql = "INSERT INTO tasks (task_name) VALUES (?)"
        const results = await executionQuery.WithParams(sql, [taskNameDetails.task_name]);
        return results;
    }

    async updatingTask(statusUpdating) {
        const { status, task_id } = statusUpdating
        const executionQuery = new ExecuteQuery();
        console.log(statusUpdating)
        const sql = "UPDATE tasks SET status =? WHERE id= ?"
        const results = await executionQuery.WithParams(sql, [status, task_id]);
        return results;
    }

    


}

module.exports = TaskModal