function checkFavorite(user, reference) {
  const building = user.favorites.find((x) => x === reference);

  return !!building;
}

export default checkFavorite;
