/**
 * Created by toranzo on 11/01/2016.
 */
var map = L.map('map', {
    zoomControl: true, maxZoom: 17, minZoom: 10, Zoom: 15, 
    fullscreenControl: { pseudoFullscreen: false }
}).fitBounds([[21.6610729474, -82.9455969459], [21.9811843475, -82.4582417155]]);
var hash = new L.Hash(map);
var additional_attrib = '<a href="http://islaj.geocuba.cu/" title="Grupo de Desarrollo de Software"><img src="img/ico/geoc_25x12.png"> GEOCUBA</a>';
var feature_group = new L.featureGroup([]);
var route = new L.featureGroup([]);

// -------------------------------------------------------------------------------------

function basemap() {
    var attr = 'Mapa y Datos de: <a href="https://cig.geocuba.cu/">OSM</a>';
    // https://tile.openstreetmap.org/{z}/{x}/{y}.png
    // https://mapas.geocuba.cu/osm_tiles/{z}/{x}/{y}.png
    // img/maps/{z}/{x}/{y}.jpg
    return L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        opacity: 1,
        attribution: additional_attrib
    });
}

basemap().addTo(map);

//------------------------------------------------------
// place

// function pop_place(feature, layer) {
//             var popupContent = '<table><tr><th scope="row">Nombre:</th><td>' + 
//             Autolinker.link(String(feature.properties['nombre'])) + '</td></tr><tr><th scope="row">Teléfono:</th><td>' + 
//             Autolinker.link(String(feature.properties['telef1'])) + '</td></tr><tr><th scope="row">Teléfono:</th><td>' + 
//             Autolinker.link(String(feature.properties['telef2'])) + '</td></tr><tr><th scope="row">Dirección:&nbsp;</th><td>' + 
//             Autolinker.link(String(feature.properties['direccion'])) + '</td></tr></table>';
//             layer.bindPopup(popupContent);
//         }
 
// function show_place(feature, latlng) {
//         return L.marker(latlng, {
//             icon: L.AwesomeMarkers.icon({icon: 'factory', prefix: 'mdi', markerColor: 'blue', iconColor: 'white' }) }).addTo(map);
//     }

// var exp_placeJSON = new L.geoJson(exp_place,{
//     onEachFeature: pop_place,
//     pointToLayer: show_place
// });

// feature_group.addLayer(exp_placeJSON);
// feature_group.addTo(map);
//-------------------------------------------------------
var horario = L.control.sidebar('horario', {
    closeButton: true,
    title: 'Horario',
    position: 'left'
});
map.addControl(horario);

var ayuda = L.control.sidebar('ayuda', {
    closeButton: true,
    title: 'Ayuda',
    position: 'left'
});
map.addControl(ayuda);

var contacto = L.control.sidebar('contactos', {
    closeButton: true,
    title: 'Contactos',
    position: 'left'
});
map.addControl(contacto);

