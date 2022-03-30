const get = (req, res, next) => {
  try {
    const orders = [
      { id: '1', productId: '1a', orderFor: 'Peter Parker', deliveryDate: '04-04-2022' },
      { id: '2', productId: '1b', orderFor: 'Steve Rogers', deliveryDate: '06-04-2022' },
      { id: '3', productId: '1c', orderFor: 'Tony Stark', deliveryDate: '04-04-2022' },
      { id: '4', productId: '1d', orderFor: 'Reed Richards', deliveryDate: '07-04-2022' },
      { id: '5', productId: '1d', orderFor: 'Bruce Banner', deliveryDate: '10-04-2022' },
      { id: '6', productId: '1d', orderFor: 'Natasha Romanoff', deliveryDate: '03-04-2022' }
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
