// Get a reference to the DOM element where the results will be displayed
const drugInfoList = document.getElementById("drug-info");

// Define the API endpoint URL and query parameters
const apiUrl = "https://api.fda.gov/drug/drugsfda.json";
const apiParams = new URLSearchParams({
  count: "products.route.exact",
  limit: 10
});

// Define a function to display the results
function displayResults(results) {
  // Loop through the results and add each one to the list
  results.forEach(result => {
    const listItem = document.createElement("li");
    listItem.textContent = `${result.term}: ${result.count}`;
    drugInfoList.appendChild(listItem);
  });
}

// Make the API call and handle the response
fetch(`${apiUrl}?${apiParams}`)
  .then(response => response.json())
  .then(data => {
    const results = data.results;
    displayResults(results);
  })
  .catch(error => {
    console.log(error);
  });
