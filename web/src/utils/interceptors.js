import join from "url-join";
import { store } from "../redux/store";
import { setLoading } from "../redux/slices/loaderSlice";
import * as helper from "../utils/helper";
const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request) => {
  const accessToken = helper.sessionGet("access_token");
  const token = JSON.parse(accessToken);

  if (isHandlerEnabled(request)) {
    store.dispatch(setLoading(true));
  }
  if (!isAbsoluteURLRegex.test(request.url)) {
    request.url = join(process.env.REACT_APP_API_ENDPOINT, request.url);
  }
  if (accessToken) request.headers.Authorization = `Bearer ${token}`;

  request.timeout = 85000;
  return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    store.dispatch(setLoading(false));
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    store.dispatch(setLoading(false));
  }

  if (error.response?.status === 401) {
    helper.sessionRemove("access_token");
    window.location.href = `${process.env.REACT_APP_HOST_URL}/`;
  }
  return Promise.reject({ ...error });
};
