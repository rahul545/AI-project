import { QueryType } from "../constants/userQueries";

export function detectQuestion(text: string) {
  const q = text.toLowerCase();

  if ((q.includes("increase") || q.includes("decrease")) && q.includes("price") && q.includes("share")) {
    return QueryType.MARKET_SHARE_CHANGE;
  }

  if (q.includes("price pack") || q.includes("ppa") || q.includes("architecture")) {
    return QueryType.PRICE_PACK_ARCHITECTURE
  }

  if (q.includes("sku") && (q.includes("compare") || q.includes("insights"))) {
    return QueryType.SKU_INSIGHTS
  }

  return null;
}
