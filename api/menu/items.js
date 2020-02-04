const router = require('express').Router();
const itemsController = require('../../controller/menuController/itemsController');

router.get('/items', async (req, res) => {
  let items = await itemsController.getAllItems();
  res.send(items);
});

router.get('/items/:id', async (req, res) => {
  let item = await itemsController.getItemById(req.params.id);
  res.send(item);
});

router.post('/items', async (req, res) => {
  let item = await itemsController.saveToDB(req);
  res.send(item);
});

router.delete('/items/:id/delete', async (req, res) => {
  let deleteQuery = await itemsController.deleteFromDB(req);

  res.send(deleteQuery);
});
router.post('/items/search', async (req, res) => {
  let result = await itemsController.searchByName(req.body.str, req.body.kat);
  res.send(result);
});
module.exports = router;
