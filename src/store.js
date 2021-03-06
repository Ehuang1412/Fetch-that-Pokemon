import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddelware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;