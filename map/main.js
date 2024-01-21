// Create a map instance

var map = new ol.Map({
         target: 'map',
         layers: [
            new ol.layer.Tile({
               source: new ol.source.OSM()
            })
         ],
         view: new ol.View({
            center: ol.proj.fromLonLat([114.17155673584374, 22.315346042499876]),
            zoom: 16
         })
      });

      // Create a marker
      var marker = new ol.Feature({
         geometry: new ol.geom.Point(ol.proj.fromLonLat([114.17155673584374, 22.315346042499876]))
      });

      // Style the marker
      var markerStyle = new ol.style.Style({
         image: new ol.style.Icon({
            src: 'https://openlayers.org/en/latest/examples/data/icon.png'
         })
      });
      marker.setStyle(markerStyle);

      // Create a vector layer to hold the marker
      var vectorLayer = new ol.layer.Vector({
         source: new ol.source.Vector({
            features: [marker]
         })
      });

      // Add the vector layer to the map
      map.addLayer(vectorLayer);