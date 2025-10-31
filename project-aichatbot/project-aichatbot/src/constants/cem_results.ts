

const cemResults = [
  {
    "cem": 0.10511594285402281,
    "interpretation": "The elasticity will increase by 10.51% due to external macroeconomic factors.",
    "top_indicators": [
      {
        "indicator": "Wheat Price", //indicator
        "value": 0.12, //Index
        "difference": 1.517673246779144, // Weight of impact
        "rank": 1 // Rank in order of impact
      },
      {
        "indicator": "Sugar Price",
        "value": 0.048087065906375036,
        "difference": 0.05558795399939367,
        "rank": 2
      },
      {
        "indicator": "Consumer Price Index",
        "value": 0.025968981430707916,
        "difference": 0.05558795399939367,
        "rank": 3
      }
    ]
  }
];

export default cemResults;