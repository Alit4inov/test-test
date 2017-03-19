// page init
jQuery(function(){
	initCustomMap();
});

// custom map init
function initCustomMap() {
var myLatLng = {lat: 49.947804, lng: 36.397481};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

var image = {
        url: 'build/images/general/logo-map-marker.png'
    };


var marker = new google.maps.Marker({
    position: {lat: 49.948401, lng: 36.396368},
    map: map,
    icon: image
  });

setMapEvents()

}

function setMapEvents() {
    jQuery('#map').css("pointer-events", "none");
    jQuery('.map-holder').on("click", function () {
        jQuery('#map').css("pointer-events", "auto");
    });


    jQuery('#map').on("mouseout", function () {
        jQuery(this).css("pointer-events", "none");
    });
}