

export enum QueryType {
  MARKET_SHARE_CHANGE = "MARKET_SHARE_CHANGE",
  PRICE_PACK_ARCHITECTURE = "PRICE_PACK_ARCHITECTURE",
  SKU_INSIGHTS = "SKU_INSIGHTS",
}

export type UserQuery = {
  label: string;
  value: QueryType;
}


export const userQueries = [
  { label: 'If I increase the price of my product by 5%, how will my market share change?', value: QueryType.MARKET_SHARE_CHANGE },
  { label: 'Visualise the Price Pack Architecture for my brand', value: QueryType.PRICE_PACK_ARCHITECTURE },
  { label: 'What are the SKU whitespaces for my brand as compared to my closest competitors?', value: QueryType.SKU_INSIGHTS },
  // 'What happens if we launch a new product in Q2?',
  // 'How will reducing marketing spend by 20% affect sales?',
];
