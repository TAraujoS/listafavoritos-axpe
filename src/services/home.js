export default {
  async getPage() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/home`,
    ).then((response) => response.json());
    return response;
  },
};
