import getData from "./api.js";

export async function renderTotalInfo() {
  const brief =
    "https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/brief";
  const data = await getData(brief);

  totalConfirmed.textContent = data.confirmed.toLocaleString();
  totalDeaths.textContent = data.deaths.toLocaleString();
  totalRecovered.textContent = data.recovered.toLocaleString();
}

export async function renderTodayInfo() {
  const latest =
    "https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest";
  const data = await getData(latest);

  // Sum of all confirmed, deaths and recovered field from 'data' JSON
  const confirmed = data
    .map((country) => country.confirmed)
    .reduce((confirmed) => confirmed)
    .toLocaleString();
  const deaths = data
    .map((country) => country.deaths)
    .reduce((deaths) => deaths)
    .toLocaleString();
  const recovered = data
    .map((country) => country.recovered)
    .reduce((recovered) => recovered)
    .toLocaleString();

  todayConfirmed.textContent = confirmed;
  todayDeaths.textContent = deaths;
  todayRecovered.textContent = recovered;
}

