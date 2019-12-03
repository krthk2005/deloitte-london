const mongoose = require("mongoose");

const VillaSchema = mongoose.Schema({
  villa_name: {
    type: String,
    required: true
  },
  city_name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Villa = (module.exports = mongoose.model("Villa", VillaSchema));
