// Function to create a "Return to Homepage" button and add it to the top right corner of the page
function addReturnToHomeButton() {
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'home-button-container';  // Add a class for styling
    var homeButton = document.createElement('button');
    homeButton.className = 'home-button';
    homeButton.innerHTML = 'Homepage';

    // Define the action when the button is clicked
    homeButton.onclick = function() {
        window.location.href = 'index.html';  // Change this URL to your homepage URL
    };

    buttonContainer.appendChild(homeButton);
    document.body.appendChild(buttonContainer);  // Append the button to the body
}

// Call the function to add the button
addReturnToHomeButton();

// Add text content to the body
var textContent = document.createElement('div');
textContent.id = 'text-content';
textContent.innerHTML = 
    `<h1>Data Visualisation II</h1>
     <p>Aoran Li</p>`;
document.body.prepend(textContent);

// Create the top row for the first two visualizations (map and bubble plot)
var topRow = document.createElement('div');
topRow.id = 'top-row';
document.body.appendChild(topRow);

// Add two divs for the first two charts (Map and Bubble Plot)
var mapDiv = document.createElement('div');
mapDiv.id = 'map';
mapDiv.className = 'viz';
topRow.appendChild(mapDiv);

var bubblePlotDiv = document.createElement('div');
bubblePlotDiv.id = 'temperature-bubble-plot';
bubblePlotDiv.className = 'viz';
topRow.appendChild(bubblePlotDiv);

// Create a container for the heatmap and scatter plot
var bottomRow = document.createElement('div');
bottomRow.id = 'bottom-row';
document.body.appendChild(bottomRow);

// Add a div for the heatmap to the bottom row
var heatmapDiv = document.createElement('div');
heatmapDiv.id = 'heatmap';
heatmapDiv.className = 'viz';
bottomRow.appendChild(heatmapDiv);

// Add a div for the scatter plot to the bottom row
var scatterPlotDiv = document.createElement('div');
scatterPlotDiv.id = 'scatter-plot';
scatterPlotDiv.className = 'viz';
bottomRow.appendChild(scatterPlotDiv);

// Function to create a circular button and append it below the visualization container
function addButtonBelowViz(vizId, message) {
    var vizDiv = document.getElementById(vizId);
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    var button = document.createElement('button');
    button.className = 'circle-button';
    button.innerHTML = 'i';
    button.onclick = function() {
        showCard(message);  
    };
    buttonContainer.appendChild(button);
    vizDiv.parentNode.insertBefore(buttonContainer, vizDiv.nextSibling);  
}

// Function to display the card
function showCard(message) {
    // Create card overlay
    var cardOverlay = document.createElement('div');
    cardOverlay.className = 'card-overlay';

    // Create card element
    var card = document.createElement('div');
    card.className = 'card';

    // Add content to the card
    card.innerHTML = `<p>${message}</p>`;

    // Add close button to the card
    var closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = 'X';
    
    // Ensure the close button can remove the overlay
    closeButton.onclick = function() {
        document.body.removeChild(cardOverlay);  // This will remove the entire overlay, closing the card
    };

    // Append close button and card to overlay
    card.appendChild(closeButton);
    cardOverlay.appendChild(card);
    document.body.appendChild(cardOverlay);  // Append the overlay to the body
}

// Add buttons to all visualizations with a specific message
addButtonBelowViz('map', 'The color legend on the right shows that the temperature ranges from 0°C to 50°C, with the temperature color gradually transitioning from blue (low temperature) to red (high temperature). The size and color of the circles represent different temperature levels. Geographic distribution: The dots in the chart cover all parts of the world, and the temperature changes in different locations are obvious. The Middle East, North Africa and some countries near the Sahara Desert are red, indicating that the temperatures in these areas are between 40°C and 50°C, showing extreme high temperatures. The temperatures in parts of South America, Southeast Asia and Australia are relatively high, but are generally more uniform, mostly between 20°C and 30°C. The global temperature distribution is roughly in line with the expectation of seasonal changes, with high temperatures in tropical regions concentrated near the equator and temperate regions showing more moderate temperatures. It is worth noting that the temperatures in central Africa, the Indian subcontinent and the Middle East are particularly high, reflecting the hot weather in these regions in May.');
addButtonBelowViz('temperature-bubble-plot', 'This is the temperature bubble plot.');
addButtonBelowViz('heatmap', 'This is the temperature heatmap.');
addButtonBelowViz('scatter-plot', 'This is the wind scatter plot.');

// Import JSON configuration files for static visualizations
var vg_1 = "Json/map_country.vg.json";
var vg_2 = "Json/bubble_plot.json";
var vg_3 = "Json/heatmap.json";  // The new heatmap JSON file
var vg_4 = "Json/wind_scatter.json"; // Wind scatter plot JSON file

// Embed the original map with adjusted size (static)
vegaEmbed("#map", vg_1, {width: 700, height: 500}).then(function(result) {
    // Access the Vega view instance
}).catch(console.error);

// Embed the new temperature bubble plot with adjusted size (static)
vegaEmbed("#temperature-bubble-plot", vg_2, {width: 600, height: 500}).then(function(result) {
    // Access the Vega view instance
}).catch(console.error);

// Embed the new heatmap with adjusted size (static)
vegaEmbed("#heatmap", vg_3, {width: 600, height: 500}).then(function(result) {
    // Access the Vega view instance
}).catch(console.error);

// Embed the scatter plot for wind speed and direction (dynamic with search)
var windScatterView;
vegaEmbed("#scatter-plot", vg_4, {width: 600, height: 500}).then(function(result) {
    windScatterView = result.view;
}).catch(console.error);
