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
    `<h1>Global Temperature Data Visualisation</h1>
     <p>The interactive chart shows the distribution and change trend of temperature, wind speed and other data in various places from May to September 2024.</p>
     <p>Data source: https://www.kaggle.com/datasets/nelgiriyewithana/global-weather-repository</p>`;
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
addButtonBelowViz('temperature-bubble-plot', 'Bubble chart of global temperature. The color legend on the right side of the chart shows the temperature range, from blue below 0°C to dark red above 40°C. The distribution of temperatures is concentrated between 0°C and 40°C. The horizontal axis represents longitude, ranging from about -200 to 200, which covers geographical locations around the world. The vertical axis represents latitude, ranging from about -50 to 70, covering the area from the southern hemisphere to the northern hemisphere. The darker the color of the bubble, the higher the temperature, and the lighter the bubble color, the lower the temperature. The size of the bubble is also related to the temperature, with small bubbles representing lower temperatures and large bubbles representing high temperatures. The main high temperature areas are concentrated between 0° and 30° north latitude, especially close to the tropics and the Middle East in the northern hemisphere. The low temperature areas are mainly concentrated in high latitudes, such as areas above 50° north latitude. The high temperature in the northern hemisphere is mainly concentrated between 30° and 40° latitude, while the temperature in the southern hemisphere is relatively low, and the warm areas are mainly located in the tropics and near the equator. The temperature differences between different regions are obvious, reflecting the global distribution of seasonal temperature changes.');
addButtonBelowViz('heatmap', 'Heat map of global temperatures. The color bar on the right shows the temperature range, with blue indicating lower temperatures and red indicating higher temperatures. The temperature range is from -20°C to 40°C. The change in the shade of blue indicates the temperature range from low to high. Dark blue areas indicate extremely low temperatures (close to or below 0°C), while light red areas indicate relatively high temperatures. Regions located at mid- and low-latitudes (especially close to the equator) generally have higher temperatures, but from the figure, the temperatures do not reach the extremely high red areas. There are more obvious low temperature areas in some parts of the Northern Hemisphere, especially between 30° and 40°N, which show dark blue cold spots. In the Southern Hemisphere, the temperature is milder, mainly light blue, indicating the autumn climate in the Southern Hemisphere. The heat map shows the temperature differences between regions around the world in May. By comparing the colors, it is easy to see which regions are colder in this month and which regions have more moderate temperatures.');
addButtonBelowViz('scatter-plot', 'The distribution of the scattered points is relatively uniform, but we can see that larger wind speeds (larger circles) appear in places with latitudes close to the equator, indicating that the wind speeds in these areas are higher. Circles of different colors represent different wind directions. The chart provides wind speed data in multiple directions. We can intuitively understand the wind speed and direction of a certain location from the color and circle size. A "cityHighlight" search bar is provided at the bottom of the chart. We can highlight the wind speed data of a specific city by entering the city name. The wind speed scatter plot helps users understand the distribution of wind speed and wind direction in different regions of the world, especially they can intuitively see the changes in wind force at different longitudes and latitudes around the world. Through the combination of color and bubble size, we can easily identify trends and patterns in wind direction and wind speed.');

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
