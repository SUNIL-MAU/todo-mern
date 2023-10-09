const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const username = encodeURIComponent(process.env.MONDGODB_USER);
    const password = encodeURIComponent(process.env.PASSWORD);
    const uri = `mongodb+srv://${username}:${password}@cluster-todo.cqkxs1p.mongodb.net/todo_db`;
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
