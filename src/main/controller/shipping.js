const axios = require('axios');

const { OrderShippingOptionsController } = require('../../../src/infra/adapters/controllers/order-shipping-options-controller');
const { OrderShippingOptionsUseCase } = require('../../../src/domain/usecases/order-shipping-options-usecase');
const { ShippingOptionsClient } = require('../../../src/infra/adapters/clients/shipping-options-http-client');

const httpClient = axios.create({
  baseURL: process.env.SHIPPING_OPTIONS_URL,
  timeout: 10000
});

const shippingOptionsClient = new ShippingOptionsClient(httpClient);

const orderShippingOptionsUseCase = new OrderShippingOptionsUseCase(shippingOptionsClient);
const orderShippingOptionsController = new OrderShippingOptionsController(orderShippingOptionsUseCase);

module.exports = { orderShippingOptionsController };