const express = require("express");

const router = express.Router();

const {
  uploadCSV,
  getPricing,
  updatePricing,
} = require("../controllers/pricingController");

const upload = require("../middleware/uploadMiddleware");

router.post("/upload", upload.single("file"), uploadCSV);

router.get("/", getPricing);

router.put("/:id", updatePricing);

module.exports = router;
