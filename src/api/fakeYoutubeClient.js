import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    return axios.get(`/data/search.json`);
  }

  async popular() {
    return axios.get(`/data/popular.json`);
  }

  async video() {
    return axios.get(`/data/video.json`);
  }
}