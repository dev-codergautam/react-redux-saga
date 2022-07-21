import { takeEvery, put } from "redux-saga/effects";
import { GET_ALL_PRODUCTS } from "../redux/constant";

function* getProducts() {
  let data = yield fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  );
  console.log(data);
  data = yield data.json();
  console.log("action is called", data);
  yield put({ type: GET_ALL_PRODUCTS, data });
}

function* productSaga() {
  yield takeEvery(GET_ALL_PRODUCTS, getProducts);
}

export default productSaga;
