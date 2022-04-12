const get = (req, res, next) => {
  try {
    const orders = [
      { id: '1', productId: '1a', orderFor: 'Bruce Wayne', deliveryAddress: 'Wayne Manor' },
      { id: '2', productId: '1b', orderFor: 'Steve Rogers', deliveryAddress: 'Avengers HQ' },
      { id: '3', productId: '1c', orderFor: 'Tony Stark', deliveryAddress: 'Stark Tower' },
      { id: '4', productId: '1d', orderFor: 'Natasha Romanoff', deliveryAddress: 'Avengers HQ' },
      { id: '5', productId: '1d', orderFor: 'Clark Kent', deliveryAddress: 'The Daily Planet HQ' }
    ];
    res.status(200).send(orders);
  } catch (e) {
    next();
  }
};

const OrdersController = {
  get
};

module.exports = OrdersController;
