var estados = ee.FeatureCollection("FAO/GAUL/2015/level1")
var chirps = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY")
var mun = ee.FeatureCollection("FAO/GAUL/2015/level2")


/*
o script abaixo consite no mapeamento da chuva total em 2023 no estado da Paraíba , onde os dados utilizados são do CHIRPS e FAO 
*/

//definições de variáveis
var prec_anual = ee.ImageCollection(chirps).filter(ee.Filter.date('2023-01-01', '2024-01-01')).sum();//imagem global da chuva anual (2023)
// print(prec_anual);
var pb = estados.filter(ee.Filter.eq('ADM1_NAME','Paraiba'));
var mun_pb = mun.filter(ee.Filter.eq('ADM1_NAME','Paraiba'));//bônus municipios da PB
//definições da paleta utilizada
var palette = ['001137', '0aab1e', 'e7eb05', 'ff4a2d', 'e90000'].reverse();
//para definir o min e máx da região
var min_max= prec_anual.clip(pb).reduceRegion({
  reducer:ee.Reducer.minMax(),
  geometry:pb,
  scale: 90,
  bestEffort: true
  });
  
// print(min_max);
var viz= {min:334.7274,max:2219.9145,palette: palette};
var vismun = {
  fillColor: 'White',
  color: 'White',
  width: 0.01,
};
//Inserindo no Map
Map.addLayer(mun_pb,vismun,'Municípios PB');
Map.addLayer(prec_anual.clip(pb),viz,'Precipitação anual PB (2023)');
Map.setCenter(-36.78, -7.23, 7);
// OBS: O intuido da adição dos municípios foi para que o usuário possa ter noção junto a "Inspector" onde está localizado o pixel selecionado