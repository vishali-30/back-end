const { connection, ExecuteQuery } = require("./../config/db.config");
const TaskModal = require("./task.modals");
const UserModal = require("./user.modal");


class UserTasksModal {
    constructor() { }

    // List all user_tasks
    async findOne(userTasksId) {
        const { user_id } = userTasksId
        const executionQuery = new ExecuteQuery();
        const sql = "SELECT user_tasks.user_id,user_tasks.task_id,tasks.task_name FROM user_tasks  JOIN tasks  ON  user_tasks.task_id = tasks.id JOIN users  ON user_tasks.user_id = users.id WHERE  user_tasks.user_id = ? "
        const results = await executionQuery.WithParams(sql, [userTasksId]);
        console.log(results)
        return results;
    }

    async create(newUserTask) {
        const { user_id, task_name } = newUserTask;
        const taskModal = new TaskModal();
        const newTask = await taskModal.create({ task_name });
        const task_id = newTask.insertId

        const executionQuery = new ExecuteQuery();
        const sql = "INSERT INTO user_tasks (user_id,task_id) VALUES (?,?)"
        const results = await executionQuery.WithParams(sql, [user_id, task_id]);
        return results;
    }

    
}

module.exports = UserTasksModal