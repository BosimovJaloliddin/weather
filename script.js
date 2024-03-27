const body = document.querySelector("body");
const search = document.querySelector(".search");
const searchError = document.querySelector(".search-error");
const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const oclock = document.querySelector(".oclock");
const date = document.querySelector(".date");
const tempF = document.querySelector(".temp-f");
const tempC = document.querySelector(".temp-c");
const day = document.querySelector(".day-name");
const dayIcon = document.querySelector(".day-icon");
const hourInfoItem = document.querySelector(".hour-info_item");
const sunriseOclock = document.querySelector(".sunrise-oclock");
const sunsetOclock = document.querySelector(".sunset-oclock");
const humidity = document.querySelector(".humidity-num");
const pressure = document.querySelector(".pressure-num");
const wind = document.querySelector(".wind-num");
const uv = document.querySelector(".uv-num");

const hourInfoOclock1 = document.querySelector(".hour-info_oclock1");
const hourInfoOclock2 = document.querySelector(".hour-info_oclock2");
const hourInfoOclock3 = document.querySelector(".hour-info_oclock3");
const hourInfoOclock4 = document.querySelector(".hour-info_oclock4");
const hourInfoOclock5 = document.querySelector(".hour-info_oclock5");
const hourInfoImg1 = document.querySelector(".hour-info_img1");
const hourInfoImg2 = document.querySelector(".hour-info_img2");
const hourInfoImg3 = document.querySelector(".hour-info_img3");
const hourInfoImg4 = document.querySelector(".hour-info_img4");
const hourInfoImg5 = document.querySelector(".hour-info_img5");

const hourInfoTemp1 = document.querySelector(".hour-info_temp1");
const hourInfoTemp2 = document.querySelector(".hour-info_temp2");
const hourInfoTemp3 = document.querySelector(".hour-info_temp3");
const hourInfoTemp4 = document.querySelector(".hour-info_temp4");
const hourInfoTemp5 = document.querySelector(".hour-info_temp5");

const oneDayImg1 = document.querySelector(".one-day_img1");
const oneDayImg2 = document.querySelector(".one-day_img2");
const oneDayImg3 = document.querySelector(".one-day_img3");
const oneDayImg4 = document.querySelector(".one-day_img4");
const oneDayImg5 = document.querySelector(".one-day_img5");
const oneDayImg6 = document.querySelector(".one-day_img6");

const oneDayTemp1 = document.querySelector(".one-day_temp1");
const oneDayTemp2 = document.querySelector(".one-day_temp2");
const oneDayTemp3 = document.querySelector(".one-day_temp3");
const oneDayTemp4 = document.querySelector(".one-day_temp4");
const oneDayTemp5 = document.querySelector(".one-day_temp5");
const oneDayTemp6 = document.querySelector(".one-day_temp6");

const oneDayDay1 = document.querySelector(".one-day_day1");
const oneDayDay2 = document.querySelector(".one-day_day2");
const oneDayDay3 = document.querySelector(".one-day_day3");
const oneDayDay4 = document.querySelector(".one-day_day4");
const oneDayDay5 = document.querySelector(".one-day_day5");
const oneDayDay6 = document.querySelector(".one-day_day6");

const hourWind1 = document.querySelector(".hour-wind1");
const hourWind2 = document.querySelector(".hour-wind2");
const hourWind3 = document.querySelector(".hour-wind3");
const hourWind4 = document.querySelector(".hour-wind4");
const hourWind5 = document.querySelector(".hour-wind5");

