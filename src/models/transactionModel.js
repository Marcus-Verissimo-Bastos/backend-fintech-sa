const pool = require('../database/connection');

const transactionModel = {
  async create({ user_id, title, amount, type, category, date }) {
    const { rows } = await pool.query(
      'INSERT INTO transactions (user_id, title, amount, type, category, date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [user_id, title, amount, type, category, date]
    );
    return rows[0];
  },

  async findAllByUser(user_id) {
    const { rows } = await pool.query(
      'SELECT * FROM transactions WHERE user_id = $1 ORDER BY date DESC',
      [user_id]
    );
    return rows;
  },

  async findById(id, user_id) {
    const { rows } = await pool.query(
      'SELECT * FROM transactions WHERE id = $1 AND user_id = $2',
      [id, user_id]
    );
    return rows[0];
  },

  async update({ id, user_id, title, amount, type, category, date }) {
    const { rows } = await pool.query(
      'UPDATE transactions SET title=$1, amount=$2, type=$3, category=$4, date=$5 WHERE id=$6 AND user_id=$7 RETURNING *',
      [title, amount, type, category, date, id, user_id]
    );
    return rows[0];
  },

  async delete(id, user_id) {
    await pool.query(
      'DELETE FROM transactions WHERE id = $1 AND user_id = $2',
      [id, user_id]
    );
  },
};

module.exports = transactionModel;  