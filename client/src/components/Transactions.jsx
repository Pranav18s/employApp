import { useState, useEffect } from "react";
import { getTransactions } from "../services/api";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const res = await getTransactions();
        setTransactions(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    loadTransactions();
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow h-full">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>

      <div className="space-y-3 max-h-[400px] overflow-y-auto">
        {transactions.length === 0 ? (
          <p className="text-gray-400">No transactions yet</p>
        ) : (
          transactions.map((tx) => (
            <div
              key={tx._id}
              className="flex justify-between items-center bg-gray-700 p-3 rounded"
            >
              <span className="capitalize">{tx.type}</span>

              <span
                className={
                  tx.type === "deposit"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {tx.type === "deposit" ? "+" : "-"}₹{tx.amount}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Transactions;