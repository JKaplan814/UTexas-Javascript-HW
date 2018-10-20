// from data.js
var tableData = data;

var submit = d3.select("#filter-btn")

// YOUR CODE HERE!
submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    var table = d3.select("table");

    table.attr("class", "table table-striped");

    var tbody = d3.select("tbody");

    $("#tbody").empty();

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });



});