import React from "react";
import { observer } from "mobx-react";
import Loader from 'react-loader-spinner';

import {
  Wrapper,
  SignIn,
  Username,
  Password,
  SubmitButton,
  ErrorMessage
}
from './styledComponents';

export const SignInButton = (props) => {
  return (<SubmitButton>
            {props.loadingSpinner ? 
              <Loader type="Oval" color="white" 
                width={20} height={20}/> : 'Sign in'}
          </SubmitButton>)
}

@observer
class SignInForm extends React.Component {
  userNameRef = React.createRef();
  passwordRef = React.createRef();

  componentDidMount() {
    this.userNameRef.current.focus();
  }

  render() {
    const {
      username,
      onChangeUsername,
      password,
      onChangePassword,
      onEnterKeyPress,
      onSubmitForm,
      errorMessage,
      loadingSpinner
    } = this.props;
    return (
      <Wrapper>
        <form className="flex flex-col p-10 bg-white">
          <SignIn>Sign in</SignIn>
          <Username ref={this.userNameRef}
            type="text"
            value={username}
            onChange={onChangeUsername}
            placeholder="Username"
          />
          <Password ref={this.passwordRef}
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="Password"
            onKeyPress={onEnterKeyPress}
          />
          <SubmitButton
            onClick={onSubmitForm}
            onKeyPress={onEnterKeyPress}>
            {loadingSpinner ? 
              <Loader type="Oval" color="white" 
                width={20} height={20}/> : 'Sign in'}
          </SubmitButton>
          {errorMessage !== "" && errorMessage !== undefined ? (
            <ErrorMessage>
              {errorMessage}
            </ErrorMessage>
          ) : null}
        </form>
      </Wrapper>
    );
  }
}

export default SignInForm;
