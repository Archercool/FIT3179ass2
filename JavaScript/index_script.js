document.addEventListener("DOMContentLoaded", function() {
    const temperatureText = "The weather and temperature in recent years have shown obvious fluctuations and changes. The trend of global warming has caused the average temperature to rise year by year, and high temperature events in summer have become more frequent and extreme. In Australia, many cities have experienced record high temperatures, especially during the summer, when persistent heat waves have become the norm. Winter temperatures have also increased, with fewer cold days in many areas. At the same time, temperature fluctuations caused by climate change are making extreme weather events, such as heat waves and heavy rains, more pronounced. Overall, temperature trends are becoming increasingly extreme and unstable.";
    const pollutionText = "In recent years, the global air pollution problem has become increasingly serious, especially in some rapidly developing cities and industrial areas. Air pollution mainly comes from the burning of fossil fuels, industrial emissions, traffic exhaust and agricultural activities, resulting in large-scale emissions of harmful substances such as suspended particulate matter (PM2.5, PM10), nitrogen dioxide, and sulfur dioxide. Some countries in Asia and Africa are particularly severely affected because these regions have rapid industrialization and urbanization, while environmental governance measures are relatively lagging behind. Air pollution not only poses a threat to human health and causes respiratory and cardiovascular diseases, but also has a direct impact on climate change, such as exacerbating the greenhouse effect and the occurrence of extreme weather. In addition, studies in recent years have shown that air pollution is also associated with cognitive decline, depression and other problems, which has attracted widespread attention from governments and the public. Although some countries have made some progress in improving air quality through policy formulation and technological improvements, the global air pollution situation remains severe, and more international cooperation and innovation are urgently needed to meet this challenge.";

    function typeText(elementId, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                document.getElementById(elementId).innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    typeText("temperature-text", temperatureText, 2);
    typeText("pollution-text", pollutionText, 2);
});
