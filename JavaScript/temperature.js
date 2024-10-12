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
addButtonBelowViz('map', 'This is the global temperature map.');
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
