const router = require('express').Router();
const ordersController = require('../../controller/menuController/ordersController');

router.post('/orders', async (req, res) => {
  console.log(req.body);
  //let itemsToAdd = await ordersController.getItems(req.body.items);
  console.log(req.body);
  let order = await ordersController.saveToDB(req, req.body.items);
  res.send(order);
});

router.get('/orders/:id', async (req, res) => {
  let item = await ordersController.getOrderById(req.params.id);
  res.send(item);
});

router.get('/orders', async (req, res) => {
  let orders = await ordersController.getNewOrders();
  res.send(orders);
});

module.exports = router;
