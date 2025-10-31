import { SimulationResponse } from "./supabase";

/* eslint-disable @typescript-eslint/no-explicit-any */
function getBrandName(sku: string) {
  const parts = sku.split("_");
  const brandName = parts[0] + " " + parts[2];
  return brandName
};

function interpretMarketShift(result: SimulationResponse) {

  const elastictyPrediction = result["elasticity_based_prediction"];
  const ownChange = elastictyPrediction["predicted_volume_change_%"];
  const crossChanges = elastictyPrediction["cross_volume_changes_%"];

  const gainingFrom: { sku: string; change: number; }[] = [];
  const losingTo: { sku: string; change: any; }[] = [];
  let totalGain = 0;
  let totalLoss = 0;

  Object.entries(crossChanges).forEach(([sku, change]) => {
    const brand = getBrandName(sku);
    if (ownChange > 0 && change < 0) {
      // You gain from this competitor
      gainingFrom.push({ sku: brand, change: Math.abs(change) });
      totalGain += Math.abs(change);
    } else if (ownChange < 0 && change > 0) {
      // You lose to this competitor
      losingTo.push({ sku: brand, change });
      totalLoss += change;
    }
  });

  return {
    ownChange,
    gainingFrom,
    losingTo,
    totalGain: totalGain.toFixed(2),
    totalLoss: totalLoss.toFixed(2),
    summary:
      ownChange > 0
        ? `${result.productName} is gaining volume +${ownChange}% from ${gainingFrom.map(
          (c) => `${c.sku} (${c.change.toFixed(1)}%)`
        ).join(", ")}.`
        : ownChange < 0
          ? `${result.productName} is losing volume (${ownChange}%) to ${losingTo.map(
            (c) => `${c.sku} (${c.change.toFixed(1)}%)`
          ).join(", ")}.`
          : "No significant market share change detected."
  };
}


export default interpretMarketShift;