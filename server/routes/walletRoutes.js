import express from "express";
import Wallet from "../models/wallet.js"
import Transaction from "../models/transaction.js";

const router = express.Router();

// ✅ Get Wallet Balance
router.get("/", async (req, res) => {
  let wallet = await Wallet.findOne();

  if (!wallet) {
    wallet = await Wallet.create({ balance: 0 });
  }

  res.json(wallet);
});

// ✅ Deposit Money
router.post("/deposit", async (req, res) => {
    console.log(req.body);
  const { amount } = req.body;

  let wallet = await Wallet.findOne();

  if (!wallet) {
    wallet = await Wallet.create({ balance: 0 });
  }

  wallet.balance += amount;
  await wallet.save();

  await Transaction.create({
    type: "deposit",
    amount
  });

  res.json(wallet);
});

// ✅ Withdraw Money
router.post("/withdraw", async (req, res) => {
  const { amount } = req.body;

  let wallet = await Wallet.findOne();

  if (!wallet || wallet.balance < amount) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  wallet.balance -= amount;
  await wallet.save();

  await Transaction.create({
    type: "withdraw",
    amount
  });

  res.json(wallet);
});

export default router;