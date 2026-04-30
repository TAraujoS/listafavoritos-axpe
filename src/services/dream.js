export default {
  async getPage(slug) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/buildings/categories-axpe/${slug}`,
    ).then((response) => response.json());
    return response;
  },
};
