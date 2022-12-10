import instance from "./instance";

let API = {
  followed (id) {
    return instance.get(`follow/${id}`);
  },
  follow (id) {
    return instance.post(`follow/${id}`);
  },
  unfollow (id) {
    return instance.delete(`follow/${id}`);
  },
  takeUserProfile(id) {
    return instance.get(`profile/${id}`);
  },
  takeUsers (pageSize, pageCurrent) {
    return instance.get(`users?count=${pageSize}&page=${pageCurrent}`);
  },
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
  removeAuth () {
    return instance.delete(`auth/login`);
  },
  takeFollowings () {
    return instance.get(`users?friend=${true}`)
  }
};

export default API;
