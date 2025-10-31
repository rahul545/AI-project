import { supabase, type Simulation, type SimulationResponse } from '../lib/supabase';

export async function createSimulation(query: string): Promise<Simulation> {
  // try {
  //   const { data, error } = await supabase
  //     .from('simulations')
  //     .insert({ query, status: 'pending' })
  //     .select()
  //     .single();

  //   if (error) throw error;
  //   return data;
  // } catch (error) {
  console.warn('Database unavailable, creating in-memory simulation:');
  return {
    id: crypto.randomUUID(),
    query,
    response: null,
    status: 'pending',
    error_message: null,
    created_at: new Date().toISOString(),
    completed_at: null,
  };
  // }
}

export async function updateSimulationResult(
  id: string,
  response: SimulationResponse
): Promise<void> {
  try {
    const { error } = await supabase
      .from('simulations')
      .update({
        response,
        status: 'completed',
        completed_at: new Date().toISOString(),
      })
      .eq('id', id);

    if (error) throw error;
  } catch (error) {
    console.warn('Database unavailable, skipping result storage:', error);
  }
}

export async function updateSimulationError(
  id: string,
  errorMessage: string
): Promise<void> {
  try {
    const { error } = await supabase
      .from('simulations')
      .update({
        status: 'error',
        error_message: errorMessage,
        completed_at: new Date().toISOString(),
      })
      .eq('id', id);

    if (error) throw error;
  } catch (error) {
    console.warn('Database unavailable, skipping error storage:', error);
  }
}

export async function getRecentSimulations(limit = 10): Promise<Simulation[]> {
  try {
    const { data, error } = await supabase
      .from('simulations')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.warn('Database unavailable, returning empty history:', error);
    return [];
  }
}

export async function callN8nWorkflow(query: string): Promise<PredictedShareChangeResult | null> {
  const n8nWebhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

  if (!n8nWebhookUrl) {
    return null;
  }

  try {
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "user_input": query }),
    });

    if (!response.ok) {
      throw new Error(`N8N workflow failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.warn('N8N workflow unavailable, using mock data:', error);
    return null
  }
}

/*
{
    "SKU_ID": "PARLE-G_PARLE-G_GLUCOSE_GLUCOSE_Rs.5",
    "product_name": "PARLE-G GLUCOSE",
    "BRAND": "PARLE-G",
    "Base_Volume": 13413486.88184,
    "Predicted_Volume_Adjusted": 13064033.556644417,
    "Base_Share_%": 97.15240523977418,
    "New_Share_%": 94.62135336930552,
    "Share_Diff_%": -2.5310518704686586
}
*/
export function outputParser(agentOuput: PredictedShareChangeResult) {
  // const outputData = result.output;
  const outputData = agentOuput[0];
  const elasticity_based_prediction = agentOuput[1].elasticity_based_prediction;
  // console.log(outputData.price_change_pct, typeof (outputData.price_change_pct))
  const priceChangePct = Number(outputData.price_change_pct);
  const priceChange = Math.abs(priceChangePct);
  const priceChangeDirection = priceChangePct < 0 ? "decrease" : "increase";

  // Format product name nicely
  const formattedProduct = outputData.product_name
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase()); // e.g., "PARLE-G_GLUCOSE" → "Parle-G Glucose"

  // Round the share difference
  const shareChange = Math.abs(outputData["Share_Diff_%"]).toFixed(2);

  // Determine direction (loss or gain)
  const direction = outputData["Share_Diff_%"] < 0 ? "loss" : "gain";

  // Build the summary
  const summary = `A ${priceChange}% ${priceChangeDirection} on the price on ${formattedProduct}  would likely result in a ${shareChange}% ${direction} in market share over the next quarter, based on historical price & cross price elasticity , competitor positioning and external market triggers`;


  // 🧩 Convert it to React component input
  const simulationMetrics = [
    {
      label: "Projected Market Share",
      // value: `${outputData["New_Share_%"].toFixed(4)}%`,
      change: `${outputData["Share_Diff_%"].toFixed(4)}%`,
    },
    {
      label: "Projected volume change",
      change: `${elasticity_based_prediction['predicted_volume_change_%'].toFixed(1)}%`,
    },
  ];

  const response: SimulationResponse = {
    "summary": summary,
    metrics: simulationMetrics,
    productName: formattedProduct,
    elasticity_based_prediction
  }

  return response

}

// function generateMockResponse(query: string): SimulationResponse {
//   const isPriceIncrease = query.toLowerCase().includes('increase') && query.toLowerCase().includes('price');
//   const isMarketShare = query.toLowerCase().includes('market share');

//   if (isPriceIncrease && isMarketShare) {
//     return {
//       summary: 'A 5% price increase on Product X would likely result in a 2.3% loss in market share over the next quarter, based on historical price elasticity data and competitor positioning.',
//       metrics: [
//         { label: 'Current Market Share', value: '28.5%', change: undefined },
//         { label: 'Projected Market Share', value: '26.2%', change: '-2.3%' },
//         { label: 'Revenue Impact', value: '+$1.2M', change: '+3.1%' },
//         { label: 'Customer Retention', value: '91.2%', change: '-1.8%' },
//       ],
//       chartData: {
//         labels: ['Current', 'Month 1', 'Month 2', 'Month 3'],
//         datasets: [
//           {
//             label: 'Market Share (%)',
//             data: [28.5, 27.8, 26.9, 26.2],
//             color: '#3b82f6',
//           },
//           {
//             label: 'Revenue ($M)',
//             data: [38.5, 39.2, 39.7, 39.7],
//             color: '#10b981',
//           },
//         ],
//       },
//     };
//   }

//   return {
//     summary: `Based on the simulation of "${query}", the analysis suggests moderate market dynamics with several key factors to consider. The AI agent has processed historical data and competitive landscape indicators.`,
//     metrics: [
//       { label: 'Confidence Level', value: '87%' },
//       { label: 'Impact Score', value: '7.2/10' },
//       { label: 'Time Horizon', value: '90 days' },
//       { label: 'Risk Factor', value: 'Medium' },
//     ],
//     chartData: {
//       labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
//       datasets: [
//         {
//           label: 'Projected Impact',
//           data: [100, 95, 92, 90],
//           color: '#3b82f6',
//         },
//       ],
//     },
//   };
// }


