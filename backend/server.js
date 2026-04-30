require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const paymentRoutes = require("./routes/paymentRoutes");
const authRoutes = require("./routes/auth");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// routes
app.use("/api/auth", authRoutes);
app.use("/api", paymentRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});