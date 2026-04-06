    import "../styles/RoleBasedDashboard.css";
    import { useState } from "react";


    export default function RoleBasedDashboard() {
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
    const [role, setRole] = useState("Admin");

    const totalExpense = mockTransactions
        .filter((item) => item.type === "expense")
        .reduce((acc, item) => acc + item.amount, 0);

    const totalIncome = mockTransactions
        .filter((item) => item.type === "income")
        .reduce((acc, item) => acc + item.amount, 0);

    const highestSpending = mockTransactions
        .filter((item) => item.type === "expense")
        .sort((a, b) => b.amount - a.amount)[0];

    return (
        <div className="role-wrapper">
        {/* Role Toggle */}
        <div className="role-top">
            <h2>Role Based Dashboard</h2>

            <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="role-select"
            >
            <option value="Admin">Admin</option>
            <option value="Viewer">Viewer</option>
            </select>
        </div>

        {/* Insights */}
        <div className="insights-grid">
            <div className="insight-card">
            <p>Total Income</p>
            <h3>₹{totalIncome}</h3>
            </div>

            <div className="insight-card">
            <p>Total Expense</p>
            <h3>₹{totalExpense}</h3>
            </div>

            <div className="insight-card">
            <p>Highest Spending</p>
            <h3>{highestSpending?.category}</h3>
            </div>
        </div>

        {/* Role Based UI */}
        <div className="role-actions">
            {role === "Admin" ? (
            <>
                <button className="admin-btn">+ Add Transaction</button>
                <button className="edit-btn">Edit Transactions</button>
            </>
            ) : (
            <p className="viewer-text">
                Viewer role can only view financial data.
            </p>
            )}
        </div>
        </div>
    );
    }