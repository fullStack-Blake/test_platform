import axios from "axios";

const api = axios.create({
  baseURL: "https://aircall-job.herokuapp.com/",
});

export const feeds = () => api.get("activities");
export const feedDetail = (id) => api.get(`activities/${id}`);
export const archiveFeed = (id = 7834, toggle = false) =>
  api.post(`activities/${id}`, {
    is_archived: toggle,
  });
