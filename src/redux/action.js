import {
  GET_ALL_BRANDS,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_BRAND,
} from "./constant";

export const getProduct = () => {
  return {
    type: GET_ALL_PRODUCTS,
  };
};

export const getBrand = () => {
  return {
    type: GET_ALL_BRANDS,
  };
};

export const getProductByBrand = (data) => {
  return {
    type: GET_PRODUCT_BY_BRAND,
    data,
  };
};
