require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const pricingRoutes = require("./routes/pricingRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/pricing", pricingRoutes);

app.listen(5000, () => {
  console.log("Server Running");
});
