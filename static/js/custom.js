let autocomplete;

function initAutoComplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('id_address'),
        {
            types: ['geocode', 'establishment'],
            componentRestrictions: { 'country': ['in'] }, // Limit to India (IN)
        }
    );
    // Add listener for place selection
    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    var place = autocomplete.getPlace();

    // If place doesn't have geometry, reset input placeholder
    if (!place.geometry) {
        document.getElementById('id_address').placeholder = "Start typing...";
    } else {
        // You can log the place for debugging
        // console.log('Place:', place);
    }

    // Geocode the entered address
    var geocoder = new google.maps.Geocoder();
    var address = document.getElementById('id_address').value;

    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK && results[0]) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();

            // Set latitude and longitude in respective fields
            document.getElementById('id_latitud').value = latitude;
            document.getElementById('id_longitud').value = longitude;
            document.getElementById('id_address').value = address;
        } else {
            console.error('Geocode was not successful for the following reason: ' + status);
        }
    });

    // loop through the address components and assign other address data
    for(var i=0; i<place.address_components.length; i++){
        for(var j=0; j<place.address_components[i].types.length; j++){
            // get the country
            if(place.address_components[i].types[j] == 'country'){
                document.getElementById('id_country').value = place.address_components[i].long_name;
            }
            // get the state
            if(place.address_components[i].types[j] == 'administrative_area_level_1'){
                document.getElementById('id_state').value = place.address_components[i].long_name;
            }
            // get the city
            if(place.address_components[i].types[j] == 'locality'){
                document.getElementById('id_city').value = place.address_components[i].long_name;
            }
            // get the pin code
            if(place.address_components[i].types[j] == 'postal_code'){
                document.getElementById('id_pin_code').value = place.address_components[i].long_name;
            }else{
                document.getElementById('id_pin_code').value = '';
            }
        }
    }
}

// Ensure initAutoComplete is called after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initAutoComplete();
});
