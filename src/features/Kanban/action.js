import api from "../../provider/Tools/api";

export const API_GET_BOARD_INDEX = "";
export const API_PREFIX_PROFILE = "/api/profile";
export const API_PREFIX_BOARD = "/api/board";
export const API_PREFIX_FRIEND = "/api/friend";

export const apiInviteFriend = (data, cancelToken) => {
  const url = `${API_PREFIX_FRIEND}/add`;
  return api.post(url, data, cancelToken);
};

export const apiInvitetoBoard = (data, id, cancelToken) => {
  const url = `${API_PREFIX_BOARD}/${id}/invite`;
  return api.post(url, data, cancelToken);
};
