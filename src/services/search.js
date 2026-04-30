export default {
  async getLocals(complete) {
    const response = await fetch(`${process.env.config.apiUrl}/building/locals`)
      .then(response => response.json())
      .then(json => (complete ? json : json.data));
    return response;
  },
  async getCategories() {
    const response = await fetch(
      `${process.env.config.apiUrl}/building/categories`
    )
      .then(response => response.json())
      .then(json => (json.data ? json.data : null));
    return response;
  },
  async getUses() {
    const response = await fetch(`${process.env.config.apiUrl}/building/types`)
      .then(response => response.json())
      .then(json => (json.data ? json.data : null));
    return response;
  },
  async getFilters(params) {
    const response = await fetch(
      `${process.env.config.apiUrl}/buildings/filters${params}`
    ).then(response => response.json());
    return response;
  },
  async getBuildings(params) {
    const response = await fetch(
      `${process.env.config.apiUrl}/buildings/find${params}`
    ).then(response => response.json());
    return response;
  }
};
