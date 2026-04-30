export default {
  async getPage() {
    const response = await fetch(`${process.env.config.apiUrl}/sitemap`)
      .then(response => response.json())
    return response;
  },
};
