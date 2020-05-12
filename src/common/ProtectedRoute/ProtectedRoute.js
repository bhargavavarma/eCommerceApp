import React from 'react';
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = (props) => {
  const {component, ...other} = props
  if(isLoggedIn) {
    <Route compoent={Component} {...other} /> 
  }
  else {
    return <Redirect to={E_COMMERCE_STORES_LOGIN} />
  }
}