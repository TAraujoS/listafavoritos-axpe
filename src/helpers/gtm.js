function dataLayerPush(data) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  }
}

export default {
  dataLayerPush,
};