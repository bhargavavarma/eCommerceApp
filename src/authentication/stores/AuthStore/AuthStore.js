import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import Cookie from 'js-cookie'

class AuthStore {
  
  @observable getAccessTokenApiStatus
  @observable getApiError
  @observable access_token
  authService

  constructor(authService) {
    this.authService = authService
    this.init()
  }

  @action.bound
  init() {
    this.getAccessTokenApiStatus = API_INITIAL
    this.getApiError = null
    this.access_token = undefined
  }

  @action.bound
  setAccessTokenAPIStatus(apiStatus) {
    this.getAccessTokenApiStatus = apiStatus
  }

  @action.bound
  setAccessTokenResponse(response) {
    response.map(object => 
      this.setAccessToken(object.access_token,object.access_token))
  }

  @action.bound
  setAccessTokenError(error) {
    this.getApiError = error
  }

  @action.bound
  getAccessTokenApi() {
    const tokenPromise = this.authService.signInAPI()
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

  clearUserSession(Access_token) {
    Cookie.remove(Access_token, {path: '/'})
  }

  clearStore = () => {
    this.init()
  }
}

export default AuthStore;