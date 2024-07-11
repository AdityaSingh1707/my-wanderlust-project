const maptilerClient = require('@maptiler/client');

// Replace 'YOUR_API_KEY' with your actual MapTiler API key
maptilerClient.config.apiKey = process.env.KEY_TOKEN;

module.exports.getGeometry = async(location) => {
    try {
        const response = await maptilerClient.geocoding.forward(location);
        const geometry = response.features[0].geometry;
        return geometry;
        // const coordinates = response.features[0].geometry.coordinates;
        // console.log(`Coordinates for ${location}: [${coordinates.join(', ')}]`);      
        // return coordinates; 
    } catch (error) {
        console.error('Error fetching Geometry', error);
    }
}
