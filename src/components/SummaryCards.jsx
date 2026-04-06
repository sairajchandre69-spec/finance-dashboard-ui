import "../styles/SummaryCards.css";

export default function SummaryCards() {
  const cards = [
    {
      title: "Total Balance",
      amount: "₹1,20,000",
      change: "+12.5%",
    },
    {
      title: "Income",
      amount: "₹75,000",
      change: "+8.2%",
    },
    {
      title: "Expenses",
      amount: "₹55,000",
      change: "-4.1%",
    },
  ];

  return (
    <div className="cards">
      {cards.map((item, index) => (
        <div className="card-box" key={index}>
          <p className="card-name">{item.title}</p>
          <h2 className="card-value">{item.amount}</h2>
          <span className="card-change">{item.change}</span>
        </div>
      ))}
    </div>
  );
}