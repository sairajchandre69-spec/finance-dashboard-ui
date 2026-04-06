import "../styles/TransactionsTable.css";
import { useState } from "react";


export default function TransactionsTable() {
 const mockTransactions = [
  {
    id: 1,
    date: "05 Apr 2026",
    title: "Salary",
    amount: 30000,
    category: "Salary",
    type: "income",
  },
  {
    id: 2,
    date: "03 Apr 2026",
    title: "Groceries",
    amount: 5000,
    category: "Food",
    type: "expense",
  },
  {
    id: 3,
    date: "01 Apr 2026",
    title: "Travel",
    amount: 3000,
    category: "Travel",
    type: "expense",
  },
];
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  let filteredTransactions = mockTransactions.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      filterType === "all" || item.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="table-wrapper">
      <div className="table-toolbar">
        <h2 className="table-heading">Transactions</h2>

        <div className="table-actions">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>
                  <span
                    className={
                      item.type === "income"
                        ? "type-badge income"
                        : "type-badge expense"
                    }
                  >
                    {item.type}
                  </span>
                </td>
                <td>₹{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}