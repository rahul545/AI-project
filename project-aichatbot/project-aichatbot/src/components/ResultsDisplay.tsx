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
      <div className="bg-gradient-to-br from-blue-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-1 h-full bg-blue-400 rounded-full shadow-lg" />
          <div className="flex-1">
            <p className="text-sm font-medium text-blue-300 mb-2">Your Question</p>
            <p className="text-white">{query}</p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-3">
          Simulation Summary
        </h3>
        <p className="text-slate-200 leading-relaxed">{data.summary}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.metrics.map((metric, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-5 shadow-lg border border-white/30 hover:shadow-xl hover:bg-white/15 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-300 font-medium">{metric.label}</p>
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
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <p className="text-slate-200 leading-relaxed">{interpretMarketShift(data).summary}</p>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-white/20">
        <p className="text-slate-200 font-medium">My Top Competitors: <span className="text-blue-300 font-bold">{total_competitors}</span></p>
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
