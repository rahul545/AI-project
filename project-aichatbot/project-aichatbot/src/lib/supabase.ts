import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Simulation = {
  id: string;
  query: string;
  response: SimulationResponse | null;
  status: 'pending' | 'completed' | 'error';
  error_message: string | null;
  created_at: string;
  completed_at: string | null;
};

export type SimulationResponse = {
  summary: string;
  productName: string;
  metrics: {
    label: string;
    value?: string | number;
    change?: string;
  }[];
  elasticity_based_prediction: ElasticityBasedPrediction;
  chartData?: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      color: string;
    }[];
  };
};
