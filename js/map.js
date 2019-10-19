window.onload = function () {
	var mymap = L.map('mapid').setView([58.373, 26.716], 9);
	var mark = L.marker([58.373, 26.716], {title: 'Vanemuise 46, Tartu'}).addTo(mymap);
	
	var base = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
	
	var layer1 = L.tileLayer.wms('https://aoraki.domenis.ut.ee/geoserver/spatialdatastudio2019/wms?', {
	layers: 'spatialdatastudio2019:Tee',
	format: 'image/png',
	transparent: true
	}).addTo(mymap);
	
	var layer2 = L.tileLayer.wms('https://aoraki.domenis.ut.ee/geoserver/spatialdatastudio2019/wms?', {
	layers: 'spatialdatastudio2019:camping_sites_new-point',
	format: 'image/png',
	transparent: true
	}).addTo(mymap);
	
	var layer3 = L.tileLayer.wms('https://aoraki.domenis.ut.ee/geoserver/spatialdatastudio2019/wms?', {
	layers: 'spatialdatastudio2019:hiking-line',
	format: 'image/png',
	transparent: true
	}).addTo(mymap);
	
	var control = L.control.layers({}, {
		'Roads': layer1,
		'Camping sites': layer2,
		'Hiking trails': layer3		
	})
	control.addTo(mymap);
};

// Recommended (explicit source)
//var options = {'transparent': true};
//var source = L.WMS.source("http://example.com/mapserv", options);
//var layer1 = source.getLayer('layer1');
//var layer2 = source.getLayer('layer2');
//var control = L.control.layers({}, {
//    'Layer 1': layer1,
//    'Layer 2': layer2
//})
//control.addTo(map);