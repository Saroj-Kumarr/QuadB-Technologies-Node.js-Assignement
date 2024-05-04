const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection success.")
  } catch (error) {
    console.log("Database connection failed.");
    console.log(error.message);

  }
};

module.exports = connectDatabase;
