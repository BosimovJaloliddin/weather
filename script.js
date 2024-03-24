const search = document.querySelector(".search");
const city = document.querySelector(".city");
const oclock = document.querySelector(".oclock");
const date = document.querySelector(".date");

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

// ===============================================================
const m = async () => {
  await getWeatherInfo("Tashkent");
  // console.log(weatherDate);
  city.textContent = await weatherDate.get("date")?.location?.name;
};
if (weatherDate.size === 0) {
  m();
}
// ==============================================================

btnSearch.addEventListener("click", async () => {
  if (search.value !== "") {
    await getWeatherInfo(search.value);
  }
  search.value = "";
  city.textContent = weatherDate.get("date").location.name;
});
