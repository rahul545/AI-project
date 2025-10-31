const mockResponse = [
  {
    "SKU_ID": "PARLE-G_PARLE-G_GLUCOSE_GLUCOSE_Rs.5",
    "product_name": "PARLE-G GLUCOSE",
    "BRAND": "PARLE-G",
    "Base_Volume": 13413486.88184,
    "Predicted_Volume_Adjusted": 13545679.312472379,
    "Base_Share_%": 97.15240523977418,
    "New_Share_%": 98.10986042674834,
    "Share_Diff_%": 0.9574551869741583,
    "price_change_pct": -5
  },
  {
    "price_change_pct": " -5",
    "cem": 0.05769672736532822,
    "elasticity_json": {
      "own_elasticity": -8.262,
      "cross_elasticities": {
        "TIGER_TIGER GLUCOSE_GLUCOSE_GLUCOSE_Rs.5": 0.912,
        "SUNFEAST_SUNFEAST GLUCOSE_GLUCOSE_GLUCOSE_Rs.5": 1.98
      }
    },
    "elasticity_based_prediction": {
      "own_sku_id": "PARLE-G_PARLE-G_GLUCOSE_GLUCOSE_Rs.5",
      "own_price_old": 0.0651,
      "own_price_new": 0.0618,
      "price_change_%": -5,
      "own_elasticity": -8.262,
      "predicted_volume_change_%": 52.77,
      "cross_volume_changes_%": {
        "TIGER_TIGER GLUCOSE_GLUCOSE_GLUCOSE_Rs.5": -4.57,
        "SUNFEAST_SUNFEAST GLUCOSE_GLUCOSE_GLUCOSE_Rs.5": -9.66
      }
    },
    "market_data": {
      "segment": "GLUCOSE",
      "flavor": "GLUCOSE",
      "price_point": "Rs.5",
      "total_market_volume": 13825054.12,
      "total_market_value_cr": 107084.07,
      "skus": [
        {
          "SKU_ID": "PARLE-G_PARLE-G_GLUCOSE_GLUCOSE_Rs.5",
          "BRAND": "PARLE-G",
          "Vol_Sales": 13413486.88184,
          "Volume_Share_%": 97.02303343060343,
          "Val_Sales_Cr": 103660.16775000001,
          "Value_Share_%": 96.80260446554405,
          "Final PPU": 3.5694586301369866
        },
        {
          "SKU_ID": "SUNFEAST_SUNFEAST GLUCOSE_GLUCOSE_GLUCOSE_Rs.5",
          "BRAND": "SUNFEAST",
          "Vol_Sales": 73023.13934,
          "Volume_Share_%": 0.5281942385155972,
          "Val_Sales_Cr": 642.49937,
          "Value_Share_%": 0.5999952897381958,
          "Final PPU": 4.069522682926829
        },
        {
          "SKU_ID": "TIGER_TIGER GLUCOSE_GLUCOSE_GLUCOSE_Rs.5",
          "BRAND": "TIGER",
          "Vol_Sales": 320134.13625,
          "Volume_Share_%": 2.3156085570644986,
          "Val_Sales_Cr": 2618.04845,
          "Value_Share_%": 2.4448533518505773,
          "Final PPU": 4.052073559322034
        }
      ]
    }
  }
]

export default mockResponse