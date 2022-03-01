const get = (req, res, next) => {
  try {
    const orders = [
      { id: '1', productId: '1a', orderFor: 'Lukas Mwila' },
      { id: '2', productId: '1b', orderFor: 'Lewis Mwila' },
      { id: '3', productId: '1c', orderFor: 'Lewis Mwila' },
      { id: '4', productId: '1d', orderFor: 'Lukas Mwila' },
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
