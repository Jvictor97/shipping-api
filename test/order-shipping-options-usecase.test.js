const { assert } = require('chai');
const { OrderShippingOptionsUseCase } = require('../src/domain/usecases/order-shipping-options-usecase');


describe('Order Shipping Options UseCase Unit Test', () => {
  it('should return an empty list when there are no shipping options', async () => {
    const mockClient = {
      getShippingOptions: () => Promise.resolve([])
    };

    const useCase = new OrderShippingOptionsUseCase(mockClient);

    const orderedOptions = await useCase.execute();

    assert.typeOf(orderedOptions, 'array');
    assert.lengthOf(orderedOptions, 0);
  });

  it('should return options ordered first by cost then by estimated_days', async () => {
    const mockClient = {
      getShippingOptions: () => Promise.resolve([
        { "name": "Option 4", "type": "Delivery", "cost": 10, "estimated_days": 3 },
        { "name": "Option 1", "type": "Delivery", "cost": 10, "estimated_days": 5 },
        { "name": "Option 2", "type": "Custom", "cost": 5, "estimated_days": 4 },
        { "name": "Option 3", "type": "Pickup", "cost": 7, "estimated_days": 1 }
      ])
    };

    const useCase = new OrderShippingOptionsUseCase(mockClient);

    const orderedOptions = await useCase.execute();

    const expectedOptions = [
      { "name": "Option 2", "type": "Custom", "cost": 5, "estimated_days": 4 },
      { "name": "Option 3", "type": "Pickup", "cost": 7, "estimated_days": 1 },
      { "name": "Option 4", "type": "Delivery", "cost": 10, "estimated_days": 3 },
      { "name": "Option 1", "type": "Delivery", "cost": 10, "estimated_days": 5 }
    ];

    assert.typeOf(orderedOptions, 'array');
    assert.lengthOf(orderedOptions, 4);
    assert.sameDeepOrderedMembers(orderedOptions, expectedOptions);
  });
});

