const search = document.querySelector(".search");
const city = document.querySelector(".city");
const oclock = document.querySelector(".oclock");
const date = document.querySelector(".date");
const tempF = document.querySelector(".temp-f");
const tempC = document.querySelector(".temp-c");
const day = document.querySelector(".day");
const dayIcon = document.querySelector(".day-icon");

let weatherDate = new Map();
const getWeatherInfo = async (city) => {
  let res = await fetch(
    `https://api.weatherapi.com/v1/current.json?q=${city}&key=8427a00d2d1446ce9bc81024242303`,
    {
      header: { accept: "application/json" },
    }
  );

  let result = await res.json();
  weatherDate.set("date", result);
};

// ==============================================================
const updateInfo = () => {
  city.textContent = weatherDate.get("date")?.location?.name;
  oclock.textContent = weatherDate
    .get("date")
    ?.location?.localtime.slice(10, 16);
  date.textContent = weatherDate.get("date")?.location?.localtime.slice(0, 10);
  tempF.textContent = `${weatherDate.get("date")?.current?.temp_f}F`;
  tempC.textContent = `${weatherDate.get("date")?.current?.temp_c}C`;
  day.textContent = weatherDate.get("date")?.current?.condition?.text;
  dayIcon.attributes.src.textContent =
    weatherDate.get("date")?.current?.condition?.icon;
};

// ===============================================================
const m = async () => {
  await getWeatherInfo("Tashkent");
  updateInfo();
};
if (!weatherDate.has("date")) {
  m();
}
// ===============================================================
btnSearch.addEventListener("click", async () => {
  if (search.value !== "") {
    await getWeatherInfo(search.value);
    updateInfo();
  }
});