map.on('click', function() {
	horario.hide();
    ayuda.hide();
    contacto.hide();
});
// <i class="mdi mdi-bus fa-lg "></i>
L.easyButton('<i class="mdi mdi-information-variant fa-lg "></i>', function(btn, map) {	
    ayuda.hide();
	contacto.hide();
    horario.setContent('<table ><tr scope="row"><td colspan=3><h2 style="text-align: center;">Horario de las Rutas de los Ómnibus Públicos</h2></td></tr><tr scope="row"><td colspan=3><b>201 Gerona - Patria - Resplandor - 13 de Marzo</b></td></tr><tr><td>6:00 a.m. </br></br></td><td>&nbsp;</td><td>1:00 p.m. </br>5:20 p.m. </br></td></tr><tr scope="row"><td colspan=3><b>202 Local Gerona</b></td></tr><tr><td>5:20 a.m. </br>6:30 a.m. </br>8:40 a.m. </br>10:30 a.m. </br>12:00 m. </br></br></br></td><td>&nbsp;</td><td>1:30 p.m. </br>3:00 p.m. </br>4:30 p.m. </br>6:00 p.m. </br>7:30 p.m. </br>9:00 p.m. </br>10:30 p.m. </br></td></tr><tr scope="row"><td colspan=3><b>203 Gerona - Codornices - Aeropuerto</b></td></tr><tr><td>6:30 a.m. </br></td><td>&nbsp;</td><td>5:10 p.m. </br></td></tr><tr><td colspan=3><b>204 Gerona - Chacón - Comunidad 53 - Playa</b></td></tr><tr><td>5:10 a.m. </br>6:10 a.m. </br> 7:20 a.m. </br>10:00 a.m. </br>11:20 a.m. </br></td><td>&nbsp;</td><td>1:00 p.m. </br>4:10 p.m. </br>5:30 p.m. </br> 7:00 p.m. </br>10:00 p.m. </br></td></tr><tr><td colspan=3><b>205 Local La Fé</b></td></tr><tr><td>5:20 a.m. </br>7:20 a.m. </br>8:50 a.m. </br>10:50 a.m. </br>&nbsp; </td><td>&nbsp;</td><td>12:50 p.m. </br>2:50 p.m. </br>4:50 p.m. </br>6:50 p.m. </br>7:50 p.m. </br></td></tr><tr><td colspan=3><b>431 Gerona - La Fé</b></td></tr><tr><td>5:00 a.m. Sale de La Fé</br>5:10 a.m. </br>5:45 a.m. Regresa de La Fé</br>6:00 a.m. Camello </br>7:30 a.m. </br>8:30 a.m. Camello </br>11:00 a.m. </br></br></br></td><td>&nbsp;</td><td>1:00 p.m. Camello </br>2:30 p.m. Daewoo </br>3:30 p.m. Camello </br>4:10 p.m. </br>4:30 p.m. Daewoo </br>5:20 p.m. Camello </br>6:20 p.m. </br>7:20 p.m. Camello </br>9:20 p.m. </br>11:30 p.m. </br></td></tr><tr><td colspan=3><b>432 Gerona - Aeropuerto - La Fé - No está en Operaciones</b></td></tr><tr><td>0:00 a.m. </td><td>&nbsp;</td><td>0:00 p.m. </br></td></tr><tr><td colspan=3><b>433 La Fé - La Reforma - La Isabel </b></td></tr><tr><td>4:50 a.m. (La Isabel) </br>6:30 a.m. </br>9:00 a.m. (La Isabel) </br>11:00 a.m. </br></br></br></td><td>&nbsp;</td><td>1:00 p.m. (La Isabel) </br>3:00 p.m. </br>5:00 p.m. (La Isabel) </br>7:00 p.m. </br>8:30 p.m. </br>10:30 p.m. (La Isabel) </br></td></tr><tr><td colspan=3><b>435 La Fé - La Tumbita - No está en Operaciones </b></td></tr><tr><td>0:00 a.m. </td><td>&nbsp;</td><td>0:00 p.m. </br></td></tr><tr><td colspan=3><b>436 Gerona - Tumbita - La Fé </b></td></tr><tr><td>5:10 a.m.</br>6:40 a.m. La Fé-Gerona</br>8:00 a.m. </br>11:30 a.m.</br></td><td>&nbsp;</td><td>3:00 p.m. </br>6:00 p.m. </br>10:00 p.m. </br></br></td></tr><tr><td colspan=3><b>437 La Fé - Demajagua</b></td></tr><tr><td>6:10 a.m. </br></br></td><td>&nbsp;</td><td>12:30 p.m. </br>4:10 p.m. </td></tr><tr><td colspan=3><b>438 Gerona - Playa Bibijagua - No está en Operaciones</b></td></tr><tr><td>0:00 a.m. </td><td>&nbsp;</td><td>0:00 p.m. </br></td></tr><tr><td colspan=3><b>439 Gerona - Demajagua - Atanagildo</b></td></tr><tr><td>5:20 a.m.</br>5:50 a.m. Camello </br>6:00 a.m. Daewoo </br>7:30 a.m. Comunidad 37</br>10:30 a.m. Camello </br>11:30 a.m. Daewoo </br></br></br></td><td>&nbsp;</td><td>12:30 p.m. Camello </br>1:30 p.m. Camello Comunidad 37 </br>3:30 p.m. Camello</br>4:30 p.m. Daewoo </br>5:30 p.m.</br>6:30 p.m.</br>8:00 p.m. Daewoo Comunidad 37 </br>11:30 p.m. </td></tr><tr><td colspan=3><b>440 Gerona - Argelia - Colony </b></td></tr><tr><td>4:30 a.m. Colony </br>5:00 a.m. Argelia - Gerona </br>6:00 a.m. Gerona - Victoria </br>7:00 a.m. Colony </br>9:30 a.m.</br></br></br></td><td>&nbsp;</td><td>12:20 p.m. Colony </br>1:00 p.m. Hasta la Victoria </br>3:10 p.m. Colony </br>4:10 p.m. No Regresa </br>5:20 p.m. </br>7:30 p.m. Colony </br>10:20 p.m. Colony </br></td></tr><tr><td colspan=3><b>441 Gerona - Colony - No está en Operaciones </b></td></tr><tr><td>0:00 a.m. </td><td>&nbsp;</td><td>0:00 p.m. </br></td></tr><tr><td colspan=3><b>442 Gerona - Patria - Comunidades 5 y 44 - El Tronco </b></td></tr><tr><td>5:30 a.m.</br>10:00 a.m.</br></br></td><td>&nbsp;</td><td>2:00 p.m.</br>5:10 p.m.</br>7:20 p.m.</br></td></tr><tr><td colspan=3><b>701 Gerona - Camino 29 - Libertad - Argelia </b></td></tr><tr><td>5:20 a.m. </td><td>&nbsp;</td><td>4:30 p.m. </br></td></tr><tr><td colspan=3><b>702 Gerona - Ciro Redondo - Comunidades 27 y 31 </b></td></tr><tr><td>5:30 a.m.</br>7:30 a.m.</br>11:00 a.m.</br></br></td><td>&nbsp;</td><td>1:00 p.m.</br>4:00 p.m.</br>6:00 p.m.</br>10:00 p.m.</br></td></tr><tr><td colspan=3><b>703 Gerona - Camino 29 - Entronque de la Melvis - La Mina de Oro </b></td></tr><tr><td>5:30 a.m.</br></td><td>&nbsp;</td><td>4:30 p.m.</br></td></tr><tr><td colspan=3><b>704 Gerona - Cocodrilo</b></td></tr><tr><td>6:00 a.m.</br></td><td>&nbsp;</td><td>4:30 p.m.</br></td></tr><tr><td colspan=3><b>707 La Fé - Mella Cítrico - Comunidades 41 y 49 </b></td></tr><tr><td>5:00 a.m. </br>6:30 a.m. </br>11:00 a.m. </br></br></td><td>&nbsp;</td><td>1:30 p.m. </br>4:10 p.m. </br>6:20 p.m. </br>9:30 p.m. </br></td></tr><tr><td colspan=3><b>734 La Fé - Mella Vaquero</b></td></tr><tr><td>5:00 a.m. </br>6:40 a.m. Cayo Piedra </br>11:00 a.m. </br></br></br></td><td>&nbsp;</td><td>12:40 p.m. Cayo Piedra </br>3:00 p.m. </br>5:00 p.m. Cayo Piedra </br>6:40 p.m. </br>8:30 p.m. Cayo Piedra </br>10:30 p.m. Cayo Piedra </br></td></tr><tr><td colspan=3><b>Catamarán</b></td></tr><tr><td colspan=3>Realiza transportaciones al arribo de la embarcación.</td></tr></table></br>&nbsp;</br><div><img width=25 src="img/ico/pdf.png"><a class="pdf" target="_blank" href="img/pdf/Horario_de_las_Rutas_2018.pdf"> Descarga<span> Horario de las Rutas de los Ómnibus Públicos.pdf</span></br>&nbsp;</br></a></div>');
    horario.show();
}).addTo(map);
 
