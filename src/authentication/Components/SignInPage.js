import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer } from "mobx-react"
import { observable } from "mobx"
import {FiLoader} from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
import { FaUserLock } from 'react-icons/fa'
import {
  LoginBox,
  TextBox,
  Button,
  Body,
  Text,
  Username,
  Password
} from './StyledComponent.js'
import authStore from "../stores/AuthStore/index.js"
import { API_SUCCESS, API_FETCHING } from "@ib/api-constants"
import stores from '../stores/AuthStore'
@observer
class LoginPage extends Component {

  @observable username = ''
  @observable password = ''
  @observable validated = false

  componentWillUnmount() {
    authStore.clearStore()
  }

  handleUserName = (event) => {
    const value = event.target.value
    this.username = value
  }

  handlePassword = (event) => {
    const value = event.target.value
    this.password = value
  }

  doNetworkCalls = () => {
    authStore.getAccessTokenApi()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.username.length > 0) {
      this.validate=false
      this.doNetworkCalls()
    }
    else {
      this.validate=true
    }
  }

  loginSuccessChangePath = () => {
    const {access_token} = stores
    alert(access_token)
    if(access_token !== undefined) {
      alert()
      const {history} = this.props
      history.replace('/ecommerce-store/products')
    } 
  }

  render() { 
    const {getAccessTokenApiStatus} = stores
    console.log('getAccessTokenApiStatus',getAccessTokenApiStatus)
    if(getAccessTokenApiStatus == API_SUCCESS) {
      this.loginSuccessChangePath()
    }
    return ( 
      <Body>
        <LoginBox>
          <Text>Login</Text>
          <TextBox>
            <FaUser />
            <Username type='text' placeholder='Username' onChange={this.handleUserName}/>
          </TextBox>
          <TextBox>
          <FaUserLock />
            <Password type='password' placeholder='Password' onChange={this.handlePassword}/>
          </TextBox>
          <Button data-testid='sign-in-button' onClick={this.handleSubmit} >
            {getAccessTokenApiStatus !== API_FETCHING ? 'Sign in': <FiLoader size={24}/>}
          </Button>
        </LoginBox>
      </Body>
    );
  }
}
 
export default withRouter(LoginPage);