import { useEffect, useState } from 'react';
import { Clock, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { getRecentSimulations } from '../services/simulationService';

interface SimulationHistoryProps {
  refresh: number;
  onSelectSimulation: (simulation: Simulation) => void;
}

export default function SimulationHistory({ refresh, onSelectSimulation }: SimulationHistoryProps) {
  const [simulations, setSimulations] = useState<Simulation[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSimulations();
  }, [refresh]);

  const loadSimulations = async () => {
    setIsLoading(true);
    try {
      const data = await getRecentSimulations(10);
      setSimulations(data);
    } catch (error) {
      console.error('Failed to load simulations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-blue-500 animate-spin" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
    return date.toLocaleDateString();
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-slate-200 rounded w-1/4"></div>
          <div className="h-3 bg-slate-200 rounded w-3/4"></div>
          <div className="h-3 bg-slate-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (simulations.length === 0) {
    return null;
  }

  const displayedSimulations = isExpanded ? simulations : simulations.slice(0, 3);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800">Recent Simulations</h3>
        {simulations.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            {isExpanded ? (
              <>
                Show less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show all ({simulations.length}) <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>

      <div className="space-y-3">
        {displayedSimulations.map((sim) => (
          <button
            key={sim.id}
            onClick={() => sim.status === 'completed' && onSelectSimulation(sim)}
            className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:bg-transparent"
            disabled={sim.status !== 'completed'}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">{getStatusIcon(sim.status)}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700 line-clamp-2 group-hover:text-blue-700">
                  {sim.query}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-slate-500">
                    {formatDate(sim.created_at)}
                  </span>
                  {sim.status === 'error' && sim.error_message && (
                    <span className="text-xs text-red-500">
                      {sim.error_message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
