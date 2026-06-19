import { useState } from "react";
import { api } from "../api/pricingApi";

export default function CsvUpload({ onUploaded }: { onUploaded?: () => void }) {
  const [file, setFile] = useState<File | undefined>();

  const upload = async () => {
    if (!file) return alert("Select a CSV file first");

    const formData = new FormData();

    formData.append("file", file!);

    await api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    alert("Uploaded");
    onUploaded && onUploaded();
  };

  return (
    <>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files?.[0])}
      />

      <button onClick={upload}>Upload CSV</button>
    </>
  );
}
