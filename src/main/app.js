const express = require('express');
const { shippingRouter } = require('./routes/shipping');

const app = express();

const configServer = () => {
  app.use(shippingRouter);

  return app;
}

const startServer = () => {
  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log('[Server] Application is listening on port:', port);
  });
}

module.exports = {
  configServer,
  startServer
}