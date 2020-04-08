/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);
import Index from '../pages/index';

import { initialState } from '../redux/reducer/homePageReducer';


it('My Connected React-Redux Component', () => {
  let store;
  let tree;
  store = mockStore({ "homePage": initialState });
  tree = renderer.create(
    <Provider store={store}>
      <Index />
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});