import React from 'react'

import '../../styles/tailwind.css'
import SignInForm from './SignInPage'

export default {
   component: SignInForm,
   title: 'SignInPage/SignInForm'
}

export const defaultView = () => <SignInForm />

export const DisplayUserNameErrorMessage = () => (
   <SignInForm
      password="Bhargav"
      username=""
      errorMessage="Please enter username "
   />
)

export const DisplayPasswordErrorMessage = () => (
   <SignInForm
      username="Bhargav"
      password=""
      errorMessage="Please enter password"
   />
)

export const DisplayLoading = () => (
   <SignInForm
      username="Bhargav"
      password="Bhargav"
      errorMessage=""
      loadingSpinner={true}
   />
)
