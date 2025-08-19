async function getData() {
const ortInput = document.getElementById('input');
const ort = ortInput.value.trim();
const url = `https://api.weatherapi.com/v1/current.json?key=e7609d1c62394f80b71140111251908&q=${ort}&aqi=yes`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    const data = {
        ort: result.location.name,
        bundesland : result.location.region,
        wind : result.current.wind_kph,
        Temperatur : result.current.feelslike_c,
        Wolken : result.current.cloud
    };

    document.getElementById('Ort').innerHTML = "Ort: " + data.ort;
    document.getElementById('Bundesland').innerHTML = "Bundesland: " + data.bundesland;
    document.getElementById('Wind').innerHTML = "Windgeschwindigkeit: " + data.wind + " km/h";
    document.getElementById('Temperatur').innerHTML = "Temperatur: " + data.Temperatur + " °";
    document.getElementById('Wolken').innerHTML = "Wolken: " + data.Wolken + " %";

  } catch (error) {
    console.error(error.message);
    document.getElementById('Ort').innerHTML = "Ort: Beim Laden ist ein Fehler aufgetreten";
    document.getElementById('Bundesland').innerHTML = "Bundesland: Beim Laden ist ein Fehler aufgetreten";
    document.getElementById('Wind').innerHTML = "Windgeschwindigkeit: Beim Laden ist ein Fehler aufgetreten";
    document.getElementById('Temperatur').innerHTML = "Temperatur: Beim Laden ist ein Fehler aufgetreten";
    document.getElementById('Wolken').innerHTML = "Wolken: Beim Laden ist ein Fehler aufgetreten";
  }
}
{}