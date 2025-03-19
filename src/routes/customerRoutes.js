const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// GET all customers
router.get('/', customerController.getAllCustomers);

// GET a single customer
router.get('/:id', customerController.getCustomerById);

// POST create a customer
router.post('/', customerController.createCustomer);

// PUT update a customer
router.put('/:id', customerController.updateCustomer);

// DELETE a customer
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;