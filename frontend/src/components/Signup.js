import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
 const navigate = useNavigate();
 const [form, setForm] = useState({
   username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 
   const handleSignup = async () => {
     if (!form.username || !form.email || !form.password) {
      alert("Fill all fields");
      return;
    }
    try {
      await axios.post(
        "http://localhost:5000/api/auth/signup",
        form 
      );

      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
     <div style={styles.container}>
      <div style={styles.card}>
        <h2>Create Account</h2>

        <input
          style={styles.input}
          name="username"
          placeholder="Username"
          value={form.username}
       onChange={handleChange}        
       />

        <input
          style={styles.input}
          name="email"
          type="email"
          placeholder="email"
          value={form.email}
            onChange={handleChange}
            />


        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
         onChange={handleChange}
          />


        <button style={styles.button} onClick={handleSignup}>Signup</button>

        <p>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f6fa",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
  },
};

export default Signup;