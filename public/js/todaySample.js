function foo() {
    return 'foo';
  }

const todaySample = [
  {
    countryregion: "Afghanistan",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 33.93911,
      lng: 67.709953,
    },
    countrycode: {
      iso2: "AF",
      iso3: "AFG",
    },
    confirmed: 38716,
    deaths: 1420,
    recovered: 31638,
  },
  {
    countryregion: "Albania",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 41.1533,
      lng: 20.1683,
    },
    countrycode: {
      iso2: "AL",
      iso3: "ALB",
    },
    confirmed: 11353,
    deaths: 334,
    recovered: 6569,
  },
  {
    countryregion: "Algeria",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 28.0339,
      lng: 1.6596,
    },
    countrycode: {
      iso2: "DZ",
      iso3: "DZA",
    },
    confirmed: 48254,
    deaths: 1612,
    recovered: 34037,
  },
  {
    countryregion: "Andorra",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 42.5063,
      lng: 1.5218,
    },
    countrycode: {
      iso2: "AD",
      iso3: "AND",
    },
    confirmed: 1344,
    deaths: 53,
    recovered: 943,
  },
  {
    countryregion: "Angola",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -11.2027,
      lng: 17.8739,
    },
    countrycode: {
      iso2: "AO",
      iso3: "AGO",
    },
    confirmed: 3388,
    deaths: 134,
    recovered: 1301,
  },
  {
    countryregion: "Antigua and Barbuda",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 17.0608,
      lng: -61.7964,
    },
    countrycode: {
      iso2: "AG",
      iso3: "ATG",
    },
    confirmed: 95,
    deaths: 3,
    recovered: 91,
  },
  {
    countryregion: "Argentina",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -38.4161,
      lng: -63.6167,
    },
    countrycode: {
      iso2: "AR",
      iso3: "ARG",
    },
    confirmed: 555537,
    deaths: 11352,
    recovered: 419513,
  },
  {
    countryregion: "Armenia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 40.0691,
      lng: 45.0382,
    },
    countrycode: {
      iso2: "AM",
      iso3: "ARM",
    },
    confirmed: 45862,
    deaths: 916,
    recovered: 41659,
  },
  {
    countryregion: "Australia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -30.8996,
      lng: 135.3,
    },
    countrycode: {
      iso2: "AU",
      iso3: "AUS",
    },
    confirmed: 26692,
    deaths: 816,
    recovered: 23463,
  },
  {
    countryregion: "Austria",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 47.5162,
      lng: 14.5501,
    },
    countrycode: {
      iso2: "AT",
      iso3: "AUT",
    },
    confirmed: 33159,
    deaths: 756,
    recovered: 26760,
  },
  {
    countryregion: "Azerbaijan",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 40.1431,
      lng: 47.5769,
    },
    countrycode: {
      iso2: "AZ",
      iso3: "AZE",
    },
    confirmed: 38327,
    deaths: 562,
    recovered: 35756,
  },
  {
    countryregion: "Bahamas",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 25.025885,
      lng: -78.035889,
    },
    confirmed: 2928,
    deaths: 67,
    recovered: 1319,
  },
  {
    countryregion: "Bahrain",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 26.0275,
      lng: 50.55,
    },
    countrycode: {
      iso2: "BH",
      iso3: "BHR",
    },
    confirmed: 60307,
    deaths: 212,
    recovered: 53681,
  },
  {
    countryregion: "Bangladesh",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 23.685,
      lng: 90.3563,
    },
    countrycode: {
      iso2: "BD",
      iso3: "BGD",
    },
    confirmed: 337520,
    deaths: 4733,
    recovered: 240643,
  },
  {
    countryregion: "Barbados",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 13.1939,
      lng: -59.5432,
    },
    countrycode: {
      iso2: "BB",
      iso3: "BRB",
    },
    confirmed: 181,
    deaths: 7,
    recovered: 164,
  },
  {
    countryregion: "Belarus",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 53.7098,
      lng: 27.9534,
    },
    countrycode: {
      iso2: "BY",
      iso3: "BLR",
    },
    confirmed: 74173,
    deaths: 750,
    recovered: 72584,
  },
  {
    countryregion: "Belgium",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 50.8333,
      lng: 4.469936,
    },
    countrycode: {
      iso2: "BE",
      iso3: "BEL",
    },
    confirmed: 93455,
    deaths: 9925,
    recovered: 18723,
  },
  {
    countryregion: "Belize",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 17.1899,
      lng: -88.4976,
    },
    countrycode: {
      iso2: "BZ",
      iso3: "BLZ",
    },
    confirmed: 1480,
    deaths: 19,
    recovered: 492,
  },
  {
    countryregion: "Benin",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 9.3077,
      lng: 2.3158,
    },
    countrycode: {
      iso2: "BJ",
      iso3: "BEN",
    },
    confirmed: 2267,
    deaths: 40,
    recovered: 1942,
  },
  {
    countryregion: "Bhutan",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 27.5142,
      lng: 90.4336,
    },
    countrycode: {
      iso2: "BT",
      iso3: "BTN",
    },
    confirmed: 245,
    deaths: 0,
    recovered: 161,
  },
  {
    countryregion: "Bolivia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -16.2902,
      lng: -63.5887,
    },
    countrycode: {
      iso2: "BO",
      iso3: "BOL",
    },
    confirmed: 126791,
    deaths: 7344,
    recovered: 84286,
  },
  {
    countryregion: "Bosnia and Herzegovina",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 43.9159,
      lng: 17.6791,
    },
    countrycode: {
      iso2: "BA",
      iso3: "BIH",
    },
    confirmed: 23465,
    deaths: 696,
    recovered: 16038,
  },
  {
    countryregion: "Botswana",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -22.3285,
      lng: 24.6849,
    },
    countrycode: {
      iso2: "BW",
      iso3: "BWA",
    },
    confirmed: 2252,
    deaths: 10,
    recovered: 546,
  },
  {
    countryregion: "Brazil",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -14.235,
      lng: -51.9253,
    },
    countrycode: {
      iso2: "BR",
      iso3: "BRA",
    },
    confirmed: 4330455,
    deaths: 131625,
    recovered: 3723206,
  },
  {
    countryregion: "Brunei",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 4.5353,
      lng: 114.7277,
    },
    countrycode: {
      iso2: "BN",
      iso3: "BRN",
    },
    confirmed: 145,
    deaths: 3,
    recovered: 139,
  },
  {
    countryregion: "Bulgaria",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 42.7339,
      lng: 25.4858,
    },
    countrycode: {
      iso2: "BG",
      iso3: "BGR",
    },
    confirmed: 17918,
    deaths: 720,
    recovered: 12767,
  },
  {
    countryregion: "Burkina Faso",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 12.2383,
      lng: -1.5616,
    },
    countrycode: {
      iso2: "BF",
      iso3: "BFA",
    },
    confirmed: 1707,
    deaths: 56,
    recovered: 1135,
  },
  {
    countryregion: "Burma",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 21.9162,
      lng: 95.956,
    },
    confirmed: 3015,
    deaths: 24,
    recovered: 699,
  },
  {
    countryregion: "Burundi",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -3.3731,
      lng: 29.9189,
    },
    countrycode: {
      iso2: "BI",
      iso3: "BDI",
    },
    confirmed: 472,
    deaths: 1,
    recovered: 374,
  },
  {
    countryregion: "Cabo Verde",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 16.5388,
      lng: -23.0418,
    },
    confirmed: 4813,
    deaths: 44,
    recovered: 4119,
  },
  {
    countryregion: "Cambodia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 11.55,
      lng: 104.9167,
    },
    countrycode: {
      iso2: "KH",
      iso3: "KHM",
    },
    confirmed: 275,
    deaths: 0,
    recovered: 274,
  },
  {
    countryregion: "Cameroon",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 3.8480000000000003,
      lng: 11.5021,
    },
    countrycode: {
      iso2: "CM",
      iso3: "CMR",
    },
    confirmed: 20167,
    deaths: 415,
    recovered: 18837,
  },
  {
    countryregion: "Canada",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 61.1333,
      lng: -100.8833,
    },
    countrycode: {
      iso2: "CA",
      iso3: "CAN",
    },
    confirmed: 138640,
    deaths: 9219,
    recovered: 122266,
  },
  {
    countryregion: "Diamond Princess",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 0,
      lng: 0,
    },
    confirmed: 712,
    deaths: 13,
    recovered: 651,
  },
  {
    countryregion: "Central African Republic",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 6.6111,
      lng: 20.9394,
    },
    countrycode: {
      iso2: "CF",
      iso3: "CAF",
    },
    confirmed: 4749,
    deaths: 62,
    recovered: 1825,
  },
  {
    countryregion: "Chad",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 15.4542,
      lng: 18.7322,
    },
    countrycode: {
      iso2: "TD",
      iso3: "TCD",
    },
    confirmed: 1084,
    deaths: 80,
    recovered: 938,
  },
  {
    countryregion: "Chile",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -35.6751,
      lng: -71.543,
    },
    countrycode: {
      iso2: "CL",
      iso3: "CHL",
    },
    confirmed: 434748,
    deaths: 11949,
    recovered: 406326,
  },
  {
    countryregion: "China",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 29.5333,
      lng: 94.4167,
    },
    countrycode: {
      iso2: "CN",
      iso3: "CHN",
    },
    confirmed: 90197,
    deaths: 4734,
    recovered: 85086,
  },
  {
    countryregion: "Colombia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 4.5709,
      lng: -74.2973,
    },
    countrycode: {
      iso2: "CO",
      iso3: "COL",
    },
    confirmed: 716319,
    deaths: 22924,
    recovered: 599385,
  },
  {
    countryregion: "Comoros",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -11.6455,
      lng: 43.3333,
    },
    countrycode: {
      iso2: "KM",
      iso3: "COM",
    },
    confirmed: 456,
    deaths: 7,
    recovered: 415,
  },
  {
    countryregion: "Congo (Brazzaville)",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -0.228,
      lng: 15.8277,
    },
    confirmed: 4928,
    deaths: 88,
    recovered: 3887,
  },
  {
    countryregion: "Congo (Kinshasa)",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -4.0383,
      lng: 21.7587,
    },
    confirmed: 10390,
    deaths: 264,
    recovered: 9756,
  },
  {
    countryregion: "Costa Rica",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 9.7489,
      lng: -83.7534,
    },
    countrycode: {
      iso2: "CR",
      iso3: "CRI",
    },
    confirmed: 55454,
    deaths: 590,
    recovered: 20928,
  },
  {
    countryregion: "Cote d'Ivoire",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 7.54,
      lng: -5.5471,
    },
    countrycode: {
      iso2: "CI",
      iso3: "CIV",
    },
    confirmed: 19013,
    deaths: 120,
    recovered: 18112,
  },
  {
    countryregion: "Croatia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 45.1,
      lng: 15.2,
    },
    countrycode: {
      iso2: "HR",
      iso3: "HRV",
    },
    confirmed: 13533,
    deaths: 224,
    recovered: 10899,
  },
  {
    countryregion: "Cuba",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 21.521757,
      lng: -77.78116700000001,
    },
    countrycode: {
      iso2: "CU",
      iso3: "CUB",
    },
    confirmed: 4684,
    deaths: 108,
    recovered: 3930,
  },
  {
    countryregion: "Cyprus",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 35.1264,
      lng: 33.4299,
    },
    countrycode: {
      iso2: "CY",
      iso3: "CYP",
    },
    confirmed: 1526,
    deaths: 22,
    recovered: 1281,
  },
  {
    countryregion: "Czechia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 49.8175,
      lng: 15.472999999999999,
    },
    confirmed: 36188,
    deaths: 456,
    recovered: 21294,
  },
  {
    countryregion: "Denmark",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 57.4337,
      lng: 10.5333,
    },
    countrycode: {
      iso2: "DK",
      iso3: "DNK",
    },
    confirmed: 20327,
    deaths: 631,
    recovered: 16757,
  },
  {
    countryregion: "Djibouti",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 11.8251,
      lng: 42.5903,
    },
    countrycode: {
      iso2: "DJ",
      iso3: "DJI",
    },
    confirmed: 5395,
    deaths: 61,
    recovered: 5330,
  },
  {
    countryregion: "Dominica",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 15.415,
      lng: -61.371,
    },
    countrycode: {
      iso2: "DM",
      iso3: "DMA",
    },
    confirmed: 24,
    deaths: 0,
    recovered: 18,
  },
  {
    countryregion: "Dominican Republic",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 18.7357,
      lng: -70.1627,
    },
    countrycode: {
      iso2: "DO",
      iso3: "DOM",
    },
    confirmed: 103660,
    deaths: 1968,
    recovered: 77182,
  },
  {
    countryregion: "Ecuador",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -1.8312,
      lng: -78.1834,
    },
    countrycode: {
      iso2: "EC",
      iso3: "ECU",
    },
    confirmed: 118594,
    deaths: 10903,
    recovered: 97063,
  },
  {
    countryregion: "Egypt",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 26.820553000000004,
      lng: 30.802497999999996,
    },
    countrycode: {
      iso2: "EG",
      iso3: "EGY",
    },
    confirmed: 101009,
    deaths: 5648,
    recovered: 84161,
  },
  {
    countryregion: "El Salvador",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 13.7942,
      lng: -88.8965,
    },
    countrycode: {
      iso2: "SV",
      iso3: "SLV",
    },
    confirmed: 26928,
    deaths: 785,
    recovered: 18397,
  },
  {
    countryregion: "Equatorial Guinea",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 1.6508,
      lng: 10.2679,
    },
    countrycode: {
      iso2: "GQ",
      iso3: "GNQ",
    },
    confirmed: 4996,
    deaths: 83,
    recovered: 4490,
  },
  {
    countryregion: "Eritrea",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 15.1794,
      lng: 39.7823,
    },
    countrycode: {
      iso2: "ER",
      iso3: "ERI",
    },
    confirmed: 361,
    deaths: 0,
    recovered: 304,
  },
  {
    countryregion: "Estonia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 58.5953,
      lng: 25.0136,
    },
    countrycode: {
      iso2: "EE",
      iso3: "EST",
    },
    confirmed: 2676,
    deaths: 64,
    recovered: 2256,
  },
  {
    countryregion: "Eswatini",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -26.5225,
      lng: 31.4659,
    },
    confirmed: 5075,
    deaths: 98,
    recovered: 4229,
  },
  {
    countryregion: "Ethiopia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 9.145,
      lng: 40.4897,
    },
    countrycode: {
      iso2: "ET",
      iso3: "ETH",
    },
    confirmed: 64301,
    deaths: 1013,
    recovered: 24983,
  },
  {
    countryregion: "Fiji",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -17.7134,
      lng: 178.065,
    },
    countrycode: {
      iso2: "FJ",
      iso3: "FJI",
    },
    confirmed: 32,
    deaths: 2,
    recovered: 24,
  },
  {
    countryregion: "Finland",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 61.92411,
      lng: 25.748151,
    },
    countrycode: {
      iso2: "FI",
      iso3: "FIN",
    },
    confirmed: 8580,
    deaths: 337,
    recovered: 7500,
  },
  {
    countryregion: "France",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 47.8004,
      lng: 3.5666,
    },
    countrycode: {
      iso2: "FR",
      iso3: "FRA",
    },
    confirmed: 402893,
    deaths: 30903,
    recovered: 90445,
  },
  {
    countryregion: "Gabon",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -0.8037,
      lng: 11.6094,
    },
    countrycode: {
      iso2: "GA",
      iso3: "GAB",
    },
    confirmed: 8643,
    deaths: 53,
    recovered: 7706,
  },
  {
    countryregion: "Gambia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 13.4432,
      lng: -15.3101,
    },
    confirmed: 3405,
    deaths: 103,
    recovered: 1723,
  },
  {
    countryregion: "Georgia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 42.3154,
      lng: 43.3569,
    },
    countrycode: {
      iso2: "GE",
      iso3: "GEO",
    },
    confirmed: 2227,
    deaths: 19,
    recovered: 1369,
  },
  {
    countryregion: "Germany",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 51.165690999999995,
      lng: 10.451526,
    },
    countrycode: {
      iso2: "DE",
      iso3: "DEU",
    },
    confirmed: 261737,
    deaths: 9354,
    recovered: 232541,
  },
  {
    countryregion: "Ghana",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 7.9465,
      lng: -1.0232,
    },
    countrycode: {
      iso2: "GH",
      iso3: "GHA",
    },
    confirmed: 45434,
    deaths: 286,
    recovered: 44342,
  },
  {
    countryregion: "Greece",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 39.0742,
      lng: 21.8243,
    },
    countrycode: {
      iso2: "GR",
      iso3: "GRC",
    },
    confirmed: 13240,
    deaths: 305,
    recovered: 1347,
  },
  {
    countryregion: "Grenada",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 12.1165,
      lng: -61.678999999999995,
    },
    countrycode: {
      iso2: "GD",
      iso3: "GRD",
    },
    confirmed: 24,
    deaths: 0,
    recovered: 24,
  },
  {
    countryregion: "Guatemala",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 15.7835,
      lng: -90.2308,
    },
    countrycode: {
      iso2: "GT",
      iso3: "GTM",
    },
    confirmed: 81909,
    deaths: 2957,
    recovered: 70927,
  },
  {
    countryregion: "Guinea",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 9.9456,
      lng: -9.6966,
    },
    countrycode: {
      iso2: "GN",
      iso3: "GIN",
    },
    confirmed: 10045,
    deaths: 63,
    recovered: 9292,
  },
  {
    countryregion: "Guinea-Bissau",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 11.8037,
      lng: -15.1804,
    },
    countrycode: {
      iso2: "GW",
      iso3: "GNB",
    },
    confirmed: 2275,
    deaths: 39,
    recovered: 1127,
  },
  {
    countryregion: "Guyana",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 4.860416000000001,
      lng: -58.93018000000001,
    },
    countrycode: {
      iso2: "GY",
      iso3: "GUY",
    },
    confirmed: 1853,
    deaths: 56,
    recovered: 1215,
  },
  {
    countryregion: "Haiti",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 18.9712,
      lng: -72.2852,
    },
    countrycode: {
      iso2: "HT",
      iso3: "HTI",
    },
    confirmed: 8493,
    deaths: 219,
    recovered: 6120,
  },
  {
    countryregion: "Holy See",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 41.9029,
      lng: 12.4534,
    },
    confirmed: 12,
    deaths: 0,
    recovered: 12,
  },
  {
    countryregion: "Honduras",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 15.2,
      lng: -86.2419,
    },
    countrycode: {
      iso2: "HN",
      iso3: "HND",
    },
    confirmed: 67789,
    deaths: 2079,
    recovered: 17873,
  },
  {
    countryregion: "Hungary",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 47.1625,
      lng: 19.5033,
    },
    countrycode: {
      iso2: "HU",
      iso3: "HUN",
    },
    confirmed: 12309,
    deaths: 637,
    recovered: 4069,
  },
  {
    countryregion: "Iceland",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 64.9631,
      lng: -19.0208,
    },
    countrycode: {
      iso2: "IS",
      iso3: "ISL",
    },
    confirmed: 2165,
    deaths: 10,
    recovered: 2092,
  },
  {
    countryregion: "India",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 20.593684,
      lng: 78.96288,
    },
    countrycode: {
      iso2: "IN",
      iso3: "IND",
    },
    confirmed: 4846427,
    deaths: 79722,
    recovered: 3780107,
  },
  {
    countryregion: "Indonesia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -0.7893,
      lng: 113.9213,
    },
    countrycode: {
      iso2: "ID",
      iso3: "IDN",
    },
    confirmed: 218382,
    deaths: 8723,
    recovered: 155010,
  },
  {
    countryregion: "Iran",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 32.427908,
      lng: 53.68804599999999,
    },
    countrycode: {
      iso2: "IR",
      iso3: "IRN",
    },
    confirmed: 402029,
    deaths: 23157,
    recovered: 346242,
  },
  {
    countryregion: "Iraq",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 33.223191,
      lng: 43.679291,
    },
    countrycode: {
      iso2: "IQ",
      iso3: "IRQ",
    },
    confirmed: 290309,
    deaths: 8014,
    recovered: 224705,
  },
  {
    countryregion: "Ireland",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 53.1424,
      lng: -7.6921,
    },
    countrycode: {
      iso2: "IE",
      iso3: "IRL",
    },
    confirmed: 30985,
    deaths: 1784,
    recovered: 23364,
  },
  {
    countryregion: "Israel",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 31.046051000000002,
      lng: 34.851612,
    },
    countrycode: {
      iso2: "IL",
      iso3: "ISR",
    },
    confirmed: 155604,
    deaths: 1119,
    recovered: 114998,
  },
  {
    countryregion: "Italy",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 41.87194,
      lng: 12.56738,
    },
    countrycode: {
      iso2: "IT",
      iso3: "ITA",
    },
    confirmed: 287753,
    deaths: 35610,
    recovered: 213634,
  },
  {
    countryregion: "Jamaica",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 18.1096,
      lng: -77.2975,
    },
    countrycode: {
      iso2: "JM",
      iso3: "JAM",
    },
    confirmed: 3771,
    deaths: 42,
    recovered: 1149,
  },
  {
    countryregion: "Japan",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 36.204824,
      lng: 138.252924,
    },
    countrycode: {
      iso2: "JP",
      iso3: "JPN",
    },
    confirmed: 75646,
    deaths: 1448,
    recovered: 66524,
  },
  {
    countryregion: "Jordan",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 31.24,
      lng: 36.51,
    },
    countrycode: {
      iso2: "JO",
      iso3: "JOR",
    },
    confirmed: 3314,
    deaths: 24,
    recovered: 2206,
  },
  {
    countryregion: "Kazakhstan",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 48.0196,
      lng: 66.9237,
    },
    countrycode: {
      iso2: "KZ",
      iso3: "KAZ",
    },
    confirmed: 106855,
    deaths: 1634,
    recovered: 100627,
  },
  {
    countryregion: "Kenya",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -0.0236,
      lng: 37.9062,
    },
    countrycode: {
      iso2: "KE",
      iso3: "KEN",
    },
    confirmed: 36157,
    deaths: 622,
    recovered: 23067,
  },
  {
    countryregion: "Korea, South",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 35.907757000000004,
      lng: 127.766922,
    },
    countrycode: {
      iso2: "KR",
      iso3: "KOR",
    },
    confirmed: 22285,
    deaths: 363,
    recovered: 18489,
  },
  {
    countryregion: "Kosovo",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 42.602636,
      lng: 20.902977,
    },
    confirmed: 12683,
    deaths: 488,
    recovered: 8788,
  },
  {
    countryregion: "Kuwait",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 29.311659999999996,
      lng: 47.481766,
    },
    countrycode: {
      iso2: "KW",
      iso3: "KWT",
    },
    confirmed: 94764,
    deaths: 560,
    recovered: 84995,
  },
  {
    countryregion: "Kyrgyzstan",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 41.20438,
      lng: 74.766098,
    },
    countrycode: {
      iso2: "KG",
      iso3: "KGZ",
    },
    confirmed: 44881,
    deaths: 1063,
    recovered: 40922,
  },
  {
    countryregion: "Laos",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 19.856270000000002,
      lng: 102.495496,
    },
    countrycode: {
      iso2: "LA",
      iso3: "LAO",
    },
    confirmed: 23,
    deaths: 0,
    recovered: 21,
  },
  {
    countryregion: "Latvia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 56.8796,
      lng: 24.6032,
    },
    countrycode: {
      iso2: "LV",
      iso3: "LVA",
    },
    confirmed: 1474,
    deaths: 35,
    recovered: 1248,
  },
  {
    countryregion: "Lebanon",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 33.8547,
      lng: 35.8623,
    },
    countrycode: {
      iso2: "LB",
      iso3: "LBN",
    },
    confirmed: 24310,
    deaths: 241,
    recovered: 8334,
  },
  {
    countryregion: "Lesotho",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -29.61,
      lng: 28.2336,
    },
    countrycode: {
      iso2: "LS",
      iso3: "LSO",
    },
    confirmed: 1245,
    deaths: 33,
    recovered: 528,
  },
  {
    countryregion: "Liberia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 6.4280550000000005,
      lng: -9.429499,
    },
    countrycode: {
      iso2: "LR",
      iso3: "LBR",
    },
    confirmed: 1319,
    deaths: 82,
    recovered: 1210,
  },
  {
    countryregion: "Libya",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 26.3351,
      lng: 17.228331,
    },
    countrycode: {
      iso2: "LY",
      iso3: "LBY",
    },
    confirmed: 22781,
    deaths: 362,
    recovered: 12183,
  },
  {
    countryregion: "Liechtenstein",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 47.14,
      lng: 9.55,
    },
    countrycode: {
      iso2: "LI",
      iso3: "LIE",
    },
    confirmed: 111,
    deaths: 1,
    recovered: 105,
  },
  {
    countryregion: "Lithuania",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 55.1694,
      lng: 23.8813,
    },
    countrycode: {
      iso2: "LT",
      iso3: "LTU",
    },
    confirmed: 3335,
    deaths: 87,
    recovered: 2070,
  },
  {
    countryregion: "Luxembourg",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 49.8153,
      lng: 6.1296,
    },
    countrycode: {
      iso2: "LU",
      iso3: "LUX",
    },
    confirmed: 7159,
    deaths: 124,
    recovered: 6421,
  },
  {
    countryregion: "MS Zaandam",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 0,
      lng: 0,
    },
    confirmed: 9,
    deaths: 2,
    recovered: 0,
  },
  {
    countryregion: "Madagascar",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -18.766947000000002,
      lng: 46.869107,
    },
    countrycode: {
      iso2: "MG",
      iso3: "MDG",
    },
    confirmed: 15757,
    deaths: 211,
    recovered: 14368,
  },
  {
    countryregion: "Malawi",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -13.2543,
      lng: 34.3015,
    },
    countrycode: {
      iso2: "MW",
      iso3: "MWI",
    },
    confirmed: 5690,
    deaths: 177,
    recovered: 3731,
  },
  {
    countryregion: "Malaysia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 4.210483999999999,
      lng: 101.97576600000001,
    },
    countrycode: {
      iso2: "MY",
      iso3: "MYS",
    },
    confirmed: 9915,
    deaths: 128,
    recovered: 9196,
  },
  {
    countryregion: "Maldives",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 3.2028,
      lng: 73.2207,
    },
    countrycode: {
      iso2: "MV",
      iso3: "MDV",
    },
    confirmed: 9173,
    deaths: 32,
    recovered: 7326,
  },
  {
    countryregion: "Mali",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 17.570692,
      lng: -3.9961660000000006,
    },
    countrycode: {
      iso2: "ML",
      iso3: "MLI",
    },
    confirmed: 2924,
    deaths: 128,
    recovered: 2285,
  },
  {
    countryregion: "Malta",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 35.9375,
      lng: 14.3754,
    },
    countrycode: {
      iso2: "MT",
      iso3: "MLT",
    },
    confirmed: 2352,
    deaths: 15,
    recovered: 1872,
  },
  {
    countryregion: "Mauritania",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 21.0079,
      lng: -10.9408,
    },
    countrycode: {
      iso2: "MR",
      iso3: "MRT",
    },
    confirmed: 7276,
    deaths: 161,
    recovered: 6825,
  },
  {
    countryregion: "Mauritius",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -20.348404000000002,
      lng: 57.552152,
    },
    countrycode: {
      iso2: "MU",
      iso3: "MUS",
    },
    confirmed: 361,
    deaths: 10,
    recovered: 335,
  },
  {
    countryregion: "Mexico",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 23.6345,
      lng: -102.5528,
    },
    countrycode: {
      iso2: "MX",
      iso3: "MEX",
    },
    confirmed: 668381,
    deaths: 70821,
    recovered: 557381,
  },
  {
    countryregion: "Moldova",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 47.4116,
      lng: 28.3699,
    },
    countrycode: {
      iso2: "MD",
      iso3: "MDA",
    },
    confirmed: 42978,
    deaths: 1123,
    recovered: 30437,
  },
  {
    countryregion: "Monaco",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 43.7333,
      lng: 7.4167,
    },
    countrycode: {
      iso2: "MC",
      iso3: "MCO",
    },
    confirmed: 171,
    deaths: 1,
    recovered: 128,
  },
  {
    countryregion: "Mongolia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 46.8625,
      lng: 103.8467,
    },
    countrycode: {
      iso2: "MN",
      iso3: "MNG",
    },
    confirmed: 311,
    deaths: 0,
    recovered: 300,
  },
  {
    countryregion: "Montenegro",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 42.708678000000006,
      lng: 19.37439,
    },
    countrycode: {
      iso2: "ME",
      iso3: "MNE",
    },
    confirmed: 6712,
    deaths: 120,
    recovered: 4507,
  },
  {
    countryregion: "Morocco",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 31.7917,
      lng: -7.0926,
    },
    countrycode: {
      iso2: "MA",
      iso3: "MAR",
    },
    confirmed: 86686,
    deaths: 1578,
    recovered: 67528,
  },
  {
    countryregion: "Mozambique",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -18.665695,
      lng: 35.529562,
    },
    countrycode: {
      iso2: "MZ",
      iso3: "MOZ",
    },
    confirmed: 5269,
    deaths: 35,
    recovered: 2960,
  },
  {
    countryregion: "Namibia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -22.9576,
      lng: 18.4904,
    },
    countrycode: {
      iso2: "NA",
      iso3: "NAM",
    },
    confirmed: 9719,
    deaths: 101,
    recovered: 6543,
  },
  {
    countryregion: "Nepal",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 28.1667,
      lng: 84.25,
    },
    countrycode: {
      iso2: "NP",
      iso3: "NPL",
    },
    confirmed: 54159,
    deaths: 345,
    recovered: 38697,
  },
  {
    countryregion: "Netherlands",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 52.5176,
      lng: 5.474,
    },
    countrycode: {
      iso2: "NL",
      iso3: "NLD",
    },
    confirmed: 85876,
    deaths: 6292,
    recovered: 2036,
  },
  {
    countryregion: "New Zealand",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -40.9006,
      lng: 174.886,
    },
    countrycode: {
      iso2: "NZ",
      iso3: "NZL",
    },
    confirmed: 1798,
    deaths: 24,
    recovered: 1678,
  },
  {
    countryregion: "Nicaragua",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 12.865416,
      lng: -85.207229,
    },
    countrycode: {
      iso2: "NI",
      iso3: "NIC",
    },
    confirmed: 4818,
    deaths: 144,
    recovered: 2913,
  },
  {
    countryregion: "Niger",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 17.607789,
      lng: 8.081666,
    },
    countrycode: {
      iso2: "NE",
      iso3: "NER",
    },
    confirmed: 1180,
    deaths: 69,
    recovered: 1104,
  },
  {
    countryregion: "Nigeria",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 9.082,
      lng: 8.6753,
    },
    countrycode: {
      iso2: "NG",
      iso3: "NGA",
    },
    confirmed: 56256,
    deaths: 1082,
    recovered: 44152,
  },
  {
    countryregion: "North Macedonia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 41.6086,
      lng: 21.7453,
    },
    countrycode: {
      iso2: "MK",
      iso3: "MKD",
    },
    confirmed: 15791,
    deaths: 648,
    recovered: 13184,
  },
  {
    countryregion: "Norway",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 60.472,
      lng: 8.4689,
    },
    countrycode: {
      iso2: "NO",
      iso3: "NOR",
    },
    confirmed: 12154,
    deaths: 265,
    recovered: 10371,
  },
  {
    countryregion: "Oman",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 21.512583,
      lng: 55.923255000000005,
    },
    countrycode: {
      iso2: "OM",
      iso3: "OMN",
    },
    confirmed: 89746,
    deaths: 780,
    recovered: 83771,
  },
  {
    countryregion: "Pakistan",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 30.3753,
      lng: 69.3451,
    },
    countrycode: {
      iso2: "PK",
      iso3: "PAK",
    },
    confirmed: 302020,
    deaths: 6383,
    recovered: 289806,
  },
  {
    countryregion: "Panama",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 8.538,
      lng: -80.7821,
    },
    countrycode: {
      iso2: "PA",
      iso3: "PAN",
    },
    confirmed: 101745,
    deaths: 2166,
    recovered: 74107,
  },
  {
    countryregion: "Papua New Guinea",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -6.314993,
      lng: 143.95555,
    },
    countrycode: {
      iso2: "PG",
      iso3: "PNG",
    },
    confirmed: 510,
    deaths: 6,
    recovered: 232,
  },
  {
    countryregion: "Paraguay",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -23.4425,
      lng: -58.4438,
    },
    countrycode: {
      iso2: "PY",
      iso3: "PRY",
    },
    confirmed: 27817,
    deaths: 525,
    recovered: 14288,
  },
  {
    countryregion: "Peru",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -9.19,
      lng: -75.0152,
    },
    countrycode: {
      iso2: "PE",
      iso3: "PER",
    },
    confirmed: 722832,
    deaths: 30526,
    recovered: 559321,
  },
  {
    countryregion: "Philippines",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 12.879721,
      lng: 121.77401699999999,
    },
    countrycode: {
      iso2: "PH",
      iso3: "PHL",
    },
    confirmed: 261216,
    deaths: 4371,
    recovered: 207568,
  },
  {
    countryregion: "Poland",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 51.9194,
      lng: 19.1451,
    },
    countrycode: {
      iso2: "PL",
      iso3: "POL",
    },
    confirmed: 74152,
    deaths: 2188,
    recovered: 60659,
  },
  {
    countryregion: "Portugal",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 39.3999,
      lng: -8.2245,
    },
    countrycode: {
      iso2: "PT",
      iso3: "PRT",
    },
    confirmed: 63983,
    deaths: 1867,
    recovered: 44069,
  },
  {
    countryregion: "Qatar",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 25.3548,
      lng: 51.1839,
    },
    countrycode: {
      iso2: "QA",
      iso3: "QAT",
    },
    confirmed: 121740,
    deaths: 205,
    recovered: 118682,
  },
  {
    countryregion: "Romania",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 45.9432,
      lng: 24.9668,
    },
    countrycode: {
      iso2: "RO",
      iso3: "ROU",
    },
    confirmed: 103495,
    deaths: 4163,
    recovered: 43025,
  },
  {
    countryregion: "Russia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 61.52401,
      lng: 105.31875600000001,
    },
    countrycode: {
      iso2: "RU",
      iso3: "RUS",
    },
    confirmed: 1059024,
    deaths: 18517,
    recovered: 873684,
  },
  {
    countryregion: "Rwanda",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -1.9403,
      lng: 29.8739,
    },
    countrycode: {
      iso2: "RW",
      iso3: "RWA",
    },
    confirmed: 4591,
    deaths: 22,
    recovered: 2556,
  },
  {
    countryregion: "Saint Kitts and Nevis",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 17.357822,
      lng: -62.782998,
    },
    countrycode: {
      iso2: "KN",
      iso3: "KNA",
    },
    confirmed: 17,
    deaths: 0,
    recovered: 17,
  },
  {
    countryregion: "Saint Lucia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 13.9094,
      lng: -60.9789,
    },
    countrycode: {
      iso2: "LC",
      iso3: "LCA",
    },
    confirmed: 27,
    deaths: 0,
    recovered: 26,
  },
  {
    countryregion: "Saint Vincent and the Grenadines",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 12.9843,
      lng: -61.2872,
    },
    countrycode: {
      iso2: "VC",
      iso3: "VCT",
    },
    confirmed: 64,
    deaths: 0,
    recovered: 61,
  },
  {
    countryregion: "San Marino",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 43.9424,
      lng: 12.4578,
    },
    countrycode: {
      iso2: "SM",
      iso3: "SMR",
    },
    confirmed: 722,
    deaths: 42,
    recovered: 662,
  },
  {
    countryregion: "Sao Tome and Principe",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 0.1864,
      lng: 6.6131,
    },
    countrycode: {
      iso2: "ST",
      iso3: "STP",
    },
    confirmed: 906,
    deaths: 15,
    recovered: 870,
  },
  {
    countryregion: "Saudi Arabia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 23.885942,
      lng: 45.079162,
    },
    countrycode: {
      iso2: "SA",
      iso3: "SAU",
    },
    confirmed: 325651,
    deaths: 4268,
    recovered: 302870,
  },
  {
    countryregion: "Senegal",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 14.4974,
      lng: -14.4524,
    },
    countrycode: {
      iso2: "SN",
      iso3: "SEN",
    },
    confirmed: 14280,
    deaths: 297,
    recovered: 10520,
  },
  {
    countryregion: "Serbia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 44.0165,
      lng: 21.0059,
    },
    countrycode: {
      iso2: "RS",
      iso3: "SRB",
    },
    confirmed: 32408,
    deaths: 733,
    recovered: 0,
  },
  {
    countryregion: "Seychelles",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -4.6796,
      lng: 55.492,
    },
    countrycode: {
      iso2: "SC",
      iso3: "SYC",
    },
    confirmed: 139,
    deaths: 0,
    recovered: 136,
  },
  {
    countryregion: "Sierra Leone",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 8.460555000000001,
      lng: -11.779889,
    },
    countrycode: {
      iso2: "SL",
      iso3: "SLE",
    },
    confirmed: 2109,
    deaths: 72,
    recovered: 1636,
  },
  {
    countryregion: "Singapore",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 1.2833,
      lng: 103.8333,
    },
    countrycode: {
      iso2: "SG",
      iso3: "SGP",
    },
    confirmed: 57406,
    deaths: 27,
    recovered: 56764,
  },
  {
    countryregion: "Slovakia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 48.669,
      lng: 19.699,
    },
    countrycode: {
      iso2: "SK",
      iso3: "SVK",
    },
    confirmed: 5532,
    deaths: 38,
    recovered: 3124,
  },
  {
    countryregion: "Slovenia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 46.1512,
      lng: 14.9955,
    },
    countrycode: {
      iso2: "SI",
      iso3: "SVN",
    },
    confirmed: 3702,
    deaths: 135,
    recovered: 2730,
  },
  {
    countryregion: "Somalia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 5.152149,
      lng: 46.199616,
    },
    countrycode: {
      iso2: "SO",
      iso3: "SOM",
    },
    confirmed: 3389,
    deaths: 98,
    recovered: 2803,
  },
  {
    countryregion: "South Africa",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -30.5595,
      lng: 22.9375,
    },
    countrycode: {
      iso2: "ZA",
      iso3: "ZAF",
    },
    confirmed: 649793,
    deaths: 15447,
    recovered: 577906,
  },
  {
    countryregion: "South Sudan",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 6.877000000000001,
      lng: 31.307,
    },
    countrycode: {
      iso2: "SS",
      iso3: "SSD",
    },
    confirmed: 2578,
    deaths: 49,
    recovered: 1290,
  },
  {
    countryregion: "Spain",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 40.463667,
      lng: -3.7492199999999998,
    },
    countrycode: {
      iso2: "ES",
      iso3: "ESP",
    },
    confirmed: 566326,
    deaths: 29747,
    recovered: 150376,
  },
  {
    countryregion: "Sri Lanka",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 7.873054,
      lng: 80.77179699999999,
    },
    countrycode: {
      iso2: "LK",
      iso3: "LKA",
    },
    confirmed: 3234,
    deaths: 12,
    recovered: 2996,
  },
  {
    countryregion: "Sudan",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 12.8628,
      lng: 30.2176,
    },
    countrycode: {
      iso2: "SD",
      iso3: "SDN",
    },
    confirmed: 13516,
    deaths: 835,
    recovered: 6757,
  },
  {
    countryregion: "Suriname",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 3.9193,
      lng: -56.0278,
    },
    countrycode: {
      iso2: "SR",
      iso3: "SUR",
    },
    confirmed: 4582,
    deaths: 93,
    recovered: 3850,
  },
  {
    countryregion: "Sweden",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 60.128161,
      lng: 18.643501,
    },
    countrycode: {
      iso2: "SE",
      iso3: "SWE",
    },
    confirmed: 86505,
    deaths: 5846,
    recovered: 0,
  },
  {
    countryregion: "Switzerland",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 46.8182,
      lng: 8.2275,
    },
    countrycode: {
      iso2: "CH",
      iso3: "CHE",
    },
    confirmed: 47179,
    deaths: 2021,
    recovered: 38900,
  },
  {
    countryregion: "Syria",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 34.802075,
      lng: 38.996815000000005,
    },
    countrycode: {
      iso2: "SY",
      iso3: "SYR",
    },
    confirmed: 3540,
    deaths: 155,
    recovered: 842,
  },
  {
    countryregion: "Taiwan*",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 23.7,
      lng: 121,
    },
    confirmed: 498,
    deaths: 7,
    recovered: 475,
  },
  {
    countryregion: "Tajikistan",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 38.861,
      lng: 71.2761,
    },
    countrycode: {
      iso2: "TJ",
      iso3: "TJK",
    },
    confirmed: 9049,
    deaths: 72,
    recovered: 7816,
  },
  {
    countryregion: "Tanzania",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -6.369028,
      lng: 34.888822,
    },
    countrycode: {
      iso2: "TZ",
      iso3: "TZA",
    },
    confirmed: 509,
    deaths: 21,
    recovered: 183,
  },
  {
    countryregion: "Thailand",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 15.870032,
      lng: 100.992541,
    },
    countrycode: {
      iso2: "TH",
      iso3: "THA",
    },
    confirmed: 3475,
    deaths: 58,
    recovered: 3312,
  },
  {
    countryregion: "Timor-Leste",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -8.874217,
      lng: 125.727539,
    },
    countrycode: {
      iso2: "TL",
      iso3: "TLS",
    },
    confirmed: 27,
    deaths: 0,
    recovered: 25,
  },
  {
    countryregion: "Togo",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 8.6195,
      lng: 0.8248,
    },
    countrycode: {
      iso2: "TG",
      iso3: "TGO",
    },
    confirmed: 1572,
    deaths: 37,
    recovered: 1190,
  },
  {
    countryregion: "Trinidad and Tobago",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 10.6918,
      lng: -61.2225,
    },
    countrycode: {
      iso2: "TT",
      iso3: "TTO",
    },
    confirmed: 3042,
    deaths: 53,
    recovered: 772,
  },
  {
    countryregion: "Tunisia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 33.886917,
      lng: 9.537499,
    },
    countrycode: {
      iso2: "TN",
      iso3: "TUN",
    },
    confirmed: 6635,
    deaths: 107,
    recovered: 1991,
  },
  {
    countryregion: "Turkey",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 38.9637,
      lng: 35.2433,
    },
    countrycode: {
      iso2: "TR",
      iso3: "TUR",
    },
    confirmed: 291162,
    deaths: 7056,
    recovered: 258833,
  },
  {
    countryregion: "US",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 40,
      lng: -100,
    },
    countrycode: {
      iso2: "US",
      iso3: "USA",
    },
    confirmed: 6519573,
    deaths: 194071,
    recovered: 2451406,
  },
  {
    countryregion: "Uganda",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 1.373333,
      lng: 32.290275,
    },
    countrycode: {
      iso2: "UG",
      iso3: "UGA",
    },
    confirmed: 4799,
    deaths: 55,
    recovered: 2256,
  },
  {
    countryregion: "Ukraine",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 48.3794,
      lng: 31.1656,
    },
    countrycode: {
      iso2: "UA",
      iso3: "UKR",
    },
    confirmed: 158122,
    deaths: 3239,
    recovered: 71434,
  },
  {
    countryregion: "United Arab Emirates",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 23.424076,
      lng: 53.847818000000004,
    },
    countrycode: {
      iso2: "AE",
      iso3: "ARE",
    },
    confirmed: 79489,
    deaths: 399,
    recovered: 69451,
  },
  {
    countryregion: "United Kingdom",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 58.4333,
      lng: -3.0834,
    },
    countrycode: {
      iso2: "GB",
      iso3: "GBR",
    },
    confirmed: 370930,
    deaths: 41717,
    recovered: 2146,
  },
  {
    countryregion: "Uruguay",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -32.5228,
      lng: -55.7658,
    },
    countrycode: {
      iso2: "UY",
      iso3: "URY",
    },
    confirmed: 1808,
    deaths: 45,
    recovered: 1513,
  },
  {
    countryregion: "Uzbekistan",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 41.377491,
      lng: 64.585262,
    },
    countrycode: {
      iso2: "UZ",
      iso3: "UZB",
    },
    confirmed: 47287,
    deaths: 390,
    recovered: 43866,
  },
  {
    countryregion: "Venezuela",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 6.4238,
      lng: -66.5897,
    },
    countrycode: {
      iso2: "VE",
      iso3: "VEN",
    },
    confirmed: 60540,
    deaths: 485,
    recovered: 48644,
  },
  {
    countryregion: "Vietnam",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 14.058323999999999,
      lng: 108.277199,
    },
    countrycode: {
      iso2: "VN",
      iso3: "VNM",
    },
    confirmed: 1063,
    deaths: 35,
    recovered: 918,
  },
  {
    countryregion: "West Bank and Gaza",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 31.9522,
      lng: 35.2332,
    },
    confirmed: 30574,
    deaths: 221,
    recovered: 20082,
  },
  {
    countryregion: "Western Sahara",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 24.2155,
      lng: -12.8858,
    },
    countrycode: {
      iso2: "EH",
      iso3: "ESH",
    },
    confirmed: 10,
    deaths: 1,
    recovered: 8,
  },
  {
    countryregion: "Yemen",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: 15.552726999999999,
      lng: 48.516388,
    },
    countrycode: {
      iso2: "YE",
      iso3: "YEM",
    },
    confirmed: 2011,
    deaths: 583,
    recovered: 1212,
  },
  {
    countryregion: "Zambia",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -13.133897,
      lng: 27.849332,
    },
    countrycode: {
      iso2: "ZM",
      iso3: "ZMB",
    },
    confirmed: 13539,
    deaths: 312,
    recovered: 12260,
  },
  {
    countryregion: "Zimbabwe",
    lastupdate: "2020-09-14T19:42:00.088Z",
    location: {
      lat: -19.015438,
      lng: 29.154857,
    },
    countrycode: {
      iso2: "ZW",
      iso3: "ZWE",
    },
    confirmed: 7526,
    deaths: 224,
    recovered: 5678,
  },
];

export { foo, todaySample };
