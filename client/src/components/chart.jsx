import { useEffect, useState } from "react";
import { getTransactions } from "../services/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await getTransactions();

      let balance = 0;

      const formatted = res.data
        .reverse()
        .map((tx, index) => {
          if (tx.type === "deposit") balance += tx.amount;
          else balance -= tx.amount;

          return {
            name: index + 1,
            balance
          };
        });

      setData(formatted);
    };

    loadData();
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow h-[300px]">
      <h2 className="text-xl font-semibold mb-4">Activity Chart</h2>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#22c55e" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;