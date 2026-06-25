var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Googlemaps_1 = new ol.layer.Tile({
            'title': 'Google maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Parroquiaspevol_2 = new ol.format.GeoJSON();
var features_Parroquiaspevol_2 = format_Parroquiaspevol_2.readFeatures(json_Parroquiaspevol_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parroquiaspevol_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parroquiaspevol_2.addFeatures(features_Parroquiaspevol_2);
var lyr_Parroquiaspevol_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parroquiaspevol_2, 
                style: style_Parroquiaspevol_2,
                popuplayertitle: 'Parroquias pe.vol',
                interactive: true,
    title: 'Parroquias pe.vol<br />\
    <img src="styles/legend/Parroquiaspevol_2_0.png" /> COTOPAXI<br />\
    <img src="styles/legend/Parroquiaspevol_2_1.png" /> NAPO<br />\
    <img src="styles/legend/Parroquiaspevol_2_2.png" /> PICHINCHA<br />\
    <img src="styles/legend/Parroquiaspevol_2_3.png" /> TUNGURAHUA<br />' });
var format_Peligroslahares_3 = new ol.format.GeoJSON();
var features_Peligroslahares_3 = format_Peligroslahares_3.readFeatures(json_Peligroslahares_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peligroslahares_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peligroslahares_3.addFeatures(features_Peligroslahares_3);
var lyr_Peligroslahares_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peligroslahares_3, 
                style: style_Peligroslahares_3,
                popuplayertitle: 'Peligros lahares',
                interactive: true,
                title: '<img src="styles/legend/Peligroslahares_3.png" /> Peligros lahares'
            });
var format_Peligrosproximales_4 = new ol.format.GeoJSON();
var features_Peligrosproximales_4 = format_Peligrosproximales_4.readFeatures(json_Peligrosproximales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peligrosproximales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peligrosproximales_4.addFeatures(features_Peligrosproximales_4);
var lyr_Peligrosproximales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peligrosproximales_4, 
                style: style_Peligrosproximales_4,
                popuplayertitle: 'Peligros proximales',
                interactive: true,
                title: '<img src="styles/legend/Peligrosproximales_4.png" /> Peligros proximales'
            });
var format_BUFFER_2KM_5 = new ol.format.GeoJSON();
var features_BUFFER_2KM_5 = format_BUFFER_2KM_5.readFeatures(json_BUFFER_2KM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER_2KM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER_2KM_5.addFeatures(features_BUFFER_2KM_5);
var lyr_BUFFER_2KM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER_2KM_5, 
                style: style_BUFFER_2KM_5,
                popuplayertitle: 'BUFFER_2KM',
                interactive: true,
    title: 'BUFFER_2KM<br />\
    <img src="styles/legend/BUFFER_2KM_5_0.png" /> INTRAMURAL<br />\
    <img src="styles/legend/BUFFER_2KM_5_1.png" /> EXTRAMURAL<br />' });
var format_BUFFER_1KM_6 = new ol.format.GeoJSON();
var features_BUFFER_1KM_6 = format_BUFFER_1KM_6.readFeatures(json_BUFFER_1KM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER_1KM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER_1KM_6.addFeatures(features_BUFFER_1KM_6);
var lyr_BUFFER_1KM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER_1KM_6, 
                style: style_BUFFER_1KM_6,
                popuplayertitle: 'BUFFER_1KM',
                interactive: true,
    title: 'BUFFER_1KM<br />\
    <img src="styles/legend/BUFFER_1KM_6_0.png" /> INTRAMURAL<br />\
    <img src="styles/legend/BUFFER_1KM_6_1.png" /> EXTRAMURAL<br />' });
var format_BUFFER_500M_7 = new ol.format.GeoJSON();
var features_BUFFER_500M_7 = format_BUFFER_500M_7.readFeatures(json_BUFFER_500M_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER_500M_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER_500M_7.addFeatures(features_BUFFER_500M_7);
var lyr_BUFFER_500M_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER_500M_7, 
                style: style_BUFFER_500M_7,
                popuplayertitle: 'BUFFER_500M',
                interactive: true,
    title: 'BUFFER_500M<br />\
    <img src="styles/legend/BUFFER_500M_7_0.png" /> INTRAMURAL<br />\
    <img src="styles/legend/BUFFER_500M_7_1.png" /> EXTRAMURAL<br />' });
