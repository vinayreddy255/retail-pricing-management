import { Pricing } from "../types/pricing";

export default function PricingTable({
  rows = [],
  onEdit,
}: {
  rows?: Pricing[];
  onEdit?: (row: Pricing) => void;
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Store</th>
          <th>SKU</th>
          <th>Product</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row._id}>
            <td>{row.storeId}</td>
            <td>{row.sku}</td>
            <td>{row.productName}</td>
            <td>{row.price}</td>
            <td>
              <button onClick={() => onEdit && onEdit(row)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
