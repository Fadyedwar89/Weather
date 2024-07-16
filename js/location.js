let city = document.querySelector("#city");
async function weather(y) {
try{
    let x = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=921696349b7e4708b75232421240207&q=${y}&days=3`
      );
      let dataAll = await x.json();
      display(dataAll);
}
catch{
    error => {
        console.log("can't receive");
      }
}
}

function success(pos) {
  const crd = pos.coords;
  weather(`${crd.latitude},${crd.longitude}`);
}

navigator.geolocation.getCurrentPosition(success);

function display(data) {
  let htnlLocation = document.querySelector(".row.w-85.m-auto");


  htnlLocation.innerHTML = `<div class="rounded-start-4 row-main col-lg-4 bg-main mb-3">
        <div class=" px-3 py-2 d-flex align-items-center justify-content-between rounded-start-4   v ">
          <p class="my-2">saturday</p>
          <p class="my-2">${data.forecast.forecastday[0].date}</p>
        </div>
        <div class="px-3">
          <h2>${data.location.name}</h2>
          <num class="deg">${data.current.temp_c}<span>o</span>C</num>
          <img src="${data.current.condition.icon}" class="translate-middle-y" alt="">
          <p class="pb-4">${data.current.condition.text}</p>
          <div class="d-flex">
            <figure>
              <img src="img/icon-umberella.png" alt="">
              <span class="pe-4">20%</span>
            </figure>
            <figure>
              <img src="img/icon-wind.png" alt="">
              <span class="pe-4">18km/h</span>
            </figure>
            <figure>
              <img src="img/icon-compass.png" alt="">
              <span>East</span>
            </figure>
          </div>
        </div>
      </div>

       <div class=" mb-3 col-lg-4 row-main bg-2">

        <div class="  p-2 b ">
          <p class="text-center">${data.forecast.forecastday[1].date}</p>
        </div>

        <div class="d-flex flex-column flex-wrap  c justify-content-center align-items-center">
          <img src="${data.forecast.forecastday[1].day.condition.icon}" alt=""></img>
          <num >${data.forecast.forecastday[1].day.maxtemp_c}<span>o</span>C</num>
          <num class="temp pb-4">${data.forecast.forecastday[1].day.mintemp_c}<span class="temp">o</span>C</num>
          <p>${data.forecast.forecastday[1].day.condition.text}</p>
        </div>
      </div>
      
      <div class=" mb-3 col-lg-4 row-main rounded-end-4 bg-main">
        <div class=" p-2 rounded-end-4 v">
          <p class=" text-center">${data.forecast.forecastday[2].date}</p>
        </div>
        <div class=" d-flex flex-column flex-wrap c justify-content-center align-items-center">
          <img src="${data.forecast.forecastday[2].day.condition.icon}" alt=""></img>
          <num>${data.forecast.forecastday[2].day.maxtemp_c}<span>o</span>C</num>
          <num class="temp pb-4">${data.forecast.forecastday[2].day.mintemp_c}<span class="temp">o</span>C</num>
          <p>${data.forecast.forecastday[2].day.condition.text}</p>
        </div>
      </div>`;
}
city.addEventListener("keyup", async function () {
  if (await weather(this.value)) {
    await weather(this.value)
  }
});
//
