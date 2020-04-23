import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import {setAccessToken} from '../../utils/StorageUtils'
import {
  Login,
  UserName,
  Password,
  LoginButton
} from './styledComponent.js'

class LoginPage extends Component {
  
  routeChange = () => {
    let path = `/mobx-todo-app-API`;
    const {history} = this.props;
    history.push(path);
    console.log(history)
    setAccessToken('1232');
  }

  render() { 
    return ( 
      <Login>
        <UserName type='text' placeholder='enter user name'/>
        <Password type='password' placeholder='enter password'/>
        <LoginButton onClick={this.routeChange}>Login</LoginButton>
      </Login>
    );
  }
}
 
export default withRouter(LoginPage);