export default {
  async getPage() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/sitemap`,
    ).then((response) => response.json());
    return response;
  },
};
