export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#privateSearch(keyword) : this.#privatePopular();
  }

  async #privateSearch(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          q: keyword,
          type: "video",
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #privatePopular() {
    return this.apiClient
      .popular({
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
        },
      })
      .then((res) => res.data.items);
  }

  async videoInfo(videoId) {
    return this.apiClient
      .video({
        params: {
          part: "snippet",
          id: videoId,
        },
      })
      .then((res) => res.data.items[0]);
  }
}
