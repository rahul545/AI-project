import { TrendingDown, TrendingUp, Minus } from 'lucide-react';
import type { SimulationResponse } from '../lib/supabase';
import { total_competitors } from '../constants/top_competitors';
import TopCompetitorsTable from './TopCompetitorsTable';
import CEMSummary from './CEMSummary';
import interpretMarketShift from '../lib/competitor_vol_prediction';

interface ResultsDisplayProps {
  data: SimulationResponse;
  query: string;
}

export default function ResultsDisplay({ data, query }: ResultsDisplayProps) {
  const getTrendIcon = (change?: string) => {
    if (!change) return <Minus className="w-4 h-4 text-slate-400" />;

    const isNegative = change.startsWith('-');
    return isNegative ? (
      <TrendingDown className="w-4 h-4 text-red-500" />
    ) : (
      <TrendingUp className="w-4 h-4 text-green-500" />
    );
  };

  const getTrendColor = (change?: string) => {
    if (!change) return 'text-slate-600';
    return change.startsWith('-') ? 'text-red-600' : 'text-green-600';
  };


  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 animate-fadeIn">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-1 h-full bg-blue-500 rounded-full" />
          <div className="flex-1">
            <p className="text-sm font-medium text-blue-800 mb-2">Your Question</p>
            <p className="text-slate-700">{query}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">
          Simulation Summary
        </h3>
        <p className="text-slate-600 leading-relaxed">{data.summary}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.metrics.map((metric, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-500 font-medium">{metric.label}</p>
              {getTrendIcon(metric.change)}
            </div>
            {/* <p className="text-2xl font-bold text-slate-800 mb-1">
              {metric.value}
            </p> */}
            {metric.change && (
              <p className={`text-sm font-medium ${getTrendColor(metric.change)}`}>
                {metric.change}
              </p>
            )}
          </div>
        ))}
      </div>
      <div>
        {interpretMarketShift(data).summary}
      </div>

      <div className='mt-2'>
        My Top Competitors: {total_competitors}
      </div>
      <div className='mt-2'>
        <TopCompetitorsTable />
      </div>

      <div className='mt-2'>
        <CEMSummary />
      </div>



    </div>
  );
}
