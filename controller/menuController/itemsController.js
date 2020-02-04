const Item = require('../../models/menu/item');
const Category = require('../../models/menu/category');

async function getAllItems() {
  try {
    let item = await Item.find({});
    return item;
  } catch (error) {
    console.log(error);
  }
}

async function getItemById(id) {
  try {
    let item = await Item.findOne({ _id: id });
    return item;
  } catch (error) {
    console.log('Error');
  }
}

async function saveToDB(req) {
  var itemToAdd = new Item({
    name: req.body.name,
    category: req.body.category,
    quantity: req.body.quantity,
    price: req.body.price,
    description: req.body.description,
    variants: req.body.variants,
    tags: req.body.tags,
    modificators: req.body.modificators
  });
  let save = await itemToAdd.save();
  return save;
}

async function deleteFromDB(req) {
  try {
    await Item.deleteOne({ _id: req.params.id });
  } catch (error) {
    console.log(error);
  }
}
async function searchByName(name, category) {
  const searchRegExp = RegExp('^' + name + '.*', 'ig');
  let itemes = await Item.find({ name: { $regex: searchRegExp } });
  let mas = [];
  if (itemes != null) {
    itemes.forEach((element) => {
      if (element.category == category) {
        let temp = {
          name: element.name,
          price: element.price,
          id: element._id
        };
        mas.push(temp);
      }
    });
    return mas;
  } else {
    return null;
  }
}
module.exports.getAllItems = getAllItems;
module.exports.saveToDB = saveToDB;
module.exports.deleteFromDB = deleteFromDB;
module.exports.getItemById = getItemById;
module.exports.searchByName = searchByName;
