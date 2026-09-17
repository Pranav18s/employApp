import express from "express";
import Wallet from "../models/wallet.js";
import Transaction from "../models/transaction.js";
import BankAccount from "../models/bankAccount.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const wallet = await Wallet.findOne();
    const transactions = await Transaction.find().sort({ date: -1 }).limit(5);
    const banks = await BankAccount.find();

    res.json({
      balance: wallet?.balance || 0,
      transactions,
      banks
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;