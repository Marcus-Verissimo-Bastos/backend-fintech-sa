const transactionModel = require('../models/transactionModel');

const transactionController = {
  async create(req, res) {
    try {
      const { title, amount, type, category, date } = req.body;
      const user_id = req.user.id;

      const transaction = await transactionModel.create({ user_id, title, amount, type, category, date });
      return res.status(201).json(transaction);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar transação' });
    }
  },

  async getAll(req, res) {
    try {
      const user_id = req.user.id;
      const transactions = await transactionModel.findAllByUser(user_id);
      return res.json(transactions);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar transações' });
    }
  },

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const user_id = req.user.id;

      const transaction = await transactionModel.findById(id, user_id);
      if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada' });
      }

      return res.json(transaction);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar transação' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, amount, type, category, date } = req.body;
      const user_id = req.user.id;

      const transaction = await transactionModel.findById(id, user_id);
      if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada' });
      }

      const updated = await transactionModel.update({ id, user_id, title, amount, type, category, date });
      return res.json(updated);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar transação' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const user_id = req.user.id;

      const transaction = await transactionModel.findById(id, user_id);
      if (!transaction) {
        return res.status(404).json({ error: 'Transação não encontrada' });
      }

      await transactionModel.delete(id, user_id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar transação' });
    }
  },
};

module.exports = transactionController;