import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";

// Redux Store
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer
  },
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat([cryptoApi.middleware])
});
