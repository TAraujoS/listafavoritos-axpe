import { getParamsFromObject } from 'helpers/utils';
const baseMaps = 'https://maps.googleapis.com/maps/api';
// https://maps.googleapis.com/maps/api/geocode/json?address=52050370&key=AIzaSyAn4jhPJpyJwgIYnYyr4Kaj1JSyg74Qoto
// https://maps.googleapis.com/maps/api/directions/json?origin=-26.9040582,-49.0882946&destination=-26.9061099,-49.09195949999999&key=AIzaSyAn4jhPJpyJwgIYnYyr4Kaj1JSyg74Qoto

export default {
  async getPage(reference) {
    // category  - type
    // AX1111    - Apartamento - lancamento
    // AX2629    - Casa        - pronto
    // AX10010   - Apartamento - pronto - zipcode
    // AX130883  - Cobertura   - pronto
    // AX129334  - Terreno     - pronto
    // AX141776  - Apartamento - pronto

    const result = await fetch(
      `${process.env.config.apiUrl}/building/${reference}`
    )
      .then((response) => response.json())
      .then((data) => data);
    return result;
  },
  async getGeocode(local, cep) {
    if (!local || !cep) return null;

    const googleApiKey = process.env.config.googleApiKey;

    let result = await fetch(
      `${baseMaps}/geocode/json?address=${local} ${cep}&key=${googleApiKey}`
    )
      .then((response) => response.json())
      .then((data) => data);

    if (result.results.length && result.results[0].geometry) {
      result = await fetch(
        `${baseMaps}/geocode/json?latlng=${result.results[0].geometry.location.lat},${result.results[0].geometry.location.lng}&key=${googleApiKey}`
      )
        .then((response) => response.json())
        .then((data) => data);

      const addressRoute = result.results[0].address_components.find((x) =>
        x.types.includes('route')
      );
      const addressSub = result.results[0].address_components.find(
        (x) =>
          x.types.includes('sublocality_level_1') ||
          x.types.includes('locality')
      );
      const addressAdm = result.results[0].address_components.find(
        (x) =>
          x.types.includes('administrative_area_level_1') ||
          x.types.includes('administrative_area_level_2')
      );

      if (addressRoute && addressSub && addressAdm) {
        const address = `${addressRoute.long_name} ${addressSub.long_name} ${addressAdm.long_name}`;

        result = await fetch(
          `${baseMaps}/geocode/json?address=${address}&key=${googleApiKey}`
        )
          .then((response) => response.json())
          .then((data) => data);
      }
    }

    return result && result.results.length > 0 ? result.results[0] : null;
  },
  async getDirections(northeast, southwest) {
    const googleApiKey = process.env.config.googleApiKey;
    const result = await fetch(
      `https://cors-anywhere.herokuapp.com/${baseMaps}/directions/json?origin=${southwest.lat},${southwest.lng}&destination=${northeast.lat},${northeast.lng}&key=${googleApiKey}`
    ).then((response) => response.json());
    return result && result.status === 'OK' ? result : [];
  },
  async getSimilar(property, limit) {
    const basePrice = property.values?.sell || property.values?.release || 0;
    const margin = 0.25;

    const params = {
      source: property.source,
      use: property.infos ? property.infos.use : '',
      finality: property.infos ? property.infos.type : '',
      category: property.category,
      local: property.address ? property.address.local : '',
      furniture: property.label ? property.label.isFurnished : '',
      type: property.type,
      price_start: Math.floor(basePrice * (1 - margin)),
      price_end: Math.ceil(basePrice * (1 + margin)),
      area_start: property.infos ? property.infos.areaUsefulStart : '',
      area_end: property.infos ? property.infos.areaUsefulEnd : '',
      bedroom_start: property.infos ? property.infos.bedroomsStart : '',
      bedroom_end: property.infos ? property.infos.bedroomsEnd : '',
      parking_start: property.infos ? property.infos.parkingStart : '',
      parking_end: property.infos ? property.infos.parkingEnd : '',
      limit,
    };
    const url = `${process.env.config.apiUrl}/buildings/find`;

    const result = await fetch(url + getParamsFromObject(params))
      .then((response) => response.json())
      .then((data) => data);
    return result;
  },
  async getFavoritesShare(hash) {
    const response = await fetch(
      `${process.env.config.apiUrl}/buildings/favorites/share/${hash}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((response) => response.json());
    return response;
  },
  async postRegisterProperty() {
    const formData = new FormData();

    const result = await fetch(
      `${process.env.config.apiUrl}/form/register_your_building`,
      {
        method: 'POST',
        body: formData,
      }
    ).then((response) => response.json());
    return result;
  },
};
