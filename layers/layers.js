var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_media1621_feminicidio_cons_1 = new ol.format.GeoJSON();
var features_media1621_feminicidio_cons_1 = format_media1621_feminicidio_cons_1.readFeatures(json_media1621_feminicidio_cons_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_media1621_feminicidio_cons_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_media1621_feminicidio_cons_1.addFeatures(features_media1621_feminicidio_cons_1);
var lyr_media1621_feminicidio_cons_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_media1621_feminicidio_cons_1, 
                style: style_media1621_feminicidio_cons_1,
                interactive: true,
    title: 'media1621_feminicidio_cons<br />\
    <img src="styles/legend/media1621_feminicidio_cons_1_0.png" /> 0,6 - 2,2<br />\
    <img src="styles/legend/media1621_feminicidio_cons_1_1.png" /> 2,2 - 4,2<br />\
    <img src="styles/legend/media1621_feminicidio_cons_1_2.png" /> 4,2 - 8,2<br />\
    <img src="styles/legend/media1621_feminicidio_cons_1_3.png" /> 8,2 - 19,4<br />\
    <img src="styles/legend/media1621_feminicidio_cons_1_4.png" /> 19,4 - 71,8<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_media1621_feminicidio_cons_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_media1621_feminicidio_cons_1];
lyr_media1621_feminicidio_cons_1.set('fieldAliases', {'_uid_': '_uid_', 'codigo_ibge': 'codigo_ibge', 'tipificacao': 'tipificacao', 'avg': 'avg', });
lyr_media1621_feminicidio_cons_1.set('fieldImages', {'_uid_': 'TextEdit', 'codigo_ibge': 'TextEdit', 'tipificacao': 'TextEdit', 'avg': 'TextEdit', });
lyr_media1621_feminicidio_cons_1.set('fieldLabels', {'_uid_': 'no label', 'codigo_ibge': 'no label', 'tipificacao': 'no label', 'avg': 'no label', });
lyr_media1621_feminicidio_cons_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});