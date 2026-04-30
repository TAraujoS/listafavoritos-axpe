export default {
  async getPage(slug) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/landing-pages/${slug}`,
    ).then((response) => response.json());
    return response;
  },
};
