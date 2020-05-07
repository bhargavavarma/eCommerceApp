import jsonProducts from '../fixtures/getProductsResponse.json';

let products = [...jsonProducts]
const ascendingList = products.sort((product1,product2) => product1.price - product2.price)
const descendingList = jsonProducts.sort((product1,product2) => product2.price - product1.price)

export {
  ascendingList,
  descendingList
}