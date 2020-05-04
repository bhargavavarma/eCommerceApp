import {
  API_FETCHING,
  API_INITIAL,
  API_SUCCESS,
  API_FAILED
} from '@ib/api-constants';
import getProductsResponse from '../../fixtures/getProductsResponse.json';
import ProductStore from '.';
import ProductService from '../../services/ProductService/index.api';

describe('Product Store tests', () => {
  let productService;
  let productStore;

  beforeEach(() => {
    productService = new ProductService();
    productStore = new ProductStore(productService);
  });

  it("should test initialising product store", () => {
    expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
    expect(productStore.getProductListAPIError).toBe(null);
  });
  
  it("should test getProductAPI data fetching state", () => {

    const requestObject = {
      username: "test-user",
      password: "test-password"
    };

    const mockLoadingPromise = new Promise(function(resolve, reject) {});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockLoadingPromise);
    productService.getProductsAPI = mockSignInAPI;

    productStore.getProductAPI(requestObject);
    expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
  });

  it("should test getProductAPI success state", async () => {
    const requestObject = {
      username: "test-user",
      password: "test-password"
    };

    const mockSuccessPromise = new Promise(function(resolve, reject) {
      resolve(getProductsResponse);
    });

    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockSuccessPromise);
    productService.getProductsAPI = mockSignInAPI;

    await productStore.getProductAPI(requestObject);
    expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
  });

  it("should test getProductAPI failure state", async () => {
    const requestObject = {
      username: "test-user",
      password: "test-password"
    };

    const mockFailurePromise = new Promise(function(resolve, reject) {
      reject(new Error("error"));
    }).catch(() => {});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockFailurePromise);
    productService.getProductsAPI = mockSignInAPI;

    productStore = new ProductStore(productService);
    productStore.getProductAPI(requestObject);

    mockFailurePromise.catch(e => {
      expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
      expect(productStore.getProductListAPIError).toBe("error");
    });
  });
  
  it("should test user sign-out", () => {
    productStore.clearStore();
    expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
    expect(productStore.getProductListAPIError).toBe(null);
  });
})