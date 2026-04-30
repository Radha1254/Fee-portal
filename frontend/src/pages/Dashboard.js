import Navbar from "../components/Navbar";
import SummaryCards from "../components/SummaryCards";
import PaymentForm from "../components/PaymentForm";
import PaymentList from "../components/PaymentList";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard({ setIsLoggedIn }) {
  const [payments, setPayments] = useState([]);

  const totalFees = 50000;
  const username = localStorage.getItem("username");

  const getAuthHeader = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });

  const fetchPayments = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/payments",
      getAuthHeader()
    );
    setPayments(res.data);
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const addPayment = async (data) => {
     const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:5000/api/payment",
      data,
      getAuthHeader()
    );
    fetchPayments();
  };

  const deletePayment = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/payment/${id}`,
      getAuthHeader()
    );
    fetchPayments();
  };

  const paidAmount = payments.reduce((sum, p) => sum + Number(p.amount), 0);
  const dueAmount = totalFees - paidAmount;

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <Navbar />

      {/*  Greeting */}
      <h3>Welcome, {username}</h3>

      {/* Logout */}
      <button
        onClick={() => {
          localStorage.clear();
          setIsLoggedIn(false);
        }}
      >
        Logout
      </button>

      <SummaryCards
        totalFees={totalFees}
        paidAmount={paidAmount}
        dueAmount={dueAmount}
      />

      <PaymentForm addPayment={addPayment} />

      <PaymentList
        payments={payments}
        deletePayment={deletePayment}
      />
    </div>
  );
}

export default Dashboard;