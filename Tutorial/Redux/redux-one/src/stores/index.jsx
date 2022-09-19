import {configureStore} from "@reduxjs/toolkit";

import counterReducer from "./counter";
import siteReducer from "./site";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    site: siteReducer,
  },
});