L.easyButton('<i class="mdi mdi-help fa-lg "></i>', function(btn, map) {
	horario.hide();
    contacto.hide();
    ayuda.setContent('<h2 style="text-align: center;">Ayuda</h2><img src="img/ico/help-2.png"></br></br>1. Muestra el listado de las Rutas Animadas.</br>2. Botón de Animar las Rutas por Paradas.</br>3. Icono que se activará una vez que la Ruta sea Animada mostrando la Parada y Número de la Ruta.</br>4. Línea de las Rutas Animadas en el mapa geográfico, representada en azul.</br>5. Nombre de la Parada que se activará una vez que el icono de la parada sea activada.</br>6. Línea de las Rutas representadas en el mapa geográfico.</br>7. Ayuda de la Página Web.</br>8. Contacto de Autores.</br>&nbsp;</br><div><img width=25 src="img/ico/pdf.png">Descarga: <a class="pdf" target="_blank" href="img/pdf/Manual_de_Usuario_1.0.pdf"><span> Manual de Usuario 1.0.pdf</span></br>&nbsp;</br></a></div>');
    ayuda.show();
}).addTo(map);

L.easyButton('<i class="mdi mdi-contacts fa-lg "></i>', function(btn, map) {
	horario.hide();
    ayuda.hide();
    contacto.setContent('<table style="text-align: center; font: 16px Arial,Helvetica,sans-serif;" width=326><tr><td><h2>Contáctenos</h2></td></tr><tr><td><img class="aligncenter" src="img/ico/geo136x59.png"></td></tr><tr><td>Jefe de Equipo de Desarrollo de Software</td></tr><tr><td>Ing. Guillermo Toranzo Pérez</td></tr><tr><td>Email: <a href="mailto:guilletp87@gmail.com">guilletp87@gmail.com</a></td></tr><tr><td>Número de Celular: <a>+5358885007</a></td></tr><tr><td>&nbsp;</td></tr><tr><td>Especialista B Programador en SIG</td></tr><tr><td>Ing. Gilberto Fransecena Pérez</td></tr><tr><td><a href="mailto:fransecena@gmail.com">fransecena@gmail.com</a></td></tr><tr><td>&nbsp;</td></tr><tr><td>Especialista B Programador en SIG</td></tr><tr><td>Yenis</td></tr><tr><td><a href="mailto:123@gmail.com">123@gmail.com</a></td></tr><tr><td>&nbsp;</td></tr><tr><td></td></tr><tr><td>Nueva Gerona, MEIJ</td></tr><tr><td> </td></tr><tr><td> </td></tr><tr><td> </td></tr><tr><td>&nbsp;</td></tr></table></a>');
    contacto.show();
}).addTo(map);

