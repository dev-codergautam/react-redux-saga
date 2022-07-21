import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./../redux/rootReducer";
import createSagaMiddleware from "redux-saga";
import productSaga from "./productSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;
