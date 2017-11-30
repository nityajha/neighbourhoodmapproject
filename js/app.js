var map;
var infowindow;
// Create a new blank array for all the listing markers.
var markers = [];
// Create placemarkers array to use in multiple functions to have control over the number of places that show.
var placeMarkers = [];

function initMap() {
	// Create a styles array to use with the map.
	var styles = [
		{
		featureType: 'water',
		stylers: [
			{ color: '#19a0d8' }
		]
		 },{
		featureType: 'administrative',
		elementType: 'labels.text.stroke',
		stylers: [
			{ color: '#ffffff' },
			 { weight: 6 }
		 ]
		},{
		featureType: 'administrative',
		elementType: 'labels.text.fill',
		stylers: [
			{ color: '#e85113' }
		]
		},{
		featureType: 'road.highway',
		elementType: 'geometry.stroke',
		stylers: [
			{ color: '#efe9e4' },
			{ lightness: -40 }
		]
		 },{
		featureType: 'transit.station',
		stylers: [
			{ weight: 9 },
			{ hue: '#e85113' }
		 ]
		},{
		featureType: 'road.highway',
		elementType: 'labels.icon',
		stylers: [
			{ visibility: 'off' }
		]
		},{
		featureType: 'water',
		elementType: 'labels.text.stroke',		
		stylers: [
			{ lightness: 100 }
		]
		},{
		featureType: 'water',
		elementType: 'labels.text.fill',
		stylers: [
			{ lightness: -100 }
		]
		},{
		featureType: 'poi',
		elementType: 'geometry',
		stylers: [
			{ visibility: 'on' },
			{ color: '#f0e4d3' }
		]
		},{
		featureType: 'road.highway',
		elementType: 'geometry.fill',
		stylers: [
			{ color: '#efe9e4' },
			{ lightness: -25 }
		]
		}
	];
	
	// Constructor creates a new map - only center and zoom are required.
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 28.6139391, lng: 77.20902120000005},
		zoom: 13,
		styles: styles,
		mapTypeControl: false
	});
	infowindow = new google.maps.Infowindow({
		content: ' '
	});
}


// ViewModel for the tourist location listings that will be shown to the user.
function viewModel(){
	var self = this;
	self.locations = ko.observableArray([
          		{title: 'Red Fort', location: {lat: 28.6561592, lng: 77.2410203}},
		{title: 'Lotus Temple', location: {lat: 28.553492, lng: 77.2588264}},
		{title: 'Rashtrapati Bhawan', location: {lat: 28.6141527, lng: 77.19596219999994}},
		{title: 'Qutub Minar', location: {lat: 28.5244281, lng: 77.18545589999997}},
		{title: 'India Gate', location: {lat: 28.612912, lng: 77.2295097}},
		{title: 'Worlds of Wonder', location: {lat: 28.5638068, lng: 77.32605979999994}},
		{title: 'National Rail Museum', location: {lat: 28.5854992, lng: 77.1800892}},
		{title: 'University of Delhi', location: {lat: 28.5842523, lng: 77.16382820000001}},
		{title: 'Tughlakabad Fort', location: {lat: 28.5163996, lng: 77.26134879999995}},
		{title: 'The Garden of Five Senses', location: {lat: 28.513307, lng: 77.19850309999993}},
		{title: 'Tomb of Humayun', location: {lat: 28.5932818, lng: 77.2507488}},
		{title: 'Hazrat Nizamuddin Aulia Dargah', location: {lat: 28.5913871, lng: 77.24186429999997}},
		{title: 'National Zoological Park', location: {lat: 28.603018, lng: 77.24654799999996}},
		{title: 'Jantar Mantar', location: {lat: 28.6270547, lng: 77.2166267}}
	        ]);
	self.addMarker = function(title, location){
		var marker = new google.maps.Marker({
			name: title,
			position: location,
			map: map,
			draggable: true,
			animation: google.maps.Animation.DROP
		});
		//https://stackoverflow.com/questions/29861608/what-is-the-difference-between-addlistenerevent-listener-and-onevent-listen
		marker.addListener('click', toggleBounce);
		markers.push(marker);
	}
	function toggleBounce(){
		if(marker.getAnimation() !== null){
			marker.setAnimation(null);
		}else{
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	}
		
}
