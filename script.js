"use strict";

console.log("Hi, Fishface");

const container = document.getElementById("container");
const storeTable = document.getElementById("store-table");
const newStoreForm = document.getElementById("new-store-form");

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const allStores = [];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Location(store, minCust, maxCust, avgCookiesPerHour) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.dailyCookies = 0;
  this.pushStore();
  this.render();
}

Location.prototype.calcCustomersEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(randomNum(this.minCust, this.maxCust));
  }
};

Location.prototype.calccookieseachhour = function () {
  for (let i = 0; i < hours.length; i++) {
    let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
    this.cookiesEachHour.push(oneHour);
    this.dailyCookies += oneHour;
  }
};

Location.prototype.pushStore = function () {
  allStores.push(this);
};

const tableHeader = [
  "Location",
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "Daily Total",
];
function createHeader() {
  const headerRow = document.createElement("tr");
  for (let i = 0; i < tableHeader.length; i++) {
    console.log(tableHeader[i]);
    let headerCell = document.createElement("th");
    headerCell.textContent = tableHeader[i];
    headerRow.appendChild(headerCell);
  }
  storeTable.appendChild(headerRow);
}

Location.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calccookieseachhour();

  const tableRow = document.createElement("tr");

  const th = document.createElement("th");
  th.textContent = this.store;

  tableRow.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(td);
  }

  const storeTotal = document.createElement("th");
  storeTotal.textContent = this.dailyCookies;
  tableRow.appendChild(storeTotal);

  storeTable.appendChild(tableRow);
};

createHeader();

const seattle = new Location("Seattle", 23, 65, 6.3);
const tokyo = new Location("Tokyo", 3, 24, 1.2);
const dubai = new Location("Dubai", 11, 38, 3.7);
const paris = new Location("Paris", 20, 38, 2.3);
const lima = new Location("Lima", 2, 16, 4.6);
console.log(seattle);

function hourlyTotals() {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = "Hourly Totals";
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    const th = document.createElement("th");
    let hoursAdded = 0;
    for (let j = 0; j < allStores.length; j++) {
      const hourAmount = allStores[j].cookiesEachHour[i];
      hoursAdded += hourAmount;
    }
    th.textContent = hoursAdded;
    tr.appendChild(th);
  }

  let totalTotals = 0;
  for (let i = 0; i < allStores.length; i++) {
    totalTotals += allStores[i].dailyCookies;
  }

  const totalsCell = document.createElement("th");
  totalsCell.textContent = totalTotals;
  tr.appendChild(totalsCell);

  storeTable.appendChild(tr);
}
hourlyTotals();

newStoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  storeTable.innerHTML = "";
  createHeader();

  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }

  const storeNameInput = event.target.name.value;
  const minCustInput = event.target.minCust.value;
  const maxCustInput = event.target.maxCust.value;
  const avgCookiesInput = event.target.avgCookies.value;

  const store = new Location(storeNameInput, minCustInput, maxCustInput, avgCookiesInput);

  hourlyTotals();
  newStoreForm.reset();
});
