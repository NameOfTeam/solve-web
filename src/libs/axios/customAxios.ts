import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getCookie, removeCookie, setCookie } from "../react-cookie/cookie";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json, text/plain, */*, multipart/form-data",
  },
  withCredentials: true,
});

// 토큰 재발급 상태 관리
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

// 새로운 토큰을 받은 후 대기 중이던 요청 처리
function onRefreshed(token: string) {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
}

// 요청을 대기열에 추가
function addRefreshSubscriber(callback: (token: string) => void) {
  refreshSubscribers.push(callback);
}

instance.interceptors.request.use(
  async (config) => {
    const token = getCookie("ACCESS_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (originalRequest.data instanceof FormData) {
      originalRequest.headers["Content-Type"] = "multipart/form-data";
    } else {
      originalRequest.headers["Content-Type"] = "application/json";
    }

    // 401 에러가 발생한 경우 토큰이 만료되었다고 가정
    if (
      originalRequest &&
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = getCookie("REFRESH_TOKEN");

      if (refreshToken) {
        if (!isRefreshing) {
          isRefreshing = true;

          try {
            const response = await axios.post(
              `${import.meta.env.VITE_API_URL}/auth/reissue`,
              {
                refreshToken,
              }
            );

            const newAccessToken = response.data.data.accessToken;
            const newRefreshToken = response.data.data.refreshToken;

            setCookie("ACCESS_TOKEN", newAccessToken, { path: "/" });
            setCookie("REFRESH_TOKEN", newRefreshToken, {
              path: "/",
              maxAge: 2600000,
            });

            // 대기 중인 요청들을 처리
            onRefreshed(newAccessToken);

            // 재발급 완료 후 새로운 토큰으로 요청 다시 보내기
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return instance(originalRequest);
          } catch (refreshError) {
            // 토큰 재발급 실패 시 처리
            removeCookie("ACCESS_TOKEN");
            removeCookie("REFRESH_TOKEN");
            return Promise.reject(refreshError);
          } finally {
            isRefreshing = false;
          }
        }

        // 토큰이 재발급 중이면 대기 중인 요청에 추가
        return new Promise((resolve) => {
          addRefreshSubscriber((newToken: string) => {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            resolve(instance(originalRequest));
          });
        });
      } else {
        // refresh token이 없는 경우 에러 처리
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
