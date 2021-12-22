let latitude,longitude,destination;

$(document).ready(function(){
    alert("Please allow the device to acess your location.");

    initGeolocation();

})

function initGeolocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success)
    }
    else{
        alert("Sorry, you're browser does not support geolocation setvices")
    }

}


$(function(){
    $("#navigate-button").click(function(){
        window.location.href = `navigation.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`

    })
})


function success(position){
    longitude = position.coords.longitude;
	latitude = position.coords.latitude

    mapboxgl.accessToken = "pk.eyJ1Ijoic2hyZXlhc2hpbWFoYW50YSIsImEiOiJja3hhMHcydWszZWtxMnFwemF2dDFpMTl4In0.EjkkGWGbj6WDDuZuuMljng"



    var map = new mapboxgl.Map({
        container : 'map',
        style : "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom : 4
    })
    
    
    map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
        }).on('result', function (e) {
            destination = e.result.center
        })
        );

    
    var img1 = document.querySelector("#andaman")
    img1.setAttribute("width",80)
    img1.setAttribute("height",70)
    
    
    // Create a new marker.
    var marker1 = new mapboxgl.Marker({
        element: img1
    })
        .setLngLat([92.75328275261906,12.619889902179217])
        .addTo(map);
    
    var img2 = document.querySelector("#kaziranga");
    img2.setAttribute("width",80)
    img2.setAttribute("height",70)
    
    
    var marker2 = new mapboxgl.Marker({
        element: img2
    })
        .setLngLat([92.62743904551621,26.155247683489712])
        .addTo(map);
    
    var img3 = document.querySelector("#falls");
    
    img3.setAttribute("width",80)
    img3.setAttribute("height",70)
    
    var marker3 = new mapboxgl.Marker({
        element: img3
    })
        .setLngLat([91.68690803753319,25.276131598701863])
        .addTo(map);
    
    var img4 = document.querySelector("#tajmahal");
    img4.setAttribute("width",80)
    img4.setAttribute("height",70)
    
    var marker4 = new mapboxgl.Marker({
        element: img4
    })
        .setLngLat([78.04219584211941,27.17533567342835])
        .addTo(map);
    
    var img5 = document.querySelector("#palace");
    img5.setAttribute("width",80)
    img5.setAttribute("height",70)
    
    var marker5 = new mapboxgl.Marker({
        element: img5
    })
        .setLngLat([ 72.83311362481604,18.92281458199423])
        .addTo(map);

        
}



