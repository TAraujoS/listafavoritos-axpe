export default {
  async getPage(slug) {
    const response = await fetch(
      `${process.env.config.apiUrl}/landing-pages/${slug}`
    ).then(response => response.json());
    return response;
  }
};
