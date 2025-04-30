const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');  // Import cors package
const expenseRoutes = require('./routes/expenseRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/DB');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: process.env.URLTOGO, // ✅ only allow this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // if you're using cookies or sessions
  }));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/expenses', expenseRoutes);

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
