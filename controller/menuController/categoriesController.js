const Item = require('../../models/menu/item');
const Category = require('../../models/menu/category');

async function createCategory(req) {
  var categoryToAdd = new Category({
    name: req.body.name,
    items: req.body.items
  });
  let save = await categoryToAdd.save();
  return save;
}

async function getAllCategories() {
  try {
    let categories = await Category.find({});
    let tempMas = [];
    for (let i = 0; i < categories.length; i++) {
      tempMas.push({
        name: categories[i].name,
        id: categories[i]._id
      });
    }
    return tempMas;
  } catch (error) {
    console.log(error);
  }
}

async function getCategoryById(id) {
  let itemsToSend = [];
  let categ = await Category.findOne({ _id: id });
  for (let index = 0; index < categ.items.length; index++) {
    let it = await Item.findOne({ _id: categ.items[index] });
    if (it != null) {
      itemsToSend.push(it);
    } else {
      console.log('error 39');
    }
  }
  return itemsToSend;
}
async function searchCategory(name) {
  const searchRegExp = RegExp('^' + name + '.*', 'ig');
  let categ = await Category.find({ name: searchRegExp });
  let mas = [];
  if (categ != null) {
    categ.forEach((element) => {
      let temp = {
        name: element.name,
        id: element._id
      };
      mas.push(temp);
    });
    return mas;
  } else {
    return null;
  }
}

async function addNewItemsToCategory(id, itemsToAdd) {
  // let category = await Category.find({ _id: id });
  // console.log(category.items);
  // for (let i = 0; i < category.items.length; i++) {
  //   itemsToAdd.push(category.items[i]);
  // }
  let updatedCat = await Category.findOneAndUpdate(
    { _id: id },
    {
      $set: { items: itemsToAdd }
    }
  );
  if (updatedCat != null) {
    console.log(updatedCat);
    return updatedCat;
  } else {
    console.log('Error in categoriesController');
  }
}

module.exports.createCategory = createCategory;
module.exports.getAllCategories = getAllCategories;
module.exports.getCategoryById = getCategoryById;
module.exports.searchCategory = searchCategory;
module.exports.addNewItemsToCategory = addNewItemsToCategory;
