export default {
  async getPage(slug) {
    const response = await fetch(
      `${process.env.config.apiUrl}/buildings/categories-axpe/${slug}`
    ).then(response => response.json());
    return response;
  }
};
