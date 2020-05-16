import React from "react";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";
import { withRouter } from "react-router-dom";

import { 
  E_COMMERCE_PRODUCTS_PATH
} from "../../../eCommerceApp/constants/ProductPath";
import SignInForm from "../../Components/SignInPage";

@inject("authStore")
@observer
class SignInRoute extends React.Component {
  @observable username = "";
  @observable password = "";
  @observable errorMessage = "";
  @observable isLoading = false;

  signInFormRef = React.createRef();

  @action.bound
  onChangeUsername(e) {
    this.username = e.target.value;
  }

  @action.bound
  onChangePassword(e) {
    this.password = e.target.value;
  }

  onEnterKeyPress = e => {
    if (e.key === "Enter") {
      this.onSubmitForm(e);
    }
  };

  onSignInSuccess = () => {
    const { history } = this.props;
    history.push(E_COMMERCE_PRODUCTS_PATH);
    this.isLoading = true;
  };

  onSignInFailure = () => {
    const { getUserSignInAPIError: apiError } = this.props.authStore;
    if (apiError !== null && apiError !== undefined) {
      this.errorMessage = apiError;
    }
  };

  onSubmitForm = async (e) => {
    const { userSignIn } = this.props.authStore;
    e.preventDefault();
    if (this.username === "" || this.username === undefined) {
      this.errorMessage = "Please enter username";
      this.signInFormRef.current.userNameRef.current.focus();
      this.isLoading = false;
      return;
    } else if (this.password === "" || this.password === undefined) {
      this.errorMessage = "Please enter password";
      this.signInFormRef.current.passwordRef.current.focus();
      this.isLoading = false;
      return;
    } else {
      this.errorMessage = "";
      this.isLoading = true;
      await userSignIn(
        {
          username: this.username,
          password: this.password
        },
        this.onSignInSuccess,
        this.onSignInFailure
      );
    }
  };

  render() {
    return (
      <SignInForm ref={this.signInFormRef}
        errorMessage={this.errorMessage}
        username={this.username}
        password={this.password}
        onChangeUsername={this.onChangeUsername}
        onChangePassword={this.onChangePassword}
        onSubmitForm={this.onSubmitForm}
        onEnterKeyPress={this.onEnterKeyPress}
        loadingSpinner={this.isLoading}
      />
    );
  }
}

export default withRouter(SignInRoute);