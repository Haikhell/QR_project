const Waiter = require('../../models/waiter/waiter');
const Orders = require('../../models/menu/order');

async function loginWaiter(login, password) {
  let waiters = await Waiter.find({ login: login });
  if (waiters != []) {
    if (password === waiters[0].password) {
      return true;
    }
    return false;
  }
}

async function getTableOrders(status) {
  let order = await Orders.find({ status });
  let objAllElement = [];
  console.log(order);
  for (let i = 0; i < order.length; i++) {
    objAllElement.push({
      id: order[i].id,
      table: order[i].table,
      items: order[i].items.length
    });
  }
  return objAllElement;
}

async function addNewWaiter(req) {
  let login = await Waiter.find({ login: req.body.login });
  if (login != null) {
    return 0;
  }
  try {
    let waiterToAdd = new Waiter({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      login: req.body.login,
      password: req.body.password
    });
    let save = await waiterToAdd.save();
    return save;
  } catch (error) {
    console.log(error);
  }
  return objAllElement;
}

module.exports.getTableOrders = getTableOrders;
module.exports.loginWaiter = loginWaiter;
module.exports.addNewWaiter = addNewWaiter;
