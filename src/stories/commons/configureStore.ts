import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

export const configureStore = (rootReducer: any, preloadedState: any = {}, thunkExtraArgument?: object) => {
  // pass an extra argument to dispatch action
  const thunkMiddleware = thunkExtraArgument
    ? thunk.withExtraArgument(thunkExtraArgument)
    : thunk;

  return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunkMiddleware)
  );
};
