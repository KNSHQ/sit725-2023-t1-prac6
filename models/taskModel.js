let tasks = []; // Using 'let' instead of 'const' to allow resetting

module.exports = {
    getAllTasks: () => tasks,
    addTask: (task) => tasks.push(task),
    deleteTask: (index) => {
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
        }
    },
    resetTasks: () => {
        tasks = []; // Reset the tasks array to empty
    }
};
