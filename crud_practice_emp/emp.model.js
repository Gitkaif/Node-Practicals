const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const empModel = new mongoose.model("empModel", empSchema);

module.exports = empModel;
