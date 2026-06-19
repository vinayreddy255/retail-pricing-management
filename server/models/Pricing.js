const mongoose = require("mongoose");

const PricingSchema = new mongoose.Schema(
  {
    storeId: String,
    sku: String,
    productName: String,
    price: Number,
    date: Date,
  },
  {
    timestamps: true,
  },
);

PricingSchema.index({
  storeId: 1,
  sku: 1,
  date: -1,
});

module.exports = mongoose.model("Pricing", PricingSchema);
