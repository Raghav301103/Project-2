// Get a reference to the DOM element where the results will be displayed
const drugInfoList = document.getElementById("drug-info");
const Raghav=document.getElementById("Eklavya");
fetch('https://api.fda.gov/drug/drugsfda.json?limit=100')
  .then(response => response.json())
  .then(data => {
    const drugs = data.results;
    // parse the JSON response into a JavaScript object

    const genericNames = drugs.map(drug => drug.products[0].brand_name);
    displayResults(genericNames); // Call the displayResults function with the array of generic names
    console.log(genericNames);
  })
// Define a function to display the results
function displayResults(results) {
  // Loop through the results and add each one to the list
  results.forEach(result => {
    const listItem = document.createElement("li");
    listItem.textContent = result;
    const Garima = document.createElement("button");
    Garima.innerText = "Click for detail";

    drugInfoList.appendChild(Garima);
    drugInfoList.appendChild(listItem);
    
    Garima.addEventListener("click", function (event) {
      event.preventDefault();
      displayDrugInfo(result);
      console.log("Garima is love")
    });
  });
}
function displayDrugInfo(genericName) {
  fetch(`https://api.fda.gov/drug/drugsfda.json?limit=1`)
    .then(response => response.json())
    .then(data => {
      const drug = data.results[0];
      // display information about the drug in the DOM, e.g.:
      const drugInfo = document.getElementById("Eklavya");
      drugInfo.innerText="productnumber="+data.application_number+ "  dosageform="+data.sponsor_name
       
      drugInfo.style.display="block";
    })
}