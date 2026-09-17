import BalanceCard from "../components/BalanceCard";
import Transactions from "../components/Transactions";
import Chart from "../components/Chart";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="md:col-span-2 space-y-6">
          <BalanceCard />
          <Chart />
        </div>

        <div>
          <Transactions />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;