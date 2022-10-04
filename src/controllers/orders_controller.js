const get = (req, res, next) => {
  try {
    const orders = [
      { id: '1', productId: '1a', orderFor: 'Bruce Wayne', deliveryAddress: 'Wayne Manor', deliveryDate: '02/11/2022', deliveryType: 'STANDARD' },
      { id: '2', productId: '1b', orderFor: 'Steve Rogers', deliveryAddress: 'Avengers HQ', deliveryDate: '10/10/2022', deliveryType: 'FAST DELIVERY' },
      { id: '3', productId: '1c', orderFor: 'Tony Stark', deliveryAddress: 'Stark Tower', deliveryDate: '02/10/2022', deliveryType: 'STANDARD' },
      { id: '4', productId: '1d', orderFor: 'Natasha Romanoff', deliveryAddress: 'Avengers HQ', deliveryDate: '22/09/2022', deliveryType: 'FAST DELIVERY' },
      { id: '5', productId: '1d', orderFor: 'Clark Kent', deliveryAddress: 'The Daily Planet HQ', deliveryDate: '12/12/2022', deliveryType: 'FAST DELIVERY' }
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
