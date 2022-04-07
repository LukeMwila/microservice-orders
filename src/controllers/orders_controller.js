const get = (req, res, next) => {
  try {
    const orders = [
      { id: '1', productId: '1a', orderFor: 'Peter Parker', deliveryDate: '04/04/2022', deliveryAddress: 'Happy Hogans Condo, New York' },
      { id: '2', productId: '1b', orderFor: 'Steve Rogers', deliveryDate: '06/04/2022', deliveryAddress: 'Avengers Base, New York' },
      { id: '3', productId: '1b', orderFor: 'Yatin Badal', deliveryDate: '06/04/2022', deliveryAddress: 'DevConf Cape Town' },
      { id: '3', productId: '1b', orderFor: 'Adam', deliveryDate: '06/04/2022', deliveryAddress: 'DevConf Joburg' },
      { id: '4', productId: '1c', orderFor: 'Tony Stark', deliveryDate: '04/04/2022', deliveryAddress: 'Stark Manor, Malibu' },
      { id: '5', productId: '1d', orderFor: 'Lukonde Mwila', deliveryDate: '07/04/2022', deliveryAddress: 'Somewhere in Cape Town' },
      { id: '6', productId: '1d', orderFor: 'Bruce Banner', deliveryDate: '10/04/2022', deliveryAddress: 'Avengers Base, New York' },
      { id: '7', productId: '1d', orderFor: 'Natasha Romanoff', deliveryDate: '03/04/2022', deliveryAddress: 'Avengers Base, New York' },
      { id: '8', productId: '1d', orderFor: 'Lukas Mwila', deliveryDate: '03/04/2022', deliveryAddress: 'Somewhere in Joburg' },
      { id: '9', productId: '1d', orderFor: 'Lewis Mwila', deliveryDate: '03/04/2022', deliveryAddress: 'Somewhere in Joburg' }
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
