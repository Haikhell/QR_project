const router = require('express').Router();
const Waiter = require('./../../controller/waiterFunction/waiterFunc');

router.post('/login', async (req, res) => {
  res.send(await Waiter.loginWaiter(req.body.login, req.body.password));
});

router.post('/waiter', async (req, res) => {
  let waiter = await Waiter.addNewWaiter(req);
  if (waiter == 0) {
    res.send('Login already exists');
    return;
  }
  res.send(waiter);
});

router.get('/table/:status', async (req, res) => {
  let temp = await Waiter.getTableOrders(req.params.status);
  res.send(temp);
});

module.exports = router;
