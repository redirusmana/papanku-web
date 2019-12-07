import api from "../../provider/Tools/api";

export const apiLogin = "api/auth/login";
export const apiSignIn = "api/auth/singIn";

export const apiLoginAction = (data, cancelToken) => {
  const url = `${apiLogin}`;
  return api.post(url, data, cancelToken);
};

export const apiSignInAction = (data, cancelToken) => {
  const url = `${apiSignIn}`;
  return api.post(url, data, cancelToken);
};
