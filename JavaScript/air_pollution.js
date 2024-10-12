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
    `<h1>Global Air Quality Visualisation</h1>
     <p>Data based on various cities around the world</p>`;
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

var map2Div = document.createElement('div');
map2Div.id = 'map2';
map2Div.className = 'viz';
topRow.appendChild(map2Div);

// Create a container for the heatmap and scatter plot
var bottomRow = document.createElement('div');
bottomRow.id = 'bottom-row';
document.body.appendChild(bottomRow);

// Add a div for the heatmap to the bottom row
var map3Div = document.createElement('div');
map3Div.id = 'map3';
map3Div.className = 'viz';
bottomRow.appendChild(map3Div);

// Add a div for the scatter plot to the bottom row
var map4Div = document.createElement('div');
map4Div.id = 'map4';
map4Div.className = 'viz';
bottomRow.appendChild(map4Div);

// Create a new row for the additional two visualizations
var additionalRow = document.createElement('div');
additionalRow.id = 'additional-row';
document.body.appendChild(additionalRow);

// Add a div for the fifth visualization
var map5Div = document.createElement('div');
map5Div.id = 'map5';
map5Div.className = 'viz';
additionalRow.appendChild(map5Div);

// Add a div for the sixth visualization
var map6Div = document.createElement('div');
map6Div.id = 'map6';
map6Div.className = 'viz';
additionalRow.appendChild(map6Div);

// Function to create a circular button and append it below the visualization container
function addButtonBelowViz(vizId, message) {
    var vizDiv = document.getElementById(vizId);
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    var button = document.createElement('button');
    button.className = 'circle-button';
    button.innerHTML = 'i';
    button.onclick = function() {
        showCard(message);  // 调用弹出卡片函数
    };
    buttonContainer.appendChild(button);
    vizDiv.parentNode.insertBefore(buttonContainer, vizDiv.nextSibling);  // 在每个容器的下方插入按钮
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
    closeButton.onclick = function() {
        document.body.removeChild(cardOverlay);  // Close the card by removing the overlay
    };

    // Append close button and card to overlay
    card.appendChild(closeButton);
    cardOverlay.appendChild(card);
    document.body.appendChild(cardOverlay);  // Append the overlay to the body
}

// Add buttons to all visualizations with a specific message
addButtonBelowViz('map', 'This is a map visualization showing global air quality.');
addButtonBelowViz('map2', 'This is a bubble chart visualization.');
addButtonBelowViz('map3', 'This is a heatmap visualization.');
addButtonBelowViz('map4', 'This is a scatter plot visualization.');
addButtonBelowViz('map5', 'This is the fifth visualization.');
addButtonBelowViz('map6', 'This is the sixth visualization.');

// Import JSON configuration files for static visualizations
var vg_1 = "Json/1.json";
var vg_2 = "Json/2.json";
var vg_3 = "Json/3.json";
var vg_4 = "Json/4.json";
var vg_5 = "Json/5.json";
var vg_6 = "Json/6.json";

// Embed the original map with adjusted size (static)
vegaEmbed("#map", vg_1, {width: 500, height: 400}).then(function(result) {
}).catch(console.error);

// Embed the AQI bubble plot with adjusted size (static)
vegaEmbed("#map2", vg_2, {width: 600, height: 500}).then(function(result) {
}).catch(console.error);

// Embed the heatmap with adjusted size (static)
vegaEmbed("#map3", vg_3, {width: 600, height: 500}).then(function(result) {
}).catch(console.error);

// Embed the scatter plot with adjusted size (static)
vegaEmbed("#map4", vg_4, {width: 600, height: 500}).then(function(result) {
}).catch(console.error);

// Embed the fifth visualization (static)
vegaEmbed("#map5", vg_5, {width: 600, height: 500}).then(function(result) {
}).catch(console.error);

// Embed the sixth visualization (static)
vegaEmbed("#map6", vg_6, {width: 600, height: 500}).then(function(result) {
}).catch(console.error);
