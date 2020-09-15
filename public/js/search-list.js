async function getData(iso2) {
    const api = `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${iso2}`;
    const covidData = await fetch(api);
    const json = await covidData.json();
    return json;
  }
  
  const option = document.querySelector("#country-list");
  
export function searchList() {
    option.addEventListener("change", async (event) => {
      if(event.target.value==='Country') {
        return;
      }
      const country = event.target.value;
    
    
      const latest = await getData(country);
    
      const confirmed = latest[0].confirmed;
      const countryName = latest[0].countryregion;
      const deaths = latest[0].deaths;
      const recovered = latest[0].recovered;
    
    
      console.log(`${countryName} ${confirmed} ${deaths} ${recovered}`)
    
      return;
    });
}