var salesTable = document.getElementById('sales-data');
var allCookieStores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(salesTable.rows);

function CookieStore(location, minCust, maxCust, avgSales) {
  this.location= location;
  this.minCust = minCust;
  this.maxCust= maxCust;
  this.avgSales= avgSales;
  this.salesNumbers = this.generateSales();
  allCookieStores.push(this);
}

// builds an array of the sales for each hour
CookieStore.prototype.generateSales = function() {
  var outputSales = [];
  for(var i = 0; i < 14; i++){
    outputSales.push(Math.floor(Math.random() * (this.maxCust-this.minCust)) + this.minCust);
  }
  return outputSales;
};

// builds and adds the row for this cookie store in the sales table
CookieStore.prototype.render = function() {
  // build the table row to work in and put the location in first
  var tableRow = salesTable.insertRow(salesTable.rows.length);
  var locName = document.createElement('td');
  locName.textContent = this.location;
  tableRow.appendChild(locName);

  // get var ready to track total sales
  var salesTotal = 0;

  // add td elements to the table for each hour, and add up total while we're there
  for(var i = 0; i < 14; i++) {
    var salesTableOutput = document.createElement('td');
    salesTableOutput.textContent = this.salesNumbers[i];
    tableRow.appendChild(salesTableOutput);

    salesTotal += this.salesNumbers[i];
  }

  // add the total to the row
  var salesTableTotal = document.createElement('td');
  salesTableTotal.textContent = salesTotal;
  tableRow.appendChild(salesTableTotal);

  // put the row in the table - didn't work, done properly above
  // salesTable.appendChild(tableRow);
};

// only need one of these, displays the totals for all locations for a column
var hourlyTotalsRow = {
  // define the row so we can build it later and reference it
  totalRow: undefined,

  render: function() {
    // this is called last, so it'll be the last row
    this.totalRow = salesTable.insertRow(salesTable.rows.length);

    // make empty cells here, then use the update function to fill them
    // this makes the update code reusable without hassle
    var tdEl = document.createElement('td');
    tdEl.textContent = 'All Locations';
    this.totalRow.appendChild(tdEl);

    for(var i = 0; i < hours.length + 1; i++)
    {
      tdEl = document.createElement('td');
      this.totalRow.appendChild(tdEl);
    }

    this.update();
  },

  // sets the values of the totals row
  update: function() {
    // make sure we can access the total of all locations through the whole day at the end
    var dailyTotalAllLoc = 0;

    // add up each column
    for(var i = 0; i < hours.length; i++)
    {
      // iterate through each cookie shop and get the sales amount for that hour
      var hourlyTotalAllLoc = 0;
      for(var j = 0; j < allCookieStores.length; j++)
      {
        hourlyTotalAllLoc += allCookieStores[j].salesNumbers[i];
      }
      dailyTotalAllLoc += hourlyTotalAllLoc;

      // find column i, not counting the label column, in the last row and set the text
      salesTable.rows[salesTable.rows.length -1].childNodes[i + 1].textContent = hourlyTotalAllLoc;

    }

    // put the grand total in the last column of the last row
    salesTable.rows[salesTable.rows.length -1].childNodes[salesTable.rows[salesTable.rows.length -1].childNodes.length - 1].textContent = dailyTotalAllLoc;
  }
};

// call render() from each store
function renderCookieStores() {
  for(var i = 0; i < allCookieStores.length; i++)
  {
    allCookieStores[i].render();
  }
}

// builds the top row with the column labels, called first
function buildTitleRow() {
  var trEl = salesTable.insertRow(0);
  var workingThEl = document.createElement('th');
  trEl.appendChild(workingThEl);
  for(var i = 0; i < hours.length; i++)
  {
    workingThEl = document.createElement('th');
    workingThEl.textContent = hours[i];
    trEl.appendChild(workingThEl);
  }
  workingThEl = document.createElement('th');
  workingThEl.textContent = 'Daily Total';
  trEl.appendChild(workingThEl);
}

// build all of the cookie stores, they put their reference in the allCookieStores array, so no need to save that
new CookieStore('1st and Pike', 23, 65, 6.3);
new CookieStore('SeaTac Airport', 3, 24, 1.2);
new CookieStore('Seattle Center', 11, 38, 3.7);
new CookieStore('Capitol Hill', 20, 38, 2.3);
new CookieStore('Alki', 2, 16, 4.6);

// add the title row up top, then the stores, then the bottom row of totals
buildTitleRow();
renderCookieStores();

hourlyTotalsRow.render();
