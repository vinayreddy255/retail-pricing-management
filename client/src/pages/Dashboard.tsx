import { useEffect, useState } from "react";
import CsvUpload from "../components/CsvUpload";
import SearchFilters from "../components/SearchFilters";
import PricingTable from "../components/PricingTable";
import EditPriceModal from "../components/EditPriceModal";
import { api } from "../api/pricingApi";
import { Pricing, PricingQuery } from "../types/pricing";

export default function Dashboard() {
  const [rows, setRows] = useState<Pricing[]>([]);
  const [selected, setSelected] = useState<Pricing | null>(null);

  const fetchData = async (query: PricingQuery = {}) => {
    const params: any = {};
    if (query.storeId) params.storeId = query.storeId;
    if (query.sku) params.sku = query.sku;
    if (query.productName) params.productName = query.productName;

    const res = await api.get<Pricing[]>("/", { params });
    setRows(res.data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (q: PricingQuery) => fetchData(q);

  const handleSave = async (updated: Partial<Pricing> & { _id: string }) => {
    await api.put(`/${updated._id}`, {
      productName: updated.productName,
      price: updated.price,
    });
    setSelected(null);
    fetchData();
  };

  return (
    <>
      <h1>Retail Pricing Dashboard</h1>

      <CsvUpload onUploaded={() => fetchData()} />

      <SearchFilters onSearch={handleSearch} />

      <PricingTable rows={rows} onEdit={(r: Pricing) => setSelected(r)} />

      <EditPriceModal
        row={selected}
        onClose={() => setSelected(null)}
        onSave={handleSave}
      />
    </>
  );
}
