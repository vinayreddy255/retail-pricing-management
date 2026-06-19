const csv = require("csv-parser");
const fs = require("fs");

module.exports = (path) =>
  new Promise((resolve) => {
    const records = [];

    fs.createReadStream(path)
      .pipe(csv())
      .on("data", (row) => {
        records.push({
          storeId: row["Store ID"],
          sku: row["SKU"],
          productName: row["Product Name"],
          price: Number(row["Price"]),
          date: row["Date"],
        });
      })
      .on("end", () => {
        resolve(records);
      });
  });
