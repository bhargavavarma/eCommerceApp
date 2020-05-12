import ProductService from '../services/ProductService/index.api'
import ProductStore from './ProductStore/index'
import CartStore from './CartStore/index'

const productService = new ProductService()
const productStore = new ProductStore(productService)
const cartStore = new CartStore()

export default { productStore, cartStore }
