export default async function getData(api) {
  const covidData = await fetch(api);
  const json = await covidData.json();
  return json;
}
