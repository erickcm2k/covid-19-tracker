async function getData(iso2) {
  const api = `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${iso2}`;
  const covidData = await fetch(api);
  const json = await covidData.json();
  return json;
}

const option = document.querySelector("#country-list");

const confirmedResult = document.querySelector("#confirmedResult");
const deathsResult = document.querySelector("#deathsResult");
const recoveredResult = document.querySelector("#recoveredResult");
const countryLabel = document.querySelector("#country-label");

export function searchList() {
  option.addEventListener("change", async (event) => {
    if (event.target.value === "Country") {
      countryLabel.textContent = "Select a country";
      confirmedResult.textContent = "...";
      deathsResult.textContent = "...";
      recoveredResult.textContent = "...";
      return;
    }

    const country = event.target.value;
    const latest = await getData(country);

    countryLabel.textContent = latest[0].countryregion;
    confirmedResult.textContent = latest[0].confirmed.toLocaleString();
    deathsResult.textContent = latest[0].deaths.toLocaleString();
    recoveredResult.textContent = latest[0].recovered.toLocaleString();

    return;
  });
}
