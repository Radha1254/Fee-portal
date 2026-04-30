import { useState } from "react";

function PaymentForm({ addPayment }) {
  const username = localStorage.getItem("username"); 
  const [form, setForm] = useState({
    name: username || "",
    fatherName: "",
    scholarNo: "",
    program: "",
    branch: "",
    semester: "",
    amount: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {

    // ✅ VALIDATION (MOVED HERE)
    if (form.name !== username) {
      alert("You cannot use different name than login");
      return;
    }

    // ✅ check empty fields
    for (let key in form) {
      if (!form[key]) {
        alert("Fill all fields");
        return;
      }
    }


    addPayment(form);

    setForm({
      name: username,
      fatherName: "",
      scholarNo: "",
      program: "",
      branch: "",
      semester: "",
      amount: ""
    });
  };

  return (
    <div style={{
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  marginBottom: "20px",
  background: "white"
}}>
  <h3>Pay Fees</h3>
      <input name="name" placeholder="Name" value={form.name} readOnly onChange={handleChange} style={{
    padding: "8px",
    margin: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  }} />
      <input name="fatherName" placeholder="Father Name" value={form.fatherName} onChange={handleChange} style={{
    padding: "8px",
    margin: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  }} />
      <input name="scholarNo" placeholder="Scholar No" value={form.scholarNo} onChange={handleChange} style={{
    padding: "8px",
    margin: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  }} />
      <input name="program" placeholder="Program" value={form.program} onChange={handleChange} style={{
    padding: "8px",
    margin: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  }} />
      <input name="branch" placeholder="Branch" value={form.branch} onChange={handleChange} style={{
    padding: "8px",
    margin: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  }} />
      <input name="semester" placeholder="Semester" value={form.semester} onChange={handleChange} style={{
    padding: "8px",
    margin: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  }} />
      <input name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} style={{
    padding: "8px",
    margin: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  }} />

      <button 
  onClick={handleSubmit}
  style={{
  background: "#007bff",
  color: "white",
  padding: "8px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginLeft: "10px"
}}> Pay Now</button>
    </div>
  );
}

export default PaymentForm;