// ===================================================
let weatherDate = new Map();
let newDate = new Date();
// =====================================================
const getWeatherInfo = async (city) => {
  let res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=6&dt='2024-03-24'&key=8427a00d2d1446ce9bc81024242303`,
    {
      header: { accept: "application/json" },
    }
  );

  let result = await res.json();

  if (result?.error?.code !== 1006) {
    weatherDate.set("date", result);
    weatherDate.set("hour", result?.forecast?.forecastday[0]?.hour);
    weatherDate.set("forecast", result?.forecast?.forecastday);
    weatherDate.delete("error");
  } else weatherDate.set("error", result?.error?.message);
};

// ==============================================================
const updateInfo = () => {
  country.textContent = weatherDate.get("date")?.location?.country;
  city.textContent = weatherDate.get("date")?.location?.name;
  oclock.textContent = weatherDate
    .get("date")
    ?.location?.localtime.slice(10, 16);
  date.textContent = weatherDate.get("date")?.location?.localtime.slice(0, 10);
  tempF.textContent = `${weatherDate.get("date")?.current?.temp_f}F`;
  tempC.textContent = `${weatherDate.get("date")?.current?.temp_c}C`;
  sunriseOclock.textContent = weatherDate.get("forecast")[0]?.astro?.sunrise;
  sunsetOclock.textContent = weatherDate.get("forecast")[0]?.astro?.sunset;
  day.textContent = weatherDate.get("date")?.current?.condition?.text;
  dayIcon.attributes.src.textContent =
    weatherDate.get("date")?.current?.condition?.icon;
  // ============
  humidity.textContent = `${weatherDate.get("forecast")[0]?.day?.avghumidity}%`;
  wind.textContent = `${weatherDate.get("forecast")[0]?.day?.maxwind_kph}km/h`;
  pressure.textContent = `${
    weatherDate.get("forecast")[0].hour[newDate.getHours()].pressure_mb
  }hPa`;
  uv.textContent = `${weatherDate.get("forecast")[0].day.uv}`;
  //===============
  hourInfoOclock1.textContent = weatherDate.get("hour")[0]?.time?.slice(10, 16);
  hourInfoOclock2.textContent = weatherDate.get("hour")[6]?.time?.slice(10, 16);
  hourInfoOclock3.textContent = weatherDate
    .get("hour")[12]
    ?.time?.slice(10, 16);
  hourInfoOclock4.textContent = weatherDate
    .get("hour")[18]
    ?.time?.slice(10, 16);
  hourInfoOclock5.textContent = weatherDate
    .get("hour")[23]
    ?.time?.slice(10, 16);

  hourInfoTemp1.textContent = `${weatherDate.get("hour")[0]?.temp_c}C`;
  hourInfoTemp2.textContent = `${weatherDate.get("hour")[6]?.temp_c}C`;
  hourInfoTemp3.textContent = `${weatherDate.get("hour")[12]?.temp_c}C`;
  hourInfoTemp4.textContent = `${weatherDate.get("hour")[18]?.temp_c}C`;
  hourInfoTemp5.textContent = `${weatherDate.get("hour")[23]?.temp_c}C`;

  hourInfoImg1.attributes.src.textContent =
    weatherDate.get("hour")[0]?.condition?.icon;
  hourInfoImg2.attributes.src.textContent =
    weatherDate.get("hour")[6]?.condition?.icon;
  hourInfoImg3.attributes.src.textContent =
    weatherDate.get("hour")[12]?.condition?.icon;
  hourInfoImg4.attributes.src.textContent =
    weatherDate.get("hour")[18]?.condition?.icon;
  hourInfoImg5.attributes.src.textContent =
    weatherDate.get("hour")[23]?.condition?.icon;

  oneDayImg1.attributes.src.textContent =
    weatherDate.get("forecast")[0]?.day?.condition?.icon;
  oneDayImg2.attributes.src.textContent =
    weatherDate.get("forecast")[1]?.day?.condition?.icon;
  oneDayImg3.attributes.src.textContent =
    weatherDate.get("forecast")[2]?.day?.condition?.icon;
  oneDayImg4.attributes.src.textContent =
    weatherDate.get("forecast")[3]?.day?.condition?.icon;
  oneDayImg5.attributes.src.textContent =
    weatherDate.get("forecast")[4]?.day?.condition?.icon;
  oneDayImg6.attributes.src.textContent =
    weatherDate.get("forecast")[5]?.day?.condition?.icon;

  oneDayTemp1.textContent = `${Math.floor(
    weatherDate.get("forecast")[0]?.day?.maxtemp_c
  )}C`;
  oneDayTemp2.textContent = `${Math.floor(
    weatherDate.get("forecast")[1]?.day?.maxtemp_c
  )}C`;
  oneDayTemp3.textContent = `${Math.floor(
    weatherDate.get("forecast")[2]?.day?.maxtemp_c
  )}C`;
  oneDayTemp4.textContent = `${Math.floor(
    weatherDate.get("forecast")[3]?.day?.maxtemp_c
  )}C`;
  oneDayTemp5.textContent = `${Math.floor(
    weatherDate.get("forecast")[4]?.day?.maxtemp_c
  )}C`;
  oneDayTemp6.textContent = `${Math.floor(
    weatherDate.get("forecast")[5]?.day?.maxtemp_c
  )}C`;

  oneDayDay1.textContent = weatherDate.get("forecast")[0]?.date;
  oneDayDay2.textContent = weatherDate.get("forecast")[1]?.date;
  oneDayDay3.textContent = weatherDate.get("forecast")[2]?.date;
  oneDayDay4.textContent = weatherDate.get("forecast")[3]?.date;
  oneDayDay5.textContent = weatherDate.get("forecast")[4]?.date;
  oneDayDay6.textContent = weatherDate.get("forecast")[5]?.date;

  hourWind1.textContent = `${weatherDate.get("hour")[0].wind_kph}km/h`;
  hourWind2.textContent = `${weatherDate.get("hour")[6].wind_kph}km/h`;
  hourWind3.textContent = `${weatherDate.get("hour")[12].wind_kph}km/h`;
  hourWind4.textContent = `${weatherDate.get("hour")[18].wind_kph}km/h`;
  hourWind5.textContent = `${weatherDate.get("hour")[23].wind_kph}km/h`;
};

// ===============================================================
const m = async () => {
  await getWeatherInfo("Tashkent");
  updateInfo();
};
if (weatherDate.size === 0) {
  m();
}

// ===============================================================
btnSearch.addEventListener("click", async () => {
  if (search.value !== "") {
    await getWeatherInfo(search.value);
    if (weatherDate.size !== 0) {
      updateInfo();
      searchError.textContent = "";
    }
  }
  if (weatherDate.get("error")) {
    searchError.textContent = weatherDate.get("error");
  }
});
addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    if (search.value !== "") {
      await getWeatherInfo(search.value);
      if (weatherDate.size !== 0) {
        updateInfo();
        searchError.textContent = "";
      }
    }
    if (weatherDate.get("error")) {
      searchError.textContent = weatherDate.get("error");
    }
  }
});

// ===============light and dark mode ====================
darkMode.addEventListener("click", () => {
  if (lightMode.classList.value.includes("none")) {
    lightMode.classList.remove("none");
    darkMode.classList.add("none");
    body.classList.add("dark");
  }
});
lightMode.addEventListener("click", () => {
  if (darkMode.classList.value.includes("none")) {
    darkMode.classList.remove("none");
    lightMode.classList.add("none");
    body.classList.remove("dark");
  }
});
