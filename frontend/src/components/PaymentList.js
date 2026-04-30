import jsPDF from "jspdf";

function PaymentList({ payments, deletePayment }) {

  const downloadReceipt = (p) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const numberToWords = (num) => {
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];
  if (num < 100) return tens[Math.floor(num / 10)] + " " + ones[num % 10];

  if (num < 1000) {
    return ones[Math.floor(num / 100)] + " Hundred " + numberToWords(num % 100);
  }

  if (num < 100000) {
    return numberToWords(Math.floor(num / 1000)) + " Thousand " + numberToWords(num % 1000);
  }

  return num;
};
doc.text(
  `Amount in Words: ${numberToWords(Number(p.amount))} Rupees Only`,
  20,
  200
);
  // Header
  doc.setFontSize(16);
  doc.text("VIKRANT UNIVERSITY", pageWidth / 2, 20, { align: "center" });

  doc.setFontSize(10);
  doc.text("Gwalior, Madhya Pradesh", pageWidth / 2, 28, { align: "center" });

  // Title
  doc.setFontSize(14);
  doc.text("FEE RECEIPT", pageWidth / 2, 40, { align: "center" });

  // Line
  doc.line(20, 45, 190, 45);

  // Info
  doc.setFontSize(10);
  doc.text(`Date: ${new Date(p.date).toLocaleDateString()}`, 20, 55);
  doc.text(`Receipt No: ${p._id.slice(-5)}`, 140, 55);

  // Student Info
  doc.text(`Name: ${p.name}`, 20, 70);
  doc.text(`Father Name: ${p.fatherName}`, 20, 80);
  doc.text(`Scholar No: ${p.scholarNo}`, 20, 90);
  doc.text(`Program: ${p.program}`, 20, 100);
  doc.text(`Branch: ${p.branch}`, 20, 110);
  doc.text(`Semester: ${p.semester}`, 20, 120);

  // Line
  doc.line(20, 130, 190, 130);

  // Table Header
  doc.text("Particular", 20, 140);
  doc.text("Amount", 150, 140);

  doc.line(20, 145, 190, 145);

  // Data
  doc.text("Tuition Fees", 20, 155);
  doc.text(`₹${p.amount}`, 150, 155);

  // Line
  doc.line(20, 165, 190, 165);

  // Total
  doc.setFontSize(12);
  doc.text(`Total Paid: ₹${p.amount}`, 20, 180);

  // Status
  doc.setFontSize(10);
  doc.text("Status: Paid", 20, 190);

  // Footer
  doc.text("Authorized Signature", 140, 210);

  doc.save(`Receipt_${p.name}.pdf`);
};
  return (
    <div style={{
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  marginBottom: "10px"
    }}>
      <h3>Payment History</h3>

    {payments.map((p) => (
  <div key={p._id} style={{ margin: "10px 0" }}>
    <p><strong>Name:</strong> {p.name}</p>
    <p><strong>Amount:</strong> ₹{p.amount}</p>
    <p><strong>Date:</strong> {new Date(p.date).toLocaleDateString()}</p>
    <p><strong>Status:</strong> <span style={{ color: "green" }}>Paid</span></p>

    <button onClick={() => deletePayment(p._id)}>
      Delete
    </button>

    <button onClick={() => downloadReceipt(p)}>
      Download Receipt
    </button>
  </div>
))}
    </div>
  );
}

export default PaymentList;