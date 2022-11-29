const express = require('express');
const router = express.Router();

const { orderShippingOptionsController } = require('../controller/shipping');

router.get('/shipping/best-options', (req, res) => orderShippingOptionsController.handle(req, res));

module.exports = { shippingRouter: router };