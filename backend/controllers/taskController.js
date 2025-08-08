
const db = require('../db');

exports.getTasks = async (req, res) => {
    const userId = req.user.userId;
    const result = await db.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
    res.json(result.rows);
};

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    const userId = req.user.userId;
    const result = await db.query(
        'INSERT INTO tasks (title, description, status, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
        [title, description, 'Pending', userId]
    );
    res.status(201).json(result.rows[0]);
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const result = await db.query(
        'UPDATE tasks SET title = $1, description = $2, status = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
        [title, description, status, id]
    );
    res.json(result.rows[0]);
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    await db.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.json({ message: 'Task deleted' });
};
