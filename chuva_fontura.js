//definições IC
var estados=ee.FeatureCollection("FAO/GAUL/2015/level1")
var chirps=ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY")
var Fontura=Point (-52.35, -28.98)


//definições de variáveis
var prec_rs = chirps.filter(ee.Filter.date('2024-04-27', '2024-05-26')).sum();//imagem global da chuva anual (2023)
// print(prec_rs);
var rs = estados.filter(ee.Filter.eq('ADM1_NAME','Rio Grande Do Sul'));
// print(rs);
//definições da paleta utilizada
var palette = ['001137', '0aab1e', 'e7eb05', 'ff4a2d', 'e90000'].reverse();
//para definir o min e máx da região
var min_max= prec_rs.clip(rs).reduceRegion({
  reducer:ee.Reducer.minMax(),
  geometry:rs,
  scale: 90,
  bestEffort: true
  });
print(min_max);
var viz= {min: 80.53,max:1021.01,palette: palette};

//Inserindo no Map
Map.addLayer(prec_rs.clip(rs),viz,'Precipitação no Desastre do Rio Grande do Sul (2024)');
Map.setCenter(-51.912, -29.437, 5);

var chart = ui.Chart.image.seriesByRegion({
  imageCollection:ee.ImageCollection(chirps).filter(ee.Filter.date('2024-04-27', '2024-05-26')),
  regions: rs,
  reducer: ee.Reducer.max(),
  band: 'precipitation',
  scale: 2500,
  xProperty: 'system:time_start',
  seriesProperty: 'precipitation'
}).setOptions({
  title: 'Precipitacão no Rio Grande do Sul',
  hAxis: {title: 'data'},
  vAxis: {title: 'Precipitação (mm)'},
  colors: ['blue']
  
}).setChartType('ColumnChart');


print(chart);