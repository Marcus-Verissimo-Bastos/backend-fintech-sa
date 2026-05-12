const validateTransaction = (req, res, next) => {
  const { title, amount, type } = req.body;

  if (!title || !amount || !type) {
    return res.status(400).json({ error: 'title, amount e type são obrigatórios' });
  }

  if (!['income', 'expense'].includes(type)) {
    return res.status(400).json({ error: 'type deve ser income ou expense' });
  }

  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: 'amount deve ser um número positivo' });
  }

  next();
};

module.exports = validateTransaction;