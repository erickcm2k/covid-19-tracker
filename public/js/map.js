import getData from "./api.js";
import { styles } from "../styles/mapStyles.js";
const $map = document.getElementById("map");

const map = new window.google.maps.Map($map, {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 3,
  styles,
});

const infoWindow = new window.google.maps.InfoWindow();

function renderWindow({ confirmed, deaths, recovered, countryregion }) {
  return `
    <div>
    <p> <strong>${countryregion}</strong> </p>
    <p> Confirmed: ${confirmed.toLocaleString()}</p>
    <p> Diseases: ${deaths.toLocaleString()}</p>
    <p> Recovered: ${recovered.toLocaleString()}</p>
    </div>
    `;
}

export default async function renderData() {
  const byCountry =
    "https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true";
  const data = await getData(byCountry);

  data.forEach((country) => {
    const countryMarker = new window.google.maps.Marker({
      position: {
        lat: country.location.lat,
        lng: country.location.lng,
      },
      map,
    });
    countryMarker.addListener("click", () => {
      infoWindow.setContent(renderWindow(country));
      infoWindow.open(map, countryMarker);
    });
  });
}
