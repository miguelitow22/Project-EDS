const db = require('../config');

const User = {
  create: (username, email, password, role = 'user') => {
    return db.execute('INSERT INTO usuarios (username, email, password, role) VALUES (?, ?, ?, ?)', [username, email, password, role]);
  },
  findByEmail: (email) => {
    return db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
  },
  findById: (id) => {
    return db.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
  },
  update: (id, username, email, password) => {
    const fields = [];
    const values = [];
    if (username) {
      fields.push('username = ?');
      values.push(username);
    }
    if (email) {
      fields.push('email = ?');
      values.push(email);
    }
    if (password) {
      fields.push('password = ?');
      values.push(password);
    }
    values.push(id);
    const query = `UPDATE usuarios SET ${fields.join(', ')} WHERE id = ?`;
    return db.execute(query, values);
  },
  deactivate: (id) => {
    return db.execute('UPDATE usuarios SET active = 0 WHERE id = ?', [id]);
  }
};

module.exports = User;
