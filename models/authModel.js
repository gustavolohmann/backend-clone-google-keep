require('dotenv').config()
const db = require('../db.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (email, password, callback) => {
    const hash = bcrypt.hashSync(password, 10);
    const sql = 'INSERT INTO user (email, password) VALUES (?, ?)';
    db.query(sql, [email, hash], callback);
};

exports.login = (email, password, callback) => {
    const sql = 'SELECT * FROM user WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) return callback(err);

        if (results.length === 0) return callback(null, false, null);

        const user = results[0];
        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return callback(null, false, null);
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        callback(null, true, {
            token,
            user: {
                id: user.id,
            }
        });
    });
};
