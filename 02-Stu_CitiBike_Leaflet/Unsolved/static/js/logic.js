// let newYorkCoords = [40.73, -74.0059];
// let mapZoomLevel = 12;

// Creating the map object
let myMap = L.map("map", {
  center: [40.73, -74.0059],
  zoom: 12
});

// Create the createMap function.
function createMap(bikeStations) {

// Call the createMap function to create the map
createMap();

  // Create the tile layer that will be the background of our map.


  // Create a baseMaps object to hold the lightmap layer.


  // Create an overlayMaps object to hold the bikeStations layer.


  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// Create the createMarkers function.

  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
  
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
