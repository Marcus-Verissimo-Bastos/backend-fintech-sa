const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const authController = {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      const userExists = await userModel.findByEmail(email);
      if (userExists) {
        return res.status(400).json({ error: 'Email já cadastrado' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await userModel.create({ name, email, password: hashedPassword });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await userModel.findByEmail(email);
      if (!user) {
        return res.status(401).json({ error: 'Email ou senha inválidos' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Email ou senha inválidos' });
      }

      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      return res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao fazer login' });
    }
  },
};

module.exports = authController;