const db = require('../db.js');

exports.createNote = (user_id, title, content, isPinned, callback) => {
    const sql = 'INSERT INTO note (user_id, title, content, isPinned) VALUES (?, ?, ?, ?)';
    db.query(sql, [user_id, title, content, isPinned], (err, result) => {
        if (err) return callback(err);
        callback(null, result.insertId);
    });
};

exports.fetchNoteById = (id, callback) => {
    const sql = 'SELECT * FROM note WHERE user_id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

exports.updateNote = (id, title, content, isPinned, callback) => {
    const sql = 'UPDATE note SET title = ?, content = ?, isPinned = ? WHERE id = ?';
    db.query(sql, [title, content, isPinned, id], (err, result) => {
        if (err) return callback(err);
        callback(null, result);
    });
};

exports.deleteNote = (id, callback) => {
    const sql = 'DELETE FROM note WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return callback(err);
        callback(null, result);
    });
};
