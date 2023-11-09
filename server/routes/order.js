const express = require('express')
const fs = require('fs');
const path = require('path');

const orderController = require('../controllers/orderController')

const router = express.Router();

router.post('/', orderController.createOrder, (req, res, next) => {
  console.log(req.body);

});

module.exports = router;