"use strict";
    
    console.log("Hi, Fishface");

    const container = document.getElementById("container");
    const storeTable = document.getElementById("store-table");

    const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

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
    this.render();

} 

    Location.prototype.calcCustomersEachHour = function (){
        for (let i = 0; i < hours.length; i++){
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

    Location.prototype.render = function () {
         this.calcCustomersEachHour();
         this.calccookieseachhour ();
    
        const tr = document.createElement("tr");

        const th = document.createElement("th");
        th.textContent = this.storeName;

        tr.appendChild(th);
    
        for (let i =0; i < hours.length; i++) {
            const td = document.createElement("td");
            td.textContent = this.cookiesEachHour[i];
            tr.appendChild(td);
        }

            const storeTotal = document.createElement("th");
            storeTotal.textContent = this.dailyCookies;
            tr.appendChild(storeTotal);

            storeTable.appendChild(tr);
        };



    const seattle = new Location("seattle", 23, 65, 6.3,);
    const tokyo = new Location("tokyo", 3, 24, 1.2,);
    const dubai = new Location("dubai", 11, 38, 3.7,);
    const paris = new Location("paris", 20, 38, 2.3,);
    const lima = new Location("lima", 2, 16, 4.6,);
    console.log(seattle);
    


