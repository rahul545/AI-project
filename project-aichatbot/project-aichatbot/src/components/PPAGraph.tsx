import React, { useEffect, useState } from "react";
import Plot, { PlotParams } from "react-plotly.js";

interface PPAGraphProps {
  brand: string;
  segment: string;
  flavor: string;
}

// Define the expected shape of API response
interface PlotlyResponse {
  data: PlotParams["data"];
  layout: PlotParams["layout"];
}

const PPAGraph: React.FC<PPAGraphProps> = ({ brand, segment, flavor }) => {
  const [plotData, setPlotData] = useState<PlotlyResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGraphData() {
      try {
        const response = await fetch(
          `http://localhost:8000/price-graph?brand=${encodeURIComponent(brand)}&segment=${encodeURIComponent(segment)}&flavor=${encodeURIComponent(flavor)}`
        );
        if (!response.ok) throw new Error("Failed to fetch graph data");

        const data: PlotlyResponse = await response.json();
        setPlotData(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load graph data. Please try again.");
      }
    }

    fetchGraphData();
  }, [brand, segment, flavor]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!plotData) return <p>Loading chart...</p>;

  return (
    <div className="mt-6 w-3xl max-w-3xl mx-auto h-[600px]">
      <Plot
        data={plotData.data}
        layout={plotData.layout}
        style={{ width: "100%", height: "100%" }}
        config={{ responsive: true }}
      />
    </div>
  );
};

export default PPAGraph
