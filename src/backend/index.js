/* eslint-disable no-undef */
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

// Import your routes
const authRoutes = require('./routes/auth');
const medicinesRoutes = require('./routes/medicines');
const transactionRoutes = require('./routes/transactions');
const salesRoutes = require('./routes/sales');
const contactRoutes = require('./routes/contact');
const userRouter = require('./routes/user');

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/medicines', medicinesRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
