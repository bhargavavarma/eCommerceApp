import React from 'react'
import {Route} from 'react-router-dom'

import SignInPage from '../Components/SignInPage'

const authenticationRoutes = [
  <Route path='/ecommerce-store/sign-in'>
    <SignInPage />
  </Route>
]

export default authenticationRoutes