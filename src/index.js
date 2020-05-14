import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./Reducers"
import {createStore,applyMiddleware,compose} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store=createStore(persistedReducer,composeEnhancers(applyMiddleware(reduxThunk)));
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));




