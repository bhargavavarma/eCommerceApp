import React from "react";
import { observer } from "mobx-react";

@observer
class SignInForm extends React.Component {
  userNameRef = React.createRef();

  componentDidMount() {
    this.userNameRef.current.focus();
  }

  render() {
    const {
      apiStatus,
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
          <input
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
            apiStatus={apiStatus}
            onKeyPress={onEnterKeyPress}
          >{loadingSpinner ? <i aria-label='audio-loading' className='fa fa-circle-o-notch fa-spin'></i>:'Sign in'}</button>
          {errorMessage !== "" && errorMessage !== undefined ? (
            <span className="text-red-700 mt-2 w-48 text-sm text-center">
              Network Error
            </span>
          ) : null}
        </form>
      </div>
    );
  }
}

export default SignInForm;