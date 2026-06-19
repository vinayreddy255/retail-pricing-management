import { useState } from "react";
import { PricingQuery } from "../types/pricing";

export default function SearchFilters({
  onSearch,
}: {
  onSearch: (q: PricingQuery) => void;
}) {
  const [storeId, setStoreId] = useState("");
  const [sku, setSku] = useState("");
  const [productName, setProductName] = useState("");

  return (
    <div style={{ marginTop: 12 }}>
      <input
        placeholder="Store ID"
        value={storeId}
        onChange={(e) => setStoreId(e.target.value)}
        style={{ marginRight: 8 }}
      />

      <input
        placeholder="SKU"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
        style={{ marginRight: 8 }}
      />

      <input
        placeholder="Product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        style={{ marginRight: 8 }}
      />

      <button onClick={() => onSearch({ storeId, sku, productName })}>
        Search
      </button>
    </div>
  );
}
