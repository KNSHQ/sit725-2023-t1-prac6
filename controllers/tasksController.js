const taskModel = require('../models/taskModel');

module.exports = {
    showTasks: (req, res) => {
        console.log('Showing tasks');
        const tasks = taskModel.getAllTasks();
        res.render('index', { tasks });
    },
    addTask: (req, res) => {
        console.log('Adding a new task:', req.body.newTask);
        taskModel.addTask(req.body.newTask);
        res.redirect('/tasks');
    },
    deleteTask: (req, res) => {
        console.log('Deleting task at index:', req.params.id);
        taskModel.deleteTask(req.params.id);
        res.redirect('/tasks');
    }
};
