const express = require("express");
const { urlencoded, json } = require("body-parser")
const UserModal = require("./modals/user.modal");
const TaskModal = require("./modals/task.modals");
const UserTasksModal = require("./modals/UserTasks.modal");


const app = express();

app.use(
    urlencoded({
        extended: true,
    }),
);

app.use(json());


app.get("/", (req, res) => {
    res.send("hello world")
})


app.get("/users", async (req, res) => {
    const user = new UserModal();
    const userList = await user.findAll()
    res.json(userList)
})


app.get("/users/:userId", async (req, res) => {
    console.log(req.params)
    const userId = parseInt(req.params.userId)
    const user = new UserModal();
    const userDetail = await user.findOne(userId);
    res.json(userDetail)
})


app.post("/users", async (req, res) => {
    const newUserDetails = req.body;
    console.log(newUserDetails);
    const user = new UserModal();
    const newUser = await user.create(newUserDetails);
    res.json(newUser)
})

app.get("/user/:userId/user_task", async (req, res) => {
    console.log(req.params)
    const usertaskId = parseInt(req.params.userId)
    console.log("===============================")
    const userTask = new UserTasksModal();
    const userTaskDetail = await userTask.findOne(usertaskId);
    res.json(userTaskDetail)
})

app.post("/user_task", async (req, res) => {
    console.log(req.params);
    const newUserTasks = req.body;
    console.log(newUserTasks);
    const userTaks = new UserTasksModal();
    const UserTaksDetail = await userTaks.create(newUserTasks);
    res.json(UserTaksDetail)

})




// app.get("/tasks", async (req, res) => {
//     const task = new TaskModal();
//     const taskList = await task.findAll()
//     res.json(taskList)
// })

app.get("/tasks/:taskId", async (req, res) => {
    console.log(req.params)
    const taskId = parseInt(req.params.taskId)
    const task = new TaskModal();
    const tasks = await task.findOne(taskId);
    res.json(tasks)
})

app.post("/tasks", async (req, res) => {
    const taskName = req.body;
    console.log(taskName);
    const task = new TaskModal();
    const taskNameDetails = await task.create(taskName);
    res.json(taskNameDetails)
})

app.patch("/tasks/:task_id", async (req, res) => {
    const updatingTask = req.body;
    console.log(updatingTask);
    const task = new TaskModal();
    const statusUpdating = await task.updatingTask(updatingTask);
    res.json(statusUpdating)
})



app.listen(3000, (req, res) => {
    console.log("Server has started")
    console.log("Server Listerning on PORT: 3000")
    console.log("Server Listerning URL => http://localhost:3000/")
})