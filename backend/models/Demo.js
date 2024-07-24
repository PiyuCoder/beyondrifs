const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    time: {
      day: String,
      time: String,
      date: String,
      shift: String,
    },
    ageGroup: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Demo = new mongoose.model("Demo", demoSchema);

module.exports = Demo;
