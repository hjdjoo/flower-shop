const express = require('express')
const fs = require('fs');
const path = require('path');
const customerController = require('../controllers/customerController');

const router = express.Router();


router.get('/:searchVal', customerController.findCustomer, (req, res, next) => {

})

router.patch('/', customerController.updateCustomer, (req, res, next) => {

})

module.exports = router;