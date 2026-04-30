/**
 * Create bounds from center point
 * @param {number} lat
 * @param {number} lng
 * @param {number} distance
 * @return {object}
 */
export const getBoundsFromLatLng = (lat, lng, distance) => {
  return {
    northeast: {
      lat: lat + (0.009 * distance),
      lng: lng + (0.009 * distance)
    },
    southwest: {
      lat: lat - (0.009 * distance),
      lng: lng - (0.009 * distance)
    }
  };
};