var format_Provincias_8 = new ol.format.GeoJSON();
var features_Provincias_8 = format_Provincias_8.readFeatures(json_Provincias_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_8.addFeatures(features_Provincias_8);
var lyr_Provincias_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincias_8, 
                style: style_Provincias_8,
                popuplayertitle: 'Provincias',
                interactive: true,
                title: '<img src="styles/legend/Provincias_8.png" /> Provincias'
            });
var group_UnidadesdeAtencin = new ol.layer.Group({
                                layers: [lyr_BUFFER_2KM_5,lyr_BUFFER_1KM_6,lyr_BUFFER_500M_7,],
                                fold: 'open',
                                title: 'Unidades de Atención'});
var group_Peligrovolcnico = new ol.layer.Group({
                                layers: [lyr_Peligroslahares_3,lyr_Peligrosproximales_4,],
                                fold: 'open',
                                title: 'Peligro volcánico'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Googlemaps_1.setVisible(false);lyr_Parroquiaspevol_2.setVisible(true);lyr_Peligroslahares_3.setVisible(true);lyr_Peligrosproximales_4.setVisible(true);lyr_BUFFER_2KM_5.setVisible(false);lyr_BUFFER_1KM_6.setVisible(false);lyr_BUFFER_500M_7.setVisible(true);lyr_Provincias_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Googlemaps_1,lyr_Parroquiaspevol_2,group_Peligrovolcnico,group_UnidadesdeAtencin,lyr_Provincias_8];
lyr_Parroquiaspevol_2.set('fieldAliases', {'DPA_PARROQ': 'DPA_PARROQ', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'pel_vol': 'pel_vol', });
lyr_Peligroslahares_3.set('fieldAliases', {'nombre': 'nombre', });
lyr_Peligrosproximales_4.set('fieldAliases', {'nombre': 'nombre', });
lyr_BUFFER_2KM_5.set('fieldAliases', {'zon_plan': 'zon_plan', 'dis_sen': 'dis_sen', 'uni_des': 'uni_des', 'dpa_despro': 'dpa_despro', 'dpa_prov': 'dpa_prov', 'dpa_descan': 'dpa_descan', 'dpa_can': 'dpa_can', 'dpa_despar': 'dpa_despar', 'dpa_par': 'dpa_par', 'nom_cc': 'nom_cc', 'cod_cc': 'cod_cc', 'region': 'region', 'co_siimdh': 'co_siimdh', 'nombre': 'nombre', 'servicio': 'servicio', 'mod': 'mod', 'mod_abv': 'mod_abv', 'dir': 'dir', 'ref': 'ref', 'tipo_admin': 'tipo_admin', 'cooperante': 'cooperante', 'tipo': 'tipo', 'hombre': 'hombre', 'mujer': 'mujer', 'total': 'total', 'area': 'area', 'asis_prom': 'asis_prom', 'asistencia': 'asistencia', 'x': 'x', 'y': 'y', 'long': 'long', 'lat': 'lat', 'link_maps': 'link_maps', 'pvol_inter': 'pvol_inter', 'pvol_b500m': 'pvol_b500m', 'pvol_b1km': 'pvol_b1km', 'pvol_2km': 'pvol_2km', 'parro_pvol': 'parro_pvol', });
lyr_BUFFER_1KM_6.set('fieldAliases', {'zon_plan': 'zon_plan', 'dis_sen': 'dis_sen', 'uni_des': 'uni_des', 'dpa_despro': 'dpa_despro', 'dpa_prov': 'dpa_prov', 'dpa_descan': 'dpa_descan', 'dpa_can': 'dpa_can', 'dpa_despar': 'dpa_despar', 'dpa_par': 'dpa_par', 'nom_cc': 'nom_cc', 'cod_cc': 'cod_cc', 'region': 'region', 'co_siimdh': 'co_siimdh', 'nombre': 'nombre', 'servicio': 'servicio', 'mod': 'mod', 'mod_abv': 'mod_abv', 'dir': 'dir', 'ref': 'ref', 'tipo_admin': 'tipo_admin', 'cooperante': 'cooperante', 'tipo': 'tipo', 'hombre': 'hombre', 'mujer': 'mujer', 'total': 'total', 'area': 'area', 'asis_prom': 'asis_prom', 'asistencia': 'asistencia', 'x': 'x', 'y': 'y', 'long': 'long', 'lat': 'lat', 'link_maps': 'link_maps', 'pvol_inter': 'pvol_inter', 'pvol_b500m': 'pvol_b500m', 'pvol_b1km': 'pvol_b1km', 'pvol_2km': 'pvol_2km', 'parro_pvol': 'parro_pvol', });
lyr_BUFFER_500M_7.set('fieldAliases', {'zon_plan': 'zon_plan', 'dis_sen': 'dis_sen', 'uni_des': 'uni_des', 'dpa_despro': 'dpa_despro', 'dpa_prov': 'dpa_prov', 'dpa_descan': 'dpa_descan', 'dpa_can': 'dpa_can', 'dpa_despar': 'dpa_despar', 'dpa_par': 'dpa_par', 'nom_cc': 'nom_cc', 'cod_cc': 'cod_cc', 'region': 'region', 'co_siimdh': 'co_siimdh', 'nombre': 'nombre', 'servicio': 'servicio', 'mod': 'mod', 'mod_abv': 'mod_abv', 'dir': 'dir', 'ref': 'ref', 'tipo_admin': 'tipo_admin', 'cooperante': 'cooperante', 'tipo': 'tipo', 'hombre': 'hombre', 'mujer': 'mujer', 'total': 'total', 'area': 'area', 'asis_prom': 'asis_prom', 'asistencia': 'asistencia', 'x': 'x', 'y': 'y', 'long': 'long', 'lat': 'lat', 'link_maps': 'link_maps', 'pvol_inter': 'pvol_inter', 'pvol_b500m': 'pvol_b500m', 'pvol_b1km': 'pvol_b1km', 'pvol_2km': 'pvol_2km', 'parro_pvol': 'parro_pvol', });
lyr_Provincias_8.set('fieldAliases', {'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'n': 'n', });
lyr_Parroquiaspevol_2.set('fieldImages', {'DPA_PARROQ': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'pel_vol': 'TextEdit', });
lyr_Peligroslahares_3.set('fieldImages', {'nombre': 'TextEdit', });
lyr_Peligrosproximales_4.set('fieldImages', {'nombre': 'TextEdit', });
lyr_BUFFER_2KM_5.set('fieldImages', {'zon_plan': 'TextEdit', 'dis_sen': 'TextEdit', 'uni_des': 'TextEdit', 'dpa_despro': 'TextEdit', 'dpa_prov': 'TextEdit', 'dpa_descan': 'TextEdit', 'dpa_can': 'TextEdit', 'dpa_despar': 'TextEdit', 'dpa_par': 'TextEdit', 'nom_cc': 'TextEdit', 'cod_cc': 'TextEdit', 'region': 'TextEdit', 'co_siimdh': 'TextEdit', 'nombre': 'TextEdit', 'servicio': 'TextEdit', 'mod': 'TextEdit', 'mod_abv': 'TextEdit', 'dir': 'TextEdit', 'ref': 'TextEdit', 'tipo_admin': 'TextEdit', 'cooperante': 'TextEdit', 'tipo': 'TextEdit', 'hombre': 'TextEdit', 'mujer': 'TextEdit', 'total': 'TextEdit', 'area': 'TextEdit', 'asis_prom': 'TextEdit', 'asistencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'long': 'TextEdit', 'lat': 'TextEdit', 'link_maps': 'TextEdit', 'pvol_inter': 'TextEdit', 'pvol_b500m': 'TextEdit', 'pvol_b1km': 'TextEdit', 'pvol_2km': 'TextEdit', 'parro_pvol': 'TextEdit', });
lyr_BUFFER_1KM_6.set('fieldImages', {'zon_plan': 'TextEdit', 'dis_sen': 'TextEdit', 'uni_des': 'TextEdit', 'dpa_despro': 'TextEdit', 'dpa_prov': 'TextEdit', 'dpa_descan': 'TextEdit', 'dpa_can': 'TextEdit', 'dpa_despar': 'TextEdit', 'dpa_par': 'TextEdit', 'nom_cc': 'TextEdit', 'cod_cc': 'TextEdit', 'region': 'TextEdit', 'co_siimdh': 'TextEdit', 'nombre': 'TextEdit', 'servicio': 'TextEdit', 'mod': 'TextEdit', 'mod_abv': 'TextEdit', 'dir': 'TextEdit', 'ref': 'TextEdit', 'tipo_admin': 'TextEdit', 'cooperante': 'TextEdit', 'tipo': 'TextEdit', 'hombre': 'TextEdit', 'mujer': 'TextEdit', 'total': 'TextEdit', 'area': 'TextEdit', 'asis_prom': 'TextEdit', 'asistencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'long': 'TextEdit', 'lat': 'TextEdit', 'link_maps': 'TextEdit', 'pvol_inter': 'TextEdit', 'pvol_b500m': 'TextEdit', 'pvol_b1km': 'TextEdit', 'pvol_2km': 'TextEdit', 'parro_pvol': 'TextEdit', });
lyr_BUFFER_500M_7.set('fieldImages', {'zon_plan': 'TextEdit', 'dis_sen': 'TextEdit', 'uni_des': 'TextEdit', 'dpa_despro': 'TextEdit', 'dpa_prov': 'TextEdit', 'dpa_descan': 'TextEdit', 'dpa_can': 'TextEdit', 'dpa_despar': 'TextEdit', 'dpa_par': 'TextEdit', 'nom_cc': 'TextEdit', 'cod_cc': 'TextEdit', 'region': 'TextEdit', 'co_siimdh': 'TextEdit', 'nombre': 'TextEdit', 'servicio': 'TextEdit', 'mod': 'TextEdit', 'mod_abv': 'TextEdit', 'dir': 'TextEdit', 'ref': 'TextEdit', 'tipo_admin': 'TextEdit', 'cooperante': 'TextEdit', 'tipo': 'TextEdit', 'hombre': 'TextEdit', 'mujer': 'TextEdit', 'total': 'TextEdit', 'area': 'TextEdit', 'asis_prom': 'TextEdit', 'asistencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'long': 'TextEdit', 'lat': 'TextEdit', 'link_maps': 'TextEdit', 'pvol_inter': 'TextEdit', 'pvol_b500m': 'TextEdit', 'pvol_b1km': 'TextEdit', 'pvol_2km': 'TextEdit', 'parro_pvol': 'TextEdit', });
lyr_Provincias_8.set('fieldImages', {'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'n': 'TextEdit', });
lyr_Parroquiaspevol_2.set('fieldLabels', {'DPA_PARROQ': 'inline label - always visible', 'DPA_DESPAR': 'inline label - always visible', 'DPA_CANTON': 'inline label - always visible', 'DPA_DESCAN': 'inline label - always visible', 'DPA_PROVIN': 'inline label - always visible', 'DPA_DESPRO': 'inline label - always visible', 'pel_vol': 'inline label - always visible', });
lyr_Peligroslahares_3.set('fieldLabels', {'nombre': 'inline label - always visible', });
lyr_Peligrosproximales_4.set('fieldLabels', {'nombre': 'inline label - always visible', });
lyr_BUFFER_2KM_5.set('fieldLabels', {'zon_plan': 'inline label - always visible', 'dis_sen': 'inline label - always visible', 'uni_des': 'inline label - always visible', 'dpa_despro': 'inline label - always visible', 'dpa_prov': 'inline label - always visible', 'dpa_descan': 'inline label - always visible', 'dpa_can': 'inline label - always visible', 'dpa_despar': 'inline label - always visible', 'dpa_par': 'inline label - always visible', 'nom_cc': 'inline label - always visible', 'cod_cc': 'inline label - always visible', 'region': 'inline label - always visible', 'co_siimdh': 'inline label - always visible', 'nombre': 'inline label - always visible', 'servicio': 'inline label - always visible', 'mod': 'inline label - always visible', 'mod_abv': 'inline label - always visible', 'dir': 'inline label - always visible', 'ref': 'inline label - always visible', 'tipo_admin': 'inline label - always visible', 'cooperante': 'inline label - always visible', 'tipo': 'inline label - always visible', 'hombre': 'inline label - always visible', 'mujer': 'inline label - always visible', 'total': 'inline label - always visible', 'area': 'inline label - always visible', 'asis_prom': 'inline label - always visible', 'asistencia': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'long': 'inline label - always visible', 'lat': 'inline label - always visible', 'link_maps': 'inline label - always visible', 'pvol_inter': 'inline label - always visible', 'pvol_b500m': 'inline label - always visible', 'pvol_b1km': 'inline label - always visible', 'pvol_2km': 'inline label - always visible', 'parro_pvol': 'inline label - always visible', });
lyr_BUFFER_1KM_6.set('fieldLabels', {'zon_plan': 'inline label - always visible', 'dis_sen': 'inline label - always visible', 'uni_des': 'inline label - always visible', 'dpa_despro': 'inline label - always visible', 'dpa_prov': 'inline label - always visible', 'dpa_descan': 'inline label - always visible', 'dpa_can': 'inline label - always visible', 'dpa_despar': 'inline label - always visible', 'dpa_par': 'inline label - always visible', 'nom_cc': 'inline label - always visible', 'cod_cc': 'inline label - always visible', 'region': 'inline label - always visible', 'co_siimdh': 'inline label - always visible', 'nombre': 'inline label - always visible', 'servicio': 'inline label - always visible', 'mod': 'inline label - always visible', 'mod_abv': 'inline label - always visible', 'dir': 'inline label - always visible', 'ref': 'inline label - always visible', 'tipo_admin': 'inline label - always visible', 'cooperante': 'inline label - always visible', 'tipo': 'inline label - always visible', 'hombre': 'inline label - always visible', 'mujer': 'inline label - always visible', 'total': 'inline label - always visible', 'area': 'inline label - always visible', 'asis_prom': 'inline label - always visible', 'asistencia': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'long': 'inline label - always visible', 'lat': 'inline label - always visible', 'link_maps': 'inline label - always visible', 'pvol_inter': 'inline label - always visible', 'pvol_b500m': 'inline label - always visible', 'pvol_b1km': 'inline label - always visible', 'pvol_2km': 'inline label - always visible', 'parro_pvol': 'inline label - always visible', });
lyr_BUFFER_500M_7.set('fieldLabels', {'zon_plan': 'inline label - always visible', 'dis_sen': 'inline label - always visible', 'uni_des': 'inline label - always visible', 'dpa_despro': 'inline label - always visible', 'dpa_prov': 'inline label - always visible', 'dpa_descan': 'inline label - always visible', 'dpa_can': 'inline label - always visible', 'dpa_despar': 'inline label - always visible', 'dpa_par': 'inline label - always visible', 'nom_cc': 'inline label - always visible', 'cod_cc': 'inline label - always visible', 'region': 'inline label - always visible', 'co_siimdh': 'inline label - always visible', 'nombre': 'inline label - always visible', 'servicio': 'inline label - always visible', 'mod': 'inline label - always visible', 'mod_abv': 'inline label - always visible', 'dir': 'inline label - always visible', 'ref': 'inline label - always visible', 'tipo_admin': 'inline label - always visible', 'cooperante': 'inline label - always visible', 'tipo': 'inline label - always visible', 'hombre': 'inline label - always visible', 'mujer': 'inline label - always visible', 'total': 'inline label - always visible', 'area': 'inline label - always visible', 'asis_prom': 'inline label - always visible', 'asistencia': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'long': 'inline label - always visible', 'lat': 'inline label - always visible', 'link_maps': 'inline label - always visible', 'pvol_inter': 'inline label - always visible', 'pvol_b500m': 'inline label - always visible', 'pvol_b1km': 'inline label - always visible', 'pvol_2km': 'inline label - always visible', 'parro_pvol': 'inline label - always visible', });
lyr_Provincias_8.set('fieldLabels', {'DPA_PROVIN': 'inline label - always visible', 'DPA_DESPRO': 'inline label - always visible', 'n': 'hidden field', });
lyr_Provincias_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});