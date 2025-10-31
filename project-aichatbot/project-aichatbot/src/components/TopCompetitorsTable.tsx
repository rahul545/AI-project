import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { top_5_competitors } from "../constants/top_competitors";

const TopCompetitorsTable = () => {
  if (!top_5_competitors || top_5_competitors.length === 0) {
    return (
      <div className="text-center text-gray-500 py-6">
        No competitor data available
      </div>
    );
  }

  // // Optional: Index column template
  // const indexTemplate = (_rowData, { rowIndex }) => rowIndex + 1;

  // // Optional: Colored badge for price per kg
  // const priceTemplate = (rowData) => {
  //   const color =
  //     rowData.price_per_kg < 40
  //       ? "bg-green-100 text-green-800"
  //       : rowData.price_per_kg > 45
  //         ? "bg-red-100 text-red-800"
  //         : "bg-yellow-100 text-yellow-800";

  //   return (
  //     <span
  //       className={`px-3 py-1 text-sm font-medium rounded-full ${color}`}
  //     >
  //       ₹{rowData.price_per_kg}
  //     </span>
  //   );
  // };

  return (
    <div className="card p-4 bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl border border-white/20">
      <h3 className="text-lg font-semibold mb-4 text-white">
        Top 5 Competitors by Price per Kg
      </h3>

      <DataTable
        value={top_5_competitors}
        stripedRows
        responsiveLayout="scroll"
        // paginator
        // rows={5}
        className="text-sm"
      >
        {/* <Column header="#" body={indexTemplate} style={{ width: "4rem" }} /> */}
        <Column field="competitor" header="Competitor" />
        <Column
          field="price_per_kg"
          header="Price per Kg (₹)"
        // body={priceTemplate}
        // sortable
        />
      </DataTable>
    </div>
  );
};

export default TopCompetitorsTable;
