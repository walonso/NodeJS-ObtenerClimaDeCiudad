const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    let key = 'key';
    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=${key}`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let location = resp.data.results[0];

    if (location === undefined) {
        //Default bogota:
        throw new Error('Revisa el api key');
        return {
            direccion: 'BOGOTA (DEFAULT)',
            lat: 4.5981,
            lng: -74.0762
        }
    }
    let coors = location.geometry.location;

    //console.log(JSON.stringify(resp.data, undefined, 2));
    //console.log(resp.status);

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}