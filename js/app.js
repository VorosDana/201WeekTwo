var salesTable = document.getElementById('sales-data');
var allCookieStores = [];
console.log(salesTable.rows);

function CookieStore(location, minCust, maxCust, avgSales) {
  this.location= location;
  this.minCust = minCust;
  this.maxCust= maxCust;
  this.avgSales= avgSales;
  allCookieStores.push(this);
}


CookieStore.prototype.generateSales = function() {
  var outputSales = [];
  for(var i = 0; i < 15; i++){
    outputSales.push(Math.floor(Math.random() * (this.maxCust-this.minCust)) + this.minCust);
  }
  return outputSales;
};

CookieStore.prototype.render = function() {
  // build sales for the day
  var salesNumbers = this.generateSales();

  // build the table row to work in and put the location in first
  var tableRow = salesTable.insertRow(salesTable.rows.length);
  var locName = document.createElement('td');
  locName.textContent = this.location;
  tableRow.appendChild(locName);

  // get var ready to track total sales
  var salesTotal = 0;

  // add td elements to the table for each hour, and add up total while we're there
  for(var i = 0; i < 15; i++) {
    var salesTableOutput = document.createElement('td');
    salesTableOutput.textContent = salesNumbers[i];
    tableRow.appendChild(salesTableOutput);

    salesTotal += salesNumbers[i];
  }

  // add the total to the row
  var salesTableTotal = document.createElement('td');
  salesTableTotal.textContent = salesTotal;
  tableRow.appendChild(salesTableTotal);

  // put the row in the table - didn't work, done properly above
  // salesTable.appendChild(tableRow);
};

function renderCookieStores() {
  for(var i = 0; i < allCookieStores.length; i++)
  {
    allCookieStores[i].render();
  }
}

new CookieStore('1st and Pike', 23, 65, 6.3);
new CookieStore('SeaTac Airport', 3, 24, 1.2);
new CookieStore('Seattle Center', 11, 38, 3.7);
new CookieStore('Capitol Hill', 20, 38, 2.3);
new CookieStore('Alki', 2, 16, 4.6);

renderCookieStores();
