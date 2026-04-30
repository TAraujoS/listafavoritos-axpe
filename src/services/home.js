export default {
  async getPage() {
    const response = await fetch(`${process.env.config.apiUrl}/home`)
      .then(response => response.json())
    return response;
  },
};
