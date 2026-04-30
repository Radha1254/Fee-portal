import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password }
      );

      // ✅ store token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", username);
      localStorage.getItem("token") // store name

      setIsLoggedIn(true);
      alert("Login successful");
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
     <div style={styles.container}>
      <div style={styles.card}>
        <h2>Welcome Back</h2>

        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p>
          Don’t have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/signup")}>
            Signup
          </span>
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

export default Login;