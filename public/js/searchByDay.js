function today() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear().toString().substr(2, 4);
  return `${month}/${day}/${year}`;
}

function yesterday() {
  const date = new Date();
  const tempDate = date.getDate() - 1;
  date.setDate(tempDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear().toString().substr(2, 4);
  return `${month}/${day}/${year}`;
}

function beforeYesterday() {
  const date = new Date();
  const tempDate = date.getDate() - 2;
  date.setDate(tempDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear().toString().substr(2, 4);
  return `${month}/${day}/${year}`;
}

async function getData() {
  const api = `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?onlyCountries=true`;
  const covidData = await fetch(api);
  const json = await covidData.json();
  return json;
}

async function getLatestInfo(iso2) {
  const data = await getData();
  const withIso2 = [];

  data.forEach((x) => {
    try {
      if (x.countrycode["iso2"]) {
        withIso2.push(x);
      }
    } catch (e) {
      console.log("Country has no countrycode available");
    }
  });
  // console.log(withIso2);

  const country = withIso2.filter((x) => x.countrycode["iso2"] === iso2);
  console.log(country[0]);

  if (country[0].timeseries[today()]) {
    console.log(country[0].timeseries[today()]);
  } else {
    console.log("Todays info is not available");
    if (country[0].timeseries[yesterday()]) {
      console.log(country[0].timeseries[yesterday()]);
    } else {
      console.log("Yesterdays info is not available");
      if (country[0].timeseries[beforeYesterday()]) {
        console.log(country[0].timeseries[beforeYesterday()]);
      } else {
        console.log("Day before yesterday info is not available");
      }
    }
  }
}

getLatestInfo("MX");
