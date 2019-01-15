var salesTable = document.getElementById('sales-data');

var locOne = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,

  generateSales: function() {
    var outputSales = [];
    for(var i = 0; i < 15; i++){
      outputSales.push(Math.floor(Math.random() * (this.maxCust-this.minCust)) + this.minCust);
    }
    return outputSales;
  },

  render: function() {
    // build sales for the day
    var salesNumbers = this.generateSales();

    // build the table row to work in and put the location in first
    var tableRow = salesTable.insertRow(salesTable.rows);
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

    // put the row in the table
    salesTable.appendChild(tableRow);
  }
};


var locTwo = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
  generateSales: function() {
    var outputSales = [];
    for(var i = 0; i < 15; i++){
      outputSales.push(Math.floor((Math.random() * (this.maxCust-this.minCust))) + this.minCust);
    }
    return outputSales;
  },
  render: function() {
    var salesNumbers = this.generateSales();
    // var tableRow = document.createElement('tr');
    var tableRow = salesTable.insertRow(salesTable.rows);
    var locName = document.createElement('td');
    locName.textContent = this.location;
    tableRow.appendChild(locName);

    var salesTotal = 0;

    for(var i = 0; i < 15; i++) {
      var salesTableOutput = document.createElement('td');
      salesTableOutput.textContent = salesNumbers[i];
      tableRow.appendChild(salesTableOutput);

      salesTotal += salesNumbers[i];
    }

    var salesTableTotal = document.createElement('td');
    salesTableTotal.textContent = salesTotal;
    tableRow.appendChild(salesTableTotal);


    salesTable.appendChild(tableRow);
  }
};

var locThree = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSales: 3.7,
  generateSales: function() {
    var outputSales = [];
    for(var i = 0; i < 15; i++){
      outputSales.push(Math.floor((Math.random() * (this.maxCust-this.minCust))) + this.minCust);
    }
    return outputSales;
  },
  render: function() {
    var salesNumbers = this.generateSales();
    // var tableRow = document.createElement('tr');
    var tableRow = salesTable.insertRow(salesTable.rows);
    var locName = document.createElement('td');
    locName.textContent = this.location;
    tableRow.appendChild(locName);

    var salesTotal = 0;

    for(var i = 0; i < 15; i++) {
      var salesTableOutput = document.createElement('td');
      salesTableOutput.textContent = salesNumbers[i];
      tableRow.appendChild(salesTableOutput);

      salesTotal += salesNumbers[i];
    }

    var salesTableTotal = document.createElement('td');
    salesTableTotal.textContent = salesTotal;
    tableRow.appendChild(salesTableTotal);


    salesTable.appendChild(tableRow);
  }
};

var locFour = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSales: 2.3,
  generateSales: function() {
    var outputSales = [];
    for(var i = 0; i < 15; i++){
      outputSales.push(Math.floor((Math.random() * (this.maxCust-this.minCust))) + this.minCust);
    }
    return outputSales;
  },
  render: function() {
    var salesNumbers = this.generateSales();
    // var tableRow = document.createElement('tr');
    var tableRow = salesTable.insertRow(salesTable.rows);
    var locName = document.createElement('td');
    locName.textContent = this.location;
    tableRow.appendChild(locName);

    var salesTotal = 0;

    for(var i = 0; i < 15; i++) {
      var salesTableOutput = document.createElement('td');
      salesTableOutput.textContent = salesNumbers[i];
      tableRow.appendChild(salesTableOutput);

      salesTotal += salesNumbers[i];
    }

    var salesTableTotal = document.createElement('td');
    salesTableTotal.textContent = salesTotal;
    tableRow.appendChild(salesTableTotal);


    salesTable.appendChild(tableRow);
  }
};

var locFive = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSales: 4.6,
  generateSales: function() {
    var outputSales = [];
    for(var i = 0; i < 15; i++){
      outputSales.push(Math.floor((Math.random() * (this.maxCust-this.minCust))) + this.minCust);
    }
    return outputSales;
  },
  render: function() {
    var salesNumbers = this.generateSales();
    // var tableRow = document.createElement('tr');
    var tableRow = salesTable.insertRow(salesTable.rows);
    var locName = document.createElement('td');
    locName.textContent = this.location;
    tableRow.appendChild(locName);

    var salesTotal = 0;

    for(var i = 0; i < 15; i++) {
      var salesTableOutput = document.createElement('td');
      salesTableOutput.textContent = salesNumbers[i];
      tableRow.appendChild(salesTableOutput);

      salesTotal += salesNumbers[i];
    }

    var salesTableTotal = document.createElement('td');
    salesTableTotal.textContent = salesTotal;
    tableRow.appendChild(salesTableTotal);


    salesTable.appendChild(tableRow);
  }
};

locOne.render();
locTwo.render();
locThree.render();
locFour.render();
locFive.render();
