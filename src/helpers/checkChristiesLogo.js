export const checkChristiesLogo = (data, suggestions = false) => {
  let isActive = true;

  const noChristiesLocations = [ 'Algarve', 'Porto' ];

  // Search results
  if (data && data instanceof Object && data.length > 0) {
    const noChristies = data.filter(
      (x) =>
        x.hasOwnProperty('address') &&
        x.address.local &&
        noChristiesLocations.includes(x.address.local)
    );
    isActive = noChristies.length > 0 ? false : true;
  }

  // Single building
  if (isActive && data && data.hasOwnProperty('address')) {
    isActive = !noChristiesLocations.includes(data.address.local);
  }

  // Suggestion list
  if (
    isActive &&
    suggestions &&
    suggestions instanceof Object &&
    suggestions.length > 0
  ) {
    let suggestionBuildings = [];
    if (suggestions.includes('0')) {
      suggestionBuildings = suggestions[0].includes('items')
        ? suggestions[0].items
        : suggestions[0];
    } else {
      suggestionBuildings = suggestions;
    }
    const noChristiesSuggestions = suggestionBuildings.filter(
      (x) =>
        x.hasOwnProperty('address') &&
        x.address.local &&
        noChristiesLocations.includes(x.address.local)
    );
    isActive = noChristiesSuggestions.length > 0 ? false : true;
  }

  // Avoids initialising function before DOM is available
  if (typeof window !== 'undefined') {
    const christiesLogo = document.querySelector('.christies-logo');

    if (!christiesLogo) {
      return false;
    }

    if (isActive) {
      christiesLogo.style.display = 'initial';
    } else {
      christiesLogo.style.display = 'none';
    }
  }

  return isActive;
};
