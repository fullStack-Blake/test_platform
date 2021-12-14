import axios from "axios";

const api = axios.create({
  baseURL: "https://aircall-job.herokuapp.com/",
});

export const feeds = () => api.get("activities");
export const feedDetail = (id) => api.get(`activities/${id}`);
// export const fetchArchiveCall = (id) =>
//   fetch(`https://aircall-job.herokuapp.com/activities/${id}`);
