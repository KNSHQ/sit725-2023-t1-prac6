const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Root Route
app.get('/', (req, res) => {
    console.log('Accessing root route');
    res.render('index', { tasks: [] }); // Render index.ejs with an empty tasks array
});

app.use('/tasks', taskRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000. Access it here: http://localhost:3000/tasks');
});
