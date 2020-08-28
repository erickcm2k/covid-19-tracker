import { styles } from '../styles/styles.js';

const $map = document.getElementById('map');
const map = new window.google.maps.Map($map, {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 3,
  styles,
});

const todayConfirmed = document.getElementById('todayConfirmed');
const todayDeaths = document.getElementById('todayDeaths');
const todayRecovered = document.getElementById('todayRecovered');

const totalConfirmed = document.getElementById('totalConfirmed');
const totalDeaths = document.getElementById('totalDeaths');
const totalRecovered = document.getElementById('totalRecovered');

renderData();
renderTotalInfo();

async function getData(api) {
  const covidData = await fetch(api);
  const json = await covidData.json();
  return json;
}

const infoWindow = new window.google.maps.InfoWindow();

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
  const latest = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest';
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

  totalConfirmed.textContent = data.confirmed;
  totalDeaths.textContent = data.deaths;
  totalRecovered.textContent = data.recovered;
}
