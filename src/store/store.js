import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from './slices/applicationSlice';
import createSagaMiddleware from 'redux-saga'
import routeApi from "./sagas/routeSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    applications: applicationSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)

});

saga.run(routeApi);

export default store;