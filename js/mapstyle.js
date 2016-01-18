function initialize() {
	var latlng = new google.maps.LatLng(33.559846, 130.427858);
	var latlng2 = new google.maps.LatLng(33.560434, 130.429389);
	var latlng3 = new google.maps.LatLng(33.560204, 130.428507);

	var myOptions = {
	zoom: 17, /*拡大比率*/
	center: latlng3, /*表示枠内の中心点*/
	mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
};
	var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

	/*アイコン設定▼*/
	var icon1 = new google.maps.MarkerImage('./images/lunet.png',
		new google.maps.Size(96,53),/*アイコンサイズ設定*/
		new google.maps.Point(0,0)/*アイコン位置設定*/
	);
	var icon2 = new google.maps.MarkerImage('./images/tazigen.png',
		new google.maps.Size(96,53),/*アイコンサイズ設定*/
		new google.maps.Point(0,0)/*アイコン位置設定*/
	);
	var markerOptions1 = {
		position: latlng,
		map: map,
		icon: icon1,
		title: 'ルネット'
	};
	var marker = new google.maps.Marker(markerOptions1);
	var markerOptions2 = {
		position: latlng2,
		map: map,
		icon: icon2,
		title: '多次元'
	};
	var marker = new google.maps.Marker(markerOptions2);
	/*アイコン設定ここまで▲*/

	var styleOptions = [
		{
		"featureType": "administrative",
		"stylers": [
			{ "visibility": "off" }
		]
		},{
		"featureType": "poi",
		"stylers": [
			{ "visibility": "simplified" }
		]
		},{
		"featureType": "road",
		"elementType": "labels.icon",
		"stylers": [
			{ "visibility": "off" }
		]
		}
	]
	var styledMapOptions = { name: 'ルネット' }
	var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
	map.mapTypes.set('sample', sampleType);
	map.setMapTypeId('sample');
}
