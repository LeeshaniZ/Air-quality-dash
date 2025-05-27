var map = L.map('map').setView([7.8731, 80.7718], 7); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var locations = [
    { name: "Colombo", lat: 6.9271, lon: 79.8612, aqi: 85 },
    { name: "Kandy", lat: 7.2906, lon: 80.6337, aqi: 60 },
    { name: "Galle", lat: 6.0326, lon: 80.2168, aqi: 45 },
    { name: "Jaffna", lat: 9.6615, lon: 80.0255, aqi: 70 }
];

locations.forEach(loc => {
    var color = loc.aqi > 80 ? "red" : loc.aqi > 50 ? "orange" : "green"; 
    L.circleMarker([loc.lat, loc.lon], {
        color: color,
        fillColor: color,
        fillOpacity: 0.5,
        radius: 10
    }).addTo(map)
    .bindPopup(`<b>${loc.name}</b><br>AQI: ${loc.aqi}`);
});
