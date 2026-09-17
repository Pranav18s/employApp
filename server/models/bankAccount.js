import mongoose from "mongoose";

const bankSchema = new mongoose.Schema({
  bankName: String,
  accountNumber: String,
  balance: Number
});

export default mongoose.model("BankAccount", bankSchema);