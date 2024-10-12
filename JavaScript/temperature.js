// visualization.js

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
bottomRow.appendChild(heatmapDiv);

// Add a div for the scatter plot to the bottom row
var scatterPlotDiv = document.createElement('div');
scatterPlotDiv.id = 'scatter-plot';
bottomRow.appendChild(scatterPlotDiv);

// Import JSON configuration files for static visualizations
var vg_1 = "map_country.vg.json";
var vg_2 = "bubble_plot.json";
var vg_3 = "heatmap.json";  // The new heatmap JSON file
var vg_4 = "wind_scatter.json"; // Wind scatter plot JSON file

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
