let nycMap;
nycMap = L.map("map");

// swap out styles from this gallery:
// https://leaflet-extras.github.io/leaflet-providers/preview/

L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
}).addTo(nycMap);

nycMap.setView([40.7130, -73.980], 11);

L.geoJSON(nyc).addTo(nycMap);

// adds some fill color to the map
L.geoJSON(nyc, {
    style: function(feature) {
        return {
            fillColor: '#009',
            fillOpacity: 0.1,
			weight: 6,
            color: '#fff'
        };
    }
}).addTo(nycMap);

//adds popup info to each neighborhood
L.geoJSON(nyc, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>Police Precinct #" + feature.properties.policePrecinct + "</h3><h4>Borough: " + feature.properties.borough + "</h4> <hr> <table cellspacing='0' cellpadding='0' border='0'><tr><td>&nbsp;</td><td><strong>'18</strong></td><td><strong>'19</strong></td><td><strong>'20</strong></td><td><strong>'21</strong></td><td><strong>'22</strong></td><td><strong>Total</strong></td></tr><tr><td class='t'><strong>Murder</strong></td><td>" + feature.properties.murder18 + "</td><td>" + feature.properties.murder19 + "</td><td>" + feature.properties.murder20 + "</td><td>" + feature.properties.murder21 + "</td><td>" + feature.properties.murder22 + "</td><td><strong>" + feature.properties.murderT + "</strong></td></tr><tr><td class='t'><strong>Rape</strong></td><td>" + feature.properties.rape18 + "</td><td>" + feature.properties.rape19 + "</td><td>" + feature.properties.rape20 + "</td><td>" + feature.properties.rape21 + "</td><td>" + feature.properties.rape22 + "</td><td><strong>" + feature.properties.rapeT + "</strong></td></tr><tr><td class='t'><strong>Robbery</strong></td><td>" + feature.properties.robbery18 + "</td><td>" + feature.properties.robbery19 + "</td><td>" + feature.properties.robbery20 + "</td><td>" + feature.properties.robbery21 + "</td><td>" + feature.properties.robbery22 + "</td><td><strong>" + feature.properties.robberyT + "</strong></td></tr><tr><td  class='t'><strong>Assault</strong></td><td>" + feature.properties.assault18 + "</td><td>" + feature.properties.assault19 + "</td><td>" + feature.properties.assault20 + "</td><td>" + feature.properties.assault21 + "</td><td>" + feature.properties.assault22 + "</td><td><strong>" + feature.properties.assaultT + "</strong></td></tr><tr><td  class='t'><strong>Burglary</strong></td><td>" + feature.properties.burglary18 + "</td><td>" + feature.properties.burglary19 + "</td><td>" + feature.properties.burglary20 + "</td><td>" + feature.properties.burglary21 + "</td><td>" + feature.properties.burglary22 + "</td><td><strong>" + feature.properties.burglaryT + "</strong></td></tr><tr><td class='t'><strong>G.&nbsp;Larceny</strong></td><td>" + feature.properties.larceny18 + "</td><td>" + feature.properties.larceny19 + "</td><td>" + feature.properties.larceny20 + "</td><td>" + feature.properties.larceny21 + "</td><td>" + feature.properties.larceny22 + "</td><td><strong>" + feature.properties.larcenyT + "</strong></td></tr><tr><td class='t'><strong>G.&nbsp;L.&nbsp;Auto</strong></td><td>" + feature.properties.auto18 + "</td><td>" + feature.properties.auto19 + "</td><td>" + feature.properties.auto20 + "</td><td>" + feature.properties.auto21 + "</td><td>" + feature.properties.auto22 + "</td><td><strong>" + feature.properties.autoT + "</strong></td></tr></table>");
    }
}).addTo(nycMap);



