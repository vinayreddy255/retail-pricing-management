const Pricing = require("../models/Pricing");
const csvProcessor = require("../services/csvProcessor");

exports.uploadCSV = async (req, res) => {
  const records = await csvProcessor(req.file.path);

  await Pricing.insertMany(records);

  res.json({
    success: true,
    count: records.length,
  });
};

exports.getPricing = async (req, res) => {
  const { storeId, sku, productName } = req.query;

  let filter = {};

  if (storeId) filter.storeId = storeId;
  if (sku) filter.sku = sku;

  if (productName) {
    filter.productName = {
      $regex: productName,
      $options: "i",
    };
  }

  const data = await Pricing.find(filter);

  res.json(data);
};

exports.updatePricing = async (req, res) => {
  const updated = await Pricing.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(updated);
};
