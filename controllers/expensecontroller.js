const Expense = require('../models/expense');
const dummy=require('../dummydata.json')
// @desc    Get all expenses
const getExpenses = async (req, res) => {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
};

// @desc    Add a new expense
const addExpense = async (req, res) => {
    const { amount, category, description, date } = req.body;
    const expense = await Expense.create({ amount, category, description, date });
    res.status(201).json(expense);
};

// @desc    Update an expense
const updateExpense = async (req, res) => {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
        res.status(404);
        throw new Error('Expense not found');
    }

    const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedExpense);
};

// @desc    Delete an expense
const deleteExpense = async (req, res) => {
    try {
        // Find the expense by ID and delete it
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    
        // If expense is not found, return a 404 response
        if (!deletedExpense) {
          return res.status(404).json({ message: 'Expense not found' });
        }
    
        // If deletion is successful, return a success response
        return res.status(200).json({ message: 'Expense removed' });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
      }
  }

//@dummy data
const getdummydata=async(req,res)=>{
    console.log("hey")
    res.status(200).json(dummy)
}

module.exports = {
    getExpenses,
    addExpense,
    updateExpense,
    deleteExpense,
    getdummydata,
};
