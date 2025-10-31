import React from "react";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import cemResults from "../constants/cem_results";


export default function CEMSummary() {
  const result = cemResults[0];

  return (
    <div className="">
      <Card className="shadow-md border border-gray-200 rounded-2xl">
        <div className="flex flex-col gap-3 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Consumer Elasticity Modifier Summary
          </h2>

          <div className="text-lg flex items-center gap-3">
            <span className="text-gray-600 font-medium">CEM Score:</span>
            <span className="text-lg font-bold text-blue-600">
              {result.cem.toFixed(3)}
            </span>
          </div>

          <p className="text-gray-700 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400 italic">
            {result.interpretation}
          </p>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Top Contributors to CEM
        </h3>

        <DataTable
          value={result.top_indicators}
          stripedRows
          className="rounded-xl overflow-hidden shadow-sm"
          tableClassName="min-w-full"
        >
          <Column
            field="indicator"
            header="Indicator"
            bodyClassName="font-medium text-gray-800"
          />
          <Column
            field="value"
            header="Index"
            body={(rowData) => rowData.value.toFixed(3)}
            bodyClassName="text-center"
          />
          <Column
            field="difference"
            header="Impact Weight"
            body={(rowData) => rowData.difference.toFixed(3)}
            bodyClassName="text-center"
          />
          <Column
            field="rank"
            header="Rank"
            bodyClassName="text-center"
          />
        </DataTable>
      </Card>
    </div>
  );
}
