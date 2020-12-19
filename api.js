const url = 'https://api.covid19api.com/summary';
const key = '5cf9dfd5-3449-485e-b5ae-70a60e997864';

let country = document.getElementById('country');
let confirmed = document.getElementById('confirmed');
let recovered = document.getElementById('recovered');
let deaths = document.getElementById('deaths');

var btn = document.getElementById('next');
btn.addEventListener('click', fetchResults);

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function fetchResults(e){
  e.preventDefault();
fetch(url, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    displayData(result);
  })
  .catch(error => console.log('error', error));
}

document.getElementById("country").style.textAlign = "center";
document.getElementById("deaths").style.textAlign = "center";   
document.getElementById("confirmed").style.textAlign = "center";   
document.getElementById("recovered").style.textAlign = "center";
document.getElementById("btn").style.textAlign = "center";

function displayData(json) {
  console.log(json);
  let randomIndex = Math.floor(Math.random() * (json.Countries.length - 0 ) + 0);
  let data = json.Countries[randomIndex];
  

  const countryElement = document.getElementById('countryText');
  const confirmedElement = document.getElementById('confirmedText');
  const recoveredElement = document.getElementById('recoveredText');
  const deathsElement = document.getElementById('deathsText');
  const options = document.querySelectorAll('.data');
  
  countryElement.innerText = data.Country;
  confirmedElement.innerText = data.TotalConfirmed;
  recoveredElement.innerText = data.TotalRecovered;
  deathsElement.innerText = data.TotalDeaths;
};
