const { UnhandledError } = require('../errors/UnhandledError');

class OrderShippingOptionsUseCase {
  constructor(client) {
    this._client = client;
  }

  async execute() {
    try {
      const options = await this._client.getShippingOptions();
      return this._sortShippingOptions(options);
    } catch (error) {
      throw new UnhandledError(error.message);
    }
  }

  _sortShippingOptions(options) {
    if (options.length === 0) {
      return [];
    }

    return options.sort((a, b) => a.cost - b.cost || a.estimated_days - b.estimated_days);;
  }
}

module.exports = { OrderShippingOptionsUseCase };