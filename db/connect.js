const mongoose = require('mongoose');

module.exports.func = func = () => {
  try {
    mongoose.connect(
      process.env.MONGO_URI,
      { useNewUrlParser: true }
      // { useUnifiedTopology: true },
      // { useMongoClient: true }
    );
  } catch (error) {
    console.log(error);
  }
};
