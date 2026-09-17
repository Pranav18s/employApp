import express from "express";
import BankAccount from "../models/bankAccount.js";

const router = express.Router();

// ✅ Get all bank accounts
router.get("/", async (req, res) => {
  const accounts = await BankAccount.find();
  res.json(accounts);
});

// ✅ Add bank account
router.post("/add", async (req, res) => {
  const { bankName, accountNumber, balance } = req.body;

  const newAccount = await BankAccount.create({
    bankName,
    accountNumber,
    balance
  });

  res.json(newAccount);
});

export default router;