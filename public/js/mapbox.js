export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicHJ1ZWJhMjEyMTIiLCJhIjoiY2w4NHAxYWhvMGJqajNucXk1NTRuNmV6cCJ9.3SnRpufoghlfV-zHBb9YvA';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup()
      .setLngLat(loc.coordinates)
      .setHTML(`<p> ${loc.day} : ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
