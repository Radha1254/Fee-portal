const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema({
  name: String,
  fatherName: String,
  scholarNo: String,
  program: String,
  branch: String,
  semester: String,
  amount: Number,
  userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
},
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Payment", paymentSchema);