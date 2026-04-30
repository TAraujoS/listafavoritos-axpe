export const shuffle = list => {
  return list.sort(() => Math.random() - 0.5);
};

// eslint-disable-next-line compat/compat
export const formatCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 0
});

export const formatCurrencyToText = (currency) => {
  let newCurrency = currency || 'R$';
  if(currency === 'EUR') {
    newCurrency = '€';
  } else if(currency === 'USD') {
    newCurrency = 'US$';
  }
  return newCurrency;
}

export const getParamsFromObject = (params) => {
  const initial = '?';
  const sep = '&';
  
  const paramsJoin = Object.keys(params).reduce((acc, key) => {
    const value = params[key];

    if (value === null || value === undefined || value === '') {
      return acc;
    }

    const pair = `${key}=${value}`;
    return acc === initial ? `${acc}${pair}` : `${acc}${sep}${pair}`;
  }, initial);

  return encodeURI(paramsJoin);
};

export const checkPluralSingular = (word, size) => {
  return size === 0 || size > 1 ? `${word}s` : word;
};