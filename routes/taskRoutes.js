const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.get('/', (req, res) => {
    console.log('Accessed /tasks route');
    tasksController.showTasks(req, res);
});

router.post('/add', (req, res) => {
    console.log('POST request to /tasks/add');
    tasksController.addTask(req, res);
});

router.post('/delete/:id', (req, res) => {
    console.log('POST request to /tasks/delete/:id');
    tasksController.deleteTask(req, res);
});

module.exports = router;
