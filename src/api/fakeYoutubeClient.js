import axios from "axios";

export default class FakeYoutubeClient {
  async result() {
    return axios.get(`/data/result.json`);
  }

  async popular() {
    return axios.get(`/data/popular.json`);
  }

  async video() {
    return axios.get(`/data/video.json`);
  }

  async channel() {
    return axios.get(`/data/channel.json`);
  }
}