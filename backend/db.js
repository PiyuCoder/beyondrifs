const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then((res) => console.log("connect to db"))
    .catch((err) => console.log(err.message));
};

module.exports = connectDb;
