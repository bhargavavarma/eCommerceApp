import jsonData from '../../fixtures/getProductsResponse.json'
import CartStore from ".";

describe('should test cart store test cases',() => {

  it("should test initialising product store", () => {
    const cartStore = new CartStore()
    cartStore.cartProductList = [jsonData[0],jsonData[1]]
    expect(cartStore.cartProductList.length).toBe(2);
  });

  it('should test onAddToCart',()=> {
    const cartStore = new CartStore()
    const product1 = {
      productId : jsonData[0].id,
      printStyle : jsonData[0].style,
      title : jsonData[0].title,
      price : jsonData[0].price,
      currencyFormat : jsonData[0].currencyFormat,
      imageURL : jsonData[0].image
    }
    const product2 = {
      productId : jsonData[1].id,
      printStyle : jsonData[1].style,
      title : jsonData[1].title,
      price : jsonData[1].price,
      currencyFormat : jsonData[1].currencyFormat,
      imageURL : jsonData[1].image
    }

    cartStore.onClickAddToCart(product1)
    cartStore.onClickAddToCart(product2)
    console.log(cartStore.cartProductList)
    expect(cartStore.cartProductList.length).toBe(2)
  });
})