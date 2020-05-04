import { observable, action } from 'mobx';

import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import { setAccessToken, clearUserSession } from '../../utils/StorageUtils';
import Cookie from 'js-cookie'

class AuthStore {
  authAPIService;
  //@observable getUserSignInAPIStatus;
  //@observable getUserSignInAPIError;
  @observable getAccessTokenApiStatus
  @observable getApiError
  @observable access_token

  constructor(authAPIService) {
    this.authAPIService = authAPIService;
    this.init()
  }

  @action.bound
  init() {
    //this.getUserSignInAPIStatus = API_INITIAL;
    //this.getUserSignInAPIError = null;
    this.getAccessTokenApiStatus = API_INITIAL
    this.getApiError = null
    this.access_token = undefined
  }

  // @action.bound
  // setGetUserSignInAPIStatus(status) {
  //   this.getUserSignInAPIStatus = status;
  // }

  @action.bound
  setAccessTokenAPIStatus(apiStatus) {
    this.getAccessTokenApiStatus = apiStatus
  }

  // @action.bound
  // setGetUserSignInAPIError(error) {
  //   this.getUserSignInAPIError = error;
  // }

  @action.bound
  setAccessTokenError(error) {
    this.getApiError = error
  }

  // @action.bound
  // setUserSignInAPIResponse(response) {
  //   setAccessToken(response.length > 0 && response[0].access_token);
  // }

  @action.bound
  setAccessTokenResponse(response) {
    response.map(object => 
      this.setAccessToken(object.access_token,object.access_token))
  }

  // @action.bound
  // userSignIn(request, onSuccess, onFailure) {
  //   const userSignInAPIPromise = this.authAPIService.signInAPI(request);
  //   return bindPromiseWithOnSuccess(userSignInAPIPromise)
  //     .to(this.setGetUserSignInAPIStatus, (response) => {
  //       this.setUserSignInAPIResponse(response);
  //       onSuccess();
  //     })
  //     .catch((error) => {
  //       this.setGetUserSignInAPIError(error);
  //       onFailure();
  //     });
  // }

  @action.bound
  getAccessTokenApi() {
    const tokenPromise = this.authAPIService.signInAPI()
    return bindPromiseWithOnSuccess(tokenPromise)
    .to(this.setAccessTokenAPIStatus,this.setAccessTokenResponse)
    .catch(this.getApiError)
  }

  setCookie(key,value) {
    Cookie.set(key,value, {
      expires: 30,
      path: '/',
    })
  }

  setAccessToken = (Access_token, access_token) => {
    this.access_token = access_token
    this.setCookie(Access_token, access_token)
  }
  
  getAccessToken(Access_token) {
    this.getCookie(Access_token)
  }

  getCookie(key) {
    return Cookie.get(key)
  }

  @action.bound
  userSignOut() {
    
    clearUserSession();
    this.init();
  }

  clearUserSession(Access_token) {
    alert('bhargav')
    Cookie.remove(Access_token, {path: '/'})
  }

  clearStore = () => {
    alert('store')
    this.init()
  }
}

export default AuthStore;