import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
// Wallet
export const getWallet = () => API.get("/wallet");

export const depositMoney = (amount) => API.post("/wallet/deposit", { amount });

export const withdrawMoney = (amount) =>
  API.post("/wallet/withdraw", { amount });

// Transactions
export const getTransactions = () => API.get("/transactions");

// Banks
export const getBanks = () => API.get("/banks");
export default API;
