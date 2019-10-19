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
	
	var layer4 = L.tileLayer.wms('https://aoraki.domenis.ut.ee/geoserver/spatialdatastudio2019/wms?', {
	layers: ['spatialdatastudio2019:historic_p%C3%A4rnumaa', 'spatialdatastudio2019:historic_tartumaa'],
	format: 'image/png',
	transparent: true
	}).addTo(mymap);
	
	var layer6 = L.tileLayer.wms('https://aoraki.domenis.ut.ee/geoserver/spatialdatastudio2019/wms?', {
	layers: ['spatialdatastudio2019:mush_soils_p%C3%A4rnumaa', 'spatialdatastudio2019:mush_soils_tartumaa'],
	format: 'image/png',
	transparent: true
	}).addTo(mymap);
	
	var layer8 = L.tileLayer.wms('https://aoraki.domenis.ut.ee/geoserver/spatialdatastudio2019/wms?', {
	layers: ['spatialdatastudio2019:p%C3%A4rnu_private', 'spatialdatastudio2019:tartu_private'],
	format: 'image/png',
	transparent: true
	}).addTo(mymap);
	
	var layer9 = L.tileLayer.wms('https://aoraki.domenis.ut.ee/geoserver/spatialdatastudio2019/wms?', {
	layers: 'spatialdatastudio2019:protected_areas',
	format: 'image/png',
	transparent: true
	}).addTo(mymap);
	
	var layer10 = L.tileLayer.wms('https://aoraki.domenis.ut.ee/geoserver/spatialdatastudio2019/wms?', {
	layers: ['spatialdatastudio2019:srings_p%C3%A4rnumaa','spatialdatastudio2019:srrings_tartumaa'],
	format: 'image/png',
	transparent: true
	}).addTo(mymap);
	
	var control = L.control.layers({}, {
		'Roads': layer1,
		'Camping sites': layer2,
		'Hiking trails': layer3,
		'Historic sites': layer4,
		'Mushroom soils': layer6,
		'Private land': layer8,
		'Protected areas': layer9,
		'Springs': layer10,
	})
	control.addTo(mymap);

	/*Legend specific*/
	var legend = L.control({ position: "bottomleft" });

	legend.onAdd = function(mymap) {
	  var div = L.DomUtil.create("div", "legend");
	  div.innerHTML += "<h4>Legend</h4>";
	  div.innerHTML += '<i style="background: #477AC2"></i><span>Roads</span><br>';
	  div.innerHTML += '<i style="background: #448D40"></i><span>Camping sites</span><br>';
	  div.innerHTML += '<i style="background: #E6E696"></i><span>Hiking trails</span><br>';
	  div.innerHTML += '<i style="background: #E8E6E0"></i><span>Historic sites</span><br>';
	  div.innerHTML += '<i style="background: #FFFFFF"></i><span>Mushroom soils</span><br>';
	  div.innerHTML += '<i style="background: #47FAC2"></i><span>Private land</span><br>';
	  div.innerHTML += '<i style="background: #FFF0FF"></i><span>Protected areas</span><br>';
	  div.innerHTML += '<i style="background: #47FA02"></i><span>Springs</span><br>';
	  
	  

	  return div;
	};

	legend.addTo(mymap);
};