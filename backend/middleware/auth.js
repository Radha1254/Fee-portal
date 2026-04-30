const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(400).send("No token provided");
  }

  const token = authHeader.split(" ")[1]; // 🔥 FIX

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("JWT Error:", err.message);
    return res.status(400).send("Invalid token");
  }
};

module.exports = verifyToken;