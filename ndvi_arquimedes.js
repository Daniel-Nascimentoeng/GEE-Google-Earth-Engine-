

/*
o script abaixo consite em realizar o ndvi(Normalized Difference Vegetation Index) 
na região do munícipio de Arquimedes - RO , no ano de 1995 e 2019 , assim permitindo
uma comparação tanto do crescimento urbano como agrônomo.
*/

var p =  (-63.03974568139228,-9.908519266910371)
var img = ee.Image('LANDSAT/LT05/C02/T1_L2/LT05_232067_19850713');
var visprams = { 
  min: 0,
  max: 3000,
  gamma: 1.5,
  bands : ['SR_B3','SR_B2','SR_B1']
  
};

// Função que a documentação do novo produto manda aplicar as imagens do Landsat C2
var applyScaleFactors = function(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  // var thermalBand = image.select('ST_B10').multiply(0.00341802).add(149.0);
  return image.addBands(opticalBands, null, true);
              // .addBands(thermalBand, null, true);
};
// Aplicando a função a imagem
var img_res = applyScaleFactors(img);

// Map.addLayer(img,visprams,'imagem landsat 5 1985');


print(img);

var ndvi_1985 =  img_res.normalizedDifference(['SR_B4','SR_B3']).rename('ndvi');

var ndvi_visparams = { min:0,max:1,palette:['red', 'yellow','green']};


Map.addLayer(ndvi_1985,ndvi_visparams,'ndvi_1985');
// Map.addLayer(img, {}, 'Landsat');

var img_2019 = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_232067_20190727');
var img_res19 = applyScaleFactors(img_2019);
var ndvi_2019 =  img_res19.normalizedDifference(['SR_B5','SR_B4']).rename('ndvi_19');

Map.addLayer(ndvi_2019,ndvi_visparams,'ndvi_19');
Map.centerObject(p,10);


