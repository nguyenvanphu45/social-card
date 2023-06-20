import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

// const composedEnhancers = composeWithDevTools()

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store
