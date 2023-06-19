"use strict";
"use strict";
console.log("salmon cookies");

const container = document.getElementById("container");

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

console.log(hours.length);

const seattle = {
  storeName: "seattle",
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerHour: 6.3,
  customersEachHour: [],
  cookiesEachHour: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57],
  totalDailyCookies: 2772,
  render: function () {
    const article = document.createElement("article");
    container.appendChild(article);

    const h3 = document.createElement("h3");
    h3.textContent = this.storeName;
    article.appendChild(h3);

    const ul = document.createElement("ul");
    article.appendChild(ul);

    for (let i = 0; i < hours.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      ul.appendChild(li);
    }
  },
};

seattle.render();


const tokyo = {
    location: "tokyo",
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookie: 1.2
};

const dubai = {
    location: "dubai",
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookie: 3.7
};

const paris = {
    location: "paris",
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookie: 2.3
};

const lima = {
    location: "lima",
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookie: 4.6
};