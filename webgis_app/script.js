var map = L.map('map').setView([0, 0], 2); // Koordinat tengah dan tingkat zoom awal

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var titikData = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: { nama: "Titik 1", deskripsi: "Ini adalah titik pertama" },
            geometry: {
                type: "Point",
                coordinates: [0, 0]
            }
        },
        // Tambahkan data titik lainnya
    ]
};

var garisData = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: { nama: "Garis 1", deskripsi: "Ini adalah garis pertama" },
            geometry: {
                type: "LineString",
                coordinates: [
                    [0, 0],
                    [1, 1]
                ]
            }
        },
        // Tambahkan data garis lainnya
    ]
};

var polygonData = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: { nama: "Polygon 1", deskripsi: "Ini adalah polygon pertama" },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [0, 0],
                        [1, 0],
                        [1, 1],
                        [0, 1],
                        [0, 0]
                    ]
                ]
            }
        },
        // Tambahkan data polygon lainnya
    ]
};


var titikLayer = L.geoJSON(titikData, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<b>" + feature.properties.nama + "</b><br>" + feature.properties.deskripsi);
    }
}).addTo(map);

var garisLayer = L.geoJSON(garisData, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<b>" + feature.properties.nama + "</b><br>" + feature.properties.deskripsi);
    }
}).addTo(map);

var polygonLayer = L.geoJSON(polygonData, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<b>" + feature.properties.nama + "</b><br>" + feature.properties.deskripsi);
    }
}).addTo(map);


var baseLayers = {
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
};

var overlayLayers = {
    "Titik": titikLayer,
    "Garis": garisLayer,
    "Polygon": polygonLayer
};

L.control.layers(baseLayers, overlayLayers).addTo(map);
