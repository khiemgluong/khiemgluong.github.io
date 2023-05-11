var map;
var marker;

function initMap() {
    var myLatLng = { lat: 0, lng: 0 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 8
    });

    marker = new google.maps.Marker({
    	position: myLatLng,
    	map: map,
    	title: 'Phone Location'
    });
    var locationPermission = localStorage.getItem('locationPermission');
    var deviceLocation = localStorage.getItem('deviceLocation');

    if (locationPermission && deviceLocation) {
        // Parse device location from JSON string
        var pos = JSON.parse(deviceLocation);

        // Update map marker position
        marker.setPosition(pos);
        map.setCenter(pos);
    }
    getPhoneLocation();
}

initMap();

function getPhoneLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Store permission in cookie or local storage
            localStorage.setItem('locationPermission', true);
            localStorage.setItem('deviceLocation', JSON.stringify(pos));

            // Update map marker position
            marker.setPosition(pos);
            map.setCenter(pos);
        }, function () {
            // Handle error
        });
    }
}