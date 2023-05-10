import { useEffect } from "react";

function Map({Latitude, Longitude}) {
    useEffect(() => {
        const mapOptions = {
            zoom: 8,
            center: {lat:  Latitude , lng: Longitude },
        };
        const map = new window.google.maps.Map(document.getElementById("map"), mapOptions);
        const marker = new window.google.maps.Marker({
            position: { lat: Latitude, lng: Longitude },
            map: map,
            title: "Marker Title",
        });
    }, []);

    return (
        <div id="map" style={{ height: "500px", width: "100%" }}>
        </div>);
}

export default Map;