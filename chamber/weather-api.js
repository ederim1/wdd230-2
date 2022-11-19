const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=Idaho%20Falls,%20ID&aggregateHours=24&forcastDays=1&unitGroup=us&shortColumnNames=false&contentType=json&key=DCALE9PYMQS7MTYM74C9QRJTH";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();

  document.querySelector('#current-temp').textContent = jsObject.locations["Idaho Falls, ID"].currentConditions.temp;
    const iconsrc= `/chamber/images/weatherIcons/${jsObject.locations["Idaho Falls, ID"].currentConditions.icon}.png`;  
    const desc =jsObject.locations["Idaho Falls, ID"].currentConditions.icon ;
  document.querySelector('#weathericon').setAttribute('src', iconsrc);
  // document.querySelector('#weathericon').setAttribute('alt', desc);
  document.querySelector('#weatherdescr').textContent = desc;
  document.querySelector('#windSpeed').textContent = jsObject.locations["Idaho Falls, ID"].currentConditions.wspd;
  document.querySelector('#windChill').textContent = jsObject.locations["Idaho Falls, ID"].currentConditions.windchill;
  };
getWeather();

