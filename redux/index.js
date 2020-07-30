import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import {
  MODULE_NAME as themeModuleName,
  reducer as themeReducer,
} from "./theme";
import {
  MODULE_NAME as transactionModuleName,
  reducer as transactionReducer,
} from "./transaction";
import { AsyncStorage } from "react-native";


const config = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  [themeModuleName]: themeReducer,
  [transactionModuleName]: transactionReducer,
});

const rootPersistReducer = persistReducer(config, rootReducer);
const store = createStore(rootPersistReducer, composeWithDevTools(applyMiddleware(thunk)));


export const persistor = persistStore(store);
export default store;
