export const fetchRoute = async (data) => {
    const coordinates = data.flat();
    const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${coordinates[1]},${coordinates[0]};${coordinates[3]},${coordinates[2]}?steps=true&geometries=geojson`);
    if (response.status === 200) {
        return response.json();
    }
} 