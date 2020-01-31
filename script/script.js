require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapGallery",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/widgets/Sketch"
  ], function(Map, MapView, BasemapGallery, FeatureLayer, GraphicsLayer, Sketch) {

    var graphicsLayer = new GraphicsLayer();

    var map = new Map({
        basemap: "topo-vector",
        layers: [graphicsLayer]
    });
    
    var view = new MapView({
      container: "map",
      map: map,
      center: [51.027,34.027],
      zoom: 6
    });

    var basemapGallery = new BasemapGallery({
      view: view,
      source: {
        portal: {
          url: "http://www.arcgis.com",
          useVectorBasemaps: true, 
        },
      } 
    });

    var sketch = new Sketch({
        view: view,
        layer: graphicsLayer
      });

    view.ui.add(sketch, "top-right");

    var trailheadsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/County_Boundaries/FeatureServer"
      });

    map.add(trailheadsLayer);
    
    view.ui.add(basemapGallery, "top-right"); 
  });

