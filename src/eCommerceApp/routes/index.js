import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { E_COMMERCE_PRODUCTS_PATH } from "../constants/ProductPath";
import ProductPageRoute from "./ProductPageRoute";
import { getAccessToken } from "../../authentication/utils/StorageUtils";
import { SIGN_IN_PATH } from "../../authentication/constants/RoutePath";

export const ProductRoutes = () => {
  if(getAccessToken()['f5af9f51-07e6-4332-8f1a-c0c11c1e3434'] === '') {
    return <Route exact path={E_COMMERCE_PRODUCTS_PATH} component={ProductPageRoute}/>
  } else {
    return <Redirect to={SIGN_IN_PATH}/>
  }
}