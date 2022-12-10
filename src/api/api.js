import instance from "./instance";

let API = {
  meProfile () {
    return instance.get(`auth/me`);
  },
  updateStatus (status) {
    return instance.put(`profile/status`, {status});
  },
  takeStatus (id) {
    return instance.get(`profile/status/${id}`);
  },
  addAuth (email, password, rememberMe) {
    return instance.post(`auth/login`, {email, password, rememberMe});
  },
};

export default API;
