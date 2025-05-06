import { createStore, createLogger } from "vuex";

import ai from "./ai";
import board from "./board";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    ai,
    board,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});