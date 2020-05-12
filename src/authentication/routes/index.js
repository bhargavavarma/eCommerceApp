import React from 'react';
import {Route} from 'react-router-dom';
import SignInRoute from "./SignInRoute";
import {SIGN_IN_PATH} from '../constants/RoutePath';

const authenticationRoutes = 
  <Route exact path={SIGN_IN_PATH} component={SignInRoute} />;

export default authenticationRoutes;