function pop_Ruta(feature, layer) {
    var popupContent = '<table><tr><th scope="row">Ruta:</th><td>' + Autolinker.link(String(feature.properties['Layer'])) + '</td></tr></table>';
    layer.bindPopup(popupContent);
}

function doStyle() {
    return {
        weight: 4.3,
        dashArray: '',
        opacity: 1.0,
        fillOpacity: 1.0
    };
}

var exp_436rJSON = new L.geoJson(exp_436R, {
    onEachFeature: pop_Ruta,
    style: doStyle,
    color: '#3cf536'
});
feature_group.addLayer(exp_436rJSON);

var exp_436iJSON = new L.geoJson(exp_436I, {
    onEachFeature: pop_Ruta,
    style: doStyle,
    color: '#7d64a1'
});
feature_group.addLayer(exp_436iJSON);

var exp_431rJSON = new L.geoJson(exp_431R, {
    onEachFeature: pop_Ruta,
    style: doStyle,
    color: '#9d8d65'
});
feature_group.addLayer(exp_431rJSON);

var exp_431iJSON = new L.geoJson(exp_431I, {
    onEachFeature: pop_Ruta,
    style: doStyle,
    color: '#475a82'
});
feature_group.addLayer(exp_431iJSON);

var exp_204rJSON = new L.geoJson(exp_204R, {
    onEachFeature: pop_Ruta,
    style: doStyle,
    color: '#a17685'
});
feature_group.addLayer(exp_204rJSON);

var exp_204iJSON = new L.geoJson(exp_204I, {
    onEachFeature: pop_Ruta,
    style: doStyle,
    color: '#c7a568'
});
feature_group.addLayer(exp_204iJSON);

