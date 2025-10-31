import { useState } from 'react';
import { TrendingUp, AlertCircle } from 'lucide-react';
import SimulationInput from './components/SimulationInput';
import ResultsDisplay from './components/ResultsDisplay';
// import SimulationHistory from './components/SimulationHistory';
import { createSimulation, callN8nWorkflow, outputParser } from './services/simulationService';
import type { Simulation } from './lib/supabase';
// import mockResponse from './constants/mock_response';
import { QueryType, UserQuery } from './constants/userQueries';
import PPAGraph from './components/PPAGraph';
import mockResponse from './constants/mock_response';
// import PPAGraph from './components/PPAGraph';

function App() {
  const [currentSimulation, setCurrentSimulation] = useState<Simulation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [marketShare, setMarketShare] = useState<boolean>(false);
  const [ppa, setPpa] = useState<boolean>(false);



  const handleMarketPredictionQuery = async (query: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const simulation = await createSimulation(query);
      setCurrentSimulation(simulation);
      console.log("-simulation", simulation)

      // const response = await callN8nWorkflow(query);
      const response = mockResponse;
      console.log("response", response)
      if (response) {
        const parsedOutput = outputParser(response);
        console.log("parsedOutput", parsedOutput)
        setMarketShare(true)
        // await updateSimulationResult(simulation.id, response);

        setCurrentSimulation({
          ...simulation,
          response: parsedOutput,
          status: 'completed',
          completed_at: new Date().toISOString(),
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);

      // if (currentSimulation) {
      //   await updateSimulationError(currentSimulation.id, errorMessage);
      // }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitQuery = (query: UserQuery) => {
    console.log("--query", query)
    setPpa(false);
    setMarketShare(false);
    if (query.value === QueryType.MARKET_SHARE_CHANGE) {
      setMarketShare(true);
      handleMarketPredictionQuery(query.label)
    } else if (query.value === QueryType.PRICE_PACK_ARCHITECTURE) {
      setPpa(true)
    }
  }

  // const handleSelectSimulation = (simulation: Simulation) => {
  //   setCurrentSimulation(simulation);
  //   setError(null);
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-400 to-emerald-500 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
              Market Impact Simulator
            </h1>
          </div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto backdrop-blur-sm bg-white/10 py-3 px-6 rounded-xl border border-white/20 shadow-lg">
            Analyze price trends and macroeconomic factors with AI-powered market simulations
          </p>
        </header>

        <div className="space-y-8">

          <SimulationInput onSubmit={handleSubmitQuery} isLoading={isLoading} />

          {error && marketShare && (
            <div className="max-w-4xl mx-auto bg-red-500/20 backdrop-blur-lg border border-red-400/50 rounded-2xl p-4 flex items-start gap-3 shadow-xl">
              <AlertCircle className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-red-200">Simulation Error</p>
                <p className="text-red-300 text-sm mt-1">{error}</p>
              </div>
            </div>
          )}

          {isLoading && marketShare && (
            <div className="max-w-4xl mx-auto bg-blue-500/20 backdrop-blur-lg border border-blue-400/50 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                <p className="text-blue-200 font-medium">
                  Running simulation with AI agent workflow...
                </p>
              </div>
            </div>
          )}

          {currentSimulation?.response && !isLoading && marketShare && (
            <ResultsDisplay
              data={currentSimulation.response}
              query={currentSimulation.query}
            />
          )}

          {/* <div className="max-w-4xl mx-auto">
            <SimulationHistory
              refresh={historyRefresh}
              onSelectSimulation={handleSelectSimulation}
            />
          </div> */}
        </div>

        {ppa && <div>
          <PPAGraph brand='PARLE-G' segment='GLUCOSE' flavor='GLUCOSE' />
        </div>}

        {/* <footer className="mt-16 text-center text-sm text-slate-500">
          <p>
            Powered by AI workflow automation • Connect your n8n webhook via{' '}
            <code className="px-2 py-1 bg-slate-200 rounded text-slate-700">
              VITE_N8N_WEBHOOK_URL
            </code>
          </p>
        </footer> */}
      </div>
    </div>
  );
}

export default App;
