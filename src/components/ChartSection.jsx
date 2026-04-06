import '../styles/ChartSection.css'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
} from "recharts";


export default function ChartsSection() {

    const balanceData = [
        { month: "Jan", balance: 70000 },
        { month: "Feb", balance: 85000 },
        { month: "Mar", balance: 95000 },
        { month: "Apr", balance: 120000 },
    ];

    const spendData = [
        { name: "Rent", value: 40 },
        { name: "Food", value: 25 },
        { name: "Travel", value: 20 },
        { name: "Others", value: 15 },
    ];

    const colors = ["#2563eb", "#16a34a", "#f59e0b", "#ef4444"];
    return (
        <div className="chart-grid">
            <div className="box">
                <h3 className="box-title">Balance Trend</h3>

                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={balanceData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="balance"
                            stroke="#2563eb"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="box">
                <h3 className="box-title">Spending Breakdown</h3>

                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie data={spendData} dataKey="value" outerRadius={80} label>
                            {spendData.map((item, index) => (
                                <Cell key={index} fill={colors[index]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}