var exp_205RJSON = new L.geoJson(exp_205R, {
    onEachFeature: pop_Ruta,
    color: '#b7eeab',
    style: doStyle
});
feature_group.addLayer(exp_205RJSON);

var exp_205IJSON = new L.geoJson(exp_205I, {
    onEachFeature: pop_Ruta,
    color: '#c72cad',
    style: doStyle
});
feature_group.addLayer(exp_205IJSON);

var exp_203RJSON = new L.geoJson(exp_203R, {
    onEachFeature: pop_Ruta,
    color: '#543c90',
    style: doStyle
});
feature_group.addLayer(exp_203RJSON);

var exp_203IJSON = new L.geoJson(exp_203I, {
    onEachFeature: pop_Ruta,
    color: '#885411',
    style: doStyle
});
feature_group.addLayer(exp_203IJSON);


var exp_202RJSON = new L.geoJson(exp_202R, {
    onEachFeature: pop_Ruta,
    color: '#18d31f',
    style: doStyle
});

feature_group.addLayer(exp_202RJSON);

var exp_202IJSON = new L.geoJson(exp_202I, {
    onEachFeature: pop_Ruta,
    color: '#b530b7',
    style: doStyle
});

feature_group.addLayer(exp_202IJSON);

var exp_201RJSON = new L.geoJson(exp_201R, {
    onEachFeature: pop_Ruta,
    color: '#56fbe5',
    style: doStyle
});

feature_group.addLayer(exp_201RJSON);

var exp_201IJSON = new L.geoJson(exp_201I, {
    onEachFeature: pop_Ruta,
    style: doStyle,
    color: '#c01b24'
});
feature_group.addLayer(exp_201IJSON);

var exp_435RJSON = new L.geoJson(exp_435R, {
    onEachFeature: pop_Ruta,
    color: '#3b45d4',
    style: doStyle
});
feature_group.addLayer(exp_435RJSON);

var exp_435IJSON = new L.geoJson(exp_435I, {
    onEachFeature: pop_Ruta,
    color: '#9e6290',
    style: doStyle
});
feature_group.addLayer(exp_435IJSON);

var exp_433RJSON = new L.geoJson(exp_433R, {
    onEachFeature: pop_Ruta,
    color: '#cddd9c',
    style: doStyle
});
feature_group.addLayer(exp_433RJSON);

var exp_433IJSON = new L.geoJson(exp_433I, {
    onEachFeature: pop_Ruta,
    color: '#4d9e68',
    style: doStyle
});
feature_group.addLayer(exp_433IJSON);

var exp_432RJSON = new L.geoJson(exp_432R, {
    onEachFeature: pop_Ruta,
    color: '#e98596',
    style: doStyle
});
feature_group.addLayer(exp_432RJSON);

var exp_432IJSON = new L.geoJson(exp_432I, {
    onEachFeature: pop_Ruta,
    color: '#8107cc',
    style: doStyle
});
feature_group.addLayer(exp_432IJSON);

var exp_441RJSON = new L.geoJson(exp_441R, {
    onEachFeature: pop_Ruta,
    color: '#230b81',
    style: doStyle
});
feature_group.addLayer(exp_441RJSON);

var exp_441IJSON = new L.geoJson(exp_441I, {
    onEachFeature: pop_Ruta,
    color: '#844c38',
    style: doStyle
});
feature_group.addLayer(exp_441IJSON);

var exp_440RJSON = new L.geoJson(exp_440R, {
    onEachFeature: pop_Ruta,
    color: '#4425a9',
    style: doStyle
});
feature_group.addLayer(exp_440RJSON);

var exp_440IJSON = new L.geoJson(exp_440I, {
    onEachFeature: pop_Ruta,
    color: '#998a27',
    style: doStyle
});
feature_group.addLayer(exp_440IJSON);

var exp_439RJSON = new L.geoJson(exp_439R, {
    onEachFeature: pop_Ruta,
    color: '#9f6e62',
    style: doStyle
});
feature_group.addLayer(exp_439RJSON);

var exp_439IJSON = new L.geoJson(exp_439I, {
    onEachFeature: pop_Ruta,
    color: '#7e2181',
    style: doStyle
});

