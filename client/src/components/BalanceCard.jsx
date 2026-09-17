import { useState, useEffect } from "react";
import { getWallet, depositMoney, withdrawMoney } from "../services/api";

const BalanceCard = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const loadBalance = async () => {
      try {
        const res = await getWallet();
        setBalance(res.data.balance);
      } catch (err) {
        console.error(err);
      }
    };

    loadBalance();
  }, []);

  const handleDeposit = async () => {
    if (!amount) return;

    try {
      await depositMoney(Number(amount));
      setAmount("");

      const res = await getWallet();
      setBalance(res.data.balance);
    } catch (err) {
      console.error(err);
    }
  };

  const handleWithdraw = async () => {
    if (!amount) return;

    try {
      await withdrawMoney(Number(amount));
      setAmount("");

      const res = await getWallet();
      setBalance(res.data.balance);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow flex justify-between items-center">
      <div className="w-full">
        <h2 className="text-gray-400">Total Balance</h2>

        <h1 className="text-3xl font-bold text-green-400">
          ₹ {balance}
        </h1>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-4 w-full p-2 rounded bg-gray-700 outline-none"
        />

        <div className="flex gap-3 mt-4">
          <button
            onClick={handleDeposit}
            className="bg-green-500 px-4 py-2 rounded"
          >
            Deposit
          </button>

          <button
            onClick={handleWithdraw}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="bg-gray-700 p-4 rounded-xl text-sm ml-6">
        <p>**** **** 1234</p>
        <p className="text-gray-400 mt-2">Visa Card</p>
      </div>
    </div>
  );
};

export default BalanceCard;