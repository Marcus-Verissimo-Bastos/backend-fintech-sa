const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middlewares/authMiddleware');
const validateTransaction = require('../middlewares/validateTransaction');

router.use(authMiddleware);

router.post('/', validateTransaction, transactionController.create);
router.get('/', transactionController.getAll);
router.get('/:id', transactionController.getOne);
router.put('/:id', validateTransaction, transactionController.update);
router.delete('/:id', transactionController.delete);

module.exports = router;