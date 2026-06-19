const mongoose = require("mongoose");

const UploadHistorySchema = new mongoose.Schema(
  {
    fileName: String,
    totalRecords: Number,
    uploadedAt: Date,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("UploadHistory", UploadHistorySchema);
