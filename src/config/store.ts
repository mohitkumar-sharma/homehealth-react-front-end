import { configureStore } from '@reduxjs/toolkit';
import { SharedStates, SharedSagas } from '@mohitkumar-sharma/homehealth-common-feature';

import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

/* boolean if environment is dev then true otherwise false */
const isDevEnvironment = process.env.NODE_ENV !== 'production';

// const persistedReducer = persistReducer(persistConfig, SharedStates.commonFeatureReducers);

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store:any = configureStore({
  reducer: persistReducer(persistConfig, SharedStates.commonFeatureReducers),
  middleware,
  devTools: isDevEnvironment
});

const persistor = persistStore(store);

/* run the saga middleware with root saga*/
sagaMiddleware.run(SharedSagas.default);

export { persistor, store };
