
// Esse script consiste em a análise da chuva na região do Brasil da base de dados Chirps do périodo de 1981 a 2023 

var ic = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY")
var paises = ee.FeatureCollection("FAO/GAUL/2015/level0")

var br = paises.filter(ee.Filter.eq('ADM0_NAME','Brazil'));

var chuva_diaria = ic.filterDate('1981-01-01','2024-01-01');

var anos = ee.List.sequence(1981,2023);

var  calcule_chuva_anual= function (ano){
  var inicio = ee.Date.fromYMD(ano,1,1);
  var fim = inicio.advance(1,'year');
  return chuva_diaria.filterDate(inicio, fim).sum();
};

var chuvas_anuais = ee.ImageCollection(anos.map(calcule_chuva_anual));

var min_max = chuvas_anuais.mean().reduceRegion({
  reducer:ee.Reducer.minMax(), 
  geometry: br, 
  scale: 5000,
  bestEffort: true
  //, crs, crsTransform, bestEffort, maxPixels, tileScale)
});
print(min_max);
var pallete = [
  '000096','0064ff','00b4ff', '33db80', '9beb4a',
  'ffeb00', 'ffb300', 'ff6400', 'eb1e00', 'af0000'
].reverse();
var precipitationVis = {min: 150, max: 3800, palette:pallete};

Map.addLayer(chuvas_anuais.mean().clip(br),precipitationVis, 'Chuvas anuais');