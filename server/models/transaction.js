import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["deposit", "withdraw"]
  },
  amount: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Transaction", transactionSchema);