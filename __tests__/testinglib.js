/* eslint-env jest */

import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);
import Index from '../pages/index';
import { initialState } from '../redux/reducer/homePageReducer';


test('renders deploy link', () => {
  let store, tree;
  store = mockStore({ "homePage": initialState });
  const { getByText } = render(
    <Provider store={store}>
      <Index />
    </Provider>
  );
  const title = getByText(
    "Hello Next.js"
  );
  expect(title).toBeInTheDocument();
});
