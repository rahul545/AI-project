/// <reference types="vite/client" />

type Simulation = {
  id: string;
  query: string;
  response: SimulationResponse | null;
  status: 'pending' | 'completed' | 'error';
  error_message: string | null;
  created_at: string;
  completed_at: string | null;
};

type ElasticityBasedPrediction = {
  own_sku_id: string;
  own_price_old: number;
  own_price_new: number;
  "price_change_%": number;
  own_elasticity: number;
  "predicted_volume_change_%": number;
  "cross_volume_changes_%": Record<string, number>;
}
type PredictedShareChangeResult = [
  {
    SKU_ID: string;
    product_name: string;
    BRAND: string;
    Base_Volume: number;
    Predicted_Volume_Adjusted: number;
    "Base_Share_%": number;
    "New_Share_%": number;
    "Share_Diff_%": number;
    price_change_pct: string;
  },
  {
    elasticity_based_prediction: ElasticityBasedPrediction
  }
];



