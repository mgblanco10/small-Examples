 // L de liaflet, 1 es el zoom --> making a map in tiles -->create map
 const map = L.map("map").setView([0, 0], 1);

 //enlace openstreetmap
 const attribution =
   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

 //img --> making a marker with a custom icon https://commons.wikimedia.org/
 const issIcon = L.icon({
   //iconUrl: "./img/airplane200.png",
   iconUrl: "./img/iss200.png",
   iconSize: [50, 32],
   iconAnchor: [25, 16],
 });
 //icon como segundo parametro en objeto sacado de documentación
 const marker = L.marker([0, 0], { icon: issIcon }).addTo(map);

 const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
 const tiles = L.tileLayer(tileUrl, { attribution });
 tiles.addTo(map);
 const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

//let puesto para que se actualice mi long lat de mi satelite y no se actualice el mapa
 let firtsTime = true;
 async function getDate() {
   const response = await fetch(api_url);
   const data = await response.json();
   const { latitude, longitude } = data;

   // -->actualiza las locaciones en el mapa (documentación)
   marker.setLatLng([latitude, longitude]);

   if (firtsTime){
   //-->zoom mapa
   map.setView([latitude, longitude], 5);
   firtsTime = false
   }

   //toFixed para ver 2 decimales en latitud longitud
   document.getElementById("lat").textContent = latitude.toFixed(2);
   document.getElementById("lon").textContent = longitude.toFixed(2);
   console.log(latitude);
   console.log(longitude);
 }
 getDate();

 //obtener info cada 1 segundo
 setInterval(getDate, 1000)
