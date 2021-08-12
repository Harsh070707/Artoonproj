var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/signupdb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

var userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  password: { type: String, select: false },
  email: String,
});

module.exports = mongoose.model("User", userSchema);
