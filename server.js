const express = require('express');
const path = require('path');
require('dotenv').config();
const connectDB = require('./src/models/db');

// Import routes
const productRoutes = require('./src/routes/productRoutes');
const customerRoutes = require('./src/routes/customerRoutes');

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src/public')));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/customers', customerRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('PA & Lighting Equipment Rental System is running!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});