feature_group.addLayer(exp_439IJSON);

var exp_438RJSON = new L.geoJson(exp_438R, {
    onEachFeature: pop_Ruta,
    color: '#c8b84b',
    style: doStyle
});
feature_group.addLayer(exp_438RJSON);

var exp_438IJSON = new L.geoJson(exp_438I, {
    onEachFeature: pop_Ruta,
    color: '#e78c99',
    style: doStyle
});
feature_group.addLayer(exp_438IJSON);

var exp_437RJSON = new L.geoJson(exp_437R, {
    onEachFeature: pop_Ruta,
    color: '#b79ee3',
    style: doStyle
});
feature_group.addLayer(exp_437RJSON);

var exp_437IJSON = new L.geoJson(exp_437I, {
    onEachFeature: pop_Ruta,
    color: '#dd6174',
    style: doStyle
});
feature_group.addLayer(exp_437IJSON);

var exp_CatamaranRJSON = new L.geoJson(exp_CatamaranR, {
    onEachFeature: pop_Ruta,
    color: '#4b8d43',
    style: doStyle
});
feature_group.addLayer(exp_CatamaranRJSON);

var exp_CatamaranIJSON = new L.geoJson(exp_CatamaranI, {
    onEachFeature: pop_Ruta,
    color: '#891d69',
    style: doStyle
});
feature_group.addLayer(exp_CatamaranIJSON);

var exp_734RJSON = new L.geoJson(exp_734R, {
    onEachFeature: pop_Ruta,
    color: '#95c8be',
    style: doStyle
});
feature_group.addLayer(exp_734RJSON);

var exp_734IJSON = new L.geoJson(exp_734I, {
    onEachFeature: pop_Ruta,
    color: '#92374b',
    style: doStyle
});
feature_group.addLayer(exp_734IJSON);

var exp_707RJSON = new L.geoJson(exp_707R, {
    onEachFeature: pop_Ruta,
    color: '#b47355',
    style: doStyle
});
feature_group.addLayer(exp_707RJSON);

var exp_707IJSON = new L.geoJson(exp_707I, {
    onEachFeature: pop_Ruta,
    color: '#851227',
    style: doStyle
});
feature_group.addLayer(exp_707IJSON);

var exp_704RJSON = new L.geoJson(exp_704R, {
    onEachFeature: pop_Ruta,
    color: '#3233a3',
    style: doStyle
});
feature_group.addLayer(exp_704RJSON);

var exp_704IJSON = new L.geoJson(exp_704I, {
    onEachFeature: pop_Ruta,
    color: '#618d63',
    style: doStyle
});
feature_group.addLayer(exp_704IJSON);

var exp_703RJSON = new L.geoJson(exp_703R, {
    onEachFeature: pop_Ruta,
    color: '#27c19d',
    style: doStyle
});
feature_group.addLayer(exp_703RJSON);

var exp_703IJSON = new L.geoJson(exp_703I, {
    onEachFeature: pop_Ruta,
    color: '#4f8547',
    style: doStyle
});
feature_group.addLayer(exp_703IJSON);

var exp_702RJSON = new L.geoJson(exp_702R, {
    onEachFeature: pop_Ruta,
    color: '#312a8a',
    style: doStyle
});
feature_group.addLayer(exp_702RJSON);

var exp_702IJSON = new L.geoJson(exp_702I, {
    onEachFeature: pop_Ruta,
    color: '#16873f',
    style: doStyle
});
feature_group.addLayer(exp_702IJSON);

var exp_701RJSON = new L.geoJson(exp_701R, {
    onEachFeature: pop_Ruta,
    color: '#710cfe',
    style: doStyle
});
feature_group.addLayer(exp_701RJSON);

