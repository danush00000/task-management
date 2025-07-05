const Task = require('../models/Task');
const { validateTaskInput } = require('../utils/validators'); // 👈 include this line

const createTask = async (req, res) => {
  const { isValid, errors } = validateTaskInput(req.body);
  if (!isValid) return res.status(400).json({ errors });

  try {
    const newTask = new Task({
      title: req.body.title,
      owner: req.user.id,
    });
    await newTask.save();

    req.io.emit('task-updated');
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createTask,
  getTasks,
  // ...other methods like updateTask, deleteTask
};
