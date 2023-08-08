
async function getData ( city )
{
  let response = await fetch( `https://api.weatherapi.com/v1/forecast.json?key=fdb65338fd954962ba374133230608&q=${city}&days=3` );
  let finalResult = await response.json();
  console.log( finalResult );
  let country = finalResult.location.name;
  let time = finalResult.location.localtime;
  let currentDay = getDayNow( time );
  let currentMonth = getMonthNow (time);
  let currentDayNum = getDayNum (time);
  let temperature = finalResult.current.temp_c;
  let condition = finalResult.current.condition.text;
  let icon = finalResult.current.condition.icon;
  let countryCap = finalResult.location.country;
  let z = finalResult.location.tz_id;

  let oneDay =  getDayNow( finalResult.forecast.forecastday[ 1 ].date );
  let oneMaxTemp = finalResult.forecast.forecastday[ 1 ].day.maxtemp_c;
  let oneMinTemp = finalResult.forecast.forecastday[ 1 ].day.mintemp_c;
  let oneText = finalResult.forecast.forecastday[ 1 ].day.condition.text;
  let oneIcon = finalResult.forecast.forecastday[ 1 ].day.condition.icon;

  let towDay =  getDayNow( finalResult.forecast.forecastday[ 2 ].date );
  let towMaxTemp = finalResult.forecast.forecastday[ 2 ].day.maxtemp_c;
  let towMinTemp = finalResult.forecast.forecastday[ 2 ].day.mintemp_c;
  let towText = finalResult.forecast.forecastday[ 2 ].day.condition.text;
  let towIcon = finalResult.forecast.forecastday[ 2 ].day.condition.icon;

  displayWeather( country,
    currentDay,
    currentDayNum,
    currentMonth,
    temperature,
    condition,
    icon,
    oneDay,
    oneMaxTemp,
    oneMinTemp,
    oneText,
    oneIcon,
    towDay,
    towMaxTemp,
    towMinTemp,
    towText,
    towIcon
  );
}
getData ( "cairo" )
let inputCity = document.getElementById("inputCity")
let findBtn = document.getElementById("findBtn")


findBtn.addEventListener( "click", function ()
{
  getData(inputCity.value)
  console.log(inputCity.value);
} )

// inputCity.addEventListener( "change", function ()
// {
//   getData(inputCity.value)
//   console.log(inputCity.value);
// })

//Todo This Function Show Data in Website .
function displayWeather ( country,
  currentDay,
  currentDayNum,
  currentMonth,
  temperature,
  condition,
  icon,
  oneDay,
  oneMaxTemp,
  oneMinTemp,
  oneText,
  oneIcon,
  towDay,
  towMaxTemp,
  towMinTemp,
  towText,
  towIcon
)
{
  let cartona = `

  <div class="col-lg-4 p-0 one">
  <div class="item">
    <div class="head p-2 d-flex justify-content-between align-items-center mb-2 text-white">
      <p class="m-0">${currentDay}</p>
      <p class="m-0"><span>${currentDayNum}</span> ${currentMonth}</p>
    </div>
    <div class="p-3 ">
      <h3>${country}</h3>
      <div class="temp d-flex justify-content-around">
        <p class="display-2 fw-bold">${temperature}<sup>o</sup>C</p>
        <div class="image">
          <img src="${icon}" alt="sun-image" class="w-100">
        </div>
      </div>
      <a href="#" >${condition}</a>
      <div class="icon my-2">
        <span class="d-inline-block ms-2"><img src="image/icon-umberella.png" class="me-1" alt="umbrella"> 20%</span>
        <span class="d-inline-block ms-2"><img src="image/icon-wind.png" class="me-1" alt="wind">8km/h</span>
        <span class="d-inline-block ms-2"><img src="image/icon-compass.png" class="me-1" alt="compass">1 East</span>
      </div>
    </div>
  </div>
</div>

<div class="col-lg-4 p-0 two">
  <div class="item text-center">
    <div class="head p-2 d-flex justify-content-center align-items-center mb-5 text-white">
      <p class="mb-0 ">${oneDay}</p>
    </div> 
    <div class="temp text-center">
      <img src="${oneIcon}" alt="sun-image">
      <p class="fs-4 fw-bold m-0">${oneMaxTemp}<sup>o</sup>C</p>
      <p class=" minTemp m-0">${oneMinTemp}<sup>o</sup>C</p>
      <a href="#" class="m-1 d-block">${oneText}</a>
    </div>
  </div>
</div>

<div class="col-lg-4 p-0 three">
  <div class="item text-center">
    <div class="head p-2 d-flex justify-content-center align-items-center mb-5 text-white">
      <p class="mb-0 ">${towDay}</p>
    </div> 
    <div class="temp text-center">
      <img src="${towIcon}" alt="sun-image">
      <p class="fs-4 fw-bold m-0">${towMaxTemp}<sup>o</sup>C</p>
      <p class="minTemp m-0">${towMinTemp}<sup>o</sup>C</p>
      <a href="#" class="m-1 d-block">${towText}</a>
    </div>
  </div>
</div> 
  `;
  document.getElementById( "rowData" ).innerHTML = cartona;
}

//Todo This Function Get Day Name Now .
function getDayNow (time)
{
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = new Date(time);
  let day = days[ d.getDay() ];
  // console.log("index in function ==>  "+ d.getDay() );
  return day
}

//Todo This Function Get Day Date of Number Now .
function getDayNum (time)
{
  const d = new Date(time);
  return  d.getDate();
}

//Todo This Function Get Month Name Now .
function getMonthNow (time)
{
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date(time);
  let month = months[ d.getMonth() ];
  return month;
}

