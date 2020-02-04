const router = require('express').Router();
const categoriesController = require('../../controller/menuController/categoriesController');

router.post('/categories', async (req, res) => {
  let category = await categoriesController.createCategory(req);
  res.send(category);
});

router.get('/categories/:id', async (req, res) => {
  let itemsToSend = await categoriesController.getCategoryById(req.params.id);
  res.send(itemsToSend);
});

router.get('/categories', async (req, res) => {
  let categories = await categoriesController.getAllCategories();
  res.send(categories);
});

router.post('/categories/search', async (req, res) => {
  console.log(req.body);
  let categories = await categoriesController.searchCategory(req.body.name);
  res.send(categories);
});

router.post('/categories/updateItems', async (req, res) => {
  let category = await categoriesController.addNewItemsToCategory(req.body.id, req.body.newItems);
  res.send(category);
});
module.exports = router;
