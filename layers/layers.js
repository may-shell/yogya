var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_hai2_1 = new ol.format.GeoJSON();
var features_hai2_1 = format_hai2_1.readFeatures(json_hai2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hai2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hai2_1.addFeatures(features_hai2_1);
var lyr_hai2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hai2_1, 
                style: style_hai2_1,
                popuplayertitle: 'hai 2',
                interactive: true,
    title: 'hai 2<br />\
    <img src="styles/legend/hai2_1_0.png" /> rendah (8-12 per km2)<br />\
    <img src="styles/legend/hai2_1_1.png" /> sedang<br />\
    <img src="styles/legend/hai2_1_2.png" /> tinggi<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_hai2_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_hai2_1];
lyr_hai2_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'join_No': 'join_No', 'join_Luas': 'Luas', 'join_Pendu': 'join_Pendu', 'join_Kepad': 'join_Kepad', 'join_Banji': 'join_Banji', 'join_Cuaca': 'join_Cuaca', 'join_Erups': 'join_Erups', 'join_Gelom': 'join_Gelom', 'join_Gel_1': 'join_Gel_1', 'join_Gempa': 'join_Gempa', 'join_Kebak': 'join_Kebak', 'join_Keker': 'join_Keker', 'join_Tanah': 'join_Tanah', });
lyr_hai2_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'Field': 'TextEdit', 'join_No': 'TextEdit', 'join_Luas': 'TextEdit', 'join_Pendu': 'TextEdit', 'join_Kepad': 'TextEdit', 'join_Banji': 'TextEdit', 'join_Cuaca': 'TextEdit', 'join_Erups': 'TextEdit', 'join_Gelom': 'TextEdit', 'join_Gel_1': 'TextEdit', 'join_Gempa': 'TextEdit', 'join_Kebak': 'TextEdit', 'join_Keker': 'TextEdit', 'join_Tanah': 'TextEdit', });
lyr_hai2_1.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'Field': 'no label', 'join_No': 'no label', 'join_Luas': 'no label', 'join_Pendu': 'no label', 'join_Kepad': 'no label', 'join_Banji': 'no label', 'join_Cuaca': 'no label', 'join_Erups': 'no label', 'join_Gelom': 'no label', 'join_Gel_1': 'no label', 'join_Gempa': 'no label', 'join_Kebak': 'no label', 'join_Keker': 'no label', 'join_Tanah': 'no label', });
lyr_hai2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});