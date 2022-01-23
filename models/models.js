const mongoose = require("mongoose");

const CreateSchema = new mongoose.Schema({
  Current_sales: {
    type:Number,
    required: true,
  },
  Target_sales: {
    type: Number,
    default: 0,
  },
  ID: {
    type:String,
    required: true,
  },
  Progress_per: {
    type: Number,
    default: 0,
  },
  Bar_Colour: {
    type:String,
    required: true,
  },
  Category_name: {
    type:String,
    required: true,
  },
  Progress_label: {
    type:String,
    required: true,
  }
});

const Create = mongoose.model("create", CreateSchema);

module.exports = Create;