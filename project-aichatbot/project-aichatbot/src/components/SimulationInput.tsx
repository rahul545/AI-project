

import { useState } from "react";
import { Loader2, Send } from "lucide-react";

import FilterInputs from "./FilterInputs";
import { UserQuery, userQueries } from "../constants/userQueries";
import { detectQuestion } from "../lib/detectQuestion";

import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

interface SimulationInputProps {
  onSubmit: (query: UserQuery) => void;
  isLoading: boolean;
}

export default function SimulationInput({
  onSubmit,
  isLoading,
}: SimulationInputProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    console.log({ query })
    e.preventDefault();
    if (query?.trim() && !isLoading) {
      const cleanLabel = query.trim();

      const detected = detectQuestion(cleanLabel);
      const querySelected = userQueries.find((q) => q.value === detected);
      console.log({ detected, querySelected })

      if (detected && querySelected) {
        const updatedInput = {
          ...querySelected,
          label: cleanLabel
        }
        await onSubmit(updatedInput);
      }

    }
  };

  const handleInputChange = (value: string) => {
    setQuery(value)
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        {/* ✅ PrimeReact Select Inputs */}
        <FilterInputs />

        {/* ✅ PrimeReact InputTextarea */}
        <InputTextarea
          value={query || ""}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Ask a business question...  
(e.g., “If I increase the price of Product X by 5%, how much market share will I lose?”)"
          rows={3}
          disabled={isLoading}
          autoResize
          className="w-full p-inputtext-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200
           px-6 py-4 pr-14 text-base rounded-2xl focus:outline-none transition-all resize-none"
        />

        {/* ✅ PrimeReact Button */}
        <Button
          type="submit"
          disabled={!query?.trim() || isLoading}
          className="absolute right-3 bottom-3 !p-0 rounded-xl shadow-md"
        >
          <div className="p-3 flex justify-center items-center">
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </div>
        </Button>
      </form>

      {/* ✅ Suggested Example Queries */}
      <div className="mt-6">
        <p className="text-sm font-medium text-slate-600 mb-3">
          Try these examples:
        </p>

        <div className="flex flex-wrap gap-2">
          {userQueries.map((example, idx) => (
            <Button
              key={idx}
              disabled={isLoading}
              onClick={() => setQuery(example.label)}
              className="text-xs px-4 py-2 bg-white border border-slate-200 text-left hover:bg-blue-50 hover:border-blue-400 rounded-lg shadow-sm disabled:opacity-50"
            >
              {example.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}


// import { useState } from 'react';
// import { Send, Loader2 } from 'lucide-react';
// import FilterInputs from './FilterInputs';
// import { UserQuery, userQueries } from '../constants/userQueries';
// import { detectQuestion } from '../lib/detectQuestion';

// interface SimulationInputProps {
//   onSubmit: (query: UserQuery) => Promise<void>;
//   isLoading: boolean;
// }

// export default function SimulationInput({ onSubmit, isLoading }: SimulationInputProps) {
//   const [query, setQuery] = useState<UserQuery | null>();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (query?.label.trim() && !isLoading) {
//       query.label = query.label.trim();
//       await onSubmit(query);
//       setQuery(null);
//     }
//   };

//   const findQuery = (data: string) => {
//     console.log("--data", detectQuestion(data));
//   }



//   return (
//     <div className="w-full max-w-5xl mx-auto">
//       <form onSubmit={handleSubmit} className="relative">
//         <FilterInputs />
//         <textarea
//           value={query?.label}
//           onChange={(e) => findQuery(e.target.value)}
//           onInput={(e) => findQuery(e.value)}
//           placeholder="Ask a business question... (e.g., 'If I increase the price of Product X by 5%, how much market share will I lose?')"
//           className="w-full px-6 py-4 pr-14 text-base rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all resize-none shadow-sm"
//           rows={3}
//           disabled={isLoading}
//         />
//         <button
//           type="submit"
//           disabled={!query?.label.trim() || isLoading}
//           className="absolute right-3 bottom-3 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg"
//         >
//           {isLoading ? (
//             <Loader2 className="w-5 h-5 animate-spin" />
//           ) : (
//             <Send className="w-5 h-5" />
//           )}
//         </button>
//       </form>

//       <div className="mt-6">
//         <p className="text-sm font-medium text-slate-600 mb-3">Try these examples:</p>
//         <div className="flex flex-wrap gap-2">
//           {userQueries.map((example, idx) => (
//             <button
//               key={idx}
//               onClick={() => setQuery(example)}
//               disabled={isLoading}
//               className="text-xs px-4 py-2 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
//             >
//               {example.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
