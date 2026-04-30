const express = require("express");
const router = express.Router();
const Payment = require("../models/Payment");
const auth = require("../middleware/auth");


// CREATE
router.post("/payment", auth, async (req, res) => {
 try {
  const body = req.body || {};
  const {
      name,
      fatherName,
      scholarNo,
      program,
      branch,
      semester,
      amount
    } = body;


    if (req.user.role !== "admin" && name !== req.user.username) {
  return res.status(403).send("You cannot use different name than login");
}
    const payment = new Payment({
      ...body,
      userId: req.user.id,
      name: req.user.username
    });

    await payment.save();

    res.json(payment);
  } catch (err) {
    res.status(500).send("Error saving payment");
  }
});
// READ (all)
router.get("/payments", auth, async (req, res) => {
  const payments = await Payment.find({ userId: req.user.id });
  res.json(payments);
});

// DELETE
router.delete("/payment/:id", auth, async (req, res) => {

  const payment = await Payment.findById(req.params.id);

  if (!payment) {
    return res.status(404).send("Not found");
  }

  // 🔥 check ownership
  if (payment.userId.toString() !== req.user.id) {
    return res.status(403).send("Not allowed");
  }

  await Payment.findByIdAndDelete(req.params.id);

  res.send("Deleted");
});

module.exports = router;