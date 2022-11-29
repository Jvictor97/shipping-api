const { UnhandledError } = require("../../../domain/errors/UnhandledError");

class OrderShippingOptionsController {
  constructor(orderShippingOptionsUseCase) {
    this._useCase = orderShippingOptionsUseCase;
  }

  async handle(req, res) {
    try {
      const orderedOptions = await this._useCase.execute();
      return res.send(orderedOptions);
    } catch (error) {
      console.log('Error executing Controller OrderShippingOptionsController | Error:', error);

      if (error instanceof UnhandledError) {
        return res.status(500).send({ message: error.message });
      }

      return res.status(500).send({ message: error.message });
    }
  }
}

module.exports = { OrderShippingOptionsController };