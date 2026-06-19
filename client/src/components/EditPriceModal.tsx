import React, { useEffect, useState } from "react";
import { Pricing } from "../types/pricing";

export default function EditPriceModal({
  row,
  onClose,
  onSave,
}: {
  row: Pricing | null;
  onClose: () => void;
  onSave: (updated: Partial<Pricing> & { _id: string }) => void;
}) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (row) {
      setProductName(row.productName || "");
      setPrice(row.price || 0);
    }
  }, [row]);

  if (!row) return null;

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)" }}>
      <div
        style={{
          background: "white",
          padding: 20,
          maxWidth: 400,
          margin: "40px auto",
        }}
      >
        <h3>Edit Pricing</h3>

        <div>
          <label>Store ID</label>
          <div>{row.storeId}</div>
        </div>

        <div>
          <label>SKU</label>
          <div>{row.sku}</div>
        </div>

        <div>
          <label>Product Name</label>
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <button
            onClick={() => onSave({ _id: row._id, productName, price })}
            style={{ marginRight: 8 }}
          >
            Save
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
