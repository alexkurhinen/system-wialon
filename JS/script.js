// Табы

function tab() {
  const tabs = document.querySelectorAll(".anytask__button");
  const contents = document.querySelectorAll(".anytask__img");
  const img = document.querySelectorAll(".img");
  tabs.forEach(btnClick);

  function btnClick(item) {
    item.addEventListener("click", function () {
      const currentTab = item;
      const tabId = currentTab.getAttribute("data-tab");
      const currentContent = document.querySelector(tabId);

      if (!currentTab.classList.contains("active")) {
        tabs.forEach(function (item) {
          item.classList.remove("active");
        });

        contents.forEach(function (item) {
          item.classList.remove("active");
        });

        currentTab.classList.add("active");
        currentContent.classList.add("active");
      }
    });
  }
  document.querySelector(".anytask__button").click();

  img.forEach(function (img) {
    img.addEventListener("click", function () {
      img.classList.toggle("anytask__img-bigger");
    });
  });
}

tab();

// Горизонтальный скролл колесом мыши

(function () {
  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    document.getElementById("statistic-table").scrollLeft -= delta * 20;
    e.preventDefault();
  }
  if (document.getElementById("statistic-table").addEventListener) {
    document
      .getElementById("statistic-table")
      .addEventListener("mousewheel", scrollHorizontally, false);

    document
      .getElementById("statistic-table")
      .addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    document
      .getElementById("statistic-table")
      .attachEvent("onmousewheel", scrollHorizontally);
  }
})();

// Получение данных из ссылки

const countryLink =
  "https://cs.wialon.com/svcs/regions/v1/countries?extended=1";

const cityLink =
  "https://cs.wialon.com/svcs/regions/v1/cities?country_id=%7BCOUNTRY_ID";

function Get(countryLink) {
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", countryLink, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}
var json_obj = JSON.parse(Get(countryLink));

const countryName = [];
json_obj.forEach((element) => {
  countryName.push(element.name);
});

$(function () {
  $("#input").autocomplete({
    source: countryName,
  });
});

// let country;

// $("#input").autocomplete({ source: countryName });
// $("#input").autocomplete({
//   change: function (event, ui) {
//    console.log(ui.item.value);
//   },
// });

// console.log(country);