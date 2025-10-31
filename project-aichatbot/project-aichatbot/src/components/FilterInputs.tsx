import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export const region = [
  "All India", "North Zone", "East Zone", "West Zone", "South Zone", "Rajasthan",
  "UP", "Punjab", "HP-JK", "Haryana", "Uttaranchal", "Assam", "North East",
  "Bihar", "Orissa", "West Bengal", "Jharkhand", "Gujarat", "MP", "Maharashtra",
  "Chattisgarh", "AP (Erstwhile)", "Andhra Pradesh", "Telangana", "Karnataka",
  "Kerala", "Tamil Nadu", "All India Metro", "Kolkata", "Delhi", "Bangalore",
  "Hyderabad", "Chennai", "Ahmedabad", "Mumbai", "Pune"
];

export const segment = [
  "ARROWROOT", "ASSORTED BISCUITS", "GLUCOSE", "CEREAL BARS", "CREAM",
  "MARIE", "MILK", "NON-SALT CRACKER", "OTHER BISCUITS",
  "SALT CRACKER", "SWEET/COOKIES", "WAFER CREAM"
];

export const flavor = [
  "GLUCOSE", "COCONUT", "MILK", "BANANA", "UNSPECIFIED", "CHOCO",
  "CHOCOLATE", "ELAICHI", "CLASSIC", "ORANGE", "CINNAMON", "CASHEW",
  "WHEAT & MILK", "OAT & BERRY", "MULTIGRAIN"
];

export const skuList = [55, 100, 130, 150, 200];

export default function FilterInputs() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [selectedSKU, setSelectedSKU] = useState(null);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">

      {/* ✅ Region */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-200">Region</label>
        <Dropdown
          value={selectedRegion}
          options={region}
          onChange={(e: { value: React.SetStateAction<null>; }) => setSelectedRegion(e.value)}
          placeholder="Select Region"
          className="w-full"
        />
      </div>

      {/* ✅ Segment */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-200">Segment</label>
        <Dropdown
          value={selectedSegment}
          options={segment}
          onChange={(e: { value: React.SetStateAction<null>; }) => setSelectedSegment(e.value)}
          placeholder="Select Segment"
          className="w-full"
        />
      </div>

      {/* ✅ Flavor */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-200">Flavor</label>
        <Dropdown
          value={selectedFlavor}
          options={flavor}
          onChange={(e: { value: React.SetStateAction<null>; }) => setSelectedFlavor(e.value)}
          placeholder="Select Flavor"
          className="w-full"
        />
      </div>

      {/* ✅ SKU */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-200">SKU</label>
        <Dropdown
          value={selectedSKU}
          options={skuList}
          onChange={(e: { value: React.SetStateAction<null>; }) => setSelectedSKU(e.value)}
          placeholder="Select SKU"
          className="w-full"
        />
      </div>

    </div>
  );
}





// import React, { useState } from "react";
// import { Dropdown } from "primereact/dropdown";
// import "primereact/resources/themes/lara-light-blue/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";

// // === Data Lists ===
// export const region = [
//   'All India', 'North Zone', 'East Zone', 'West Zone', 'South Zone', 'Rajasthan',
//   'UP', 'Punjab', 'HP-JK', 'Haryana', 'Uttaranchal', 'Assam', 'North East',
//   'Bihar', 'Orissa', 'West Bengal', 'Jharkhand', 'Gujarat', 'MP', 'Maharashtra',
//   'Chattisgarh', 'AP (Erstwhile)', 'Andhra Pradesh', 'Telangana', 'Karnataka',
//   'Kerala', 'Tamil Nadu', 'All India Metro', 'Kolkata', 'Delhi', 'Bangalore',
//   'Hyderabad', 'Chennai', 'Ahmedabad', 'Mumbai', 'Pune'
// ];

// export const segment = [
//   'ARROWROOT', 'ASSORTED BISCUITS', 'GLUCOSE', 'CEREAL BARS', 'CREAM',
//   'MARIE', 'MILK', 'NON-SALT CRACKER', 'OTHER BISCUITS',
//   'SALT CRACKER', 'SWEET/COOKIES', 'WAFER CREAM'
// ];

// export const flavor = [
//   'GLUCOSE', 'COCONUT', 'MILK', 'BANANA', 'UNSPECIFIED', 'CHOCO',
//   'CHOCOLATE', 'ELAICHI', 'CLASSIC', 'ORANGE', 'CINNAMON', 'CASHEW',
//   'WHEAT & MILK', 'OAT & BERRY', 'MULTIGRAIN'
// ];

// // export const ppu = [5, 10, 15, 20, 25, 30];

// export const skuList = [55, 100, 130, 150, 200];

// // === Component ===
// export default function FilterInputs() {
//   const [selectedRegion, setSelectedRegion] = useState(null);
//   const [selectedSegment, setSelectedSegment] = useState(null);
//   const [selectedFlavor, setSelectedFlavor] = useState(null);
//   const [selectedPPU, setSelectedPPU] = useState(null);
//   const [selectedSKU, setSelectedSKU] = useState(null);

//   return (
//     <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       <Dropdown
//         value={selectedRegion}
//         options={region}
//         onChange={(e: { value: React.SetStateAction<null>; }) => setSelectedRegion(e.value)}
//         placeholder="Select Region"
//         className="w-full"
//       />

//       <Dropdown
//         value={selectedSegment}
//         options={segment}
//         onChange={(e: { value: React.SetStateAction<null>; }) => setSelectedSegment(e.value)}
//         placeholder="Select Segment"
//         className="w-full"
//       />

//       <Dropdown
//         value={selectedFlavor}
//         options={flavor}
//         onChange={(e: { value: React.SetStateAction<null>; }) => setSelectedFlavor(e.value)}
//         placeholder="Select Flavor"
//         className="w-full"
//       />

//       {/* <Dropdown
//         value={selectedPPU}
//         options={ppu}
//         onChange={(e: { value: React.SetStateAction<null>; }) => setSelectedPPU(e.value)}
//         placeholder="Select PPU (₹)"
//         className="w-full"
//       /> */}

//       <Dropdown
//         value={selectedSKU}
//         options={skuList}
//         onChange={(e: { value: React.SetStateAction<null>; }) => setSelectedSKU(e.value)}
//         placeholder="Select SKU"
//         className="w-full"
//       />
//     </div>
//   );
// }
