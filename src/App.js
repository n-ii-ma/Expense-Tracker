import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";

const LOCAL_STORAGE_KEY = "expenseTracker.transactions";

function App() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState([]);

  // Get from Local Storage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    setTransactions(saved);
  }, []);

  // Set to Local Storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  // Add Transaction
  const addTransaction = (e) => {
    e.preventDefault();
    if (!text) return;

    setTransactions([
      ...transactions,
      {
        text: text,
        amount: +amount,
        id: uuidv4(),
      },
    ]);

    setText("");
    setAmount(0);
  };

  // Delete Transaction
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
        <AddTransaction
          text={text}
          setText={setText}
          amount={amount}
          setAmount={setAmount}
          addTransaction={addTransaction}
        />
      </div>
    </div>
  );
}

export default App;
