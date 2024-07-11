
maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element in which the SDK will render the map
    style: maptilersdk.MapStyle.STREETS,
    center: [listing.geometry.coordinates[0], listing.geometry.coordinates[1]], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// console.log(coords);

const marker = new maptilersdk.Marker({color: "red"})
    .setLngLat([listing.geometry.coordinates[0], listing.geometry.coordinates[1]])
    .setPopup(new maptilersdk.Popup().setHTML(`<h5>${listing.title}</h5><p>Exact location will be provided after booking.</p>`))
    .addTo(map);