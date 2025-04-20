var ls = ee.ImageCollection("LANDSAT/LC08/C02/T1_RT_TOA")
var estados = ee.FeatureCollection("FAO/GAUL/2015/level1")



// Visualização das imagens de Landsat 
var ce = estados.filter(ee.Filter.eq('ADM1_NAME','Ceara'));
var l8_roi = ls.filterBounds(ce);
print(l8_roi.size());

var color_viz = {min: 0.055, max: 0.423, bands: ['B6','B5','B2']};
var roidatel8 = l8_roi.filterDate('2020-01-01','2021-01-01');
print(roidatel8.size());
Map.addLayer(roidatel8.mean().clip(ce),color_viz,'landsat 8');