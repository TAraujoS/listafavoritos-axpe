const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
];

export function captureUTMs(search) {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(search);

  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) {
      localStorage.setItem(key, value);
    }
  });
}

export function getUTMs() {
  if (typeof window === 'undefined') return {};

  return UTM_KEYS.reduce((acc, key) => {
    const value = localStorage.getItem(key);
    if (value) acc[key] = value;
    return acc;
  }, {});
}
