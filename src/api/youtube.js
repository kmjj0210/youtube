export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#privateSearch(keyword) : this.#privatePopular();
  }

  async view(videoId) {
    return this.#privateVideo(videoId);
  }

  async channel(channelId) {
    return this.#privateChannel(channelId);
  }

  async #privateSearch(keyword) {
    return this.apiClient
      .result({
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
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }

  async #privateVideo(videoId) {
    return this.apiClient
      .video({
        params: {
          part: "snippet",
          id: videoId,
        },
      })
      .then((res) => res.data.items[0]);
  }

  async #privateChannel(channelId) {
    return this.apiClient
      .channel({
        params: {
          part: "snippet",
          maxResults: 25,
          id: channelId,
        },
      })
      .then((res) => res.data.items);
  }
}
