const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup
router.post("/signup", async (req, res) => {
  try {

    const { username, password } = req.body;

    const bcrypt = require("bcrypt");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword
    });

    await user.save();

    res.send("Signup success");
  } catch (err) {
    res.status(500).send(err.message);    
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user){
  return res.status(400).send("User not found");
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid){
 return res.status(400).send("Wrong password");
  }
  //  Create token
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      scholarNo: user.scholarNo,
      branch: user.branch,
      semester: user.semester,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );


  res.json({ token });
});

module.exports = router;