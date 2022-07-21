import { takeEvery, put } from "redux-saga/effects";
import { GET_ALL_BRANDS, GET_ALL_PRODUCTS } from "../redux/constant";

console.log("product saga");

function* getProducts() {
  let data = yield fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  );
  data = yield data.json();
  console.log("data", data);
  yield put({ type: GET_ALL_PRODUCTS, data });
}

function* getBrand() {
  let data = yield fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  );
  data = yield data.json();
  let brandarr = [];
  for (let i = 0; i < data.length; i++) {
    brandarr.push(data[i].brand);
  }
  const branddata = [...new Set(brandarr)];
  console.log("brand data", branddata);
  yield put({ type: GET_ALL_BRANDS, branddata });
}

function* productSaga() {
  yield takeEvery(GET_ALL_PRODUCTS, getProducts);
  yield takeEvery(GET_ALL_BRANDS, getBrand);
}

export default productSaga;
