import { observable, action, computed } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import Product from '../Models/Product'

class ProductStore {
  
  @observable productList
  @observable getProductListAPIStatus
  @observable getProductListAPIError
  @observable sizeFilter
  @observable sortBy
  productsAPIService

  constructor(productsAPIService) {
    this.productsAPIService = productsAPIService
    this.init()
  }

  @action.bound
  init() {
    this.productList = []
    this.getProductListAPIStatus = API_INITIAL
    this.getProductListAPIError = null
    this.sizeFilter = []
    this.sortBy = "SELECT"
  }

  @action.bound
  getProductAPI() {
    const productPromise = this.productsAPIService.getProductsAPI()
    return bindPromiseWithOnSuccess(productPromise)
    .to(this.setGetProductListAPIStatus,this.setProductListResponse)
    .catch(this.setGetProductListAPIError)
  }

  @action.bound
  setProductListResponse(productsResponse) {
    productsResponse.map(eachProduct => 
      this.onAddProductToList(eachProduct))
  }

  @action.bound
  setGetProductListAPIError(error) {
    console.log('error',error)
    this.getProductListAPIError = error
  }

  @action.bound
  setGetProductListAPIStatus(apiStatus) {
    this.getProductListAPIStatus = apiStatus
  }

  @action.bound
  onAddProductToList(eachProduct) {
    const productObject=new Product(eachProduct)
    this.productList.push(productObject)
  }

  @action.bound
  onSelectSize(size) {
    this.sizeFilter.indexOf(size) === -1 ? 
      this.sizeFilter.push(size) : this.sizeFilter.remove(size)
  }

  @action.bound
  onselectedChange(sortBy){
    this.sortBy = sortBy
  }

  @action.bound
  getSearchProduct(userInput) {
    console.log(userInput)
  }

  @computed get sortedProduct() {
    let selectedOption = this.sortBy
    let filteredProducts = this.sortedAndFilteredProducts
    let product
    switch(selectedOption) {
      case 'SELECT':
        product = filteredProducts
        break;
      case 'ASCENDING':
        product = filteredProducts.sort((product1,product2) => product1.price - product2.price)
        break;
      case 'DESCENDING':
        product = filteredProducts.sort((product1,product2) => product2.price - product1.price)
        break;
    }
    return product
  }

  @computed get sortedAndFilteredProducts() {
    let selectedSizes = this.sizeFilter
    let filteredProducts = this.productList.filter(function(eachProduct) {
      if(selectedSizes.length === 0) {
        return true
      }
      else {
        let isSelectedSize = selectedSizes.find(item => 
          eachProduct.availableSizes.indexOf(item) !== -1)
        return isSelectedSize === undefined ? false : true
      }
    })
    return filteredProducts
  }

  @computed get totalNoOfProductsDisplayed() {
    return this.sortedAndFilteredProducts.length;
  }

  clearStore = () => {
    this.init()
  }
}

export default ProductStore;