const Order = require('../../models/menu/order');
const Item = require('../../models/menu/item');
const itemsController = require('../menuController/itemsController');

async function saveToDB(req, itemsToAdd) {
  var orderToAdd = new Order({
    waiter: 'Null',
    date: '2019-08-09T10:18:59.700+00:00',
    table: req.body.table,
    client: 'Some client',
    comment: 'Some coment',
    items: itemsToAdd,
    pay_method: 'cash',
    status: 'waiting'
  });
  let save = await orderToAdd.save();
  return save;
}
async function getItems(body) {
  let itemsToAdd = [];
  for (let i = 0; i < body.length; i++) {
    let it = await Item.findOne({ _id: body[i] });
    if (it != null) {
      itemsToAdd.push(it);
    } else {
      console.log('error, ordersController, line 25');
    }
  }
  return itemsToAdd;
}

async function getOrderById(id) {
  let order = await Order.findOne({ _id: id });
  return {
    comment: order.comment,
    items: order.items
  };
}

async function getNewOrders() {
  try {
    let orders = await Order.find({ status: 'waiting' });
    return orders;
  } catch (error) {
    console.log('Error');
  }
}

module.exports.saveToDB = saveToDB;
module.exports.getItems = getItems;
module.exports.getOrderById = getOrderById;
module.exports.getNewOrders = getNewOrders;
