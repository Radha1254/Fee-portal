function SummaryCards({ totalFees, paidAmount, dueAmount }) {
  return (
    <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
      <div style={{ padding: "10px", border: "1px solid black" }}>
        <h4>Total Fees</h4>
        <p>₹{totalFees}</p>
      </div>

      <div style={{ padding: "10px", border: "1px solid black" }}>
        <h4>Paid</h4>
        <p>₹{paidAmount}</p>
      </div>

      <div style={{ padding: "10px", border: "1px solid red" }}>
        <h4>Due</h4>
        <p style={{ color: "red", fontWeight: "bold" }}>₹{dueAmount}</p>
      </div>
    </div>
  );
}

export default SummaryCards;