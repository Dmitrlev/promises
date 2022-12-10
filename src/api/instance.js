import axiox from "axios";

const instance = axiox.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': 'a86f18fe-1d8a-48f7-aeea-9000d884d5dd'},
  withCredentials: true,
});

export default instance;