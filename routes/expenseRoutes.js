const express = require('express');
const router = express.Router();
const { getExpenses, addExpense, updateExpense, deleteExpense,getdummydata } = require('../controllers/expensecontroller');

router.route('/')
    .get(getExpenses)
    .post(addExpense);
router.route('/dummydata')
    .get(getdummydata)
router.route('/:id')
    .put(updateExpense)
    .delete(deleteExpense);

module.exports = router;