import React from "react";
import { observer } from "mobx-react";
import Loader from 'react-loader-spinner';

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
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <form className="flex flex-col p-10 bg-white">
          <h2 className="font-bold mb-4">Sign in</h2>
          <input ref={this.userNameRef}
            type="text"
            value={username}
            onChange={onChangeUsername}
            className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
            placeholder="Username"
          />
          <input ref={this.passwordRef}
            type="password"
            value={password}
            onChange={onChangePassword}
            className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
            placeholder="Password"
            onKeyPress={onEnterKeyPress}
          />
          <button
            onClick={onSubmitForm}
            className="flex justify-center w-48 h-10 rounded bg-gray-900 text-white"
            onKeyPress={onEnterKeyPress}
          >{loadingSpinner ? <Loader type="Oval" color="white" width={20} height={20}/>:
              'Sign in'}</button>
          {errorMessage !== "" && errorMessage !== undefined ? (
            <span className="text-red-700 mt-2 w-48 text-sm text-center">
              {errorMessage}
            </span>
          ) : null}
        </form>
      </div>
    );
  }
}

export default SignInForm;