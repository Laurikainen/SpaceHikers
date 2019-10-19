window.onload = function () {
	var mymap = L.map('mapid').setView([58.3,27.1], 11);
	var mark = L.marker([58.3,27.1]).addTo(mymap);
	var marks = L.layerGroup([mark]);
	
	var base = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
	
	var layer1 = L.tileLayer.wms('https://aoraki.domenis.ut.ee/geoserver/spatialdatastudio2019/wms?', {
	layers: 'spatialdatastudio2019:camping_sites_new-point',
	format: 'image/png',
	transparent: true
	}).addTo(mymap);
	
	var layer1 = L.tileLayer.wms('https://aoraki.domenis.ut.ee/geoserver/topp/wms?', {
	layers: 'topp:states',
	format: 'image/png',
	transparent: true
	}).addTo(mymap);
	
	var control = L.control.layers({}, {
		'Camping sites': layer1,
		'Layer 2': layer2
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