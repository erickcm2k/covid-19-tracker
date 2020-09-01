import { styles } from '../styles/styles.js';

const todayConfirmed = document.getElementById('todayConfirmed');
const todayDeaths = document.getElementById('todayDeaths');
const todayRecovered = document.getElementById('todayRecovered');

const totalConfirmed = document.getElementById('totalConfirmed');
const totalDeaths = document.getElementById('totalDeaths');
const totalRecovered = document.getElementById('totalRecovered');

const $map = document.getElementById('map');
const map = new window.google.maps.Map($map, {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 3,
  styles,
});

const infoWindow = new window.google.maps.InfoWindow();

async function getData(api) {
  const covidData = await fetch(api);
  const json = await covidData.json();
  return json;
}

function renderInfoWindowData({
  confirmed, deaths, recovered, countryregion,
}) {
  return ` 
    <div>
    <p> <strong>${countryregion}</strong> </p>
    <p> Confirmed: ${confirmed}</p>
    <p> Diseases: ${deaths}</p>
    <p> Recovered: ${recovered}</p>
    </div>
    `;
}

async function renderData() {
  const byCountry = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true';
  const data = await getData(byCountry);

  data.forEach((country) => {
    const countryMarker = new window.google.maps.Marker({
      position: {
        lat: country.location.lat,
        lng: country.location.lng,
      },
      map,
    });
    countryMarker.addListener('click', () => {
      infoWindow.setContent(renderInfoWindowData(country));
      infoWindow.open(map, countryMarker);
    });
  });
}

async function renderTotalInfo() {
  const brief = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/brief';
  const data = await getData(brief);

  totalConfirmed.textContent = data.confirmed.toLocaleString();
  totalDeaths.textContent = data.deaths.toLocaleString();
  totalRecovered.textContent = data.recovered.toLocaleString();
}

async function renderTodayInfo() {
  const latest = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest';
  const data = await getData(latest);

  // Sum of all confirmed, deaths and recovered field from 'data' JSON
  const confirmed = data.map((country) => country.confirmed).reduce((confirmed) => confirmed).toLocaleString();
  const deaths = data.map((country) => country.deaths).reduce((deaths) => deaths).toLocaleString();
  const recovered = data.map((country) => country.recovered).reduce((recovered) => recovered).toLocaleString();

  todayConfirmed.textContent = confirmed;
  todayDeaths.textContent = deaths;
  todayRecovered.textContent = recovered;
}

renderData();
renderTodayInfo();
renderTotalInfo();
