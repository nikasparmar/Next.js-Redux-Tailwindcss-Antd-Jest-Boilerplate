import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import homePageReducer from './redux/reducer/homePageReducer';

const rootReducer = combineReducers({
  homePage: homePageReducer
});

export const initializeStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware())
  );
};
