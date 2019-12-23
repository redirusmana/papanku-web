import api from "../../provider/Tools/api";

export const API_ADD_FRIEND = "/api/";

export const apiFoundFriend = (url, data, cancelToken) => {
  return api.post(url, data, cancelToken);
};

export const apiAddFriend = (data, cancelToken) => {
  const url = `${API_ADD_FRIEND}`;
  return api.post(url, data, cancelToken);
};

export const apiCreateBoard = (url, data, cancelToken) => {
  return api.post(url, data, cancelToken);
};
