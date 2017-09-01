import { createStore } from "redux";
import butterflyPinnerApp from "../reducers/userReducers";

let store = createStore(butterflyPinnerApp);

export default store;