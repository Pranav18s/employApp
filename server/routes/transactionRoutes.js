import express from "express";
import Transaction from "../models/transaction.js";

const router = express.Router();

// ✅ Get all transactions
router.get("/", async (req, res) => {
  const transactions = await Transaction.find().sort({ date: -1 });
  res.json(transactions);
});

export default router;