var exp_701IJSON = new L.geoJson(exp_701I, {
    onEachFeature: pop_Ruta,
    color: '#4453c5',
    style: doStyle
});
feature_group.addLayer(exp_701IJSON);
feature_group.addTo(map);
function animar() {
    var LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'leaflet/images/marker-shadow.png',
            iconSize: [25, 41],
            shadowSize: [41, 41],
            iconAnchor: [12, 41],
            popupAnchor: [-1, -34]
        }
    });
    switch (document.forms[0].rutas.value)
    {
        case "436I":
            ruta(exp_436iJSON, exp_436I, exp_436IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-436.png'}), nparadas.P_436I);
            break;
        case "436R":
            ruta(exp_436rJSON, exp_436R, exp_436RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-436.png'}), nparadas.P_436R);
            break;
        case "204I":
            ruta(exp_204iJSON, exp_204I, exp_204IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-204.png'}), nparadas.P_204I);
            break;
        case "204R":
            ruta(exp_204rJSON, exp_204R, exp_204RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-204.png'}), nparadas.P_204R);
            break;
        case "431I":
            ruta(exp_431iJSON, exp_431I, exp_431IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-431.png'}), nparadas.P_431I);
            break;
        case "431R":
            ruta(exp_431rJSON, exp_431R, exp_431RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-431.png'}), nparadas.P_431R);
            break;
        case "201I":
            ruta(exp_201IJSON, exp_201I, exp_201IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-201.png'}), nparadas.P_201I);
            break;
        case "201R":
            ruta(exp_201RJSON, exp_201R, exp_201RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-201.png'}), nparadas.P_201R);
            break;
        case "202I":
            ruta(exp_202IJSON, exp_202I, exp_202IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-202.png'}), nparadas.P_202I);
            break;
        case "202R":
            ruta(exp_202RJSON, exp_202R, exp_202RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-202.png'}), nparadas.P_202R);
            break;
        case "203I":
            ruta(exp_203IJSON, exp_203I, exp_203IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-203.png'}), nparadas.P_203I);
            break;
        case "203R":
            ruta(exp_203RJSON, exp_203R, exp_203RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-203.png'}), nparadas.P_203R);
            break;
        case "205I":
            ruta(exp_205IJSON, exp_205I, exp_205IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-205.png'}), nparadas.P_205I);
            break;
        case "205R":
            ruta(exp_205RJSON, exp_205R, exp_205RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-205.png'}), nparadas.P_205R);
            break;
        case "432I":
            ruta(exp_432IJSON, exp_432I, exp_432IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-432.png'}), nparadas.P_432I);
            break;
        case "432R":
            ruta(exp_432RJSON, exp_432R, exp_432RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-432.png'}), nparadas.P_432R);
            break;
        case "433I":
            ruta(exp_433IJSON, exp_433I, exp_433IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-433.png'}), nparadas.P_433I);
            break;
        case "433R":
            ruta(exp_433RJSON, exp_433R, exp_433RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-433.png'}), nparadas.P_433R);
            break;
        case "435I":
            ruta(exp_435IJSON, exp_435I, exp_435IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-435.png'}), nparadas.P_435I);
            break;
        case "435R":
            ruta(exp_435RJSON, exp_435R, exp_435RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-435.png'}), nparadas.P_435R);
            break;
        case "437I":
            ruta(exp_437IJSON, exp_437I, exp_437IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-437.png'}), nparadas.P_437I);
            break;
        case "437R":
            ruta(exp_437RJSON, exp_437R, exp_437RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-437.png'}), nparadas.P_437R);
            break;
        case "438I":
            ruta(exp_438IJSON, exp_438I, exp_438IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-438.png'}), nparadas.P_438I);
            break;
        case "438R":
            ruta(exp_438RJSON, exp_438R, exp_438RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-438.png'}), nparadas.P_438R);
            break;
        case "439I":
            ruta(exp_439IJSON, exp_439I, exp_439IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-439.png'}), nparadas.P_439I);
            break;
        case "439R":
            ruta(exp_439RJSON, exp_439R, exp_439RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-439.png'}), nparadas.P_439R);
            break;
        case "440I":
            ruta(exp_440IJSON, exp_440I, exp_440IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-440.png'}), nparadas.P_440I);
            break;
        case "440R":
            ruta(exp_440RJSON, exp_440R, exp_440RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-440.png'}), nparadas.P_440R);
            break;
        case "441I":
            ruta(exp_441IJSON, exp_441I, exp_441IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-441.png'}), nparadas.P_441I);
            break;
        case "441R":
            ruta(exp_441RJSON, exp_441R, exp_441RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-441.png'}), nparadas.P_441R);
            break;
        case "701I":
            ruta(exp_701IJSON, exp_701I, exp_701IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-701.png'}), nparadas.P_701I);
            break;
        case "701R":
            ruta(exp_701RJSON, exp_701R, exp_701RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-701.png'}), nparadas.P_701R);
            break;
        case "702I":
            ruta(exp_702IJSON, exp_702I, exp_702IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-702.png'}), nparadas.P_702I);
            break;
        case "702R":
            ruta(exp_702RJSON, exp_702R, exp_702RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-702.png'}), nparadas.P_702R);
            break;
        case "703I":
            ruta(exp_703IJSON, exp_703I, exp_703IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-703.png'}), nparadas.P_703I);
            break;
        case "703R":
            ruta(exp_703RJSON, exp_703R, exp_703RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-703.png'}), nparadas.P_703R);
            break;
        case "704I":
            ruta(exp_704IJSON, exp_704I, exp_704IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-704.png'}), nparadas.P_704I);
            break;
        case "704R":
            ruta(exp_704RJSON, exp_704R, exp_704RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-704.png'}), nparadas.P_704R);
            break;
        case "707I":
            ruta(exp_707IJSON, exp_707I, exp_707IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-707.png'}), nparadas.P_707I);
            break;
        case "707R":
            ruta(exp_707RJSON, exp_707R, exp_707RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-707.png'}), nparadas.P_707R);
            break;
        case "734I":
            ruta(exp_734IJSON, exp_734I, exp_734IP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-734.png'}), nparadas.P_734I);
            break;
        case "734R":
            ruta(exp_734RJSON, exp_734R, exp_734RP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-734.png'}), nparadas.P_734R);
            break;
        case "CatamaranI":
            ruta(exp_CatamaranIJSON, exp_CatamaranI, exp_CatamaranIP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-Kat.png'}), nparadas.P_CATI);
            break;
        case "CatamaranR":
            ruta(exp_CatamaranRJSON, exp_CatamaranR, exp_CatamaranRP, new LeafIcon({iconUrl: 'leaflet/images/marker-icon-Kat.png'}), nparadas.P_CATR);
            break;
        default:
            alert("Seleccione una ruta");
    }
    ;
}
function ruta(recorrido, rec, paradas, icon, np) {
    map.removeLayer(route);
    route = new L.featureGroup([]);
    var list = [];
    for (var i = 0, len = rec.features[0].geometry.coordinates.length; i < len; i++) {
        for (var j = 0, lenj = paradas.features[0].geometry.coordinates.length; j < lenj; j++) {
            if (rec.features[0].geometry.coordinates[i][1] + "/" + rec.features[0].geometry.coordinates[i][0] === paradas.features[0].geometry.coordinates[j][1] + "/" + paradas.features[0].geometry.coordinates[j][0]) {
                list.push(new L.LatLng(rec.features[0].geometry.coordinates[i][1], rec.features[0].geometry.coordinates[i][0]));
                if (list.length !== 1) {
                    route.addLayer(L.polyline(list, {color: 'blue', weight: 7}));
                    list = [];
                }
                route.addLayer(L.marker(new L.LatLng(rec.features[0].geometry.coordinates[i][1], rec.features[0].geometry.coordinates[i][0]), {icon: icon}).bindPopup("<b>" + np[j] + "</b>"));
                break;
            }
        }
        list.push(new L.LatLng(rec.features[0].geometry.coordinates[i][1], rec.features[0].geometry.coordinates[i][0]));
    }
	if (list.length !== 1) {
                    route.addLayer(L.polyline(list, {color: 'blue', weight: 7}));                  
                }
    map.addLayer(route);
    map.fitBounds(route.getBounds());
    route.snakeIn();
    route.on('snakestart snake snakeend', function(ev) {
        //map.fitBounds(route.getBounds());
    });
}
L.control.scale({options: {position: 'bottomleft', maxWidth: 100, metric: true, imperial: false, updateWhenIdle: false}}).addTo(map);
