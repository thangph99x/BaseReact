import axios from "axios";

export default class AppApiService {
  axios: any;
  jwtConfig: any;

  // ** jwtConfig <= Will be used by this service
  apiConfig = {
    loginEndpoint: "https://uat-trading-process.tvsi.com.vn/System/login",
    registerEndpoint: "/jwt/register",
    refreshEndpoint: "/jwt/refresh-token",
    logoutEndpoint: "/jwt/logout",

    // ** This will be prefixed in authorization header with token
    // ? e.g. Authorization: Bearer <token>
    tokenType: "Bearer",

    // ** Value of this property will be used as key to store JWT token in storage
    storageTokenKeyName: "accessToken",
    storageRefreshTokenKeyName: "refreshToken",
    // https://uat-trading-process.tvsi.com.vn/
  };

  // ** For Refreshing Token
  isAlreadyFetchingAccessToken = false;

  // ** For Refreshing Token
  subscribers = [];

  constructor(apiOverrideConfig: any) {
    this.apiConfig = { ...this.apiConfig, ...apiOverrideConfig };

    // ** Request Interceptor
    axios.interceptors.request.use(
      (config) => {
        // ** Get token from localStorage
        const accessToken = this.getToken();

        // ** If token is present add it to request's Authorization Header
        if (accessToken) {
          // ** eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `${this.apiConfig.tokenType} ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // ** Add request/response interceptor
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        // ** const { config, response: { status } } = error
        const { config, response } = error;
        const originalRequest = config;

        // ** if (status === 401) {
        if (response && response.status === 401) {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true;
            this.refreshToken().then((r) => {
              this.isAlreadyFetchingAccessToken = false;

              // ** Update accessToken in localStorage
              this.setToken(r.data.accessToken);
              this.setRefreshToken(r.data.refreshToken);

              this.onAccessTokenFetched(r.data.accessToken);
            });
          }
          const retryOriginalRequest = new Promise((resolve) => {
            this.addSubscriber((accessToken: any) => {
              // ** Make sure to assign accessToken according to your response.
              // ** Check: https://pixinvent.ticksy.com/ticket/2413870
              // ** Change Authorization header
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
              resolve(this.axios(originalRequest));
            });
          });
          return retryOriginalRequest;
        }
        return Promise.reject(error);
      }
    );
  }

  onAccessTokenFetched(accessToken: any) {
    
    this.subscribers = this.subscribers.filter((callback) =>
      callback(accessToken)
    );
  }

  addSubscriber(callback: any) {
    
    this.subscribers.push(callback);
  }

  getToken() {
    return localStorage.getItem(this.apiConfig.storageTokenKeyName);
  }

  getRefreshToken() {
    return localStorage.getItem(this.apiConfig.storageRefreshTokenKeyName);
  }

  setToken(value: any) {
    localStorage.setItem(this.apiConfig.storageTokenKeyName, value);
  }

  setRefreshToken(value: any) {
    localStorage.setItem(this.apiConfig.storageRefreshTokenKeyName, value);
  }

  login(...args: any[]) {
    console.log("this.apiConfig.loginEndpoint: ", this.apiConfig.loginEndpoint);
    return axios.post(this.apiConfig.loginEndpoint, ...args);
  }

  register(...args: any[]) {
    return axios.post(this.apiConfig.registerEndpoint, ...args);
  }

  refreshToken() {
    return axios.post(this.apiConfig.refreshEndpoint, {
      refreshToken: this.getRefreshToken(),
    });
  }
}
