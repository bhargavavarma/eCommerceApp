import { create } from "apisauce"
import { networkCallWithApisauce } from "../../../utils/APIUtils"
import { apiMethods } from "../../../constants/APIConstants"

class ProductService {
  api
  constructor() {
    this.api = create ({
      // baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/v1/products',
      baseURL: 'https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/',
    })
  }

  getProductsAPI() {
    return networkCallWithApisauce(
      this.api,
      // 'v1/products',
      'products?limit=4&offset=0',
      {},
      apiMethods.get
    )
  }
}

export default ProductService;