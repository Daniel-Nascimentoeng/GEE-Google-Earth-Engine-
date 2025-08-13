# 💻🌍 GEE – Análises com Google Earth Engine

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Licença](https://img.shields.io/badge/licença-MIT-green)
![Feito por](https://img.shields.io/badge/feito%20por-Daniel%20Conceição-blue)

Este repositório reúne **scripts JavaScript** desenvolvidos na plataforma **Google Earth Engine (GEE)**, com foco em análises hidroambientais como **chuvas, NDVI e imagens Landsat**, aplicadas a regiões da Paraíba, Rio Grande do Sul, Rondônia e Ceará.

---

## 🎯 Objetivo

Executar análises espaciais na nuvem com GEE para estudar a dinâmica da vegetação e precipitação ao longo dos anos, utilizando índices espectrais e séries históricas, com aplicação na Engenharia Civil e Gestão de Recursos Hídricos.

---

## 🧾 Scripts disponíveis

📁 Diretório raiz contém os seguintes arquivos:

| Arquivo | Descrição |
|--------|-----------|
| `chuva_anual_pb_2023.js` | Precipitação anual da Paraíba em 2023 |
| `chuva_media_anual(1981_2023).js` | Média de chuvas entre 1981 e 2023 do Brasil |
| `chuva_fontura.js` | Análise de chuvas no Desastre do Rio Grande do Sul|
| `landsat_ce.js` | Análise com imagens Landsat no Ceará |
| `ndvi_arquimedes.js` | NDVI para comparação de uso do solo em Arquimedes - RO |

---

🌧️ Precipitação Anual da Paraíba em 2023

![](chuva_anual_pb.png)

🗺️ Descrição do Mapa

A imagem foi gerada sobre uma base de imagem de satélite (Google / NASA), com sobreposição de um raster climático que representa a distribuição espacial da precipitação.

Área mapeada: Estado da Paraíba

Fonte de dados: Estimativas derivadas de satélites de precipitação (CHIRPS)

Resolução espacial: Aproximadamente 5 a 10 km por pixel

Projeção: Web Mercator

🎨 Escala de Cores

Vermelho: Regiões de baixa precipitação anual (semiárido, Sertão e Cariri)

Amarelo a Verde: Regiões com maior precipitação (Zona da Mata e faixa litorânea)

📊 Padrão Espacial

O mapa evidencia um gradiente oeste-leste, típico da climatologia paraibana:

Interior: Baixos índices pluviométricos devido à continentalidade e barreiras orográficas

Litoral: Maiores volumes de chuva, influenciados pela proximidade com o oceano e ventos alísios

🌍 Aplicações

Estudos climáticos e hidrológicos

Planejamento hídrico no semiárido

Monitoramento ambiental e agrícola


---

🌧️ Precipitação Média no Brasil – ( 1981 - 2023 )

![](chuva_med_anual_br.png)

🗺️ Descrição do Mapa

A visualização foi construída sobre uma imagem de satélite (Google / NASA) com sobreposição de um raster climático representando a distribuição espacial da precipitação média.

Área mapeada: Brasil (escala nacional)

Fonte de dados: Estimativas derivadas de satélites de precipitação (CHIRPS)

Resolução espacial: Aproximadamente 5 a 10 km por pixel

Projeção: Web Mercator

🎨 Escala de Cores

Azul: Regiões com precipitação elevada (ex.: Amazônia ocidental)

Verde e Amarelo: Precipitação intermediária

Laranja e Vermelho: Regiões com menor precipitação acumulada no período (ex.: Nordeste e parte do Sudeste)

📊 Padrões Observados

O mapa evidencia contrastes marcantes entre as regiões brasileiras:

Amazônia: Alta pluviosidade devido à convecção intensa e proximidade com a Zona de Convergência Intertropical (ZCIT).

Centro-Oeste e Sudeste: Precipitação intermediária, influenciada por sistemas frontais e pela Zona de Convergência do Atlântico Sul (ZCAS).

Nordeste: Menores índices de precipitação, especialmente no interior, devido à influência do clima semiárido e da continentalidade.

🌍 Aplicações

Estudos de variabilidade e mudanças climáticas

Planejamento de recursos hídricos

Monitoramento agroclimático

Análise de risco para estiagens e enchentes

---

🌧️ Análise de Chuvas no Desastre do Rio Grande do Sul – 2024

![](chuva_rs.png)

 🔍 Uma análise espacial da precipitação associada ao evento extremo ocorrido no Rio Grande do Sul em 2024, responsável por inundações, enxurradas e deslizamentos. 
 O mapa foi produzido a partir de dados de sensoriamento remoto, permitindo visualizar a distribuição das chuvas que contribuíram para o desastre.

🗺️ Descrição do Mapa

O produto cartográfico foi gerado sobre uma base de imagem de satélite (Google / NASA), com sobreposição de um raster climático representando a intensidade da precipitação acumulada.

Área mapeada: Estado do Rio Grande do Sul, Brasil

Fonte de dados: Estimativas de satélites de precipitação (CHIRPS)

Resolução espacial: ~5 a 10 km por pixel

Projeção: Web Mercator

🎨 Escala de Cores

Vermelho e Laranja: Precipitação mais baixa em comparação ao restante do estado

Amarelo a Verde: Chuvas moderadas a intensas

Verde escuro a Preto: Áreas com acumulados extremos, onde os impactos foram mais severos

📊 Contexto Climático

O evento foi potencializado por:

Persistência de frentes frias na região

Umidade elevada transportada da Amazônia (Rios Voadores)

Configuração atmosférica favorável à formação de sistemas convectivos de mesoescala

Saturação prévia do solo devido a chuvas antecedendo o evento principal

🌍 Aplicações

Avaliação de áreas de maior risco

Planejamento de ações emergenciais e prevenção de desastres

Estudos hidrológicos e de drenagem urbana

Suporte para modelagem de cheias e deslizamentos

---



|  Análise do NDWI no Desastre do Rio Grande do Sul | 

![](ndwi_antes.png)
![](ndwi_depois.png)

| NDVI para comparação de uso do solo em Arquimedes - RO | 

![](NDVI_antigo.png)
![](NDVI_atual.png)


## 🚀 Como usar os scripts

### 🛰️ Via GEE Code Editor (JavaScript)
1. Acesse: [code.earthengine.google.com](https://code.earthengine.google.com)
2. Copie e cole o conteúdo do script `.js`
3. Execute o código e visualize os resultados no mapa

---

## 🔧 Tecnologias e Ferramentas

- Google Earth Engine – JavaScript API
- Imagens Landsat e CHIRPS (precipitação)
- Git & GitHub para versionamento
- (Opcional) Python API do GEE + QGIS

---

## 👨🏾‍💻 Autor

**Daniel Conceição do Nascimento**  
Graduando em Engenharia Civil – UFPB  
💼 Foco em Geotecnologias aplicadas à Hidrologia e Recursos Hídricos

🔗 [Portfólio no SpatialNode](https://www.spatialnode.net/danel_nasc)  
🔗 [GitHub](https://github.com/Daniel-Nascimentoeng)

---

