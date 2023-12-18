// Assuming the use of Mocha and Chai
const chai = require('chai');
const expect = chai.expect;
const taskModel = require('../models/taskModel');

describe('Task Model', () => {

    beforeEach(() => {
        // Reset the state before each test
        taskModel.resetTasks();
    });

    it('should add a task', () => {
        taskModel.addTask('Test Task 1');
        const tasks = taskModel.getAllTasks();
        expect(tasks).to.include('Test Task 1');
    });

    it('should retrieve all tasks', () => {
        taskModel.addTask('Test Task 1');
        taskModel.addTask('Test Task 2');
        const tasks = taskModel.getAllTasks();
        expect(tasks).to.have.members(['Test Task 1', 'Test Task 2']);
    });

    it('should delete a task', () => {
        taskModel.addTask('Test Task 1');
        taskModel.addTask('Test Task 2');
        taskModel.deleteTask(0);
        const tasks = taskModel.getAllTasks();
        expect(tasks).to.not.include('Test Task 1');
        expect(tasks).to.include('Test Task 2');
    });

});
