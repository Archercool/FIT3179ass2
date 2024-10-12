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
     <p>Multi-dimensional display of air pollution in various countries, including the distribution and changing trends of ozone and AQI values</p>
     <p>Data source: https://www.kaggle.com/datasets/hasibalmuzdadid/global-air-pollution-dataset?resource=download</p>`;
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
addButtonBelowViz('map', 'As can be seen in the figure, the Hazardous category has the most data points and the highest AQI value, indicating that in the figure, air pollution has reached extreme levels in many areas. As the AQI value increases, the scatter points gradually increase, reflecting the trend of worsening air quality. The scatter points in the low AQI value categories (good and moderate) are small and scarce, while those in the high AQI value categories (hazardous and very unhealthy) are large and numerous, indicating that air pollution is more common. The data shows that the air quality in many areas is poor, especially in the "hazardous" category, where air pollution has reached extremely dangerous levels, while there are fewer areas with good air quality.');
addButtonBelowViz('map2', 'The Republic of Korea has the highest average AQI value, close to 450, which is significantly higher than the other countries. This indicates that Korea has the most serious air pollution among these countries. Bahrain, Mauritania, and Pakistan have relatively high AQI values, ranging from about 150 to 200. These countries also have poor air quality, but the pollution level is slightly lower than Korea. Several other countries have average AQI values ​​close to 150, namely the United Arab Emirates, Aruba, Kuwait, Qatar, India, and Senegal. The air pollution situation in these countries cannot be ignored. Korea ranks first with a much higher level of air pollution than other countries. Although the air quality of other countries is also poor, their AQI values ​​are relatively close, ranging from 150 to 200, indicating that the air pollution situation in these countries is similar.');
addButtonBelowViz('map3', 'Argentina has a minimum AQI value of nearly 30, making it one of the least polluted countries among all the countries. Uruguay and Bhutan follow closely behind, with AQI values ​​slightly lower than Argentina, at around 27. Seychelles, Papua New Guinea, and Bolivia all have AQI values ​​between 24 and 26, indicating relatively good air quality. Other countries with low AQI values ​​include Iceland, Maldives, Solomon Islands, and Palau, which have AQI values ​​between 18 and 22, indicating that the air pollution in these countries is very slight. The size of the bubbles in the figure represents the size of the AQI values ​​of each country, with larger bubbles indicating higher AQI values ​​and smaller bubbles indicating lower AQI values. Overall, the AQI values ​​of these countries are very small and the air quality is good. The air quality in these countries is relatively good, with very low AQI values, especially in Argentina, Uruguay, and Bhutan, where air pollution is very rare. The chart shows the countries with the best air quality in the world, indicating areas with excellent air quality, which are suitable for people who have high requirements for fresh air to live or travel.');
addButtonBelowViz('map4', 'The data shows obvious stratification. As the AQI category changes from Good to Very Unhealthy, the ozone AQI value gradually increases, reflecting the rising trend of air pollution levels. The Good and Moderate categories have lower AQI values. They are distributed in the lower area on the left. In comparison, the Unhealthy and Very Unhealthy categories have significantly higher AQI values ​​and are distributed in the higher area on the right. The ozone AQI values ​​in the Good category are the most concentrated, with a distribution range below 50, indicating that areas with good air quality are relatively stable and have low pollution levels. Ozone AQI values ​​in the Moderate category are mostly concentrated between 50 and 100, indicating that the air quality in these areas is acceptable, but there is still some slight ozone pollution. The ozone AQI values ​​in the Unhealthy for Sensitive Groups category are scattered, ranging from 100 to 150, indicating that air pollution in these areas is beginning to affect sensitive groups. The ozone AQI values ​​in the Unhealthy category are concentrated between 150 and 200, with a tight distribution, indicating that air pollution is more serious in these areas and has a wider impact. Ozone AQI values ​​in the Very Unhealthy category are distributed above 200, reflecting severe air pollution and significantly increased health risks.In the Good and Moderate categories, the dispersion of data points is low, indicating that the AQI values ​​in most areas are relatively concentrated and the air quality conditions are relatively consistent. In the Unhealthy and Very Unhealthy categories, the dispersion of data points is higher, indicating that the ozone AQI values ​​under these categories vary greatly, and the pollution levels in different areas fluctuate greatly.');
addButtonBelowViz('map5', 'The data shows obvious gradient changes. The UAE ozone AQI value is significantly higher than other countries, approaching 160, making it the most ozone-polluted country in the chart. The ozone AQI values ​​of Qatar, Kuwait and Bahrain are relatively close, all between 130 and 140, showing that the pollution levels between them are relatively consistent. Oman and Pakistan have higher ozone AQI values, ranging from 110 to 120. From Pakistan to Palestine, the distribution of ozone AQI values ​​in these countries is relatively close, concentrated between 100 and 120. This shows that the ozone pollution levels in these countries are relatively stable, with no significant differences like those in the highest countries. The ozone AQI values ​​of Saudi Arabia and Iraq are distributed around 100. Although they are lower than other countries, they are still at high pollution levels. From the highest in the United Arab Emirates to the lowest in Iraq, the gap in ozone AQI values ​​is about 60. The UAE ozone AQI value is significantly higher than that of other countries, while Iraq ozone AQI value is the lowest on the list, but it is still at a relatively high pollution level. The data distribution shows a relatively obvious gradient. The UAE has the most serious ozone pollution, and there is a clear gap with other countries. The distribution of ozone AQI values ​​in other countries is relatively concentrated between 100 and 140, showing that the pollution levels in these countries are relatively similar. Overall, ozone pollution in these countries is at a relatively high level, especially in the top four countries.');
addButtonBelowViz('map6', 'The Central African Republic has the highest ozone AQI value, which is around 12.8. Peru and Guatemala have AQI values ​​close to 12, indicating slightly lower levels of air pollution, but still in the higher group of the range. Honduras, Ecuador and South Sudan have ozone AQI values ​​between 10 and 11, indicating that these countries have good air quality and relatively low ozone pollution. Chile and Colombia have AQI values ​​of about 10, which are close to the lowest values. Bolivia and South Korea have the lowest ozone AQI values, at 9 and 8 respectively. The size of the scatter points is proportional to the AQI value. The larger the bubbles, the higher the AQI value. The lowest AQI values ​​(South Korea and Bolivia) correspond to smaller bubbles, while the Central African Republic, Peru and Guatemala have relatively larger bubbles. These countries have low ozone pollution levels, especially Bolivia and South Korea, which have the lowest AQI values, which means that ozone pollution is very mild. Overall, the ozone AQI value fluctuates between 9 and 12, with no obvious high value, indicating that the air quality in these countries is relatively stable and there is no significant ozone pollution problem.');

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
