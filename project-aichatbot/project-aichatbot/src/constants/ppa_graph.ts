const rawData = [
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5,
        "val_sales_cr": 0.30676,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 9.99037,
        "val_sales_cr": 0.0468,
        "vol_sales": 0
    },
    {
        "sku": "PRL-G 93 GM PLPCH KSM DL CHN CNNMN BSCTS",
        "packsize": "93000",
        "price": 10,
        "val_sales_cr": 0.00017,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 72.62812,
        "val_sales_cr": 0.07605,
        "vol_sales": 0
    },
    {
        "sku": "1 KG PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 40.14706,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 8.75602,
        "val_sales_cr": 0.01717,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 6.46741,
        "val_sales_cr": 0.10351,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH MN -G GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.13348,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99991,
        "val_sales_cr": 300.39818,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 9.99959,
        "val_sales_cr": 548.15741,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99109,
        "val_sales_cr": 0.36784,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "100000",
        "price": 9.89406,
        "val_sales_cr": 0.0043,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00003,
        "val_sales_cr": 0.05944,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99972,
        "val_sales_cr": 19.24465,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.61693,
        "val_sales_cr": 0.4271,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.96513,
        "val_sales_cr": 2.8561,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99808,
        "val_sales_cr": 156.57188,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.54259,
        "val_sales_cr": 2.03028,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.97251,
        "val_sales_cr": 0.25638,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00031,
        "val_sales_cr": 0.03553,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10.00053,
        "val_sales_cr": 0.02066,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.3559,
        "val_sales_cr": 0.02888,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.93974,
        "val_sales_cr": 0.10511,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99998,
        "val_sales_cr": 0.24645,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10,
        "val_sales_cr": 0.02028,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.69241,
        "val_sales_cr": 0.34585,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.81274,
        "val_sales_cr": 0.6266,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.73684,
        "val_sales_cr": 0.00002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 8.79443,
        "val_sales_cr": 0.0005,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 150 GM EWRPK - G [GLUCOS]",
        "packsize": "150000",
        "price": 9.69445,
        "val_sales_cr": 0.19718,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "150000",
        "price": 9.88242,
        "val_sales_cr": 0.05229,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 10.01422,
        "val_sales_cr": 0.02804,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 20.32792,
        "val_sales_cr": 12.13272,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.75055,
        "val_sales_cr": 0.05322,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "169200",
        "price": 10.72835,
        "val_sales_cr": 0.01586,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99977,
        "val_sales_cr": 60.1856,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.12149,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.99085,
        "val_sales_cr": 0.0994,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "190000",
        "price": 9.84116,
        "val_sales_cr": 0.01578,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "192000",
        "price": 9.61002,
        "val_sales_cr": 0.03432,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.49635,
        "val_sales_cr": 0.09036,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.65283,
        "val_sales_cr": 82.73862,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.35847,
        "val_sales_cr": 47.8922,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99979,
        "val_sales_cr": 282.91735,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 9.79159,
        "val_sales_cr": 0.04634,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 55.66795,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99958,
        "val_sales_cr": 104.24953,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 2.00008,
        "val_sales_cr": 0.00746,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.07203,
        "val_sales_cr": 0.03255,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.27327,
        "val_sales_cr": 0.28949,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 2.88915,
        "val_sales_cr": 0.0106,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.88984,
        "val_sales_cr": 9.74439,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.9643,
        "val_sales_cr": 3.1032,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.58601,
        "val_sales_cr": 10.38394,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 17.77574,
        "val_sales_cr": 0.01502,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.62094,
        "val_sales_cr": 3.47781,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.87979,
        "val_sales_cr": 0.6872,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.38593,
        "val_sales_cr": 1.11021,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 172.02253,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.4268,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 1.99997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 7.51593,
        "val_sales_cr": 0.0175,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 1.75923,
        "val_sales_cr": 0.02484,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00108,
        "val_sales_cr": 0.22762,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 20.67883,
        "val_sales_cr": 0.04913,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+50 GM EXTR [GLCS]",
        "packsize": "350000",
        "price": 20.00007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 19.77226,
        "val_sales_cr": 0.11755,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "300000",
        "price": 20,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.57875,
        "val_sales_cr": 0.11033,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.99996,
        "val_sales_cr": 39.47518,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3.00001,
        "val_sales_cr": 0.02771,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "330000",
        "price": 23.63704,
        "val_sales_cr": 0.00223,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "338400",
        "price": 19.31834,
        "val_sales_cr": 0.03401,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 2.99987,
        "val_sales_cr": 0.1671,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 2.99899,
        "val_sales_cr": 0.45099,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.98351,
        "val_sales_cr": 0.18932,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.03206,
        "val_sales_cr": 0.02074,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "352000",
        "price": 20.88877,
        "val_sales_cr": 0.12849,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.03215,
        "val_sales_cr": 0.02556,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 1.90678,
        "val_sales_cr": 0.19982,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.65951,
        "val_sales_cr": 0.09064,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00823,
        "val_sales_cr": 9.50587,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.99996,
        "val_sales_cr": 0.02361,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.00187,
        "val_sales_cr": 0.14886,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 400 GM PLPCH - G [GLUCOS]",
        "packsize": "400000",
        "price": 54.4557,
        "val_sales_cr": 0.00043,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 10.00532,
        "val_sales_cr": 0.00038,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "44000",
        "price": 4.79696,
        "val_sales_cr": 0.00092,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 20.35349,
        "val_sales_cr": 0.04351,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 3.03468,
        "val_sales_cr": 0.00627,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.06877,
        "val_sales_cr": 32.37956,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.01661,
        "val_sales_cr": 9.04809,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 50 GM - G [GLUCOS]",
        "packsize": "50000",
        "price": 1.81736,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 1759.54945,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.96965,
        "val_sales_cr": 0.27013,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.85923,
        "val_sales_cr": 2.0521,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99948,
        "val_sales_cr": 999.7079,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 14.65823,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.9992,
        "val_sales_cr": 75.30372,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 52.31804,
        "val_sales_cr": 0.00844,
        "vol_sales": 0
    },
    {
        "sku": "PRL 500 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "500000",
        "price": 24.13043,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 21.49756,
        "val_sales_cr": 0.04936,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "528000",
        "price": 28.22928,
        "val_sales_cr": 0.00933,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.74473,
        "val_sales_cr": 1.22408,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99988,
        "val_sales_cr": 376.0079,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 4.99999,
        "val_sales_cr": 0.08416,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.84709,
        "val_sales_cr": 0.8013,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "550000",
        "price": 28.29897,
        "val_sales_cr": 0.00027,
        "vol_sales": 0
    },
    {
        "sku": "PRL 56 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "56000",
        "price": 3,
        "val_sales_cr": 0.00008,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 4.92627,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.93329,
        "val_sales_cr": 1.62982,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.83656,
        "val_sales_cr": 1.20902,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.9999,
        "val_sales_cr": 47.10292,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.9985,
        "val_sales_cr": 18.46153,
        "vol_sales": 0
    },
    {
        "sku": "GM EWRPK - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "66000",
        "price": 4.99312,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.98862,
        "val_sales_cr": 0.02354,
        "vol_sales": 0
    },
    {
        "sku": "PRL 676.8 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "676800",
        "price": 76.09273,
        "val_sales_cr": 0.07041,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.73234,
        "val_sales_cr": 0.81911,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.98716,
        "val_sales_cr": 0.01569,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.77924,
        "val_sales_cr": 0.11545,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.94059,
        "val_sales_cr": 0.01722,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 72.74038,
        "val_sales_cr": 0.07677,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "71500",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 5.65716,
        "val_sales_cr": 0.02528,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.62751,
        "val_sales_cr": 0.48418,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 5.01727,
        "val_sales_cr": 0.10931,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 4.99354,
        "val_sales_cr": 0.17922,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "75000",
        "price": 4.75781,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "75200",
        "price": 5.00001,
        "val_sales_cr": 0.10609,
        "vol_sales": 0
    },
    {
        "sku": "PRL 750 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "750000",
        "price": 69.18959,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "752000",
        "price": 74.49453,
        "val_sales_cr": 0.03883,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 8.71883,
        "val_sales_cr": 0.55724,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+12.5% EXTR",
        "packsize": "90000",
        "price": 9.97959,
        "val_sales_cr": 0.0002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.42788,
        "val_sales_cr": 5.6036,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 68.87124,
        "val_sales_cr": 13.17112,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.61187,
        "val_sales_cr": 0.63857,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.37333,
        "val_sales_cr": 23.90027,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.52057,
        "val_sales_cr": 26.71171,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.87702,
        "val_sales_cr": 16.64184,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 71.73774,
        "val_sales_cr": 11.61769,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.39299,
        "val_sales_cr": 48.88418,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 64.44539,
        "val_sales_cr": 0.01357,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC NW BGGR CRSPR & TSTR",
        "packsize": "80000",
        "price": 9.89936,
        "val_sales_cr": 0.01567,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "846000",
        "price": 78.17143,
        "val_sales_cr": 0.00137,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.5947,
        "val_sales_cr": 0.00905,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 74.07496,
        "val_sales_cr": 0.06839,
        "vol_sales": 0
    },
    {
        "sku": "94 GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "94000",
        "price": 4.9571,
        "val_sales_cr": 0.01084,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 5.07941,
        "val_sales_cr": 0.03397,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "940000",
        "price": 64.23696,
        "val_sales_cr": 0.08217,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 4.80767,
        "val_sales_cr": 0.00138,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.9984,
        "val_sales_cr": 5.63,
        "vol_sales": 0
    },
    {
        "sku": "-G ORGNL CLC CHHT BHM EDTN+RS.2 OFF",
        "packsize": "250000",
        "price": 20.01136,
        "val_sales_cr": 0.00018,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS MLK WRLD LRGST SLLNG",
        "packsize": "507600",
        "price": 30.52035,
        "val_sales_cr": 0.00105,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "180000",
        "price": 9.85155,
        "val_sales_cr": 0.00604,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "209000",
        "price": 10.01047,
        "val_sales_cr": 0.00019,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "313500",
        "price": 15.00655,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.03061,
        "val_sales_cr": 0.10218,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "418000",
        "price": 19.49694,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.96901,
        "val_sales_cr": 19.28572,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.90435,
        "val_sales_cr": 0.00533,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+WHT [GLCS]",
        "packsize": "82500",
        "price": 4.97949,
        "val_sales_cr": 0.04388,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 74.27661,
        "val_sales_cr": 0.04068,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.99923,
        "val_sales_cr": 0.10225,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.92271,
        "val_sales_cr": 0.01758,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5,
        "val_sales_cr": 0.13183,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 9.99037,
        "val_sales_cr": 0.0468,
        "vol_sales": 0
    },
    {
        "sku": "PRL-G 93 GM PLPCH KSM DL CHN CNNMN BSCTS",
        "packsize": "93000",
        "price": 10,
        "val_sales_cr": 0.00017,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 72.62812,
        "val_sales_cr": 0.07605,
        "vol_sales": 0
    },
    {
        "sku": "1 KG PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 40.14706,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 8.75602,
        "val_sales_cr": 0.01717,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 6.46741,
        "val_sales_cr": 0.10351,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99983,
        "val_sales_cr": 161.50462,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 9.99919,
        "val_sales_cr": 275.01816,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99009,
        "val_sales_cr": 0.32996,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "100000",
        "price": 9.89406,
        "val_sales_cr": 0.0043,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00011,
        "val_sales_cr": 0.05291,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99955,
        "val_sales_cr": 12.04274,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.59883,
        "val_sales_cr": 0.40709,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.95929,
        "val_sales_cr": 2.44489,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99565,
        "val_sales_cr": 69.18881,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.54259,
        "val_sales_cr": 2.03028,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.95221,
        "val_sales_cr": 0.1474,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00163,
        "val_sales_cr": 0.00246,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10.00053,
        "val_sales_cr": 0.02066,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.3559,
        "val_sales_cr": 0.02888,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.93748,
        "val_sales_cr": 0.10122,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99998,
        "val_sales_cr": 0.24645,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10,
        "val_sales_cr": 0.02028,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.69241,
        "val_sales_cr": 0.34585,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.81274,
        "val_sales_cr": 0.6266,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.73684,
        "val_sales_cr": 0.00002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 8.79443,
        "val_sales_cr": 0.0005,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 150 GM EWRPK - G [GLUCOS]",
        "packsize": "150000",
        "price": 9.69445,
        "val_sales_cr": 0.19718,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "150000",
        "price": 9.88242,
        "val_sales_cr": 0.05229,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 10.01422,
        "val_sales_cr": 0.02804,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 20.85601,
        "val_sales_cr": 4.76847,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.75055,
        "val_sales_cr": 0.05322,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "169200",
        "price": 10.72835,
        "val_sales_cr": 0.01586,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99912,
        "val_sales_cr": 15.80954,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.12149,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.99085,
        "val_sales_cr": 0.0994,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "190000",
        "price": 9.84116,
        "val_sales_cr": 0.01578,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "192000",
        "price": 9.61002,
        "val_sales_cr": 0.03432,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.49635,
        "val_sales_cr": 0.09036,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.76302,
        "val_sales_cr": 43.90644,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.41161,
        "val_sales_cr": 31.91052,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99926,
        "val_sales_cr": 78.68942,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 9.79159,
        "val_sales_cr": 0.04634,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 2.99999,
        "val_sales_cr": 19.18124,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99848,
        "val_sales_cr": 28.4813,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 2.00008,
        "val_sales_cr": 0.00746,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.07203,
        "val_sales_cr": 0.03255,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.39516,
        "val_sales_cr": 0.21092,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 2.88915,
        "val_sales_cr": 0.0106,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.88984,
        "val_sales_cr": 9.74439,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.9643,
        "val_sales_cr": 3.1032,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.43345,
        "val_sales_cr": 7.54055,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 17.77574,
        "val_sales_cr": 0.01502,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.75237,
        "val_sales_cr": 2.90986,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.06641,
        "val_sales_cr": 0.3721,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.18566,
        "val_sales_cr": 0.67433,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 51.16351,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.33119,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 1.99997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 7.51593,
        "val_sales_cr": 0.0175,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 1.75923,
        "val_sales_cr": 0.02484,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00136,
        "val_sales_cr": 0.17965,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 20.67883,
        "val_sales_cr": 0.04913,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+50 GM EXTR [GLCS]",
        "packsize": "350000",
        "price": 20.00007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 19.77226,
        "val_sales_cr": 0.11755,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "300000",
        "price": 20,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.57875,
        "val_sales_cr": 0.11033,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.99984,
        "val_sales_cr": 11.18525,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99995,
        "val_sales_cr": 0.00599,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "330000",
        "price": 23.63704,
        "val_sales_cr": 0.00223,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "338400",
        "price": 19.31834,
        "val_sales_cr": 0.03401,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 2.99987,
        "val_sales_cr": 0.1671,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 2.99866,
        "val_sales_cr": 0.34171,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.97153,
        "val_sales_cr": 0.11351,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.0004,
        "val_sales_cr": 0.00075,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "352000",
        "price": 20.88877,
        "val_sales_cr": 0.12849,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.03215,
        "val_sales_cr": 0.02556,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 1.90678,
        "val_sales_cr": 0.19982,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.65951,
        "val_sales_cr": 0.09064,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00442,
        "val_sales_cr": 1.50551,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.96978,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.004,
        "val_sales_cr": 0.06978,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 400 GM PLPCH - G [GLUCOS]",
        "packsize": "400000",
        "price": 46.50769,
        "val_sales_cr": 0.0003,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 10.00532,
        "val_sales_cr": 0.00038,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "44000",
        "price": 4.79696,
        "val_sales_cr": 0.00092,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 20.35349,
        "val_sales_cr": 0.04351,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 3.03468,
        "val_sales_cr": 0.00627,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.07907,
        "val_sales_cr": 6.85235,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.01104,
        "val_sales_cr": 2.13446,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 50 GM - G [GLUCOS]",
        "packsize": "50000",
        "price": 1.81736,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 676.43447,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.96092,
        "val_sales_cr": 0.20944,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.83697,
        "val_sales_cr": 1.76387,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99873,
        "val_sales_cr": 409.45413,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99999,
        "val_sales_cr": 4.9991,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99834,
        "val_sales_cr": 36.19428,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 52.31804,
        "val_sales_cr": 0.00844,
        "vol_sales": 0
    },
    {
        "sku": "PRL 500 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "500000",
        "price": 24.13043,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 21.49756,
        "val_sales_cr": 0.04936,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "528000",
        "price": 28.22928,
        "val_sales_cr": 0.00933,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.68548,
        "val_sales_cr": 0.98108,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99965,
        "val_sales_cr": 123.65533,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00001,
        "val_sales_cr": 0.07546,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.84605,
        "val_sales_cr": 0.79575,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "550000",
        "price": 28.29897,
        "val_sales_cr": 0.00027,
        "vol_sales": 0
    },
    {
        "sku": "PRL 56 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "56000",
        "price": 3,
        "val_sales_cr": 0.00008,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 4.92627,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.9321,
        "val_sales_cr": 1.60084,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.83656,
        "val_sales_cr": 1.20902,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99969,
        "val_sales_cr": 15.84186,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.99545,
        "val_sales_cr": 6.06827,
        "vol_sales": 0
    },
    {
        "sku": "GM EWRPK - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "66000",
        "price": 4.99312,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.98862,
        "val_sales_cr": 0.02354,
        "vol_sales": 0
    },
    {
        "sku": "PRL 676.8 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "676800",
        "price": 76.09273,
        "val_sales_cr": 0.07041,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.72967,
        "val_sales_cr": 0.81055,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.98716,
        "val_sales_cr": 0.01569,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.77556,
        "val_sales_cr": 0.11347,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.94059,
        "val_sales_cr": 0.01722,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 72.74038,
        "val_sales_cr": 0.07677,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "71500",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 5.65716,
        "val_sales_cr": 0.02528,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.62751,
        "val_sales_cr": 0.48418,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 5.01727,
        "val_sales_cr": 0.10931,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 4.99354,
        "val_sales_cr": 0.17922,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "75000",
        "price": 4.75781,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "75200",
        "price": 5.00001,
        "val_sales_cr": 0.10609,
        "vol_sales": 0
    },
    {
        "sku": "PRL 750 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "750000",
        "price": 69.18959,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "752000",
        "price": 74.49453,
        "val_sales_cr": 0.03883,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.11249,
        "val_sales_cr": 0.39254,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+12.5% EXTR",
        "packsize": "90000",
        "price": 9.97959,
        "val_sales_cr": 0.0002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.37036,
        "val_sales_cr": 5.08757,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 68.76535,
        "val_sales_cr": 12.66863,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.56089,
        "val_sales_cr": 0.56503,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.61035,
        "val_sales_cr": 19.42966,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.3812,
        "val_sales_cr": 18.33152,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.84064,
        "val_sales_cr": 12.83352,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 71.73774,
        "val_sales_cr": 11.61769,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.4151,
        "val_sales_cr": 48.59721,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 64.44539,
        "val_sales_cr": 0.01357,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC NW BGGR CRSPR & TSTR",
        "packsize": "80000",
        "price": 9.89936,
        "val_sales_cr": 0.01567,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "846000",
        "price": 78.17143,
        "val_sales_cr": 0.00137,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.5947,
        "val_sales_cr": 0.00905,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 74.07496,
        "val_sales_cr": 0.06839,
        "vol_sales": 0
    },
    {
        "sku": "94 GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "94000",
        "price": 4.9571,
        "val_sales_cr": 0.01084,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 5.07941,
        "val_sales_cr": 0.03397,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "940000",
        "price": 64.23696,
        "val_sales_cr": 0.08217,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 4.80767,
        "val_sales_cr": 0.00138,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99634,
        "val_sales_cr": 2.45895,
        "vol_sales": 0
    },
    {
        "sku": "-G ORGNL CLC CHHT BHM EDTN+RS.2 OFF",
        "packsize": "250000",
        "price": 20.01136,
        "val_sales_cr": 0.00018,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS MLK WRLD LRGST SLLNG",
        "packsize": "507600",
        "price": 30.52035,
        "val_sales_cr": 0.00105,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "180000",
        "price": 9.85155,
        "val_sales_cr": 0.00604,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "209000",
        "price": 10.01047,
        "val_sales_cr": 0.00019,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "313500",
        "price": 15.00655,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 2.97335,
        "val_sales_cr": 0.06657,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "418000",
        "price": 19.49694,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.92715,
        "val_sales_cr": 8.1355,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.90435,
        "val_sales_cr": 0.00533,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+WHT [GLCS]",
        "packsize": "82500",
        "price": 4.97949,
        "val_sales_cr": 0.04388,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 74.27661,
        "val_sales_cr": 0.04068,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.99926,
        "val_sales_cr": 0.09602,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.92271,
        "val_sales_cr": 0.01758,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 4.99999,
        "val_sales_cr": 0.17493,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH MN -G GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.13348,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 138.89356,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 273.13926,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00013,
        "val_sales_cr": 0.03788,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99939,
        "val_sales_cr": 0.00653,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 7.20192,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.99985,
        "val_sales_cr": 0.02001,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.99999,
        "val_sales_cr": 0.41121,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 10,
        "val_sales_cr": 87.38306,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 10.00005,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 10.00001,
        "val_sales_cr": 0.10897,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00021,
        "val_sales_cr": 0.03307,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99897,
        "val_sales_cr": 0.00389,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99979,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 9.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.99973,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.00005,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 5.20226,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 20,
        "val_sales_cr": 7.36424,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 10.0007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 44.37606,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 19.99388,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.52964,
        "val_sales_cr": 38.83218,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.25312,
        "val_sales_cr": 15.98168,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 204.22792,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.2812,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 36.48671,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 75.76823,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2,
        "val_sales_cr": 0.07856,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 19.99698,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 18.6581,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 25,
        "val_sales_cr": 2.84339,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 20.00086,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 19.97277,
        "val_sales_cr": 0.56796,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.66391,
        "val_sales_cr": 0.31511,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50.00302,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.78001,
        "val_sales_cr": 0.43589,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 120.85902,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.0956,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 2.12967,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 2.01101,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00003,
        "val_sales_cr": 0.04797,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20.00139,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.00165,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 28.28994,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2.99997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99999,
        "val_sales_cr": 0.02173,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 2.99994,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 0.10928,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3.00164,
        "val_sales_cr": 0.07581,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.0333,
        "val_sales_cr": 0.01999,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 2.99816,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00895,
        "val_sales_cr": 8.00036,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.99996,
        "val_sales_cr": 0.02361,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 2.99999,
        "val_sales_cr": 0.07908,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 400 GM PLPCH - G [GLUCOS]",
        "packsize": "400000",
        "price": 91.35714,
        "val_sales_cr": 0.00013,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 4.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.06602,
        "val_sales_cr": 25.52721,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.01834,
        "val_sales_cr": 6.91363,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 1083.11501,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99998,
        "val_sales_cr": 0.06069,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 5.00001,
        "val_sales_cr": 0.28823,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 590.25377,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 9.65913,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 39.10944,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0.243,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 252.35256,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00006,
        "val_sales_cr": 0.0087,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0.00555,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5.00009,
        "val_sales_cr": 0.02899,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 31.26106,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 12.39326,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99977,
        "val_sales_cr": 0.00856,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.00689,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.0005,
        "val_sales_cr": 0.00198,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00005,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.1745,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 7.90497,
        "val_sales_cr": 0.1647,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.99983,
        "val_sales_cr": 0.51603,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 71.65295,
        "val_sales_cr": 0.5025,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.99584,
        "val_sales_cr": 0.07354,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 71.36097,
        "val_sales_cr": 4.47062,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.82722,
        "val_sales_cr": 8.3802,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 80.00016,
        "val_sales_cr": 3.80832,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 68.5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 65.84143,
        "val_sales_cr": 0.28696,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 3.17105,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.14382,
        "val_sales_cr": 0.03561,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 11.15022,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 10.00032,
        "val_sales_cr": 0.00623,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5,
        "val_sales_cr": 0.1716,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 83.39279,
        "val_sales_cr": 0.00416,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 8.75423,
        "val_sales_cr": 0.03952,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99959,
        "val_sales_cr": 63.78486,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 9.99984,
        "val_sales_cr": 113.34386,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.97174,
        "val_sales_cr": 0.06534,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "100000",
        "price": 9.74255,
        "val_sales_cr": 0.00163,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00048,
        "val_sales_cr": 0.01044,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99882,
        "val_sales_cr": 4.36271,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.41633,
        "val_sales_cr": 0.17344,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.85375,
        "val_sales_cr": 0.26697,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99831,
        "val_sales_cr": 30.82693,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.41742,
        "val_sales_cr": 0.75178,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 10.0001,
        "val_sales_cr": 0.06693,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.9998,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.99904,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.81941,
        "val_sales_cr": 0.00335,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.00046,
        "val_sales_cr": 0.00432,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10,
        "val_sales_cr": 0.02028,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.80059,
        "val_sales_cr": 0.00299,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.40541,
        "val_sales_cr": 0.12975,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.73684,
        "val_sales_cr": 0.00002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 4.83325,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 150 GM EWRPK - G [GLUCOS]",
        "packsize": "150000",
        "price": 9.99962,
        "val_sales_cr": 0.02923,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "150000",
        "price": 9.97693,
        "val_sales_cr": 0.00523,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 9.97935,
        "val_sales_cr": 0.01488,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.73431,
        "val_sales_cr": 0.19885,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.7741,
        "val_sales_cr": 0.04925,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99983,
        "val_sales_cr": 54.29393,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.54979,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 23.95852,
        "val_sales_cr": 0.0011,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.40105,
        "val_sales_cr": 7.71199,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.44998,
        "val_sales_cr": 6.38426,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99995,
        "val_sales_cr": 244.82796,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 9.64286,
        "val_sales_cr": 0.0256,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99999,
        "val_sales_cr": 77.16886,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.19553,
        "val_sales_cr": 0.00082,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.56198,
        "val_sales_cr": 0.14737,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 2.00963,
        "val_sales_cr": 0.00649,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 21.01048,
        "val_sales_cr": 1.53045,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.99404,
        "val_sales_cr": 0.54859,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.81389,
        "val_sales_cr": 1.2536,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 17.47557,
        "val_sales_cr": 0.00708,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.94534,
        "val_sales_cr": 1.13207,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.35483,
        "val_sales_cr": 0.07302,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 20.11538,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.9844,
        "val_sales_cr": 0.15395,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3.00004,
        "val_sales_cr": 0.00844,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 1.99825,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 1.77571,
        "val_sales_cr": 0.01785,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00108,
        "val_sales_cr": 0.22762,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 21.01648,
        "val_sales_cr": 0.03468,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20.03581,
        "val_sales_cr": 0.02731,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.38286,
        "val_sales_cr": 0.01732,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.99989,
        "val_sales_cr": 0.00535,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3.00083,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "338400",
        "price": 19.99856,
        "val_sales_cr": 0.01111,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 2.99841,
        "val_sales_cr": 0.44818,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3.13794,
        "val_sales_cr": 0.00111,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 2.99816,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 1.9,
        "val_sales_cr": 0.18852,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.70943,
        "val_sales_cr": 0.02557,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00421,
        "val_sales_cr": 8.04974,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 5.00042,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.00132,
        "val_sales_cr": 0.14218,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 400 GM PLPCH - G [GLUCOS]",
        "packsize": "400000",
        "price": 54.4557,
        "val_sales_cr": 0.00043,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "44000",
        "price": 2,
        "val_sales_cr": 0.00003,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 19.38829,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 2.99995,
        "val_sales_cr": 0.00608,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.04084,
        "val_sales_cr": 26.43229,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.01681,
        "val_sales_cr": 7.1193,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 50 GM - G [GLUCOS]",
        "packsize": "50000",
        "price": 1.81736,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 794.35488,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.96354,
        "val_sales_cr": 0.22472,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.85209,
        "val_sales_cr": 0.53032,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99989,
        "val_sales_cr": 444.41559,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99999,
        "val_sales_cr": 7.00573,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99949,
        "val_sales_cr": 44.32478,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 64.89773,
        "val_sales_cr": 0.00171,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 23.80399,
        "val_sales_cr": 0.01672,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.62734,
        "val_sales_cr": 0.75597,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99973,
        "val_sales_cr": 137.78042,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00004,
        "val_sales_cr": 0.02525,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.75413,
        "val_sales_cr": 0.33207,
        "vol_sales": 0
    },
    {
        "sku": "PRL 56 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "56000",
        "price": 3,
        "val_sales_cr": 0.00008,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.91331,
        "val_sales_cr": 0.75798,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.8106,
        "val_sales_cr": 0.04627,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99979,
        "val_sales_cr": 23.56239,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.99993,
        "val_sales_cr": 10.78916,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.99739,
        "val_sales_cr": 0.00997,
        "vol_sales": 0
    },
    {
        "sku": "PRL 676.8 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "676800",
        "price": 40,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.67097,
        "val_sales_cr": 0.25581,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.00008,
        "val_sales_cr": 0.01259,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.92412,
        "val_sales_cr": 0.01374,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00058,
        "val_sales_cr": 0.00428,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.33448,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 6.68672,
        "val_sales_cr": 0.0126,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.79674,
        "val_sales_cr": 0.02438,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 4.99999,
        "val_sales_cr": 0.09041,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 4.99356,
        "val_sales_cr": 0.17716,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "75000",
        "price": 4.75781,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 7.85243,
        "val_sales_cr": 0.22999,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+12.5% EXTR",
        "packsize": "90000",
        "price": 9.97959,
        "val_sales_cr": 0.0002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 73.72014,
        "val_sales_cr": 1.98768,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 68.73965,
        "val_sales_cr": 5.79039,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.46812,
        "val_sales_cr": 0.22322,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.9191,
        "val_sales_cr": 6.52815,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.46221,
        "val_sales_cr": 5.65157,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.82426,
        "val_sales_cr": 4.44012,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 72.74174,
        "val_sales_cr": 1.31239,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 70.97313,
        "val_sales_cr": 9.51983,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 60.06291,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 74.57201,
        "val_sales_cr": 0.06565,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 4.74775,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 9.99945,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99751,
        "val_sales_cr": 2.43906,
        "vol_sales": 0
    },
    {
        "sku": "-G ORGNL CLC CHHT BHM EDTN+RS.2 OFF",
        "packsize": "250000",
        "price": 20.01136,
        "val_sales_cr": 0.00018,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "209000",
        "price": 10.01047,
        "val_sales_cr": 0.00019,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "313500",
        "price": 15.00655,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.06536,
        "val_sales_cr": 0.04843,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.99241,
        "val_sales_cr": 11.4839,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.90435,
        "val_sales_cr": 0.00533,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 75.22856,
        "val_sales_cr": 0.02719,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 4.99999,
        "val_sales_cr": 0.13515,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44912,
        "val_sales_cr": 0.00873,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 38.07759,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 77.19754,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00028,
        "val_sales_cr": 0.03922,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99897,
        "val_sales_cr": 0.00972,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 2.14336,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.30785,
        "val_sales_cr": 0.01549,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.96238,
        "val_sales_cr": 0.0196,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99972,
        "val_sales_cr": 23.40161,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.27262,
        "val_sales_cr": 0.22718,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99991,
        "val_sales_cr": 0.01164,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00163,
        "val_sales_cr": 0.00246,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.88744,
        "val_sales_cr": 0.03165,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.02174,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 9.99978,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.99924,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.95715,
        "val_sales_cr": 0.30088,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 10.08696,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 8.79443,
        "val_sales_cr": 0.0005,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 10.00392,
        "val_sales_cr": 0.00026,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.74554,
        "val_sales_cr": 0.06978,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 10.0007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.12351,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 10.18941,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "192000",
        "price": 9.62668,
        "val_sales_cr": 0.00093,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.97368,
        "val_sales_cr": 0.00685,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.68822,
        "val_sales_cr": 4.64323,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.16834,
        "val_sales_cr": 4.00619,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2.00003,
        "val_sales_cr": 0.01463,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 9.97333,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 42.85878,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 2.10847,
        "val_sales_cr": 0.00096,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.10286,
        "val_sales_cr": 0.00207,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.55885,
        "val_sales_cr": 0.52105,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.6461,
        "val_sales_cr": 0.20794,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.90234,
        "val_sales_cr": 0.60205,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.20518,
        "val_sales_cr": 0.31045,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.80102,
        "val_sales_cr": 0.09231,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.97826,
        "val_sales_cr": 0.3826,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 145.28762,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.16443,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 19.97761,
        "val_sales_cr": 0.0008,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.22122,
        "val_sales_cr": 0.00214,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3.00002,
        "val_sales_cr": 31.92286,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2.99997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99998,
        "val_sales_cr": 0.02771,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3,
        "val_sales_cr": 0.16699,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3.10021,
        "val_sales_cr": 0.0028,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0.02375,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.00006,
        "val_sales_cr": 0.01508,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 2.99395,
        "val_sales_cr": 0.02069,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 20.3122,
        "val_sales_cr": 0.00211,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 5.02434,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.15882,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 2.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 21.79409,
        "val_sales_cr": 0.00199,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 5.00001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.34274,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 49.35996,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 5.00001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.92097,
        "val_sales_cr": 0.07251,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.9998,
        "val_sales_cr": 21.97338,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 6.97368,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 1.82392,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 29.01478,
        "val_sales_cr": 0.00177,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.9288,
        "val_sales_cr": 0.02852,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 15.07934,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 4.99971,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0.00191,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 4.92627,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5.00497,
        "val_sales_cr": 0.015,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.09579,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 19.67136,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 5.08241,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 2.81818,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.8776,
        "val_sales_cr": 0.01801,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.14575,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99988,
        "val_sales_cr": 0.0043,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.93324,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.73403,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 4.99352,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.13506,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "752000",
        "price": 65.63415,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 8.18472,
        "val_sales_cr": 0.05578,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.54774,
        "val_sales_cr": 0.1018,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 66.16823,
        "val_sales_cr": 1.01726,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 83.86072,
        "val_sales_cr": 0.00536,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 73.89894,
        "val_sales_cr": 0.3094,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.2976,
        "val_sales_cr": 0.17516,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.68017,
        "val_sales_cr": 0.10112,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 73.66183,
        "val_sales_cr": 0.41463,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 71.03793,
        "val_sales_cr": 1.64681,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 64.81126,
        "val_sales_cr": 0.00391,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 9.97183,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.42268,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 0.04951,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.96287,
        "val_sales_cr": 0.22224,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.99995,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 74.67803,
        "val_sales_cr": 0.00636,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 9.99037,
        "val_sales_cr": 0.0468,
        "vol_sales": 0
    },
    {
        "sku": "PRL-G 93 GM PLPCH KSM DL CHN CNNMN BSCTS",
        "packsize": "93000",
        "price": 10,
        "val_sales_cr": 0.00017,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 73.71556,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 8.72978,
        "val_sales_cr": 0.01677,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.4808,
        "val_sales_cr": 0.05071,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH MN -G GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.13348,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99999,
        "val_sales_cr": 122.83555,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 9.99908,
        "val_sales_cr": 224.50534,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99445,
        "val_sales_cr": 0.26134,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "100000",
        "price": 9.98788,
        "val_sales_cr": 0.00264,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99992,
        "val_sales_cr": 0.03929,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 9.52489,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.85582,
        "val_sales_cr": 0.0971,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.98071,
        "val_sales_cr": 1.71652,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99753,
        "val_sales_cr": 61.46106,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.81523,
        "val_sales_cr": 0.7185,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.96011,
        "val_sales_cr": 0.17204,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.0001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10.00023,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.3128,
        "val_sales_cr": 0.02694,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.96063,
        "val_sales_cr": 0.05272,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99999,
        "val_sales_cr": 0.22427,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 9.99997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.69693,
        "val_sales_cr": 0.3334,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.86164,
        "val_sales_cr": 0.15881,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.99653,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 5.20226,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "150000",
        "price": 9.87129,
        "val_sales_cr": 0.04694,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 9.99928,
        "val_sales_cr": 0.01248,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.50944,
        "val_sales_cr": 0.72384,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.95833,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99771,
        "val_sales_cr": 1.98874,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.09583,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.96836,
        "val_sales_cr": 0.06244,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.44772,
        "val_sales_cr": 0.07011,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.98469,
        "val_sales_cr": 29.72652,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.39362,
        "val_sales_cr": 25.63006,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99806,
        "val_sales_cr": 23.67773,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.29976,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99717,
        "val_sales_cr": 15.08513,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 1.98528,
        "val_sales_cr": 0.00365,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.02008,
        "val_sales_cr": 0.00932,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.00356,
        "val_sales_cr": 0.04047,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 1.97461,
        "val_sales_cr": 0.00063,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 21.13135,
        "val_sales_cr": 5.77462,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.50287,
        "val_sales_cr": 0.71982,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.44152,
        "val_sales_cr": 6.2293,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 17.8236,
        "val_sales_cr": 0.00705,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.27898,
        "val_sales_cr": 1.41567,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.70073,
        "val_sales_cr": 0.34995,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50.01889,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.99997,
        "val_sales_cr": 0.3205,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 2.00003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 2.00814,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 1.7184,
        "val_sales_cr": 0.00698,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 19.99892,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 18.46735,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.99946,
        "val_sales_cr": 0.00744,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.94928,
        "val_sales_cr": 0.00058,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "330000",
        "price": 23.99012,
        "val_sales_cr": 0.00219,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "338400",
        "price": 19.00465,
        "val_sales_cr": 0.0229,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3.146,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "352000",
        "price": 21.64165,
        "val_sales_cr": 0.08872,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 1.97585,
        "val_sales_cr": 0.00004,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 1.8771,
        "val_sales_cr": 0.00151,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 18.90242,
        "val_sales_cr": 0.00219,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.03063,
        "val_sales_cr": 1.45613,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.99996,
        "val_sales_cr": 0.02361,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "44000",
        "price": 5.00112,
        "val_sales_cr": 0.00089,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 21.41373,
        "val_sales_cr": 0.00443,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 3.00006,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.19773,
        "val_sales_cr": 5.94727,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.01587,
        "val_sales_cr": 1.9288,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 672.07619,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99991,
        "val_sales_cr": 0.03997,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.85647,
        "val_sales_cr": 1.08572,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99895,
        "val_sales_cr": 389.01231,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99999,
        "val_sales_cr": 0.6237,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99863,
        "val_sales_cr": 25.47947,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 61.81526,
        "val_sales_cr": 0.00519,
        "vol_sales": 0
    },
    {
        "sku": "PRL 500 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "500000",
        "price": 20.00115,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 19.71978,
        "val_sales_cr": 0.00548,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "528000",
        "price": 27.50452,
        "val_sales_cr": 0.00457,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.97937,
        "val_sales_cr": 0.37652,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99997,
        "val_sales_cr": 168.82039,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00001,
        "val_sales_cr": 0.05891,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.91547,
        "val_sales_cr": 0.46218,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "550000",
        "price": 65.01226,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.95552,
        "val_sales_cr": 0.80966,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.83692,
        "val_sales_cr": 1.15779,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 3.59738,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.98995,
        "val_sales_cr": 2.31155,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.98233,
        "val_sales_cr": 0.01314,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.8596,
        "val_sales_cr": 0.32888,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.93529,
        "val_sales_cr": 0.0031,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.75002,
        "val_sales_cr": 0.0973,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.78295,
        "val_sales_cr": 0.00456,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.99369,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "71500",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 5.00694,
        "val_sales_cr": 0.00872,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.61771,
        "val_sales_cr": 0.42122,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 5.1015,
        "val_sales_cr": 0.01891,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 4.8513,
        "val_sales_cr": 0.00013,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "75200",
        "price": 5.00001,
        "val_sales_cr": 0.10609,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.87947,
        "val_sales_cr": 0.20651,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.87648,
        "val_sales_cr": 2.69442,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 69.95893,
        "val_sales_cr": 5.1188,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.66378,
        "val_sales_cr": 0.32743,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 71.4123,
        "val_sales_cr": 8.41561,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.26609,
        "val_sales_cr": 11.97946,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.8735,
        "val_sales_cr": 8.01146,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 69.16142,
        "val_sales_cr": 5.41802,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 68.88924,
        "val_sales_cr": 28.04099,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC NW BGGR CRSPR & TSTR",
        "packsize": "80000",
        "price": 9.87356,
        "val_sales_cr": 0.01237,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.9535,
        "val_sales_cr": 0.00173,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 63.90886,
        "val_sales_cr": 0.00252,
        "vol_sales": 0
    },
    {
        "sku": "94 GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "94000",
        "price": 4.9571,
        "val_sales_cr": 0.01084,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 4.7619,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "940000",
        "price": 64.23696,
        "val_sales_cr": 0.08217,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99846,
        "val_sales_cr": 1.93615,
        "vol_sales": 0
    },
    {
        "sku": "-G ORGNL CLC CHHT BHM EDTN+RS.2 OFF",
        "packsize": "250000",
        "price": 19.99888,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS MLK WRLD LRGST SLLNG",
        "packsize": "507600",
        "price": 30.52035,
        "val_sales_cr": 0.00105,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "209000",
        "price": 10.00671,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.93792,
        "val_sales_cr": 5.75896,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.99993,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+WHT [GLCS]",
        "packsize": "82500",
        "price": 4.97949,
        "val_sales_cr": 0.04388,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.99923,
        "val_sales_cr": 0.10225,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.92271,
        "val_sales_cr": 0.01758,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 72.08945,
        "val_sales_cr": 0.07189,
        "vol_sales": 0
    },
    {
        "sku": "1 KG PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 40.14706,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 9.99749,
        "val_sales_cr": 0.0004,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 7.15147,
        "val_sales_cr": 0.00456,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 75.70018,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 133.11066,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00723,
        "val_sales_cr": 0.00194,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "100000",
        "price": 10.16667,
        "val_sales_cr": 0.00002,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99934,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99995,
        "val_sales_cr": 3.21369,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.74507,
        "val_sales_cr": 0.14107,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.96913,
        "val_sales_cr": 0.85301,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99779,
        "val_sales_cr": 40.88229,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.44752,
        "val_sales_cr": 0.33282,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.96663,
        "val_sales_cr": 0.00576,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00021,
        "val_sales_cr": 0.03307,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10.00053,
        "val_sales_cr": 0.02066,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.99897,
        "val_sales_cr": 0.00194,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99609,
        "val_sales_cr": 0.01739,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99983,
        "val_sales_cr": 0.01786,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10.00058,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.50191,
        "val_sales_cr": 0.00946,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.93765,
        "val_sales_cr": 0.03715,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 4.77329,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 150 GM EWRPK - G [GLUCOS]",
        "packsize": "150000",
        "price": 9.64323,
        "val_sales_cr": 0.16795,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "150000",
        "price": 9.99194,
        "val_sales_cr": 0.00012,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 12.01429,
        "val_sales_cr": 0.00042,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 20.08179,
        "val_sales_cr": 11.14024,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.47083,
        "val_sales_cr": 0.00398,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "169200",
        "price": 10.72835,
        "val_sales_cr": 0.01586,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99993,
        "val_sales_cr": 3.90293,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 10.02909,
        "val_sales_cr": 0.03696,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "190000",
        "price": 9.84116,
        "val_sales_cr": 0.01578,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "192000",
        "price": 9.60953,
        "val_sales_cr": 0.03339,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.31907,
        "val_sales_cr": 0.01231,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.46014,
        "val_sales_cr": 40.65688,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.29857,
        "val_sales_cr": 11.8717,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99998,
        "val_sales_cr": 14.39701,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 9.98157,
        "val_sales_cr": 0.02074,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 12.80917,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99999,
        "val_sales_cr": 11.99555,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 1.98501,
        "val_sales_cr": 0.00285,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.08881,
        "val_sales_cr": 0.02034,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.04838,
        "val_sales_cr": 0.10165,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 28.61709,
        "val_sales_cr": 0.00348,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.19092,
        "val_sales_cr": 1.91827,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.76484,
        "val_sales_cr": 1.62684,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.7764,
        "val_sales_cr": 2.29899,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 20.01354,
        "val_sales_cr": 0.00089,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.54742,
        "val_sales_cr": 0.61962,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.00319,
        "val_sales_cr": 0.17193,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.55669,
        "val_sales_cr": 0.25316,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 26.72647,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.26237,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 2.12967,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 7.51593,
        "val_sales_cr": 0.0175,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 19.91069,
        "val_sales_cr": 0.01445,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+50 GM EXTR [GLCS]",
        "packsize": "350000",
        "price": 20.00007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 19.69135,
        "val_sales_cr": 0.08944,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "300000",
        "price": 20,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.59249,
        "val_sales_cr": 0.08343,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.99968,
        "val_sales_cr": 7.5464,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2.84402,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3.00008,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "330000",
        "price": 14.17647,
        "val_sales_cr": 0.00005,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 2.8067,
        "val_sales_cr": 0.00011,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 2.26563,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.98016,
        "val_sales_cr": 0.16446,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.12093,
        "val_sales_cr": 0.00566,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "352000",
        "price": 19.38364,
        "val_sales_cr": 0.03977,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.22251,
        "val_sales_cr": 0.00483,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 2.05281,
        "val_sales_cr": 0.00979,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.64492,
        "val_sales_cr": 0.06077,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.96978,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.01357,
        "val_sales_cr": 0.00669,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 10.00532,
        "val_sales_cr": 0.00038,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 20.16379,
        "val_sales_cr": 0.03709,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 4.81061,
        "val_sales_cr": 0.00019,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 243.75843,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99991,
        "val_sales_cr": 0.00544,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.86573,
        "val_sales_cr": 0.36355,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99961,
        "val_sales_cr": 144.30663,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99986,
        "val_sales_cr": 0.05512,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99928,
        "val_sales_cr": 3.67556,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 30.12329,
        "val_sales_cr": 0.00154,
        "vol_sales": 0
    },
    {
        "sku": "PRL 500 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "500000",
        "price": 24.13043,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 20.23703,
        "val_sales_cr": 0.02539,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "528000",
        "price": 28.9617,
        "val_sales_cr": 0.00476,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.77265,
        "val_sales_cr": 0.06307,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99997,
        "val_sales_cr": 54.32774,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.85012,
        "val_sales_cr": 0.00513,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "550000",
        "price": 28.29897,
        "val_sales_cr": 0.00027,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.85474,
        "val_sales_cr": 0.04719,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.0003,
        "val_sales_cr": 0.00496,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5.00011,
        "val_sales_cr": 0.27179,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.98712,
        "val_sales_cr": 0.27841,
        "vol_sales": 0
    },
    {
        "sku": "GM EWRPK - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "66000",
        "price": 4.99312,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.99883,
        "val_sales_cr": 0.00043,
        "vol_sales": 0
    },
    {
        "sku": "PRL 676.8 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "676800",
        "price": 76.09273,
        "val_sales_cr": 0.07041,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.60901,
        "val_sales_cr": 0.2164,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.99984,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99095,
        "val_sales_cr": 0.00011,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00036,
        "val_sales_cr": 0.00838,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 72.74038,
        "val_sales_cr": 0.07677,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.70071,
        "val_sales_cr": 0.00396,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.63152,
        "val_sales_cr": 0.03858,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.00052,
        "val_sales_cr": 0.00193,
        "vol_sales": 0
    },
    {
        "sku": "PRL 750 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "750000",
        "price": 69.18959,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "752000",
        "price": 74.49453,
        "val_sales_cr": 0.03883,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.40805,
        "val_sales_cr": 0.06496,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.68284,
        "val_sales_cr": 0.8197,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 67.4116,
        "val_sales_cr": 1.24468,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.84522,
        "val_sales_cr": 0.08255,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.8621,
        "val_sales_cr": 8.64711,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.90753,
        "val_sales_cr": 8.90552,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.94617,
        "val_sales_cr": 4.08913,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 74.62263,
        "val_sales_cr": 4.47266,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.07144,
        "val_sales_cr": 9.67656,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 64.2976,
        "val_sales_cr": 0.00966,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC NW BGGR CRSPR & TSTR",
        "packsize": "80000",
        "price": 9.99727,
        "val_sales_cr": 0.0033,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "846000",
        "price": 78.17143,
        "val_sales_cr": 0.00137,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.51805,
        "val_sales_cr": 0.00732,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 61.32353,
        "val_sales_cr": 0.00021,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 5.07941,
        "val_sales_cr": 0.03397,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 4.80767,
        "val_sales_cr": 0.00138,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00005,
        "val_sales_cr": 0.83212,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "180000",
        "price": 9.85155,
        "val_sales_cr": 0.00604,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.00007,
        "val_sales_cr": 0.00423,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "418000",
        "price": 19.49694,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.92224,
        "val_sales_cr": 1.82062,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 70.75025,
        "val_sales_cr": 0.00714,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44941,
        "val_sales_cr": 0.00512,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 11.0229,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 19.34995,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 6.77778,
        "val_sales_cr": 0.00012,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "100000",
        "price": 9.73804,
        "val_sales_cr": 0.00159,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.0034,
        "val_sales_cr": 0.00059,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 1.08436,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.33199,
        "val_sales_cr": 0.00487,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.96814,
        "val_sales_cr": 0.00876,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99748,
        "val_sales_cr": 4.68134,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.56176,
        "val_sales_cr": 0.04953,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 8.47719,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 10.00015,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 10.00322,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.00236,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10.00331,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99191,
        "val_sales_cr": 0.00692,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "150000",
        "price": 9.97693,
        "val_sales_cr": 0.00523,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 9.98947,
        "val_sales_cr": 0.00038,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.71909,
        "val_sales_cr": 0.01424,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.33333,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99585,
        "val_sales_cr": 1.43816,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.19301,
        "val_sales_cr": 2.6343,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.50254,
        "val_sales_cr": 1.80816,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99996,
        "val_sales_cr": 5.26344,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99992,
        "val_sales_cr": 3.80482,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.0001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.96994,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.53541,
        "val_sales_cr": 0.36844,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 20.83838,
        "val_sales_cr": 0.06033,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.93292,
        "val_sales_cr": 0.37114,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 17.47557,
        "val_sales_cr": 0.00708,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.11906,
        "val_sales_cr": 0.16006,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 19.99997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.99987,
        "val_sales_cr": 0.01276,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 1.68788,
        "val_sales_cr": 0.00812,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 22.025,
        "val_sales_cr": 0.00026,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20.50929,
        "val_sales_cr": 0.00949,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.01167,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3.12628,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.84211,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00466,
        "val_sales_cr": 7.26943,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.11378,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "44000",
        "price": 2,
        "val_sales_cr": 0.00003,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.03204,
        "val_sales_cr": 24.16453,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.01553,
        "val_sales_cr": 6.60584,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 169.60566,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 5.00003,
        "val_sales_cr": 0.01857,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.83222,
        "val_sales_cr": 0.05193,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99991,
        "val_sales_cr": 112.41922,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 1.90579,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 7.82423,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 64.89773,
        "val_sales_cr": 0.00171,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 28.55879,
        "val_sales_cr": 0.00736,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.78716,
        "val_sales_cr": 0.05409,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.9997,
        "val_sales_cr": 38.97184,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00014,
        "val_sales_cr": 0.01428,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.79893,
        "val_sales_cr": 0.09016,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.86201,
        "val_sales_cr": 0.08429,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.0003,
        "val_sales_cr": 0.0084,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 4.85354,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 1.72793,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5.00356,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 676.8 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "676800",
        "price": 40,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99967,
        "val_sales_cr": 0.00455,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.01429,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.83882,
        "val_sales_cr": 0.00069,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.27641,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 68.2395,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.0015,
        "val_sales_cr": 0.004,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 4.99994,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 7.77261,
        "val_sales_cr": 0.04516,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+12.5% EXTR",
        "packsize": "90000",
        "price": 9.97959,
        "val_sales_cr": 0.0002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.75038,
        "val_sales_cr": 0.64811,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 66.20547,
        "val_sales_cr": 0.67336,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.65737,
        "val_sales_cr": 0.09621,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.5425,
        "val_sales_cr": 2.77791,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.55117,
        "val_sales_cr": 2.32927,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.99235,
        "val_sales_cr": 2.01206,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 71.59218,
        "val_sales_cr": 0.21459,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 70.61388,
        "val_sales_cr": 4.01391,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 60.06291,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 9.99945,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00001,
        "val_sales_cr": 0.12701,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "209000",
        "price": 10.01047,
        "val_sales_cr": 0.00019,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.14689,
        "val_sales_cr": 0.04638,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.97651,
        "val_sales_cr": 1.07009,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.90435,
        "val_sales_cr": 0.00533,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 76.34483,
        "val_sales_cr": 0.00044,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 4.99999,
        "val_sales_cr": 0.07852,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 9.62324,
        "val_sales_cr": 0.0344,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99669,
        "val_sales_cr": 7.77086,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 9.99899,
        "val_sales_cr": 17.42073,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.90917,
        "val_sales_cr": 0.01366,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99933,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99613,
        "val_sales_cr": 0.26028,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.51027,
        "val_sales_cr": 0.0635,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.85648,
        "val_sales_cr": 0.08523,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99832,
        "val_sales_cr": 6.97824,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.49604,
        "val_sales_cr": 0.2612,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99941,
        "val_sales_cr": 0.00679,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99973,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.81941,
        "val_sales_cr": 0.00335,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.9996,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 9.99977,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.80059,
        "val_sales_cr": 0.00299,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99156,
        "val_sales_cr": 0.02131,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 4.83325,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.72788,
        "val_sales_cr": 0.03846,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.76855,
        "val_sales_cr": 0.0023,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99999,
        "val_sales_cr": 50.08948,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 14,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 23.95852,
        "val_sales_cr": 0.0011,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.64811,
        "val_sales_cr": 2.39145,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.45611,
        "val_sales_cr": 2.65599,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 227.0456,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 9.64286,
        "val_sales_cr": 0.0256,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99996,
        "val_sales_cr": 67.94698,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.00002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 2.00963,
        "val_sales_cr": 0.00649,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 21.63526,
        "val_sales_cr": 0.47206,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.11644,
        "val_sales_cr": 0.17177,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.69834,
        "val_sales_cr": 0.50893,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.70444,
        "val_sales_cr": 0.59401,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 23.20272,
        "val_sales_cr": 0.00375,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 20.11538,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.97839,
        "val_sales_cr": 0.08785,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3.00004,
        "val_sales_cr": 0.00844,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 1.99825,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 2.00011,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 20.32029,
        "val_sales_cr": 0.01953,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 21.16153,
        "val_sales_cr": 0.00714,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 18.47383,
        "val_sales_cr": 0.0108,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.99989,
        "val_sales_cr": 0.00535,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.90191,
        "val_sales_cr": 0.00866,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 19.38829,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 50 GM - G [GLUCOS]",
        "packsize": "50000",
        "price": 1.81736,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 495.98975,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.19698,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.84943,
        "val_sales_cr": 0.23215,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99997,
        "val_sales_cr": 249.38878,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 1.41026,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 27.50087,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 21.04924,
        "val_sales_cr": 0.00936,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.55944,
        "val_sales_cr": 0.12816,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99997,
        "val_sales_cr": 75.93534,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 4.99995,
        "val_sales_cr": 0.01098,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.7117,
        "val_sales_cr": 0.0301,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.98011,
        "val_sales_cr": 0.29509,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.80092,
        "val_sales_cr": 0.03272,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99958,
        "val_sales_cr": 8.2526,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 5.47841,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.99314,
        "val_sales_cr": 0.00349,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.80999,
        "val_sales_cr": 0.13873,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.00008,
        "val_sales_cr": 0.01259,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.90057,
        "val_sales_cr": 0.00889,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00058,
        "val_sales_cr": 0.00428,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.56063,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.74107,
        "val_sales_cr": 0.00011,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 5.00002,
        "val_sales_cr": 0.06414,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.00745,
        "val_sales_cr": 0.03649,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "75000",
        "price": 4.75781,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 8.67178,
        "val_sales_cr": 0.05939,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 72.86645,
        "val_sales_cr": 0.31131,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 69.20131,
        "val_sales_cr": 2.614,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.99879,
        "val_sales_cr": 0.04231,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 73.69945,
        "val_sales_cr": 1.92737,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.26709,
        "val_sales_cr": 1.8567,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.86899,
        "val_sales_cr": 0.95919,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 73.21499,
        "val_sales_cr": 0.44653,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 71.44619,
        "val_sales_cr": 1.29718,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 74.57201,
        "val_sales_cr": 0.06565,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 1.61658,
        "vol_sales": 0
    },
    {
        "sku": "-G ORGNL CLC CHHT BHM EDTN+RS.2 OFF",
        "packsize": "250000",
        "price": 20.01136,
        "val_sales_cr": 0.00018,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "313500",
        "price": 15.00655,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 1.9347,
        "val_sales_cr": 0.00206,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.99867,
        "val_sales_cr": 8.96197,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 5.00002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5,
        "val_sales_cr": 0.08774,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99999,
        "val_sales_cr": 15.94093,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 29.84178,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00151,
        "val_sales_cr": 0.00132,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00057,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99998,
        "val_sales_cr": 1.25113,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.18699,
        "val_sales_cr": 0.02771,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.97945,
        "val_sales_cr": 0.05575,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99991,
        "val_sales_cr": 6.44756,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.27078,
        "val_sales_cr": 0.13371,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 10.00003,
        "val_sales_cr": 0.03412,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99876,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 9.9991,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.99722,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.01779,
        "val_sales_cr": 0.00028,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.73684,
        "val_sales_cr": 0.00002,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.71518,
        "val_sales_cr": 0.01478,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.99986,
        "val_sales_cr": 0.00732,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.95767,
        "val_sales_cr": 0.00315,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 19.99388,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.0225,
        "val_sales_cr": 0.04049,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.82983,
        "val_sales_cr": 0.01107,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 0.20462,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99706,
        "val_sales_cr": 0.01587,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.65929,
        "val_sales_cr": 0.06401,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.5846,
        "val_sales_cr": 0.09288,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.99705,
        "val_sales_cr": 0.00762,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.40999,
        "val_sales_cr": 0.0893,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 19.7253,
        "val_sales_cr": 0.02549,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 1.85625,
        "val_sales_cr": 0.00973,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00118,
        "val_sales_cr": 0.20884,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 21.10155,
        "val_sales_cr": 0.00652,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3.01336,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99998,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 2.99794,
        "val_sales_cr": 0.37279,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 20.29577,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 2.99998,
        "val_sales_cr": 0.05827,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 2.99995,
        "val_sales_cr": 0.00608,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 4.99999,
        "val_sales_cr": 13.34996,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.85005,
        "val_sales_cr": 0.03398,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99915,
        "val_sales_cr": 7.46231,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99998,
        "val_sales_cr": 1.97261,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.33074,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.57907,
        "val_sales_cr": 0.1968,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99404,
        "val_sales_cr": 3.50648,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00004,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 56 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "56000",
        "price": 3,
        "val_sales_cr": 0.00008,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5.00022,
        "val_sales_cr": 0.00223,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 0.00006,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99992,
        "val_sales_cr": 4.8145,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 2.40656,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99804,
        "val_sales_cr": 0.00102,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.90761,
        "val_sales_cr": 0.00045,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00008,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 6.98432,
        "val_sales_cr": 0.00659,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 5,
        "val_sales_cr": 0.02627,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 7.17001,
        "val_sales_cr": 0.07022,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 67.81767,
        "val_sales_cr": 0.43688,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.14163,
        "val_sales_cr": 0.00196,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.68699,
        "val_sales_cr": 0.06357,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 78.35477,
        "val_sales_cr": 0.00755,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 80.01066,
        "val_sales_cr": 0.01576,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 77.1145,
        "val_sales_cr": 0.10452,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 71.38883,
        "val_sales_cr": 0.82869,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00014,
        "val_sales_cr": 0.01064,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.94295,
        "val_sales_cr": 0.05926,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5,
        "val_sales_cr": 0.00511,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 4.69662,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 7.65036,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.81351,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99998,
        "val_sales_cr": 0.31079,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 8.97048,
        "val_sales_cr": 0.00274,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.51973,
        "val_sales_cr": 0.01732,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99992,
        "val_sales_cr": 2.59731,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.63015,
        "val_sales_cr": 0.05034,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.98049,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.04167,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.00105,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.00015,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.74279,
        "val_sales_cr": 0.00206,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99986,
        "val_sales_cr": 0.00146,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.23666,
        "val_sales_cr": 0.67385,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.12931,
        "val_sales_cr": 0.52316,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 0.02209,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 21.6305,
        "val_sales_cr": 0.04523,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.71313,
        "val_sales_cr": 0.00197,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.99925,
        "val_sales_cr": 0.04972,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.00245,
        "val_sales_cr": 0.01388,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.00008,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00003,
        "val_sales_cr": 0.01878,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3.03435,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3.18653,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3.00074,
        "val_sales_cr": 0.07538,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3.13794,
        "val_sales_cr": 0.00111,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 2.99816,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 5.00058,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.00224,
        "val_sales_cr": 0.08385,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 400 GM PLPCH - G [GLUCOS]",
        "packsize": "400000",
        "price": 91.35714,
        "val_sales_cr": 0.00013,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 1.51218,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.73959,
        "val_sales_cr": 0.00294,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99931,
        "val_sales_cr": 0.70326,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99998,
        "val_sales_cr": 0.09778,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.01313,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.40968,
        "val_sales_cr": 0.01348,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99915,
        "val_sales_cr": 0.56112,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00011,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5.00085,
        "val_sales_cr": 0.00059,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.99563,
        "val_sales_cr": 0.00034,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.58125,
        "val_sales_cr": 0.00509,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.9973,
        "val_sales_cr": 0.37057,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.99458,
        "val_sales_cr": 0.13894,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5.00612,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99982,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.03167,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.0005,
        "val_sales_cr": 0.00198,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00259,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.98855,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 8.91342,
        "val_sales_cr": 0.00638,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 75.51831,
        "val_sales_cr": 0.0068,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 72.3537,
        "val_sales_cr": 0.17065,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 70.71208,
        "val_sales_cr": 0.01744,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 74.9261,
        "val_sales_cr": 0.00781,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 80.00833,
        "val_sales_cr": 0.0173,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 74.30989,
        "val_sales_cr": 0.00729,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 72.45674,
        "val_sales_cr": 0.03392,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99991,
        "val_sales_cr": 0.01165,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.97291,
        "val_sales_cr": 0.02001,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 83.39279,
        "val_sales_cr": 0.00416,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 7.04548,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 14.34088,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00014,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99968,
        "val_sales_cr": 0.24367,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.6278,
        "val_sales_cr": 0.03865,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.88357,
        "val_sales_cr": 0.05806,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99749,
        "val_sales_cr": 4.47529,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.27707,
        "val_sales_cr": 0.08657,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 10.01754,
        "val_sales_cr": 0.00023,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00093,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.99904,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 8.29688,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.00046,
        "val_sales_cr": 0.00432,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10,
        "val_sales_cr": 0.02028,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.97283,
        "val_sales_cr": 0.00738,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.99986,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 9.9776,
        "val_sales_cr": 0.01314,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.73165,
        "val_sales_cr": 0.02855,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 8.35484,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99994,
        "val_sales_cr": 0.86383,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.29636,
        "val_sales_cr": 0.74674,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.31733,
        "val_sales_cr": 0.37083,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99962,
        "val_sales_cr": 4.50661,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2.00122,
        "val_sales_cr": 2.843,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.97566,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.88166,
        "val_sales_cr": 0.1322,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.97276,
        "val_sales_cr": 0.06235,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.42951,
        "val_sales_cr": 0.03861,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.04498,
        "val_sales_cr": 0.09099,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 19.99979,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.90576,
        "val_sales_cr": 0.00506,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 21.99463,
        "val_sales_cr": 0.01394,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 18.96837,
        "val_sales_cr": 0.01068,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 20.65513,
        "val_sales_cr": 0.00656,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4,
        "val_sales_cr": 0.77939,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 400 GM PLPCH - G [GLUCOS]",
        "packsize": "400000",
        "price": 46.50769,
        "val_sales_cr": 0.0003,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.13713,
        "val_sales_cr": 2.26776,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.03339,
        "val_sales_cr": 0.51346,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 50.94997,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.89704,
        "val_sales_cr": 0.07083,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.9998,
        "val_sales_cr": 33.01114,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 1.39406,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99997,
        "val_sales_cr": 2.23959,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.58074,
        "val_sales_cr": 0.09543,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99997,
        "val_sales_cr": 10.01997,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 3.99997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.98158,
        "val_sales_cr": 0.0343,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 4.55018,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.85246,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5.00039,
        "val_sales_cr": 0.00647,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.7535,
        "val_sales_cr": 0.0288,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99971,
        "val_sales_cr": 0.00172,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.32643,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 6.42955,
        "val_sales_cr": 0.00589,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.99072,
        "val_sales_cr": 0.0185,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 4.9882,
        "val_sales_cr": 0.11939,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.80868,
        "val_sales_cr": 0.00949,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 73.58509,
        "val_sales_cr": 0.50415,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 69.50315,
        "val_sales_cr": 0.86459,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 80.96805,
        "val_sales_cr": 0.02002,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 71.66131,
        "val_sales_cr": 0.69529,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.96813,
        "val_sales_cr": 0.6591,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.33763,
        "val_sales_cr": 0.69658,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 72.33682,
        "val_sales_cr": 0.20008,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 71.61713,
        "val_sales_cr": 1.19255,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00001,
        "val_sales_cr": 0.57434,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.96833,
        "val_sales_cr": 0.3002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 75.19716,
        "val_sales_cr": 0.02544,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5.00417,
        "val_sales_cr": 0.00024,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 6.19555,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 8.17046,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 11.17482,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99947,
        "val_sales_cr": 0.00561,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "100000",
        "price": 10.10638,
        "val_sales_cr": 0.00005,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 0.72268,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.29533,
        "val_sales_cr": 0.01388,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.99833,
        "val_sales_cr": 0.01138,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99995,
        "val_sales_cr": 2.20564,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.44372,
        "val_sales_cr": 0.05915,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00016,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.00052,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.74934,
        "val_sales_cr": 0.00451,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 0.1104,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.47927,
        "val_sales_cr": 0.60845,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.78419,
        "val_sales_cr": 0.37715,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.9887,
        "val_sales_cr": 0.78512,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99531,
        "val_sales_cr": 0.26122,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.19553,
        "val_sales_cr": 0.00082,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 21.14655,
        "val_sales_cr": 0.05944,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 20.63804,
        "val_sales_cr": 0.00548,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.92961,
        "val_sales_cr": 0.07349,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.92902,
        "val_sales_cr": 0.03765,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 22.23256,
        "val_sales_cr": 0.0001,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2,
        "val_sales_cr": 0.04829,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.00831,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00043,
        "val_sales_cr": 0.00092,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 5.00037,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.00515,
        "val_sales_cr": 0.00006,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.00535,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 10.87182,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.80903,
        "val_sales_cr": 0.0254,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99911,
        "val_sales_cr": 6.25921,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5.00004,
        "val_sales_cr": 0.085,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.36335,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.46496,
        "val_sales_cr": 0.02228,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 2.3451,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.76646,
        "val_sales_cr": 0.00539,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.66773,
        "val_sales_cr": 0.02598,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 0.31052,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.99999,
        "val_sales_cr": 0.06918,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.99689,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.98571,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.00003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 1.50161,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 67.79352,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 7.29696,
        "val_sales_cr": 0.03272,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.74474,
        "val_sales_cr": 0.0448,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 68.45719,
        "val_sales_cr": 0.25042,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84,
        "val_sales_cr": 0.0001,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.04811,
        "val_sales_cr": 0.12276,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.03007,
        "val_sales_cr": 0.07836,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.89321,
        "val_sales_cr": 0.09022,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 77.53465,
        "val_sales_cr": 0.00078,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 70.81458,
        "val_sales_cr": 0.24584,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.00682,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.89967,
        "val_sales_cr": 0.08716,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5.0001,
        "val_sales_cr": 0.00509,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 2.39618,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 4.23707,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00041,
        "val_sales_cr": 0.00484,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99897,
        "val_sales_cr": 0.00972,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10.00002,
        "val_sales_cr": 0.25439,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.46961,
        "val_sales_cr": 0.00206,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 10.00214,
        "val_sales_cr": 0.00234,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99993,
        "val_sales_cr": 1.38888,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.4668,
        "val_sales_cr": 0.05017,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 10.00061,
        "val_sales_cr": 0.00326,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 10.00676,
        "val_sales_cr": 0.00163,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 9.99932,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.00508,
        "val_sales_cr": 0.00099,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 8.79443,
        "val_sales_cr": 0.0005,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.81949,
        "val_sales_cr": 0.00066,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.12351,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.87874,
        "val_sales_cr": 0.17697,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.30669,
        "val_sales_cr": 0.14109,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 0.14278,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99987,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 21.09263,
        "val_sales_cr": 0.07178,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.78089,
        "val_sales_cr": 0.02339,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 25.00007,
        "val_sales_cr": 0.03425,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.92417,
        "val_sales_cr": 0.01032,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 22.0013,
        "val_sales_cr": 0.00679,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 1.10237,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.46497,
        "val_sales_cr": 0.00061,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 0.3477,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.00003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 2.985,
        "val_sales_cr": 0.00018,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 20.14925,
        "val_sales_cr": 0.00014,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 21.79409,
        "val_sales_cr": 0.00199,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 5.00005,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 4.99999,
        "val_sales_cr": 0.12624,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.75472,
        "val_sales_cr": 0.00038,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99957,
        "val_sales_cr": 0.2523,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99999,
        "val_sales_cr": 0.05999,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5.0011,
        "val_sales_cr": 0.00091,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.90382,
        "val_sales_cr": 0.00109,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99975,
        "val_sales_cr": 0.00403,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 9,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.99965,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 0.19255,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5.00003,
        "val_sales_cr": 0.10401,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.8139,
        "val_sales_cr": 0.01169,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.1882,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.0006,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00157,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 68.78431,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.82337,
        "val_sales_cr": 0.00422,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 67.78736,
        "val_sales_cr": 0.04858,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 76.24407,
        "val_sales_cr": 0.00225,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 74.80475,
        "val_sales_cr": 0.02203,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 70.41591,
        "val_sales_cr": 0.03115,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00088,
        "val_sales_cr": 0.00113,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.74975,
        "val_sales_cr": 0.00095,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 3.21435,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 7.81621,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.16128,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.98667,
        "val_sales_cr": 0.00082,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 8.86523,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99982,
        "val_sales_cr": 3.55247,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.70029,
        "val_sales_cr": 0.0182,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99964,
        "val_sales_cr": 0.00838,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 9.99978,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.00001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.65541,
        "val_sales_cr": 0.00035,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.00075,
        "val_sales_cr": 0.05051,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.00011,
        "val_sales_cr": 0.20494,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 2.99999,
        "val_sales_cr": 0.05543,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.7779,
        "val_sales_cr": 0.01847,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.76145,
        "val_sales_cr": 0.00452,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 19.99927,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 0.4383,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.99999,
        "val_sales_cr": 0.16728,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 2.99998,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5.00002,
        "val_sales_cr": 0.14049,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.74781,
        "val_sales_cr": 0.00027,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.9963,
        "val_sales_cr": 0.01484,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99999,
        "val_sales_cr": 0.17026,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 5.00292,
        "val_sales_cr": 0.00051,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99995,
        "val_sales_cr": 0.06557,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5.00035,
        "val_sales_cr": 0.00712,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99999,
        "val_sales_cr": 0.42129,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.61699,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 5.00008,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.0399,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.13364,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.93663,
        "val_sales_cr": 0.00187,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 69.22279,
        "val_sales_cr": 0.02417,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 76.34545,
        "val_sales_cr": 0.00042,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 71.20945,
        "val_sales_cr": 0.01537,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99986,
        "val_sales_cr": 0.01055,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.74813,
        "val_sales_cr": 0.00064,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5.00002,
        "val_sales_cr": 0.0864,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 3.46266,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 8.88137,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 0.00037,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99884,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10.00004,
        "val_sales_cr": 0.14963,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 8.84934,
        "val_sales_cr": 0.00494,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.99531,
        "val_sales_cr": 0.00426,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 10.00007,
        "val_sales_cr": 3.33227,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.75115,
        "val_sales_cr": 0.05236,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.9922,
        "val_sales_cr": 0.00154,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10.00068,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.9995,
        "val_sales_cr": 0.00601,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.73971,
        "val_sales_cr": 0.00588,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 17.09091,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 10.23284,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 21.28709,
        "val_sales_cr": 0.36231,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.42489,
        "val_sales_cr": 0.32232,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2.00001,
        "val_sales_cr": 0.01397,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 24.5915,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 21.69843,
        "val_sales_cr": 0.06104,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.65942,
        "val_sales_cr": 0.01853,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.98906,
        "val_sales_cr": 0.02833,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.67001,
        "val_sales_cr": 0.03656,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.3576,
        "val_sales_cr": 0.01276,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.272,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 78.52161,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.06004,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.99988,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 13.63765,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2.99997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3.00011,
        "val_sales_cr": 0.00271,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3.10021,
        "val_sales_cr": 0.0028,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.99994,
        "val_sales_cr": 0.00519,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.00001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 2.99732,
        "val_sales_cr": 0.00067,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 20.53311,
        "val_sales_cr": 0.00124,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.15882,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 5.00001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 34.70853,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 5.00001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.75039,
        "val_sales_cr": 0.00121,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99998,
        "val_sales_cr": 16.26106,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 2.16429,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 1.57017,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 29.01478,
        "val_sales_cr": 0.00177,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.9045,
        "val_sales_cr": 0.01603,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 8.81703,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 4.9996,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0.00191,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5.03651,
        "val_sales_cr": 0.00186,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 8.80491,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 1.32316,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 5.00006,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.99995,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99983,
        "val_sales_cr": 0.00286,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.99998,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 70.65957,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.3609,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.98287,
        "val_sales_cr": 0.00356,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 75.875,
        "val_sales_cr": 0.00006,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 68.33619,
        "val_sales_cr": 0.31008,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 82.75676,
        "val_sales_cr": 0.00031,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 76.8252,
        "val_sales_cr": 0.0189,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.41246,
        "val_sales_cr": 0.04406,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.92736,
        "val_sales_cr": 0.00517,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 75.04915,
        "val_sales_cr": 0.04352,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 71.90307,
        "val_sales_cr": 0.09309,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 64.81126,
        "val_sales_cr": 0.00391,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 9.97183,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99999,
        "val_sales_cr": 0.1458,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 2.99206,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.99559,
        "val_sales_cr": 0.19032,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.99995,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 74.67803,
        "val_sales_cr": 0.00636,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 4.99995,
        "val_sales_cr": 0.01093,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 19.61357,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 36.63677,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99954,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 0.95556,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.58017,
        "val_sales_cr": 0.00099,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 10.09677,
        "val_sales_cr": 0.00003,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99999,
        "val_sales_cr": 9.76883,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.86877,
        "val_sales_cr": 0.01744,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.02174,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.6467,
        "val_sales_cr": 0.01427,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 10.00392,
        "val_sales_cr": 0.00026,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.74147,
        "val_sales_cr": 0.02576,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 10.0007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.48811,
        "val_sales_cr": 2.97388,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.12173,
        "val_sales_cr": 2.05623,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 0.75488,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.74159,
        "val_sales_cr": 0.14894,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.13893,
        "val_sales_cr": 0.00277,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.86841,
        "val_sales_cr": 0.2683,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.17806,
        "val_sales_cr": 0.07908,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.83766,
        "val_sales_cr": 0.06223,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 7.4684,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 19.97761,
        "val_sales_cr": 0.0008,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 18.99638,
        "val_sales_cr": 0.00105,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 3.89909,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99999,
        "val_sales_cr": 0.02173,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.98925,
        "val_sales_cr": 0.00003,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.00004,
        "val_sales_cr": 0.01433,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.83929,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 4.82503,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 8.98025,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.74632,
        "val_sales_cr": 0.00613,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99974,
        "val_sales_cr": 3.73679,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.72603,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.20326,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.99371,
        "val_sales_cr": 0.00111,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 3.72417,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.38934,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 4.79424,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.99865,
        "val_sales_cr": 0.00222,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 2.7937,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.71843,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 5.00004,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99967,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00275,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 4.99352,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.71233,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.98998,
        "val_sales_cr": 0.05465,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 67.54591,
        "val_sales_cr": 0.12476,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 85.10345,
        "val_sales_cr": 0.00099,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 71.71529,
        "val_sales_cr": 0.14111,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.35394,
        "val_sales_cr": 0.10834,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.99918,
        "val_sales_cr": 0.06801,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 72.86845,
        "val_sales_cr": 0.03379,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 71.13249,
        "val_sales_cr": 0.82435,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99996,
        "val_sales_cr": 0.02402,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.85003,
        "val_sales_cr": 0.01088,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5.00002,
        "val_sales_cr": 0.02715,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44912,
        "val_sales_cr": 0.00873,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 5.84503,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 11.64107,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00018,
        "val_sales_cr": 0.03347,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00065,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99996,
        "val_sales_cr": 0.29006,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.46663,
        "val_sales_cr": 0.00486,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.91831,
        "val_sales_cr": 0.00609,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99911,
        "val_sales_cr": 2.8711,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 8.40268,
        "val_sales_cr": 0.06357,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00163,
        "val_sales_cr": 0.00246,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99976,
        "val_sales_cr": 0.02512,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.99924,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99998,
        "val_sales_cr": 0.24955,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 10.08696,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.74966,
        "val_sales_cr": 0.0156,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.9759,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "192000",
        "price": 9.62668,
        "val_sales_cr": 0.00093,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.97368,
        "val_sales_cr": 0.00685,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 21.0308,
        "val_sales_cr": 0.69755,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.16913,
        "val_sales_cr": 0.88117,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 9.97333,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 2.99999,
        "val_sales_cr": 13.13039,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 2.10847,
        "val_sales_cr": 0.00096,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.10286,
        "val_sales_cr": 0.00207,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 19.26849,
        "val_sales_cr": 0.12241,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.64154,
        "val_sales_cr": 0.1614,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.77099,
        "val_sales_cr": 0.07317,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.5823,
        "val_sales_cr": 0.15366,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.00054,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.94073,
        "val_sales_cr": 0.07547,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 42.991,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.1012,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20.00098,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3.00007,
        "val_sales_cr": 9.76771,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 3.00004,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99995,
        "val_sales_cr": 0.00599,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3,
        "val_sales_cr": 0.16429,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0.01853,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 2.99996,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 2.99376,
        "val_sales_cr": 0.01929,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.98378,
        "val_sales_cr": 0.00074,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 2.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 0.98205,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.97324,
        "val_sales_cr": 0.05538,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99958,
        "val_sales_cr": 0.74815,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 1.00237,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99999,
        "val_sales_cr": 0.04597,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.97748,
        "val_sales_cr": 0.00323,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.96652,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00402,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.99932,
        "val_sales_cr": 0.00148,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.14032,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 2.08976,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.67758,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 7.34503,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0.00632,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99978,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.96745,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.73403,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.13506,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "752000",
        "price": 65.63415,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 7.88227,
        "val_sales_cr": 0.04567,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 72.87699,
        "val_sales_cr": 0.0032,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 62.17239,
        "val_sales_cr": 0.3341,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 85.1295,
        "val_sales_cr": 0.00118,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.80698,
        "val_sales_cr": 0.13534,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.14949,
        "val_sales_cr": 0.00545,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 73.46503,
        "val_sales_cr": 0.307,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 70.2739,
        "val_sales_cr": 0.32374,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.1258,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 0.04951,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.74425,
        "val_sales_cr": 0.00431,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 4.99991,
        "val_sales_cr": 0.00558,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 3.54581,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 7.98505,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00369,
        "val_sales_cr": 0.00054,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00066,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.33245,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.59873,
        "val_sales_cr": 0.00182,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.96853,
        "val_sales_cr": 0.00687,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99863,
        "val_sales_cr": 2.48805,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.70073,
        "val_sales_cr": 0.02545,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.03246,
        "val_sales_cr": 0.00337,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.46632,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.74908,
        "val_sales_cr": 0.03007,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 10.00809,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.74573,
        "val_sales_cr": 0.02154,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 21.10959,
        "val_sales_cr": 0.382,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.24139,
        "val_sales_cr": 0.40046,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2.0003,
        "val_sales_cr": 0.00067,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 4.18379,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.91349,
        "val_sales_cr": 0.09842,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.03763,
        "val_sales_cr": 0.00185,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.96782,
        "val_sales_cr": 0.198,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.28956,
        "val_sales_cr": 0.02631,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 22.00313,
        "val_sales_cr": 0.01053,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.89522,
        "val_sales_cr": 0.03512,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 14.76594,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.00318,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.41463,
        "val_sales_cr": 0.00048,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 4.10343,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.0004,
        "val_sales_cr": 0.00075,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.00166,
        "val_sales_cr": 0.00054,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.91667,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 5.02434,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.34274,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 4.42239,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99872,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.7697,
        "val_sales_cr": 0.00915,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99735,
        "val_sales_cr": 0.96025,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 2.85075,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99945,
        "val_sales_cr": 0.00361,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.95313,
        "val_sales_cr": 0.00655,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 1.50201,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 4.99942,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5.00086,
        "val_sales_cr": 0.00232,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 5.36915,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 1.64222,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 2.81818,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 5.00009,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0.00144,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.57823,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.82845,
        "val_sales_cr": 0.00047,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.10029,
        "val_sales_cr": 0.04389,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 68.87137,
        "val_sales_cr": 0.17556,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 83.05764,
        "val_sales_cr": 0.00288,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 74.58497,
        "val_sales_cr": 0.01181,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 74.85987,
        "val_sales_cr": 0.02276,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 78.77443,
        "val_sales_cr": 0.02249,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 74.19717,
        "val_sales_cr": 0.00786,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 71.3428,
        "val_sales_cr": 0.3591,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00002,
        "val_sales_cr": 0.11538,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.73644,
        "val_sales_cr": 0.01515,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 10.00015,
        "val_sales_cr": 0.01357,
        "vol_sales": 0
    },
    {
        "sku": "PRL-G 93 GM PLPCH KSM DL CHN CNNMN BSCTS",
        "packsize": "93000",
        "price": 10,
        "val_sales_cr": 0.00017,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99997,
        "val_sales_cr": 12.8334,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 19.05459,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99566,
        "val_sales_cr": 0.0023,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "100000",
        "price": 9.98788,
        "val_sales_cr": 0.00264,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99861,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 1.00176,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.95836,
        "val_sales_cr": 0.01471,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.90518,
        "val_sales_cr": 0.04093,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99976,
        "val_sales_cr": 5.56028,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.95429,
        "val_sales_cr": 0.04819,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.81725,
        "val_sales_cr": 0.02596,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99765,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.75165,
        "val_sales_cr": 0.02034,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.96245,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 9.99956,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.01074,
        "val_sales_cr": 0.00186,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "150000",
        "price": 9.59857,
        "val_sales_cr": 0.00817,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.36978,
        "val_sales_cr": 0.18232,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99287,
        "val_sales_cr": 0.49778,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.00047,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.92961,
        "val_sales_cr": 0.02387,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 22.00154,
        "val_sales_cr": 0.0214,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 21.16064,
        "val_sales_cr": 3.55092,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.68932,
        "val_sales_cr": 3.8583,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99825,
        "val_sales_cr": 1.62173,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99312,
        "val_sales_cr": 0.8436,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 1.99977,
        "val_sales_cr": 0.00088,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 1.99973,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 1.99998,
        "val_sales_cr": 0.03035,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 1.97461,
        "val_sales_cr": 0.00063,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.45915,
        "val_sales_cr": 1.07209,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.16876,
        "val_sales_cr": 0.08401,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.90226,
        "val_sales_cr": 0.40845,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.61818,
        "val_sales_cr": 0.106,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.497,
        "val_sales_cr": 0.03436,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50.01889,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2,
        "val_sales_cr": 0.05252,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 2.00003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 1.84043,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3.146,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "352000",
        "price": 20.85854,
        "val_sales_cr": 0.02196,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.12288,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 1.79968,
        "val_sales_cr": 0.00089,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 18.71635,
        "val_sales_cr": 0.00117,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.06473,
        "val_sales_cr": 0.20681,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 21.41373,
        "val_sales_cr": 0.00443,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.31332,
        "val_sales_cr": 0.8011,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.00018,
        "val_sales_cr": 0.47632,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 167.61354,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99968,
        "val_sales_cr": 0.00771,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.88345,
        "val_sales_cr": 0.18241,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99947,
        "val_sales_cr": 105.40884,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.15848,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99991,
        "val_sales_cr": 9.89382,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "528000",
        "price": 26.07711,
        "val_sales_cr": 0.00213,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.94006,
        "val_sales_cr": 0.01692,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99998,
        "val_sales_cr": 32.55101,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00002,
        "val_sales_cr": 0.05513,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.92322,
        "val_sales_cr": 0.07899,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.96986,
        "val_sales_cr": 0.12386,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 1.1507,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.36521,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.99172,
        "val_sales_cr": 0.01279,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.86486,
        "val_sales_cr": 0.00185,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.58215,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.99369,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "71500",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.98023,
        "val_sales_cr": 0.00859,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.64775,
        "val_sales_cr": 0.02686,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.99972,
        "val_sales_cr": 0.02463,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.06487,
        "val_sales_cr": 0.28953,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 71.00194,
        "val_sales_cr": 0.9132,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.84803,
        "val_sales_cr": 0.08352,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.83684,
        "val_sales_cr": 1.70412,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.52105,
        "val_sales_cr": 1.5579,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.76647,
        "val_sales_cr": 1.34119,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 68.70663,
        "val_sales_cr": 0.6899,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 68.44134,
        "val_sales_cr": 8.64536,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.9535,
        "val_sales_cr": 0.00173,
        "vol_sales": 0
    },
    {
        "sku": "94 GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "94000",
        "price": 4.9549,
        "val_sales_cr": 0.01024,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "940000",
        "price": 66.95013,
        "val_sales_cr": 0.04618,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00001,
        "val_sales_cr": 0.10973,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.86699,
        "val_sales_cr": 0.78544,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 10.00011,
        "val_sales_cr": 0.01785,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.99989,
        "val_sales_cr": 0.00951,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 9.99991,
        "val_sales_cr": 0.01112,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 1.00111,
        "val_sales_cr": 0.00027,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99997,
        "val_sales_cr": 15.3521,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 34.15862,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.94194,
        "val_sales_cr": 0.00015,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99994,
        "val_sales_cr": 0.03606,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99979,
        "val_sales_cr": 0.64399,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.82954,
        "val_sales_cr": 0.00337,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.9195,
        "val_sales_cr": 0.11003,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99961,
        "val_sales_cr": 12.58586,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.79332,
        "val_sales_cr": 0.08692,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99812,
        "val_sales_cr": 0.0016,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99978,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 10.25156,
        "val_sales_cr": 0.00329,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.94327,
        "val_sales_cr": 0.08655,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "150000",
        "price": 9.93097,
        "val_sales_cr": 0.03877,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.42713,
        "val_sales_cr": 0.0271,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99891,
        "val_sales_cr": 1.03874,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.99254,
        "val_sales_cr": 0.03857,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 20.43041,
        "val_sales_cr": 0.01446,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.62198,
        "val_sales_cr": 6.53764,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.19429,
        "val_sales_cr": 5.93156,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99757,
        "val_sales_cr": 17.48935,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99619,
        "val_sales_cr": 9.58645,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 2.00223,
        "val_sales_cr": 0.00018,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.00027,
        "val_sales_cr": 0.00947,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 21.23643,
        "val_sales_cr": 0.93244,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.16629,
        "val_sales_cr": 0.08867,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.60563,
        "val_sales_cr": 1.00222,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.2724,
        "val_sales_cr": 0.10711,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.43008,
        "val_sales_cr": 0.00688,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.00002,
        "val_sales_cr": 0.04181,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 2.00368,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 1.7184,
        "val_sales_cr": 0.00698,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.94928,
        "val_sales_cr": 0.00058,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "352000",
        "price": 21.91295,
        "val_sales_cr": 0.06676,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 20,
        "val_sales_cr": 0.00011,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.02187,
        "val_sales_cr": 1.21412,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.18477,
        "val_sales_cr": 4.90591,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.01579,
        "val_sales_cr": 1.39933,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 170.17386,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99997,
        "val_sales_cr": 0.0199,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.86676,
        "val_sales_cr": 0.14616,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99986,
        "val_sales_cr": 94.07741,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99996,
        "val_sales_cr": 0.25668,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 4.02135,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.92272,
        "val_sales_cr": 0.01338,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99997,
        "val_sales_cr": 45.5069,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 4.99987,
        "val_sales_cr": 0.00377,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.69675,
        "val_sales_cr": 0.10402,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.80218,
        "val_sales_cr": 0.13644,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.58335,
        "val_sales_cr": 0.42827,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99999,
        "val_sales_cr": 1.57492,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.97832,
        "val_sales_cr": 1.06902,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.97024,
        "val_sales_cr": 0.0785,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.99976,
        "val_sales_cr": 0.00211,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.00001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 3.61654,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "71500",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.95838,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 5.00084,
        "val_sales_cr": 0.03048,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.76395,
        "val_sales_cr": 0.01755,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.93107,
        "val_sales_cr": 0.54026,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 70.9085,
        "val_sales_cr": 0.83801,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 85.00139,
        "val_sales_cr": 0.10374,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 71.6399,
        "val_sales_cr": 2.34465,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.20893,
        "val_sales_cr": 3.77555,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.8214,
        "val_sales_cr": 3.03592,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 72.79734,
        "val_sales_cr": 0.21912,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.9673,
        "val_sales_cr": 2.83859,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC NW BGGR CRSPR & TSTR",
        "packsize": "80000",
        "price": 9.87356,
        "val_sales_cr": 0.01237,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 63.90886,
        "val_sales_cr": 0.00252,
        "vol_sales": 0
    },
    {
        "sku": "94 GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "94000",
        "price": 5.00251,
        "val_sales_cr": 0.0006,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.9931,
        "val_sales_cr": 0.29978,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.98868,
        "val_sales_cr": 1.9102,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.99992,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 10,
        "val_sales_cr": 0.00263,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 9.97964,
        "val_sales_cr": 0.0221,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 73.71556,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 9.9997,
        "val_sales_cr": 0.0165,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.4808,
        "val_sales_cr": 0.05071,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH MN -G GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.13348,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 90.57064,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 9.99877,
        "val_sales_cr": 161.59754,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 0.25406,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99969,
        "val_sales_cr": 0.00322,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 7.57642,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.83695,
        "val_sales_cr": 0.07852,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.98702,
        "val_sales_cr": 1.55904,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.9964,
        "val_sales_cr": 40.38691,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.80909,
        "val_sales_cr": 0.55655,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.98549,
        "val_sales_cr": 0.14149,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00015,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10.00023,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.96628,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.94123,
        "val_sales_cr": 0.04943,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99999,
        "val_sales_cr": 0.22427,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 9.99997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.69693,
        "val_sales_cr": 0.3334,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.75971,
        "val_sales_cr": 0.07035,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.99957,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 5.20226,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 9.99928,
        "val_sales_cr": 0.01248,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.55796,
        "val_sales_cr": 0.49196,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.95833,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2.00222,
        "val_sales_cr": 0.06778,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.11692,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 10.00833,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.65115,
        "val_sales_cr": 0.02288,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 21.08806,
        "val_sales_cr": 19.13704,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.40929,
        "val_sales_cr": 15.07335,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99946,
        "val_sales_cr": 1.35625,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.29976,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99971,
        "val_sales_cr": 1.18811,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 1.97789,
        "val_sales_cr": 0.00244,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.02008,
        "val_sales_cr": 0.00932,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.24438,
        "val_sales_cr": 0.00065,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 21.31372,
        "val_sales_cr": 3.63607,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.64299,
        "val_sales_cr": 0.50033,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.35908,
        "val_sales_cr": 4.73813,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 17.8236,
        "val_sales_cr": 0.00705,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.15485,
        "val_sales_cr": 1.18842,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.5999,
        "val_sales_cr": 0.30871,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.99996,
        "val_sales_cr": 0.22316,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 2.01101,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 1.93831,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 19.99892,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 17.13791,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.99946,
        "val_sales_cr": 0.00744,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "330000",
        "price": 23.99012,
        "val_sales_cr": 0.00219,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "338400",
        "price": 19.00465,
        "val_sales_cr": 0.0229,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 1.97585,
        "val_sales_cr": 0.00004,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 2.00032,
        "val_sales_cr": 0.00062,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.02092,
        "val_sales_cr": 0.00091,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.1373,
        "val_sales_cr": 0.0352,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.99996,
        "val_sales_cr": 0.02361,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "44000",
        "price": 5.00112,
        "val_sales_cr": 0.00089,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 3.00006,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.10058,
        "val_sales_cr": 0.21732,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.17038,
        "val_sales_cr": 0.04968,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 266.45744,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.01236,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.8578,
        "val_sales_cr": 0.71972,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99782,
        "val_sales_cr": 153.62619,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5.0001,
        "val_sales_cr": 0.02065,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99673,
        "val_sales_cr": 10.21271,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 61.81526,
        "val_sales_cr": 0.00519,
        "vol_sales": 0
    },
    {
        "sku": "PRL 500 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "500000",
        "price": 20.00115,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 19.71978,
        "val_sales_cr": 0.00548,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "528000",
        "price": 28.88626,
        "val_sales_cr": 0.00244,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.98865,
        "val_sales_cr": 0.33911,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99996,
        "val_sales_cr": 77.79854,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.07386,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0.27363,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "550000",
        "price": 65.01226,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.98864,
        "val_sales_cr": 0.39315,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.99942,
        "val_sales_cr": 0.72735,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99996,
        "val_sales_cr": 0.05668,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.99999,
        "val_sales_cr": 0.26742,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.67717,
        "val_sales_cr": 0.00036,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.82418,
        "val_sales_cr": 0.24636,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.8031,
        "val_sales_cr": 0.00099,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.75002,
        "val_sales_cr": 0.0973,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.78295,
        "val_sales_cr": 0.00456,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 7.64,
        "val_sales_cr": 0.00013,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.58582,
        "val_sales_cr": 0.35902,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 5.1015,
        "val_sales_cr": 0.01891,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 4.8513,
        "val_sales_cr": 0.00013,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "75200",
        "price": 5.00001,
        "val_sales_cr": 0.10609,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.87435,
        "val_sales_cr": 0.16089,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.98342,
        "val_sales_cr": 1.49261,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 69.29004,
        "val_sales_cr": 3.06956,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.09761,
        "val_sales_cr": 0.10321,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 70.76581,
        "val_sales_cr": 4.14089,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.27861,
        "val_sales_cr": 5.80334,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.95013,
        "val_sales_cr": 3.10617,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 68.96925,
        "val_sales_cr": 4.2645,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 68.9223,
        "val_sales_cr": 16.03096,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.85714,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 4.7619,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "940000",
        "price": 63.8971,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99936,
        "val_sales_cr": 1.40441,
        "vol_sales": 0
    },
    {
        "sku": "-G ORGNL CLC CHHT BHM EDTN+RS.2 OFF",
        "packsize": "250000",
        "price": 19.99888,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS MLK WRLD LRGST SLLNG",
        "packsize": "507600",
        "price": 30.52035,
        "val_sales_cr": 0.00105,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "209000",
        "price": 10.00671,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.91364,
        "val_sales_cr": 2.58553,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 5.00004,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+WHT [GLCS]",
        "packsize": "82500",
        "price": 4.97902,
        "val_sales_cr": 0.04292,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.99917,
        "val_sales_cr": 0.0844,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.75484,
        "val_sales_cr": 0.00544,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99997,
        "val_sales_cr": 4.07941,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 9.99934,
        "val_sales_cr": 9.6946,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.71158,
        "val_sales_cr": 0.00482,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10.00001,
        "val_sales_cr": 0.30273,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 0.0005,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.98682,
        "val_sales_cr": 0.00652,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99995,
        "val_sales_cr": 2.928,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.7668,
        "val_sales_cr": 0.02684,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 10.00033,
        "val_sales_cr": 0.003,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99973,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 8.17987,
        "val_sales_cr": 0.00661,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 10.14286,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 9.99984,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.94643,
        "val_sales_cr": 0.00006,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.99653,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.69047,
        "val_sales_cr": 0.02246,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99997,
        "val_sales_cr": 0.38443,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.01929,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.38823,
        "val_sales_cr": 0.01138,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.6408,
        "val_sales_cr": 0.50092,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.17506,
        "val_sales_cr": 0.76685,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 3.21041,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 3.46697,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 2.0027,
        "val_sales_cr": 0.00015,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.00101,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 21.05195,
        "val_sales_cr": 0.13401,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.27397,
        "val_sales_cr": 0.04681,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.99991,
        "val_sales_cr": 0.08049,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.4656,
        "val_sales_cr": 0.01414,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 19.99961,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2,
        "val_sales_cr": 0.00301,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 2.0026,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20.00534,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.77424,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.00003,
        "val_sales_cr": 0.02295,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.07947,
        "val_sales_cr": 0.00347,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 67.83135,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.66798,
        "val_sales_cr": 0.03743,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99984,
        "val_sales_cr": 35.89987,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.1879,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.9996,
        "val_sales_cr": 1.35158,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 32.08,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 31.27049,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.75075,
        "val_sales_cr": 0.00711,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 12.96394,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00175,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0.00555,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 0.15621,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.95582,
        "val_sales_cr": 0.00218,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99999,
        "val_sales_cr": 0.81508,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.60991,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 5.00023,
        "val_sales_cr": 0.00216,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.00001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00784,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.9705,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.60719,
        "val_sales_cr": 0.00486,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.85919,
        "val_sales_cr": 0.00344,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 75.00458,
        "val_sales_cr": 0.37203,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 71.15153,
        "val_sales_cr": 0.29803,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.91659,
        "val_sales_cr": 0.03696,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 70.48804,
        "val_sales_cr": 0.22595,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 74.96965,
        "val_sales_cr": 0.84267,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.99169,
        "val_sales_cr": 0.52819,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 70.73793,
        "val_sales_cr": 0.24449,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.57052,
        "val_sales_cr": 0.52607,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "940000",
        "price": 61.06143,
        "val_sales_cr": 0.03598,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99999,
        "val_sales_cr": 0.12222,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.98791,
        "val_sales_cr": 0.47778,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+WHT [GLCS]",
        "packsize": "82500",
        "price": 5.00052,
        "val_sales_cr": 0.00096,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 72.55751,
        "val_sales_cr": 0.06864,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 9.99749,
        "val_sales_cr": 0.0004,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44894,
        "val_sales_cr": 0.00208,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 16.5271,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 28.33762,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.03561,
        "val_sales_cr": 0.00034,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99934,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99997,
        "val_sales_cr": 0.59744,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.54686,
        "val_sales_cr": 0.04098,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.94628,
        "val_sales_cr": 0.14311,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99771,
        "val_sales_cr": 10.14294,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.29786,
        "val_sales_cr": 0.12377,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.98206,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99917,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99975,
        "val_sales_cr": 0.01186,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.0004,
        "val_sales_cr": 0.01011,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10.00058,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.99921,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99986,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 4.77329,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.29689,
        "val_sales_cr": 0.11567,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99996,
        "val_sales_cr": 2.38382,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.84299,
        "val_sales_cr": 0.00503,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "190000",
        "price": 10.00103,
        "val_sales_cr": 0.01069,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 22.02857,
        "val_sales_cr": 0.00069,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.94168,
        "val_sales_cr": 6.75101,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.19206,
        "val_sales_cr": 5.93084,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 8.51029,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 1.94484,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 5.55342,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.00033,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.23218,
        "val_sales_cr": 0.02308,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 28.61709,
        "val_sales_cr": 0.00348,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.41825,
        "val_sales_cr": 0.52249,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.32979,
        "val_sales_cr": 0.442,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.97098,
        "val_sales_cr": 1.5184,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.22993,
        "val_sales_cr": 0.27912,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.95459,
        "val_sales_cr": 0.02248,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2,
        "val_sales_cr": 0.04382,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 4.23424,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 2.12967,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 21.33907,
        "val_sales_cr": 0.0067,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.18911,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 1.21461,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2.84402,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.99986,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.12093,
        "val_sales_cr": 0.00566,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.26195,
        "val_sales_cr": 0.00358,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 2.05281,
        "val_sales_cr": 0.00979,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.96545,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 2.99994,
        "val_sales_cr": 0.00545,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 2.99899,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 20.82329,
        "val_sales_cr": 0.00712,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 4.99978,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 38.25706,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99991,
        "val_sales_cr": 0.00544,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.83756,
        "val_sales_cr": 0.09312,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99908,
        "val_sales_cr": 23.45381,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5.00311,
        "val_sales_cr": 0.00016,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99607,
        "val_sales_cr": 0.09597,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 26.20069,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 30.00551,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.67363,
        "val_sales_cr": 0.02637,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 9.93055,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5.00026,
        "val_sales_cr": 0.00189,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.9625,
        "val_sales_cr": 0.01052,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.00043,
        "val_sales_cr": 0.00464,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5.00032,
        "val_sales_cr": 0.08974,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.99999,
        "val_sales_cr": 0.12886,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5,
        "val_sales_cr": 0.00029,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99996,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.99981,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99095,
        "val_sales_cr": 0.00011,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.63498,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 70.11237,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.70051,
        "val_sales_cr": 0.00394,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.64491,
        "val_sales_cr": 0.00485,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.1745,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.18928,
        "val_sales_cr": 0.00184,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.30897,
        "val_sales_cr": 0.35355,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 66.24364,
        "val_sales_cr": 0.38151,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.99113,
        "val_sales_cr": 0.03739,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 73.35543,
        "val_sales_cr": 4.3353,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.21655,
        "val_sales_cr": 2.94598,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.948,
        "val_sales_cr": 1.61895,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 74.69733,
        "val_sales_cr": 1.29514,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 68.4676,
        "val_sales_cr": 3.31439,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.8894,
        "val_sales_cr": 0.00159,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 5.10979,
        "val_sales_cr": 0.0247,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00002,
        "val_sales_cr": 0.24851,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.00003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.86076,
        "val_sales_cr": 0.33094,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 70.75025,
        "val_sales_cr": 0.00714,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 3.53666,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 5.69357,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99992,
        "val_sales_cr": 0.09188,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 8.8461,
        "val_sales_cr": 0.00278,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.98609,
        "val_sales_cr": 0.04962,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99898,
        "val_sales_cr": 2.1212,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.30838,
        "val_sales_cr": 0.02171,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.98206,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99898,
        "val_sales_cr": 0.00394,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.0004,
        "val_sales_cr": 0.01011,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99986,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 22.61876,
        "val_sales_cr": 0.03566,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 0.69509,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 10,
        "val_sales_cr": 0.00106,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "190000",
        "price": 10.00103,
        "val_sales_cr": 0.01069,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 21.13068,
        "val_sales_cr": 2.35312,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.24189,
        "val_sales_cr": 2.73825,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 2.23322,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 1.46132,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 1.06187,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.00694,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.51726,
        "val_sales_cr": 0.15149,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.86311,
        "val_sales_cr": 0.12609,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.98374,
        "val_sales_cr": 0.67578,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.84088,
        "val_sales_cr": 0.11312,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2,
        "val_sales_cr": 0.04382,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 2.85775,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 2.12967,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.00165,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 0.82164,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.99984,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.18532,
        "val_sales_cr": 0.00302,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 5.00007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 2.99899,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 5.28251,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.89815,
        "val_sales_cr": 0.02793,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99921,
        "val_sales_cr": 3.59923,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99907,
        "val_sales_cr": 0.00108,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.62659,
        "val_sales_cr": 0.00554,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99999,
        "val_sales_cr": 1.66427,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5.16807,
        "val_sales_cr": 0.00006,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.00029,
        "val_sales_cr": 0.00175,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5.00114,
        "val_sales_cr": 0.02817,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.9998,
        "val_sales_cr": 0.00986,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99995,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99987,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 70.07374,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.68437,
        "val_sales_cr": 0.00299,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.72677,
        "val_sales_cr": 0.0007,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.54095,
        "val_sales_cr": 0.15145,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 63.16502,
        "val_sales_cr": 0.08754,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.89692,
        "val_sales_cr": 1.17138,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.13364,
        "val_sales_cr": 1.30214,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.94659,
        "val_sales_cr": 0.59622,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 75.78343,
        "val_sales_cr": 0.39303,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.01803,
        "val_sales_cr": 0.8038,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00005,
        "val_sales_cr": 0.03724,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.83676,
        "val_sales_cr": 0.04297,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 72.55751,
        "val_sales_cr": 0.06864,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 9.99749,
        "val_sales_cr": 0.0004,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44894,
        "val_sales_cr": 0.00208,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 12.99044,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 22.64405,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.03561,
        "val_sales_cr": 0.00034,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99934,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99998,
        "val_sales_cr": 0.50556,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.60226,
        "val_sales_cr": 0.0382,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.92528,
        "val_sales_cr": 0.09349,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99738,
        "val_sales_cr": 8.02173,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.29563,
        "val_sales_cr": 0.10206,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99917,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 10.00013,
        "val_sales_cr": 0.00792,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10.00058,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.99921,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99992,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 4.77329,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.61244,
        "val_sales_cr": 0.08001,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99994,
        "val_sales_cr": 1.68873,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.80178,
        "val_sales_cr": 0.00397,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 22.02857,
        "val_sales_cr": 0.00069,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.84193,
        "val_sales_cr": 4.3979,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.14949,
        "val_sales_cr": 3.19259,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 6.27707,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 2.99999,
        "val_sales_cr": 0.48352,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 4.49155,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.00032,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.23218,
        "val_sales_cr": 0.02308,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 28.61709,
        "val_sales_cr": 0.00348,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.3781,
        "val_sales_cr": 0.371,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.52167,
        "val_sales_cr": 0.31591,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.96076,
        "val_sales_cr": 0.84262,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.83283,
        "val_sales_cr": 0.166,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.95459,
        "val_sales_cr": 0.02248,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.99996,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 1.37649,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 21.33907,
        "val_sales_cr": 0.0067,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.94562,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 0.39297,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2.84402,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.99987,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.12093,
        "val_sales_cr": 0.00566,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.74288,
        "val_sales_cr": 0.00056,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 2.05281,
        "val_sales_cr": 0.00979,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.72745,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 2.99994,
        "val_sales_cr": 0.00545,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 20.82329,
        "val_sales_cr": 0.00712,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 4.99978,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 32.97455,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99991,
        "val_sales_cr": 0.00544,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.81206,
        "val_sales_cr": 0.06519,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99905,
        "val_sales_cr": 19.85458,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5.00311,
        "val_sales_cr": 0.00016,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99604,
        "val_sales_cr": 0.09489,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 26.20069,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 30.00551,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.68629,
        "val_sales_cr": 0.02084,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 8.26629,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5.00026,
        "val_sales_cr": 0.00189,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.96134,
        "val_sales_cr": 0.01046,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.00052,
        "val_sales_cr": 0.00289,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99995,
        "val_sales_cr": 0.06157,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.11899,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5,
        "val_sales_cr": 0.00029,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.99981,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99095,
        "val_sales_cr": 0.00011,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.63498,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 70.15029,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.75187,
        "val_sales_cr": 0.00095,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.64491,
        "val_sales_cr": 0.00485,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.1745,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 8.88558,
        "val_sales_cr": 0.00113,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.13606,
        "val_sales_cr": 0.20209,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 67.21926,
        "val_sales_cr": 0.29397,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.99113,
        "val_sales_cr": 0.03739,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 73.52665,
        "val_sales_cr": 3.16392,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.28236,
        "val_sales_cr": 1.64384,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.94882,
        "val_sales_cr": 1.02273,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 74.23382,
        "val_sales_cr": 0.90211,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 68.29322,
        "val_sales_cr": 2.5106,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.8894,
        "val_sales_cr": 0.00159,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 5.10979,
        "val_sales_cr": 0.0247,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00001,
        "val_sales_cr": 0.21127,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.00003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.86436,
        "val_sales_cr": 0.28796,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 70.75025,
        "val_sales_cr": 0.00714,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 63.5,
        "val_sales_cr": 0.0032,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 48.90927,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 82.13482,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00125,
        "val_sales_cr": 0.0016,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 2.00935,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.88179,
        "val_sales_cr": 0.09122,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.98052,
        "val_sales_cr": 0.48518,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99917,
        "val_sales_cr": 25.54919,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.4718,
        "val_sales_cr": 0.0837,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99833,
        "val_sales_cr": 0.00479,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99982,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99886,
        "val_sales_cr": 0.00351,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10.00053,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.50191,
        "val_sales_cr": 0.00946,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.25217,
        "val_sales_cr": 0.00012,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 150 GM EWRPK - G [GLUCOS]",
        "packsize": "150000",
        "price": 9.64225,
        "val_sales_cr": 0.1663,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 12.01429,
        "val_sales_cr": 0.00042,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.60809,
        "val_sales_cr": 0.16154,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "169200",
        "price": 10.65442,
        "val_sales_cr": 0.01271,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99989,
        "val_sales_cr": 1.50066,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 10.05952,
        "val_sales_cr": 0.03193,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 22,
        "val_sales_cr": 0.00508,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.48947,
        "val_sales_cr": 6.23253,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.39112,
        "val_sales_cr": 5.40296,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99995,
        "val_sales_cr": 5.75679,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.2812,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 0.38029,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99999,
        "val_sales_cr": 6.43679,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2,
        "val_sales_cr": 0.07856,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.53486,
        "val_sales_cr": 0.7447,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.54549,
        "val_sales_cr": 0.6199,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.84028,
        "val_sales_cr": 0.58393,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 20.00086,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.11527,
        "val_sales_cr": 0.20256,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 25.01747,
        "val_sales_cr": 0.00172,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.98695,
        "val_sales_cr": 0.03808,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 1.7211,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+50 GM EXTR [GLCS]",
        "packsize": "350000",
        "price": 20.00007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 21.31818,
        "val_sales_cr": 0.00507,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "300000",
        "price": 20,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 1.08406,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "330000",
        "price": 25.01538,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3.00037,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.0525,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "352000",
        "price": 20.01618,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.28723,
        "val_sales_cr": 0.00006,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 20.2745,
        "val_sales_cr": 0.03651,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.14907,
        "val_sales_cr": 0.00005,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 3.11611,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 199.78239,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.90986,
        "val_sales_cr": 0.22221,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99978,
        "val_sales_cr": 116.82753,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99999,
        "val_sales_cr": 0.04848,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99935,
        "val_sales_cr": 3.50669,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 19.08046,
        "val_sales_cr": 0.00017,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "528000",
        "price": 26.61566,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.88032,
        "val_sales_cr": 0.02584,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 42.40209,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 4.99991,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.81354,
        "val_sales_cr": 0.03214,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5.00002,
        "val_sales_cr": 0.06048,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5.00004,
        "val_sales_cr": 0.06005,
        "vol_sales": 0
    },
    {
        "sku": "GM EWRPK - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "66000",
        "price": 4.99312,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5,
        "val_sales_cr": 0.00014,
        "vol_sales": 0
    },
    {
        "sku": "PRL 676.8 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "676800",
        "price": 76.09273,
        "val_sales_cr": 0.07041,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.60878,
        "val_sales_cr": 0.21624,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.00001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00036,
        "val_sales_cr": 0.00838,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 70.08108,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.93333,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.64218,
        "val_sales_cr": 0.03344,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.00052,
        "val_sales_cr": 0.00193,
        "vol_sales": 0
    },
    {
        "sku": "PRL 750 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "750000",
        "price": 70.21721,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "752000",
        "price": 74.49453,
        "val_sales_cr": 0.03883,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.41417,
        "val_sales_cr": 0.06312,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.96863,
        "val_sales_cr": 0.46027,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 67.45616,
        "val_sales_cr": 0.58287,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.99291,
        "val_sales_cr": 0.03714,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.27261,
        "val_sales_cr": 2.38158,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 76.66354,
        "val_sales_cr": 3.53726,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.99803,
        "val_sales_cr": 1.34922,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 73.8509,
        "val_sales_cr": 1.95523,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 68.99979,
        "val_sales_cr": 3.80796,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC NW BGGR CRSPR & TSTR",
        "packsize": "80000",
        "price": 10.00064,
        "val_sales_cr": 0.00313,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "846000",
        "price": 69.98228,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 5.00011,
        "val_sales_cr": 0.00927,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 5.00475,
        "val_sales_cr": 0.00053,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00001,
        "val_sales_cr": 0.54912,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.95373,
        "val_sales_cr": 1.36577,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 50.5283,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "1 KG PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 40.14706,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 9.69621,
        "val_sales_cr": 0.00136,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 8.29704,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 19.14023,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "100000",
        "price": 10.16667,
        "val_sales_cr": 0.00002,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99972,
        "val_sales_cr": 0.53782,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.28984,
        "val_sales_cr": 0.00161,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.92915,
        "val_sales_cr": 0.0973,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99311,
        "val_sales_cr": 4.26387,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.73855,
        "val_sales_cr": 0.03177,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.75065,
        "val_sales_cr": 0.00075,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00031,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10.00053,
        "val_sales_cr": 0.02066,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99898,
        "val_sales_cr": 0.00196,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.29412,
        "val_sales_cr": 0.00007,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 150 GM EWRPK - G [GLUCOS]",
        "packsize": "150000",
        "price": 9.75532,
        "val_sales_cr": 0.00165,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "150000",
        "price": 9.99194,
        "val_sales_cr": 0.00012,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 10.00076,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 20.00364,
        "val_sales_cr": 10.34113,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.94823,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 0.01604,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "192000",
        "price": 9.60953,
        "val_sales_cr": 0.03339,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 22.04698,
        "val_sales_cr": 0.00066,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.34644,
        "val_sales_cr": 26.33788,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.56319,
        "val_sales_cr": 0.53127,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 0.12991,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 9.73817,
        "val_sales_cr": 0.0015,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 0.00533,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 1.98501,
        "val_sales_cr": 0.00285,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 19.96871,
        "val_sales_cr": 0.25604,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 20.65887,
        "val_sales_cr": 0.29587,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 23.52782,
        "val_sales_cr": 0.16867,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.17019,
        "val_sales_cr": 0.04808,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.11337,
        "val_sales_cr": 0.12319,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 7.51593,
        "val_sales_cr": 0.0175,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 19.54163,
        "val_sales_cr": 0.00404,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 19.3994,
        "val_sales_cr": 0.07086,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.95759,
        "val_sales_cr": 0.04207,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "330000",
        "price": 14.17647,
        "val_sales_cr": 0.00005,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "352000",
        "price": 19.38364,
        "val_sales_cr": 0.03977,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.32004,
        "val_sales_cr": 0.00036,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 18.68603,
        "val_sales_cr": 0.02117,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.14815,
        "val_sales_cr": 0.00003,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 4.99999,
        "val_sales_cr": 0.35429,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.71312,
        "val_sales_cr": 0.01111,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.98591,
        "val_sales_cr": 0.13721,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5.00236,
        "val_sales_cr": 0.00085,
        "vol_sales": 0
    },
    {
        "sku": "PRL 500 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "500000",
        "price": 24.13043,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 19.45797,
        "val_sales_cr": 0.02213,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "528000",
        "price": 28.9617,
        "val_sales_cr": 0.00476,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.735,
        "val_sales_cr": 0.00133,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.0433,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "550000",
        "price": 28.29897,
        "val_sales_cr": 0.00027,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 676.8 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "676800",
        "price": 67.4,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 5.00029,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 72.74038,
        "val_sales_cr": 0.07677,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.99565,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 750 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "750000",
        "price": 59.16,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 6.99863,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.99617,
        "val_sales_cr": 0.00588,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 66.90305,
        "val_sales_cr": 0.07191,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 83.41996,
        "val_sales_cr": 0.00803,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.47895,
        "val_sales_cr": 1.88565,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.67265,
        "val_sales_cr": 2.38802,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.88176,
        "val_sales_cr": 1.12096,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 76.22459,
        "val_sales_cr": 0.64131,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.55985,
        "val_sales_cr": 1.17975,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 64.2976,
        "val_sales_cr": 0.00966,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC NW BGGR CRSPR & TSTR",
        "packsize": "80000",
        "price": 9.93605,
        "val_sales_cr": 0.00017,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "846000",
        "price": 78.17143,
        "val_sales_cr": 0.00137,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.17722,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 61.32353,
        "val_sales_cr": 0.00021,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.00771,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "180000",
        "price": 9.85155,
        "val_sales_cr": 0.00604,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.71922,
        "val_sales_cr": 0.03292,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 59.75,
        "val_sales_cr": 0.00005,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 9.68217,
        "val_sales_cr": 0.00112,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99982,
        "val_sales_cr": 1.96677,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 3.498,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99991,
        "val_sales_cr": 0.06907,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.32452,
        "val_sales_cr": 0.00726,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.98218,
        "val_sales_cr": 0.12743,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.98207,
        "val_sales_cr": 0.92629,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.53158,
        "val_sales_cr": 0.09359,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 10.24117,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00021,
        "val_sales_cr": 0.03307,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.99897,
        "val_sales_cr": 0.00194,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.06452,
        "val_sales_cr": 0.00006,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.9991,
        "val_sales_cr": 0.00776,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.93602,
        "val_sales_cr": 0.03696,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 20.09348,
        "val_sales_cr": 0.5219,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.47083,
        "val_sales_cr": 0.00398,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "169200",
        "price": 11.03673,
        "val_sales_cr": 0.00316,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.9976,
        "val_sales_cr": 0.00241,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "190000",
        "price": 9.5215,
        "val_sales_cr": 0.00509,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 20.61298,
        "val_sales_cr": 0.00587,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.20366,
        "val_sales_cr": 1.33546,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22,
        "val_sales_cr": 0.00664,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 3,
        "val_sales_cr": 0.00003,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.0001,
        "val_sales_cr": 0.01924,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 10.48404,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 3,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.08881,
        "val_sales_cr": 0.02034,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 19.43124,
        "val_sales_cr": 0.39504,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 20.48547,
        "val_sales_cr": 0.26908,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 21.41577,
        "val_sales_cr": 0.02799,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 20.01354,
        "val_sales_cr": 0.00089,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 19.73011,
        "val_sales_cr": 0.08986,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 19.50052,
        "val_sales_cr": 0.02454,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50.00302,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.9556,
        "val_sales_cr": 0.17126,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 20.77113,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.26237,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 20.06515,
        "val_sales_cr": 0.01041,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20.18988,
        "val_sales_cr": 0.00683,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.23555,
        "val_sales_cr": 0.04136,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.99955,
        "val_sales_cr": 5.24773,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3.00013,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 2.8067,
        "val_sales_cr": 0.00011,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 2.26563,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.98016,
        "val_sales_cr": 0.16446,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.15835,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.01821,
        "val_sales_cr": 0.00083,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.36005,
        "val_sales_cr": 0.00309,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.99917,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.06945,
        "val_sales_cr": 0.00116,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 10.00532,
        "val_sales_cr": 0.00038,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 20.0173,
        "val_sales_cr": 0.02997,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 4.81061,
        "val_sales_cr": 0.00019,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 5.36469,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.375,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.72637,
        "val_sales_cr": 0.0371,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99813,
        "val_sales_cr": 3.88808,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99892,
        "val_sales_cr": 0.00648,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5.00001,
        "val_sales_cr": 0.07205,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 30.12329,
        "val_sales_cr": 0.00154,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 28.48803,
        "val_sales_cr": 0.00309,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.77213,
        "val_sales_cr": 0.00953,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99925,
        "val_sales_cr": 1.95181,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.76658,
        "val_sales_cr": 0.00324,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.90501,
        "val_sales_cr": 0.00453,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.00613,
        "val_sales_cr": 0.00033,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99997,
        "val_sales_cr": 0.12157,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.9602,
        "val_sales_cr": 0.08951,
        "vol_sales": 0
    },
    {
        "sku": "GM EWRPK - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "66000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.6,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.98418,
        "val_sales_cr": 0.00016,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.99984,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99998,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.96307,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 3.52142,
        "val_sales_cr": 0.00029,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 4.99991,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 7.0002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 69.72274,
        "val_sales_cr": 0.20839,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 73.21613,
        "val_sales_cr": 0.04458,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.0493,
        "val_sales_cr": 0.03425,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 75.35659,
        "val_sales_cr": 0.58098,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 70.34594,
        "val_sales_cr": 1.37445,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.42536,
        "val_sales_cr": 0.00573,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 64.14097,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 4.69362,
        "val_sales_cr": 0.00085,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00161,
        "val_sales_cr": 0.02677,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.00007,
        "val_sales_cr": 0.00423,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "418000",
        "price": 19.49694,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.7612,
        "val_sales_cr": 0.091,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 4.99995,
        "val_sales_cr": 0.02009,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 9.98527,
        "val_sales_cr": 0.03098,
        "vol_sales": 0
    },
    {
        "sku": "PRL-G 93 GM PLPCH KSM DL CHN CNNMN BSCTS",
        "packsize": "93000",
        "price": 9.98901,
        "val_sales_cr": 0.00009,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 72.08945,
        "val_sales_cr": 0.07189,
        "vol_sales": 0
    },
    {
        "sku": "1 KG PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 40.14706,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 8.75602,
        "val_sales_cr": 0.01717,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 6.54527,
        "val_sales_cr": 0.09557,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99964,
        "val_sales_cr": 72.39753,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 9.99817,
        "val_sales_cr": 117.14207,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99723,
        "val_sales_cr": 0.24363,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "100000",
        "price": 9.89404,
        "val_sales_cr": 0.00425,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00015,
        "val_sales_cr": 0.01307,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99911,
        "val_sales_cr": 5.98888,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.67672,
        "val_sales_cr": 0.26045,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.96443,
        "val_sales_cr": 1.96561,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99102,
        "val_sales_cr": 29.40094,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.564,
        "val_sales_cr": 1.1589,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.9422,
        "val_sales_cr": 0.12022,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00163,
        "val_sales_cr": 0.00246,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10.00053,
        "val_sales_cr": 0.02066,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.33885,
        "val_sales_cr": 0.02807,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.95148,
        "val_sales_cr": 0.09124,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99996,
        "val_sales_cr": 0.23202,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10.0004,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.69241,
        "val_sales_cr": 0.34585,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.81242,
        "val_sales_cr": 0.59809,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.73684,
        "val_sales_cr": 0.00002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 4.77329,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 150 GM EWRPK - G [GLUCOS]",
        "packsize": "150000",
        "price": 9.69445,
        "val_sales_cr": 0.19718,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "150000",
        "price": 9.87144,
        "val_sales_cr": 0.04706,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 9.98582,
        "val_sales_cr": 0.0019,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 20.91224,
        "val_sales_cr": 3.12294,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.74995,
        "val_sales_cr": 0.05092,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "169200",
        "price": 10.72835,
        "val_sales_cr": 0.01586,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99789,
        "val_sales_cr": 6.31916,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.09583,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.99085,
        "val_sales_cr": 0.0994,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "190000",
        "price": 9.84116,
        "val_sales_cr": 0.01578,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "192000",
        "price": 9.61002,
        "val_sales_cr": 0.03432,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.72432,
        "val_sales_cr": 0.04881,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.7602,
        "val_sales_cr": 21.23395,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.52763,
        "val_sales_cr": 11.57522,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.9983,
        "val_sales_cr": 28.79658,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 9.79159,
        "val_sales_cr": 0.04634,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 2.99999,
        "val_sales_cr": 8.81754,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99654,
        "val_sales_cr": 11.91898,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 2.00967,
        "val_sales_cr": 0.00461,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.03203,
        "val_sales_cr": 0.01797,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.44704,
        "val_sales_cr": 0.19048,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 2.00647,
        "val_sales_cr": 0.0071,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.95403,
        "val_sales_cr": 7.41376,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.937,
        "val_sales_cr": 2.26099,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 23.77301,
        "val_sales_cr": 3.26708,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 17.77574,
        "val_sales_cr": 0.01502,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.62935,
        "val_sales_cr": 1.97071,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.9582,
        "val_sales_cr": 0.19589,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 48.5786,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.12437,
        "val_sales_cr": 0.48372,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 21.53238,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.22325,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 1.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 7.51593,
        "val_sales_cr": 0.0175,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 1.71476,
        "val_sales_cr": 0.02061,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00481,
        "val_sales_cr": 0.05115,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 19.94987,
        "val_sales_cr": 0.01775,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 19.69135,
        "val_sales_cr": 0.08944,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "300000",
        "price": 15,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.41114,
        "val_sales_cr": 0.06853,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.99964,
        "val_sales_cr": 4.15058,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3.00008,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "330000",
        "price": 23.63704,
        "val_sales_cr": 0.00223,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "338400",
        "price": 19.31834,
        "val_sales_cr": 0.03401,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 2.99987,
        "val_sales_cr": 0.1671,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 2.99392,
        "val_sales_cr": 0.12631,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.9949,
        "val_sales_cr": 0.02509,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.0004,
        "val_sales_cr": 0.00075,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "352000",
        "price": 20.88877,
        "val_sales_cr": 0.12849,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.02574,
        "val_sales_cr": 0.01929,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 1.90678,
        "val_sales_cr": 0.19982,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.56649,
        "val_sales_cr": 0.07662,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.05607,
        "val_sales_cr": 0.00613,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.87331,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.00163,
        "val_sales_cr": 0.02438,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 10.00532,
        "val_sales_cr": 0.00038,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "44000",
        "price": 2,
        "val_sales_cr": 0.00003,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 20.29022,
        "val_sales_cr": 0.04152,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 3.02646,
        "val_sales_cr": 0.00623,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.14136,
        "val_sales_cr": 0.19977,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.01906,
        "val_sales_cr": 0.04669,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 50 GM - G [GLUCOS]",
        "packsize": "50000",
        "price": 1.81736,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 284.03603,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.80369,
        "val_sales_cr": 0.04039,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.83961,
        "val_sales_cr": 1.30164,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99766,
        "val_sales_cr": 181.28337,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99999,
        "val_sales_cr": 1.25144,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99709,
        "val_sales_cr": 19.5397,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 49.85619,
        "val_sales_cr": 0.00673,
        "vol_sales": 0
    },
    {
        "sku": "PRL 500 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "500000",
        "price": 24.13043,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 21.49756,
        "val_sales_cr": 0.04936,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "528000",
        "price": 28.22928,
        "val_sales_cr": 0.00933,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.74132,
        "val_sales_cr": 0.5318,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99913,
        "val_sales_cr": 48.65447,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 4.99997,
        "val_sales_cr": 0.01884,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.85033,
        "val_sales_cr": 0.74785,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "550000",
        "price": 28.29897,
        "val_sales_cr": 0.00027,
        "vol_sales": 0
    },
    {
        "sku": "PRL 56 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "56000",
        "price": 3,
        "val_sales_cr": 0.00008,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.93571,
        "val_sales_cr": 1.49338,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.8387,
        "val_sales_cr": 1.1751,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99918,
        "val_sales_cr": 4.26462,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.98377,
        "val_sales_cr": 1.42924,
        "vol_sales": 0
    },
    {
        "sku": "GM EWRPK - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "66000",
        "price": 4.99312,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.9822,
        "val_sales_cr": 0.01358,
        "vol_sales": 0
    },
    {
        "sku": "PRL 676.8 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "676800",
        "price": 76.09273,
        "val_sales_cr": 0.07041,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.72314,
        "val_sales_cr": 0.75882,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.9865,
        "val_sales_cr": 0.01492,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.77227,
        "val_sales_cr": 0.11175,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0.0127,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.75655,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "71500",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 5.57867,
        "val_sales_cr": 0.01671,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.62126,
        "val_sales_cr": 0.4264,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 5.01727,
        "val_sales_cr": 0.10931,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 4.99035,
        "val_sales_cr": 0.1462,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "75000",
        "price": 4.75781,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "75200",
        "price": 5.00001,
        "val_sales_cr": 0.10609,
        "vol_sales": 0
    },
    {
        "sku": "PRL 750 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "750000",
        "price": 69.18959,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "752000",
        "price": 74.49453,
        "val_sales_cr": 0.03883,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.81248,
        "val_sales_cr": 0.21077,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+12.5% EXTR",
        "packsize": "90000",
        "price": 9.97959,
        "val_sales_cr": 0.0002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.05177,
        "val_sales_cr": 2.59763,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 68.66711,
        "val_sales_cr": 7.95256,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.59297,
        "val_sales_cr": 0.33144,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.72037,
        "val_sales_cr": 8.90592,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.5553,
        "val_sales_cr": 7.9716,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.73286,
        "val_sales_cr": 5.53984,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 71.13913,
        "val_sales_cr": 9.11235,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.24092,
        "val_sales_cr": 34.59784,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 64.44539,
        "val_sales_cr": 0.01357,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC NW BGGR CRSPR & TSTR",
        "packsize": "80000",
        "price": 9.89936,
        "val_sales_cr": 0.01567,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "846000",
        "price": 78.17143,
        "val_sales_cr": 0.00137,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.5947,
        "val_sales_cr": 0.00905,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 74.18293,
        "val_sales_cr": 0.06545,
        "vol_sales": 0
    },
    {
        "sku": "94 GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "94000",
        "price": 4.9571,
        "val_sales_cr": 0.01084,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 5.07941,
        "val_sales_cr": 0.03397,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "940000",
        "price": 64.23696,
        "val_sales_cr": 0.08217,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 5.00475,
        "val_sales_cr": 0.00053,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.98758,
        "val_sales_cr": 0.48983,
        "vol_sales": 0
    },
    {
        "sku": "-G ORGNL CLC CHHT BHM EDTN+RS.2 OFF",
        "packsize": "250000",
        "price": 20.01136,
        "val_sales_cr": 0.00018,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS MLK WRLD LRGST SLLNG",
        "packsize": "507600",
        "price": 30.52035,
        "val_sales_cr": 0.00105,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "180000",
        "price": 9.83743,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "209000",
        "price": 10.01047,
        "val_sales_cr": 0.00019,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 2.99999,
        "val_sales_cr": 0.05374,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "418000",
        "price": 19.49694,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.9055,
        "val_sales_cr": 4.69484,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.90435,
        "val_sales_cr": 0.00533,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+WHT [GLCS]",
        "packsize": "82500",
        "price": 4.97902,
        "val_sales_cr": 0.04292,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 72.92659,
        "val_sales_cr": 0.0147,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.99989,
        "val_sales_cr": 0.07508,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.90974,
        "val_sales_cr": 0.01499,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44904,
        "val_sales_cr": 0.00689,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10.00001,
        "val_sales_cr": 0.71319,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 1.1874,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99973,
        "val_sales_cr": 0.04122,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.48326,
        "val_sales_cr": 0.00346,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.92379,
        "val_sales_cr": 0.00501,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99518,
        "val_sales_cr": 0.42608,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 8.3344,
        "val_sales_cr": 0.03687,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00163,
        "val_sales_cr": 0.00246,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99976,
        "val_sales_cr": 0.02512,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.99924,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99998,
        "val_sales_cr": 0.24955,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 10.08696,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.7473,
        "val_sales_cr": 0.00946,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.9759,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "192000",
        "price": 9.62668,
        "val_sales_cr": 0.00093,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.97368,
        "val_sales_cr": 0.00685,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 21.02444,
        "val_sales_cr": 0.28718,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.32973,
        "val_sales_cr": 0.24783,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 9.97333,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 2.99998,
        "val_sales_cr": 4.98819,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 2.10847,
        "val_sales_cr": 0.00096,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.10286,
        "val_sales_cr": 0.00207,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 19.20594,
        "val_sales_cr": 0.06863,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.90073,
        "val_sales_cr": 0.12531,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.79707,
        "val_sales_cr": 0.05462,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.75984,
        "val_sales_cr": 0.10214,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.00121,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.78013,
        "val_sales_cr": 0.01923,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 12.66692,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.06763,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3.00027,
        "val_sales_cr": 2.47887,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99998,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3,
        "val_sales_cr": 0.16067,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3.00009,
        "val_sales_cr": 0.00323,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 2.99994,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 2.99772,
        "val_sales_cr": 0.01549,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.98378,
        "val_sales_cr": 0.00074,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 2.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5.00001,
        "val_sales_cr": 0.0885,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.33837,
        "val_sales_cr": 0.00172,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99753,
        "val_sales_cr": 0.04897,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5.00002,
        "val_sales_cr": 0.02879,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5.00027,
        "val_sales_cr": 0.00182,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.97436,
        "val_sales_cr": 0.00248,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99999,
        "val_sales_cr": 0.11739,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00046,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.99932,
        "val_sales_cr": 0.00148,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.14032,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99988,
        "val_sales_cr": 0.0324,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5.00002,
        "val_sales_cr": 0.02543,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 7.28144,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99978,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.99703,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.73403,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "752000",
        "price": 65.63415,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 7.21603,
        "val_sales_cr": 0.00391,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 72.87699,
        "val_sales_cr": 0.0032,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 61.31266,
        "val_sales_cr": 0.20905,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 85.1295,
        "val_sales_cr": 0.00118,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.70868,
        "val_sales_cr": 0.10494,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.14949,
        "val_sales_cr": 0.00545,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 73.92486,
        "val_sales_cr": 0.24655,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 70.4776,
        "val_sales_cr": 0.17969,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99964,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 0.04951,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.74917,
        "val_sales_cr": 0.00228,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 9.13761,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 13.56533,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00002,
        "val_sales_cr": 0.04463,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.0003,
        "val_sales_cr": 0.00985,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.9917,
        "val_sales_cr": 0.4898,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.23847,
        "val_sales_cr": 0.02211,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.67677,
        "val_sales_cr": 0.03047,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99521,
        "val_sales_cr": 3.44156,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.35335,
        "val_sales_cr": 0.11127,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99988,
        "val_sales_cr": 0.0258,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.05074,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99992,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 8.27711,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.20028,
        "val_sales_cr": 0.09387,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 150 GM EWRPK - G [GLUCOS]",
        "packsize": "150000",
        "price": 9.99962,
        "val_sales_cr": 0.02923,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 9.97952,
        "val_sales_cr": 0.00136,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.74198,
        "val_sales_cr": 0.09626,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.73415,
        "val_sales_cr": 0.03961,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99854,
        "val_sales_cr": 1.78747,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.54979,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.61146,
        "val_sales_cr": 0.61672,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.41923,
        "val_sales_cr": 0.6379,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99993,
        "val_sales_cr": 7.0005,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 2.29695,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 1.90084,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.56198,
        "val_sales_cr": 0.14737,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.75015,
        "val_sales_cr": 0.38908,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.0405,
        "val_sales_cr": 0.15381,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.86795,
        "val_sales_cr": 0.2041,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 16.57132,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 19.97607,
        "val_sales_cr": 0.14618,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.51961,
        "val_sales_cr": 0.04368,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 21.92148,
        "val_sales_cr": 0.00095,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 19.99919,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "338400",
        "price": 19.99856,
        "val_sales_cr": 0.01111,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 1.9,
        "val_sales_cr": 0.18852,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.00312,
        "val_sales_cr": 0.01034,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 52.07553,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.23706,
        "val_sales_cr": 0.00917,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.85231,
        "val_sales_cr": 0.11311,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99968,
        "val_sales_cr": 35.17167,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.14023,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.9963,
        "val_sales_cr": 6.05287,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.71609,
        "val_sales_cr": 0.24573,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99976,
        "val_sales_cr": 6.44058,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.74001,
        "val_sales_cr": 0.20583,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.87906,
        "val_sales_cr": 0.31575,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 0.41047,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5.00002,
        "val_sales_cr": 0.11568,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.41095,
        "val_sales_cr": 0.08271,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.99985,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.38997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.75,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.9992,
        "val_sales_cr": 0.00188,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.00009,
        "val_sales_cr": 0.02128,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.91165,
        "val_sales_cr": 0.00662,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 72.92182,
        "val_sales_cr": 0.4725,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 68.50273,
        "val_sales_cr": 0.78049,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 85.00367,
        "val_sales_cr": 0.06261,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.99633,
        "val_sales_cr": 0.92381,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.23683,
        "val_sales_cr": 0.71279,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.74965,
        "val_sales_cr": 0.64901,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 71.80122,
        "val_sales_cr": 0.3386,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 70.8298,
        "val_sales_cr": 1.90773,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 4.74775,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.93486,
        "val_sales_cr": 0.09202,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.97205,
        "val_sales_cr": 0.98521,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 76.35088,
        "val_sales_cr": 0.00131,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 63.5,
        "val_sales_cr": 0.0032,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 11.15038,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 16.68697,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00125,
        "val_sales_cr": 0.0016,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.56371,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.92779,
        "val_sales_cr": 0.08681,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.96487,
        "val_sales_cr": 0.21915,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99461,
        "val_sales_cr": 3.56856,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.38955,
        "val_sales_cr": 0.05654,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99833,
        "val_sales_cr": 0.00479,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00006,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99886,
        "val_sales_cr": 0.00351,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.50191,
        "val_sales_cr": 0.00946,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.2069,
        "val_sales_cr": 0.00006,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 150 GM EWRPK - G [GLUCOS]",
        "packsize": "150000",
        "price": 9.64225,
        "val_sales_cr": 0.1663,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.57023,
        "val_sales_cr": 0.09669,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "169200",
        "price": 10.65442,
        "val_sales_cr": 0.01271,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99976,
        "val_sales_cr": 0.40273,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 10.05952,
        "val_sales_cr": 0.03193,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 22,
        "val_sales_cr": 0.00508,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.73616,
        "val_sales_cr": 1.02226,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.23316,
        "val_sales_cr": 0.62638,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 1.59247,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 0.11124,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 1.33252,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.55194,
        "val_sales_cr": 0.50884,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.3888,
        "val_sales_cr": 0.35229,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.17196,
        "val_sales_cr": 0.07101,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.07289,
        "val_sales_cr": 0.06119,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 25.01747,
        "val_sales_cr": 0.00172,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.97096,
        "val_sales_cr": 0.03227,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 2.99999,
        "val_sales_cr": 0.32092,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 21.31818,
        "val_sales_cr": 0.00507,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "300000",
        "price": 15,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 0.09501,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "330000",
        "price": 25.01538,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3.00037,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.00468,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "352000",
        "price": 20.01618,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 20.2745,
        "val_sales_cr": 0.03651,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.15,
        "val_sales_cr": 0.00003,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 3.11611,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 28.63076,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.75543,
        "val_sales_cr": 0.04671,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99882,
        "val_sales_cr": 15.80534,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99712,
        "val_sales_cr": 0.79069,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 19.08046,
        "val_sales_cr": 0.00017,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "528000",
        "price": 26.61566,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.86831,
        "val_sales_cr": 0.01935,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 3.86853,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.79704,
        "val_sales_cr": 0.02944,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5.00013,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM EWRPK - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "66000",
        "price": 4.99312,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5,
        "val_sales_cr": 0.00014,
        "vol_sales": 0
    },
    {
        "sku": "PRL 676.8 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "676800",
        "price": 76.09273,
        "val_sales_cr": 0.07041,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.60868,
        "val_sales_cr": 0.21615,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00036,
        "val_sales_cr": 0.00838,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 70.0597,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.95833,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.64218,
        "val_sales_cr": 0.03344,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.00052,
        "val_sales_cr": 0.00193,
        "vol_sales": 0
    },
    {
        "sku": "PRL 750 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "750000",
        "price": 70.21721,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "752000",
        "price": 74.49453,
        "val_sales_cr": 0.03883,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.91236,
        "val_sales_cr": 0.00248,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 75.00347,
        "val_sales_cr": 0.11036,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 68.15023,
        "val_sales_cr": 0.38477,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.99561,
        "val_sales_cr": 0.03679,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 73.59379,
        "val_sales_cr": 0.40827,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 76.06978,
        "val_sales_cr": 0.40305,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 80.0004,
        "val_sales_cr": 0.32147,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 72.75843,
        "val_sales_cr": 1.33607,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 68.83658,
        "val_sales_cr": 2.22347,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC NW BGGR CRSPR & TSTR",
        "packsize": "80000",
        "price": 10.00064,
        "val_sales_cr": 0.00313,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "846000",
        "price": 69.98228,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 5.00011,
        "val_sales_cr": 0.00927,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 5.00475,
        "val_sales_cr": 0.00053,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00002,
        "val_sales_cr": 0.14169,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.76379,
        "val_sales_cr": 0.12751,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 72.55751,
        "val_sales_cr": 0.06864,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 9.99749,
        "val_sales_cr": 0.0004,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 4.9888,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 7.74402,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.03561,
        "val_sales_cr": 0.00034,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00046,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99998,
        "val_sales_cr": 0.31671,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.71941,
        "val_sales_cr": 0.03479,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.91506,
        "val_sales_cr": 0.08202,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99057,
        "val_sales_cr": 2.1953,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.42326,
        "val_sales_cr": 0.07906,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99917,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 10.00013,
        "val_sales_cr": 0.00792,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10.00058,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.99921,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99984,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 4.77329,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.58402,
        "val_sales_cr": 0.05507,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99992,
        "val_sales_cr": 0.45735,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.80178,
        "val_sales_cr": 0.00397,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.63791,
        "val_sales_cr": 0.54196,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.24258,
        "val_sales_cr": 0.48443,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 2.50511,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 2.99999,
        "val_sales_cr": 0.08372,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 1.5887,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.23218,
        "val_sales_cr": 0.02308,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.39972,
        "val_sales_cr": 0.28632,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.50924,
        "val_sales_cr": 0.26748,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.77231,
        "val_sales_cr": 0.15074,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.3659,
        "val_sales_cr": 0.09304,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.82169,
        "val_sales_cr": 0.01756,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.99995,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 0.19891,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 21.33907,
        "val_sales_cr": 0.0067,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.99999,
        "val_sales_cr": 0.05146,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.99987,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 2.99997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 2.05281,
        "val_sales_cr": 0.00979,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.72745,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 2.99994,
        "val_sales_cr": 0.00545,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 20.82329,
        "val_sales_cr": 0.00712,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 14.21566,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.81616,
        "val_sales_cr": 0.05466,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99835,
        "val_sales_cr": 9.22452,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99568,
        "val_sales_cr": 0.08761,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 26.20069,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.72565,
        "val_sales_cr": 0.01673,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 3.35694,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.96934,
        "val_sales_cr": 0.00932,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.00052,
        "val_sales_cr": 0.00289,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5.00002,
        "val_sales_cr": 0.02689,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.99996,
        "val_sales_cr": 0.01159,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5,
        "val_sales_cr": 0.00029,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99995,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99095,
        "val_sales_cr": 0.00011,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.63498,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 70.00434,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.75187,
        "val_sales_cr": 0.00095,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.64491,
        "val_sales_cr": 0.00485,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 8.76434,
        "val_sales_cr": 0.00099,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 73.71058,
        "val_sales_cr": 0.07167,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 67.4407,
        "val_sales_cr": 0.24416,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 73.6966,
        "val_sales_cr": 0.43938,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 76.387,
        "val_sales_cr": 0.27576,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.86004,
        "val_sales_cr": 0.25266,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 73.7975,
        "val_sales_cr": 0.77253,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 68.19257,
        "val_sales_cr": 1.77794,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.8894,
        "val_sales_cr": 0.00159,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 5.10979,
        "val_sales_cr": 0.0247,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.02683,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.81914,
        "val_sales_cr": 0.17765,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 70.75025,
        "val_sales_cr": 0.00714,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10.00002,
        "val_sales_cr": 0.44059,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 0.57255,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99978,
        "val_sales_cr": 0.01793,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.34621,
        "val_sales_cr": 0.00564,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.97598,
        "val_sales_cr": 0.08752,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.96214,
        "val_sales_cr": 0.27343,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.51427,
        "val_sales_cr": 0.06628,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.99897,
        "val_sales_cr": 0.00194,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99893,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.92375,
        "val_sales_cr": 0.03539,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 20.09556,
        "val_sales_cr": 0.19972,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "169200",
        "price": 11.03673,
        "val_sales_cr": 0.00316,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "190000",
        "price": 9.5,
        "val_sales_cr": 0.00486,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.98755,
        "val_sales_cr": 0.00053,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.40959,
        "val_sales_cr": 0.32754,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22,
        "val_sales_cr": 0.00664,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.0001,
        "val_sales_cr": 0.01924,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 1.79547,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.02758,
        "val_sales_cr": 0.00658,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 19.50954,
        "val_sales_cr": 0.19763,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 20.46459,
        "val_sales_cr": 0.18836,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 21.54802,
        "val_sales_cr": 0.02504,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 20.01354,
        "val_sales_cr": 0.00089,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 19.70014,
        "val_sales_cr": 0.08011,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 3.00001,
        "val_sales_cr": 0.05149,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 2.51905,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.13954,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 20.06515,
        "val_sales_cr": 0.01041,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20.18988,
        "val_sales_cr": 0.00683,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.23555,
        "val_sales_cr": 0.04136,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.99589,
        "val_sales_cr": 0.5197,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3.00013,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.90973,
        "val_sales_cr": 0.00137,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.00032,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.01977,
        "val_sales_cr": 0.00073,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.36005,
        "val_sales_cr": 0.00309,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.01011,
        "val_sales_cr": 0.00066,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 10.00532,
        "val_sales_cr": 0.00038,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 20.0173,
        "val_sales_cr": 0.02997,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5.00001,
        "val_sales_cr": 0.23296,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.72891,
        "val_sales_cr": 0.0164,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.98227,
        "val_sales_cr": 0.19165,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.00468,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 28.48803,
        "val_sales_cr": 0.00309,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.73035,
        "val_sales_cr": 0.00658,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.98269,
        "val_sales_cr": 0.08477,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5.0439,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.99996,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM EWRPK - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "66000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.6,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99245,
        "val_sales_cr": 0.00013,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.00005,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 70.02019,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 7.0002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 71.63359,
        "val_sales_cr": 0.14995,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.84344,
        "val_sales_cr": 0.03113,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 75.02634,
        "val_sales_cr": 0.41047,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 70.47361,
        "val_sales_cr": 0.63691,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.42536,
        "val_sales_cr": 0.00573,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 64.14097,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99962,
        "val_sales_cr": 0.00131,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.00007,
        "val_sales_cr": 0.00423,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "418000",
        "price": 19.49694,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.70122,
        "val_sales_cr": 0.03167,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 10,
        "val_sales_cr": 0.00372,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99974,
        "val_sales_cr": 1.49228,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 2.68219,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99984,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99998,
        "val_sales_cr": 0.13253,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.79834,
        "val_sales_cr": 0.00071,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 10.00252,
        "val_sales_cr": 0.00913,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99995,
        "val_sales_cr": 0.41593,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.92161,
        "val_sales_cr": 0.00421,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 10.00561,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99765,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.98571,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.01074,
        "val_sales_cr": 0.00186,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.40234,
        "val_sales_cr": 0.04215,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99342,
        "val_sales_cr": 0.14777,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.16667,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 21.43245,
        "val_sales_cr": 0.50737,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.83855,
        "val_sales_cr": 0.44067,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99663,
        "val_sales_cr": 0.27984,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99518,
        "val_sales_cr": 0.19254,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 1.99973,
        "val_sales_cr": 0.00073,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 1.99988,
        "val_sales_cr": 0.00172,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.31638,
        "val_sales_cr": 0.35353,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.87368,
        "val_sales_cr": 0.00807,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.99838,
        "val_sales_cr": 0.0402,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.20638,
        "val_sales_cr": 0.01967,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.00043,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.00001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "352000",
        "price": 18.92258,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 21.41373,
        "val_sales_cr": 0.00443,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 17.84969,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99968,
        "val_sales_cr": 0.00771,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.8561,
        "val_sales_cr": 0.03667,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.998,
        "val_sales_cr": 12.5318,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99997,
        "val_sales_cr": 0.01616,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99959,
        "val_sales_cr": 1.51648,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.96638,
        "val_sales_cr": 0.00347,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 2.35731,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 4.99935,
        "val_sales_cr": 0.00154,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5.00022,
        "val_sales_cr": 0.00463,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5.00008,
        "val_sales_cr": 0.01845,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.99968,
        "val_sales_cr": 0.0031,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5.00719,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 5.003,
        "val_sales_cr": 0.00017,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.58468,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 70.00626,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "71500",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.64768,
        "val_sales_cr": 0.02397,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 75.04662,
        "val_sales_cr": 0.05989,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 66.83803,
        "val_sales_cr": 0.11187,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.99534,
        "val_sales_cr": 0.00365,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 73.08727,
        "val_sales_cr": 0.27913,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 76.24428,
        "val_sales_cr": 0.43834,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.98629,
        "val_sales_cr": 0.18371,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 67.81033,
        "val_sales_cr": 0.5033,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 67.84479,
        "val_sales_cr": 2.59633,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.9535,
        "val_sales_cr": 0.00173,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.00111,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.79375,
        "val_sales_cr": 0.12398,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 10.00178,
        "val_sales_cr": 0.00676,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.99851,
        "val_sales_cr": 0.00201,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 9.99832,
        "val_sales_cr": 0.00298,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 9.9997,
        "val_sales_cr": 0.0165,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.449,
        "val_sales_cr": 0.02591,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 14.98931,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 9.99212,
        "val_sales_cr": 25.26662,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00005,
        "val_sales_cr": 0.16461,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99969,
        "val_sales_cr": 0.00322,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 2.26804,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.30197,
        "val_sales_cr": 0.00648,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.99101,
        "val_sales_cr": 1.0335,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.97442,
        "val_sales_cr": 5.32233,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.75548,
        "val_sales_cr": 0.31291,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.53356,
        "val_sales_cr": 0.00418,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99971,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 10.00009,
        "val_sales_cr": 0.03196,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99999,
        "val_sales_cr": 0.22427,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.69693,
        "val_sales_cr": 0.33338,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.50578,
        "val_sales_cr": 0.00362,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.99912,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 5.00008,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.60098,
        "val_sales_cr": 0.35627,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2.00527,
        "val_sales_cr": 0.0286,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.48825,
        "val_sales_cr": 0.02158,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 21.54281,
        "val_sales_cr": 2.73607,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.58225,
        "val_sales_cr": 1.0725,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99869,
        "val_sales_cr": 0.53678,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.29998,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99849,
        "val_sales_cr": 0.21888,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 1.99922,
        "val_sales_cr": 0.00102,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.02008,
        "val_sales_cr": 0.00932,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.7992,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 21.50434,
        "val_sales_cr": 2.49865,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.40926,
        "val_sales_cr": 0.25806,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 22.62218,
        "val_sales_cr": 1.13579,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.1405,
        "val_sales_cr": 0.67765,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.0004,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.99996,
        "val_sales_cr": 0.22316,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 19.99892,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.17424,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "330000",
        "price": 23.99012,
        "val_sales_cr": 0.00219,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "338400",
        "price": 19.00075,
        "val_sales_cr": 0.02279,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 2.00032,
        "val_sales_cr": 0.00062,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.90003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.03414,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 33.95645,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 5.00578,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.87765,
        "val_sales_cr": 0.54919,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.98949,
        "val_sales_cr": 22.34018,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.98939,
        "val_sales_cr": 2.3383,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 61.81526,
        "val_sales_cr": 0.00519,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "528000",
        "price": 28.88626,
        "val_sales_cr": 0.00244,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.88866,
        "val_sales_cr": 0.01546,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5.00003,
        "val_sales_cr": 6.15403,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.02176,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0.24966,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "550000",
        "price": 65.01226,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.98727,
        "val_sales_cr": 0.34522,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.99975,
        "val_sales_cr": 0.72402,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5.00043,
        "val_sales_cr": 0.00353,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.99998,
        "val_sales_cr": 0.16044,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.67717,
        "val_sales_cr": 0.00036,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.75193,
        "val_sales_cr": 0.00751,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.8031,
        "val_sales_cr": 0.00099,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.75002,
        "val_sales_cr": 0.0973,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.61819,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.9785,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.57053,
        "val_sales_cr": 0.26281,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "75200",
        "price": 5.00001,
        "val_sales_cr": 0.10609,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.99999,
        "val_sales_cr": 0.07359,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.95451,
        "val_sales_cr": 0.41971,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 68.11218,
        "val_sales_cr": 1.48949,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 70.017,
        "val_sales_cr": 0.25734,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 76.90224,
        "val_sales_cr": 0.62685,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.98478,
        "val_sales_cr": 0.2271,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 68.528,
        "val_sales_cr": 2.66139,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.42841,
        "val_sales_cr": 10.0538,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00005,
        "val_sales_cr": 0.01024,
        "vol_sales": 0
    },
    {
        "sku": "-G ORGNL CLC CHHT BHM EDTN+RS.2 OFF",
        "packsize": "250000",
        "price": 19.99888,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.85558,
        "val_sales_cr": 1.09837,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 10.00083,
        "val_sales_cr": 0.00481,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 10.0015,
        "val_sales_cr": 0.00133,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 9.88178,
        "val_sales_cr": 0.00379,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.4491,
        "val_sales_cr": 0.02405,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 7.71762,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 11.19318,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00046,
        "val_sales_cr": 0.00653,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00073,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.79999,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.99964,
        "val_sales_cr": 0.01923,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.99976,
        "val_sales_cr": 0.21483,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99994,
        "val_sales_cr": 3.72534,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.68353,
        "val_sales_cr": 0.08154,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99991,
        "val_sales_cr": 0.06465,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.78571,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.7777,
        "val_sales_cr": 0.06062,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.29758,
        "val_sales_cr": 0.04844,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99994,
        "val_sales_cr": 0.00311,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.11692,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 24.77099,
        "val_sales_cr": 0.0013,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.2068,
        "val_sales_cr": 2.48374,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.31484,
        "val_sales_cr": 0.92474,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2.00002,
        "val_sales_cr": 0.04064,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.29871,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 0.08517,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 2,
        "val_sales_cr": 0.00076,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 1.99993,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.24438,
        "val_sales_cr": 0.00065,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.9133,
        "val_sales_cr": 0.53657,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 23.12912,
        "val_sales_cr": 0.12863,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 25.00013,
        "val_sales_cr": 0.21306,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.32242,
        "val_sales_cr": 0.07818,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 22.4485,
        "val_sales_cr": 0.00493,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.99998,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.99859,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 13.55195,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.01236,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.84862,
        "val_sales_cr": 0.09691,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99485,
        "val_sales_cr": 7.85178,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.9979,
        "val_sales_cr": 1.16109,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.99591,
        "val_sales_cr": 0.00306,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 3.85749,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 9.95254,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5.00019,
        "val_sales_cr": 0.01568,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99986,
        "val_sales_cr": 0.01807,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.82728,
        "val_sales_cr": 0.23786,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.01163,
        "val_sales_cr": 0.00004,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.96157,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.63187,
        "val_sales_cr": 0.0343,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 5.1015,
        "val_sales_cr": 0.01891,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.70668,
        "val_sales_cr": 0.06309,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 70.25132,
        "val_sales_cr": 0.37152,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.99678,
        "val_sales_cr": 0.01845,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 70.00116,
        "val_sales_cr": 0.42299,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 76.44987,
        "val_sales_cr": 0.02585,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.98526,
        "val_sales_cr": 0.13185,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 70.00534,
        "val_sales_cr": 0.62571,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 67.81169,
        "val_sales_cr": 2.94662,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.1154,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS MLK WRLD LRGST SLLNG",
        "packsize": "507600",
        "price": 30.52035,
        "val_sales_cr": 0.00105,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.9071,
        "val_sales_cr": 0.28405,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+WHT [GLCS]",
        "packsize": "82500",
        "price": 4.97902,
        "val_sales_cr": 0.04292,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.6446,
        "val_sales_cr": 0.00221,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5.00003,
        "val_sales_cr": 0.0335,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 9.99985,
        "val_sales_cr": 0.01354,
        "vol_sales": 0
    },
    {
        "sku": "PRL-G 93 GM PLPCH KSM DL CHN CNNMN BSCTS",
        "packsize": "93000",
        "price": 10.01205,
        "val_sales_cr": 0.00008,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 83.39279,
        "val_sales_cr": 0.00416,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 6.08235,
        "val_sales_cr": 0.00282,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99997,
        "val_sales_cr": 39.01748,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 9.99987,
        "val_sales_cr": 66.81191,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.96704,
        "val_sales_cr": 0.0745,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "100000",
        "price": 10.10638,
        "val_sales_cr": 0.00005,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.0001,
        "val_sales_cr": 0.03983,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99995,
        "val_sales_cr": 2.96227,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.52717,
        "val_sales_cr": 0.11786,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.91382,
        "val_sales_cr": 0.34135,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99796,
        "val_sales_cr": 17.71697,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.57462,
        "val_sales_cr": 0.71136,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99586,
        "val_sales_cr": 0.01812,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00093,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10.00023,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.99157,
        "val_sales_cr": 0.00036,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.81032,
        "val_sales_cr": 0.00998,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.00046,
        "val_sales_cr": 0.00432,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10,
        "val_sales_cr": 0.02028,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.81629,
        "val_sales_cr": 0.02832,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 8.79443,
        "val_sales_cr": 0.0005,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "150000",
        "price": 9.97693,
        "val_sales_cr": 0.00523,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 10.0156,
        "val_sales_cr": 0.02614,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 21.13665,
        "val_sales_cr": 0.93925,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.76855,
        "val_sales_cr": 0.0023,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99982,
        "val_sales_cr": 3.11115,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.12351,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 14,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 20.4974,
        "val_sales_cr": 0.0205,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.72852,
        "val_sales_cr": 8.9822,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.36131,
        "val_sales_cr": 8.42888,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99936,
        "val_sales_cr": 14.83963,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 2.99999,
        "val_sales_cr": 5.04281,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.99966,
        "val_sales_cr": 6.0309,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 1.98501,
        "val_sales_cr": 0.00285,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.19553,
        "val_sales_cr": 0.00082,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 1.99999,
        "val_sales_cr": 0.02044,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 26.65221,
        "val_sales_cr": 0.0035,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.6771,
        "val_sales_cr": 2.04664,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.98339,
        "val_sales_cr": 0.7232,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.92806,
        "val_sales_cr": 1.65978,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.12111,
        "val_sales_cr": 0.76773,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.80058,
        "val_sales_cr": 0.08609,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.24981,
        "val_sales_cr": 0.14065,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 14.27222,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.07238,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 1.99281,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 2.003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00001,
        "val_sales_cr": 0.0676,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 21.11819,
        "val_sales_cr": 0.03138,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+50 GM EXTR [GLCS]",
        "packsize": "350000",
        "price": 20.00007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20.03564,
        "val_sales_cr": 0.02811,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "300000",
        "price": 20,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.86103,
        "val_sales_cr": 0.0418,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.9999,
        "val_sales_cr": 2.86262,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2.84402,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99998,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3.00033,
        "val_sales_cr": 0.16594,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.90883,
        "val_sales_cr": 0.03358,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.00013,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.05168,
        "val_sales_cr": 0.00626,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 20.21201,
        "val_sales_cr": 0.01286,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00722,
        "val_sales_cr": 0.06054,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 5.00007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.00605,
        "val_sales_cr": 0.03701,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 400 GM PLPCH - G [GLUCOS]",
        "packsize": "400000",
        "price": 46.50769,
        "val_sales_cr": 0.0003,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "44000",
        "price": 5.00112,
        "val_sales_cr": 0.00089,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 21.79409,
        "val_sales_cr": 0.00199,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 5.24324,
        "val_sales_cr": 0.00002,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.00475,
        "val_sales_cr": 0.6194,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.00161,
        "val_sales_cr": 0.74322,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 164.10462,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 5.00001,
        "val_sales_cr": 0.16258,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.80493,
        "val_sales_cr": 0.35308,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99911,
        "val_sales_cr": 96.29833,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.99997,
        "val_sales_cr": 1.46494,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.9996,
        "val_sales_cr": 7.77155,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 64.89773,
        "val_sales_cr": 0.00171,
        "vol_sales": 0
    },
    {
        "sku": "PRL 500 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "500000",
        "price": 20.00115,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 32.02045,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.62707,
        "val_sales_cr": 0.26816,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.99996,
        "val_sales_cr": 27.71446,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 4.99996,
        "val_sales_cr": 0.05662,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.73096,
        "val_sales_cr": 0.03874,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.87819,
        "val_sales_cr": 0.10299,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.76349,
        "val_sales_cr": 0.03392,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.99971,
        "val_sales_cr": 4.75692,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.99801,
        "val_sales_cr": 2.18822,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.99739,
        "val_sales_cr": 0.00996,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.82727,
        "val_sales_cr": 0.05166,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5,
        "val_sales_cr": 0.00078,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.00002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.78087,
        "val_sales_cr": 0.00452,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 72.74038,
        "val_sales_cr": 0.07677,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 5.86687,
        "val_sales_cr": 0.00814,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.67556,
        "val_sales_cr": 0.0547,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 4.99352,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.0077,
        "val_sales_cr": 0.03302,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 8.28999,
        "val_sales_cr": 0.14466,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.48266,
        "val_sales_cr": 1.41544,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 68.9807,
        "val_sales_cr": 3.98012,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.38823,
        "val_sales_cr": 0.18385,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.77875,
        "val_sales_cr": 4.44407,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.34879,
        "val_sales_cr": 5.75332,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.84519,
        "val_sales_cr": 3.63846,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 73.72518,
        "val_sales_cr": 2.19771,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.70535,
        "val_sales_cr": 11.89492,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 71.74328,
        "val_sales_cr": 0.00293,
        "vol_sales": 0
    },
    {
        "sku": "94 GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "94000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 4.69362,
        "val_sales_cr": 0.00085,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99744,
        "val_sales_cr": 1.15414,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "180000",
        "price": 9.85155,
        "val_sales_cr": 0.00604,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "313500",
        "price": 15.00655,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 1.9347,
        "val_sales_cr": 0.00206,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.94172,
        "val_sales_cr": 2.35117,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 75.1061,
        "val_sales_cr": 0.02598,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.99539,
        "val_sales_cr": 0.01518,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.99807,
        "val_sales_cr": 0.00259,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5.00002,
        "val_sales_cr": 0.05322,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 10.00083,
        "val_sales_cr": 0.00121,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44941,
        "val_sales_cr": 0.00512,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 12.61054,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 21.07498,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00057,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.71148,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.02425,
        "val_sales_cr": 0.01184,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.99953,
        "val_sales_cr": 0.11381,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99991,
        "val_sales_cr": 4.14204,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.10899,
        "val_sales_cr": 0.07295,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 10.00096,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.99904,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.0004,
        "val_sales_cr": 0.01011,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 9.99891,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.3022,
        "val_sales_cr": 0.00019,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 21.78016,
        "val_sales_cr": 0.06805,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.99999,
        "val_sales_cr": 1.41946,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.73477,
        "val_sales_cr": 3.1612,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.43001,
        "val_sales_cr": 3.41493,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 6.67885,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 1.50208,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 2.60867,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.63682,
        "val_sales_cr": 0.16864,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.55813,
        "val_sales_cr": 0.06485,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.99627,
        "val_sales_cr": 0.81134,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.18748,
        "val_sales_cr": 0.04531,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 22.25432,
        "val_sales_cr": 0.00529,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 3.00005,
        "val_sales_cr": 0.00548,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 4.60797,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 2.99998,
        "val_sales_cr": 0.01637,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00016,
        "val_sales_cr": 0.00553,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20.00435,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.94562,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 1.4453,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 2.99838,
        "val_sales_cr": 0.00909,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3.00066,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.03262,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.00006,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 20,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.18474,
        "val_sales_cr": 0.00167,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.0262,
        "val_sales_cr": 0.0005,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 5.225,
        "val_sales_cr": 0.00002,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.16245,
        "val_sales_cr": 0.19919,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.10071,
        "val_sales_cr": 0.09441,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 55.69491,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.71753,
        "val_sales_cr": 0.01947,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.9998,
        "val_sales_cr": 34.04507,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.96932,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99997,
        "val_sales_cr": 2.51142,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 31.27049,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.47424,
        "val_sales_cr": 0.06194,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 11.16498,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.99963,
        "val_sales_cr": 0.00401,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.90875,
        "val_sales_cr": 0.00091,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 1.95301,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5.00001,
        "val_sales_cr": 0.89405,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.99976,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99998,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.00002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.6503,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.91595,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.65054,
        "val_sales_cr": 0.00308,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 4.99991,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.68196,
        "val_sales_cr": 0.00376,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.99038,
        "val_sales_cr": 0.14578,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 67.42819,
        "val_sales_cr": 0.33674,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.99194,
        "val_sales_cr": 0.02426,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 71.17135,
        "val_sales_cr": 1.07858,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.02647,
        "val_sales_cr": 1.65353,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.99948,
        "val_sales_cr": 1.32958,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 75.62795,
        "val_sales_cr": 0.18589,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.79559,
        "val_sales_cr": 1.3339,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00001,
        "val_sales_cr": 0.20381,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.96673,
        "val_sales_cr": 0.23148,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.99948,
        "val_sales_cr": 0.00576,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 4.99998,
        "val_sales_cr": 0.02502,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 9.99629,
        "val_sales_cr": 0.00108,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 37.47908,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 69.98919,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.98708,
        "val_sales_cr": 0.01183,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99991,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 2.38011,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.34703,
        "val_sales_cr": 0.01694,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.99913,
        "val_sales_cr": 0.02411,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99998,
        "val_sales_cr": 17.92887,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.38107,
        "val_sales_cr": 0.08706,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 10.00066,
        "val_sales_cr": 0.00906,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.0016,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 10,
        "val_sales_cr": 0.00046,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.37595,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99967,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.99984,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 20.10787,
        "val_sales_cr": 0.63824,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 4.95977,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 22.00052,
        "val_sales_cr": 0.02105,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.80675,
        "val_sales_cr": 10.52909,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.29751,
        "val_sales_cr": 8.49149,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 28.37436,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 3.81881,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 7.92276,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.1194,
        "val_sales_cr": 0.01376,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.96398,
        "val_sales_cr": 0.11535,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 22.15733,
        "val_sales_cr": 0.05417,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.9818,
        "val_sales_cr": 1.80234,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.68986,
        "val_sales_cr": 0.1261,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.53132,
        "val_sales_cr": 0.08483,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50.01889,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.69872,
        "val_sales_cr": 0.04448,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 10.75094,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3.00002,
        "val_sales_cr": 0.01919,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 2.01376,
        "val_sales_cr": 0.00423,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3,
        "val_sales_cr": 0.05538,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20.00485,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.00831,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 2.72674,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99995,
        "val_sales_cr": 0.00599,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3.00675,
        "val_sales_cr": 0.04037,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3.00042,
        "val_sales_cr": 0.05484,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.00003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.84444,
        "val_sales_cr": 0.00116,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00388,
        "val_sales_cr": 1.43717,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 5.00058,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.00046,
        "val_sales_cr": 0.00789,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.08222,
        "val_sales_cr": 5.83399,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.00974,
        "val_sales_cr": 1.25014,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 172.59891,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 5.00008,
        "val_sales_cr": 0.00648,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.95532,
        "val_sales_cr": 0.08968,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.99997,
        "val_sales_cr": 97.82737,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 1.3134,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 6.37161,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 30.00551,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.68731,
        "val_sales_cr": 0.11917,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 36.12142,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5.0001,
        "val_sales_cr": 0.00516,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 4.79424,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5.00099,
        "val_sales_cr": 0.00355,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.18454,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 4.86731,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 1.55675,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.90441,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99231,
        "val_sales_cr": 0.00006,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.01429,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99971,
        "val_sales_cr": 0.00172,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 1.50685,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 69.64286,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.99882,
        "val_sales_cr": 0.00042,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.13506,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 8.8719,
        "val_sales_cr": 0.03336,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 75.00321,
        "val_sales_cr": 0.92872,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 69.7528,
        "val_sales_cr": 0.39921,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.98599,
        "val_sales_cr": 0.02548,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.58206,
        "val_sales_cr": 5.00109,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.17566,
        "val_sales_cr": 2.95307,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 80.00006,
        "val_sales_cr": 2.32564,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 76.70117,
        "val_sales_cr": 0.12174,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 72.24991,
        "val_sales_cr": 0.77055,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00008,
        "val_sales_cr": 0.61118,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.15708,
        "val_sales_cr": 0.01077,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.99663,
        "val_sales_cr": 0.858,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+WHT [GLCS]",
        "packsize": "82500",
        "price": 5.00052,
        "val_sales_cr": 0.00096,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5,
        "val_sales_cr": 0.27197,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 10.00003,
        "val_sales_cr": 0.0289,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 72.55751,
        "val_sales_cr": 0.06864,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 9.99964,
        "val_sales_cr": 0.0169,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44909,
        "val_sales_cr": 0.06538,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH MN -G GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.13348,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 250.40838,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 455.31172,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00003,
        "val_sales_cr": 0.31264,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00003,
        "val_sales_cr": 0.05944,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99998,
        "val_sales_cr": 16.00624,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 10.0001,
        "val_sales_cr": 0.06047,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.99999,
        "val_sales_cr": 1.11262,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99948,
        "val_sales_cr": 131.19662,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 10.01345,
        "val_sales_cr": 0.18147,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99996,
        "val_sales_cr": 0.20488,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00021,
        "val_sales_cr": 0.03307,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10.00023,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 10.00045,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99977,
        "val_sales_cr": 0.0525,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99997,
        "val_sales_cr": 0.23635,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10,
        "val_sales_cr": 0.02028,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.99924,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10,
        "val_sales_cr": 0.25674,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.99984,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 5.17318,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 10.00392,
        "val_sales_cr": 0.00026,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 20,
        "val_sales_cr": 7.83295,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.99924,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 54.30002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.11692,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 10.23284,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.01377,
        "val_sales_cr": 0.01953,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.66697,
        "val_sales_cr": 60.67539,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.32934,
        "val_sales_cr": 34.61622,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 253.74472,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.29871,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 49.04436,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 94.96072,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 2.10847,
        "val_sales_cr": 0.00096,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.06671,
        "val_sales_cr": 0.02967,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.11208,
        "val_sales_cr": 0.04524,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 28.99417,
        "val_sales_cr": 0.00348,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.80825,
        "val_sales_cr": 0.07821,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 20.00267,
        "val_sales_cr": 0.00374,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.9697,
        "val_sales_cr": 6.5251,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 20.00086,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 19.9073,
        "val_sales_cr": 1.33481,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.98848,
        "val_sales_cr": 0.49326,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50.00302,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.5736,
        "val_sales_cr": 0.6664,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 151.80898,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.35992,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 2.00814,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 2.01376,
        "val_sales_cr": 0.00423,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00156,
        "val_sales_cr": 0.15793,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+50 GM EXTR [GLCS]",
        "packsize": "350000",
        "price": 20.00007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 19.97761,
        "val_sales_cr": 0.0008,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.01892,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 34.92433,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2.96505,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99998,
        "val_sales_cr": 0.02771,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3,
        "val_sales_cr": 0.15735,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3.00089,
        "val_sales_cr": 0.36763,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0.15686,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.12093,
        "val_sales_cr": 0.00566,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.00002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00936,
        "val_sales_cr": 8.05216,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.99996,
        "val_sales_cr": 0.02361,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.00139,
        "val_sales_cr": 0.1348,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 4.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.07128,
        "val_sales_cr": 28.02253,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.01343,
        "val_sales_cr": 7.64469,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 1472.87264,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99999,
        "val_sales_cr": 0.17837,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.96969,
        "val_sales_cr": 0.77521,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 823.75705,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 13.16257,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99963,
        "val_sales_cr": 61.26622,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 64.89773,
        "val_sales_cr": 0.00171,
        "vol_sales": 0
    },
    {
        "sku": "PRL 500 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "500000",
        "price": 20.00115,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 30.97769,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.99999,
        "val_sales_cr": 0.26761,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 318.83077,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00002,
        "val_sales_cr": 0.08416,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5.00013,
        "val_sales_cr": 0.00756,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.96432,
        "val_sales_cr": 0.64723,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.00029,
        "val_sales_cr": 0.00175,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 42.68059,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 16.60543,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5.00006,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 5.00003,
        "val_sales_cr": 0.05862,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.00795,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.00008,
        "val_sales_cr": 0.00628,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00259,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "71500",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 5.10964,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 4.99542,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.04398,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 8.38087,
        "val_sales_cr": 0.39826,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.71798,
        "val_sales_cr": 3.83014,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 71.05082,
        "val_sales_cr": 1.52405,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.92711,
        "val_sales_cr": 0.33649,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 71.90619,
        "val_sales_cr": 12.26852,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.2757,
        "val_sales_cr": 15.37418,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.98256,
        "val_sales_cr": 10.56746,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 74.1049,
        "val_sales_cr": 0.10052,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 74.22863,
        "val_sales_cr": 0.59331,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 60.06291,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "846000",
        "price": 69.98228,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00001,
        "val_sales_cr": 4.85982,
        "vol_sales": 0
    },
    {
        "sku": "-G ORGNL CLC CHHT BHM EDTN+RS.2 OFF",
        "packsize": "250000",
        "price": 19.99888,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.05853,
        "val_sales_cr": 0.08512,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 14.2168,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+WHT [GLCS]",
        "packsize": "82500",
        "price": 5.00052,
        "val_sales_cr": 0.00096,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.9999,
        "val_sales_cr": 0.0612,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 10,
        "val_sales_cr": 0.00719,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5.00002,
        "val_sales_cr": 0.06651,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 10,
        "val_sales_cr": 0.0198,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 72.0731,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 9.99749,
        "val_sales_cr": 0.0004,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44912,
        "val_sales_cr": 0.06038,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH MN -G GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.13348,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 126.30556,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 223.88105,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00004,
        "val_sales_cr": 0.11369,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99989,
        "val_sales_cr": 0.0464,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99997,
        "val_sales_cr": 9.30999,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.99985,
        "val_sales_cr": 0.02001,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 10.00002,
        "val_sales_cr": 0.57424,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99896,
        "val_sales_cr": 65.0894,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 10.01442,
        "val_sales_cr": 0.16929,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99999,
        "val_sales_cr": 0.08065,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00021,
        "val_sales_cr": 0.03307,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 10.00045,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99927,
        "val_sales_cr": 0.02054,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99997,
        "val_sales_cr": 0.23635,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10,
        "val_sales_cr": 0.02028,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.99924,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99929,
        "val_sales_cr": 0.0322,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.99984,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 4.77329,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 10.00392,
        "val_sales_cr": 0.00026,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 20,
        "val_sales_cr": 6.65272,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.99924,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 13.82841,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 20.6214,
        "val_sales_cr": 0.01376,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.68108,
        "val_sales_cr": 42.67233,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.35617,
        "val_sales_cr": 20.68504,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 66.60732,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.29871,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 15.02911,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 25.99967,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 2.10847,
        "val_sales_cr": 0.00096,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.08881,
        "val_sales_cr": 0.02034,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.23218,
        "val_sales_cr": 0.02308,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 28.99417,
        "val_sales_cr": 0.00348,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.80825,
        "val_sales_cr": 0.07821,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 19.72913,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.95035,
        "val_sales_cr": 3.89771,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 20.00086,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 19.90219,
        "val_sales_cr": 1.12848,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.94575,
        "val_sales_cr": 0.2865,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50.00302,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.32919,
        "val_sales_cr": 0.23412,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 45.50556,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.26047,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 1.99998,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 2.01101,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 2.01376,
        "val_sales_cr": 0.00423,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3,
        "val_sales_cr": 0.12833,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+50 GM EXTR [GLCS]",
        "packsize": "350000",
        "price": 20.00007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 19.97761,
        "val_sales_cr": 0.0008,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.01892,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 12.12968,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99995,
        "val_sales_cr": 0.00599,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 0.32974,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0.09381,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.0242,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.10447,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00938,
        "val_sales_cr": 1.79901,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.99996,
        "val_sales_cr": 0.02361,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.00119,
        "val_sales_cr": 0.12699,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 2.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.04312,
        "val_sales_cr": 5.07673,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.00096,
        "val_sales_cr": 1.53102,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 500.61654,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 5.00001,
        "val_sales_cr": 0.10102,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.97861,
        "val_sales_cr": 0.44637,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 282.44381,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 4.46919,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99908,
        "val_sales_cr": 24.3714,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 64.89773,
        "val_sales_cr": 0.00171,
        "vol_sales": 0
    },
    {
        "sku": "PRL 500 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "500000",
        "price": 20.00115,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 31.27049,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.99999,
        "val_sales_cr": 0.26761,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 112.06204,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00002,
        "val_sales_cr": 0.05812,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5.0042,
        "val_sales_cr": 0.00012,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.96281,
        "val_sales_cr": 0.6182,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.99984,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 15.45028,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 5.26206,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 5.00003,
        "val_sales_cr": 0.05109,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.00579,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0.00302,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00295,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "71500",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 4.99993,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 4.99881,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.13506,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 8.65984,
        "val_sales_cr": 0.18677,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.62409,
        "val_sales_cr": 2.60684,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 70.79593,
        "val_sales_cr": 1.42654,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.88469,
        "val_sales_cr": 0.21259,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 71.86394,
        "val_sales_cr": 9.01957,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.33913,
        "val_sales_cr": 10.84996,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.97514,
        "val_sales_cr": 7.38534,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 74.1049,
        "val_sales_cr": 0.10052,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 75.24401,
        "val_sales_cr": 0.42148,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 60.06291,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 2.2061,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 2.99999,
        "val_sales_cr": 0.04573,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 3.49455,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.99992,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+WHT [GLCS]",
        "packsize": "82500",
        "price": 5.00052,
        "val_sales_cr": 0.00096,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.99998,
        "val_sales_cr": 0.0536,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 10.00043,
        "val_sales_cr": 0.0069,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5.00002,
        "val_sales_cr": 0.05976,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 10.00011,
        "val_sales_cr": 0.0091,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 72.55751,
        "val_sales_cr": 0.06864,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 9.9997,
        "val_sales_cr": 0.0165,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44939,
        "val_sales_cr": 0.0034,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 81.41681,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 150.01963,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00003,
        "val_sales_cr": 0.11424,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.99812,
        "val_sales_cr": 0.00319,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 4.13644,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 0.01457,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 10.00001,
        "val_sales_cr": 0.45796,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 10,
        "val_sales_cr": 44.29448,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 10.00065,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.9999,
        "val_sales_cr": 0.02884,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99983,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 10.00147,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 10.00009,
        "val_sales_cr": 0.03196,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.9997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10.00002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.00005,
        "val_sales_cr": 0.22454,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 5.00008,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 10.00076,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 19.99998,
        "val_sales_cr": 0.92885,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 17.16962,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 10.23284,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 22.02857,
        "val_sales_cr": 0.00069,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.65865,
        "val_sales_cr": 14.63553,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.3188,
        "val_sales_cr": 10.97685,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 78.32732,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 16.45754,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 33.63413,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.02167,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 1.99998,
        "val_sales_cr": 0.02216,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 19.99777,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.99816,
        "val_sales_cr": 2.2114,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 19.83547,
        "val_sales_cr": 0.08042,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.93401,
        "val_sales_cr": 0.18857,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.51117,
        "val_sales_cr": 0.21814,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 52.86586,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.06942,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 2.003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00932,
        "val_sales_cr": 0.02646,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20.00139,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.02775,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 12.75361,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2.96505,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99999,
        "val_sales_cr": 0.02173,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3,
        "val_sales_cr": 0.15103,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3.00905,
        "val_sales_cr": 0.03616,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0.06304,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.12093,
        "val_sales_cr": 0.00566,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 2.99983,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.014,
        "val_sales_cr": 3.69333,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 5.00011,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.00473,
        "val_sales_cr": 0.00781,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 2.99899,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 4.99978,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.08814,
        "val_sales_cr": 13.96777,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.02194,
        "val_sales_cr": 3.28433,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 538.79432,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99992,
        "val_sales_cr": 0.01886,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.93095,
        "val_sales_cr": 0.19874,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 302.69424,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 5.47289,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 18.74651,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 32.02045,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.83776,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 116.40487,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 4.99978,
        "val_sales_cr": 0.00894,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0.00555,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.99356,
        "val_sales_cr": 0.01388,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.15272,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 16.3549,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 7.50384,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 5.00612,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0.00632,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.13677,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99983,
        "val_sales_cr": 0.00286,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00175,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 5.17305,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 4.99352,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.03391,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 8.48722,
        "val_sales_cr": 0.13888,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.89107,
        "val_sales_cr": 0.91506,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 75.00108,
        "val_sales_cr": 0.09751,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 85.00012,
        "val_sales_cr": 0.07376,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.49068,
        "val_sales_cr": 2.08114,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.1527,
        "val_sales_cr": 3.66762,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.99992,
        "val_sales_cr": 2.50306,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 66.90377,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 71.97713,
        "val_sales_cr": 0.09159,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "846000",
        "price": 69.98228,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00003,
        "val_sales_cr": 1.73332,
        "vol_sales": 0
    },
    {
        "sku": "-G ORGNL CLC CHHT BHM EDTN+RS.2 OFF",
        "packsize": "250000",
        "price": 19.99888,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 2.99992,
        "val_sales_cr": 0.00378,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 5.93802,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 5.00002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.99934,
        "val_sales_cr": 0.00759,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.98969,
        "val_sales_cr": 0.00029,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 4.99999,
        "val_sales_cr": 0.1457,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44877,
        "val_sales_cr": 0.0016,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 42.68601,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 81.41103,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00001,
        "val_sales_cr": 0.0847,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.0003,
        "val_sales_cr": 0.00985,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 2.55981,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 10.00035,
        "val_sales_cr": 0.02588,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.99996,
        "val_sales_cr": 0.08042,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 10,
        "val_sales_cr": 21.81274,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 10.00016,
        "val_sales_cr": 0.01218,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 10.00005,
        "val_sales_cr": 0.09539,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99917,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10.00023,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.99986,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.00017,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10.00032,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.99722,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99979,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 10.00027,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 5.20226,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 19.99994,
        "val_sales_cr": 0.25138,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 23.30199,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.11692,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 22,
        "val_sales_cr": 0.00508,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.52545,
        "val_sales_cr": 3.36753,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.18182,
        "val_sales_cr": 2.95433,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 108.81008,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.00041,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 17.55771,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 35.32692,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.02008,
        "val_sales_cr": 0.00932,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.00043,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 20.00267,
        "val_sales_cr": 0.00374,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 25.00002,
        "val_sales_cr": 0.41599,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 19.99987,
        "val_sales_cr": 0.12591,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 22.2986,
        "val_sales_cr": 0.01819,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.9927,
        "val_sales_cr": 0.21415,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 53.43755,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.03002,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 2.00011,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 2.9999,
        "val_sales_cr": 0.00315,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 20.00688,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.94904,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 10.04104,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3,
        "val_sales_cr": 0.00632,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 0.00174,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.00002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00268,
        "val_sales_cr": 2.55983,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.92415,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.05513,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 5.00001,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.06122,
        "val_sales_cr": 8.97804,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.01033,
        "val_sales_cr": 2.82934,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 433.46178,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99997,
        "val_sales_cr": 0.05849,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.99898,
        "val_sales_cr": 0.13009,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 238.619,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 3.22048,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 18.14831,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 30.00551,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.28293,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 90.36386,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00006,
        "val_sales_cr": 0.0171,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5.00026,
        "val_sales_cr": 0.00189,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 0.01516,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.00029,
        "val_sales_cr": 0.00175,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 10.87542,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 3.83953,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.99994,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0.00122,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.00245,
        "val_sales_cr": 0.00041,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.0007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 7.57202,
        "val_sales_cr": 0.07261,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.99964,
        "val_sales_cr": 0.30824,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 72.70332,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.99983,
        "val_sales_cr": 0.05013,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 71.20773,
        "val_sales_cr": 1.16781,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.00021,
        "val_sales_cr": 0.8566,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 80.00029,
        "val_sales_cr": 0.67907,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 69.68948,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 71.71222,
        "val_sales_cr": 0.08024,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.9204,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.14382,
        "val_sales_cr": 0.03561,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 4.78422,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.99992,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 4.9907,
        "val_sales_cr": 0.00011,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.99999,
        "val_sales_cr": 1.01471,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 1.63035,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99998,
        "val_sales_cr": 0.05435,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 10.00113,
        "val_sales_cr": 0.0053,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 10.00003,
        "val_sales_cr": 0.3176,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 10.0004,
        "val_sales_cr": 0.01011,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.9948,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.99873,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 9.99928,
        "val_sales_cr": 0.01248,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 20.00307,
        "val_sales_cr": 0.0013,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2.00002,
        "val_sales_cr": 0.01959,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 21.45158,
        "val_sales_cr": 0.32688,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.21527,
        "val_sales_cr": 0.22153,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.99999,
        "val_sales_cr": 0.05119,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3.00001,
        "val_sales_cr": 0.05524,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2.00002,
        "val_sales_cr": 0.02055,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.09434,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.09063,
        "val_sales_cr": 0.03663,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.99992,
        "val_sales_cr": 0.12548,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.00139,
        "val_sales_cr": 0.01006,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.00027,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 3.00006,
        "val_sales_cr": 0.00517,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 0.24416,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3.00013,
        "val_sales_cr": 0.00234,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.99999,
        "val_sales_cr": 0.03368,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 400 GM PLPCH - G [GLUCOS]",
        "packsize": "400000",
        "price": 91.35714,
        "val_sales_cr": 0.00013,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.09899,
        "val_sales_cr": 0.00094,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 1.47332,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0.66493,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5.00009,
        "val_sales_cr": 0.02187,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99988,
        "val_sales_cr": 0.01695,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5.00035,
        "val_sales_cr": 0.4644,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 5.78655,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5.00009,
        "val_sales_cr": 0.01137,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5.00052,
        "val_sales_cr": 0.00193,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.99956,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99479,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99929,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 69.95812,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.99353,
        "val_sales_cr": 0.00263,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 73.0101,
        "val_sales_cr": 0.0318,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.33624,
        "val_sales_cr": 0.04748,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.99312,
        "val_sales_cr": 0.02208,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 70.01389,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 70.04063,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "940000",
        "price": 62.55709,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.0003,
        "val_sales_cr": 0.00675,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "209000",
        "price": 10.00671,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 5.00009,
        "val_sales_cr": 0.023,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 5.02985,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 10.00008,
        "val_sales_cr": 0.0124,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 4.99998,
        "val_sales_cr": 0.02301,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 10.00022,
        "val_sales_cr": 0.00929,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44868,
        "val_sales_cr": 0.00051,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 32.72042,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 58.39552,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.9993,
        "val_sales_cr": 0.01721,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00028,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 2.095,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.99994,
        "val_sales_cr": 0.09633,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 0.43801,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 10,
        "val_sales_cr": 13.44958,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.99995,
        "val_sales_cr": 0.06302,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99963,
        "val_sales_cr": 0.00537,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00011,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.99897,
        "val_sales_cr": 0.00194,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.52757,
        "val_sales_cr": 0.00124,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 9.99972,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.99916,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99945,
        "val_sales_cr": 0.00547,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.99653,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 19.99999,
        "val_sales_cr": 2.64916,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 10.0007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 2.2675,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 22.00052,
        "val_sales_cr": 0.02105,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.58053,
        "val_sales_cr": 17.33302,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.46907,
        "val_sales_cr": 10.77762,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 9.34742,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.29998,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 2.17713,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 3.86451,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.11116,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 1.99992,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 19.54145,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 20.02579,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.9986,
        "val_sales_cr": 2.16487,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.56983,
        "val_sales_cr": 0.05597,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.56514,
        "val_sales_cr": 0.01769,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50.01889,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.67826,
        "val_sales_cr": 0.04054,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 6.28038,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 2.99999,
        "val_sales_cr": 0.04513,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 1.99588,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00001,
        "val_sales_cr": 0.06969,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 21.31818,
        "val_sales_cr": 0.00507,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 1.40807,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3.00037,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 0.07371,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3.13794,
        "val_sales_cr": 0.00111,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.0004,
        "val_sales_cr": 0.00075,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.21786,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00219,
        "val_sales_cr": 0.98556,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.99917,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.00002,
        "val_sales_cr": 0.01283,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.06673,
        "val_sales_cr": 3.14057,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.07202,
        "val_sales_cr": 0.66528,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 143.77011,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99977,
        "val_sales_cr": 0.01329,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.05753,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 91.05468,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.71086,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 6.99542,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 28.48803,
        "val_sales_cr": 0.00309,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.28291,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 29.28133,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00009,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 0.00047,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 4.79424,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.99995,
        "val_sales_cr": 0.01045,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 1.74801,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.94354,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.61824,
        "val_sales_cr": 0.0452,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99971,
        "val_sales_cr": 0.00172,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00079,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.56607,
        "val_sales_cr": 0.03362,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.99288,
        "val_sales_cr": 0.74447,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 70.01767,
        "val_sales_cr": 0.06342,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.99855,
        "val_sales_cr": 0.16394,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.36731,
        "val_sales_cr": 6.99969,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.89543,
        "val_sales_cr": 9.32232,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.99971,
        "val_sales_cr": 4.48166,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 69.05693,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.1947,
        "val_sales_cr": 0.40039,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 9.99945,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 0.4088,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.15708,
        "val_sales_cr": 0.01077,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 0.99575,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 5.00002,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 10.00053,
        "val_sales_cr": 0.00943,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.99981,
        "val_sales_cr": 0.00537,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5,
        "val_sales_cr": 0.00261,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 10.00251,
        "val_sales_cr": 0.00199,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 12.96151,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 23.56439,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00068,
        "val_sales_cr": 0.01175,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 0.86045,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 10.00021,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 10.00017,
        "val_sales_cr": 0.05335,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 10,
        "val_sales_cr": 7.41659,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.9975,
        "val_sales_cr": 0.0024,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99741,
        "val_sales_cr": 0.02934,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00163,
        "val_sales_cr": 0.00246,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 10.00059,
        "val_sales_cr": 0.00846,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10.00053,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99948,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 4.83325,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 19.99982,
        "val_sales_cr": 0.24113,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.95833,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 3.26532,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 22.0016,
        "val_sales_cr": 0.00964,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.57715,
        "val_sales_cr": 2.02797,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.12061,
        "val_sales_cr": 1.18805,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 18.1889,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.2812,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 4.18312,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 4.71068,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.10286,
        "val_sales_cr": 0.00207,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2,
        "val_sales_cr": 0.08676,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 25.00028,
        "val_sales_cr": 0.12288,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.00352,
        "val_sales_cr": 0.00455,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.99982,
        "val_sales_cr": 0.03758,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.88622,
        "val_sales_cr": 0.06527,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 12.82998,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 2.99996,
        "val_sales_cr": 0.01601,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 2.94737,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.00165,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 2.84877,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3,
        "val_sales_cr": 0.00964,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3.00013,
        "val_sales_cr": 0.00454,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.00004,
        "val_sales_cr": 0.01433,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00105,
        "val_sales_cr": 0.41477,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.0143,
        "val_sales_cr": 0.91644,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.00046,
        "val_sales_cr": 0.5289,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 129.24563,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 5.00001,
        "val_sales_cr": 0.06691,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 5.00001,
        "val_sales_cr": 0.10877,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 77.22745,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 0.56283,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 6.64318,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 23.20858,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 4.9996,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.99998,
        "val_sales_cr": 0.0268,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.99965,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 2.2766,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5.00001,
        "val_sales_cr": 0.70901,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99231,
        "val_sales_cr": 0.00006,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.0399,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.99991,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.13364,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 5.75964,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 75.00243,
        "val_sales_cr": 0.11427,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.86,
        "val_sales_cr": 0.00212,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 70.30379,
        "val_sales_cr": 0.18833,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.25919,
        "val_sales_cr": 0.61825,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.99307,
        "val_sales_cr": 0.20196,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 69.94802,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 70.01059,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00003,
        "val_sales_cr": 0.17545,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 1.99513,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.99992,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 10.0001,
        "val_sales_cr": 0.00969,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.9994,
        "val_sales_cr": 0.00167,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5.00006,
        "val_sales_cr": 0.00906,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 9.9988,
        "val_sales_cr": 0.00333,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 3.11044,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 8.38862,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 10,
        "val_sales_cr": 0.22086,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.9994,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.99987,
        "val_sales_cr": 0.01528,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 10.00001,
        "val_sales_cr": 1.95256,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.99991,
        "val_sales_cr": 0.02117,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99904,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 9.99765,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99861,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 10.00012,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 19.99984,
        "val_sales_cr": 0.11369,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 0.17686,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.75613,
        "val_sales_cr": 2.0596,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.49915,
        "val_sales_cr": 1.05024,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 1.17605,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.74587,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3.00001,
        "val_sales_cr": 0.20572,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 0.23436,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.00101,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.00013,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 25.00021,
        "val_sales_cr": 0.23773,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 20.00004,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.00003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.00072,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 0.85903,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.00339,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.00085,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 0.22577,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3.03067,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00506,
        "val_sales_cr": 0.05338,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.02547,
        "val_sales_cr": 0.30002,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.00001,
        "val_sales_cr": 0.20829,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 12.17442,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99958,
        "val_sales_cr": 0.00238,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 5.88572,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5.00002,
        "val_sales_cr": 0.1949,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.99999,
        "val_sales_cr": 0.28392,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 3.86648,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.99904,
        "val_sales_cr": 0.00104,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5.00001,
        "val_sales_cr": 0.36797,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.99998,
        "val_sales_cr": 0.12609,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.99804,
        "val_sales_cr": 0.00102,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5.00123,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00275,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 6.99869,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 75.00499,
        "val_sales_cr": 0.02403,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 70.07051,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.9966,
        "val_sales_cr": 0.05753,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 73.99686,
        "val_sales_cr": 0.66269,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.00144,
        "val_sales_cr": 0.66754,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 80.00077,
        "val_sales_cr": 0.58397,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 68.80254,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 66.70916,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.99999,
        "val_sales_cr": 0.13601,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 0.12174,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.99979,
        "val_sales_cr": 0.00942,
        "vol_sales": 0
    },
    {
        "sku": "PRL 45 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "45000",
        "price": 5,
        "val_sales_cr": 0.30676,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 10.00009,
        "val_sales_cr": 0.04351,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 72.55751,
        "val_sales_cr": 0.06864,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 9.99964,
        "val_sales_cr": 0.0169,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 5.44909,
        "val_sales_cr": 0.06589,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH MN -G GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.13348,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 300.21547,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 10,
        "val_sales_cr": 547.29061,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 10.00002,
        "val_sales_cr": 0.3416,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 10.00003,
        "val_sales_cr": 0.05944,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.99998,
        "val_sales_cr": 19.2369,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 0.15679,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 10,
        "val_sales_cr": 1.62455,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.99956,
        "val_sales_cr": 154.33294,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 10.00906,
        "val_sales_cr": 0.26804,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.99963,
        "val_sales_cr": 0.23959,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS NW BGGR+20 GM FR",
        "packsize": "140000",
        "price": 10.00031,
        "val_sales_cr": 0.03553,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10.00023,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.99897,
        "val_sales_cr": 0.00194,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.98998,
        "val_sales_cr": 0.06221,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20 GM EXTR [GLCS]",
        "packsize": "160000",
        "price": 9.99998,
        "val_sales_cr": 0.24645,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "168000",
        "price": 10,
        "val_sales_cr": 0.02028,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.9992,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.99998,
        "val_sales_cr": 0.26221,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.99957,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 5.17318,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 9.99937,
        "val_sales_cr": 0.01273,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 19.99999,
        "val_sales_cr": 10.83822,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 10,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 2,
        "val_sales_cr": 60.02929,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.11692,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 10.23284,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.60614,
        "val_sales_cr": 0.05023,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.65172,
        "val_sales_cr": 82.42285,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.35859,
        "val_sales_cr": 47.85367,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 2,
        "val_sales_cr": 282.50828,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 10.28997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 3,
        "val_sales_cr": 55.66557,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 2,
        "val_sales_cr": 103.79083,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 2.10847,
        "val_sales_cr": 0.00096,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.06902,
        "val_sales_cr": 0.03173,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.03705,
        "val_sales_cr": 0.132,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 28.99417,
        "val_sales_cr": 0.00348,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.80825,
        "val_sales_cr": 0.07821,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 20.98487,
        "val_sales_cr": 0.04037,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 24.97811,
        "val_sales_cr": 9.17607,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 20.00086,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 19.93385,
        "val_sales_cr": 1.40539,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 21.07311,
        "val_sales_cr": 0.54854,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50.01152,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 2.60506,
        "val_sales_cr": 0.77738,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+25%X[7G]",
        "packsize": "35000",
        "price": 3,
        "val_sales_cr": 172.02253,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "28000",
        "price": 3,
        "val_sales_cr": 0.4268,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 2.00814,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 2.01376,
        "val_sales_cr": 0.00423,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 30 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "30000",
        "price": 3.00109,
        "val_sales_cr": 0.22762,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+50 GM EXTR [GLCS]",
        "packsize": "350000",
        "price": 20.00007,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 21.12419,
        "val_sales_cr": 0.00587,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 20.01892,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 3,
        "val_sales_cr": 39.44063,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2.96505,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+12.5% EXTR [GLCS]",
        "packsize": "37500",
        "price": 2.99998,
        "val_sales_cr": 0.02771,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 3,
        "val_sales_cr": 0.16699,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 3.00073,
        "val_sales_cr": 0.44588,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 3.00093,
        "val_sales_cr": 0.15797,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "42000",
        "price": 3.0321,
        "val_sales_cr": 0.02074,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.06154,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 38.35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "38350",
        "price": 4.00823,
        "val_sales_cr": 9.50587,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS BGGR CRSPR+12.5% EXTR",
        "packsize": "45000",
        "price": 4.99996,
        "val_sales_cr": 0.02361,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.00127,
        "val_sales_cr": 0.14762,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 400 GM PLPCH - G [GLUCOS]",
        "packsize": "400000",
        "price": 91.35714,
        "val_sales_cr": 0.00013,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 4.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 45.5 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "45500",
        "price": 4.06877,
        "val_sales_cr": 32.37956,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 4.01661,
        "val_sales_cr": 9.04809,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 1759.53613,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.99998,
        "val_sales_cr": 0.26096,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.97502,
        "val_sales_cr": 0.94151,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 5,
        "val_sales_cr": 998.58984,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 5,
        "val_sales_cr": 14.65304,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.9997,
        "val_sales_cr": 75.20569,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 64.89773,
        "val_sales_cr": 0.00171,
        "vol_sales": 0
    },
    {
        "sku": "PRL 500 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "500000",
        "price": 20.00115,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 28.48803,
        "val_sales_cr": 0.00309,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.99999,
        "val_sales_cr": 0.26761,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 375.65156,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 5.00002,
        "val_sales_cr": 0.08416,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 5.00012,
        "val_sales_cr": 0.00803,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 4.92621,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.9663,
        "val_sales_cr": 0.68552,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 5.00029,
        "val_sales_cr": 0.00175,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 47.08453,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 5,
        "val_sales_cr": 18.38601,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.99988,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.82805,
        "val_sales_cr": 0.10491,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 5.00758,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 5,
        "val_sales_cr": 0.00801,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 5.00259,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "71500",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 5.10964,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 4.99542,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 5.04398,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 8.46249,
        "val_sales_cr": 0.43188,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 74.76949,
        "val_sales_cr": 4.71292,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 71.00896,
        "val_sales_cr": 1.58746,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 84.95507,
        "val_sales_cr": 0.5627,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 72.11921,
        "val_sales_cr": 20.15104,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 75.48908,
        "val_sales_cr": 26.02977,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 79.98835,
        "val_sales_cr": 15.85714,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 74.1049,
        "val_sales_cr": 0.10052,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 72.1142,
        "val_sales_cr": 0.9937,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 60.06291,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "846000",
        "price": 69.98228,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "940000",
        "price": 62.55709,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 9.99997,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 5.00001,
        "val_sales_cr": 5.58682,
        "vol_sales": 0
    },
    {
        "sku": "-G ORGNL CLC CHHT BHM EDTN+RS.2 OFF",
        "packsize": "250000",
        "price": 19.99888,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "209000",
        "price": 10.00671,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 3.06929,
        "val_sales_cr": 0.09589,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 5,
        "val_sales_cr": 17.35243,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.99999,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+WHT [GLCS]",
        "packsize": "82500",
        "price": 5.00052,
        "val_sales_cr": 0.00096,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.99999,
        "val_sales_cr": 0.10214,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.99986,
        "val_sales_cr": 0.01422,
        "vol_sales": 0
    },
    {
        "sku": "93.75 GM PLPCH -G KSM DL CHN CNNMN BSCTS",
        "packsize": "93750",
        "price": 9.86361,
        "val_sales_cr": 0.00329,
        "vol_sales": 0
    },
    {
        "sku": "PRL-G 93 GM PLPCH KSM DL CHN CNNMN BSCTS",
        "packsize": "93000",
        "price": 10,
        "val_sales_cr": 0.00017,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 1 KG PLPCH - G [GLUCOS]",
        "packsize": "100000",
        "price": 73.28882,
        "val_sales_cr": 0.00741,
        "vol_sales": 0
    },
    {
        "sku": "1 KG PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 40.14706,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "10000",
        "price": 1.00111,
        "val_sales_cr": 0.00027,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM EWRPK - G [GLUCOS]",
        "packsize": "100000",
        "price": 9.6141,
        "val_sales_cr": 0.03762,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G FR GNS ORG GLCS BSC+10G FR",
        "packsize": "110000",
        "price": 9.85575,
        "val_sales_cr": 0.18271,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[20G]",
        "packsize": "120000",
        "price": 9.74901,
        "val_sales_cr": 0.86681,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "100000",
        "price": 9.87678,
        "val_sales_cr": 0.02624,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "100000",
        "price": 9.89406,
        "val_sales_cr": 0.0043,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 100 GM PLPCH -G CHHOTA BHEEM",
        "packsize": "100000",
        "price": 9.83107,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "100000",
        "price": 9.37527,
        "val_sales_cr": 0.00775,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "110000",
        "price": 9.40785,
        "val_sales_cr": 0.27031,
        "vol_sales": 0
    },
    {
        "sku": "PRL 110 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "110000",
        "price": 9.9195,
        "val_sales_cr": 1.23155,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+20 GM EXTR",
        "packsize": "130000",
        "price": 9.89684,
        "val_sales_cr": 2.23894,
        "vol_sales": 0
    },
    {
        "sku": "120 GM PLPCH -G ORGNL GLC BSCTS G FR GNS",
        "packsize": "120000",
        "price": 9.47542,
        "val_sales_cr": 1.76223,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS G FR GNS+20 GM FR",
        "packsize": "140000",
        "price": 9.59859,
        "val_sales_cr": 0.01679,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "159600",
        "price": 10.00053,
        "val_sales_cr": 0.02066,
        "vol_sales": 0
    },
    {
        "sku": "PRL 133.4 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "133400",
        "price": 9.3128,
        "val_sales_cr": 0.02694,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 140 GM PLPCH -G GLUCOSE",
        "packsize": "140000",
        "price": 9.86758,
        "val_sales_cr": 0.0429,
        "vol_sales": 0
    },
    {
        "sku": "140 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "140000",
        "price": 9.69241,
        "val_sales_cr": 0.34585,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "140000",
        "price": 9.68223,
        "val_sales_cr": 0.36439,
        "vol_sales": 0
    },
    {
        "sku": "PRL 144 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "144000",
        "price": 9.73684,
        "val_sales_cr": 0.00002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC+24 GM EXTR [GLCS]",
        "packsize": "168000",
        "price": 8.79443,
        "val_sales_cr": 0.0005,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 150 GM EWRPK - G [GLUCOS]",
        "packsize": "150000",
        "price": 9.69445,
        "val_sales_cr": 0.19718,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "150000",
        "price": 9.88242,
        "val_sales_cr": 0.05229,
        "vol_sales": 0
    },
    {
        "sku": "PRL 150 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "150000",
        "price": 10.0266,
        "val_sales_cr": 0.0153,
        "vol_sales": 0
    },
    {
        "sku": "150 GM PLPCH -G ORGNL GLC BSCTS+50G FR",
        "packsize": "200000",
        "price": 23.56248,
        "val_sales_cr": 1.29449,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "150000",
        "price": 9.75055,
        "val_sales_cr": 0.05322,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "169200",
        "price": 10.72835,
        "val_sales_cr": 0.01586,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 17.7 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "17700",
        "price": 1.91446,
        "val_sales_cr": 0.15631,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "176000",
        "price": 10.12177,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "188000",
        "price": 9.99085,
        "val_sales_cr": 0.0994,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "190000",
        "price": 9.84116,
        "val_sales_cr": 0.01578,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "192000",
        "price": 9.61002,
        "val_sales_cr": 0.03432,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 200 GM - G [GLUCOS]",
        "packsize": "200000",
        "price": 21.35931,
        "val_sales_cr": 0.04013,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 20.94416,
        "val_sales_cr": 0.31577,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLC BSCTS+50GM EXTR",
        "packsize": "250000",
        "price": 22.21102,
        "val_sales_cr": 0.03853,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 21 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "21000",
        "price": 1.86671,
        "val_sales_cr": 0.40906,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "220000",
        "price": 9.79159,
        "val_sales_cr": 0.04634,
        "vol_sales": 0
    },
    {
        "sku": "23.6 GM PLPCH -G GLCS BSCTS+25%X[5.9G]",
        "packsize": "29500",
        "price": 2.9536,
        "val_sales_cr": 0.00237,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 24.5 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "24500",
        "price": 1.9097,
        "val_sales_cr": 0.4587,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 25 GM PLPCH - G [GLUCOS]",
        "packsize": "25000",
        "price": 1.98504,
        "val_sales_cr": 0.0065,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC G FR GNS+20% EXTR",
        "packsize": "30000",
        "price": 2.19553,
        "val_sales_cr": 0.00082,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "25000",
        "price": 2.51798,
        "val_sales_cr": 0.15749,
        "vol_sales": 0
    },
    {
        "sku": "PRL 25 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "25000",
        "price": 2.00648,
        "val_sales_cr": 0.00712,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 250 GM - G [GLUCOS]",
        "packsize": "250000",
        "price": 20.8905,
        "val_sales_cr": 9.66618,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "250000",
        "price": 21.97782,
        "val_sales_cr": 3.06283,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "250000",
        "price": 21.96647,
        "val_sales_cr": 1.20787,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G NW BGGR CRSPR & TST+RS 2 OFF",
        "packsize": "250000",
        "price": 17.77574,
        "val_sales_cr": 0.01502,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH G NW BGGR CRSPR & TSTR",
        "packsize": "250000",
        "price": 21.11452,
        "val_sales_cr": 2.07242,
        "vol_sales": 0
    },
    {
        "sku": "250 GM PLPCH G ORGNL GLC BSCTS+FR 50 GM",
        "packsize": "300000",
        "price": 20.14954,
        "val_sales_cr": 0.13867,
        "vol_sales": 0
    },
    {
        "sku": "PRL 250 GM PLPCH [10*25G] -G CHHT BHM",
        "packsize": "250000",
        "price": 50,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PRL 28 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "28000",
        "price": 1.99414,
        "val_sales_cr": 0.33283,
        "vol_sales": 0
    },
    {
        "sku": "PRL 29.19 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "29190",
        "price": 2.00003,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 294 GM PLPCH -G ORGNL GLCS+20% EXTR",
        "packsize": "352800",
        "price": 7.51593,
        "val_sales_cr": 0.0175,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS BGGR CRSPR [GLCS]",
        "packsize": "30000",
        "price": 1.71476,
        "val_sales_cr": 0.02061,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 300 GM - G [GLUCOS]",
        "packsize": "300000",
        "price": 20.67883,
        "val_sales_cr": 0.04913,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "300000",
        "price": 19.70636,
        "val_sales_cr": 0.11169,
        "vol_sales": 0
    },
    {
        "sku": "PRL 300 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "300000",
        "price": 20,
        "val_sales_cr": 0.00001,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "300000",
        "price": 19.57875,
        "val_sales_cr": 0.11033,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[6.5GM]",
        "packsize": "38500",
        "price": 2.94996,
        "val_sales_cr": 0.03455,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "32900",
        "price": 2,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "330000",
        "price": 23.63704,
        "val_sales_cr": 0.00223,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "338400",
        "price": 19.31834,
        "val_sales_cr": 0.03401,
        "vol_sales": 0
    },
    {
        "sku": "PRL 35 GM PLPCH - G ORGNL GLCS+5 GM FR",
        "packsize": "40000",
        "price": 2.8067,
        "val_sales_cr": 0.00011,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 2.85413,
        "val_sales_cr": 0.00511,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 35 GM PLPCH -G GLUCOSE BISCUITS",
        "packsize": "35000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLC BSCTS+20% EXTR[7GM]",
        "packsize": "42000",
        "price": 2.89876,
        "val_sales_cr": 0.03135,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "352000",
        "price": 20.88877,
        "val_sales_cr": 0.12849,
        "vol_sales": 0
    },
    {
        "sku": "PRL 37.5 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "37500",
        "price": 3.03215,
        "val_sales_cr": 0.02556,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "37600",
        "price": 1.90678,
        "val_sales_cr": 0.19982,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "376000",
        "price": 19.65951,
        "val_sales_cr": 0.09064,
        "vol_sales": 0
    },
    {
        "sku": "PRL 40 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "40000",
        "price": 3.07421,
        "val_sales_cr": 0.00124,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 400 GM PLPCH - G [GLUCOS]",
        "packsize": "400000",
        "price": 46.50769,
        "val_sales_cr": 0.0003,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLCS+20% EXTR [GLCS]",
        "packsize": "50400",
        "price": 10.00532,
        "val_sales_cr": 0.00038,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "44000",
        "price": 4.79696,
        "val_sales_cr": 0.00092,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "440000",
        "price": 20.35349,
        "val_sales_cr": 0.04351,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH G ORGNL GLC BGGR CRSPR & TSTR",
        "packsize": "45000",
        "price": 3.03468,
        "val_sales_cr": 0.00627,
        "vol_sales": 0
    },
    {
        "sku": "PRL 49 GM PLPCH -G ORGNL GLC BSCTS",
        "packsize": "49000",
        "price": 3.99992,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 50 GM - G [GLUCOS]",
        "packsize": "50000",
        "price": 1.81736,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G FR GNS ORG GLCS BSC+20%X[10G]",
        "packsize": "60000",
        "price": 4.95333,
        "val_sales_cr": 0.01335,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "50000",
        "price": 4.23706,
        "val_sales_cr": 0.00917,
        "vol_sales": 0
    },
    {
        "sku": "50 GM PLPCH - G ORGNL GLC BSCTS [GLCS]",
        "packsize": "50000",
        "price": 4.76521,
        "val_sales_cr": 1.11059,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORG GLCS BSC+10%X[5G]",
        "packsize": "55000",
        "price": 4.57517,
        "val_sales_cr": 1.11807,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL CHHT BHM",
        "packsize": "50000",
        "price": 4.98961,
        "val_sales_cr": 0.00519,
        "vol_sales": 0
    },
    {
        "sku": "PRL 50 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "50000",
        "price": 4.64429,
        "val_sales_cr": 0.09803,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM - G [GLUCOS]",
        "packsize": "500000",
        "price": 49.85619,
        "val_sales_cr": 0.00673,
        "vol_sales": 0
    },
    {
        "sku": "PRL 500 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "500000",
        "price": 24.13043,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 500 GM PLPCH -G ORIGINAL GLUCOSE",
        "packsize": "500000",
        "price": 21.15053,
        "val_sales_cr": 0.04627,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "528000",
        "price": 28.22928,
        "val_sales_cr": 0.00933,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 G PLPCH -G ORGNL GLC BSCT",
        "packsize": "55000",
        "price": 4.67791,
        "val_sales_cr": 0.95648,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLC BSCTS+18% EXTR[10GM]",
        "packsize": "65000",
        "price": 4.88055,
        "val_sales_cr": 0.35634,
        "vol_sales": 0
    },
    {
        "sku": "55 GM PLPCH -G ORGNL GLC CHHT BHM EDTN",
        "packsize": "55000",
        "price": 9.94943,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH G ORGNL G FR GNS",
        "packsize": "55000",
        "price": 4.84558,
        "val_sales_cr": 0.79327,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "550000",
        "price": 28.29897,
        "val_sales_cr": 0.00027,
        "vol_sales": 0
    },
    {
        "sku": "PRL 56 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "56000",
        "price": 3,
        "val_sales_cr": 0.00008,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "56400",
        "price": 3,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH - G ORIGINAL GLUCOSE",
        "packsize": "60000",
        "price": 4.9096,
        "val_sales_cr": 0.94431,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "60000",
        "price": 4.83633,
        "val_sales_cr": 1.20727,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 60 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "60000",
        "price": 4.74873,
        "val_sales_cr": 0.01839,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 65 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "65000",
        "price": 4.65908,
        "val_sales_cr": 0.07552,
        "vol_sales": 0
    },
    {
        "sku": "GM EWRPK - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "66000",
        "price": 4.99312,
        "val_sales_cr": 0.00022,
        "vol_sales": 0
    },
    {
        "sku": "PRL 66.7 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "66700",
        "price": 4.98862,
        "val_sales_cr": 0.02354,
        "vol_sales": 0
    },
    {
        "sku": "PRL 676.8 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "676800",
        "price": 76.09273,
        "val_sales_cr": 0.07041,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 4.71861,
        "val_sales_cr": 0.7142,
        "vol_sales": 0
    },
    {
        "sku": "PRL 70 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "70000",
        "price": 0,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH - G ORGNL GLCS+14.2% EXTR [10GM]",
        "packsize": "80000",
        "price": 4.98716,
        "val_sales_cr": 0.01569,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 70 GM PLPCH -G CHHOTA BHEAM",
        "packsize": "70000",
        "price": 4.76356,
        "val_sales_cr": 0.10745,
        "vol_sales": 0
    },
    {
        "sku": "70 GM PLPCH -G ORGNL GLCS CHHT BHM EDTN",
        "packsize": "70000",
        "price": 4.94059,
        "val_sales_cr": 0.01722,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 700 GM -G [GLUCOS]",
        "packsize": "700000",
        "price": 72.74038,
        "val_sales_cr": 0.07677,
        "vol_sales": 0
    },
    {
        "sku": "PRL 72 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "72000",
        "price": 5.65716,
        "val_sales_cr": 0.02528,
        "vol_sales": 0
    },
    {
        "sku": "PARLE 75 GM - G [GLUCOS]",
        "packsize": "75000",
        "price": 4.62751,
        "val_sales_cr": 0.48418,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "75000",
        "price": 5.01727,
        "val_sales_cr": 0.10931,
        "vol_sales": 0
    },
    {
        "sku": "- G ORGNL GLCS NW BGGR CRSPR & TSTR",
        "packsize": "75000",
        "price": 4.99354,
        "val_sales_cr": 0.17922,
        "vol_sales": 0
    },
    {
        "sku": "PRL 75 GM PLPCH - G PRMM PCK [GLCS]",
        "packsize": "75000",
        "price": 4.75781,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "75200",
        "price": 5.00001,
        "val_sales_cr": 0.10609,
        "vol_sales": 0
    },
    {
        "sku": "PRL 750 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "750000",
        "price": 69.18959,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "752000",
        "price": 74.49453,
        "val_sales_cr": 0.03883,
        "vol_sales": 0
    },
    {
        "sku": "PRL 80 GM PLPCH - G ORGNL GLC [GLCS]",
        "packsize": "80000",
        "price": 9.7346,
        "val_sales_cr": 0.12537,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G ORGNL GLCS BSCTS+12.5% EXTR",
        "packsize": "90000",
        "price": 9.97959,
        "val_sales_cr": 0.0002,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G FR GNS ORGNL GLCS+RS 5 OFF",
        "packsize": "800000",
        "price": 72.66929,
        "val_sales_cr": 0.89069,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 68.58823,
        "val_sales_cr": 11.58366,
        "vol_sales": 0
    },
    {
        "sku": "-G GNS FRRGNL GLCS NW BGGR CRSPR TSTR",
        "packsize": "800000",
        "price": 82.13262,
        "val_sales_cr": 0.07587,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 73.77073,
        "val_sales_cr": 3.74924,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 76.7459,
        "val_sales_cr": 0.68195,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS BSCTS",
        "packsize": "800000",
        "price": 77.69109,
        "val_sales_cr": 0.7847,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS NW BGGR CRSPR& TSTR",
        "packsize": "800000",
        "price": 71.71775,
        "val_sales_cr": 11.51717,
        "vol_sales": 0
    },
    {
        "sku": "PRL 800 GM PLPCH -G ORGNL GLCS [GLCS]",
        "packsize": "800000",
        "price": 69.33866,
        "val_sales_cr": 47.89048,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC CHHT BHM EDTN+RS 5 OFF",
        "packsize": "800000",
        "price": 64.44539,
        "val_sales_cr": 0.01357,
        "vol_sales": 0
    },
    {
        "sku": "PPH -G ORGNL GLC NW BGGR CRSPR & TSTR",
        "packsize": "80000",
        "price": 9.89936,
        "val_sales_cr": 0.01567,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+ WHT ORGNL GLCS [GLCS]",
        "packsize": "846000",
        "price": 78.17143,
        "val_sales_cr": 0.00137,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+ WHT [GLCS]",
        "packsize": "88000",
        "price": 4.5947,
        "val_sales_cr": 0.00905,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "880000",
        "price": 74.07496,
        "val_sales_cr": 0.06839,
        "vol_sales": 0
    },
    {
        "sku": "94 GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "94000",
        "price": 4.9571,
        "val_sales_cr": 0.01084,
        "vol_sales": 0
    },
    {
        "sku": "PRL 94 GM PLPCH -G ORGNL GLC [GLCS]",
        "packsize": "94000",
        "price": 5.07941,
        "val_sales_cr": 0.03397,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "940000",
        "price": 64.23696,
        "val_sales_cr": 0.08217,
        "vol_sales": 0
    },
    {
        "sku": "PRL 99 GM PLPCH - G ORGNL GLCS [GLCS]",
        "packsize": "99000",
        "price": 4.80767,
        "val_sales_cr": 0.00138,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH PRL G FR GNS ORGNL GLCS+18.1% EXTR",
        "packsize": "65000",
        "price": 4.79869,
        "val_sales_cr": 0.04318,
        "vol_sales": 0
    },
    {
        "sku": "-G ORGNL CLC CHHT BHM EDTN+RS.2 OFF",
        "packsize": "250000",
        "price": 20.01136,
        "val_sales_cr": 0.00018,
        "vol_sales": 0
    },
    {
        "sku": "PLPCH -G ORGNL GLCS MLK WRLD LRGST SLLNG",
        "packsize": "507600",
        "price": 30.52035,
        "val_sales_cr": 0.00105,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK WHT ORGNL GLCS [GLCS]",
        "packsize": "180000",
        "price": 9.85155,
        "val_sales_cr": 0.00604,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "209000",
        "price": 10.01047,
        "val_sales_cr": 0.00019,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "313500",
        "price": 15.00655,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH -G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "38500",
        "price": 2.54237,
        "val_sales_cr": 0.00629,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "418000",
        "price": 19.49694,
        "val_sales_cr": 0,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS+20% EXTR",
        "packsize": "60000",
        "price": 4.70711,
        "val_sales_cr": 1.93329,
        "vol_sales": 0
    },
    {
        "sku": "PRL 55 GM PLPCH - G MLK+WHT ORGNL GLCS",
        "packsize": "55000",
        "price": 4.90435,
        "val_sales_cr": 0.00533,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G ORGNL GLC MLK+WHT [GLCS]",
        "packsize": "82500",
        "price": 4.97902,
        "val_sales_cr": 0.04292,
        "vol_sales": 0
    },
    {
        "sku": "GM PLPCH - G MLK+WHT ORGNL GLCS [GLCS]",
        "packsize": "825000",
        "price": 74.27661,
        "val_sales_cr": 0.04068,
        "vol_sales": 0
    },
    {
        "sku": "PRL 100 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "100000",
        "price": 9.33913,
        "val_sales_cr": 0.00011,
        "vol_sales": 0
    },
    {
        "sku": "PRL 93.75 GM PLPCH -G OTS & BRRS BSCTS",
        "packsize": "93750",
        "price": 9.60808,
        "val_sales_cr": 0.00335,
        "vol_sales": 0
    }
];
export default rawData;