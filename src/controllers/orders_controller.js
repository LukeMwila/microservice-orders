const get = (req, res, next) => {
  try {
    const orders = [
      { id: '1', productId: '1a', orderFor: 'Peter Parker' },
      { id: '2', productId: '1b', orderFor: 'Steve Rogers' },
      { id: '3', productId: '1c', orderFor: 'Tony Stark' },
      { id: '4', productId: '1d', orderFor: 'Reed Richards' },
      { id: '5', productId: '1d', orderFor: 'Bruce Banner' }
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
