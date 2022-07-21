import {
  GET_ALL_BRANDS,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_BRAND,
} from "./constant";

export const productData = (data = [], action) => {
  if (action.type === GET_ALL_PRODUCTS && data.length > 0) {
    return [...action.data];
    // return data;
  } else {
    return data;
  }
};

export const brandData = (data = [], action) => {
  if (action.type === GET_ALL_BRANDS && data.length > 0) {
    return [...action.data];
  } else {
    return data;
  }
};

export const getProductByBrand = (data = [], action) => {
  if (action.type === GET_PRODUCT_BY_BRAND && data.length > 0) {
    return [...action.data];
  } else {
    return data;
  }
};
