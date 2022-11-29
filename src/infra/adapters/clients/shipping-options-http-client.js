class ShippingOptionsClient {
  constructor(httpClient) {
    this._httpClient = httpClient;
  }

  async getShippingOptions() {
    try {
      const response = await this._httpClient.get(process.env.GET_SHIPPING_OPTIONS_ROUTE);
      const { shipping_options: shippingOptions } = response.data;

      return shippingOptions;
    } catch (error) {
      console.log('Error getting shipping options | Error:', error);
      throw error;
    }
  }
}

module.exports = { ShippingOptionsClient };